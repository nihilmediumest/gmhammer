// ===================================================================================
// --- GUAMAHAMMER MODULAR ARMY BUILDER - CORE ENGINE (main.js) ---
// ===================================================================================
// Last Updated: 2025-10-04 @ 16:45 - Patched generateDisplayOptions to show summaries for standard options.
// This file is army-agnostic. It contains all the generic logic to run the application.
// It dynamically loads army data and rules based on user selection.

import { AVAILABLE_ARMIES, loadArmyData, CHAOS_FACTIONS } from './ejercitos.js'; // <--12-10-25 MODIFIED IMPORT
import { generatePrintView } from './print.js';
import { validateArmy } from './validation.js';
import { resolveFocSlots, processUnitRules, processGlobalRules } from './rulesEngine.js';
import * as storage from './storage.js';


// --- GLOBAL STATE ---
let armyList = [];
let nextId = 0;
let dom = {};
let currentArmyData = null;
let editingUnitId = null;
let generalId = null;
let tempSelections = {};
let tempManualEntry = {};
let mainHostFaction = null; // For Chaos Host system
let chaosHostData = {}; // Stores data for all loaded Chaos factions
let validationMode = 'restringido'; // 'legal' or 'restricted'
// --- INITIALIZATION ---
// Replace your DOMContentLoaded event with this:
function initializeApp() {
    console.log("Guamahammer Modular Engine Initializing...");

    // Check if modal elements exist, if not retry after a short delay
    if (!document.getElementById('modal-close-btn')) {
        console.log('Modal elements not ready, retrying...');
        setTimeout(initializeApp, 100);
        return;
    }

    // Initialize DOM elements
    dom = {
        loadingOverlay: document.getElementById('loading-overlay'),
        armySelector: document.getElementById('army-selector'),
        battlePointsInput: document.getElementById('battle-points-input'),
        spentPointsEl: document.getElementById('spent-points'),
        availablePointsEl: document.getElementById('available-points'),
        focSummaryEl: document.getElementById('foc-summary'),
        hostSummaryEl: document.getElementById('host-summary'),
        validationPopupContainer: document.getElementById('validation-popup-container'),
        unitSelector: document.getElementById('unit-selector'),
        unitWarningArea: document.getElementById('unit-warning-area'),
        configArea: document.getElementById('config-area'),
        configSubtotalEl: document.getElementById('config-subtotal'),
        addToListBtn: document.getElementById('add-to-list-btn'),
        armyListContainer: document.getElementById('army-list-container'),
        armyListNameInput: document.getElementById('army-list-name'),
        printBtn: document.getElementById('print-btn'),
        newListBtn: document.getElementById('new-list-btn'),
        saveFileBtn: document.getElementById('save-file-btn'),
        loadFileLabel: document.querySelector('label[for="load-file-input"]'),
        loadFileInput: document.getElementById('load-file-input'),
        validationModeContainer: document.getElementById('validation-mode-container'),
        validationModeToggle: document.getElementById('validation-mode-toggle'),
        // Modal elements
        modal: document.getElementById('selection-modal'),
        modalTitle: document.getElementById('modal-title'),
        modalContent: document.getElementById('modal-content'),
        modalFooter: document.getElementById('modal-stats-footer'),
        modalConfirmBtn: document.getElementById('modal-confirm-btn'),
        modalCloseBtn: document.getElementById('modal-close-btn')
    };

    console.log('Modal close button found:', !!dom.modalCloseBtn);

    // Rest of initialization...
    if (dom.validationModeToggle) {
        dom.validationModeToggle.checked = true;
    }

    populateArmySelector();
    addEventListeners();

    const savedState = storage.loadStateFromLocalStorage();
    if (savedState) {
        if (confirm("Se encontró una sesión anterior. ¿Deseas restaurarla?")) {
            restoreState(savedState);
        } else {
            storage.clearLocalStorage();
        }
    }

    if (dom.loadingOverlay) {
        dom.loadingOverlay.classList.add('hidden');
    }
}
// Add this after your DOM initialization
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
            mutation.removedNodes.forEach((node) => {
                if (node.id === 'modal-close-btn' || node.querySelector && node.querySelector('#modal-close-btn')) {
                    console.warn('Modal close button was removed from DOM!');
                }
            });
        }
    });
});

// Start observing
observer.observe(document.body, {
    childList: true,
    subtree: true
});
// Start the app
document.addEventListener('DOMContentLoaded', initializeApp);

// ===================================================================================
// --- SAVE, LOAD, AND STATE MANAGEMENT ---
// ===================================================================================

function getCurrentAppState() {
    return {
        armyList: armyList,
        nextId: nextId,
        armyId: currentArmyData?.FACTION_ID || null,
        currentArmyData: currentArmyData, // <-- THIS IS THE FIX
        battlePoints: parseInt(dom.battlePointsInput.value),
        armyListName: dom.armyListNameInput.value,
        generalId: generalId,
    };
}

async function restoreState(state) {
    if (!state || !state.armyId) {
        alert("El archivo de guardado es inválido o está corrupto.");
        return;
    }
    
    dom.loadingOverlay.classList.remove('hidden');

    await selectArmy(state.armyId);

    armyList = state.armyList || [];
    nextId = state.nextId || (armyList.length > 0 ? Math.max(...armyList.map(u => u.id)) + 1 : 0);
    generalId = state.generalId || null;
    dom.battlePointsInput.value = state.battlePoints || 2000;
    dom.armyListNameInput.value = state.armyListName || '';

    // FIX: Clean up any duplicate manual units when restoring state
    cleanupDuplicateManualUnits();

    console.log("State restored successfully.");

    cancelEdit();
    populateUnitSelector();
    renderArmyList();
    updateMasterUI();

    dom.loadingOverlay.classList.add('hidden');
}

// ===================================================================================
// --- CENTRAL UPDATE & RENDER CYCLE ---
// ===================================================================================
// NEW HELPER FUNCTION TO main.js -12-10-25
// REPLACE the old isUnitSelectionAllowed function with this new version
function isUnitSelectionAllowed(unitData) {
    const unitName = unitData.name;
    const rules = currentArmyData?.ARMY_RULESET?.validationRules;

    // If there are no rules, or no rules apply, the unit is allowed.
    if (!rules || rules.length === 0) {
        return true;
    }

    const battlePoints = parseInt(dom.battlePointsInput.value, 10);

    // Check all rules. If any rule returns 'false', the unit is not allowed.
    for (const rule of rules) {
        const params = rule.params || rule; // Handle both rule structures

        switch (rule.type) {
            case 'unitLimit': {
                if (params.unitName === unitName) {
                    const count = armyList.filter(u => u.name === unitName).length;
                    if (count >= params.max) {
                        console.log(`RESTRICTED: '${unitName}' failed unitLimit rule (max: ${params.max})`);
                        return false;
                    }
                }
                break;
            }

            case 'conditionalUnitLimit': {
                if (params.unitName === unitName) {
                    const limit = battlePoints >= params.pointsThreshold ? params.maxIfAbove : params.maxIfBelow;
                    const count = armyList.filter(u => u.name === unitName).length;
                    if (count >= limit) {
                         console.log(`RESTRICTED: '${unitName}' failed conditionalUnitLimit rule (max: ${limit} at ${battlePoints}pts)`);
                        return false;
                    }
                }
                break;
            }

            case 'unitRatio': {
                if (params.secondaryUnit === unitName) {
                    const primaryCount = armyList.filter(u => u.name === params.primaryUnit).length;
                    const secondaryCount = armyList.filter(u => u.name === unitName).length;
                    // We check if adding one more secondary unit would break the rule
                    if ((secondaryCount + 1) > (primaryCount * params.maxSecondaryPerPrimary)) {
                        console.log(`RESTRICTED: '${unitName}' failed unitRatio rule against '${params.primaryUnit}'`);
                        return false;
                    }
                }
                break;
            }
            
            // This section can be expanded with more 'case' statements for custom rules
            // that act as simple limiters. For example:
            case 'custom': {
                if (params.id === 'validateNurgletesRequirement' && unitName === 'Nurgletes') {
                     const plaguebearerCount = armyList.filter(u => u.name === 'Portadores de Plaga de Nurgle').length;
                     const nurglingCount = armyList.filter(u => u.name === 'Nurgletes').length;
                     if ((nurglingCount + 1) > plaguebearerCount) {
                         console.log(`RESTRICTED: '${unitName}' failed custom rule '${params.id}'`);
                         return false;
                     }
                }
                break;
            }
        }
    }

    // If no rule returned false, the selection is allowed.
    return true;
}

function _preserveManualEntryState() {
    const manualSections = document.querySelectorAll('#dynamic-components-area .config-section');
    
    // Reset tempManualEntry to object format
    tempManualEntry = {};
    
    manualSections.forEach(section => {
        const sourceSkill = section.querySelector('.manual-unit-source').value;
        const nameInput = section.querySelector('.manual-unit-name');
        const pointsInput = section.querySelector('.manual-unit-points');
        const detailsInput = section.querySelector('.manual-unit-details');
        const allyArmySelect = section.querySelector('.manual-unit-ally-army');

        if (nameInput && pointsInput) {
            tempManualEntry[sourceSkill] = {
                name: nameInput.value,
                points: pointsInput.value,
                details: detailsInput ? detailsInput.value : '',
                allyArmyId: allyArmySelect ? allyArmySelect.value : '',
                sourceSkill: sourceSkill
            };
        }
    });
}

// ===================================================================================
// --- RECRUITMENT PANEL & CONFIGURATION ---
// ===================================================================================

function _getAllManualEntries() {
    const entries = [];
    
    // If tempManualEntry is already populated (from _preserveManualEntryState), use it
    if (typeof tempManualEntry === 'object' && Object.keys(tempManualEntry).length > 0) {
        Object.values(tempManualEntry).forEach(entry => {
            if (entry.name && entry.points) {
                entries.push(entry);
            }
        });
    } else {
        // Fallback: scan the DOM
        const manualSections = document.querySelectorAll('#dynamic-components-area .config-section');
        
        manualSections.forEach(section => {
            const sourceSkill = section.querySelector('.manual-unit-source').value;
            const nameInput = section.querySelector('.manual-unit-name');
            const pointsInput = section.querySelector('.manual-unit-points');
            const detailsInput = section.querySelector('.manual-unit-details');
            const allyArmySelect = section.querySelector('.manual-unit-ally-army');

            if (nameInput && pointsInput) {
                entries.push({
                    name: nameInput.value,
                    points: pointsInput.value,
                    details: detailsInput ? detailsInput.value : '',
                    allyArmyId: allyArmySelect ? allyArmySelect.value : '',
                    sourceSkill: sourceSkill
                });
            }
        });
    }
    
    return entries;
}

function createIndependentManualUnit(manualData, parentId) {
    // Determine FOC based on source skill
    let foc = 'Special'; // Default for Buenos Contactos
    if (manualData.sourceSkill === 'Creyente Devoto') {
        foc = 'Hero';
    }
    
    // Check if this manual unit already exists to prevent duplicates
    const existingManualUnit = armyList.find(unit => 
        unit.isManual && 
        unit.createdBy === parentId && 
        unit.name === manualData.name &&
        unit.points === parseInt(manualData.points) &&
        unit.foc === foc
    );
    
    if (existingManualUnit) {
        console.log(`Manual unit already exists: ${manualData.name} for parent ${parentId}`);
        return existingManualUnit;
    }
    
    const newManualUnit = {
        id: nextId++,
        name: manualData.name,
        points: parseInt(manualData.points) || 0,
        displayOptions: [
            `Vía: ${manualData.sourceSkill}`,
            ...(manualData.details ? [manualData.details] : [])
        ],
        isManual: true,
        createdBy: parentId,
        faction: manualData.allyArmyId || currentArmyData?.FACTION_ID,
        foc: foc, // Set the FOC explicitly
        resolvedFoc: foc, // Also set resolvedFoc to ensure proper categorization
        selections: {} // Empty selections for manual units
    };
    
    armyList.push(newManualUnit);
    console.log(`Created manual unit: ${manualData.name} (${newManualUnit.points} pts, FOC: ${foc}) for parent ${parentId}`);
    return newManualUnit;
}

// NEW: Improved cleanup for manual units
function _cleanupManualUnits(parentId) {
    armyList = armyList.filter(unit => unit.createdBy !== parentId);
}

// NEW: Get manual units for parent
function _getManualUnitsForParent(parentId) {
    return armyList.filter(unit => {
        // Check if this is a manual unit AND created by the specified parent
        if (!unit.isManual || unit.createdBy !== parentId) return false;
        
        // Additional validation to ensure it's a proper manual unit
        const hasViaOption = unit.displayOptions && 
                            unit.displayOptions.some(opt => opt.startsWith('Vía: '));
        return hasViaOption;
    });
}

function processUiActions(actions) {
    const dynamicArea = document.getElementById('dynamic-components-area');
    if (!dynamicArea) {
        if (!dom.configArea) {
            console.error('configArea is not available');
            return;
        }
        const newDynamicArea = document.createElement('div');
        newDynamicArea.id = 'dynamic-components-area';
        dom.configArea.appendChild(newDynamicArea);
    }

    if (!actions || actions.length === 0) return;

    const areaToUse = dynamicArea || document.getElementById('dynamic-components-area');
    if (!areaToUse) return;

    areaToUse.innerHTML = ''; // Clear previous content

    actions.forEach(action => {
        if (action.type !== 'RENDER_COMPONENT' || action.payload.componentName !== 'ManualUnitEntry') return;
        
        const props = action.payload.props;
        
        // Find existing manual entry data for this specific source skill
        const existingEntry = tempManualEntry[props.sourceSkill] || {};
        
        let customControls = '';
        if (props.type === 'alliedUnit') {
            const buildOptions = (armies, category) => Object.entries(armies)
                .map(([name, id]) => `<option value="${id}" ${existingEntry.allyArmyId === id ? 'selected' : ''}>${name} (${category})</option>`)
                .join('');
            
            customControls = `
                <select id="manual-unit-ally-army-${props.sourceSkill.replace(/\s/g, '')}" class="manual-unit-ally-army bg-gray-900 text-white p-1 rounded w-full border border-gray-600 mb-2">
                    <option value="">-- Elige Ejército Aliado --</option>
                    <optgroup label="Unidad Básica">
                        ${buildOptions(props.coreAllies, 'Básica')}
                    </optgroup>
                    <optgroup label="Unidad Especial">
                        ${buildOptions(props.specialAllies, 'Especial')}
                    </optgroup>
                </select>
            `;
        }
        
        areaToUse.innerHTML += `
            <div class="config-section p-3 mt-4 rounded-md bg-gray-700/50 border-l-2 border-yellow-500" data-source-skill="${props.sourceSkill}">
                <label class="font-bold text-yellow-400">${props.sourceSkill}</label>
                <input type="hidden" class="manual-unit-source" value="${props.sourceSkill}">
                ${customControls}
                <div class="space-y-2">
                    <input type="text" class="manual-unit-name bg-gray-900 text-white p-1 rounded w-full border border-gray-600" placeholder="Nombre de la Unidad/Personaje" value="${existingEntry.name || ''}">
                    <input type="number" class="manual-unit-points bg-gray-900 text-white p-1 rounded w-full border border-gray-600" placeholder="Coste en Puntos" value="${existingEntry.points || ''}">
                    <textarea class="manual-unit-details bg-gray-900 text-white p-1 rounded w-full border border-gray-600" rows="2" placeholder="Equipo y Reglas (para la impresión)">${existingEntry.details || ''}</textarea>
                </div>
            </div>
        `;
    });
}
function renderConfigOptions(unitName, baseUnit, configuredUnit, originalUnit = null) {
    const selections = configuredUnit.selections || {};
    let html = '';

    const currentLabel = configuredUnit.label !== undefined ? configuredUnit.label : (originalUnit?.label || '');
    html += `<div class="config-section p-3 rounded-md bg-gray-700/50"><label for="config-label" class="font-bold text-gray-300">¡Ponle un nombre! (opcional)</label><div class="mt-2"><input type="text" id="config-label" class="bg-gray-900 text-white p-1 rounded w-full border border-gray-600" value="${currentLabel}" placeholder="Ej: 'Guerreros del Juicio Final'"></div></div>`;

    if (baseUnit.composition) {
        const primaryQty = configuredUnit.qty?.primary || baseUnit.min.primary;
        const secondaryQty = configuredUnit.qty?.secondary || baseUnit.min.secondary;
        html += `<div class="config-section p-3 rounded-md bg-gray-700/50">
                    <label class="font-bold text-gray-300">Tamaño de Unidad</label>
                    <p class="text-xs text-gray-400 mt-1">${baseUnit.composition.ruleText}</p>
                    <div class="grid grid-cols-2 gap-4 mt-2">
                        <div>
                            <label for="config-qty-primary" class="block text-xs font-medium text-gray-400 mb-1">${baseUnit.composition.primary.name} (Min: ${baseUnit.min.primary}):</label>
                            <input type="number" id="config-qty-primary" value="${primaryQty}" min="${baseUnit.min.primary}" max="${baseUnit.max.primary}" class="config-input bg-gray-900 text-white border text-center border-gray-600 rounded-md px-2 py-1 text-sm focus:ring-yellow-500 focus:border-yellow-500">
                        </div>
                        <div>
                            <label for="config-qty-secondary" class="block text-xs font-medium text-gray-400 mb-1">${baseUnit.composition.secondary.name} (Min: ${baseUnit.min.secondary}):</label>
                            <input type="number" id="config-qty-secondary" value="${secondaryQty}" min="${baseUnit.min.secondary}" max="${baseUnit.max.secondary}" class="config-input bg-gray-900 text-white border text-center border-gray-600 rounded-md px-2 py-1 text-sm focus:ring-yellow-500 focus:border-yellow-500">
                        </div>
                    </div>
                 </div>`;
    } else if (baseUnit.points > 0) {
        const currentQty = configuredUnit.qty || baseUnit.min || 1;
        html += `<div class="config-section p-3 rounded-md bg-gray-700/50"><label for="config-qty" class="font-bold text-gray-300">Tamaño de la unidad (Min: ${baseUnit.min || 1})</label><div class="flex items-center gap-2 mt-2"><input type="number" id="config-qty" value="${currentQty}" min="${baseUnit.min || 1}" max="${baseUnit.max || 100}" class="config-input bg-gray-900 text-white p-1 rounded w-20 text-center border border-gray-600"><span class="text-sm text-gray-400">/ Max: ${baseUnit.max || 100}</span></div></div>`;
    }

    // --- START: NEW FOCOS LOGIC ---
    // This block reads the `focos` object from the unit data and creates radio buttons.
    if (baseUnit.focos) {
        const selectedFoco = selections.foco || 'none';
        html += `<div class="config-section p-3 rounded-md bg-gray-700/50">
                    <h4 class="font-bold text-gray-300 mb-2">Focos de Poder</h4>
                    <div class="space-y-2 text-sm">
                        <div>
                            <label class="flex items-center"><input type="radio" name="config-foco" value="none" class="config-input mr-2" ${selectedFoco === 'none' ? 'checked' : ''}> Ninguno</label>
                        </div>
                        <div>
                            <label class="flex items-center"><input type="radio" name="config-foco" value="menor" class="config-input mr-2" ${selectedFoco === 'menor' ? 'checked' : ''}> Foco Menor (+${baseUnit.focos.menor.p} pts/min)</label>
                            <div class="text-xs text-gray-400 ml-6">${baseUnit.focos.menor.summary}</div>
                        </div>
                        <div>
                            <label class="flex items-center"><input type="radio" name="config-foco" value="mayor" class="config-input mr-2" ${selectedFoco === 'mayor' ? 'checked' : ''}> Foco Mayor (+${baseUnit.focos.mayor.p} pts/min)</label>
                            <div class="text-xs text-gray-400 ml-6">${baseUnit.focos.mayor.summary}</div>
                        </div>
                    </div>
                 </div>`;
    }
    // --- END: NEW FOCOS LOGIC ---

    if (baseUnit.specialAddons && baseUnit.specialAddons.length > 0) {
        html += '<div class="config-section p-3 rounded-md bg-gray-700/50"><h4 class="font-bold text-gray-300 mb-2">Destacamentos de Armas</h4><div class="space-y-3">';
        baseUnit.specialAddons.forEach(addon => {
            const currentQty = selections.specialAddons?.[addon.name] || 0;
            html += `<div>
                        <label for="addon-${addon.name.replace(/\s|\W/g, '')}" class="flex items-center justify-between text-sm">
                            <span>${addon.name} (+${addon.points} pts)</span>
                            <input type="number" id="addon-${addon.name.replace(/\s|\W/g, '')}" data-name="${addon.name}" value="${currentQty}" min="0" max="${addon.max}" class="special-addon-input bg-gray-900 text-white p-1 rounded w-16 text-center border border-gray-600">
                        </label>
                    </div>`;
        });
        html += '</div></div>';
    }
// Add this to renderConfigOptions function, after specialAddons section
if (baseUnit.mounts && baseUnit.mounts.length > 0) {
    const selectedMount = tempSelections.mount?.name || '';
    let mountOptionsHtml = '<option value="">-- Sin Montura --</option>';
    baseUnit.mounts.forEach(mountName => {
        const mountData = currentArmyData.mountsDB[mountName];
        if (mountData) {
            mountOptionsHtml += `<option value="${mountName}" ${selectedMount === mountName ? 'selected' : ''}>${mountName} (+${mountData.points} pts)</option>`;
        }
    });
    html += `<div class="config-section p-3 rounded-md bg-gray-700/50"><label for="mount-selector" class="font-bold text-gray-300">Montura</label><div class="mt-2"><select id="mount-selector" class="config-input bg-gray-900 text-white p-2 rounded w-full border border-gray-600">${mountOptionsHtml}</select></div></div>`;
}
    // Find this part in renderConfigOptions...
    if (baseUnit.options && baseUnit.options.length > 0) {
        html += '<div class="config-section p-3 rounded-md bg-gray-700/50"><h4 class="font-bold text-gray-300 mb-2">Opciones</h4><div class="space-y-2">';
        
        // --- START: REPLACEMENT LOGIC ---
        baseUnit.options.forEach(opt => {
            const isChecked = selections.options?.includes(opt.n);
            const summary = opt.summary ? `<div class="text-xs text-gray-400 ml-6">${opt.summary}</div>` : '';
            const optionId = `opt-${opt.n.replace(/\s|\W/g, '')}`;

           if (opt.exclusiveGroup) {
                // Render as a radio button if it's part of an exclusive group
                const groupName = `config-exclusive-${opt.exclusiveGroup}`;
                html += `<div>
                            <label class="flex items-center text-sm">
                                <input type="radio" id="${optionId}" name="${groupName}" data-name="${opt.n}" class="config-input is-exclusive-option mr-2" ${isChecked ? 'checked' : ''}> 
                                ${opt.n} (${opt.p} pts)
                            </label>
                            ${summary}
                         </div>`;
            } else {
                // Render as a standard checkbox otherwise
                html += `<div>
                            <label class="flex items-center text-sm">
                                <input type="checkbox" id="${optionId}" data-name="${opt.n}" class="config-input mr-2" ${isChecked ? 'checked' : ''}> 
                                ${opt.n} (${opt.p} pts)
                            </label>
                            ${summary}
                         </div>`;
            }
        });
        // --- END: REPLACEMENT LOGIC ---
        
        html += '</div></div>';
    }

    if (baseUnit.command) {
        html += '<div class="config-section p-3 rounded-md bg-gray-700/50"><h4 class="font-bold text-gray-300 mb-2">Grupo de Mando</h4><div class="space-y-2">';
        const cmd = baseUnit.command;
        const cmdSelections = selections.command || {};

        if (cmd.c) html += `<div><label class="flex items-center text-sm"><input type="checkbox" id="config-cmd-c" class="config-input mr-2" ${cmdSelections.c ? 'checked' : ''}> ${cmd.c.n} (${cmd.c.p} pts)</label></div>`;
        if (cmd.s) html += `<div><label class="flex items-center text-sm"><input type="checkbox" id="config-cmd-s" class="config-input mr-2" ${cmdSelections.s ? 'checked' : ''}> ${cmd.s.n} (${cmd.s.p} pts)</label></div>`;
        
        if (cmd.m) {
            const musician = cmd.m;
            const isMusicianChecked = tempSelections.command?.m;
            
            html += `<div><label class="flex items-center text-sm"><input type="checkbox" id="config-cmd-m" data-name="${musician.n}" class="config-input mr-2" ${isMusicianChecked ? 'checked' : ''}> ${musician.n} (${musician.p} pts)</label></div>`;

            if (musician.upgrade) {
                const upgrade = musician.upgrade;
                const isUpgradeChecked = tempSelections.commandUpgrades && tempSelections.commandUpgrades[upgrade.n];
                const upgradeDisabled = !isMusicianChecked;
                
                html += `
                    <div class="ml-6">
                        <label class="flex items-center text-sm ${upgradeDisabled ? 'text-gray-500' : ''}">
                            <input type="checkbox" id="config-cmd-m-upgrade" data-name="${upgrade.n}" data-points="${upgrade.p}" class="config-input mr-2" 
                                ${isUpgradeChecked ? 'checked' : ''} ${upgradeDisabled ? 'disabled' : ''}>
                            ${upgrade.n} (+${upgrade.p} pts)
                        </label>
                        <div class="text-xs text-gray-400 ml-6 italic">${upgrade.summary}</div>
                    </div>`;
            }
        }
        html += '</div></div>';
    }
    // --- BATTLE STANDARD BEARER CHECKBOX ---
if (baseUnit.battleStandard) {
    const isBSBChecked = tempSelections.battleStandard?.selected || false;
    html += `<div class="config-section p-3 rounded-md bg-gray-700/50">
                <label class="flex items-center text-sm">
                    <input type="checkbox" id="config-bsb" class="config-input mr-2" ${isBSBChecked ? 'checked' : ''}>
                    ${baseUnit.battleStandard.name} (${baseUnit.battleStandard.cost} pts)
                </label>
             </div>`;
}
// --- Section generating special option buttons ---
    let specialOptionsHtml = '';
    const unitFactionData = mainHostFaction ? chaosHostData[baseUnit.faction] : currentArmyData;
   // render modal buttons
   if (baseUnit.maxMagicItems > 0) {
    const magicItemsLabel = unitFactionData.magicItemsLabel || "Objetos Mágicos";
    specialOptionsHtml += `<button class="open-modal-btn w-full text-left p-2 rounded bg-indigo-600 hover:bg-indigo-700" data-type="magicItems">${magicItemsLabel} (${selections.magicItems?.points || 0} pts)</button>`;
    } 
    if (selections.command?.c && baseUnit.champItems > 0) { specialOptionsHtml += `<button class="open-modal-btn w-full text-left p-2 rounded bg-indigo-600 hover:bg-indigo-700" data-type="champItems">Objetos de Campeón (${selections.champItems?.points || 0} pts)</button>`; }
    if (selections.command?.c && baseUnit.champSkills) { specialOptionsHtml += `<button class="open-modal-btn w-full text-left p-2 rounded bg-purple-600 hover:bg-purple-700" data-type="regalos">Regalos Demoníacos (Campeón) (${selections.regalos?.points || 0} pts)</button>`; }
   // --- START: CONSOLIDATED & CORRECTED BANNER LOGIC ---
// This specifically checks for the Daemon Icon property and renders the correct button.
    if (selections.command?.s && baseUnit.command?.s?.allowIcon) { specialOptionsHtml += `<button class="open-modal-btn w-full text-left p-2 rounded bg-indigo-600 hover:bg-indigo-700" data-type="iconos">Icono Demoníaco (${selections.iconos?.points || 0} pts)</button>`; }
    // --- END: ADD THIS LINE ---
    // 1. Logic for "Estandarte Mágico".
    // This button appears if a unit has the ability (`baseUnit.magicBanner > 0`) AND:
    //    a) It's a regular unit with its standard bearer checkbox ticked (`selections.command?.s`).
    //    b) It's a character (like a Mercenary Captain) who gets the ability from a skill.
    const isCharacter = baseUnit.foc === 'Lord' || baseUnit.foc === 'Hero';
    if (baseUnit.magicBanner > 0 && (selections.command?.s || isCharacter)) {
        specialOptionsHtml += `<button class="open-modal-btn w-full text-left p-2 rounded bg-indigo-600 hover:bg-indigo-700" data-type="magicBanner">Estandarte Mágico (${selections.magicBanner?.points || 0} pts)</button>`;
    }
   // 2. Logic for "Estandarte de Batalla" (BSB).
    // This is a separate mechanic and gets its own independent check.
    if (selections.battleStandard?.selected) {
        specialOptionsHtml += `<button class="open-modal-btn w-full text-left p-2 rounded bg-indigo-600 hover:bg-indigo-700" data-type="battleStandardBanner">Estandarte de Batalla (${selections.battleStandardBanner?.points || 0} pts)</button>`;
    }
    
    if (baseUnit.maxSkills && unitFactionData?.armySkillsDB && Object.keys(unitFactionData.armySkillsDB).length > 0) {
        const skillButtonLabel = (baseUnit.faction === 'dcaos') ? 'Regalos Demoníacos' : (unitFactionData.armySkillsLabel || "Habilidades");
        specialOptionsHtml += `<button class="open-modal-btn w-full text-left p-2 rounded bg-purple-600 hover:bg-purple-700" data-type="armySkills">${skillButtonLabel} (${selections.armySkills?.points || 0} pts)</button>`; 
    }

    if (specialOptionsHtml) {
        html += `<div class="config-section p-3 rounded-md bg-gray-700/50"><div class="space-y-2">${specialOptionsHtml}</div></div>`;
    }

    dom.configArea.innerHTML = html;
}

function getConfigurationFromPanel() {
    const unitName = dom.unitSelector.value;
    if (!unitName) return null;

    const baseUnitData = getUnitDataByName(unitName);
    if (!baseUnitData) return null;

    // This constructs a complete unit object using the temporary selections state.
    const configuredUnit = {
        name: unitName,
        faction: baseUnitData.faction,
        label: tempSelections.label || '',
        qty: tempSelections.qty === undefined ? (baseUnitData.min || 1) : tempSelections.qty,
        selections: JSON.parse(JSON.stringify(tempSelections)), // Use a deep copy
        unitData: baseUnitData
    };

    return configuredUnit;
}

// REPLACE now special addons units shows fix 11-10-25

function updateTempSelectionsFromPanel() {
    if (!dom.unitSelector.value) return;
    
    const unitName = dom.unitSelector.value;
    const baseUnit = getUnitDataByName(unitName); // ADD THIS LINE
    
    // Corrected "dom.giconfigArea" to "dom.configArea"
    const primaryQtyInput = dom.configArea.querySelector('#config-qty-primary');
    // --- END OF FIX ---
    const qtyInput = dom.configArea.querySelector('#config-qty');
    const labelInput = dom.configArea.querySelector('#config-label');
    
    // Make sure we start from a clean slate for options
    tempSelections.options = [];
    // --- START: REPLACEMENT LOGIC ---
    // This single query now correctly finds ALL selected options, whether they are checkboxes or radio buttons.
    const selectedOptions = dom.configArea.querySelectorAll('input[type="checkbox"][data-name]:checked, input[type="radio"][data-name]:checked');
    
    if (selectedOptions.length > 0) {
        tempSelections.options = Array.from(selectedOptions).map(input => input.dataset.name);
    }
    // Read command group selections
    tempSelections.command = {
        c: dom.configArea.querySelector('#config-cmd-c')?.checked || false,
        s: dom.configArea.querySelector('#config-cmd-s')?.checked || false,
        m: dom.configArea.querySelector('#config-cmd-m')?.checked || false,
    };

    // --- LOGIC FOR MUSICIAN UPGRADE ---
    const musicianUpgradeCheckbox = dom.configArea.querySelector('#config-cmd-m-upgrade');
    
    // Ensure the commandUpgrades object exists
    if (!tempSelections.commandUpgrades) {
        tempSelections.commandUpgrades = {};
    }
    
    if (musicianUpgradeCheckbox) {
        const upgradeName = musicianUpgradeCheckbox.dataset.name;
        // If the main musician is checked AND the upgrade is checked, save it.
        if (tempSelections.command.m && musicianUpgradeCheckbox.checked) {
            tempSelections.commandUpgrades[upgradeName] = true;
        } else {
            // Otherwise, ensure it's not selected.
            delete tempSelections.commandUpgrades[upgradeName];
        }
    }

    // Read Battle Standard Bearer selection
    const bsbCheckbox = dom.configArea.querySelector('#config-bsb');
    if (bsbCheckbox) {
        if (!tempSelections.battleStandard) tempSelections.battleStandard = {};
        tempSelections.battleStandard.selected = bsbCheckbox.checked;
    }

    // Read the unit's custom label/nickname
    if (labelInput) {
        tempSelections.label = labelInput.value;
    }
    
    // Read quantity for standard or composition units
    if (primaryQtyInput) {
        const secondaryQtyInput = dom.configArea.querySelector('#config-qty-secondary');
        tempSelections.qty = {
            primary: parseInt(primaryQtyInput.value, 10) || 0,
            secondary: parseInt(secondaryQtyInput.value, 10) || 0,
        };
    } else if (qtyInput) {
        tempSelections.qty = parseInt(qtyInput.value, 10) || 1;
    }
    
    // --- SPECIAL ADDONS ---
    const addonInputs = dom.configArea.querySelectorAll('.special-addon-input');
    if (addonInputs.length > 0) {
        if (!tempSelections.specialAddons) tempSelections.specialAddons = {};
        addonInputs.forEach(input => {
            tempSelections.specialAddons[input.dataset.name] = parseInt(input.value) || 0;
        });
    }
    
    // --- FOCOS LOGIC ---
    const focoRadio = dom.configArea.querySelector('input[name="config-foco"]:checked');
    if (focoRadio && focoRadio.value !== 'none') {
        tempSelections.foco = focoRadio.value;
    } else {
        delete tempSelections.foco;
    }
    
    if (baseUnit && baseUnit.mounts) {
        const mountSelector = document.getElementById('mount-selector');
        const selectedMountName = mountSelector?.value;
        if (selectedMountName) {
            // Get the correct mountsDB based on faction (for Chaos Host)
            let mountsDB = currentArmyData.mountsDB;
            if (mainHostFaction && baseUnit.faction !== mainHostFaction) {
                const alliedFactionData = chaosHostData[baseUnit.faction];
                if (alliedFactionData) {
                    mountsDB = alliedFactionData.mountsDB;
                }
            }
            const mountData = mountsDB[selectedMountName];
            if (mountData) {
                tempSelections.mount = { name: selectedMountName, points: mountData.points };
            }
        } else {
            delete tempSelections.mount;
        }
    }
}
// ===================================================================================
// --- EVENT LISTENERS ---
// ===================================================================================
//  addEventListeners--> handleCompositionRatio() automatic ratio 
// calculation for Composition units.
// REPLACE this function in main.js-11-10-25
function addEventListeners() {
    console.log('Setting up event listeners...');
    // Debug: Check ALL modal elements at the start of this function
    console.log('=== ADD EVENT LISTENERS DEBUG ===');
    console.log('dom.modalCloseBtn:', dom.modalCloseBtn);
    console.log('dom.modalCloseBtn type:', typeof dom.modalCloseBtn);
    console.log('dom.modalCloseBtn element:', document.getElementById('modal-close-btn'));
    console.log('dom object:', dom);
    console.log('=== END DEBUG ===');
    // Helper function to safely add event listeners
    function safeAddEventListener(element, event, handler) {
        if (element && element.addEventListener) {
            element.addEventListener(event, handler);
            return true;
        } else {
            console.warn(`Cannot add ${event} listener to missing element:`, element);
            return false;
        }
    }

    // Basic UI event listeners with safety checks
    safeAddEventListener(dom.armySelector, 'change', (e) => selectArmy(e.target.value));
  
    if (dom.validationModeToggle) {
        dom.validationModeToggle.addEventListener('change', (e) => {
            validationMode = e.target.checked ? 'restringido' : 'legal';
            console.log(`Validation mode set to: ${validationMode}`);
            populateUnitSelector();
            updateMasterUI();
        });
    }

    safeAddEventListener(dom.unitSelector, 'change', () => {
        if (editingUnitId !== null) cancelEdit();
        tempSelections = {};
        updateAndRenderConfigPanel();
    });

    safeAddEventListener(dom.battlePointsInput, 'input', updateMasterUI);
    
    if (dom.armyListNameInput) {
        dom.armyListNameInput.addEventListener('input', () => storage.saveStateToLocalStorage(getCurrentAppState()));
    }

    safeAddEventListener(dom.addToListBtn, 'click', () => addOrUpdateUnit());
    safeAddEventListener(dom.printBtn, 'click', printArmyList);

    // Config area listeners
    if (dom.configArea) {
        dom.configArea.addEventListener('input', (e) => {
            if (!dom.configArea) return;
            
            if (e.target.id === 'config-qty-primary' || e.target.id === 'config-qty-secondary') {
                handleCompositionRatio(e);
            }
            updateTempSelectionsFromPanel();
            updateConfigSubtotal();
        });
        
        dom.configArea.addEventListener('change', (e) => {
            updateTempSelectionsFromPanel();
            updateConfigSubtotal();
        
            const structuralCheckboxes = [
                'config-cmd-c', 'config-cmd-s', 'config-cmd-m', 'config-bsb'
            ];
            
            if (e.target.type === 'checkbox' && structuralCheckboxes.includes(e.target.id)) {
                updateAndRenderConfigPanel(); 
            }
        });

        dom.configArea.addEventListener('click', (e) => {
            if (e.target.closest('.open-modal-btn')) {
                openSelectionModal(e);
            }
        });
    }

    // Army list container
    if (dom.armyListContainer) {
        dom.armyListContainer.addEventListener('click', (e) => {
            const unitEntry = e.target.closest('.unit-entry');
            if (!unitEntry) return;
            
            const id = parseInt(unitEntry.dataset.id);
            const unit = armyList.find(u => u.id === id);

            // Handle general checkbox
            if (e.target.classList.contains('general-checkbox') && !unit?.isManual) {
                generalId = e.target.checked ? id : null;
                updateMasterUI();
                return;
            }

            const action = e.target.dataset.action;
            if (action === 'duplicate') {
                duplicateUnit(id);
            } else if (action === 'remove') {
                removeUnitFromList(id);
            } else if (!e.target.closest('button, input') && !unit?.isManual) {
                startEdit(id);
            }
        });
    } else {
        console.warn('armyListContainer not found');
    }

    // Modal event listeners with safety checks
    if (dom.modalCloseBtn) {
        dom.modalCloseBtn.addEventListener('click', () => {
            if (dom.modal) dom.modal.classList.add('hidden');
        });
    } else {
        console.warn('Modal close button not found');
    }

    if (dom.modalConfirmBtn) {
        dom.modalConfirmBtn.addEventListener('click', () => {
            confirmModalSelection();
            updateAndRenderConfigPanel();
        });
    } else {
        console.warn('Modal confirm button not found');
    }

    if (dom.modalContent) {
        dom.modalContent.addEventListener('change', updateModalState);
    } else {
        console.warn('Modal content not found');
    }
    
    // Validation popup
    if (dom.validationPopupContainer) {
        dom.validationPopupContainer.addEventListener('mouseenter', () => {
            const checklist = document.getElementById('army-validation-checklist');
            if (checklist) checklist.classList.remove('hidden');
        });
        
        dom.validationPopupContainer.addEventListener('mouseleave', () => {
            const checklist = document.getElementById('army-validation-checklist');
            if (checklist) checklist.classList.add('hidden');
        });
    }

    // File operations
    safeAddEventListener(dom.newListBtn, 'click', () => {
        if (confirm("¿Estás seguro de que quieres empezar una nueva lista? Se borrará el progreso no guardado.")) {
            storage.clearLocalStorage();
            location.reload();
        }
    });

    safeAddEventListener(dom.saveFileBtn, 'click', () => {
        if (!currentArmyData || armyList.length === 0) {
            alert("No hay nada que guardar. Añade unidades a tu lista primero.");
            return;
        }
        storage.saveStateToFile(getCurrentAppState());
    });

    safeAddEventListener(dom.loadFileInput, 'change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        storage.loadFileAsState(file)
            .then(restoreState)
            .catch(error => alert(`Error al cargar el archivo: ${error.message}`));
        e.target.value = null;
    });

    // Admin button
    const adminBtn = document.getElementById('admin-btn');
    if (adminBtn) {
        adminBtn.addEventListener('click', () => {
            const adminPassword = "qidaohaogan";
            const userInput = prompt("Enter admin password:");
            if (userInput === null) return;
            if (userInput === adminPassword) {
                window.open('admin.html', '_blank');
            } else {
                alert("Incorrect password.");
            }
        });
    }

    console.log('Event listeners setup complete');
}

       // MODAL EVENT LISTENERS - ULTIMATE FIX
    console.log('Setting up modal event listeners...');
    
    // COMPLETELY INDEPENDENT APPROACH - Don't rely on dom object at all
    (function setupModalListeners() {
        console.log('Setting up modal listeners in isolated scope...');
        
        // Get fresh references directly from DOM
        const modalCloseElement = document.getElementById('modal-close-btn');
        const modalConfirmElement = document.getElementById('modal-confirm-btn');
        const modalContentElement = document.getElementById('modal-content');
        const modalElement = document.getElementById('selection-modal');
        
        console.log('Fresh modal elements in isolated scope:', {
            close: !!modalCloseElement,
            confirm: !!modalConfirmElement,
            content: !!modalContentElement,
            modal: !!modalElement
        });
        
        // Close button - multiple fallback methods
        if (modalCloseElement && modalCloseElement.addEventListener) {
            console.log('Adding event listener to close button');
            modalCloseElement.addEventListener('click', function() {
                console.log('Close button clicked');
                if (modalElement) {
                    modalElement.classList.add('hidden');
                    console.log('Modal hidden');
                }
            });
        } else {
            console.warn('Close button not available, using delegation');
            // Fallback 1: Event delegation
            document.body.addEventListener('click', function(e) {
                if (e.target && e.target.id === 'modal-close-btn') {
                    console.log('Close button clicked (delegation)');
                    const modal = document.getElementById('selection-modal');
                    if (modal) modal.classList.add('hidden');
                }
            });
        }
        
        // Confirm button
        if (modalConfirmElement && modalConfirmElement.addEventListener) {
            modalConfirmElement.addEventListener('click', function() {
                console.log('Confirm button clicked');
                confirmModalSelection();
                updateAndRenderConfigPanel();
            });
        } else {
            document.body.addEventListener('click', function(e) {
                if (e.target && e.target.id === 'modal-confirm-btn') {
                    console.log('Confirm button clicked (delegation)');
                    confirmModalSelection();
                    updateAndRenderConfigPanel();
                }
            });
        }
        
        // Modal content changes
        if (modalContentElement && modalContentElement.addEventListener) {
            modalContentElement.addEventListener('change', updateModalState);
        } else {
            document.addEventListener('change', function(e) {
                if (e.target && e.target.closest('#modal-content')) {
                    updateModalState();
                }
            });
        }
        
        console.log('Modal listeners setup complete in isolated scope');
    })();

    dom.validationPopupContainer.addEventListener('mouseenter', () => document.getElementById('army-validation-checklist')?.classList.remove('hidden'));
    dom.validationPopupContainer.addEventListener('mouseleave', () => document.getElementById('army-validation-checklist')?.classList.add('hidden'));

    dom.newListBtn.addEventListener('click', () => {
        if (confirm("¿Estás seguro de que quieres empezar una nueva lista? Se borrará el progreso no guardado.")) {
            storage.clearLocalStorage();
            location.reload();
        }
    });

    dom.saveFileBtn.addEventListener('click', () => {
        if (!currentArmyData || armyList.length === 0) {
            alert("No hay nada que guardar. Añade unidades a tu lista primero.");
            return;
        }
        storage.saveStateToFile(getCurrentAppState());
    });

    dom.loadFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        storage.loadFileAsState(file)
            .then(restoreState)
            .catch(error => alert(`Error al cargar el archivo: ${error.message}`));
        e.target.value = null;
    });

    // Modal event listeners - WITH EXTREME SAFETY
    console.log('Setting up modal event listeners...');
    
    // Get fresh references to modal elements to avoid any timing issues
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalConfirmBtn = document.getElementById('modal-confirm-btn');
    const modalContent = document.getElementById('modal-content');
    const modalElement = document.getElementById('selection-modal');
    
    console.log('Fresh modal elements:', {
        modalCloseBtn: !!modalCloseBtn,
        modalConfirmBtn: !!modalConfirmBtn,
        modalContent: !!modalContent,
        modalElement: !!modalElement
    });

    if (modalCloseBtn && typeof modalCloseBtn.addEventListener === 'function') {
        console.log('Adding event listener to modal close button');
        modalCloseBtn.addEventListener('click', () => {
            console.log('Modal close clicked');
            if (modalElement) {
                modalElement.classList.add('hidden');
                console.log('Modal hidden');
            }
        });
        console.log('Modal close event listener added successfully');
    } else {
        console.error('CANNOT ADD MODAL CLOSE LISTENER:', {
            element: modalCloseBtn,
            hasAddEventListener: modalCloseBtn?.addEventListener
        });
    }

    if (modalConfirmBtn && typeof modalConfirmBtn.addEventListener === 'function') {
        modalConfirmBtn.addEventListener('click', () => {
            console.log('Modal confirm clicked');
            confirmModalSelection();
            updateAndRenderConfigPanel();
        });
    }

    if (modalContent && typeof modalContent.addEventListener === 'function') {
        modalContent.addEventListener('change', updateModalState);
    }


const adminBtn = document.getElementById('admin-btn');
    if (adminBtn) {

adminBtn.addEventListener('click', () => {
    // 1. The password is fixed directly in the code.
    const adminPassword = "qidaohaogan"; // ⚠️ Change this!

    // 2. Ask the user for the password using a simple prompt.
    const userInput = prompt("Enter admin password:");

    // 3. Stop if the user clicks "Cancel".
    if (userInput === null) {
        return; 
    }

    // 4. Check the password and open the editor in a new tab if it's correct.
    if (userInput === adminPassword) {
        window.open('admin.html', '_blank');
    } else {
        alert("Incorrect password.");
    }
});

}

// ===================================================================================
// --- DATA & STATE MANAGEMENT ---
// ===================================================================================

function getUnitDataByName(unitName) {
    if (!currentArmyData) return null;
    if (mainHostFaction) {
        for (const factionId in chaosHostData) {
            if (chaosHostData[factionId]?.unitsDB[unitName]) {
                return chaosHostData[factionId].unitsDB[unitName];
            }
        }
    }
    return currentArmyData.unitsDB[unitName] || null;
}

function getResolvedArmyList() {
    let list = JSON.parse(JSON.stringify(armyList));
    
    // FIX: Ensure ALL manual units keep their assigned FOC and are not duplicated
    list.forEach(unit => {
        if (unit.isManual) {
            unit.resolvedFoc = unit.foc;
            unit.isAlly = unit.faction !== currentArmyData?.FACTION_ID;
        }
    });
    
    const rules = currentArmyData?.ARMY_RULESET?.focResolutionRules;

    if (mainHostFaction) {
        list.forEach(unit => {
            if (unit.faction && unit.faction !== mainHostFaction && !unit.isManual) {
                unit.isAlly = true;
            }
        });
    }

    if (!rules || rules.length === 0) {
        const basicList = list.map(u => ({
            ...u,
            resolvedFoc: u.resolvedFoc || u.unitData?.foc || u.foc || 'Special' // Default to Special
        }));
        return basicList;
    }
    
    const context = {
        armyList: list,
        generalId: generalId,
        general: armyList.find(u => u.id === generalId),
        battlePoints: parseInt(dom.battlePointsInput.value, 10),
        mainHostFaction: mainHostFaction,
        currentArmyData: currentArmyData
    };

    const resolvedList = resolveFocSlots(list, rules, context);
    
    // FIX: Ensure manual units don't get their FOC changed by resolution rules
    // Also filter out any potential duplicates
    const seenIds = new Set();
    const finalList = [];
    
    resolvedList.forEach(unit => {
        if (seenIds.has(unit.id)) {
            console.warn(`Duplicate unit found and removed: ${unit.name} (ID: ${unit.id})`);
            return;
        }
        seenIds.add(unit.id);
        
        if (unit.isManual) {
            unit.resolvedFoc = unit.foc;
        }
        finalList.push(unit);
    });
    
    return finalList;
}

function getProcessedUnits() {
    if (!currentArmyData) return {};

    // Start with the base army's units
    let unitsToProcess = JSON.parse(JSON.stringify(currentArmyData.unitsDB));

    // If it's a Chaos Host, merge all available Chaos units
    if (mainHostFaction) {
        unitsToProcess = {}; // Start fresh
        for (const factionId in chaosHostData) {
            if (chaosHostData[factionId] && chaosHostData[factionId].unitsDB) {
                Object.assign(unitsToProcess, chaosHostData[factionId].unitsDB);
            }
        }
    }

    // The entire 'if (ruleset?.modificationRules)' block has been removed,
    // as processGlobalRules no longer exists and this logic is handled elsewhere.
    return unitsToProcess;
}

function addOrUpdateUnit() {
    // Get the final calculated points for the configured unit (PARENT ONLY)
    const configuredUnit = getConfigurationFromPanel();
    if (!configuredUnit) return;

    const calculatedPoints = calculateTotalPointsForUnit(configuredUnit);
    const unitName = dom.unitSelector.value;
    const baseUnitData = getUnitDataByName(unitName);

    // Handle manual child unit creation - check for ALL manual entries
    _preserveManualEntryState();
    const manualEntries = _getAllManualEntries();
    
    console.log('Manual entries found:', manualEntries);

    // FIX: Clean up any existing duplicates before adding new units
    cleanupDuplicateManualUnits();

    if (editingUnitId !== null) { // UPDATE operation
        const index = armyList.findIndex(u => u.id === editingUnitId);
        if (index !== -1) {
            // FIX: Remove ALL existing manual units for this parent
            _cleanupManualUnits(editingUnitId);

            // Update the existing parent unit
            armyList[index] = {
                ...configuredUnit,
                id: editingUnitId,
                points: calculatedPoints, // PARENT POINTS ONLY
                displayOptions: generateDisplayOptions(configuredUnit),
                unitData: baseUnitData
            };

            // Create independent manual units for EACH manual entry
            manualEntries.forEach(manualData => {
                if (manualData.name && manualData.points) {
                    createIndependentManualUnit(manualData, editingUnitId);
                }
            });
        }
    } else { // ADD operation
        const newUnit = {
            ...configuredUnit,
            id: nextId++,
            points: calculatedPoints, // PARENT POINTS ONLY
            displayOptions: generateDisplayOptions(configuredUnit),
            unitData: baseUnitData
        };
        
        armyList.push(newUnit);
        
        // Create independent manual units for EACH manual entry
        manualEntries.forEach(manualData => {
            if (manualData.name && manualData.points) {
                createIndependentManualUnit(manualData, newUnit.id);
            }
        });
    }
    
    // FIX: Final cleanup to ensure no duplicates
    cleanupDuplicateManualUnits();
    
    // Reset and update UI
    cancelEdit();
    populateUnitSelector();
    renderArmyList();
    updateMasterUI();
    storage.saveStateToLocalStorage(getCurrentAppState());
    
    console.log('Final army list after add/update:', armyList);
}

function calculateTotalPointsForUnit(unit) {
    if (!unit || !unit.name) return 0;
    const baseUnit = getUnitDataByName(unit.name);
    if (!baseUnit) return 0;

    let subtotal = 0;
    
    // --- START OF FIX ---
    // The 'qty' variable is now declared here, at the top level of the function.
    // This makes it visible to all subsequent logic blocks, including the Focos calculation.
    const qty = (typeof unit.qty === 'object') ? unit.qty.primary : (unit.qty || 0);
    // --- END OF FIX ---

    if (baseUnit.composition) {
        const primaryQty = unit.qty.primary || 0;
        const secondaryQty = unit.qty.secondary || 0;
        subtotal += (primaryQty * baseUnit.composition.primary.cost) + (secondaryQty * baseUnit.composition.secondary.cost);
    } else if (baseUnit.points) {
        const qty = unit.qty || 0;
        subtotal += baseUnit.points * qty;
        
        // --- THIS IS THE FIX ---
        // We now check if baseUnit.options exists before trying to loop through it.
        if (baseUnit.options && unit.selections.options) {
            unit.selections.options.forEach(optName => {
                const option = baseUnit.options.find(opt => opt.n === optName);
                if (option) {
                     const costMultiplier = (option.costType === 'flat') ? 1 : qty;
                     subtotal += (option.p || 0) * costMultiplier;
                }
            });
        }
        // --- END OF FIX ---
    }
// --- START: NEW FOCOS LOGIC ---
    // This calculates the total cost for the selected Foco (cost per model * quantity).
    if (unit.selections.foco && baseUnit.focos) {
        const selectedFoco = unit.selections.foco; // 'menor' or 'mayor'
        if (baseUnit.focos[selectedFoco]) {
            subtotal += baseUnit.focos[selectedFoco].p * qty;
        }
    }
    // --- END: NEW FOCOS LOGIC -
    if (unit.selections.command) {
        const cmd = unit.selections.command;
        const baseCmd = baseUnit.command;
        if (cmd.c && baseCmd.c) subtotal += baseCmd.c.p;
        if (cmd.s && baseCmd.s) subtotal += baseCmd.s.p;
        if (cmd.m && baseCmd.m) subtotal += baseCmd.m.p;
    }
    
    if (unit.selections.commandUpgrades) {
        Object.keys(unit.selections.commandUpgrades).forEach(upgradeName => {
            if (upgradeName === 'points') return; // Skip old data format
            
            // This robust loop checks for both single 'upgrade' objects and 'upgrades' arrays
            // across all parts of the command group (champion, standard, musician).
            for (const key in baseUnit.command) {
                const cmdPart = baseUnit.command[key];
                if (!cmdPart) continue;

                // Check for single 'upgrade' object (like in dcaos.js)
                if (cmdPart.upgrade && cmdPart.upgrade.n === upgradeName) {
                    subtotal += cmdPart.upgrade.p;
                    break; 
                }
                
                // Check for 'upgrades' array (for backward compatibility)
                if (Array.isArray(cmdPart.upgrades)) {
                    const upgradeData = cmdPart.upgrades.find(u => u.n === upgradeName);
                    if (upgradeData) {
                        subtotal += upgradeData.p;
                        break;
                    }
                }
            }
        });
    }
    
    if (unit.selections.flats) subtotal += unit.selections.flats.points || 0;
    if (unit.selections.mount) subtotal += unit.selections.mount.points || 0;
    if (unit.selections.battleStandard) subtotal += baseUnit.battleStandard?.cost || 0;

    if (unit.selections.specialAddons) {
         Object.entries(unit.selections.specialAddons).forEach(([name, count]) => {
            if (name === 'points' || count === 0) return;
            const addonData = baseUnit.specialAddons.find(a => a.name === name);
            if(addonData) subtotal += count * addonData.points;
        });
    }

    ['magicItems', 'magicBanner', 'champItems', 'armySkills', 'battleStandardBanner', 'iconos', 'regalos', 'focos'].forEach(type => {
        if (unit.selections[type] && unit.selections[type].points) {
            subtotal += unit.selections[type].points;
        }
    });

    return Math.ceil(subtotal);
}

function updateConfigSubtotal() {
    const unitName = dom.unitSelector.value;
    if (!unitName || !currentArmyData) {
        dom.configSubtotalEl.textContent = 0;
        dom.addToListBtn.disabled = true;
        return 0;
    }
    const configuredUnit = getConfigurationFromPanel();
    const baseUnit = getUnitDataByName(unitName);
    if (!baseUnit || !configuredUnit) {
        dom.configSubtotalEl.textContent = 0;
        dom.addToListBtn.disabled = true;
        return 0;
    }

    let subtotal = calculateTotalPointsForUnit(configuredUnit);

    const manualPointsInput = document.getElementById('manual-unit-points');
    if (manualPointsInput) {
        subtotal += parseInt(manualPointsInput.value) || 0;
    }

    let isValid = true;
    if (baseUnit.composition) {
        const primaryQty = configuredUnit.qty.primary;
        const secondaryQty = configuredUnit.qty.secondary;
        const secondaryInput = document.getElementById('config-qty-secondary');
        isValid = primaryQty >= baseUnit.min.primary && secondaryQty >= (parseInt(secondaryInput?.min) || baseUnit.min.secondary);
    } else if (baseUnit.min > 0) {
        const qty = configuredUnit.qty;
        // For units with min/max 1, allow 0 temporarily during config
        const minQty = (baseUnit.min === 1 && baseUnit.max === 1) ? 0 : (baseUnit.min || 1);
        isValid = qty >= minQty && qty <= (baseUnit.max || 1);
    }
    
    dom.configSubtotalEl.textContent = Math.ceil(subtotal);
    dom.addToListBtn.disabled = !unitName || !isValid;
    return Math.ceil(subtotal);
}

function generateDisplayOptions(unit) {
    if (unit.isManual) return unit.displayOptions;

    const baseUnit = getUnitDataByName(unit.name);
    // ADD SAFETY CHECK
    if (!baseUnit) {
        console.warn(`Base unit data not found for: ${unit.name}`);
        return unit.displayOptions || []; // Return existing display options or empty array
    }

    let displayOptions = [];

    if (!baseUnit) return [];

    // ... rest of the function remains the same ...


    if (unit.selections.command) {
        const cmd = unit.selections.command;
        const baseCmd = baseUnit.command;
        if (cmd.c && baseCmd.c) displayOptions.push(`- ${baseCmd.c.n} (${baseCmd.c.p} pts)`);
        if (cmd.s && baseCmd.s) displayOptions.push(`- ${baseCmd.s.n} (${baseCmd.s.p} pts)`);
        if (cmd.m && baseCmd.m) displayOptions.push(`- ${baseCmd.m.n} (${baseCmd.m.p} pts)`);
    }

    // This check prevents the crash if a unit has no options.
    if (baseUnit.options && unit.selections.options) {
        unit.selections.options.forEach(name => {
            const opt = baseUnit.options.find(o => o.n === name);
            if (opt) {
                const summaryText = opt.summary ? ` <i>(${opt.summary})</i>` : '';
                const costText = opt.p > 0 ? ` (+${opt.p} pts/min)` : '';
                displayOptions.push(`${opt.n}${costText}${summaryText}`);
            }
        });
    }
// --- START: NEW FOCOS LOGIC ---
    // This adds the selected Foco and its summary to the display list.
    if (unit.selections.foco && baseUnit.focos) {
        const selectedFoco = unit.selections.foco;
        const focoData = baseUnit.focos[selectedFoco];
        if (focoData) {
            const label = selectedFoco === 'menor' ? 'Foco Menor' : 'Foco Mayor';
            displayOptions.push(`- ${label} (+${focoData.p} pts/min) <i>(${focoData.summary})</i>`);
        }
    }
    // --- END: NEW FOCOS LOGIC ---
    if (unit.selections.flats) {
        displayOptions.push(`- ${unit.selections.flats.name} (+${unit.selections.flats.points} pts)`);
    }

    if (unit.selections.mount) {
        displayOptions.push(`- ${unit.selections.mount.name} (+${unit.selections.mount.points} pts)`);
    }
    if (unit.selections.battleStandard) {
        displayOptions.push(`- ${baseUnit.battleStandard.name} (${baseUnit.battleStandard.cost} pts)`);
    }
    if (unit.selections.specialAddons) {
        Object.entries(unit.selections.specialAddons).forEach(([name, count]) => {
            if (name === 'points' || count === 0) return;
            const addonData = baseUnit.specialAddons.find(a => a.name === name);
            if(addonData) displayOptions.push(`- ${count}x ${name} (${addonData.points} pts)`);
        });
    }

    Object.entries(unit.selections).forEach(([key, selectionGroup]) => {
        if (!['options', 'command', 'flats'].includes(key) && selectionGroup && selectionGroup.selection) {
            Object.values(selectionGroup.selection).forEach(item => {
                let db, itemData, category;
                const unitFaction = baseUnit.faction;
                const hostData = mainHostFaction ? chaosHostData[unitFaction] : currentArmyData;
                
                if (!hostData) return;

                if (key === 'armySkills') {
                    db = hostData.armySkillsDB;
                    if (db) itemData = db[item.name];
                } else if (key === 'regalos') {
                    const giftsDB = hostData.regalosDemoniacosDB;
                    if(giftsDB && giftsDB[item.category]) itemData = giftsDB[item.category][item.name];
                } else if (key === 'iconos') {
                    const iconsDB = hostData.iconosDemoniacosDB;
                    if(iconsDB) itemData = iconsDB[item.name];
                } else {
                    db = hostData.magicItemsDB;
                    category = item.category;
                    if (db && db[category]) itemData = db[category][item.name];
                }

                if (itemData) {
                    const summaryText = itemData.summary ? ` <i>(${itemData.summary})</i>` : '';
                    displayOptions.push(`- ${item.name} (${item.cost} pts)${summaryText}`);
                }
            });
        }
    });

    if (unit.selections.focos?.selection) {
        const focoName = Object.keys(unit.selections.focos.selection)[0];
        if (focoName) {
            displayOptions.push(`- Foco: ${focoName} (${unit.selections.focos.points} pts)`);
        }
    }

    // --- THIS IS THE FIX ---
    // This block replaces the old crashing code with new logic that directly
    // and safely checks for our new 'upgrade' object on the musician.
    if (unit.selections.commandUpgrades) {
        Object.keys(unit.selections.commandUpgrades).forEach(upgradeName => {
            if (upgradeName === 'points') return; // Safety check for old data
            
            const musicianUpgrade = baseUnit.command?.m?.upgrade;
            
            // If the musician has an upgrade object AND its name matches the one we selected...
            if (musicianUpgrade && musicianUpgrade.n === upgradeName) {
                // ...then add it to the display options.
                displayOptions.push(`- ${upgradeName} (${musicianUpgrade.p} pts)`);
            }
        });
    }
    // --- END OF FIX ---

    return displayOptions.sort();
}

function confirmModalSelection() {
    const type = dom.modal.dataset.currentType;
    if (!tempSelections[type]) tempSelections[type] = { selection: {}, points: 0 };

    tempSelections[type].selection = {};
    tempSelections[type].points = 0;

    if (type === 'focos') {
        const selectedRadio = document.querySelector('.modal-item-rb:checked');
        if (selectedRadio) {
            const name = selectedRadio.dataset.name;
            const cost = parseInt(selectedRadio.dataset.cost);
            tempSelections[type].selection[name] = { name, cost };
            tempSelections[type].points = cost;
        }
    } else {
        document.querySelectorAll('.modal-item-cb:checked').forEach(cb => {
            const name = cb.dataset.name;
            const cost = parseInt(cb.dataset.cost);
            const category = cb.dataset.category;
            const relic = cb.dataset.relic === 'true';
            tempSelections[type].selection[name] = { name, cost, category, relic };
            tempSelections[type].points += cost;
        });
    }

    dom.modal.classList.add('hidden');
}

function cancelEdit() {
    editingUnitId = null;
    dom.unitSelector.value = "";
    dom.unitSelector.disabled = false; // Re-enable the selector
    tempSelections = {};
    tempManualEntry = {};
    dom.configArea.innerHTML = '';
    updateConfigSubtotal();
    dom.addToListBtn.querySelector('span').textContent = 'Añadir a la Lista';
    dom.addToListBtn.classList.replace('bg-blue-600', 'bg-green-600');
    dom.addToListBtn.classList.replace('hover:bg-blue-700', 'hover:bg-green-700');
    updateMasterUI();
    renderArmyList();
}

function populateArmySelector() {
    dom.armySelector.innerHTML = '<option value="">-- Elige un Ejército --</option>';
    AVAILABLE_ARMIES.forEach(army => {
        const option = document.createElement('option');
        option.value = army.id;
        option.textContent = army.name;
        dom.armySelector.appendChild(option);
    });
}

async function selectArmy(armyId) {
    if (!armyId) {
        currentArmyData = null;
        dom.validationModeContainer.classList.add('hidden');
        resetUI(true);
        return;
    }

    dom.loadingOverlay.classList.remove('hidden');
    
    try {
        mainHostFaction = null;
        chaosHostData = {};
        
        // Reset validation mode - will be overridden for Chaos armies
        dom.validationModeToggle.checked = false;
        validationMode = 'legal'; // This means unrestricted/free mode
        dom.validationModeContainer.classList.add('hidden');

        currentArmyData = await loadArmyData(armyId);
        
        if (CHAOS_FACTIONS.includes(armyId)) {
            mainHostFaction = armyId;
            chaosHostData[armyId] = currentArmyData;
            
            // Show validation mode container for Chaos armies
            dom.validationModeContainer.classList.remove('hidden');
            
            // Set validation mode to 'restringido' (checked) by default for Chaos armies
            // This means legal/restricted mode that follows Chaos Host rules
            dom.validationModeToggle.checked = true;
            validationMode = 'restringido';
            
            console.log(`Chaos army selected. Validation mode set to: ${validationMode} (follows Chaos Host rules)`);

            // Load other Chaos factions
            const promises = CHAOS_FACTIONS
                .filter(id => id !== armyId)
                .map(id => loadArmyData(id).then(data => {
                    chaosHostData[id] = data;
                }));
            await Promise.all(promises);
        }
        
        dom.armySelector.value = armyId;
        armyList = [];
        nextId = 0;
        generalId = null;
        cancelEdit();
        
    } catch (error) {
        console.error(`Failed to load army data for ${armyId}:`, error);
        alert(`No se pudo cargar el ejército: ${armyId}. Revisa la consola para más detalles.`);
        currentArmyData = null;
        resetUI(true);
    } finally {
        dom.loadingOverlay.classList.add('hidden');
    }
}

async function updateAndRenderConfigPanel(unitToEdit = null) {
    _preserveManualEntryState(); 

 console.log('=== UPDATE CONFIG PANEL DEBUG ===');
    console.log('tempManualEntry at start:', tempManualEntry);
    
    const unitName = dom.unitSelector.value;
    dom.unitWarningArea.innerHTML = '';

    if (!unitName) {
        dom.configArea.innerHTML = '';
        updateConfigSubtotal();
        return;
    }

    const baseUnitData = getUnitDataByName(unitName);
    if (!baseUnitData) return;

    if (baseUnitData.warning) {
        dom.unitWarningArea.innerHTML = `<div class="bg-yellow-500/20 border-l-4 border-yellow-500 text-yellow-300 p-2 text-xs" role="alert"><p>${baseUnitData.warning}</p></div>`;
    }

    // --- START: CONSOLIDATED DYNAMIC LOGIC ---
    // This section now correctly prepares all dynamic data before any declarations.

    // 1. Get the unit's current configuration from the panel.
    const configuredUnit = unitToEdit || getConfigurationFromPanel();
    if (!configuredUnit) {
        console.error("Could not get configuration for panel rendering.");
        return;
    }
    
    // 2. Dynamically determine the unit's subfaction based on its current selections.
    const currentSubfaction = getUnitSubfaction(configuredUnit);
    
    // 3. Create a temporary version of the unit's data that reflects this dynamic subfaction.
    let unitDataForRules = { ...baseUnitData, subfaction: currentSubfaction };

    // 4. Build the context object ONLY ONCE with the fully updated data.
    const context = {
        unit: { ...configuredUnit, unitData: unitDataForRules },
        general: armyList.find(u => u.id === generalId),
        armyList,
        generalId,
        currentArmyData
    };

    const ruleset = currentArmyData?.ARMY_RULESET;
    console.log('Ruleset found:', !!ruleset);
    console.log('Modification rules:', ruleset?.modificationRules);
    // 5. Call the rules engine with the single, correct context.
    const { finalData, uiActions } = await processUnitRules(ruleset?.modificationRules, context, unitDataForRules);
    // --- END: CONSOLIDATED LOGIC ---
console.log('UI Actions from rules engine:', uiActions);
    console.log('Number of RENDER_COMPONENT actions:', 
        uiActions?.filter(action => action.type === 'RENDER_COMPONENT' && action.payload.componentName === 'ManualUnitEntry').length || 0);
    // Render the panel using the final data from the engine.
    renderConfigOptions(unitName, finalData, configuredUnit);

     // Process any UI actions (like manual entry)
    console.log('Calling processUiActions with tempManualEntry:', tempManualEntry);

    // Process any UI actions (like manual entry).
    processUiActions(uiActions); 

    updateConfigSubtotal();

    // Attach the generic listeners, which will correctly ignore the exclusive options.
    attachGenericConfigListeners();
     console.log('=== END UPDATE CONFIG PANEL ===');

    // Attach the specific listener for the Daemon Prince's marks. This is separate and now conflict-free.
    if (unitName.includes("Príncipe Demonio")) {
        const godMarkCheckboxes = dom.configArea.querySelectorAll('input.is-exclusive-option');
        
        godMarkCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                // This specific handler will now work without interference.
                updateTempSelectionsFromPanel();
                const newSubfaction = getUnitSubfaction(getConfigurationFromPanel());

                // Clean out invalid gifts based on the new mark.
                if (tempSelections.armySkills && tempSelections.armySkills.selection) {
                    const currentGifts = tempSelections.armySkills.selection;
                    const validGifts = {};
                    let newPoints = 0;
                    
                    for (const giftName in currentGifts) {
                        const giftData = currentArmyData.regalosDemoniacosDB[giftName];
                        if (giftData && giftData.subfaction === newSubfaction) {
                            validGifts[giftName] = currentGifts[giftName];
                            newPoints += currentGifts[giftName].cost;
                        }
                    }
                    tempSelections.armySkills.selection = validGifts;
                    tempSelections.armySkills.points = newPoints;
                }

                // Re-render the panel to reflect all changes.
                updateAndRenderConfigPanel(); 
            });
        });
    }
       // --- START: ADD THIS NEW BLOCK ---
    // This correctly re-attaches the listener for the musician upgrade every time the panel is rendered.
    //   const musicianCheckbox = dom.configArea.querySelector('#config-cmd-m');
    //   if (musicianCheckbox) {
    // When the musician checkbox changes, we need to re-render the panel
    // to enable or disable the upgrade checkbox.
  //          updateTempSelectionsFromPanel();
  //          const currentConfig = getConfigurationFromPanel();
  //          updateAndRenderConfigPanel(currentConfig);
  //      });
  //  }
    // --- END: ADD THIS NEW BLOCK ---
}
// Helper function to attach generic listeners (avoids repetition)
// REPLACE this entire function in main.js
function attachGenericConfigListeners() {
    // Select ALL inputs first
    const configInputs = dom.configArea.querySelectorAll('.config-input, .special-addon-input');
    
    configInputs.forEach(input => {
        // Always remove old listeners to prevent stacking
        input.removeEventListener('change', handleConfigChange);
        input.removeEventListener('input', handleConfigInput);

        // --- THIS IS THE FIX ---
        // If the input is a special, exclusive option (like a Chaos Mark),
        // we explicitly block the generic listener from being attached.
        // The more specific listener inside updateAndRenderConfigPanel will handle it.
        if (input.classList.contains('is-exclusive-option')) {
            return; // Skip this input and move to the next one
        }
        // --- END OF FIX ---

        // Attach generic handlers to all other, non-exclusive inputs
        input.addEventListener('change', handleConfigChange);
        input.addEventListener('input', handleConfigInput);
    });
}
// Debounced handler for change events
let configChangeDebounceTimer;

function handleConfigChange() {
    clearTimeout(configChangeDebounceTimer);
    configChangeDebounceTimer = setTimeout(() => {
        updateTempSelectionsFromPanel();
        updateAndRenderConfigPanel(); // Re-run the whole process
    }, 150); // Small delay
}

// Debounced handler for input events (for number fields primarily)
let configInputDebounceTimer;

function handleConfigInput(event) {
     if(event.target.type === 'number' || event.target.type === 'text'){ // Handle text inputs too (like label)
        clearTimeout(configInputDebounceTimer);
        configInputDebounceTimer = setTimeout(() => {
            updateTempSelectionsFromPanel();
            updateAndRenderConfigPanel();
        }, 250);
     }
} 

function resetUI(clearSelectors = false) {
    armyList = [];
    nextId = 0;
    editingUnitId = null;
    generalId = null;
    mainHostFaction = null;
    chaosHostData = {};
    dom.armyListNameInput.value = '';
    dom.configArea.innerHTML = '';
    tempSelections = {};
    tempManualEntry = {};

    if (clearSelectors) {
        dom.unitSelector.innerHTML = '<option value="">-- Elige una Ejército Primero --</option>';
    } else {
        populateUnitSelector();
    }

    renderArmyList();
    updateMasterUI();
}

// REPLACE the old populateUnitSelector with this new version 12/10/25--

function populateUnitSelector() {
    const unitSelector = dom.unitSelector;
    const previousSelection = unitSelector.value;
    unitSelector.innerHTML = '<option value="">-- Elige una unidad --</option>';

    if (!currentArmyData) return;

    const allUnitsDB = getProcessedUnits();
    const battlePoints = parseInt(dom.battlePointsInput.value, 10);
    
    // Create context for validation
    const context = {
        armyList: armyList,
        battlePoints: battlePoints,
        mainHostFaction: mainHostFaction,
        currentArmyData: currentArmyData,
        chaosHostData: chaosHostData
    };

    // Process units with FOC resolution
    const processedUnits = Object.entries(allUnitsDB).map(([name, data]) => {
        // Apply FOC escalation for allied units (only for Chaos Host)
        let resolvedFoc = data.foc;
        if (mainHostFaction && data.faction !== mainHostFaction) {
            if (data.foc === 'Core') resolvedFoc = 'Special';
            if (data.foc === 'Special') resolvedFoc = 'Rare';
        }

        return {
            name,
            data,
            resolvedFoc,
            faction: data.faction,
            isMainHost: data.faction === mainHostFaction
        };
    });

    // Filter units based on validation mode
    const filteredUnits = processedUnits.filter(unit => {
        if (validationMode !== 'restringido') return true;
        
        // For non-Chaos armies, use the standard unit selection rules
        if (!mainHostFaction) {
            return isUnitSelectionAllowed(unit.data);
        }
        
        // For Chaos armies, use Chaos Host rules
        return isUnitAllowedByChaosHostRules(unit, context);
    });

    // Group units by faction and resolved FOC
    const groupedUnits = {
        mainHost: {},
        allies: {}
    };

    // Initialize FOC groups
    Object.keys(currentArmyData.FOC_CONFIG).forEach(foc => {
        groupedUnits.mainHost[foc] = [];
        if (mainHostFaction) {
            groupedUnits.allies[foc] = [];
        }
    });

    // Sort units into groups
    filteredUnits.forEach(unit => {
        if (!mainHostFaction || unit.isMainHost) {
            // For non-Chaos armies, ALL units go to mainHost
            // For Chaos armies, only main faction units go here
            if (groupedUnits.mainHost[unit.resolvedFoc]) {
                groupedUnits.mainHost[unit.resolvedFoc].push(unit);
            }
        } else {
            // For Chaos armies, allied units go here
            if (groupedUnits.allies[unit.resolvedFoc]) {
                groupedUnits.allies[unit.resolvedFoc].push(unit);
            }
        }
    });

    const focOrder = ['Lord', 'Hero', 'Core', 'Special', 'Rare'];

    // --- MAIN HOST UNITS ---
    focOrder.forEach(foc => {
        const units = groupedUnits.mainHost[foc];
        if (!units || units.length === 0) return;

        const optgroup = document.createElement('optgroup');
        optgroup.label = currentArmyData.FOC_CONFIG[foc]?.label || foc;

        units.sort((a, b) => a.name.localeCompare(b.name))
             .forEach(unit => {
                 const option = document.createElement('option');
                 option.value = unit.name;
                 option.textContent = unit.name;
                 optgroup.appendChild(option);
             });

        unitSelector.appendChild(optgroup);
    });

    // --- ALLIED HOST UNITS (Only for Chaos armies) ---
    if (mainHostFaction && Object.keys(groupedUnits.allies).some(foc => groupedUnits.allies[foc].length > 0)) {
        // Group allies by faction
        const alliesByFaction = {};
        
        focOrder.forEach(foc => {
            groupedUnits.allies[foc].forEach(unit => {
                if (!alliesByFaction[unit.faction]) {
                    alliesByFaction[unit.faction] = {};
                }
                if (!alliesByFaction[unit.faction][foc]) {
                    alliesByFaction[unit.faction][foc] = [];
                }
                alliesByFaction[unit.faction][foc].push(unit);
            });
        });

        // Add allied factions header
        const alliesHeader = document.createElement('optgroup');
        alliesHeader.label = "--- Aliados ---";
        alliesHeader.disabled = true;
        unitSelector.appendChild(alliesHeader);

        // Add units for each allied faction
        Object.keys(alliesByFaction).sort().forEach(factionId => {
            const factionName = chaosHostData[factionId]?.ARMY_NAME || factionId;
            
            focOrder.forEach(foc => {
                const units = alliesByFaction[factionId][foc];
                if (!units || units.length === 0) return;

                const optgroup = document.createElement('optgroup');
                optgroup.label = `${factionName} - ${currentArmyData.FOC_CONFIG[foc]?.label || foc}`;

                units.sort((a, b) => a.name.localeCompare(b.name))
                     .forEach(unit => {
                         const option = document.createElement('option');
                         option.value = unit.name;
                         option.textContent = unit.name;
                         optgroup.appendChild(option);
                     });

                unitSelector.appendChild(optgroup);
            });
        });
    }

    // Restore previous selection if possible
    if (previousSelection && Array.from(unitSelector.options).some(opt => opt.value === previousSelection)) {
        unitSelector.value = previousSelection;
    }
}
// NEW FUNCTION: Chaos Host rule validation for unit selector
function isUnitAllowedByChaosHostRules(unit, context) {
    const { battlePoints, mainHostFaction, armyList } = context;
    
    // Main host units are always allowed
    if (unit.isMainHost) return true;

    // --- CHAOS HOST RESTRICTIONS FOR ALLIED UNITS ---
    
    // No allied Lords in armies < 3000pts
    if (unit.data.foc === 'Lord' && battlePoints < 3000) {
        return false;
    }

    // No allied Rares in armies < 3000pts  
    if (unit.data.foc === 'Rare' && battlePoints < 3000) {
        return false;
    }

    // Check support host faction limits
    const currentSupportFactions = new Set(
        armyList.filter(u => u.faction !== mainHostFaction).map(u => u.faction)
    );

    let maxSupportHosts = 0;
    if (battlePoints >= 3000) maxSupportHosts = 3;
    else if (battlePoints >= 2000) maxSupportHosts = 2;
    else if (battlePoints >= 1000) maxSupportHosts = 1;

    // If adding a unit from a new faction would exceed the limit, disallow
    if (!currentSupportFactions.has(unit.faction) && currentSupportFactions.size >= maxSupportHosts) {
        return false;
    }

    // Check for existing allied Lords per faction (max 1 per faction)
    if (unit.data.foc === 'Lord' && battlePoints >= 3000) {
        const existingLordsInFaction = armyList.filter(u => 
            u.faction === unit.faction && u.unitData?.foc === 'Lord'
        ).length;
        if (existingLordsInFaction >= 1) {
            return false;
        }
    }

    // Check for existing allied Rares per faction (max 1 per faction)
    if (unit.data.foc === 'Rare' && battlePoints >= 3000) {
        const existingRaresInFaction = armyList.filter(u => 
            u.faction === unit.faction && u.unitData?.foc === 'Rare'
        ).length;
        if (existingRaresInFaction >= 1) {
            return false;
        }
    }

    // Check 0-1 limit for allied Special and Rare units
    if ((unit.resolvedFoc === 'Special' || unit.resolvedFoc === 'Rare') && !unit.isMainHost) {
        const existingUnitsOfType = armyList.filter(u => 
            u.name === unit.name && u.faction !== mainHostFaction
        ).length;
        if (existingUnitsOfType >= 1) {
            return false;
        }
    }

    return true;
}

function handleCompositionRatio(event) {
    const unitName = dom.unitSelector.value;
    if (!unitName) return;
    const baseUnit = getUnitDataByName(unitName);
    if (!baseUnit || !baseUnit.composition?.ruleLogic) return;

    const primaryInput = dom.configArea.querySelector('#config-qty-primary');
    const secondaryInput = dom.configArea.querySelector('#config-qty-secondary');
    if (!primaryInput || !secondaryInput) return;

    const { secondaryMin, secondaryMax, perPrimary } = baseUnit.composition.ruleLogic;
    const unitMinPrimary = baseUnit.min.primary;
    const unitMaxPrimary = baseUnit.max.primary;
    const unitMinSecondary = baseUnit.min.secondary;
    const unitMaxSecondary = baseUnit.max.secondary;

    const changedInputId = event?.target.id;

    if (changedInputId === 'config-qty-primary') {
        // --- Logic when PRIMARY (Garrapatos) count changes ---
        const primaryQty = parseInt(primaryInput.value, 10) || 0;
        const groups = Math.ceil(primaryQty / perPrimary);
        
        const minAllowedSecondary = Math.max(groups * secondaryMin, unitMinSecondary);
        const maxAllowedSecondaryFromRatio = groups * secondaryMax;
        const finalMaxAllowed = Math.min(maxAllowedSecondaryFromRatio, primaryQty, unitMaxSecondary);

        // Auto-correct the secondary value if it falls outside the new valid range
        if (parseInt(secondaryInput.value) < minAllowedSecondary) {
            secondaryInput.value = minAllowedSecondary;
        }
        if (parseInt(secondaryInput.value) > finalMaxAllowed) {
            secondaryInput.value = finalMaxAllowed;
        }

    } else if (changedInputId === 'config-qty-secondary') {
        // --- Logic when SECONDARY (Paztorez) count changes ---
        const secondaryQty = parseInt(secondaryInput.value, 10) || 0;

        // --- NEW & CORRECTED LOGIC ---
        // 1. Calculate the new MINIMUM required primary models
        const requiredGroupsForMax = Math.ceil(secondaryQty / secondaryMax);
        let minRequiredPrimary = (requiredGroupsForMax - 1) * perPrimary + 1;
        minRequiredPrimary = Math.max(minRequiredPrimary, secondaryQty, unitMinPrimary);

        // 2. Calculate the new MAXIMUM allowed primary models
        const maxGroupsForMin = Math.floor(secondaryQty / secondaryMin);
        let maxAllowedPrimary = maxGroupsForMin * perPrimary;
        maxAllowedPrimary = Math.min(maxAllowedPrimary, unitMaxPrimary);

        // 3. Auto-correct the primary value if it falls outside the new valid range
        if (parseInt(primaryInput.value) < minRequiredPrimary) {
            primaryInput.value = minRequiredPrimary;
        }
        if (parseInt(primaryInput.value) > maxAllowedPrimary) {
            primaryInput.value = maxAllowedPrimary;
        }
        // --- END OF NEW LOGIC ---
    }
}

// Add this new helper function to main.js

/**
 * Determines the dynamic subfaction of a unit based on its base data and current selections.
 * Works for Daemonic Marks, Orcs, Goblins, etc.
 * @param {object} unit - The unit object, including its 'selections'.
 * @returns {string|null} The name of the subfaction (e.g., "Khorne", "Orco", "Goblin") or null.
 */
function getUnitSubfaction(unit) {
    const selectedOptions = unit.selections?.options || [];

    // Dynamic check for Daemon Prince Marks
    if (unit.name.includes("Príncipe Demonio")) {
        if (selectedOptions.includes("Khorne")) return "Khorne";
        if (selectedOptions.includes("Tzeentch")) return "Tzeentch";
        if (selectedOptions.includes("Nurgle")) return "Nurgle";
        if (selectedOptions.includes("Slaanesh")) return "Slaanesh";
        return "Absoluto"; // Default for the Prince
    }

    // Return the base subfaction for all other units (Heraldos, Orcos, Goblins, etc.)
    return unit.subfaction || null;
}


function openSelectionModal(e) {
    const type = e.target.closest('.open-modal-btn').dataset.type;
    const unitName = dom.unitSelector.value;
    if (!unitName) return;

    const configuredUnit = getConfigurationFromPanel();
    const unit = configuredUnit.unitData;
    const tempUnitData = { ...unit, selections: configuredUnit.selections, name: configuredUnit.name };
    const unitSubfaction = getUnitSubfaction(tempUnitData);

    dom.modal.classList.remove('hidden');
    dom.modal.dataset.currentType = type;

    let title = "Seleccionar";
    let itemsToShow = {};
    const unitFactionData = mainHostFaction ? chaosHostData[unit.faction] : currentArmyData;
    
    // Reset modal datasets...
    dom.modal.dataset.maxItems = '0';
    dom.modal.dataset.maxRelics = '0';
    dom.modal.dataset.skillLimit = '0';
    dom.modal.dataset.skillType = '';
    dom.modal.dataset.pointLimit = 'Infinity';
    dom.modal.dataset.maxMayorRegalos = '0';
    dom.modal.dataset.maxMenorRegalos = '0';

    const filterBySubfaction = (items) => {
        if (!items || !unitSubfaction) return items;

        // CORRECTED RULE: A character's subfaction must EXACTLY match the item's subfaction.
        // There is no crossover with "Absoluto" unless the character is also "Absoluto".
        return Object.fromEntries(
            Object.entries(items).filter(([_, data]) => 
                data.subfaction === unitSubfaction
            )
        );
    };

    switch (type) {
        case 'magicItems':
            const magicItemsLabel = unitFactionData.magicItemsLabel || "Objetos Mágicos";
            title = magicItemsLabel;
            const magicItems = Object.fromEntries(Object.entries(unitFactionData.magicItemsDB).filter(([k]) => k !== "Estandarte Mágico"));
            Object.keys(magicItems).forEach(category => {
                const filtered = filterBySubfaction(magicItems[category]);
                if (Object.keys(filtered).length > 0) itemsToShow[category] = filtered;
            });
            dom.modal.dataset.maxItems = unit.maxMagicItems || '0';
            dom.modal.dataset.maxRelics = unit.maxRelics || '0';
            dom.modal.dataset.pointLimit = '100';
            break;

        case 'champItems':
            title = "Objetos del Campeón";
            const champItemsLabel = unitFactionData.magicItemsLabel || "Objetos del Campeón";
            title = champItemsLabel;
            const champMagicItems = Object.fromEntries(Object.entries(unitFactionData.magicItemsDB).filter(([k]) => k !== "Estandarte Mágico"));
            Object.keys(champMagicItems).forEach(category => {
                const filtered = filterBySubfaction(champMagicItems[category]);
                if (Object.keys(filtered).length > 0) itemsToShow[category] = filtered;
            });
            dom.modal.dataset.pointLimit = unit.champItems || '0';
            break;

        case 'magicBanner':
        case 'battleStandardBanner':
            if (unit.faction === 'dcaos' && type === 'battleStandardBanner') {
                title = "Iconos Demoníacos Mayores";
                if (unitFactionData.iconosDemoniacosDB) {
                    const majorIcons = Object.fromEntries(Object.entries(unitFactionData.iconosDemoniacosDB).filter(([_, data]) => data.type === 'Mayor'));
                    itemsToShow["Iconos Mayores"] = filterBySubfaction(majorIcons);
                }
                dom.modal.dataset.pointLimit = 'Infinity';
            } else {
                title = "Estandarte Mágico";
                if (unitFactionData.magicItemsDB["Estandarte Mágico"]) {
                    itemsToShow["Estandarte Mágico"] = filterBySubfaction(unitFactionData.magicItemsDB["Estandarte Mágico"]);
                }
                dom.modal.dataset.pointLimit = (type === 'magicBanner') ? (unit.magicBanner || '100') : '100';
            }
            break;

        case 'iconos':
            title = "Iconos Demoníacos Menores";
            if (unitFactionData?.iconosDemoniacosDB) {
                const minorIcons = Object.fromEntries(Object.entries(unitFactionData.iconosDemoniacosDB).filter(([_, data]) => data.type === 'Menor'));
                itemsToShow["Iconos Menores"] = filterBySubfaction(minorIcons);
            }
            dom.modal.dataset.pointLimit = 'Infinity';
            break;

        case 'regalos':
            title = "Regalos Demoníacos (Campeón)";
            if (unitFactionData?.regalosDemoniacosDB) {
                const giftsDB = unitFactionData.regalosDemoniacosDB;
                itemsToShow = {
                    "Regalo Mayor": filterBySubfaction(Object.fromEntries(Object.entries(giftsDB).filter(([_,d])=>d.type === 'Regalo Mayor'))),
                    "Regalo Menor": filterBySubfaction(Object.fromEntries(Object.entries(giftsDB).filter(([_,d])=>d.type === 'Regalo Menor')))
                };
                dom.modal.dataset.pointLimit = unit.champSkills?.limit || '25';
            }
            break;

        case 'armySkills':
            // --- START OF FIX ---
            if (unit.faction === 'dcaos') {
                title = "Regalos Demoníacos";
                if (unitFactionData?.regalosDemoniacosDB) {
                    const giftsDB = unitFactionData.regalosDemoniacosDB;
                    // This logic is now identical to the 'regalos' case, which is correct.
                    itemsToShow = {
                        "Regalo Mayor": filterBySubfaction(Object.fromEntries(Object.entries(giftsDB).filter(([_,d])=>d.type === 'Regalo Mayor'))),
                        "Regalo Menor": filterBySubfaction(Object.fromEntries(Object.entries(giftsDB).filter(([_,d])=>d.type === 'Regalo Menor')))
                    };
                }
            } else { // This handles all other armies like Orcs & Goblins
                const dbToUse = unitFactionData.armySkillsDB;
                const skillsLabel = unitFactionData.armySkillsLabel || "Habilidades de Ejército";
                title = skillsLabel;
                
                const groupedByType = {};
                Object.entries(dbToUse).forEach(([name, item]) => { // Use Object.entries to get the name
                    const itemType = item.type || skillsLabel;
                    if (!groupedByType[itemType]) groupedByType[itemType] = {};
                    groupedByType[itemType][name] = item; // Use the name as the key
                });

                Object.keys(groupedByType).forEach(groupName => {
                    const filteredGroup = filterBySubfaction(groupedByType[groupName]);
                    if (Object.keys(filteredGroup).length > 0) {
                        itemsToShow[groupName] = filteredGroup;
                    }
                });
            }
            // --- END OF FIX ---
            
            if (unit.maxSkills) {
                dom.modal.dataset.skillLimit = unit.maxSkills.limit || '0';
                dom.modal.dataset.skillType = unit.maxSkills.type || '';
            }
            break;
    }

    dom.modalTitle.textContent = title;
    let currentSelection = tempSelections[type]?.selection || {};
    let pointLimitForFilter = parseInt(dom.modal.dataset.pointLimit);
    if (isNaN(pointLimitForFilter)) { pointLimitForFilter = Infinity; }

    let contentHtml = '';
    Object.entries(itemsToShow).forEach(([category, items]) => {
        if (!items || Object.keys(items).length === 0) return;
        const validItems = Object.entries(items).filter(([_, data]) => data.points <= pointLimitForFilter);
        if (validItems.length > 0) {
            contentHtml += `<h3 class="font-bold text-lg text-yellow-500 mt-4 mb-2">${category}</h3><div class="modal-item-list">`;
            validItems.sort((a,b) => a[0].localeCompare(b[0])).forEach(([name, data]) => {
                const isChecked = currentSelection[name] ? 'checked' : '';
                const relicIcon = data.relic ? '💎 ' : '';
                const labelClass = data.relic ? 'relic-item' : '';
                const summaryHtml = data.summary ? `<br><span class="text-xs text-gray-400 pl-4">- ${data.summary}</span>` : '';
                contentHtml += `<div class="p-1"><input type="checkbox" id="item-${name.replace(/\s|\W/g, '')}" data-cost="${data.points}" data-name="${name}" data-category="${category}" data-relic="${!!data.relic}" class="modal-item-cb mr-2" ${isChecked}><label for="item-${name.replace(/\s|\W/g, '')}" class="${labelClass}">${relicIcon}${name} (${data.points} pts)${summaryHtml}</label></div>`;
            });
            contentHtml += `</div>`;
        }
    });
    
    dom.modalContent.innerHTML = contentHtml;
    updateModalState();
}
function updateModalState() {
    const type = dom.modal.dataset.currentType;
    const maxItems = parseInt(dom.modal.dataset.maxItems);
    const maxRelics = parseInt(dom.modal.dataset.maxRelics);
    const pointLimit = parseInt(dom.modal.dataset.pointLimit);
    const maxMayorRegalos = parseInt(dom.modal.dataset.maxMayorRegalos);
    const maxMenorRegalos = parseInt(dom.modal.dataset.maxMenorRegalos);

    const skillLimit = parseInt(dom.modal.dataset.skillLimit);
    const skillType = dom.modal.dataset.skillType;

    let currentPoints = 0;
    let selectedItemCount = 0;
    let selectedRelicCount = 0;
    let selectedMayorCount = 0;
    let selectedMenorCount = 0;

    document.querySelectorAll('.modal-item-cb:checked, .modal-item-rb:checked').forEach(cb => {
        currentPoints += parseInt(cb.dataset.cost);
        selectedItemCount++;
        if (cb.dataset.relic === 'true') selectedRelicCount++;
        if (cb.dataset.category === 'Regalo Mayor') selectedMayorCount++;
        if (cb.dataset.category === 'Regalo Menor') selectedMenorCount++;
        // --- START: NEW COUNTERS FOR DAEMON GIFTS ---
        if (cb.dataset.category === 'Regalo Mayor') selectedMayorCount++;
        if (cb.dataset.category === 'Regalo Menor') selectedMenorCount++;
        // --- END: NEW COUNTERS FOR DAEMON GIFTS ---
    });

    let isInvalid = false;
    let footerHtml = '';

    if (type === 'magicItems') {
        const itemLimitExceeded = selectedItemCount > maxItems;
        const relicLimitExceeded = selectedRelicCount > maxRelics;
        isInvalid = itemLimitExceeded || relicLimitExceeded;
        footerHtml = `<div class="flex justify-between items-center w-full text-sm">
            <div class="text-gray-400">Puntos: <span class="font-bold text-yellow-400">${currentPoints}</span> / ${pointLimit}</div>
            <div class="text-gray-400">Objetos: <span class="font-bold ${itemLimitExceeded ? 'text-red-500' : 'text-white'}">${selectedItemCount}</span> / ${maxItems}</div>
            <div class="text-gray-400">Reliquias: <span class="font-bold ${relicLimitExceeded ? 'text-red-500' : 'text-white'}">${selectedRelicCount}</span> / ${maxRelics}</div>
        </div>`;



 // --- START: NEW VALIDATION BLOCK FOR DAEMON GIFTS ---
    // This new block handles validation for both champion gifts ('regalos') and character gifts ('armySkills' for daemons).
    } else if (type === 'regalos' || (type === 'armySkills' && currentArmyData.FACTION_ID === 'dcaos')) {
        const limit = (type === 'regalos') ? pointLimit : skillLimit;
        const pointsExceeded = currentPoints > limit;
        isInvalid = pointsExceeded;
        footerHtml = `<div class="w-full text-sm text-right">
            Puntos de Regalos: <span class="font-bold ${isInvalid ? 'text-red-500' : 'text-yellow-400'}">${currentPoints}</span> / ${limit}
        </div>`;
    // --- END: NEW VALIDATION BLOCK FOR DAEMON GIFTS ---

    } else if (type === 'armySkills') {
        const unitName = dom.unitSelector.value;
        const baseUnitData = getUnitDataByName(unitName);
        let skillLabel = "Habilidades";
        if (mainHostFaction && chaosHostData[baseUnitData.faction]) {
             skillLabel = chaosHostData[baseUnitData.faction].armySkillsLabel || skillLabel;
        } else if(currentArmyData) {
             skillLabel = currentArmyData.armySkillsLabel || skillLabel;
        }

        if (skillType === 'count') {
            const skillLimitExceeded = selectedItemCount > skillLimit;
            isInvalid = skillLimitExceeded;
            footerHtml = `<div class="w-full text-sm text-right">
                Puntos Gastados: <span class="font-bold text-yellow-400">${currentPoints}</span> | ${skillLabel}: <span class="font-bold ${skillLimitExceeded ? 'text-red-500' : 'text-white'}">${selectedItemCount}</span> / ${skillLimit}
            </div>`;
        } else { // type === 'points'
            isInvalid = currentPoints > skillLimit;
            footerHtml = `<div class="w-full text-sm text-right">
                Puntos de ${skillLabel}: <span class="font-bold ${isInvalid ? 'text-red-500' : 'text-yellow-400'}">${currentPoints}</span> / ${skillLimit}
            </div>`;
        }
    } else {
        isInvalid = currentPoints > pointLimit;
        footerHtml = `<div class="w-full text-sm text-right">
            Puntos Gastados: <span class="font-bold ${isInvalid ? 'text-red-500' : 'text-yellow-400'}">${currentPoints}</span> / ${pointLimit}
        </div>`;
    }

    dom.modalFooter.innerHTML = footerHtml;
    dom.modalConfirmBtn.disabled = isInvalid;
}

// FIX: Update renderArmyList to show manual units in their own FOC categories
function renderArmyList() {
    dom.armyListContainer.innerHTML = '';
    if (armyList.length === 0) {
        dom.armyListContainer.innerHTML = `<p id="empty-list-msg" class="text-gray-500 text-center mt-8">Tu lista de ejército está vacía.</p>`;
        return;
    }

    // Get the resolved army list with proper FOC assignments from ruleset
    const resolvedArmyList = getResolvedArmyList();

    // Group units by their RESOLVED FOC (from ruleset)
    const groupedByFoc = {};
    if (!currentArmyData) return;
    
    // Initialize all FOC categories
    Object.keys(currentArmyData.FOC_CONFIG).forEach(foc => groupedByFoc[foc] = []);

    // Group units by their resolved FOC - INCLUDING MANUAL UNITS
    resolvedArmyList.forEach(unit => {
        // Manual units should be treated as independent units, not children
        const effectiveFoc = unit.resolvedFoc || unit.foc;
        if (groupedByFoc[effectiveFoc]) {
            groupedByFoc[effectiveFoc].push(unit);
        } else {
            console.warn(`Unit ${unit.name} has an unknown resolved FOC: ${effectiveFoc}`);
            // Fallback: add to Special category
            if (groupedByFoc.Special) {
                groupedByFoc.Special.push(unit);
            }
        }
    });

    // Render each FOC category
    Object.entries(groupedByFoc).forEach(([foc, units]) => {
        if (units.length === 0) return;

        const focConfig = currentArmyData.FOC_CONFIG[foc];
        const totalFocPoints = units.reduce((sum, u) => sum + (u.points || 0), 0);
        
        dom.armyListContainer.innerHTML += `
            <div class="foc-header flex justify-between items-center ${focConfig.color} text-white p-2 rounded-t-lg mt-4">
                <h3 class="font-bold">${focConfig.label}</h3>
                <span class="font-bold">${totalFocPoints} pts</span>
            </div>
        `;

        units.forEach(unit => {
            const unitData = !unit.isManual ? getUnitDataByName(unit.name) : null;
            
            const editingClass = unit.id === editingUnitId ? 'editing' : '';
            let titleText;

            if (unit.label) {
                titleText = `"${unit.label}"`;
            } else if (unit.isManual) {
                titleText = unit.name;
            } else if (typeof unit.qty === 'object' && unitData?.composition) {
                const comp = unitData.composition;
                titleText = `${unit.qty.primary}x ${comp.primary.name} & ${unit.qty.secondary}x ${comp.secondary.name}`;
            } else {
                titleText = `${unit.qty > 1 || unit.qty === 0 ? unit.qty + 'x ' : ''}${unit.name}`;
            }

            let armyOrigin = '';
            if(mainHostFaction && unit.faction !== mainHostFaction && chaosHostData[unit.faction]) {
                armyOrigin = `<span class="text-xs text-gray-400 ml-2">(${chaosHostData[unit.faction].ARMY_NAME})</span>`;
            }

            const manualIndicator = unit.isManual ? 
                `<span class="text-xs text-blue-400 ml-2">(Unidad Manual)</span>` : '';

            const titleHtml = `<p class="font-bold text-lg text-white">${titleText}${armyOrigin}${manualIndicator}</p>`;
            let generalCheckboxHtml = '';

            // Only allow regular units to be generals, not manual units
            if (unitData && (unitData.foc === 'Lord' || unitData.foc === 'Hero') && !unit.isManual) {
                const isChecked = unit.id === generalId ? 'checked' : '';
                generalCheckboxHtml = `
                    <div class="mt-2">
                        <label class="text-xs text-yellow-400">
                            <input type="checkbox" class="general-checkbox mr-1" data-id="${unit.id}" ${isChecked}> 
                            General
                        </label>
                    </div>`;
            }

            // Mount rules code
            let unitRules = unit.isManual ? '' : (unitData?.reglasEspeciales || '');
            
            if (unitData && unit.selections.mount) {
                let mountDB;
                if (mainHostFaction && chaosHostData[unit.faction]) {
                    mountDB = chaosHostData[unit.faction].mountsDB;
                } else {
                    mountDB = currentArmyData.mountsDB;
                }
                const mountData = mountDB[unit.selections.mount.name];
                if (mountData && mountData.reglasEspeciales) {
                    unitRules += unitRules ? `, ${mountData.reglasEspeciales}` : mountData.reglasEspeciales;
                }
            }
            const specialRulesHtml = unitRules ? `<div class="text-xs text-blue-300 mt-2"><b>Reglas:</b> ${unitRules}</div>` : '';

            const entryHTML = `
                <div class="unit-entry bg-gray-700 p-3 ${editingClass} ${unit.isManual ? 'manual-unit' : ''}" data-id="${unit.id}">
                    <div class="flex justify-between items-start">
                        <div>
                            ${titleHtml}
                            <div class="text-xs text-gray-400 pl-4 mt-1">
                                ${unit.displayOptions.map(opt => `<span>${opt}</span>`).join('<br>')}
                            </div>
                            ${specialRulesHtml}
                        </div>
                        <div class="text-right flex-shrink-0 pl-2">
                            <p class="font-bold text-xl text-yellow-400">${unit.points} pts</p>
                            <div class="mt-1 flex items-center justify-end gap-2">
                                <button class="remove-btn text-red-400 hover:text-red-300 text-xs font-bold" 
                                        data-action="remove" data-id="${unit.id}" title="Borrar unidad">
                                    Borrar
                                </button>
                            </div>
                            ${generalCheckboxHtml}
                        </div>
                    </div>
                </div>`;
                
            dom.armyListContainer.insertAdjacentHTML('beforeend', entryHTML);
        });
    });
}

function startEdit(id) {
    const unitToEdit = armyList.find(u => u.id === id);
    // Don't allow editing manual units directly
    if (!unitToEdit || unitToEdit.isManual) return;

    console.log('=== START EDIT DEBUG ===');
    console.log('Editing unit:', unitToEdit);

    editingUnitId = id;
    tempSelections = JSON.parse(JSON.stringify(unitToEdit.selections || {}));
    // FIRST: Populate tempManualEntry BEFORE any rendering happens
   

    // Handle manual units for this parent - reset tempManualEntry
    // FIX: Only populate tempManualEntry - processUiActions will handle rendering
        // FIRST: Populate tempManualEntry BEFORE any rendering happens
    tempManualEntry = {};
    const existingManualUnits = _getManualUnitsForParent(id);
        
    console.log('Found manual units for parent:', existingManualUnits);

    existingManualUnits.forEach(manualUnit => {
          console.log('Processing manual unit:', manualUnit);
        // Extract source skill from displayOptions
        const viaOption = manualUnit.displayOptions.find(opt => opt.startsWith('Vía: '));
        if (viaOption) {
            const sourceSkill = viaOption.replace('Vía: ', '');
            
            // Extract details (everything except the "Vía" line)
            const details = manualUnit.displayOptions
                .filter(opt => !opt.startsWith('Vía: '))
                .join(', ');
            
            tempManualEntry[sourceSkill] = {
                name: manualUnit.name,
                points: manualUnit.points.toString(),
                details: details,
                allyArmyId: manualUnit.faction !== currentArmyData?.FACTION_ID ? manualUnit.faction : '',
                sourceSkill: sourceSkill
            };
                        console.log(`Added to tempManualEntry for ${sourceSkill}:`, tempManualEntry[sourceSkill]);
        } else {
            console.warn('Manual unit missing Vía option:', manualUnit);

        }
    });
        console.log('Final tempManualEntry:', tempManualEntry);


    console.log('startEdit: tempManualEntry populated', tempManualEntry);
    // Let updateAndRenderConfigPanel handle the rendering
     dom.unitSelector.value = unitToEdit.name;
    dom.unitSelector.disabled = true;
    // The manual entries will be populated by processUiActions when the config panel renders
    // based on the current skills/selections
    // NOW call updateAndRenderConfigPanel - tempManualEntry is ready

    updateAndRenderConfigPanel(unitToEdit);

    dom.addToListBtn.querySelector('span').textContent = 'Actualizar Unidad';
    dom.addToListBtn.classList.replace('bg-green-600', 'bg-blue-600');
    dom.addToListBtn.classList.replace('hover:bg-green-700', 'hover:bg-blue-700');
    renderArmyList();
    window.scrollTo({ top: 0, behavior: 'smooth' });
        
    console.log('=== END START EDIT ===');

}


function duplicateUnit(id) {
    const originalParent = armyList.find(u => u.id === id);
    if (!originalParent || originalParent.isManual) return;

    const newParent = JSON.parse(JSON.stringify(originalParent));
    newParent.id = nextId++;

    // FIX: Find and duplicate manual units for this parent
    const originalManualUnits = _getManualUnitsForParent(id);
    const newManualUnits = originalManualUnits.map(manualUnit => {
        const newManualUnit = JSON.parse(JSON.stringify(manualUnit));
        newManualUnit.id = nextId++;
        newManualUnit.createdBy = newParent.id;
        return newManualUnit;
    });

    armyList.push(newParent, ...newManualUnits);

    updateMasterUI();
    renderArmyList();
    storage.saveStateToLocalStorage(getCurrentAppState());
}


// FIX: Update army list click handler to prevent editing manual units
dom.armyListContainer.addEventListener('click', (e) => {
    const unitEntry = e.target.closest('.unit-entry');
    if (!unitEntry) return;
    const id = parseInt(unitEntry.dataset.id);
    const unit = armyList.find(u => u.id === id);

    // Handle general checkbox for non-manual units only
    if (e.target.classList.contains('general-checkbox') && !unit?.isManual) {
          // If the box is checked, this unit becomes the general.
        // If it's unchecked, there is no general.
        generalId = e.target.checked ? id : null;
         // The master UI update will re-render the list, ensuring only one box
        // can be checked at a time and all rules are re-evaluated.
        updateMasterUI();
        return; // Stop here to prevent the click from also triggering an edit.
    }

   
    const action = e.target.dataset.action;
    if (action === 'duplicate') {
        duplicateUnit(id);
    } else if (action === 'remove') {
        removeUnitFromList(id);
    } else if (!e.target.closest('button, input') && !unit?.isManual) {
        // Only allow editing non-manual units
        startEdit(id);
    }
});

dom.armyListContainer._hasClickListener = true; // Mark as having listener
function removeUnitFromList(id) {
    if (editingUnitId === id) {
        cancelEdit();
    }
    const wasGeneral = (id === generalId);

    const unitToRemove = armyList.find(unit => unit.id === id);
    if (!unitToRemove) return;

    const idsToRemove = new Set([id]);
    
    // If removing a parent unit, also remove its manual units
    if (!unitToRemove.isManual) {
        const manualUnits = _getManualUnitsForParent(id);
        manualUnits.forEach(manualUnit => idsToRemove.add(manualUnit.id));
    }
    
    // If removing a manual unit, check if it has a parent
    if (unitToRemove.isManual && unitToRemove.createdBy) {
        // Optional: You might want to remove the parent's reference to this manual unit
        // This depends on your desired behavior
    }

    armyList = armyList.filter(unit => !idsToRemove.has(unit.id));

    if (wasGeneral) {
        generalId = null;
        populateUnitSelector();
    }
    updateMasterUI();
    renderArmyList();
    storage.saveStateToLocalStorage(getCurrentAppState());
}

// NEW: Clean up duplicate manual units in the army list
function cleanupDuplicateManualUnits() {
    const seenManualUnits = new Map(); // key: createdBy + name + points
    const unitsToRemove = new Set();
    
    // First pass: identify duplicates
    armyList.forEach((unit, index) => {
        if (unit.isManual) {
            const key = `${unit.createdBy}_${unit.name}_${unit.points}`;
            if (seenManualUnits.has(key)) {
                // This is a duplicate, mark for removal
                unitsToRemove.add(unit.id);
                console.log(`Found duplicate manual unit: ${unit.name} (ID: ${unit.id})`);
            } else {
                seenManualUnits.set(key, unit.id);
            }
        }
    });
    
    // Second pass: remove duplicates
    if (unitsToRemove.size > 0) {
        armyList = armyList.filter(unit => !unitsToRemove.has(unit.id));
        console.log(`Removed ${unitsToRemove.size} duplicate manual units`);
    }
}
function calculateFocPoints() {
    const focPoints = { Lord: 0, Hero: 0, Core: 0, Special: 0, Rare: 0 };
    if (!currentArmyData) return focPoints;

    const resolvedArmyList = getResolvedArmyList();

    resolvedArmyList.forEach(unit => {
        // Count points for ALL units, including manual units
        const effectiveFoc = unit.resolvedFoc || unit.foc;

        if (focPoints.hasOwnProperty(effectiveFoc)) {
            focPoints[effectiveFoc] += unit.points || 0;
        }
    });
    
    return focPoints;
}

function updateFocSummary(battlePoints, focPoints) {
    if (!currentArmyData || battlePoints <= 0) {
        dom.focSummaryEl.innerHTML = '';
        return;
    }
    
    // Apply layout classes dynamically
    dom.focSummaryEl.className = 'flex flex-col lg:flex-row gap-4';

    const { FOC_CONFIG } = currentArmyData;

    const personajesPoints = focPoints.Lord + focPoints.Hero;
    const personajesPercentage = personajesPoints / battlePoints;
    const personajesMaxPercentage = 0.50;
    const personajesLimitInPoints = Math.floor(battlePoints * personajesMaxPercentage);

    let personajesHTML = `
        <div class="w-full lg:w-1/2 bg-gray-900/50 p-2 rounded-lg">
            <div class="flex justify-between items-center mb-2">
                <h3 class="font-bold text-white">Personajes</h3>
                <span class="text-xs text-gray-400">${personajesMaxPercentage * 100}% Max (${personajesLimitInPoints} pts)</span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-1">
                <div class="bg-yellow-500 h-1 rounded-full foc-bar-inner" style="width: ${Math.min(100, (personajesPercentage / personajesMaxPercentage) * 100)}%"></div>
            </div>
            <div class="flex justify-between text-xs text-gray-400 mt-1">
                <span>${personajesPoints} pts</span>
                <span class="${personajesPercentage > personajesMaxPercentage ? 'text-red-400' : 'text-green-400'}">${(personajesPercentage * 100).toFixed(0)}%</span>
            </div>
            <div class="flex flex-col md:flex-row gap-2 mt-2">`;

    ['Lord', 'Hero'].forEach(foc => {
        const config = FOC_CONFIG[foc];
        const points = focPoints[foc];
        const percentage = points / battlePoints;
        let limitInPoints = Math.floor(battlePoints * config.max);
        let minDisplay = `${(config.max * 100)}% Max (${limitInPoints} pts)`;

        let barHtml = `<div class="w-full bg-gray-700 rounded-full h-1 mt-1"><div class="${config.color} h-1 rounded-full foc-bar-inner" style="width: ${Math.min(100, (percentage / config.max) * 100)}%"></div></div>`;
        personajesHTML += `
            <div class="bg-gray-800 p-1.5 rounded w-full md:w-1/2">
                <div class="flex justify-between items-baseline">
                    <span class="font-bold text-white text-xs">${config.label}</span>
                    <span class="text-xs text-gray-500">${minDisplay}</span>
                </div>
                ${barHtml}
                <div class="flex justify-between text-xs text-gray-400 mt-1">
                    <span>${points} pts</span>
                    <span class="${percentage > config.max ? 'text-red-400' : 'text-green-400'}">${(percentage * 100).toFixed(0)}%</span>
                </div>
            </div>`;
    });
    personajesHTML += `</div></div>`;

    const tropasPoints = focPoints.Core + focPoints.Special + focPoints.Rare;
    const tropasPercentage = battlePoints > 0 ? tropasPoints / battlePoints : 0;
    const corePercentage = battlePoints > 0 ? focPoints.Core / battlePoints : 0;
    const coreMinOk = corePercentage >= (FOC_CONFIG.Core.min || 0);

    let tropasHTML = `
        <div class="w-full lg:w-1/2 bg-gray-900/50 p-2 rounded-lg">
            <div class="flex justify-between items-center mb-2">
                <h3 class="font-bold text-white">Tropas</h3>
                <span class="text-xs ${coreMinOk ? 'text-gray-400' : 'text-red-400'}">Mín. Básicas ${coreMinOk ? 'OK' : 'FAIL'}</span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-1">
                <div class="bg-green-500 h-1 rounded-full foc-bar-inner" style="width: ${tropasPercentage * 100}%"></div>
            </div>
            <div class="flex justify-between text-xs text-gray-400 mt-1">
                <span>${tropasPoints} pts</span>
                <span>${(tropasPercentage * 100).toFixed(0)}%</span>
            </div>
            <div class="flex flex-col md:flex-row gap-2 mt-2">`;

    ['Core', 'Special', 'Rare'].forEach(foc => {
        const config = FOC_CONFIG[foc];
        const points = focPoints[foc];
        const percentage = points / battlePoints;
        const isInvalid = (config.min > 0 && percentage < config.min) || percentage > config.max;

        let minDisplay;
        if (config.min > 0) {
            const minInPoints = Math.floor(battlePoints * config.min);
            minDisplay = `${(config.min * 100)}% Min (${minInPoints} pts)`;
        } else {
            const limitInPoints = Math.floor(battlePoints * config.max);
            minDisplay = `${(config.max * 100)}% Max (${limitInPoints} pts)`;
        }

        const barMax = config.max === 1 ? 0.5 : config.max;

        tropasHTML += `
            <div class="bg-gray-800 p-1.5 rounded w-full md:w-1/3">
                <div class="flex justify-between items-baseline">
                    <span class="font-bold text-white text-xs">${config.label}</span>
                    <span class="text-xs text-gray-500">${minDisplay}</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2 mt-1">
                    <div class="${config.color} h-2 rounded-full foc-bar-inner" style="width: ${Math.min(100, (percentage / barMax) * 100)}%"></div>
                </div>
                <div class="flex justify-between text-xs text-gray-400 mt-1">
                    <span>${points} pts</span>
                    <span class="${isInvalid ? 'text-red-400' : 'text-green-400'}">${(percentage * 100).toFixed(0)}%</span>
                </div>
            </div>`;
    });
    tropasHTML += `</div></div>`;

    dom.focSummaryEl.innerHTML = personajesHTML + tropasHTML;
}
// --- REPLACE THIS ENTIRE FUNCTION IN main.js ---
// (A good place is after the updateFocSummary function)

// --- REPLACE THIS ENTIRE FUNCTION IN main.js ---
function updateHostSummary(battlePoints) {
    const hostSummaryEl = dom.hostSummaryEl;
    if (!mainHostFaction || !hostSummaryEl) {
        if(hostSummaryEl) hostSummaryEl.classList.add('hidden');
        return;
    }

    let mainHostMinPercentage = 1.0;
    if (battlePoints >= 3000) {
        mainHostMinPercentage = 0.60;
    } else if (battlePoints >= 2000) {
        mainHostMinPercentage = 0.67;
    } else if (battlePoints >= 1000) {
        mainHostMinPercentage = 0.75;
    }
    const supportHostMaxPercentage = 1.0 - mainHostMinPercentage;

    // --- CORRECTED LAYOUT LOGIC ---
    let mainHostWidthClass = 'w-full';
    let supportHostWidthClass = 'w-full';
    // This is the key change: use lg:flex-row to make the container horizontal on large screens.
    let parentContainerClass = 'flex flex-col lg:flex-row gap-4 text-xs';

    if (supportHostMaxPercentage > 0) {
        // Assign proportional widths for large screens using available Tailwind classes.
        if (battlePoints >= 3000) { // 60/40 split
            mainHostWidthClass = 'w-full lg:w-3/5';
            supportHostWidthClass = 'w-full lg:w-2/5';
        } else { // Covers both ~67/33 and 75/25 splits, using the closest available classes.
            mainHostWidthClass = 'w-full lg:w-2/3';
            supportHostWidthClass = 'w-full lg:w-1/3';
        }
    }

    const mainHostPoints = armyList.filter(u => u.faction === mainHostFaction).reduce((sum, u) => sum + u.points, 0);
    const supportHostPoints = armyList.filter(u => u.faction !== mainHostFaction).reduce((sum, u) => sum + u.points, 0);
    const supportHostMaxPoints = Math.floor(battlePoints * supportHostMaxPercentage);
    const mainHostBarPercentage = battlePoints > 0 ? (mainHostPoints / battlePoints) * 100 : 0;
    const supportHostBarPercentage = supportHostMaxPoints > 0 ? (supportHostPoints / supportHostMaxPoints) * 100 : 0;
    const mainHostName = (chaosHostData[mainHostFaction] && chaosHostData[mainHostFaction].ARMY_NAME) || "Principal";

    hostSummaryEl.className = parentContainerClass;
    hostSummaryEl.classList.remove('hidden');

    hostSummaryEl.innerHTML = `
        <div class="${mainHostWidthClass} bg-gray-800 p-2 rounded-lg">
            <div class="flex justify-between mb-1">
                <span class="font-semibold text-gray-300">Hueste Principal (${mainHostName})</span>
                <span class="text-gray-200 font-mono">${mainHostPoints} pts</span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2.5">
                <div class="bg-blue-500 h-2.5 rounded-full" style="width: ${mainHostBarPercentage}%"></div>
            </div>
            <div class="text-right text-gray-400 mt-1">Min ${Math.floor(mainHostMinPercentage * 100)}% (${Math.floor(battlePoints * mainHostMinPercentage)} pts)</div>
        </div>

        <div class="${supportHostWidthClass} bg-gray-800 p-2 rounded-lg ${supportHostMaxPoints === 0 ? 'hidden' : ''}">
            <div class="flex justify-between mb-1">
                <span class="font-semibold text-gray-300">Huestes de Apoyo</span>
                <span class="text-gray-200 font-mono">${supportHostPoints} pts</span>
            </div>
            <div class="w-full bg-gray-700 rounded-full h-2.5">
                <div class="bg-red-500 h-2.5 rounded-full" style="width: ${supportHostBarPercentage > 100 ? 100 : supportHostBarPercentage}%"></div>
            </div>
            <div class="text-right text-gray-400 mt-1">Max ${Math.floor(supportHostMaxPercentage * 100)}% (${supportHostMaxPoints} pts)</div>
        </div>
    `;
}
updateMasterUI(); // Initial call to set up the UI
// REPLACE the entire updateArmyWarnings function in main.js with this one.

function updateArmyWarnings(focPoints) {
    if (!currentArmyData) {
        dom.validationPopupContainer.innerHTML = '';
        return;
    }

    const battlePoints = parseInt(dom.battlePointsInput.value) || 0;
    if (battlePoints <= 0 || armyList.length === 0) {
        dom.validationPopupContainer.innerHTML = '';
        return;
    }

    const totalSpentPoints = armyList.reduce((sum, unit) => sum + (unit.points || 0), 0);
    const context = { armyList, currentArmyData, battlePoints, generalId, general: armyList.find(u => u.id === generalId), mainHostFaction, totalSpentPoints, focPoints };

    const { validationResults } = validateArmy(context);

    // --- THIS IS THE FIX ---
    // We now filter the results to only include errors and warnings.
    const errorsAndWarnings = validationResults.filter(result => !result.isValid || result.message.startsWith('⚠️'));
    // --- END OF FIX ---

    const createListItem = (isValid, text) => {
        const icon = text.startsWith('⚠️') ? '⚠️' : (isValid ? '✅' : '❌');
        const colorClass = text.startsWith('⚠️') ? 'text-yellow-400' : (isValid ? 'text-green-400' : 'text-red-400');
        const messageText = text.replace('⚠️ ', '');
        return `<li class="${colorClass}">${icon} ${messageText}</li>`;
    };

    let warningsHtml = '<h6>📋 Lista de Chequeo del Ejército</h6><ul class="list-unstyled small space-y-1 mt-2">';
    
    // If there are no errors or warnings, show a success message.
    if (errorsAndWarnings.length === 0) {
        warningsHtml += `<li class="text-green-400">✅ ¡Todas las reglas se cumplen!</li>`;
    } else {
        // Otherwise, only show the errors and warnings.
        errorsAndWarnings.forEach(result => {
            warningsHtml += createListItem(result.isValid, result.message);
        });
    }
    warningsHtml += '</ul>';

    const allRulesValid = errorsAndWarnings.every(r => r.isValid); // isValid is still true for warnings
    const buttonColor = allRulesValid ? 'bg-green-500 hover:bg-green-500' : 'bg-red-500 hover:bg-red-600';

    const popupHtml = `
        <div class="relative">
            <button id="validation-trigger" class="h-8 w-8 rounded-full ${buttonColor} text-white font-bold flex items-center justify-center text-lg focus:outline-none transition-colors">!</button>
            <div id="army-validation-checklist" class="hidden absolute top-10 right-0 w-80 bg-gray-800 border border-gray-600 rounded-lg shadow-2xl p-4 z-20 text-sm">
                ${warningsHtml}
            </div>
        </div>
    `;

    dom.validationPopupContainer.innerHTML = popupHtml;
}

// --- REPLACE THIS ENTIRE FUNCTION IN main.js ---
function updateMasterUI() {
    if (!currentArmyData) return;

    populateUnitSelector();
    
    const battlePoints = parseInt(dom.battlePointsInput.value) || 0;
    
    // FIX: Calculate total points including ALL units (parent and manual)
    const totalSpentPoints = armyList.reduce((sum, unit) => sum + (unit.points || 0), 0);

    dom.spentPointsEl.textContent = totalSpentPoints;
    dom.availablePointsEl.textContent = battlePoints - totalSpentPoints;

    const focPoints = calculateFocPoints();
    
    updateFocSummary(battlePoints, focPoints); 
    updateHostSummary(battlePoints); 
    
    renderArmyList(); 
    updateArmyWarnings(focPoints);

    const unitSelected = dom.unitSelector.value !== '';
    dom.addToListBtn.disabled = !unitSelected;

    storage.saveStateToLocalStorage(getCurrentAppState());
    
    // Debug log
    console.log('Army List:', armyList);
    console.log('Total Points:', totalSpentPoints);
    console.log('FOC Points:', focPoints);
}


function printArmyList() {
    if (!currentArmyData || armyList.length === 0) {
        alert("No hay nada que imprimir. Añade unidades a tu lista primero.");
        return;
    }

    const armyListName = dom.armyListNameInput.value || `${currentArmyData.ARMY_NAME} - Lista de Ejército`;
    const totalPoints = parseInt(dom.spentPointsEl.textContent);
    const battlePoints = parseInt(dom.battlePointsInput.value);
    const focPoints = calculateFocPoints();

    // FIX: Get resolved army list and ensure no duplicates
    const resolvedArmyList = getResolvedArmyList();
    
    // Debug: Log the resolved army list to check for duplicates
    console.log('Resolved Army List for Print:', resolvedArmyList);
    
    generatePrintView(resolvedArmyList, currentArmyData, armyListName, totalPoints, battlePoints, focPoints, mainHostFaction, chaosHostData, resolvedArmyList);
}


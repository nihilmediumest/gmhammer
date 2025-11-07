import { ARMY_REGISTRY } from './ejercitos.js';
// --- DOM Elements ---

const rawEditorModal = document.getElementById('raw-editor-modal');
const rawJsonTextarea = document.getElementById('raw-json-textarea');
const saveRawJsonBtn = document.getElementById('save-raw-json-btn');
const cancelRawJsonBtn = document.getElementById('cancel-raw-json-btn');
const fileLoader = document.getElementById('fileLoader');
const mainFilterGroup = document.getElementById('main-filter-group');
const subFilterGroup = document.getElementById('sub-filter-group');
const factionSelector = document.getElementById('faction-selector');
const newItemGroup = document.getElementById('new-item-group');
const addNewBtn = document.getElementById('add-new-btn');
const editorContainer = document.getElementById('editor-container');
const deleteBtn = document.getElementById('delete-btn');
const resetBtn = document.getElementById('reset-btn');
const saveBtn = document.getElementById('save-btn');
const downloadServerBtn = document.getElementById('download-server-btn');
const backupAllBtn = document.getElementById('backup-all-btn'); // <-- ADD THIS LINE

// --- Global State ---
let currentData = null;
let originalData = null;
let currentFileName = 'edited-army.js';
let isDataFromLocalFile = false;
let activeFilters = { mainCategory: '', subCategories: new Set(), faction: '' };
// PASTE THIS ENTIRE BLOCK AFTER the activeFilters variable declaration

const FIELD_CONFIG = {
    // Warning field
    warning: {
        label: 'Warning Text', type: 'text', group: 'warning',
        placeholder: 'e.g., Only one per army'
    },
    
    // Main attributes for non-composition units
    points: { 
        label: 'Points', type: 'number', step: '0.5', group: 'main',
        condition: (entry) => !(entry.composition && entry.composition.type === 'ratioBased')
    },
    min: { 
        label: 'Min', type: 'number', group: 'main',
        condition: (entry) => !(entry.composition && entry.composition.type === 'ratioBased')
    },
    max: { 
        label: 'Max', type: 'number', group: 'main',
        condition: (entry) => !(entry.composition && entry.composition.type === 'ratioBased')
    },

    // Common attributes for most units/mounts
    foc: { 
        label: 'FOC', type: 'select', group: 'common',
        options: ['Lord','Hero','Core','Special','Rare']
    },
    subfaction: { label: 'Subfaction', type: 'text', group: 'common' },
    
    // Character-specific fields
    maxMagicItems: {
        label: 'Max Magic Items', type: 'number', group: 'common',
        condition: (entry) => ['Lord', 'Hero'].includes(entry.foc)
    },
    maxRelics: {
        label: 'Max Relics', type: 'number', group: 'common',
        condition: (entry) => ['Lord', 'Hero'].includes(entry.foc)
    },
    battleStandard: {
        label: 'Battle Standard', type: 'object', group: 'common',
        condition: (entry) => ['Lord', 'Hero'].includes(entry.foc) && entry.battleStandard !== undefined
    },

    // Troop-specific fields
    magicBanner: {
        label: 'Magic Banner', type: 'number', group: 'common',
        condition: (entry) => !['Lord', 'Hero'].includes(entry.foc) && entry.command && entry.command.s
    },
    champItems: {
        label: 'Champ Items', type: 'number', group: 'common',
        condition: (entry) => !['Lord', 'Hero'].includes(entry.foc) && entry.command && entry.command.c
    },
    champSkills: {
        label: 'Champ Skills', type: 'object', group: 'common', 
        condition: (entry) => !['Lord', 'Hero'].includes(entry.foc) && entry.champSkills !== undefined
    },
    
    // Faction-specific fields (e.g., dcaos)
    maxRegalos: {
        label: 'Max Regalos', type: 'number', group: 'common',
        condition: (entry, data) => data.FACTION_ID === 'dcaos' && ['Lord', 'Hero'].includes(entry.foc)
    },
    maxIconos: {
        label: 'Max Iconos', type: 'number', group: 'common',
        condition: (entry, data) => data.FACTION_ID === 'dcaos'
    },
    focos: {
        label: 'Focos', type: 'object', group: 'common',
        condition: (entry, data) => data.FACTION_ID === 'dcaos' && entry.focos !== undefined
    }
};

/**
 * Generates the HTML for a single attribute field based on the FIELD_CONFIG schema.
 * @param {string} key - The property key (e.g., 'maxMagicItems').
 * @param {object} entry - The data object for the specific unit/mount.
 * @param {string} dbKey - The database key (e.g., 'unitsDB').
 * @param {string} entryName - The name/ID of the entry.
 * @returns {string} The HTML string for the form field, or an empty string if conditions are not met.
 */
function buildAttributeFieldHtml(key, entry, dbKey, entryName) {
    const config = FIELD_CONFIG[key];
    if (!config) return '';

    // Check if the condition to display this field is met
    if (config.condition && !config.condition(entry, currentData)) {
        return '';
    }

    const value = entry[key] === undefined ? '' : entry[key];
    const dataAttrs = `data-db-key="${dbKey}" data-id="${entryName}" data-prop="${key}"`;
    const placeholder = config.placeholder ? `placeholder="${config.placeholder}"` : '';

    let inputHtml;
    if (config.type === 'select') {
        inputHtml = `<select ${dataAttrs}>
            ${config.options.map(opt => `<option value="${opt}" ${value === opt ? 'selected' : ''}>${opt}</option>`).join('')}
        </select>`;
    } else if (config.type === 'object') {
        // For complex objects, provide a JSON edit button that targets the specific property
        inputHtml = `<button type="button" class="raw-edit-btn" ${dataAttrs}>{...}</button>`;
    } else { // Handles text, number
        const stepAttr = config.step ? `step="${config.step}"` : '';
        inputHtml = `<input type="${config.type}" value="${value}" ${stepAttr} ${placeholder} ${dataAttrs}>`;
    }
    
    if (config.group === 'warning') {
        return `<label>${config.label}: ${inputHtml}</label>`;
    }

    return `<label>${config.label}: ${inputHtml}</label>`;
}

// ===================================================================================
// --- UI STATE HELPERS ---
// ===================================================================================
function disableButtons() {
    deleteBtn.disabled = true;
    resetBtn.disabled = true;
    saveBtn.disabled = true;
}

function enableButtons() {
    deleteBtn.disabled = false;
    resetBtn.disabled = false;
    saveBtn.disabled = false;
}


// ===================================================================================
// --- INITIALIZATION ---
// ===================================================================================
document.addEventListener('DOMContentLoaded', initialize);

function initialize() {
    populateFactionSelector();
    disableButtons();
    attachEventListeners();
    const checkedRadio = document.querySelector('input[name="main-category"]:checked');
    activeFilters.mainCategory = checkedRadio ? checkedRadio.value : 'units';
    updateSubFilters();
}

// REPLACE your existing attachEventListeners function with this one.

function attachEventListeners() {
    // Delegate all input changes through the editor container
    editorContainer.addEventListener('change', (e) => {
        const target = e.target;
        if (target.matches('.entry-title-input')) {
            handleRename(e);
        } else if (target.hasAttribute('data-db-key')) {
            if (target.dataset.prop === 'mounts' || target.dataset.prop === 'draft') {
                handleStringArrayChange(e);
            } else {
                handleDataChange(e);
            }
        }
    });

    // Modified click listener to handle raw editor button
    editorContainer.addEventListener('click', (e) => {
        const target = e.target;
        if (target.matches('.add-row-btn') || target.matches('.delete-row-btn')) {
            handleRowAction(e);
        } else if (target.matches('.raw-edit-btn')) { // <-- ADD THIS ELSE-IF BLOCK
            handleOpenRawEditor(e);
        }
    });

    fileLoader.addEventListener('change', handleFileLoad);
    deleteBtn.addEventListener('click', handleDelete);
    resetBtn.addEventListener('click', handleReset);
    addNewBtn.addEventListener('click', handleAddNew);
    downloadServerBtn.addEventListener('click', handleDownloadFromServer);
    saveBtn.addEventListener('click', () => {
        if (isDataFromLocalFile) handleDownloadAsFile();
        else handleSaveToServer();
    });

    mainFilterGroup.addEventListener('change', (e) => {
        if (e.target.name === 'main-category') {
            activeFilters.mainCategory = e.target.value;
            updateSubFilters();
            render();
        }
    });

    subFilterGroup.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            if (e.target.checked) activeFilters.subCategories.add(e.target.value);
            else activeFilters.subCategories.delete(e.target.value);
            render();
        }
    });

    factionSelector.addEventListener('change', (e) => {
        activeFilters.faction = e.target.value;
        if (activeFilters.faction) {
            isDataFromLocalFile = false;
            fileLoader.value = '';
            loadArmyData(activeFilters.faction);
        } else if (!isDataFromLocalFile) {
            currentData = null;
            originalData = null;
            render();
        }
    });

    // --- ADD THESE TWO NEW LISTENERS FOR THE MODAL ---
    saveRawJsonBtn.addEventListener('click', handleSaveRawEditor);
    cancelRawJsonBtn.addEventListener('click', () => rawEditorModal.close());
    backupAllBtn.addEventListener('click', handleFullBackup);
}

// ===================================================================================
// --- DATA LOADING & PROCESSING ---
// ===================================================================================

async function handleFileLoad(event) {
    const file = event.target.files[0];
    if (!file) return;
    currentFileName = file.name;
    isDataFromLocalFile = true;
    factionSelector.value = '';
    activeFilters.faction = '';
    editorContainer.innerHTML = '<p>Loading local file...</p>';
    disableButtons();
    const reader = new FileReader();
    reader.onload = async (e) => {
        let fileContent = e.target.result;
        let objectURL = null;
        try {
            fileContent = fileContent.replace(/^import.*?;/gm, '');
            const blob = new Blob([fileContent], { type: 'application/javascript' });
            objectURL = URL.createObjectURL(blob);
            const armyModule = await import(objectURL);
            processLoadedData(armyModule.default);
        } catch (error) {
            editorContainer.innerHTML = `<p style="color:red;">Error parsing file: ${error.message}</p>`;
        } finally {
            if (objectURL) URL.revokeObjectURL(objectURL);
        }
    };
    reader.readAsText(file);
}

async function loadArmyData(factionId) {
    editorContainer.innerHTML = '<p>Loading...</p>';
    disableButtons();
    
    try {
        const response = await fetch(`/api/get-army?faction=${factionId}`);
        if (!response.ok) throw new Error(`Server responded with status: ${response.status}`);
        const data = await response.json();
        processLoadedData(data);
    } catch (error) {
        editorContainer.innerHTML = `<p style="color:red;">Error loading data: ${error.message}</p>`;
    }
}

function processLoadedData(data) {
    currentData = data;
    originalData = JSON.parse(JSON.stringify(currentData));
    updateSubFilters();
    render();
    enableButtons();
    saveBtn.textContent = isDataFromLocalFile ? 'Descargar Cambios' : 'Guardar en Servidor';

    if (isDataFromLocalFile) {
        downloadServerBtn.classList.add('hidden');
    } else {
        downloadServerBtn.classList.remove('hidden');
    }
}

// ===================================================================================
// --- UI & FILTERING ---
// ===================================================================================

// DELETE your old render() function and PASTE this one in its place.

function render() {
    if (!currentData) {
        editorContainer.innerHTML = '<p>Select an army or load a local file to begin editing.</p>';
        newItemGroup.classList.add('hidden');
        disableButtons();
        return;
    }
    editorContainer.innerHTML = '';
    newItemGroup.classList.remove('hidden');

    const dbKey = getDbKeyForCategory(activeFilters.mainCategory);
    
    switch (activeFilters.mainCategory) {
        case 'units':
        case 'mounts':
        case 'specialProfiles': // specialProfiles now correctly uses the complex UI builder
            buildComplexEntryUI(currentData[dbKey] || {}, dbKey);
            break;
        case 'magicItems':
            buildMagicItemsUI(currentData.magicItemsDB || {});
            break;
        case 'demonicGifts':
            editorContainer.innerHTML += '<h2>Regalos Demoníacos</h2>';
            buildSimpleUI(currentData.regalosDemoniacosDB || {}, 'regalosDemoniacosDB');
            editorContainer.innerHTML += '<h2>Iconos Demoníacos</h2>';
            buildSimpleUI(currentData.iconosDemoniacosDB || {}, 'iconosDemoniacosDB');
            break;
        default:
            const defaultDbKey = getDbKeyForCategory(activeFilters.mainCategory);
            if (defaultDbKey) {
                 buildSimpleUI(currentData[defaultDbKey] || {}, defaultDbKey);
            }
    }
}


function updateSubFilters() {
    subFilterGroup.innerHTML = '';
    activeFilters.subCategories.clear();
    let filters = [];
    let html = '';

    switch (activeFilters.mainCategory) {
        case 'units': filters = ['Lord', 'Hero', 'Core', 'Special', 'Rare']; break;
        case 'mounts': filters = ['Character', 'Chariot', 'Monstrous']; break; // Example filters for mounts
      case 'magicItems': { // Use block scope for safety
            filters = ['Arma Mágica', 'Armadura Mágica', 'Talismán', 'Artefacto Arcano', 'Objeto Hechizado', 'Estandarte Mágico'];
            const subfactions = new Set();
            if (currentData?.magicItemsDB) {
                Object.values(currentData.magicItemsDB).forEach(category => {
                    Object.values(category).forEach(item => {
                        if (item.subfaction) subfactions.add(item.subfaction);
                    });
                });
            }
            html = `<strong>Categoría:</strong><br>` + filters.map(f => createCheckboxHtml(f)).join('');
            if (subfactions.size > 0) {
                html += `<hr><strong>Subfacción:</strong><br>` + [...subfactions].sort().map(sf => createCheckboxHtml(sf)).join('');
            }
            break;
        }
        case 'armySkills': { // Use block scope
            if (currentData?.armySkillsDB) {
                filters = [...new Set(Object.values(currentData.armySkillsDB).map(s => s.type))];
            }
            const subfactions = new Set();
             if (currentData?.armySkillsDB) {
                Object.values(currentData.armySkillsDB).forEach(skill => {
                    if (skill.subfaction) subfactions.add(skill.subfaction);
                });
            }
            html = `<strong>Tipo:</strong><br>` + filters.map(f => createCheckboxHtml(f)).join('');
            if (subfactions.size > 0) {
                 html += `<hr><strong>Subfacción:</strong><br>` + [...subfactions].sort().map(sf => createCheckboxHtml(sf)).join('');
            }
            break;
        }
        case 'demonicGifts': { // Use block scope for safety
            html = `<strong>Regalos:</strong>`;
            ['Regalo Mayor', 'Regalo Menor'].forEach(f => html += createCheckboxHtml(f));
            html += `<br><strong>Iconos:</strong>`;
            ['Icono Mayor', 'Icono Menor'].forEach(f => html += createCheckboxHtml(f));
            
            const subfactions = new Set();
            // Check both databases for subfactions
            if (currentData?.regalosDemoniacosDB) {
                Object.values(currentData.regalosDemoniacosDB).forEach(item => {
                    if (item.subfaction) subfactions.add(item.subfaction);
                });
            }
            if (currentData?.iconosDemoniacosDB) {
                 Object.values(currentData.iconosDemoniacosDB).forEach(item => {
                    if (item.subfaction) subfactions.add(item.subfaction);
                });
            }

            if (subfactions.size > 0) {
                html += `<hr><strong>Subfacción:</strong><br>` + [...subfactions].sort().map(sf => createCheckboxHtml(sf)).join('');
            }
            break;
        }
        case 'armySkills':
            if (currentData?.armySkillsDB) {
                filters = [...new Set(Object.values(currentData.armySkillsDB).map(s => s.type))];
            }
            break;
        case 'specialProfiles': // <-- ADD THIS CASE BLOCK
            break;
    default:
        subFilterHtml = '';
    }

    subFilterGroup.innerHTML = html || filters.map(f => createCheckboxHtml(f)).join('');
}

function createCheckboxHtml(value) {
    return `<label><input type="checkbox" value="${value}"> ${value}</label>`;
}

function populateFactionSelector() {
    const previousSelection = factionSelector.value;
    factionSelector.innerHTML = '<option value="">-- Select Army --</option>';
    
    ARMY_REGISTRY.forEach(army => {
        factionSelector.innerHTML += `<option value="${army.id}">${army.name}</option>`;
    });

    factionSelector.innerHTML += `<option value="comun">Objetos Mágicos Comunes</option>`;

    factionSelector.value = isDataFromLocalFile ? '' : previousSelection;
}

// ===================================================================================
// --- UI BUILDERS ---
// ===================================================================================

/**
 * NEW: Generalized UI builder for complex entries like Units and Mounts.
 * @param {object} db - The database object (e.g., unitsDB, mountsDB).
 * @param {string} dbKey - The key for the database (e.g., 'unitsDB').
 */

function buildComplexEntryUI(db, dbKey) {
    for (const entryName in db) {
        const entry = db[entryName];

        // --- NEW SMART FILTERING LOGIC ---
        if (activeFilters.subCategories.size > 0) {
            let matchesFilter = false;
            if (dbKey.startsWith('mountsDB')) {
                const lowerCaseName = entryName.toLowerCase();
                let category = 'Character'; // Default category

                if (['carro', 'chariot', 'carruaje', 'altar', 'palanquín'].some(k => lowerCaseName.includes(k))) {
                    category = 'Chariot';
                } else if (['dragón', 'dragon', 'manticora', 'grifo', 'griffon', 'wyvern', 'demonio', 'daemon', 'terror', 'espectro', 'gigante'].some(k => lowerCaseName.includes(k))) {
                    category = 'Monstrous';
                }
                
                if (activeFilters.subCategories.has(category)) {
                    matchesFilter = true;
                }
            } else { // This is for unitsDB
                if (activeFilters.subCategories.has(entry.foc)) {
                    matchesFilter = true;
                }
            }
            if (!matchesFilter) continue; // Skip if it doesn't match
        }
        // --- END OF NEW LOGIC ---

        const card = document.createElement('div');
        card.className = 'entry-card';

         const header = `<div class="entry-header">
            <input type="text" class="entry-title-input" value="${entryName}" data-db-key="${dbKey}" data-id="${entryName}">
            <div class="header-buttons">
                <button class="raw-edit-btn" data-db-key="${dbKey}" data-id="${entryName}">{...}</button>
                <label class="delete-label"><input type="checkbox" class="delete-checkbox" data-db-key="${dbKey}" data-id="${entryName}"> Borrar</label>
            </div>
        </div>`;
        
        const warningField = buildAttributeFieldHtml('warning', entry, dbKey, entryName);
        const warningHtml = `<div class="warning-editor">${warningField}</div>`;

        let profileHtml = '';
        if (entry.perfiles) {
            profileHtml = '<h4>Perfiles</h4>';
            profileHtml += '<table><thead><tr><th>Nombre</th><th>M</th><th>HA</th><th>HP</th><th>F</th><th>R</th><th>H</th><th>I</th><th>A</th><th>L</th><th></th></tr></thead><tbody>';
            (entry.perfiles || []).forEach((p, index) => {
                profileHtml += `<tr><td><input type="text" value="${p.nombre}" data-db-key="${dbKey}" data-id="${entryName}" data-prop="perfiles[${index}].nombre"></td>`;
                Object.keys(p.stats).forEach(stat => {
                     profileHtml += `<td><input type="text" value="${p.stats[stat]}" style="width:30px" data-db-key="${dbKey}" data-id="${entryName}" data-prop="perfiles[${index}].stats.${stat}"></td>`;
                });
                profileHtml += `<td><button class="delete-row-btn" data-action="delete-profile" data-db-key="${dbKey}" data-id="${entryName}" data-index="${index}">Delete</button></td></tr>`;
            });
            profileHtml += '</tbody></table>';
        }
        if (entry.command) {
            profileHtml += '<div class="command-group-subsection"><h5>Grupo de Mando</h5><div class="command-grid">';
            ['c', 's', 'm'].forEach(cmdType => {
                const cmd = entry.command[cmdType];
                if (cmd) {
                    profileHtml += `<div>
                        <label><b>${cmdType.toUpperCase()}:</b> Nombre: <input type="text" value="${cmd.n || ''}" data-db-key="${dbKey}" data-id="${entryName}" data-prop="command.${cmdType}.n"></label>
                        <label>Coste: <input type="number" value="${cmd.p || 0}" data-db-key="${dbKey}" data-id="${entryName}" data-prop="command.${cmdType}.p"></label>
                    </div>`;
                }
            });
            profileHtml += '</div></div>';
        }
        if (entry.perfiles) {
            profileHtml += `<button class="add-row-btn" data-action="add-profile" data-db-key="${dbKey}" data-id="${entryName}">+ Add Profile</button>`;
        }

        let attributesHtml = '';
        const mainAttributes = Object.keys(FIELD_CONFIG)
            .filter(key => FIELD_CONFIG[key].group === 'main')
            .map(key => buildAttributeFieldHtml(key, entry, dbKey, entryName))
            .join('');
        attributesHtml = `<h4>Atributos</h4><div class="attributes-grid">${mainAttributes}</div>`;
        
        const commonAttributes = Object.keys(FIELD_CONFIG)
            .filter(key => FIELD_CONFIG[key].group === 'common')
            .map(key => buildAttributeFieldHtml(key, entry, dbKey, entryName))
            .filter(Boolean)
            .join('');
        const commonAttributesHtml = `<div class="attributes-grid common-attributes">${commonAttributes}</div>`;

        // --- NEW DRAFT FIELD AND OTHER INPUTS ---
        card.innerHTML = `${warningHtml}${header}
            <div class="unit-layout">
                <div>
                    ${profileHtml}
                </div>
                <div>
                    ${attributesHtml}
                    ${commonAttributesHtml}
                </div>
            </div>
            <div><label>Equipo:</label><textarea data-db-key="${dbKey}" data-id="${entryName}" data-prop="equipo">${entry.equipo || ''}</textarea></div>
            <div><label>Reglas Especiales:</label><textarea data-db-key="${dbKey}" data-id="${entryName}" data-prop="reglasEspeciales">${entry.reglasEspeciales || ''}</textarea></div>
            
            <!-- ADDED DRAFT FIELD FOR MOUNTS -->
            ${dbKey.startsWith('mountsDB') ? `<div><label>Tiro/Escolta (Draft - separado por coma):</label><input type="text" value="${(entry.draft || []).join(', ')}" data-db-key="${dbKey}" data-id="${entryName}" data-prop="draft"></div>` : ''}

            ${buildOptionsHtml(entry, dbKey, entryName)}
            ${buildSpecialAddonsHtml(entry, dbKey, entryName)}

            <!-- MODIFIED MOUNTS FIELD TO ONLY SHOW FOR UNITS -->
            ${dbKey.startsWith('unitsDB') && entry.mounts ? `<div><label>Monturas (separadas por coma):</label><input type="text" value="${(entry.mounts || []).join(', ')}" data-db-key="${dbKey}" data-id="${entryName}" data-prop="mounts"></div>` : ''}`;
            
        editorContainer.appendChild(card);
    }
}


// NOTE: I've broken out Options and Addons into helper functions for clarity.
// Add these two new functions right after `buildComplexEntryUI`.
function buildOptionsHtml(entry, dbKey, entryName) {
    let html = '<h4>Opciones</h4>';
    // Add new header for Cost Type
    const head = `<table><thead><tr><th>Nombre (n)</th><th>Coste (p)</th><th>Resumen (summary)</th><th>Exclusive Group</th><th>Coste Tipo</th><th></th></tr></thead><tbody>`;
    const options = entry.options || [];
    let body = '';

    if (options.length > 0) {
        const exclusiveGroups = {};
        const nonGroupedOptions = [];
        options.forEach((opt, index) => {
            opt.originalIndex = index; 
            if (opt.exclusiveGroup) {
                if (!exclusiveGroups[opt.exclusiveGroup]) exclusiveGroups[opt.exclusiveGroup] = [];
                exclusiveGroups[opt.exclusiveGroup].push(opt);
            } else {
                nonGroupedOptions.push(opt);
            }
        });
        const createRow = (opt) => {
            const index = opt.originalIndex;
            const costType = opt.costType || 'perModel'; // Default to perModel if undefined

            return `<tr>
                <td><input type="text" value="${opt.n || ''}" data-db-key="${dbKey}" data-id="${entryName}" data-prop="options[${index}].n"></td>
                <td><input type="number" value="${opt.p || 0}" data-db-key="${dbKey}" data-id="${entryName}" data-prop="options[${index}].p" style="width: 70px;"></td>
                <td><input type="text" value="${opt.summary || ''}" data-db-key="${dbKey}" data-id="${entryName}" data-prop="options[${index}].summary"></td>
                <td><input type="text" value="${opt.exclusiveGroup || ''}" placeholder="e.g., chaosMark" data-db-key="${dbKey}" data-id="${entryName}" data-prop="options[${index}].exclusiveGroup"></td>
                
                <!-- NEW COST TYPE DROPDOWN -->
                <td>
                    <select data-db-key="${dbKey}" data-id="${entryName}" data-prop="options[${index}].costType">
                        <option value="perModel" ${costType === 'perModel' ? 'selected' : ''}>Por Miniatura</option>
                        <option value="flat" ${costType === 'flat' ? 'selected' : ''}>Global (flat)</option>
                    </select>
                </td>

                <td><button class="delete-row-btn" data-action="delete-option" data-db-key="${dbKey}" data-id="${entryName}" data-index="${index}">Delete</button></td>
            </tr>`;
        };
        for (const groupName in exclusiveGroups) {
            body += `<fieldset class="exclusive-group-fieldset"><legend>${groupName}</legend>`;
            exclusiveGroups[groupName].forEach(opt => { body += createRow(opt); });
            body += `</fieldset>`;
        }
        nonGroupedOptions.forEach(opt => { body += createRow(opt); });
    }
    
    html += head + body + '</tbody></table>';
    html += `<button class="add-row-btn" data-action="add-option" data-db-key="${dbKey}" data-id="${entryName}">+ Add Option</button>`;
    return html;
}


function buildSpecialAddonsHtml(entry, dbKey, entryName) {
    if (activeFilters.mainCategory !== 'units' || !entry.hasOwnProperty('specialAddons')) return '';
    let html = '<h4>Unidades Complementarias (Addons)</h4><table><thead><tr><th>Nombre (name)</th><th>Coste (points)</th><th>Max (max)</th><th>Clave de Perfil (profileKey)</th><th></th></tr></thead><tbody>';
    (entry.specialAddons || [createNewTemplate]).forEach((addon, index) => {
        html += `<tr>
            <td><input type="text" value="${addon.name || ''}" data-db-key="${dbKey}" data-id="${entryName}" data-prop="specialAddons[${index}].name"></td>
            <td><input type="number" value="${addon.points || 0}" data-db-key="${dbKey}" data-id="${entryName}" data-prop="specialAddons[${index}].points" style="width: 70px;"></td>
            <td><input type="number" value="${addon.max || 1}" data-db-key="${dbKey}" data-id="${entryName}" data-prop="specialAddons[${index}].max" style="width: 70px;"></td>
            <td><input type="text" value="${addon.profileKey || ''}" data-db-key="${dbKey}" data-id="${entryName}" data-prop="specialAddons[${index}].profileKey" placeholder="e.g., Fanático"></td>
            <td><button class="delete-row-btn" data-action="delete-addon" data-db-key="${dbKey}" data-id="${entryName}" data-index="${index}">Delete</button></td>
        </tr>`;
    });
    html += '</tbody></table>';
    html += `<button class="add-row-btn" data-action="add-addon" data-db-key="${dbKey}" data-id="${entryName}">+ Add Addon</button>`;
    return html;
}





function buildMagicItemsUI(magicItemsDB) {
    // A helper set of all possible magic item categories for filtering
    const allItemTypes = new Set(['Arma Mágica', 'Armadura Mágica', 'Talismán', 'Artefacto Arcano', 'Objeto Hechizado', 'Estandarte Mágico']);

    for (const categoryName in magicItemsDB) {
        // OLD filter line is removed from here.

        const categoryItems = magicItemsDB[categoryName];
        const categoryHeader = document.createElement('h2');
        categoryHeader.textContent = categoryName;
        
        let hasVisibleItems = false; // Flag to check if we should show the header
        const fragment = document.createDocumentFragment(); // Use a fragment for performance

        for (const itemName in categoryItems) {
            const item = categoryItems[itemName];
            
            // --- NEW ITEM-LEVEL FILTERING LOGIC ---
            if (activeFilters.subCategories.size > 0) {
                const activeItemTypes = new Set([...activeFilters.subCategories].filter(f => allItemTypes.has(f)));
                const activeSubfactions = new Set([...activeFilters.subCategories].filter(f => !allItemTypes.has(f)));

                // An item must match the active type filter (if any are selected)
                const typeMatch = activeItemTypes.size === 0 || activeItemTypes.has(categoryName);

                // An item must match the active subfaction filter (if any are selected)
                const subfactionMatch = activeSubfactions.size === 0 || (item.subfaction && activeSubfactions.has(item.subfaction));

                // If it fails either check, we skip rendering this item.
                if (!typeMatch || !subfactionMatch) {
                    continue;
                }
            }
            // --- END OF NEW FILTERING LOGIC ---

            hasVisibleItems = true; // If we reach here, at least one item will be shown for this category

            const card = document.createElement('div');
            card.className = 'entry-card';
            const dbKey = getDbKeyForCategory('magicItems');

            // --- MODIFIED card.innerHTML ---
            card.innerHTML = `
                <div class="entry-header">
                    <input type="text" class="entry-title-input" value="${itemName}" data-db-key="${dbKey}" data-category="${categoryName}" data-id="${itemName}">
                    <div class="header-buttons">
                        <button class="raw-edit-btn" data-db-key="${dbKey}" data-category="${categoryName}" data-id="${itemName}">{...}</button>
                        <label class="delete-label"><input type="checkbox" class="delete-checkbox" data-db-key="${dbKey}" data-category="${categoryName}" data-id="${itemName}"> Borrar</label>
                    </div>
                </div>
                <div class="attributes-grid">
                    <label>Points: <input type="number" value="${item.points}" data-db-key="${dbKey}" data-category="${categoryName}" data-id="${itemName}" data-prop="points"></label>
                    
                    <!-- ADDED SUFACTION INPUT -->
                    <label>Subfaction: <input type="text" value="${item.subfaction || ''}" data-db-key="${dbKey}" data-category="${categoryName}" data-id="${itemName}" data-prop="subfaction" placeholder="e.g., Orco"></label>

                    <label>Relic: <select data-db-key="${dbKey}" data-category="${categoryName}" data-id="${itemName}" data-prop="relic">
                        <option value="true" ${item.relic === true ? 'selected' : ''}>Yes</option>
                        <option value="false" ${item.relic !== true ? 'selected' : ''}>No</option>
                    </select></label>
                </div>
                <label>Summary:</label>
                <textarea data-db-key="${dbKey}" data-category="${categoryName}" data-id="${itemName}" data-prop="summary">${item.summary || ''}</textarea>
            `;
            fragment.appendChild(card);
        }

        // Only add the header and the items to the DOM if there's something to show
        if (hasVisibleItems) {
            editorContainer.appendChild(categoryHeader);
            editorContainer.appendChild(fragment);
        }
    }
}


function buildSimpleUI(db, dbKey) {
     // --- NEW: Define known types for smart filtering ---
    let skillTypes = new Set();
    if (dbKey === 'armySkillsDB' && currentData?.armySkillsDB) {
        skillTypes = new Set(Object.values(currentData.armySkillsDB).map(s => s.type).filter(Boolean));
    }
    const giftIconTypes = new Set(['Regalo Mayor', 'Regalo Menor', 'Icono Mayor', 'Icono Menor']);


    for (const itemName in db) {
        const item = db[itemName];
        
        // --- MODIFIED FILTERING LOGIC ---
        if (activeFilters.subCategories.size > 0) {
            if (dbKey === 'armySkillsDB') {
                const activeSkillTypes = new Set([...activeFilters.subCategories].filter(f => skillTypes.has(f)));
                const activeSubfactions = new Set([...activeFilters.subCategories].filter(f => !skillTypes.has(f)));
                
                const typeMatch = activeSkillTypes.size === 0 || (item.type && activeSkillTypes.has(item.type));
                const subfactionMatch = activeSubfactions.size === 0 || (item.subfaction && activeSubfactions.has(item.subfaction));

                if (!typeMatch || !subfactionMatch) {
                    continue;
                }
            } else if (dbKey.includes('Demoniacos')) { // Handle demonic gifts & icons
                const activeTypes = new Set([...activeFilters.subCategories].filter(f => giftIconTypes.has(f)));
                const activeSubfactions = new Set([...activeFilters.subCategories].filter(f => !giftIconTypes.has(f)));

                const itemType = dbKey === 'regalosDemoniacosDB' ? item.type : `Icono ${item.type}`;
                
                const typeMatch = activeTypes.size === 0 || activeTypes.has(itemType);
                const subfactionMatch = activeSubfactions.size === 0 || (item.subfaction && activeSubfactions.has(item.subfaction));

                if (!typeMatch || !subfactionMatch) {
                    continue; // Skip if it doesn't match
                }
            }
        }
        // --- END FILTERING ---

        const card = document.createElement('div');
        card.className = 'entry-card';

        // Add subfaction input conditionally for army skills AND demonic items
        const subfactionInputHtml = (dbKey === 'armySkillsDB' || dbKey.includes('Demoniacos')) 
            ? `<label>Subfaction: <input type="text" value="${item.subfaction || ''}" data-db-key="${dbKey}" data-id="${itemName}" data-prop="subfaction" placeholder="e.g., Khorne"></label>` 
            : '';

        card.innerHTML = `<div class="entry-header">
            <input type="text" class="entry-title-input" value="${itemName}" data-db-key="${dbKey}" data-id="${itemName}">
            <div class="header-buttons">
                <button class="raw-edit-btn" data-db-key="${dbKey}" data-id="${itemName}">{...}</button>
                <label class="delete-label"><input type="checkbox" class="delete-checkbox" data-db-key="${dbKey}" data-id="${itemName}"> Borrar</label>
            </div>
        </div>
<label>Points: <input type="number" value="${item.points}" data-db-key="${dbKey}" data-id="${itemName}" data-prop="points"></label>
${subfactionInputHtml}
<label>Summary:</label><textarea data-db-key="${dbKey}" data-id="${itemName}" data-prop="summary">${item.summary || ''}</textarea>`;
        editorContainer.appendChild(card);
    }
}



// ===================================================================================
// --- DATA MANIPULATION ---
// ===================================================================================

// --- In the DATA MANIPULATION section ---
// The only change is the line that processes the 'prop' string to handle arrays correctly.

function handleDataChange(event) {
    const input = event.target;
    const { dbKey, category, id, prop } = input.dataset;
    let value = input.value;

    const keys = prop.replace(/\[(\d+)\]/g, '.$1').split('.');
    let parent = category ? currentData[dbKey]?.[category]?.[id] : currentData[dbKey]?.[id];
    if (!parent) return;

    // Traverse to the parent of the target property
    for (let i = 0; i < keys.length - 1; i++) {
        // Safety check to create nested objects if they don't exist
        if (!parent[keys[i]]) {
            if (!isNaN(parseInt(keys[i + 1], 10))) {
                parent[keys[i]] = [];
            } else {
                parent[keys[i]] = {};
            }
        }
        parent = parent[keys[i]];
    }

    const finalKey = keys[keys.length - 1];

    // ** Special Handling for costType **
    // If the user selects the default 'perModel', we remove the property from the object
    // to keep the data file clean, as per the data schema design.
    if (prop.endsWith('.costType') && value === 'perModel') {
        delete parent[finalKey];
        return; // Action complete, no need to set the value.
    }

    // Standard value processing
    if (input.type === 'number') value = parseFloat(input.value) || 0;
    if (input.tagName === 'SELECT' && input.value === 'true') value = true;
    if (input.tagName === 'SELECT' && input.value === 'false') value = false;

    parent[finalKey] = value;
}

/**
 * NEW: Opens the raw JSON editor modal with the data for the selected entry.
 */

function handleOpenRawEditor(event) {
    const button = event.target;
    // We now read 'prop' to allow editing of sub-properties like 'battleStandard'
    const { dbKey, category, id, prop } = button.dataset;

    let targetObject = category 
        ? currentData[dbKey]?.[category]?.[id] 
        : currentData[dbKey]?.[id];

    if (!targetObject) {
        alert("Could not find data for this entry.");
        return;
    }
    
    // If a 'prop' is specified, we edit that property instead of the whole entry.
    if (prop) {
        // If the property doesn't exist, create it as an empty object before editing.
        if (targetObject[prop] === undefined) {
             targetObject[prop] = {};
        }
        targetObject = targetObject[prop];
    }

    // Store the entry's location on the modal for the save function
    rawEditorModal.dataset.dbKey = dbKey;
    rawEditorModal.dataset.id = id;
    if (category) rawEditorModal.dataset.category = category;
    else delete rawEditorModal.dataset.category;
    
    // Store the property key if we're editing a sub-property
    if (prop) rawEditorModal.dataset.prop = prop;
    else delete rawEditorModal.dataset.prop;

    // Populate the textarea and show the modal
    rawJsonTextarea.value = JSON.stringify(targetObject, null, 2);
    rawEditorModal.showModal();
}


/**
 * NEW: Saves the content of the raw JSON editor back to the main data object.
 */

function handleSaveRawEditor() {
    // We now read 'prop' to know where to save the data
    const { dbKey, category, id, prop } = rawEditorModal.dataset;
    const jsonText = rawJsonTextarea.value;

    let newObject;
    try {
        newObject = JSON.parse(jsonText);
    } catch (error) {
        alert(`Error: Invalid JSON format.\n\n${error.message}`);
        return; // Don't save or close
    }

    // Find the parent entry
    let targetParent = category 
        ? currentData[dbKey]?.[category]?.[id] 
        : currentData[dbKey]?.[id];

    if (!targetParent) {
        alert("Fatal Error: Could not find parent entry to save to.");
        return;
    }

    // If a 'prop' exists, we update that property. Otherwise, we replace the whole entry.
    if (prop) {
        targetParent[prop] = newObject;
    } else {
        if (category) {
            currentData[dbKey][category][id] = newObject;
        } else {
            currentData[dbKey][id] = newObject;
        }
    }

    rawEditorModal.close();
    render(); // Re-render the UI to reflect changes
}

// Handles renaming of an entry (changing the object key)
function handleRename(event) {
    const input = event.target;
    const { dbKey, category } = input.dataset;
    const oldName = input.dataset.id;
    const newName = input.value.trim();

    if (newName === oldName || !newName) {
        input.value = oldName; // Revert if name is empty or unchanged
        return;
    }

    const targetDb = category ? currentData[dbKey][category] : currentData[dbKey];

    if (targetDb[newName]) {
        alert(`Error: An entry with the name "${newName}" already exists.`);
        input.value = oldName; // Revert
        return;
    }

    // Perform the rename
    targetDb[newName] = targetDb[oldName];
    delete targetDb[oldName];

    // CRITICAL: Re-render the entire UI.
    // This is necessary because all data attributes on child elements of the
    // renamed card are now incorrect (they still reference the old name).
    // A full re-render is the safest way to update everything.
    render();
}

// NEW: Handles adding/deleting rows in profiles/options arrays
function handleRowAction(event) {
    const button = event.target;
    const { action, dbKey, id, index } = button.dataset;

    const targetItem = currentData[dbKey]?.[id];
    if (!targetItem) return;

    switch (action) {
        case 'add-profile':
            if (!targetItem.perfiles) targetItem.perfiles = [];
            targetItem.perfiles.push({
                nombre: "Nuevo Perfil",
                stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 }
            });
            break;
        case 'delete-profile':
            targetItem.perfiles.splice(index, 1);
            break;
        case 'add-option':
             if (!targetItem.options) targetItem.options = [];
            targetItem.options.push({ n: 'Nueva Opción', p: 0, summary: '' });
            break;
        case 'delete-option':
            targetItem.options.splice(index, 1);
            break;
           // --- ADD THE TWO CASES BELOW ---
case 'add-addon':
    if (!targetItem.specialAddons) {
        targetItem.specialAddons = []; // Initialize if it doesn't exist
    }
    targetItem.specialAddons.push({ name: "Nuevo Addon", points: 0, max: 1, profileKey: "" });
    break;

case 'delete-addon':
    targetItem.specialAddons.splice(index, 1);
    break;
 

    }

    // Re-render to show the changes
    render();
}


function handleStringArrayChange(event) {
    const input = event.target;
    const arrayValue = input.value.split(',').map(item => item.trim()).filter(Boolean);
    const fakeEvent = { target: { ...input.dataset, value: arrayValue } };
    handleDataChange(fakeEvent);
}

function handleDelete() {
    const checkedBoxes = editorContainer.querySelectorAll('.delete-checkbox:checked');
    if (checkedBoxes.length === 0) return alert("No items marked for deletion.");

    if (confirm(`Are you sure you want to delete ${checkedBoxes.length} item(s)?`)) {
        checkedBoxes.forEach(box => {
            const { dbKey, category, id } = box.dataset;
            if (category) {
                delete currentData[dbKey][category][id];
            } else {
                delete currentData[dbKey][id];
            }
        });
        render();
    }
}

function handleAddNew() {
    const count = document.getElementById('new-item-count').valueAsNumber || 1;
    const mainCategory = activeFilters.mainCategory;
    const dbKey = getDbKeyForCategory(mainCategory);

    // Case 1: For nested structures like Magic Items / Runes
    if (mainCategory === 'magicItems') {
        const db = currentData[dbKey] || {};
        const existingCategories = Object.keys(db);
        const defaultValue = existingCategories.length > 0 ? existingCategories[0] : '';
        const promptMessage = `Enter the item category.\n\nExisting: ${existingCategories.join(', ')}\n\nOr type a new category name.`;
        let targetCategory = prompt(promptMessage, defaultValue);
        
        if (!targetCategory) return;
        targetCategory = targetCategory.trim();
        if (!targetCategory) return;

        if (!currentData[dbKey]) currentData[dbKey] = {};
        if (!currentData[dbKey][targetCategory]) {
            currentData[dbKey][targetCategory] = {};
        }

        for (let i = 0; i < count; i++) {
            const newName = `Nueva Entrada ${Object.keys(currentData[dbKey][targetCategory]).length + i + 1}`;
            currentData[dbKey][targetCategory][newName] = createNewTemplate(mainCategory);
        }

    } else if (mainCategory === 'armySkills') {
        const db = currentData[dbKey] || {};
        const existingSkills = Object.values(db);
        
        const categorizationKey = existingSkills.length > 0 && existingSkills[0].skillSource ? 'skillSource' : 'type';
        const existingCategories = [...new Set(existingSkills.map(skill => skill[categorizationKey]).filter(Boolean))];
        const defaultValue = existingCategories.length > 0 ? existingCategories[0] : '';
        const promptMessage = `Enter the skill category (${categorizationKey}).\n\nExisting: ${existingCategories.join(', ')}\n\nOr type a new category name.`;
        let targetCategory = prompt(promptMessage, defaultValue);

        if (!targetCategory) return;
        targetCategory = targetCategory.trim();
        if (!targetCategory) return;
        
        if (!currentData[dbKey]) currentData[dbKey] = {};

        for (let i = 0; i < count; i++) {
            const newName = `Nueva Entrada ${Object.keys(currentData[dbKey]).length + i + 1}`;
            const newSkill = createNewTemplate(mainCategory);
            
            newSkill[categorizationKey] = targetCategory;
            currentData[dbKey][newName] = newSkill;
        }

    } else if (mainCategory === 'demonicGifts') {
        const giftTypeInput = prompt("What type are you adding? Enter 'Regalo' or 'Icono'").toLowerCase().trim();
        let targetDbKey;

        if (giftTypeInput.startsWith('regalo')) {
            targetDbKey = 'regalosDemoniacosDB';
        } else if (giftTypeInput.startsWith('icono')) {
            targetDbKey = 'iconosDemoniacosDB';
        } else {
            alert("Invalid type. Please enter 'Regalo' or 'Icono'.");
            return;
        }

        if (!currentData[targetDbKey]) currentData[targetDbKey] = {};

        for (let i = 0; i < count; i++) {
            const newName = `Nueva Entrada ${Object.keys(currentData[targetDbKey]).length + i + 1}`;
            currentData[targetDbKey][newName] = createNewTemplate(mainCategory);
        }

    } else {
        if (!currentData[dbKey]) currentData[dbKey] = {};
        
        for (let i = 0; i < count; i++) {
            const newName = `Nueva Entrada ${Object.keys(currentData[dbKey]).length + i + 1}`;
            currentData[dbKey][newName] = createNewTemplate(mainCategory);
        }
    }

    render();
}

function createNewTemplate(category) {
    if (category === 'units') {
        return {
            faction: "new", 
            foc: "Core",
            points: 10,
            min: 1,
            max: 20,
            warning: "",
            subfaction: "",
            equipo: "",
            reglasEspeciales: "",
            options: [],
            specialAddons: [], 
            perfiles: [{ nombre: "Nuevo Perfil", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } }],
            
            // --- ADDED THIS BLOCK ---
            // Provide a default command group so the UI section appears immediately.
            command: {
                c: { n: "Campeón", p: 0 },
                s: { n: "Portaestandarte", p: 0 },
                m: { n: "Músico", p: 0 }
            },
            // -------------------------

            // These are all still necessary for the dynamic UI
            maxMagicItems: 0,
            maxRelics: 0,
            magicBanner: 0,
            champItems: 0,
            maxRegalos: 0,
            maxIconos: 0,
            battleStandard: {}, 
            champSkills: {},
            focos: {}
        };
    }
    
     if (category === 'mounts') {
        return {
            // foc: "Character", // <-- REMOVED THIS LINE
            points: 15,
            warning: "",
            subfaction: "",
            draft: [], // <-- ADDED THIS LINE
            equipo: "",
            reglasEspeciales: "",
            perfiles: [{ nombre: "Nueva Montura", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 3, A: 1, L: 6 } }]
        };
    }
      
    if (category === 'specialProfiles') {
        return { 
            perfiles: [{ nombre: "Nuevo Perfil", stats: {} }] 
        };
    }
 if (category === 'magicItems') {
        // ADD subfaction here
        return { points: 5, relic: false, summary: "Nueva descripción.", subfaction: "" };
    }
   if (category === 'armySkills') {
        return { points: 5, summary: "Nueva descripción.", subfaction: "" };
    }
    
}

function handleReset() {
    if (confirm("Are you sure you want to discard all changes since the last save?")) {
        currentData = JSON.parse(JSON.stringify(originalData));
        render();
    }
}

// DELETE your old getDbKeyForCategory() function and PASTE this one in its place.

function getDbKeyForCategory(category) {
    if (!currentData) return null; // Safety check

    if (category === 'units') {
        return Object.keys(currentData).find(k => k.startsWith('unitsDB')) || 'unitsDB';
    }
    if (category === 'mounts') {
        return Object.keys(currentData).find(k => k.startsWith('mountsDB')) || 'mountsDB';
    }
    if (category === 'specialProfiles') {
        return Object.keys(currentData).find(k => k.startsWith('specialProfilesDB')) || 'specialProfilesDB';
    }

    const keyMap = { 
        'magicItems': 'magicItemsDB', 
        'armySkills': 'armySkillsDB', 
        'demonicGifts': 'regalosDemoniacosDB' 
    };
    return keyMap[category];
}



// ===================================================================================
// --- SAVE & UTILITIES ---
// ===================================================================================

/**
 * Creates a clean, file-safe timestamp string like "20251102-171048".
 * @returns {string} The formatted timestamp.
 */
function getFormattedTimestamp() {
    const d = new Date();
    const pad = (n) => n.toString().padStart(2, '0');
    const date = `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}`;
    const time = `${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
    return `${date}-${time}`;
}


// REPLACE the existing formatDataForSaving function with this one in admin.js

function formatDataForSaving(data) {
    const factionId = data.FACTION_ID || activeFilters.faction || 'comun';
    const generatedDate = new Date().toISOString();

    // --- START: NEW CLEANUP LOGIC ---
    // Create a deep copy to avoid modifying the live data object used by the UI
    const dataToSave = JSON.parse(JSON.stringify(data));

    // This helper function iterates through a DB (like unitsDB) and removes temporary properties
    const cleanupTemporaryProps = (db) => {
        if (!db) return;
        for (const entryKey in db) {
            const entry = db[entryKey];
            // Check for options arrays and clean them
            if (entry.options && Array.isArray(entry.options)) {
                entry.options.forEach(opt => {
                    delete opt.originalIndex; // Remove the temporary UI property
                });
            }
        }
    };
    
    // Apply the cleanup to all relevant databases before saving
    cleanupTemporaryProps(dataToSave.unitsDB);
    cleanupTemporaryProps(dataToSave.mountsDB);
    // --- END: NEW CLEANUP LOGIC ---


    // --- SPECIAL CASE: Saving the common magic items file (comun.js) ---
    if (factionId === 'comun') {
        const magicItemsString = JSON.stringify(dataToSave.magicItemsDB || {}, null, 2);
        return `// Guamahammer Common Magic Items\n// Generated by Admin Editor @ ${generatedDate}\n\nexport const commonMagicItemsDB = ${magicItemsString};\n`;
    }

    // --- STANDARD ARMY FILE SAVING LOGIC ---
    delete dataToSave.COMMON_MAGIC_ITEMS; // This was already here, just moved after the copy
    const cleanMagicItemsDB = {};
    const commonItems = originalData.COMMON_MAGIC_ITEMS || {};
    if (dataToSave.magicItemsDB) {
        for (const category in dataToSave.magicItemsDB) {
            const commonItemsInCategory = commonItems[category] || {};
            for (const itemName in dataToSave.magicItemsDB[category]) {
                if (!Object.prototype.hasOwnProperty.call(commonItemsInCategory, itemName)) {
                    if (!cleanMagicItemsDB[category]) cleanMagicItemsDB[category] = {};
                    cleanMagicItemsDB[category][itemName] = dataToSave.magicItemsDB[category][itemName];
                }
            }
        }
    }
    dataToSave.magicItemsDB = cleanMagicItemsDB;
    const constDbKeys = ['unitsDB', 'mountsDB', 'magicItemsDB', 'armySkillsDB', 'specialProfilesDB', 'regalosDemoniacosDB', 'iconosDemoniacosDB'];
    let constsString = '';
    const exportMappings = [];
    constDbKeys.forEach(key => {
        if (dataToSave[key] && Object.keys(dataToSave[key]).length > 0) {
            const suffixedVarName = `${key}_${factionId}`;
            constsString += `const ${suffixedVarName} = ${JSON.stringify(dataToSave[key], null, 2)};\n\n`;
            exportMappings.push({ key: key, varName: suffixedVarName });
            delete dataToSave[key];
        }
    });
    const exportProperties = [];
    for (const key in dataToSave) {
        const value = (key === 'FOC_CONFIG')
            ? JSON.stringify(dataToSave[key], null, 4).replace(/\n/g, '\n    ')
            : JSON.stringify(dataToSave[key]);
        exportProperties.push(`    ${key}: ${value}`);
    }
    exportMappings.forEach(mapping => {
        exportProperties.push(`    ${mapping.key}: ${mapping.varName}`);
    });
    let fileContent = `// Guamahammer Army File: ${factionId}\n// Generated by Admin Editor @ ${generatedDate}\n\n`;
    fileContent += `import { commonMagicItemsDB } from '../comun.js';\n\n`;
    fileContent += constsString;
    fileContent += `export default {\n`;
    fileContent += exportProperties.join(',\n');
    fileContent += `\n};\n`;
    return fileContent;
}


// REPLACE the existing handleDownloadFromServer function
// PASTE THIS COMPLETE FUNCTION IN ITS PLACE:

function handleDownloadFromServer() {
    if (!currentData || !currentData.FACTION_ID) {
        alert("No server-side army is currently loaded.");
        return;
    }

    const factionId = currentData.FACTION_ID;
    const fileName = `${factionId}-${getFormattedTimestamp()}.js`;
    
    // Determine the correct file path based on the factionId.
    const filePath = factionId === 'comun' 
        ? `/${factionId}.js`          // If 'comun', path is root: /comun.js
        : `/armies/${factionId}.js`;  // Otherwise, path is /armies/faction.js

    const a = document.createElement('a');
    a.href = filePath; 
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}



async function handleSaveToServer() {
    if (!currentData) return;

    const factionId = currentData.FACTION_ID || activeFilters.faction;
    if (!factionId) {
        alert("Cannot save: No faction ID is available.");
        return;
    }

    // A final confirmation before overwriting a server file.
    if (!confirm(`Are you sure you want to save changes to ${factionId}.js on the server?`)) {
        return;
    }

    const fileContent = formatDataForSaving(currentData);

    try {
        const response = await fetch('/api/save-army', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ factionId, fileContent }) // Send the pre-formatted content
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Server responded with status ${response.status}`);
        }

        alert(`${factionId}.js saved successfully on the server!`);
        
        // After a successful save, the original data should be updated to match the new state.
        // This prevents the user from being prompted to save again if they haven't made new changes.
        originalData = JSON.parse(JSON.stringify(currentData));

    } catch (error) {
        console.error('Error saving to server:', error);
        alert(`Failed to save file: ${error.message}`);
    }
}

// REPLACE the existing handleDownloadAsFile function
function handleDownloadAsFile() {
    if (!currentData) return;
    const finalFileContent = formatDataForSaving(currentData);
    const blob = new Blob([finalFileContent], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    
    // Generate a clean filename instead of using the old one
    const factionId = currentData.FACTION_ID || activeFilters.faction || 'comun';
    a.download = `${factionId}-${getFormattedTimestamp()}.js`;

    a.click();
    URL.revokeObjectURL(url);
}
/**
 * Handles the creation of a full backup of all army files and comun.js
 * Fetches files directly from the server, creates a zip archive, and downloads it.
 */
async function handleFullBackup() {
    if (typeof JSZip === 'undefined') {
        alert("Error: La librería JSZip no se ha cargado. No se puede crear el backup.");
        return;
    }

    backupAllBtn.disabled = true;
    backupAllBtn.textContent = 'Generando backup... (0%)';

    const filesToBackup = ARMY_REGISTRY.map(army => ({
        fetchUrl: `/armies/${army.id}.js`,
        zipPath: `armies/${army.id}.js`
    }));
    filesToBackup.push({ fetchUrl: '/comun.js', zipPath: 'comun.js' });

    try {
        const promises = filesToBackup.map(fileInfo =>
            fetch(fileInfo.fetchUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                return response.text();
            })
        );

        const results = await Promise.allSettled(promises);
        const zip = new JSZip();
        const failedFiles = [];
        
        backupAllBtn.textContent = `Generando backup... (Comprimiendo)`;

        results.forEach((result, index) => {
            const filePath = filesToBackup[index].zipPath;
            if (result.status === 'fulfilled') {
                zip.file(filePath, result.value);
            } else {
                failedFiles.push(`${filePath} (Motivo: ${result.reason.message})`);
            }
        });

        // Add metadata file
        const metadata = {
            backupDate: new Date().toISOString(),
            backupVersion: "1.0",
            armyCount: ARMY_REGISTRY.length,
            app: "Guamahammer Admin Editor"
        };
        zip.file('BACKUP_INFO.json', JSON.stringify(metadata, null, 2));

        // Generate and download zip
        const blob = await zip.generateAsync({ type: "blob" });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `guamahammer-backup-${getFormattedTimestamp()}.zip`;
        document.body.appendChild(a);
        a.click();
        URL.revokeObjectURL(a.href);
        document.body.removeChild(a);

        if (failedFiles.length > 0) {
            alert(`Backup creado, pero los siguientes archivos no se pudieron incluir:\n\n- ${failedFiles.join('\n- ')}`);
        } else {
            alert(`¡Backup completo generado con éxito!`);
        }

    } catch (error) {
        console.error('Error catastrófico durante la creación del backup:', error);
        alert('Ocurrió un error inesperado al crear el backup. Revisa la consola para más detalles.');
    } finally {
        // ALWAYS reset the button state
        backupAllBtn.disabled = false;
        backupAllBtn.textContent = 'Descargar Backup Completo';
    }
}



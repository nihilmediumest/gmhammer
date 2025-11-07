// ===================================================================================
// --- GUAMAHAMMER MODULAR ARMY BUILDER - GENERIC RULES ENGINE ---
// ===================================================================================
// Last Updated: 2025-10-06 @ 06:45 - Implemented RESOLVE_FOC_FOR_SUPPORT_HOST rule.
// This module contains a generic library of conditions and validators.

// ===================================================================================
// --- DATA MODIFICATION PROCESSOR ---
// ===================================================================================

const CONDITIONS = {
    // === Global Conditions (checked once) ===
    generalIs: (context, params) => context.general && context.general.name === params.name,
    generalHasSkill: (context, params) => context.general?.selections?.armySkills?.selection?.[params.name],
    
    // Checks if any unit in the army list has a specific skill.
    anyUnitHasSkill: (context, params) => context.armyList.some(unit => unit.selections?.armySkills?.selection?.[params.name]),

    // === Unit-Specific Conditions (checked for each unit in the army list) ===
    unitHasSkill: (context, params) => context.unit?.selections?.armySkills?.selection?.[params.skillName],
    unitIsNotGeneral: (context, params) => context.unit?.id !== context.generalId,
};
export function processUnitRules(rules, context, baseUnitData) {
    if (!rules || !Array.isArray(rules)) {
        return { finalData: baseUnitData, uiActions: [] };
    }

    let finalData = { ...baseUnitData };
    let uiActions = [];

    rules.forEach(rule => {
        if (evaluateConditions(rule.conditions, context)) {
            rule.actions.forEach(action => {
                if (action.type === 'ADD_UNIT_PROPERTY') {
                    finalData[action.payload.key] = action.payload.value;
                } else if (action.type === 'RENDER_COMPONENT') {
                    uiActions.push(action);
                }
            });
        }
    });

    return { finalData, uiActions };
}

export function processGlobalRules(rules, context, unitsDB) {
    if (!rules || !Array.isArray(rules)) {
        return unitsDB;
    }

    let processedDB = { ...unitsDB };

    rules.forEach(rule => {
        if (evaluateConditions(rule.conditions, context)) {
            rule.actions.forEach(action => {
                if (action.type === 'MODIFY_UNIT_DB') {
                    // Apply modification to all matching units in DB
                    Object.keys(processedDB).forEach(unitName => {
                        if (action.payload.unitFilter(processedDB[unitName])) {
                            processedDB[unitName] = {
                                ...processedDB[unitName],
                                ...action.payload.modifications
                            };
                        }
                    });
                }
            });
        }
    });

    return processedDB;
}

function evaluateConditions(conditions, context) {
    if (!conditions || !Array.isArray(conditions)) return true;

    return conditions.every(condition => {
        if (condition.type === 'unitHasSkill') {
            const unitSkills = context.unit?.selections?.armySkills?.selection || {};
            return Object.keys(unitSkills).includes(condition.skillName);
        }
        if (condition.type === 'unitIsNotGeneral') {
            return context.unit?.id !== context.generalId;
        }
        if (condition.type === 'anyUnitHasSkill') {
            return context.armyList?.some(unit => {
                const skills = unit.selections?.armySkills?.selection || {};
                return Object.keys(skills).includes(condition.name);
            });
        }
        return true;
    });
}

// PASTE THIS ENTIRE FUNCTION INTO rulesEngine.js, REPLACING THE OLD ONE

// REPLACE this function in rulesEngine.js
export function resolveFocSlots(armyList, rules, context) {
    let modifiedArmyList = armyList.map(u => ({
        ...u,
        resolvedFoc: u.unitData?.foc || null
    }));

    if (!rules || rules.length === 0) {
        return modifiedArmyList;
    }

    rules.forEach(rule => {
        // The context object is now richer, allowing for more complex conditions.
        const conditionMet = !rule.condition || (CONDITIONS[rule.condition.type] && CONDITIONS[rule.condition.type](context, rule.condition));

        if (conditionMet) {
            switch (rule.type) {
                case 'RESOLVE_LIMITED_FOC': {
                    let unitsChanged = 0;
                    modifiedArmyList = modifiedArmyList.map(unit => {
                        // This logic is now much more precise and robust.
                        // It checks the unit name, makes sure we haven't hit the limit,
                        // AND checks that the unit's current FOC matches what the rule expects to change.
                        const originalFoc = rule.originalFOC || unit.unitData?.foc;
                        if (
                            unit.name === rule.targetUnit &&
                            unitsChanged < rule.limit &&
                            unit.resolvedFoc === originalFoc
                        ) {
                            unitsChanged++;
                            return { ...unit, resolvedFoc: rule.newFOC };
                        }
                        return unit;
                    });
                    break;
                }
                // ... other rule types from your file remain the same
                 case 'RESOLVE_FOC_IF_GENERAL_IS': {
                    modifiedArmyList = modifiedArmyList.map(unit => {
                        if (unit.name === rule.unitName) {
                            return { ...unit, resolvedFoc: rule.newFOC };
                        }
                        return unit;
                    });
                    break;
                }
                case 'RESOLVE_FOC_FOR_SUPPORT_HOST': {
                    if (context.mainHostFaction) {
                        modifiedArmyList = modifiedArmyList.map(unit => {
                            if (unit.faction !== context.mainHostFaction && unit.unitData) {
                                if (unit.unitData.foc === 'Core') {
                                    return { ...unit, resolvedFoc: 'Special' };
                                }
                                if (unit.unitData.foc === 'Special') {
                                    return { ...unit, resolvedFoc: 'Rare' };
                                }
                            }
                            return unit;
                        });
                    }
                    break;
                }
            }
        }
    });

    return modifiedArmyList;
}

// ===================================================================================
// --- VALIDATION PROCESSOR ---
// ===================================================================================

const VALIDATORS = {
    generalRequirement: (context, params) => ({
        isValid: !!context.general,
        message: params.message
    }),

    generalCannotBe: (context, params) => ({
        isValid: !context.general || !context.general.name.includes(params.nameFragment),
        message: params.message
    }),

    unitLimit: (context, params) => {
        const count = context.armyList.filter(u => u.name === params.unitName).length;
        return {
            isValid: count <= params.max,
            message: params.message
        };
    },

    conditionalUnitLimit: (context, params) => {
        // --- THIS IS THE FIX ---
        // The validator now correctly reads from the 'params' object itself,
        // instead of looking for a nested 'condition' object.
        const limit = context.battlePoints >= params.pointsThreshold ? params.maxIfAbove : params.maxIfBelow;
        const count = context.armyList.filter(u => u.name === params.unitName).length;
        
        return {
            isValid: count <= limit,
            message: `${params.message} (Max ${limit})`
        };
        // --- END OF FIX ---
    },

    unitRatio: (context, params) => {
        const primaryCount = context.armyList.filter(u => u.name === params.primaryUnit).length;
        const secondaryCount = context.armyList.filter(u => u.name === params.secondaryUnit).length;
        return {
            isValid: secondaryCount <= primaryCount * params.maxSecondaryPerPrimary,
            message: params.message
        };
    },
    
    validateHostSupportPercentage: (context, params) => {
        if (!context.mainHostFaction) return { isValid: true };

        const totalPoints = context.battlePoints;
        const supportHostFactions = params.hostFactions || [];

        const supportHostPoints = context.armyList
            .filter(u => u.faction !== context.mainHostFaction && supportHostFactions.includes(u.faction))
            .reduce((sum, u) => sum + u.points, 0);

        const supportHostPercentage = totalPoints > 0 ? supportHostPoints / totalPoints : 0;
        
        let supportHostMax = params.maxSupportPercentage.default || 0.25;
        if (context.battlePoints >= 3000 && params.maxSupportPercentage.at3000) {
            supportHostMax = params.maxSupportPercentage.at3000;
        } else if (context.battlePoints >= 2000 && params.maxSupportPercentage.at2000) {
            supportHostMax = params.maxSupportPercentage.at2000;
        }
        
        return {
            isValid: supportHostPercentage <= supportHostMax,
            message: `Las Huestes de Apoyo no deben superar el ${supportHostMax * 100}% del total de puntos.`
        };
    },

    warnOnSkillsTotalPoints: (context, params) => {
        const charactersWithCountSkills = context.armyList.filter(u => u.selections?.armySkills && u.maxSkills?.type === 'count');
        if (charactersWithCountSkills.length === 0) return null;

        const totalPoints = charactersWithCountSkills.reduce((sum, u) => sum + (u.selections.armySkills.points || 0), 0);
        
        if (totalPoints > 0) {
            return {
                isValid: true, // This is always true as it's a warning
                message: `⚠️ Puntos en Habilidades/Renombre por contador: ${totalPoints} pts.`
            };
        }
        return null;
    }
};

export function validateArmyWithEngine(rules, context) {
    if (!rules) return [];
    const results = [];
    rules.forEach(rule => {
        const validatorFn = VALIDATORS[rule.type] || (rule.type === 'custom' ? rule.validator : null);
        if (validatorFn) {
            const result = validatorFn(context, rule.params || rule);
            
            // Custom validators can return a string on failure, or true on success.
            if (typeof result === 'string') {
                results.push({ isValid: false, message: result });
            } else if (result && typeof result === 'object' && result.message) {
                results.push(result);
            } else if (result === true) {
                // Do nothing, rule passed
            }
        }
    });
    return results.filter(r => r !== null);
};
export function validateArmy(context) {
    const { armyList, currentArmyData, battlePoints, generalId, mainHostFaction, totalSpentPoints, focPoints } = context;
    
    let validationResults = [];
    let allRulesValid = true;

    // Basic validation rules
    if (!generalId) {
        validationResults.push({ isValid: false, message: 'El ejército debe tener un General.' });
        allRulesValid = false;
    }

    if (totalSpentPoints > battlePoints) {
        validationResults.push({ isValid: false, message: `Puntos gastados (${totalSpentPoints}) exceden los puntos de batalla (${battlePoints}).` });
        allRulesValid = false;
    }

    // Army-specific validation rules
    const ruleset = currentArmyData?.ARMY_RULESET;
    if (ruleset?.validationRules) {
        ruleset.validationRules.forEach(rule => {
            const result = validateRule(rule, context);
            if (!result.isValid) {
                allRulesValid = false;
            }
            validationResults.push(result);
        });
    }

    // FOC validation
    if (currentArmyData?.FOC_CONFIG) {
        const focResults = validateFocLimits(focPoints, battlePoints, currentArmyData.FOC_CONFIG);
        validationResults.push(...focResults);
        if (focResults.some(r => !r.isValid)) {
            allRulesValid = false;
        }
    }

    return { validationResults, allRulesValid };
}

function validateRule(rule, context) {
    const { armyList, battlePoints } = context;

    switch (rule.type) {
        case 'unitLimit':
            const count = armyList.filter(u => u.name === rule.unitName).length;
            return {
                isValid: count <= rule.max,
                message: count > rule.max ? rule.message : `✅ ${rule.unitName}: ${count}/${rule.max}`
            };

        case 'conditionalUnitLimit':
            const unitCount = armyList.filter(u => u.name === rule.unitName).length;
            const limit = battlePoints >= rule.pointsThreshold ? rule.maxIfAbove : rule.maxIfBelow;
            return {
                isValid: unitCount <= limit,
                message: unitCount > limit ? rule.message : `✅ ${rule.unitName}: ${unitCount}/${limit}`
            };

        case 'maxSecondaryUnits':
            const basicUnits = armyList.filter(u => u.unitData?.foc === 'Core' && !u.name.includes('Tropas Auxiliares')).length;
            const auxiliaryUnits = armyList.filter(u => u.name === 'Tropas Auxiliares').length;
            const isValid = auxiliaryUnits <= basicUnits;
            return {
                isValid,
                message: isValid ? '✅ Relación Tropas Auxiliares/Básicas: Correcta' : '❌ Demasiadas Tropas Auxiliares'
            };

        case 'warnOnSkillsTotalPoints':
            let skillsPoints = 0;
            armyList.forEach(unit => {
                if (unit.selections?.armySkills?.points) {
                    skillsPoints += unit.selections.armySkills.points;
                }
            });
            const isValidSkills = skillsPoints <= 100;
            return {
                isValid: true, // Warning only, doesn't fail validation
                message: isValidSkills ? `✅ Puntos en Renombre: ${skillsPoints}/100` : `⚠️ Puntos en Renombre: ${skillsPoints}/100 (límite recomendado)`
            };

        default:
            return { isValid: true, message: '' };
    }
}

function validateFocLimits(focPoints, battlePoints, focConfig) {
    const results = [];
    
    Object.entries(focConfig).forEach(([foc, config]) => {
        const points = focPoints[foc] || 0;
        const percentage = battlePoints > 0 ? points / battlePoints : 0;
        
        let isValid = true;
        let message = '';

        if (config.min > 0 && percentage < config.min) {
            isValid = false;
            message = `❌ ${config.label}: ${points}pts (${(percentage * 100).toFixed(1)}%) - Mínimo: ${(config.min * 100).toFixed(0)}%`;
        } else if (percentage > config.max) {
            isValid = false;
            message = `❌ ${config.label}: ${points}pts (${(percentage * 100).toFixed(1)}%) - Máximo: ${(config.max * 100).toFixed(0)}%`;
        } else {
            message = `✅ ${config.label}: ${points}pts (${(percentage * 100).toFixed(1)}%)`;
        }

        results.push({ isValid, message });
    });

    return results;
}
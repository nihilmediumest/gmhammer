// ===================================================================================
// --- GUAMAHAMMER MODULAR ARMY BUILDER - VALIDATION MODULE ---
// ===================================================================================
// Last Updated: 2025-10-03 @ 15:45 - Patched FOC percentage calculation to use battle points.
// This module uses the generic rules engine to validate an army list.

import { validateArmyWithEngine } from './rulesEngine.js';

/**
 * The main validation function. It checks standard FOC rules and then calls the
 * generic rules engine to process all army-specific validation rules.
 * @param {object} context - A single object containing the entire army state.
 * @returns {object} An object containing the validation results.
 */
export function validateArmy(context) {
    const { currentArmyData, battlePoints, focPoints } = context;

    if (!currentArmyData || battlePoints <= 0) {
        return { validationResults: [], allRulesValid: true };
    }
    
    const { FOC_CONFIG } = currentArmyData;
    const validationResults = [];

    // --- 1. FOC Percentage Checks (Standard for all armies) ---
    // FIX: All percentages are now correctly calculated against the total battle points, not the points spent.
    const personajesPoints = focPoints.Lord + focPoints.Hero;
    const personajesPercentage = personajesPoints / battlePoints;
    const personajesMax = 0.50;
    validationResults.push({
        isValid: personajesPercentage <= personajesMax,
        message: `Personajes deben ser ${personajesMax * 100}% o menos del total.`
    });

    for (const category in FOC_CONFIG) {
        const config = FOC_CONFIG[category];
        const points = focPoints[category];
        const percentage = points / battlePoints;

        if (config.min > 0) {
            validationResults.push({
                isValid: percentage >= config.min,
                message: `${config.label} deben ser al menos ${config.min * 100}% del total.`
            });
        }
        if (config.max < 1.0) {
            validationResults.push({
                isValid: percentage <= config.max,
                message: `${config.label} no deben superar el ${config.max * 100}% del total.`
            });
        }
    }

    // --- 2. Army Specific Validation Rules (from Rules Engine) ---
    const ruleset = currentArmyData.ARMY_RULESET;
    if (ruleset && ruleset.validationRules) {
        const armySpecificResults = validateArmyWithEngine(ruleset.validationRules, context);
        validationResults.push(...armySpecificResults);
    }
    
    const allRulesValid = validationResults.every(result => result.isValid);

    return { validationResults, allRulesValid };
}

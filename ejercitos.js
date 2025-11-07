// ===================================================================================
// --- ARMY SWITCHBOARD & REGISTRY (ejercitos.js) ---
// ===================================================================================
// This file acts as a central registry for all available armies in the application.
// Last Updated: 2025-10-04 @ 02:35 - Centralized deepMerge logic.
import { ARMY_RULESETS } from './rulesets.js';
import { commonMagicItemsDB } from './comun.js';
// --- ADD THIS CONSTANT  -12-10-25--
export const CHAOS_FACTIONS = ['gcaos', 'dcaos', 'hbes', 'ginf'];
// --- END OF ADDITION ---
/**
 * A generic deep merge utility to combine magic item databases.
 * @param {object} target - The target object to merge into.
 * @param {object} source - The source object to merge from.
 * @returns {object} The merged object.
 */
function deepMerge(target, source) {
    const output = { ...target };
    for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (source[key] instanceof Object && key in output && !Array.isArray(source[key])) {
                output[key] = deepMerge(output[key], source[key]);
            } else {
                output[key] = source[key];
            }
        }
    }
    return output;
}


/**
 * ARMY_REGISTRY
 * This is the single source of truth for all army information.
 * To add a new army, you only need to add a new entry to this array.
 *
 * @property {string} id - The unique identifier for the army (must match filename).
 * @property {string} name - The display name for the UI.
 * @property {function} loader - A function that dynamically imports the army's data module.
 */
export const ARMY_REGISTRY = [
    { id: "aelf", name: "Altos Elfos" },
    { id: "bret", name: "Bretonia" },
    { id: "catai", name: "Gran Catai" },
    { id: "cvlah", name: "Condes Vampiros Lahmia" },
    { id: "cvnec", name: "Condes Vampiros Necrarca" },
    { id: "cvsan", name: "Condes Vampiros Dragón Sangriento" },
    { id: "cvstr", name: "Condes Vampiros Strigoi" },
    { id: "cvvon", name: "Condes Vampiros Von Carstein" },
    { id: "dcaos", name: "Demonios del Caos" },
    { id: "ecaos", name: "Enanos del Caos" },
    { id: "ena", name: "Enanos" },
    { id: "eosc", name: "Elfos Oscuros" },
    { id: "esil", name: "Elfos Silvanos" },
    { id: "gcaos", name: "Guerreros del Caos" },
    { id: "ginf", name: "Grey Infernal" },
    { id: "gobs", name: "Goblins" },
    { id: "hbes", name: "Hombres Bestia" },
    { id: "hlag", name: "Hombres Lagarto" },
    { id: "imp", name: "El Imperio" },
    { id: "kis", name: "Kislev" },
    { id: "merc", name: "Mercenarios" },
    { id: "nehk", name: "Nehekhara" },
    { id: "nmuert", name: "No Muertos" },
    { id: "nors", name: "Norsca" },
    { id: "ogros", name: "Reinos Ogros" },
    { id: "oyg", name: "Orcos y Goblins" },
    { id: "skav", name: "Skavens" },
    { id: "vcosta", name: "Costa del Vampiro" },
];

// This list is now automatically generated from the registry for the UI.
export const AVAILABLE_ARMIES = ARMY_REGISTRY.map(army => ({ id: army.id, name: army.name }));

/**
 * Helper function to handle the necessary merging logic that existed in the original loadArmyData.
 */
function processArmyModule(armyModule, armyId) {
    // The server now returns common magic items in a property called COMMON_MAGIC_ITEMS
    const commonItems = armyModule.COMMON_MAGIC_ITEMS || commonMagicItemsDB; 

    // Centrally handle the merging of magic items
    if (armyModule.magicItemsDB) {
        // USE the common items returned by the server
        armyModule.magicItemsDB = deepMerge(JSON.parse(JSON.stringify(armyModule.magicItemsDB)), commonItems); 
    } else {
        // USE the common items returned by the server
        armyModule.magicItemsDB = JSON.parse(JSON.stringify(commonItems));
    }

    // --- RULESET MERGING (Copied from original logic) ---
    let finalRuleset = ARMY_RULESETS[armyId] || {};

    // If this is a Chaos army, merge the common Chaos rules with its specific rules.
    if (CHAOS_FACTIONS.includes(armyId) && ARMY_RULESETS['caos_common']) {
        const commonRules = ARMY_RULESETS['caos_common'];
        const specificRules = finalRuleset;
        
        // Combine validation and FOC resolution rules
        finalRuleset = {
            ...commonRules,
            ...specificRules,
            validationRules: [
                ...(commonRules.validationRules || []),
                ...(specificRules.validationRules || [])
            ],
            focResolutionRules: [
                ...(commonRules.focResolutionRules || []),
                ...(specificRules.focResolutionRules || [])
            ]
        };
    }
    
    armyModule.ARMY_RULESET = finalRuleset;
    // --- END RULESET MERGING ---

    return armyModule;
}


/**
 * Dynamically loads an army's data by fetching from the new server endpoint.
 * This function is the minimal change required for online live data.
 * @param {string} armyId - The ID of the army to load.
 * @returns {Promise<object>} A promise that resolves to the complete army data module.
 */
export async function loadArmyData(armyId) {
    const armyConfig = ARMY_REGISTRY.find(army => army.id === armyId);
    if (!armyConfig) {
        throw new Error(`No army configuration found for armyId: ${armyId}`);
    }

    try {
        // Step 1: Fetch data from the new server-side API (e.g., /api/get-army)
        const response = await fetch(`/api/get-army?faction=${armyId}`);
        
        if (!response.ok) {
            throw new Error(`Failed to fetch army data for ${armyId}. Status: ${response.status}`);
        }
        
        const armyData = await response.json();
        
        // Step 2: Process the fetched data using the helper function.
        return processArmyModule(armyData, armyId);

    } catch (error) {
        console.error(`CRITICAL: Failed to load army data for ${armyId} from API.`, error);
        throw new Error(`Could not load army data for ${armyId}. Please check your internet connection.`);
    }
}


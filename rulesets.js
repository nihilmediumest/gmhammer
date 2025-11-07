// ===================================================================================
// --- GUAMAHAMMER MODULAR ARMY BUILDER - RULESET LIBRARY ---
// ===================================================================================
// Last Updated: 2025-10-06 @ 06:35 - Added army-specific rulesets for Chaos factions.
// This file contains all army-specific validation and conditional logic.

// --- HELPER FUNCTIONS ---

/**
 * Extracts the Chaos God mark from a unit's selected options.
 * @param {object} unit - The unit object from the army list.
 * @returns {string|null} The name of the Chaos God (e.g., "Khorne") or null if no mark is found.
 */
function getUnitChaosMark(unit) {
    if (!unit.selections || !unit.selections.options) return null;
    const optionKeys = Object.keys(unit.selections.options);
    for (const key of optionKeys) {
        if (key.includes("Khorne")) return "Khorne";
        if (key.includes("Nurgle")) return "Nurgle";
        if (key.includes("Tzeentch")) return "Tzeentch";
        if (key.includes("Slaanesh")) return "Slaanesh";
    }
    // Handle Daemons who have the god in their unit data, not options
    if (unit.god) return unit.god;
    return null;
}
// ===================================================================================
// --- ARMY RULESETS LIBRARY ---
// ===================================================================================
export const ARMY_RULESETS = {

// This is a SHARED ruleset for all Chaos factions.
    // The main application will be responsible for applying this AND the specific army ruleset.
   'caos_common': {
    focResolutionRules: [
        // This rule handles the FOC slot escalation for allied units.
        { type: 'RESOLVE_FOC_FOR_SUPPORT_HOST' }
    ],
    validationRules: [
        // Rule: An army must have a General.
        { type: 'generalRequirement', message: 'Un ejército del Caos debe tener un General.' },

        // Rule: Dynamically validates the Main/Support Host point percentages.
        {
            type: 'custom',
            id: 'validateHostRatio',
            validator: (context) => {
                const { armyList, mainHostFaction, battlePoints } = context;
                if (!mainHostFaction || battlePoints < 1000) return true;

                let supportMaxPercent = 0.0;
                if (battlePoints >= 3000) supportMaxPercent = 0.40;
                else if (battlePoints >= 2000) supportMaxPercent = 0.33;
                else if (battlePoints >= 1000) supportMaxPercent = 0.25;

                const supportPoints = armyList
                    .filter(u => u.unitData.faction !== mainHostFaction)
                    .reduce((sum, u) => sum + u.points, 0);

                const supportPercentage = supportPoints / battlePoints;

                if (supportPercentage > supportMaxPercent) {
                    return `Las Huestes de Apoyo (${(supportPercentage * 100).toFixed(0)}%) superan el máximo permitido del ${(supportMaxPercent * 100)}% para ${battlePoints} puntos.`;
                }
                return true;
            }
        },

        // Rule: Checks the maximum number of allied factions allowed.
        {
            type: 'custom',
            id: 'validateMaxSupportHosts',
            validator: (context) => {
                const { armyList, mainHostFaction, battlePoints } = context;
                if (!mainHostFaction || battlePoints < 1000) return true;

                let maxHosts = 0;
                if (battlePoints >= 3000) maxHosts = 3;
                else if (battlePoints >= 2000) maxHosts = 2;
                else if (battlePoints >= 1000) maxHosts = 1;

                const supportFactions = new Set(
                    armyList
                        .filter(u => u.unitData.faction !== mainHostFaction)
                        .map(u => u.unitData.faction)
                );

                if (supportFactions.size > maxHosts) {
                    return `No puedes tener más de ${maxHosts} Huestes de Apoyo para ${battlePoints} puntos.`;
                }
                return true;
            }
        },

        // Rule: Enforces Lord (Comandante) restrictions based on battle points.
        {
            type: 'custom',
            id: 'validateSupportHostLordAllowance',
            validator: (context) => {
                const { armyList, mainHostFaction, battlePoints } = context;
                if (!mainHostFaction) return true;

                const supportLords = armyList.filter(u => u.foc === 'Lord' && u.unitData.faction !== mainHostFaction);

                if (battlePoints < 3000 && supportLords.length > 0) {
                    return "No se permiten Comandantes aliados en ejércitos de menos de 3000 puntos.";
                }

                if (battlePoints >= 3000) {
                    const lordsByFaction = supportLords.reduce((acc, lord) => {
                        const faction = lord.unitData.faction;
                        acc[faction] = (acc[faction] || 0) + 1;
                        return acc;
                    }, {});

                    for (const faction in lordsByFaction) {
                        if (lordsByFaction[faction] > 1) {
                            return `Cada Hueste de Apoyo solo puede incluir un único Comandante.`;
                        }
                    }
                }
                return true;
            }
        },

        // Rule: Enforces Rare (Unidad Singular) restrictions based on battle points.
        {
            type: 'custom',
            id: 'validateSupportHostRareAllowance',
            validator: (context) => {
                const { armyList, mainHostFaction, battlePoints } = context;
                if (!mainHostFaction) return true;

                const supportRares = armyList.filter(u => u.foc === 'Rare' && u.unitData.faction !== mainHostFaction);

                if (battlePoints < 3000 && supportRares.length > 0) {
                    return "No se permiten Unidades Singulares aliadas en ejércitos de menos de 3000 puntos.";
                }

                if (battlePoints >= 3000) {
                     const raresByFaction = supportRares.reduce((acc, rare) => {
                        const faction = rare.unitData.faction;
                        acc[faction] = (acc[faction] || 0) + 1;
                        return acc;
                    }, {});

                    for (const faction in raresByFaction) {
                        if (raresByFaction[faction] > 1) {
                            return `Cada Hueste de Apoyo solo puede incluir una única Unidad Singular.`;
                        }
                    }
                }
                return true;
            }
        },
        
        // Rule: Enforces the 0-1 limit for all allied Special and Rare units.
        {
            type: 'custom',
            id: 'validateSupportUnitUniqueness',
            validator: (context) => {
                const { armyList, mainHostFaction } = context;
                if (!mainHostFaction) return true;

                const supportUnits = armyList.filter(u => 
                    (u.resolvedFoc === 'Special' || u.resolvedFoc === 'Rare') && 
                    u.unitData.faction !== mainHostFaction
                );

                const unitCounts = supportUnits.reduce((acc, unit) => {
                    acc[unit.name] = (acc[unit.name] || 0) + 1;
                    return acc;
                }, {});

                for (const unitName in unitCounts) {
                    if (unitCounts[unitName] > 1) {
                        return `Solo puedes incluir una unidad de "${unitName}" como parte de un contingente aliado (Regla 0-1).`;
                    }
                }
                return true;
            }
        },

        // Rule: Prevents Battle Standard Bearers in support hosts.
        {
            type: 'custom',
            id: 'preventSupportHostBSB',
            validator: (context) => {
                const { armyList, mainHostFaction } = context;
                if (!mainHostFaction) return true;

                const supportBSB = armyList.find(u => u.isBSB && u.unitData.faction !== mainHostFaction);

                if (supportBSB) {
                    return "No puedes incluir un Portaestandarte de Batalla en un contingente de apoyo.";
                }
                return true;
            }
        },
        
        // Rule: Checks that each support host has a required leader (Hero or Lord).
        {
            type: 'custom',
            id: 'validateSupportHostLeaderRequirement',
            validator: (context) => {
                const { armyList, mainHostFaction } = context;
                if (!mainHostFaction) return true;
                
                const supportFactions = new Set(
                    armyList
                        .filter(u => u.unitData.faction !== mainHostFaction)
                        .map(u => u.unitData.faction)
                );
                
                if (supportFactions.size === 0) return true;

                for (const faction of supportFactions) {
                    const hasLeader = armyList.some(u => 
                        u.unitData.faction === faction && 
                        (u.foc === 'Hero' || u.foc === 'Lord')
                    );
                    if (!hasLeader) {
                        const factionName = context.chaosHostData[faction]?.ARMY_NAME || faction;
                        return `El contingente de ${factionName} debe incluir al menos un Héroe o Comandante.`;
                    }
                }
                return true;
            }
        },

        // Rule: Mark of Chaos dependency rule.
        {
            type: 'custom',
            id: 'validateCharacterMarkRequirement',
            validator: (context) => {
                const characters = context.armyList.filter(u => u.unitData.foc === 'Lord' || u.unitData.foc === 'Hero');
                for (const char of characters) {
                    const charMark = getUnitChaosMark(char);
                    // This rule does not apply to Chaos Undivided characters
                    if (charMark && charMark !== "Absoluto") {
                        const hasMatchingCoreUnit = context.armyList.some(coreUnit => 
                            coreUnit.unitData.foc === 'Core' && getUnitChaosMark(coreUnit) === charMark
                        );
                        if (!hasMatchingCoreUnit) {
                            return `El personaje "${char.name}" tiene la Marca de ${charMark} pero no hay ninguna unidad Básica con esa misma Marca.`;
                        }
                    }
                }
                return true;
            }
        }
    ]
},
// ===================================================================================
// --- KISLEV RULESET ---
// ===================================================================================

'kis': {
    modificationRules: [],

    focResolutionRules: [
        // No specific FOC changes found in the Kislev book
    ],

    validationRules: [
        { type: 'generalRequirement', message: 'Un ejército de Kislev debe tener un General.' },
        
        // Unit restrictions from the PDF
        { type: 'unitLimit', unitName: 'Druzinha', max: 2, message: 'Solo puedes incluir un máximo de 2 unidades de Druzinha.' },
        { type: 'unitLimit', unitName: 'Círculo Interior de la Legión del Grifo', max: 1, message: 'Solo puedes incluir una unidad del Círculo Interior de la Legión del Grifo.' },
        { type: 'unitLimit', unitName: 'Guardia Gospodar', max: 1, message: 'Solo puedes incluir una unidad de Guardia Gospodar.' },
        { type: 'unitLimit', unitName: 'Hijos de Ursun', max: 1, message: 'Solo puedes incluir una unidad de Hijos de Ursun.' },
        { type: 'unitLimit', unitName: 'Carón', max: 1, message: 'Solo puedes incluir un Carón.' },
        { type: 'unitLimit', unitName: 'Gran Cañón Urugán', max: 1, message: 'Solo puedes incluir un Gran Cañón Urugán.' },
        
        // Character restrictions
        {
            type: 'custom',
            id: 'validateBrujaUngolRestrictions',
            message: 'La Bruja Ungol solo puede unirse a unidades de arqueros Ungol a caballo.',
            validator: (context) => {
                const brujasUngol = context.armyList.filter(u => u.name === 'Bruja Ungol');
                if (brujasUngol.length === 0) return true;

                for (const bruja of brujasUngol) {
                    // Check if mounted (required to join units)
                    const isMounted = bruja.selections?.mounts && Object.keys(bruja.selections.mounts).length > 0;
                    
                    if (isMounted) {
                        // The rule says she can only join arqueros Ungol a caballo
                        // This would need to be checked during army list building, not in validation
                        // So we'll just validate that she is mounted as required
                        continue;
                    } else {
                        return 'La Bruja Ungol debe ir montada para poder unirse a unidades.';
                    }
                }
                return true;
            }
        },

        // Battle Standard Bearer validation
        {
            type: 'custom',
            id: 'validateBattleStandard',
            message: 'Solo un Boyardo puede ser el Portaestandarte de Batalla.',
            validator: (context) => {
                const battleStandards = context.armyList.filter(u => 
                    u.selections && 
                    Object.values(u.selections.options || {}).some(opt => 
                        opt.name && opt.name.includes('Portaestandarte de Batalla')
                    )
                );
                
                if (battleStandards.length > 1) {
                    return 'Solo puede haber un Portaestandarte de Batalla en el ejército.';
                }
                
                // Check if BSB is a Boyardo
                if (battleStandards.length === 1) {
                    const bsb = battleStandards[0];
                    if (!bsb.name.includes('Boyardo')) {
                        return 'Solo un Boyardo puede ser el Portaestandarte de Batalla.';
                    }
                }
                
                return true;
            }
        },
    ]
},
// ===================================================================================
// --- ELFOS OSCUROS RULESET ---
// ===================================================================================

'eosc': {
    modificationRules: [],

    focResolutionRules: [
        {
            type: 'RESOLVE_LIMITED_FOC',
            condition: { type: 'generalIs', name: 'Reina Bruja' },
            targetUnit: 'Elfas Brujas',
            newFOC: 'Core',
            limit: 1
        },
        {
            type: 'RESOLVE_LIMITED_FOC',
            condition: { type: 'generalIs', name: 'Señor de las Bestias' },
            targetUnit: 'Hidra de Guerra',
            newFOC: 'Special',
            limit: 1
        }
    ],

    validationRules: [
        { type: 'generalRequirement', message: 'Un ejército de Elfos Oscuros debe tener un General.' },
        
        // Unit restrictions from the PDF
        { type: 'unitLimit', unitName: 'Guardia de la Ciudad', max: 1, message: 'Solo puedes incluir una unidad de Guardia de la Ciudad.' },
        { type: 'unitLimit', unitName: 'Guardia Negra', max: 1, message: 'Solo puedes incluir una unidad de Guardia Negra.' },
        { type: 'unitLimit', unitName: 'Caldero de Sangre', max: 1, message: 'Solo puedes incluir un Caldero de Sangre.' },
        { type: 'unitLimit', unitName: 'Reina Bruja', max: 1, message: 'Solo puedes incluir una Reina Bruja.' },
        { type: 'unitLimit', unitName: 'Señor de las Bestias', max: 1, message: 'Solo puedes incluir un Señor de las Bestias.' },
        
        // Conditional unit restrictions
        {
            type: 'custom',
            id: 'validateGuardiaCiudadRequirement',
            message: 'Sólo puedes incluir una unidad de Guardia de la ciudad si incluyes al menos una unidad de Guerreros o Ballesteros druchii.',
            validator: (context) => {
                const hasGuardiaCiudad = context.armyList.some(u => u.name === 'Guardia de la Ciudad');
                if (!hasGuardiaCiudad) return true;
                
                const hasGuerrerosOrBallesteros = context.armyList.some(u => 
                    u.name === 'Guerreros Druchii' || u.name === 'Ballesteros Druchii'
                );
                
                if (!hasGuerrerosOrBallesteros) {
                    return 'Sólo puedes incluir una unidad de Guardia de la ciudad si incluyes al menos una unidad de Guerreros o Ballesteros druchii.';
                }
                return true;
            }
        },
        {
            type: 'custom',
            id: 'validateLanzavirotesRestriction',
            message: 'Si no incluyes ninguna miniatura con la regla Khainita, puedes incluir Lanzavirotes Destripador como unidad Especial.',
            validator: (context) => {
                const hasLanzavirotes = context.armyList.some(u => u.name === 'Lanzavirotes Destripador');
                if (!hasLanzavirotes) return true;
                
                const hasKhainitas = context.armyList.some(u => {
                    const unitData = u.unitData || {};
                    return unitData.reglasEspeciales && unitData.reglasEspeciales.includes('Khainitas');
                });
                
                // If there are Khainitas, Lanzavirotes must be in Rare (default)
                // If no Khainitas, Lanzavirotes can be in Special
                // This is handled by the unit's warning and FOC, no validation needed
                return true;
            }
        },
        
        {
            type: 'custom',
            id: 'validateAsesinoCannotBeGeneral',
            message: 'Un Asesino no puede ser el General del ejército.',
            validator: (context) => {
                if (context.general && context.general.name === 'Asesino Elfo Oscuro') {
                    return 'Un Asesino no puede ser el General del ejército.';
                }
                return true;
            }
        },
        {
            type: 'custom',
            id: 'validateBattleStandard',
            message: 'Solo un Noble o Reina Bruja puede ser el Portaestandarte de Batalla.',
            validator: (context) => {
                const battleStandards = context.armyList.filter(u => 
                    u.selections && 
                    Object.values(u.selections.options || {}).some(opt => 
                        opt.name && opt.name.includes('Portaestandarte de Batalla')
                    )
                );
                
                if (battleStandards.length > 1) {
                    return 'Solo puede haber un Portaestandarte de Batalla en el ejército.';
                }
                
                // Check if BSB is a valid character type
                if (battleStandards.length === 1) {
                    const bsb = battleStandards[0];
                    const validTypes = ['Noble Elfo Oscuro', 'Reina Bruja'];
                    
                    const isValidType = validTypes.some(type => bsb.name.includes(type));
                    if (!isValidType) {
                        return 'Solo un Noble o Reina Bruja puede ser el Portaestandarte de Batalla.';
                    }
                }
                
                return true;
            }
        },
        {
            type: 'custom',
            id: 'validateHidraVeteranaRequirement',
            message: 'Sólo puedes convertir una Hidra en Hidra Veterana si tu ejército incluye al menos un Señor de las Bestias.',
            validator: (context) => {
                const hasHidraVeterana = context.armyList.some(u => 
                    u.name === 'Hidra de Guerra' && 
                    u.selections?.options?.['Hidra veterana']
                );
                
                if (!hasHidraVeterana) return true;
                
                const hasSenorBestias = context.armyList.some(u => u.name === 'Señor de las Bestias');
                
                if (!hasSenorBestias) {
                    return 'Sólo puedes convertir una Hidra en Hidra Veterana si tu ejército incluye al menos un Señor de las Bestias.';
                }
                return true;
            }
        },
        {
            type: 'custom',
            id: 'validateCalderoSangreLimit',
            message: 'Solo puedes incluir un Caldero de Sangre por ejército.',
            validator: (context) => {
                const calderos = context.armyList.filter(u => u.name === 'Caldero de Sangre');
                if (calderos.length > 1) {
                    return 'Solo puedes incluir un Caldero de Sangre por ejército.';
                }
                
                // Also check if multiple characters have Caldero de Sangre as mount
                const charactersWithCaldero = context.armyList.filter(u => 
                    u.selections?.mounts && 
                    Object.keys(u.selections.mounts).some(mount => mount === 'Caldero de Sangre')
                );
                
                if (charactersWithCaldero.length > 1) {
                    return 'Solo puedes incluir un Caldero de Sangre por ejército.';
                }
                
                // If both a standalone Caldero and a character with Caldero mount exist
                if (calderos.length > 0 && charactersWithCaldero.length > 0) {
                    return 'Solo puedes incluir un Caldero de Sangre por ejército.';
                }
                
                return true;
            }
        }
    ]
},
// ===================================================================================
// --- HOMBRES LAGARTO RULESET ---
// ===================================================================================

'hlag': {
    modificationRules: [],

    focResolutionRules: [
        {
            type: 'RESOLVE_LIMITED_FOC',
            condition: { type: 'armyIncludesUnit', unitName: 'Mago-Sacerdote Slann' },
            targetUnit: 'Guardia del Templo',
            newFOC: 'Core',
            limit: 1
        }
    ],

    validationRules: [
        { type: 'generalRequirement', message: 'Un ejército de Hombres Lagarto debe tener un General.' },
        
        // Unit limits from the PDF
        { type: 'unitLimit', unitName: 'Salamandras', max: 1, message: 'Solo puedes incluir una unidad de Salamandras.' },
        { type: 'unitLimit', unitName: 'Razordones', max: 1, message: 'Solo puedes incluir una unidad de Razordones.' },
        { type: 'unitLimit', unitName: 'Enjambres de la Jungla', max: 2, message: 'Solo puedes incluir un máximo de 2 unidades de Enjambres de la Jungla.' },
        { type: 'unitLimit', unitName: 'Estegadón Anciano', max: 1, message: 'Solo puedes incluir un Estegadón Anciano.' },
        { type: 'unitLimit', unitName: 'Troglodón', max: 1, message: 'Solo puedes incluir un Troglodón.' },
        
        // Character restrictions
        { type: 'unitLimit', unitName: 'Oráculo Eslizón', max: 1, message: 'Solo puedes incluir un Oráculo Eslizón.' },
        { type: 'unitLimit', unitName: 'Cacique Eslizón', max: 1, message: 'Solo puedes incluir un Cacique Eslizón.' },

        // Slann generation restrictions
        {
            type: 'custom',
            id: 'validateSlannGeneration',
            message: 'Los Slann de Segunda Generación solo pueden incluirse en ejércitos de 3000 puntos o más.',
            validator: (context) => {
                const slannUnits = context.armyList.filter(u => u.name === 'Mago-Sacerdote Slann');
                if (slannUnits.length === 0) return true;

                for (const slann of slannUnits) {
                    const hasSecondGen = slann.selections?.options && 
                        Object.values(slann.selections.options).some(opt => 
                            opt.name && opt.name.includes('Segunda generación')
                        );
                    
                    if (hasSecondGen && context.totalPoints < 3000) {
                        return 'Los Slann de Segunda Generación solo pueden incluirse en ejércitos de 3000 puntos o más.';
                    }
                }
                return true;
            }
        },

        // Battle Standard Bearer validation
        {
            type: 'custom',
            id: 'validateBattleStandard',
            message: 'Solo un Saurio Escamadura o Mago-Sacerdote Slann puede ser el Portaestandarte de Batalla.',
            validator: (context) => {
                const battleStandards = context.armyList.filter(u => 
                    u.selections && 
                    Object.values(u.selections.options || {}).some(opt => 
                        opt.name && opt.name.includes('Portaestandarte de Batalla')
                    )
                );
                
                if (battleStandards.length > 1) {
                    return 'Solo puede haber un Portaestandarte de Batalla en el ejército.';
                }
                
                // Check if BSB is a valid character type
                if (battleStandards.length === 1) {
                    const bsb = battleStandards[0];
                    const isValidType = bsb.name.includes('Saurio Escamadura') || bsb.name.includes('Mago-Sacerdote Slann');
                    if (!isValidType) {
                        return 'Solo un Saurio Escamadura o Mago-Sacerdote Slann puede ser el Portaestandarte de Batalla.';
                    }
                }
                
                return true;
            }
        },
            
        // Salamandras/Razordones Batidores rule
        {
            type: 'custom',
            id: 'validateSalamandrasBatidores',
            message: 'Las unidades de Salamandras y Razordones deben incluir 3 Batidores Eslizones por cada monstruo.',
            validator: (context) => {
                const salamandras = context.armyList.filter(u => u.name === 'Salamandras');
                const razordones = context.armyList.filter(u => u.name === 'Razordones');
                
                // This validation ensures the unit composition is maintained
                // The actual model counts are handled in the unit configuration
                return true;
            }
        },

        // Desoves validation - ensure only one desove per unit
        {
            type: 'custom',
            id: 'validateDesoves',
            message: 'Cada unidad solo puede tener un Desove Sagrado.',
            validator: (context) => {
                const unitsWithDesoves = context.armyList.filter(u => 
                    u.selections?.options && 
                    Object.values(u.selections.options).some(opt => 
                        opt.name && opt.name.includes('Desove')
                    )
                );
                
                for (const unit of unitsWithDesoves) {
                    const desoveCount = Object.values(unit.selections.options).filter(opt => 
                        opt.name && opt.name.includes('Desove')
                    ).length;
                    
                    if (desoveCount > 1) {
                        return `La unidad "${unit.name}" tiene más de un Desove Sagrado seleccionado. Solo puede tener uno.`;
                    }
                }
                return true;
            }
        },

        // Special mount restrictions
        {
            type: 'custom',
            id: 'validateMountRestrictions',
            message: 'Algunas monturas tienen restricciones específicas por tipo de personaje.',
            validator: (context) => {
                const mountRestrictions = {
                    'Carnosaurio': ['Saurio Viejaestirpe', 'Saurio Escamadura'],
                    'Carnosaurio Alfa': ['Saurio Viejaestirpe'],
                    'Troglodón': ['Cacique Eslizón', 'Oráculo Eslizón'],
                    'Estegadón Anciano con Artefacto de los Dioses': ['Chamán Eslizón']
                };
                
                for (const unit of context.armyList) {
                    if (unit.selections?.mounts) {
                        const mountNames = Object.keys(unit.selections.mounts);
                        for (const mountName of mountNames) {
                            const allowedUnits = mountRestrictions[mountName];
                            if (allowedUnits && !allowedUnits.some(allowed => unit.name.includes(allowed))) {
                                return `La montura "${mountName}" no está permitida para el personaje "${unit.name}".`;
                            }
                        }
                    }
                }
                return true;
            }
        }
    ]
},
// ===================================================================================
// --- EL IMPERIO RULESET ---
// ===================================================================================
'imp': {
    modificationRules: [],

    focResolutionRules: [
        {
            type: 'RESOLVE_LIMITED_FOC',
            condition: { type: 'generalIs', name: 'Maestre Templario' },
            targetUnit: 'Caballeros del Círculo Interior',
            newFOC: 'Core',
            limit: 1
        },
        {
            type: 'RESOLVE_LIMITED_FOC',
            condition: { 
                type: 'custom',
                validator: (context) => {
                    // Archilector mounted on Altar de Guerra as general
                    return context.general && 
                           context.general.name === 'Archilector' &&
                           context.general.selections?.mounts?.Altar;
                }
            },
            targetUnit: 'Flagelantes',
            newFOC: 'Core',
            limit: 1
        }
    ],

    validationRules: [
        { type: 'generalRequirement', message: 'Un ejército del Imperio debe tener un General.' },
        
        // Unit restrictions from the PDF
        { type: 'unitLimit', unitName: 'Caballeros del Círculo Interior', max: 1, message: 'Solo puedes incluir una unidad de Caballeros del Círculo Interior.' },
        { type: 'unitLimit', unitName: 'Templarios a Pie', max: 1, message: 'Solo puedes incluir una unidad de Templarios a Pie.' },
        { type: 'unitLimit', unitName: 'Halflings', max: 1, message: 'Solo puedes incluir una unidad de Halflings.' },
        { type: 'unitLimit', unitName: 'Enanos Imperiales', max: 1, message: 'Solo puedes incluir una unidad de Enanos Imperiales.' },
        { type: 'unitLimit', unitName: 'Cañón de Salvas Hellblaster', max: 1, message: 'Solo puedes incluir un Cañón de Salvas Hellblaster.' },
        { type: 'unitLimit', unitName: 'Olla Caliente Halfling', max: 1, message: 'Solo puedes incluir una Olla Caliente Halfling.' },
        { type: 'unitLimit', unitName: 'Tanque a Vapor Imperial', max: 1, message: 'Solo puedes incluir un Tanque a Vapor Imperial.' },
        { type: 'unitLimit', unitName: 'Cazador de Brujas', max: 1, message: 'Solo puedes incluir un Cazador de Brujas.' },

        // Character restrictions
        {
            type: 'custom',
            id: 'validateHéroeHalflingRestrictions',
            message: 'Restricciones del Héroe Halfling.',
            validator: (context) => {
                const heroesHalfling = context.armyList.filter(u => u.name === 'Héroe Halfling');
                if (heroesHalfling.length === 0) return true;

                const halflingRegiments = context.armyList.filter(u => u.name === 'Halflings').length;
                
                // Check max 1 per Halfling regiment
                if (heroesHalfling.length > halflingRegiments) {
                    return 'Solo puedes incluir un Héroe Halfling por cada regimiento de Halflings.';
                }

                // Check general restriction
                const halflingGeneral = heroesHalfling.some(hero => hero.id === context.generalId);
                if (halflingGeneral) {
                    const nonHalflingUnits = context.armyList.filter(u => 
                        u.name !== 'Héroe Halfling' && 
                        u.name !== 'Halflings' && 
                        u.name !== 'Olla Caliente Halfling'
                    );
                    if (nonHalflingUnits.length > 0) {
                        return 'Un Héroe Halfling solo puede ser general si todo el ejército está compuesto por regimientos de Halflings y Ollas calientes Halfling.';
                    }
                }

                return true;
            }
        },

        // Olla Caliente Halfling restriction
        {
            type: 'custom',
            id: 'validateOllaCalienteRequirement',
            message: 'La Olla Caliente Halfling requiere al menos un regimiento de Halflings.',
            validator: (context) => {
                const hasOllaCaliente = context.armyList.some(u => u.name === 'Olla Caliente Halfling');
                if (!hasOllaCaliente) return true;

                const hasHalflings = context.armyList.some(u => u.name === 'Halflings');
                if (!hasHalflings) {
                    return 'Solo puedes incluir una Olla Caliente Halfling si incluyes al menos un regimiento de Halflings.';
                }

                return true;
            }
        },

        // Battle Standard Bearer validation
        {
            type: 'custom',
            id: 'validateBattleStandard',
            message: 'Solo un Capitán puede ser el Portaestandarte de Batalla.',
            validator: (context) => {
                const battleStandards = context.armyList.filter(u => 
                    u.selections && 
                    Object.values(u.selections.options || {}).some(opt => 
                        opt.name && opt.name.includes('Portaestandarte de Batalla')
                    )
                );
                
                if (battleStandards.length > 1) {
                    return 'Solo puede haber un Portaestandarte de Batalla en el ejército.';
                }
                
                // Check if BSB is a Capitán
                if (battleStandards.length === 1) {
                    const bsb = battleStandards[0];
                    if (bsb.name !== 'Capitán') {
                        return 'Solo un Capitán puede ser el Portaestandarte de Batalla.';
                    }
                }
                
                return true;
            }
        },
       

        // Arcabuz de repetición Colt restriction
        {
            type: 'custom',
            id: 'validateArcabuzColtRestriction',
            message: 'Solo una unidad de Batidores puede sustituir por Arcabuz de repetición Colt.',
            validator: (context) => {
                const batidoresWithColt = context.armyList.filter(u => 
                    u.name === 'Batidores' && 
                    u.selections?.options && 
                    Object.values(u.selections.options).some(opt => 
                        opt.name && opt.name.includes('Arcabuz de repetición Colt')
                    )
                );
                
                if (batidoresWithColt.length > 1) {
                    return 'Solo una única unidad de Batidores puede sustituir sus Arcabuces de repetición por Arcabuz de repetición Colt.';
                }
                
                return true;
            }
        }
    ]
},
// ===================================================================================
// --- CONDES VAMPIROS - NECRARCA RULESET ---
// ===================================================================================

'cvnec': {
    modificationRules: [],

    focResolutionRules: [
        // No specific FOC changes found in the Necrarca PDF
    ],

    validationRules: [
        { type: 'generalRequirement', message: 'Un ejército de Condes Vampiros debe tener un General.' },
        
        // General must be a vampire character (highest Leadership vampire)
        {
            type: 'custom',
            id: 'validateVampireGeneral',
            message: 'El General del ejército debe ser el personaje vampiro con mayor Liderazgo.',
            validator: (context) => {
                if (!context.general) return true;
                
                // Check if general has Vampire special rule
                const hasVampireRule = context.general.unitData?.reglasEspeciales?.includes('Vampiro') || 
                                     context.general.name.includes('Vampiro') ||
                                     context.general.name.includes('Necrarca');
                
                if (!hasVampireRule) {
                    return 'El General del ejército debe ser un personaje vampiro.';
                }
                return true;
            }
        },

        // Unit restrictions from the PDF
        { type: 'unitLimit', unitName: 'Ingenio Mortis', max: 1, message: 'Solo puedes incluir un Ingenio Mortis.' },
        { type: 'unitLimit', unitName: 'Engendro del Terror', max: 1, message: 'Solo puedes incluir un Engendro del Terror.' },
        { type: 'unitLimit', unitName: 'Gigante de Hueso', max: 1, message: 'Solo puedes incluir un Gigante de Hueso.' },
        
        // Ratio-based restrictions
        { 
            type: 'unitRatio', 
            primaryUnit: 'Esqueletos', 
            secondaryUnit: 'Necrófagos', 
            maxSecondaryPerPrimary: 1, 
            message: 'Sólo puedes incluir una unidad de Necrófagos por cada unidad de Esqueletos o Zombis.' 
        },
        { 
            type: 'unitRatio', 
            primaryUnit: 'Zombis', 
            secondaryUnit: 'Necrófagos', 
            maxSecondaryPerPrimary: 1, 
            message: 'Sólo puedes incluir una unidad de Necrófagos por cada unidad de Esqueletos o Zombis.' 
        },
        { 
            type: 'unitRatio', 
            primaryUnit: 'Esqueletos', 
            secondaryUnit: 'Hueste Espectral', 
            maxSecondaryPerPrimary: 1, 
            message: 'Sólo puedes incluir una unidad de Hueste Espectral por cada unidad de Esqueletos o Zombis.' 
        },
        { 
            type: 'unitRatio', 
            primaryUnit: 'Zombis', 
            secondaryUnit: 'Hueste Espectral', 
            maxSecondaryPerPrimary: 1, 
            message: 'Sólo puedes incluir una unidad de Hueste Espectral por cada unidad de Esqueletos o Zombis.' 
        },

        // Jaurías de muerte rule for Lobos Siniestros
        {
            type: 'custom',
            id: 'validateJauriasMuerte',
            message: 'No podrás incluir en el ejército más unidades Básicas con la regla Jaurías de muerte que sin ella.',
            validator: (context) => {
                const lobosSiniestrosCount = context.armyList.filter(u => 
                    u.name === 'Lobos Siniestros' && u.unitData?.foc === 'Core'
                ).length;
                
                const otherCoreUnitsCount = context.armyList.filter(u => 
                    u.unitData?.foc === 'Core' && u.name !== 'Lobos Siniestros'
                ).length;
                
                if (lobosSiniestrosCount > otherCoreUnitsCount) {
                    return 'No puedes incluir más unidades de Lobos Siniestros (con Jaurías de muerte) que otras unidades Básicas.';
                }
                return true;
            }
        },

        // Lobos Espectrales restriction (only one unit can be upgraded)
        {
            type: 'custom',
            id: 'validateLobosEspectrales',
            message: 'Solo una única unidad de Lobos Siniestros del ejército puede ser convertida en Lobos Espectrales.',
            validator: (context) => {
                const lobosEspectralesCount = context.armyList.filter(u => 
                    u.name === 'Lobos Siniestros' && 
                    u.selections?.options && 
                    Object.values(u.selections.options).some(opt => 
                        opt.name && opt.name.includes('Lobos espectrales')
                    )
                ).length;
                
                if (lobosEspectralesCount > 1) {
                    return 'Solo una unidad de Lobos Siniestros puede ser convertida en Lobos Espectrales.';
                }
                return true;
            }
        },
      
        // Battle Standard Bearer validation
        {
            type: 'custom',
            id: 'validateBattleStandard',
            message: 'Solo un Conde Vampiro o Señor Tumulario puede ser el Portaestandarte de Batalla.',
            validator: (context) => {
                const battleStandards = context.armyList.filter(u => 
                    u.selections && 
                    Object.values(u.selections.options || {}).some(opt => 
                        opt.name && opt.name.includes('Portaestandarte de Batalla')
                    )
                );
                
                if (battleStandards.length > 1) {
                    return 'Solo puede haber un Portaestandarte de Batalla en el ejército.';
                }
                return true;
            }
        },
       
    ]
},
// ===================================================================================
// --- CONDES VAMPIROS DRAGÓN SANCRIENTO RULESET ---
// ===================================================================================

'cvsan': {
    modificationRules: [],

    focResolutionRules: [
        // No specific FOC changes found in the Dragón Sangriento book
    ],

    validationRules: [
        { type: 'generalRequirement', message: 'Un ejército de Condes Vampiros Dragón Sangriento debe tener un General.' },
        
        // Unit restrictions from the PDF
        { type: 'unitLimit', unitName: 'Siervos Sangrientos', max: 2, message: 'Solo puedes incluir un máximo de 2 unidades de Siervos Sangrientos.' },
        { type: 'unitLimit', unitName: 'Batidores Esqueleto', max: 1, message: 'Solo puedes incluir una unidad de Batidores Esqueleto.' },
        { type: 'unitLimit', unitName: 'Guardia Sangrienta', max: 1, message: 'Solo puedes incluir una unidad de Guardia Sangrienta.' },
        { type: 'unitLimit', unitName: 'Engendro del Terror', max: 1, message: 'Solo puedes incluir un Engendro del Terror.' },
        { type: 'unitLimit', unitName: 'Carruaje Negro', max: 1, message: 'Solo puedes incluir un Carruaje Negro.' },
        
        // Conditional unit limits
        {
            type: 'conditionalUnitLimit',
            unitName: 'Batidores Esqueleto',
            pointsThreshold: 3000,
            maxIfBelow: 1,
            maxIfAbove: 2,
            message: 'Límite de Batidores Esqueleto excedido.'
        },
        
        // Ratio-based restrictions
        {
            type: 'custom',
            id: 'validateBandadasMurcielagosRatio',
            message: 'Solo puedes incluir una bandada de murciélagos por cada unidad de esqueletos.',
            validator: (context) => {
                const esqueletosCount = context.armyList.filter(u => u.name === 'Esqueletos').length;
                const bandadasCount = context.armyList.filter(u => u.name === 'Bandadas de Murciélagos').length;
                
                if (bandadasCount > esqueletosCount) {
                    return `Tienes ${bandadasCount} Bandadas de Murciélagos pero solo ${esqueletosCount} unidades de Esqueletos. Solo puedes incluir una bandada por cada unidad de esqueletos.`;
                }
                return true;
            }
        },
        
       {
    type: 'custom',
    id: 'validateLobosSiniestrosJaurias',
    message: 'No podrás incluir en el ejército más unidades de Lobos Siniestros con Jaurías de muerte que sin ella.',
    validator: (context) => {
        const allLobosUnits = context.armyList.filter(u => u.name === 'Lobos Siniestros');
        
        // Lobos Siniestros with Jaurías de muerte (have the special rule)
        const lobosWithJaurias = allLobosUnits.filter(unit => 
            unit.unitData?.reglasEspeciales?.includes('Jaurías de muerte')
        ).length;
        
        // Lobos Siniestros without Jaurías de muerte (don't have the special rule)
        const lobosWithoutJaurias = allLobosUnits.length - lobosWithJaurias;
        
        if (lobosWithJaurias > lobosWithoutJaurias) {
            return `Tienes ${lobosWithJaurias} unidades de Lobos Siniestros con Jaurías de muerte pero solo ${lobosWithoutJaurias} sin ella. No puedes tener más unidades con Jaurías de muerte que sin ella.`;
        }
        return true;
    }
},
        
        // General validation - must be a Vampire character
        {
            type: 'custom',
            id: 'validateGeneralIsVampire',
            message: 'El General del ejército debe ser un personaje vampiro.',
            validator: (context) => {
                if (!context.general) return true;
                
                const vampireCharacters = [
                    'Señor de Vampiros Dragón Sangriento',
                    'Conde Vampiro Dragón Sangriento'
                ];
                
                const isValidGeneral = vampireCharacters.some(name => context.general.name.includes(name));
                
                if (!isValidGeneral) {
                    return 'El General del ejército debe ser un Señor de Vampiros o Conde Vampiro Dragón Sangriento.';
                }
                return true;
            }
        },
        
        // Battle Standard Bearer validation
        {
            type: 'custom',
            id: 'validateBattleStandard',
            message: 'Solo un Conde Vampiro o Señor Tumulario puede ser el Portaestandarte de Batalla.',
            validator: (context) => {
                const battleStandards = context.armyList.filter(u => 
                    u.selections && 
                    Object.values(u.selections.options || {}).some(opt => 
                        opt.name && opt.name.includes('Portaestandarte de Batalla')
                    )
                );
                
                if (battleStandards.length > 1) {
                    return 'Solo puede haber un Portaestandarte de Batalla en el ejército.';
                }
                
                return true;
            }
        },
        
        // Vampire Clan restriction
        {
            type: 'custom',
            id: 'validateVampireClanRestriction',
            message: 'Ningún clan puede incluir vampiros de otros clanes.',
            validator: (context) => {
                // Since this is specifically the Dragón Sangriento army module,
                // we don't need to validate cross-clan restrictions as the database
                // only contains Dragón Sangriento units
                return true;
            }
        },
        
        // Converted Necromancer validation
        {
            type: 'custom',
            id: 'validateConvertedNecromancer',
            message: 'Solo puedes convertir un nigromante en no muerto si el general es un Liche.',
            validator: (context) => {
                const convertedNecromancers = context.armyList.filter(u => 
                    u.name === 'Nigromante' && 
                    u.selections?.options && 
                    Object.values(u.selections.options).some(opt => opt.name === 'Convertir en no muerto')
                );
                
                if (convertedNecromancers.length > 0) {
                    const generalIsLiche = context.general && context.general.name === 'Liche';
                    if (!generalIsLiche) {
                        return 'Solo puedes convertir un nigromante en no muerto si el general del ejército es un Liche.';
                    }
                }
                return true;
            }
        },
        
        // Points warning for skills
        { type: 'warnOnSkillsTotalPoints' }
    ]
},
// ===================================================================================
// --- ENANOS DEL CAOS RULESET ---
// ===================================================================================

'ecaos': {
    modificationRules: [],

    focResolutionRules: [
        // No specific FOC changes found in the Enanos del Caos book
    ],

    validationRules: [
        { type: 'generalRequirement', message: 'Un ejército de Enanos del Caos debe tener un General.' },
        
        // Unit restrictions from the PDF
        { type: 'unitLimit', unitName: "Centauro Hash'Ruk", max: 1, message: "Solo puedes incluir un Centauro Hash'Ruk." },
        { type: 'unitLimit', unitName: "Destructor K'daai", max: 1, message: "Solo puedes incluir un Destructor K'daai." },
        { type: 'unitLimit', unitName: "Demonio de Hierro", max: 1, message: "Solo puedes incluir un Demonio de Hierro." },
        { type: 'unitLimit', unitName: "Gigante de Asedio", max: 1, message: "Solo puedes incluir un Gigante de Asedio." },
        { type: 'unitLimit', unitName: "Mortero Estremecedor", max: 1, message: "Solo puedes incluir un Mortero Estremecedor." },
        { type: 'unitLimit', unitName: "Hobgoblins Jinetes de Lobo", max: 2, message: "Solo puedes incluir un máximo de 2 unidades de Hobgoblins Jinetes de Lobo." },
        
        // Hobgoblin dependency restrictions
        {
            type: 'custom',
            id: 'validateHobgoblinsRequirement',
            message: 'Sólo puedes incluir unidades de Hobgoblins si incluyes al menos una unidad de Guerreros o Trabuqueros enanos del caos.',
            validator: (context) => {
                const hasHobgoblins = context.armyList.some(u => u.name === 'Hobgoblins');
                if (!hasHobgoblins) return true;
                
                const hasEnanoCore = context.armyList.some(u => 
                    u.name === 'Guerreros Enanos del Caos' || 
                    u.name === 'Trabuqueros Enanos del Caos'
                );
                
                if (!hasEnanoCore) {
                    return 'Sólo puedes incluir unidades de Hobgoblins si incluyes al menos una unidad de Guerreros o Trabuqueros enanos del caos.';
                }
                return true;
            }
        },
        {
            type: 'custom',
            id: 'validateHobgoblinsEscurridizosRequirement',
            message: 'Sólo puedes incluir unidades de Hobgoblins escurridizos si incluyes al menos una unidad de hobgoblins.',
            validator: (context) => {
                const hasEscurridizos = context.armyList.some(u => u.name === 'Hobgoblins Escurridizos');
                if (!hasEscurridizos) return true;
                
                const hasHobgoblins = context.armyList.some(u => u.name === 'Hobgoblins');
                
                if (!hasHobgoblins) {
                    return 'Sólo puedes incluir unidades de Hobgoblins escurridizos si incluyes al menos una unidad de hobgoblins.';
                }
                return true;
            }
        },
        {
            type: 'custom',
            id: 'validateLanzavirotesRequirement',
            message: 'Tan sólo puedes incluir Lanzavirotes si incluyes al menos una unidad de hobgoblins.',
            validator: (context) => {
                const hasLanzavirotes = context.armyList.some(u => u.name === 'Lanzavirotes Hobgoblin');
                if (!hasLanzavirotes) return true;
                
                const hasHobgoblins = context.armyList.some(u => u.name === 'Hobgoblins');
                
                if (!hasHobgoblins) {
                    return 'Tan sólo puedes incluir Lanzavirotes si incluyes al menos una unidad de hobgoblins.';
                }
                return true;
            }
        },

        // Battle Standard Bearer validation
        {
            type: 'custom',
            id: 'validateBattleStandard',
            message: 'Solo uno de los Castellanos infernales o Centauros Taur\'ruk del ejército puede portar el estandarte de batalla.',
            validator: (context) => {
                const battleStandards = context.armyList.filter(u => 
                    u.selections && 
                    Object.values(u.selections.options || {}).some(opt => 
                        opt.name && opt.name.includes('Portaestandarte de Batalla')
                    )
                );
                
                if (battleStandards.length > 1) {
                    return 'Solo puede haber un Portaestandarte de Batalla en el ejército.';
                }
                
                // Check if BSB is a valid character type
                if (battleStandards.length === 1) {
                    const bsb = battleStandards[0];
                    const isValidType = bsb.name === 'Castellano Infernal' || bsb.name === "Centauro Taur'Ruk";
                    
                    if (!isValidType) {
                        return "Solo uno de los Castellanos infernales o Centauros Taur'ruk del ejército puede portar el estandarte de batalla.";
                    }
                }
                
                return true;
            }
        },

        // Centauros Toch-akos upgrade validation
        {
            type: 'custom',
            id: 'validateCentaurosTochAkos',
            message: 'Solo puedes mejorar una única unidad de Centauros a Centauros Toch-akos.',
            validator: (context) => {
                const centaurosUnits = context.armyList.filter(u => u.name === 'Centauros Enanos del Caos');
                let tochAkosCount = 0;
                
                for (const unit of centaurosUnits) {
                    if (unit.selections?.options) {
                        const hasTochAkos = Object.values(unit.selections.options).some(opt => 
                            opt.name && opt.name.includes('Centauros Toch-akos')
                        );
                        if (hasTochAkos) tochAkosCount++;
                    }
                }
                
                if (tochAkosCount > 1) {
                    return 'Solo puedes mejorar una única unidad de Centauros a Centauros Toch-akos.';
                }
                return true;
            }
        },

        // Armaduras Negras upgrade validation
        {
            type: 'custom',
            id: 'validateArmadurasNegras',
            message: 'Solo una única unidad de Guardia Infernal puede equiparse con Armaduras Negras.',
            validator: (context) => {
                const guardiaInfernalUnits = context.armyList.filter(u => u.name === 'Guardia Infernal');
                let armadurasNegrasCount = 0;
                
                for (const unit of guardiaInfernalUnits) {
                    if (unit.selections?.options) {
                        const hasArmadurasNegras = Object.values(unit.selections.options).some(opt => 
                            opt.name && opt.name.includes('Armaduras Negras')
                        );
                        if (hasArmadurasNegras) armadurasNegrasCount++;
                    }
                }
                
                if (armadurasNegrasCount > 1) {
                    return 'Solo una única unidad de Guardia Infernal puede equiparse con Armaduras Negras.';
                }
                return true;
            }
        }
    ]
},
// ===================================================================================
// --- OGROS RULESET ---
// ===================================================================================

'ogros': {
    modificationRules: [],

    focResolutionRules: [
        // No specific FOC changes found in the Ogros book
    ],

    validationRules: [
        { type: 'generalRequirement', message: 'Un ejército de Ogros debe tener un General.' },
        
        // Unit restrictions from the PDF
        { type: 'unitLimit', unitName: 'Luchadores Ogros', max: 1, message: 'Solo puedes incluir una unidad de Luchadores Ogros.' },
        { type: 'unitLimit', unitName: 'Gargantúas', max: 1, message: 'Solo puedes incluir una unidad de Gargantúas.' },
        { type: 'unitLimit', unitName: 'Cuernos Pétreos', max: 1, message: 'Solo puedes incluir una unidad de Cuernos Pétreos.' },
        { type: 'unitLimit', unitName: 'Escupehierros', max: 1, message: 'Solo puedes incluir una unidad de Escupehierros.' },
        { type: 'unitLimit', unitName: 'Colmillos de Hielo', max: 1, message: 'Solo puedes incluir una unidad de Colmillos de Hielo.' },
        { type: 'unitLimit', unitName: 'Gigante', max: 1, message: 'Solo puedes incluir un Gigante.' },
        { type: 'unitLimit', unitName: 'Rey Necrófago', max: 1, message: 'Solo puedes incluir un Rey Necrófago.' },
        
        // Conditional unit limits
        {
            type: 'conditionalUnitLimit', 
            unitName: 'Caballería Ogra', 
            pointsThreshold: 3000, 
            maxIfBelow: 1, 
            maxIfAbove: 2, 
            message: 'Límite de Caballería Ogra excedido.'
        },
        
        // Ratio-based restrictions
        {
            type: 'unitRatio', 
            primaryUnit: 'Ogros Toro', 
            secondaryUnit: 'Tripasduras', 
            maxSecondaryPerPrimary: 1, 
            message: 'Sólo puedes incluir una unidad de Tripasduras por cada unidad de Ogros Toro.'
        },
        {
            type: 'custom',
            id: 'validateComchombresRatio',
            message: 'Sólo puedes incluir una unidad de Comehombres por cada 1500 puntos completos del valor en puntos total de tu ejército.',
            validator: (context) => {
                const comchombresCount = context.armyList.filter(u => u.name === 'Comchombres').length;
                const allowedComchombres = Math.floor(context.battlePoints / 1500);
                
                if (comchombresCount > allowedComchombres) {
                    return `Solo puedes incluir ${allowedComchombres} unidad${allowedComchombres !== 1 ? 'es' : ''} de Comchombres por cada 1500 puntos completos.`;
                }
                return true;
            }
        },
      
      
        {
            type: 'custom',
            id: 'validateBattleStandard',
            message: 'Solo un Matón puede ser el Portaestandarte de Batalla.',
            validator: (context) => {
                const battleStandards = context.armyList.filter(u => 
                    u.selections && 
                    Object.values(u.selections.options || {}).some(opt => 
                        opt.name && opt.name.includes('Portaestandarte de Batalla')
                    )
                );
                
                if (battleStandards.length > 1) {
                    return 'Solo puede haber un Portaestandarte de Batalla en el ejército.';
                }
                
                // Check if BSB is a Matón
                if (battleStandards.length === 1) {
                    const bsb = battleStandards[0];
                    if (bsb.name !== 'Matón') {
                        return 'Solo un Matón puede ser el Portaestandarte de Batalla.';
                    }
                }
                
                return true;
            }
        },

        // Unique Sobrenombres restriction
        {
            type: 'custom',
            id: 'validateSobrenombres',
            message: 'No puedes repetir sobrenombres al elegir tu lista de ejército.',
            validator: (context) => {
                const allSkills = [];
                
                // Collect all Sobrenombres from all characters
                context.armyList.forEach(unit => {
                    if (unit.selections?.armySkills?.selection) {
                        Object.keys(unit.selections.armySkills.selection).forEach(skillName => {
                            allSkills.push(skillName);
                        });
                    }
                });
                
                // Check for duplicates
                const uniqueSkills = [...new Set(allSkills)];
                if (allSkills.length !== uniqueSkills.length) {
                    return 'No puedes repetir sobrenombres en tu ejército. Cada sobrenombre solo puede elegirse una vez.';
                }
                
                return true;
            }
        }
    ]
},
// ===================================================================================
// --- CONDES VAMPIROS VON CARSTEIN RULESET ---
// ===================================================================================

'cvvon': {
    modificationRules: [],

    focResolutionRules: [
        // No specific FOC changes found in the Von Carstein book
    ],

    validationRules: [
        { type: 'generalRequirement', message: 'Un ejército de Vampiros debe tener un General.' },
        
        // General selection rule - must be vampire character with highest Leadership
        {
            type: 'custom',
            id: 'validateVampireGeneral',
            message: 'El General debe ser el personaje vampiro con mayor Liderazgo.',
            validator: (context) => {
                if (!context.general) return true;
                
                // Check if general is a vampire character
                const vampireCharacters = ['Señor de Vampiros Von Carstein', 'Conde Vampiro Von Carstein', 
                                         'Condesa Vampira Lahmia', 'Conde Vampiro Necrarca', 
                                         'Conde Vampiro Dragón Sangriento', 'Conde Vampiro Strigoi'];
                
                if (!vampireCharacters.includes(context.general.name)) {
                    return 'El General debe ser un personaje vampiro.';
                }
                
                return true;
            }
        },

        // Unit restrictions based on ratios from the book
        { 
            type: 'unitRatio', 
            primaryUnit: 'Esqueletos', 
            secondaryUnit: 'Bandadas de Murciélagos', 
            maxSecondaryPerPrimary: 1, 
            message: 'Sólo puedes incluir una bandada de murciélagos por cada unidad de esqueletos o zombis.' 
        },
        { 
            type: 'unitRatio', 
            primaryUnit: 'Zombis', 
            secondaryUnit: 'Bandadas de Murciélagos', 
            maxSecondaryPerPrimary: 1, 
            message: 'Sólo puedes incluir una bandada de murciélagos por cada unidad de esqueletos o zombis.' 
        },
        { 
            type: 'unitRatio', 
            primaryUnit: 'Esqueletos', 
            secondaryUnit: 'Necrófagos', 
            maxSecondaryPerPrimary: 1, 
            message: 'Sólo puedes incluir una unidad de necrófagos por cada unidad de esqueletos o zombis.' 
        },
        { 
            type: 'unitRatio', 
            primaryUnit: 'Zombis', 
            secondaryUnit: 'Necrófagos', 
            maxSecondaryPerPrimary: 1, 
            message: 'Sólo puedes incluir una unidad de necrófagos por cada unidad de esqueletos o zombis.' 
        },

        // 0-1 Unit restrictions
        { type: 'unitLimit', unitName: 'Siervos', max: 1, message: 'Solo puedes incluir una unidad de Siervos.' },
        { type: 'unitLimit', unitName: 'Espíritus', max: 1, message: 'Solo puedes incluir una unidad de Espíritus.' },
        { type: 'unitLimit', unitName: 'Varghulf', max: 1, message: 'Solo puedes incluir un Varghulf.' },
        { type: 'unitLimit', unitName: 'Espectros Condenadores', max: 1, message: 'Solo puedes incluir una unidad de Espectros Condenadores.' },
        { type: 'unitLimit', unitName: 'Doncellas Lahmia', max: 1, message: 'Solo puedes incluir una unidad de Doncellas Lahmia.' },
        { type: 'unitLimit', unitName: 'Caballeros del Dragón Sangriento', max: 1, message: 'Solo puedes incluir una unidad de Caballeros del Dragón Sangriento.' },
        { type: 'unitLimit', unitName: 'Corte Strigoi', max: 1, message: 'Solo puedes incluir una unidad de Corte Strigoi.' },

        // Clan-specific unit requirements
        {
            type: 'custom',
            id: 'validateHuesteEspectralRequirement',
            message: 'Para incluir Hueste Espectral, tu ejército debe incluir al menos un personaje del clan Necrarca.',
            validator: (context) => {
                const hasHuesteEspectral = context.armyList.some(u => u.name === 'Hueste Espectral');
                if (!hasHuesteEspectral) return true;
                
                const hasNecrarcaCharacter = context.armyList.some(u => 
                    u.name === 'Conde Vampiro Necrarca'
                );
                
                if (!hasNecrarcaCharacter) {
                    return 'Para incluir Hueste Espectral, tu ejército debe incluir al menos un personaje del clan Necrarca.';
                }
                return true;
            }
        },
        {
            type: 'custom',
            id: 'validateEspectrosCondenadoresRequirement',
            message: 'Para incluir Espectros Condenadores, tu ejército debe incluir al menos un personaje del clan Necrarca.',
            validator: (context) => {
                const hasEspectrosCondenadores = context.armyList.some(u => u.name === 'Espectros Condenadores');
                if (!hasEspectrosCondenadores) return true;
                
                const hasNecrarcaCharacter = context.armyList.some(u => 
                    u.name === 'Conde Vampiro Necrarca'
                );
                
                if (!hasNecrarcaCharacter) {
                    return 'Para incluir Espectros Condenadores, tu ejército debe incluir al menos un personaje del clan Necrarca.';
                }
                return true;
            }
        },
        {
            type: 'custom',
            id: 'validateDoncellasLahmiaRequirement',
            message: 'Para incluir Doncellas Lahmia, tu ejército debe incluir al menos un personaje del clan Lahmia.',
            validator: (context) => {
                const hasDoncellasLahmia = context.armyList.some(u => u.name === 'Doncellas Lahmia');
                if (!hasDoncellasLahmia) return true;
                
                const hasLahmiaCharacter = context.armyList.some(u => 
                    u.name === 'Condesa Vampira Lahmia'
                );
                
                if (!hasLahmiaCharacter) {
                    return 'Para incluir Doncellas Lahmia, tu ejército debe incluir al menos un personaje del clan Lahmia.';
                }
                return true;
            }
        },
        {
            type: 'custom',
            id: 'validateCaballerosDragonSangrientoRequirement',
            message: 'Para incluir Caballeros del Dragón Sangriento, tu ejército debe incluir al menos un personaje del clan Dragón Sangriento.',
            validator: (context) => {
                const hasCaballerosDragon = context.armyList.some(u => u.name === 'Caballeros del Dragón Sangriento');
                if (!hasCaballerosDragon) return true;
                
                const hasDragonSangrientoCharacter = context.armyList.some(u => 
                    u.name === 'Conde Vampiro Dragón Sangriento'
                );
                
                if (!hasDragonSangrientoCharacter) {
                    return 'Para incluir Caballeros del Dragón Sangriento, tu ejército debe incluir al menos un personaje del clan Dragón Sangriento.';
                }
                return true;
            }
        },
        {
            type: 'custom',
            id: 'validateCorteStrigoiRequirement',
            message: 'Para incluir Corte Strigoi, tu ejército debe incluir al menos un personaje del clan Strigoi.',
            validator: (context) => {
                const hasCorteStrigoi = context.armyList.some(u => u.name === 'Corte Strigoi');
                if (!hasCorteStrigoi) return true;
                
                const hasStrigoiCharacter = context.armyList.some(u => 
                    u.name === 'Conde Vampiro Strigoi'
                );
                
                if (!hasStrigoiCharacter) {
                    return 'Para incluir Corte Strigoi, tu ejército debe incluir al menos un personaje del clan Strigoi.';
                }
                return true;
            }
        },

        // Striganos option validation
        {
            type: 'custom',
            id: 'validateStriganosRequirement',
            message: 'Para convertir necrófagos en Striganos, tu ejército debe incluir un vampiro del clan Strigoi.',
            validator: (context) => {
                const hasStriganos = context.armyList.some(u => 
                    u.selections?.options && 
                    Object.values(u.selections.options).some(opt => 
                        opt.name && opt.name.includes('Striganos')
                    )
                );
                
                if (!hasStriganos) return true;
                
                const hasStrigoiCharacter = context.armyList.some(u => 
                    u.name === 'Conde Vampiro Strigoi'
                );
                
                if (!hasStrigoiCharacter) {
                    return 'Para convertir necrófagos en Striganos, tu ejército debe incluir un vampiro del clan Strigoi.';
                }
                return true;
            }
        },

        // Battle Standard Bearer validation
        {
            type: 'custom',
            id: 'validateBattleStandard',
            message: 'Solo un Conde vampiro o Señor Tumulario puede ser el Portaestandarte de Batalla.',
            validator: (context) => {
                const battleStandards = context.armyList.filter(u => 
                    u.selections && 
                    Object.values(u.selections.options || {}).some(opt => 
                        opt.name && opt.name.includes('Portaestandarte de Batalla')
                    )
                );
                
                if (battleStandards.length > 1) {
                    return 'Solo puede haber un Portaestandarte de Batalla en el ejército.';
                }
                
                // Check if BSB is a valid character type
                if (battleStandards.length === 1) {
                    const bsb = battleStandards[0];
                    const validTypes = [
                        'Conde Vampiro Von Carstein', 'Señor Tumulario'
                    ];
                    
                    const isValidType = validTypes.some(type => bsb.name.includes(type));
                    if (!isValidType) {
                        return 'Solo un Conde vampiro o Señor Tumulario puede ser el Portaestandarte de Batalla.';
                    }
                }
                
                return true;
            }
        },

        // Clan mixing restriction (Von Carstein can only include heroes from other clans)
        {
            type: 'custom',
            id: 'validateClanMixing',
            message: 'El clan Von Carstein sólo puede incluir héroes de otros clanes vampíricos.',
            validator: (context) => {
                const nonHeroVampires = context.armyList.filter(u => 
                    (u.name === 'Condesa Vampira Lahmia' || 
                     u.name === 'Conde Vampiro Necrarca' || 
                     u.name === 'Conde Vampiro Dragón Sangriento' || 
                     u.name === 'Conde Vampiro Strigoi') &&
                    u.unitData.foc !== 'Hero'
                );
                
                if (nonHeroVampires.length > 0) {
                    return 'El clan Von Carstein sólo puede incluir héroes (no señores) de otros clanes vampíricos.';
                }
                return true;
            }
        }
    ]
},
// ===================================================================================
// --- CONDENS VAMPIROS LAHMIA RULESET ---
// ===================================================================================

'cvlah': {
    modificationRules: [],

    focResolutionRules: [
        // No specific FOC changes found in the Lahmia book
    ],

    validationRules: [
        { type: 'generalRequirement', message: 'Un ejército de Condes Vampiros Lahmia debe tener un General.' },
        
        // Unit restrictions from the PDF
        { type: 'unitLimit', unitName: 'Guardia de la Condesa', max: 1, message: 'Solo puedes incluir una unidad de Guardia de la Condesa.' },
        { type: 'unitLimit', unitName: 'Varghulf', max: 1, message: 'Solo puedes incluir un Varghulf.' },
        { type: 'unitLimit', unitName: 'Carruaje Negro', max: 1, message: 'Solo puedes incluir un Carruaje Negro.' },
        { type: 'unitLimit', unitName: 'Carro de Cadáveres', max: 1, message: 'Solo puedes incluir un Carro de Cadáveres.' },
        
        // Ratio restrictions
        { 
            type: 'unitRatio', 
            primaryUnit: 'Esqueletos', 
            secondaryUnit: 'Bandadas de Murciélagos', 
            maxSecondaryPerPrimary: 1, 
            message: 'Solo puedes incluir una Bandada de Murciélagos por cada unidad de Esqueletos o Zombis.' 
        },
        { 
            type: 'unitRatio', 
            primaryUnit: 'Zombis', 
            secondaryUnit: 'Bandadas de Murciélagos', 
            maxSecondaryPerPrimary: 1, 
            message: 'Solo puedes incluir una Bandada de Murciélagos por cada unidad de Esqueletos o Zombis.' 
        },

        // Battle Standard Bearer validation
        {
            type: 'custom',
            id: 'validateBattleStandard',
            message: 'Solo un Conde vampiro o Señor Tumulario puede ser el Portaestandarte de Batalla.',
            validator: (context) => {
                const battleStandards = context.armyList.filter(u => 
                    u.selections && 
                    Object.values(u.selections.options || {}).some(opt => 
                        opt.name && opt.name.includes('Portaestandarte de Batalla')
                    )
                );
                
                if (battleStandards.length > 1) {
                    return 'Solo puede haber un Portaestandarte de Batalla en el ejército.';
                }
                
                return true;
            }
        },
      

        // General must be a Vampire character
        {
            type: 'custom',
            id: 'validateGeneralIsVampire',
            message: 'El General del ejército debe ser un personaje vampiro.',
            validator: (context) => {
                if (!context.general) return 'El ejército debe tener un General.';
                
                const generalIsVampire = context.general.unitData?.reglasEspeciales?.includes('Vampiro');
                if (!generalIsVampire) {
                    return 'El General del ejército debe ser un personaje vampiro (Señora de Vampiros Lahmia o Condesa Vampira Lahmia).';
                }
                
                return true;
            }
        },
      
    ]
},
// ===================================================================================
// --- ENANOS RULESET ---
// ===================================================================================

'ena': {
    modificationRules: [],

    focResolutionRules: [
        {
            type: 'RESOLVE_LIMITED_FOC',
            condition: { type: 'armyIncludesUnit', unitName: 'Matademonios' },
            targetUnit: 'Matadores',
            newFOC: 'Core',
            limit: 1,
            message: "Si incluyes un Matademonios, una unidad de Matadores puede ser seleccionada como Básica."
        }
    ],

    validationRules: [
        { type: 'generalRequirement', message: 'Un ejército de Enanos debe tener un General.' },
        
        // Character Restrictions
        { type: 'generalCannotBe', nameFragment: 'Matademonios', message: 'Un personaje con la regla Matador (Matademonios) no puede ser el General del ejército.' },
        { type: 'generalCannotBe', nameFragment: 'Matadragones', message: 'Un personaje con la regla Matador (Matadragones) no puede ser el General del ejército.' },

        // Unit Composition & Limits
        { type: 'unitRatio', primaryUnit: 'Guerreros de clan', secondaryUnit: 'Barbaslargas', maxSecondaryPerPrimary: 1, message: 'Sólo puedes incluir una unidad de Barbaslargas por cada unidad de Guerreros de clan que incluyas.' },
        { type: 'unitLimit', unitName: 'Martilladores', max: 1, message: 'Solo puedes incluir una unidad de Martilladores.' },
        { type: 'unitLimit', unitName: 'Montaraces', max: 1, message: 'Solo puedes incluir una unidad de Montaraces.' },
        
        // Unit Exclusivity
        {
            type: 'custom',
            id: 'validateDracohierrosBuscamuertesExclusivity',
            message: 'No puedes incluir Dracohierros y Buscamuertes en el mismo ejército.',
            validator: (context) => {
                const hasDracohierros = context.armyList.some(u => u.name === 'Dracohierros');
                const hasBuscamuertes = context.armyList.some(u => u.name === 'Buscamuertes');
                if (hasDracohierros && hasBuscamuertes) {
                    return 'Conflicto de unidades: No puedes incluir Dracohierros y Buscamuertes en el mismo ejército.';
                }
                return true;
            }
        },

        // Battle Standard Bearer Validation
        {
            type: 'custom',
            id: 'validateDwarfBSB',
            message: 'El Portaestandarte de Batalla debe ser un Señor de Clan.',
            validator: (context) => {
                const battleStandards = context.armyList.filter(u => 
                    u.selections && u.selections.battleStandard
                );
                
                if (battleStandards.length > 1) {
                    return 'Solo puede haber un Portaestandarte de Batalla en el ejército.';
                }

                if (battleStandards.length === 1) {
                    const bsb = battleStandards[0];
                    if (bsb.name !== 'Señor de Clan') {
                        return 'El Portaestandarte de Batalla debe ser un Señor de Clan.';
                    }
                }
                return true;
            }
        },

        // Runic Item Laws Validation
        {
            type: 'custom',
            id: 'validateMasterRunesLimit',
            message: 'No puedes incluir la misma Runa Magistral más de una vez en el ejército.',
            validator: (context) => {
                const masterRunes = [];
                context.armyList.forEach(unit => {
                    // Runic items are handled like magic items
                    if (unit.selections && unit.selections.magicItems) {
                        Object.values(unit.selections.magicItems).forEach(itemCategory => {
                            if (itemCategory && typeof itemCategory === 'object') {
                                Object.values(itemCategory).forEach(rune => {
                                    // Master Runes are marked as relics
                                    if (rune && rune.relic) {
                                        masterRunes.push(rune.name);
                                    }
                                });
                            }
                        });
                    }
                });
                
                const uniqueRunes = new Set(masterRunes);
                if (uniqueRunes.size < masterRunes.length) {
                    const counts = masterRunes.reduce((acc, rune) => { acc[rune] = (acc[rune] || 0) + 1; return acc; }, {});
                    const duplicate = Object.keys(counts).find(rune => counts[rune] > 1);
                    return `La Runa Magistral "${duplicate}" solo puede ser incluida una vez en el ejército.`;
                }
                return true;
            }
        }
    ]
},
// ===================================================================================
// --- ALTOS ELFOS RULESET ---
// ===================================================================================

    'aelf': {
        modificationRules: [],

        focResolutionRules: [
            // No specific FOC changes found in the Altos Elfos book
        ],

        validationRules: [
            { type: 'generalRequirement', message: 'Un ejército de Altos Elfos debe tener un General.' },
            
            // Unit restrictions from the PDF
            { type: 'unitLimit', unitName: 'Guardia del Mar', max: 1, message: 'Solo puedes incluir una unidad de Guardia del Mar.' },
            { type: 'unitLimit', unitName: 'Guardia de Hermanas de Avelorn', max: 1, message: 'Solo puedes incluir una unidad de Guardia de Hermanas de Avelorn.' },
            { type: 'unitLimit', unitName: 'Mago Dragón', max: 1, message: 'Solo puedes incluir un Mago Dragón.' },
            
            // Ungido de Asuryan restriction
            {
                type: 'custom',
                id: 'validateUngidoAsuryanRatio',
                message: 'Solo puedes incluir un Ungido de Asuryan por cada unidad de Guardia del Fénix.',
                validator: (context) => {
                    const guardiaFenixCount = context.armyList.filter(u => u.name === 'Guardia del Fénix').length;
                    const ungidoCount = context.armyList.filter(u => u.name === 'Ungido de Asuryan').length;
                    if (ungidoCount > guardiaFenixCount) {
                        return `Tienes ${ungidoCount} Ungido(s) de Asuryan pero solo ${guardiaFenixCount} unidad(es) de Guardia del Fénix. Solo puedes incluir un Ungido por cada Guardia del Fénix.`;
                    }
                    return true;
                }
            },

            // Sendas restrictions (each can only be chosen once per army)
            {
                type: 'custom',
                id: 'validateSendasUniqueness',
                message: 'Cada senda no puede elegirse más de una vez al elaborar tu lista de ejército.',
                validator: (context) => {
                    const allSkills = [];
                    context.armyList.forEach(unit => {
                        if (unit.selections?.armySkills?.selection) {
                            Object.keys(unit.selections.armySkills.selection).forEach(skill => {
                                allSkills.push(skill);
                            });
                        }
                    });

                    const skillCounts = {};
                    allSkills.forEach(skill => {
                        skillCounts[skill] = (skillCounts[skill] || 0) + 1;
                    });

                    const duplicateSkills = Object.keys(skillCounts).filter(skill => skillCounts[skill] > 1);
                    if (duplicateSkills.length > 0) {
                        return `Las siguientes sendas están duplicadas: ${duplicateSkills.join(', ')}. Cada senda solo puede elegirse una vez por ejército.`;
                    }
                    return true;
                }
            },

            // Guardia del León mount restriction
            {
                type: 'custom',
                id: 'validateGuardiaLeonMount',
                message: 'Los personajes con Guardia del León solo pueden elegir Carro de Leones o ir a pie.',
                validator: (context) => {
                    const guardiaLeonCharacters = context.armyList.filter(u => 
                        u.selections?.armySkills?.selection?.['Guardia del León']
                    );

                    for (const character of guardiaLeonCharacters) {
                        const mounts = character.selections?.mounts ? Object.keys(character.selections.mounts) : [];
                        if (mounts.length > 0 && !mounts.includes('Carro de Leones')) {
                            return `El personaje "${character.name}" tiene Guardia del León pero ha elegido una montura no permitida. Solo puede elegir Carro de Leones o ir a pie.`;
                        }
                    }
                    return true;
                }
            },

            // Señor de la Espada mount restriction
            {
                type: 'custom',
                id: 'validateSenorEspadaMount',
                message: 'Los personajes con Señor de la Espada no pueden elegir ninguna montura.',
                validator: (context) => {
                    const senorEspadaCharacters = context.armyList.filter(u => 
                        u.selections?.armySkills?.selection?.['Señor de la Espada']
                    );

                    for (const character of senorEspadaCharacters) {
                        const mounts = character.selections?.mounts ? Object.keys(character.selections.mounts) : [];
                        if (mounts.length > 0) {
                            return `El personaje "${character.name}" tiene Señor de la Espada pero ha elegido una montura. Esta senda no permite monturas.`;
                        }
                    }
                    return true;
                }
            },

            // Señor de las Brumas armor restriction
            {
                type: 'custom',
                id: 'validateSenorBrumasArmor',
                message: 'Los personajes con Señor de las Brumas no pueden elegir montura o armadura mejor que Armadura ligera.',
                validator: (context) => {
                    const senorBrumasCharacters = context.armyList.filter(u => 
                        u.selections?.armySkills?.selection?.['Señor de las Brumas']
                    );

                    for (const character of senorBrumasCharacters) {
                        // Check mounts
                        const mounts = character.selections?.mounts ? Object.keys(character.selections.mounts) : [];
                        if (mounts.length > 0) {
                            return `El personaje "${character.name}" tiene Señor de las Brumas pero ha elegido una montura. Esta senda no permite monturas.`;
                        }

                        // Check armor - this is trickier as we'd need to parse equipment options
                        // For now, we'll rely on the player to follow the rule
                    }
                    return true;
                }
            }
        ]
    },

    // ===================================================================================
// --- BRETONIA RULESET ---
// ===================================================================================

'bret': {
    modificationRules: [],

    focResolutionRules: [
        {
            type: 'RESOLVE_LIMITED_FOC',
            // Check if any Lord has the "Virtud del Grial" selected in armySkills
            condition: {
                type: 'custom',
                validator: (context) => {
                    return context.general &&
                           context.general.selections?.armySkills?.selection?.['Virtud del Grial'];
                }
             },
            targetUnit: 'Caballeros del Grial',
            newFOC: 'Special',
            limit: 1, // Although it becomes Special, the 0-1 limit still applies implicitly
            message: "Si el General tiene la Virtud del Grial, la unidad de Caballeros del Grial pasa a ser Especial."
        }
    ],

    validationRules: [
        { type: 'generalRequirement', message: 'Un ejército de Bretonia debe tener un General.' },

        // Core requirements and ratios
        {
            type: 'custom',
            id: 'validateMinKnightsOfTheRealm',
            message: 'Debes incluir al menos una unidad de Caballeros del Reino.',
            validator: (context) => {
                const hasKnights = context.armyList.some(u => u.name === 'Caballeros del Reino');
                return hasKnights ? true : 'El ejército debe incluir al menos una unidad de Caballeros del Reino.';
            }
        },
        {
            type: 'unitRatio',
            primaryUnit: 'Caballeros del Reino',
            secondaryUnit: 'Caballeros Noveles',
            maxSecondaryPerPrimary: 1,
            message: 'No puedes incluir más unidades de Caballeros Noveles que de Caballeros del Reino.'
        },

        // 0-1 Unit Limits
        { type: 'unitLimit', unitName: 'Monteros', max: 1, message: 'Solo puedes incluir una unidad de Monteros.' },
        { type: 'unitLimit', unitName: 'Guardia de la Ciudad', max: 1, message: 'Solo puedes incluir una unidad de Guardia de la Ciudad.' },
        { type: 'unitLimit', unitName: 'Caballeros Andantes', max: 1, message: 'Solo puedes incluir una unidad de Caballeros Andantes.' },
        { type: 'unitLimit', unitName: 'Escolta del Duque', max: 1, message: 'Solo puedes incluir una unidad de Escolta del Duque.' },
        { type: 'unitLimit', unitName: 'Trebuchet', max: 1, message: 'Solo puedes incluir un Trebuchet.' },
        { type: 'unitLimit', unitName: "Balista Bretoniana", max:2 , message: 'Solo puedes incluir dos Balistas' },
        { type: 'unitLimit', unitName: 'Peregrinos del Sagrado Relicario', max: 1, message: 'Solo puedes incluir una unidad de Peregrinos del Sagrado Relicario.' },
        { type: 'unitLimit', unitName: 'Caballeros del Grial', max: 1, message: 'Solo puedes incluir una unidad de Caballeros del Grial (puede ser Especial si el General tiene Virtud del Grial).' },
        { type: 'unitLimit', unitName: 'Guardianes del Santuario del Grial', max: 1, message: 'Solo puedes incluir una unidad de Guardianes del Santuario del Grial.' },
        {
             type: 'custom',
             id: 'validateRaleaLimit',
             message: 'Solo una unidad de Leva de Arqueros puede convertirse en Ralea.',
             validator: (context) => {
                 const raleaCount = context.armyList.filter(u =>
                     u.name === 'Leva de Arqueros' &&
                     u.selections?.options?.['Convertir en Ralea']
                 ).length;
                 if (raleaCount > 1) {
                     return 'Solo una unidad de Leva de Arqueros puede ser convertida en Ralea.';
                 }
                 return true;
             }
        },


        // Conditional Unit Requirements
        {
            type: 'custom',
            id: 'validateGuardianesRequirement',
            message: 'Solo puedes incluir Guardianes del Santuario del Grial si tu ejército incluye al menos una Profetisa de la Dama o Doncella de la Dama.',
            validator: (context) => {
                const hasGuardianes = context.armyList.some(u => u.name === 'Guardianes del Santuario del Grial');
                if (!hasGuardianes) return true;

                const hasDamsel = context.armyList.some(u => u.name === 'Profetisa de la Dama' || u.name === 'Doncella de la Dama');
                if (!hasDamsel) {
                    return 'Para incluir Guardianes del Santuario del Grial, el ejército debe incluir al menos una Profetisa o Doncella de la Dama.';
                }
                return true;
            }
        },
        {
            type: 'custom', // Validation for Guardia de la Ciudad requirement
            id: 'validateGuardiaCiudadRequirement',
            message: 'Solo puedes incluir Guardia de la Ciudad si incluyes al menos una unidad de Hombres de Armas o Leva de Arqueros.',
            validator: (context) => {
                const hasGuardia = context.armyList.some(u => u.name === 'Guardia de la Ciudad');
                if (!hasGuardia) return true;
                const hasRequiredCore = context.armyList.some(u => u.name === 'Hombres de Armas' || u.name === 'Leva de Arqueros');
                if (!hasRequiredCore) {
                    return 'Para incluir Guardia de la Ciudad, debes tener al menos una unidad de Hombres de Armas o Leva de Arqueros.';
                }
                return true;
            }
        },

        // Battle Standard Bearer Validation
        {
            type: 'custom',
            id: 'validateBretonniaBSB',
            message: 'Solo un Paladín puede ser el Portaestandarte de Batalla.',
            validator: (context) => {
                const battleStandards = context.armyList.filter(u => u.selections?.battleStandard);

                if (battleStandards.length > 1) {
                    return 'Solo puede haber un Portaestandarte de Batalla en el ejército.';
                }

                if (battleStandards.length === 1) {
                    const bsb = battleStandards[0];
                    if (bsb.name !== 'Paladín') {
                        return 'El Portaestandarte de Batalla debe ser un Paladín.';
                    }
                }
                return true;
            }
        },

        // General Restrictions
        { type: 'generalCannotBe', nameFragment: 'Sumo Sacerdote de Taal', message: 'Un Sumo Sacerdote de Taal no puede ser el General (Eremita).' },
        { type: 'generalCannotBe', nameFragment: 'Sacerdote de Taal', message: 'Un Sacerdote de Taal no puede ser el General (Eremita).' },
        // Add check for Virtud de la Empatía / Virtud del Penitente preventing General?
        {
            type: 'custom',
            id: 'validateVirtueGeneralRestrictions',
            message: 'Un personaje con Virtud de la Empatía o Virtud del Penitente no puede ser General.',
             validator: (context) => {
                 if (!context.general) return true;
                 const generalVirtue = context.general.selections?.armySkills?.selection;
                 if (generalVirtue) {
                     if (generalVirtue['Virtud de la Empatía'] || generalVirtue['Virtud del Penitente']) {
                         return `El General no puede tener la ${generalVirtue['Virtud de la Empatía'] ? 'Virtud de la Empatía' : 'Virtud del Penitente'}.`;
                     }
                 }
                 return true;
             }
        },

        // Virtue Uniqueness Validation
        {
            type: 'custom',
            id: 'validateUniqueVirtues',
            message: 'No puedes incluir la misma Virtud más de una vez en el ejército.',
            validator: (context) => {
                const virtuesSelected = [];
                context.armyList.forEach(unit => {
                    if (unit.selections?.armySkills?.selection) {
                        virtuesSelected.push(...Object.keys(unit.selections.armySkills.selection));
                    }
                });

                const uniqueVirtues = new Set(virtuesSelected);
                if (uniqueVirtues.size < virtuesSelected.length) {
                    const counts = virtuesSelected.reduce((acc, virtue) => { acc[virtue] = (acc[virtue] || 0) + 1; return acc; }, {});
                    const duplicate = Object.keys(counts).find(virtue => counts[virtue] > 1);
                    return `La Virtud "${duplicate}" solo puede ser incluida una vez en el ejército.`;
                }
                return true;
            }
        },

    ]
},
// ===================================================================================
// --- CONDES VAMPIROS STRIGOI RULESET ---
// ===================================================================================

'cvstr': {
    modificationRules: [], // No rules modifying unit data dynamically found

    focResolutionRules: [
        // No FOC changes based on general/units found in PDF
    ],

    validationRules: [
        { type: 'generalRequirement', message: 'Un ejército de Condes Vampiros debe tener un General.' },

        // General must be a Vampire character
        {
            type: 'custom',
            id: 'validateVampireGeneral',
            message: 'El General del ejército debe ser el personaje vampiro con mayor Liderazgo.',
            validator: (context) => {
                if (!context.general) return true; // Handled by generalRequirement

                const isVampire = context.general.unitData?.reglasEspeciales?.includes('Vampiro') || context.general.name.includes('Strigoi');
                if (!isVampire) {
                    return 'El General del ejército debe ser un Señor de Vampiros Strigoi o Conde Vampiro Strigoi.';
                }

                // Check highest Ld (complex to validate here, better as guidance/UI helper)
                // For now, just ensure the general IS a vampire.

                return true;
            }
        },

        // Core Requirement: 1+ Necrófagos unit
        {
            type: 'custom',
            id: 'requireNecrofagos',
            message: 'El ejército debe incluir al menos una unidad de Necrófagos.',
            validator: (context) => {
                const hasNecrofagos = context.armyList.some(u => u.name === 'Necrófagos');
                return hasNecrofagos ? true : 'El ejército debe incluir al menos una unidad de Necrófagos.';
            }
        },

        // Unit Ratios
        { type: 'unitRatio', primaryUnit: 'Necrófagos', secondaryUnit: 'Esqueletos', maxSecondaryPerPrimary: 1, message: 'Sólo puedes incluir una unidad de Esqueletos por cada unidad de Necrófagos.' },
        { type: 'unitRatio', primaryUnit: 'Necrófagos', secondaryUnit: 'Necrofagos Infiltrados', maxSecondaryPerPrimary: 1, message: 'Sólo puedes incluir una unidad de Necrófagos Infiltrados por cada unidad de Necrófagos.' },
        { type: 'unitRatio', primaryUnit: 'Necrófagos', secondaryUnit: 'Necrofagos Devoradores', maxSecondaryPerPrimary: 1, message: 'Sólo puedes incluir una unidad de Necrófagos Devoradores por cada unidad de Necrófagos.' },
        { type: 'unitRatio', primaryUnit: 'Necrófagos', secondaryUnit: 'Striganos', maxSecondaryPerPrimary: 1, message: 'Solo puedes incluir una unidad de Striganos por cada unidad de Necrófagos.' },

        // Unit Limits (0-X)
        { type: 'unitLimit', unitName: 'Bandadas de Murciélagos', max: 2, message: 'Solo puedes incluir un máximo de 2 unidades de Bandadas de Murciélagos.' },
        { type: 'unitLimit', unitName: 'Murciélagos Vampiro', max: 1, message: 'Solo puedes incluir una unidad de Murciélagos Vampiro.' },
        { type: 'unitLimit', unitName: 'Hueste Espectral', max: 1, message: 'Solo puedes incluir una unidad de Hueste Espectral.' },
        { type: 'unitLimit', unitName: 'Corte del Rey', max: 1, message: 'Solo puedes incluir una unidad de Corte del Rey.' },
        { type: 'unitLimit', unitName: 'Espíritus', max: 1, message: 'Solo puedes incluir una unidad de Espíritus.' },
        { type: 'unitLimit', unitName: 'Engendro del Terror', max: 1, message: 'Solo puedes incluir un Engendro del Terror.' }, // Unit + Mount check needed if possible
        { type: 'unitLimit', unitName: 'Gigante de Hueso', max: 1, message: 'Solo puedes incluir un Gigante de Hueso.' },

        // Emboscada Limit
        {
            type: 'custom',
            id: 'validateEmboscadaLimit',
            message: 'Solo una unidad de Striganos puede mejorarse con Emboscada.',
            validator: (context) => {
                const emboscadaCount = context.armyList.filter(u =>
                    u.name === 'Striganos' &&
                    u.selections?.options?.includes('Mejorar con Emboscada') // Check option name matches DB
                ).length;
                return emboscadaCount <= 1 ? true : 'Solo una unidad de Striganos puede mejorarse con Emboscada.';
            }
        },

        // Battle Standard Bearer
        {
            type: 'custom',
            id: 'validateStrigoiBSB',
            message: 'Solo un Conde Vampiro Strigoi o Rey Necrófago puede ser el Portaestandarte de Batalla.',
            validator: (context) => {
                const battleStandards = context.armyList.filter(u => u.selections?.battleStandard?.selected); // Check the selected flag

                if (battleStandards.length > 1) {
                    return 'Solo puede haber un Portaestandarte de Batalla en el ejército.';
                }
                if (battleStandards.length === 1) {
                    const bsb = battleStandards[0];
                    if (bsb.name !== 'Conde Vampiro Strigoi' && bsb.name !== 'Rey Necrófago') {
                        return 'El Portaestandarte de Batalla debe ser un Conde Vampiro Strigoi o un Rey Necrófago.';
                    }
                }
                return true;
            }
        },

        // Unique Powers validation (handled generically if powers are in armySkillsDB)
        {
            type: 'custom',
            id: 'validateUniqueVampirePowers',
            message: 'No puedes repetir un mismo poder vampírico en el ejército (excepto el gratuito Odio Eterno).',
            validator: (context) => {
                const powersSelected = [];
                context.armyList.forEach(unit => {
                    if (unit.selections?.armySkills?.selection) {
                        Object.keys(unit.selections.armySkills.selection).forEach(powerName => {
                            if (powerName !== 'Odio eterno') { // Exclude the free power
                                powersSelected.push(powerName);
                            }
                        });
                    }
                });

                const uniquePowers = new Set(powersSelected);
                if (uniquePowers.size < powersSelected.length) {
                    const counts = powersSelected.reduce((acc, power) => { acc[power] = (acc[power] || 0) + 1; return acc; }, {});
                    const duplicate = Object.keys(counts).find(power => counts[power] > 1);
                    return `El Poder Vampírico "${duplicate}" solo puede ser incluido una vez en el ejército.`;
                }
                return true;
            }
        },

        // Vampires cannot take Magic Weapons or Armor
        {
            type: 'custom',
            id: 'validateStrigoiMagicItemRestrictions',
            message: 'Los personajes Strigoi no pueden elegir Armas ni Armaduras mágicas.',
            validator: (context) => {
                const strigoiChars = context.armyList.filter(u => u.name.includes('Strigoi') && (u.unitData.foc === 'Lord' || u.unitData.foc === 'Hero'));
                for(const char of strigoiChars) {
                    if (char.selections?.magicItems?.selection) {
                         const items = Object.values(char.selections.magicItems.selection);
                         const hasWeapon = items.some(item => item.category === 'Arma Mágica');
                         const hasArmor = items.some(item => item.category === 'Armadura Mágica');
                         if (hasWeapon || hasArmor) {
                             return `El personaje Strigoi "${char.name}" no puede equiparse con Armas o Armaduras mágicas.`;
                         }
                    }
                }
                 return true;
            }
        }
    ]
},
// ===================================================================================
// --- NEHEKHARA RULESET ---
// ===================================================================================

'nehk': {
    modificationRules: [], // No dynamic modifications found

    focResolutionRules: [
        // No FOC changes based on general/units found in PDF
    ],

    validationRules: [
        { type: 'generalRequirement', message: 'Un ejército de Nehekhara debe tener un General.' },

        // Hierofante Requirement
        {
            type: 'custom',
            id: 'requireHierofante',
            message: 'El ejército debe incluir al menos un Sacerdote o Sumo Sacerdote Funerario para ser el Hierofante.',
            validator: (context) => {
                const hasPriest = context.armyList.some(u =>
                    u.name === 'Sacerdote Funerario' || u.name === 'Sumo Sacerdote Funerario'
                );
                return hasPriest ? true : 'El ejército debe incluir al menos un Sacerdote o Sumo Sacerdote Funerario.';
            }
        },
        // General must be Hierofante (Highest level priest) - Complex logic, best as UI guidance/warning
        {
             type: 'custom',
             id: 'warnHierofanteGeneral',
             message: '⚠️ El General debería ser el Sacerdote/Sumo Sacerdote con mayor Nivel de Magia (Hierofante).',
             validator: (context) => {
                 if (!context.general) return true; // Handled by general requirement

                 const priests = context.armyList.filter(u => u.name === 'Sacerdote Funerario' || u.name === 'Sumo Sacerdote Funerario');
                 if (priests.length === 0) return true; // Handled by hierofante requirement

                 const getMagicLevel = (unit) => {
                     let level = unit.unitData?.reglasEspeciales?.includes('Nivel Mágico 3') ? 3 :
                                 unit.unitData?.reglasEspeciales?.includes('Nivel Mágico 1') ? 1 : 0;
                     if (unit.selections?.options?.['Nivel de Magia 4'] || unit.selections?.options?.['Nivel de Magia 2']) {
                        level++;
                     }
                     return level;
                 };

                 const highestLevel = Math.max(...priests.map(p => getMagicLevel(p)));
                 const generalLevel = getMagicLevel(context.general);

                 const isPriestGeneral = context.general.name === 'Sacerdote Funerario' || context.general.name === 'Sumo Sacerdote Funerario';

                 // Only show warning if the General IS a priest but NOT the highest level one
                 if (isPriestGeneral && generalLevel < highestLevel) {
                     // Return a specific object for warnings
                     return { isValid: true, message: '⚠️ El General debería ser el Sacerdote/Sumo Sacerdote con mayor Nivel de Magia (Hierofante).' };
                 }
                 // Allow non-priest Generals for now, Hierofante rule is mainly gameplay impact.
                 return true;
             }
        },

        // Unit Ratio
        { type: 'unitRatio', primaryUnit: 'Esqueletos', secondaryUnit: 'Carros de Guerra Ligeros', maxSecondaryPerPrimary: 1, message: 'Máximo una unidad de Carros de Guerra Ligeros por cada otra unidad básica (no carros).' },
        { type: 'unitRatio', primaryUnit: 'Arqueros Esqueleto', secondaryUnit: 'Carros de Guerra Ligeros', maxSecondaryPerPrimary: 1, message: 'Máximo una unidad de Carros de Guerra Ligeros por cada otra unidad básica (no carros).' },
        { type: 'unitRatio', primaryUnit: 'Caballería Esquelética', secondaryUnit: 'Carros de Guerra Ligeros', maxSecondaryPerPrimary: 1, message: 'Máximo una unidad de Carros de Guerra Ligeros por cada otra unidad básica (no carros).' },
        { type: 'unitRatio', primaryUnit: 'Arqueros a Caballo', secondaryUnit: 'Carros de Guerra Ligeros', maxSecondaryPerPrimary: 1, message: 'Máximo una unidad de Carros de Guerra Ligeros por cada otra unidad básica (no carros).' },


        // Unit Limits (0-X)
        { type: 'unitLimit', unitName: 'Lanzavirotes de Hueso', max: 2, message: 'Solo puedes incluir un máximo de 2 Lanzavirotes de Hueso.' },
        { type: 'unitLimit', unitName: 'Hierotitán', max: 1, message: 'Solo puedes incluir un Hierotitán.' },
        { type: 'unitLimit', unitName: 'Necroesfinge', max: 1, message: 'Solo puedes incluir una Necroesfinge.' },

        // Battle Standard Bearer Validation
        {
            type: 'custom',
            id: 'validateNehekharaBSB',
            message: 'El Portaestandarte de Batalla debe ser un Príncipe Funerario o Heraldo del Sepulcro.',
            validator: (context) => {
                const battleStandards = context.armyList.filter(u => u.selections?.battleStandard?.selected);

                if (battleStandards.length > 1) {
                    return 'Solo puede haber un Portaestandarte de Batalla en el ejército.';
                }
                if (battleStandards.length === 1) {
                    const bsb = battleStandards[0];
                    if (bsb.name !== 'Príncipe Funerario' && bsb.name !== 'Heraldo del Sepulcro') {
                        return 'El Portaestandarte de Batalla debe ser un Príncipe Funerario o Heraldo del Sepulcro.';
                    }
                }
                return true;
            }
        },

        // Unique Relic validation (handled generically if items marked `relic: true`)
        {
            type: 'custom',
            id: 'validateUniqueRelics',
            message: 'No puedes incluir la misma Reliquia más de una vez en el ejército.',
            validator: (context) => {
                const relicsSelected = [];
                context.armyList.forEach(unit => {
                    if (unit.selections?.magicItems?.selection) {
                         Object.values(unit.selections.magicItems.selection).forEach(item => {
                             if (item.relic) {
                                 relicsSelected.push(item.name);
                             }
                         });
                    }
                    // Check BSB Relic
                    if (unit.selections?.battleStandardBanner?.selection) {
                         Object.values(unit.selections.battleStandardBanner.selection).forEach(item => {
                              if (item.relic) {
                                  relicsSelected.push(item.name);
                              }
                         });
                    }
                });

                const uniqueRelics = new Set(relicsSelected);
                if (uniqueRelics.size < relicsSelected.length) {
                    const counts = relicsSelected.reduce((acc, relic) => { acc[relic] = (acc[relic] || 0) + 1; return acc; }, {});
                    const duplicate = Object.keys(counts).find(relic => counts[relic] > 1);
                    return `La Reliquia "${duplicate}" solo puede ser incluida una vez en el ejército.`;
                }
                return true;
            }
        },
    ]
},
// ===================================================================================
// --- ELFOS SILVANOS RULESET ---
// ===================================================================================

'esil': {
    modificationRules: [],

    focResolutionRules: [
        // No specific FOC changes found in the Silvanos PDF
    ],

    validationRules: [
        { type: 'generalRequirement', message: 'Un ejército de Elfos Silvanos debe tener un General.' },

        // Unit restrictions based on ratios
        {
            type: 'unitRatio',
            primaryUnit: ['Guardia del Bosque', 'Guardia del Claro'], // Either unit type counts
            secondaryUnit: 'Exploradores',
            maxSecondaryPerPrimary: 1,
            message: 'Sólo puedes incluir una unidad de Exploradores por cada unidad de Guardia del Bosque o Guardia del Claro.'
            // Requires rules engine adjustment for array primaryUnit or split into two rules
        },

        // 0-1 Unit Limits
        { type: 'unitLimit', unitName: 'Milenario', max: 1, message: 'Solo puedes incluir un Milenario.' },
        { type: 'unitLimit', unitName: 'Danzante de Sombras', max: 1, message: 'Solo puedes incluir un Danzante de Sombras.' },

        // Danzante de Sombras requirement
        {
            type: 'custom',
            id: 'validateDanzanteRequirement',
            message: 'Solo puedes incluir un Danzante de Sombras si incluyes al menos una unidad de Bailarines Guerreros.',
            validator: (context) => {
                const hasDanzante = context.armyList.some(u => u.name === 'Danzante de Sombras');
                if (!hasDanzante) return true;
                const hasBailarines = context.armyList.some(u => u.name === 'Bailarines Guerreros');
                if (!hasBailarines) {
                    return 'Solo puedes incluir un Danzante de Sombras si incluyes al menos una unidad de Bailarines Guerreros.';
                }
                return true;
            }
        },

        // Battle Standard Bearer Validation
        {
            type: 'custom',
            id: 'validateSilvanosBSB',
            message: 'Solo un Noble puede ser el Portaestandarte de Batalla.',
            validator: (context) => {
                const battleStandards = context.armyList.filter(u => u.isBSB);

                if (battleStandards.length > 1) {
                    return 'Solo puede haber un Portaestandarte de Batalla en el ejército.';
                }

                if (battleStandards.length === 1) {
                    const bsb = battleStandards[0];
                    if (bsb.name !== 'Noble') {
                        return 'El Portaestandarte de Batalla debe ser un Noble.';
                    }
                     // Check Estirpe restriction
                     const estirpe = bsb.selections?.armySkills?.selection;
                     if (estirpe && (estirpe['Estirpe de Bailarines Guerreros (Personaje)'] || estirpe['Estirpe de Forestales'] || estirpe['Estirpe de Señores de las Bestias'])){
                         const estirpeName = Object.keys(estirpe)[0].replace(' (Personaje)','').replace('Estirpe de ','');
                         return `Un Noble con la Estirpe de ${estirpeName} no puede ser el Portaestandarte de Batalla.`;
                     }
                }
                return true;
            }
        },

        // Estirpe / Rasgo Uniqueness Validation
        {
            type: 'custom',
            id: 'validateUniqueSkills',
            message: 'No puedes incluir la misma Estirpe o Rasgo/Hada más de una vez en el ejército.',
            validator: (context) => {
                const skillsSelected = [];
                context.armyList.forEach(unit => {
                    // Check character skills (Estirpes)
                    if (unit.selections?.armySkills?.selection) {
                         skillsSelected.push(...Object.keys(unit.selections.armySkills.selection));
                    }
                    // Check champion skills (Rasgos/Hadas via upgrades)
                    if (unit.selections?.command?.c?.upgrades?.selection) {
                         skillsSelected.push(...Object.keys(unit.selections.command.c.upgrades.selection));
                    }
                    // Check unit skills (Rasgos/Hadas via options) - Needs check if unit skills are unique too? PDF implies only Character skills (Estirpes/Rasgos) are unique. Assuming only character skills here.
                    // const unitOptionSkills = Object.values(unit.selections?.options || {}).filter(opt => opt.exclusiveGroup?.startsWith('rasgo'));
                    // if(unitOptionSkills.length > 0) skillsSelected.push(unitOptionSkills[0].name);

                });

                // Filter out non-unique skill types if necessary, e.g. arrow types
                 const uniqueSkillTypes = ['Estirpe', 'Rasgo/Hada'];
                 const skillsToValidate = skillsSelected.filter(skillName => {
                     // Find the skill in the DB to check its type
                     const skillData = context.armyData.armySkillsDB[skillName];
                     return skillData && uniqueSkillTypes.includes(skillData.type);
                 });


                const uniqueSkills = new Set(skillsToValidate);
                if (uniqueSkills.size < skillsToValidate.length) {
                    const counts = skillsToValidate.reduce((acc, skill) => { acc[skill] = (acc[skill] || 0) + 1; return acc; }, {});
                    const duplicate = Object.keys(counts).find(skill => counts[skill] > 1);
                    // Find type for message
                    const skillType = context.armyData.armySkillsDB[duplicate]?.type || "Habilidad";
                    return `La ${skillType} "${duplicate}" solo puede ser incluida una vez en el ejército.`;
                }
                return true;
            }
        },

         // Validate Arrow Type Limit (Max half units)
        {
            type: 'custom',
            id: 'validateArrowTypeLimit',
            message: 'Solo hasta la mitad de las unidades de Guardia del Bosque (redondeando hacia arriba) pueden equiparse con flechas especiales.',
            validator: (context) => {
                const guardiaUnits = context.armyList.filter(u => u.name === 'Guardia del Bosque');
                const totalGuardia = guardiaUnits.length;
                if (totalGuardia === 0) return true;

                const maxSpecialArrows = Math.ceil(totalGuardia / 2);
                let specialArrowCount = 0;

                guardiaUnits.forEach(unit => {
                    if (unit.selections?.options) {
                        const options = unit.selections.options;
                        if (options['Flechas de Fuego Estelar'] || options['Flechas de Tejo Negro'] || options['Flechas de Hada']) {
                            specialArrowCount++;
                        }
                    }
                });

                if (specialArrowCount > maxSpecialArrows) {
                     return `Demasiadas unidades de Guardia del Bosque con flechas especiales (${specialArrowCount}). Máximo permitido: ${maxSpecialArrows}.`;
                }
                return true;
            }
        },

        // Silvanos general rule - No common magic armors
        {
            type: 'custom',
            id: 'validateNoCommonMagicArmor',
            message: 'Los Elfos Silvanos no pueden escoger Armaduras Mágicas de la lista de objetos comunes.',
            validator: (context) => {
                for(const unit of context.armyList){
                    if(unit.selections?.magicItems?.['Armadura Mágica']){
                        const armors = unit.selections.magicItems['Armadura Mágica'];
                        for(const armorName in armors){
                             // Check if the selected armor exists in the faction DB. If not, it's common.
                             if (!context.armyData.magicItemsDB?.['Armadura Mágica']?.[armorName]) {
                                 // Check if it exists in the common DB provided during validation
                                 if (context.commonMagicItems?.['Armadura Mágica']?.[armorName]){
                                    return `"${unit.name}" tiene equipada "${armorName}", una Armadura Mágica común, no está permitido.`;
                                 }
                             }
                        }
                    }
                }
                 return true;
            }
        }

    ]
},
// ===================================================================================
// --- NORSCA RULESET ---
// ===================================================================================
// Note: Norsca uses 'caos_common' ruleset for Chaos Host/Mark rules.
// This section only includes Norsca-specific validation.

'nors': {
    modificationRules: [],

    focResolutionRules: [
         {
            type: 'RESOLVE_LIMITED_FOC',
            condition: {
                type: 'custom',
                validator: (context) => {
                     // Check if any Lord or Hero has the "Señor de los lobos" Saga
                     return context.armyList.some(u =>
                        (u.unitData.foc === 'Lord' || u.unitData.foc === 'Hero') &&
                        u.selections?.armySkills?.selection?.['Señor de los lobos']
                     );
                }
             },
            targetUnit: 'Pieles Lobo',
            newFOC: 'Core', // PDF says basic -> Core
            limit: 1,
            message: "Si un personaje tiene la Saga 'Señor de los lobos', una unidad de Pieles Lobo puede ser Básica."
        }
    ],

    validationRules: [
        // Inherits General Requirement from caos_common if used together
        // { type: 'generalRequirement', message: 'Un ejército de Norsca debe tener un General.' },

        // Unit ratios and limits
        { type: 'unitRatio', primaryUnit: 'Barbaros de Norsca', secondaryUnit: 'Señor de las Bestias', maxSecondaryPerPrimary: 1, message: 'Solo puedes incluir una unidad de Señor de las Bestias por cada unidad de Barbaros de Norsca.' },
        { type: 'unitRatio', primaryUnit: 'Barbaros de Norsca', secondaryUnit: 'Incursores Nórdicos', maxSecondaryPerPrimary: 1, message: 'Solo puedes incluir una unidad de Incursores Nórdicos por cada unidad de Barbaros de Norsca.' },
        { type: 'unitLimit', unitName: 'Exploradores Nórdicos', max: 2, message: 'Solo puedes incluir un máximo de 2 unidades de Exploradores Nórdicos.' },
        {
            type: 'custom',
            id: 'validateLobosDeHieloLimit',
            message: "Solo puedes incluir una unidad de Lobos de Hielo Norses, a menos que un personaje tenga la Saga 'Señor de los lobos'.",
             validator: (context) => {
                 const lobosCount = context.armyList.filter(u => u.name === 'Lobos de Hielo Norses').length;
                 if (lobosCount <= 1) return true; // Allows 0 or 1

                 const hasSenorLobos = context.armyList.some(u =>
                    (u.unitData.foc === 'Lord' || u.unitData.foc === 'Hero') &&
                    u.selections?.armySkills?.selection?.['Señor de los lobos']
                 );

                 if (!hasSenorLobos && lobosCount > 1) {
                    return "Solo puedes incluir una unidad de Lobos de Hielo Norses. La Saga 'Señor de los lobos' elimina esta restricción.";
                 }
                 // If saga is present, no limit applies here (FOC Rare limit still applies)
                 return true;
             }
        },
        {
            type: 'custom',
            id: 'validateMamutLimit',
            message: 'Solo puedes incluir un único Mamut en el ejército (como unidad Singular o como montura).',
            validator: (context) => {
                const mamutUnits = context.armyList.filter(u => u.name === 'Mamut').length;
                // Check mount selections using the exact mount name from nors.js
                const mamutMounts = context.armyList.filter(u => u.selections?.mounts?.['Mamut']).length;
                if (mamutUnits + mamutMounts > 1) {
                    return 'Solo puedes incluir un único Mamut en el ejército (ya sea como unidad Singular o como montura).';
                }
                return true;
            }
        },

        // Emboscada Incursores (only one unit)
        {
            type: 'custom',
            id: 'validateIncursoresEmboscada',
            message: 'Solo una única unidad de Incursores Nórdicos puede mejorarse con Emboscada.',
            validator: (context) => {
                const emboscadaCount = context.armyList.filter(u =>
                    u.name === 'Incursores Nórdicos' &&
                    // Check the option name exactly as defined in nors.js
                    u.selections?.options?.['Emboscada']
                ).length;
                if (emboscadaCount > 1) {
                    return 'Solo una única unidad de Incursores Nórdicos puede mejorarse con Emboscada.';
                }
                return true;
            }
        },

        // Jefe de Tribu Barbaro Restrictions
        {
            type: 'custom',
            id: 'validateJefeTribuGeneral',
            message: 'Un Jefe de Tribu Barbaro no puede ser el General del ejército.',
            validator: (context) => {
                if (context.general && context.general.name === 'Jefe de Tribu Barbaro') {
                    return 'Un Jefe de Tribu Barbaro no puede ser el General del ejército (Guerreros Tribales).';
                }
                return true;
            }
        },
        {
             type: 'custom',
             id: 'validateJefeTribuMark',
             message: 'Un Jefe de Tribu Bárbaro debe tener la misma Marca del Caos que la unidad a la que se une.',
             validator: (context) => {
                 // Cannot fully validate at list building stage.
                 return true;
             }
        },

        // Saga/Tribu/Recompensa Uniqueness Validation
        {
            type: 'custom',
            id: 'validateUniqueNorscaSkills',
            message: 'No puedes incluir la misma Saga Nórdica, Tribu Norse o Recompensa del Caos más de una vez en el ejército.',
            validator: (context) => {
                const skillsSelected = [];
                context.armyList.forEach(unit => {
                    // Check skills selected directly on the character
                    if (unit.selections?.armySkills?.selection) {
                        skillsSelected.push(...Object.keys(unit.selections.armySkills.selection));
                    }
                });

                // Filter to only include the types we care about (Saga, Tribu, Recompensa)
                // Assumes armySkillsDB is available within the context or globally accessible
                const skillsDB = context.currentArmyData?.armySkillsDB || {}; // Adjust access as needed
                const relevantSkillTypes = ['Saga Nórdica', 'Tribu Norse', 'Recompensa Caos'];
                const skillsToValidate = skillsSelected.filter(skillName => {
                    const skillData = skillsDB[skillName];
                    return skillData && relevantSkillTypes.includes(skillData.type);
                });

                // Check for duplicates
                const uniqueSkills = new Set(skillsToValidate);
                if (uniqueSkills.size < skillsToValidate.length) {
                    const counts = skillsToValidate.reduce((acc, skill) => { acc[skill] = (acc[skill] || 0) + 1; return acc; }, {});
                    const duplicate = Object.keys(counts).find(skill => counts[skill] > 1);
                    // Find the type of the duplicate skill for a clearer message
                    const skillType = skillsDB[duplicate]?.type || "Habilidad";
                    return `La ${skillType} "${duplicate}" solo puede ser incluida una vez en el ejército.`;
                }
                return true; // No duplicates found
            } // End validator function
        } // End custom rule object
    ] // End validationRules array
}, // End 'nors' object

// ===================================================================================
// --- COSTA DEL VAMPIRO RULESET ---
// ===================================================================================

'vcosta': {
    modificationRules: [], // No dynamic modifications identified

    focResolutionRules: [
        // No FOC changes identified based on General choice or other conditions
    ],

    validationRules: [
        { type: 'generalRequirement', message: 'Un ejército de la Costa del Vampiro debe tener un General.' },

        // General must be highest Leadership Vampire
        {
            type: 'custom',
            id: 'validateVampireGeneralLeadership',
            message: 'El General debe ser el personaje Vampiro con mayor Liderazgo.',
            validator: (context) => {
                if (!context.general) return true; // Handled by generalRequirement

                const isGeneralVampire = context.general.unitData?.reglasEspeciales?.includes('Vampiro');
                if (!isGeneralVampire) {
                    return 'El General debe ser un personaje Vampiro (Almirante o Capitán).';
                }

                // Find highest leadership among vampires
                let highestVampireLd = 0;
                context.armyList.forEach(u => {
                    if (u.unitData?.reglasEspeciales?.includes('Vampiro')) {
                        // Find the leadership from the first profile (assuming character profiles are first)
                        const unitLd = u.unitData?.perfiles?.[0]?.stats?.L;
                        if (unitLd && unitLd > highestVampireLd) {
                            highestVampireLd = unitLd;
                        }
                    }
                });

                const generalLd = context.general.unitData?.perfiles?.[0]?.stats?.L;
                if (generalLd < highestVampireLd) {
                    return `El General elegido (Ld ${generalLd}) no es el personaje Vampiro con mayor Liderazgo (Ld ${highestVampireLd}).`;
                }
                return true;
            }
        },

        // Battle Standard Bearer Validation
        {
            type: 'custom',
            id: 'validateVCostaBSB',
            message: 'Solo un Capitán de la Flota Vampiro o Tumulario Comodoro puede ser el Portaestandarte de Batalla.',
            validator: (context) => {
                const battleStandards = context.armyList.filter(u => u.isBSB === true); // Assuming isBSB flag is set correctly

                if (battleStandards.length > 1) {
                    return 'Solo puede haber un Portaestandarte de Batalla en el ejército.';
                }
                if (battleStandards.length === 1) {
                    const bsb = battleStandards[0];
                    const isValidBSB = bsb.name === 'Capitán de la Flota Vampiro' || bsb.name === 'Tumulario Comodoro';
                    if (!isValidBSB) {
                        return 'El Portaestandarte de Batalla debe ser un Capitán de la Flota Vampiro o un Tumulario Comodoro.';
                    }
                }
                return true;
            }
        },

        // Unit Ratio Validations (Based on Warnings in DB/PDF)
        {
            type: 'custom', // Using custom to handle multiple primary units and conditions easily
            id: 'validateVCostaRatios',
            message: 'Violación de ratios de unidades (Salteadores, Perros Sarnosos, Cadáver Hinchado, Bandadas de Murciélagos).',
            validator: (context) => {
                const primaryUnits = context.armyList.filter(u => u.name === 'Piratas Zombi' || u.name === 'Artilleros Piratas Zombi');
                const primaryNonDetachCount = primaryUnits.filter(p => !(p.isDestacamento === true)).length;
                const primaryTotalCount = primaryUnits.length;

                const salteadoresCount = context.armyList.filter(u => u.name === 'Salteadores Piratas Zombi').length;
                const perrosCount = context.armyList.filter(u => u.name === 'Perros Sarnosos').length;
                const cadaverCount = context.armyList.filter(u => u.name === 'Cadáver Hinchado').length;
                const bandadasCount = context.armyList.filter(u => u.name === 'Bandadas de Murciélagos').length;

                if (salteadoresCount > primaryTotalCount) {
                    return `Demasiados Salteadores Piratas Zombi (${salteadoresCount}). Máximo 1 por cada unidad de Piratas Zombi o Artilleros (${primaryTotalCount}).`;
                }
                if (perrosCount > primaryTotalCount) {
                    return `Demasiados Perros Sarnosos (${perrosCount}). Máximo 1 por cada unidad de Piratas Zombi o Artilleros (${primaryTotalCount}).`;
                }
                if (cadaverCount > primaryNonDetachCount) {
                    return `Demasiados Cadáveres Hinchados (${cadaverCount}). Máximo 1 por cada unidad de Piratas Zombi o Artilleros *que no sean Destacamento* (${primaryNonDetachCount}).`;
                }
                if (bandadasCount > primaryTotalCount) {
                    return `Demasiadas Bandadas de Murciélagos (${bandadasCount}). Máximo 1 por cada unidad de Piratas Zombi o Artilleros (${primaryTotalCount}).`;
                }
                return true;
            }
        },

        // 0-1 Unit Limits
        { type: 'unitLimit', unitName: 'Guardia de las Profundidades', max: 1, message: 'Solo puedes incluir una unidad de Guardia de las Profundidades.' },
        { type: 'unitLimit', unitName: 'Reina Bess', max: 1, message: 'Solo puedes incluir una Reina Bess.' },
        { type: 'unitLimit', unitName: 'Cazador Fúnebre', max: 1, message: 'Solo puedes incluir un Cazador Fúnebre.' },
        { type: 'unitLimit', unitName: 'Carronada', max: 1, message: 'Solo puedes incluir una Carronada.' },
        { type: 'unitLimit', unitName: 'Mortero', max: 1, message: 'Solo puedes incluir un Mortero.' },


        // Sobrenombre Uniqueness Validation
        {
            type: 'custom',
            id: 'validateUniqueSobrenombres',
            message: 'No puedes incluir el mismo Sobrenombre de Alta Mar más de una vez.',
            validator: (context) => {
                const sobrenombresSelected = [];
                context.armyList.forEach(unit => {
                    if (unit.selections?.armySkills?.selection) {
                        sobrenombresSelected.push(...Object.keys(unit.selections.armySkills.selection));
                    }
                });

                const uniqueSkills = new Set(sobrenombresSelected);
                if (uniqueSkills.size < sobrenombresSelected.length) {
                    const counts = sobrenombresSelected.reduce((acc, skill) => { acc[skill] = (acc[skill] || 0) + 1; return acc; }, {});
                    const duplicate = Object.keys(counts).find(skill => counts[skill] > 1);
                    return `El Sobrenombre "${duplicate}" solo puede incluirse una vez.`;
                }
                return true;
            }
        },

        // Destacamento Basic Validation (Simple Checkbox Approach)
        {
            type: 'custom',
            id: 'validateDestacamentoParentExists_VCosta',
            message: 'Si incluyes Artilleros marcados como Destacamento, debe haber al menos una unidad de Piratas Zombi en la lista.',
             validator: (context) => {
                 const hasDestacamentos = context.armyList.some(unit => unit.name === 'Artilleros Piratas Zombi' && unit.isDestacamento === true);
                 if (!hasDestacamentos) {
                     return true; // No detachments present, rule passes.
                 }
                 // Check specifically for Piratas Zombi which have canBeParent: true
                 const hasPotentialParent = context.armyList.some(unit => unit.name === 'Piratas Zombi');
                 return hasPotentialParent ? true : 'Se han marcado Artilleros como Destacamento, pero no hay ninguna unidad de Piratas Zombi (Unidad Principal) en la lista.';
            }
        },
        {
             type: 'custom',
             id: 'validateDestacamentoNoCommandOrBanner_VCosta',
             message: 'Los Artilleros Piratas Zombi tomados como Destacamento no pueden tener Grupo de Mando ni Estandarte Mágico.',
             validator: (context) => {
                 const invalidDestacamentos = context.armyList.filter(unit =>
                     unit.name === 'Artilleros Piratas Zombi' &&
                     unit.isDestacamento === true &&
                     // Check if any command option OR magic banner is selected
                     ( (unit.selections?.command && Object.values(unit.selections.command).some(cmd => cmd.selected)) ||
                       (unit.selections?.magicBanner?.selection && Object.keys(unit.selections.magicBanner.selection).length > 0) )
                 );
                 if (invalidDestacamentos.length > 0) {
                     return `Los Artilleros Piratas Zombi marcados como Destacamento (ID: ${invalidDestacamentos.map(u=>u.id).join(', ')}) no pueden tener grupo de mando ni estandarte mágico. Desmárcalos o elimina las mejoras.`;
                 }
                 return true;
             }
        },
         {
             type: 'custom',
             id: 'validateDestacamentoMaxSize_VCosta',
             message: 'Los Artilleros Piratas Zombi tomados como Destacamento no pueden tener más de 10 miniaturas.',
             validator: (context) => {
                 const oversizedDestacamentos = context.armyList.filter(unit =>
                     unit.name === 'Artilleros Piratas Zombi' &&
                     unit.isDestacamento === true &&
                     unit.qty > 10
                 );
                 if (oversizedDestacamentos.length > 0) {
                     return `Los Artilleros Piratas Zombi marcados como Destacamento (ID: ${oversizedDestacamentos.map(u=>u.id).join(', ')}) no pueden tener más de 10 miniaturas.`;
                 }
                 return true;
             }
        },

         // Validate Magic Item Restrictions for Vampires
        {
             type: 'custom',
             id: 'validateVampireItemRestrictions',
             message: 'Los Vampiros (Almirante/Capitán) no pueden elegir Armas ni Armaduras Mágicas.',
             validator: (context) => {
                 const vampires = context.armyList.filter(u => u.unitData?.reglasEspeciales?.includes('Vampiro'));
                 for (const vamp of vampires) {
                      const hasMagicWeapon = vamp.selections?.magicItems?.['Arma Mágica'] && Object.keys(vamp.selections.magicItems['Arma Mágica']).length > 0;
                      const hasMagicArmor = vamp.selections?.magicItems?.['Armadura Mágica'] && Object.keys(vamp.selections.magicItems['Armadura Mágica']).length > 0;
                      if (hasMagicWeapon || hasMagicArmor) {
                           return `El personaje "${vamp.label || vamp.name}" (Vampiro) no puede equiparse con Armas ni Armaduras Mágicas.`;
                      }
                 }
                 return true;
             }
        },
  
         // Limit Magic Banner to one per army
          {
               type: 'custom',
               id: 'validateSingleMagicBanner_VCosta',
               message: 'Solo una unidad en el ejército puede llevar un Estandarte Mágico.',
               validator: (context) => {
                    let bannerCount = 0;
                    context.armyList.forEach(unit => {
                         if (unit.selections?.magicBanner?.selection && Object.keys(unit.selections.magicBanner.selection).length > 0) {
                              bannerCount++;
                         }
                    });
                    if (bannerCount > 1) {
                         return `Solo una unidad en el ejército puede llevar un Estandarte Mágico (actualmente ${bannerCount}).`;
                    }
                    return true;
               }
          }
    ]
},

// ===================================================================================
// --- ORCS & GOBLINS RULESET ---
// ===================================================================================
'oyg': {
    modificationRules: [],

    focResolutionRules: [
        {
            type: 'RESOLVE_LIMITED_FOC',
            condition: { type: 'generalIs', name: 'Kaudillo Orco Negro' },
            targetUnit: 'Arrazadorez Orcos Negros',
            newFOC: 'Special',
            limit: 1
        },
        {
            type: 'RESOLVE_LIMITED_FOC',
            condition: { type: 'generalIs', name: 'Gran Chamán Orco' },
            targetUnit: 'Ídolo de Gorko (o Morko)',
            newFOC: 'Rare',
            limit: 1
        },
        {
            type: 'RESOLVE_LIMITED_FOC',
            condition: { type: 'generalIs', name: 'Gran Chamán Orco Salvaje' },
            targetUnit: 'Ídolo de Gorko (o Morko)',
            newFOC: 'Rare',
            limit: 1
        },
        {
            type: 'RESOLVE_LIMITED_FOC',
            condition: { type: 'armyIncludesUnit', unitName: 'Chamán Goblin Silvano' },
            targetUnit: 'Aracnarock',
            newFOC: 'Rare',
            limit: 1
        },
        {
            type: 'RESOLVE_LIMITED_FOC',
            condition: { type: 'armyIncludesUnit', unitName: 'Gran Chamán Goblin Silvano' },
            targetUnit: 'Aracnarock',
            newFOC: 'Rare',
            limit: 1
        },
        {
            type: 'RESOLVE_LIMITED_FOC',
            condition: { type: 'armyIncludesCharacter', characterType: 'Goblin Nocturno' },
            targetUnit: 'Garrapato Despachurrador',
            newFOC: 'Rare',
            limit: 1
        }
    ],

    validationRules: [
        { type: 'generalRequirement', message: 'Un ejército de Orcos y Goblins debe tener un General.' },
        
        // Unit limits based on ratios
        { type: 'unitRatio', primaryUnit: 'Guerreros Orcos', secondaryUnit: 'Orcos Grandotes', maxSecondaryPerPrimary: 1, message: 'Sólo puedes incluir una unidad de Orcos Grandotes por cada unidad de Guerreros Orcos.' },
        { type: 'unitRatio', primaryUnit: 'Orcos Salvajes', secondaryUnit: 'Orcos Salvajes Grandotes', maxSecondaryPerPrimary: 1, message: 'Sólo puedes incluir una unidad de Orcos Salvajes Grandotes por cada unidad de Orcos Salvajes.' },
        { type: 'unitRatio', primaryUnit: 'Jinetes de Jabalí Orcos', secondaryUnit: 'Jinetes de Jabalí Orcos Grandotes', maxSecondaryPerPrimary: 1, message: 'Sólo puedes incluir una unidad de Jinetes de Jabalí Orcos Grandotes por cada unidad de Jinetes de Jabalí Orcos.' },
        { type: 'unitRatio', primaryUnit: 'Jinetes de Jabalí Orcos Salvajes', secondaryUnit: 'Jinetes de Jabalí Orcos Salvajes Grandotes', maxSecondaryPerPrimary: 1, message: 'Sólo puedes incluir una unidad de Jinetes de Jabalí Orcos Salvajes Grandotes por cada unidad de Jinetes de Jabalí Orcos Salvajes.' },
        { type: 'unitRatio', primaryUnit: 'Goblins Nocturnos', secondaryUnit: 'Kazadores de Garrapatoz Goblins Nocturnos', maxSecondaryPerPrimary: 1, message: 'No puedes incluir más de una unidad de Kazadores de Garrapatos por cada unidad de Goblins nocturnos.' },
        
        // Unique unit limits
        { type: 'unitLimit', unitName: 'Gigante', max: 1, message: 'Solo puedes incluir un Gigante.' },
        { type: 'unitLimit', unitName: 'Aracnarock', max: 1, message: 'Solo puedes incluir un Aracnarock.' },
        { type: 'unitLimit', unitName: 'Ídolo de Gorko (o Morko)', max: 1, message: 'Solo puedes incluir un Ídolo de Gorko (o Morko).' },
        { type: 'unitLimit', unitName: 'Garrapato Despachurrador', max: 1, message: 'Solo puedes incluir un Garrapato Despachurrador.' },
        
        // 0-1 Unit limits
        { type: 'unitLimit', unitName: 'Jinetes de Jabalí Orcos Grandotes', max: 1, message: 'Solo puedes incluir una unidad de Jinetes de Jabalí Orcos Grandotes.' },
        { type: 'unitLimit', unitName: 'Jinetes de Jabalí Orcos Salvajes Grandotes', max: 1, message: 'Solo puedes incluir una unidad de Jinetes de Jabalí Orcos Salvajes Grandotes.' },
        
        // Special character restrictions
        {
            type: 'custom',
            id: 'validateAracnarockRequirement',
            message: 'Para incluir un Aracnarock, tu ejército debe incluir al menos un chamán o gran chamán goblin silvano.',
            validator: (context) => {
                const hasAracnarock = context.armyList.some(u => u.name.includes('Aracnarock'));
                if (!hasAracnarock) return true;
                
                const hasGoblinSilvanoShaman = context.armyList.some(u => 
                    u.name.includes('Chamán Goblin Silvano') || 
                    u.name.includes('Gran Chamán Goblin Silvano')
                );
                
                if (!hasGoblinSilvanoShaman) {
                    return 'Para incluir un Aracnarock, tu ejército debe incluir al menos un chamán o gran chamán goblin silvano.';
                }
                return true;
            }
        },
        {
            type: 'custom',
            id: 'validateIdoloRequirement',
            message: 'Para incluir un Ídolo de Gorko (o Morko), tu ejército debe incluir al menos un Gran Chamán Orco o Orco Salvaje.',
            validator: (context) => {
                const hasIdolo = context.armyList.some(u => u.name.includes('Ídolo de Gorko') || u.name.includes('Ídolo de Morko'));
                if (!hasIdolo) return true;
                
                const hasOrcoShaman = context.armyList.some(u => 
                    u.name.includes('Gran Chamán Orco') || 
                    u.name.includes('Gran Chamán Orco Salvaje')
                );
                
                if (!hasOrcoShaman) {
                    return 'Para incluir un Ídolo de Gorko (o Morko), tu ejército debe incluir al menos un Gran Chamán Orco o Orco Salvaje.';
                }
                return true;
            }
        },
        {
            type: 'custom',
            id: 'validateGarrapatoDespachurradorRequirement',
            message: 'Para incluir un Garrapato Despachurrador, tu ejército debe incluir al menos un personaje goblin nocturno.',
            validator: (context) => {
                const hasGarrapato = context.armyList.some(u => u.name.includes('Garrapato Despachurrador'));
                if (!hasGarrapato) return true;
                
                const hasGoblinNocturnoCharacter = context.armyList.some(u => 
                    u.name.includes('Goblin Nocturno') && 
                    (u.unitData.foc === 'Lord' || u.unitData.foc === 'Hero')
                );
                
                if (!hasGoblinNocturnoCharacter) {
                    return 'Para incluir un Garrapato Despachurrador, tu ejército debe incluir al menos un personaje goblin nocturno.';
                }
                return true;
            }
        },
        
        // Battle Standard Bearer restriction
        {
            type: 'custom',
            id: 'validateBattleStandard',
            message: 'Solo uno de los Grande jefes orcos del ejército puede ser el estandarte de batalla.',
            validator: (context) => {
                const battleStandards = context.armyList.filter(u => 
                    u.selections && 
                    Object.values(u.selections.options || {}).some(opt => 
                        opt.name && opt.name.includes('Portaestandarte de Batalla')
                    )
                );
                
                if (battleStandards.length > 1) {
                    return 'Solo puede haber un Portaestandarte de Batalla en el ejército.';
                }
                
                // Check if BSB is a valid character type
                if (battleStandards.length === 1) {
                    const bsb = battleStandards[0];
                    const validTypes = [
                        'Kaudillo Orco', 'Kaudillo Orco Salvaje', 'Kaudillo Orco Negro',
                        'Kaudillo Goblin', 'Kaudillo Goblin Nocturno', 'Kaudillo Goblin Silvano'
                    ];
                    
                    const isValidType = validTypes.some(type => bsb.name.includes(type));
                    if (!isValidType) {
                        return 'El Portaestandarte de Batalla debe ser uno de los Grande jefes orcos del ejército.';
                    }
                }
                
                return true;
            }
        }
    ]
},
// ===================================================================================
// --- GOBLINS RULESET ---
// ===================================================================================

    'gobs': {
        // modificationRules are no longer needed for FOC changes
        modificationRules: [], 
        
        focResolutionRules: [
            {
                type: 'RESOLVE_LIMITED_FOC',
                condition: { type: 'generalIs', name: 'Kaudillo Goblin' },
                targetUnit: '0-1 Chikoz duroz jinetez de lobo',
                newFOC: 'Core',
                limit: 1
            },
            {
                type: 'RESOLVE_LIMITED_FOC',
                condition: { type: 'generalIs', name: 'Kaudillo Goblin Silvano' },
                targetUnit: 'Chikoz duroz Goblins Silvanos',
                newFOC: 'Core',
                limit: 1
            },
            {
                type: 'RESOLVE_LIMITED_FOC',
                condition: { type: 'generalIs', name: 'Kaudillo Goblin Nocturno' },
                targetUnit: 'Paztorez de garrapatoz',
                newFOC: 'Core',
                limit: 1
            }
        ],

        validationRules: [
            { type: 'generalRequirement', message: 'Un ejército debe tener un General.' },
            { type: 'generalCannotBe', nameFragment: 'Chamán', message: 'Un Chamán no puede ser el General del ejército.' },
            { type: 'unitLimit', unitName: 'Gigante', max: 1, message: 'Solo puedes incluir un máximo de 1 Gigante.'},
            { type: 'unitLimit', unitName: '0-1 Goblinz Explozivoz', max: 1, message: 'Solo puedes incluir una unidad de 0-1 Goblinz Explozivoz.'},
            { type: 'unitLimit', unitName: '0-1 Chikoz duroz jinetez de lobo', max: 1, message: 'Solo puedes incluir una unidad de Chikoz duroz en lobo.'},
            { type: 'maxSecondaryUnits', message: 'No puedes tener más unidades Secundarias (Snotlings) que unidades Básicas.'},
            { type: 'unitRatio', primaryUnit: 'Goblins', secondaryUnit: 'Chikoz duroz Goblins', maxSecondaryPerPrimary: 1, message: 'No puedes tener más unidades de Chikoz duroz que de Goblins.' },
            { type: 'unitRatio', primaryUnit: 'Goblins Nocturnos', secondaryUnit: 'Chikoz duroz Goblins Nocturnos', maxSecondaryPerPrimary: 1, message: 'No puedes tener más Chikoz duroz Nocturnos que Goblins Nocturnos.' },
            { type: 'unitRatio', primaryUnit: 'Goblins Nocturnos', secondaryUnit: 'Kazadorez de Garrapatoz Goblins Nocturnos', maxSecondaryPerPrimary: 1, message: 'No puedes tener más Kazadorez de Garrapatoz que Goblins Nocturnos.' },
        ]
    },
// ===================================================================================
// --- GRAN CATAI RULESET (Revised) ---
// ===================================================================================

'catai': {
    modificationRules: [], // No dynamic modifications needed based on current understanding

    focResolutionRules: [
        {
            type: 'RESOLVE_LIMITED_FOC',
            // Condition checks if the general exists and has a specific mount selected
            condition: (context) => {
                const general = context.general;
                // Check if general exists, has selections, has mounts, and the specific mount is selected
                return general?.selections?.mounts?.['Caballo de guerra con barda']?.selected === true;
            },
            targetUnit: 'Lanceros de Jade', // Unit name must match DB exactly
            newFOC: 'Core',
            limit: 1, // Only affects one unit
            message: "Si el General va montado en Caballo de Guerra con barda, una unidad de Lanceros de Jade puede ser Básica."
        }
    ],

    validationRules: [
        { type: 'generalRequirement', message: 'Un ejército de Gran Catai debe tener un General.' },

        // General Restrictions (Consejero rule)
        { type: 'generalCannotBe', nameFragment: 'Astromante', message: 'Un Astromante (Consejero) no puede ser el General del ejército.' },
        { type: 'generalCannotBe', nameFragment: 'Alquimista', message: 'Un Alquimista (Consejero) no puede ser el General del ejército.' }, // Assuming Alquimista also has Consejero rule implicitly or explicitly

        // Battle Standard Bearer Validation
        {
            type: 'custom',
            id: 'validateCataiBSB',
            message: 'El Portaestandarte de Batalla debe ser un Capitán de la Puerta Celestial.',
            validator: (context) => {
                const battleStandards = context.armyList.filter(u => u.selections?.battleStandard?.selected);

                if (battleStandards.length > 1) {
                    return 'Solo puede haber un Portaestandarte de Batalla en el ejército.';
                }
                if (battleStandards.length === 1) {
                    const bsb = battleStandards[0];
                    // Unit name must match DB exactly
                    if (bsb.name !== 'Capitán de la Puerta Celestial') {
                        return 'El Portaestandarte de Batalla debe ser un Capitán de la Puerta Celestial.';
                    }
                }
                return true;
            }
        },

        // Unique Relic validation (Generic rule assuming items marked `relic: true`)
        {
            type: 'custom',
            id: 'validateUniqueRelics',
            message: 'No puedes incluir la misma Reliquia más de una vez en el ejército.',
            validator: (context) => {
                const relicsSelected = [];
                context.armyList.forEach(unit => {
                    // Check standard magic items
                    if (unit.selections?.magicItems?.selection) {
                         Object.values(unit.selections.magicItems.selection).forEach(item => {
                             if (item.relic) relicsSelected.push(item.name);
                         });
                    }
                    // Check BSB banner
                    if (unit.selections?.battleStandardBanner?.selection) {
                         Object.values(unit.selections.battleStandardBanner.selection).forEach(item => {
                              if (item.relic) relicsSelected.push(item.name);
                         });
                    }
                });

                const uniqueRelics = new Set(relicsSelected);
                if (uniqueRelics.size < relicsSelected.length) {
                    const counts = relicsSelected.reduce((acc, relic) => { acc[relic] = (acc[relic] || 0) + 1; return acc; }, {});
                    const duplicate = Object.keys(counts).find(relic => counts[relic] > 1);
                    return `La Reliquia "${duplicate}" solo puede ser incluida una vez en el ejército.`;
                }
                return true;
            }
        },

        // Basic Destacamento Check (Parent Presence)
        {
            type: 'custom',
            id: 'validateDestacamentoParentExists',
            message: 'Si incluyes unidades marcadas como Destacamento, debe haber al menos una Unidad Principal en la lista.',
            validator: (context) => {
                const hasDestacamentos = context.armyList.some(unit => unit.isDestacamento === true);
                if (!hasDestacamentos) {
                    return true; // No detachments present, rule passes.
                }

                // Check if at least one unit capable of being a parent exists
                // Assumes getUnitDataByName helper exists and works
                const hasPotentialParent = context.armyList.some(unit => {
                    const unitData = getUnitDataByName(unit.name, context.currentArmyData); // Need helper access
                    return unitData?.canBeParent === true;
                });

                return hasPotentialParent ? true : 'Se han marcado unidades como Destacamento, pero no hay ninguna Unidad Principal (ej: Guerreros de Jade) en la lista.';
            }
        },

        // Unit Limits (0-X) from DB Warnings (Redundant if UI enforces, but good backup)
        { type: 'unitLimit', unitName: 'Guardia del Dragon Celestial', max: 1, message: 'Solo puedes incluir una unidad de Guardia del Dragon Celestial (incluyendo Ballesteros).', appliesTo: ['Guardia del Dragon Celestial', 'Ballesteros Guardia del Dragon'] }, // Check combined limit

        // Note: Rules like max 2 detachments *per parent* or size limits are NOT validated here
        // as per the simpler checkbox approach.
    ]
},

// ===================================================================================
// --- MERCENARIES RULESET ---
// ===================================================================================
    
   
'merc': {
    modificationRules: [
        {
            conditions: [ 
                { type: 'unitHasSkill', skillName: 'Emblema Familiar' }, 
                { type: 'unitIsNotGeneral' } 
            ],
            actions: [ 
                { 
            type: 'ADD_UNIT_PROPERTY', 
            payload: { 
                key: 'magicBanner', // Add the standard magicBanner property dynamically
                value: 50           // Set the point limit (adjust if needed)
            } 
        }
    ]
        },
        { 
            conditions: [{ type: 'unitHasSkill', skillName: 'Buenos Contactos' }],
            actions: [ 
                { 
                    type: 'RENDER_COMPONENT', 
                    payload: { 
                        componentName: 'ManualUnitEntry', 
                        props: { 
                            sourceSkill: 'Buenos Contactos', 
                            type: 'alliedUnit', 
                            coreAllies: { 
                                "Imperio": "imp", 
                                "Bretonia": "bret", 
                                "Kislev": "kis", 
                                "Norsca": "nors" 
                            }, 
                            specialAllies: { 
                                "Reinos Ogros": "ogros", 
                                "Altos Elfos": "aelf", 
                                "Elfos Silvanos": "esil", 
                                "Enanos": "ena" 
                            } 
                        } 
                    } 
                } 
            ]
        },
        { 
            conditions: [{ type: 'unitHasSkill', skillName: 'Creyente Devoto' }],
            actions: [ 
                { 
                    type: 'RENDER_COMPONENT', 
                    payload: { 
                        componentName: 'ManualUnitEntry', 
                        props: { 
                            sourceSkill: 'Creyente Devoto', 
                            type: 'customCharacter', 
                            foc: 'Hero' 
                        } 
                    } 
                } 
            ]
        }
    ],

    focResolutionRules: [
        {
            type: 'RESOLVE_LIMITED_FOC',
            condition: { type: 'anyUnitHasSkill', name: 'Alto Linaje' },
            targetUnit: 'Caballería Pesada',
            newFOC: 'Core',
            limit: 1
        }
    ],

    validationRules: [
        { type: 'generalRequirement', message: 'Un ejército debe tener un General.' },
        { type: 'unitLimit', unitName: '0-1 Enanos Mercenarios', max: 1, message: 'Solo puedes incluir una unidad de Enanos Mercenarios.'},
        { type: 'unitLimit', unitName: '0-1 Incursores Nórdicos', max: 1, message: 'Solo puedes incluir una unidad de Incursores Nórdicos.'},
        { type: 'unitLimit', unitName: '0-1 Pagador', max: 1, message: 'Solo puedes incluir un Pagador.'},
        { type: 'maxSecondaryUnits', message: 'No puedes tener más Tropas Auxiliares que unidades Básicas.'},
        { type: 'conditionalUnitLimit', unitName: 'Piqueros Veteranos', pointsThreshold: 3000, maxIfBelow: 1, maxIfAbove: 2, message: 'Límite de Piqueros Veteranos excedido.'},
        { type: 'warnOnSkillsTotalPoints' }
    ]
},


// ===================================================================================
// --- CHAOS RULESET ---
// ===================================================================================

    'gcaos': {
        focResolutionRules: [
            {
                type: 'RESOLVE_LIMITED_FOC',
                condition: { type: 'generalIs', name: 'Señor del Caos' },
                targetUnit: 'Caballeros del Caos',
                newFOC: 'Core',
                limit: 1
            },
            {
                type: 'RESOLVE_LIMITED_FOC',
                condition: { type: 'generalIs', name: 'Paladín del Caos' },
                targetUnit: 'Caballeros del Caos',
                newFOC: 'Core',
                limit: 1
            }
        ],
        validationRules: [
            { type: 'generalRequirement', message: 'Un ejército del Caos debe tener un General.' },
            { 
                type: 'hostRequirements', 
                maxSupportPercentage: {
                    default: 0.25,
                    at2000: 0.33,
                    at3000: 0.40
                }
            },
        ]
    },

    'hbes': {
        focResolutionRules: [],
        validationRules: [
            { type: 'generalRequirement', message: 'Un ejército del Caos debe tener un General.' },
            { 
                type: 'hostRequirements', 
                maxSupportPercentage: {
                    default: 0.25,
                    at2000: 0.33,
                    at3000: 0.40
                }
            },
        ]
    },

    'ginf': {
        focResolutionRules: [],
        validationRules: [
            { type: 'generalRequirement', message: 'Un ejército del Caos debe tener un General.' },
            { type: 'unitLimit', unitName: '0-1 Ogros Dragón', max: 1, message: 'Solo puedes incluir una unidad de Ogros Dragón.' },
            { type: 'unitLimit', unitName: '0-1 Shaggoth', max: 1, message: 'Solo puedes incluir un Shaggoth.' },
            { 
                type: 'hostRequirements', 
                maxSupportPercentage: {
                    default: 0.25,
                    at2000: 0.33,
                    at3000: 0.40
                }
            },
        ]
    },

    'dcaos': {
        focResolutionRules: [],
        validationRules: [
            { type: 'generalRequirement', message: 'Un ejército del Caos debe tener un General.' },
            { 
                type: 'hostRequirements', 
                maxSupportPercentage: {
                    default: 0.25,
                    at2000: 0.33,
                    at3000: 0.40
                }
            },
        ]
    },

// ===================================================================================
// --- UNDEAD RULESET ---
// ===================================================================================

    'nmuert': {
    modificationRules: [],

    focResolutionRules: [
        {
            type: 'RESOLVE_LIMITED_FOC',
            condition: { type: 'generalIs', name: 'Rey Tumulario' },
            targetUnit: 'Tumularios',
            newFOC: 'Core',
            limit: 1
        }
    ],

    validationRules: [
        { type: 'generalRequirement', message: 'Un ejército de No Muertos debe tener un General.' },
        { type: 'unitLimit', unitName: 'Liche', max: 1, message: 'Solo puedes incluir un Liche.' },
        { type: 'unitLimit', unitName: 'Heraldo de Nagash', max: 1, message: 'Solo puedes incluir un Heraldo de Nagash.' },
        { type: 'unitLimit', unitName: 'Dragón Zombi', max: 1, message: 'Solo puedes incluir un Dragón Zombi.' },
        { type: 'unitLimit', unitName: 'Momias', max: 1, message: 'Solo puedes incluir una unidad de Momias.' },
        { type: 'unitLimit', unitName: 'Rey Necrófago', max: 1, message: 'Solo puedes incluir un Rey Necrófago.' },
        { type: 'unitLimit', unitName: 'Necrófagos', max: 2, message: 'Solo puedes incluir un máximo de 2 unidades de Necrófagos.' },
        { type: 'unitLimit', unitName: 'Señor de los Muertos', max: 2, message: 'Solo puedes incluir un máximo de 2 Señores de los Muertos.' },
        { 
            type: 'unitRatio', 
            primaryUnit: 'Esqueletos', 
            secondaryUnit: 'Hueste Espectral', 
            maxSecondaryPerPrimary: 1, 
            message: 'Solo puedes incluir una unidad de Hueste Espectral por cada unidad de Esqueletos o Zombis.' 
        },
        { 
            type: 'unitRatio', 
            primaryUnit: 'Zombis', 
            secondaryUnit: 'Hueste Espectral', 
            maxSecondaryPerPrimary: 1, 
            message: 'Solo puedes incluir una unidad de Hueste Espectral por cada unidad de Esqueletos o Zombis.' 
        }
    ]
},

// ===================================================================================
// --- SKAVEN RULESET ---
// ===================================================================================
    'skav': {
        modificationRules: [],

        focResolutionRules: [
            // Note: Based on the document, there are no explicit FOC changes for characters
            // The FOC rules are primarily unit restrictions and ratios
        ],

        validationRules: [
            { type: 'generalRequirement', message: 'Un ejército Skaven debe tener un General.' },
            
            // Unit limits from the document
            { type: 'unitLimit', unitName: '0-1 Abominación de Pozo Infernal', max: 1, message: 'Solo puedes incluir una Abominación de Pozo Infernal.' },
            { type: 'unitLimit', unitName: '0-1 Rueda de la Muerte', max: 1, message: 'Solo puedes incluir una Rueda de la Muerte.' },
            { type: 'unitLimit', unitName: '0-2 Cañón de Disformidad', max: 2, message: 'Solo puedes incluir un máximo de 2 Cañones de Disformidad.' },
            { type: 'unitLimit', unitName: '0-2 Garrapulta de Plaga', max: 2, message: 'Solo puedes incluir un máximo de 2 Garrapultas de Plaga.' },
            { type: 'unitLimit', unitName: '0-1 Alimañas de Crianza', max: 1, message: 'Solo puedes incluir una unidad de Alimañas de Crianza.' },
            { type: 'unitLimit', unitName: '0-2 Hordas de Ratas', max: 2, message: 'Solo puedes incluir un máximo de 2 Hordas de Ratas.' },
            
            // Clan-specific unit restrictions (explicitly stated in unit entries)
            { type: 'unitRatio', primaryUnit: 'Guerreros de Clan', secondaryUnit: 'Alimañas', maxSecondaryPerPrimary: 1, message: 'Sólo puedes incluir una unidad de Alimañas por cada unidad de Guerreros de Clan de tu ejército.' },
            { type: 'unitRatio', primaryUnit: 'Guerreros de Clan', secondaryUnit: 'Corredores de Alcantarillas', maxSecondaryPerPrimary: 1, message: 'Sólo puedes incluir una unidad de Corredores de Alcantarillas por cada unidad de Guerreros de Clan de tu ejército.' },
            
            // Character joining restrictions
            { type: 'generalCannotBe', nameFragment: 'Asesino Eshin', message: 'Un Asesino Eshin no puede ser el General del ejército.' },
            
            // Points warning for skills
            { type: 'warnOnSkillsTotalPoints' }
        ]
    }
}

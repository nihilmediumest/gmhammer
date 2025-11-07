// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: COSTA DEL VAMPIRO ---
// ===================================================================================
// Last Updated: 2025-10-26 - v4.0 - Corrected champItems usage
import { commonMagicItemsDB } from '../comun.js';

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_vcosta = {
    // === CORE ===
    "Piratas Zombi": {
        faction: "vcosta",
        foc: "Core",
        points: 4,
        min: 20,
        max: 50,
        canBeParent: true, // Can be Unidad Principal for Artilleros
        equipo: "Arma de mano.",
        reglasEspeciales: "No muertos, Cruzar (elementos acuáticos), Unidad Principal.",
        perfiles: [
            { nombre: "Pirata Zombi", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 4, H: 1, I: 0, A: 1, L: 3 } },
            { nombre: "Bucanero Zombi", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 4, H: 1, I: 0, A: 2, L: 4 } }
        ],
        options: [
            { n: "Arma de Mano adicional", p: 1 },
            { n: "Armadura ligera", p: 1 },
            { n: "Alabardas", p: 2 }
        ],
        command: {
            // Bucanero Zombi champion
            c: { n: "Bucanero Zombi", p: 4, upgrades: [{ n: "Sombrero pirata", p: 1 }] }, // Note: Músico is implied by Bucanero according to PDF text? Explicitly adding músico might be clearer if needed by rules. PDF just says "puede incluirse un Bucanero zombi (que también cuenta como músico)".
            s: { n: "Portaestandarte", p: 4 }
            // Músico is handled by the Bucanero champion upgrade according to PDF text.
        },
        magicBanner: 25 // Limit 1 per army validation rule needed
        // Removed champItems: 1
    },
    "Artilleros Piratas Zombi": {
        faction: "vcosta",
        foc: "Core",
        canBeChild: true, // Can be Destacamento
        points: 7,
        min: 5,
        max: 30, // Max 10 if Destacamento, validated by ruleset
        equipo: "Mosquete, Arma de mano.",
        reglasEspeciales: "No muertos, Destacamento, Cruzar (elementos acuáticos), Pólvora Mojada.",
        perfiles: [
            { nombre: "Artillero Pirata Zombi", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 4, H: 1, I: 0, A: 1, L: 3 } },
            { nombre: "Bucanero Zombi", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 4, H: 1, I: 0, A: 2, L: 4 } }
        ],
        options: [
             // Max half units rule needs validation/UI enforcement
            { n: "Sustituir Mosquete por Arcabuz", p: 2, summary:"Hasta la mitad de unidades." }
        ],
        command: { // Not allowed if taken as Destacamento, validated by ruleset
            c: { n: "Bucanero Zombi", p: 4, upgrades: [{ n: "Sombrero pirata", p: 1 }] },
            s: { n: "Portaestandarte", p: 4 }
        },
        magicBanner: 25 // Not allowed if Destacamento, validated by ruleset
        // Removed champItems: 1
    },
    "Salteadores Piratas Zombi": {
        faction: "vcosta",
        foc: "Core",
        warning: "Máx 1 por cada unidad de Piratas Zombi o Artilleros Piratas Zombi.",
        points: 6,
        min: 5,
        max: 15,
        equipo: "Dos armas de mano.",
        reglasEspeciales: "No muertos, Cruzar (elementos acuáticos), Pólvora mojada, Hostigadores.",
        perfiles: [
            { nombre: "Salteador Pirata Zombi", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 4, H: 1, I: 0, A: 1, L: 3 } },
            { nombre: "Bucanero Zombi", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 4, H: 1, I: 0, A: 2, L: 4 } }
        ],
        options: [
            { n: "Pistola", p: 4, exclusiveGroup: "ranged" },
            { n: "Ristra de Pistolas", p: 7, exclusiveGroup: "ranged" },
            { n: "Bombas de mano", p: 2 }
        ],
        command: {
            c: { n: "Bucanero Zombi", p: 4, upgrades: [{ n: "Sombrero pirata", p: 1 }] }
            // Músico implied by Bucanero
        }
        // Removed champItems: 1
    },
    "Perros Sarnosos": {
        faction: "vcosta",
        foc: "Core",
        warning: "Máx 1 por cada unidad de Piratas Zombi o Artilleros Piratas Zombi.", // Adjusted assumption based on PDF text pattern
        points: 6,
        min: 5,
        max: 15,
        equipo: "Garras y dientes (Arma de mano).",
        reglasEspeciales: "No muertos, Caballería rápida, Cruzar (Elementos acuáticos).",
        perfiles: [
            { nombre: "Perro sarnoso", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 3 } },
            { nombre: "Perro maligno", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 2, L: 4 } }
        ],
        options: [
            { n: "Ataques envenenados", p: 1 }
        ],
        command: { c: { n: "Perro maligno", p: 6 } }
        // Removed champItems: 1
    },
    "Cadáver Hinchado": {
        faction: "vcosta",
        foc: "Core",
        warning: "Máx 1 por cada unidad de Piratas Zombi o Artilleros Piratas Zombi (no Destacamentos).",
        points: 35,
        min: 1,
        max: 1,
        equipo: "Ninguno.", // Choice is mandatory
        reglasEspeciales: "No muerto, Cruzar (elementos acuáticos), Inflamable, Movimiento aleatorio (2D6), Indesmoralizable, Peligro andante, Explosión.",
        perfiles: [
            { nombre: "Cadáver hinchado", stats: { M: "2D6", HA: 0, HP: 0, F: 4, R: 5, H: 3, I: 0, A: 0, L: 4 } } // Stats from PDF text
        ],
        options: [
            // Mandatory choice, UI should enforce one is picked
            { n: "Explosión de Pólvora", p: 0, exclusiveGroup: "explosion", summary:"Plantilla Gde. 3D3 Imp F4 PP." },
            { n: "Explosión de Gases", p: 0, exclusiveGroup: "explosion", summary:"Plantilla Gde. 2D3 Imp Hieren 4+, sin TSA." }
        ]
    },
    "Bandadas de Murciélagos": {
        faction: "vcosta",
        foc: "Core",
        warning: "Máx 1 por cada unidad de Piratas Zombi o Artilleros Piratas Zombi.", // Adjusted assumption
        points: 16,
        min: 2,
        max: 6,
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "¡Están vivos!, Miedo, Flotar.", // Swarm type
        perfiles: [
            // Using Peana for Swarm unit name convention
            { nombre: "Peana de murciélagos", stats: { M: 1, HA: 3, HP: 0, F: 2, R: 2, H: 4, I: 4, A: 4, L: 3 } }
        ]
    },

    // === SPECIAL ===
    "Carronada": {
        faction: "vcosta",
        foc: "Special",
        points: 75,
        min: 1,
        max: 1, // PDF implies multiple possible, but often limited in practice. Ruleset limits to 1.
        equipo: "Dotación (3) con Arma de mano.",
        reglasEspeciales: "No muertos. Dispara como Cañón (Alc 36\", F7, HM(1D3)). Mover y disparar.", // War Machine
        perfiles: [
            { nombre: "Carronada", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 6, H: 3, I: "-", A: "-", L: "-" } }, // Stats from PDF text
            { nombre: "Artillero Pirata Zombi (3)", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 4, H: 1, I: 0, A: 1, L: 3 } } // Crew profile
        ]
    },
    "Mortero": {
        faction: "vcosta",
        foc: "Special",
        points: 55,
        min: 1,
        max: 1, // PDF implies multiple possible, but often limited in practice. Ruleset limits to 1.
        equipo: "Dotación (3) con Arma de mano.",
        reglasEspeciales: "No muertos. Dispara como Catapulta (Plantilla Gde, F3, PP. Centro F6, HM(1D3), Niega TSA). Usa tabla problemas Cañón.", // War Machine
        perfiles: [
            { nombre: "Mortero", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: 3, I: "-", A: "-", L: "-" } }, // Stats from PDF text
            { nombre: "Artillero Pirata Zombi (3)", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 4, H: 1, I: 0, A: 1, L: 3 } } // Crew profile
        ]
    },
    "Tiradores de Cubierta": {
        faction: "vcosta",
        foc: "Special",
        points: 22,
        min: 1, // Individual models treated as skirmishing unit
        max: 5,
        equipo: "Mosquete de cubierta y Arma de mano.",
        reglasEspeciales: "No muertos, Cruzar (Elementos acuáticos), Pólvora Mojada, Hostigadores.", // Treat as Infantry Skirmishers
        perfiles: [
            { nombre: "Tirador de cubierta", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 4, H: 2, I: 0, A: 1, L: 3 } } // H2 from profile
        ]
        // No command listed
    },
    "Artilleros Abisales": {
        faction: "vcosta",
        foc: "Special",
        points: 12,
        min: 5,
        max: 20,
        equipo: "Arma de mano y Trabuco abisal.",
        reglasEspeciales: "No muertos, Cruzar (elementos acuáticos), Pólvora mojada.",
        perfiles: [
            { nombre: "Artillero Abisal", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 4, H: 1, I: 0, A: 1, L: 3 } },
            { nombre: "Bucanero Zombi", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 4, H: 1, I: 0, A: 2, L: 4 } }
        ],
        command: {
            c: { n: "Bucanero Zombi", p: 4, upgrades: [{ n: "Sombrero pirata", p: 1 }] },
            s: { n: "Portaestandarte", p: 4 }
        },
        magicBanner: 25
        // Removed champItems: 1
    },
    "Guardia de las Profundidades": {
        faction: "vcosta",
        foc: "Special",
        warning: "0-1",
        points: 13,
        min: 10,
        max: 30,
        equipo: "Arma de mano, Armadura pesada, Alabarda.",
        reglasEspeciales: "No muertos, Cruzar (Elementos acuáticos), Guardia tumularia.",
        perfiles: [
            { nombre: "Guardia de las Profundidades", stats: { M: 4, HA: 3, HP: 2, F: 4, R: 4, H: 1, I: 2, A: 1, L: 5 } },
            { nombre: "Capitán Tumulario", stats: { M: 4, HA: 3, HP: 2, F: 4, R: 4, H: 1, I: 2, A: 2, L: 5 } }
        ],
        command: { c: { n: "Capitán Tumulario", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50
        // Removed champItems: 1
    },
    "Cangrejos Gigantes": {
        faction: "vcosta",
        foc: "Special",
        points: 30,
        min: 3,
        max: 10,
        equipo: "Pinzas (Arma de mano).",
        reglasEspeciales: "No muertos, Cruzar (elementos acuáticos), Piel Escamosa (3+), Miedo.", // Monstrous Beast
        perfiles: [
            { nombre: "Cangrejo Gigante", stats: { M: 5, HA: 2, HP: 0, F: 5, R: 5, H: 3, I: 1, A: 3, L: 4 } },
            { nombre: "Cangrejo Descomunal", stats: { M: 5, HA: 2, HP: 0, F: 5, R: 5, H: 3, I: 1, A: 4, L: 4 } }
        ],
        options: [
            { n: "Pinzas Destrozadoras", p: 3, summary:"+1F." }
        ],
        command: { c: { n: "Cangrejo Descomunal", p: 8 } }
        // Removed champItems: 1
    },

    // === RARE ===
    "Reina Bess": {
        faction: "vcosta",
        foc: "Rare",
        warning: "0-1",
        points: 150,
        min: 1,
        max: 1,
        equipo: "Dotación (3) con Arma de mano.",
        reglasEspeciales: "No muertos. Dispara como Cañón (Alc 72\", F10, HM(1D6), Niega TSA). Mover y disparar. No puede unirse Maestro Artillero.", // War Machine
        perfiles: [
            { nombre: "Reina Bess", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: 4, I: "-", A: "-", L: "-" } }, // Stats from text
            { nombre: "Artillero Pirata Zombi (3)", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 4, H: 1, I: 0, A: 1, L: 3 } }
        ]
    },
    "Leviatán Costras Verdes": {
        faction: "vcosta",
        foc: "Rare",
        points: 190,
        min: 1,
        max: 1, // Assumed 0-1, PDF doesn't specify limit
        equipo: "Pinzas (Arma de mano).",
        reglasEspeciales: "No muerto, Cruzar (elementos acuáticos), Piel Escamosa (2+), Terror, Objetivo Grande, Indesmoralizable, Golpe Letal Heroico.", // Monster
        perfiles: [
            { nombre: "Leviatán Costras Verdes", stats: { M: 6, HA: 3, HP: 0, F: 6, R: 6, H: 6, I: 2, A: 5, L: 6 } }
        ],
        options: [
            { n: "Pinzas Afiladas", p: 10, summary:"Poder de Penetración." }
        ]
    },
    "Terror Abisal": {
        faction: "vcosta",
        foc: "Rare",
        points: 150,
        min: 1,
        max: 1, // Assumed 0-1
        equipo: "Garras y Dientes (Arma de mano).",
        reglasEspeciales: "No muerto, Cruzar (elementos acuáticos), Regeneración (4+), Terror, Objetivo Grande, Indesmoralizable, Múltiples Heridas (1D3), Ataques Envenenados.", // Monster
        perfiles: [
            { nombre: "Terror Abisal", stats: { M: 6, HA: 3, HP: 0, F: 5, R: 5, H: 5, I: 2, A: 5, L: 6 } }
        ]
    },
    "Cazador Fúnebre": {
        faction: "vcosta",
        foc: "Rare",
        warning: "0-1",
        points: 65,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "No Muerto, Cruzar (elementos acuáticos), Etéreo, Terror, Flotar.", // Monstrous Beast? Infantry? Assumed Infantry based on profile/size.
        perfiles: [
            { nombre: "Cazador Fúnebre", stats: { M: 6, HA: 3, HP: 0, F: 5, R: 5, H: 4, I: 2, A: 4, L: 8 } }
        ]
    },

    // === LORDS ===
    "Almirante de la Flota Vampiro": {
        faction: "vcosta",
        foc: "Lord",
        points: 165,
        min: 1, max: 1, // Character
        equipo: "Arma de mano.",
        reglasEspeciales: "No muerto, Vampiro, Cruzar (elementos acuáticos).", // Infantry
        perfiles: [
            { nombre: "Almirante de la Flota Vampiro", stats: { M: 6, HA: 7, HP: 5, F: 5, R: 5, H: 3, I: 7, A: 5, L: 10 } }
        ],
        options: [
            { n: "Armadura ligera", p: 2 },
            { n: "Armadura pesada", p: 4 },
            { n: "Escudo", p: 2 },
            { n: "Pistola", p: 4 },
            { n: "Ristra de pistolas", p: 7 }
            // No armas mágicas ni armaduras mágicas permitidas (Validated by ruleset)
        ],
        magicLevel: 1,
        magicOptions: [{ level: 2, cost: 35 }],
        magicLores: ["Nigromancia", "Muerte", "Sombras"],
        mounts: ["Pesadilla", "Corcel Infernal", "Terror Abisal (montura)"], // Custom mount name needed for data lookup
         maxMagicItems: 3, // Max 100 points, excluding weapon/armor
        maxRelics: 1,
        maxSkills: { limit: 50, type: 'points'} // Max 50 points
    },

    // === HEROES ===
    "Capitán de la Flota Vampiro": {
        faction: "vcosta",
        foc: "Hero",
        points: 80,
        min: 1, max: 1, // Character
        equipo: "Arma de mano.",
        reglasEspeciales: "No muerto, Vampiro, Cruzar (elementos acuáticos).", // Infantry
        perfiles: [
            { nombre: "Capitán de la Flota Vampiro", stats: { M: 6, HA: 6, HP: 5, F: 4, R: 5, H: 2, I: 6, A: 4, L: 8 } }
        ],
        options: [
            { n: "Armadura ligera", p: 2 },
            { n: "Armadura pesada", p: 4 },
            { n: "Escudo", p: 2 },
            { n: "Pistola", p: 4 },
            { n: "Ristra de pistolas", p: 7 }
        ],
        magicLevel: 0,
        magicOptions: [{ level: 1, cost: 35 }],
        magicLores: ["Nigromancia", "Muerte", "Sombras"],
        mounts: ["Pesadilla", "Corcel Infernal"],
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 },
         maxMagicItems: 3, // Max 50 points, excluding weapon/armor
        maxSkills: { limit: 25, type: 'points'} // Max 25 points
    },
    "Maestro Artillero Tumulario": {
        faction: "vcosta",
        foc: "Hero",
        points: 40,
        min: 1, max: 1, // Character
        equipo: "Arma de mano, Armadura pesada.",
        reglasEspeciales: "No muerto, Cruzar (elementos acuáticos).", // Infantry
        perfiles: [
            { nombre: "Maestro Artillero Tumulario", stats: { M: 4, HA: 3, HP: 3, F: 4, R: 4, H: 2, I: 2, A: 2, L: 5 } }
        ],
        options: [
            { n: "Mosquete de repetición", p: 5 },
            { n: "Trabuco", p: 5 }
        ],
        maxMagicItems: 2,
    },
    "Tumulario Comodoro": {
        faction: "vcosta",
        foc: "Hero",
        points: 55,
        min: 1, max: 1, // Character
        equipo: "Arma de mano, Armadura pesada.",
        reglasEspeciales: "No muerto, Cruzar (elementos acuáticos).", // Infantry
        perfiles: [
            { nombre: "Tumulario Comodoro", stats: { M: 4, HA: 3, HP: 2, F: 4, R: 4, H: 2, I: 2, A: 3, L: 5 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 2 },
            { n: "Arma a dos manos", p: 4 },
            { n: "Alabarda", p: 2 },
            { n: "Escudo", p: 2 }
        ],
        mounts: ["Corcel Esquelético"],
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 },
        maxMagicItems: 2,
    },
    "Sirena Espectral": {
        faction: "vcosta",
        foc: "Hero",
        points: 40,
        min: 1, max: 1, // Character
        equipo: "Arma de mano.",
        reglasEspeciales: "No Muerto, Cruzar (elementos acuáticos), Etéreo, Terror, Flotar, Melodía de las Profundidades.", // Infantry
        perfiles: [
            { nombre: "Sirena Espectral", stats: { M: 6, HA: 3, HP: 0, F: 3, R: 3, H: 2, I: 4, A: 2, L: 8 } }
        ],
        magicLevel: 0,
        magicOptions: [{ level: 1, cost: 30 }],
        magicLores: ["Nigromancia", "Muerte", "Sombras"],
        maxMagicItems: 1,
    }
};

const mountsDB_vcosta = {
    "Pesadilla": {
        faction: "vcosta",
        points: 8,
        perfiles: [ { nombre: "Pesadilla", stats: { M: 8, HA: 3, HP: 0, F: 3, R: 3, H: 1, I: 2, A: 1, L: 5 } } ],
        reglasEspeciales: "Bestia. No Muerto.",
        options: [{ n: "Barda", p: 4 }]
    },
    "Corcel Infernal": {
        faction: "vcosta",
        points: 18,
        perfiles: [ { nombre: "Corcel Infernal", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 1, A: 2, L: 5 } } ],
        reglasEspeciales: "Bestia Monstruosa. Caballería Monstruosa. No Muerto, Volar, Terror." // Note: Not explicitly Cab Monstruosa in PDF, but fits type
    },
    "Terror Abisal (montura)": { // Specific name for mount lookup
        faction: "vcosta",
        points: 150, // Cost is same as unit, character replaces default rider? Assuming character cost is separate.
        perfiles: [ { nombre: "Terror Abisal", stats: { M: 6, HA: 3, HP: 0, F: 5, R: 5, H: 5, I: 2, A: 5, L: 6 } } ],
        reglasEspeciales: "Monstruo. No Muerto, Cruzar (elementos acuáticos), Regeneración (4+), Terror, Objetivo Grande, Indesmoralizable, Múltiples Heridas (1D3), Ataques Envenenados."
    },
    "Corcel Esquelético": {
        faction: "vcosta",
        points: 10,
        perfiles: [ { nombre: "Corcel Esquelético", stats: { M: 8, HA: 2, HP: 0, F: 3, R: 3, H: 1, I: 2, A: 1, L: 5 } } ],
        reglasEspeciales: "Bestia. No Muerto.",
        options: [{ n: "Barda", p: 2 }]
    }
};

const magicItemsDB_vcosta = {
    // --- ARMAS MÁGICAS --- (Vampires cannot take these)
    "Arma Mágica": {
        "Sable del Terror Negro": { points: 60, faction: "vcosta", relic: true, summary: "AM. +1F. Herida no salvada -> chequeo Terror Ld-3." },
        "Alfanje de los Malditos": { points: 40, faction: "vcosta", relic: false, summary: "AM. +1A. Cada herida no salvada -> 1D6: 6 = 1H adicional." },
        "Espada de los Ahogados": { points: 20, faction: "vcosta", relic: false, summary: "AM. Ignora TSA." },
        "Florete Espectral": { points: 15, faction: "vcosta", relic: false, summary: "AM. Golpes Etéreos." },
        "Tridente de las Profundidades": { points: 15, faction: "vcosta", relic: false, summary: "AM (requiere 2 manos). +1F. Cada herida salvada por TSA -> chequeo I o I1." }
    },
    // --- ARMADURAS MÁGICAS --- (Vampires cannot take these)
    "Armadura Mágica": {
        "Armadura de Caparazón": { points: 40, faction: "vcosta", relic: true, summary: "AP. +1R. Enemigos CaC chequean I o I1." },
        "Coraza de la Mala Suerte": { points: 15, faction: "vcosta", relic: false, summary: "AL. TSA 6+. Oponente repite TSE exitosas." },
        "Escudo del Corsario": { points: 10, faction: "vcosta", relic: false, summary: "Escudo. +1 TSA vs disparos." }
    },
    // --- TALISMANES ---
    "Talismán": {
        "Perla Negra": { points: 50, faction: "vcosta", relic: true, summary: "Un uso. Fase magia: Tira 1D6 por hechizo lanzado (amigo/enemigo). 4+ = +1 dado invocación." },
        "Collar de Dientes de Tiburón": { points: 30, faction: "vcosta", relic: false, summary: "TSE 5+. Unidad: Miedo (Bestias)." },
        "Medallón del Contramaestre": { points: 25, faction: "vcosta", relic: false, summary: "RM(1). Repite chequeos psicología fallidos (portador y unidad)." },
        "Moneda de la Mala Suerte": { points: 20, faction: "vcosta", relic: false, summary: "Un uso. Oponente impacta CaC/Disparo -> TSE 2+ vs esa herida." }
    },
    // --- ARTEFACTOS ARCANOS ---
    "Artefacto Arcano": {
        "Brújula Maldita": { points: 50, faction: "vcosta", relic: true, summary: "Portahechizos(3). Maldición 24\": Unidad chequea L o -1HA/HP (1 turno)." },
        "Tomo Maldito": { points: 40, faction: "vcosta", relic: false, summary: "+1 Hechizo (cualquier saber disponible)." },
        "Pergamino Arcano": { points: 20, faction: "vcosta", relic: false, summary: "+1 Dado energía/fase." },
        "Vara de Poder Arcano": { points: 15, faction: "vcosta", relic: false, summary: "Un uso. +1D6 dados energía (pueden superar máx)." }
    },
    // --- OBJETOS HECHIZADOS ---
    "Objeto Hechizado": {
        "Botella de Ron del Muerto": { points: 40, faction: "vcosta", relic: true, summary: "Un uso. Inicio turno: Unidad +1F, Odio (todos)." },
        "Mapa del Tesoro Maldito": { points: 35, faction: "vcosta", relic: false, summary: "Un uso. +1 dado invocación/turno. Tras usar, 1D6: 1=unidad sufre 1D6 imp F3." },
        "Catalejo Espectral": { points: 25, faction: "vcosta", relic: false, summary: "Unidad gana Disparos Múltiples(2)." },
        "Calavera Cantora": { points: 15, faction: "vcosta", relic: false, summary: "Unidad cuenta como Músico. Causa Miedo." }
    },
    // --- ESTANDARTES MÁGICOS ---
    "Estandarte Mágico": {
        "Bandera del Terror de los Mares": { points: 50, faction: "vcosta", relic: true, summary: "Enemigos 12\": -1L." },
        "Bandera Fantasmal": { points: 40, faction: "vcosta", relic: false, summary: "Unidad: Flotar." },
        "Sudario Espectral": { points: 35, faction: "vcosta", relic: false, summary: "Unidad: Regeneración(6+)." },
        "Reliquia del Cementerio Marino": { points: 35, faction: "vcosta", relic: false, summary: "Unidad: +1 dado invocación/turno (inicio turno propio)." },
        "Banderola de salvas": { points: 35, faction: "vcosta", relic: false, summary: "Unidad: Repite 1s impactar (proyectiles)." },
        "La Bandera del Navío": { points: 30, faction: "vcosta", relic: false, summary: "Enemigos en contacto: no bonos por estandarte/BSB." },
        "El cofre del Muerto": { points: 25, faction: "vcosta", relic: false, summary: "Sólo Infantería zombi. Un uso. Inicio fase CaC: +1A, Reg(6+) hasta fin fase." },
        "Bandera del Abordaje": { points: 25, faction: "vcosta", relic: false, summary: "Sólo Infantería zombi. +1M, +2I." },
        "La Bandera del Ron": { points: 20, faction: "vcosta", relic: false, summary: "Unidad: +1HA." },
        "El muerto colgado": { points: 15, faction: "vcosta", relic: false, summary: "Ignora bonificador superioridad numérica enemiga. -1 herida si pierde combate." },
        "Calavera Perdida": { points: 10, faction: "vcosta", relic: false, summary: "Sólo Infantería. Hechicero canaliza 18\": restaurar 1 miniatura." }
    }
};

const armySkillsDB_vcosta = { // Sobrenombres de Alta Mar
    "Sobrenombre de Alta Mar": {
        "El Sin Corazón": { points: 25, faction: "vcosta", type: "Sobrenombre de Alta Mar", skillSource: 'Sobrenombres de Alta Mar', summary: "Odio (todos)." },
        "El Impío": { points: 20, faction: "vcosta", type: "Sobrenombre de Alta Mar", skillSource: 'Sobrenombres de Alta Mar', summary: "+1 Nivel Magia." },
        "El Ahogado": { points: 20, faction: "vcosta", type: "Sobrenombre de Alta Mar", skillSource: 'Sobrenombres de Alta Mar', summary: "Regeneración(5+)." },
        "El Tuerto": { points: 15, faction: "vcosta", type: "Sobrenombre de Alta Mar", skillSource: 'Sobrenombres de Alta Mar', summary: "+1HP." },
        "El Sanguinario": { points: 15, faction: "vcosta", type: "Sobrenombre de Alta Mar", skillSource: 'Sobrenombres de Alta Mar', summary: "Furia Asesina." },
        "El Intrépido": { points: 10, faction: "vcosta", type: "Sobrenombre de Alta Mar", skillSource: 'Sobrenombres de Alta Mar', summary: "+1HA." },
        "El Infame": { points: 10, faction: "vcosta", type: "Sobrenombre de Alta Mar", skillSource: 'Sobrenombres de Alta Mar', summary: "Miedo." },
        "El Inmortal": { points: 10, faction: "vcosta", type: "Sobrenombre de Alta Mar", skillSource: 'Sobrenombres de Alta Mar', summary: "+1H." },
        "El Temerario": { points: 5, faction: "vcosta", type: "Sobrenombre de Alta Mar", skillSource: 'Sobrenombres de Alta Mar', summary: "+1F." },
        "El Audaz": { points: 5, faction: "vcosta", type: "Sobrenombre de Alta Mar", skillSource: 'Sobrenombres de Alta Mar', summary: "+1I." }
    }
};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Costa del Vampiro",
    FACTION_ID: "vcosta",
    armySkillsLabel: "Sobrenombres",
    FOC_CONFIG: {
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_vcosta,
    mountsDB: mountsDB_vcosta,
    magicItemsDB: magicItemsDB_vcosta,
    armySkillsDB: armySkillsDB_vcosta,
    specialProfilesDB: {} // No special profiles needed
};


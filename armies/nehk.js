// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: NEHEKHARA ---
// ===================================================================================
// Last Updated: 2025-10-26 - v4.0
import { commonMagicItemsDB } from '../comun.js'; // Assuming common items are shared

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_nehk = {
    // === CORE ===
    "Esqueletos": {
        faction: "nehk",
        foc: "Core",
        points: 4,
        min: 10,
        max: 40,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "No muertos.",
        perfiles: [
            { nombre: "Esqueleto", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 2, A: 1, L: 6 } },
            { nombre: "Oficial esqueleto", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 2, A: 2, L: 6 } }
        ],
        options: [
            { n: "Lanza", p: 1 },
            { n: "Escudo", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 4 }, s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } },
        magicBanner: 25
    },
    "Arqueros Esqueleto": {
        faction: "nehk",
        foc: "Core",
        points: 6,
        min: 10,
        max: 30,
        equipo: "Arma de mano, Arco y Armadura ligera.",
        reglasEspeciales: "No muertos, Flechas Aspid.",
        perfiles: [
            { nombre: "Arquero Esqueleto", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 2, A: 1, L: 6 } }, // HP2 based on profile table
            { nombre: "Oficial esqueleto", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 2, A: 1, L: 6 } } // HP3 for Oficial
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } }
    },
    "Caballería Esquelética": {
        faction: "nehk",
        foc: "Core",
        points: 14,
        min: 5,
        max: 20,
        equipo: "Arma de mano, Lanza y Armadura ligera.",
        montura: "Corceles esqueléticos",
        reglasEspeciales: "No muertos, Caballería rápida, Bendición de Khsar.",
        perfiles: [
            { nombre: "Jinete Esqueleto", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 2, A: 1, L: 6 } },
            { nombre: "Oficial esqueleto", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 2, A: 2, L: 6 } },
            { nombre: "Corcel esquelético", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 4 } }
        ],
        options: [
            { n: "Escudo", p: 1 },
            { n: "Jabalinas de aspid", p: 1, summary:"No aplican modificadores para impactar." }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },
    "Arqueros a Caballo": {
        faction: "nehk",
        foc: "Core",
        points: 15,
        min: 5,
        max: 20,
        equipo: "Arma de mano y Arco.",
        montura: "Corceles esqueléticos",
        reglasEspeciales: "No muertos, Caballería rápida, Flechas áspid, Bendición de Khsar.",
        perfiles: [
            { nombre: "Arquero Esqueleto", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 2, A: 1, L: 6 } },
            { nombre: "Oficial esqueleto", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 2, A: 2, L: 6 } }, // Assuming A2 for Oficial like cavalry
            { nombre: "Corcel esquelético", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 4 } }
        ],
        options: [
            { n: "Armadura ligera", p: 2 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } }
    },
    "Carros de Guerra Ligeros": {
        faction: "nehk",
        foc: "Core",
        warning: "Máximo una unidad por cada otra unidad básica (no carros).",
        points: 40,
        min: 2,
        max: 5,
        equipo: "Aurigas (2) con Lanza y Arco.",
        tiradoPor: "Corceles esqueléticos (2)",
        reglasEspeciales: "No muertos, Flechas áspid, TSA 5+, Impactos por Carga (1D3). Potencia unidad 3.",
        perfiles: [
            { nombre: "Carro de guerra", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 4, H: 3, I: "-", A: "-", L: "-" } },
            { nombre: "Auriga Esqueleto (2)", stats: { M: "-", HA: 2, HP: 2, F: 3, R: "-", H: "-", I: 2, A: 1, L: 6 } }, // A1 per profile
            { nombre: "Oficial esqueleto", stats: { M: "-", HA: 2, HP: 2, F: 3, R: "-", H: "-", I: 2, A: 2, L: 6 } }, // Placeholder for Oficial if promoted
            { nombre: "Corcel esquelético (2)", stats: { M: 8, HA: 2, HP: 0, F: 4, R: "-", H: "-", I: 1, A: 1, L: 4 } }
        ],
        options: [
            { n: "Cambiar lanzas por alabardas", p: 2 },
            { n: "Cuchillas en las ruedas", p: 5 }
        ],
        command: { // Special command group structure for chariots
            c: { n: "Convertir un auriga en Oficial", p: 10, appliesTo:"model" },
            s: { n: "Convertir un auriga en Portaestandarte", p: 10, appliesTo:"model" },
            m: { n: "Convertir un auriga en Músico", p: 10, appliesTo:"model" }
        },
        magicBanner: 50
    },

    // === SPECIAL ===
    "Guardia del Sepulcro": {
        faction: "nehk",
        foc: "Special",
        points: 11,
        min: 10,
        max: 30,
        equipo: "Arma de mano funeraria y Armadura ligera.",
        reglasEspeciales: "No muertos, Armas funerarias (Ataques mágicos, Golpe letal).",
        perfiles: [
            { nombre: "Guardia del Sepulcro", stats: { M: 4, HA: 3, HP: 3, F: 4, R: 4, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 3, F: 4, R: 4, H: 1, I: 3, A: 2, L: 7 } }
        ],
        options: [
            { n: "Alabarda funeraria", p: 2 },
            { n: "Arma a dos manos funeraria", p: 1 },
            { n: "Escudo", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50,
        champItems: 25
    },
    "Ushabtis": {
        faction: "nehk",
        foc: "Special",
        points: 50,
        min: 3,
        max: 6,
        equipo: "Arma a dos manos y Armadura ligera.",
        reglasEspeciales: "No muertos, Constructos (TSA 5+, -1H por inestable), Flechas áspid (si arco).",
        perfiles: [
            { nombre: "Ushabti", stats: { M: 5, HA: 4, HP: 3, F: 4, R: 5, H: 3, I: 3, A: 3, L: 8 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 3, F: 4, R: 5, H: 3, I: 3, A: 4, L: 8 } }
        ],
        options: [
            { n: "Sustituir A2M por Alabardas", p: 0, exclusiveGroup:"weapon" },
            { n: "Sustituir A2M por Armas de mano adicionales", p: 0, exclusiveGroup:"weapon" },
            { n: "Sustituir A2M por Arcos Compuestos", p: 10, summary:"Alc 30\", F5, PP", exclusiveGroup:"weapon" }
        ],
        command: { c: { n: "Oficial", p: 8 } }
    },
    "Enjambres Funerarios": {
        faction: "nehk",
        foc: "Special",
        points: 10,
        min: 2,
        max: 6,
        equipo: "Ninguno (Arma de mano).",
        reglasEspeciales: "No muertos, Ataques envenenados.", // Swarm type
        perfiles: [
            { nombre: "Enjambre funerario", stats: { M: 5, HA: 3, HP: 0, F: 2, R: 2, H: 4, I: 1, A: 5, L: 4 } }
        ],
        options: [
            { n: "Avance subterráneo", p: 10 }
        ]
    },
    "Gólem Escorpión": {
        faction: "nehk",
        foc: "Special",
        points: 80,
        min: 1,
        max: 1,
        equipo: "Pinzas (Arma de mano).",
        reglasEspeciales: "No muerto, Constructo, Golpe letal, Ataque envenenados, RM(1), Piel escamosa(6+), Avance subterráneo.", // Beast Monstruosa
        perfiles: [
            { nombre: "Gólem escorpión", stats: { M: 7, HA: 4, HP: 0, F: 5, R: 5, H: 4, I: 3, A: 4, L: 8 } }
        ]
    },
    "Buitres de Nehekhara": {
        faction: "nehk",
        foc: "Special",
        points: 23,
        min: 2,
        max: 6,
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "No muertos, Volar, Hostigadores.", // Beast type
        perfiles: [
            { nombre: "Buitre de Nehekhara", stats: { M: 2, HA: 3, HP: 0, F: 4, R: 4, H: 2, I: 3, A: 2, L: 4 } }
        ]
    },
    "Lanzavirotes de Hueso": {
        faction: "nehk",
        foc: "Special",
        points: 40,
        min: 1,
        max: 2,
        equipo: "Dotación (2) con Arma de mano y Armadura ligera.",
        reglasEspeciales: "Dispara como lanzavirotes. No muertos, Flechas áspid, Ataques mágicos.", // War Machine
        perfiles: [
            { nombre: "Lanzavirotes", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: "-", I: "-", A: "-", L: "-" } }, // H embedded in Dotacion? Assume R7 H2 base like others.
            { nombre: "Dotación Esqueleto (2)", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 2, A: 1, L: 6 } } // Combining H from profile text
             // R7 H2 assumption:
            // { nombre: "Lanzavirotes", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: 2, I: "-", A: "-", L: "-" } },
            // { nombre: "Dotación Esqueleto (2)", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 2, A: 1, L: 6 } }
        ]
    },
    "Acechadores Sepulcrales": {
        faction: "nehk",
        foc: "Special",
        points: 70,
        min: 2,
        max: 4,
        equipo: "Alabarda y Armadura ligera.",
        reglasEspeciales: "No muertos, Constructos, Mirada maldita (Disparo D.Artillería imp F2, no TSA, mágicos).", // Beast Monstruosa
        perfiles: [
            { nombre: "Acechador Sepulcral", stats: { M: 7, HA: 3, HP: 3, F: 5, R: 5, H: 4, I: 3, A: 3, L: 8 } }
        ]
    },
    "Lanzacráneos": {
        faction: "nehk",
        foc: "Special",
        points: 65,
        min: 1,
        max: 1,
        equipo: "Dotación (3) con Arma de mano y Armadura ligera.",
        reglasEspeciales: "Dispara como catapulta. No muertos, Ataques flamígeros, Ataques mágicos. Causa Pánico si baja.", // War Machine
        perfiles: [
            { nombre: "Catapulta lanzacráneos", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: "-", I: "-", A: "-", L: "-" } }, // Assume R7 H3
            { nombre: "Dotación Esqueleto (3)", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 2, A: 1, L: 6 } } // Combining H from profile text
             // R7 H3 assumption:
            // { nombre: "Catapulta lanzacráneos", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: 3, I: "-", A: "-", L: "-" } },
            // { nombre: "Dotación Esqueleto (3)", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 2, A: 1, L: 6 } }
        ],
        options: [
            { n: "Cráneos del enemigo", p: 10, summary:"-1L a chequeos pánico causados." }
        ]
    },

    // === RARE ===
    "Coloso Necrolítico": {
        faction: "nehk",
        foc: "Rare",
        points: 185,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura pesada.",
        reglasEspeciales: "No muerto, Constructo, Asalto imparable (+1A por herida causada).", // Monstruo
        perfiles: [
            { nombre: "Coloso necrolitico", stats: { M: 6, HA: 3, HP: 3, F: 6, R: 6, H: 6, I: 1, A: 4, L: 8 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 5, exclusiveGroup:"weapon" },
            { n: "Arma a dos manos", p: 5, exclusiveGroup:"weapon" },
            { n: "Arco del desierto", p: 25, summary:"Lanzavirotes (flechas áspid). Mover y disparar.", exclusiveGroup:"weapon" }
        ]
    },
    "Hierotitán": {
        faction: "nehk",
        foc: "Rare",
        warning: "0-1",
        points: 265,
        min: 1,
        max: 1,
        equipo: "Dos Armas de mano y Armadura pesada.",
        reglasEspeciales: "No muerto, Constructo, RM(1), Conducto espiritual (+1D6 curación a 12\"). Nivel Mágico 2 (Saber Nehekhara).", // Monstruo
        perfiles: [
            { nombre: "Hierotitán", stats: { M: 6, HA: 2, HP: 2, F: 6, R: 6, H: 6, I: 1, A: 4, L: 8 } }
        ]
    },
    "Necroesfinge": {
        faction: "nehk",
        foc: "Rare",
        warning: "0-1",
        points: 275,
        min: 1,
        max: 1,
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "No muerto, Constructo, Volar, Piel de piedra (TSA 2+ total), Golpe letal, Golpe decapitador (+1A F10 GL Heroico).", // Monstruo
        perfiles: [
            { nombre: "Necroesfinge", stats: { M: 6, HA: 4, HP: 0, F: 6, R: 6, H: 5, I: 2, A: "5+1", L: 8 } } // A base 5 + 1 special attack
        ]
    },
    "Esfinge de Guerra de Nehekhara": {
        faction: "nehk",
        foc: "Rare",
        points: 235,
        min: 1,
        max: 1,
        equipo: "Guardias del Sepulcro (4) con Alabardas funerarias.",
        reglasEspeciales: "No muerto, Constructo, Armas funerarias (Guardia), Piel de piedra (TSA 2+ total).", // Monstruo with crew
        perfiles: [
            { nombre: "Esfinge de Guerra", stats: { M: 7, HA: 4, HP: 0, F: 7, R: 7, H: 5, I: 1, A: 4, L: 8 } },
            { nombre: "Guardia del Sepulcro (4)", stats: { M: "-", HA: 3, HP: 2, F: 4, R: "-", H: "-", I: 3, A: 1, L: 8 } } // Crew attacks (total 4), uses own stats. HP2 assumed typo for HP-.
        ],
        options: [
            { n: "Aguijón", p: 15, summary:"+1A Veneno, HM(1D3)." },
            { n: "Exhalación sortílega", p: 20, summary:"Arma Aliento F3, Mágico." }
        ]
    },

    // === LORDS ===
    "Rey Funerario": {
        faction: "nehk",
        foc: "Lord",
        points: 175,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "No muerto, Inflamable, La maldición, ¡Hágase mi voluntad! (Portahechizos N.Energía 6, Viento Khsar).",
        perfiles: [
            { nombre: "Rey Funerario", stats: { M: 4, HA: 6, HP: 5, F: 5, R: 5, H: 4, I: 3, A: 4, L: 10 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 5 },
            { n: "Alabarda", p: 5 },
            { n: "Arma de mano adicional", p: 3 },
            { n: "Mayal", p: 4 },
            { n: "Lanza", p: 6 }, // Typically for mounts
            { n: "Arco con flechas áspid", p: 5 },
            { n: "Escudo", p: 3 }
        ],
        mounts: ["Carro de guerra", "Esfinge de guerra de Nehekhara"],
        maxMagicItems: 3,
        maxRelics: 1
    },
    "Sumo Sacerdote Funerario": {
        faction: "nehk",
        foc: "Lord",
        armyRequirement: "Hierofante", // Must have at least one Priest/High Priest
        points: 180,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "No muerto, Regeneración (6+). Nivel Mágico 3.",
        perfiles: [
            { nombre: "Sumo sacerdote funerario", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 4, H: 4, I: 2, A: 1, L: 9 } }
        ],
        options: [
            { n: "Nivel de Magia 4", p: 35 }
            // Needs Lore Selection logic (Nehekhara, Death, Light)
        ],
        mounts: ["Corcel esquelético", "Arca de las Almas"],
        maxMagicItems: 3,
        maxRelics: 1
    },

    // === HEROES ===
    "Príncipe Funerario": {
        faction: "nehk",
        foc: "Hero",
        points: 100,
        min: 1,
        max: 1, // Placeholder
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "No muerto, Inflamable, La maldición (-1L), ¡Hágase mi voluntad! (Portahechizos N.Energía 4, Viento Khsar).",
        perfiles: [
            { nombre: "Príncipe Funerario", stats: { M: 4, HA: 5, HP: 4, F: 4, R: 5, H: 3, I: 2, A: 3, L: 9 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 3 },
            { n: "Alabarda", p: 3 },
            { n: "Arma de mano adicional", p: 2 },
            { n: "Mayal", p: 2 },
            { n: "Lanza", p: 4 },
            { n: "Arco con flechas áspid", p: 3 },
            { n: "Escudo", p: 2 }
        ],
        mounts: ["Carro de guerra"],
        maxMagicItems: 2,
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 }
    },
    "Heraldo del Sepulcro": {
        faction: "nehk",
        foc: "Hero",
        points: 80,
        min: 1,
        max: 1, // Placeholder
        equipo: "Arma de mano funeraria y Armadura ligera.",
        reglasEspeciales: "No muerto, Inflamable, Armas funerarias, Orgullo marcial, Sumo Celador (Tozudez si con Guardia Sepulcro).",
        perfiles: [
            { nombre: "Heraldo del sepulcro", stats: { M: 4, HA: 4, HP: 3, F: 5, R: 5, H: 3, I: 2, A: 3, L: 8 } } // F5, R5 based on profile table
        ],
        options: [
            { n: "Arma a dos manos funeraria", p: 3 },
            { n: "Alabarda funeraria", p: 3 },
            { n: "Arma de mano adicional funeraria", p: 2 },
            { n: "Mayal funerario", p: 2 },
            { n: "Lanza funeraria", p: 4 }, // Lanza usually needs mount context?
            { n: "Escudo", p: 2 }
        ],
        mounts: ["Corcel esquelético", "Carro de guerra"],
        maxMagicItems: 2,
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 }
    },
    "Sacerdote Funerario": {
        faction: "nehk",
        foc: "Hero",
        armyRequirement: "Hierofante", // Must have at least one Priest/High Priest
        points: 80,
        min: 1,
        max: 1, // Placeholder
        equipo: "Arma de mano.",
        reglasEspeciales: "No muerto, Regeneración (6+). Nivel Mágico 1.",
        perfiles: [
            { nombre: "Sacerdote funerario", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 3, I: 2, A: 1, L: 8 } }
        ],
        options: [
            { n: "Nivel de Magia 2", p: 35 }
             // Needs Lore Selection logic (Nehekhara, Death, Light)
        ],
        mounts: ["Corcel esquelético"],
        maxMagicItems: 2
    },
    "Necrotecto": {
        faction: "nehk",
        foc: "Hero",
        points: 50,
        min: 1,
        max: 1, // Placeholder
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "No muerto, Inflamable, Ira del Creador (Odio para unidad), Forjador arcano (Cura 1D3+1 a Constructo 12\").",
        perfiles: [
            { nombre: "Necrotecto", stats: { M: 4, HA: 3, HP: 3, F: 4, R: 4, H: 2, I: 2, A: 2, L: 8 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 2 }
        ],
        maxMagicItems: 2
    }
};

const mountsDB_nehk = {
    "Corcel esquelético": {
        faction: "nehk",
        points: 15, // Cost for Sumo Sacerdote
        // points: 10, // Cost for Heraldo/Sacerdote
        perfiles: [ { nombre: "Corcel esquelético", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 3 } } ], // L3 based on profile table
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. No muerto, Caballería rápida, Bendición de Khsar."
    },
    "Carro de guerra": { // Mount version
        faction: "nehk",
        points: 20, // Cost for Rey Funerario
        // points: 25, // Cost for Principe/Heraldo
        reglasEspeciales: "Carro. No muerto, TSA 5+, Impactos por Carga (1D3). Reemplaza tripulación.", // Potencia unidad handled by character
        perfiles: [ // Base carro + steeds
            { nombre: "Carro de guerra (montura)", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 4, H: 3, I: "-", A: "-", L: "-" } },
            { nombre: "Corcel esquelético (2)", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 4 } }
        ],
         options: [ // Options apply to mount version? Assume yes.
            { n: "Cuchillas en las ruedas", p: 5 }
        ]
    },
    "Esfinge de guerra de Nehekhara": { // Mount version
        faction: "nehk",
        points: 190, // Cost for Rey Funerario mount
        reglasEspeciales: "Monstruo. No muerto, Constructo, Piel de piedra (TSA 2+ total). Reemplaza tripulación.",
        perfiles: [
            { nombre: "Esfinge de Guerra (montura)", stats: { M: 7, HA: 4, HP: 0, F: 7, R: 7, H: 5, I: 1, A: 4, L: 8 } } // H5, R7 based on unit profile
        ],
        options: [
            { n: "Aguijón", p: 15, summary:"+1A Veneno, HM(1D3)." },
            { n: "Exhalación sortílega", p: 20, summary:"Arma Aliento F3, Mágico." }
        ]
    },
    "Arca de las Almas": { // Mount for Sumo Sacerdote
        faction: "nehk",
        points: 175,
        reglasEspeciales: "Carro. No muerto, Constructo, Terror, RM(2), Potencia Unidad 4, TSA 4+, TSE 4+. No mueve. Pacto poder (+1D3 dados energia). Espíritus condenados (Disparo especial).",
        perfiles: [
            { nombre: "Arca de las Almas", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 10, H: 4, I: "-", A: "-", L: "-" } }, // R10 H4 from profile table
            { nombre: "Guardianes del Arca (2)", stats: { M: 4, HA: 3, HP: 2, F: 4, R: "-", H: "-", I: 3, A: 2, L: 8 } } // HP2? Attacks seem combined (4). Assuming A2 per guardian. A2M Funerarias.
        ]
    }
};

const magicItemsDB_nehk = {
    // --- ARMAS MÁGICAS ---
    "Arma Mágica": {
        "Destructora de las Vidas Eternas": { points: 45, faction: "nehk", relic: true, summary: "A2M. Ataques flamígeros, niega TSA." },
        "Heka y Nehaja del Sol": { points: 40, faction: "nehk", relic: true, summary: "Sólo Rey Funerario. Armas emparejadas. +1F, +1HA, I10." },
        "Arco de Lybaras": { points: 35, faction: "nehk", relic: false, summary: "Arco áspid. Disparos múltiples (Ataques), F Usuario, Ataques envenenados." },
        "Espada del Dolor Eterno": { points: 30, faction: "nehk", relic: false, summary: "Arma mano. +1 resultado combate por baja causada en CaC." },
        "Mayal de Cráneos": { points: 30, faction: "nehk", relic: false, summary: "Mayal. Heridas múltiples (2), Causa Terror." },
        "Lanza de Antharak": { points: 30, faction: "nehk", relic: false, summary: "Lanza. Recupera 1H (portador/unidad/montura) por herida causada en CaC." },
        "Espada de Setep": { points: 25, faction: "nehk", relic: false, summary: "Arma mano. Poder penetración, +1 impactar en CaC." },
        "Khopesh del Verdugo": { points: 25, faction: "nehk", relic: false, summary: "Arma mano. Golpe letal. +1H permanente por baja con GL." },
        "Cetro Serpiente": { points: 15, faction: "nehk", relic: false, summary: "Sólo sacerdotes. Arma mano. Ataques envenenados. Repite herir fallido en CaC." }
    },
    // --- ARMADURAS MÁGICAS ---
    "Armadura Mágica": {
        "Armadura de la Eternidad": { points: 45, faction: "nehk", relic: true, summary: "Arm pesada. Inmune fuego, repite tiradas para herir exitosas contra portador." },
        "Armadura de las Eras": { points: 40, faction: "nehk", relic: false, summary: "Arm pesada. +1 Herida, Inmune Heridas múltiples." },
        "Armadura del Escorpión": { points: 20, faction: "nehk", relic: false, summary: "Arm placas. Portador/unidad sufre -1H por Inestable." },
        "Escudo de Ptra": { points: 15, faction: "nehk", relic: false, summary: "Escudo. Si salva en CaC, atacantes en contacto HA1 resto fase." },
        "Pellejo de Lagarto del Trueno": { points: 10, faction: "nehk", relic: false, summary: "Arm ligera. Piel escamosa (5+)." }
    },
    // --- TALISMANES ---
    "Talismán": {
        "Ankhra Dorada": { points: 50, faction: "nehk", relic: true, summary: "Regeneración (4+), Inmune fuego." },
        "Corona de los Reyes": { points: 50, faction: "nehk", relic: true, summary: "Sólo Rey funerario. RM(1). Inicio CaC: Unidad amiga No Muerta (12\") +1 impactar CaC." },
        "Ojo Dorado de Rah-Nutt": { points: 50, faction: "nehk", relic: true, summary: "Sólo montado en carro. Portador, carro y unidad carros: TSE 5+." },
        "Amuleto de Pha-Stah": { points: 35, faction: "nehk", relic: false, summary: "Anula Talismanes/Obj Hech/Art Arcanos enemigos en contacto. Portador no puede llevar Art Arcanos/Obj Hech." },
        "Pectoral de Shapesh": { points: 35, faction: "nehk", relic: false, summary: "Con 4+, herida sufrida pasa a miniatura amiga (8\"). TSE." },
        "Sello de Invocación de Djedra": { points: 30, faction: "nehk", relic: false, summary: "Restaura 2D6H en lugar de 1D6H con 'Los muertos inquietos' o similar." }
    },
    // --- OBJETOS HECHIZADOS ---
    "Objeto Hechizado": {
        "Kephra Azul": { points: 50, faction: "nehk", relic: true, summary: "Portador y unidades amigas (12\") +1RM. Si dispersa M.Oscura/Nigro/Caos/Hashut/Skaven con dado Kephra, destruye hechizo con 5+." },
        "Carro de Fuego": { points: 20, faction: "nehk", relic: false, summary: "Sólo montado en carro. Ataques flamígeros. Imp Carga: 2D6 elige mayor." },
        "Manto de las Dunas": { points: 30, faction: "nehk", relic: false, summary: "Sólo sacerdotes. Volar." },
        "Broche del Gran Desierto": { points: 25, faction: "nehk", relic: false, summary: "Un uso. Dispersa auto hechizo enemigo (no Fuerza Irresistible)." },
        "Cánope de Enkhil": { points: 25, faction: "nehk", relic: false, summary: "Portahechizos(4). Maldición: Dispersa hechizos enemigos permanentes." },
        "Máscara Mortuoria de Kharnut": { points: 20, faction: "nehk", relic: false, summary: "Yelmo (+1TSA). Causa Terror (12\")." },
        "Icono del Héroe": { points: 15, faction: "nehk", relic: false, summary: "Sólo montado en carro. +3 Potencia Unidad carro." },
        "Brazaletes del Sol": { points: 15, faction: "nehk", relic: false, summary: "Enemigo en contacto -1A (min 1)." }
    },
    // --- ARTEFACTOS ARCANOS ---
    "Artefacto Arcano": {
        "Tablillas de los Poderosos Cánticos de Neferra": { points: 35, faction: "nehk", relic: true, summary: "Repite 1 dado energia al lanzar. Con 1-2 en 1D6, no más usos este turno." },
        "Báculo de las Plagas": { points: 30, faction: "nehk", relic: true, summary: "Portahechizos(6). Daño Directo (18\"): 3D6 imp F2, no TSA. Causa Pánico si baja." },
        "Báculo de la Maestría": { points: 30, faction: "nehk", relic: false, summary: "Canaliza energía/dispersión con 2+." },
        "Pergamino de la Vitalidad de Menkaure": { points: 20, faction: "nehk", relic: false, summary: "Un uso. Portahechizos(2D6+1). Viento Khsar potenciado." },
        "Pergamino de la furia sagrada de Khorekhab": { points: 20, faction: "nehk", relic: false, summary: "Un uso. Portahechizos(2D6+1). Castigo Ptra potenciado." },
        "Pergamino de Invocación Ultraterrena de Djedra": { points: 20, faction: "nehk", relic: false, summary: "Un uso. Portahechizos(2D6+1). Potenciación: Unidades No Muertas amigas (12\") recuperan 2D6H." },
        "Vaso Hierático": { points: 10, faction: "nehk", relic: false, summary: "Un uso. Lanza 1 hechizo sin dados energía (dificultad base, no potenciado)." }
    },
    // --- ESTANDARTES MÁGICOS ---
    "Estandarte Mágico": {
        "Estandarte de las Arenas": { points: 50, faction: "nehk", relic: true, summary: "Unidad: -2 impactar vs disparos. Plantillas impactan parcial." },
        "Pabellón del Ojo Sagrado": { points: 35, faction: "nehk", relic: false, summary: "Unidad (inc monturas): +1 impactar CaC primera ronda." },
        "Estandarte de los Espejismos": { points: 25, faction: "nehk", relic: false, summary: "Enemigo repite impactar exitoso vs unidad en fase disparo." },
        "Icono de Rakaph": { points: 25, faction: "nehk", relic: false, summary: "Un uso. Inicio turno: Reorganización gratuita (antes de cargas)." },
        "Estandarte de las Palabras Malditas": { points: 25, faction: "nehk", relic: false, summary: "Chequeos Miedo causados por unidad: 3D6 descarta bajo." },
        "Estandarte de las Legiones de Nehekhara": { points: 25, faction: "nehk", relic: false, summary: "Duplica H restauradas por 'Los muertos inquietos'." }
    }
};

const armySkillsDB_nehk = {}; // No specific skills system like runes or powers
const specialProfilesDB_nehk = {}; // No special profiles like fanatics

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Nehekhara",
    FACTION_ID: "nehk",
    armySkillsLabel: null,
    FOC_CONFIG: { // Standard FOC
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_nehk,
    mountsDB: mountsDB_nehk,
    magicItemsDB: magicItemsDB_nehk,
    armySkillsDB: armySkillsDB_nehk,
    specialProfilesDB: specialProfilesDB_nehk
};

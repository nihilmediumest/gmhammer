// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: ENANOS ---
// ===================================================================================
// Last Updated: 2025-10-25 - v4.1

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_ena = {
    // === CORE ===
    "Guerreros de clan": {
        faction: "ena",
        foc: "Core",
        points: 7,
        min: 10,
        max: 30,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Odio (Pielesverdes y skaven), Avance imparable.",
        perfiles: [
            { nombre: "Guerrero de clan", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 1, L: 9 } },
            { nombre: "Oficial", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 2, L: 9 } }
        ],
        options: [
            { n: "Lanza", p: 1 },
            { n: "Arma a dos manos", p: 2 },
            { n: "Escudo", p: 1 },
            { n: "Sustituir armadura ligera por pesada", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },
    "Ballesteros": {
        faction: "ena",
        foc: "Core",
        points: 11,
        min: 5,
        max: 30,
        equipo: "Arma de mano, Ballesta y Armadura ligera.",
        reglasEspeciales: "Odio (Pielesverdes y skaven), Avance imparable.",
        perfiles: [
            { nombre: "Ballestero", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 1, L: 9 } },
            { nombre: "Oficial", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 2, L: 9 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 2 },
            { n: "Escudo", p: 1 },
            { n: "Sustituir armadura ligera por pesada", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },
    "Atronadores": {
        faction: "ena",
        foc: "Core",
        points: 13,
        min: 5,
        max: 30,
        equipo: "Arma de mano, Arcabuz enano y Armadura ligera.",
        reglasEspeciales: "Odio (Pielesverdes y skaven), Avance imparable.",
        perfiles: [
            { nombre: "Atronador", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 1, L: 9 } },
            { nombre: "Oficial", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 2, L: 9 } }
        ],
        options: [
            { n: "Escudo", p: 1 },
            { n: "Sustituir armadura ligera por pesada", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },
    "Barbaslargas": {
        faction: "ena",
        foc: "Core",
        warning: "Máximo una unidad de Barbaslargas por cada unidad de guerreros de clan.",
        points: 10,
        min: 10,
        max: 30,
        equipo: "Arma de mano y Armadura pesada.",
        reglasEspeciales: "Odio (Pielesverdes y skaven), Avance imparable, Viejos cascarrabias (Inmunes al pánico, y unidades de enanos a 6\" también).",
        perfiles: [
            { nombre: "Barbaslargas", stats: { M: 3, HA: 5, HP: 3, F: 4, R: 4, H: 1, I: 2, A: 1, L: 9 } },
            { nombre: "Oficial", stats: { M: 3, HA: 5, HP: 3, F: 4, R: 4, H: 1, I: 2, A: 2, L: 9 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 2 },
            { n: "Escudo", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50
    },
    "Mineros": {
        faction: "ena",
        foc: "Core",
        points: 11,
        min: 5,
        max: 25,
        equipo: "Arma a dos manos y Armadura pesada.",
        reglasEspeciales: "Odio (Pielesverdes y skaven), Avance imparable, Avance subterráneo.",
        perfiles: [
            { nombre: "Minero", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 1, L: 9 } },
            { nombre: "Oficial", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 2, L: 9 } }
        ],
        options: [
            { n: "Cargas de demolición", p: 15, costType: "flat" },
            { n: "Hachas arrojadizas", p: 1 }
        ],
        command: { 
            c: { n: "Oficial", p: 6, upgrades: [{ n: "Taladro a vapor", p: 25 }] },
            s: { n: "Portaestandarte", p: 6 }, 
            m: { n: "Músico", p: 6 } 
        },
        magicBanner: 25
    },

    // === SPECIAL ===
    "Rompehierros": {
        faction: "ena",
        foc: "Special",
        points: 13,
        min: 10,
        max: 30,
        equipo: "Arma de mano, Armadura de gromril (TSA 4+) con Runa de piedra (+1 TSA) y Escudo Rompehierro.",
        reglasEspeciales: "Odio (Pielesverdes y skaven), Avance imparable, Muralla de escudos (+1 TSA vs disparos), Escudo Rompehierro (escudo y arma adicional).",
        perfiles: [
            { nombre: "Rompehierro", stats: { M: 3, HA: 5, HP: 3, F: 4, R: 4, H: 1, I: 2, A: 1, L: 9 } },
            { nombre: "Barbahierro", stats: { M: 3, HA: 5, HP: 3, F: 4, R: 4, H: 1, I: 2, A: 2, L: 9 } }
        ],
        options: [
            { n: "Cargas de demolición", p: 15, costType: "flat" }
        ],
        command: { c: { n: "Barbahierro", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        champItems: 25,
        magicBanner: 50
    },
    "Matadores": {
        faction: "ena",
        foc: "Special",
        points: 11,
        min: 5,
        max: 30,
        equipo: "Hachas de matador.",
        reglasEspeciales: "Odio (Pielesverdes y skaven), Avance imparable, Indesmoralizables, Matadores.",
        perfiles: [
            { nombre: "Matador", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 1, L: 9 } },
            { nombre: "Matagigantes", stats: { M: 3, HA: 5, HP: 3, F: 4, R: 4, H: 1, I: 3, A: 2, L: 9 } }
        ],
        options: [
            { n: "Hachas arrojadizas", p: 1 },
            { n: "Tatuajes protectores", p: 1, summary: "RM(1)." },
            { n: "Convertir en Matagigantes", p: 8, summary: "Mejora a Matagigantes (se considera oficial). Gana La muerte lo esquiva (TSE 6+) y Orgullo Marcial." }
        ],
        command: { s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },
    "Martilladores": {
        faction: "ena",
        foc: "Special",
        warning: "0-1",
        points: 15,
        min: 10,
        max: 30,
        equipo: "Martillo Real y Armadura de gromril (TSA 4+).",
        reglasEspeciales: "Odio (Pielesverdes y skaven), Avance imparable, Tozudez, Inmunes a la psicología, Formación de Combate Martilladores (atacan con una fila adicional).",
        perfiles: [
            { nombre: "Martillador", stats: { M: 3, HA: 5, HP: 3, F: 4, R: 4, H: 1, I: 2, A: 1, L: 9 } },
            { nombre: "Paladín del Rey", stats: { M: 3, HA: 5, HP: 3, F: 4, R: 4, H: 1, I: 2, A: 2, L: 9 } }
        ],
        options: [
            { n: "Escudo", p: 1 }
        ],
        command: { c: { n: "Paladín del Rey", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        champItems: 50,
        magicBanner: 50
    },
    "Montaraces": {
        faction: "ena",
        foc: "Special",
        warning: "0-1",
        points: 11,
        min: 5,
        max: 30,
        equipo: "Arma a dos manos y Armadura ligera.",
        reglasEspeciales: "Odio (Pielesverdes y Skaven), Avance imparable, Vanguardia, Montaraces (ignoran Mover o disparar).",
        perfiles: [
            { nombre: "Montaraz", stats: { M: 3, HA: 4, HP: 4, F: 3, R: 4, H: 1, I: 2, A: 1, L: 9 } },
            { nombre: "Oficial", stats: { M: 3, HA: 4, HP: 4, F: 3, R: 4, H: 1, I: 2, A: 2, L: 9 } }
        ],
        options: [
            { n: "Ballesta", p: 3 },
            { n: "Hachas arrojadizas", p: 1 },
            { n: "Convertir en Hostigadores", p: 2, summary: "Tamaño de unidad 5-15, no pueden llevar portaestandarte." }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } }
    },
    "Cañón Enano": {
        faction: "ena",
        foc: "Special",
        points: 90,
        min: 1,
        max: 1,
        equipo: "La dotación lleva Arma de mano y Armadura pesada.",
        reglasEspeciales: "Odio (Pielesverdes y skaven). Dispara como un cañón.",
        perfiles: [
            { nombre: "Cañón Enano", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: 3, I: "-", A: "-", L: "-" } },
            { nombre: "Dotación (3)", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 1, L: 9 } },
            { nombre: "Ingeniero", stats: { M: 3, HA: 4, HP: 4, F: 3, R: 4, H: 1, I: 2, A: 1, L: 9 } }
        ],
        champItems: 3, // Can equip up to three engineer runes
        command: { 
            c: { n: "Añadir Ingeniero", p: 15, upgrades: [
                { n: "Arcabuz enano", p: 3 },
                { n: "Pistola", p: 2 },
                { n: "Ristra de pistolas", p: 5 }
            ]}
        }
    },
    "Lanzavirotes": {
        faction: "ena",
        foc: "Special",
        points: 45,
        min: 1,
        max: 2,
        equipo: "La dotación lleva Arma de mano y Armadura pesada.",
        reglasEspeciales: "Odio (Pielesverdes y skaven). Dispara como un lanzavirotes.",
        perfiles: [
            { nombre: "Lanzavirotes", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: 2, I: "-", A: "-", L: "-" } },
            { nombre: "Dotación (2)", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 1, L: 9 } },
            { nombre: "Ingeniero", stats: { M: 3, HA: 4, HP: 4, F: 3, R: 4, H: 1, I: 2, A: 1, L: 9 } }
        ],
        champItems: 3, // Can equip up to three engineer runes
        command: { 
            c: { n: "Añadir Ingeniero", p: 15, upgrades: [
                { n: "Arcabuz enano", p: 3 },
                { n: "Pistola", p: 2 },
                { n: "Ristra de pistolas", p: 5 }
            ]}
        }
    },
    "Lanzaagravios": {
        faction: "ena",
        foc: "Special",
        points: 65,
        min: 1,
        max: 1,
        equipo: "La dotación lleva Arma de mano y Armadura pesada.",
        reglasEspeciales: "Odio (Pielesverdes y skaven). Dispara como una catapulta.",
        perfiles: [
            { nombre: "Lanzaagravios", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: 3, I: "-", A: "-", L: "-" } },
            { nombre: "Dotación (3)", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 1, L: 9 } },
            { nombre: "Ingeniero", stats: { M: 3, HA: 4, HP: 4, F: 3, R: 4, H: 1, I: 2, A: 1, L: 9 } }
        ],
        champItems: 3, // Can equip up to three engineer runes
        command: { 
            c: { n: "Añadir Ingeniero", p: 15, upgrades: [
                { n: "Arcabuz enano", p: 3 },
                { n: "Pistola", p: 2 },
                { n: "Ristra de pistolas", p: 5 }
            ]}
        }
    },

    // === RARE ===
    "Cañón Órgano": {
        faction: "ena",
        foc: "Rare",
        points: 145,
        min: 1,
        max: 1,
        equipo: "La dotación lleva Arma de mano y Armadura pesada.",
        reglasEspeciales: "Odio (Pielesverdes y skaven). Alcance 24\", 1D6 impactos auto (o 2D6). F5, Poder de Penetración.",
        perfiles: [
            { nombre: "Cañón Órgano", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: 3, I: "-", A: "-", L: "-" } },
            { nombre: "Dotación (3)", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 1, L: 9 } },
            { nombre: "Ingeniero", stats: { M: 3, HA: 4, HP: 4, F: 3, R: 4, H: 1, I: 2, A: 1, L: 9 } }
        ],
        command: { 
            c: { n: "Añadir Ingeniero", p: 15, upgrades: [
                { n: "Arcabuz enano", p: 3 },
                { n: "Pistola", p: 2 },
                { n: "Ristra de pistolas", p: 5 }
            ]}
        }
    },
    "Cañón Lanzallamas": {
        faction: "ena",
        foc: "Rare",
        points: 110,
        min: 1,
        max: 1,
        equipo: "La dotación lleva Arma de mano y Armadura pesada.",
        reglasEspeciales: "Odio (Pielesverdes y skaven). Dispara como un lanzallamas. Sobrecargar (+3D6\", -1 tabla problemas). Diseño superior (corrige 2\" dispersión).",
        perfiles: [
            { nombre: "Cañón Lanzallamas", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: 3, I: "-", A: "-", L: "-" } },
            { nombre: "Dotación (3)", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 1, L: 9 } },
            { nombre: "Ingeniero", stats: { M: 3, HA: 4, HP: 4, F: 3, R: 4, H: 1, I: 2, A: 1, L: 9 } }
        ],
        command: { 
            c: { n: "Añadir Ingeniero", p: 15, upgrades: [
                { n: "Arcabuz enano", p: 3 },
                { n: "Pistola", p: 2 },
                { n: "Ristra de pistolas", p: 5 }
            ]}
        }
    },
    "Girocóptero Enano": {
        faction: "ena",
        foc: "Rare",
        points: 130,
        min: 1,
        max: 1,
        equipo: "El piloto lleva Arma de mano, Pistola y Armadura Pesada. El girocóptero lleva un Cañón de vapor.",
        reglasEspeciales: "Odio (Pielesverdes y skaven), Avance Imparable, Volar, Caballería rápida, Artefacto de Hierro (+2 TSA piloto), Girocóptero (reglas especiales de movimiento y disparo).",
        perfiles: [
            { nombre: "Girocóptero", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 5, H: 3, I: "-", A: "-", L: "-" } },
            { nombre: "Ingeniero Piloto", stats: { M: 3, HA: 4, HP: 4, F: 3, R: 4, H: 1, I: 2, A: 1, L: 9 } }
        ],
        options: [
            { n: "Bomba de metralla", p: 5, summary: "Hasta 2. Plantilla pequeña. F4, Poder de Penetración." },
            { n: "Torpedo rompedor", p: 8, summary: "Hasta 2. Plantilla pequeña. F3, Poder Penetración. Centro F8, Heridas Múltiples(1D3)." },
            { n: "Convertir en Girobombardero", p: 20, summary: "Pierde cañón de vapor. Puede equipar hasta 8 bombas adicionales y lanzar una bomba extra por turno." }
        ]
    },
    "Dracohierros": {
        faction: "ena",
        foc: "Rare",
        warning: "No puedes incluir dracohierros y buscamuertes en el mismo ejército.",
        points: 19,
        min: 5,
        max: 20,
        equipo: "Arma de mano, Cañón Draco y Armadura de gromril (TSA 4+) con Runa Ígnea.",
        reglasEspeciales: "Odio (Pielesverdes y skaven), Avance imparable.",
        perfiles: [
            { nombre: "Dracohierro", stats: { M: 3, HA: 4, HP: 4, F: 4, R: 4, H: 1, I: 2, A: 1, L: 9 } },
            { nombre: "Oficial Dracohierro", stats: { M: 3, HA: 4, HP: 4, F: 4, R: 4, H: 1, I: 2, A: 2, L: 9 } }
        ],
        options: [
            { n: "Escudo", p: 1 }
        ],
        command: { 
            c: { n: "Oficial Dracohierro", p: 6, upgrades: [
                { n: "Ristra de pistolas Draco", p: 15 },
                { n: "Torpedo martillo de troll", p: 15 }
            ]}, 
            s: { n: "Portaestandarte", p: 6 }, 
            m: { n: "Músico", p: 6 } 
        },
        magicBanner: 50
    },
    "Buscamuertes": {
        faction: "ena",
        foc: "Rare",
        warning: "No puedes incluir buscamuertes y dracohierros en el mismo ejército.",
        points: 19,
        min: 5,
        max: 15,
        equipo: "Dos hachas Buscamuerte (+1F, mágicas).",
        reglasEspeciales: "Odio (Pielesverdes y skaven), Avance imparable, Hostigadores, Vanguardia, Indesmoralizables, Matadores, La muerte lo esquiva (TSE 5+).",
        perfiles: [
            { nombre: "Buscamuertes", stats: { M: 3, HA: 4, HP: 4, F: 4, R: 4, H: 1, I: 3, A: 1, L: 9 } },
            { nombre: "Buscamuertes Maldito", stats: { M: 3, HA: 4, HP: 4, F: 4, R: 4, H: 1, I: 3, A: 2, L: 9 } }
        ],
        options: [
            { n: "Talismanes Protectores", p: 1, summary: "RM(1)." },
            { n: "Convertir en Buscamuertes Maldito", p: 6, summary: "Máximo 3. Gana Orgullo Marcial." }
        ]
    },

    // === LORDS ===
    "Señor de los Enanos": {
        faction: "ena",
        foc: "Lord",
        points: 130,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura de Gromril (TSA 4+).",
        reglasEspeciales: "Odio (Pielesverdes y skaven), Avance Imparable.",
        perfiles: [
            { nombre: "Señor de los Enanos", stats: { M: 3, HA: 7, HP: 4, F: 4, R: 5, H: 3, I: 4, A: 4, L: 10 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 2 },
            { n: "Arma a dos manos", p: 4 },
            { n: "Pistola", p: 5 },
            { n: "Ristra de pistolas", p: 10 },
            { n: "Ballesta", p: 3 },
            { n: "Arcabuz enano", p: 3 },
            { n: "Escudo", p: 3 }
        ],
        mounts: ["Escudo Real con dos porteadores"],
        maxMagicItems: 3
    },
    "Señor de las Runas": {
        faction: "ena",
        foc: "Lord",
        points: 120,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura de Gromril (TSA 4+).",
        reglasEspeciales: "Odio (Pielesverdes y skaven), Avance Imparable, Control de los Vientos de la Magia (+2 dados dispersión, puede canalizar).",
        perfiles: [
            { nombre: "Señor de las Runas", stats: { M: 3, HA: 5, HP: 3, F: 4, R: 5, H: 3, I: 2, A: 3, L: 10 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 2 },
            { n: "Arma a dos manos", p: 4 },
            { n: "Escudo", p: 3 }
        ],
        mounts: ["Yunque Rúnico"],
        maxMagicItems: 3
    },
    "Matademonios": {
        faction: "ena",
        foc: "Lord",
        warning: "Si se incluye, una unidad de Matadores puede ser Básica.",
        points: 125,
        min: 1,
        max: 1,
        equipo: "Hachas de matador.",
        reglasEspeciales: "Odio (Pielesverdes y skaven), Avance Imparable, Indesmoralizable, Matador, La muerte lo esquiva (TSE 4+).",
        perfiles: [
            { nombre: "Matademonios", stats: { M: 3, HA: 7, HP: 3, F: 4, R: 5, H: 3, I: 5, A: 4, L: 10 } }
        ],
        options: [
            { n: "Hachas arrojadizas", p: 2 },
            { n: "Tatuajes protectores", p: 5, summary: "RM(1)." }
        ],
        maxMagicItems: 3 // Up to 3 weapon runes
    },

    // === HEROES ===
    "Señor de Clan": {
        faction: "ena",
        foc: "Hero",
        points: 80,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura de Gromril (TSA 4+).",
        reglasEspeciales: "Odio (Pielesverdes y skaven), Avance Imparable.",
        perfiles: [
            { nombre: "Señor de Clan", stats: { M: 3, HA: 6, HP: 4, F: 4, R: 5, H: 2, I: 3, A: 3, L: 9 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 1 },
            { n: "Arma a dos manos", p: 2 },
            { n: "Pistola", p: 4 },
            { n: "Ristra de pistolas", p: 8 },
            { n: "Ballesta", p: 3 },
            { n: "Arcabuz enano", p: 3 },
            { n: "Escudo", p: 2 }
        ],
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 },
        maxMagicItems: 2
    },
    "Herrero Rúnico": {
        faction: "ena",
        foc: "Hero",
        points: 75,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura de Gromril (TSA 4+).",
        reglasEspeciales: "Odio (Pielesverdes y skaven), Avance Imparable, Control de los Vientos de la Magia (+1 dado dispersión, puede canalizar).",
        perfiles: [
            { nombre: "Herrero Rúnico", stats: { M: 3, HA: 4, HP: 3, F: 4, R: 5, H: 2, I: 2, A: 2, L: 9 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 1 },
            { n: "Arma a dos manos", p: 2 },
            { n: "Escudo", p: 2 }
        ],
        maxMagicItems: 2
    },
    "Matadragones": {
        faction: "ena",
        foc: "Hero",
        points: 70,
        min: 1,
        max: 1,
        equipo: "Hachas de matador.",
        reglasEspeciales: "Odio (Pielesverdes y skaven), Avance Imparable, Indesmoralizable, Matador, La muerte lo esquiva (TSE 5+).",
        perfiles: [
            { nombre: "Matadragones", stats: { M: 3, HA: 6, HP: 3, F: 4, R: 5, H: 2, I: 4, A: 3, L: 9 } }
        ],
        options: [
            { n: "Hachas arrojadizas", p: 1 },
            { n: "Tatuajes protectores", p: 3, summary: "RM(1)." }
        ],
        maxMagicItems: 3 // Up to 3 weapon runes
    },
    "Maestro Ingeniero": {
        faction: "ena",
        foc: "Hero",
        points: 45,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura de gromril (TSA 4+).",
        reglasEspeciales: "Odio (Pielesverdes y skaven), Avance Imparable, Maestro artillero (Repite 1 dado artillería/dispersión en máquina a 6\").",
        perfiles: [
            { nombre: "Maestro Ingeniero", stats: { M: 3, HA: 4, HP: 5, F: 4, R: 4, H: 2, I: 2, A: 1, L: 9 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 2 },
            { n: "Pistola", p: 4 },
            { n: "Ristra de pistolas", p: 8 },
            { n: "Arcabuz", p: 5 },
            { n: "Escudo", p: 2 },
            { n: "Arcabuz de repetición enano", p: 10, exclusiveGroup: "specialWeapon" },
            { n: "Ristra de pistolas Draco", p: 12, exclusiveGroup: "specialWeapon" },
            { n: "Martillo Torpedo de Troll", p: 15, exclusiveGroup: "specialWeapon" },
            { n: "Fuego etílico", p: 15, exclusiveGroup: "specialWeapon" },
            { n: "Bombas de mano de Malakai", p: 10, exclusiveGroup: "specialWeapon" }
        ],
        maxMagicItems: 1 // Up to 50 points
    }
};

const mountsDB_ena = {
    "Escudo Real con dos porteadores": {
        faction: "ena",
        points: 40,
        reglasEspeciales: "Infantería (palanquín). +2 TSA y +1H para el jinete.",
        perfiles: [
            { nombre: "Porteador del Escudo Real (2)", stats: { M: 3, HA: 5, HP: 3, F: 4, R: "-", H: 1, I: 2, A: "1 (2)", L: 9 } }
        ]
    },
    "Yunque Rúnico": {
        faction: "ena",
        points: 260,
        reglasEspeciales: "Infantería. No mueve. +2 TSA, +2H, TSE 4+, RM(3), Indesmoralizable para el Señor de las Runas. Potencia de unidad 5.",
        options: [
            { n: "Añadir ruedas", p: 20, summary: "Mueve 6\", Impactos por Carga(1D3). Trata terreno como un carro. Puede unirse a unidades." }
        ],
        perfiles: [
            { nombre: "Yunque Rúnico", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 10, H: 2, I: "-", A: "-", L: "-" } },
            { nombre: "Guardián del Yunque (2)", stats: { M: 3, HA: 5, HP: 3, F: 4, R: "-", H: 2, I: 2, A: "2 (4)", L: 10 } }
        ]
    }
};

const magicItemsDB_ena = {
    "Runas de Armas": {
        "Runa magistral de Skalf Martillonegro": { points: 50, faction: "ena", relic: true, summary: "Siempre hiere con 2+." },
        "Runa magistral Matademonios": { points: 45, faction: "ena", relic: true, summary: "Heridas múltiples (1D3), Odio (todos)." },
        "Runa magistral de Alaric el loco": { points: 45, faction: "ena", relic: true, summary: "Niega TSA." },
        "Runa magistral de la destrucción": { points: 40, faction: "ena", relic: true, summary: "Golpe letal heroico." },
        "Runa magistral Matadragones": { points: 40, faction: "ena", relic: true, summary: "Heridas múltiples (2), Odio (todos)." },
        "Runa magistral de la ruina": { points: 35, faction: "ena", relic: true, summary: "Al impactar, anula el arma mágica del enemigo." },
        "Runa magistral de la rapidez": { points: 25, faction: "ena", relic: true, summary: "I10." },
        "Runa magistral del vuelo": { points: 20, faction: "ena", relic: true, summary: "Arma arrojadiza (12\", Disparo rápido, retorna)." },
        "Runa de la agonía": { points: 35, faction: "ena", relic: false, summary: "Heridas múltiples (1D3)." },
        "Runa de la furia": { points: 20, faction: "ena", relic: false, summary: "+1A." },
        "Runa del poder": { points: 25, faction: "ena", relic: false, summary: "Dobla F contra R5+." },
        "Runa de Snorri Spanglehelm": { points: 25, faction: "ena", relic: false, summary: "+1 a impactar en CaC." },
        "Runa de la muerte": { points: 20, faction: "ena", relic: false, summary: "Golpe letal." },
        "Runa de la fuerza": { points: 15, faction: "ena", relic: false, summary: "+1F." },
        "Falsa runa de Kragg el Gruñón": { points: 20, faction: "ena", relic: false, summary: "El arma gana las reglas de Arma a dos manos." },
        "Runa de los agravios": { points: 15, faction: "ena", relic: false, summary: "Designa un personaje/monstruo enemigo; repite para impactar contra él." },
        "Runa de ataque": { points: 5, faction: "ena", relic: false, summary: "+1HA." },
        "Runa de perforación": { points: 5, faction: "ena", relic: false, summary: "Poder de penetración." },
        "Runa de la agilidad": { points: 5, faction: "ena", relic: false, summary: "+2I en CaC." },
        "Runa del fuego": { points: 5, faction: "ena", relic: false, summary: "Ataques flamígeros." }
    },
    "Runas de Defensa": {
        "Runa magistral de la Eternidad": { points: 45, faction: "ena", relic: true, summary: "TSE 4+." },
        "Runa magistral del Acero": { points: 50, faction: "ena", relic: true, summary: "Impactos de F>5 se consideran F5." },
        "Runa magistral adamantina": { points: 40, faction: "ena", relic: true, summary: "+1R." },
        "Runa de la Fortaleza": { points: 35, faction: "ena", relic: false, summary: "+1H." },
        "Runa de Gromril": { points: 25, faction: "ena", relic: false, summary: "TSA 1+." },
        "Runa de la Pervivencia": { points: 25, faction: "ena", relic: false, summary: "Inmune a Heridas múltiples." },
        "Runa de la resistencia": { points: 25, faction: "ena", relic: false, summary: "Repite TSA fallidas." },
        "Runa de la salvación": { points: 15, faction: "ena", relic: false, summary: "Inmune a veneno y golpe letal." },
        "Runa del hierro": { points: 15, faction: "ena", relic: false, summary: "TSE 6+ (5+ con 2 runas)." },
        "Runa de piedra": { points: 5, faction: "ena", relic: false, summary: "+1 a la TSA." }
    },
    "Runas de Protección": {
        "Runa magistral de Valaya": { points: 50, faction: "ena", relic: true, summary: "Estandarte de Batalla. +2 a dispersar. Unidad tiene RM(2)." },
        "Runa magistral de Grungni": { points: 50, faction: "ena", relic: true, summary: "Estandarte de Batalla. Otorga TSE 5+ vs proyectiles a unidades amigas a 6\"." },
        "Runa magistral de la Rapidez": { points: 40, faction: "ena", relic: true, summary: "Estandarte de Batalla. Unidades a 6\" ganan Vanguardia." },
        "Runa de la tozudez": { points: 50, faction: "ena", relic: false, summary: "Unidad es Tozuda." },
        "Runa de la lentitud": { points: 40, faction: "ena", relic: false, summary: "Enemigos restan 1D6\" a su carga contra esta unidad." },
        "Runa del Agravio": { points: 35, faction: "ena", relic: false, summary: "Unidad gana Odio (todos)." },
        "Runa de la templanza": { points: 30, faction: "ena", relic: false, summary: "Unidad gana Sangre Fría." },
        "Runa de robustez": { points: 30, faction: "ena", relic: false, summary: "Solo Portaestandarte de Batalla. +1H." },
        "Runa de Strollaz": { points: 25, faction: "ena", relic: false, summary: "Unidad gana Vanguardia." },
        "Runa del miedo": { points: 25, faction: "ena", relic: false, summary: "Unidad causa Miedo." },
        "Runa Adamantina": { points: 25, faction: "ena", relic: false, summary: "Unidad gana +1 a la TSA." },
        "Runa del estoicismo": { points: 25, faction: "ena", relic: false, summary: "Duplica potencia de unidad." },
        "Runa de los ancestros": { points: 25, faction: "ena", relic: false, summary: "Un uso. Gana Tozudez hasta el final del turno." },
        "Runa de batalla": { points: 20, faction: "ena", relic: false, summary: "+1 al resultado del combate." },
        "Runa de la orientación": { points: 20, faction: "ena", relic: false, summary: "Solo mineros. Repite tirada en tabla de problemas de Avance Subterráneo." },
        "Runa de la determinación": { points: 20, faction: "ena", relic: false, summary: "Un uso. Chequea desmoralización con 1D6." },
        "Runa de la forja": { points: 15, faction: "ena", relic: false, summary: "Unidad inmune a Poder de penetración." },
        "Runa de la fundición": { points: 30, faction: "ena", relic: false, summary: "Unidad gana Poder de penetración." },
        "Runa de protección arcana": { points: 15, faction: "ena", relic: false, summary: "Unidad gana RM(1)." },
        "Runa de la agilidad (estandarte)": { points: 15, faction: "ena", relic: false, summary: "Unidad gana +2I." },
        "Runa llameante": { points: 15, faction: "ena", relic: false, summary: "Unidad gana Ataques flamígeros y mágicos." },
        "Runa del coraje": { points: 10, faction: "ena", relic: false, summary: "Unidad gana Inmune a psicología." },
        "Runa del Libre Paso": { points: 10, faction: "ena", relic: false, summary: "Unidad gana Cruzar (todo el terreno difícil)." },
        "Runa de la salud": { points: 5, faction: "ena", relic: false, summary: "Unidad inmune a venenos." },
        "Runa de la marcha": { points: 15, faction: "ena", relic: false, summary: "Unidad marcha 8\" en lugar de 6\"." }
    },
    "Runas Talismánicas": {
        "Runa magistral del equilibrio": { points: 50, faction: "ena", relic: true, summary: "Solo Sres./Herreros Rúnicos. Roba 1 dado de energía al rival por fase." },
        "Runa magistral de la resistencia": { points: 45, faction: "ena", relic: true, summary: "TSE 4+." },
        "Runa magistral de los Herreros rúnicos": { points: 30, faction: "ena", relic: true, summary: "Solo Sres./Herreros Rúnicos. +1 a dispersar." },
        "Runa magistral del desaliento": { points: 25, faction: "ena", relic: true, summary: "Un uso. Obliga a unidad enemiga a 20\" a cargar o huir." },
        "Runa magistral del Honor": { points: 40, faction: "ena", relic: true, summary: "Un uso. Gana indesmoralizable pero no puede marchar/arrasar/perseguir." },
        "Runa de la realeza": { points: 50, faction: "ena", relic: false, summary: "Sólo Señor Enano. Tozudez e Inmune a psicología." },
        "Runa comehechizos": { points: 50, faction: "ena", relic: false, summary: "Un uso. Solo Sres./Herreros Rúnicos. Dispersa auto y destruye hechizo con 4+." },
        "Runa de la retribución": { points: 30, faction: "ena", relic: false, summary: "Solo Sres. Rúnicos. Gana dado de dispersión vs portahechizos. Con 4+ agota el objeto." },
        "Runa del escrutinio": { points: 25, faction: "ena", relic: false, summary: "Revela objetos/unidades ocultas enemigas a 18\"." },
        "Runa rompehechizos": { points: 25, faction: "ena", relic: false, summary: "Un uso. Solo Sres./Herreros Rúnicos. Dispersa un hechizo auto." },
        "Runa del destino": { points: 15, faction: "ena", relic: false, summary: "Un uso. TSE 2+ contra la primera herida sufrida." },
        "Runa de la camaradería": { points: 10, faction: "ena", relic: false, summary: "Solo Señor de Clan. Puede unirse a mineros/montaraces y gana sus reglas." },
        "Runa de la suerte": { points: 5, faction: "ena", relic: false, summary: "Un uso. Repite una tirada de dado." },
        "Runa ígnea": { points: 5, faction: "ena", relic: false, summary: "Un uso. Gana RM(2) contra un hechizo." },
        "Runa de los Vientos": { points: 5, faction: "ena", relic: false, summary: "Sólo Herreros Rúnicos. +2 a canalizar dados de dispersión." },
        "Runa rompevientos": { points: 15, faction: "ena", relic: false, summary: "Sólo Herreros Rúnicos. Los dados de energía/dispersión guardados se pierden." }
    },
    "Runas de los Ingenieros": {
        "Runa de la inmolación": { points: 25, faction: "ena", relic: false, summary: "Un uso. Al ser destruida, la máquina explota (plantilla grande, F4, flamígero, poder penetración)." },
        "Runa de la invisibilidad": { points: 25, faction: "ena", relic: false, summary: "La máquina no puede ser objetivo hasta que mueva o dispare." },
        "Runa de la forja": { points: 25, faction: "ena", relic: false, summary: "Sólo cañones. Repite 'Problemas' en dado de artillería." },
        "Runa de la defensa": { points: 20, faction: "ena", relic: false, summary: "Máquina siempre en cobertura pesada." },
        "Runa de penetración": { points: 25, faction: "ena", relic: false, summary: "+1F (max 10), Ataques mágicos." },
        "Runa de la precisión": { points: 25, faction: "ena", relic: false, summary: "Sólo lanzaagravios. Repite dado de dispersión." },
        "Runa del valor": { points: 20, faction: "ena", relic: false, summary: "Máquina Inmune a desmoralización." },
        "Runa de la firmeza": { points: 15, faction: "ena", relic: false, summary: "+1 al resultado de combate de la dotación (acumulable)." },
        "Runa de la puntería": { points: 15, faction: "ena", relic: false, summary: "Un uso, solo lanzavirotes. Impacto con 2+, mágico." },
        "Runa de recarga": { points: 10, faction: "ena", relic: false, summary: "Un uso. Ignora el primer resultado de problema que impida disparar." },
        "Runa buscadora de Flaksson": { points: 10, faction: "ena", relic: false, summary: "Solo lanzavirotes. +1 impactar vs Volar/Flotar, mágico." },
        "Runa incendiaria": { points: 5, faction: "ena", relic: false, summary: "Ataques flamígeros y mágicos." }
    }
};

const armySkillsDB_ena = {};
const specialProfilesDB_ena = {};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Enanos",
    FACTION_ID: "ena",
    FOC_CONFIG: { 
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_ena,
    mountsDB: mountsDB_ena,
    magicItemsDB: magicItemsDB_ena,
    armySkillsDB: armySkillsDB_ena,
    specialProfilesDB: specialProfilesDB_ena,
    armySkillsLabel: "Runas",
};
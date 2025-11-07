// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: OGROS ---
// ===================================================================================
// Last Updated: 2025-10-04 - v4.1
import { commonMagicItemsDB } from '../comun.js';

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_ogros = {
    // === CORE ===
    "Ogros Toro": {
        faction: "ogros",
        foc: "Core",
        points: 30,
        min: 3,
        max: 12,
        equipo: "Maza ogra y Armadura ligera.",
        reglasEspeciales: "Miedo, Arremetida",
        perfiles: [
            { nombre: "Ogros Toro", stats: { M: 6, HA: 3, HP: 2, F: 4, R: 4, H: 3, I: 2, A: 3, L: 7 } },
            { nombre: "Oficial", stats: { M: 6, HA: 3, HP: 2, F: 4, R: 4, H: 3, I: 2, A: 4, L: 7 } }
        ],
        options: [
            { n: "Puños de hierro", p: 4 },
            { n: "Mazas ogras adicionales", p: 3 },
            { n: "Escudo", p: 3 },
            { n: "Sustituir armadura ligera por pesada", p: 4 }
        ],
        command: { c: { n: "Oficial ogro", p: 8 }, s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } },
        magicBanner: 25
    },
    "Gnoblars": {
        faction: "ogros",
        foc: "Core",
        points: 2,
        min: 15,
        max: 35,
        equipo: "Arma de mano y Cuchillos arrojadizos",
        reglasEspeciales: "Insignificantes, Hostigadores",
        perfiles: [
            { nombre: "Gaoblar", stats: { M: 4, HA: 2, HP: 3, F: 2, R: 2, H: 1, I: 3, A: 1, L: 4 } },
            { nombre: "Oficial gaoblar", stats: { M: 4, HA: 2, HP: 3, F: 2, R: 2, H: 1, I: 3, A: 2, L: 4 } }
        ],
        command: { c: { n: "Oficial gaoblar", p: 4 }, m: { n: "Músico", p: 4 } }
    },
    "Tripasduras": {
        faction: "ogros",
        foc: "Core",
        warning: "Sólo puedes incluir una unidad de Tripasduras por cada unidad de Ogros Toro de tu ejército.",
        points: 38,
        min: 3,
        max: 8,
        equipo: "Arma a dos manos y Armadura pesada.",
        reglasEspeciales: "Miedo, Arremetida",
        perfiles: [
            { nombre: "Tripasduras", stats: { M: 6, HA: 4, HP: 2, F: 4, R: 4, H: 3, I: 2, A: 3, L: 8 } },
            { nombre: "Oficial", stats: { M: 6, HA: 4, HP: 2, F: 4, R: 4, H: 3, I: 2, A: 4, L: 8 } }
        ],
        command: { c: { n: "Oficial ogro", p: 8 }, s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } },
        magicBanner: 50
    },

    // === SPECIAL ===
    "Luchadores Ogros": {
        faction: "ogros",
        foc: "Special",
        warning: "0-1",
        points: 36,
        min: 1,
        max: 5,
        equipo: "Dos Puños de hierro.",
        reglasEspeciales: "Miedo, Impactos por carga (1), Furia asesina, Tatuajes de guerra (6+ especial), Hostigadores",
        perfiles: [
            { nombre: "Ogros Beresker", stats: { M: 6, HA: 3, HP: 2, F: 4, R: 4, H: 3, I: 2, A: 3, L: 7 } },
            { nombre: "Oficial", stats: { M: 6, HA: 3, HP: 2, F: 4, R: 4, H: 3, I: 2, A: 4, L: 7 } }
        ],
        command: { c: { n: "Oficial", p: 8 } }
    },
    "Manada de Dientes de Sable": {
        faction: "ogros",
        foc: "Special",
        points: 16,
        min: 3,
        max: 10,
        equipo: "Garras y dientes (Arma de mano).",
        reglasEspeciales: "Miedo, La voz del amo",
        perfiles: [
            { nombre: "Tigre de Dientes de sable", stats: { M: 8, HA: 4, HP: 0, F: 4, R: 4, H: 2, I: 4, A: 2, L: 6 } }
        ]
    },
    "Sueltafuegos": {
        faction: "ogros",
        foc: "Special",
        points: 42,
        min: 3,
        max: 6,
        equipo: "Cañón sueltafuegos y Armadura ligera.",
        reglasEspeciales: "Miedo, Arremetida, Inflamables",
        perfiles: [
            { nombre: "Sueltafuegos", stats: { M: 6, HA: 3, HP: 3, F: 4, R: 4, H: 3, I: 2, A: 3, L: 7 } },
            { nombre: "Oficial", stats: { M: 6, HA: 3, HP: 3, F: 4, R: 4, H: 3, I: 2, A: 4, L: 7 } }
        ],
        command: { c: { n: "Oficial ogro", p: 8 }, m: { n: "Músico", p: 8 } }
    },
    "Yetis": {
        faction: "ogros",
        foc: "Special",
        points: 45,
        min: 3,
        max: 6,
        equipo: "Dos Armas de mano.",
        reglasEspeciales: "Miedo, Inflamables, Regeneración (5+), Furia asesina, Escalar, Aura de escarcha, Ataques mágicos",
        perfiles: [
            { nombre: "Yeti", stats: { M: 7, HA: 3, HP: 0, F: 5, R: 4, H: 3, I: 4, A: 3, L: 7 } },
            { nombre: "Espaldagris", stats: { M: 7, HA: 4, HP: 0, F: 5, R: 4, H: 3, I: 4, A: 4, L: 8 } }
        ],
        command: { c: { n: "Espaldagris", p: 10 } }
    },
    "Comchombres": {
        faction: "ogros",
        foc: "Special",
        warning: "Sólo puedes incluir una unidad de Comchombres por cada 1500 puntos completos del valor en puntos total de tu ejército.",
        points: 48,
        min: 2,
        max: 6,
        equipo: "Maza ogra y Armadura ligera.",
        reglasEspeciales: "Miedo, Arremetida, Inmunes a la psicología, Aventureros",
        perfiles: [
            { nombre: "Comchombres", stats: { M: 6, HA: 4, HP: 4, F: 5, R: 4, H: 3, I: 3, A: 4, L: 8 } },
            { nombre: "Oficial", stats: { M: 6, HA: 4, HP: 4, F: 5, R: 4, H: 3, I: 3, A: 5, L: 8 } }
        ],
        options: [
            { n: "Maza ogra y Puño de Hierro", p: 4 },
            { n: "Dos mazas ogras", p: 3 },
            { n: "Arma a dos manos", p: 5 },
            { n: "Pistola ogra", p: 7 },
            { n: "Ristra de pistolas ogras", p: 11 },
            { n: "Sustituir armadura ligera por pesada", p: 4 },
            { n: "Tozudez", p: 5 },
            { n: "Vanguardia", p: 5 },
            { n: "Veloces", p: 3 },
            { n: "Ataques envenenados", p: 2 },
            { n: "Carga devastadora", p: 3 },
            { n: "Cruzar (todos los terrenos)", p: 2 },
            { n: "Talismanes protectores (TSE 6+)", p: 4 },
            { n: "Exploradores", p: 5 },
            { n: "Hostigadores", p: 4 },
            { n: "Odio (todos los enemigos)", p: 3 }
        ],
        command: { c: { n: "Oficial Comchombres", p: 8 }, s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } },
        magicBanner: 50,
        champItems: 25
    },
    "Tramperos Gnoblar": {
        faction: "ogros",
        foc: "Special",
        points: 3,
        min: 10,
        max: 20,
        equipo: "Arma de mano y Cuchillos arrojadizos",
        reglasEspeciales: "Insignificantes, Hostigadores, Exploradores, Tramperos",
        perfiles: [
            { nombre: "Tampero Gaoblar", stats: { M: 4, HA: 2, HP: 3, F: 2, R: 2, H: 1, I: 3, A: 1, L: 5 } },
            { nombre: "Oficial gaoblar", stats: { M: 4, HA: 2, HP: 3, F: 2, R: 2, H: 1, I: 3, A: 2, L: 5 } }
        ],
        options: [
            { n: "Arcos cortos", p: 1 }
        ],
        command: { c: { n: "Oficial gaoblar", p: 4 }, m: { n: "Músico", p: 4 } }
    },
    "Gargantúas": {
        faction: "ogros",
        foc: "Special",
        points: 65,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Miedo, Vanguardia, Golpe letal, Siempre hambriento, Furia asesina",
        perfiles: [
            { nombre: "Gargantúa", stats: { M: 6, HA: 3, HP: 2, F: 6, R: 6, H: 6, I: 2, A: "*", L: 10 } }
        ]
    },
    "Caballería Ogra": {
        faction: "ogros",
        foc: "Special",
        warning: "Sólo puedes incluir una única unidad de Caballería ogra en tu ejército, o hasta dos en un Gran ejército (3000+ puntos)",
        points: 95,
        min: 2,
        max: 4,
        equipo: "Maza ogra y Armadura ligera.",
        reglasEspeciales: "Miedo, Impactos por carga (1, sólo las bestias de las montañas), TSA +2 para jinete",
        perfiles: [
            { nombre: "Jinete ogro", stats: { M: 6, HA: 4, HP: 2, F: 4, R: 4, H: 3, I: 2, A: 3, L: 8 } },
            { nombre: "Oficial ogro", stats: { M: 6, HA: 4, HP: 2, F: 4, R: 4, H: 3, I: 2, A: 4, L: 8 } },
            { nombre: "Bestia de las montañas", stats: { M: 8, HA: 3, HP: 0, F: 5, R: 5, H: 4, I: 2, A: 3, L: 5 } }
        ],
        options: [
            { n: "Puños ogros", p: 6 },
            { n: "Armas a dos manos", p: 6 },
            { n: "Sustituir armadura ligera por pesada", p: 5 },
            { n: "Ristra de pistolas ogras (Oficial)", p: 12 }
        ],
        command: { c: { n: "Oficial ogro", p: 12 }, s: { n: "Portaestandarte", p: 12 }, m: { n: "Músico", p: 12 } },
        magicBanner: 50
    },
    "Tirasobras Gnoblar": {
        faction: "ogros",
        foc: "Special",
        points: 125,
        min: 1,
        max: 1,
        equipo: "Los carroñeros gnoblar están equipados con Armas de mano.",
        reglasEspeciales: "Miedo, Objetivo grande, Montón de chatarra (TSA 4+), Arrojar metal (Catapulta F4, Golpe letal)",
        perfiles: [
            { nombre: "Tirasobras", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 5, H: "-", I: "-", A: "-", L: "-" } },
            { nombre: "Carroñeros gnoblars (7)", stats: { M: 4, HA: 2, HP: 3, F: 2, R: "-", H: "-", I: 3, A: 1, L: 2 } },
            { nombre: "Rinobuey", stats: { M: 6, HA: 3, HP: 0, F: 5, R: "-", H: "-", I: 2, A: 3, L: 5 } }
        ]
    },

    // === RARE ===
    "Cuernos Pétreos": {
        faction: "ogros",
        foc: "Rare",
        points: 240,
        min: 1,
        max: 1,
        equipo: "El jinete ogro está equipado con una maza ogra.",
        reglasEspeciales: "Impactos por carga (1D6), Piel escamosa (3+), Furia asesina (sólo el Cuernos pétreos), Carga Devastadora (sólo el Cuernos pétreos), Esqueleto de piedra (Inmune a Heridas múltiples), Jinete de bestias ogro",
        perfiles: [
            { nombre: "Cuernos pétreos", stats: { M: 7, HA: 3, HP: 0, F: 7, R: 6, H: 5, I: 1, A: 4, L: 6 } },
            { nombre: "Jinete de bestias ogro", stats: { M: "-", HA: 3, HP: 3, F: 4, R: "-", H: "-", I: 2, A: 3, L: 7 } }
        ],
        options: [
            { n: "Trampa de cadena", p: 5 },
            { n: "Arpón gigante", p: 5 }
        ]
    },
    "Escupehierros": {
        faction: "ogros",
        foc: "Rare",
        points: 160,
        min: 1,
        max: 1,
        equipo: "El Sueltafuegos está equipado con Maza ogra y el carroñero gnoblar está equipado con Arma de mano. Cañón de los Titanes de los Cielos.",
        reglasEspeciales: "Miedo, Objetivo grande, Inflamable, TSA 4+",
        perfiles: [
            { nombre: "Escupehieros", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 6, H: 5, I: "-", A: "-", L: "-" } },
            { nombre: "Sueltafuegos", stats: { M: "-", HA: 3, HP: 3, F: 4, R: "-", H: "-", I: 2, A: 3, L: 7 } },
            { nombre: "Carroñero gnoblar", stats: { M: "-", HA: 2, HP: 3, F: 2, R: "-", H: "-", I: 3, A: 1, L: 2 } },
            { nombre: "Rinobuey", stats: { M: 6, HA: 3, HP: 0, F: 5, R: "-", H: "-", I: 2, A: 3, L: 5 } }
        ]
    },
    "Colmillos de Hielo": {
        faction: "ogros",
        foc: "Rare",
        points: 245,
        min: 1,
        max: 1,
        equipo: "Los jinetes de bestias están equipados con mazas ogras.",
        reglasEspeciales: "Impactos por carga (1D3+1), Piel escamosa (4+), Frío entumecedor (-1/2 I enemigos 8\"), Esferas de hielo (Catapulta F3, Poder de penetración), Jinete de bestias ogro",
        perfiles: [
            { nombre: "Colmillos de Hielo", stats: { M: 7, HA: 3, HP: 0, F: 6, R: 6, H: 6, I: 1, A: 4, L: 6 } },
            { nombre: "Jinetes de bestias ogros (2)", stats: { M: "-", HA: 3, HP: 3, F: 4, R: "-", H: "-", I: 2, A: 3, L: 7 } }
        ],
        options: [
            { n: "Trampa de cadena (cada uno)", p: 5 },
            { n: "Arpón gigante (cada uno)", p: 5 }
        ]
    },
    "Gigante": {
        faction: "ogros",
        foc: "Rare",
        points: 160,
        min: 1,
        max: 1,
        equipo: "Garrote (arma de mano)",
        reglasEspeciales: "Cruzar (obstáculos), Caídas, Ataques especiales del gigante",
        perfiles: [
            { nombre: "Gigante", stats: { M: 6, HA: 3, HP: 2, F: 6, R: 6, H: 6, I: 2, A: "*", L: 10 } }
        ]
    },

    // === LORDS ===
    "Déspota": {
        faction: "ogros",
        foc: "Lord",
        points: 210,
        min: 1,
        max: 1,
        equipo: "Maza ogra y Armadura ligera.",
        reglasEspeciales: "Miedo, Arremetida",
        perfiles: [
            { nombre: "Déspota", stats: { M: 6, HA: 6, HP: 4, F: 5, R: 5, H: 5, I: 3, A: 5, L: 9 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 10 },
            { n: "Maza ogra adicional", p: 4 },
            { n: "Puño de hierro", p: 5 },
            { n: "Pistola ogra", p: 7 },
            { n: "Ristra de pistolas ogras", p: 12 },
            { n: "Sustituir armadura ligera por pesada", p: 5 },
            { n: "Gnoblar avisador", p: 8 },
            { n: "Gnoblar de la suerte (hasta 2)", p: 5 }
        ],
        mounts: ["Bestia de las montañas", "Cuernos pétreos"],
        maxMagicItems: 3,
        maxRelics: 1,
        maxSkills: { limit: 2, type: 'count' }
    },
    "Maestro Carnicero": {
        faction: "ogros",
        foc: "Lord",
        points: 245,
        min: 1,
        max: 1,
        equipo: "Maza ogra.",
        reglasEspeciales: "Miedo, Arremetida, Immune al veneno",
        perfiles: [
            { nombre: "Maestro Carnicero", stats: { M: 6, HA: 4, HP: 3, F: 4, R: 5, H: 5, I: 2, A: 4, L: 8 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 8 },
            { n: "Maza ogra adicional", p: 4 },
            { n: "Puño de hierro", p: 6 },
            { n: "Nivel de Magia 4", p: 35 },
            { n: "Gnoblars marmitones (hasta 3)", p: 5 },
            { n: "Gnoblar de la suerte", p: 5 }
        ],
        maxMagicItems: 3,
        maxRelics: 1
    },

    // === HEROES ===
    "Matón": {
        faction: "ogros",
        foc: "Hero",
        points: 115,
        min: 1,
        max: 1,
        equipo: "Maza ogra y Armadura ligera.",
        reglasEspeciales: "Miedo, Arremetida",
        perfiles: [
            { nombre: "Matón", stats: { M: 6, HA: 5, HP: 4, F: 5, R: 5, H: 4, I: 3, A: 4, L: 8 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 8 },
            { n: "Maza ogra adicional", p: 4 },
            { n: "Puño de hierro", p: 5 },
            { n: "Pistola ogra", p: 7 },
            { n: "Ristra de pistolas ogras", p: 12 },
            { n: "Sustituir armadura ligera por pesada", p: 4 },
            { n: "Gnoblar avisador", p: 8 },
            { n: "Gnoblar de la suerte", p: 5 }
        ],
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 },
        maxMagicItems: 2,
        maxSkills: { limit: 1, type: 'count' }
    },
    "Matarife": {
        faction: "ogros",
        foc: "Hero",
        points: 105,
        min: 1,
        max: 1,
        equipo: "Maza ogra.",
        reglasEspeciales: "Miedo, Arremetida, Immune al veneno",
        perfiles: [
            { nombre: "Matarife", stats: { M: 6, HA: 3, HP: 2, F: 4, R: 5, H: 4, I: 2, A: 3, L: 7 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 6 },
            { n: "Maza ogra adicional", p: 3 },
            { n: "Puño de hierro", p: 4 },
            { n: "Nivel de Magia 2", p: 35 },
            { n: "Gnoblars marmitones (hasta 2)", p: 5 }
        ],
        maxMagicItems: 2
    },
    "Panzafuego": {
        faction: "ogros",
        foc: "Hero",
        points: 120,
        min: 1,
        max: 1,
        equipo: "Maza ogra.",
        reglasEspeciales: "Miedo, Arremetida, Immune al fuego, Ataques flamígeros, Arma de aliento (F3, Ataques sólo flamígeros)",
        perfiles: [
            { nombre: "Panzálogo", stats: { M: 6, HA: 3, HP: 2, F: 4, R: 5, H: 4, I: 2, A: 3, L: 7 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 6 },
            { n: "Maza ogra adicional", p: 3 },
            { n: "Puño de hierro", p: 4 },
            { n: "Nivel de Magia 2", p: 35 },
            { n: "Gnoblars marmitones (hasta 2)", p: 5 }
        ],
        maxMagicItems: 2
    },
    "Cazador": {
        faction: "ogros",
        foc: "Hero",
        points: 135,
        min: 1,
        max: 1,
        equipo: "Maza ogra, Arpones gigantes y Armadura ligera.",
        reglasEspeciales: "Miedo, Arremetida, Solitario",
        perfiles: [
            { nombre: "Cazador ogro", stats: { M: 6, HA: 5, HP: 4, F: 5, R: 5, H: 4, I: 3, A: 4, L: 8 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 8 },
            { n: "Maza ogra adicional", p: 3 },
            { n: "Puño de hierro", p: 4 },
            { n: "Lanzaarpones", p: 20 },
            { n: "Trampa de cadena", p: 5 },
            { n: "Buitre Sangriento", p: 25 },
            { n: "Gnoblar de la suerte", p: 5 }
        ],
        mounts: ["Bestia de las montañas", "Cuernos pétreos"],
        maxMagicItems: 2,
        maxSkills: { limit: 1, type: 'count' }
    }
};

const mountsDB_ogros = {
    "Bestia de las montañas": {
        faction: "ogros",
        points: 65,
        perfiles: [
            { nombre: "Bestia de las montañas", stats: { M: 8, HA: 3, HP: 0, F: 5, R: 5, H: 4, I: 2, A: 3, L: 5 } }
        ],
        reglasEspeciales: "Bestia monstruosa. Cambia el tipo a Caballería monstruosa. Miedo, Impactos por carga (1). TSA +2 para jinete."
    },
    "Cuernos pétreos": {
        faction: "ogros",
        points: 210,
        perfiles: [
            { nombre: "Cuernos pétreos", stats: { M: 7, HA: 3, HP: 0, F: 7, R: 6, H: 5, I: 1, A: 4, L: 6 } }
        ],
        reglasEspeciales: "Monstruo. Impactos por carga (1D6), Piel escamosa (3+), Furia asesina, Carga Devastadora, Esqueleto de piedra (Inmune a Heridas múltiples)."
    }
};

const armySkillsDB_ogros = {
    "Comemontañas": { points: 50, faction: "ogros", type: "Sobrenombre", summary: "Sólo Déspotas. Impactos F>6 se consideran F6." },
    "Cabezapiedra": { points: 45, faction: "ogros", type: "Sobrenombre", summary: "Sólo Déspotas. Tozudez." },
    "Cometermanos": { points: 30, faction: "ogros", type: "Sobrenombre", summary: "Sólo Déspotas. Orgullo marcial, Inmune a psicología. Amigos 12\": repiten pánico." },
    "Burlamuertes": { points: 35, faction: "ogros", type: "Sobrenombre", summary: "TSE 5+, RM(1)." },
    "Buscafauces": { points: 30, faction: "ogros", type: "Sobrenombre", summary: "+1R, Estupidez." },
    "Tumbagigantes": { points: 20, faction: "ogros", type: "Sobrenombre", summary: "+1F, Orgullo marcial." },
    "Destrozamuros": { points: 15, faction: "ogros", type: "Sobrenombre", summary: "Impactos por carga (1D3)." },
    "Tripasesina": { points: 15, faction: "ogros", type: "Sobrenombre", summary: "Odio (todos los enemigos)." },
    "Tragahéroes": { points: 15, faction: "ogros", type: "Sobrenombre", summary: "Terror." },
    "Pasoslargos": { points: 10, faction: "ogros", type: "Sobrenombre", summary: "+1M, Veloz." },
    "Vencebestias": { points: 20, faction: "ogros", type: "Sobrenombre", summary: "Heridas múltiples (1D3) vs carros, monstruos y máquinas de guerra." }
};

const magicItemsDB_ogros = {
    "Arma Mágica": {
        "Mazatrueno": { points: 40, faction: "ogros", relic: true, summary: "A2M. Heridas no mortales → chequeo R para contacto o herida." },
        "Maza Ablandacarnes": { points: 45, faction: "ogros", relic: false, summary: "A2M. Heridas múltiples (1D3)." },
        "Parteescudos": { points: 35, faction: "ogros", relic: false, summary: "A2M +1F. Impactar con I objetivo. Sin I: autoimpacto, 1D6 heridas." },
        "Descuajacabezas": { points: 30, faction: "ogros", relic: false, summary: "Maza ogra. Golpe letal. +1TSA portador." },
        "Machete de Matarife": { points: 25, faction: "ogros", relic: false, summary: "Sólo hechiceros. Maza ogra. Por herida causada, recupera 1H." },
        "Cuchillas de la matanza": { points: 20, faction: "ogros", relic: false, summary: "Armas emparejadas. Poder de penetración. Duplica I en CaC." }
    },
    "Armadura Mágica": {
        "Puño Codicioso": { points: 50, faction: "ogros", relic: true, summary: "Puño ogro. Armas mágicas/rúnicas enemigo → mundanas." },
        "Armadura de las Fauces": { points: 45, faction: "ogros", relic: true, summary: "Armadura pesada. Regeneración (4+)." },
        "Armadura del Mastodonte": { points: 35, faction: "ogros", relic: false, summary: "Armadura de Placas (TSA 4+). Recupera 1H por turno." },
        "Grancráneo": { points: 40, faction: "ogros", relic: false, summary: "+1TSA. Dobles en lanzamiento hechizo → Disfunción mágica." },
        "Tripa de Toro": { points: 30, faction: "ogros", relic: false, summary: "+1TSA. Duplica potencia unidad al cargar. Impactos carga: Poder de penetración." },
        "Pellejo de Colmillos de Hielo": { points: 25, faction: "ogros", relic: false, summary: "Armadura ligera. Piel escamosa (5+). Enemigos contacto: I mitad." }
    },
    "Talismán": {
        "Corona de Jade": { points: 55, faction: "ogros", relic: true, summary: "TSE 4+ (primera herida: TSE 3+)." },
        "Piedraladrona Gnoblar": { points: 30, faction: "ogros", relic: false, summary: "RM(2). 1D6 al inicio: objeto mágico adicional." },
        "Azabache Catayano": { points: 40, faction: "ogros", relic: false, summary: "Inmune a Golpe letal y Heridas múltiples." },
        "Cacho de Brillamucho": { points: 30, faction: "ogros", relic: false, summary: "Tirada herir exitosa → 1D6, si > herir, cancela herida." },
        "Abalorio de Piedra Bruja": { points: 20, faction: "ogros", relic: false, summary: "TSE 5+. 1D6 inicio: 1-2: -1H, 6: +1F." }
    },
    "Artefacto Arcano": {
        "Bastón Recetario de Urgo": { points: 50, faction: "ogros", relic: true, summary: "Elegir hechizos (1 saber). A2M, Ataques mágicos." },
        "Corazonaverno": { points: 35, faction: "ogros", relic: true, summary: "Un uso. Fase magia enemiga: dobles → disfunción. +1D dispersión por disfunción." },
        "Palo Tirarrayos": { points: 35, faction: "ogros", relic: false, summary: "Portahechizos(4). Proyectil mágico 12\": 1D6 impactos F6 sin TSA." },
        "Máscara de Cráneos": { points: 25, faction: "ogros", relic: false, summary: "Enemigos: -1L desmoralización/miedo/terror. Por fallo: +1D energía." },
        "Hoz de Grutt": { points: 10, faction: "ogros", relic: false, summary: "Fase magia: -1H → +1D energía." }
    },
    "Objeto Hechizado": {
        "León de Jade": { points: 35, faction: "ogros", relic: false, summary: "Portador y unidad: repiten chequeos L." },
        "Estatuilla Bramhir": { points: 35, faction: "ogros", relic: false, summary: "TSE 4+ vs Caos, Enanos Caos, Skaven." },
        "Barril de licor de lagarto del trueno": { points: 25, faction: "ogros", relic: false, summary: "Portador y unidad: Reg(6+), Inmune psicología, Inflamables." },
        "Ojorroca": { points: 25, faction: "ogros", relic: false, summary: "Sólo matarifes/maestros carniceros. Guarda 1D energía/disp. Revela objetos/enemigos ocultos 18\"." },
        "Pellejo de Espaldagris": { points: 15, faction: "ogros", relic: false, summary: "Sólo cazadores. Enemigos contacto: -1HA -1I. Ataques mágicos." },
        "Marca del Demonio": { points: 10, faction: "ogros", relic: false, summary: "Terror." }
    },
    "Estandarte Mágico": {
        "Fauces Rúnicas": { points: 40, faction: "ogros", relic: true, summary: "RM(2). 'Ni un paso atrás' 18\"." },
        "Pellejodragón": { points: 50, faction: "ogros", relic: false, summary: "Repite 1s al cargar. 1 uso: vendaval helado (1D6 F2, I mitad)." },
        "Estandarte de Trapos": { points: 30, faction: "ogros", relic: false, summary: "Sangre fría." },
        "Tótem de los caníbales": { points: 25, faction: "ogros", relic: false, summary: "Furia asesina. No perseguir/arrasar." },
        "Estandarte de los Toros": { points: 15, faction: "ogros", relic: false, summary: "Impactos por carga (1) sustituye Arremetida." },
        "Pabellón Encantado": { points: 10, faction: "ogros", relic: false, summary: "Ataques mágicos." }
    }
};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Reinos Ogros",
    FACTION_ID: "ogros",
    FOC_CONFIG: { 
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_ogros,
    mountsDB: mountsDB_ogros,
    magicItemsDB: magicItemsDB_ogros,
    armySkillsDB: armySkillsDB_ogros,
    specialProfilesDB: {},
    armySkillsLabel: "Sobrenombres Ogros",
};
// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: NORSCA ---
// ===================================================================================
// Last Updated: 2025-10-25 - v4.1
import { commonMagicItemsDB } from '../comun.js'; // Assuming common items are in comun.js

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_nors = {
    // === CORE ===
    "Barbaros de Norsca": {
        faction: "nors",
        foc: "Core",
        points: 5,
        min: 10,
        max: 40,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Nacidos para la Guerra, Muerte en Combate.",
        perfiles: [
            { nombre: "Bárbaro de Norsca", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 7 } },
            { nombre: "Campeón", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 2, L: 7 } }
        ],
        options: [
            { n: "Mayales", p: 1, exclusiveGroup: "weapon" },
            { n: "Armas a dos manos", p: 1, exclusiveGroup: "weapon" },
            { n: "Lanza", p: 1, exclusiveGroup: "weapon" },
            { n: "Armas de mano adicionales", p: 1, exclusiveGroup: "weapon" },
            { n: "Escudos", p: 1 },
            // Marcas del Caos
            { n: "Marca de Khorne", p: 1, exclusiveGroup: "chaosMark", summary: "Odio, RM(1)." },
            { n: "Marca de Slaanesh", p: 1, exclusiveGroup: "chaosMark", summary: "Poder Penetración, +1I." },
            { n: "Marca de Nurgle", p: 1, exclusiveGroup: "chaosMark", summary: "Inmune Veneno, Miedo." },
            { n: "Marca de Tzeentch", p: 1, exclusiveGroup: "chaosMark", summary: "Ataques Flamígeros y Mágicos." },
            { n: "Marca del Caos Absoluto", p: 1, exclusiveGroup: "chaosMark", summary: "Inmune Pánico, Carga Devastadora." }
        ],
        command: { c: { n: "Campeón", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        magicBanner: 25
    },
    "Cazadores Nórdicos": {
        faction: "nors",
        foc: "Core",
        points: 5,
        min: 10,
        max: 30, // Max 15 if Hostigadores
        equipo: "Lanza.",
        reglasEspeciales: "Vanguardia, Nacidos para la Guerra.",
         perfiles: [
            { nombre: "Cazador", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 7 } },
            { nombre: "Campeón", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 2, L: 7 } }
        ],
         options: [
            { n: "Escudos", p: 1 },
            { n: "Jabalinas", p: 1 },
            { n: "Hachas arrojadizas", p: 1 },
            { n: "Arcos", p: 2, restriction: "No con Marca Khorne" }, // Needs validation if Khorne mark selected
            { n: "Convertir en Hostigadores", p: 2, summary: "Tamaño 5-15." },
             // Marcas del Caos
            { n: "Marca de Khorne", p: 1, exclusiveGroup: "chaosMark", summary: "Odio, RM(1)." },
            { n: "Marca de Slaanesh", p: 1, exclusiveGroup: "chaosMark", summary: "Poder Penetración, +1I." },
            { n: "Marca de Nurgle", p: 1, exclusiveGroup: "chaosMark", summary: "Inmune Veneno, Miedo." },
            { n: "Marca de Tzeentch", p: 1, exclusiveGroup: "chaosMark", summary: "Ataques Flamígeros y Mágicos." },
            { n: "Marca del Caos Absoluto", p: 1, exclusiveGroup: "chaosMark", summary: "Inmune Pánico, Carga Devastadora." }
        ],
        command: { c: { n: "Campeón", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } }
    },
    "Exploradores Nórdicos": {
        faction: "nors",
        foc: "Core",
        warning: "0-2",
        points: 9,
        min: 5,
        max: 15,
        equipo: "Arma de mano, Armadura ligera y Hachas arrojadizas.",
        reglasEspeciales: "Nacidos para la Guerra, Hostigadores, Exploradores, Antorchas (Ataques Flamígeros CaC y proyectil).",
         perfiles: [
            { nombre: "Explorador", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 7 } },
            { nombre: "Campeón", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 2, L: 7 } }
        ],
         options: [
            { n: "Armas de mano adicionales", p: 1 },
            { n: "Escudos", p: 1 },
            { n: "Arcos", p: 2, restriction: "No con Marca Khorne" },
            // Marcas del Caos
            { n: "Marca de Khorne", p: 1, exclusiveGroup: "chaosMark", summary: "Odio, RM(1)." },
            { n: "Marca de Slaanesh", p: 1, exclusiveGroup: "chaosMark", summary: "Poder Penetración, +1I." },
            { n: "Marca de Nurgle", p: 1, exclusiveGroup: "chaosMark", summary: "Inmune Veneno, Miedo." },
            { n: "Marca de Tzeentch", p: 1, exclusiveGroup: "chaosMark", summary: "Ataques Flamígeros y Mágicos." },
            { n: "Marca del Caos Absoluto", p: 1, exclusiveGroup: "chaosMark", summary: "Inmune Pánico, Carga Devastadora." }
        ],
        command: { c: { n: "Campeón", p: 5 }, m: { n: "Músico", p: 5 } }
    },
    "Jinetes Barbaros": {
        faction: "nors",
        foc: "Core",
        points: 14,
        min: 5,
        max: 20,
        equipo: "Arma de mano y Armadura ligera.",
        montura: "Caballos de guerra.",
        reglasEspeciales: "Nacidos para la Guerra, Caballería rápida.",
        perfiles: [
            { nombre: "Jinete Bárbaro", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 7 } },
            { nombre: "Campeón", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 2, L: 7 } },
            { nombre: "Caballo de guerra", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } }
        ],
        options: [
            { n: "Mayales", p: 2, exclusiveGroup: "weapon" },
            { n: "Lanzas", p: 1, exclusiveGroup: "weapon" },
            { n: "Hachas arrojadizas", p: 1 },
            { n: "Jabalinas", p: 1 },
            { n: "Escudos", p: 1 },
             // Marcas del Caos
            { n: "Marca de Khorne", p: 2, exclusiveGroup: "chaosMark", summary: "Odio, RM(1)." },
            { n: "Marca de Slaanesh", p: 2, exclusiveGroup: "chaosMark", summary: "Poder Penetración, +1I." },
            { n: "Marca de Nurgle", p: 2, exclusiveGroup: "chaosMark", summary: "Inmune Veneno, Miedo." },
            { n: "Marca de Tzeentch", p: 2, exclusiveGroup: "chaosMark", summary: "Ataques Flamígeros y Mágicos." },
            { n: "Marca del Caos Absoluto", p: 2, exclusiveGroup: "chaosMark", summary: "Inmune Pánico, Carga Devastadora (jinete)." }
        ],
         command: { c: { n: "Campeón", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },
    "Señor de las Bestias": {
        faction: "nors",
        foc: "Core",
        warning: "Máx 1 unidad por cada unidad de Bárbaros de Norsca.",
        points: 20, // Base cost for the Señor
        min: 1, max: 1, // Only one Señor model
        composition: { // Special composition for Señor + Mastines
            type: "unitPlusAddons",
             primary: { name: "Señor de las Bestias", cost: 20, min: 1, max: 1 },
             addons: [
                 { name: "Mastines del Caos", cost: 6, min: 5, max: 20, profileKey: "MastinCaos" }
             ]
        },
        equipo: "Señor: Dos armas de mano, armadura ligera. Mastines: Garras y dientes (Arma de mano).",
        reglasEspeciales: "Nacidos para la Guerra, Cruzar (Bosques, difícil, obstáculos), Señor de las Bestias (oficial, ataca desde 2ª fila), Aullido de guerra (1/batalla: Mastines ganan Carga Devastadora).",
        perfiles: [
             { nombre: "Señor de las Bestias", stats: { M: 7, HA: 4, HP: 3, F: 4, R: 4, H: 2, I: 4, A: 2, L: 8 } },
             { nombre: "Mastín Alfa", stats: { M: 7, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 4, A: 2, L: 5 } } // For command upgrade
             // MastinCaos profile defined in specialProfilesDB
        ],
        options: [
             { n: "Mejorar Mastines a Famélicos", p: 2, costType: 'perAddon', targetAddon: 'Mastines del Caos', summary: "Furia Asesina, Ansia de Sangre." }
        ],
        command: { c: { n: "Convertir Mastín en Alfa", p: 6 } } // Señor is default champ
    },

    // === SPECIAL ===
    "Incursores Nórdicos": {
        faction: "nors",
        foc: "Special",
        warning: "Máx 1 unidad por cada unidad de Bárbaros de Norsca.",
        points: 6,
        min: 10,
        max: 30,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Nacidos para la Guerra, Muerte en Combate, Furia asesina.",
        perfiles: [
            { nombre: "Incursor Nórdico", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 7 } },
            { nombre: "Campeón Incursor Nórdico", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 2, L: 8 } }
        ],
        options: [
            { n: "Mayales", p: 1, exclusiveGroup: "weapon" },
            { n: "Armas a dos manos", p: 1, exclusiveGroup: "weapon" },
            { n: "Armas de mano adicionales", p: 1, exclusiveGroup: "weapon" },
            { n: "Escudos", p: 1 },
            { n: "Hachas arrojadizas", p: 1 },
            { n: "Emboscada", p: 2, restriction: "Solo una unidad"} // Need custom validation
        ],
         command: { c: { n: "Campeón Incursor Nórdico", p: 8 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } }
    },
    "Bersekers Bárbaros": {
        faction: "nors",
        foc: "Special",
        points: 8,
        min: 10,
        max: 30,
        equipo: "Dos Armas de mano.",
        reglasEspeciales: "Furia asesina, Morir Matando, Nacidos para la Guerra, Muerte en Combate.",
        perfiles: [
            { nombre: "Berseker", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 1, L: 8 } }, // Base A1, Furia gives +1
            { nombre: "Campeón", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 2, L: 8 } } // Base A2, Furia gives +1
        ],
         options: [
            // Marcas del Caos
            { n: "Marca de Khorne", p: 1, exclusiveGroup: "chaosMark", summary: "Odio, RM(1)." },
            { n: "Marca de Slaanesh", p: 1, exclusiveGroup: "chaosMark", summary: "Poder Penetración, +1I." },
            { n: "Marca de Nurgle", p: 1, exclusiveGroup: "chaosMark", summary: "Inmune Veneno, Miedo." },
            { n: "Marca de Tzeentch", p: 1, exclusiveGroup: "chaosMark", summary: "Ataques Flamígeros y Mágicos." },
            { n: "Marca del Caos Absoluto", p: 1, exclusiveGroup: "chaosMark", summary: "Inmune Pánico, Carga Devastadora." }
        ],
        command: { c: { n: "Campeón", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        magicBanner: 50
    },
    "Huscarls": {
        faction: "nors",
        foc: "Special",
        points: 9,
        min: 10,
        max: 30,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Nacidos para la Guerra, Muerte en Combate, Escolta (Sangre fría si Señor Guerra/Jarl en unidad).",
         perfiles: [
            { nombre: "Huscarl", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 1, I: 4, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 1, I: 4, A: 2, L: 8 } }
        ],
         options: [
            { n: "Mayales", p: 1, exclusiveGroup: "weapon" },
            { n: "Armas a dos manos", p: 2, exclusiveGroup: "weapon" },
            { n: "Armas de mano adicionales", p: 1, exclusiveGroup: "weapon" },
            { n: "Escudos", p: 1 },
            { n: "Sustituir AL por Armadura Pesada", p: 2 },
            // Marcas del Caos
            { n: "Marca de Khorne", p: 1, exclusiveGroup: "chaosMark", summary: "Odio, RM(1)." },
            { n: "Marca de Slaanesh", p: 1, exclusiveGroup: "chaosMark", summary: "Poder Penetración, +1I." },
            { n: "Marca de Nurgle", p: 1, exclusiveGroup: "chaosMark", summary: "Inmune Veneno, Miedo." },
            { n: "Marca de Tzeentch", p: 1, exclusiveGroup: "chaosMark", summary: "Ataques Flamígeros y Mágicos." },
            { n: "Marca del Caos Absoluto", p: 1, exclusiveGroup: "chaosMark", summary: "Inmune Pánico, Carga Devastadora." }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50
    },
    "Pieles Lobo": {
        faction: "nors",
        foc: "Special",
        points: 47,
        min: 3,
        max: 6,
        equipo: "Garras y dientes (Arma de mano).",
        reglasEspeciales: "Furia asesina, Miedo, Regeneración (5+), Veloces, Muerte en Combate.",
        perfiles: [
            { nombre: "Piel Lobo", stats: { M: 7, HA: 4, HP: 0, F: 5, R: 4, H: 3, I: 4, A: 3, L: 8 } },
            { nombre: "Piel Lobo Alfa", stats: { M: 7, HA: 4, HP: 0, F: 5, R: 4, H: 3, I: 4, A: 4, L: 8 } }
        ],
        command: { c: { n: "Piel Lobo Alfa", p: 8 } }
    },
     "Guerreros Consagrados": {
        faction: "nors",
        foc: "Special",
        points: 7,
        min: 10,
        max: 30,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Nacidos para la Guerra, Muerte en Combate.",
        perfiles: [
            { nombre: "Guerrero consagrado", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 1, L: 8 } },
            { nombre: "Campeón", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 2, L: 8 } }
        ],
         options: [
            { n: "Mayales", p: 1, exclusiveGroup: "weapon" },
            { n: "Armas a dos manos", p: 2, exclusiveGroup: "weapon" },
            { n: "Armas de mano adicionales", p: 1, exclusiveGroup: "weapon" },
            { n: "Escudos", p: 1 },
            { n: "Sustituir AL por Armadura Pesada", p: 2 },
             // Marcas del Caos
            { n: "Marca de Khorne", p: 1, exclusiveGroup: "chaosMark", summary: "Odio, RM(1)." },
            { n: "Marca de Slaanesh", p: 1, exclusiveGroup: "chaosMark", summary: "Poder Penetración, +1I." },
            { n: "Marca de Nurgle", p: 1, exclusiveGroup: "chaosMark", summary: "Inmune Veneno, Miedo." },
            { n: "Marca de Tzeentch", p: 1, exclusiveGroup: "chaosMark", summary: "Ataques Flamígeros y Mágicos." },
            { n: "Marca del Caos Absoluto", p: 1, exclusiveGroup: "chaosMark", summary: "Inmune Pánico, Carga Devastadora." }
        ],
        command: { c: { n: "Campeón", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50
    },
    "Lobos de Hielo Norses": {
        faction: "nors",
        foc: "Special",
        warning: "0-1 (unless General has 'Señor de los lobos' Saga).",
        points: 18,
        min: 3,
        max: 10,
        equipo: "Garras y dientes (Arma de mano).",
        reglasEspeciales: "Miedo, Aura de escarcha, Caballería ligera.",
        perfiles: [
            { nombre: "Lobo de hielo Norse", stats: { M: 9, HA: 4, HP: 0, F: 4, R: 4, H: 2, I: 4, A: 2, L: 6 } },
            { nombre: "Lobo de hielo Norse Alfa", stats: { M: 9, HA: 4, HP: 0, F: 4, R: 4, H: 2, I: 4, A: 3, L: 7 } }
        ],
        command: { c: { n: "Lobo de hielo Norse Alfa", p: 8 } }
    },
    "Jinetes Consagrados": {
        faction: "nors",
        foc: "Special",
        points: 16,
        min: 5,
        max: 15,
        equipo: "Arma de mano y Armadura ligera.",
        montura: "Corceles del Caos.",
        reglasEspeciales: "Nacidos para la Guerra, Muerte en Combate, Vanguardia.",
        perfiles: [
            { nombre: "Jinete consagrado", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 2, L: 8 } },
            { nombre: "Corcel del Caos", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 3, A: 1, L: 6 } }
        ],
         options: [
            { n: "Mayales", p: 2, exclusiveGroup: "weapon" },
            { n: "Lanzas", p: 1, exclusiveGroup: "weapon" },
            { n: "Armas de mano adicionales", p: 1, exclusiveGroup: "weapon" },
            { n: "Armas a dos manos", p: 2, exclusiveGroup: "weapon" },
            { n: "Escudos", p: 1 },
            { n: "Sustituir AL por Armadura Pesada", p: 2 },
            { n: "Barda para Corceles", p: 2, summary: "Pierde Vanguardia." },
            // Marcas del Caos
            { n: "Marca de Khorne", p: 3, exclusiveGroup: "chaosMark", summary: "Odio, RM(1)." },
            { n: "Marca de Slaanesh", p: 3, exclusiveGroup: "chaosMark", summary: "Poder Penetración, +1I." },
            { n: "Marca de Nurgle", p: 3, exclusiveGroup: "chaosMark", summary: "Inmune Veneno, Miedo." },
            { n: "Marca de Tzeentch", p: 3, exclusiveGroup: "chaosMark", summary: "Ataques Flamígeros y Mágicos." },
            { n: "Marca del Caos Absoluto", p: 3, exclusiveGroup: "chaosMark", summary: "Inmune Pánico, Carga Devastadora (jinete)." }
        ],
         command: { c: { n: "Oficial", p: 8 }, s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } },
        magicBanner: 50
    },
    "Trolls del Hielo": {
        faction: "nors",
        foc: "Special",
        points: 33,
        min: 2,
        max: 6,
        equipo: "Armas de mano.",
        reglasEspeciales: "Miedo, Estupidez, Vómito de troll, Regeneración (4+), Furia asesina, Inflamable, Aura de escarcha.",
         perfiles: [
            { nombre: "Troll del hielo", stats: { M: 6, HA: 3, HP: 1, F: 5, R: 4, H: 3, I: 1, A: 3, L: 4 } }
        ],
         options: [
            { n: "Armas de mano adicionales", p: 5 },
            { n: "Armas a dos manos", p: 5 }
        ]
    },
    "Carruaje de Guerra": {
        faction: "nors",
        foc: "Special",
        points: 80,
        min: 1,
        max: 2,
        equipo: "Tripulación: Lanzas y Hachas arrojadizas.",
        reglasEspeciales: "Nacidos para la Guerra, Muerte en Combate, TSA (5+).",
        perfiles: [
            { nombre: "Carruaje", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 4, H: 4, I: "-", A: "-", L: "-" } },
            { nombre: "Guerreros (2)", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 1, L: 8 } }, // Using Guerrero Consagrado profile
            { nombre: "Caballos de guerra (2)", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } }
        ],
        options: [
            { n: "Sustituir lanzas por armas a dos manos", p: 2 },
            { n: "Cuchillas en las ruedas", p: 5 },
             // Marcas del Caos
            { n: "Marca de Khorne", p: 5, exclusiveGroup: "chaosMark", summary: "Odio, RM(1)." },
            { n: "Marca de Slaanesh", p: 5, exclusiveGroup: "chaosMark", summary: "Poder Penetración, +1I." },
            { n: "Marca de Nurgle", p: 5, exclusiveGroup: "chaosMark", summary: "Inmune Veneno, Miedo." },
            { n: "Marca de Tzeentch", p: 5, exclusiveGroup: "chaosMark", summary: "Ataques Flamígeros y Mágicos." },
            { n: "Marca del Caos Absoluto", p: 5, exclusiveGroup: "chaosMark", summary: "Inmune Pánico, Carga Devastadora (tripulación)." }
        ]
    },
    "Carro de Hielo Norse": {
        faction: "nors",
        foc: "Special",
        points: 105,
        min: 1,
        max: 1,
        equipo: "Tripulación: Lanzas y Hachas arrojadizas.",
        reglasEspeciales: "Nacidos para la Guerra, Muerte en Combate, TSA (4+), Aura de Escarcha (lobos).",
        perfiles: [
             { nombre: "Carruaje", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 5, H: 4, I: "-", A: "-", L: "-" } },
             { nombre: "Guerreros (2)", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 1, L: 8 } }, // Using Guerrero Consagrado profile
             { nombre: "Lobo de hielo Norse (2)", stats: { M: 9, HA: 4, HP: 0, F: 4, R: 4, H: 2, I: 4, A: 2, L: 6 } } // Using Lobo unit profile L6
        ],
         options: [
            { n: "Sustituir lanzas por armas a dos manos", p: 2 },
            { n: "Cuchillas en las ruedas", p: 5 }
        ]
        // No Marcas option listed
    },

    // === RARE ===
    "Paladines Barbaros": {
        faction: "nors",
        foc: "Rare",
        points: 15,
        min: 10,
        max: 30,
        equipo: "Arma de mano y Armadura pesada.",
        reglasEspeciales: "Indesmoralizables, Nacidos para la Guerra, Muerte en Combate.",
        perfiles: [
            { nombre: "Paladin Barbaro", stats: { M: 4, HA: 5, HP: 3, F: 4, R: 4, H: 1, I: 4, A: 2, L: 8 } },
            { nombre: "Campeón", stats: { M: 4, HA: 5, HP: 3, F: 4, R: 4, H: 1, I: 4, A: 3, L: 8 } }
        ],
         options: [
            { n: "Mayales", p: 1, exclusiveGroup: "weapon" },
            { n: "Lanza", p: 1, exclusiveGroup: "weapon" },
            { n: "Armas a dos manos", p: 2, exclusiveGroup: "weapon" },
            { n: "Armas de mano adicionales", p: 1, exclusiveGroup: "weapon" },
            { n: "Escudos", p: 1 },
             // Marcas del Caos
            { n: "Marca de Khorne", p: 2, exclusiveGroup: "chaosMark", summary: "Odio, RM(1)." },
            { n: "Marca de Slaanesh", p: 2, exclusiveGroup: "chaosMark", summary: "Poder Penetración, +1I." },
            { n: "Marca de Nurgle", p: 2, exclusiveGroup: "chaosMark", summary: "Inmune Veneno, Miedo." },
            { n: "Marca de Tzeentch", p: 1, exclusiveGroup: "chaosMark", summary: "Ataques Flamígeros y Mágicos." }, // Price differs
            { n: "Marca del Caos Absoluto", p: 1, exclusiveGroup: "chaosMark", summary: "Inmune Pánico, Carga Devastadora." } // Price differs
        ],
         command: { c: { n: "Campeón", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50
    },
    "Gigante de Hielo": {
        faction: "nors",
        foc: "Rare",
        points: 185,
        min: 1,
        max: 1,
        equipo: "Dos Armas de mano.",
        reglasEspeciales: "Aura de escarcha, Tozudo, Carga devastadora, Resistencia sobrenatural (TSA 4+), Desgarrar (Heridas múltiples 1D3).",
        perfiles: [
            { nombre: "Gigante de hielo", stats: { M: 6, HA: 3, HP: 0, F: 6, R: 6, H: 6, I: 1, A: 4, L: 8 } }
        ]
    },
    "Serpiente Alada de Hielo": {
        faction: "nors",
        foc: "Rare",
        points: 155,
        min: 1,
        max: 1,
        equipo: "Garras y dientes (Arma de mano).",
        reglasEspeciales: "Volar, Ataques envenenados, Aguijón (+1A, Heridas múltiples 1D6), Piel escamosa (4+), Aura de escarcha.",
         perfiles: [
            { nombre: "Serpiente Alada de hielo", stats: { M: 8, HA: 5, HP: 0, F: 6, R: 5, H: 5, I: 3, A: "4+1", L: 6 } } // HA5, R5 in profile
        ]
    },
     "Mamut": {
        faction: "nors",
        foc: "Rare",
        warning: "0-1 (Total Mamuts en ejército, incluyendo monturas).",
        points: 295,
        min: 1,
        max: 1,
        equipo: "Tripulación: Lanzas y hachas lanzables. Mamut: Colmillos y patas (Arma de mano).",
        reglasEspeciales: "Nacidos para la Guerra (tripulación), Impactos por carga (1D6), Piel escamosa (3+), Heridas múltiples (1D3, mamut), Castillo sobre el mamut, Temblor de tierra, Aplastar obstáculos, Enorme tamaño.",
        perfiles: [
            { nombre: "Mamut", stats: { M: 6, HA: 3, HP: 0, F: 8, R: 7, H: 8, I: 1, A: 4, L: 8 } },
            { nombre: "Barbaros (10)", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 8 } } // Use Barbaro profile with A1/L8 from Mamut entry
        ],
        command: { s: { n: "Portaestandarte", p: 15 }, m: { n: "Músico", p: 5 } }, // Only standard and musician for crew
        magicBanner: 25
    },

    // === LORDS ===
    "Señor de la Guerra Norse": {
        faction: "nors",
        foc: "Lord",
        points: 120,
        min: 1,
        max: 1, // Placeholder
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Nacidos para la Guerra, Muerte en Combate, Ojo de los Dioses.",
        perfiles: [
            { nombre: "Señor de la guerra", stats: { M: 4, HA: 7, HP: 4, F: 5, R: 4, H: 3, I: 6, A: 4, L: 9 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 3 },
            { n: "Arma a dos manos", p: 4 },
            { n: "Lanza (solo montado)", p: 2 },
            { n: "Mayal", p: 3 },
            { n: "Escudo", p: 3 },
            { n: "Hachas arrojadizas", p: 1 },
            { n: "Sustituir AL por Armadura Pesada", p: 3 },
            // Marcas
            { n: "Marca de Khorne", p: 15, exclusiveGroup: "chaosMarkLord", summary: "Furia Asesina, RM(1)." },
            { n: "Marca de Slaanesh", p: 15, exclusiveGroup: "chaosMarkLord", summary: "Inmune Psicología, Sangre Fría." },
            { n: "Marca de Nurgle", p: 15, exclusiveGroup: "chaosMarkLord", summary: "Inmune Veneno, +1R, -2I." },
            { n: "Marca de Tzeentch", p: 15, exclusiveGroup: "chaosMarkLord", summary: "TSE 6+ (+1 TSE), Ataques Mágicos/Flamígeros (CaC/proyectil)." },
            { n: "Marca del Caos Absoluto", p: 15, exclusiveGroup: "chaosMarkLord", summary: "Carga Devastadora, +1L." }
        ],
        mounts: ["Caballo de guerra", "Corcel del Caos", "Carruaje de Guerra", "Mamut"], // Barda is option on mount
        maxMagicItems: 3,
        maxRelics: 1,
        maxSkills: { limit: 2, type: 'count', skillSource: ['Recompensas del Caos', 'Sagas Nórdicas'] } // Can choose 1 Saga (if no Mark) OR up to 2 Recompensas (1 if no Mark, 2 if Marked)
    },
    "Gran Brujo Norse": {
        faction: "nors",
        foc: "Lord",
        points: 165,
        min: 1,
        max: 1, // Placeholder
        equipo: "Arma de mano.",
        reglasEspeciales: "Nacidos para la Guerra, Ojo de los Dioses.", // PDF says Ojo de los Dioses applies
         perfiles: [
            { nombre: "Gran brujo", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 3, I: 5, A: 3, L: 8 } }
        ],
        options: [
             { n: "Arma de mano adicional", p: 3 },
             { n: "Arma a dos manos", p: 3 },
             // Marcas (Hechicero)
             { n: "Marca de Slaanesh", p: 5, exclusiveGroup: "chaosMarkLord", summary: "Acceso Saber Slaanesh." },
             { n: "Marca de Nurgle", p: 5, exclusiveGroup: "chaosMarkLord", summary: "Acceso Saber Nurgle." },
             { n: "Marca de Tzeentch", p: 5, exclusiveGroup: "chaosMarkLord", summary: "Acceso Saber Tzeentch." },
             { n: "Marca del Caos Absoluto", p: 2, exclusiveGroup: "chaosMarkLord", summary: "Acceso Magia Oscura." } // Note: Khorne excluded
        ],
        magicLevel: 3,
        magicOptions: [{ level: 4, cost: 35 }],
        magicLores: ["Muerte", "Hielo", "Fuego", "Bestias"], // Base lores, marks add more
        mounts: ["Caballo de guerra", "Corcel del Caos", "Carruaje de Guerra", "Mamut"],
        maxMagicItems: 3,
        maxRelics: 1,
        maxSkills: { limit: 2, type: 'count', skillSource: 'Recompensas del Caos' } // Can choose 1 (if no Mark) or 2 (if Marked)
    },

    // === HEROES ===
    "Jarl Norse": {
        faction: "nors",
        foc: "Hero",
        points: 50,
        min: 1,
        max: 1, // Placeholder
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Nacidos para la Guerra, Muerte en Combate, Ojo de los Dioses.",
         perfiles: [
            { nombre: "Jarl Norse", stats: { M: 4, HA: 6, HP: 4, F: 4, R: 4, H: 2, I: 6, A: 3, L: 8 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 2 },
            { n: "Arma a dos manos", p: 3 },
            { n: "Lanza (solo montado)", p: 1 },
            { n: "Mayal", p: 2 },
            { n: "Escudo", p: 2 },
            { n: "Hachas arrojadizas", p: 1 },
            { n: "Sustituir AL por Armadura Pesada", p: 2 },
             // Marcas
            { n: "Marca de Khorne", p: 10, exclusiveGroup: "chaosMarkHero", summary: "Furia Asesina, RM(1)." },
            { n: "Marca de Slaanesh", p: 10, exclusiveGroup: "chaosMarkHero", summary: "Inmune Psicología, Sangre Fría." },
            { n: "Marca de Nurgle", p: 10, exclusiveGroup: "chaosMarkHero", summary: "Inmune Veneno, +1R, -2I." },
            { n: "Marca de Tzeentch", p: 10, exclusiveGroup: "chaosMarkHero", summary: "TSE 6+ (+1 TSE), Ataques Mágicos/Flamígeros (CaC/proyectil)." },
            { n: "Marca del Caos Absoluto", p: 10, exclusiveGroup: "chaosMarkHero", summary: "Carga Devastadora, +1L." }
        ],
        mounts: ["Caballo de guerra", "Corcel del Caos", "Carruaje de Guerra"],
        maxMagicItems: 2,
        maxSkills: { limit: 1, type: 'count', skillSource: ['Recompensas del Caos', 'Sagas Nórdicas'] } // 1 Recompensa OR 1 Saga (if no Mark)
    },
     "Brujo Norse": {
        faction: "nors",
        foc: "Hero",
        points: 65,
        min: 1,
        max: 1, // Placeholder
        equipo: "Arma de mano.",
        reglasEspeciales: "Nacidos para la Guerra, Ojo de los Dioses.",
         perfiles: [
            { nombre: "Brujo", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 2, I: 4, A: 2, L: 7 } }
        ],
        options: [
             { n: "Arma de mano adicional", p: 2 },
             { n: "Arma a dos manos", p: 2 },
             // Marcas (Hechicero)
             { n: "Marca de Slaanesh", p: 3, exclusiveGroup: "chaosMarkHero", summary: "Acceso Saber Slaanesh." },
             { n: "Marca de Nurgle", p: 3, exclusiveGroup: "chaosMarkHero", summary: "Acceso Saber Nurgle." },
             { n: "Marca de Tzeentch", p: 3, exclusiveGroup: "chaosMarkHero", summary: "Acceso Saber Tzeentch." },
             { n: "Marca del Caos Absoluto", p: 1, exclusiveGroup: "chaosMarkHero", summary: "Acceso Magia Oscura." }
        ],
        magicLevel: 1,
        magicOptions: [{ level: 2, cost: 35 }],
        magicLores: ["Muerte", "Hielo", "Fuego", "Bestias"],
        mounts: ["Caballo de guerra", "Corcel del Caos", "Carruaje de Guerra"],
        maxMagicItems: 2,
        maxSkills: { limit: 1, type: 'count', skillSource: 'Recompensas del Caos' } // 1 Recompensa
    },
     "Jefe de Tribu Barbaro": {
        faction: "nors",
        foc: "Hero",
        points: 30,
        min: 1,
        max: 1, // Placeholder
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Guerreros Tribales, Nacidos para la Guerra, Muerte en Combate, Ojo de los Dioses.",
         perfiles: [
            { nombre: "Jefe de Tribu Barbaro", stats: { M: 4, HA: 5, HP: 3, F: 4, R: 4, H: 2, I: 5, A: 3, L: 8 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 2 },
            { n: "Arma a dos manos", p: 3 },
            { n: "Lanza (solo montado)", p: 1 },
            { n: "Mayal", p: 2 },
            { n: "Escudo", p: 2 },
            { n: "Hachas arrojadizas", p: 1 },
            { n: "Sustituir AL por Armadura Pesada", p: 2 },
             // Marcas (Must match unit)
             { n: "Marca de Khorne", p: 5, exclusiveGroup: "chaosMarkHero", summary: "Odio, RM(1)." },
             { n: "Marca de Slaanesh", p: 5, exclusiveGroup: "chaosMarkHero", summary: "Poder Penetración, +1I." },
             { n: "Marca de Nurgle", p: 5, exclusiveGroup: "chaosMarkHero", summary: "Inmune Veneno, Miedo." },
             { n: "Marca de Tzeentch", p: 2, exclusiveGroup: "chaosMarkHero", summary: "Ataques Flamígeros y Mágicos." }, // Price differs
             { n: "Marca del Caos Absoluto", p: 2, exclusiveGroup: "chaosMarkHero", summary: "Inmune Pánico, Carga Devastadora." } // Price differs
        ],
        mounts: ["Caballo de guerra", "Corcel del Caos"], // Barda is option on mount
        maxSkills: { limit: 1, type: 'count', skillSource: 'Tribus Norses' } // Only Tribu
    }
};

const mountsDB_nors = {
    "Caballo de guerra": {
        faction: "nors",
        points: 8, // Jarl/Jefe Tribu cost
        perfiles: [ { nombre: "Caballo de guerra", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } } ],
        reglasEspeciales: "Bestia. Caballería.",
        options: [{ n: "Barda", p: 2 }] // Barda as option here
    },
    "Caballo de guerra (Señor Guerra/Gran Brujo)": {
        faction: "nors",
        points: 10, // Lord cost
        perfiles: [ { nombre: "Caballo de guerra", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } } ],
        reglasEspeciales: "Bestia. Caballería.",
         options: [{ n: "Barda", p: 3 }] // Lord Barda cost
    },
    "Corcel del Caos": {
        faction: "nors",
        points: 13, // Jarl/Jefe Tribu cost
        perfiles: [ { nombre: "Corcel del Caos", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 3, A: 1, L: 6 } } ],
        reglasEspeciales: "Bestia. Caballería.",
        options: [{ n: "Barda", p: 2 }]
    },
    "Corcel del Caos (Señor Guerra)": {
        faction: "nors",
        points: 15, // Lord cost
        perfiles: [ { nombre: "Corcel del Caos", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 3, A: 1, L: 6 } } ],
        reglasEspeciales: "Bestia. Caballería.",
         options: [{ n: "Barda", p: 3 }]
    },
     "Corcel del Caos (Gran Brujo)": { // Different cost for Brujo Lord
        faction: "nors",
        points: 14,
        perfiles: [ { nombre: "Corcel del Caos", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 3, A: 1, L: 6 } } ],
        reglasEspeciales: "Bestia. Caballería.",
         options: [{ n: "Barda", p: 3 }]
    },
    "Carruaje de Guerra (Señor Guerra)": {
        faction: "nors",
        points: 60, // Lord cost (replaces 1 crew)
        perfiles: [
             { nombre: "Carruaje", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 4, H: 4, I: "-", A: "-", L: "-" } },
             { nombre: "Guerrero (1)", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 1, L: 8 } },
             { nombre: "Caballos de guerra (2)", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } }
        ],
        reglasEspeciales: "Carro. TSA(5+)." // Tripulación rules handled implicitly
        // Add options like Cuchillas? Assumed base chariot.
    },
    "Carruaje de Guerra (Jarl/Brujo)": {
         faction: "nors",
         points: 65, // Hero cost
        perfiles: [
             { nombre: "Carruaje", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 4, H: 4, I: "-", A: "-", L: "-" } },
             { nombre: "Guerrero (1)", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 1, L: 8 } },
             { nombre: "Caballos de guerra (2)", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } }
        ],
        reglasEspeciales: "Carro. TSA(5+)."
    },
    "Mamut": {
        faction: "nors",
        warning: "0-1 (Total Mamuts en ejército, incluyendo unidades).",
        points: 295,
        perfiles: [
            { nombre: "Mamut", stats: { M: 6, HA: 3, HP: 0, F: 8, R: 7, H: 8, I: 1, A: 4, L: 8 } },
            // Barbaros are part of the monster profile/rules, not separate mount profiles
        ],
        reglasEspeciales: "Monstruo. Objetivo grande, Aplastar obstáculos, Imp Carga(1D6), Piel Escamosa(3+), Heridas Múltiples(1D3), Terror, Temblor tierra, Enorme tamaño, Nacidos Guerra."
        // Note: Character replaces crew, crew profile not needed here
    }
};

const magicItemsDB_nors = {
     // --- ARMAS MÁGICAS ---
    "Arma Mágica": {
        "Hacha de la destrucción": { points: 45, faction: "nors", relic: true, summary: "A2M. Niega TSA, Heridas Múltiples(1D3)." },
        "Espada de la Ventisca": { points: 50, faction: "nors", relic: false, summary: "AM. +3I, +2F, +1A." },
        "Martillo Atronador": { points: 40, faction: "nors", relic: false, summary: "A2M. +1 impactar CaC. I0 -> 1 imp auto F5 (Ataque Rayos) a 1 miniatura en contacto." },
        "Hachas Sedientas": { points: 35, faction: "nors", relic: false, summary: "Armas Emparejadas. Golpe Maestro(6+ niega salv.). +1F por baja con Golpe Maestro (max F10). Gasta incrementos para curar 1H/incremento." },
        "Martillo de Aithorr": { points: 30, faction: "nors", relic: false, summary: "AM. +1F, Odio, Golpe Maestro." },
        "Venablo siniestro": { points: 25, faction: "nors", relic: false, summary: "Lanza. Golpe Letal. Puede dispararse (Jabalina, mágico, Golpe Letal, retorna)." },
        "Bebedora de sangre": { points: 25, faction: "nors", relic: false, summary: "AM. Infantería. Furia Asesina (no se pierde). +1D3+1A (en vez de +1). 1s para impactar hieren a unidad amiga." },
        "Hacha Gelida": { points: 20, faction: "nors", relic: false, summary: "AM. Poder Penetración. Enemigos en contacto I0." }
    },
    // --- ARMADURAS MÁGICAS ---
    "Armadura Mágica": {
        "Pellejos de Troll": { points: 50, faction: "nors", relic: true, summary: "AL. Regeneración(4+), Piel Escamosa(5+). Total TSA 4+." },
        "Brazaletes Glaciales": { points: 30, faction: "nors", relic: false, summary: "TSE 5+, RM(1)." },
        "Pieles de Oso Polar": { points: 25, faction: "nors", relic: false, summary: "AL. Aura Escarcha, Piel Escamosa(4+). Total TSA 3+." },
        "Escudo del Jarl": { points: 25, faction: "nors", relic: false, summary: "Escudo. -1 impactar vs portador/unidad con disparos." },
        "Armadura del saqueador": { points: 20, faction: "nors", relic: false, summary: "AL. Regeneración(6+) o +1 Reg (max 3+). Miedo." }
    },
    // --- TALISMANES ---
    "Talismán": {
        "Talismán de Hielo Azul": { points: 50, faction: "nors", relic: true, summary: "TSE 4+, Aura Escarcha." },
        "Tatuajes impíos": { points: 35, faction: "nors", relic: false, summary: "TSE Aura Demoníaca (4+). Afectado por reglas vs Demonios." },
        "Gema de la Escarcha": { points: 30, faction: "nors", relic: false, summary: "Aura Escarcha. Atacantes CaC chequean I (con mod. Aura) o impactan con 6+." },
        "Amuleto de plata pulida": { points: 25, faction: "nors", relic: false, summary: "Inmune Psicología. No Muertos/Demonios: -1 impactar CaC vs portador." },
        "Colgante de Runas": { points: 25, faction: "nors", relic: false, summary: "TSE 3+ vs Proyectiles (armas/máquinas/hechizos)." }
    },
    // --- ARTEFACTOS ARCANOS ---
    "Artefacto Arcano": {
        "Báculo de Hielo": { points: 40, faction: "nors", relic: true, summary: "+2 dispersar." },
        "Anillo de Escarcha": { points: 45, faction: "nors", relic: false, summary: "+1 Hechizo. Inmune Fuego, Regeneración(6+). Guarda hasta 2 dados energía/disp no usados. Solo Saber Hielo." },
        "Ojo de la Visión Infinita": { points: 35, faction: "nors", relic: false, summary: "Repite 1 dado energía/disp por fase. +2 canalizar. Revela obj mágicos 12\"." },
        "Vara de congelación": { points: 30, faction: "nors", relic: false, summary: "Portahechizos(8). Maldición 24\": Unidad chequea L (3D6 descarta bajo) o no carga/marcha/dispara sig. turno." },
        "Tótem del Caos": { points: 10, faction: "nors", relic: false, summary: "Sólo hechiceros con Marca. +1 hechizo extra del saber de su dios." }
    },
    // --- OBJETOS HECHIZADOS ---
    "Objeto Hechizado": {
        "El Corazón del Norte": { points: 50, faction: "nors", relic: true, summary: "Unidades amigas 12\" con Muerte en Combate: Sangre Fría." },
        "Máscara de la tribu del Águila": { points: 35, faction: "nors", relic: false, summary: "Terror. Portahechizos(1D6+1). Maldición 18\": Unidad -50% L (1 turno)." },
        "Cuerno de la Tormenta": { points: 35, faction: "nors", relic: false, summary: "Un uso. Inicio turno: Todos disparos -1 impactar (1 turno)." },
        "Brazales del Rayo": { points: 35, faction: "nors", relic: false, summary: "Portahechizos(3). Proyectil Mágico 18\": 1D6+1 imp F5 (Ataque Rayos)." },
        "Brebaje Berserker": { points: 30, faction: "nors", relic: false, summary: "Un uso. Inicio combate: +2D3 A (hasta fin fase)." },
        "Cuerno de Guerra": { points: 25, faction: "nors", relic: false, summary: "Un uso. Inicio turno: Infantería 12\" +1\" carga." },
        "Brazales de la ira": { points: 20, faction: "nors", relic: false, summary: "Furia Asesina. +1F, +1A por cada herida sufrida." }
    },
    // --- ESTANDARTES MÁGICOS ---
    "Estandarte Mágico": {
        "Estandarte Rúnico de Norsca": { points: 50, faction: "nors", relic: false, summary: "Unidad con Muerte en Combate: +1F (no monturas)." },
        "Estandarte de la Tormenta": { points: 40, faction: "nors", relic: false, summary: "Unidad: TSE 5+ vs proyectiles (normales/mágicos)." },
        "Pabellón del Glaciar": { points: 35, faction: "nors", relic: false, summary: "Unidad: Sangre Fría, Aura Escarcha." },
        "Estandarte de los Salvajes": { points: 25, faction: "nors", relic: false, summary: "Unidad: Furia asesina." },
        "Estandarte de los Vientos del Norte": { points: 25, faction: "nors", relic: false, summary: "Unidad: +1M, Veloz." },
        "Pabellón del Hielo": { points: 25, faction: "nors", relic: false, summary: "Unidad: Aura Escarcha, RM(2)." },
        "Estandarte de la Avalancha": { points: 15, faction: "nors", relic: false, summary: "Unidad: +2I, Carga Devastadora (no monturas)." }
    }
};

const armySkillsDB_nors = { // Sagas, Tribus, Recompensas
    // Sagas Nórdicas (General Señor Guerra sin Marca)
    "Sangre de los dioses": { points: 30, faction: "nors", type: "Saga Nórdica", skillSource: 'Sagas Nórdicas', summary: "+1HA, +1L, +1A." },
    "Hijo de gigantes": { points: 40, faction: "nors", type: "Saga Nórdica", skillSource: 'Sagas Nórdicas', summary: "+1H, +1R. -3I, -2HA. No puede montar." },
    "Corazon de hielo": { points: 30, faction: "nors", type: "Saga Nórdica", skillSource: 'Sagas Nórdicas', summary: "Tozudo." },
    "Matagigantes": { points: 20, faction: "nors", type: "Saga Nórdica", skillSource: 'Sagas Nórdicas', summary: "Vs Monstruo/Bestia Mons/Cab Mons: Siempre hiere 4+ (si F no > R), Heridas Múltiples(2)." },
    "Sanguinario": { points: 20, faction: "nors", type: "Saga Nórdica", skillSource: 'Sagas Nórdicas', summary: "Furia Asesina, Odio." },
    "Matareyes": { points: 10, faction: "nors", type: "Saga Nórdica", skillSource: 'Sagas Nórdicas', summary: "Orgullo Marcial. +1 impactar en desafíos." },
    "Señor de los lobos": { points: 15, faction: "nors", type: "Saga Nórdica", skillSource: 'Sagas Nórdicas', summary: "Lobos Hielo Norses pierden 0-1. 1 unidad Pieles Lobo -> Básica." },

    // Tribus Norses (Jefe de Tribu Barbaro)
    "Conquistadores": { points: 10, faction: "nors", type: "Tribu Norse", skillSource: 'Tribus Norses', summary: "Personaje y unidad: +1L." },
    "Saqueadores": { points: 30, faction: "nors", type: "Tribu Norse", skillSource: 'Tribus Norses', summary: "Personaje y unidad: Armadura del Caos (TSA 4+)." },
    "Asaltantes": { points: 15, faction: "nors", type: "Tribu Norse", skillSource: 'Tribus Norses', summary: "Personaje y unidad: +1M." },
    "Sangrientos": { points: 20, faction: "nors", type: "Tribu Norse", skillSource: 'Tribus Norses', summary: "Personaje y unidad: Furia Asesina." },
    "Gigantes": { points: 40, faction: "nors", type: "Tribu Norse", skillSource: 'Tribus Norses', summary: "Personaje y unidad: +1R, -1I." },
    "Luchadores": { points: 10, faction: "nors", type: "Tribu Norse", skillSource: 'Tribus Norses', summary: "Personaje y unidad: +1HA." },
    "Cazadores": { points: 10, faction: "nors", type: "Tribu Norse", skillSource: 'Tribus Norses', summary: "Personaje y unidad: +1HP." },
    "Navegantes": { points: 10, faction: "nors", type: "Tribu Norse", skillSource: 'Tribus Norses', summary: "Personaje y unidad: +2I." },
    "Videntes": { points: 10, faction: "nors", type: "Tribu Norse", skillSource: 'Tribus Norses', summary: "Personaje y unidad: RM(1)." },
    "Inmortales": { points: 15, faction: "nors", type: "Tribu Norse", skillSource: 'Tribus Norses', summary: "Personaje y unidad: +2 TSA vs proyectiles (normal/mágico)." },
    "Traicioneros": { points: 15, faction: "nors", type: "Tribu Norse", skillSource: 'Tribus Norses', summary: "Personaje y unidad: Ataques Envenenados." },
    "Asesinos": { points: 20, faction: "nors", type: "Tribu Norse", skillSource: 'Tribus Norses', summary: "Personaje y unidad: Golpe Maestro." },
    "Inamovibles": { points: 35, faction: "nors", type: "Tribu Norse", skillSource: 'Tribus Norses', summary: "Personaje y unidad: Tozudos." },
    "Temibles": { points: 10, faction: "nors", type: "Tribu Norse", skillSource: 'Tribus Norses', summary: "Personaje y unidad: Miedo." },

     // Recompensas del Caos (Generic)
    "Manto del Caos": { points: 55, faction: "nors", type: "Recompensa Caos", skillSource: 'Recompensas del Caos', summary: "Impactos F>5 vs personaje -> F5." },
    "Esplendor diabólico": { points: 35, faction: "nors", type: "Recompensa Caos", skillSource: 'Recompensas del Caos', summary: "Enemigos 6\": -1L." },
    "Muchos brazos": { points: 25, faction: "nors", type: "Recompensa Caos", skillSource: 'Recompensas del Caos', summary: "+1A." },
    "Aliento de fuego": { points: 25, faction: "nors", type: "Recompensa Caos", skillSource: 'Recompensas del Caos', summary: "Arma Aliento F3 (Solo Flamígero)." },
    "Regeneración": { points: 25, faction: "nors", type: "Recompensa Caos", skillSource: 'Recompensas del Caos', summary: "Regeneración (5+) o +1 Reg." },
    "Apariencia horripilante": { points: 20, faction: "nors", type: "Recompensa Caos", skillSource: 'Recompensas del Caos', summary: "Terror." },
    "Cola maza": { points: 20, faction: "nors", type: "Recompensa Caos", skillSource: 'Recompensas del Caos', summary: "+1A CaC (propia HA/I, F5)." },
    "Esencia demoníaca": { points: 20, faction: "nors", type: "Recompensa Caos", skillSource: 'Recompensas del Caos', summary: "TSE Aura Demoníaca 5+ (+1 si ya tenía) vs no mágicos. Afectado por reglas vs Demonios." },
    "Chillido infernal": { points: 20, faction: "nors", type: "Recompensa Caos", skillSource: 'Recompensas del Caos', summary: "Ataque Disparo 8\", autoimpacta, 2D6 imp F1 sin TSA. Puede Aguantar y Disparar / usar en CaC." },
    "Hemónculo": { points: 15, faction: "nors", type: "Recompensa Caos", skillSource: 'Recompensas del Caos', summary: "Sólo hechiceros. 1/fase magia: +1D3 a lanzamiento. Chequea Estupidez sig. turno." },
    "Piel de hierro": { points: 10, faction: "nors", type: "Recompensa Caos", skillSource: 'Recompensas del Caos', summary: "Piel Escamosa (5+)." },
    "Grandes cuernos": { points: 5, faction: "nors", type: "Recompensa Caos", skillSource: 'Recompensas del Caos', summary: "Impactos por carga (1)." },
    // Recompensas Khorne
    "Collar de Khorne": { points: 35, faction: "nors", type: "Recompensa Caos", subfaction: "Khorne", skillSource: 'Recompensas del Caos', summary: "RM(3), TSE 6+." },
    "Furia de batalla de Khorne": { points: 30, faction: "nors", type: "Recompensa Caos", subfaction: "Khorne", skillSource: 'Recompensas del Caos', summary: "+1A, Carga Devastadora (+1F al cargar)." },
    "Alabanza de Khorne": { points: 25, faction: "nors", type: "Recompensa Caos", subfaction: "Khorne", skillSource: 'Recompensas del Caos', summary: "Repite TSA fallidas." },
    "Hacha de Khorne": { points: 20, faction: "nors", type: "Recompensa Caos", subfaction: "Khorne", skillSource: 'Recompensas del Caos', summary: "Golpe Letal (CaC). No puede usar otras armas." },
    // Recompensas Slaanesh
    "Rapidez de Slaanesh": { points: 15, faction: "nors", type: "Recompensa Caos", subfaction: "Slaanesh", skillSource: 'Recompensas del Caos', summary: "Dobla I (max 10)." },
    "Almizcle soporífero": { points: 25, faction: "nors", type: "Recompensa Caos", subfaction: "Slaanesh", skillSource: 'Recompensas del Caos', summary: "Enemigos en contacto: HA/I reducidas a mitad (no Demonios/NoMuertos/Slaanesh)." },
    "Mirada de Slaanesh": { points: 15, faction: "nors", type: "Recompensa Caos", subfaction: "Slaanesh", skillSource: 'Recompensas del Caos', summary: "Inicio ronda CaC: 1 enemigo en contacto -1A (min 1)." },
    "Fascinación de Slaanesh": { points: 20, faction: "nors", type: "Recompensa Caos", subfaction: "Slaanesh", skillSource: 'Recompensas del Caos', summary: "Oponentes en combate: -1 impactar." },
    // Recompensas Nurgle
    "Tamaño descomunal": { points: 35, faction: "nors", type: "Recompensa Caos", subfaction: "Nurgle", skillSource: 'Recompensas del Caos', summary: "+1R, -1I." },
    "Vigor de Nurgle": { points: 30, faction: "nors", type: "Recompensa Caos", subfaction: "Nurgle", skillSource: 'Recompensas del Caos', summary: "+1H." },
    "Putrefacción de Nurgle": { points: 25, faction: "nors", type: "Recompensa Caos", subfaction: "Nurgle", skillSource: 'Recompensas del Caos', summary: "Inicio ronda CaC: Miniaturas en contacto sin Marca Nurgle/Demonio Nurgle/Pestilens -> 6+ sufren 1H sin TSA." },
    "Vómito de corrupción": { points: 25, faction: "nors", type: "Recompensa Caos", subfaction: "Nurgle", skillSource: 'Recompensas del Caos', summary: "Arma Aliento F2 (sin TSA)." },
    // Recompensas Tzeentch
    "Fortuna de Tzeentch": { points: 40, faction: "nors", type: "Recompensa Caos", subfaction: "Tzeentch", skillSource: 'Recompensas del Caos', summary: "1/turno jugador: Repite 1D6 (impactar/herir/salvar/atributo, no L)." },
    "Destino de Tzeentch": { points: 25, faction: "nors", type: "Recompensa Caos", subfaction: "Tzeentch", skillSource: 'Recompensas del Caos', summary: "Sólo hechiceros. Ignora 1ª Disfunción Mágica." },
    "Voluntad de Tzeench": { points: 25, faction: "nors", type: "Recompensa Caos", subfaction: "Tzeentch", skillSource: 'Recompensas del Caos', summary: "+1 dado energía/fase magia propia (usable por cualquier personaje Tzeentch)." },
    "Maestro de la hechicería": { points: 15, faction: "nors", type: "Recompensa Caos", subfaction: "Tzeentch", skillSource: 'Recompensas del Caos', summary: "Sólo hechiceros. +1 hechizo conocido." }
};

const specialProfilesDB_nors = {
     "MastinCaos": {
        perfiles: [{ nombre: "Mastín del Caos", stats: { M: 7, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 4, A: 1, L: 5 } }]
     }
};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Norsca",
    FACTION_ID: "nors",
    armySkillsLabel: "Recompensas/Sagas/Tribus", // Combined label
    FOC_CONFIG: {
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_nors,
    mountsDB: mountsDB_nors,
    magicItemsDB: magicItemsDB_nors,
    armySkillsDB: armySkillsDB_nors,
    specialProfilesDB: specialProfilesDB_nors
};

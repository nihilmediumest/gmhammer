// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: EL IMPERIO ---
// ===================================================================================
// Last Updated: 2025-10-04 - v4.1
import { commonMagicItemsDB } from '../comun.js';

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_imp = {
    // === CORE ===
    "Espadachines": {
        faction: "imp",
        foc: "Core",
        points: 5,
        min: 10,
        max: 40,
        equipo: "Arma de mano, Armadura ligera y Escudo.",
        reglasEspeciales: "Destacamentos",
        perfiles: [
            { nombre: "Espadachines", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 } }
        ],
        command: { c: { n: "Oficial", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        magicBanner: 25
    },
    "Lanceros": {
        faction: "imp",
        foc: "Core",
        points: 5,
        min: 10,
        max: 40,
        equipo: "Lanza, Armadura ligera.",
        reglasEspeciales: "Destacamentos",
        perfiles: [
            { nombre: "Lanceros", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 } }
        ],
        options: [
            { n: "Escudo", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        magicBanner: 25
    },
    "Alabarderos": {
        faction: "imp",
        foc: "Core",
        points: 7,
        min: 10,
        max: 40,
        equipo: "Alabarda y Armadura ligera.",
        reglasEspeciales: "Destacamentos",
        perfiles: [
            { nombre: "Alabarderos", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 } }
        ],
        options: [
            { n: "Escudo", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        magicBanner: 25
    },
    "Ballesteros": {
        faction: "imp",
        foc: "Core",
        points: 7,
        min: 10,
        max: 40,
        equipo: "Ballesta y arma de mano.",
        reglasEspeciales: "Destacamentos",
        perfiles: [
            { nombre: "Ballesteros", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 4, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } }
        ],
        options: [
            { n: "Armadura ligera", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        magicBanner: 25
    },
    "Fusileros": {
        faction: "imp",
        foc: "Core",
        points: 7,
        min: 10,
        max: 40,
        equipo: "Arcabuz Imperial y arma de mano.",
        reglasEspeciales: "Destacamentos",
        perfiles: [
            { nombre: "Fusileros", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 4, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } }
        ],
        options: [
            { n: "Armadura ligera", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        magicBanner: 25
    },
    "Arqueros": {
        faction: "imp",
        foc: "Core",
        points: 5,
        min: 10,
        max: 40,
        equipo: "Arco largo y arma de mano.",
        reglasEspeciales: "Destacamentos",
        perfiles: [
            { nombre: "Arqueros", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 4, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } }
        ],
        options: [
            { n: "Escudo", p: 1 },
            { n: "Armadura ligera", p: 1 },
            { n: "Hostigadores (arcos)", p: 1, summary: "Cambia a Hostigadores, tamaño 5-15, sin portaestandarte" }
        ],
        command: { c: { n: "Oficial", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        magicBanner: 25
    },
    "Compañías Libres": {
        faction: "imp",
        foc: "Core",
        points: 4,
        min: 10,
        max: 40,
        equipo: "Dos armas de mano.",
        reglasEspeciales: "Destacamentos",
        perfiles: [
            { nombre: "Compañías libres", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 } }
        ],
        options: [
            { n: "Hostigadores", p: 1, summary: "Tamaño 5-15, sin portaestandarte" }
        ],
        command: { c: { n: "Oficial", p: 4 }, s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } }
    },
    "Órdenes de Caballería Imperiales": {
        faction: "imp",
        foc: "Core",
        points: 22,
        min: 5,
        max: 15,
        equipo: "Arma de mano, Lanza de caballería, Armadura de placas, Escudo.",
        reglasEspeciales: "",
        perfiles: [
            { nombre: "Caballero Imperial", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 3, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 3, A: 2, L: 8 } },
            { nombre: "Caballo de guerra", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 0, summary: "Sustituye lanza de caballería" },
            { n: "Reiksguard", p: 1, summary: "Sangre Fría" },
            { n: "Caballeros del León Dorado", p: 1, summary: "Carga devastadora (monturas), TSE 6+ vs proyectiles/magia" },
            { n: "Caballeros del Lobo Blanco", p: 1, summary: "Capas de lobo (+1 TSA vs disparos), A2M, Aplastar al débil" },
            { n: "Caballeros Pantera", p: 1, summary: "Odio" },
            { n: "Caballeros del Sol Llameante", p: 1, summary: "Inmune a Miedo y Ataques mágicos" }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50
    },

    // === SPECIAL ===
    "Caballeros del Círculo Interior": {
        faction: "imp",
        foc: "Special",
        warning: "0-1",
        points: 24,
        min: 5,
        max: 12,
        equipo: "Arma de mano, Lanza de caballería, Armadura de placas, Escudo.",
        reglasEspeciales: "Inmunes a pánico y miedo.",
        perfiles: [
            { nombre: "Caballero del Círculo Interior", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 1, I: 4, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 1, I: 4, A: 2, L: 8 } },
            { nombre: "Caballo de guerra", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 4, H: 1, I: 2, A: 1, L: 5 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 0, summary: "Sustituye lanza de caballería y escudo" },
            { n: "Reiksguard", p: 1 },
            { n: "Caballeros del León Dorado", p: 1 },
            { n: "Caballeros del Lobo Blanco", p: 1 },
            { n: "Caballeros Pantera", p: 1 },
            { n: "Caballeros del Sol Llameante", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 8 }, s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } },
        magicBanner: 50,
        champItems: 25
    },
    "Templarios a Pie": {
        faction: "imp",
        foc: "Special",
        warning: "0-1",
        points: 12,
        min: 10,
        max: 30,
        equipo: "Arma de mano, Escudo y Armadura de placas.",
        reglasEspeciales: "Inmunes a pánico y miedo.",
        perfiles: [
            { nombre: "Templarios a pie", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 2, L: 8 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 1 },
            { n: "Alabarda", p: 2 },
            { n: "Mayal", p: 1 },
            { n: "Reiksguard", p: 1 },
            { n: "Caballeros del Lobo Blanco", p: 1 },
            { n: "Caballeros Pantera", p: 1 },
            { n: "Caballeros del Sol Llameante", p: 1 },
            { n: "Caballeros del León Dorado", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50,
        champItems: 25
    },
    "Grandes Espaderos": {
        faction: "imp",
        foc: "Special",
        points: 10,
        min: 10,
        max: 30,
        equipo: "Arma a dos manos y Armadura de placas.",
        reglasEspeciales: "Destacamentos (sólo Unidad principal), Tozudos, Inmunes a pánico.",
        perfiles: [
            { nombre: "Grandes Espaderos", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 8 } }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50
    },
    "Cazadores": {
        faction: "imp",
        foc: "Special",
        points: 9,
        min: 5,
        max: 15,
        equipo: "Arco, armadura ligera y arma de mano.",
        reglasEspeciales: "Hostigadores, Exploradores",
        perfiles: [
            { nombre: "Cazadores", stats: { M: 4, HA: 3, HP: 4, F: 3, R: 3, H: 1, I: 4, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 5, F: 3, R: 3, H: 1, I: 4, A: 1, L: 7 } }
        ],
        options: [
            { n: "Armas de mano adicionales", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 }, m: { n: "Músico", p: 6 } }
    },
    "Herreruelos": {
        faction: "imp",
        foc: "Special",
        points: 18,
        min: 5,
        max: 15,
        equipo: "Arma de mano, Ristra de pistolas, Armadura pesada",
        reglasEspeciales: "Caballería rápida",
        perfiles: [
            { nombre: "Herreruelos", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 4, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Caballo de guerra", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } }
        ],
        options: [
            { n: "Lanza, arco y escudo", p: 0, summary: "Sustituye ristra de pistolas" }
        ],
        command: { c: { n: "Oficial", p: 6 }, m: { n: "Músico", p: 6 } }
    },
    "Batidores": {
        faction: "imp",
        foc: "Special",
        points: 22,
        min: 5,
        max: 10,
        equipo: "Arcabuz de repetición, Arma de mano, Armadura pesada",
        reglasEspeciales: "Caballería rápida, Arcabuz de repetición",
        perfiles: [
            { nombre: "Batidores", stats: { M: 4, HA: 3, HP: 4, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 5, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Caballo de guerra", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } }
        ],
        options: [
            { n: "Arcabuz de repetición Colt", p: 1, summary: "Sólo una unidad" },
            { n: "Barda para caballos", p: 2, summary: "Pierde Caballería rápida" }
        ],
        command: { c: { n: "Oficial", p: 6 }, m: { n: "Músico", p: 6 } }
    },
    "Gran Cañón Imperial": {
        faction: "imp",
        foc: "Special",
        points: 85,
        min: 1,
        max: 1,
        equipo: "La dotación va equipada con arma de mano.",
        reglasEspeciales: "Dispara como un cañón.",
        perfiles: [
            { nombre: "Gran Cañón", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: "-", I: "-", A: "-", L: "-" } },
            { nombre: "Dotación (3)", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } }
        ]
    },
    "Mortero": {
        faction: "imp",
        foc: "Special",
        points: 65,
        min: 1,
        max: 1,
        equipo: "La dotación va equipada con arma de mano.",
        reglasEspeciales: "Dispara como catapulta con plantilla grande, F3, Poder penetración. Impacto central F6, Heridas múltiples (1D3), niega TSA. Usa tabla problemas cañón.",
        perfiles: [
            { nombre: "Mortero", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: "-", I: "-", A: "-", L: "-" } },
            { nombre: "Dotación (3)", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } }
        ]
    },
    "Halflings": {
        faction: "imp",
        foc: "Special",
        warning: "0-1",
        points: 5,
        min: 5,
        max: 30,
        equipo: "Arco, armadura ligera y arma de mano.",
        reglasEspeciales: "Cruzar bosques, Esquivar (6+)",
        perfiles: [
            { nombre: "Halflings", stats: { M: 4, HA: 2, HP: 4, F: 2, R: 2, H: 1, I: 4, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 4, HA: 2, HP: 5, F: 2, R: 2, H: 1, I: 4, A: 2, L: 8 } }
        ],
        options: [
            { n: "Escudo", p: 0.5 },
            { n: "Lanza", p: 0.5 },
            { n: "Hostigadores", p: 1, summary: "Tamaño 5-15, sin portaestandarte" }
        ],
        command: { c: { n: "Oficial", p: 4 }, s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } },
        magicBanner: 25
    },
    "Enanos Imperiales": {
        faction: "imp",
        foc: "Special",
        warning: "0-1",
        points: 10,
        min: 5,
        max: 20,
        equipo: "Armadura pesada y Arma de mano.",
        reglasEspeciales: "Odio (Pielesverdes y skaven), Avance imparable",
        perfiles: [
            { nombre: "Enanos Imperiales", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 1, L: 9 } },
            { nombre: "Oficial", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 2, L: 9 } }
        ],
        options: [
            { n: "Escudo", p: 1 },
            { n: "Arma a dos manos", p: 2 },
            { n: "Ballesta", p: 3 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50
    },

    // === RARE ===
    "Flagelantes": {
        faction: "imp",
        foc: "Rare",
        points: 7,
        min: 10,
        max: 30,
        equipo: "Mayal.",
        reglasEspeciales: "Furia asesina, Indesmoralizables, Funáticos",
        perfiles: [
            { nombre: "Flagelantes", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Profeta", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 } }
        ],
        command: { c: { n: "Profeta", p: 4 }, s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } }
    },
    "Cañón de Salvas Hellblaster": {
        faction: "imp",
        foc: "Rare",
        points: 140,
        min: 1,
        max: 1,
        equipo: "La dotación va equipada con arma de mano.",
        reglasEspeciales: "Dispara 1-3 tubos, suma dados artillería para impactos. F5 a 12\" o menos, F4 a más. Poder penetración.",
        perfiles: [
            { nombre: "Cañón de salvas", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: "-", I: "-", A: "-", L: "-" } },
            { nombre: "Dotación (3)", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } }
        ]
    },
    "Carro de Guerra Imperial": {
        faction: "imp",
        foc: "Rare",
        points: 150,
        min: 1,
        max: 1,
        equipo: "6 ingenieros con diferentes armas experimentales.",
        reglasEspeciales: "TSA 3+, Potencia de unidad 5, Plataforma de Guerra (Objetivo Grande, disparo 360º, ignoran Mover o disparar)",
        perfiles: [
            { nombre: "Carro de guerra", stats: { M: "-", HA: "-", HP: "-", F: 6, R: 6, H: 5, I: "-", A: "-", L: "-" } },
            { nombre: "Ingeniero", stats: { M: "-", HA: 3, HP: 4, F: 3, R: "-", H: "-", I: 3, A: 1, L: 7 } },
            { nombre: "Caballo de guerra (2)", stats: { M: 8, HA: 2, HP: 0, F: 4, R: "-", H: "-", I: 2, A: 1, L: 5 } }
        ],
        options: [
            { n: "Carro de Disparo", p: 15, summary: "Arcabuz repetición y Trabuco cada ingeniero" },
            { n: "Carro de Combate", p: 25, summary: "Ristra pistolas, Atrapahombres, Bola cadena, Corceles mecánicos" },
            { n: "Rifle largo Hochland", p: 5, costType: "flat" }
        ]
    },
    "Batería de Cohetes": {
        faction: "imp",
        foc: "Rare",
        points: 110,
        min: 1,
        max: 1,
        equipo: "La dotación va equipada con arma de mano.",
        reglasEspeciales: "Dispara como catapulta con plantilla grande, F4, Ataques flamígeros. Usa tabla problemas lanzallamas.",
        perfiles: [
            { nombre: "Batería de cohetes", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: "-", I: "-", A: "-", L: "-" } },
            { nombre: "Dotación (3)", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } }
        ]
    },
    "Olla Caliente Halfling": {
        faction: "imp",
        foc: "Rare",
        warning: "0-1. Sólo con al menos un regimiento de halflings.",
        points: 55,
        min: 1,
        max: 1,
        equipo: "La dotación va equipada con arma de mano.",
        reglasEspeciales: "Dispara como catapulta (alcance 0-24\"), plantilla pequeña, F3, niega TSA. Impacto central F6, Heridas múltiples (1D3).",
        perfiles: [
            { nombre: "Olla caliente", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 5, H: "-", I: "-", A: "-", L: "-" } },
            { nombre: "Dotación halfling (3)", stats: { M: 4, HA: 2, HP: 4, F: 2, R: 2, H: 1, I: 4, A: 1, L: 8 } }
        ]
    },
    "Tanque a Vapor Imperial": {
        faction: "imp",
        foc: "Rare",
        points: 300,
        min: 1,
        max: 1,
        equipo: "Cañón, Cañón de vapor. Comandante con pistola repetición y arma de mano.",
        reglasEspeciales: "Indesmoralizable, TSA 1+, Potencia 10, Objetivo Grande, Immune veneno/Golpe letal, Puntos de Vapor, Tabla Caldera",
        perfiles: [
            { nombre: "Tanque a vapor", stats: { M: "*", HA: 0, HP: 0, F: 7, R: 10, H: 6, I: 0, A: 0, L: "-" } },
            { nombre: "Comandante", stats: { M: "-", HA: 3, HP: 4, F: 3, R: "-", H: "-", I: 3, A: 1, L: 10 } }
        ]
    },

    // === LORDS ===
    "Conde Elector": {
        faction: "imp",
        foc: "Lord",
        points: 85,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Tropas Condales",
        perfiles: [
            { nombre: "Comandante imperial", stats: { M: 4, HA: 5, HP: 5, F: 4, R: 4, H: 3, I: 5, A: 4, L: 9 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 2 },
            { n: "Arma a dos manos", p: 4 },
            { n: "Alabarda", p: 5 },
            { n: "Lanza", p: 1 },
            { n: "Lanza de caballería", p: 6, summary: "Sólo si va montado" },
            { n: "Pistola", p: 5 },
            { n: "Ristra de pistolas", p: 10 },
            { n: "Arco largo", p: 5 },
            { n: "Ballesta", p: 3 },
            { n: "Arcabuz", p: 3 },
            { n: "Rifle largo Hochland", p: 15 },
            { n: "Pistola de repetición", p: 7 },
            { n: "Escudo", p: 3 },
            { n: "Armadura pesada", p: 3, summary: "Sustituye armadura ligera" },
            { n: "Armadura de placas", p: 6, summary: "Sustituye armadura ligera" }
        ],
        mounts: ["Caballo de guerra con barda", "Pegaso", "Grifo"],
        maxMagicItems: 3,
        maxRelics: 1
    },
    "Gran Hechicero": {
        faction: "imp",
        foc: "Lord",
        points: 145,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "",
        perfiles: [
            { nombre: "Gran Hechicero", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 4, H: 3, I: 4, A: 1, L: 8 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 2 },
            { n: "Arma a dos manos", p: 4 },
            { n: "Pistola", p: 5 },
            { n: "Nivel de Magia 4", p: 35 }
        ],
        mounts: ["Caballo de guerra con barda", "Pegaso", "Grifo (Sólo Colegio Ámbar)"],
        maxMagicItems: 3,
        maxRelics: 1
    },
    "Maestre Templario": {
        faction: "imp",
        foc: "Lord",
        points: 105,
        min: 1,
        max: 1,
        equipo: "Armadura de Placas, Escudo y Arma de mano",
        reglasEspeciales: "Immune a la psicología, Juramento de Lealtad",
        perfiles: [
            { nombre: "Maestre Templario", stats: { M: 4, HA: 6, HP: 3, F: 4, R: 4, H: 3, I: 6, A: 4, L: 9 } },
            { nombre: "Caballo de guerra", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 4 },
            { n: "Lanza de caballería", p: 6 },
            { n: "Reiksguard", p: 15, summary: "¡Ni un paso atrás! (tropas 6\")" },
            { n: "Caballeros del León Dorado", p: 10, summary: "TSE 5+ vs proyectiles/magia" },
            { n: "Caballeros del Lobo Blanco", p: 5, summary: "Repite 1 al herir" },
            { n: "Caballeros del Sol Llameante", p: 10, summary: "Ataques flamígeros" },
            { n: "Caballeros Pantera", p: 5, summary: "Odio" }
        ],
        mounts: ["Caballo de guerra con barda"],
        maxMagicItems: 3,
        maxRelics: 1
    },
    "Archilector": {
        faction: "imp",
        foc: "Lord",
        points: 100,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Inspirador (Immune a Miedo), Líder Religioso",
        perfiles: [
            { nombre: "Archilector", stats: { M: 4, HA: 5, HP: 3, F: 4, R: 4, H: 3, I: 5, A: 3, L: 9 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 2 },
            { n: "Arma a dos manos", p: 4 },
            { n: "Escudo", p: 3 },
            { n: "Armadura pesada", p: 3, summary: "Sustituye armadura ligera" },
            { n: "Armadura de placas", p: 6, summary: "Sustituye armadura ligera" }
        ],
        mounts: ["Caballo de guerra con barda", "Altar de Guerra"],
        maxMagicItems: 3,
        maxRelics: 1
    },

    // === HEROES ===
    "Capitán": {
        faction: "imp",
        foc: "Hero",
        points: 50,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Tropas Condales",
        perfiles: [
            { nombre: "Capitán", stats: { M: 4, HA: 5, HP: 5, F: 4, R: 4, H: 2, I: 5, A: 3, L: 8 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 1 },
            { n: "Arma a dos manos", p: 2 },
            { n: "Alabarda", p: 3 },
            { n: "Lanza", p: 1 },
            { n: "Lanza de caballería", p: 4 },
            { n: "Pistola", p: 5 },
            { n: "Ristra de pistolas", p: 10 },
            { n: "Arco largo", p: 5 },
            { n: "Ballesta", p: 3 },
            { n: "Arcabuz", p: 3 },
            { n: "Rifle largo Hochland", p: 15 },
            { n: "Pistola de repetición", p: 7 },
            { n: "Escudo", p: 2 },
            { n: "Armadura pesada", p: 2, summary: "Sustituye armadura ligera" },
            { n: "Armadura de placas", p: 6, summary: "Sustituye armadura ligera" },
        ],
        mounts: ["Caballo de guerra con barda", "Pegaso"],
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 },
        maxMagicItems: 2
    },
    "Sacerdote Guerrero": {
        faction: "imp",
        foc: "Hero",
        points: 50,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Inspirador (Immune a Miedo)",
        perfiles: [
            { nombre: "Sacerdote guerrero", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 2, I: 4, A: 2, L: 8 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 1 },
            { n: "Arma a dos manos", p: 2 },
            { n: "Escudo", p: 2 },
            { n: "Armadura pesada", p: 2, summary: "Sustituye armadura ligera" },
            { n: "Armadura de placas", p: 6, summary: "Sustituye armadura ligera" }
        ],
        mounts: ["Caballo de guerra con barda"],
        maxMagicItems: 2
    },
    "Cazador de Brujas": {
        faction: "imp",
        foc: "Hero",
        warning: "0-1. No puede unirse a unidades con hechiceros, enanos, halflings u ogros.",
        points: 30,
        min: 1,
        max: 1,
        equipo: "Arma de mano, Armadura ligera, Antorcha.",
        reglasEspeciales: "Odio (¡a todo el mundo!)",
        perfiles: [
            { nombre: "Cazador de brujas", stats: { M: 4, HA: 4, HP: 4, F: 4, R: 4, H: 2, I: 4, A: 3, L: 8 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 1 },
            { n: "Arma a dos manos", p: 2 },
            { n: "Pistola", p: 5 },
            { n: "Ristra de pistolas", p: 10 },
            { n: "Pistola de repetición", p: 7 },
            { n: "Escudo", p: 2 },
            { n: "Armadura pesada", p: 2, summary: "Sustituye armadura ligera" },
            { n: "Armadura de placas", p: 6, summary: "Sustituye armadura ligera" },
            { n: "Agua bendita", p: 2 },
            { n: "Estaca", p: 5 },
            { n: "Amuleto de la Fe", p: 10 },
            { n: "Matabrujas", p: 5 }
        ],
        mounts: ["Caballo de guerra con barda"],
        maxMagicItems: 1
    },
    "Hechicero": {
        faction: "imp",
        foc: "Hero",
        points: 60,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "",
        perfiles: [
            { nombre: "Hechicero", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 1, L: 7 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 1 },
            { n: "Arma a dos manos", p: 2 },
            { n: "Pistola", p: 5 },
            { n: "Nivel de Magia 2", p: 35 }
        ],
        mounts: ["Caballo de guerra con barda", "Pegaso"],
        maxMagicItems: 2
    },
    "Maestro Ingeniero": {
        faction: "imp",
        foc: "Hero",
        points: 35,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Maestro artillero",
        perfiles: [
            { nombre: "Maestro ingeniero", stats: { M: 4, HA: 3, HP: 4, F: 3, R: 3, H: 2, I: 3, A: 1, L: 7 } }
        ],
        options: [
            { n: "Pistola", p: 5 },
            { n: "Ristra de pistolas", p: 10 },
            { n: "Pistola de repetición", p: 7 },
            { n: "Ristra de pistolas de repetición", p: 10 },
            { n: "Arcabuz", p: 3 },
            { n: "Arcabuz de repetición", p: 8 },
            { n: "Rifle largo Hochland", p: 10 },
            { n: "Trabuco", p: 5 },
            { n: "Lanzagranadas", p: 10 },
            { n: "Bombas", p: 10 },
            { n: "Armadura pesada", p: 2, summary: "Sustituye armadura ligera" }
        ],
        mounts: ["Caballo de guerra con barda", "Corcel mecánico"]
    },
    "Héroe Halfling": {
        faction: "imp",
        foc: "Hero",
        warning: "1 por regimiento de halflings. Sólo general si todo ejército es halflings.",
        points: 45,
        min: 1,
        max: 1,
        equipo: "Arma de mano, Arco y Armadura ligera.",
        reglasEspeciales: "Cruzar bosques, Esquivar (6+), Sólo puede unirse a regimientos de halflings",
        perfiles: [
            { nombre: "Héroe halfling", stats: { M: 4, HA: 4, HP: 6, F: 3, R: 3, H: 2, I: 6, A: 3, L: 9 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 2 },
            { n: "Arma de mano adicional", p: 1 },
            { n: "Lanza", p: 2 },
            { n: "Escudo", p: 2 },
            { n: "Armadura pesada", p: 2, summary: "Sustituye armadura ligera" }
        ],
        maxMagicItems: 2
    }
};

const mountsDB_imp = {
    "Caballo de guerra": { 
        faction: "imp", 
        points: 12, 
        perfiles: [ { nombre: "Caballo de guerra", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería." 
    },
    "Caballo de guerra con barda": { 
        faction: "imp", 
        points: 15, 
        perfiles: [ { nombre: "Caballo de guerra con barda", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. Barda (+1 TSA)." 
    },
    "Pegaso": { 
        faction: "imp", 
        points: 40, 
        perfiles: [ { nombre: "Pegaso", stats: { M: 8, HA: 4, HP: 0, F: 4, R: 4, H: 3, I: 4, A: 2, L: 6 } } ], 
        reglasEspeciales: "Bestia monstruosa. Cambia el tipo a Caballería monstruosa. Volar." 
    },
    "Grifo": { 
        faction: "imp", 
        points: 150, 
        perfiles: [ { nombre: "Grifo", stats: { M: 6, HA: 5, HP: 0, F: 6, R: 5, H: 5, I: 4, A: 4, L: 7 } } ], 
        reglasEspeciales: "Monstruo. Volar." 
    },
    "Corcel mecánico": { 
        faction: "imp", 
        points: 18, 
        perfiles: [ { nombre: "Corcel mecánico", stats: { M: 8, HA: 2, HP: 0, F: 5, R: 4, H: 1, I: 1, A: 2, L: "-" } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. +1 TSA jinete, Impactos por carga (1)." 
    },
    "Altar de Guerra": { 
        faction: "imp", 
        points: 160, 
        perfiles: [
            { nombre: "Altar de Sigmar", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 6, H: 4, I: "-", A: "-", L: "-" } },
            { nombre: "Caballo de guerra (2)", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } }
        ],
        reglasEspeciales: "Carro. TSA 4+, Potencia 4, Tozudez, TSE 4+, Immune psicología (12\"), Plegarias afectan 12\", Terror al cargar (Cuerno Sigismund)." 
    }
};

const armySkillsDB_imp = {
    "Curación": { points: 0, faction: "imp", type: "Plegaria", summary: "Potenciación. Cura 1 herida a personaje/monstruo 6\"." },
    "Coraje": { points: 0, faction: "imp", type: "Plegaria", summary: "Potenciación. Lanzador y unidad: Tozudos hasta siguiente movimiento." },
    "Justicia": { points: 0, faction: "imp", type: "Plegaria", summary: "Potenciación. Lanzador y unidad: +1F, Ataques mágicos hasta siguiente movimiento." },
    "Rectitud": { points: 0, faction: "imp", type: "Plegaria", summary: "Potenciación. Lanzador y unidad: RM(2) hasta siguiente movimiento." },
    "Furia": { points: 0, faction: "imp", type: "Plegaria", summary: "Daño directo. NoMuertos/Demonios 4\" sufren impacto F4. Desde Altar: 8\"." }
};

const magicItemsDB_imp = {
    "Arma Mágica": {
        "Colmillo Rúnico": { points: 60, faction: "imp", relic: true, summary: "Sólo Conde elector. AM. Impactos hieren automático, no TSA, Heridas múltiples (2)." },
        "Maza de Helstrum": { points: 40, faction: "imp", relic: true, summary: "AM. F8, I1. Si causa herida, cura 1 herida/turno." },
        "Espada de Segismundo": { points: 35, faction: "imp", relic: false, summary: "AM. +2F, I10." },
        "Espada del Destino": { points: 30, faction: "imp", relic: false, summary: "AM. Designa monstruo/personaje: +F sobre R, Odio, Heridas múltiples (1D3)." },
        "Martillo de acero bendito": { points: 25, faction: "imp", relic: false, summary: "Sólo sacerdotes. AM. +1F, +1D3 lanzar plegarias." },
        "Lanza de la Muerte": { points: 20, faction: "imp", relic: false, summary: "Sólo Maestre Templario. LC. F10 al cargar." },
        "Martillo del Juicio": { points: 20, faction: "imp", relic: false, summary: "A2M. Herida → chequeo L: falla = herida automática." }
    },
    "Armadura Mágica": {
        "Armadura de oro élfico": { points: 40, faction: "imp", relic: true, summary: "Armadura Dragón (TSA 4+, Immune Fuego). 5+ impacto fallido." },
        "Armadura del Alba": { points: 30, faction: "imp", relic: false, summary: "Armadura placas (TSA 4+). Repite TSA fallidas." },
        "Armadura de Tarnus": { points: 25, faction: "imp", relic: false, summary: "Sólo hechiceros. AL. TSE 5+." },
        "Escudo de la Gorgona": { points: 15, faction: "imp", relic: false, summary: "Escudo. Enemigo contacto: -1A (mín 1)." },
        "Yelmo Mataskavens": { points: 15, faction: "imp", relic: false, summary: "Yelmo (+1 TSA). Terror vs skavens." },
        "Escudo de Bronce": { points: 10, faction: "imp", relic: false, summary: "Escudo. Anula primer impacto de batalla." }
    },
    "Talismán": {
        "Sudario de Magnus": { points: 50, faction: "imp", relic: true, summary: "TSE 4+, RM(1)." },
        "Reliquia Sagrada": { points: 40, faction: "imp", relic: true, summary: "TSE 3+ vs ataques mágicos." },
        "Capa del Frío": { points: 25, faction: "imp", relic: false, summary: "TSE 5+, Immune fuego, RM(1) vs Fuego/Metal." },
        "Anuleto Carmesí": { points: 15, faction: "imp", relic: false, summary: "TSE 6+. Supera automático chequeos atributo (no L)." },
        "Sello de Sigmar": { points: 15, faction: "imp", relic: false, summary: "RM(1), RM(2) vs Nigromancia/Caos/Hashut/Skaven." }
    },
    "Objeto Hechizado": {
        "Laurel de la Victoria": { points: 30, faction: "imp", relic: true, summary: "Cada herida CaC cuenta como 2 para resultado combate." },
        "Anillo de Volans": { points: 35, faction: "imp", relic: false, summary: "Portahechizos; nivel variable. Elige colegio, tira hechizo aleatorio." },
        "Orbe de Tormenta": { points: 30, faction: "imp", relic: false, summary: "Portahechizos; N4. Maldición: Volar/Flotar no pueden 1 turno." },
        "Bastón de mando": { points: 25, faction: "imp", relic: false, summary: "Un uso. Supera automático chequeo desmoralización." },
        "Espejo de Van Horstmann": { points: 30, faction: "imp", relic: false, summary: "En desafío: intercambia F,R,I,A con oponente." },
        "Icono de Magnus": { points: 25, faction: "imp", relic: false, summary: "Portador y unidad: Immune miedo, Terror → Miedo." },
        "Cuerno de Plata": { points: 25, faction: "imp", relic: false, summary: "Un uso. Todas unidades huyendo 24\" se reagrupan automático." },
        "Cesto de la Hechicería de Aldred": { points: 20, faction: "imp", relic: false, summary: "Roba hechizo enemigo 6\". Portahechizos N5 para lanzarlo." }
    },
    "Artefacto Arcano": {
        "Báculo Gris": { points: 50, faction: "imp", relic: true, summary: "+1D3 a tiradas lanzamiento hechizos." },
        "Sello de Destruccion": { points: 40, faction: "imp", relic: false, summary: "Un uso. Dispersa automático hechizo, 4+ destruye hechizo." },
        "Bola de Cristal": { points: 35, faction: "imp", relic: false, summary: "Revela objetos mágicos/ocultos 18\". +1 lanzar Cielos." },
        "Báculo del Poder Mágico": { points: 20, faction: "imp", relic: false, summary: "+1D lanzar hechizos. Guarda 1D energía/disp." },
        "Piedra adivinatoria": { points: 5, faction: "imp", relic: false, summary: "Un uso. Repite todos dados tirada lanzamiento/dispersión." }
    },
    "Estandarte Mágico": {
        "Estandarte Imperial": { points: 50, faction: "imp", relic: true, summary: "+1 resultado combate aliados 12\". Unidad: Immune psicología." },
        "Estandarte de Segismundo": { points: 40, faction: "imp", relic: true, summary: "Tozudez, Immune Miedo." },
        "Pabellón del Grifo": { points: 50, faction: "imp", relic: false, summary: "Dobla bonificador filas, No puede perseguir." },
        "Estandarte de la Presteza": { points: 25, faction: "imp", relic: false, summary: "Sólo Órdenes Caballería. +1D3+1\" carga/persecución." },
        "Estandarte del Acero": { points: 25, faction: "imp", relic: false, summary: "Sólo Destacamentos. +1HA." },
        "Estandarte del Ojo de halcón": { points: 25, faction: "imp", relic: false, summary: "Sólo infantería. Ignora penalizador disparo larga distancia." },
        "Estandarte del Valor": { points: 20, faction: "imp", relic: false, summary: "Immune psicología." },
        "Estandarte del Matademonios": { points: 10, faction: "imp", relic: false, summary: "Sólo Órdenes Caballería. Causa Miedo al cargar." }
    }
};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "El Imperio",
    FACTION_ID: "imp",
    FOC_CONFIG: { 
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_imp,
    mountsDB: mountsDB_imp,
    magicItemsDB: magicItemsDB_imp,
    armySkillsDB: armySkillsDB_imp,
    specialProfilesDB: {},
    armySkillsLabel: "Plegarias a Sigmar",
};
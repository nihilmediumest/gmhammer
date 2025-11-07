// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: ELFOS OSCUROS ---
// ===================================================================================
// Last Updated: 2025-10-04 - v4.1
import { commonMagicItemsDB } from '../comun.js';

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_eosc = {
    // === CORE ===
    "Guerreros Druchii": {
        faction: "eosc",
        foc: "Core",
        points: 9,
        min: 10,
        max: 30,
        equipo: "Arma de mano, Armadura ligera y Escudo.",
        reglasEspeciales: "Destreza marcial, Odio (Altos Elfos).",
        perfiles: [
            { nombre: "Guerrero Druchi", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 2, L: 8 } }
        ],
        options: [
            { n: "Lanzas", p: 1 },
            { n: "Armadura pesada", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },
    "Ballesteros Druchii": {
        faction: "eosc",
        foc: "Core",
        points: 10,
        min: 10,
        max: 30,
        equipo: "Arma de mano y Ballesta de Repetición.",
        reglasEspeciales: "Destreza marcial, Odio (Altos Elfos).",
        perfiles: [
            { nombre: "Ballestero Druchi", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 5, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } }
        ],
        options: [
            { n: "Armadura ligera", p: 1 },
            { n: "Escudo", p: 1 },
            { n: "Armadura pesada", p: 2 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },
    "Guardia de la Ciudad": {
        faction: "eosc",
        foc: "Core",
        warning: "0-1. Sólo si incluyes al menos una unidad de Guerreros o Ballesteros druchii.",
        points: 10,
        min: 10,
        max: 25,
        equipo: "Arma de mano, Lanza, Armadura ligera y Escudo.",
        reglasEspeciales: "Destreza marcial, Odio (Altos Elfos).",
        perfiles: [
            { nombre: "Guarda de la Ciudad", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 2, L: 8 } }
        ],
        options: [
            { n: "Ballesta de Repetición", p: 3 },
            { n: "Armadura pesada", p: 1 },
            { n: "Arma a dos manos", p: 0 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },
    "Jinetes Oscuros": {
        faction: "eosc",
        foc: "Core",
        points: 14,
        min: 5,
        max: 15,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Caballería Rápida, Odio (Altos Elfos).",
        perfiles: [
            { nombre: "Jinete Oscuro", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 2, L: 8 } },
            { nombre: "Corcel Oscuro", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 6 } }
        ],
        options: [
            { n: "Ballesta de Repetición", p: 3 },
            { n: "Lanza", p: 2 },
            { n: "Escudo", p: 1 },
            { n: "Barda para corceles", p: 2 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },
    "Corsarios del Arca Negra": {
        faction: "eosc",
        foc: "Core",
        points: 9,
        min: 10,
        max: 30,
        equipo: "Dos armas de Mano, Armadura ligera y Capa de Dragón Marino.",
        reglasEspeciales: "Destreza marcial, Odio (Altos Elfos), Esclavistas.",
        perfiles: [
            { nombre: "Corsario", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 2, L: 8 } }
        ],
        options: [
            { n: "Pistola Ballesta (sustituye 1 arma)", p: 0 },
            { n: "Pistola Ballesta adicional", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },

    // === SPECIAL ===
    "Elfas Brujas": {
        faction: "eosc",
        foc: "Special",
        points: 9,
        min: 10,
        max: 25,
        equipo: "Dos armas de mano.",
        reglasEspeciales: "Destreza marcial, Odio (Altos elfos), Furia Asesina, Esquiva 6+, Khainitas.",
        perfiles: [
            { nombre: "Ella Bruja", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 6, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 6, A: 2, L: 8 } }
        ],
        options: [
            { n: "Ataques Envenenados", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50
    },
    "Verdugos de Har Ganeth": {
        faction: "eosc",
        foc: "Special",
        points: 13,
        min: 10,
        max: 25,
        equipo: "Armadura pesada, Ejecutora.",
        reglasEspeciales: "Golpe Letal, Inmunes a miedo, Odio (Altos elfos), Khainitas.",
        perfiles: [
            { nombre: "Verdugo", stats: { M: 5, HA: 5, HP: 4, F: 4, R: 3, H: 1, I: 5, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 5, HA: 5, HP: 4, F: 4, R: 3, H: 1, I: 5, A: 2, L: 8 } }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50,
        champItems: 25
    },
    "Guardia Negra": {
        faction: "eosc",
        foc: "Special",
        warning: "0-1",
        points: 16,
        min: 10,
        max: 20,
        equipo: "Armadura pesada, alabarda.",
        reglasEspeciales: "Tozudez, Inmunes a Psicología, Odio (Todos), Destreza marcial.",
        perfiles: [
            { nombre: "Guarda Negra", stats: { M: 5, HA: 6, HP: 4, F: 4, R: 3, H: 1, I: 6, A: 1, L: 9 } },
            { nombre: "Oficial", stats: { M: 5, HA: 6, HP: 4, F: 4, R: 3, H: 1, I: 6, A: 2, L: 9 } }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50,
        champItems: 25
    },
    "Caballeros Gélidos": {
        faction: "eosc",
        foc: "Special",
        points: 32,
        min: 5,
        max: 15,
        equipo: "Arma de mano, Lanza de Caballería, Armadura Pesada y Escudo.",
        reglasEspeciales: "Odio (Altos Elfos), Miedo, Estupidez.",
        perfiles: [
            { nombre: "Caballero Gélido", stats: { M: 5, HA: 5, HP: 4, F: 4, R: 3, H: 1, I: 5, A: 2, L: 9 } },
            { nombre: "Oficial", stats: { M: 5, HA: 5, HP: 4, F: 4, R: 3, H: 1, I: 5, A: 3, L: 9 } },
            { nombre: "Gélido", stats: { M: 7, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 1, A: 2, L: 2 } }
        ],
        command: { c: { n: "Oficial", p: 8 }, s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } },
        magicBanner: 50,
        champItems: 25
    },
    "Carro de Gélidos": {
        faction: "eosc",
        foc: "Special",
        points: 90,
        min: 1,
        max: 1,
        equipo: "Los Druchii llevan lanzas.",
        reglasEspeciales: "Tirada de salvación por armadura 4+, Miedo, Estupidez, Odio (Altos Elfos).",
        perfiles: [
            { nombre: "Carro de Gélidos", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 5, H: 4, I: "-", A: "-", L: "-" } },
            { nombre: "Aurigas Druchii (2)", stats: { M: "-", HA: 5, HP: 4, F: 3, R: "-", H: "-", I: 5, A: 1, L: 8 } },
            { nombre: "Gélidos (2)", stats: { M: 7, HA: 3, HP: 0, F: 4, R: "-", H: "-", I: 1, A: 2, L: 2 } }
        ],
        options: [
            { n: "Cuchillas", p: 5, costType: "flat" },
            { n: "Ballestas de Repetición para aurigas", p: 10, costType: "flat" }
        ]
    },
    "Carro Cazador": {
        faction: "eosc",
        foc: "Special",
        points: 75,
        min: 1,
        max: 2,
        equipo: "Los aurigas llevan armas de mano, lanzas y ballestas de repetición. Cuchillas en ruedas.",
        reglasEspeciales: "Caballería Rápida, Tirada de salvación por armadura 5+, Odio (Altos elfos).",
        perfiles: [
            { nombre: "Carro Cazador", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 4, H: 3, I: "-", A: "-", L: "-" } },
            { nombre: "Aurigas Druchii (2)", stats: { M: "-", HA: 4, HP: 4, F: 3, R: "-", H: "-", I: 5, A: 1, L: 8 } },
            { nombre: "Corcel oscuro (2)", stats: { M: 9, HA: 3, HP: 0, F: 4, R: "-", H: "-", I: 3, A: 1, L: 6 } }
        ],
        options: [
            { n: "Arpón devastador", p: 40, costType: "flat" }
        ]
    },
    "Sombras": {
        faction: "eosc",
        foc: "Special",
        points: 14,
        min: 5,
        max: 15,
        equipo: "Armadura Ligera, Arma de Mano, Ballesta de Repetición.",
        reglasEspeciales: "Destreza Marcial, Odio (Altos Elfos), Hostigadores, Exploradores.",
        perfiles: [
            { nombre: "Sombras", stats: { M: 5, HA: 5, HP: 5, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 5, HA: 5, HP: 6, F: 3, R: 3, H: 1, I: 5, A: 2, L: 8 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 1 },
            { n: "Arma a dos manos", p: 2 },
            { n: "Ataques envenenados", p: 3 }
        ],
        command: { c: { n: "Oficial", p: 6 } }
    },
    "Arpías": {
        faction: "eosc",
        foc: "Special",
        points: 13,
        min: 5,
        max: 15,
        equipo: "Garras (Armas de mano).",
        reglasEspeciales: "Miedo, Volar, Hostigadoras",
        perfiles: [
            { nombre: "Arpía", stats: { M: 5, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 5, A: 2, L: 7 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 5, A: 3, L: 7 } }
        ],
        options: [
            { n: "Garras afiladas (Poder de penetración)", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 } }
    },

    // === RARE ===
    "Hidra de Guerra": {
        faction: "eosc",
        foc: "Rare",
        points: 220,
        min: 1,
        max: 1,
        equipo: "Los cuidadores: Arma de Mano, Látigo Desollador y armadura ligera.",
        reglasEspeciales: "Piel Escamosa (4+), Regeneración (4+), Arma de aliento (F4), Crecimiento Mutante.",
        perfiles: [
            { nombre: "Hidra de Guerra", stats: { M: 6, HA: 4, HP: 2, F: 6, R: 5, H: 6, I: 2, A: 6, L: 5 } },
            { nombre: "Cuidadores (2)", stats: { M: 6, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } }
        ],
        options: [
            { n: "Hidra veterana", p: 20, costType: "flat" }
        ]
    },
    "Hermandad de la Matanza": {
        faction: "eosc",
        foc: "Rare",
        points: 16,
        min: 5,
        max: 15,
        equipo: "Látigo Desollador (poder de penetración) y Escudo de Gladiador.",
        reglasEspeciales: "Destreza marcial, Odio (Todos), Hostigadores, Esquivar (5+), Khainitas, Danzas de muerte.",
        perfiles: [
            { nombre: "Hermana de la Matanza", stats: { M: 6, HA: 5, HP: 4, F: 4, R: 3, H: 1, I: 6, A: 2, L: 8 } },
            { nombre: "Oficial", stats: { M: 6, HA: 6, HP: 4, F: 4, R: 3, H: 1, I: 6, A: 3, L: 8 } }
        ],
        command: { c: { n: "Oficial", p: 6 } }
    },
    "Lanzavirotes Destripador": {
        faction: "eosc",
        foc: "Rare",
        warning: "Si no incluyes ninguna miniatura con regla Khainita, puede ser unidad Especial.",
        points: 60,
        min: 1,
        max: 2,
        equipo: "La dotación: arma de mano y armadura ligera.",
        reglasEspeciales: "Odio (Altos Elfos). Dispara como lanzavirotes o 6 virotes F4 con Poder de penetración.",
        perfiles: [
            { nombre: "Lanzavirotes Destripador", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: "-", I: "-", A: "-", L: "-" } },
            { nombre: "Dotación de Guerreros Druchii (2)", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } }
        ]
    },
    "Jinetes de la Perdición": {
        faction: "eosc",
        foc: "Rare",
        points: 24,
        min: 5,
        max: 10,
        equipo: "Dos armas de mano.",
        reglasEspeciales: "Caballería Rápida, Odio (Altos Elfos), Hostigadores, Demonio, Ataques Flamígeros, Resistencia Mágica (2), Poderes Brujos.",
        perfiles: [
            { nombre: "Jinete de la Perdición", stats: { M: 5, HA: 4, HP: 4, F: 4, R: 3, H: 1, I: 5, A: 2, L: 8 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 4, F: 4, R: 3, H: 1, I: 5, A: 3, L: 8 } },
            { nombre: "Corcel Oscuro", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 6 } }
        ],
        command: { c: { n: "Oficial", p: 6 } }
    },
    "Caldero de Sangre": {
        faction: "eosc",
        foc: "Rare",
        warning: "0-1",
        points: 175,
        min: 1,
        max: 1,
        equipo: "La guardiana y las elfas brujas: dos armas de mano.",
        reglasEspeciales: "Tirada de salvación por armadura 4+, Objetivo grande, Odio (Altos Elfos), Resistencia mágica (2), Regeneración (4+), Furia asesina, Ataques envenenados, Foco de Khaine.",
        perfiles: [
            { nombre: "Caldero de Sangre", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 5, H: 5, I: "-", A: "-", L: "-" } },
            { nombre: "Elfa Bruja (2)", stats: { M: "-", HA: 4, HP: 4, F: 3, R: "-", H: "-", I: 6, A: 1, L: "-" } },
            { nombre: "Guardiana del Caldero", stats: { M: 5, HA: 4, HP: 4, F: 3, R: "-", H: "-", I: 6, A: 2, L: 8 } }
        ]
    },

    // === LORDS ===
    "Príncipe Oscuro": {
        faction: "eosc",
        foc: "Lord",
        points: 120,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Odio (Altos elfos), Destreza marcial.",
        perfiles: [
            { nombre: "Príncipe Oscuro", stats: { M: 5, HA: 7, HP: 7, F: 4, R: 3, H: 3, I: 8, A: 4, L: 10 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 6 },
            { n: "Arma de mano adicional", p: 4 },
            { n: "Lanza", p: 4 },
            { n: "Lanza de caballería", p: 6 },
            { n: "Alabarda", p: 6 },
            { n: "Ballesta de repetición", p: 8 },
            { n: "Armadura pesada", p: 4 },
            { n: "Escudo", p: 3 }
        ],
        mounts: ["Corcel oscuro", "Gélido", "Pegaso Negro", "Carro de Gélidos", "Mantícora", "Dragón Negro"],
        maxMagicItems: 3,
        maxRelics: 1,
        maxSkills: { limit: 1, type: 'count' }
    },
    "Gran Hechicera": {
        faction: "eosc",
        foc: "Lord",
        points: 165,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Odio (Altos elfos), Destreza marcial.",
        perfiles: [
            { nombre: "Gran hechicera", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 3, I: 6, A: 1, L: 9 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 4 },
            { n: "Lanza", p: 3 },
            { n: "Arma de mano adicional", p: 2 },
            { n: "Nivel de Magia 4", p: 35 }
        ],
        mounts: ["Corcel oscuro", "Gélido", "Carro de Gélidos", "Carro Cazador", "Pegaso Negro", "Dragón Negro"],
        maxMagicItems: 3,
        maxRelics: 1,
        maxSkills: { limit: 1, type: 'count' }
    },

    // === HEROES ===
    "Noble Elfo Oscuro": {
        faction: "eosc",
        foc: "Hero",
        points: 70,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Odio (Altos elfos), Destreza marcial.",
        perfiles: [
            { nombre: "Noble elfo oscuro", stats: { M: 5, HA: 6, HP: 6, F: 4, R: 3, H: 2, I: 7, A: 3, L: 9 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 4 },
            { n: "Arma de mano adicional", p: 2 },
            { n: "Lanza", p: 2 },
            { n: "Lanza de caballería", p: 4 },
            { n: "Alabarda", p: 4 },
            { n: "Ballesta de repetición", p: 7 },
            { n: "Armadura pesada", p: 3 },
            { n: "Escudo", p: 2 }
        ],
        mounts: ["Corcel oscuro", "Gélido", "Pegaso Negro", "Carro de Gélidos"],
        maxMagicItems: 2,
        maxSkills: { limit: 1, type: 'count' },
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 }
    },
    "Hechicera": {
        faction: "eosc",
        foc: "Hero",
        points: 70,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Odio (Altos elfos), Destreza marcial.",
        perfiles: [
            { nombre: "Hechicera", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 2, I: 5, A: 1, L: 8 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 3 },
            { n: "Lanza", p: 2 },
            { n: "Arma de mano adicional", p: 1 },
            { n: "Nivel de Magia 2", p: 35 }
        ],
        mounts: ["Corcel oscuro", "Gélido", "Carro de Gélidos", "Carro Cazador", "Pegaso Negro"],
        maxMagicItems: 2,
        maxSkills: { limit: 1, type: 'count' }
    },
    "Reina Bruja": {
        faction: "eosc",
        foc: "Hero",
        warning: "Si incluyes una Reina Bruja, puedes incluir una única unidad de Elfas brujas como unidad básica.",
        points: 110,
        min: 1,
        max: 1,
        equipo: "Dos armas de mano",
        reglasEspeciales: "Odio (Altos elfos), Destreza marcial, Furia asesina, Ataques envenenados, Khainita, Esquiva(5+)",
        perfiles: [
            { nombre: "Reina Bruja", stats: { M: 5, HA: 7, HP: 4, F: 4, R: 3, H: 2, I: 7, A: 4, L: 9 } }
        ],
        options: [
            { n: "Veneno Negro", p: 10, costType: "flat" },
            { n: "Poción Bruja", p: 20, costType: "flat" },
            { n: "Matahombres", p: 40, costType: "flat" },
            { n: "Loto de Naggarond", p: 5, costType: "flat" }
        ],
        mounts: ["Caldero de Sangre"],
        maxMagicItems: 2,
        maxSkills: { limit: 1, type: 'count' }
    },
    "Señor de las Bestias": {
        faction: "eosc",
        foc: "Hero",
        warning: "Si incluyes un Señor de las bestias, puedes incluir una única Hidra como unidad especial.",
        points: 65,
        min: 1,
        max: 1,
        equipo: "Arma de mano, látigo desollador y armadura ligera.",
        reglasEspeciales: "Odio (Altos elfos), Destreza marcial, Señor de las Bestias.",
        perfiles: [
            { nombre: "Señor de las bestias", stats: { M: 5, HA: 5, HP: 5, F: 4, R: 3, H: 2, I: 6, A: 3, L: 9 } }
        ],
        options: [
            { n: "Armadura pesada", p: 2 },
            { n: "Par de pistolas ballesta", p: 10, costType: "flat" }
        ],
        mounts: ["Corcel oscuro", "Gélido", "Carro de Gélidos", "Pegaso Negro", "Mantícora"],
        maxMagicItems: 1,
        maxSkills: { limit: 1, type: 'count' }
    },
    "Asesino Elfo Oscuro": {
        faction: "eosc",
        foc: "Hero",
        points: 120,
        min: 1,
        max: 1,
        equipo: "Dos armas de mano",
        reglasEspeciales: "Odio (Altos elfos), Destreza marcial, Esquivar (4+), Ataques Envenenados, Explorador y Asesino, No Líder, Khainita, Despliegue oculto.",
        perfiles: [
            { nombre: "Asesino", stats: { M: 6, HA: 9, HP: 9, F: 4, R: 3, H: 2, I: 10, A: 3, L: 10 } }
        ],
        options: [
            { n: "Par de pistolas ballesta", p: 10, costType: "flat" },
            { n: "Estrellas laceradoras", p: 10, costType: "flat" },
            { n: "Veneno Negro", p: 10, costType: "flat" },
            { n: "Matahombres", p: 40, costType: "flat" },
            { n: "Loto de Naggarond", p: 5, costType: "flat" }
        ],
        maxMagicItems: 2,
        maxSkills: { limit: 1, type: 'count' }
    }
};

const mountsDB_eosc = {
    "Corcel oscuro": { 
        faction: "eosc", 
        points: 15, 
        perfiles: [ { nombre: "Corcel Oscuro", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 6 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería." 
    },
    "Gélido": { 
        faction: "eosc", 
        points: 20, 
        perfiles: [ { nombre: "Gélido", stats: { M: 7, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 1, A: 2, L: 2 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. Miedo, Estupidez. +2 TSA para jinete." 
    },
    "Pegaso Negro": { 
        faction: "eosc", 
        points: 50, 
        perfiles: [ { nombre: "Pegaso Negro", stats: { M: 8, HA: 4, HP: 0, F: 4, R: 4, H: 3, I: 4, A: 2, L: 6 } } ], 
        reglasEspeciales: "Bestia Monstruosa. Cambia el tipo a Caballería Monstruosa. Volar, Impactos por carga (1), Carga devastadora." 
    },
    "Mantícora": { 
        faction: "eosc", 
        points: 150, 
        perfiles: [ { nombre: "Mantícora", stats: { M: 6, HA: 5, HP: 0, F: 6, R: 5, H: 5, I: 3, A: 4, L: 6 } } ], 
        reglasEspeciales: "Monstruo. Furia asesina, Volar, Piel escamosa 4+, Aguijón venenoso." 
    },
    "Dragón Negro": { 
        faction: "eosc", 
        points: 250, 
        perfiles: [ { nombre: "Dragón Negro", stats: { M: 6, HA: 6, HP: 0, F: 6, R: 6, H: 6, I: 2, A: 6, L: 9 } } ], 
        reglasEspeciales: "Monstruo. Volar, Piel Escamosa (3+), Arma de aliento (F2, niega TSA)." 
    },
    "Carro de Gélidos": { 
        faction: "eosc", 
        points: 70, 
        perfiles: [
            { nombre: "Carro de Gélidos", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 5, H: 4, I: "-", A: "-", L: "-" } },
            { nombre: "Aurigas Druchii (1)", stats: { M: "-", HA: 5, HP: 4, F: 3, R: "-", H: "-", I: 5, A: 1, L: 8 } },
            { nombre: "Gélidos (2)", stats: { M: 7, HA: 3, HP: 0, F: 4, R: "-", H: "-", I: 1, A: 2, L: 2 } }
        ],
        reglasEspeciales: "Carro. Tirada de salvación por armadura 4+, Miedo, Estupidez, Odio (Altos Elfos)." 
    },
    "Carro Cazador": { 
        faction: "eosc", 
        points: 55, 
        perfiles: [
            { nombre: "Carro Cazador", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 4, H: 3, I: "-", A: "-", L: "-" } },
            { nombre: "Aurigas Druchii (1)", stats: { M: "-", HA: 4, HP: 4, F: 3, R: "-", H: "-", I: 5, A: 1, L: 8 } },
            { nombre: "Corcel oscuro (2)", stats: { M: 9, HA: 3, HP: 0, F: 4, R: "-", H: "-", I: 3, A: 1, L: 6 } }
        ],
        reglasEspeciales: "Carro. Caballería Rápida, Tirada de salvación por armadura 5+, Odio (Altos elfos)." 
    },
    "Caldero de Sangre": { 
        faction: "eosc", 
        points: 165, 
        perfiles: [
            { nombre: "Caldero de Sangre", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 5, H: 5, I: "-", A: "-", L: "-" } },
            { nombre: "Elfa Bruja (2)", stats: { M: "-", HA: 4, HP: 4, F: 3, R: "-", H: "-", I: 6, A: 1, L: "-" } },
            { nombre: "Guardiana del Caldero", stats: { M: 5, HA: 4, HP: 4, F: 3, R: "-", H: "-", I: 6, A: 2, L: 8 } }
        ],
        reglasEspeciales: "Carro. Tirada de salvación por armadura 4+, Objetivo grande, Odio (Altos Elfos), Resistencia mágica (2), Regeneración (4+), Furia asesina, Ataques envenenados, Foco de Khaine." 
    }
};

const armySkillsDB_eosc = {
    // Sendas del Guerrero
    "Senda Negra": { points: 30, faction: "eosc", type: "Senda del Guerrero", summary: "Tozudez, Immune a psicología, +1A. Sin montura. No Khainitas. Sólo Guardia Negra." },
    "Senda de la Espada": { points: 30, faction: "eosc", type: "Senda del Guerrero", summary: "Espada de la Torre Negra (+2F, A2M), Golpe Letal. Sin montura." },
    "Senda de Khaine": { points: 25, faction: "eosc", type: "Senda del Guerrero", summary: "Khainita, Furia asesina, RM(1). No hechiceras." },
    "Senda del Corsario": { points: 15, faction: "eosc", type: "Senda del Guerrero", summary: "Capa dragón marino, 2 pistolas ballesta, Esclavista. Vanguardia/Hostigadores para 1 unidad Corsarios." },
    "Senda del descuartizamiento": { points: 15, faction: "eosc", type: "Senda del Guerrero", summary: "Odio en CaC. Sólo Khainitas." },
    "Senda del Guardián": { points: 5, faction: "eosc", type: "Senda del Guerrero", summary: "AP, escudo, lanza, ballesta rep. Sin montura. No Khainita. Guardia Ciudad sin restricción." },

    // Sendas Oscuras
    "Senda de la sombra": { points: 30, faction: "eosc", type: "Senda Oscura", summary: "Esquivar (5+) o +1 Esquivar. Sin montura/armadura > ligera." },
    "Senda del Envenenamiento": { points: 20, faction: "eosc", type: "Senda Oscura", summary: "Ataques envenenados (5+ si ya tiene). +1 unidad con veneno." },
    "Senda de la Bestia": { points: 10, faction: "eosc", type: "Senda Oscura", summary: "Montura Gélido. Él y Gélidos unidos: Inmune Estupidez." },
    "Senda del Placer": { points: 5, faction: "eosc", type: "Senda Oscura", summary: "Immune psicología, Poder penetración. Hechiceras: Saber Slaanesh. No Khainitas." },

    // Sendas de la Hechicería
    "Bruja Vidente": { points: 35, faction: "eosc", type: "Senda de la Hechicería", summary: "Sólo hechiceras. Señor del Conocimiento (Magia Oscura o básicos)." },
    "Poder de Ghrond": { points: 25, faction: "eosc", type: "Senda de la Hechicería", summary: "Sólo hechiceras. +1D energía por fase." },
    "Maestría con el Dhar": { points: 20, faction: "eosc", type: "Senda de la Hechicería", summary: "Sólo hechiceras. +1 lanzar hechizos." },
    "Canalizador de Magia": { points: 5, faction: "eosc", type: "Senda de la Hechicería", summary: "Sólo hechiceras. Canalizar 4+." },
    "Forjadora arcana": { points: 5, faction: "eosc", type: "Senda de la Hechicería", summary: "Sólo Grandes hechiceras. 2 artefactos arcanos." }
};

const magicItemsDB_eosc = {
    "Arma Mágica": {
        "Apuñaladora": { points: 45, faction: "eosc", relic: true, summary: "AM. +2F, Impactos múltiples(1D3)." },
        "Hacha de Los Verdugos": { points: 40, faction: "eosc", relic: true, summary: "A2M. F10, Heridas múltiples (1D3). Sólo Infantería." },
        "Filo Venenoso": { points: 50, faction: "eosc", relic: false, summary: "AM. Hiere 2+, 6 niega TSA. No Inmunes veneno." },
        "Espada de la Oscura": { points: 45, faction: "eosc", relic: false, summary: "AM. Niega TSA." },
        "Espada Hidra": { points: 30, faction: "eosc", relic: false, summary: "AM. +1D3A, Poder penetración, Ataque flamígero." },
        "Acero Glacial": { points: 25, faction: "eosc", relic: false, summary: "Ejecutora. Sin -1I. Enemigos contacto: -1I y -1HA." },
        "Muerte Carmesi": { points: 20, faction: "eosc", relic: false, summary: "Alabarda. +1F, Poder penetración." },
        "Tomador de Vidas": { points: 20, faction: "eosc", relic: false, summary: "Ballesta Rep. Disparos x3, hiere 2+. No Inmunes veneno." },
        "Dagas de Hotelc": { points: 15, faction: "eosc", relic: false, summary: "Armas Emparejadas. I10, Odio, Poder penetración." },
        "Látigo de la Agonía": { points: 10, faction: "eosc", relic: false, summary: "Sólo Señores Bestias. Látigo. -2 TSA enemigo, Odio." }
    },
    "Armadura Mágica": {
        "Armadura de la Fidelidad Eterna": { points: 45, faction: "eosc", relic: true, summary: "AP. Regeneración (4+)." },
        "Capa de Hag Graef": { points: 45, faction: "eosc", relic: false, summary: "Capa dragón marino. Impactos F>5 = F5." },
        "Escudo de Ghrond": { points: 40, faction: "eosc", relic: false, summary: "Escudo. Enemigos CaC: -2F." },
        "Armadura de la Locura Inmortal": { points: 35, faction: "eosc", relic: false, summary: "Armadura placas (TSA 4+). +1H, Estupidez." },
        "Armadura de la Oscuridad": { points: 30, faction: "eosc", relic: false, summary: "AP. TSA 1+, TSE 5+ un uso." },
        "Telaraña de Sombras": { points: 30, faction: "eosc", relic: false, summary: "Sólo hechiceras. Escudo. Un uso: 2D6 impactos F3 a 1 enemigo contacto." },
        "Armadura Sangrienta": { points: 10, faction: "eosc", relic: false, summary: "AP. +1 TSA por herida causada." }
    },
    "Talismán": {
        "Colgante de Khaeleth": { points: 40, faction: "eosc", relic: true, summary: "TSE 6+ vs F3, 5+ vs F4, 4+ vs F5, 3+ vs F6+." },
        "El Corazón de Khaine": { points: 40, faction: "eosc", relic: true, summary: "TSE 5+. +1H por herida causada CaC." },
        "Perla de la Infinita Desolación": { points: 35, faction: "eosc", relic: false, summary: "Enemigos 6\": -1L, sin Presencia Inspiradora." },
        "Máscara de la Muerte": { points: 25, faction: "eosc", relic: false, summary: "Terror." },
        "Anillo de Hotek": { points: 20, faction: "eosc", relic: false, summary: "RM(2), RM(3) vs Magia Oscura/Alta Magia." },
        "Sello de Ghrond": { points: 20, faction: "eosc", relic: false, summary: "Furia Asesina, RM(1)." },
        "Amuleto Púrpura": { points: 10, faction: "eosc", relic: false, summary: "Un uso. TSE 4+ vs 1 herida." }
    },
    "Objeto Hechizado": {
        "Corona de Hierro Negro": { points: 45, faction: "eosc", relic: true, summary: "Enemigos contacto: HA/2. Sin unidad: disparos HP/2." },
        "Huevo de Dragón Negro": { points: 35, faction: "eosc", relic: true, summary: "Un uso. +2F+R, Piel escamosa (5+), Arma aliento F2 niega TSA." },
        "El Ojo Guía": { points: 30, faction: "eosc", relic: false, summary: "Un uso. Repetir impactos fallados proyectiles. Siempre aguantar/disparar carga." },
        "Anillo de la suerte": { points: 30, faction: "eosc", relic: false, summary: "Portahechizos(2). Segundo sello de Amul (Cielos)." },
        "Gema de Cristal Oscuro": { points: 25, faction: "eosc", relic: false, summary: "Un uso. Elegir resultado Disfunción Mágica." },
        "Portal a la Dimensión Oscura": { points: 25, faction: "eosc", relic: false, summary: "Un uso. Mover 10\" volar, escapar combate." },
        "Gema de las Pesadillas": { points: 15, faction: "eosc", relic: false, summary: "Un uso. Arrojadiza 12\". Impacto auto, chequeo pánico. Portador inmune pánico." },
        "Familiar Foco": { points: 15, faction: "eosc", relic: false, summary: "Sólo hechiceras. Lanzar hechizos desde marcador 8\"." }
    },
    "Artefacto Arcano": {
        "Báculo del Poder Oscuro": { points: 50, faction: "eosc", relic: true, summary: "+1D3 dados energía. 1 no usado = 1 herida." },
        "Libro de Furion": { points: 40, faction: "eosc", relic: false, summary: "+1 Hechizo, +1 lanzar Magia Oscura." },
        "Varita de Hierro Negro": { points: 35, faction: "eosc", relic: false, summary: "+1 hechizo, ignora 1ª Disfunción Mágica." },
        "Capa de Estrella Negra": { points: 30, faction: "eosc", relic: false, summary: "+1D energía, RM(1)." },
        "Cristal de Medianoche": { points: 30, faction: "eosc", relic: false, summary: "Un uso. -1 nivel magia y -1 hechizo a hechicero 8\". +1 canalizar." },
        "Piedra del Alma": { points: 25, faction: "eosc", relic: false, summary: "Un uso. Ignorar Disfunción Mágica. Repetir tirada." },
        "Báculo Negro": { points: 20, faction: "eosc", relic: false, summary: "+1D lanzar hechizos. Guardar 1D energía/disp." },
        "Daga del Sacrificio": { points: 5, faction: "eosc", relic: false, summary: "Sacrificar miniatura unidad para +1D energía hechizo." }
    },
    "Estandarte Mágico": {
        "Estandarte de la Hidra": { points: 50, faction: "eosc", relic: true, summary: "Unidad: +1A. No monturas." },
        "Estandarte de la Bruja": { points: 40, faction: "eosc", relic: false, summary: "Sólo Elfas Brujas. Ataques envenenados (5+ si ya tiene)." },
        "Estandarte de Nagarythe": { points: 35, faction: "eosc", relic: false, summary: "Unidad: +2HA, +1 resultado combate." },
        "Estandarte de Har Ganeth": { points: 30, faction: "eosc", relic: false, summary: "Sólo Verdugos. RM(1). Golpe Letal = +1 punto combate." },
        "Estandarte del Asesino": { points: 30, faction: "eosc", relic: false, summary: "Sólo Khainitas. Furia Asesina (siempre)." },
        "Estandarte de la Masacre": { points: 25, faction: "eosc", relic: false, summary: "Unidad: +2I. Carga exitosa: +2 resultado combate." },
        "Estandarte Hag Graef": { points: 25, faction: "eosc", relic: false, summary: "Unidad: Poder de Penetración." },
        "Estandarte de la Serpiente Marina": { points: 25, faction: "eosc", relic: false, summary: "Sólo Corsarios. Odio (todos)." },
        "Estandarte de Oscuridad": { points: 25, faction: "eosc", relic: false, summary: "Unidad: -1 impactar disparos." },
        "Estandarte de la Sangre Fría": { points: 15, faction: "eosc", relic: false, summary: "Un uso. Sangre Fría para 1 chequeo desmoralización." },
        "Pabellón Encantado": { points: 10, faction: "eosc", relic: false, summary: "Unidad: Ataques mágicos." }
    }
};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Elfos Oscuros",
    FACTION_ID: "eosc",
    FOC_CONFIG: { 
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_eosc,
    mountsDB: mountsDB_eosc,
    magicItemsDB: magicItemsDB_eosc,
    armySkillsDB: armySkillsDB_eosc,
    specialProfilesDB: {},
    armySkillsLabel: "Sendas Druchii",
};
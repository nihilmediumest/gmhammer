// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: SKAVEN ---
// ===================================================================================
// Last Updated: 2025-10-XX @ XX:XX - v4.0
import { commonMagicItemsDB } from '../comun.js';

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_skav = {
    // === CORE ===
    "Guerreros de Clan": {
        faction: "skav",
        foc: "Core",
        points: 3,
        min: 20,
        max: 50,
        equipo: "Arma de mano, Armadura ligera.",
        reglasEspeciales: "La fuerza del número, Coraje mezquino (solo el oficial).",
        perfiles: [
            { nombre: "Guerrero de Clan", stats: { M: 5, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 5 } },
            { nombre: "Oficial", stats: { M: 5, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 2, L: 5 } }
        ],
        options: [
            { n: "Escudo", p: 1 },
            { n: "Lanza", p: 1 }
        ],
        command: { 
            c: { n: "Oficial", p: 4 }, 
            s: { n: "Portaestandarte", p: 4 }, 
            m: { n: "Músico", p: 4 } 
        },
        magicBanner: 25,
        specialAddons: [
            { name: "Lanzallamas de Disformidad", points: 25, max: 1, profileKey: "Lanzallamas de Disformidad" },
            { name: "Mortero de Viento Envenenado", points: 25, max: 1, profileKey: "Mortero de Viento Envenenado" },
            { name: "Picadora de Condenación", points: 25, max: 1, profileKey: "Picadora de Condenación" },
            { name: "Amerratadora", points: 30, max: 1, profileKey: "Amerratadora" }
        ]
    },

    "Esclavos Skaven": {
        faction: "skav",
        foc: "Core",
        points: 2,
        min: 20,
        max: 50,
        equipo: "Arma de mano.",
        reglasEspeciales: "La fuerza del número, Coraje mezquino (solo Jefe de Zarpa), Sacrificables.",
        perfiles: [
            { nombre: "Esclavo Skaven", stats: { M: 5, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 4, A: 1, L: 2 } },
            { nombre: "Jefe de Zarpa", stats: { M: 5, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 4, A: 2, L: 2 } }
        ],
        options: [
            { n: "Escudo", p: 1 },
            { n: "Honda", p: 1 },
            { n: "Lanza", p: 1 }
        ],
        command: { 
            c: { n: "Jefe de Zarpa", p: 4 }, 
            m: { n: "Músico", p: 4 } 
        }
    },

    "Alimañas": {
        faction: "skav",
        foc: "Core",
        warning: "Sólo puedes incluir una unidad de Alimañas por cada unidad de Guerreros de Clan de tu ejército.",
        points: 6,
        min: 10,
        max: 40,
        equipo: "Arma de mano y Armadura pesada.",
        reglasEspeciales: "La fuerza del número, Coraje mezquino (solo el oficial).",
        perfiles: [
            { nombre: "Alimaña", stats: { M: 5, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 5, A: 1, L: 5 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 5, A: 2, L: 5 } }
        ],
        options: [
            { n: "Escudo", p: 1 },
            { n: "Alabarda", p: 2 }
        ],
        command: { 
            c: { n: "Oficial", p: 6 }, 
            s: { n: "Portaestandarte", p: 6 }, 
            m: { n: "Músico", p: 6 } 
        },
        magicBanner: 50,
        champItems: 25,
        specialAddons: [
            { name: "Lanzallamas de Disformidad", points: 25, max: 1, profileKey: "Lanzallamas de Disformidad" },
            { name: "Mortero de Viento Envenenado", points: 25, max: 1, profileKey: "Mortero de Viento Envenenado" },
            { name: "Picadora de Condenación", points: 25, max: 1, profileKey: "Picadora de Condenación" },
            { name: "Amerratadora", points: 30, max: 1, profileKey: "Amerratadora" }
        ]
    },

    "Corredores de Alcantarillas": {
        faction: "skav",
        foc: "Core",
        warning: "Sólo puedes incluir una unidad de Corredores de Alcantarillas por cada unidad de Guerreros de Clan de tu ejército.",
        points: 5,
        min: 10,
        max: 30,
        equipo: "Dos armas de mano.",
        reglasEspeciales: "La fuerza del número, Coraje mezquino (solo Acechante Nocturno), Esquivar 6+ (solo Acechante Nocturno), Reputación Traicionera.",
        perfiles: [
            { nombre: "Corredor de Alcantarillas", stats: { M: 6, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 5 } },
            { nombre: "Acechante Nocturno", stats: { M: 6, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 2, L: 6 } }
        ],
        options: [
            { n: "Hondas", p: 1 },
            { n: "Estrellas Arrojadizas", p: 1 },
            { n: "Vanguardia", p: 1 },
            { n: "Hostigadores", p: 1 }
        ],
        command: { 
            c: { n: "Acechante Nocturno", p: 8 }, 
            m: { n: "Músico", p: 6 } 
        },
        specialAddons: [
            { name: "Tuneladora de Disformidad", points: 30, max: 1, profileKey: "Tuneladora de Disformidad" }
        ]
    },

    "Ratas Gigantes": {
        faction: "skav",
        foc: "Core",
        composition: {
            type: "ratioBased",
            primary: { name: "Rata Gigante", cost: 3 },
            secondary: { name: "Señor de las Bestias", cost: 5 },
            ruleText: "Debes incluir entre 1 y 2 señores de las bestias por cada seis ratas gigantes o fracción.",
            ruleLogic: { secondaryMin: 1, secondaryMax: 2, perPrimary: 6 }
        },
        min: { primary: 10, secondary: 2 },
        max: { primary: 40, secondary: 14 },
        equipo: "Arma de mano, látigo y armadura ligera (señores de las bestias). Uñas y dientes (ratas gigantes).",
        reglasEspeciales: "La fuerza del número, Coraje mezquino (solo señores de las bestias), Correr con la Manada, Horda.",
        perfiles: [
            { nombre: "Rata Gigante", stats: { M: 6, HA: 3, HP: 0, F: 3, R: 3, H: 1, I: 4, A: 1, L: 3 } },
            { nombre: "Señor de las Bestias", stats: { M: 6, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 6 } }
        ]
    },

    "Hordas de Ratas": {
        faction: "skav",
        foc: "Core",
        warning: "0-2 unidades",
        points: 14,
        min: 2,
        max: 6,
        equipo: "Garras y dientes",
        reglasEspeciales: "Sacrificables, Poder de penetración.",
        perfiles: [
            { nombre: "Enjambre de ratas", stats: { M: 6, HA: 3, HP: 0, F: 2, R: 2, H: 4, I: 4, A: 4, L: 5 } }
        ]
    },

    // === SPECIAL ===
    "Alimañas de Crianza": {
        faction: "skav",
        foc: "Special",
        warning: "0-1 unidad",
        points: 11,
        min: 10,
        max: 30,
        equipo: "Arma de mano, Alabarda y Armadura pesada.",
        reglasEspeciales: "La fuerza del número, Coraje mezquino (solo el oficial).",
        perfiles: [
            { nombre: "Alimaña", stats: { M: 5, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 5, A: 1, L: 6 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 5, A: 2, L: 6 } }
        ],
        options: [
            { n: "Escudo", p: 1 }
        ],
        command: { 
            c: { n: "Oficial", p: 6 }, 
            s: { n: "Portaestandarte", p: 6 }, 
            m: { n: "Músico", p: 6 } 
        },
        magicBanner: 50,
        champItems: 25,
        specialAddons: [
            { name: "Lanzallamas de Disformidad", points: 25, max: 1, profileKey: "Lanzallamas de Disformidad" },
            { name: "Mortero de Viento Envenenado", points: 25, max: 1, profileKey: "Mortero de Viento Envenenado" },
            { name: "Picadora de Condenación", points: 25, max: 1, profileKey: "Picadora de Condenación" },
            { name: "Amerratadora", points: 30, max: 1, profileKey: "Amerratadora" }
        ]
    },

    "Mosquetes Jezzail": {
        faction: "skav",
        foc: "Special",
        points: 22,
        min: 2,
        max: 6,
        equipo: "Arma de mano, Mosquete Jezzail, Pavés.",
        reglasEspeciales: "Aprendices del Gremio (sólo pueden unirse a la unidad Ingenieros Brujos).",
        perfiles: [
            { nombre: "Mosquete Jezzail", stats: { M: 5, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 4, A: 2, L: 5 } },
            { nombre: "Tirador Experto", stats: { M: 5, HA: 3, HP: 4, F: 3, R: 3, H: 2, I: 4, A: 2, L: 5 } }
        ],
        options: [
            { n: "Hostigadores", p: 3 }
        ],
        command: { 
            c: { n: "Tirador Experto", p: 6 } 
        }
    },

    "Ratas Ogro": {
        faction: "skav",
        foc: "Special",
        composition: {
            type: "ratioBased",
            primary: { name: "Rata Ogro", cost: 35 },
            secondary: { name: "Señor de las Bestias", cost: 5 },
            ruleText: "Debes incluir entre uno y dos señores de las bestias por cada rata ogro.",
            ruleLogic: { secondaryMin: 1, secondaryMax: 2, perPrimary: 1 }
        },
        min: { primary: 2, secondary: 2 },
        max: { primary: 6, secondary: 12 },
        equipo: "Arma de mano, látigo y armadura ligera (Señores de las bestias). Garras (ratas ogro).",
        reglasEspeciales: "La fuerza del número, Coraje mezquino (solo Señores de las bestias), Furia asesina (solo Ratas Ogro), Miedo.",
        perfiles: [
            { nombre: "Rata Ogro", stats: { M: 6, HA: 3, HP: 0, F: 5, R: 4, H: 3, I: 4, A: 3, L: 2 } },
            { nombre: "Rata Ogro de Crianza", stats: { M: 6, HA: 4, HP: 0, F: 5, R: 4, H: 3, I: 4, A: 4, L: 2 } },
            { nombre: "Señor de las Bestias", stats: { M: 6, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 6 } }
        ],
        command: { 
            c: { n: "Rata Ogro de Crianza", p: 8 } 
        }
    },

    "Acechantes Nocturnos": {
        faction: "skav",
        foc: "Special",
        points: 10,
        min: 5,
        max: 15,
        equipo: "Dos armas de mano.",
        reglasEspeciales: "Esquivar 6+, Esquivar 5+ (solo Acechante Mortal), Hostigadores, Reputación Traicionera, Exploradores.",
        perfiles: [
            { nombre: "Acechante Nocturno", stats: { M: 6, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 1, L: 6 } },
            { nombre: "Acechante Mortal", stats: { M: 6, HA: 4, HP: 5, F: 3, R: 3, H: 1, I: 5, A: 2, L: 7 } }
        ],
        options: [
            { n: "Armadura ligera", p: 1 },
            { n: "Hondas", p: 1 },
            { n: "Estrellas Arrojadizas", p: 1 },
            { n: "Redes", p: 1 },
            { n: "Ataques Envenenados", p: 3 }
        ],
        command: { 
            c: { n: "Acechante Mortal", p: 8 }, 
            m: { n: "Músico", p: 6 } 
        },
        champItems: 25,
        specialAddons: [
            { name: "Tuneladora de Disformidad", points: 30, max: 1, profileKey: "Tuneladora de Disformidad" }
        ]
    },

    "Monjes de Plaga": {
        faction: "skav",
        foc: "Special",
        points: 6,
        min: 10,
        max: 40,
        equipo: "Dos armas de mano.",
        reglasEspeciales: "La fuerza del número, Coraje mezquino (solo el oficial), Furia asesina, Hedor Apestoso.",
        perfiles: [
            { nombre: "Monje de Plaga", stats: { M: 5, HA: 3, HP: 3, F: 3, R: 4, H: 1, I: 3, A: 1, L: 5 } },
            { nombre: "Monaguillo de Plaga", stats: { M: 5, HA: 3, HP: 3, F: 3, R: 4, H: 1, I: 3, A: 2, L: 5 } }
        ],
        command: { 
            c: { n: "Monaguillo de Plaga", p: 6 }, 
            s: { n: "Portaestandarte", p: 6 }, 
            m: { n: "Músico", p: 6 } 
        },
        magicBanner: 50
    },

    "Portadores del Incensario de Plaga": {
        faction: "skav",
        foc: "Special",
        points: 16,
        min: 5,
        max: 15,
        equipo: "Incensario de Plaga.",
        reglasEspeciales: "Furia asesina, Odio (todos los enemigos), Indesmoralizables, Hostigadores, Hedor Apestoso.",
        perfiles: [
            { nombre: "Portador del Incensario de Plaga", stats: { M: 5, HA: 3, HP: 3, F: 3, R: 4, H: 1, I: 3, A: 2, L: 5 } },
            { nombre: "Cantor de Plaga", stats: { M: 5, HA: 3, HP: 3, F: 3, R: 4, H: 1, I: 3, A: 3, L: 5 } }
        ],
        command: { 
            c: { n: "Cantor de Plaga", p: 6 } 
        }
    },

    "Lanzadores de Viento Envenenado": {
        faction: "skav",
        foc: "Special",
        points: 13,
        min: 5,
        max: 15,
        equipo: "Arma de mano, Armadura pesada, Esferas de Viento Envenenado, Máscaras antigás.",
        reglasEspeciales: "Hostigadores, Aprendices del Gremio (sólo pueden unirse a la unidad Ingenieros Brujos).",
        perfiles: [
            { nombre: "Lanzador de Viento Envenenado", stats: { M: 5, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 5 } },
            { nombre: "Bombardero", stats: { M: 5, HA: 3, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 1, L: 5 } }
        ],
        command: { 
            c: { n: "Bombardero", p: 6 } 
        }
    },

    // === RARE ===
    "Abominación de Pozo Infernal": {
        faction: "skav",
        foc: "Rare",
        points: 220,
        min: 1,
        max: 1,
        equipo: "-",
        reglasEspeciales: "Impactos por carga (1D6), Movimiento aleatorio 3D6, Regeneración (4+), Demasiado Horrible para Morir, Horror Transitable.",
        perfiles: [
            { nombre: "Abominación de Pozo Infernal", stats: { M: "3D6", HA: 3, HP: 0, F: 6, R: 5, H: 6, I: 3, A: "*", L: 8 } }
        ],
        options: [
            { n: "Púas de Piedra bruja (ataques mágicos y resistencia mágica [1])", p: 20 }
        ]
    },

    "Cañón de Disformidad": {
        faction: "skav",
        foc: "Rare",
        points: 90,
        min: 1,
        max: 1,
        equipo: "Arma de mano, armadura ligera.",
        reglasEspeciales: "Dispara como un Cañón con plantilla redonda pequeña en el rebote.",
        perfiles: [
            { nombre: "Cañón de Disformidad", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 6, H: "-", I: "-", A: "-", L: "-" } },
            { nombre: "Ingeniero y Dotación", stats: { M: 5, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 5 } }
        ]
    },

    "Garrapulta de Plaga": {
        faction: "skav",
        foc: "Rare",
        points: 80,
        min: 1,
        max: 1,
        equipo: "Dos armas de mano (Monjes de Plaga).",
        reglasEspeciales: "Catapulta con plantilla redonda grande, F2, niega salvación por armadura.",
        perfiles: [
            { nombre: "Garrapulta de Plaga", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 6, H: "-", I: "-", A: "-", L: "-" } },
            { nombre: "Dotación de Monjes (3)", stats: { M: 5, HA: 3, HP: 3, F: 3, R: 4, H: 1, I: 4, A: "*", L: 5 } }
        ]
    },

    "Rueda de la Muerte": {
        faction: "skav",
        foc: "Rare",
        points: 175,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Pistola Bruja (Ingenieros). Uñas y dientes (ratas).",
        reglasEspeciales: "Salvación por armadura (4+), Potencia de unidad 6, Immune a psicología, Impactos por carga (1D6+1), Terror, Movimiento aleatorio (3D6), Ataques aleatorios (2D6, sólo Ratas), Objetivo grande.",
        perfiles: [
            { nombre: "Rueda de la Muerte", stats: { M: "-", HA: "-", HP: "-", F: 6, R: 5, H: 5, I: "-", A: "*", L: "-" } },
            { nombre: "Ingenieros", stats: { M: "-", HA: 3, HP: 3, F: 3, R: "-", H: "-", I: 4, A: "1 (2)", L: 7 } },
            { nombre: "Ratas", stats: { M: "3D6", HA: 3, HP: "-", F: 3, R: "-", H: "-", I: 4, A: "2D6", L: 5 } }
        ]
    },

    // === LORDS ===
    "Señor de la Guerra Skaven": {
        faction: "skav",
        foc: "Lord",
        points: 90,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura pesada.",
        reglasEspeciales: "La fuerza del número, Coraje Mezquino.",
        perfiles: [
            { nombre: "Señor de la Guerra Skaven", stats: { M: 5, HA: 6, HP: 5, F: 4, R: 4, H: 3, I: 7, A: 4, L: 7 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 2 },
            { n: "Arma a dos manos", p: 4 },
            { n: "Alabarda", p: 3 },
            { n: "Pistola Bruja", p: 5 },
            { n: "Ristra de pistolas", p: 12 },
            { n: "Mosquete brujo", p: 10 },
            { n: "Escudo", p: 3 },
            { n: "Ungüentos Eshin", p: 10 },
            { n: "Arma de Cola", p: 6 },
            { n: "Esfera Mortal", p: 20 }
        ],
        mounts: ["Rata Ogro Quebrantahuesos", "Gran Rata Pestilente", "Palanquin de alimañas"],
        maxMagicItems: 3,
        maxRelics: 1,
       
    },

    "Vidente Gris": {
        faction: "skav",
        foc: "Lord",
        points: 200,
        min: 1,
        max: 1,
        equipo: "Arma de mano, 1D3 fragmentos de Piedra bruja.",
        reglasEspeciales: "La fuerza del número, Coraje Mezquino.",
        perfiles: [
            { nombre: "Vidente Gris", stats: { M: 5, HA: 3, HP: 3, F: 3, R: 4, H: 3, I: 5, A: 1, L: 7 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 2 },
            { n: "Arma a dos manos", p: 4 },
            { n: "Pistola Bruja", p: 5 },
            { n: "Ungüentos Eshin", p: 10 },
            { n: "Arma de Cola", p: 6 },
            { n: "Esfera Mortal", p: 20 },
            { n: "Fragmento adicional de Piedra bruja", p: 10, costType: 'flat', max: 3 }
        ],
        mounts: ["Palanquin de alimañas", "Campana Gritona"],
        maxMagicItems: 3,
        maxRelics: 1,
       
    },

    "Señor de las Alimañas": {
        faction: "skav",
        foc: "Lord",
        points: 400,
        min: 1,
        max: 1,
        equipo: "Garras y Dientes (arma de mano)",
        reglasEspeciales: "Veloz, Demonio, Aura demoníaca (4+), Avatar de la Gran Cornuda, Cruzar (obstáculos).",
        perfiles: [
            { nombre: "Señor de las Alimañas", stats: { M: 10, HA: 8, HP: 4, F: 6, R: 6, H: 6, I: 10, A: 6, L: 8 } }
        ],
        options: [
           {n: "Espadón de Muerte", p:50, summary:"Alabarda, heridas múltiples (1D3)"},
           {n:"Hoces de Plaga", p:40, summary: "Armas emparejadas, ataques envenenados, golpe letal"}
        ],
        maxSkills: { limit: 100, type: 'points' }
    },

    // === HEROES ===
    "Caudillo Skaven": {
        faction: "skav",
        foc: "Hero",
        points: 45,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura pesada.",
        reglasEspeciales: "La fuerza del número, Coraje Mezquino.",
        perfiles: [
            { nombre: "Caudillo Skaven", stats: { M: 5, HA: 5, HP: 4, F: 4, R: 4, H: 2, I: 6, A: 3, L: 6 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 1 },
            { n: "Arma a dos manos", p: 2 },
            { n: "Alabarda", p: 3 },
            { n: "Pistola Bruja", p: 5 },
            { n: "Ristra de pistolas", p: 10 },
            { n: "Mosquete brujo", p: 8 },
            { n: "Escudo", p: 2 },
            { n: "Ungüentos Eshin", p: 10 },
            { n: "Arma de Cola", p: 6 }
        ],
        mounts: ["Palanquín de Alimañas", "Gran Rata Pestilente"],
        maxMagicItems: 3,
        maxRelics: 0,
        battleStandard: { name: "Portaestandarte de batalla", cost: 25 }
    },

    "Sacerdote de Plaga Pestilens": {
        faction: "skav",
        foc: "Hero",
        points: 90,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "La fuerza del número, Coraje Mezquino, furia asesina, Hedor Apestoso.",
        perfiles: [
            { nombre: "Sacerdote de Plaga Pestilens", stats: { M: 5, HA: 5, HP: 3, F: 4, R: 5, H: 2, I: 5, A: 3, L: 6 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 2 },
            { n: "Arma a dos manos", p: 2 },
            { n: "Incensario de Plaga", p: 10 },
            { n: "Ungüentos Eshin", p: 10 },
            { n: "Arma de Cola", p: 6 },
            { n: "Fragmento de piedra bruja", p: 10, costType: 'flat', max: 2 }
        ],
        mounts: ["Gran Rata Pestilente", "Pebetero de Plaga"],
        maxMagicItems: 2,
        maxRelics: 0,
    },

    "Maestro Moulder": {
        faction: "skav",
        foc: "Hero",
        points: 35,
        min: 1,
        max: 1,
        equipo: "Arma de mano y armadura ligera.",
        reglasEspeciales: "La fuerza del número, Coraje Mezquino, Correr con la Manada, Wistrol de disformidad.",
        perfiles: [
            { nombre: "Maestro Moulder", stats: { M: 6, HA: 4, HP: 3, F: 4, R: 4, H: 2, I: 5, A: 2, L: 7 } }
        ],
        options: [
            { n: "Látigo", p: 3 },
            { n: "Atrapacosas", p: 12 },
            { n: "Palo-Shock", p: 8 },
            { n: "Ungüentos Eshin", p: 5 },
            { n: "Arma de Cola", p: 6 }
        ],
        mounts: ["Rata Ogro Quebrantahuesos", "Gran Rata Pestilente"],
        maxMagicItems: 2,
        maxRelics: 0,
    },

    "Ingeniero Brujo": {
        faction: "skav",
        foc: "Hero",
        points: 20,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "La fuerza del número, Coraje Mezquino.",
        perfiles: [
            { nombre: "Ingeniero Brujo", stats: { M: 5, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 4, A: 1, L: 5 } }
        ],
        options: [
            { n: "Alabarda Bruja", p: 10 },
            { n: "Pistola Bruja", p: 5 },
            { n: "Ristra de pistolas", p: 10 },
            { n: "Mosquete brujo", p: 8 },
            { n: "Armadura Bruja", p: 5 },
            { n: "Optometría Bruja", p: 5 },
            { n: "Acumulador de Piedra Bruja", p: 10 },
            { n: "Ungüentos Eshin", p: 5 },
            { n: "Arma de Cola", p: 2 },
            { n: "Esfera Mortal", p: 20 }
        ],
        mounts: ["Rueda de la Muerte"],
        maxMagicItems: 2,
        maxRelics: 0,
    },

    "Asesino Eshin": {
        faction: "skav",
        foc: "Hero",
        points: 90,
        min: 1,
        max: 1,
        equipo: "Dos armas de mano, estrellas arrojadizas, Unguentos Eshin.",
        reglasEspeciales: "La fuerza del número (solo en tropas Eshin), Coraje Mezquino, Destreza marcial, Esquivar (5+), Explorador y Asesino, No Líder, Despliegue oculto.",
        perfiles: [
            { nombre: "Asesino Eshin", stats: { M: 6, HA: 6, HP: 5, F: 4, R: 3, H: 2, I: 8, A: 3, L: 7 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 2 },
            { n: "Mayal", p: 2 },
            { n: "Alabarda", p: 3 },
            { n: "Pistola Bruja", p: 5 },
            { n: "Ristra de pistolas", p: 10 },
            { n: "Arma de Cola", p: 6 }
        ],
        maxMagicItems: 2,
        maxRelics: 0,
    }
};

const mountsDB_skav = {
    "Rata Ogro Quebrantahuesos": {
        faction: "skav",
        points: 70,
        perfiles: [
            { nombre: "Rata Ogro Quebrantahuesos", stats: { M: 6, HA: 4, HP: 0, F: 5, R: 5, H: 4, I: 3, A: 4, L: 5 } }
        ],
        reglasEspeciales: "Bestia monstruosa. Cambia el tipo de jinete a caballería monstruosa. Causa Miedo. Solo puede unirse a unidades de guerreros de clan, alimañas y ratas ogro."
    },

    "Gran Rata Pestilente": {
        faction: "skav",
        points: 60,
        perfiles: [
            { nombre: "Gran Rata Pestilente", stats: { M: 8, HA: 3, HP: 0, F: 5, R: 5, H: 4, I: 4, A: 3, L: 5 } }
        ],
        reglasEspeciales: "Bestia monstruosa. Cambia el tipo de jinete a caballería monstruosa (no puede unirse a unidades). Miedo, ataques envenenados, Piel Costrosa (+2 TSA)."
    },

    "Palanquín de Alimañas": {
        faction: "skav",
        points: 50,
        perfiles: [
            { nombre: "Palanquín de Alimañas", stats: { M: 5, HA: 4, HP: 3, F: 4, R: "-", H: "-", I: 5, A: "1 (4)", L: 5 } }
        ],
        reglasEspeciales: "No cambia el tipo del jinete. Portado por cuatro guerreros alimaña. +2 TSA y una herida adicional al jinete."
    },

    "Campana Gritona": {
        faction: "skav",
        points: 180,
        perfiles: [
            { nombre: "Campana Gritona", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 6, H: 6, I: "-", A: "-", L: "-" } },
            { nombre: "Campanero", stats: { M: "-", HA: 4, HP: "-", F: 3, R: "-", H: "-", I: 4, A: 2, L: 6 } },
            { nombre: "Rata-Ogro", stats: { M: "-", HA: 3, HP: "-", F: 5, R: "-", H: "-", I: 4, A: 4, L: 4 } }
        ],
        reglasEspeciales: "Solo Videntes Grises. Salvación por armadura (4+), Potencia de unidad 6, Terror, Impactos por Carga (1D3), Objetivo Grande, Resistencia a la Magia (2), Indesmoralizable."
    },

    "Pebetero de Plaga": {
        faction: "skav",
        points: 180,
        perfiles: [
            { nombre: "Pebetero de Plaga", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 6, H: 6, I: "-", A: "-", L: "-" } },
            { nombre: "Dotación Monjes de Plaga (3)", stats: { M: "-", HA: 3, HP: "-", F: 3, R: "-", H: "-", I: 3, A: "1 (3)", L: 5 } }
        ],
        reglasEspeciales: "Solo Sacerdotes de Plaga. Salvación por armadura (4+), Potencia de unidad 6, Furia Asesina, Impactos por carga (1D6), Objetivo Grande, Resistencia a la magia (2), Indesmoralizable."
    },

    "Rueda de la Muerte": {
        faction: "skav",
        points: 140,
        perfiles: [
            { nombre: "Rueda de la Muerte", stats: { M: "-", HA: "-", HP: "-", F: 6, R: 5, H: 5, I: "-", A: "*", L: "-" } },
            { nombre: "Ingenieros", stats: { M: "-", HA: 3, HP: 3, F: 3, R: "-", H: "-", I: 4, A: "1 (2)", L: 7 } },
            { nombre: "Ratas", stats: { M: "3D6", HA: 3, HP: "-", F: 3, R: "-", H: "-", I: 4, A: "2D6", L: 5 } }
        ],
        reglasEspeciales: "Solo Ingenieros Brujos. Sustituye a uno de los ingenieros tripulantes. Salvación por armadura (4+), Potencia de unidad 6, Immune a psicología, Impactos por carga (1D6+1), Terror, Movimiento aleatorio (3D6), Ataques aleatorios (2D6, sólo Ratas), Objetivo grande."
    }
};

const specialProfilesDB_skav = {
    "Lanzallamas de Disformidad": {
        perfiles: [
            { nombre: "Dotación Skaven", stats: { M: 5, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 2, L: 5 } }
        ]
    },
    "Amerratadora": {
        perfiles: [
            { nombre: "Dotación Skaven", stats: { M: 5, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 2, L: 5 } }
        ]
    },
    "Mortero de Viento Envenenado": {
        perfiles: [
            { nombre: "Dotación Skaven", stats: { M: 5, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 2, L: 5 } }
        ]
    },
    "Picadora de Condenación": {
        perfiles: [
            { nombre: "Dotación Skaven", stats: { M: 5, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 2, L: 5 } }
        ]
    },
    "Tuneladora de Disformidad": {
        perfiles: [
            { nombre: "Dotación Skaven", stats: { M: 5, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 2, L: 5 } }
        ]
    }
};

const armySkillsDB_skav = {
    "Cornamenta descomunal": { points: 20, faction: "skav", type: "Recompensa del Caos", summary: "Impactos por carga (1D6)." },
    "Bendición impía": { points: 15, faction: "skav", type: "Recompensa del Caos", summary: "Resistencia mágica (2)." },
    "Señor de la Ruina": { points: 25, faction: "skav", type: "Recompensa del Caos", summary: "Señor del Saber de Ruina Skaven." },
    "Señor de la Plaga": { points: 25, faction: "skav", type: "Recompensa del Caos", summary: "Señor del saber de Plaga Skaven." },
    "Sudario de Sombras": { points: 25, faction: "skav", type: "Recompensa del Caos", summary: "TSE 4+ contra disparos y hechizos de proyectil mágico a más de 12\"." },
    "Presencia Pavorosa": { points: 20, faction: "skav", type: "Recompensa del Caos", summary: "Enemigos a 6\" o menos tienen -1L." },
    "Armadura de Ruina": { points: 15, faction: "skav", type: "Recompensa del Caos", summary: "TSA 4+ y puede seguir lanzando hechizos." },
    "Orbe disforme": { points: 15, faction: "skav", type: "Recompensa del Caos", summary: "Mejora Aura demoníaca a TSE 3+." }
};

const magicItemsDB_skav = {
    "Arma Mágica": {
        "Espadón de Muerte": { points: 50, faction: "skav", relic: false, summary: "Alabarda, heridas múltiples (1D3). Solo Señor de las Alimañas." },
        "Hoces de Plaga": { points: 40, faction: "skav", relic: false, summary: "Armas emparejadas, ataques envenenados, golpe letal. Solo Señor de las Alimañas." },
        "Espada Bruja Forjada": { points: 35, faction: "skav", relic: true, summary: "Arma de mano. +1F y -3 a las TSA." },
        "Estrellas de Piedra Bruja": { points: 40, faction: "skav", relic: false, summary: "Arma arrojadiza. Solo Asesinos Eshin. Alcance 12\", F5, Disparo rápido, Disparos múltiples (3), Heridas Múltiples (1D3)." },
        "Espada de la Furia Negra": { points: 35, faction: "skav", relic: false, summary: "Arma de mano. +2A y Golpe Maestro." },
        "Arma de Ingeniero": { points: 35, faction: "skav", relic: false, summary: "Alabarda. +1F y +1A." },
        "Espada de Corrupción": { points: 30, faction: "skav", relic: false, summary: "Arma de mano. +1F, Poder de penetración, Heridas Múltiples (2)." },
        "Espada Maldita del Delirio": { points: 25, faction: "skav", relic: false, summary: "Arma de mano. +1 para impactar, enemigos -1 para impactar." },
        "Mayal Pútrido": { points: 25, faction: "skav", relic: false, summary: "Incensario de Plaga. Solo Sacerdotes Pestilens. Heridas Múltiples (1D3)." },
        "Par de Espadas Supurantes": { points: 25, faction: "skav", relic: false, summary: "Armas emparejadas. Poder de Penetración, ataques envenados 5+, Golpe Maestro." },
        "Romperráneos": { points: 20, faction: "skav", relic: false, summary: "Atrapa-cosas. Solo Maestros Moulder. Golpe Letal 5+." },
        "Maldición del Enano": { points: 20, faction: "skav", relic: false, summary: "Arma de mano. +1F, Poder de Penetración. Vs Enanos: repetir tiradas fallidas para herir." },
        "Espada Supurante": { points: 15, faction: "skav", relic: false, summary: "Arma de mano. Poder de Penetración, ataques envenados 5+." },
        "Espada de Nurglich": { points: 10, faction: "skav", relic: false, summary: "Arma de mano. Ataques envenados, enemigos heridos -1R." }
    },

    "Armadura Mágica": {
        "Coraza mecanizada de Disformidad": { points: 40, faction: "skav", relic: true, summary: "Armadura pesada. TSA 1+. No puede unirse a unidades. +1F, +1R, Movimiento Aleatorio (2D6), Ataques Aleatorios (1D6), Impactos por Carga (1D3), Terror, Indesmoralizable. -1 para impactar contra el portador. Heridas Múltiples (1D2)." },
        "Armadura del Fin del Mundo": { points: 45, faction: "skav", relic: false, summary: "Armadura Pesada. TSA 4+, TSE 5+, RM(1). Enanos tienen Odio." },
        "Armadura Roída": { points: 25, faction: "skav", relic: false, summary: "Armadura pesada. -1F a los impactos contra el portador." },
        "Armadura de Disformidad": { points: 15, faction: "skav", relic: false, summary: "Armadura pesada. TSA 4+. Por cada TSA exitosa, impacto de F4 contra el atacante. Solo Ingenieros Brujos." },
        "Escudo de Distracción": { points: 15, faction: "skav", relic: false, summary: "Escudo. Enemigos en contacto -1A (mínimo 1)." }
    },

    "Talismán": {
        "Prisma de disformidad": { points: 50, faction: "skav", relic: true, summary: "Immune a Veneno y Golpe letal, TSE(4+)." },
        "Capa Tenebrosa": { points: 35, faction: "skav", relic: false, summary: "TSE 3+ contra proyectiles y proyectiles mágicos." },
        "Cacharro de Atracción de Sombras": { points: 30, faction: "skav", relic: false, summary: "Disparos contra el portador o su unidad con -1 para impactar." },
        "Colgante de Putridez": { points: 25, faction: "skav", relic: false, summary: "Solo Sacerdotes Pestilens. TSE 5+." },
        "Anillo de la Oscuridad": { points: 15, faction: "skav", relic: false, summary: "RM(1). Oculta otros objetos mágicos en la unidad." },
        "Talismán de la Piel de Otro": { points: 15, faction: "skav", relic: false, summary: "Un solo uso. Obliga a una miniatura enemiga en contacto a repetir tiradas exitosas para impactar." }
    },

    "Artefacto Arcano": {
        "Glorioso Bastón de la Ruinosa Podredumbre": { points: 40, faction: "skav", relic: true, summary: "Señor del Conocimiento (Ruina y Plaga). Disfunciones mágicas: tirar 3D6 y descartar un dado." },
        "Orbe de Vidente": { points: 40, faction: "skav", relic: false, summary: "Solo Videntes Grises. +3 dificultad para +6\" alcance. +1 TSE (máx 4+)." },
        "Liber Bubonicus": { points: 35, faction: "skav", relic: false, summary: "Solo Sacerdotes Pestilens. +1 hechizo. Una vez por fase: +1D3 a lanzamiento de hechizo de Plaga." },
        "Báculo del Colmillo": { points: 30, faction: "skav", relic: false, summary: "Solo Videntes Grises. Una vez por fase: repetir un dado de energía. +2 a canalización." },
        "Pergamino de disformidad Pestilens": { points: 25, faction: "skav", relic: false, summary: "Solo Sacerdotes Pestilens. Portahechizos(5). Hechizo de daño directo a 24\": F2 sin TSA." },
        "Pergamino de Tormenta de Disformidad": { points: 25, faction: "skav", relic: false, summary: "Un solo uso. Unidades con Volar o Flotar: 1D6 impactos de F6." },
        "El Ojo de la gran Cornuda": { points: 15, faction: "skav", relic: false, summary: "Inicio de fase de magia: 2+ = +1 dado de energía; 1 = -1 dado." },
        "Familiar Rátido": { points: 10, faction: "skav", relic: false, summary: "+1 hechizo identificativo." }
    },

    "Objeto Hechizado": {
        "Corona de la Rata Cornuda": { points: 45, faction: "skav", relic: true, summary: "Tozudez y Furia asesina (no se pierden al ser derrotado)." },
        "Skalm": { points: 40, faction: "skav", relic: false, summary: "Un solo uso. Restablecer todas las heridas o evitar la última herida." },
        "Potaje Skaven": { points: 35, faction: "skav", relic: false, summary: "Un solo uso. Aplicar efecto aleatorio a unidad de guerreros de clan o alimañas." },
        "Brazaletes de Poder": { points: 30, faction: "skav", relic: false, summary: "Portahechizos(5). Duplica F del portador por un turno." },
        "Cohete Aniquilador": { points: 30, faction: "skav", relic: false, summary: "Un solo uso. Disparo con plantilla redonda grande, F5." },
        "Cafierías de Piebald": { points: 25, faction: "skav", relic: false, summary: "Unidades que quieran cargar deben superar chequeo de L." },
        "Bomba Infernal": { points: 20, faction: "skav", relic: false, summary: "Solo Asesinos Eshin. Un solo uso. Bomba con plantilla redonda grande, F10 centro, F3 resto." },
        "Portentos del Destino Funesto": { points: 20, faction: "skav", relic: false, summary: "Enemigos en contacto -1L." },
        "Bombas de Humo": { points: 20, faction: "skav", relic: false, summary: "Solo Asesinos Eshin. Perseguidores ven movimiento reducido a la mitad." },
        "Amuleto de piedra de disformidad": { points: 5, faction: "skav", relic: false, summary: "Un sólo uso. Repetir una tirada." }
    },

    "Estandarte Mágico": {
        "Estandarte Sagrado de la Gran Cornuda": { points: 45, faction: "skav", relic: true, summary: "Miedo. '¡Ni un paso atrás!' a 24\"." },
        "Estandarte de la Tempestad": { points: 35, faction: "skav", relic: true, summary: "Un solo uso. Anula Volar/Flotar, -2 para impactar disparos, 4+ para poder disparar." },
        "Estandarte del Rencor": { points: 45, faction: "skav", relic: false, summary: "Odio. Inicio de combate: 2D6 impactos de F3 a una unidad enemiga." },
        "Estandarte de Plaga": { points: 40, faction: "skav", relic: false, summary: "Solo Monjes de Plaga. Un solo uso. Repetir tiradas fallidas para impactar y herir." },
        "Estandarte de Superioridad de Clan": { points: 25, faction: "skav", relic: false, summary: "Solo guerreros del clan. +1D3 al resultado del combate si tiene más filas." },
        "Mortaja de la Muerte Supurante": { points: 25, faction: "skav", relic: false, summary: "Ataques envenenados (solo en cuerpo a cuerpo)." },
        "Estandarte de la Roña": { points: 25, faction: "skav", relic: false, summary: "Solo Monjes de Plaga. Regeneración 6+. No pierde Furia asesina al ser derrotado." },
        "Estandarte del Imperio Subterráneo": { points: 25, faction: "skav", relic: false, summary: "Atacar con filas adicionales (1) o +1 si ya lo tenía." },
        "Estandarte de la Huida de Rata": { points: 15, faction: "skav", relic: false, summary: "Veloz. No se pierde al huir a no ser que sea aniquilada." }
    }
};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Skaven",
    FACTION_ID: "skav",
    FOC_CONFIG: { 
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_skav,
    mountsDB: mountsDB_skav,
    magicItemsDB: magicItemsDB_skav,
    armySkillsDB: armySkillsDB_skav,
    specialProfilesDB: specialProfilesDB_skav,
    armySkillsLabel: "Recompensas del Caos",
};
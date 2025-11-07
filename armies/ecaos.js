// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: ENANOS DEL CAOS ---
// ===================================================================================
// Last Updated: 2025-10-04 - v4.0
import { commonMagicItemsDB } from '../comun.js';

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_ecaos = {
    // === CORE ===
    "Guerreros Enanos del Caos": {
        faction: "ecaos",
        foc: "Core",
        points: 8,
        min: 10,
        max: 30,
        equipo: "Armadura pesada y Arma de mano.",
        reglasEspeciales: "Avance imparable, Desprecio.",
        perfiles: [
            { nombre: "Guerrero Enano del Caos", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 2, L: 8 } }
        ],
        options: [
            { n: "Escudo", p: 1 },
            { n: "Arma a dos manos", p: 2 }
        ],
        command: { 
            c: { n: "Oficial", p: 6 }, 
            s: { n: "Portaestandarte", p: 6, allowIcon: true }, 
            m: { n: "Músico", p: 6 } 
        },
        magicBanner: 25
    },
    "Trabuqueros Enanos del Caos": {
        faction: "ecaos",
        foc: "Core",
        points: 13,
        min: 5,
        max: 20,
        equipo: "Arma de mano, Trabuco(18\" alcance) y Armadura pesada",
        reglasEspeciales: "Avance imparable, Desprecio.",
        perfiles: [
            { nombre: "Trabuquero", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 2, L: 8 } }
        ],
        options: [
            { n: "Escudo", p: 1 }
        ],
        command: { 
            c: { n: "Oficial", p: 6 }, 
            s: { n: "Portaestandarte", p: 6, allowIcon: true }, 
            m: { n: "Músico", p: 6 } 
        },
        magicBanner: 25
    },
    "Hobgoblins": {
        faction: "ecaos",
        foc: "Core",
        warning: "Sólo puedes incluir unidades de Hobgoblins si incluyes al menos una unidad de Guerreros o Trabuqueros enanos del caos en tu ejército.",
        points: 3,
        min: 15,
        max: 40,
        equipo: "Arma de mano y Armadura ligera",
        reglasEspeciales: "Animosidad hobgoblin.",
        perfiles: [
            { nombre: "Hobgoblin", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 2, A: 1, L: 6 } },
            { nombre: "Jefe hobgoblin", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 6 } }
        ],
        options: [
            { n: "Escudo", p: 1 },
            { n: "Arco", p: 2 },
            { n: "Cuchillos arrojadizos", p: 1 },
            { n: "Lanza", p: 1 },
            { n: "Armas de mano adicionales", p: 1 }
        ],
        command: { 
            c: { n: "Oficial", p: 4 }, 
            s: { n: "Portaestandarte", p: 4 }, 
            m: { n: "Músico", p: 4 } 
        }
    },

    // === SPECIAL ===
    "Hobgoblins Escurridizos": {
        faction: "ecaos",
        foc: "Special",
        warning: "Sólo puedes incluir unidades de Hobgoblins escurridizos si incluyes al menos una unidad de hobgoblins en tu ejército.",
        points: 6,
        min: 5,
        max: 15,
        equipo: "Dos Armas de mano, Cuchillos arrojadizos y Armadura ligera",
        reglasEspeciales: "Animosidad hobgoblin, Hostigadores, Envoltura de flancos.",
        perfiles: [
            { nombre: "Hobgoblin escurridizo", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Jefe escurridizo", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 2, L: 6 } }
        ],
        options: [
            { n: "Ataques envenenados", p: 2 }
        ],
        command: { 
            c: { n: "Oficial", p: 4 }, 
            m: { n: "Músico", p: 4 } 
        }
    },
    "Hobgoblins Jinetes de Lobo": {
        faction: "ecaos",
        foc: "Special",
        warning: "0-2",
        points: 10,
        min: 5,
        max: 20,
        equipo: "Arma de mano y armadura ligera.",
        reglasEspeciales: "Animosidad hobgoblin, Caballería rápida.",
        perfiles: [
            { nombre: "Hobgoblin", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 2, A: 1, L: 6 } },
            { nombre: "Jefe hobgoblin", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 6 } },
            { nombre: "Lobo", stats: { M: 9, HA: 4, HP: 0, F: 4, R: 3, H: 1, I: 4, A: 1, L: 6 } }
        ],
        options: [
            { n: "Lanza", p: 1 },
            { n: "Escudo", p: 1 },
            { n: "Arcos cortos", p: 1 }
        ],
        command: { 
            c: { n: "Jefe", p: 6 }, 
            s: { n: "Portaestandarte", p: 6 }, 
            m: { n: "Músico", p: 6 } 
        }
    },
    "Centauros Enanos del Caos": {
        faction: "ecaos",
        foc: "Special",
        points: 35,
        min: 3,
        max: 6,
        equipo: "Arma de mano y Armadura ligera",
        reglasEspeciales: "Piel escamosa (5+), Causan Miedo, Impactos por carga (1), Desprecio.",
        perfiles: [
            { nombre: "Centauro", stats: { M: 7, HA: 4, HP: 2, F: 4, R: 5, H: 3, I: 3, A: 2, L: 8 } },
            { nombre: "Oficial", stats: { M: 7, HA: 4, HP: 2, F: 4, R: 5, H: 3, I: 3, A: 3, L: 8 } }
        ],
        options: [
            { n: "Lanzas", p: 2 },
            { n: "Armas a dos manos", p: 5 },
            { n: "Armas de mano adicionales", p: 3 },
            { n: "Escudos", p: 3 },
            { n: "Armaduras pesadas", p: 5 },
            { n: "Centauros Toch-akos", p: 20, summary: "Mejora única unidad: F5, A3, ver perfil Toch-akos" }
        ],
        command: { 
            c: { n: "Oficial", p: 8 }, 
            s: { n: "Portaestandarte", p: 8, allowIcon: true }, 
            m: { n: "Músico", p: 8 } 
        },
        magicBanner: 50,
        champItems: 25
    },
    "Guardia Infernal": {
        faction: "ecaos",
        foc: "Special",
        points: 10,
        min: 10,
        max: 30,
        equipo: "Arma de mano y Armadura pesada.",
        reglasEspeciales: "Avance imparable, Desprecio.",
        perfiles: [
            { nombre: "Guardia Infernal", stats: { M: 3, HA: 4, HP: 4, F: 4, R: 4, H: 1, I: 2, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 3, HA: 5, HP: 4, F: 4, R: 4, H: 1, I: 2, A: 2, L: 8 } }
        ],
        options: [
            { n: "Armas a dos manos", p: 2 },
            { n: "Alabardas", p: 3 },
            { n: "Gujas de fuego", p: 5 },
            { n: "Escudos", p: 1 },
            { n: "Armaduras Negras", p: 2, summary: "Única unidad" }
        ],
        command: { 
            c: { n: "Oficial", p: 8 }, 
            s: { n: "Portaestandarte", p: 6 }, 
            m: { n: "Músico", p: 6 } 
        }
    },
    "K'daai Nacidos del Fuego": {
        faction: "ecaos",
        foc: "Special",
        points: 57,
        min: 3,
        max: 6,
        equipo: "Arma de mano, Armadura pesada",
        reglasEspeciales: "Demonio, Ataques flamígeros, Immune a fuego, Piel Escamosa (5+), Cuerpo ardiente.",
        perfiles: [
            { nombre: "K'daai", stats: { M: 6, HA: 4, HP: 2, F: 5, R: 4, H: 3, I: 2, A: 3, L: 7 } },
            { nombre: "Oficial", stats: { M: 6, HA: 4, HP: 2, F: 5, R: 4, H: 3, I: 2, A: 4, L: 7 } }
        ],
        command: { 
            c: { n: "Oficial", p: 12 }
        }
    },

    // === RARE ===
    "Lanzacohetes": {
        faction: "ecaos",
        foc: "Rare",
        points: 90,
        min: 1,
        max: 1,
        equipo: "La dotación va equipada con arma de mano y armadura pesada.",
        reglasEspeciales: "Desprecio.",
        perfiles: [
            { nombre: "Lanzacohetes", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: "-", I: "-", A: "-", L: "-" } },
            { nombre: "Dotación (3)", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 1, L: 8 } }
        ],
        options: [
            { n: "Vínculo demoníaco", p: 20, costType: "flat" }
        ]
    },
    "Cañón de Magma": {
        faction: "ecaos",
        foc: "Rare",
        points: 125,
        min: 1,
        max: 1,
        equipo: "La dotación va equipada con arma de mano y armadura pesada.",
        reglasEspeciales: "Desprecio, Sobrecargar.",
        perfiles: [
            { nombre: "Cañón de Magma", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: "-", I: "-", A: "-", L: "-" } },
            { nombre: "Dotación (3)", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 1, L: 8 } }
        ],
        options: [
            { n: "Vínculo demoníaco", p: 15, costType: "flat" }
        ]
    },
    "Lanzavirotes Hobgoblin": {
        faction: "ecaos",
        foc: "Rare",
        warning: "Tan sólo puedes incluir Lanzavirotes si incluyes al menos una unidad de hobgoblins.",
        points: 35,
        min: 1,
        max: 2,
        equipo: "La dotación va equipada con arma de mano y armadura ligera.",
        reglasEspeciales: "Usa reglas de lanzavirotes del reglamento.",
        perfiles: [
            { nombre: "Lanzavirotes", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: "-", I: "-", A: "-", L: "-" } },
            { nombre: "Hobgoblins (2)", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 2, A: 1, L: 6 } }
        ]
    },
    "Cañón Estremecedor": {
        faction: "ecaos",
        foc: "Rare",
        points: 105,
        min: 1,
        max: 1,
        equipo: "Los artilleros están equipados con Arma de mano y Armadura pesada.",
        reglasEspeciales: "Desprecio.",
        perfiles: [
            { nombre: "Cañón Estremecedor", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: "-", I: "-", A: "-", L: "-" } },
            { nombre: "Artilleros (3)", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 1, L: 8 } }
        ],
        options: [
            { n: "Vínculo demoníaco", p: 20, costType: "flat" }
        ]
    },
    "Juramentados de Hierro": {
        faction: "ecaos",
        foc: "Rare",
        points: 16,
        min: 5,
        max: 20,
        equipo: "Arma embrujada, Armadura negra y Escudo",
        reglasEspeciales: "Avance imparable, Desprecio, Inmunes a la psicología, Tozudez.",
        perfiles: [
            { nombre: "Juramentado", stats: { M: 3, HA: 5, HP: 3, F: 4, R: 4, H: 1, I: 2, A: 1, L: 9 } },
            { nombre: "Oficial", stats: { M: 3, HA: 5, HP: 3, F: 4, R: 4, H: 1, I: 2, A: 2, L: 9 } }
        ],
        command: { 
            c: { n: "Oficial", p: 6 }, 
            s: { n: "Portaestandarte", p: 6, allowIcon: true }, 
            m: { n: "Músico", p: 6 } 
        },
        magicBanner: 50
    },
    "Destructor K'daai": {
        faction: "ecaos",
        foc: "Rare",
        points: 275,
        min: 1,
        max: 1,
        equipo: "Arma de mano, Armadura pesada",
        reglasEspeciales: "Demonio, Ataques flamígeros, Immune a fuego, Piel escamosa (5+), Furia asesina, Cuerpo ardiente.",
        perfiles: [
            { nombre: "Destructor K'daai", stats: { M: 8, HA: 5, HP: 2, F: 7, R: 6, H: 6, I: 2, A: 6, L: 8 } }
        ],
        options: [
            { n: "Aliento llameante", p: 20, costType: "flat" },
            { n: "Gran cornamenta", p: 15, costType: "flat" },
            { n: "Runas de Hashut", p: 15, costType: "flat" }
        ]
    },
    "Demonio de Hierro": {
        faction: "ecaos",
        foc: "Rare",
        points: 275,
        min: 1,
        max: 1,
        equipo: "Partecráneos y Vínculo demoníaco. Los artilleros están equipados con armas de mano.",
        reglasEspeciales: "Terror, Objetivo grande, Impactos por carga (1D6+2), Demolición.",
        perfiles: [
            { nombre: "Demonio de Hierro", stats: { M: 6, HA: "-", HP: "-", F: 5, R: 8, H: 6, I: "-", A: "-", L: "-" } },
            { nombre: "Artilleros (3)", stats: { M: "-", HA: 4, HP: 3, F: 3, R: "-", H: "-", I: 2, A: 1, L: 9 } }
        ],
        options: [
            { n: "Batería de cañones de presión", p: 25, costType: "flat" }
        ]
    },
    "Gigante de Asedio": {
        faction: "ecaos",
        foc: "Rare",
        points: 190,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura pesada.",
        reglasEspeciales: "Cruzar (obstáculos), Immune a la psicología, Protegido contra disparos, Caídas.",
        perfiles: [
            { nombre: "Gigante de asedio", stats: { M: 6, HA: 4, HP: 3, F: 6, R: 6, H: 6, I: 2, A: "*", L: 10 } }
        ]
    },
    "Mortero Estremecedor": {
        faction: "ecaos",
        foc: "Rare",
        points: 125,
        min: 1,
        max: 1,
        equipo: "La dotación va equipada con arma de mano y armadura pesada.",
        reglasEspeciales: "Desprecio, Recarga lenta, Terremoto.",
        perfiles: [
            { nombre: "Mortero", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: "-", I: "-", A: "-", L: "-" } },
            { nombre: "Artilleros (3)", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 1, L: 8 } },
            { nombre: "Ogro esclavo", stats: { M: 6, HA: 3, HP: 2, F: 4, R: 4, H: 3, I: 2, A: 3, L: 7 } }
        ],
        options: [
            { n: "Esclavo ogro", p: 25, costType: "flat" },
            { n: "Vínculo demoníaco", p: 20, costType: "flat" }
        ]
    },

    // === LORDS ===
    "Brujo-Sacerdote": {
        faction: "ecaos",
        foc: "Lord",
        points: 240,
        min: 1,
        max: 1,
        equipo: "Arma bruja forjada y Armadura negra.",
        reglasEspeciales: "Avance imparable, Desprecio, Immune a psicología, Ingeniero infernal, La Maldición del Brujo.",
        perfiles: [
            { nombre: "Brujo-Sacerdote", stats: { M: 3, HA: 5, HP: 4, F: 4, R: 5, H: 3, I: 2, A: 3, L: 10 } }
        ],
        options: [
            { n: "Pistola", p: 5, costType: "flat" },
            { n: "Ristra de pistolas", p: 10, costType: "flat" },
            { n: "Guja de fuego", p: 10, costType: "flat" },
            { n: "Trabuco", p: 4, costType: "flat" },
            { n: "Bombas de nafta", p: 15, costType: "flat" },
            { n: "Sangre de Hashut", p: 20, costType: "flat" },
            { n: "Nivel de magia 4", p: 35, costType: "flat" }
        ],
        mounts: ["Gran Tauro", "Lammasu"],
        maxMagicItems: 3,
        maxRelics: 1,
        maxSkills: { limit: 3, type: 'count' }
    },
    "Senescal Infernal": {
        faction: "ecaos",
        foc: "Lord",
        points: 130,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura negra.",
        reglasEspeciales: "Avance Imparable, Desprecio.",
        perfiles: [
            { nombre: "Senescal Infernal", stats: { M: 3, HA: 7, HP: 4, F: 4, R: 5, H: 3, I: 4, A: 4, L: 10 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 4, costType: "flat" },
            { n: "Arma embrujada", p: 15, costType: "flat" },
            { n: "Guja de fuego", p: 12, costType: "flat" },
            { n: "Pistola", p: 5, costType: "flat" },
            { n: "Ristra de pistolas", p: 10, costType: "flat" },
            { n: "Escudo", p: 3, costType: "flat" },
            { n: "Bombas de nafta", p: 15, costType: "flat" }
        ],
        mounts: ["Gran Tauro", "Toro del Dolor", "Lammasu"],
        maxMagicItems: 3,
        maxRelics: 1
    },
    "Centauro Hash'Ruk": {
        faction: "ecaos",
        foc: "Lord",
        warning: "0-1",
        points: 240,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura pesada.",
        reglasEspeciales: "Desprecio, Miedo, Piel escamosa (5+), Impactos por carga (1).",
        perfiles: [
            { nombre: "Centauro Hash'Ruk", stats: { M: 7, HA: 6, HP: 2, F: 5, R: 5, H: 5, I: 4, A: 5, L: 9 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 5, costType: "flat" },
            { n: "Lanza", p: 5, costType: "flat" },
            { n: "Arma a dos manos", p: 8, costType: "flat" },
            { n: "Escudo", p: 3, costType: "flat" },
            { n: "Armadura Negra", p: 12, costType: "flat" }
        ],
        maxMagicItems: 3,
        maxRelics: 1
    },

    // === HEROES ===
    "Herrero Demoníaco": {
        faction: "ecaos",
        foc: "Hero",
        points: 90,
        min: 1,
        max: 1,
        equipo: "Arma embrujada y Armadura negra.",
        reglasEspeciales: "Avance imparable, Desprecio, Immune a psicología, Ingeniero infernal, La Maldición del Brujo.",
        perfiles: [
            { nombre: "Herrero Demoníaco", stats: { M: 3, HA: 4, HP: 4, F: 4, R: 5, H: 2, I: 2, A: 2, L: 9 } }
        ],
        options: [
            { n: "Pistola", p: 4, costType: "flat" },
            { n: "Ristra de pistolas", p: 8, costType: "flat" },
            { n: "Guja de fuego", p: 8, costType: "flat" },
            { n: "Trabuco", p: 3, costType: "flat" },
            { n: "Bombas de nafta", p: 12, costType: "flat" },
            { n: "Sangre de Hashut", p: 15, costType: "flat" },
            { n: "Nivel de magia 2", p: 35, costType: "flat" }
        ],
        maxMagicItems: 3
    },
    "Castellano Infernal": {
        faction: "ecaos",
        foc: "Hero",
        points: 80,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura negra.",
        reglasEspeciales: "Avance Imparable, Desprecio.",
        perfiles: [
            { nombre: "Castellano Infernal", stats: { M: 3, HA: 6, HP: 4, F: 4, R: 5, H: 2, I: 3, A: 3, L: 9 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 2, costType: "flat" },
            { n: "Arma embrujada", p: 15, costType: "flat" },
            { n: "Guja de fuego", p: 10, costType: "flat" },
            { n: "Pistola", p: 4, costType: "flat" },
            { n: "Ristra de pistolas", p: 8, costType: "flat" },
            { n: "Escudo", p: 2, costType: "flat" },
            { n: "Bombas de nafta", p: 12, costType: "flat" }
        ],
        mounts: ["Gran Tauro"],
        maxMagicItems: 2
    },
    "Centauro Taur'Ruk": {
        faction: "ecaos",
        foc: "Hero",
        points: 165,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura pesada.",
        reglasEspeciales: "Desprecio, Miedo, Piel escamosa (5+), Impactos por carga (1).",
        perfiles: [
            { nombre: "Centauro Taur'Ruk", stats: { M: 7, HA: 5, HP: 2, F: 5, R: 5, H: 4, I: 3, A: 4, L: 8 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 3, costType: "flat" },
            { n: "Lanza", p: 3, costType: "flat" },
            { n: "Arma a dos manos", p: 5, costType: "flat" },
            { n: "Escudo", p: 2, costType: "flat" },
            { n: "Armadura Negra", p: 10, costType: "flat" }
        ],
        maxMagicItems: 2
    },
    "Khan Hobgoblin": {
        faction: "ecaos",
        foc: "Hero",
        points: 40,
        min: 1,
        max: 1,
        equipo: "Arma de mano, Cuchillos arrojadizos y Armadura ligera.",
        reglasEspeciales: "Animosidad hobgoblin.",
        perfiles: [
            { nombre: "Khan hobgoblin", stats: { M: 4, HA: 5, HP: 4, F: 4, R: 4, H: 2, I: 4, A: 3, L: 7 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 2, costType: "flat" },
            { n: "Lanza", p: 3, costType: "flat" },
            { n: "Arma a dos manos", p: 2, costType: "flat" },
            { n: "Arco", p: 3, costType: "flat" },
            { n: "Escudo", p: 2, costType: "flat" },
            { n: "Ataques envenenados", p: 6, costType: "flat" }
        ],
        mounts: ["Lobo gigante"],
        maxMagicItems: 1
    }
};

const mountsDB_ecaos = {
    "Lobo gigante": {
        faction: "ecaos",
        points: 10,
        perfiles: [
            { nombre: "Lobo gigante", stats: { M: 9, HA: 4, HP: 0, F: 4, R: 3, H: 1, I: 4, A: 1, L: 6 } }
        ],
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. Caballería rápida."
    },
    "Gran Tauro": {
        faction: "ecaos",
        points: 185,
        perfiles: [
            { nombre: "Gran Tauro", stats: { M: 6, HA: 5, HP: 0, F: 6, R: 5, H: 4, I: 3, A: 4, L: 6 } }
        ],
        reglasEspeciales: "Monstruo. Ataques flamígeros, Volar, Immune a fuego, Impactos por carga (1D3), Cuerpo abrasador."
    },
    "Toro del Dolor": {
        faction: "ecaos",
        points: 225,
        perfiles: [
            { nombre: "Toro del Dolor", stats: { M: 6, HA: 5, HP: 0, F: 6, R: 6, H: 5, I: 3, A: 5, L: 6 } }
        ],
        reglasEspeciales: "Monstruo. Ataques flamígeros, Volar, Immune a fuego, Impactos por carga (1D3), Arma de aliento (F4), Cuerpo abrasador."
    },
    "Lammasu": {
        faction: "ecaos",
        points: 175,
        perfiles: [
            { nombre: "Lammasu", stats: { M: 6, HA: 3, HP: 0, F: 5, R: 5, H: 4, I: 1, A: 3, L: 8 } }
        ],
        reglasEspeciales: "Monstruo. Volar, Resistencia a la magia (3), Miasma mágico, Hechicero nivel 1.",
        options: [
            { n: "Cola maza", p: 10, costType: "flat" },
            { n: "Exhalación sortilega", p: 20, costType: "flat" },
            { n: "Nivel de magia 2", p: 35, costType: "flat" }
        ]
    }
};

const armySkillsDB_ecaos = {
    "Ingeniero infernal": { 
        points: 0, 
        faction: "ecaos", 
        type: "Regla especial", 
        summary: "Máquina de guerra a 3\" puede repetir dado de artillería/dispersión una vez por turno." 
    },
    "La Maldición del Brujo": { 
        points: 0, 
        faction: "ecaos", 
        type: "Regla especial", 
        summary: "Piel escamosa (6+). Por disfunción mágica: chequeo de Resistencia o herida. Primera herida: +1R permanente." 
    }
};

const magicItemsDB_ecaos = {
    "Arma Mágica": {
        "Hacha rúnica del Caos de Grugni Corazón de Hierro": { points: 50, faction: "ecaos", relic: true, summary: "AM. +1HA, +1F, +1A, Heridas múltiples (2)." },
        "Hacha del Torturador": { points: 45, faction: "ecaos", relic: false, summary: "A2M. Sólo Desprecio. +2A." },
        "Martillo Negro de Hashut": { points: 35, faction: "ecaos", relic: false, summary: "AM. +2F, Ataques Flamígeros, Golpe Maestro." },
        "Oscura Maza de Muerte": { points: 30, faction: "ecaos", relic: false, summary: "Mangual. Golpe letal. Bajas por golpe letal: impacto F4 flamígero a enemigos en contacto." },
        "Calcinadora": { points: 25, faction: "ecaos", relic: false, summary: "Guja de Fuego. Heridas múltiples (1D3), Ataques mágicos." },
        "Sorbedora de Vida": { points: 20, faction: "ecaos", relic: false, summary: "AM. Poder de Penetración, Golpe Maestro. Recupera 1H por baja de Golpe Maestro." },
        "Látigo del Sonretimiento": { points: 15, faction: "ecaos", relic: false, summary: "AM. Enemigo en contacto: -1A. Chequeo de resistencia o HA e I reducidos a la mitad." },
        "Pico Ardiente": { points: 15, faction: "ecaos", relic: false, summary: "AM. +1F, Ataques Flamígeros." },
        "Puñales de la Malicia": { points: 10, faction: "ecaos", relic: false, summary: "Armas Emparejadas. Odio (todos), repite 1s al herir." }
    },
    "Armadura Mágica": {
        "Armadura de Bhazrak el Cruel": { points: 50, faction: "ecaos", relic: true, summary: "Armadura Negra. R10. No puede llevar Talismanes." },
        "La Máscara del Horno": { points: 40, faction: "ecaos", relic: false, summary: "+1TSA, Causar Miedo, TSE 5+." },
        "Coraza del Tauro": { points: 25, faction: "ecaos", relic: false, summary: "Armadura Negra. Enemigos: -1 herir (no mágicos)." },
        "Armadura de la Repesalia": { points: 20, faction: "ecaos", relic: false, summary: "Armadura Negra. Inmune a Veneno, Golpe Maestro, Golpe Letal, Golpe Letal Heroico." },
        "Pellejo Demoníaco": { points: 25, faction: "ecaos", relic: false, summary: "Armadura Pesada. Regeneración (5+)." },
        "Escudo Sagrado de Hashut": { points: 20, faction: "ecaos", relic: false, summary: "Escudo. Repite TSA fallidas, inmune a Poder de penetración." },
        "Gran Yelmo de Zharr-Naggrund": { points: 15, faction: "ecaos", relic: false, summary: "Yelmo (TSA 6+). +1L (max 10). No Cuidado Señor." }
    },
    "Talismán": {
        "Amuleto de Piedra Obsidiana": { points: 55, faction: "ecaos", relic: true, summary: "No afectado por hechizos. TSE 4+ vs Ataques Mágicos." },
        "Corona Ardiente": { points: 50, faction: "ecaos", relic: false, summary: "Aura Demoníaca (3+), Immune a Fuego, Ataques Flamígeros." },
        "Manto de Piedra": { points: 40, faction: "ecaos", relic: false, summary: "TSE 5+, +1R, I1." },
        "Rubí de la forja": { points: 30, faction: "ecaos", relic: false, summary: "TSE 5+. Ingeniero infernal: alcance 8\"." },
        "Gema de Zharr": { points: 25, faction: "ecaos", relic: false, summary: "Resistencia mágica (2), repite TSE con 1." },
        "Runa del Dolor": { points: 20, faction: "ecaos", relic: false, summary: "Enemigos en contacto: chequeo de liderazgo o herida automática." }
    },
    "Artefacto Arcano": {
        "Tomo del Fuego Infernal": { points: 30, faction: "ecaos", relic: true, summary: "Elige hechizos libremente." },
        "Cetro de Hashut": { points: 35, faction: "ecaos", relic: false, summary: "+1 hechizo, guarda 1D energía/dispersión." },
        "Familiar del Caos": { points: 30, faction: "ecaos", relic: false, summary: "Repite una tirada por turno." },
        "Corazón de Lammasu": { points: 25, faction: "ecaos", relic: false, summary: "1D6 por fase de magia: 1=herida, 2-3=+1D energía, 4-5=+1D3 energía, 6=+1D6 energía (único uso)." },
        "Cetro Incandescente": { points: 25, faction: "ecaos", relic: false, summary: "+1 lanzar hechizos de Fuego, Metal, Tzeentch o Hashut (18\")." },
        "Cáliz de Sangre y Oscuridad": { points: 20, faction: "ecaos", relic: false, summary: "Un uso. -1D3 dados de energía enemigo." }
    },
    "Objeto Hechizado": {
        "Cuerno de Tauro": { points: 40, faction: "ecaos", relic: false, summary: "Un uso. Desprecio a 12\": Odio (todo). Sin Desprecio a 24\": reagrupan automáticamente." },
        "Orbe del Marchitamiento": { points: 25, faction: "ecaos", relic: false, summary: "8\": sin Regeneración, +1 dificultad Saber de la Vida." },
        "Ojo de Hashut": { points: 30, faction: "ecaos", relic: false, summary: "Portahechizos(4). Daño directo 18\": plantilla pequeña F4 flamígero, pánico si baja." },
        "Guanteletes De Zharr": { points: 20, faction: "ecaos", relic: false, summary: "+1HA, +1F." },
        "Piedra de Hierro maldito": { points: 15, faction: "ecaos", relic: false, summary: "Un uso. Enemigo a 24\": disparos con Poder de penetración repiten impactar." },
        "Colgante de Gorgoth": { points: 10, faction: "ecaos", relic: false, summary: "+1F por herida perdida (max F10)." }
    },
    "Estandarte Mágico": {
        "Pabellón de Hashut": { points: 40, faction: "ecaos", relic: true, summary: "Resistencia Mágica (2), Ataques Flamígeros. Ni un paso atrás: radio 18\"." },
        "Icono del Gran Tauro": { points: 40, faction: "ecaos", relic: false, summary: "Sólo Centauros. Odio, +1 TSE piel escamosa." },
        "Estandarte del Gran Yermo": { points: 25, faction: "ecaos", relic: false, summary: "Enemigos: -1 impactar con disparos. Unidad: sin armas a distancia." },
        "Estandarte de la Forja Negra": { points: 25, faction: "ecaos", relic: false, summary: "Salvación demoníaca 6+, Cruzar." },
        "Estandarte del Magma": { points: 25, faction: "ecaos", relic: false, summary: "Sólo Desprecio. +1M, inmunidad al fuego." },
        "Pabellón de la Dominación": { points: 20, faction: "ecaos", relic: false, summary: "Sólo Desprecio. Duplica Potencia de Unidad." },
        "Estandarte de la Esclavitud": { points: 20, faction: "ecaos", relic: false, summary: "Hobgoblins a 12\": Inmunes a Pánico." }
    }
};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Enanos del Caos",
    FACTION_ID: "ecaos",
    FOC_CONFIG: { 
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_ecaos,
    mountsDB: mountsDB_ecaos,
    magicItemsDB: magicItemsDB_ecaos,
    armySkillsDB: {},
    specialProfilesDB: {},
};
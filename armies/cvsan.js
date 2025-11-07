// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: CONDES VAMPIROS DRAGÓN SANCRIENTO ---
// ===================================================================================
// Last Updated: 2025-10-04 - v4.1
import { commonMagicItemsDB } from '../comun.js';

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_cvsan = {
    // === CORE ===
    "Esqueletos": {
        faction: "cvsan",
        foc: "Core",
        points: 4,
        min: 10,
        max: 40,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "No muertos.",
        perfiles: [
            { nombre: "Esqueleto", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 2, A: 1, L: 5 } },
            { nombre: "Oficial esqueleto", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 2, A: 2, L: 5 } }
        ],
        options: [
            { n: "Lanza", p: 1 },
            { n: "Escudo", p: 1 },
            { n: "Sustituir armadura ligera por pesada", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 4 }, s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } },
        magicBanner: 25
    },
    "Caballería Esquelética": {
        faction: "cvsan",
        foc: "Core",
        points: 10,
        min: 5,
        max: 20,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "No muertos, Corceles insustanciales (son etéreos cuando están moviendo).",
        perfiles: [
            { nombre: "Esqueleto", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 2, A: 1, L: 5 } },
            { nombre: "Oficial esqueleto", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 2, A: 2, L: 5 } },
            { nombre: "Corcel esquelético", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 4 } }
        ],
        options: [
            { n: "Lanza", p: 1 },
            { n: "Lanza de caballería", p: 2 },
            { n: "Escudo", p: 1 },
            { n: "Sustituir armadura ligera por pesada", p: 2 },
            { n: "Barda para corceles", p: 2 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },
    "Zombis": {
        faction: "cvsan",
        foc: "Core",
        points: 3,
        min: 20,
        max: 50,
        equipo: "Arma de mano.",
        reglasEspeciales: "No muertos.",
        perfiles: [
            { nombre: "Zombi", stats: { M: 4, HA: 1, HP: 0, F: 3, R: 4, H: 1, I: 0, A: 1, L: 2 } }
        ],
        command: { s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } }
    },
    "Siervos Sangrientos": {
        faction: "cvsan",
        foc: "Core",
        warning: "0-2",
        points: 7,
        min: 10,
        max: 25,
        equipo: "Armadura pesada, escudo.",
        reglasEspeciales: "Furia asesina, ¡Están vivos!, Voluntad Perdida.",
        perfiles: [
            { nombre: "Siervo Sangriento", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 2, L: 8 } }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } }
    },
    "Batidores Esqueleto": {
        faction: "cvsan",
        foc: "Core",
        warning: "0-1 (0-2 en batallas de 3000+ puntos)",
        points: 13,
        min: 5,
        max: 15,
        equipo: "Arma de mano, Lanza y Armadura ligera.",
        reglasEspeciales: "No muertos, Caballería rápida, Jinetes experimentados.",
        perfiles: [
            { nombre: "Esqueleto", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 2, A: 1, L: 6 } },
            { nombre: "Oficial esqueleto", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 2, A: 2, L: 6 } },
            { nombre: "Corcel esquelético", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 4 } }
        ],
        options: [
            { n: "Sustituir Lanzas por Arcos", p: 2 },
            { n: "Escudo", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } }
    },
    "Bandadas de Murciélagos": {
        faction: "cvsan",
        foc: "Core",
        warning: "1 por cada unidad de esqueletos",
        points: 16,
        min: 2,
        max: 6,
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "¡Están vivos!, Miedo, Flotar.",
        perfiles: [
            { nombre: "Murciélagos", stats: { M: 3, HA: 0, HP: 2, F: 2, R: 4, H: 4, I: 4, A: 3, L: 3 } }
        ]
    },
    "Lobos Siniestros": {
        faction: "cvsan",
        foc: "Core",
        warning: "No más unidades Básicas con Jaurías de muerte que sin ella",
        points: 7,
        min: 5,
        max: 15,
        equipo: "Garras y dientes (Arma de mano).",
        reglasEspeciales: "No muertos, Caballería rápida.",
        perfiles: [
            { nombre: "Lobo siniestro", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 4 } },
            { nombre: "Gran lobo siniestro", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 2, L: 4 } }
        ],
        command: { c: { n: "Gran lobo siniestro", p: 5 } }
    },

    // === SPECIAL ===
    "Murciélagos Vampiro": {
        faction: "cvsan",
        foc: "Special",
        points: 25,
        min: 3,
        max: 6,
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "No muertos, Vampiros, Volar, Hostigadores.",
        perfiles: [
            { nombre: "Murciélago Vampiro", stats: { M: 1, HA: 3, HP: 0, F: 4, R: 4, H: 2, I: 4, A: 2, L: 6 } }
        ]
    },
    "Tumularios": {
        faction: "cvsan",
        foc: "Special",
        points: 12,
        min: 10,
        max: 30,
        equipo: "Arma de mano funeraria y Armadura pesada.",
        reglasEspeciales: "No muertos, Armas funerarias.",
        perfiles: [
            { nombre: "Tumulario", stats: { M: 4, HA: 3, HP: 3, F: 4, R: 4, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Oficial Tumulario", stats: { M: 4, HA: 3, HP: 3, F: 4, R: 4, H: 1, I: 3, A: 2, L: 6 } }
        ],
        options: [
            { n: "Alabarda funeraria", p: 3 },
            { n: "Arma a dos manos funeraria", p: 2 },
            { n: "Escudo", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50
    },
    "Caballería Tumularia": {
        faction: "cvsan",
        foc: "Special",
        points: 19,
        min: 5,
        max: 15,
        equipo: "Arma de mano funeraria y Armadura pesada.",
        reglasEspeciales: "No muertos, Corceles insustanciales, Armas funerarias.",
        perfiles: [
            { nombre: "Tumulario", stats: { M: 4, HA: 3, HP: 3, F: 4, R: 4, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Oficial Tumulario", stats: { M: 4, HA: 3, HP: 3, F: 4, R: 4, H: 1, I: 3, A: 2, L: 6 } },
            { nombre: "Corcel esquelético", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 4 } }
        ],
        options: [
            { n: "Lanza de caballería funeraria", p: 3 },
            { n: "Arma a dos manos funeraria", p: 3 },
            { n: "Escudo", p: 2 },
            { n: "Barda para corceles", p: 2 }
        ],
        command: { c: { n: "Oficial", p: 8 }, s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } },
        magicBanner: 50
    },
    "Templarios Rojos": {
        faction: "cvsan",
        foc: "Special",
        points: 14,
        min: 10,
        max: 25,
        equipo: "Arma de mano, Escudo y Armadura Pesada.",
        reglasEspeciales: "No muertos, Vampiros.",
        perfiles: [
            { nombre: "Templario", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 1, I: 4, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 1, I: 4, A: 2, L: 8 } }
        ],
        options: [
            { n: "Mangual", p: 1 },
            { n: "Arma a dos Manos", p: 2 }
        ],
        command: { c: { n: "Oficial", p: 3 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25,
        champItems: 25
    },

    // === RARE ===
    "Guardia Sangrienta": {
        faction: "cvsan",
        foc: "Rare",
        warning: "0-1",
        points: 21,
        min: 5,
        max: 20,
        equipo: "Arma de mano, Escudo y Armadura pesada.",
        reglasEspeciales: "No muertos, Vampiros, Estilos de combate, Orgullo marcial.",
        perfiles: [
            { nombre: "Guardián Sangriento", stats: { M: 5, HA: 6, HP: 3, F: 5, R: 4, H: 1, I: 5, A: 2, L: 8 } },
            { nombre: "Senescal Sangriento", stats: { M: 5, HA: 6, HP: 3, F: 5, R: 4, H: 1, I: 5, A: 3, L: 8 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 2 },
            { n: "Sustituir Armadura pesada por Armadura de placas", p: 3 }
        ],
        command: { c: { n: "Oficial", p: 8 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50,
        champItems: 25
    },
    "Caballeros del Dragón Sangriento": {
        faction: "cvsan",
        foc: "Rare",
        points: 50,
        min: 5,
        max: 10,
        equipo: "Arma de mano, Lanza de Caballería, Armadura pesada y Escudo.",
        reglasEspeciales: "No muertos, Vampiros, Furia asesina, Orgullo marcial.",
        perfiles: [
            { nombre: "Caballero Sangriento", stats: { M: 4, HA: 6, HP: 3, F: 5, R: 4, H: 2, I: 5, A: 2, L: 7 } },
            { nombre: "Senescal Sangriento", stats: { M: 4, HA: 6, HP: 3, F: 5, R: 4, H: 2, I: 5, A: 3, L: 8 } },
            { nombre: "Pesadilla", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 3, A: 1, L: 6 } }
        ],
        options: [
            { n: "Cambiar lanzas por Mayales", p: 0 },
            { n: "Cambiar lanzas por Armas a dos manos", p: 0 }
        ],
        command: { c: { n: "Oficial", p: 10 }, s: { n: "Portaestandarte", p: 10 }, m: { n: "Músico", p: 10 } },
        magicBanner: 50,
        champItems: 25
    },
    "Engendro del Terror": {
        faction: "cvsan",
        foc: "Rare",
        points: 230,
        min: 1,
        max: 1,
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "No muerto, Volar, Regeneración (5+), Chillido mortal.",
        perfiles: [
            { nombre: "Engendro del Terror", stats: { M: 6, HA: 3, HP: 0, F: 5, R: 6, H: 6, I: 3, A: 4, L: 4 } }
        ],
        options: [
            { n: "Infestado", p: 15, costType: "flat", summary: "Al morir: 3D6 impactos F2 a unidades en contacto" },
            { n: "Mandíbulas rancias", p: 10, costType: "flat", summary: "Ataques envenenados" }
        ]
    },
    "Carruaje Negro": {
        faction: "cvsan",
        foc: "Rare",
        points: 165,
        min: 1,
        max: 1,
        equipo: "Conductor espectral: Arma a dos manos.",
        reglasEspeciales: "No muerto, Terror, Vampiro, Ataques mágicos, Protección impía (TSA 4+), Drenar almas.",
        perfiles: [
            { nombre: "Carruaje Negro", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 5, H: 5, I: "-", A: "-", L: "-" } },
            { nombre: "Conductor espectral", stats: { M: "-", HA: 3, HP: 0, F: 3, R: "-", H: "-", I: 3, A: 3, L: 7 } },
            { nombre: "Corceles esqueléticos (2)", stats: { M: 8, HA: 2, HP: 0, F: 4, R: "-", H: "-", I: 1, A: 1, L: 4 } }
        ]
    },

    // === LORDS ===
    "Señor de Vampiros Dragón Sangriento": {
        faction: "cvsan",
        foc: "Lord",
        points: 195,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura pesada.",
        reglasEspeciales: "No muerto, Vampiro, Orgullo marcial, Puede lanzar hechizos pese a llevar armadura.",
        perfiles: [
            { nombre: "Señor de Vampiros Dragón Sangriento", stats: { M: 6, HA: 8, HP: 5, F: 5, R: 5, H: 3, I: 7, A: 5, L: 9 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 6 },
            { n: "Alabarda", p: 6 },
            { n: "Mayal", p: 4 },
            { n: "Arma a dos manos", p: 8 },
            { n: "Lanza de caballería (sólo montado)", p: 8 },
            { n: "Escudo", p: 3 },
            { n: "Armadura de placas", p: 12, summary: "TSA 4+" },
            { n: "Nivel de Magia 2", p: 35 }
        ],
        mounts: ["Pesadilla con barda", "Dragón Zombi", "Pesadilla Alada"],
        maxMagicItems: 3,
        maxRelics: 1,
        maxSkills: { limit: 2, type: 'count' }
    },
    "Maestro Nigromante": {
        faction: "cvsan",
        foc: "Lord",
        points: 170,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Miedo, ¡Están vivos!",
        perfiles: [
            { nombre: "Maestro nigromante", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 3, I: 4, A: 3, L: 8 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 3 },
            { n: "Arma de mano adicional", p: 3 },
            { n: "Nivel de Magia 4", p: 35 }
        ],
        mounts: ["Corcel esquelético con barda", "Pesadilla Alada"],
        maxMagicItems: 3,
        maxRelics: 1,
        maxSkills: { limit: 2, type: 'count' }
    },

    // === HEROES ===
    "Conde Vampiro Dragón Sangriento": {
        faction: "cvsan",
        foc: "Hero",
        points: 95,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura pesada.",
        reglasEspeciales: "No muerto, Vampiro, Orgullo marcial, Puede lanzar hechizos pese a llevar armadura.",
        perfiles: [
            { nombre: "Conde Vampiro Dragón Sangriento", stats: { M: 6, HA: 7, HP: 4, F: 5, R: 4, H: 2, I: 6, A: 4, L: 8 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 4 },
            { n: "Alabarda", p: 4 },
            { n: "Mayal", p: 3 },
            { n: "Arma a dos manos", p: 4 },
            { n: "Lanza de caballería (sólo montado)", p: 4 },
            { n: "Escudo", p: 2 },
            { n: "Armadura de placas", p: 10, summary: "TSA 4+" }
        ],
        mounts: ["Pesadilla con barda"],
        maxMagicItems: 2,
        maxSkills: { limit: 1, type: 'count' },
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 }
    },
    "Señor Tumulario": {
        faction: "cvsan",
        foc: "Hero",
        points: 80,
        min: 1,
        max: 1,
        equipo: "Arma de mano funeraria y Armadura pesada.",
        reglasEspeciales: "No muerto, Armas funerarias",
        perfiles: [
            { nombre: "Señor Tumulario", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 5, H: 3, I: 4, A: 3, L: 7 } }
        ],
        options: [
            { n: "Arma a dos manos funeraria", p: 3 },
            { n: "Alabarda funeraria", p: 3 },
            { n: "Arma de mano funeraria adicional", p: 2 },
            { n: "Mayal funerario", p: 2 },
            { n: "Lanza de caballería funeraria (sólo montado)", p: 4 },
            { n: "Escudo", p: 2 }
        ],
        mounts: ["Corcel esquelético con barda", "Carruaje de Huesos"],
        maxMagicItems: 2,
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 }
    },
    "Nigromante": {
        faction: "cvsan",
        foc: "Hero",
        points: 60,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Miedo, ¡Está vivo!",
        perfiles: [
            { nombre: "Nigromante", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 1, L: 7 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 2 },
            { n: "Arma de mano adicional", p: 2 },
            { n: "Nivel de Magia 2", p: 35 },
            { n: "Convertir en no muerto", p: 15 }
        ],
        mounts: ["Corcel esquelético con barda", "Carruaje de Huesos", "Carro de Cadáveres"],
        maxMagicItems: 2,
        maxSkills: { limit: 1, type: 'count' }
    }
};

const mountsDB_cvsan = {
    "Corcel esquelético": { 
        faction: "cvsan", 
        points: 12, 
        perfiles: [ { nombre: "Corcel esquelético", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 4 } } ], 
        reglasEspeciales: "Bestia. Cambia tipo a Caballería. No muerto, Corceles insustanciales." 
    },
    "Corcel esquelético con barda": { 
        faction: "cvsan", 
        points: 15, 
        perfiles: [ { nombre: "Corcel esquelético con barda", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 4 } } ], 
        reglasEspeciales: "Bestia. Cambia tipo a Caballería. No muerto, Corceles insustanciales, Barda." 
    },
    "Pesadilla con barda": { 
        faction: "cvsan", 
        points: 15, 
        perfiles: [ { nombre: "Pesadilla con barda", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 3, A: 1, L: 6 } } ], 
        reglasEspeciales: "Bestia. Cambia tipo a Caballería. No muerto, Vampiro." 
    },
    "Pesadilla Alada": { 
        faction: "cvsan", 
        points: 150, 
        perfiles: [ { nombre: "Pesadilla Alada", stats: { M: 6, HA: 3, HP: 0, F: 5, R: 5, H: 4, I: 2, A: 4, L: 5 } } ], 
        reglasEspeciales: "Monstruo. No muerto, Volar, Terror, Regeneración (4+)." 
    },
    "Dragón Zombi": { 
        faction: "cvsan", 
        points: 255, 
        perfiles: [ { nombre: "Dragón Zombi", stats: { M: 6, HA: 4, HP: 0, F: 6, R: 6, H: 6, I: 1, A: 5, L: 6 } } ], 
        reglasEspeciales: "Monstruo. No muerto, Volar, Piel escamosa (4+), Nube de moscas, Arma de aliento." 
    },
    "Carruaje de Huesos": { 
        faction: "cvsan", 
        points: 55, 
        perfiles: [
            { nombre: "Carruaje de Huesos", stats: { M: "-", HA: "-", HP: "-", F: "-", R: "-", H: 4, I: "-", A: "-", L: "-" } },
            { nombre: "Esqueleto (2)", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 2, A: 1, L: 5 } },
            { nombre: "Corcel esquelético (2)", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 4 } }
        ],
        reglasEspeciales: "Carro. No muertos, TSA 5+." 
    },
    "Carro de Cadáveres": { 
        faction: "cvsan", 
        points: 130, 
        perfiles: [
            { nombre: "Carro de cadáveres", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 4, H: 4, I: "-", A: "-", L: "-" } },
            { nombre: "Horda de zombis", stats: { M: 4, HA: 1, HP: 0, F: 3, R: "-", H: "-", I: 0, A: "2D6", L: 2 } }
        ],
        reglasEspeciales: "Carro. No muerto, Terror, TSA 5+, Regeneración (4+), Miasma de descomposición, Foco de poder nigromántico." 
    }
};

const armySkillsDB_cvsan = {
    "Avatar de la muerte": { points: 0, faction: "cvsan", type: "Poder Vampírico", summary: "+1 impactar en desafíos." },
    "Honor o muerte": { points: 5, faction: "cvsan", type: "Poder Vampírico", summary: "Carga devastadora." },
    "Caballero siniestro": { points: 10, faction: "cvsan", type: "Poder Vampírico", summary: "No penalización por barda." },
    "La pureza del acero": { points: 15, faction: "cvsan", type: "Poder Vampírico", summary: "Resistencia mágica (1)." },
    "Hechicero consumado": { points: 15, faction: "cvsan", type: "Poder Vampírico", summary: "+1 lanzar hechizos." },
    "Espadachín consumado": { points: 15, faction: "cvsan", type: "Poder Vampírico", summary: "Enemigo en contacto pierde 1 ataque." },
    "Golpe maestro": { points: 20, faction: "cvsan", type: "Poder Vampírico", summary: "Golpe Maestro." },
    "Odio sin límites": { points: 25, faction: "cvsan", type: "Poder Vampírico", summary: "Odio (todos)." },
    "Matadragones": { points: 30, faction: "cvsan", type: "Poder Vampírico", summary: "Golpe letal heroico vs dragones y monstruos voladores." },
    "Estudios nigrománticos": { points: 30, faction: "cvsan", type: "Poder Vampírico", summary: "+1 nivel magia (o nivel 1 si no tenía)." },
    "Furia de sangre": { points: 40, faction: "cvsan", type: "Poder Vampírico", summary: "Ataque extra por herida en desafío." },
    "Fuerza demoledora": { points: 50, faction: "cvsan", type: "Poder Vampírico", summary: "Sólo Señor. Heridas múltiples (1D3)." },
    "Romper la defensa": { points: 50, faction: "cvsan", type: "Poder Vampírico", summary: "Sólo Señor. +1 impactar cuerpo a cuerpo." },
    "Magia bélica": { points: 35, faction: "cvsan", type: "Poder Vampírico", summary: "Sólo Señor. Conoce Danza macabra, efectos mejorados." }
};

const magicItemsDB_cvsan = {
    "Arma Mágica": {
        "Khopesh de Aborash": { points: 55, faction: "cvsan", relic: true, summary: "Reliquia. Sólo Dragón Sangriento. AM. Golpe letal heroico." },
        "Drenadora de sangre": { points: 50, faction: "cvsan", relic: false, summary: "AM. Recupera heridas por heridas causadas." },
        "Espada del Honor": { points: 40, faction: "cvsan", relic: false, summary: "Sólo Vampiros. AM. +1F, repetir impactos/herir fallidos en desafío." },
        "Espadón de energía maldita": { points: 30, faction: "cvsan", relic: false, summary: "A2M. +1D energía por herida a no NoMuerto/Demonio." },
        "Lanza siniestra": { points: 35, faction: "cvsan", relic: false, summary: "Lanza caballería. Impacta automático al cargar." },
        "Colmillo de Dragón": { points: 25, faction: "cvsan", relic: false, summary: "Alabarda. Ataques flamígeros, ataque de aliento F3." },
        "Doble Dragón": { points: 30, faction: "cvsan", relic: false, summary: "Armas emparejadas. +1F, parada." },
        "Gran Mayal de Guerra Encantado": { points: 25, faction: "cvsan", relic: false, summary: "Mayal. +3F primer turno, +1F siguientes." },
        "Espada de la maldición eterna": { points: 15, faction: "cvsan", relic: false, summary: "AM. Restaura 1D invocación por baja." }
    },
    "Armadura Mágica": {
        "Yelmo de la Furia Inmortal": { points: 50, faction: "cvsan", relic: true, summary: "Reliquia. Sólo Vampiros. +1TSA, Furia asesina permanente." },
        "Armadura maldita": { points: 50, faction: "cvsan", relic: false, summary: "Sólo Dragón Sangriento. AP. -1F/HA enemigos, +1TSA por herida causada." },
        "Armadura de hierro negro": { points: 45, faction: "cvsan", relic: false, summary: "AP. TSA 1+, repetir TSA fallidas." },
        "Escudo de las Tormentas": { points: 40, faction: "cvsan", relic: false, summary: "Escudo. Enemigos que fallen herir reciben impacto." },
        "Cota ensangrentada": { points: 35, faction: "cvsan", relic: false, summary: "Sólo Dragón Sangriento. AP. TSE 5+ (4+ vs no mágicos)." },
        "Armadura de la noche": { points: 25, faction: "cvsan", relic: false, summary: "AP. -2 impactar con disparos." },
        "Coraza cadavérica": { points: 15, faction: "cvsan", relic: false, summary: "AP. Inmune golpe letal." }
    },
    "Talismán": {
        "Gema de las Brumas": { points: 50, faction: "cvsan", relic: true, summary: "Reliquia. TSE 5+ vs proyectiles." },
        "Amuleto del Dragón Sangriento": { points: 50, faction: "cvsan", relic: true, summary: "Reliquia. Regeneración 5+, unidad/montura gana Vampiro." },
        "Anillo de la sangre": { points: 35, faction: "cvsan", relic: false, summary: "Repetir impactos fallidos cuerpo a cuerpo." },
        "Collar de Obsidiana": { points: 30, faction: "cvsan", relic: false, summary: "Resistencia mágica (3)." },
        "Brazales de oro negro": { points: 30, faction: "cvsan", relic: false, summary: "TSE 3+ vs proyectiles." },
        "Corona de los Condenados": { points: 15, faction: "cvsan", relic: false, summary: "TSE 5+, Estupidez." }
    },
    "Artefacto Arcano": {
        "Familiar necrótico": { points: 35, faction: "cvsan", relic: false, summary: "+1D invocación para Invocación Nehek/Animar Muertos." },
        "Báculo Óseo": { points: 25, faction: "cvsan", relic: false, summary: "Revela objetos mágicos enemigos 12\", repetir disfunciones." },
        "Talismán negro": { points: 15, faction: "cvsan", relic: false, summary: "Guardar 1D energía/disp para siguiente fase." }
    },
    "Objeto Hechizado": {
        "Vial de Sangre de Abhorash": { points: 50, faction: "cvsan", relic: true, summary: "Reliquia. Portador y unidad: Indesmoralizables." },
        "Yelmo de la percepción": { points: 50, faction: "cvsan", relic: true, summary: "Reliquia. Unidad no muertos 12\" usa HA portador." },
        "Colgante de Sangre": { points: 35, faction: "cvsan", relic: false, summary: "+1 recuperar heridas Vampiro, +1 resultado combate si recupera." },
        "El Libro Maldito": { points: 30, faction: "cvsan", relic: false, summary: "Enemigos contacto: -1 impactar. No afecta NoMuertos/Demonios." },
        "Crucifijo de Huesos": { points: 30, faction: "cvsan", relic: false, summary: "Sólo vampiros. Portahechizos(2). Invocación Nehek." },
        "Relicario de Vashanesh": { points: 25, faction: "cvsan", relic: false, summary: "Portahechizos(5). Potenciación: repetir herir 1." },
        "Icono del Visir": { points: 20, faction: "cvsan", relic: false, summary: "-1 baja al perder combate." },
        "Icono del Vigor Mortis": { points: 15, faction: "cvsan", relic: false, summary: "+6\" Presencia Inspiradora y marcha del General." }
    },
    "Estandarte Mágico": {
        "Icono de Aborash": { points: 60, faction: "cvsan", relic: true, summary: "Reliquia. -1F enemigos vs portador/unidad, RM(1) aliados 6\"." },
        "Bandera de la Torre sangrienta": { points: 50, faction: "cvsan", relic: true, summary: "Reliquia. Sólo Dragón Sangriento. TSE 4+ vs proyectiles." },
        "Bandera sangrienta": { points: 50, faction: "cvsan", relic: false, summary: "Sólo Tumularios. Golpe letal 5+." },
        "Estandarte de los túmulos": { points: 45, faction: "cvsan", relic: false, summary: "Sólo tumularios. +1 impactar cuerpo a cuerpo." },
        "Estandarte del Dragon rojo": { points: 35, faction: "cvsan", relic: false, summary: "Terror, +1TSA." },
        "Estandarte de los lamentos": { points: 25, faction: "cvsan", relic: false, summary: "Chequeos Miedo: 3D6 descarta bajo." },
        "Pabellón de los condenados": { points: 25, faction: "cvsan", relic: false, summary: "Sólo caballería esquelética. Impacta automático al cargar." },
        "Estandarte del Vigor Mortis": { points: 25, faction: "cvsan", relic: false, summary: "+1HA unidad." },
        "Estandarte de los huesos": { points: 25, faction: "cvsan", relic: false, summary: "Sólo esqueletos/cab. esquelética. Odio." },
        "Estandarte de las pesadillas eternas": { points: 20, faction: "cvsan", relic: false, summary: "+4 por filas en resultado combate." }
    }
};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Condes Vampiros Dragón Sangriento",
    FACTION_ID: "cvsan",
    FOC_CONFIG: { 
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_cvsan,
    mountsDB: mountsDB_cvsan,
    magicItemsDB: magicItemsDB_cvsan,
    armySkillsDB: armySkillsDB_cvsan,
    specialProfilesDB: {},
    armySkillsLabel: "Poderes Vampíricos",
};
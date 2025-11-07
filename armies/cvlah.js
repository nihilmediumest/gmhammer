// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: CONDES VAMPIROS LAHMIA ---
// ===================================================================================
// Last Updated: 2025-10-25 - v4.1
import { commonMagicItemsDB } from '../comun.js';

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_cvlah = {
    // === CORE ===
    "Esqueletos": {
        faction: "cvlah",
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
            { n: "Tiradores esqueleto", p: 2, summary: "Arcos y +1HP, Hasta la mitad de las unidades" }
        ],
        command: { c: { n: "Oficial", p: 4 }, s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } },
        magicBanner: 25
    },
    "Zombis": {
        faction: "cvlah",
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
    "Bandadas de Murciélagos": {
        faction: "cvlah",
        foc: "Core",
        warning: "Sólo puedes incluir una bandada de murciélagos por cada unidad de esqueletos o zombis de tu ejército.",
        points: 16,
        min: 2,
        max: 6,
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "¡Están vivos!, Miedo, Flotar",
        perfiles: [
            { nombre: "Peana de murciélagos", stats: { M: 1, HA: 3, HP: 0, F: 2, R: 2, H: 4, I: 4, A: 4, L: 3 } }
        ]
    },
    "Lobos Siniestros": {
        faction: "cvlah",
        foc: "Core",
        points: 7,
        min: 5,
        max: 15,
        equipo: "Garras y dientes (Arma de mano).",
        reglasEspeciales: "No muertos, Caballería rápida",
        perfiles: [
            { nombre: "Lobo siniestro", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 4 } },
            { nombre: "Gran lobo siniestro", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 2, L: 4 } }
        ],
        command: { c: { n: "Gran lobo siniestro", p: 5 } }
    },

    // === SPECIAL ===
    "Siervos de la Condesa": {
        faction: "cvlah",
        foc: "Special",
        points: 5,
        min: 10,
        max: 30,
        equipo: "Dos armas de mano.",
        reglasEspeciales: "¡Están vivos!, Inmunes a pánico, Voluntad Perdida",
        perfiles: [
            { nombre: "Stereo", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 } }
        ],
        options: [
            { n: "Convertir en Hostigadores", p: 1 },
            { n: "Cuchillos arrojadizos", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 4 }, s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } }
    },
    "Guardia de la Condesa": {
        faction: "cvlah",
        foc: "Special",
        warning: "0-1",
        points: 10,
        min: 10,
        max: 30,
        equipo: "Arma a dos manos y Armadura de placas.",
        reglasEspeciales: "Tozudos, ¡Están vivos!, Voluntad Perdida",
        perfiles: [
            { nombre: "Guardián", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 8 } }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } }
    },
    "Caballeria Condal": {
        faction: "cvlah",
        foc: "Special",
        points: 18,
        min: 5,
        max: 12,
        equipo: "Arma de mano, Ristra de pistolas, Armadura ligera",
        reglasEspeciales: "Caballería rápida, ¡Están vivos!, Voluntad Perdida",
        perfiles: [
            { nombre: "Jinete", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 4, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Coreel", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } }
        ],
        options: [
            { n: "Sustituir ristra de pistolas por lanza, arco y escudo", p: 0 }
        ],
        command: { c: { n: "Oficial", p: 6 }, m: { n: "Músico", p: 6 } }
    },
    "Tumularios": {
        faction: "cvlah",
        foc: "Special",
        points: 12,
        min: 10,
        max: 30,
        equipo: "Arma de mano funeraria y Armadura pesada.",
        reglasEspeciales: "No muertos, Armas funerarias",
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
    "Hueste Espectral": {
        faction: "cvlah",
        foc: "Special",
        points: 40,
        min: 1,
        max: 6,
        equipo: "Arma de mano.",
        reglasEspeciales: "No muertos, Etéreos, Ataques mágicos, Legión espectral",
        perfiles: [
            { nombre: "Hueste espectral", stats: { M: 6, HA: 2, HP: 0, F: 3, R: 3, H: 4, I: 2, A: 4, L: 5 } }
        ]
    },
    "Caballería Tumularia": {
        faction: "cvlah",
        foc: "Special",
        points: 19,
        min: 5,
        max: 20,
        equipo: "Arma de mano funeraria y Armadura pesada.",
        reglasEspeciales: "No muertos, Corceles insustanciales, Armas funerarias",
        perfiles: [
            { nombre: "Tumulario", stats: { M: 4, HA: 3, HP: 3, F: 4, R: 4, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Oficial Tumulario", stats: { M: 4, HA: 3, HP: 3, F: 4, R: 4, H: 1, I: 3, A: 2, L: 6 } },
            { nombre: "Corcel esquelético", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 4 } }
        ],
        options: [
            { n: "Lanza de caballería funeraria", p: 3 },
            { n: "Arma a dos manos funeraria", p: 3 },
            { n: "Escudo", p: 2 },
            { n: "Barda para corceles", p: 3 }
        ],
        command: { c: { n: "Oficial", p: 8 }, s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } },
        magicBanner: 50
    },
    "Murciélagos Vampiro": {
        faction: "cvlah",
        foc: "Special",
        points: 25,
        min: 3,
        max: 6,
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "No muertos, Vampiros, Volar, Hostigadores",
        perfiles: [
            { nombre: "Murciélagos vampiro", stats: { M: 1, HA: 3, HP: 0, F: 4, R: 4, H: 2, I: 4, A: 2, L: 6 } }
        ]
    },
    "Doncellas Lahmia": {
        faction: "cvlah",
        foc: "Special",
        points: 25,
        min: 5,
        max: 10,
        equipo: "Dos Armas de mano y Arcos Lahmianos",
        reglasEspeciales: "No muertos, Vampiros, Hostigadores, Esquivar (5+), Aura de fascinación",
        perfiles: [
            { nombre: "Doncella Lahmia", stats: { M: 6, HA: 4, HP: 4, F: 4, R: 4, H: 1, I: 6, A: 2, L: 7 } },
            { nombre: "Matriarca Lahmia", stats: { M: 6, HA: 4, HP: 5, F: 4, R: 4, H: 1, I: 6, A: 3, L: 7 } }
        ],
        command: { c: { n: "Matriarca", p: 10 }, m: { n: "Músico", p: 8 } },
        champItems: 25
    },
    "Vargheist": {
        faction: "cvlah",
        foc: "Special",
        points: 60,
        min: 2,
        max: 5,
        equipo: "Garras Afiladas (Arma de mano con poder de penetración).",
        reglasEspeciales: "No muertos, Vampiros, Volar, Furia asesina, Hostigadores",
        perfiles: [
            { nombre: "Vargheist", stats: { M: 6, HA: 4, HP: 0, F: 5, R: 4, H: 3, I: 4, A: 3, L: 7 } },
            { nombre: "Oficial", stats: { M: 6, HA: 4, HP: 0, F: 5, R: 4, H: 3, I: 4, A: 4, L: 7 } }
        ],
        command: { c: { n: "Oficial", p: 12 } }
    },

    // === RARE ===
    "Espíritus": {
        faction: "cvlah",
        foc: "Rare",
        points: 24,
        min: 3,
        max: 10,
        equipo: "Arma a dos manos.",
        reglasEspeciales: "No muertos, Etéreos, Hostigadores, Ataques mágicos, Terror, Fantasmas",
        perfiles: [
            { nombre: "Espíritu", stats: { M: 6, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 2, L: 6 } },
            { nombre: "Doncella espectral", stats: { M: 6, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 3, L: 7 } }
        ],
        command: { c: { n: "Doncella espectral", p: 15 } }
    },
    "Varghulf": {
        faction: "cvlah",
        foc: "Rare",
        points: 175,
        min: 1,
        max: 1,
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "No muerto, Vampiro, Volar, Regeneración (4+), Odio (todos los enemigos)",
        perfiles: [
            { nombre: "Varghulf", stats: { M: 8, HA: 5, HP: 0, F: 5, R: 5, H: 5, I: 4, A: 5, L: 7 } }
        ]
    },
    "Carruaje Negro": {
        faction: "cvlah",
        foc: "Rare",
        points: 165,
        min: 1,
        max: 1,
        equipo: "El Conductor espectral va equipado con un Arma a dos manos.",
        reglasEspeciales: "TSA 3+, Potencia 5, No muerto, Terror, Vampiro, Ataques mágicos, Protección impía, Drenar almas",
        perfiles: [
            { nombre: "Caruaje Negro", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 5, H: 5, I: "-", A: "-", L: "-" } },
            { nombre: "Conductor espectral", stats: { M: "-", HA: 3, HP: 0, F: 3, R: "-", H: "-", I: 3, A: 3, L: 7 } },
            { nombre: "Corceles esqueléticos", stats: { M: 8, HA: 2, HP: 0, F: 4, R: "-", H: "-", I: 1, A: 1, L: 4 } },
            { nombre: "Vampiro resucitado", stats: { M: 6, HA: 5, HP: 3, F: 6, R: 5, H: 3, I: 7, A: 4, L: 8 } }
        ]
    },
    "Carro de Cadáveres": {
        faction: "cvlah",
        foc: "Rare",
        points: 140,
        min: 1,
        max: 1,
        equipo: "El aprendiz de nigromante va equipado con un arma de mano.",
        reglasEspeciales: "No muerto, TSA 5+, Terror, Horda de zombis, Aprendiz de nigromante, Vigor impío, Miasma de descomposición, Foco de poder nigromántico",
        perfiles: [
            { nombre: "Aprendiz de nigromante", stats: { M: "-", HA: 3, HP: 3, F: 3, R: "-", H: "-", I: 3, A: 1, L: 7 } },
            { nombre: "Carro de cadáveres", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 4, H: 4, I: "-", A: "-", L: "-" } },
            { nombre: "Horda de zombis", stats: { M: 4, HA: 1, HP: 0, F: 3, R: "-", H: "-", I: 0, A: "2D6", L: 2 } }
        ],
        options: [
            { n: "Arma de mano adicional para aprendiz", p: 1 },
            { n: "Lanza para aprendiz", p: 1 },
            { n: "Fuego infernal", p: 15, costType: "flat" },
            { n: "Piedra impía", p: 15, costType: "flat" }
        ]
    },

    // === LORDS ===
    "Señora de Vampiros Lahmia": {
        faction: "cvlah",
        foc: "Lord",
        points: 200,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Arco Lahmiano.",
        reglasEspeciales: "No muerto, Vampiro",
        perfiles: [
            { nombre: "Señora de Vampiros Lahmia", stats: { M: 6, HA: 6, HP: 7, F: 5, R: 5, H: 3, I: 8, A: 4, L: 9 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 4 },
            { n: "Nivel de Magia 3", p: 35 }
        ],
        mounts: ["Pesadilla con barda", "Dragón Zombi", "Pesadilla Alada", "Trono del Aquelarre"],
        maxMagicItems: 3,
        maxRelics: 1,
        maxSkills: { limit: 2, type: 'count' }
    },
    "Maestro Nigromante": {
        faction: "cvlah",
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
    "Condesa Vampira Lahmia": {
        faction: "cvlah",
        foc: "Hero",
        points: 105,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Arco Lahmiano.",
        reglasEspeciales: "No muerto, Vampiro",
        perfiles: [
            { nombre: "Condesa Vampira Lahmia", stats: { M: 6, HA: 5, HP: 6, F: 5, R: 4, H: 2, I: 7, A: 3, L: 8 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 3 }
        ],
        mounts: ["Pesadilla con barda"],
        maxMagicItems: 2,
        maxSkills: { limit: 1, type: 'count' }
    },
    "Señor Tumulario": {
        faction: "cvlah",
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
            { n: "Lanza de caballería funeraria", p: 4 },
            { n: "Escudo", p: 2 }
        ],
        mounts: ["Corcel esquelético con barda"],
        maxMagicItems: 2,
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 }
    },
    "Nigromante": {
        faction: "cvlah",
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
            { n: "Nivel de Magia 2", p: 35 }
        ],
        mounts: ["Corcel esquelético con barda"],
        maxMagicItems: 2
    }
};

const mountsDB_cvlah = {
    "Corcel esquelético con barda": { 
        faction: "cvlah", 
        points: 15, 
        perfiles: [ { nombre: "Corcel esquelético con barda", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 4 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. No muerto." 
    },
    "Pesadilla con barda": { 
        faction: "cvlah", 
        points: 15, 
        perfiles: [ { nombre: "Pesadilla con barda", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 3, A: 1, L: 6 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. No muerto, Vampiro" 
    },
    "Pesadilla Alada": { 
        faction: "cvlah", 
        points: 150, 
        perfiles: [ { nombre: "Pesadilla Alada", stats: { M: 6, HA: 3, HP: 0, F: 5, R: 5, H: 4, I: 2, A: 4, L: 5 } } ], 
        reglasEspeciales: "Monstruo. No muerto, Volar, Terror, Regeneración (4+)" 
    },
    "Dragón Zombi": { 
        faction: "cvlah", 
        points: 255, 
        perfiles: [ { nombre: "Dragón Zombi", stats: { M: 6, HA: 4, HP: 0, F: 6, R: 6, H: 6, I: 1, A: 6, L: 6 } } ], 
        reglasEspeciales: "Monstruo. No muerto, Volar, Piel escamosa (4+), Nube de moscas, Arma de aliento" 
    },
    "Trono del Aquelarre": { 
        faction: "cvlah", 
        points: 200, 
        perfiles: [
            { nombre: "Trono del Aquelarre", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 5, H: 5, I: "-", A: "-", L: "-" } },
            { nombre: "Doncellas Lahmia (2)", stats: { M: 6, HA: 4, HP: 5, F: 5, R: "-", H: "-", I: 6, A: 2, L: 7 } },
            { nombre: "Horda de espíritus", stats: { M: 8, HA: 3, HP: 0, F: 3, R: "-", H: "-", I: 3, A: "2D6+2", L: 4 } }
        ],
        reglasEspeciales: "Carro. TSA 4+, Potencia 5, No muerto, Terror, Flotar, Ataques aleatorios, Aura de fascinación, Protección Impía, Inmenso Tamaño, Batalla de voluntades, Cuenco de las visiones" 
    }
};

const armySkillsDB_cvlah = {
    "Esplendor diabólico": { points: 10, faction: "cvlah", type: "Poder Vampírico", summary: "Esquiva se convierte en TSE. No usar con Colgante de Lapislázuli" },
    "Ojo de Halcón": { points: 10, faction: "cvlah", type: "Poder Vampírico", summary: "Repetir tirada para impactar con Arco Lahmiano" },
    "Cazadora en la oscuridad": { points: 15, faction: "cvlah", type: "Poder Vampírico", summary: "Exploradora" },
    "Inocencia perdida": { points: 20, faction: "cvlah", type: "Poder Vampírico", summary: "Iniciativa 10" },
    "Hipnotismo": { points: 20, faction: "cvlah", type: "Poder Vampírico", summary: "En desafío, oponentes repiten impactos exitosos" },
    "Forma espectral": { points: 20, faction: "cvlah", type: "Poder Vampírico", summary: "Etérea" },
    "Noble del Imperio": { points: 20, faction: "cvlah", type: "Poder Vampírico", summary: "Tropas Condales (puede incluir unidad básica del Imperio)" },
    "Duquesa Bretoniana": { points: 20, faction: "cvlah", type: "Poder Vampírico", summary: "Cab. Tumularia: Formación en cuña/punta de flecha" },
    "Boyarin Kislevita": { points: 20, faction: "cvlah", type: "Poder Vampírico", summary: "Odio (Caos), hechizos Saber del Hielo, unidad Kislev" },
    "Princesa mercader Tileana": { points: 20, faction: "cvlah", type: "Poder Vampírico", summary: "¡Ni un paso atrás!, Presencia inspiradora" },
    "Dominación": { points: 25, faction: "cvlah", type: "Poder Vampírico", summary: "Enemigo en contacto: chequeo L o no ataca" },
    "Velocidad mercúrea": { points: 25, faction: "cvlah", type: "Poder Vampírico", summary: "Enemigos solo pueden aguantar vs carga" },
    "Festín de sangre": { points: 30, faction: "cvlah", type: "Poder Vampírico", summary: "+2 recuperar heridas (3+)" },
    "Experta embaucadora": { points: 30, faction: "cvlah", type: "Poder Vampírico", summary: "Enemigo en contacto: chequeo L o ataca a su unidad" },
    "Esplendor ancestral": { points: 35, faction: "cvlah", type: "Poder Vampírico", summary: "-1F a impactos vs vampira" },
    "Difícil de matar": { points: 35, faction: "cvlah", type: "Poder Vampírico", summary: "Inmune a Heridas múltiples, Golpe letal y Golpe letal heroico" },
    "Maestra Arcana": { points: 35, faction: "cvlah", type: "Poder Vampírico", summary: "+1 nivel de magia (máx 4)" },
    "Almizcle soporífero": { points: 40, faction: "cvlah", type: "Poder Vampírico", summary: "Enemigos en contacto: HA e I reducidas a la mitad" },
    "Condesa entre mortales": { points: 25, faction: "cvlah", type: "Poder Vampírico", summary: "Sólo Señora. Incluir unidad básica de Imperio/Bretonia/Kislev/Mercenarios" },
    "Seducción": { points: 50, faction: "cvlah", type: "Poder Vampírico", summary: "Sólo Señora. Controlar miniatura enemiga" },
    "Reflejos sobrenaturales": { points: 50, faction: "cvlah", type: "Poder Vampírico", summary: "Sólo Señora. Esquivar (4+)" }
};

const magicItemsDB_cvlah = {
    "Arma Mágica": {
        "Arco de Djaf": { points: 50, faction: "cvlah", relic: true, summary: "Arco. Dispara como lanzavirotes 24\"" },
        "Drenadora de sangre": { points: 45, faction: "cvlah", relic: false, summary: "AM. +1F, recupera heridas (sustituye regla Vampiro)" },
        "Dagas de Qu'aph": { points: 35, faction: "cvlah", relic: false, summary: "Armas emparejadas. +1F, Ataques envenenados" },
        "Lanza siniestra": { points: 30, faction: "cvlah", relic: false, summary: "Lanza caballería. Impacta automático al cargar" },
        "Espadón de energía maldita": { points: 30, faction: "cvlah", relic: false, summary: "A2M. +1D energía por herida" },
        "Arco áspid": { points: 30, faction: "cvlah", relic: false, summary: "Sólo Lahmia. Arco Lahmiano, Francotirador" },
        "Bastón de poder": { points: 25, faction: "cvlah", relic: false, summary: "AM. Guarda dado energía/disp, +1F/I con dado guardado" },
        "Arco de Asaph": { points: 20, faction: "cvlah", relic: false, summary: "Arco lahmiano. Disparos múltiples (5)" }
    },
    "Armadura Mágica": {
        "Brazaletes de Plata": { points: 50, faction: "cvlah", relic: true, summary: "Hechiceros. Esquiva 4+" },
        "Grebas de rubíes": { points: 35, faction: "cvlah", relic: false, summary: "+1 TSA e I, Esquiva 5+" },
        "Armadura de la noche": { points: 25, faction: "cvlah", relic: false, summary: "AP. -2 impactar con disparos" },
        "Coraza cadavérica": { points: 15, faction: "cvlah", relic: false, summary: "AP. Inmune al golpe letal" }
    },
    "Talismán": {
        "Gema de las Brumas": { points: 50, faction: "cvlah", relic: true, summary: "6\" TSE 5+ vs proyectiles" },
        "Anillo de Lahmia": { points: 35, faction: "cvlah", relic: false, summary: "RM(2), Inmune Heridas múltiples" },
        "Colgante de Lapislázuli": { points: 30, faction: "cvlah", relic: false, summary: "Mejora esquiva hasta 3+. No con Esplendor diabólico" },
        "Collar de Obsidiana": { points: 30, faction: "cvlah", relic: false, summary: "RM(3)" },
        "Brazales de oro negro": { points: 30, faction: "cvlah", relic: false, summary: "TSE 3+ vs proyectiles" },
        "Corona de los Condenados": { points: 25, faction: "cvlah", relic: false, summary: "TSE 5+, Estupidez" }
    },
    "Artefacto Arcano": {
        "Ojo de Wsoran": { points: 25, faction: "cvlah", relic: true, summary: "Repetir tirada Vientos de la Magia (sufre herida)" },
        "Capa de Luna Negra": { points: 40, faction: "cvlah", relic: false, summary: "+1D energía, RM(2)" },
        "Familiar necrótico": { points: 30, faction: "cvlah", relic: false, summary: "+1D invocación para Invocación Nehek/Animar muertos" },
        "Báculo Óseo": { points: 30, faction: "cvlah", relic: false, summary: "Revela objetos mágicos enemigos 12\", repite disfunciones" },
        "Gema carmesí de Lahmia": { points: 15, faction: "cvlah", relic: false, summary: "Sólo Lahmia. +1D energía (4+ sufre herida)" },
        "Talismán negro": { points: 15, faction: "cvlah", relic: false, summary: "Guarda dado energía/disp, +1 canalizar" }
    },
    "Objeto Hechizado": {
        "Yelmo de la percepción": { points: 60, faction: "cvlah", relic: true, summary: "No trabado: unidad no muertos 12\" usa su HA" },
        "El Libro Maldito": { points: 50, faction: "cvlah", relic: false, summary: "Enemigos en contacto: -1 impactar. No afecta NoMuertos/Demonios" },
        "Espejo de Tinieblas": { points: 30, faction: "cvlah", relic: false, summary: "Un uso. -1 nivel magia y pierde hechizo enemigo 12\"" },
        "Relicario de Vashanesh": { points: 30, faction: "cvlah", relic: false, summary: "Portahechizos(5). Potenciación: repite tiradas 1 para herir" },
        "Cetro de Áspid": { points: 30, faction: "cvlah", relic: false, summary: "Veneno 5+, unidad gana Ataques envenenados" },
        "El libro de la Serpiente": { points: 20, faction: "cvlah", relic: false, summary: "Portahechizos(4). Daño: 3D6 impactos F2, mágicos, penetración" }
    },
    "Estandarte Mágico": {
        "Estandarte de Lahmia": { points: 50, faction: "cvlah", relic: true, summary: "Unidad: +1 ataque (no monturas/personajes excepto portador)" },
        "Estandarte de Drakenhof": { points: 50, faction: "cvlah", relic: true, summary: "Unidad: Regeneración (5+)" },
        "Estandarte de los túmulos": { points: 45, faction: "cvlah", relic: false, summary: "Sólo tumularios. +1 impactar CaC" },
        "Bandera del Conde": { points: 40, faction: "cvlah", relic: false, summary: "Unidad: chequeos desmoralización, Tozudos, Sangre fría" },
        "Pabellón de Templehof": { points: 25, faction: "cvlah", relic: false, summary: "Unidad: Cruzar, RM(1)" },
        "Icono de Muerte": { points: 25, faction: "cvlah", relic: false, summary: "Unidad: +1M, +1I" },
        "Estandarte de los lamentos": { points: 25, faction: "cvlah", relic: false, summary: "Chequeos miedo: 3D6 descarta bajo" },
        "Estandarte de la Cobra": { points: 25, faction: "cvlah", relic: false, summary: "Unidad: Ataques envenenados (solo CC)" },
        "Estandarte de las pesadillas eternas": { points: 15, faction: "cvlah", relic: false, summary: "Unidad: +4 por filas en resultado combate" }
    }
};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Condes Vampiros Lahmia",
    FACTION_ID: "cvlah",
    FOC_CONFIG: { 
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_cvlah,
    mountsDB: mountsDB_cvlah,
    magicItemsDB: magicItemsDB_cvlah,
    armySkillsDB: armySkillsDB_cvlah,
    specialProfilesDB: {},
    armySkillsLabel: "Poderes Vampíricos",
};
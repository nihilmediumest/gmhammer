// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: CONDES VAMPIROS VON CARSTEIN ---
// ===================================================================================
// Last Updated: 2025-10-04 - v4.1
import { commonMagicItemsDB } from '../comun.js';

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_cvvon = {
    // === CORE ===
    "Esqueletos": {
        faction: "cvvon",
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
            { n: "Escudo", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 4 }, s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } },
        magicBanner: 25
    },
    "Zombis": {
        faction: "cvvon",
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
        faction: "cvvon",
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
    "Necrófagos": {
        faction: "cvvon",
        foc: "Core",
        warning: "Sólo puedes incluir una unidad de necrófagos por cada unidad de esqueletos o zombis de tu ejército.",
        points: 7,
        min: 5,
        max: 15,
        equipo: "Arma de mano.",
        reglasEspeciales: "Miedo, Ataques envenenados, Hostigadores, Carroñeros, ¡Están vivos!",
        perfiles: [
            { nombre: "Necrófago", stats: { M: 5, HA: 3, HP: 0, F: 3, R: 4, H: 1, I: 3, A: 2, L: 6 } },
            { nombre: "Oficial necrófago", stats: { M: 5, HA: 3, HP: 0, F: 3, R: 4, H: 1, I: 3, A: 3, L: 6 } }
        ],
        command: { c: { n: "Oficial", p: 6 } },
        options: [
            { n: "Convertir en Striganos (sólo con vampiro Strigoi)", p: 2, summary: "+1HA, +1F, +1L" }
        ]
    },
    "Lobos Siniestros": {
        faction: "cvvon",
        foc: "Core",
        warning: "No podrás incluir en el ejército más unidades Básicas con esta regla que sin ella",
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
    "Siervos": {
        faction: "cvvon",
        foc: "Core",
        warning: "0-1",
        points: 5,
        min: 10,
        max: 30,
        equipo: "Dos armas de mano",
        reglasEspeciales: "¡Están vivos!, Inmunes a pánico, Voluntad Perdida",
        perfiles: [
            { nombre: "Servo", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 } }
        ],
        options: [
            { n: "Sustituir dos armas por armadura pesada", p: 0 },
            { n: "Escudo", p: 1 },
            { n: "Armas a dos manos", p: 1 },
            { n: "Alabardas", p: 2 },
            { n: "Lanza", p: 1 },
            { n: "Convertir en Hostigadores (sin armadura)", p: 1 },
            { n: "Ballestas (sin otras opciones)", p: 2 }
        ],
        command: { c: { n: "Oficial", p: 4 }, s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } }
    },
    "Hueste Espectral": {
        faction: "cvvon",
        foc: "Core",
        warning: "Sólo puedes incluir una unidad de hueste espectral si incluyes al menos un personaje del clan Necrarca en tu ejército.",
        points: 40,
        min: 1,
        max: 6,
        equipo: "Arma de mano.",
        reglasEspeciales: "No muertos, Etéreos, Ataques mágicos, Legión espectral",
        perfiles: [
            { nombre: "Hueste espectral", stats: { M: 6, HA: 2, HP: 0, F: 3, R: 3, H: 4, I: 2, A: 4, L: 5 } }
        ]
    },

    // === SPECIAL ===
    "Tumularios": {
        faction: "cvvon",
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
    "Caballería Tumularia": {
        faction: "cvvon",
        foc: "Special",
        points: 19,
        min: 5,
        max: 15,
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
            { n: "Barda para corceles", p: 2 }
        ],
        command: { c: { n: "Oficial", p: 8 }, s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } },
        magicBanner: 50
    },
    "Murciélagos Vampiro": {
        faction: "cvvon",
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
    "Vargheist": {
        faction: "cvvon",
        foc: "Special",
        points: 60,
        min: 2,
        max: 5,
        equipo: "Garras Afiladas (Arma de mano con poder de penetración).",
        reglasEspeciales: "No muertos, Vampiros, Volar, Furia asesina, Hostigadores",
        perfiles: [
            { nombre: "Vargheist", stats: { M: 6, HA: 4, HP: 0, F: 5, R: 4, H: 3, I: 4, A: 3, L: 7 } },
            { nombre: "Oficial", stats: { M: 6, HA: 4, HP: 0, F: 5, R: 4, H: 3, I: 4, A: 4, L: 8 } }
        ],
        command: { c: { n: "Oficial", p: 10 } }
    },
    "Horrores de la Cripta": {
        faction: "cvvon",
        foc: "Special",
        points: 42,
        min: 3,
        max: 6,
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "No muertos, Ataques envenenados, Regeneración (5+)",
        perfiles: [
            { nombre: "Horror de la cripta", stats: { M: 6, HA: 3, HP: 0, F: 4, R: 5, H: 3, I: 2, A: 3, L: 7 } },
            { nombre: "Oficial", stats: { M: 6, HA: 4, HP: 0, F: 4, R: 5, H: 3, I: 2, A: 4, L: 7 } }
        ],
        options: [
            { n: "Armas de mano adicionales", p: 3 },
            { n: "Armas a dos manos", p: 5 }
        ],
        command: { c: { n: "Oficial", p: 10 } }
    },
    "Espíritus": {
        faction: "cvvon",
        foc: "Special",
        warning: "0-1. Sólo puedes incluir una unidad de espíritus si tu ejército incluye algún personaje del clan Necrarca.",
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
        faction: "cvvon",
        foc: "Special",
        warning: "0-1",
        points: 175,
        min: 1,
        max: 1,
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "No muerto, Vampiro, Volar, Regeneración (4+), Odio (todos los enemigos)",
        perfiles: [
            { nombre: "Varghulf", stats: { M: 8, HA: 5, HP: 0, F: 5, R: 5, H: 5, I: 4, A: 5, L: 7 } }
        ]
    },

    // === RARE ===
    "Espectros Condenadores": {
        faction: "cvvon",
        foc: "Rare",
        warning: "0-1. Sólo puedes incluir una unidad de espectros condenadores si tu ejército incluye algún personaje del clan Necrarca.",
        points: 36,
        min: 5,
        max: 8,
        equipo: "Arma a dos manos.",
        reglasEspeciales: "No muertos, Terror, Etéreos, Caballería rápida, Ataques flamígeros, Impactos por carga (1)",
        perfiles: [
            { nombre: "Espectro", stats: { M: 6, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 2, L: 6 } },
            { nombre: "Oficial Espectro", stats: { M: 6, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 3, L: 6 } },
            { nombre: "Corcel esquelético", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 4 } }
        ],
        options: [
            { n: "Barda para corceles", p: 4 }
        ],
        command: { c: { n: "Oficial", p: 10 } }
    },
    "Doncellas Lahmia": {
        faction: "cvvon",
        foc: "Rare",
        warning: "0-1. Sólo puedes incluir una unidad de doncellas lahmia si tu ejército incluye algún personaje del clan Lahmia.",
        points: 25,
        min: 5,
        max: 10,
        equipo: "Dos Armas de mano y Arcos Lahmianos.",
        reglasEspeciales: "No muertos, Vampiros, Hostigadores, Esquivar (5+), Aura de fascinación",
        perfiles: [
            { nombre: "Doncella Lahmia", stats: { M: 6, HA: 4, HP: 4, F: 4, R: 4, H: 1, I: 6, A: 2, L: 7 } },
            { nombre: "Matriarca Lahmia", stats: { M: 6, HA: 4, HP: 5, F: 4, R: 4, H: 1, I: 6, A: 3, L: 7 } }
        ],
        command: { c: { n: "Matriarca", p: 10 }, m: { n: "Músico", p: 8 } },
        champItems: 25
    },
    "Caballeros del Dragón Sangriento": {
        faction: "cvvon",
        foc: "Rare",
        warning: "0-1. Sólo puedes incluir una unidad de caballeros del dragón sangriento si tu ejército incluye algún personaje del clan Dragón Sangriento.",
        points: 50,
        min: 3,
        max: 5,
        equipo: "Arma de mano, Lanza de Caballería, Armadura pesada y Escudo.",
        reglasEspeciales: "No muertos, Vampiros, Furia asesina (sólo jinetes), Orgullo marcial (sólo Senescal)",
        perfiles: [
            { nombre: "Caballero Sangriento", stats: { M: 4, HA: 6, HP: 3, F: 5, R: 4, H: 2, I: 5, A: 2, L: 7 } },
            { nombre: "Senescal Sangriento", stats: { M: 4, HA: 6, HP: 3, F: 5, R: 4, H: 2, I: 5, A: 3, L: 8 } },
            { nombre: "Pesadilla", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 3, A: 1, L: 6 } }
        ],
        options: [
            { n: "Mayales (en lugar de lanzas)", p: 0 },
            { n: "Armas a dos manos (en lugar de lanzas)", p: 0 }
        ],
        command: { c: { n: "Oficial", p: 10 }, s: { n: "Portaestandarte", p: 10 }, m: { n: "Músico", p: 10 } },
        magicBanner: 50,
        champItems: 25
    },
    "Corte Strigoi": {
        faction: "cvvon",
        foc: "Rare",
        warning: "0-1. Sólo puedes incluir una unidad de corte strigoi si tu ejército incluye algún personaje del clan Strigoi.",
        points: 40,
        min: 3,
        max: 6,
        equipo: "Arma de mano.",
        reglasEspeciales: "Vampiros, Furia Asesina, Esquiva (4+), Odio, hostigadores, carga devastadora, Ataques envenenados, Corte siniestra",
        perfiles: [
            { nombre: "Cortesano strigoi", stats: { M: 6, HA: 4, HP: 2, F: 5, R: 4, H: 2, I: 4, A: 3, L: 8 } },
            { nombre: "Senescal Strigoi", stats: { M: 6, HA: 4, HP: 2, F: 5, R: 4, H: 2, I: 4, A: 4, L: 8 } }
        ],
        command: { c: { n: "Senescal strigoi", p: 10 }, s: { n: "Portaestandarte", p: 10 } },
        magicBanner: 50
    },
    "Carruaje Negro": {
        faction: "cvvon",
        foc: "Rare",
        points: 165,
        min: 1,
        max: 1,
        equipo: "El Conductor espectral va equipado con un Arma a dos manos.",
        reglasEspeciales: "Tirada de salvación por armadura 3+, No muerto, Terror, Vampiro, Ataques mágicos, Protección impía, Drenar almas",
        perfiles: [
            { nombre: "Carruaje Negro", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 5, H: 5, I: "-", A: "-", L: "-" } },
            { nombre: "Conductor espectral", stats: { M: "-", HA: 3, HP: 0, F: 3, R: "-", H: "-", I: 3, A: 3, L: 7 } },
            { nombre: "Corceles esqueléticos (2)", stats: { M: 8, HA: 2, HP: 0, F: 4, R: "-", H: "-", I: 1, A: 1, L: 4 } }
        ]
    },
    "Engendro del Terror": {
        faction: "cvvon",
        foc: "Rare",
        points: 230,
        min: 1,
        max: 1,
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "No muerto, Volar, Regeneración (5+), Chillido mortal",
        perfiles: [
            { nombre: "Engendro del Terror", stats: { M: 6, HA: 3, HP: 0, F: 5, R: 6, H: 6, I: 3, A: 4, L: 4 } }
        ],
        options: [
            { n: "Infestado", p: 15, summary: "Al morir: 3D6 impactos F2 a unidades en contacto" },
            { n: "Mandíbulas rancias", p: 10, summary: "Ataques envenenados" }
        ]
    },

    // === LORDS ===
   "Señor de Vampiros Von Carstein": {
    faction: "cvvon",
    foc: "Lord",
    points: 205,
    min: 1,
    max: 1,
    equipo: "Arma de mano y Armadura pesada.",
    reglasEspeciales: "No muerto, Vampiro. Puede lanzar hechizos pese a llevar armadura.",
    perfiles: [
        { nombre: "Señor de Vampiros Von Carstein", stats: { M: 6, HA: 7, HP: 5, F: 5, R: 5, H: 3, I: 7, A: 4, L: 9 } }
    ],
    options: [
        { n: "Arma de mano adicional", p: 5 },
        { n: "Arma a dos manos", p: 8 },
        { n: "Lanza de caballería (sólo si va montado)", p: 8 },
        { n: "Nivel de Magia 3", p: 35 },
        // Von Carstein Powers (Lord-specific included)
        { n: "Invocar a las criaturas de la noche", p: 10, summary: "+1/dado invocación Nehek/Animar muertos" },
        { n: "Honor o muerte", p: 15, summary: "Orgullo marcial, repite fallos en desafíos" },
        { n: "Señor de la no muerte", p: 20, summary: "+1 lanzar nigromancia" },
        { n: "Forma espectral", p: 20, summary: "Etéreo" },
        { n: "Mirada hipnótica", p: 25, summary: "Enemigos -1 impactar CaC vs vampiro" },
        { n: "Caballero Imperial", p: 25, summary: "Vampiro y unidad: Armadura placas" },
        { n: "Férrea voluntad", p: 25, summary: "No muertos 12\": -1 baja perder combate" },
        { n: "Forma de murciélago", p: 30, summary: "Volar" },
        { n: "Estirpe de Sylvania", p: 30, summary: "TSE 4+ (no vs mágicos)" },
        { n: "Aura de majestad infernal", p: 35, summary: "Sólo general. Presencia Inspiradora 18\"" },
        { n: "Aura negra de majestuosidad", p: 40, summary: "Enemigos 6\": -1L" },
        { n: "Maldición de los Von Carstein", p: 45, summary: "Estupidez, Furia asesina, Tozudez" },
        { n: "Despertar la tempestad", p: 50, summary: "Tormenta 12\": -2 impactar disparos, no volar" },
        { n: "Pureza de sangre", p: 50, summary: "Unidades 6\": baja por inestabilidad demoniaca" },
        { n: "Erudito de lo arcano", p: 50, summary: "+1 nivel magia, elige hechizos, no Necrarcas/Nigromantes" },
        { n: "Transformación bestial", p: 65, summary: "Infantería monstruosa, +1F+R+H+A, Volar, Terror" }
    ],
    mounts: ["Pesadilla con barda", "Dragón Zombi", "Pesadilla Alada"],
    maxMagicItems: 3,
    maxRelics: 1,
    maxSkills: { limit: 2, type: 'count' }
    },
    "Maestro Nigromante": {
        faction: "cvvon",
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
"Conde Vampiro Von Carstein": {
    faction: "cvvon",
    foc: "Hero",
    points: 105,
    min: 1,
    max: 1,
    equipo: "Arma de mano y Armadura pesada.",
    reglasEspeciales: "No muerto, Vampiro. Puede lanzar hechizos pese a llevar armadura.",
    perfiles: [
        { nombre: "Conde Vampiro Von Carstein", stats: { M: 6, HA: 6, HP: 4, F: 5, R: 4, H: 2, I: 6, A: 3, L: 8 } }
    ],
    options: [
        { n: "Arma de mano adicional", p: 4 },
        { n: "Arma a dos manos", p: 4 },
        { n: "Lanza de caballería (sólo si va montado)", p: 4 },
        // Von Carstein Powers
        { n: "Invocar a las criaturas de la noche", p: 10, summary: "+1/dado invocación Nehek/Animar muertos" },
        { n: "Honor o muerte", p: 15, summary: "Orgullo marcial, repite fallos en desafíos" },
        { n: "Señor de la no muerte", p: 20, summary: "+1 lanzar nigromancia" },
        { n: "Forma espectral", p: 20, summary: "Etéreo" },
        { n: "Mirada hipnótica", p: 25, summary: "Enemigos -1 impactar CaC vs vampiro" },
        { n: "Caballero Imperial", p: 25, summary: "Vampiro y unidad: Armadura placas" },
        { n: "Férrea voluntad", p: 25, summary: "No muertos 12\": -1 baja perder combate" },
        { n: "Forma de murciélago", p: 30, summary: "Volar" },
        { n: "Estirpe de Sylvania", p: 30, summary: "TSE 4+ (no vs mágicos)" }
    ],
    mounts: ["Pesadilla con barda"],
    maxMagicItems: 2,
    battleStandard: { name: "Portaestandarte de Batalla", cost: 25 }
},
"Condesa Vampira Lahmia": {
    faction: "cvvon",
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
        { n: "Arma de mano adicional", p: 3 },
        // Lahmia Powers
        { n: "Cazadora en la oscuridad", p: 15, summary: "Exploradora" },
        { n: "Inocencia perdida", p: 20, summary: "I10" },
        { n: "Hipnotismo", p: 20, summary: "Enemigos repiten impactos en desafío" },
        { n: "Dominación", p: 25, summary: "Enemigo contacto: chequeo L o no ataca" },
        { n: "Festín de Sangre", p: 30, summary: "Recupera heridas 3+ (regla Vampiro)" },
        { n: "Esplendor ancestral", p: 35, summary: "-1F impactos vs vampiresa" }
    ],
    mounts: ["Pesadilla con barda"],
    maxMagicItems: 2
},
"Conde Vampiro Necrarca": {
    faction: "cvvon",
    foc: "Hero",
    points: 125,
    min: 1,
    max: 1,
    equipo: "Arma de mano.",
    reglasEspeciales: "No muerto, Vampiro",
    perfiles: [
        { nombre: "Conde Vampiro Necrarca", stats: { M: 6, HA: 4, HP: 3, F: 5, R: 4, H: 2, I: 5, A: 3, L: 8 } }
    ],
    options: [
        { n: "Arma de mano adicional", p: 3 },
        { n: "Nivel de Magia 3", p: 35 },
        // Necrarca Powers
        { n: "Maestro de la magia negra", p: 10, summary: "+2 canalizar" },
        { n: "Señor de los muertos", p: 10, summary: "+1/dado invocación esqueletos/zombis" },
        { n: "Secretos nigrománticos", p: 15, summary: "Hechizo adicional" },
        { n: "Horror sobrenatural", p: 20, summary: "Terror" },
        { n: "Arcano nigromántico", p: 25, summary: "+1 lanzar hechizos" },
        { n: "Vientos de Muerte", p: 25, summary: "+1 dado dispersión" },
        { n: "Salvaguarda oscura", p: 25, summary: "Repite disfunciones mágicas" },
        { n: "Vitalidad impía", p: 30, summary: "+1H" },
        { n: "Astrología impía", p: 40, summary: "1 vez/turno: repetir tirada, 1 vez/fase: repetir dado energía 1" }
    ],
    mounts: ["Pesadilla con barda"],
    maxMagicItems: 2
},
"Conde Vampiro Dragón Sangriento": {
    faction: "cvvon",
    foc: "Hero",
    points: 95,
    min: 1,
    max: 1,
    equipo: "Arma de mano y Armadura pesada.",
    reglasEspeciales: "No muerto, Vampiro, Orgullo marcial",
    perfiles: [
        { nombre: "Conde Vampiro Dragón Sangriento", stats: { M: 6, HA: 7, HP: 4, F: 5, R: 4, H: 2, I: 6, A: 4, L: 8 } }
    ],
    options: [
        { n: "Arma de mano adicional", p: 4 },
        { n: "Alabarda", p: 4 },
        { n: "Mayal", p: 3 },
        { n: "Arma a dos manos", p: 4 },
        { n: "Lanza de caballería (sólo si va montado)", p: 4 },
        { n: "Escudo", p: 2 },
        { n: "Armadura de placas", p: 10, summary: "TSA 4+" },
        // Dragón Sangriento Powers
        { n: "Caballero siniestro", p: 10, summary: "Sin penalización por barda" },
        { n: "La fuerza del acero", p: 10, summary: "Carga devastadora" },
        { n: "Espadachín consumado", p: 15, summary: "Enemigo contacto pierde 1 ataque" },
        { n: "Golpe maestro", p: 25, summary: "Golpe Maestro CaC" },
        { n: "Odio sin límites", p: 25, summary: "Odio (todos)" },
        { n: "Matadragones", p: 30, summary: "Golpe letal heroico vs dragones" },
        { n: "Estudios nigrománticos", p: 35, summary: "+1 nivel magia (o nivel 1)" },
        { n: "Furia de sangre", p: 40, summary: "Por herida en desafío: ataque extra" }
    ],
    mounts: ["Pesadilla con barda"],
    maxMagicItems: 2
},
"Conde Vampiro Strigoi": {
    faction: "cvvon",
    foc: "Hero",
    points: 140,
    min: 1,
    max: 1,
    equipo: "Garras (Arma de mano)",
    reglasEspeciales: "No muerto, Vampiro, Ataques envenenados",
    perfiles: [
        { nombre: "Conde Vampiro Strigoi", stats: { M: 6, HA: 6, HP: 2, F: 5, R: 5, H: 3, I: 6, A: 4, L: 8 } }
    ],
    options: [
        // Strigoi Powers
        { n: "Furia de Strigos", p: 10, summary: "Furia asesina" },
        { n: "Cazador en la oscuridad", p: 15, summary: "Explorador (infantería)" },
        { n: "Pellejo férreo", p: 15, summary: "Piel escamosa (4+)" },
        { n: "Ferocidad imparable", p: 15, summary: "Impactos carga (1), Carga devastadora" },
        { n: "Veneno necrótico", p: 20, summary: "Veneno 5+, Heridas múltiples (2)" },
        { n: "Fuerza imparable", p: 20, summary: "Heridas múltiples (1D3)" },
        { n: "Músculos de acero", p: 20, summary: "+1F" },
        { n: "Curación rápida", p: 25, summary: "Regeneración (5+)" },
        { n: "Celeridad de ultratumba", p: 25, summary: "Esquivar (5+)" },
        { n: "Presencia perturbadora", p: 25, summary: "Enemigos -1 impactar CaC vs vampiro" },
        { n: "La encarnación del miedo", p: 25, summary: "Enemigo repite Miedo/Terror" },
        { n: "Aullido de mando", p: 25, summary: "Portahechizos(1D3+1): necrófagos mueven 1D6+2\"" },
        { n: "Insensible", p: 30, summary: "-1 herir vs vampiro" },
        { n: "Llamar a los necrófagos", p: 35, summary: "Invocar necrófagos con Nehek/Animar muertos" }
    ],
    maxMagicItems: 2
},
    "Señor Tumulario": {
        faction: "cvvon",
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
            { n: "Lanza de caballería funeraria (sólo si va montado)", p: 4 },
            { n: "Escudo", p: 2 }
        ],
        mounts: ["Corcel esquelético con barda"],
        maxMagicItems: 2,
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 }
    },
    "Nigromante": {
        faction: "cvvon",
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
        mounts: ["Corcel esquelético con barda", "Carro de Cadáveres"],
        maxMagicItems: 2,
        maxSkills: { limit: 1, type: 'count' }
    }
};

const mountsDB_cvvon = {
    "Corcel esquelético": { 
        faction: "cvvon", 
        points: 12, 
        perfiles: [ { nombre: "Corcel esquelético", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 3 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. No muerto, Corceles insustanciales." 
    },
    "Corcel esquelético con barda": { 
        faction: "cvvon", 
        points: 15, 
        perfiles: [ { nombre: "Corcel esquelético con barda", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 3 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. No muerto, Corceles insustanciales, Barda." 
    },
    "Pesadilla": { 
        faction: "cvvon", 
        points: 12, 
        perfiles: [ { nombre: "Pesadilla", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 3, A: 1, L: 6 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. No muerto, Vampiro." 
    },
    "Pesadilla con barda": { 
        faction: "cvvon", 
        points: 15, 
        perfiles: [ { nombre: "Pesadilla con barda", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 3, A: 1, L: 6 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. No muerto, Vampiro, Barda." 
    },
    "Pesadilla Alada": { 
        faction: "cvvon", 
        points: 150, 
        perfiles: [ { nombre: "Pesadilla Alada", stats: { M: 6, HA: 3, HP: 0, F: 5, R: 5, H: 4, I: 2, A: 4, L: 5 } } ], 
        reglasEspeciales: "Monstruo. No muerto, Volar, Terror, Regeneración (4+)." 
    },
    "Dragón Zombi": { 
        faction: "cvvon", 
        points: 255, 
        perfiles: [ { nombre: "Dragón Zombi", stats: { M: 6, HA: 4, HP: 0, F: 6, R: 6, H: 6, I: 1, A: 5, L: 6 } } ], 
        reglasEspeciales: "Monstruo. No muerto, Volar, Piel escamosa (4+), Nube de moscas, Arma de aliento." 
    },
    "Engendro del Terror": { 
        faction: "cvvon", 
        points: 230, 
        perfiles: [ { nombre: "Engendro del Terror", stats: { M: 6, HA: 3, HP: 0, F: 5, R: 6, H: 6, I: 3, A: 4, L: 4 } } ],
        reglasEspeciales: "Monstruo. No muerto, Volar, Regeneración (5+), Chillido mortal.",
        options: [
            { n: "Infestado", p: 15, summary: "Al morir: 3D6 impactos F2 a unidades en contacto" },
            { n: "Mandíbulas rancias", p: 10, summary: "Ataques envenenados" }
        ]
    },
    "Carro de Cadáveres": { 
        faction: "cvvon", 
        points: 130, 
        perfiles: [
            { nombre: "Carro de cadáveres", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 4, H: 4, I: "-", A: "-", L: "-" } },
            { nombre: "Horda de zombis", stats: { M: 4, HA: 1, HP: 0, F: 5, R: "-", H: "-", I: 0, A: "2D6", L: 2 } }
        ],
        reglasEspeciales: "Carro. No muerto, Terror, Tirada de salvación por armadura 5+, Regeneración (4+), Miasma de descomposición, Foco de poder nigromántico.",
        options: [
            { n: "Fuego infernal", p: 15, costType: "flat", summary: "+1D invocación para Invocación Nehek/Animar Muertos (12\")" },
            { n: "Piedra impía", p: 15, costType: "flat", summary: "+2 canalizar para hechiceros amigos (12\")" }
        ]
    }
};

const magicItemsDB_cvvon = {
    "Arma Mágica": {
        "Espada maldita de Sylvania": { points: 60, faction: "cvvon", relic: true, summary: "Sólo Von Carstein. AM. I10, +1F, repite impactos fallidos" },
        "La cimitarra de Khaled Al-Muntasir": { points: 50, faction: "cvvon", relic: false, summary: "Sólo Vampiros. AM. Odio, RM(1), -2TSA enemigo, +1D energía por herida" },
        "Drenadora de sangre": { points: 45, faction: "cvvon", relic: false, summary: "AM. +1F, recupera herida por herida causada (sustituye regla Vampiro)" },
        "Lanza siniestra": { points: 30, faction: "cvvon", relic: false, summary: "Lanza caballería. Impacta automático al cargar" },
        "Espadón de energía maldita": { points: 30, faction: "cvvon", relic: false, summary: "A2M. +1D energía por herida a enemigo" },
        "Arco áspid": { points: 30, faction: "cvvon", relic: false, summary: "Sólo Lahmia. Arco Largo lahmiano. Francotirador" },
        "Bastón de poder": { points: 25, faction: "cvvon", relic: false, summary: "AM. Guarda 1D energía/disp, +1F+I con dado guardado" },
        "Estoque Sangriento": { points: 20, faction: "cvvon", relic: false, summary: "AM. Poder penetración. Mata en desafío: +1D3 resultado combate" }
    },
    "Armadura Mágica": {
        "Brazaletes de Plata": { points: 50, faction: "cvvon", relic: true, summary: "Hechiceros. Esquiva 4+" },
        "Armadura maldita": { points: 50, faction: "cvvon", relic: false, summary: "Sólo Von Carstein. AP. Enemigos -1F y HA vs portador, +1TSA por herida causada" },
        "Cota ensangrentada": { points: 35, faction: "cvvon", relic: false, summary: "Sólo Dragón Sangriento. AP. TSE 5+, 4+ vs no mágicos" },
        "Coraza de Drakenhof": { points: 35, faction: "cvvon", relic: false, summary: "Sólo Vampiros. Armadura placas (TSA 4+). Recupera heridas con 2+" },
        "Armadura de la noche": { points: 30, faction: "cvvon", relic: false, summary: "AP. Disparos -2 impactar vs portador y montura" },
        "Coraza de acero negro": { points: 25, faction: "cvvon", relic: false, summary: "Armadura placas (TSA 4+). Repite TSA fallidas" },
        "Armadura del Sudario": { points: 20, faction: "cvvon", relic: false, summary: "Sólo Necrarca. Armadura placas (TSA 4+). Enemigos contacto: pierden bonus carga, I=1" },
        "Coraza cadavérica": { points: 15, faction: "cvvon", relic: false, summary: "Armadura placas (TSA 4+). Inmune golpe letal" }
    },
    "Talismán": {
        "El Anillo de los Carstein": { points: 60, faction: "cvvon", relic: true, summary: "Sólo Von Carstein. Un uso. Muere: 2+ revive con 1H" },
        "Capa de Oscuridad": { points: 50, faction: "cvvon", relic: true, summary: "Piel escamosa (4+), Regeneración (5+), enemigos -1 impactar" },
        "Gema de las Brumas": { points: 45, faction: "cvvon", relic: true, summary: "Portador y unidad: TSE 5+ vs proyectiles" },
        "Anillo de Lahmia": { points: 35, faction: "cvvon", relic: false, summary: "Sólo vampiros. RM(2), Inmune Heridas Múltiples" },
        "Anillo de la noche": { points: 30, faction: "cvvon", relic: false, summary: "Sólo Von Carstein. Repite impactos exitosos vs portador" },
        "Collar de Obsidiana": { points: 30, faction: "cvvon", relic: false, summary: "RM(3)" },
        "Brazales de oro negro": { points: 30, faction: "cvvon", relic: false, summary: "TSE 3+ vs proyectiles" },
        "Corona de los Condenados": { points: 20, faction: "cvvon", relic: false, summary: "TSE 5+, Estupidez" }
    },
    "Artefacto Arcano": {
        "Ojo de Wsoran": { points: 25, faction: "cvvon", relic: true, summary: "Repite tirada Vientos de Magia, portador sufre 1 herida" },
        "Dedo Siniestro": { points: 35, faction: "cvvon", relic: false, summary: "Portahechizos(4). Danza macabra (no muertos 12\")" },
        "Familiar necrótico": { points: 30, faction: "cvvon", relic: false, summary: "+1D invocación para Invocación Nehek/Animar Muertos" },
        "Grimorium Necronium": { points: 30, faction: "cvvon", relic: false, summary: "Sólo Necrarca. Invocación Nehek/Animar muertos: +1 dado invocación" },
        "Báculo Óseo": { points: 30, faction: "cvvon", relic: false, summary: "Revela objetos mágicos enemigos 12\". Repite disfunciones" },
        "Gema carmesí de Lahmia": { points: 15, faction: "cvvon", relic: false, summary: "Sólo Lahmia. +1D energía, 4+ sufre 1 herida" },
        "Talismán negro": { points: 15, faction: "cvvon", relic: false, summary: "Guarda 1D energía/disp, +1 canalizar" }
    },
    "Objeto Hechizado": {
        "Yelmo de la percepción": { points: 50, faction: "cvvon", relic: true, summary: "No trabado: unidad no muertos 12\" usa HA portador" },
        "Colgante de Sangre": { points: 35, faction: "cvvon", relic: false, summary: "+1 recuperar heridas (regla Vampiro), +1 resultado combate si recupera" },
        "El Libro Maldito": { points: 30, faction: "cvvon", relic: false, summary: "Enemigos contacto: -1 impactar CaC" },
        "Crucifijo de Huesos": { points: 30, faction: "cvvon", relic: false, summary: "Sólo vampiros. Portahechizos(2). Invocación Nehek" },
        "Relicario de Vashanesh": { points: 25, faction: "cvvon", relic: false, summary: "Portahechizos(5). Potenciación: unidad repite herir 1" },
        "Icono del Visir": { points: 20, faction: "cvvon", relic: false, summary: "Unidad: -1 baja por perder combate" },
        "Icono del Vigor Mortis": { points: 15, faction: "cvvon", relic: false, summary: "+6\" Presencia Inspiradora y marcha del General" },
        "Talismán de Lyeni": { points: 10, faction: "cvvon", relic: false, summary: "Sólo Strigoi. M=10" }
    },
    "Estandarte Mágico": {
        "Estandarte de Drakenhof": { points: 40, faction: "cvvon", relic: true, summary: "Portador y unidad: Regeneración (5+)" },
        "Bandera de la Torre sangrienta": { points: 50, faction: "cvvon", relic: true, summary: "Sólo Dragón Sangriento. Portador y unidad: TSE 4+ vs proyectiles" },
        "Estandarte de los túmulos": { points: 45, faction: "cvvon", relic: false, summary: "Sólo tumularios. +1 impactar CaC" },
        "Bandera del Conde": { points: 40, faction: "cvvon", relic: false, summary: "Portador y unidad: chequeo desmoralización en lugar de bajas, Tozudos, Sangre fría" },
        "Pabellón real de Strigos": { points: 30, faction: "cvvon", relic: false, summary: "Sólo Strigoi. Portador y unidad: Odio (todos)" },
        "Pabellón de Templehof": { points: 25, faction: "cvvon", relic: false, summary: "Portador y unidad: Cruzar, RM(1)" },
        "Icono de Muerte": { points: 25, faction: "cvvon", relic: false, summary: "Portador y unidad: +1M, +1I" },
        "Estandarte de los lamentos": { points: 25, faction: "cvvon", relic: false, summary: "Chequeos Miedo: 3D6 descarta bajo" },
        "Estandarte de las pesadillas eternas": { points: 15, faction: "cvvon", relic: false, summary: "Unidad: +4 por filas en resultado combate" }
    }
};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Condes Vampiros Von Carstein",
    FACTION_ID: "cvvon",
    FOC_CONFIG: { 
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_cvvon,
    mountsDB: mountsDB_cvvon,
    magicItemsDB: magicItemsDB_cvvon,
    armySkillsDB: {},
    specialProfilesDB: {},
    armySkillsLabel: "Poderes Vampíricos",
};
// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: ALTOS ELFOS ---
// ===================================================================================
// Last Updated: 2025-10-04 - v4.1
import { commonMagicItemsDB } from '../comun.js';

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_aelf = {
    // === CORE ===
    "Arqueros Elfos": {
        faction: "aelf",
        foc: "Core",
        points: 9,
        min: 10,
        max: 30,
        equipo: "Arma de mano y Arco largo élfico.",
        reglasEspeciales: "Destreza marcial, Valor familiar",
        perfiles: [
            { nombre: "Arqueros elfos", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 5, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } }
        ],
        options: [
            { n: "Armaduras ligeras", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },
    "Lanceros Elfos": {
        faction: "aelf",
        foc: "Core",
        points: 10,
        min: 10,
        max: 30,
        equipo: "Lanza, Armadura ligera y Escudo",
        reglasEspeciales: "Destreza marcial, Valor familiar",
        perfiles: [
            { nombre: "Lanceros elfos", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 2, L: 8 } }
        ],
        options: [
            { n: "Sustituir armaduras ligeras por Armaduras Pesadas", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },
    "Jinetes de Ellyrion": {
        faction: "aelf",
        foc: "Core",
        points: 14,
        min: 5,
        max: 15,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Caballería rápida, Valor familiar",
        perfiles: [
            { nombre: "Jinetes de Ellyrion", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 2, L: 8 } },
            { nombre: "Corcel élfico", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 6 } }
        ],
        options: [
            { n: "Arcos élficos", p: 2 },
            { n: "Lanzas", p: 2 },
            { n: "Escudos", p: 1, exclusiveGroup: "escudoBarda" },
            { n: "Barda de Ithilmar para corceles", p: 2, exclusiveGroup: "escudoBarda" }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },
    "Guardia del Mar": {
        faction: "aelf",
        foc: "Core",
        warning: "0-1",
        points: 13,
        min: 10,
        max: 25,
        equipo: "Lanza, Arco élfico, Armadura ligera y Escudo",
        reglasEspeciales: "Destreza marcial, Valor familiar",
        perfiles: [
            { nombre: "Guardia del Mar", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 2, L: 8 } }
        ],
        options: [
            { n: "Sustituir armaduras ligeras por Armaduras Pesadas", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },
    "Yelmos Plateados": {
        faction: "aelf",
        foc: "Core",
        points: 19,
        min: 5,
        max: 15,
        equipo: "Arma de mano, Lanza de caballería y Armadura pesada y Escudo",
        reglasEspeciales: "Valor familiar",
        perfiles: [
            { nombre: "Yelmos plateados", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 2, L: 8 } },
            { nombre: "Corcel élfico", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 6 } }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },

    // === SPECIAL ===
    "Maestros de la Espada de Hoeth": {
        faction: "aelf",
        foc: "Special",
        points: 15,
        min: 10,
        max: 25,
        equipo: "Armadura pesada y Espada de la Torre Blanca.",
        reglasEspeciales: "Destreza marcial, Valor familiar, Inmunes a miedo, Estilos de combate",
        perfiles: [
            { nombre: "Maestro de la Espada de Hoeth", stats: { M: 5, HA: 6, HP: 4, F: 3, R: 3, H: 1, I: 6, A: 2, L: 8 } },
            { nombre: "Oficial", stats: { M: 5, HA: 6, HP: 4, F: 3, R: 3, H: 1, I: 6, A: 3, L: 8 } }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50,
        champItems: 25
    },
    "Leones Blancos de Cracia": {
        faction: "aelf",
        foc: "Special",
        points: 15,
        min: 10,
        max: 25,
        equipo: "Armadura pesada, arma a dos manos, Capa de León.",
        reglasEspeciales: "Valor familiar, Tozudez, Inmunes a Psicología, Capa de León",
        perfiles: [
            { nombre: "León Blanco de Cracia", stats: { M: 5, HA: 5, HP: 4, F: 4, R: 3, H: 1, I: 5, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 5, HA: 5, HP: 4, F: 4, R: 3, H: 1, I: 5, A: 2, L: 8 } }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50,
        champItems: 25
    },
    "Guardia del Fénix": {
        faction: "aelf",
        foc: "Special",
        points: 14,
        min: 10,
        max: 25,
        equipo: "Armadura pesada, alabarda.",
        reglasEspeciales: "Valor familiar, Inmunes a terror y pánico, Miedo, Bendición de Asuryan (TSE 4+)",
        perfiles: [
            { nombre: "Guarda del Fénix", stats: { M: 5, HA: 5, HP: 4, F: 3, R: 3, H: 1, I: 6, A: 1, L: 9 } },
            { nombre: "Oficial", stats: { M: 5, HA: 5, HP: 4, F: 3, R: 3, H: 1, I: 6, A: 3, L: 9 } }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50,
        champItems: 25
    },
    "Guerreros Sombríos": {
        faction: "aelf",
        foc: "Special",
        points: 14,
        min: 5,
        max: 15,
        equipo: "Armadura ligera, arma de mano, arco élfico.",
        reglasEspeciales: "Valor familiar, Odio (elfos oscuros), Hostigadores, Exploradores",
        perfiles: [
            { nombre: "Guerrero Sombrío", stats: { M: 5, HA: 5, HP: 5, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 5, HA: 5, HP: 5, F: 3, R: 3, H: 1, I: 5, A: 2, L: 8 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 } },
        champItems: 25
    },
    "Carro de Tiranoc": {
        faction: "aelf",
        foc: "Special",
        points: 70,
        min: 1,
        max: 2,
        equipo: "Los elfos llevan armas de mano, lanzas y arcos élficos.",
        reglasEspeciales: "Tirada de salvación por armadura 5+, Caballería Rápida, Valor Familiar",
        perfiles: [
            { nombre: "Carro de Tiranoc", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 4, H: 3, I: "-", A: "-", L: "-" } },
            { nombre: "Aurigas elfos (2)", stats: { M: "-", HA: 4, HP: 4, F: 3, R: "-", H: "-", I: 5, A: 1, L: 8 } },
            { nombre: "Corcel élfico (2)", stats: { M: 9, HA: 3, HP: 0, F: 4, R: "-", H: "-", I: 3, A: 1, L: 6 } }
        ],
        options: [
            { n: "Cuchillas", p: 5, costType: "flat" }
        ]
    },
    "Lanzavirotes de Repetición": {
        faction: "aelf",
        foc: "Special",
        points: 60,
        min: 1,
        max: 1,
        equipo: "La dotación va equipada con arma de mano y armadura ligera.",
        reglasEspeciales: "Valor Familiar",
        perfiles: [
            { nombre: "Lanzavirotes", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: "-", I: "-", A: "-", L: "-" } },
            { nombre: "Dotación de Guardia del Mar (2)", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } }
        ]
    },

    // === RARE ===
    "Príncipes Dragoneros de Caledor": {
        faction: "aelf",
        foc: "Rare",
        points: 34,
        min: 5,
        max: 15,
        equipo: "Filo de Dragón, Lanza de caballería, escudo y Armadura de Dragón.",
        reglasEspeciales: "Valor familiar, Immune a Psicología, Filo de Dragón",
        perfiles: [
            { nombre: "Príncipe Dragonero de Caledor", stats: { M: 5, HA: 6, HP: 4, F: 4, R: 3, H: 1, I: 6, A: 2, L: 9 } },
            { nombre: "Oficial", stats: { M: 5, HA: 6, HP: 4, F: 4, R: 3, H: 1, I: 6, A: 3, L: 9 } },
            { nombre: "Corcel élfico", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 6 } }
        ],
        command: { c: { n: "Oficial", p: 8 }, s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } },
        magicBanner: 999,
        champItems: 25
    },
    "Águilas Gigantes de las Anulii": {
        faction: "aelf",
        foc: "Rare",
        points: 40,
        min: 1,
        max: 4,
        equipo: "Garras y pico (se considera arma de mano)",
        reglasEspeciales: "Volar, Miedo, Hostigadoras y Carga devastadora",
        perfiles: [
            { nombre: "Águila Gigante", stats: { M: 2, HA: 5, HP: 0, F: 5, R: 4, H: 3, I: 4, A: 2, L: 8 } },
            { nombre: "Gran Águila", stats: { M: 2, HA: 5, HP: 0, F: 5, R: 4, H: 3, I: 4, A: 3, L: 8 } }
        ],
        command: { c: { n: "Gran Águila", p: 5 } }
    },
    "Carro de Leones de Cracia": {
        faction: "aelf",
        foc: "Rare",
        points: 115,
        min: 1,
        max: 1,
        equipo: "Los elfos llevan arma a dos manos.",
        reglasEspeciales: "Tirada de salvación por armadura 4+ (3+ contra proyectiles), Tozudez, causa Miedo, Valor Familiar",
        perfiles: [
            { nombre: "Carro de Leones de Cracia", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 5, H: 4, I: "-", A: "-", L: "-" } },
            { nombre: "Aurigas (2)", stats: { M: "-", HA: 5, HP: 4, F: 4, R: "-", H: "-", I: 5, A: 1, L: 8 } },
            { nombre: "Leones (2)", stats: { M: 8, HA: 5, HP: 0, F: 5, R: "-", H: "-", I: 3, A: 2, L: 6 } }
        ],
        options: [
            { n: "Cuchillas", p: 5, costType: "flat" }
        ]
    },
    "Guardia de Hermanas de Avelorn": {
        faction: "aelf",
        foc: "Rare",
        warning: "0-1",
        points: 17,
        min: 5,
        max: 15,
        equipo: "Arma de mano, Armadura pesada y Arco de Averlorn.",
        reglasEspeciales: "Valor familiar, Inmunes a Psicología, Destreza marcial",
        perfiles: [
            { nombre: "Hermana", stats: { M: 5, HA: 5, HP: 5, F: 3, R: 3, H: 1, I: 6, A: 2, L: 9 } },
            { nombre: "Oficial", stats: { M: 5, HA: 5, HP: 5, F: 3, R: 3, H: 1, I: 6, A: 3, L: 9 } }
        ],
        options: [
            { n: "Lanza", p: 2 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50,
        champItems: 25
    },

    // === LORDS ===
    "Príncipe Alto Elfo": {
        faction: "aelf",
        foc: "Lord",
        points: 120,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Valor familiar, Destreza marcial",
        perfiles: [
            { nombre: "Príncipe Alto elfo", stats: { M: 5, HA: 7, HP: 7, F: 4, R: 3, H: 3, I: 8, A: 4, L: 10 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 6 },
            { n: "Arma de mano adicional", p: 4 },
            { n: "Lanza", p: 4 },
            { n: "Lanza de caballería", p: 6 },
            { n: "Alabarda", p: 6 },
            { n: "Arco largo élfico", p: 7 },
            { n: "Sustituir armadura ligera por Armadura pesada", p: 4 },
            { n: "Escudo", p: 3 }
        ],
        mounts: ["Corcel élfico con barda de Ithilmar", "Carro de Tiranoc", "Carro de Leones", "Águila gigante", "Pegaso", "Grifo", "Dragón Solar", "Dragón Lunar", "Dragón Estelar"],
        maxMagicItems: 3,
        maxRelics: 1,
        maxSkills: { limit: 1, type: 'count' }
    },
    "Archimago Alto Elfo": {
        faction: "aelf",
        foc: "Lord",
        points: 165,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Valor familiar",
        perfiles: [
            { nombre: "Archimago", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 3, I: 6, A: 1, L: 9 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 4 },
            { n: "Lanza", p: 3 },
            { n: "Arma de mano adicional", p: 2 },
            { n: "Arco élfico", p: 3 },
            { n: "Nivel de magia 4", p: 35 }
        ],
        mounts: ["Corcel élfico con barda de Ithilmar", "Carro de Tiranoc", "Águila gigante", "Pegaso", "Dragón Solar", "Dragón Lunar"],
        maxMagicItems: 3,
        maxRelics: 1,
        maxSkills: { limit: 1, type: 'count' }
    },
    "Señor del Conocimiento": {
        faction: "aelf",
        foc: "Lord",
        points: 205,
        min: 1,
        max: 1,
        equipo: "Espada de la Torre Blanca, Armadura pesada.",
        reglasEspeciales: "Valor familiar, Mago guerrero",
        perfiles: [
            { nombre: "Señor del Conocimiento", stats: { M: 5, HA: 7, HP: 4, F: 4, R: 3, H: 3, I: 7, A: 3, L: 10 } }
        ],
        maxMagicItems: 3,
        maxRelics: 1,
        maxSkills: { limit: 1, type: 'count' }
    },

    // === HEROES ===
    "Noble Alto Elfo": {
        faction: "aelf",
        foc: "Hero",
        points: 70,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Valor familiar, Destreza marcial",
        perfiles: [
            { nombre: "Noble Alto elfo", stats: { M: 5, HA: 6, HP: 6, F: 4, R: 3, H: 2, I: 7, A: 3, L: 9 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 4 },
            { n: "Arma de mano adicional", p: 2 },
            { n: "Lanza", p: 2 },
            { n: "Lanza de caballería", p: 4 },
            { n: "Alabarda", p: 4 },
            { n: "Arco largo élfico", p: 6 },
            { n: "Sustituir armadura ligera por Armadura pesada", p: 3 },
            { n: "Escudo", p: 2 }
        ],
        mounts: ["Corcel élfico con barda de Ithilmar", "Carro de Tiranoc", "Carro de Leones", "Águila gigante", "Pegaso", "Grifo"],
        maxMagicItems: 2,
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 }
    },
    "Mago Alto Elfo": {
        faction: "aelf",
        foc: "Hero",
        points: 70,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Valor Familiar",
        perfiles: [
            { nombre: "Mago alto elfo", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 2, I: 5, A: 1, L: 8 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 3 },
            { n: "Lanza", p: 2 },
            { n: "Arma de mano adicional", p: 1 },
            { n: "Arco élfico", p: 3 },
            { n: "Nivel de magia 2", p: 35 }
        ],
        mounts: ["Corcel élfico con barda de Ithilmar", "Carro de Tiranoc", "Águila gigante", "Pegaso"],
        maxMagicItems: 2,
        maxSkills: { limit: 1, type: 'count' }
    },
    "Ungido de Asuryan": {
        faction: "aelf",
        foc: "Hero",
        warning: "Tan solo puedes incluir un Ungido de Asuryan por cada unidad de Guardia del Fénix que incluyas en tu ejército.",
        points: 105,
        min: 1,
        max: 1,
        equipo: "Arma de mano, alabarda y armadura pesada",
        reglasEspeciales: "Valor familiar, Inmunes a Psicología, Miedo, Bendición de Asuryan (TSE 4+)",
        perfiles: [
            { nombre: "Ungido de Asuryan", stats: { M: 5, HA: 6, HP: 4, F: 4, R: 3, H: 2, I: 7, A: 3, L: 10 } }
        ],
        maxMagicItems: 2
    },
    "Doncella de Avelorn": {
        faction: "aelf",
        foc: "Hero",
        points: 70,
        min: 1,
        max: 1,
        equipo: "Arma de mano, armadura pesada, Arco de Averlorn.",
        reglasEspeciales: "Valor familiar, Destreza Marcial",
        perfiles: [
            { nombre: "Doncella de Avelorn", stats: { M: 5, HA: 5, HP: 8, F: 4, R: 3, H: 2, I: 7, A: 2, L: 9 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 2 }
        ],
        maxMagicItems: 2,
        maxSkills: { limit: 1, type: 'count' }
    },
    "Mago Dragón": {
        faction: "aelf",
        foc: "Hero",
        points: 260,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Valor familiar, Volar, Immune a fuego, piel escamosa (4+), arma de aliento, Vínculo del dragón",
        perfiles: [
            { nombre: "Mago Dragón", stats: { M: 5, HA: 4, HP: 4, F: 3, R: "-", H: "-", I: 5, A: 2, L: 8 } },
            { nombre: "Dragón Solar", stats: { M: 6, HA: 5, HP: 0, F: 6, R: 5, H: 5, I: 3, A: 5, L: 8 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 3 },
            { n: "Lanza", p: 2 },
            { n: "Arma de mano adicional", p: 1 },
            { n: "Arco élfico", p: 3 },
            { n: "Nivel de magia 2", p: 35 }
        ],
        maxMagicItems: 2
    }
};

const mountsDB_aelf = {
    "Corcel élfico": { 
        faction: "aelf", 
        points: 0, 
        perfiles: [ { nombre: "Corcel élfico", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 6 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo del jinete a Caballería." 
    },
    "Corcel élfico con barda de Ithilmar": { 
        faction: "aelf", 
        points: 18, 
        perfiles: [ { nombre: "Corcel élfico con barda", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 6 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo del jinete a Caballería. Barda (+1 TSA)." 
    },
    "Águila gigante": { 
        faction: "aelf", 
        points: 50, 
        perfiles: [ { nombre: "Águila Gigante", stats: { M: 2, HA: 5, HP: 0, F: 5, R: 4, H: 3, I: 4, A: 2, L: 8 } } ], 
        reglasEspeciales: "Bestia Monstruosa. Cambia el tipo del jinete a Caballería Monstruosa. Volar, causa Miedo." 
    },
    "Pegaso": { 
        faction: "aelf", 
        points: 50, 
        perfiles: [ { nombre: "Pegaso", stats: { M: 8, HA: 4, HP: 0, F: 4, R: 4, H: 3, I: 4, A: 2, L: 6 } } ], 
        reglasEspeciales: "Bestia Monstruosa. Cambia el tipo del jinete a Caballería Monstruosa. Volar." 
    },
    "Grifo": { 
        faction: "aelf", 
        points: 150, 
        perfiles: [ { nombre: "Grifo", stats: { M: 6, HA: 5, HP: 0, F: 6, R: 5, H: 5, I: 4, A: 4, L: 7 } } ], 
        reglasEspeciales: "Monstruo. Volar." 
    },
    "Dragón Solar": { 
        faction: "aelf", 
        points: 190, 
        perfiles: [ { nombre: "Dragón Solar", stats: { M: 6, HA: 5, HP: 0, F: 6, R: 5, H: 5, I: 3, A: 5, L: 8 } } ], 
        reglasEspeciales: "Monstruo. Volar, Piel Escamosa (4+), Immune a fuego, Arma de aliento (F3, Ataques solo flamígeros)." 
    },
    "Dragón Lunar": { 
        faction: "aelf", 
        points: 250, 
        perfiles: [ { nombre: "Dragón Lunar", stats: { M: 6, HA: 6, HP: 0, F: 6, R: 6, H: 6, I: 2, A: 6, L: 9 } } ], 
        reglasEspeciales: "Monstruo. Volar, Piel Escamosa (3+), Immune a fuego, Arma de aliento (F4, Ataques solo flamígeros)." 
    },
    "Dragón Estelar": { 
        faction: "aelf", 
        points: 350, 
        perfiles: [ { nombre: "Dragón Estelar", stats: { M: 6, HA: 7, HP: 0, F: 7, R: 7, H: 7, I: 1, A: 7, L: 10 } } ], 
        reglasEspeciales: "Monstruo. Volar, Piel Escamosa (2+), Immune a fuego, Arma de aliento (F5, Ataques solo flamígeros)." 
    },
    "Carro de Tiranoc": { 
        faction: "aelf", 
        points: 50, 
        perfiles: [
            { nombre: "Carro de Tiranoc", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 4, H: 3, I: "-", A: "-", L: "-" } },
            { nombre: "Auriga elfo (1)", stats: { M: "-", HA: 4, HP: 4, F: 3, R: "-", H: "-", I: 5, A: 1, L: 8 } },
            { nombre: "Corcel élfico (2)", stats: { M: 9, HA: 3, HP: 0, F: 4, R: "-", H: "-", I: 3, A: 1, L: 6 } }
        ],
        reglasEspeciales: "Carro. Tirada de salvación por armadura 5+, Caballería Rápida, Valor Familiar." 
    },
    "Carro de Leones": { 
        faction: "aelf", 
        points: 100, 
        perfiles: [
            { nombre: "Carro de Leones de Cracia", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 5, H: 4, I: "-", A: "-", L: "-" } },
            { nombre: "Auriga (1)", stats: { M: "-", HA: 5, HP: 4, F: 4, R: "-", H: "-", I: 5, A: 1, L: 8 } },
            { nombre: "Leones (2)", stats: { M: 8, HA: 5, HP: 0, F: 5, R: "-", H: "-", I: 3, A: 2, L: 6 } }
        ],
        reglasEspeciales: "Carro. Tirada de salvación por armadura 4+ (3+ contra proyectiles), Tozudez, causa Miedo, Valor Familiar." 
    }
};

const armySkillsDB_aelf = {
    // Sendas del Guerrero
    "Señor de la Espada": { points: 25, faction: "aelf", type: "Senda del Guerrero", summary: "Equipado con Espada de la Torre Blanca. Golpe Letal. No montura." },
    "Nobleza de Caledor": { points: 5, faction: "aelf", type: "Senda del Guerrero", summary: "Equipado con Armadura de Dragón. Orgullo Marcial." },
    "Guardia del León": { points: 35, faction: "aelf", type: "Senda del Guerrero", summary: "Equipado con Capa de León. Tozudez. Sólo Carro de leones o a pie." },
    "Gran Estratega": { points: 25, faction: "aelf", type: "Senda del Guerrero", summary: "Sólo general. Redesplegar 1 unidad tras despliegue." },
    "Ojo de Águila": { points: 20, faction: "aelf", type: "Senda del Guerrero", summary: "Francotirador. No arco mágico." },
    "Guerrero de Nagarythe": { points: 20, faction: "aelf", type: "Senda del Guerrero", summary: "Explorador y Veloz (portador y Guerreros sombríos). No montura." },
    
    // Sendas Naturales
    "Puro de Corazón": { points: 15, faction: "aelf", type: "Senda Natural", summary: "Immune a psicología, RM(1)." },
    "Domador de Dragones": { points: 10, faction: "aelf", type: "Senda Natural", summary: "Dragón gana Odio(todos). No tabla Reacción Monstruos si muere jinete." },
    "Señor de las Brumas": { points: 30, faction: "aelf", type: "Senda Natural", summary: "Esquivar (5+). No montura o armadura mejor que Ligera." },
    
    // Sendas del Conocimiento
    "Mago Vidente": { points: 35, faction: "aelf", type: "Senda del Conocimiento", summary: "Sólo hechiceros. Señor del Saber (elegir)." },
    "Canalizador de Magia": { points: 15, faction: "aelf", type: "Senda del Conocimiento", summary: "Sólo hechiceros. Canalizar 4+." },
    "Destreza de Saphery": { points: 20, faction: "aelf", type: "Senda del Conocimiento", summary: "Sólo hechiceros. +1 dispersar." },
    "Maestro Arcano": { points: 25, faction: "aelf", type: "Senda del Conocimiento", summary: "Sólo hechiceros. +1D dispersión por fase." },
    "Forjador arcano": { points: 5, faction: "aelf", type: "Senda del Conocimiento", summary: "Sólo Archimagos. 2 artefactos arcanos." }
};

const magicItemsDB_aelf = {
    "Arma Mágica": {
        "Hojas de Luz Divina": { points: 60, faction: "aelf", relic: true, summary: "Armas Emparejadas. Ataques con HA en lugar de F." },
        "Espada de Acero Marino": { points: 60, faction: "aelf", relic: true, summary: "AM. +1F, niega TSA." },
        "Colmillo de Draugnir": { points: 50, faction: "aelf", relic: true, summary: "AM. Impacta 2+, -2 TSA." },
        "Arco del Navegante": { points: 50, faction: "aelf", relic: false, summary: "Arco largo. F6, niega TSA, atraviesa filas." },
        "Espada de Hoeth": { points: 45, faction: "aelf", relic: false, summary: "Espada Torre Blanca. Sólo Infantería. Impacta automático." },
        "Arco de Ellyrion": { points: 40, faction: "aelf", relic: false, summary: "Arco Élfico. F5, Disparos Múltiples(3)." },
        "Lanza Estelar": { points: 30, faction: "aelf", relic: false, summary: "Lanza Cab. Heridas Múltiples(1D3) al cargar, niega TSA." },
        "Degolladora de Bestias": { points: 25, faction: "aelf", relic: false, summary: "A2M. Golpe Letal, Poder Penetración." },
        "Azote del Mal": { points: 15, faction: "aelf", relic: false, summary: "AM. Repetir herir vs Destrucción." },
        "Ladrona de Esencia Arcana": { points: 10, faction: "aelf", relic: false, summary: "Sólo hechiceros. A2M. +1F, +1D canalizar por herida." }
    },
    "Armadura Mágica": {
        "Armadura del Padre Dragón": { points: 50, faction: "aelf", relic: true, summary: "Armadura Dragón. TSE 4+. 1x batalla Ataque Aliento F4." },
        "Armadura de Protección": { points: 45, faction: "aelf", relic: true, summary: "Armadura Ligera. TSE 4+." },
        "Armadura de Caledor": { points: 35, faction: "aelf", relic: false, summary: "Sólo Caledor. Armadura Dragón. TSA 1+, repetir TSA falladas." },
        "Escudo Áureo": { points: 25, faction: "aelf", relic: false, summary: "Escudo. -1 impactar vs portador, +1 TSA." },
        "Armadura Estelar": { points: 25, faction: "aelf", relic: false, summary: "Armadura Ligera. Sólo a pie. Esquivar (5+)." },
        "Yelmo de la Fortuna": { points: 25, faction: "aelf", relic: false, summary: "Yelmo (+1 TSA). Repetir TSA falladas." },
        "Máscara del Señor del Mar": { points: 15, faction: "aelf", relic: false, summary: "Yelmo (+1 TSA). Portador y unidad: Cruzar(agua)." }
    },
    "Talismán": {
        "Brazales de Defensa": { points: 50, faction: "aelf", relic: true, summary: "TSE 4+. Repetir TSA falladas." },
        "Manto del Señor de los Saberes": { points: 40, faction: "aelf", relic: true, summary: "Dispersar hechizos enemigos 2+." },
        "Diadema de Yvresse": { points: 60, faction: "aelf", relic: false, summary: "Nvl2 magia. Hechicero (Alta Magia o 1 saber básico)." },
        "Talismán de Shapery": { points: 40, faction: "aelf", relic: false, summary: "RM(2), Esquivar (5+)." },
        "Incienso Sagrado": { points: 20, faction: "aelf", relic: false, summary: "-1 impactar vs portador." },
        "La Llama del Fenix": { points: 20, faction: "aelf", relic: false, summary: "Sólo Bendición Asuryan. TSE 3+." }
    },
    "Artefacto Arcano": {
        "Rubí Crepuscular": { points: 50, faction: "aelf", relic: true, summary: "+1/2 turno (redondeando arriba) a lanzar." },
        "Cristal de los Annulii": { points: 50, faction: "aelf", relic: false, summary: "-1D energía enemigo, +1D dispersión propio." },
        "Sello de Asuryan": { points: 40, faction: "aelf", relic: false, summary: "1 uso. Dispersar automático hechizo + 1D3 F5 al lanzador." },
        "Vara de Plata": { points: 35, faction: "aelf", relic: false, summary: "+1 hechizo, ignora 1ª Disfunción." },
        "Báculo del Árbol Estelar": { points: 35, faction: "aelf", relic: false, summary: "+1 lanzar, +1 dispersar." },
        "Cetro de la Solidez": { points: 20, faction: "aelf", relic: false, summary: "1 uso. Ignora 1ª Disfunción, +1 Canalizar." }
    },
    "Objeto Hechizado": {
        "Piedra de la Anulación": { points: 60, faction: "aelf", relic: true, summary: "6\": ningún hechicero lanzar/dispersar, objetos mágicos mundanos." },
        "Gema de la Arrogancia": { points: 30, faction: "aelf", relic: false, summary: "Portador y unidad: Impasibles." },
        "Gema Radiante de Hoeth": { points: 25, faction: "aelf", relic: false, summary: "Portahechizos(5). 1D6 elegir viento, sin saber/identificativo." },
        "Anillo de la Ira": { points: 25, faction: "aelf", relic: false, summary: "Portahechizos(3). Hechizo Ira de Khaine." },
        "Amuleto del Fuego Purificador": { points: 20, faction: "aelf", relic: false, summary: "Portador y unidad: RM(2), RM(3) vs Fuego/Tzeentch." },
        "El libro del Valor y la Gloria": { points: 20, faction: "aelf", relic: false, summary: "+1L (máx 10)." },
        "Capa de las Barbas": { points: 15, faction: "aelf", relic: false, summary: "Enanos: Odio vs portador. Portador repetir impactar vs Enanos." }
    },
    "Estandarte Mágico": {
        "Estandarte del Dragón": { points: 60, faction: "aelf", relic: true, summary: "Unidad inmune a hechizos." },
        "Pabellón del Rey Fenix": { points: 50, faction: "aelf", relic: true, summary: "Unidad: Tozudez, Inmunes a Psicología." },
        "Estandarte de la Serenidad": { points: 40, faction: "aelf", relic: false, summary: "Enemigos contacto: pierden Furia Asesina y Odio. Unidad: Sangre Fría." },
        "Estandarte de la Reina Eterna": { points: 40, faction: "aelf", relic: false, summary: "Portahechizos(4). Escudo de Saphery (sólo propia unidad)." },
        "Estandarte de Saphery": { points: 35, faction: "aelf", relic: false, summary: "+1D energía o dispersión por fase." },
        "Estandarte del León": { points: 25, faction: "aelf", relic: false, summary: "Unidad: Veloz, +1M." },
        "Estandarte de Ellyrion": { points: 25, faction: "aelf", relic: false, summary: "Unidad: Cruzar(todos terrenos excepto edificios/intransitable)." }
    }
};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Altos Elfos",
    FACTION_ID: "aelf",
    FOC_CONFIG: { 
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_aelf,
    mountsDB: mountsDB_aelf,
    magicItemsDB: magicItemsDB_aelf,
    armySkillsDB: armySkillsDB_aelf,
    specialProfilesDB: {},
    armySkillsLabel: "Sendas de los Altos Elfos",
};
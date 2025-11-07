// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: CONDES VAMPIROS - NECRARCA ---
// ===================================================================================
// Last Updated: 2025-10-12 - v4.1
import { commonMagicItemsDB } from '../comun.js';

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_cvnec = {
    // === CORE ===
    "Esqueletos": {
        faction: "cvnec",
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
        faction: "cvnec",
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
    "Necrófagos": {
        faction: "cvnec",
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
        command: { c: { n: "Oficial", p: 6 } }
    },
    "Hueste Espectral": {
        faction: "cvnec",
        foc: "Core",
        warning: "Sólo puedes incluir una unidad de hueste espectral por cada unidad de esqueletos o zombis de tu ejército.",
        points: 40,
        min: 1,
        max: 6,
        equipo: "Arma de mano.",
        reglasEspeciales: "No muertos, Etéreos, Ataques mágicos, Legión espectral.",
        perfiles: [
            { nombre: "Hueste espectral", stats: { M: 6, HA: 2, HP: 0, F: 3, R: 3, H: 4, I: 2, A: 4, L: 5 } }
        ]
    },
    "Lobos Siniestros": {
        faction: "cvnec",
        foc: "Core",
        points: 7,
        min: 5,
        max: 15,
        equipo: "Garras y dientes (Arma de mano).",
        reglasEspeciales: "No muertos, Caballería rápida, Jaurías de muerte.",
        perfiles: [
            { nombre: "Lobo siniestro", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 4 } },
            { nombre: "Gran lobo siniestro", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 2, L: 4 } }
        ],
        options: [
            { n: "Lobos espectrales (una única unidad)", p: 9, summary: "Regla especial Etéreos" }
        ],
        command: { c: { n: "Gran lobo siniestro", p: 5 } }
    },

    // === SPECIAL ===
    "Tumularios": {
        faction: "cvnec",
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
            { n: "Alabarda funeraria", p: 2 },
            { n: "Arma a dos manos funeraria", p: 1 },
            { n: "Escudo", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50
    },
    "Caballería Tumularia": {
        faction: "cvnec",
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
            { n: "Arma a dos manos funeraria", p: 2 },
            { n: "Escudo", p: 1 },
            { n: "Barda para corceles", p: 2 }
        ],
        command: { c: { n: "Oficial", p: 8 }, s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } },
        magicBanner: 50
    },
    "Murciélagos Vampiro": {
        faction: "cvnec",
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
    "Espíritus": {
        faction: "cvnec",
        foc: "Special",
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
    "Espectros Condenadores": {
        faction: "cvnec",
        foc: "Special",
        points: 36,
        min: 5,
        max: 10,
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
        command: { c: { n: "Oficial", p: 8 } }
    },

    // === RARE ===
    "Golems de Carne": {
        faction: "cvnec",
        foc: "Rare",
        points: 45,
        min: 3,
        max: 6,
        equipo: "Arma de mano.",
        reglasEspeciales: "No muertos, Regeneración (5+).",
        perfiles: [
            { nombre: "Golem de carne", stats: { M: 5, HA: 2, HP: 0, F: 5, R: 5, H: 4, I: 0, A: 3, L: 4 } }
        ],
        command: { s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } }
    },
    "Engendro del Terror": {
        faction: "cvnec",
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
    "Gigante de Hueso": {
        faction: "cvnec",
        foc: "Rare",
        points: 175,
        min: 1,
        max: 1,
        equipo: "Dos Armas de mano y Armadura pesada.",
        reglasEspeciales: "No muerto, Carga devastadora, Resistencia sobrenatural, Desgarrar",
        perfiles: [
            { nombre: "Gigante de hueso", stats: { M: 6, HA: 3, HP: 0, F: 6, R: 6, H: 6, I: 1, A: 4, L: 8 } }
        ]
    },
    "Ingenio Mortis": {
        faction: "cvnec",
        foc: "Rare",
        warning: "0-1",
        points: 200,
        min: 1,
        max: 1,
        equipo: "",
        reglasEspeciales: "No muerto, Terror, Flotar, Etéreo, Ataques aleatorios, Foco de Poder nigromántico, Energía Impia, Inmenso Tamaño",
        perfiles: [
            { nombre: "Ingenio Mortis", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 5, H: 5, I: "-", A: "-", L: "-" } },
            { nombre: "Horda de espíritus", stats: { M: 8, HA: 3, HP: 0, F: 3, R: "-", H: "-", I: 3, A: "2D6+2", L: 4 } }
        ]
    },

    // === LORDS ===
    "Señor de Vampiros Necrarca": {
        faction: "cvnec",
        foc: "Lord",
        points: 255,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "No muerto, Vampiro",
        perfiles: [
            { nombre: "Señor de Vampiros Necrarca", stats: { M: 6, HA: 5, HP: 3, F: 5, R: 5, H: 3, I: 6, A: 4, L: 9 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 4 }
        ],
        mounts: ["Pesadilla con barda", "Dragón Zombi", "Ingenio Mortis"],
        maxMagicItems: 2,
        maxRelics: 1,
        maxSkills: { limit: 2, type: 'count' },
        magic: { level: 4, lores: ["Muerte", "Sombras", "Magia Oscura", "Nigromancia"] }
    },
    "Rey Tumulario": {
        faction: "cvnec",
        foc: "Lord",
        points: 165,
        min: 1,
        max: 1,
        equipo: "Arma de mano funeraria y Armadura pesada.",
        reglasEspeciales: "No muerto, Armas funerarias",
        perfiles: [
            { nombre: "Rey Tumulario", stats: { M: 4, HA: 5, HP: 3, F: 5, R: 5, H: 4, I: 5, A: 4, L: 8 } }
        ],
        options: [
            { n: "Arma a dos manos funeraria", p: 5 },
            { n: "Alabarda funeraria", p: 5 },
            { n: "Arma de mano funeraria adicional", p: 3 },
            { n: "Mayal funerario", p: 4 },
            { n: "Lanza de caballería funeraria", p: 6 },
            { n: "Escudo", p: 3 }
        ],
        mounts: ["Corcel esquelético con barda", "Pesadilla Alada", "Dragón Zombi"],
        maxMagicItems: 2,
        maxRelics: 1
    },

    // === HEROES ===
    "Conde Vampiro Necrarca": {
        faction: "cvnec",
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
            { n: "Arma de mano adicional", p: 3 }
        ],
        mounts: ["Pesadilla con barda"],
        maxMagicItems: 2,
        maxSkills: { limit: 1, type: 'count' },
        magic: { level: 2, upgrade: { level: 3, cost: 35 }, lores: ["Muerte", "Sombras", "Magia Oscura", "Nigromancia"] }
    },
    "Señor Tumulario": {
        faction: "cvnec",
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
        maxMagicItems: 2
    },
    "Nigromante": {
        faction: "cvnec",
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
        maxMagicItems: 2,
        maxSkills: { limit: 1, type: 'count' },
        magic: { level: 1, lores: ["Nigromancia", "Magia Oscura", "Muerte", "Sombras"] }
    },
    "Espectro": {
        faction: "cvnec",
        foc: "Hero",
        points: 80,
        min: 1,
        max: 1,
        equipo: "Arma a dos manos",
        reglasEspeciales: "No muerto, Etéreo, Terror, Toque mortal",
        perfiles: [
            { nombre: "Espectro", stats: { M: 6, HA: 4, HP: 3, F: 3, R: 4, H: 3, I: 4, A: 4, L: 7 } }
        ],
        mounts: ["Corcel esquelético etéreo"],
        maxMagicItems: 1
    }
};

const mountsDB_cvnec = {
    "Corcel esquelético": { 
        faction: "cvnec", 
        points: 0, 
        perfiles: [ { nombre: "Corcel esquelético", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 3 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. No muerto." 
    },
    "Corcel esquelético con barda": { 
        faction: "cvnec", 
        points: 12, 
        perfiles: [ { nombre: "Corcel esquelético con barda", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 3 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. No muerto. Barda." 
    },
    "Corcel esquelético etéreo": { 
        faction: "cvnec", 
        points: 15, 
        perfiles: [ { nombre: "Corcel esquelético etéreo", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 3 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. Etéreo." 
    },
    "Pesadilla con barda": { 
        faction: "cvnec", 
        points: 15, 
        perfiles: [ { nombre: "Pesadilla con barda", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 3, A: 1, L: 6 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. No muerto, Vampiro" 
    },
    "Pesadilla Alada": { 
        faction: "cvnec", 
        points: 150, 
        perfiles: [ { nombre: "Pesadilla Alada", stats: { M: 6, HA: 3, HP: 0, F: 5, R: 5, H: 4, I: 2, A: 4, L: 5 } } ], 
        reglasEspeciales: "Monstruo. No muerto, Volar, Terror, Regeneración (4+)" 
    },
    "Dragón Zombi": { 
        faction: "cvnec", 
        points: 255, 
        perfiles: [ { nombre: "Dragón Zombi", stats: { M: 6, HA: 4, HP: 0, F: 6, R: 6, H: 6, I: 1, A: 5, L: 6 } } ], 
        reglasEspeciales: "Monstruo. No muerto, Volar, Piel escamosa (4+), Nube de moscas, Arma de aliento" 
    },
    "Ingenio Mortis": { 
        faction: "cvnec", 
        points: 200, 
        perfiles: [
            { nombre: "Ingenio Mortis", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 5, H: 5, I: "-", A: "-", L: "-" } },
            { nombre: "Horda de espíritus", stats: { M: 8, HA: 3, HP: 0, F: 3, R: "-", H: "-", I: 3, A: "2D6+2", L: 4 } }
        ],
        reglasEspeciales: "Carro. TSA 4+, No muerto, Terror, Flotar, Etéreo, Ataques aleatorios, Foco de Poder nigromántico, Energía Impia, Inmenso Tamaño" 
    }
};

const armySkillsDB_cvnec = {
    "Acólito": { points: 0, faction: "cvnec", type: "Poder Vampírico", summary: "+1D energía en fase de magia propia (solo Necrarca)" },
    "Maestro de la magia negra": { points: 10, faction: "cvnec", type: "Poder Vampírico", summary: "+2 canalizar" },
    "Señor de los muertos": { points: 10, faction: "cvnec", type: "Poder Vampírico", summary: "+1 por dado en Invocación Nehek/Animar muertos" },
    "Secretos nigrománticos": { points: 15, faction: "cvnec", type: "Poder Vampírico", summary: "Conoce hechizo adicional" },
    "Horror sobrenatural": { points: 20, faction: "cvnec", type: "Poder Vampírico", summary: "Causa Terror" },
    "Arcano nigromántico": { points: 25, faction: "cvnec", type: "Poder Vampírico", summary: "+1 lanzar hechizos" },
    "Vientos de Muerte": { points: 25, faction: "cvnec", type: "Poder Vampírico", summary: "+1D dispersión" },
    "Salvaguarda oscura": { points: 25, faction: "cvnec", type: "Poder Vampírico", summary: "Repetir tiradas disfunción mágica" },
    "Vitalidad impía": { points: 30, faction: "cvnec", type: "Poder Vampírico", summary: "+1 Herida" },
    "Astrología impía": { points: 40, faction: "cvnec", type: "Poder Vampírico", summary: "1 vez/turno repetir tirada + repetir 1D energía=1" },
    "Conocimientos arcanos": { points: 30, faction: "cvnec", type: "Poder Vampírico", summary: "Solo Señor. Señor Conocimiento (Nigromancia)" },
    "El despertar de los muertos": { points: 40, faction: "cvnec", type: "Poder Vampírico", summary: "Solo Señor. +2 por dado en Invocación Nehek/Animar muertos" },
    "Estirpe noble de Nehekhara": { points: 50, faction: "cvnec", type: "Poder Vampírico", summary: "Solo Señor. Repetir 1D energía al lanzar hechizo" }
};

const magicItemsDB_cvnec = {
    "Arma Mágica": {
        "Drenadora de sangre": { points: 45, faction: "cvnec", relic: false, summary: "AM. +1F. Recupera herida por herida causada" },
        "Lanza siniestra": { points: 30, faction: "cvnec", relic: false, summary: "Lanza caballería. Impacta automático al cargar" },
        "Espadón de energía maldita": { points: 30, faction: "cvnec", relic: false, summary: "A2M. +1D energía por herida a enemigo (no NoMuerto/Demonio)" },
        "Bastón de poder": { points: 25, faction: "cvnec", relic: false, summary: "AM. Guarda 1D energía/disp. +1F/I con dado guardado" },
        "Espada Negra": { points: 15, faction: "cvnec", relic: false, summary: "Solo infantería con esqueletos/zombis. AM funeraria. +1 esqueleto/zombi por herida" },
        "Segadora de almas": { points: 10, faction: "cvnec", relic: false, summary: "Solo Espectro con espíritus. A2M. +1 espíritu por Golpe Letal" }
    },
    "Armadura Mágica": {
        "Brazaletes de Plata": { points: 50, faction: "cvnec", relic: true, summary: "Hechiceros. Esquiva 4+" },
        "Armadura del Sudario": { points: 20, faction: "cvnec", relic: false, summary: "Solo Necrarca. Armadura placas. Enemigos pierden bonif. carga, I=1" },
        "Coraza cadavérica": { points: 15, faction: "cvnec", relic: false, summary: "Armadura placas. Inmune Golpe Letal" },
        "Armadura de huesos de quimera": { points: 15, faction: "cvnec", relic: false, summary: "Nigromantes. AP (TSA 4+). RM(1)" }
    },
    "Talismán": {
        "Capa de Oscuridad": { points: 50, faction: "cvnec", relic: true, summary: "Piel escamosa (4+), Regeneración (5+), -1 impactar" },
        "Gema de las Brumas": { points: 45, faction: "cvnec", relic: true, summary: "TSE 5+ vs proyectiles (portador y unidad)" },
        "Anillo de Necrarca": { points: 35, faction: "cvnec", relic: false, summary: "Solo vampiros. RM(2), Inmune Heridas Múltiples" },
        "Collar de Obsidiana": { points: 30, faction: "cvnec", relic: false, summary: "RM(3)" },
        "Brazales de oro negro": { points: 30, faction: "cvnec", relic: false, summary: "TSE 3+ vs proyectiles" },
        "Colgante de nieblas y sombras": { points: 25, faction: "cvnec", relic: false, summary: "Solo hechiceros. Etéreo. -1 impactar con armas mágicas" },
        "Corona de los Condenados": { points: 20, faction: "cvnec", relic: false, summary: "TSE 5+, Estupidez" }
    },
    "Artefacto Arcano": {
        "Ojo de Wsoran": { points: 25, faction: "cvnec", relic: true, summary: "Repetir tirada Vientos Magia (portador sufre 1 herida)" },
        "Dedo Siniestro": { points: 35, faction: "cvnec", relic: false, summary: "Portahechizos(4). Danza macabra (12\", no repetible)" },
        "Familiar necrótico": { points: 30, faction: "cvnec", relic: false, summary: "+1D invocación para Invocación Nehek/Animar Muertos" },
        "Grimorium Necronium": { points: 30, faction: "cvnec", relic: false, summary: "Solo vampiros. +1D invocación por Invocación Nehek/Animar muertos exitoso" },
        "Báculo Óseo": { points: 30, faction: "cvnec", relic: false, summary: "Revela objetos mágicos enemigos 12\". Repetir disfunciones" },
        "Daga del Sacrificio": { points: 15, faction: "cvnec", relic: false, summary: "Solo vampiros. Sacrifica 1D3 miniaturas para +1D energía en hechizo" },
        "Talismán negro": { points: 15, faction: "cvnec", relic: false, summary: "Guarda 1D energía/disp. +1 canalizar" }
    },
    "Objeto Hechizado": {
        "Yelmo de la percepción": { points: 50, faction: "cvnec", relic: true, summary: "No trabado: unidad NoMuertos 12\" usa HA portador" },
        "Colgante de Sangre": { points: 35, faction: "cvnec", relic: false, summary: "+1 recuperar heridas (vampiro) y +1 resultado combate si recupera" },
        "El Libro Maldito": { points: 30, faction: "cvnec", relic: false, summary: "Enemigos en contacto: -1 impactar. No afecta NoMuertos/Demonios" },
        "Relicario de Vashanesh": { points: 25, faction: "cvnec", relic: false, summary: "Portahechizos(5). Potenciación: repetir tiradas=1 para herir" },
        "Icono del Visir": { points: 20, faction: "cvnec", relic: false, summary: "-1 baja al perder combate" },
        "Icono del Vigor Mortis": { points: 15, faction: "cvnec", relic: false, summary: "+6\" Presencia Inspiradora y marcha del General" }
    },
    "Estandarte Mágico": {
        "Estandarte Real Necrarca": { points: 60, faction: "cvnec", relic: true, summary: "+1D3 energía/dispersion cada fase magia" },
        "Estandarte de los túmulos": { points: 45, faction: "cvnec", relic: false, summary: "Solo tumularios. +1 impactar CaC" },
        "Bandera del Conde": { points: 35, faction: "cvnec", relic: false, summary: "Chequeos desmoralización en lugar de bajas. Tozudos, Sangre fría" },
        "Pabellón de Templehof": { points: 25, faction: "cvnec", relic: false, summary: "Cruzar, RM(1)" },
        "Icono de Muerte": { points: 25, faction: "cvnec", relic: false, summary: "+1M, +1I" },
        "Estandarte de los lamentos": { points: 25, faction: "cvnec", relic: false, summary: "Chequeos Miedo: 3D6 descarta bajo" },
        "Estandarte de las pesadillas eternas": { points: 15, faction: "cvnec", relic: false, summary: "+4 por filas en resultado combate" }
    }
};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Condes Vampiros - Necrarca",
    FACTION_ID: "cvnec",
    FOC_CONFIG: { 
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_cvnec,
    mountsDB: mountsDB_cvnec,
    magicItemsDB: magicItemsDB_cvnec,
    armySkillsDB: armySkillsDB_cvnec,
    specialProfilesDB: {},
    armySkillsLabel: "Poderes Vampíricos",
};
// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: CONDES VAMPIROS - STRIGOI ---
// ===================================================================================
// Last Updated: 2025-10-26 - v4.0
import { commonMagicItemsDB } from '../comun.js'; // Assuming common items are shared

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_cvstr = {
    // === CORE ===
    "Necrófagos": {
        faction: "cvstr",
        foc: "Core",
        armyRequirement: "1+", // At least one unit required
        points: 7,
        min: 10, // 5 if hostigadores
        max: 30, // 20 if hostigadores
        equipo: "Arma de mano.",
        reglasEspeciales: "Miedo, Ataques envenenados, Carroñeros, ¡Están vivos!.",
        perfiles: [
            { nombre: "Necrófago", stats: { M: 5, HA: 3, HP: 0, F: 3, R: 4, H: 1, I: 3, A: 2, L: 6 } },
            { nombre: "Oficial necrófago", stats: { M: 5, HA: 3, HP: 0, F: 3, R: 4, H: 1, I: 3, A: 3, L: 6 } }
        ],
        options: [
            { n: "Convertir en Hostigadores", p: 0, summary: "Tamaño unidad 5-20, no pueden llevar estandarte.", exclusiveGroup: "formation" },
            { n: "Formación (Carga Devastadora)", p: 0, summary: "Tamaño unidad 10-30. Ganan +1F al cargar.", exclusiveGroup: "formation"} // Default assumed formation
        ],
        command: {
            c: { n: "Oficial", p: 6 },
            s: { n: "Portaestandarte", p: 6, restrictionText:"No si son Hostigadores" }, // Add restriction text
            m: { n: "Músico", p: 6 }
        },
        magicBanner: 25
    },
    "Esqueletos": {
        faction: "cvstr",
        foc: "Core",
        warning: "Sólo puedes incluir una unidad de esqueletos por cada unidad de necrófagos.",
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
            { n: "Sustituir armadura ligera por pesada", p: 2, restrictionText: "Hasta la mitad de las unidades de esqueletos." },
            { n: "Convertir en Tiradores Esqueleto", p: 2, summary: "Gana Arco, +1HP.", restrictionText: "Hasta la mitad de las unidades de esqueletos." },
            { n: "Sustituir arcos por Ballestas", p: 2, summary:"Sólo Tiradores." }
        ],
        command: { c: { n: "Oficial", p: 4 }, s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } },
        magicBanner: 25
    },
    "Necrofagos Infiltrados": {
        faction: "cvstr",
        foc: "Core",
        warning: "Sólo puedes incluir una unidad de infiltrados por cada unidad de necrófagos base.",
        points: 9,
        min: 5,
        max: 15,
        equipo: "Arma de mano.",
        reglasEspeciales: "Miedo, Ataques envenenados, Hostigadores, Carroñeros, ¡Están vivos!, Emboscada.",
        perfiles: [
            { nombre: "Necrófago Infiltrado", stats: { M: 5, HA: 3, HP: 0, F: 3, R: 4, H: 1, I: 3, A: 2, L: 6 } },
            { nombre: "Oficial necrófago", stats: { M: 5, HA: 3, HP: 0, F: 3, R: 4, H: 1, I: 3, A: 3, L: 6 } }
        ],
        command: { c: { n: "Oficial", p: 6 } }
    },
    "Necrofagos Devoradores": {
        faction: "cvstr",
        foc: "Core",
        warning: "Sólo puedes incluir una unidad de devoradores por cada unidad de necrófagos base.",
        points: 10,
        min: 5,
        max: 20,
        equipo: "Arma de mano.",
        reglasEspeciales: "Miedo, Ataques envenenados, Hostigadores, Carga devastadora, Furia asesina, Vanguardia, Carroñeros, ¡Están vivos!.",
        perfiles: [
            { nombre: "Necrófago Devorador", stats: { M: 5, HA: 3, HP: 0, F: 3, R: 4, H: 1, I: 3, A: 2, L: 6 } }, // H1 profile from PDF seems typo, assuming H1
            { nombre: "Oficial necrófago", stats: { M: 5, HA: 3, HP: 0, F: 3, R: 4, H: 1, I: 3, A: 3, L: 6 } }
        ],
        command: { c: { n: "Oficial", p: 6 }, m: { n: "Músico", p: 6 } }
    },
    "Bandadas de Murciélagos": {
        faction: "cvstr",
        foc: "Core",
        warning: "0-2",
        points: 16,
        min: 2,
        max: 6,
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "¡Están vivos!, Miedo, Flotar.",
        perfiles: [
            { nombre: "Peana de murciélagos", stats: { M: 1, HA: 3, HP: 0, F: 2, R: 2, H: 4, I: 4, A: 4, L: 3 } } // Treat as Swarm type
        ]
    },
    "Murciélagos Vampiro": {
        faction: "cvstr",
        foc: "Core",
        warning: "0-1",
        points: 25,
        min: 3,
        max: 6,
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "No muertos, Vampiros, Volar, Hostigadores.",
        perfiles: [
            { nombre: "Murciélago vampiro", stats: { M: 1, HA: 3, HP: 0, F: 4, R: 4, H: 2, I: 4, A: 2, L: 6 } } // Treat as Beast type
        ]
    },
    "Hueste Espectral": {
        faction: "cvstr",
        foc: "Core",
        warning: "0-1",
        points: 36,
        min: 1,
        max: 6,
        equipo: "Arma de mano.",
        reglasEspeciales: "No muertos, Etéreos, Ataques mágicos, Legión espectral.",
        perfiles: [
            { nombre: "Hueste espectral", stats: { M: 6, HA: 2, HP: 0, F: 3, R: 3, H: 4, I: 2, A: 4, L: 5 } } // Treat as Swarm type
        ]
    },

    // === SPECIAL ===
    "Striganos": {
        faction: "cvstr",
        foc: "Special",
        warning: "Solo puedes incluir una unidad de striganos por cada unidad de necrófagos.",
        points: 10,
        min: 10, // 5 if hostigadores
        max: 30, // 20 if hostigadores
        equipo: "Arma de mano.",
        reglasEspeciales: "Miedo, Ataques envenenados, Carroñeros, ¡Están vivos!.",
        perfiles: [
            { nombre: "Strigano", stats: { M: 5, HA: 4, HP: 0, F: 4, R: 4, H: 1, I: 3, A: 2, L: 7 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 0, F: 4, R: 4, H: 1, I: 3, A: 3, L: 7 } }
        ],
        options: [
             { n: "Convertir en Hostigadores", p: 0, summary: "Tamaño unidad 5-20.", exclusiveGroup: "formation" },
             { n: "Formación (Carga Devastadora)", p: 0, summary: "Tamaño unidad 10-30. Ganan +1F al cargar.", exclusiveGroup: "formation"}, // Default assumed formation
             { n: "Mejorar con Emboscada", p: 2, restrictionText: "Una única unidad por ejército."}
        ],
        command: { c: { n: "Oficial", p: 6 }, m: { n: "Músico", p: 6 } }
    },
    "Corte del Rey": {
        faction: "cvstr",
        foc: "Special",
        warning: "0-1",
        points: 40,
        min: 3,
        max: 6,
        equipo: "Arma de mano.",
        reglasEspeciales: "Vampiros, Furia Asesina, Esquiva (4+), Odio, hostigadores, carga devastadora, Ataques envenenados, Corte siniestra.",
        perfiles: [
            { nombre: "Cortesano strigoi", stats: { M: 6, HA: 4, HP: 2, F: 5, R: 4, H: 2, I: 4, A: 3, L: 8 } },
            { nombre: "Senescal Strigoi", stats: { M: 6, HA: 4, HP: 2, F: 5, R: 4, H: 2, I: 4, A: 4, L: 8 } }
        ],
        command: {
            c: { n: "Senescal Strigoi", p: 10 },
            s: { n: "Portaestandarte", p: 10 }
        },
        magicBanner: 50,
        champItems: 25, // Or 1 Vamp Power
        champSkills: { limit: 1, type: 'count', skillSource: 'Poderes Vampíricos Strigoi'} // Special limit
    },
    "Lobos Siniestros": {
        faction: "cvstr",
        foc: "Special",
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
    "Horrores de la Cripta": {
        faction: "cvstr",
        foc: "Special",
        points: 42,
        min: 3,
        max: 6,
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "No muertos, Ataques envenenados, Regeneración (5+).",
        perfiles: [
            { nombre: "Horror de la cripta", stats: { M: 6, HA: 3, HP: 0, F: 4, R: 5, H: 3, I: 2, A: 3, L: 7 } },
            { nombre: "Oficial", stats: { M: 6, HA: 3, HP: 0, F: 4, R: 5, H: 3, I: 2, A: 4, L: 7 } }
        ],
        options: [
            { n: "Armas de mano adicionales", p: 3 },
            { n: "Armas a dos manos", p: 5 }
        ],
        command: { c: { n: "Oficial", p: 10 } }
    },
    "Vargheist": {
        faction: "cvstr",
        foc: "Special",
        points: 60,
        min: 2,
        max: 5,
        equipo: "Garras Afiladas (Arma de mano con poder de penetración).",
        reglasEspeciales: "No muertos, Vampiros, Volar, Furia asesina, Hostigadores.",
        perfiles: [
            { nombre: "Vargheist", stats: { M: 6, HA: 4, HP: 0, F: 5, R: 4, H: 3, I: 4, A: 3, L: 7 } },
            { nombre: "Oficial", stats: { M: 6, HA: 4, HP: 0, F: 5, R: 4, H: 3, I: 4, A: 4, L: 8 } }
        ],
        command: { c: { n: "Oficial", p: 10 } }
    },
    "Varghulf": {
        faction: "cvstr",
        foc: "Special",
        points: 175,
        min: 1,
        max: 1,
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "No muerto, Vampiro, Volar, Regeneración (4+), Odio (todos los enemigos).",
        perfiles: [
            { nombre: "Varghulf", stats: { M: 8, HA: 5, HP: 0, F: 5, R: 5, H: 5, I: 4, A: 5, L: 7 } }
        ]
    },
    "Espíritus": {
        faction: "cvstr",
        foc: "Special",
        warning: "0-1",
        points: 24,
        min: 3,
        max: 10,
        equipo: "Arma a dos manos.",
        reglasEspeciales: "No muertos, Etéreos, Hostigadores, Ataques mágicos, Terror, Fantasmas, Lamento de la Doncella.",
        perfiles: [
            { nombre: "Espíritu", stats: { M: 6, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 2, L: 6 } },
            { nombre: "Doncella espectral", stats: { M: 6, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 3, L: 7 } }
        ],
        command: { c: { n: "Doncella espectral", p: 15 } }
    },

    // === RARE ===
    "Engendro del Terror": {
        faction: "cvstr",
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
            { n: "Infestado", p: 15, summary: "Explota F2 3D6 imp al morir." },
            { n: "Mandíbulas rancias", p: 10, summary: "Ataques envenenados." }
        ]
    },
    "Gigante de Hueso": {
        faction: "cvstr",
        foc: "Rare",
        points: 175,
        min: 1,
        max: 1,
        equipo: "Dos Armas de mano y Armadura pesada.",
        reglasEspeciales: "No muerto, Carga devastadora, Resistencia sobrenatural (TSA 3+ total), Desgarrar (Heridas múltiples 1D3).",
        perfiles: [
            { nombre: "Gigante de hueso", stats: { M: 6, HA: 3, HP: 0, F: 6, R: 6, H: 6, I: 1, A: 4, L: 8 } }
        ]
    },
    "Bestias Nocturnas": {
        faction: "cvstr",
        foc: "Rare",
        points: 38,
        min: 3,
        max: 6,
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "Vampiros, Hostigadores, Ataques envenenados, Esquiva (5+).",
        perfiles: [
            { nombre: "Bestia nocturna", stats: { M: 8, HA: 4, HP: 0, F: 5, R: 4, H: 2, I: 5, A: 3, L: 7 } },
            { nombre: "Oficial", stats: { M: 8, HA: 4, HP: 0, F: 5, R: 4, H: 2, I: 5, A: 4, L: 8 } }
        ],
        options: [
            { n: "Pellejo férreo", p: 2, summary: "Piel escamosa (5+)." },
            { n: "Frenesí horrendo", p: 2, summary: "Carga devastadora." }
        ],
        command: { c: { n: "Oficial", p: 10 } },
        champSkills: { limit: 1, type: 'count', skillSource: 'Poderes Vampíricos Strigoi' }
    },

    // === LORDS ===
    "Señor de Vampiros Strigoi": {
        faction: "cvstr",
        foc: "Lord",
        points: 250,
        min: 1,
        max: 1, // Only 1 Lord
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "No muerto, Vampiro, Ataques envenenados, Horrores de la noche. Nivel Mágico 2.",
        perfiles: [
            { nombre: "Señor de Vampiros Strigoi", stats: { M: 6, HA: 7, HP: 3, F: 5, R: 6, H: 4, I: 7, A: 5, L: 9 } }
        ],
        options: [
            { n: "Nivel de Magia 3", p: 35 }
        ],
        mounts: ["Engendro del Terror"],
        maxMagicItems: 3, // Cannot take Weapon/Armor
        maxRelics: 1,
        maxSkills: { limit: 3, type: 'count', skillSource: 'Poderes Vampíricos Strigoi' } // 3 + Odio Eterno (free)
    },
    "Maestro Nigromante": {
        faction: "cvstr",
        foc: "Lord",
        points: 170,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Miedo, ¡Están vivos!. Nivel Mágico 3.",
        perfiles: [
            { nombre: "Maestro nigromante", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 3, I: 4, A: 3, L: 8 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 3 },
            { n: "Arma de mano adicional", p: 3 },
            { n: "Nivel de Magia 4", p: 35 }
        ],
        mounts: ["Corcel esquelético con barda", "Pesadilla Alada"], // Cannot take other mounts listed in core NM book
        maxMagicItems: 3,
        maxRelics: 1
    },

    // === HEROES ===
    "Conde Vampiro Strigoi": {
        faction: "cvstr",
        foc: "Hero",
        points: 140,
        min: 1,
        max: 1, // Placeholder
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "No muerto, Vampiro, Ataques envenenados, Horrores de la noche. Nivel Mágico 1.",
        perfiles: [
            { nombre: "Conde Vampiro Strigoi", stats: { M: 6, HA: 6, HP: 2, F: 5, R: 5, H: 3, I: 6, A: 4, L: 8 } }
        ],
        maxMagicItems: 2, // Cannot take Weapon/Armor
        maxSkills: { limit: 2, type: 'count', skillSource: 'Poderes Vampíricos Strigoi' } // 2 + Odio Eterno (free)
        // No BSB option mentioned for Strigoi hero
    },
    "Rey Necrófago": {
        faction: "cvstr",
        foc: "Hero",
        points: 60,
        min: 1,
        max: 1, // Placeholder
        equipo: "Arma de mano.",
        reglasEspeciales: "Miedo, Ataques envenenados, Hostigador, Carga devastadora, ¡Está vivo!.",
        perfiles: [
            { nombre: "Rey necrófago", stats: { M: 5, HA: 4, HP: 0, F: 5, R: 4, H: 2, I: 5, A: 4, L: 7 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 5 },
            { n: "Mayal", p: 4 }
        ],
        maxMagicItems: 1,
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 } // Can be BSB
    },
    "Nigromante": {
        faction: "cvstr",
        foc: "Hero",
        points: 60,
        min: 1,
        max: 1, // Placeholder
        equipo: "Arma de mano.",
        reglasEspeciales: "Miedo, ¡Está vivo!. Nivel Mágico 1.",
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

const mountsDB_cvstr = {
    // Shared mounts from nmuert.js used by Nigromante
    "Corcel esquelético con barda": {
        faction: "nmuert", // Referencing parent faction
        points: 15, // Cost for Maestro Nigromante
        perfiles: [ { nombre: "Corcel esquelético con barda", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 4 } } ],
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. Corceles insustanciales. Barda (+1 TSA)."
    },
    "Pesadilla Alada": {
        faction: "nmuert", // Referencing parent faction
        points: 150,
        perfiles: [ { nombre: "Pesadilla Alada", stats: { M: 6, HA: 3, HP: 0, F: 5, R: 5, H: 4, I: 2, A: 4, L: 5 } } ],
        reglasEspeciales: "Monstruo. No muerto, Volar, Terror, Regeneración (4+)."
    },
    // Strigoi Specific Mount
    "Engendro del Terror": {
        faction: "cvstr",
        points: 230,
        perfiles: [ { nombre: "Engendro del Terror", stats: { M: 6, HA: 3, HP: 0, F: 5, R: 6, H: 6, I: 3, A: 4, L: 4 } } ],
        reglasEspeciales: "Monstruo. No muerto, Volar, Regeneración (5+), Chillido mortal.",
        options: [ // Options apply to mount version too
             { n: "Infestado", p: 15, summary: "Explota F2 3D6 imp al morir." },
             { n: "Mandíbulas rancias", p: 10, summary: "Ataques envenenados." }
        ]
    }
};

const magicItemsDB_cvstr = {
    // Strigoi use standard CV items, but cannot take Magic Weapons or Armor
    // Filtered list:
    "Talismán": commonMagicItemsDB["Talismán"],
    "Objeto Hechizado": commonMagicItemsDB["Objeto Hechizado"],
    "Artefacto Arcano": commonMagicItemsDB["Artefacto Arcano"],
    "Estandarte Mágico": commonMagicItemsDB["Estandarte Mágico"],
    // Include specific Strigoi items if any were defined (PDF only shows powers)
    // Add Strigoi specific items if needed here, merging with common.
    // Example:
    // "Talismán": { ...commonMagicItemsDB["Talismán"], "Amuleto Strigoi": { points: 20, relic: false, summary: "..." } },
};

const armySkillsDB_cvstr = {
    // --- PODERES VAMPÍRICOS DEL CLAN STRIGOI ---
    "Odio eterno": { points: 0, faction: "cvstr", type: "Poder Vampírico Strigoi", summary: "Odio (todos los enemigos). (Gratis y obligatorio)" },
    "Furia de Strigos": { points: 10, faction: "cvstr", type: "Poder Vampírico Strigoi", summary: "Furia asesina." },
    "Cazador en la oscuridad": { points: 15, faction: "cvstr", type: "Poder Vampírico Strigoi", summary: "Explorador (solo infantería)." },
    "Horror sobrenatural": { points: 20, faction: "cvstr", type: "Poder Vampírico Strigoi", summary: "Causa Terror." },
    "Pellejo férreo": { points: 15, faction: "cvstr", type: "Poder Vampírico Strigoi", summary: "Piel escamosa (4+)." },
    "Ferocidad imparable": { points: 15, faction: "cvstr", type: "Poder Vampírico Strigoi", summary: "Impactos por carga (1) y Carga devastadora." },
    "Veneno necrótico": { points: 20, faction: "cvstr", type: "Poder Vampírico Strigoi", summary: "Ataques envenenados hieren con 5+. Heridas auto son Heridas múltiples (2)." },
    "Fuerza imparable": { points: 20, faction: "cvstr", type: "Poder Vampírico Strigoi", summary: "Heridas múltiples (1D3) en CaC." },
    "Músculos de acero": { points: 20, faction: "cvstr", type: "Poder Vampírico Strigoi", summary: "+1 Fuerza." },
    "Curación rápida": { points: 25, faction: "cvstr", type: "Poder Vampírico Strigoi", summary: "Regeneración (5+)." },
    "Celeridad de ultratumba": { points: 25, faction: "cvstr", type: "Poder Vampírico Strigoi", summary: "Esquivar (5+)." },
    "Presencia perturbadora": { points: 25, faction: "cvstr", type: "Poder Vampírico Strigoi", summary: "-1 impactar al personaje en CaC." },
    "La encarnación del miedo": { points: 25, faction: "cvstr", type: "Poder Vampírico Strigoi", summary: "Enemigo repite chequeos superados de Miedo/Terror causados por personaje." },
    "Aullido de mando": { points: 25, faction: "cvstr", type: "Poder Vampírico Strigoi", summary: "Portahechizos(1D3+1). Unidad Necrófago/Strigano (12\") mueve 1D6+2\", puede cargar." },
    "Forma de murciélago": { points: 30, faction: "cvstr", type: "Poder Vampírico Strigoi", summary: "Volar." },
    "Insensible": { points: 30, faction: "cvstr", type: "Poder Vampírico Strigoi", summary: "-1 herir contra personaje (no afecta impactos sin F)." },
    "Llamar a los necrófagos": { points: 35, faction: "cvstr", type: "Poder Vampírico Strigoi", summary: "Invocación Nehek/Animar Muertos puede invocar Necrófagos/Striganos (1D6-1 por dado, no sobre máx)." },
    "Señor de los necrófagos": { points: 45, faction: "cvstr", type: "Poder Vampírico Strigoi", summary: "Sólo Señor Vampiros. Necrófagos del ejército ganan Vanguardia." },
    "Vitalidad impía": { points: 45, faction: "cvstr", type: "Poder Vampírico Strigoi", summary: "Sólo Señor Vampiros. Regeneración (4+)." },
    "Monstruo descomunal": { points: 50, faction: "cvstr", type: "Poder Vampírico Strigoi", summary: "Sólo Señor Vampiros. Infantería Monstruosa (40x40). +1F, +1R, +1H, Terror. -1I." }
};

const specialProfilesDB_cvstr = {}; // No separate profiles like fanatics needed

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Condes Vampiros - Strigoi",
    FACTION_ID: "cvstr",
    armySkillsLabel: "Poderes Vampíricos",
    FOC_CONFIG: { // Standard FOC
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_cvstr,
    mountsDB: mountsDB_cvstr,
    magicItemsDB: magicItemsDB_cvstr,
    armySkillsDB: armySkillsDB_cvstr,
    specialProfilesDB: specialProfilesDB_cvstr
};

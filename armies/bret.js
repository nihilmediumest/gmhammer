// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: BRETONIA ---
// ===================================================================================
// Last Updated: 2025-10-25 - v4.1
import { commonMagicItemsDB } from '../comun.js'; // Assuming common items are in comun.js

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_bret = {
    // === CORE ===
    "Caballeros del Reino": {
        faction: "bret",
        foc: "Core",
        warning: "1+ Required.",
        points: 22,
        min: 5,
        max: 20, // Max 12 if using Formación en punta de lanza (UI should handle this display logic)
        equipo: "Arma de mano, Lanza de caballería, Armadura pesada y Escudo.",
        montura: "Corceles bretonianos con barda.",
        reglasEspeciales: "Caballero, Voto del Caballero, Favor de la Dama. Pueden usar Formación en punta de lanza.",
        perfiles: [
            { nombre: "Caballero del Reino", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 3, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 3, A: 2, L: 8 } },
            { nombre: "Corcel Bretoniano", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 6 } }
        ],
        command: { c: { n: "Oficial", p: 3 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },
    "Caballeros Noveles": {
        faction: "bret",
        foc: "Core",
        warning: "No pueden haber más unidades de caballeros noveles que caballeros del reino.",
        points: 17,
        min: 5,
        max: 20, // Max 12 if using Formación en punta de lanza
        equipo: "Arma de mano, Lanza de caballería, Armadura pesada y Escudo.",
        montura: "Corceles bretonianos con barda.",
        reglasEspeciales: "Caballero, Voto del Caballero, Impetuosos, Favor de la Dama. Pueden usar Formación en punta de lanza.",
        perfiles: [
            { nombre: "Caballero Novel", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 } },
            { nombre: "Corcel Bretoniano", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 6 } }
        ],
        command: { c: { n: "Oficial", p: 3 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },
    "Hombres de Armas": {
        faction: "bret",
        foc: "Core",
        points: 4,
        min: 10,
        max: 40,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Deber del Vasallo.",
        perfiles: [
            { nombre: "Hombre de Armas", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 } }
        ],
        options: [
            { n: "Escudo", p: 1 },
            { n: "Lanza", p: 2, exclusiveGroup: "weaponChoice" },
            { n: "Alabarda", p: 3, exclusiveGroup: "weaponChoice" }
        ],
        command: { c: { n: "Oficial", p: 4 }, s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } }
    },
    "Leva de Arqueros": {
        faction: "bret",
        foc: "Core",
        points: 4,
        min: 10,
        max: 40,
        equipo: "Arma de mano y Arco largo.",
        reglasEspeciales: "Deber del Vasallo.",
        perfiles: [
            { nombre: "Arquero", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Oficial", stats: { M: 4, HA: 2, HP: 4, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } } // Note: Oficial profile differs in PDF, likely typo, using HP4 as more logical upgrade.
        ],
        options: [
            { n: "Flechas incendiarias", p: 1, summary: "Ataques flamígeros" },
            { n: "Estacas", p: 15, costType: "flat" },
            { n: "Convertir en Ralea", p: -1, summary: "Pierde Arcos y Estacas. Unidad 0-1." } // Note: Needs validation rule
        ],
        command: { c: { n: "Oficial", p: 4 }, s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } }
    },
    "Monteros": {
        faction: "bret",
        foc: "Core",
        warning: "0-1",
        points: 9,
        min: 5,
        max: 12,
        equipo: "Arco, armadura ligera y arma de mano.",
        reglasEspeciales: "Deber del Vasallo, Hostigadores, Vanguardia.",
        perfiles: [
            { nombre: "Montero", stats: { M: 4, HA: 3, HP: 4, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 4, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 } }
            // Mastines added via specialAddons
        ],
        specialAddons: [
             { name: "Mastín de Caza", points: 6, max: 5, profileKey: "Mastin" }
        ],
        options: [
            { n: "Arma de mano adicional", p: 1 },
            { n: "Sustituir Arco por Arco Largo", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 }, m: { n: "Músico", p: 6 } }
    },
    "Guardia de la Ciudad": {
        faction: "bret",
        foc: "Core",
        warning: "0-1. Sólo si incluyes al menos una unidad de Hombres de Armas o Leva de Arqueros.", // PDF implies Hombres de Armas OR Leva, not specifically Druchii units
        points: 8,
        min: 10,
        max: 30,
        equipo: "Alabarda y Armadura Pesada.",
        reglasEspeciales: "Deber del Vasallo, Guardia del castellano.",
        perfiles: [
            { nombre: "Guardián", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 } }
        ],
        command: { c: { n: "Oficial", p: 4 }, s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } }
    },

    // === SPECIAL ===
    "Caballeros Andantes": {
        faction: "bret",
        foc: "Special",
        warning: "0-1",
        points: 12,
        min: 10,
        max: 25,
        equipo: "Arma de mano, Escudo y Armadura Pesada.",
        reglasEspeciales: "Caballero, Voto del Caballero.",
        perfiles: [
            { nombre: "Caballero Andante", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 2, L: 8 } }
        ],
        options: [
            { n: "Mangual", p: 1, exclusiveGroup: "weaponChoice" },
            { n: "Arma a dos Manos", p: 2, exclusiveGroup: "weaponChoice" }
        ],
        command: { c: { n: "Oficial", p: 3 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25,
        champItems: 25
    },
    "Caballeros Errantes": {
        faction: "bret",
        foc: "Special",
        points: 24,
        min: 5,
        max: 15,
        equipo: "Arma a dos manos, Escudo y Armadura pesada.",
        montura: "Corceles bretonianos con barda.",
        reglasEspeciales: "Caballero, Voto de la Búsqueda, Favor de la Dama. Pueden usar escudo y arma a 2 manos (TSA 2+). Pueden usar Formación en punta de lanza.",
        perfiles: [
            { nombre: "Caballero Errante", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 2, L: 8 } },
            { nombre: "Corcel Bretoniano", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 6 } }
        ],
        command: { c: { n: "Oficial", p: 4 }, s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } },
        magicBanner: 50,
        champItems: 25
    },
    "Escolta del Duque": {
        faction: "bret",
        foc: "Special",
        warning: "0-1",
        points: 24,
        min: 5,
        max: 15,
        equipo: "Arma de mano, Lanza de caballería, Armadura pesada, Escudo.",
        montura: "Corceles bretonianos con barda.",
        reglasEspeciales: "Caballero, Voto del Caballero, Inmunes a pánico, Favor de la Dama. Deben elegir un Ducado. Pueden usar Formación en punta de lanza.",
        perfiles: [
            { nombre: "Escolta del Ducado", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 1, I: 4, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 1, I: 4, A: 2, L: 8 } },
            { nombre: "Corcel Bretoniano", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 6 } }
        ],
        options: [
             // Ducados - Mutually Exclusive Options
             { n: "Lyonesse", p: 1, summary: "Armadura de placas (TSA 3+)", exclusiveGroup: "ducado" },
             { n: "Parravon", p: 1, summary: "Carga devastadora (Corcel)", exclusiveGroup: "ducado" },
             { n: "Carcassonne", p: 1, summary: "Equipados con Mangual (en lugar de Lanza Cab.)", exclusiveGroup: "ducado" },
             { n: "Couronne", p: 2, summary: "Odio (todos)", exclusiveGroup: "ducado" },
             { n: "Artois", p: 2, summary: "Poder de penetración", exclusiveGroup: "ducado" },
             { n: "Aquitaine", p: 1, summary: "Ataques Mágicos", exclusiveGroup: "ducado" },
             { n: "Mousillon", p: 1, summary: "Causan Miedo al cargar", exclusiveGroup: "ducado" }
        ],
        command: { c: { n: "Oficial", p: 4 }, s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } },
        magicBanner: 50,
        champItems: 25
    },
    "Hombres de Armas a Caballo": {
        faction: "bret",
        foc: "Special",
        points: 12,
        min: 5,
        max: 20,
        equipo: "Arma de mano y armadura ligera.",
        montura: "Caballos de Guerra.",
        reglasEspeciales: "Caballería rápida, Deber del Vasallo.",
        perfiles: [
            { nombre: "Hombre de armas a Caballo", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 } },
            { nombre: "Caballo de Guerra", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } }
        ],
        options: [
            { n: "Lanza", p: 1 },
            { n: "Escudo", p: 2 },
            { n: "Arco", p: 2 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } }
    },
    "Trebuchet": {
        faction: "bret",
        foc: "Special",
        warning: "0-1",
        points: 70,
        min: 1,
        max: 1,
        equipo: "La dotación lleva Arma de mano.",
        reglasEspeciales: "Dispara como una catapulta. Deber del vasallo.",
        perfiles: [
            { nombre: "Trebuchet", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: 4, I: "-", A: "-", L: "-" } }, // Assume R7 H4 like other large war machines
            { nombre: "Campesino (4)", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Capataz", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } }
        ],
        options: [
             { n: "Munición incendiaria", p: 10, costType: "flat", summary: "Ataques flamígeros. Centro F6, Heridas(1D3). Chequeo pánico por baja." }
        ],
        command: { c: { n: "Sustituir Campesino por Capataz", p: 5 } } // Special command type
    },
    "Balista Bretoniana": {
        faction: "bret",
        foc: "Special",
        warning: "0-2",
        points: 45,
        min: 1,
        max: 2,
        equipo: "La dotación lleva Arma de mano.",
        reglasEspeciales: "Dispara como un Lanzavirotes. Deber del vasallo.",
        perfiles: [
            { nombre: "Balista", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: 2, I: "-", A: "-", L: "-" } }, // Assume R7 H2 like bolt thrower
            { nombre: "Hombre de armas (2)", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } }
        ]
    },
    "Peregrinos del Sagrado Relicario": {
        faction: "bret",
        foc: "Special",
        warning: "0-1",
        points: 6,
        min: 10,
        max: 40,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Relicario del Grial (cuenta como portaestandarte, otorga Favor de la Dama), Tozudez, Odio (todos los enemigos).",
        perfiles: [
            { nombre: "Peregrino", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 } }
        ],
        options: [
            { n: "Escudo", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 4 } } // No standard or musician, Relicario acts as standard
    },

    // === RARE ===
    "Caballeros del Grial": {
        faction: "bret",
        foc: "Rare", // Default FOC
        warning: "0-1. Si el General tiene Virtud del Grial, esta unidad es Especial.", // FOC change handled by ruleset
        points: 34,
        min: 5,
        max: 15, // Max 12 if using Formación en punta de lanza
        equipo: "Arma de mano, Lanza de caballería, Armadura pesada y Escudo.",
        montura: "Corceles bretonianos con barda.",
        reglasEspeciales: "Caballero, Voto del Grial, Favor de la Dama (4+). Pueden usar Formación en punta de lanza.",
        perfiles: [
            { nombre: "Caballero del Grial", stats: { M: 4, HA: 5, HP: 3, F: 4, R: 3, H: 1, I: 5, A: 2, L: 9 } },
            { nombre: "Oficial", stats: { M: 4, HA: 5, HP: 3, F: 4, R: 3, H: 1, I: 5, A: 3, L: 9 } },
            { nombre: "Corcel Bretoniano", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 6 } }
        ],
        command: { c: { n: "Oficial", p: 5 }, s: { n: "Portaestandarte", p: 10 }, m: { n: "Músico", p: 10 } },
        magicBanner: 50,
        champItems: 25
    },
    "Caballeros del Pegaso": {
        faction: "bret",
        foc: "Rare",
        points: 80,
        min: 2,
        max: 6,
        equipo: "Arma de mano, Lanza de caballería, Armadura pesada y Escudo.",
        montura: "Pegasos con barda.",
        reglasEspeciales: "Caballero, Voto del Caballero, Volar, Hostigador, Favor de la Dama.",
        perfiles: [
            { nombre: "Caballero del Pegaso", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 2, L: 8 } },
            { nombre: "Pegaso", stats: { M: 8, HA: 4, HP: 0, F: 4, R: 4, H: 3, I: 4, A: 2, L: 6 } }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 12 }, m: { n: "Músico", p: 12 } },
        magicBanner: 50,
        champItems: 25
    },
    "Guardianes del Santuario del Grial": {
        faction: "bret",
        foc: "Rare",
        warning: "0-1. Sólo si incluyes una Profetisa o Doncella de la Dama.",
        points: 15,
        min: 5,
        max: 20,
        equipo: "Arma de mano y Armadura Pesada.",
        reglasEspeciales: "Caballero, Voto del Ermitaño (Tozudez con Favor de la Dama), Resistencia mágica (1), Hermandad del Grial (nadie puede unirse).",
        perfiles: [
            { nombre: "Guardián", stats: { M: 4, HA: 5, HP: 3, F: 4, R: 3, H: 1, I: 5, A: 2, L: 9 } },
            { nombre: "Oficial", stats: { M: 4, HA: 5, HP: 3, F: 4, R: 3, H: 1, I: 5, A: 3, L: 9 } }
        ],
        options: [
            { n: "Escudo", p: 1 },
            { n: "Mangual", p: 1, exclusiveGroup: "weaponChoice" },
            { n: "Arma a dos Manos", p: 2, exclusiveGroup: "weaponChoice" }
        ],
        command: { c: { n: "Oficial", p: 5 }, s: { n: "Portaestandarte", p: 10 }, m: { n: "Músico", p: 10 } },
        magicBanner: 25,
        champItems: 25
    },

    // === LORDS ===
    "Señor Bretoniano": {
        faction: "bret",
        foc: "Lord",
        points: 105,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura Pesada.",
        reglasEspeciales: "Caballero, Voto del Caballero, Favor de la Dama.",
        perfiles: [
            { nombre: "Señor Bretoniano", stats: { M: 4, HA: 6, HP: 3, F: 4, R: 4, H: 3, I: 6, A: 4, L: 9 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 2 },
            { n: "Arma a dos manos", p: 4 },
            { n: "Lanza de caballería", p: 6 },
            { n: "Escudo", p: 3 },
            { n: "Mangual", p: 3 },
            { n: "Mayal", p: 4 }
        ],
        mounts: ["Corcel de Guerra Bretoniano con barda", "Pegaso", "Hipogrifo"],
        maxMagicItems: 3,
        maxRelics: 1,
        maxSkills: { limit: 1, type: 'count' } // Virtues
    },
    "Profetisa de la Dama": {
        faction: "bret",
        foc: "Lord",
        points: 145,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Favor de la Dama, Sirvienta de la Dama. Nivel Mágico 3.",
        perfiles: [
            { nombre: "Profetisa de la Dama", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 4, H: 3, I: 4, A: 1, L: 8 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 2 },
            { n: "Arma a dos manos", p: 4 },
            { n: "Nivel de Magia 4", p: 35 }
        ],
        mounts: ["Corcel Bretoniano", "Corcel Bretoniano con barda", "Unicornio", "Pegaso"],
        maxMagicItems: 3,
        maxRelics: 1
    },
    "Sumo Sacerdote de Taal": {
        faction: "bret",
        foc: "Lord",
        warning: "Eremita: No puede ser el General.",
        points: 80,
        min: 1,
        max: 1,
        equipo: "Arma de Mano y Armadura ligera.",
        reglasEspeciales: "Eremita, Sirviente de la Naturaleza. Conoce todos los Ritos de Taal, puede lanzar 2 (Nivel 5).",
        perfiles: [
            { nombre: "Sumo Sacerdote de Taal", stats: { M: 4, HA: 5, HP: 4, F: 4, R: 4, H: 3, I: 5, A: 3, L: 9 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 2 },
            { n: "Arma a dos manos", p: 4 },
            { n: "Arco", p: 3 },
            { n: "Jabalina", p: 3 },
            { n: "Lanza", p: 3 },
            { n: "Escudo", p: 3 }
        ],
        mounts: ["Caballo de Guerra"],
        maxMagicItems: 3
    },

    // === HEROES ===
    "Paladín": {
        faction: "bret",
        foc: "Hero",
        points: 50,
        min: 1,
        max: 1, // Placeholder, can have multiple heroes
        equipo: "Arma de mano y Armadura Pesada.",
        reglasEspeciales: "Caballero, Voto del Caballero, Favor de la Dama.",
        perfiles: [
            { nombre: "Paladín", stats: { M: 4, HA: 5, HP: 5, F: 4, R: 4, H: 2, I: 5, A: 3, L: 8 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 1 },
            { n: "Arma a dos manos", p: 2 },
            { n: "Lanza de caballería", p: 4 },
            { n: "Mangual", p: 2 },
            { n: "Mayal", p: 3 },
            { n: "Escudo", p: 2 }
        ],
        mounts: ["Corcel de Guerra Bretoniano con barda", "Pegaso"],
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 },
        maxMagicItems: 2,
        maxSkills: { limit: 1, type: 'count' } // Virtues
    },
    "Castellano": {
        faction: "bret",
        foc: "Hero",
        points: 40,
        min: 1,
        max: 1, // Placeholder
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Deber del Vasallo.",
        perfiles: [
            { nombre: "Castellano", stats: { M: 4, HA: 4, HP: 4, F: 4, R: 4, H: 2, I: 4, A: 3, L: 8 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 1 },
            { n: "Arco", p: 3 },
            { n: "Arma a dos manos", p: 2 },
            { n: "Lanza", p: 2 },
            { n: "Mayal", p: 2 },
            { n: "Mangual", p: 3 },
            { n: "Escudo", p: 2 },
            { n: "Sustituir Armadura Ligera por Pesada", p: 2 }
        ],
        mounts: ["Caballo de Guerra", "Caballo de Guerra con Barda"],
        maxMagicItems: 1
    },
    "Doncella de la Dama": {
        faction: "bret",
        foc: "Hero",
        points: 60,
        min: 1,
        max: 1, // Placeholder
        equipo: "Arma de mano.",
        reglasEspeciales: "Favor de la Dama, Sirvienta de la Dama. Nivel Mágico 1.",
        perfiles: [
            { nombre: "Doncella de la Dama", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 1, L: 7 } }
        ],
        options: [
            { n: "Nivel de Magia 2", p: 35 }
        ],
        mounts: ["Corcel Bretoniano", "Corcel Bretoniano con barda", "Unicornio"],
        maxMagicItems: 2
    },
    "Sacerdote de Taal": {
        faction: "bret",
        foc: "Hero",
        warning: "Eremita: No puede ser el General.",
        points: 45,
        min: 1,
        max: 1, // Placeholder
        equipo: "Arma de Mano y Armadura ligera.",
        reglasEspeciales: "Eremita, Sirviente de la Naturaleza. Conoce todos los Ritos de Taal, puede lanzar 1 (Nivel 3).",
        perfiles: [
            { nombre: "Sacerdote de Taal", stats: { M: 4, HA: 4, HP: 4, F: 4, R: 4, H: 2, I: 4, A: 2, L: 8 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 1 },
            { n: "Arma a dos manos", p: 2 },
            { n: "Arco", p: 3 },
            { n: "Jabalina", p: 2 },
            { n: "Lanza", p: 2 },
            { n: "Escudo", p: 2 }
        ],
        mounts: ["Caballo de Guerra"],
        maxMagicItems: 1
    },
    "Bardo": {
        faction: "bret",
        foc: "Hero",
        points: 30,
        min: 1,
        max: 1, // Placeholder
        equipo: "Arma de mano, Armadura ligera, Cuchillos Arrojadizos, Instrumento musical (cuenta como músico).",
        reglasEspeciales: "Tunante, Cortesano, Música de Bardo (una vez por batalla).",
        perfiles: [
            { nombre: "Bardo", stats: { M: 4, HA: 4, HP: 4, F: 4, R: 4, H: 2, I: 5, A: 2, L: 7 } }
        ],
        mounts: ["Caballo de Guerra", "Caballo de Guerra con Barda"],
        maxMagicItems: 1
    }
};

const mountsDB_bret = {
    "Caballo de Guerra": {
        faction: "bret",
        points: 10, // Cost for Castellano/Sacerdote/Bardo
        perfiles: [ { nombre: "Caballo de Guerra", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } } ],
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería."
    },
    "Caballo de Guerra con Barda": {
        faction: "bret",
        points: 12, // Cost for Castellano/Bardo
        perfiles: [ { nombre: "Caballo de Guerra con Barda", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } } ],
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. Barda (+1 TSA)."
    },
    "Corcel Bretoniano": {
        faction: "bret",
        points: 12, // Cost for Profetisa/Doncella
        perfiles: [ { nombre: "Corcel Bretoniano", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 6 } } ],
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. No reduce movimiento por barda."
    },
    "Corcel Bretoniano con barda": {
        faction: "bret",
        points: 15, // Cost for Profetisa/Doncella
        perfiles: [ { nombre: "Corcel Bretoniano con barda", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 6 } } ],
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. Barda (+1 TSA). No reduce movimiento por barda."
    },
     "Corcel de Guerra Bretoniano con barda": { // Specific for Lord/Paladin
        faction: "bret",
        points: 15,
        perfiles: [ { nombre: "Corcel Bretoniano con barda", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 6 } } ],
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. Barda (+1 TSA). No reduce movimiento por barda."
    },
    "Pegaso": {
        faction: "bret",
        points: 40, // Cost for Lord/Paladin/Profetisa
        perfiles: [ { nombre: "Pegaso", stats: { M: 8, HA: 4, HP: 0, F: 4, R: 4, H: 3, I: 4, A: 2, L: 6 } } ],
        reglasEspeciales: "Bestia monstruosa. Cambia el tipo a Caballería monstruosa. Volar.",
        options: [ { n: "Barda", p: 5 } ] // Barda is option on mount itself
    },
    "Hipogrifo": {
        faction: "bret",
        points: 140,
        perfiles: [ { nombre: "Hipogrifo", stats: { M: 8, HA: 5, HP: 0, F: 5, R: 5, H: 5, I: 5, A: 5, L: 7 } } ],
        reglasEspeciales: "Monstruo. Volar, Carga Devastadora.",
        options: [ { n: "Pectoral", p: 15, summary: "TSA 5+"} ]
    },
    "Unicornio": {
        faction: "bret",
        points: 35,
        perfiles: [ { nombre: "Unicornio", stats: { M: 9, HA: 5, HP: 0, F: 4, R: 4, H: 3, I: 5, A: 3, L: 9 } } ],
        reglasEspeciales: "Bestia Monstruosa. Cambia el tipo a Caballería monstruosa. Caballería Rápida, Ataques Mágicos, Resistencia Mágica (3), Cuerno Del Unicornio (+2F y Ataque Rápido al cargar)."
    }
};

const magicItemsDB_bret = {
    // --- ARMAS MÁGICAS ---
    "Arma Mágica": {
        "Espada de Couronne": { points: 40, faction: "bret", relic: true, summary: "Arma Mano. +1F, Odio, Golpe Letal Heroico. Unidad Inmune Miedo/Terror." },
        "Lanza de Plata Bendita": { points: 40, faction: "bret", relic: false, summary: "Lanza Cab. Impacta auto al cargar." },
        "Espada del Campeón de la Dama": { points: 40, faction: "bret", relic: false, summary: "Arma Mano. F = R del objetivo +1. Pierde poder si pierde Favor Dama." },
        "Espada de la Búsqueda": { points: 35, faction: "bret", relic: false, summary: "Arma 2 Manos. Repite impactar fallidos CaC." },
        "Mangual de Fracasse": { points: 30, faction: "bret", relic: false, summary: "Mangual. Poder Penetración. Destruye arma mágica enemiga con 4+ al impactar." },
        "Espada de Carcassonne": { points: 30, faction: "bret", relic: false, summary: "Arma Mano. +1F, Poder Penetración. Repite TSA enemigas exitosas." },
        "Lanza del Roble": { points: 25, faction: "bret", relic: false, summary: "Lanza Cab. Siempre hiere con 2+." },
        "Lanza de Artois": { points: 20, faction: "bret", relic: false, summary: "Lanza Cab. Golpe Letal." },
        "Hoz Sagrada de Taal": { points: 15, faction: "bret", relic: false, summary: "Arma Mano. Sacerdotes Taal. +1F. Lanza plegaria extra si hiere." },
        "Lanza del Dragón": { points: 15, faction: "bret", relic: false, summary: "Lanza Cab. Ataques Flamígeros. 1 uso: Arma Aliento F4 Flamígero." }
    },
    // --- ARMADURAS MÁGICAS ---
    "Armadura Mágica": {
        "Coraza Dorada": { points: 50, faction: "bret", relic: true, summary: "Armadura Placas (TSA 4+). Regeneración (4+)." },
        "Armadura del Solsticio Estival": { points: 40, faction: "bret", relic: false, summary: "Armadura Pesada. -1 impactar CaC y Disparo vs portador/montura." },
        "Armadura de Agilulf": { points: 30, faction: "bret", relic: false, summary: "Armadura Pesada. Regeneración (6+). Inmune Veneno, Golpe Letal/Heroico, Heridas Múltiples." },
        "Coraza de la Fortuna": { points: 25, faction: "bret", relic: false, summary: "Armadura Pesada. +1 TSA. Repite tiradas para herir exitosas vs portador." },
        "Gran yelmo de Gromril": { points: 25, faction: "bret", relic: false, summary: "Yelmo (+1 TSA). Repite TSA fallidas." },
        "Maldición del Pielverde": { points: 20, faction: "bret", relic: false, summary: "Escudo. Orcos/Goblins a 18\" fallan animosidad con 1-2, -3 tabla." },
        "Escudo del Grial": { points: 15, faction: "bret", relic: false, summary: "Escudo. Mejora Favor de la Dama a TSE 4+." }
    },
    // --- TALISMANES ---
    "Talismán": {
        "Guardapelo de Sirienne": { points: 50, faction: "bret", relic: true, summary: "Regeneración (5+), Resistencia Mágica (3)." },
        "Trenza de Bordeleaux": { points: 35, faction: "bret", relic: false, summary: "1 uso. Inicio mov: Unidad gana Etéreo y -1 impactar vs disparo hasta sig. turno." },
        "Manto de la Damisela Elena": { points: 30, faction: "bret", relic: false, summary: "Repite TSE fallidas del Favor de la Dama." },
        "Obsequio de la Damisela": { points: 25, faction: "bret", relic: false, summary: "Repite 1D6 por fase combate (impactar, herir, salvación, atributo)." },
        "Insignia de la Búsqueda": { points: 15, faction: "bret", relic: false, summary: "Mejora Favor de la Dama a TSE 4+ vs Inf/Bestia Monstruosa, Monstruo." },
        "Garra del Dragón": { points: 10, faction: "bret", relic: false, summary: "Portador y unidad: Inmune a Fuego." }
    },
    // --- OBJETOS HECHIZADOS ---
    "Objeto Hechizado": {
        "Mechón de Isolda": { points: 25, faction: "bret", relic: true, summary: "Elige miniatura enemiga. Repite impactar/herir fallidos vs ella." },
        "Cuerno de Halcones de Fredemundo": { points: 40, faction: "bret", relic: false, summary: "1 uso. Inicio turno: Enemigos pierden Volar/Flotar por 1 turno completo." },
        "Reliquia Sagrada": { points: 35, faction: "bret", relic: false, summary: "Resistencia Mágica (3)." },
        "Crin del Purasangre": { points: 25, faction: "bret", relic: false, summary: "Caballería. Monturas ganan Carga Devastadora y Odio." },
        "Cáliz de la Dama": { points: 25, faction: "bret", relic: false, summary: "Portador y unidad: Regeneración (6+). Portador Inmune Heridas Múltiples." },
        "Cornamenta de la Gran Cacería": { points: 20, faction: "bret", relic: false, summary: "Portahechizos (4). Sacerdotes Taal. Forma Salvaje Wissan (solo portador/unidad). Portador gana Imp Carga(1D3) mágicos." },
        "Incensario Sagrado": { points: 20, faction: "bret", relic: false, summary: "No Muertos/Demonios en contacto: 1 imp F4 mágico." },
        "Icono de la Oración de Quenelles": { points: 15, faction: "bret", relic: false, summary: "1 uso. Unidad amiga a 18\" recupera Favor de la Dama." },
        "Guantelete del Desafío": { points: 5, faction: "bret", relic: false, summary: "Desafío debe ser aceptado." }
    },
    // --- ARTEFACTOS ARCANOS ---
    "Artefacto Arcano": {
        "Cáliz de Malfeur": { points: 40, faction: "bret", relic: true, summary: "Inicio magia enemiga, tira 1D6: (1) Herida auto; (2-4) +1 dado disp; (5) +1D3 dados disp; (6) +1D3 dados disp, recupera 1H." },
        "Sacramento de la Dama": { points: 50, faction: "bret", relic: false, summary: "+1 dado energía, +1 dado dispersión." },
        "Corazón del Bosque": { points: 40, faction: "bret", relic: false, summary: "Portador y unidad: Cruzar(Bosques). +2 lanzar hechizos Saber Vida." },
        "Espejo de Plata": { points: 35, faction: "bret", relic: false, summary: "1 uso. Dispersa auto hechizo. Por cada dado energía usado, tira 1D6: con 6, lanzador sufre 1H sin TSA." },
        "Poción Sacra": { points: 5, faction: "bret", relic: false, summary: "1 uso. Tras lanzar/dispersar, repite 1 dado." }
    },
    // --- ESTANDARTES MÁGICOS ---
    "Estandarte Mágico": {
        "Pabellón de Guerra de Gilles el Bretón": { points: 50, faction: "bret", relic: true, summary: "Portaestandarte Batalla. +1D3+1 resolución combate (adicional)." },
        "Pabellón de la Dama": { points: 50, faction: "bret", relic: true, summary: "Portaestandarte Batalla. Unidad: TSE 4+ vs proyectiles (mundanos y mágicos)." },
        "Estandarte de los Valerosos": { points: 30, faction: "bret", relic: false, summary: "Unidad: Sangre Fría." },
        "Estandarte del Crepúsculo": { points: 25, faction: "bret", relic: false, summary: "Unidad: Cruzar (todo tipo terreno)." },
        "Estandarte del Reino": { points: 20, faction: "bret", relic: false, summary: "Cab. Reino. +1HA, +1I al cargar." },
        "Estandarte de los Caballeros Noveles": { points: 20, faction: "bret", relic: false, summary: "Cab. Noveles. +1F al cargar (no monturas/personajes). -2L chequeo Impetuosos." },
        "Estandarte de Chalons": { points: 15, faction: "bret", relic: false, summary: "Enemigo no puede Aguantar y Disparar vs carga de esta unidad." },
        "Tapiz de los Conquistadores": { points: 15, faction: "bret", relic: false, summary: "Caballeros. Doble PV por capturar estandartes. Doble PV si capturan este." }
    }
};

const armySkillsDB_bret = { // Virtudes
    "Virtud de la Empatía": { points: 5, faction: "bret", type: "Virtud", summary: "A pie. No General/BSB. Pierde Caballero, gana Tozudez." },
    "Virtud del Penitente": { points: 10, faction: "bret", type: "Virtud", summary: "No General/BSB. Indesmoralizable. Favor Dama 4+. No Reliquias. No puede unirse. No Pegaso/Hipogrifo." },
    "Virtud de la Justa": { points: 10, faction: "bret", type: "Virtud", summary: "Repite impactar fallidos con Lanza Caballería." },
    "Virtud del Cruzado": { points: 10, faction: "bret", type: "Virtud", summary: "Puede elegir 1 obj mágico (no Reliquia) de Nehekhara. Nehekhara Odia al portador." },
    "Virtud del Noble Desdén": { points: 15, faction: "bret", type: "Virtud", summary: "Gana Odio (todos)." },
    "Virtud de la Confianza": { points: 15, faction: "bret", type: "Virtud", summary: "Orgullo Marcial. +1 impactar en desafíos." },
    "Virtud del Tesón": { points: 15, faction: "bret", type: "Virtud", summary: "Personaje y unidad: Cruzar (todo)." },
    "Virtud del Ímpetu": { points: 15, faction: "bret", type: "Virtud", summary: "Personaje y unidad: +1D3\" al cargar." },
    "Virtud de la Pureza": { points: 15, faction: "bret", type: "Virtud", summary: "RM(1). Mejora a RM(2) vs Magia Oscura, Caos, Nigromancia, Skaven, Hashut." },
    "Virtud del valor": { points: 15, faction: "bret", type: "Virtud", summary: "Vs enemigo F > propia: Repite impactar fallidos." },
    "Virtud de la Heroicidad": { points: 15, faction: "bret", type: "Virtud", summary: "Vs Inf/Bestia Monstruosa, Monstruo, Demonio: Repite impactar fallidos (portador y montura)." },
    "Virtud de la venganza": { points: 20, faction: "bret", type: "Virtud", summary: "Cambia Voto a Búsqueda. Debe unirse a Cab. Errantes y no abandonarla. Elige unidad enemiga: Repite impactar fallidos vs ella (personaje y unidad)." },
    "Virtud del Deber": { points: 20, faction: "bret", type: "Virtud", summary: "Paladines. +1 resolución combate mientras General vivo." },
    "Virtud de la Audacia": { points: 20, faction: "bret", type: "Virtud", summary: "Cambia Voto a Búsqueda. Repite herir fallidos con Arma 2 Manos." },
    "Virtud de la Disciplina": { points: 25, faction: "bret", type: "Virtud", summary: "General. 1 uso/batalla. Inicio turno: Supera chequeo L, reorganización gratuita. Falla: no mueve." },
    "Virtud del Ardor Caballeresco": { points: 30, faction: "bret", type: "Virtud", summary: "Gana 1A extra en sig. fase combate por cada baja causada." },
    "Virtud del Ideal": { points: 35, faction: "bret", type: "Virtud", summary: "+1 HA, F, I, A, L. No puede unirse. +100 PV enemigos si muere/huye." },
    "Virtud del Estoicismo": { points: 35, faction: "bret", type: "Virtud", summary: "Señores Bretonianos. Personaje y unidad: Tozudez." },
    "Virtud del Grial": { points: 40, faction: "bret", type: "Virtud", summary: "Cambia Voto a Grial. Solo unirse a unidades Voto Grial. Favor Dama 4+. +1HA, +1L. Si General, Cab. Grial -> Especial." }
};

const specialProfilesDB_bret = {
     "Mastin": {
        perfiles: [{ nombre: "Mastín de Caza", stats: { M: 7, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 4, A: 1, L: 5 } }]
     }
};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Bretonia",
    FACTION_ID: "bret",
    armySkillsLabel: "Virtudes",
    FOC_CONFIG: {
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_bret,
    mountsDB: mountsDB_bret,
    magicItemsDB: magicItemsDB_bret,
    armySkillsDB: armySkillsDB_bret,
    specialProfilesDB: specialProfilesDB_bret
};

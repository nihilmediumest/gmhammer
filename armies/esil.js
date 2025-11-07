// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: ELFOS SILVANOS ---
// ===================================================================================
// Last Updated: 2025-10-25 - v4.1
import { commonMagicItemsDB } from '../comun.js'; // Assuming common items are in comun.js

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_esil = {
    // === CORE ===
    "Guardia del Bosque": {
        faction: "esil",
        foc: "Core",
        points: 9,
        min: 10,
        max: 30,
        equipo: "Arma de mano y Arco largo élfico.",
        reglasEspeciales: "Cruzar Bosques, Destreza Marcial.",
        perfiles: [
            { nombre: "Guardia del Bosque", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 5, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } } // Note: Official has HP5, A1. Check PDF consistency.
        ],
        options: [
            { n: "Arma de mano adicional", p: 1 },
            { n: "Armaduras ligeras", p: 1 },
            { n: "Flechas de Fuego Estelar", p: 1, exclusiveGroup: "arrowType", summary: "Flamígeras. Max mitad unidades." },
            { n: "Flechas de Tejo Negro", p: 3, exclusiveGroup: "arrowType", summary: "Envenenadas. Max mitad unidades." },
            { n: "Flechas de Hada", p: 1, exclusiveGroup: "arrowType", summary: "Mágicas. Max mitad unidades." }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },
    "Guardia del Claro": {
        faction: "esil",
        foc: "Core",
        points: 9,
        min: 10,
        max: 30,
        equipo: "Arma de mano, Armadura ligera y Lanza.",
        reglasEspeciales: "Cruzar Bosques, Destreza Marcial.",
        perfiles: [
            { nombre: "Guardia del Claro", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 2, L: 8 } }
        ],
        options: [
            { n: "Escudos", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },
    "Jinetes del Bosque": {
        faction: "esil",
        foc: "Core",
        points: 14,
        min: 5,
        max: 15,
        equipo: "Arma de mano y Armadura ligera.",
        montura: "Corceles élficos.",
        reglasEspeciales: "Cruzar Bosques, Caballería Rápida.",
        perfiles: [
            { nombre: "Jinete del Bosque", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 2, L: 8 } },
            { nombre: "Corcel élfico", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 6 } }
        ],
        options: [
            { n: "Arcos Élficos", p: 2 },
            { n: "Lanzas", p: 2 },
            { n: "Escudos", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },
    "Driades": {
        faction: "esil",
        foc: "Core",
        points: 15,
        min: 10,
        max: 20, // Max 15 if Hostigadoras
        equipo: "Garras y ramas (arma de mano).",
        reglasEspeciales: "Espíritu del Bosque, Cantos Fáericos (auto-músico).",
        perfiles: [
            { nombre: "Driade", stats: { M: 5, HA: 4, HP: 0, F: 4, R: 4, H: 1, I: 4, A: 2, L: 8 } },
            { nombre: "Driade Anciana", stats: { M: 5, HA: 4, HP: 0, F: 4, R: 4, H: 1, I: 4, A: 3, L: 8 } }
        ],
        options: [
            { n: "Convertir en Hostigadoras", p: 2, summary: "Tamaño unidad 5-15." },
            { n: "Ramaje Punzante", p: 2, exclusiveGroup: "rasgoUnidad", summary: "Poder de Penetración." },
            { n: "Corteza Nudosa", p: 2, exclusiveGroup: "rasgoUnidad", summary: "Piel Escamosa (5+)." },
            { n: "Corteza Venenosa", p: 3, exclusiveGroup: "rasgoUnidad", summary: "Ataques Envenenados." }
        ],
        command: {
            c: {
                n: "Driade Anciana", p: 6,
                 // Rasgos/Hadas specific to champion
                 upgrades: [
                    { n: "Cuerpo Embrujado", p: 25, exclusiveGroup: "rasgoCampeon" },
                    { n: "Enjambre de Duendes", p: 10, exclusiveGroup: "rasgoCampeon" },
                    { n: "Desfile de Duendes Traviesos", p: 15, exclusiveGroup: "rasgoCampeon" },
                    { n: "El lamento de las Aldaboneras", p: 25, exclusiveGroup: "rasgoCampeon" }
                ]
            }
        },
        champSkills: { limit: 1, type: 'count', skillSource: 'Rasgos y Hadas (Campeón)' } // Placeholder for champ-specific skills if needed, handled via upgrades above
    },
    "Exploradores": {
        faction: "esil",
        foc: "Core",
        warning: "Máx 1 unidad por cada unidad de Guardia del Bosque/Claro.",
        points: 13,
        min: 5,
        max: 15,
        equipo: "Arma de mano, Armadura ligera y Arco largo élfico.",
        reglasEspeciales: "Cruzar Bosques, Destreza Marcial, Exploradores, Hostigadores.",
         perfiles: [
            { nombre: "Explorador", stats: { M: 5, HA: 4, HP: 5, F: 3, R: 3, H: 1, I: 6, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 6, F: 3, R: 3, H: 1, I: 6, A: 1, L: 8 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 1 },
            { n: "Flechas de Fuego Estelar", p: 1, exclusiveGroup: "arrowType" },
            { n: "Flechas de Tejo Negro", p: 2, exclusiveGroup: "arrowType" },
            { n: "Flechas de Hada", p: 1, exclusiveGroup: "arrowType" }
        ],
        command: { c: { n: "Oficial", p: 6 }, m: { n: "Músico", p: 6 } }
    },

    // === SPECIAL ===
    "Guardia Eterna": {
        faction: "esil",
        foc: "Special",
        points: 14,
        min: 10,
        max: 25,
        equipo: "Lanza Asrai, Armadura de Roble.",
        reglasEspeciales: "Cruzar Bosques, Tozudos, Destreza Marcial, Escolta (Inmunes Psicología si Biennacido/Noble en unidad).",
        perfiles: [
            { nombre: "Guardia Eterna", stats: { M: 5, HA: 5, HP: 4, F: 4, R: 3, H: 1, I: 6, A: 1, L: 9 } },
            { nombre: "Oficial", stats: { M: 5, HA: 5, HP: 4, F: 4, R: 3, H: 1, I: 6, A: 2, L: 9 } }
        ],
        options: [
            { n: "Escudo", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50,
        champItems: 25
    },
    "Centinelas del Bosque Salvaje": {
        faction: "esil",
        foc: "Special",
        points: 12,
        min: 10,
        max: 25,
        equipo: "Armadura de Roble y Espadón de Cacería.",
        reglasEspeciales: "Cruzar Bosques, Inmunes a terror y miedo, Destreza Marcial, Cazadores de horrores (Odio vs Miedo/Terror).",
        perfiles: [
            { nombre: "Centinela", stats: { M: 5, HA: 5, HP: 4, F: 4, R: 3, H: 1, I: 5, A: 1, L: 9 } },
            { nombre: "Oficial", stats: { M: 5, HA: 5, HP: 4, F: 4, R: 3, H: 1, I: 5, A: 2, L: 9 } }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50
    },
    "Jinetes Salvajes de Kurnous": {
        faction: "esil",
        foc: "Special",
        points: 27,
        min: 5,
        max: 10,
        equipo: "Arma de mano, Lanza, Armadura ligera.",
        montura: "Corceles élficos.",
        reglasEspeciales: "Cruzar Bosques, Caballería Rápida, Odio (Jinetes, Todos), Espíritu del Bosque, Hostigadores.",
        perfiles: [
            { nombre: "Jinete Salvaje", stats: { M: 5, HA: 5, HP: 4, F: 4, R: 3, H: 1, I: 6, A: 2, L: 9 } },
            { nombre: "Oficial", stats: { M: 5, HA: 5, HP: 4, F: 4, R: 3, H: 1, I: 6, A: 3, L: 9 } },
            { nombre: "Corcel élfico", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Corcel de Kurnous", stats: { M: 9, HA: 4, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 7 } } // R3, not R4 in unit entry. Use R3
        ],
        options: [
            { n: "Jabalinas", p: 1 },
            { n: "Escudos", p: 2 },
            { n: "Sustituir por Corceles de Kurnous", p: 3, summary: "+1HA montura, Imp Carga(1)." }
        ],
        command: {
            c: {
                 n: "Oficial", p: 6,
                 upgrades: [ // Rasgos y Hadas specific to champion
                    { n: "Cuerpo Embrujado", p: 25, exclusiveGroup: "rasgoCampeonKurnous" },
                    { n: "Enjambre de Duendes", p: 10, exclusiveGroup: "rasgoCampeonKurnous" },
                    { n: "Desfile de Duendes Traviesos", p: 20, exclusiveGroup: "rasgoCampeonKurnous" },
                    { n: "El lamento de las Aldaboneras", p: 30, exclusiveGroup: "rasgoCampeonKurnous" }
                 ]
            },
             m: { n: "Músico", p: 6 }
        },
        champItems: 25
        // champSkills handled via upgrades
    },
    "Arbóreos": {
        faction: "esil",
        foc: "Special",
        points: 50,
        min: 3,
        max: 6,
        equipo: "Garras y Ramas (Arma de mano).",
        reglasEspeciales: "Espíritu del Bosque, Piel Escamosa (4+), Inflamable.",
        perfiles: [
            { nombre: "Arbóreo", stats: { M: 6, HA: 4, HP: 0, F: 5, R: 5, H: 4, I: 2, A: 3, L: 8 } },
            { nombre: "Oficial", stats: { M: 6, HA: 4, HP: 0, F: 5, R: 5, H: 4, I: 2, A: 4, L: 8 } }
        ],
        options: [
             { n: "Ramaje Punzante", p: 3, exclusiveGroup: "rasgoUnidadArboreo", summary: "Poder de Penetración." },
             { n: "Corteza Nudosa", p: 3, exclusiveGroup: "rasgoUnidadArboreo", summary: "Piel Escamosa (3+)." }, // Improves base 4+
             { n: "Corteza Venenosa", p: 3, exclusiveGroup: "rasgoUnidadArboreo", summary: "Ataques Envenenados." }
        ],
        command: {
             c: {
                n: "Oficial", p: 8,
                 upgrades: [ // Rasgos y Hadas specific to champion
                    { n: "Tamaño Descomunal", p: 20, exclusiveGroup: "rasgoCampeonArboreo" },
                    { n: "Cuerpo Embrujado", p: 25, exclusiveGroup: "rasgoCampeonArboreo" },
                    { n: "Enjambre de Duendes", p: 10, exclusiveGroup: "rasgoCampeonArboreo" },
                    { n: "Desfile de Duendes Traviesos", p: 15, exclusiveGroup: "rasgoCampeonArboreo" },
                    { n: "El lamento de las Aldaboneras", p: 25, exclusiveGroup: "rasgoCampeonArboreo" }
                ]
             }
        }
        // champSkills handled via upgrades
    },
    "Hijas del Roble Eterno": {
        faction: "esil",
        foc: "Special",
        points: 28,
        min: 5,
        max: 10,
        equipo: "Arma de mano, Armadura ligera, Jabalinas de Espino Negro (Jabalina, mágicas, veneno).",
        montura: "Corceles de Isha.",
        reglasEspeciales: "Cruzar Bosques, Caballería Rápida, Hostigadores, Regeneración (5+), Acólitas (Portahechizos 4 - Enredar/Protección de Isha).",
        perfiles: [
            { nombre: "Hija del Roble Eterno", stats: { M: 5, HA: 4, HP: 5, F: 3, R: 3, H: 1, I: 6, A: 1, L: 9 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 6, F: 3, R: 3, H: 1, I: 6, A: 1, L: 9 } }, // A1 in PDF
            { nombre: "Corcel de Isha", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 4, A: 1, L: 7 } } // Paso Espectral rule on mount
        ],
        command: {
             c: {
                 n: "Oficial", p: 6,
                 upgrades: [ // Rasgos y Hadas specific to champion
                    { n: "Cuerpo Embrujado", p: 25, exclusiveGroup: "rasgoCampeonHija" },
                    { n: "Enjambre de Duendes", p: 10, exclusiveGroup: "rasgoCampeonHija" },
                    { n: "Desfile de Duendes Traviesos", p: 20, exclusiveGroup: "rasgoCampeonHija" },
                    { n: "El lamento de las Aldaboneras", p: 30, exclusiveGroup: "rasgoCampeonHija" }
                 ]
             },
             m: { n: "Músico", p: 6 }
        },
        champItems: 25
        // champSkills handled via upgrades
    },
     "Jinetes de Halcón": {
        faction: "esil",
        foc: "Special",
        points: 35,
        min: 3,
        max: 6,
        equipo: "Arma de mano, Lanza y Armadura ligera.",
        montura: "Halcones de Guerra.",
        reglasEspeciales: "Caballería Rápida, Ataque Relámpago, Hostigadores, Gran velocidad.",
        perfiles: [
            { nombre: "Jinete de Halcón", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 2, L: 8 } },
            { nombre: "Halcón de Guerra", stats: { M: 3, HA: 4, HP: 0, F: 4, R: 4, H: 3, I: 5, A: 2, L: 7 } } // M3 from PDF profile table
        ],
         options: [
            { n: "Jabalinas", p: 1 },
            { n: "Arcos largos élficos", p: 3 },
            { n: "Escudo", p: 2 }
        ],
        command: { c: { n: "Oficial", p: 8 }, m: { n: "Músico", p: 8 } }
    },
    "Carro de Guerra": {
        faction: "esil",
        foc: "Special",
        points: 70,
        min: 1,
        max: 1, // Only 1 allowed? PDF implies multiple possible
        equipo: "Aurigas: Armas de mano, lanzas y arcos élficos.",
        reglasEspeciales: "Caballería Rápida, TSA 5+, Cruzar (bosques).",
        perfiles: [
            { nombre: "Carro de Guerra", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 4, H: 3, I: "-", A: "-", L: "-" } },
            { nombre: "Aurigas Elfos Silvanos (2)", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } },
            { nombre: "Corcel élfico (2)", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 6 } }
        ],
        options: [
             { n: "Cuchillas en las ruedas", p: 5 }
        ]
    },

    // === RARE ===
    "Forestales": {
        faction: "esil",
        foc: "Rare",
        points: 22,
        min: 5,
        max: 8,
        equipo: "Armadura ligera, dos armas de mano, arco élfico, Capa de Forestal (-1 impactar vs disparo).",
        reglasEspeciales: "Cruzar Bosques, Destreza Marcial, Exploradores, Hostigadores, Tramperos, Tiradores Expertos.",
        perfiles: [
            { nombre: "Forestal", stats: { M: 6, HA: 4, HP: 6, F: 3, R: 3, H: 1, I: 6, A: 1, L: 9 } },
            { nombre: "Oficial", stats: { M: 6, HA: 4, HP: 7, F: 3, R: 3, H: 1, I: 6, A: 1, L: 9 } } // Francotirador rule on Oficial
        ],
        options: [
            { n: "Flechas de Fuego Estelar", p: 2, exclusiveGroup: "arrowType" },
            { n: "Flechas de Tejo Negro", p: 3, exclusiveGroup: "arrowType" },
            { n: "Flechas de Hada", p: 1, exclusiveGroup: "arrowType" }
        ],
        command: { c: { n: "Oficial", p: 8, upgrades: [{ n:"Francotirador", p: 0 }] }, m: { n: "Músico", p: 6 } }, // Add Francotirador to champ name/summary
        champItems: 25
    },
    "Bailarines Guerreros": {
        faction: "esil",
        foc: "Rare",
        points: 18,
        min: 5,
        max: 15,
        equipo: "Dos armas de mano, Tatuajes Talismánicos (RM 1).",
        reglasEspeciales: "Inmunes a Terror y Pánico, Destreza Marcial, Esquivar (5+), Hostigadores, Danzas de Guerra de Loec, Cruzar (bosques), Elitistas.",
        perfiles: [
            { nombre: "Bailarin Guerrero", stats: { M: 6, HA: 6, HP: 4, F: 4, R: 3, H: 1, I: 6, A: 2, L: 9 } },
            { nombre: "Oficial", stats: { M: 6, HA: 6, HP: 4, F: 4, R: 3, H: 1, I: 6, A: 3, L: 9 } }
        ],
        command: { c: { n: "Oficial", p: 6 }, m: { n: "Músico", p: 6 } },
        champItems: 25
    },
    "Hombre Árbol": {
        faction: "esil",
        foc: "Rare",
        points: 270,
        min: 1,
        max: 1,
        equipo: "Garras y Ramas (Arma de mano).",
        reglasEspeciales: "Piel escamosa (3+), Espíritu del Bosque, Cánticos (Portahechizos 2D3+3 - Sanadora/Eternidad/Brumas), Inflamable, Odio (Pielesverdes, Enanos).",
        perfiles: [
            { nombre: "Hombre Árbol", stats: { M: 6, HA: 5, HP: 4, F: 7, R: 7, H: 6, I: 2, A: 5, L: 9 } }
        ],
         // Rasgos y Hadas selected via armySkillsDB
        maxSkills: { limit: 2, type: 'count', skillSource: 'Rasgos y Hadas (Hombre Árbol)' }
    },
    "Duendes del Bosque": {
        faction: "esil",
        foc: "Rare",
        points: 40,
        min: 2,
        max: 5,
        equipo: "Dardos y lanzas (Arma de mano).",
        reglasEspeciales: "Etéreos, Espíritu del bosque, Incordiar, Exploradores, Hostigadores, Ataques envenenados, Ataques aleatorios (1D6), Magia errática.",
        perfiles: [
            { nombre: "Duendes del Bosque", stats: { M: 6, HA: 3, HP: 3, F: 2, R: 2, H: 4, I: 5, A: "1D6", L: 7 } }
        ]
    },
    "Águilas Gigantes": {
        faction: "esil",
        foc: "Rare",
        points: 40,
        min: 1,
        max: 4,
        equipo: "Garras y pico (Arma de mano).",
        reglasEspeciales: "Volar, Miedo, Hostigadoras, Carga devastadora.",
        perfiles: [
            { nombre: "Águila Gigante", stats: { M: 2, HA: 5, HP: 0, F: 5, R: 4, H: 3, I: 4, A: 2, L: 8 } },
            { nombre: "Gran Águila", stats: { M: 2, HA: 5, HP: 0, F: 5, R: 4, H: 3, I: 4, A: 3, L: 8 } }
        ],
        command: { c: { n: "Gran Águila", p: 5 } }
    },

    // === LORDS ===
    "Biennacido": {
        faction: "esil",
        foc: "Lord",
        points: 120,
        min: 1,
        max: 1, // Placeholder
        equipo: "Arma de mano y Arco largo élfico.",
        reglasEspeciales: "Cruzar Bosques, Destreza marcial.",
         perfiles: [
            { nombre: "Biennacido", stats: { M: 5, HA: 7, HP: 7, F: 4, R: 3, H: 3, I: 8, A: 4, L: 10 } }
        ],
         options: [
            { n: "Arma a dos manos", p: 6 },
            { n: "Arma de mano adicional", p: 4 },
            { n: "Lanza", p: 4 },
            { n: "Lanza Asrai", p: 6 },
            { n: "Armadura ligera", p: 3 },
            { n: "Armadura de Roble", p: 5 },
            { n: "Escudo", p: 3 },
            { n: "Flechas de Fuego Estelar", p: 2, exclusiveGroup: "arrowType" },
            { n: "Flechas de Tejo Negro", p: 4, exclusiveGroup: "arrowType" },
            { n: "Flechas de Hada", p: 2, exclusiveGroup: "arrowType" }
        ],
        mounts: ["Corcel élfico", "Carro de Guerra", "Águila gigante", "Gran Venado", "Halcón de Guerra", "Dragón Forestal"],
        maxMagicItems: 3,
        maxRelics: 1,
        maxSkills: { limit: 1, type: 'count', skillSource: 'Estirpes (Biennacido)' }
    },
     "Aeda Mágico": {
        faction: "esil",
        foc: "Lord",
        points: 165,
        min: 1,
        max: 1, // Placeholder
        equipo: "Arma de mano, Arco élfico.",
        reglasEspeciales: "Cruzar Bosques, Destreza Marcial.",
         perfiles: [
            { nombre: "Aeda Mágico", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 3, I: 6, A: 1, L: 9 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 4 },
            { n: "Lanza", p: 3 },
            { n: "Arma de mano adicional", p: 2 },
        ],
        magicLevel: 3,
        magicOptions: [{ level: 4, cost: 35 }],
        magicLores: ["Alta Magia", "Vida", "Bestias", "Sombras", "Cielos"],
        mounts: ["Corcel élfico", "Carro de Guerra", "Águila gigante", "Unicornio", "Halcón de Guerra", "Dragón Forestal"],
        maxMagicItems: 3,
        maxRelics: 1,
        maxSkills: { limit: 1, type: 'count', skillSource: 'Estirpes (Mago)' }
    },
    "Milenario": {
        faction: "esil",
        foc: "Lord",
        warning: "0-1",
        points: 370,
        min: 1,
        max: 1,
        equipo: "Garras y Ramas (Arma de mano).",
        reglasEspeciales: "Piel escamosa (2+), Espíritu del Bosque, Cánticos, Inflamable, Odio (Pielesverdes, Enanos).",
         perfiles: [
            { nombre: "Milenario", stats: { M: 6, HA: 6, HP: 4, F: 7, R: 7, H: 7, I: 2, A: 6, L: 10 } }
        ],
        magicLevel: 3,
        magicLores: ["Vida"], // Only Life
        maxSkills: { limit: 3, type: 'count', skillSource: 'Rasgos y Hadas (Milenario)' }
    },

    // === HEROES ===
    "Noble": {
        faction: "esil",
        foc: "Hero",
        points: 70,
        min: 1,
        max: 1, // Placeholder
        equipo: "Arma de mano y Arco largo élfico.",
        reglasEspeciales: "Cruzar Bosques, Destreza marcial.",
         perfiles: [
            { nombre: "Noble", stats: { M: 5, HA: 6, HP: 6, F: 4, R: 3, H: 2, I: 7, A: 3, L: 9 } }
        ],
         options: [
            { n: "Arma a dos manos", p: 4 },
            { n: "Arma de mano adicional", p: 3 },
            { n: "Lanza", p: 3 },
            { n: "Lanza Asrai", p: 4 },
            { n: "Armadura ligera", p: 2 },
            { n: "Armadura de Roble", p: 4 },
            { n: "Escudo", p: 2 },
            { n: "Flechas de Fuego Estelar", p: 2, exclusiveGroup: "arrowType" },
            { n: "Flechas de Tejo Negro", p: 4, exclusiveGroup: "arrowType" },
            { n: "Flechas de Hada", p: 2, exclusiveGroup: "arrowType" }
        ],
        mounts: ["Corcel élfico", "Carro de Guerra", "Halcón de Guerra", "Águila gigante", "Gran Venado"],
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 },
        maxMagicItems: 3,
        maxSkills: { limit: 1, type: 'count', skillSource: 'Estirpes (Noble)' }
    },
    "Cantor de los Árboles": {
        faction: "esil",
        foc: "Hero",
        points: 70,
        min: 1,
        max: 1, // Placeholder
        equipo: "Arma de mano, Arco élfico.",
        reglasEspeciales: "Cruzar Bosques, Destreza Marcial.",
         perfiles: [
            { nombre: "Cantor de los Árboles", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 2, I: 6, A: 1, L: 8 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 3 },
            { n: "Lanza", p: 2 },
            { n: "Arma de mano adicional", p: 2 }
        ],
        magicLevel: 1,
        magicOptions: [{ level: 2, cost: 35 }],
        magicLores: ["Vida", "Bestias", "Sombras", "Cielos"],
        mounts: ["Corcel élfico", "Carro de Guerra", "Halcón de Guerra", "Unicornio"],
        maxMagicItems: 2,
        maxSkills: { limit: 1, type: 'count', skillSource: 'Estirpes (Mago)' }
    },
    "Espectro del Bosque": {
        faction: "esil",
        foc: "Hero",
        points: 70,
        min: 1,
        max: 1, // Placeholder
        equipo: "Garras y ramas (arma de mano).",
        reglasEspeciales: "Espíritu del Bosque.",
         perfiles: [
            { nombre: "Espectro del Bosque", stats: { M: 5, HA: 6, HP: 4, F: 4, R: 4, H: 3, I: 4, A: 4, L: 9 } }
        ],
        magicLevel: 0,
        magicOptions: [{ level: 1, cost: 35 }],
        magicLores: ["Vida", "Bestias"],
        maxSkills: { limit: 2, type: 'count', skillSource: 'Rasgos y Hadas (Espectro)' }
    },
    "Danzante de Sombras": {
        faction: "esil",
        foc: "Hero",
        warning: "0-1. Requiere unidad de Bailarines Guerreros.",
        points: 135,
        min: 1,
        max: 1,
        equipo: "Dos Armas de Mano, Tatuajes Talismánicos (RM 1).",
        reglasEspeciales: "Inmunes a Terror y Pánico, Golpe Maestro, Destreza Marcial, Esquivar (4+), Danzas de Guerra de Loec, Temido (solo unirse a Bailarines).",
         perfiles: [
            { nombre: "Danzante de Sombras", stats: { M: 6, HA: 7, HP: 4, F: 4, R: 3, H: 2, I: 7, A: 4, L: 9 } }
        ],
        magicLevel: 1,
        magicOptions: [{ level: 2, cost: 35 }],
        magicLores: ["Sombras"],
        maxMagicItems: 2
    }
};

const mountsDB_esil = {
     "Corcel élfico": {
        faction: "esil",
        points: 12, // Cost for Noble/Cantor
        perfiles: [ { nombre: "Corcel élfico", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 6 } } ],
        reglasEspeciales: "Bestia. Caballería Rápida. Cruzar Bosques."
    },
    "Corcel élfico (Biennacido/Aeda)": { // Different cost for Lords
        faction: "esil",
        points: 15,
        perfiles: [ { nombre: "Corcel élfico", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 6 } } ],
        reglasEspeciales: "Bestia. Caballería Rápida. Cruzar Bosques."
    },
     "Carro de Guerra (Biennacido/Aeda)": {
        faction: "esil",
        points: 50, // Lord cost
        perfiles: [
            { nombre: "Carro de Guerra", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 4, H: 3, I: "-", A: "-", L: "-" } },
            { nombre: "Auriga Elfo Silvano (1)", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } },
            { nombre: "Corcel élfico (2)", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 6 } }
        ],
        reglasEspeciales: "Carro. Caballería Rápida, TSA 5+, Cruzar (bosques)."
    },
     "Carro de Guerra (Noble/Cantor)": {
        faction: "esil",
        points: 55, // Hero cost
        perfiles: [
            { nombre: "Carro de Guerra", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 4, H: 3, I: "-", A: "-", L: "-" } },
            { nombre: "Auriga Elfo Silvano (1)", stats: { M: 5, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 5, A: 1, L: 8 } },
            { nombre: "Corcel élfico (2)", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 6 } }
        ],
        reglasEspeciales: "Carro. Caballería Rápida, TSA 5+, Cruzar (bosques)."
    },
    "Águila gigante": {
        faction: "esil",
        points: 40,
        perfiles: [ { nombre: "Águila Gigante", stats: { M: 2, HA: 5, HP: 0, F: 5, R: 4, H: 3, I: 4, A: 2, L: 8 } } ],
        reglasEspeciales: "Bestia Monstruosa. Caballería Monstruosa. Volar, Miedo."
    },
     "Gran Venado": {
        faction: "esil",
        points: 55,
        perfiles: [ { nombre: "Gran Venado", stats: { M: 9, HA: 4, HP: 0, F: 5, R: 5, H: 3, I: 4, A: 3, L: 7 } } ],
        reglasEspeciales: "Bestia Monstruosa. Caballería Monstruosa Rápida. Espíritu del bosque, Miedo, Impactos por carga (1), Piel Gruesa (+1 TSA)."
    },
     "Halcón de Guerra (Biennacido/Aeda)": { // Lord Cost
        faction: "esil",
        points: 30,
        perfiles: [ { nombre: "Halcón de Guerra", stats: { M: 3, HA: 4, HP: 0, F: 4, R: 4, H: 2, I: 5, A: 2, L: 7 } } ], // H2 in mount profile, H3 in unit? Use H2 for mount.
        reglasEspeciales: "Bestia Monstruosa. Caballería Monstruosa. Volar, Ataque Relámpago, Poder de Penetración."
    },
     "Halcón de Guerra (Noble/Cantor)": { // Hero Cost
        faction: "esil",
        points: 25,
        perfiles: [ { nombre: "Halcón de Guerra", stats: { M: 3, HA: 4, HP: 0, F: 4, R: 4, H: 2, I: 5, A: 2, L: 7 } } ],
        reglasEspeciales: "Bestia Monstruosa. Caballería Monstruosa. Volar, Ataque Relámpago, Poder de Penetración."
    },
    "Unicornio (Aeda)": { // Lord Cost
        faction: "esil",
        points: 40,
        perfiles: [ { nombre: "Unicornio", stats: { M: 9, HA: 5, HP: 0, F: 4, R: 4, H: 3, I: 5, A: 2, L: 9 } } ], // A2 in mount profile, A3 in Bretonnia? Use A2.
        reglasEspeciales: "Bestia Monstruosa. Caballería Monstruosa Rápida. Espíritu del Bosque, RM(3), Cuerno (+2F y Ataque Rápido al cargar)."
    },
     "Unicornio (Cantor)": { // Hero Cost
        faction: "esil",
        points: 50, // Higher cost for Hero? Check PDF consistency. Using 50 from Cantor entry.
        perfiles: [ { nombre: "Unicornio", stats: { M: 9, HA: 5, HP: 0, F: 4, R: 4, H: 3, I: 5, A: 2, L: 9 } } ],
        reglasEspeciales: "Bestia Monstruosa. Caballería Monstruosa Rápida. Espíritu del Bosque, RM(3), Cuerno (+2F y Ataque Rápido al cargar)."
    },
    "Dragón Forestal": {
        faction: "esil",
        points: 275,
        perfiles: [ { nombre: "Dragón Forestal", stats: { M: 6, HA: 6, HP: 0, F: 6, R: 6, H: 6, I: 3, A: 6, L: 8 } } ],
        reglasEspeciales: "Monstruo. Cruzar Bosques, Volar, Piel escamosa (3+), Arma Aliento F2 (niega TSA)."
    },
     // Estirpe Kurnous Mounts (reduced cost)
     "Corcel élfico (Kurnous)": {
        faction: "esil",
        points: 5,
        perfiles: [ { nombre: "Corcel élfico", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 6 } } ],
        reglasEspeciales: "Bestia. Caballería Rápida. Cruzar Bosques."
    },
    "Corcel de Kurnous (Kurnous)": {
        faction: "esil",
        points: 10,
        perfiles: [ { nombre: "Corcel de Kurnous", stats: { M: 9, HA: 4, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 7 } } ],
        reglasEspeciales: "Bestia. Caballería Rápida. Cruzar Bosques, Impactos por carga (1), Espíritu del bosque."
    },
    "Gran Venado (Kurnous)": {
        faction: "esil",
        points: 45,
        perfiles: [ { nombre: "Gran Venado", stats: { M: 9, HA: 4, HP: 0, F: 5, R: 5, H: 3, I: 4, A: 3, L: 7 } } ],
        reglasEspeciales: "Bestia Monstruosa. Caballería Monstruosa Rápida. Espíritu del bosque, Miedo, Impactos por carga (1), Piel Gruesa (+1 TSA)."
    }
};

const magicItemsDB_esil = {
    // --- ARMAS MÁGICAS ---
    "Arma Mágica": {
        "Gran Arco de Kurnous": { points: 50, faction: "esil", relic: true, summary: "Arco Largo Élfico. Infantería. F6, Niega TSA, Heridas(1D3). Trata como Lanzavirotes (atraviesa filas). No flechas especiales/mágicas. No Disparos Múltiples." },
        "El Filo de Daith": { points: 45, faction: "esil", relic: true, summary: "AM. Repite impactar/herir. -3 TSA." },
        "Arco de Loren": { points: 50, faction: "esil", relic: false, summary: "Arco Largo Élfico. F5, Disparos Múltiples(4)." },
        "Espada de los Espíritus": { points: 45, faction: "esil", relic: false, summary: "AM. Hiere con I vs I (en lugar de F vs R)." },
        "Venablo de la Cacería": { points: 35, faction: "esil", relic: false, summary: "Lanza. Poder Penetración. Heridas no regenerables/recuperables. 4+ sufre 1H adicional/turno (sin TSA/Reg). Puede lanzarse (Jabalina, retorna)." },
        "Espadas de Loec": { points: 30, faction: "esil", relic: false, summary: "Armas Emparejadas. Repite herir fallidos. -2 TSA." },
        "Filos de Plata": { points: 25, faction: "esil", relic: false, summary: "Lanza Asrai. +1F, Odio. Vs Demonio/No Muerto -> Heridas Múltiples(2)." },
        "La Garra de Callach": { points: 25, faction: "esil", relic: false, summary: "Espadón Cacería. Impactos múltiples(2)." },
        "Tiro Certero": { points: 25, faction: "esil", relic: false, summary: "Arco largo élfico. Francotirador (o Disparo Letal si ya lo tenía)." },
        "Disparo Veloz": { points: 20, faction: "esil", relic: false, summary: "Arco élfico. Disparos múltiples(3), Disparo Rápido." },
        "Espadas Ígneas de Ragerth": { points: 15, faction: "esil", relic: false, summary: "Armas emparejadas. Flamígeras, +1 herir." }
    },
    // --- ARMADURAS MÁGICAS --- (None specific to Wood Elves, must use Common minus Armaduras)
    // --- TALISMANES ---
    "Talismán": {
        "Piedra del Retoñar": { points: 40, faction: "esil", relic: true, summary: "Un uso. Al llegar a 0H -> 1D6: (1-5) recupera 1H; (6) recupera todas." },
        "Broche de Amarantos": { points: 45, faction: "esil", relic: false, summary: "TSE Aura Demoníaca (3+)." },
        "Urdimbre de Encantamientos": { points: 40, faction: "esil", relic: false, summary: "TSE 4+ vs disparos. Enemigos en contacto chequean L o impactan con 6+." },
        "Arpa del Bardo": { points: 35, faction: "esil", relic: false, summary: "TSE 5+. Cuenta como Músico. Unidad 6\": Ni un paso atrás!." },
        "Piedra de la Muerte Invernal": { points: 30, faction: "esil", relic: false, summary: "-1 impactar/-1 herir vs portador. Inmune Fuego. Espíritus Bosque 6\": Estupidez." },
        "Colgante de Ambar": { points: 20, faction: "esil", relic: false, summary: "Sólo a pie. Enemigos en contacto I1." },
        "Gema de Merciw": { points: 15, faction: "esil", relic: false, summary: "Portador ignora bonos F de armas. Atacantes ignoran bonos F de armas vs portador." }
    },
    // --- OBJETOS HECHIZADOS ---
    "Objeto Hechizado": {
        "Cuerno de Gwytherc": { points: 45, faction: "esil", relic: true, summary: "Un uso. Inicio turno: Aliados 18\" -> +1M, Veloces, Odio(todos) (1 turno)." },
        "Flecha Lluvia de Muerte": { points: 35, faction: "esil", relic: false, summary: "Un uso. Flecha mágica -> 3D6 disparos F4 mágicos. Ignora arco mágico. No Francotirador." },
        "Dientes de Dragón": { points: 30, faction: "esil", relic: false, summary: "Flechas mágicas. Veneno, Heridas Múltiples(1D3). Ignora arco mágico. No Francotirador." },
        "Flecha Voladora de Naloer": { points: 30, faction: "esil", relic: false, summary: "Un uso. Flecha mágica vs Volar/Flotar. Impacto -> 1D3 imp F10. Ignora arco mágico. No Francotirador." },
        "Cristal Espectral": { points: 25, faction: "esil", relic: false, summary: "Enemigos 6\": -1L." },
        "Broche de Elynett": { points: 20, faction: "esil", relic: false, summary: "Portador y unidad: Repite chequeos psicología." },
        "Espadillas Arcanas": { points: 20, faction: "esil", relic: false, summary: "Flechas mágicas. Niega TSA. Ignora arco mágico. No Francotirador." },
        "Flechas del fallecimiento Agónico": { points: 15, faction: "esil", relic: false, summary: "Flechas Mágicas. Unidad con 1+ herida -> chequeo Pánico. Ignora arco mágico. No Francotirador." }
    },
    // --- ARTEFACTOS ARCANOS ---
    "Artefacto Arcano": {
        "Vara de Olmo": { points: 40, faction: "esil", relic: false, summary: "Repite 1 dado dispersión/fase. Si solo Saber Vida: ignora Desconcentrarse." },
        "Orbe del Bosque Profundo": { points: 40, faction: "esil", relic: false, summary: "Portahechizos(4). Conoce 'Zarzas Místicas' (Saber Vida)." },
        "Orbe de las Profecías": { points: 35, faction: "esil", relic: false, summary: "Repite 1 dado energía/lanzamiento por fase. +1 canalizar." },
        "Corazón de Ranu": { points: 35, faction: "esil", relic: false, summary: "Repite disfunciones. Guarda hasta 2 dados energía/disp no usados para sig. fase." },
        "Bastón Verde": { points: 20, faction: "esil", relic: false, summary: "Inmune Fuego. +1 dispersar (+2 vs Fuego/Tzeentch)." }
    },
    // --- ESTANDARTES MÁGICOS ---
    "Estandarte Mágico": {
        "Estandarte Real de Ariel": { points: 50, faction: "esil", relic: true, summary: "BSB. Aliados 6\": Regeneración (5+)." },
        "Pabellón Real de Orión": { points: 40, faction: "esil", relic: true, summary: "BSB. Unidad: Sangre Fría, Miedo. Portador: Terror." },
        "Gaemrath, el estandarte del Invierno": { points: 35, faction: "esil", relic: false, summary: "Un uso. Inicio combate: Unidad Inmune Desmoralización (1 turno completo). No puede perseguir." },
        "Faoghir, el estandarte del Otoño": { points: 35, faction: "esil", relic: false, summary: "Enemigos huyendo de combate vs esta unidad: -50% Mov huida." },
        "Yairash, el estandarte del Verano": { points: 25, faction: "esil", relic: false, summary: "Unidad: Carga Devastadora." },
        "Aech, el estandarte de la Primavera": { points: 20, faction: "esil", relic: false, summary: "Unidad siempre puede Aguantar y Disparar / Disparar y Huir." },
        "Estandarte de la Lluvia": { points: 10, faction: "esil", relic: false, summary: "Unidad: Inmune Fuego." }
    }
};

const armySkillsDB_esil = { // Estirpes & Rasgos/Hadas
    // Estirpes Biennacido/Noble
    "Estirpe de Bailarines Guerreros (Personaje)": { points: 40, faction: "esil", type: "Estirpe", skillSource: 'Estirpes (Biennacido)', summary: "+1M, +1HA. Esquiva(4+), Inmune Terror/Pánico, Golpe Maestro, Danzas Loec. Tatuajes Talismánicos. No armadura/proyectil/montura. Solo unirse Bailarines. No BSB." },
    "Estirpe de Centinelas": { points: 15, faction: "esil", type: "Estirpe", skillSource: 'Estirpes (Biennacido)', summary: "Inmune Terror/Pánico, Odio. Vs Miedo/Terror -> Heridas Múltiples(2). Equipado Espadón Cacería. Solo unirse Centinelas. A pie." },
    "Estirpe Eterna": { points: 5, faction: "esil", type: "Estirpe", skillSource: 'Estirpes (Biennacido)', summary: "Tozudez, Inmune Psicología. Solo unirse unidades Escolta. Puede comprar Armadura Dragón (+5pts, TSA 4+, Inmune Fuego). 1 Obj Mágico Alto Elfo (no montura Águila/Halcón/Venado)." },
    "Estirpe de Jinetes de Kurnous": { points: 35, faction: "esil", type: "Estirpe", skillSource: 'Estirpes (Biennacido)', summary: "Esquiva(5+), Miedo, Inmune Pánico, Ataques Mágicos, Odio(Todos). Montura obligatoria: Corcel Élfico(5pts)/Kurnous(10pts)/Gran Venado(45pts). Cab Rápida." },
    "Estirpe de Jinetes del Viento": { points: 15, faction: "esil", type: "Estirpe", skillSource: 'Estirpes (Biennacido)', summary: "Montura obligatoria: Halcón Guerra. Él y unidad Jinetes Halcón: Carga Devastadora." },
    "Estirpe de Forestales": { points: 10, faction: "esil", type: "Estirpe", skillSource: 'Estirpes (Biennacido)', summary: "+1HP. Tirador Experto, Explorador. Equipado Capa Forestal. Golpe Letal (disparo). No montura. Max AL. No BSB." },
     // Estirpes Noble Only
     "Estirpe de Señores de las Bestias": { points: 10, faction: "esil", type: "Estirpe", skillSource: 'Estirpes (Noble)', summary: "M8. No montura. No BSB. Forma unidad Hostigadores con 1-5 Lobos Gigantes(+10)/1-2 Tigres(+20)/1 Oso Cavernario(+45). Gana hab. bestias, bestias usan su L." },
    // Estirpes Mago
    "Estirpe de Tejedores de Encantamientos": { points: 25, faction: "esil", type: "Estirpe", skillSource: 'Estirpes (Mago)', summary: "A 12\" bosque/agua: +1 lanzar, +1 canalizar. Puede comprar: Familiar Faérico(15pts)/Cuerpo Embrujado(25pts)." },
    "Estirpe de Videntes": { points: 35, faction: "esil", type: "Estirpe", skillSource: 'Estirpes (Mago)', summary: "Señor Conocimiento (saber elegido, no Alta Magia)." },
    "Estirpe de Cambiaformas": { points: 50, faction: "esil", type: "Estirpe", skillSource: 'Estirpes (Mago)', summary: "No montura/unidades. Solo Saber Bestias. Aeda -> Señor Conocimiento(Bestias). Portahechizos(5+): Forma Bestial (Gran Águila/Ciervo Albino/Gran Oso)." },

    // Rasgos y Hadas Driade Anciana
    "Cuerpo Embrujado (Campeón)": { points: 25, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Campeón)', summary: "RM(2)." },
    "Enjambre de Duendes (Campeón)": { points: 10, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Campeón)', summary: "Enemigos en contacto: -1HA." },
    "Desfile de Duendes Traviesos (Campeón)": { points: 15, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Campeón)', summary: "Ataque disparo 12\" F4 (impacta 3+, Francotirador, mágico)." },
    "El lamento de las Aldaboneras (Campeón)": { points: 25, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Campeón)', summary: "Un uso. Portahechizos(6). Miniatura 12\" chequea L (3D6 descarta bajo) o sufre 1D3H sin TSA." },

    // Rasgos y Hadas Arbóreo Oficial
    "Tamaño Descomunal (Campeón Arbóreo)": { points: 20, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Campeón)', summary: "+1H, -2I (min 1)." },
    // Reuses Campeón generic skills for Arbóreo

    // Rasgos y Hadas Jinetes Kurnous Oficial / Hijas Roble Oficial
     "Desfile de Duendes Traviesos (Campeón Cab)": { points: 20, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Campeón)', summary: "Ataque disparo 12\" F4 (impacta 3+, Francotirador, mágico)." },
     "El lamento de las Aldaboneras (Campeón Cab)": { points: 30, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Campeón)', summary: "Un uso. Portahechizos(6). Miniatura 12\" chequea L (3D6 descarta bajo) o sufre 1D3H sin TSA." },
     // Reuses Campeón generic skills for Kurnous/Hijas

    // Rasgos y Hadas Hombre Árbol
    "Ramaje Punzante (Hombre Árbol)": { points: 5, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Hombre Árbol)', summary: "Poder de Penetración." },
    "Ataque de Raíces": { points: 15, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Hombre Árbol)', summary: "Ataque disparo 18\" F4 (mágico, Disparo Rápido, Disparos Múltiples 1D6)." },
    "Gran Zancada": { points: 10, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Hombre Árbol)', summary: "+1M." },
    "Tamaño Descomunal (Hombre Árbol)": { points: 25, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Hombre Árbol)', summary: "+1H, -2I (min 1)." },
    "Cuerpo Espinado": { points: 15, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Hombre Árbol)', summary: "Impactos por carga (1D3+1)." },
    "Corteza Nudosa (Hombre Árbol)": { points: 10, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Hombre Árbol)', summary: "Piel Escamosa (5+) o +1 Piel Escamosa." },
    "Corteza Venenosa (Hombre Árbol)": { points: 15, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Hombre Árbol)', summary: "Ataques Envenenados." },
    "Cuerpo Embrujado (Hombre Árbol)": { points: 25, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Hombre Árbol)', summary: "RM(2)." },
    "Enjambre de Duendes (Hombre Árbol)": { points: 15, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Hombre Árbol)', summary: "Enemigos en contacto: -1HA." },
    "Desfile de Duendes Traviesos (Hombre Árbol)": { points: 20, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Hombre Árbol)', summary: "Ataque disparo 12\" F4 (impacta 3+, Francotirador, mágico)." },
    "El lamento de las Aldaboneras (Hombre Árbol)": { points: 30, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Hombre Árbol)', summary: "Un uso. Portahechizos(6). Miniatura 12\" chequea L (3D6 descarta bajo) o sufre 1D3H sin TSA." },

     // Rasgos y Hadas Milenario
     "Familiar Faérico": { points: 20, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Milenario)', summary: "Sólo Magos. 1D6: (1) Estupidez T1; (2-4) +1 hechizo aleatorio (Sombras/Vida/Bestias); (5) Canaliza con 4+; (6) +1 dado energía/fase." },
     "Receptáculo de energía Arcana": { points: 40, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Milenario)', summary: "Magos aliados 12\" (incluido él): +1 lanzar." },
     "Pastor de Arboles": { points: 30, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Milenario)', summary: "Ni un paso atrás!." },
     // Reuses Hombre Árbol skills for Milenario

     // Rasgos y Hadas Espectro del Bosque
     "Familiar Faérico (Espectro)": { points: 20, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Espectro)', summary: "Sólo si es Mago. 1D6: (1) Estupidez T1; (2-4) +1 hechizo aleatorio (Sombras/Vida/Bestias); (5) Canaliza con 4+; (6) +1 dado energía/fase." },
     "Corteza Venenosa (Espectro)": { points: 10, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Espectro)', summary: "Ataques Envenenados." },
     "Corteza Nudosa (Espectro)": { points: 5, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Espectro)', summary: "Piel Escamosa (5+) o +1 Piel Escamosa." },
     "Ramaje Punzante (Espectro)": { points: 5, faction: "esil", type: "Rasgo/Hada", skillSource: 'Rasgos y Hadas (Espectro)', summary: "Poder de Penetración." },
     // Reuses Campeón generic skills for Espectro
};

const specialProfilesDB_esil = { // For Estirpe Señores de las Bestias
     "Lobo Gigante": {
        perfiles: [{ nombre: "Lobo Gigante", stats: { M: 8, HA: 4, HP: 0, F: 4, R: 4, H: 1, I: 4, A: 2, L: 6 } }],
        reglasEspeciales: "Miedo, Vanguardia."
     },
     "Tigre": {
         perfiles: [{ nombre: "Tigre", stats: { M: 8, HA: 4, HP: 0, F: 5, R: 4, H: 2, I: 5, A: 3, L: 6 } }],
         reglasEspeciales: "Miedo, Exploradores."
     },
     "Oso Cavernario": {
         perfiles: [{ nombre: "Oso Cavernario", stats: { M: 6, HA: 4, HP: 0, F: 6, R: 5, H: 4, I: 3, A: 3, L: 8 } }],
         reglasEspeciales: "Furia Asesina, Piel Escamosa (4+), Miedo."
     }
};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Elfos Silvanos",
    FACTION_ID: "esil",
    armySkillsLabel: "Estirpes/Rasgos", // Combined label
    FOC_CONFIG: {
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_esil,
    mountsDB: mountsDB_esil,
    magicItemsDB: magicItemsDB_esil,
    armySkillsDB: armySkillsDB_esil,
    specialProfilesDB: specialProfilesDB_esil
};

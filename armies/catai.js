// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: GRAN CATAI ---
// ===================================================================================
// Last Updated: 2025-10-26 - v4.2 (Yin/Yang Update)
import { commonMagicItemsDB } from '../comun.js'; // Assuming common items are in comun.js

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_catai = {
    // === CORE ===
    "Guerreros de Jade": {
        faction: "catai",
        foc: "Core",
        subfaction: "Yang", // Added subfaction
        canBeParent: true, // ADD THIS
        canBeChild: true,  // ADD THIS
        points: 7,
        min: 10,
        max: 40,
        equipo: "Arma de mano y Armadura pesada.",
        reglasEspeciales: "Voluntad del Dragon, Posición defensiva, Unidad principal, Destacamento.YANG",
        perfiles: [
            { nombre: "Guerrero de Jade", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 8 } },
            { nombre: "Campeón de Jade", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 8 } }
        ],
        options: [
            { n: "Escudo", p: 1 },
            { n: "Alabarda", p: 2 } // Does not replace hand weapon by default per instructions
        ],
        command: { c: { n: "Campeón de Jade", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        magicBanner: 25
    },
    "Ballesteros de Jade": {
        faction: "catai",
        foc: "Core",
        subfaction: "Yin", // Added subfaction
        canBeChild: true,
        points: 11,
        min: 10,
        max: 40,
        equipo: "Ballesta de repetición, Arma de mano y Armadura pesada.", // Added Arma de mano
        reglasEspeciales: "Voluntad del Dragón, Destacamento.YIN",
        perfiles: [
            { nombre: "Ballestero de Jade", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 8 } },
            { nombre: "Campeón de Jade", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 8 } }
        ],
        options: [
            { n: "Escudo", p: 1 }
        ],
        command: { c: { n: "Campeón de Jade", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        magicBanner: 25
    },
    "Lanceros Campesinos": {
        faction: "catai",
        foc: "Core",
        subfaction: "Yang", // Added subfaction
        points: 4,
        min: 10,
        max: 40,
        equipo: "Lanza y Arma de mano.", // Added Arma de mano
        reglasEspeciales: "YANG",
        perfiles: [
            { nombre: "Campesino", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Lider Campesino", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 6 } }
        ],
        // No options listed besides command
        command: { c: { n: "Lider Campesino", p: 4 }, s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } }
    },
    "Arqueros Campesinos": {
        faction: "catai",
        foc: "Core",
        subfaction: "Yin", // Added subfaction
        points: 4,
        min: 10,
        max: 40,
        equipo: "Arco largo y Arma de mano.",
        reglasEspeciales: "YIN",
        perfiles: [
            { nombre: "Campesino", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Lider Campesino", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 6 } }
        ],
        // No options listed besides command
        command: { c: { n: "Lider Campesino", p: 4 }, s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } }
    },

    // === SPECIAL ===
    "Lanceros de Jade": {
        faction: "catai",
        foc: "Special", // Can become Core via ruleset
        subfaction: "Yang", // Added subfaction
        warning: "Puede ser Unidad Básica si el General va montado en Caballo de Guerra.",
        points: 24,
        min: 5,
        max: 15,
        equipo: "Arma de mano, Lanza Catayana, Armadura pesada, Escudo.",
        montura: "Caballos de guerra con barda.",
        reglasEspeciales: "Voluntad del Dragón, Lanza Catayana.YANG",
        perfiles: [
            { nombre: "Lancero de Jade", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 8 } },
            { nombre: "Campeón de Jade", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 8 } },
            { nombre: "Caballo de guerra", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } }
        ],
        command: { c: { n: "Campeón de Jade", p: 8 }, s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } },
        magicBanner: 50,
        champItems: 25
    },
    // --- SPLIT Jinetes Campesinos START ---
    "Jinetes Campesinos": { // Original Yang version
        faction: "catai",
        foc: "Special",
        subfaction: "Yang", // Added subfaction
        points: 11,
        min: 5,
        max: 15,
        equipo: "Arma de mano, Lanza, Armadura ligera.",
        montura: "Caballos de guerra.",
        reglasEspeciales: "Caballería rápida.YANG",
        perfiles: [
            { nombre: "Campesino", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Lider Campesino", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 6 } },
            { nombre: "Caballo de guerra", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } }
        ],
        // No options that change subfaction
        command: { c: { n: "Lider Campesino", p: 6 }, m: { n: "Músico", p: 6 } }
    },
    "Jinetes Arqueros Campesinos": { // New Yin version
        faction: "catai",
        foc: "Special",
        subfaction: "Yin", // Added subfaction
        points: 13, // Base 11 + 2 points for bow upgrade
        min: 5,
        max: 15,
        equipo: "Arma de mano, Arco largo, Armadura ligera.", // Changed Lanza to Arco largo
        montura: "Caballos de guerra.",
        reglasEspeciales: "Caballería rápida.", // No alignment tag needed
        perfiles: [
            { nombre: "Campesino Arquero", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Lider Campesino", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 6 } },
            { nombre: "Caballo de guerra", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } }
        ],
        // No options
        command: { c: { n: "Lider Campesino", p: 6 }, m: { n: "Músico", p: 6 } }
    },
    // --- SPLIT Jinetes Campesinos END ---
    // --- SPLIT Guardia del Dragon Celestial START ---
    "Guardia del Dragon Celestial": { // Original Yang version with Sword/Shield or Alabarda
        faction: "catai",
        foc: "Special",
        subfaction: "Yang", // Added subfaction
        warning: "0-1 (Combined limit with Ballesteros version)",
        points: 13, // Base cost
        min: 10,
        max: 30,
        equipo: "Espada Celestial, Escudo, Arma de mano y Armadura de placas.", // Added Arma de mano
        reglasEspeciales: "Inmunes a pánico y miedo.YANG",
        perfiles: [
            { nombre: "Guardia del Dragón", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 1, L: 9 } },
            { nombre: "Campeón de la Guardia", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 2, L: 9 } }
        ],
        options: [
            // Alabarda option stays here as it doesn't change subfaction
            { n: "Alabarda", p: 2, summary: "Pierde Espada Celestial y Escudo" }
        ],
        command: { c: { n: "Campeón de la Guardia", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50,
        champItems: 25
    },
    "Ballesteros Guardia del Dragon": { // New Yin version
        faction: "catai",
        foc: "Special",
        subfaction: "Yin", // Added subfaction
        warning: "0-1 (Combined limit with base version)",
        points: 17, // Base 13 + 4 points for crossbow upgrade
        min: 10,
        max: 30,
        equipo: "Ballesta de repetición, Arma de mano y Armadura de placas.", // Changed weapon, added Arma de mano
        reglasEspeciales: "Inmunes a pánico y miedo.", // No alignment tag needed
        perfiles: [
            { nombre: "Guardia Ballestero", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 1, L: 9 } }, // Kept F4 from base profile
            { nombre: "Campeón Ballestero", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 2, L: 9 } }
        ],
        // No options that change subfaction
        command: { c: { n: "Campeón Ballestero", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50,
        champItems: 25
    },
    // --- SPLIT Guardia del Dragon Celestial END ---
    "Artilleros de Metralla": {
        faction: "catai",
        foc: "Special",
        subfaction: "Yin", // Added subfaction
        canBeChild: true, 
        points: 9,
        min: 10,
        max: 40,
        equipo: "Arma de mano, Trabuco escarcha de hierro.",
        reglasEspeciales: "Destacamento.YIN",
        perfiles: [
            { nombre: "Artillero", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Maestro Artillero", stats: { M: 4, HA: 3, HP: 4, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } }
        ],
        options: [
            { n: "Armadura ligera", p: 1 }
        ],
        command: { c: { n: "Maestro Artillero", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        magicBanner: 25
    },
    "Tiradores Grulla": {
        faction: "catai",
        foc: "Special",
        subfaction: "Yin", // Added subfaction
        canBeChild: true,
        points: 23,
        min: 3,
        max: 5,
        equipo: "Arma de mano, Fusil Grulla, Pavés.",
        reglasEspeciales: "Destacamento. TSA 6+ (4+ vs disparos). Potencia unidad 2.YIN",
        perfiles: [
            { nombre: "Tirador", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 1, L: 7 } },
            { nombre: "Maestro Tirador", stats: { M: 4, HA: 3, HP: 4, F: 3, R: 3, H: 2, I: 3, A: 1, L: 7 } }
        ],
        command: { c: { n: "Maestro Tirador", p: 5 } }
    },
    "Gran Cañón Catayano": {
        faction: "catai",
        foc: "Special",
        subfaction: "Yin", // Added subfaction
        points: 85,
        min: 1,
        max: 1,
        equipo: "La dotación lleva arma de mano.",
        reglasEspeciales: "Dispara como un cañón.YIN",
        perfiles: [
            { nombre: "Gran Cañón", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: 2, I: "-", A: "-", L: "-" } },
            { nombre: "Dotación (3)", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Ogro Artillero", stats: { M: 6, HA: 3, HP: 2, F: 4, R: 4, H: 3, I: 2, A: 3, L: 7 } }
        ],
        options: [
             { n: "Sustituir dotación por Ogro Artillero", p: 25, summary: "+3H (Total 5H). Dispara cada turno. Ogro con Arma mano, Armadura ligera." }
        ]
    },
    "Bateria de Cohetes Lluvia de Fuego": {
        faction: "catai",
        foc: "Special",
        subfaction: "Yin", // Added subfaction
        points: 95,
        min: 1,
        max: 1,
        equipo: "La dotación lleva arma de mano.",
        reglasEspeciales: "Dispara como Cohetes Bastión (Catapulta F4, Plantilla Peq, Flamigero, Poder Pen, Tabla Cañón) O Cohetes Lluvia de Fuego (Catapulta F4, Plantilla Gde, Flamigero, Desvía mitad si 'centro', Tabla Lanzallamas).YIN",
        perfiles: [
            { nombre: "Batería de Cohetes", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: 2, I: "-", A: "-", L: "-" } },
            { nombre: "Dotación (3)", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Ogro Artillero", stats: { M: 6, HA: 3, HP: 2, F: 4, R: 4, H: 3, I: 2, A: 3, L: 7 } }
        ],
        options: [
             { n: "Sustituir dotación por Ogro Artillero", p: 25, summary: "+3H (Total 5H). Dispara cada turno. Ogro con Arma mano, Armadura ligera." }
        ]
    },

    // === RARE ===
    "Linterna de los Cielos": {
        faction: "catai",
        foc: "Rare",
        subfaction: "Yin", // Added subfaction
        points: 135,
        min: 1,
        max: 1,
        equipo: "Tripulación (4 Ingenieros, 1 Oficial) con Arma de mano y Trabuco escarcha de hierro.",
        reglasEspeciales: "TSA 3+, Potencia Unidad 5. Plataforma Guerra Flotante (Objetivo Grande, Disparo 360°, Ignora Mover/Disparar, Imp Carga 1D3, Flotar 8\"). Baliza Celestial (Repite Pánico/Miedo/Terror fallidos amigos a 12\").YIN",
         perfiles: [
            { nombre: "Linterna Voladora", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 5, H: 6, I: "-", A: "-", L: "-" } },
            { nombre: "Ingeniero (4)", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial Ingeniero", stats: { M: 4, HA: 3, HP: 4, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } }
        ],
        options: [
             { n: "Sustituir Trabucos por Fusiles Celestiales", p: 4, summary: "Afecta a toda la tripulación" }
        ]
    },
    "Centinela de Terracota": {
        faction: "catai",
        foc: "Rare",
        subfaction: "Yang", // Added subfaction
        points: 230,
        min: 1,
        max: 1,
        equipo: "Gran Alabarda Doble y Armadura pesada.", // Assumes always has hand weapon too
        reglasEspeciales: "Indesmoralizable, Regeneración (6+), Impactos por carga (1D3), TSA 3+. Gran Lanza Doble (+1D3 A).YANG",
        perfiles: [
            { nombre: "Centinela de Terracota", stats: { M: 6, HA: 5, HP: 1, F: 6, R: 6, H: 6, I: 3, A: 3, L: 10 } }
        ],
        options: [
             { n: "Centinela de Jade", p: 20, summary: "Hechicero Nivel 1 (Saber Yin/Yang)"}, // Removed exclusiveGroup
             { n: "Centinela de Obsidiana", p: 25, summary: "+RM(3)"}, // Removed exclusiveGroup
             { n: "Centinela de Granito", p: 35, summary: "+1 TSA (Total 2+), Inmune Heridas Múltiples"}, // Removed exclusiveGroup
             { n: "Centinela de Piedra de disformidad", p: 45, summary: "+RM(1), Ataques Mágicos, -1R a enemigos en contacto"} // Removed exclusiveGroup
        ]
    },
    "Jinetes de Grandes Logmas": {
        faction: "catai",
        foc: "Rare",
        subfaction: "Yang", // Added subfaction
        points: 100,
        min: 1,
        max: 3,
        equipo: "Espada Celestial, Lanza Catayana, Armadura pesada y Escudo.", // Assumes always has hand weapon too
        montura: "Logma de Jade",
        reglasEspeciales: "Volar, Miedo, Hostigador.YANG",
        perfiles: [
            { nombre: "Jinete", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 2, L: 9 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 3, L: 9 } },
            { nombre: "Logma de Jade", stats: { M: 6, HA: 3, HP: 0, F: 5, R: 5, H: 3, I: 3, A: 3, L: 7 } }
        ],
        command: { c: { n: "Oficial", p: 10 }, s: { n: "Portaestandarte", p: 10 }, m: { n: "Músico", p: 10 } },
        magicBanner: 50,
        champItems: 25
    },

    // === LORDS ===
    "Comandante de la Puerta Celestial": {
        faction: "catai",
        foc: "Lord",
        // No default subfaction, depends on build? Assume neutral or determined by equipment/lore later.
        points: 110,
        min: 1,
        max: 1,
        equipo: "Arma de mano, Escudo y Armadura pesada.",
        reglasEspeciales: "Armonía de Piedra y Acero (unidad repite chequeos L), Voluntad del Dragon.",
        perfiles: [
            { nombre: "Comandante de la Puerta", stats: { M: 4, HA: 6, HP: 4, F: 4, R: 4, H: 3, I: 6, A: 4, L: 9 } }
        ],
        options: [
            { n: "Espada Celestial", p: 5 }, // Removed exclusiveGroup
            { n: "Arma de mano adicional", p: 2 }, // Removed exclusiveGroup
            { n: "Arma a dos manos", p: 4 }, // Removed exclusiveGroup
            { n: "Alabarda", p: 5 }, // Removed exclusiveGroup
            { n: "Lanza", p: 1 }, // Removed exclusiveGroup
            { n: "Lanza Catayana", p: 6, summary: "Sólo si va montado" }, // Removed exclusiveGroup
            { n: "Pistola", p: 5 }
        ],
        mounts: ["Caballo de guerra con barda", "Logma de Jade", "Dragon Lunar"],
        maxMagicItems: 3,
        maxRelics: 1
    },
    "Sangre de Dragon Señor de la Hueste Celestial": {
        faction: "catai",
        foc: "Lord",
        // No default subfaction
        points: 195,
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura Celestial.",
        reglasEspeciales: "Maestros de los vientos elementales (+1 lanzar si otro Mago a 6\"), Voluntad del Dragon. Nivel Mágico 3.",
        perfiles: [
            { nombre: "Sangre de Dragón", stats: { M: 4, HA: 6, HP: 4, F: 4, R: 4, H: 3, I: 5, A: 4, L: 9 } }
        ],
        options: [
            { n: "Espada Celestial", p: 5 }, // Removed exclusiveGroup
            { n: "Lanza Catayana", p: 6, summary: "Sólo si va montado" }, // Removed exclusiveGroup
            { n: "Arma de mano adicional", p: 2 }, // Removed exclusiveGroup
            { n: "Alabarda", p: 4 }, // Removed exclusiveGroup
            { n: "Nivel de Magia 4", p: 35 }
            // Needs Lore Selection logic here (8 Lores + Yin/Yang)
        ],
        mounts: ["Caballo de guerra con barda", "Logma de Jade", "Dragon Lunar"],
        maxMagicItems: 3,
        maxRelics: 1
    },
    "Señor Magistrado": {
        faction: "catai",
        foc: "Lord",
        // No default subfaction
        points: 75,
        min: 1,
        max: 1,
        equipo: "Armadura ligera y Arma de mano.",
        reglasEspeciales: "Voluntad del Dragon, Gran Estratega (reorganización gratuita unidad amiga 12\").",
        perfiles: [
            { nombre: "Señor Magistrado", stats: { M: 4, HA: 5, HP: 5, F: 3, R: 4, H: 3, I: 4, A: 2, L: 9 } }
        ],
        options: [
            { n: "Bombas de polvora", p: 5 }, // Removed exclusiveGroup
            { n: "Bombas Fuego Dragon", p: 10 }, // Removed exclusiveGroup
            { n: "Pistola", p: 5 }, // Removed exclusiveGroup
            { n: "Ristra de pistolas", p: 10 }, // Removed exclusiveGroup
            { n: "Pistola Fuego Dragon", p: 8 }, // Removed exclusiveGroup
            { n: "Fusil Grulla", p: 10 } // Removed exclusiveGroup
        ],
        mounts: ["Linterna de los Cielos"],
        maxMagicItems: 3,
        maxRelics: 1
    },
    "Astromante de la Corte": {
        faction: "catai",
        foc: "Lord",
        subfaction: "Yin", // Astromancy is Yin-aligned
        warning: "Consejero: No puede ser el General.",
        points: 145,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Consejero, Maestros de los vientos elementales (+1 lanzar si otro Mago a 6\"), Voluntad del Dragón. Nivel Mágico 3.",
        perfiles: [
            { nombre: "Astromante de la Corte", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 4, H: 3, I: 4, A: 1, L: 8 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 2 },
            { n: "Pistola", p: 5 },
            { n: "Nivel de Magia 4", p: 35 }
            // Needs Lore Selection logic here (Heavens only)
        ],
        mounts: ["Caballo de guerra con barda"],
        maxMagicItems: 3
    },

    // === HEROES ===
    "Capitán de la Puerta Celestial": {
        faction: "catai",
        foc: "Hero",
        // No default subfaction
        points: 60,
        min: 1,
        max: 1,
        equipo: "Arma de mano, Escudo y Armadura pesada.",
        reglasEspeciales: "Armonía de Piedra y Acero (unidad repite chequeos L), Voluntad del Dragon.",
        perfiles: [
            { nombre: "Capitán", stats: { M: 4, HA: 5, HP: 5, F: 4, R: 4, H: 2, I: 5, A: 3, L: 8 } }
        ],
        options: [
            { n: "Espada Celestial", p: 5 }, // Removed exclusiveGroup
            { n: "Arma de mano adicional", p: 1 }, // Removed exclusiveGroup
            { n: "Arma a dos manos", p: 2 }, // Removed exclusiveGroup
            { n: "Alabarda", p: 3 }, // Removed exclusiveGroup
            { n: "Lanza", p: 1 }, // Removed exclusiveGroup
            { n: "Lanza Catayana", p: 4, summary: "Sólo si va montado" }, // Removed exclusiveGroup
            { n: "Pistola", p: 5 }
        ],
        mounts: ["Caballo de guerra con barda", "Logma de Jade"],
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 },
        maxMagicItems: 2
    },
    "Alquimista": {
        faction: "catai",
        foc: "Hero",
        // No default subfaction (Fire=Yang, Metal=Yin?) - leave undefined for now
        warning: "Consejero: No puede ser el General.",
        points: 60,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Consejero, Voluntad del Dragon. Nivel Mágico 1.",
        perfiles: [
            { nombre: "Alquimista", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 1, L: 7 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 1 },
            { n: "Arma a dos manos", p: 2 },
            { n: "Pistola", p: 5 },
            { n: "Nivel de Magia 2", p: 35 }
             // Needs Lore Selection logic here (Fire or Metal)
        ],
        mounts: ["Caballo de guerra con barda"],
        maxMagicItems: 2
    },
    "Estratega": {
        faction: "catai",
        foc: "Hero",
        // No default subfaction
        points: 45,
        min: 1,
        max: 1,
        equipo: "Armadura ligera y Arma de mano.",
        reglasEspeciales: "Voluntad del Dragon, Estratega (reorganización gratuita unidad amiga 4\").",
        perfiles: [
            { nombre: "Estratega", stats: { M: 4, HA: 4, HP: 4, F: 3, R: 4, H: 2, I: 4, A: 1, L: 8 } }
        ],
        options: [
            { n: "Bombas de polvora", p: 4 }, // Removed exclusiveGroup
            { n: "Bombas Fuego Dragon", p: 8 }, // Removed exclusiveGroup
            { n: "Pistola", p: 5 }, // Removed exclusiveGroup
            { n: "Ristra de pistolas", p: 10 }, // Removed exclusiveGroup
            { n: "Pistola Fuego Dragon", p: 6 }, // Removed exclusiveGroup
            { n: "Fusil Grulla", p: 8 } // Removed exclusiveGroup
        ],
        mounts: ["Linterna de los Cielos"],
        maxMagicItems: 2
    },
    "Astromante": {
        faction: "catai",
        foc: "Hero",
        subfaction: "Yin", // Astromancy is Yin-aligned
        warning: "Consejero: No puede ser el General.",
        points: 60,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Consejero, Maestros de los vientos elementales (+1 lanzar si otro Mago a 6\"), Voluntad del Dragon. Nivel Mágico 1.",
        perfiles: [
            { nombre: "Astromante", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 1, L: 7 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 1 },
            { n: "Arma a dos manos", p: 2 },
            { n: "Pistola", p: 5 },
            { n: "Nivel de Magia 2", p: 35 }
             // Needs Lore Selection logic here (Heavens only)
        ],
        mounts: ["Caballo de guerra con barda"],
        maxMagicItems: 2
    }
};

const mountsDB_catai = {
    "Caballo de guerra": {
        faction: "catai",
        points: 10,
        perfiles: [ { nombre: "Caballo de guerra", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } } ],
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería."
    },
    "Caballo de guerra con barda": {
        faction: "catai",
        points: 15, // Using higher cost, selection logic should adjust if needed for heroes
        perfiles: [ { nombre: "Caballo de guerra con barda", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } } ],
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. Barda (+1 TSA)."
    },
    "Logma de Jade": {
        faction: "catai",
        points: 70, // Using higher cost, selection logic should adjust if needed for Lord
        perfiles: [ { nombre: "Logma de Jade", stats: { M: 6, HA: 3, HP: 0, F: 5, R: 5, H: 3, I: 3, A: 3, L: 7 } } ],
        reglasEspeciales: "Bestia monstruosa. Cambia el tipo a Caballería monstruosa. Miedo. Volar."
    },
    "Dragon Lunar": {
        faction: "catai",
        points: 250,
        perfiles: [ { nombre: "Dragón Lunar", stats: { M: 6, HA: 6, HP: 0, F: 6, R: 6, H: 6, I: 2, A: 6, L: 9 } } ],
        reglasEspeciales: "Monstruo. Volar, Piel Escamosa (3+), Inmune a fuego, Arma de aliento (F4, Ataques solo flamígeros)."
    },
     "Linterna de los Cielos": {
        faction: "catai",
        points: 115,
        equipo: "Tripulación (4 Ingenieros) con Arma de mano y Trabuco escarcha de hierro.",
        reglasEspeciales: "Carro. TSA 3+, Potencia Unidad 5. Plataforma Guerra Flotante (Objetivo Grande, Disparo 360°, Ignora Mover/Disparar, Imp Carga 1D3, Flotar 8\"). Baliza Celestial.",
        perfiles: [
            { nombre: "Linterna Voladora", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 5, H: 6, I: "-", A: "-", L: "-" } },
            { nombre: "Ingeniero (4)", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } }
        ],
         options: [
             { n: "Sustituir Trabucos por Fusiles Celestiales", p: 4, summary: "Afecta a toda la tripulación" }
        ]
    }
};

const magicItemsDB_catai = {
    // --- ARMAS MÁGICAS ---
    "Arma Mágica": {
        "Espada de Jade de la Gran Flota": { points: 45, faction: "catai", relic: true, summary: "Arma mano. +1F. Repite impactar y herir." },
        "Bastón del Rey Mono": { points: 40, faction: "catai", relic: true, summary: "Arma 2 Manos. Elegir modo: 1) F8, I1; 2) I10, +2A; 3) TSE 5+." },
        "Alabarda Dorada de Kunlan": { points: 35, faction: "catai", relic: false, summary: "Alabarda. +2HA, +2I, Poder Pen. Repite 1s para herir. Parada." },
        "Espadas del Sol y la Luna": { points: 30, faction: "catai", relic: false, summary: "Armas emparejadas. +1F, Ataques Flamígeros, Inmune Veneno y Heridas Múltiples." },
        "La Hoja del Tigre": { points: 25, faction: "catai", relic: false, summary: "Arma mano. +1F, +1HA, Poder Pen." },
        "Lanza Espíritu de Logma": { points: 25, faction: "catai", relic: false, summary: "Lanza Catayana. Poder Pen, Odio, Golpe Maestro." },
        "Filo Celestial de Minga": { points: 15, faction: "catai", relic: false, summary: "Arma mano. +1HA, Poder Pen, Heridas Múltiples(1D2)." }
    },
    // --- ARMADURAS MÁGICAS ---
    "Armadura Mágica": {
        "Armadura del Dragon de Jade": { points: 40, faction: "catai", relic: true, summary: "TSA 4+. Inmune Fuego. Impactos CaC exitosos vs portador fallan con 5+." },
        "Armadura de la Grulla de Guerra": { points: 50, faction: "catai", relic: false, summary: "Infantería. TSA 4+. Volar. Repite TSA fallidas. No puede unirse." },
        "Armadura de Xin-Gon": { points: 25, faction: "catai", relic: false, summary: "Arm Pesada. Regeneración(5+)." },
        "Escudo de Nan-Gau": { points: 20, faction: "catai", relic: false, summary: "Escudo. +1 TSA adicional (Total +2). Enemigo en contacto -1A (min 1)." },
        "Yelmo de Chun-Li": { points: 15, faction: "catai", relic: false, summary: "Yelmo (+1 TSA). Causa Terror." }
    },
    // --- TALISMANES ---
    "Talismán": {
        "Corona de Jade": { points: 50, faction: "catai", relic: true, summary: "TSE 4+, RM(1)." },
        "Cristal de Kunlan": { points: 30, faction: "catai", relic: false, summary: "TSE 5+, Inmune Fuego. TSE 6 causa impacto F4 Flamígero a enemigos en contacto." },
        "Colgante Celestial": { points: 25, faction: "catai", relic: false, summary: "TSE 5+. Supera auto chequeos atributo (no L)." },
        "Amuleto de Xin": { points: 15, faction: "catai", relic: false, summary: "RM(1). Mejora a RM(2) vs Nigro, Oscura, Caos, Hashut, Panzamagia, Skaven." }
    },
    // --- OBJETOS HECHIZADOS ---
    "Objeto Hechizado": {
        "Broche de Jade": { points: 40, faction: "catai", relic: false, summary: "Inicio CaC: Unidad enemiga en contacto I a 0 hasta fin fase." },
        "Mascara de Alquimista": { points: 30, faction: "catai", relic: false, summary: "Sólo Alquimistas. +1 Nivel Mágico (del saber elegido)." },
        "Cuerno del Dragon": { points: 25, faction: "catai", relic: false, summary: "1 Uso. Inicio turno: Potenciación. Unidades amigas huyendo a 24\" reagrupan auto." },
        "Mandíbula de Obsidiana": { points: 25, faction: "catai", relic: false, summary: "Si hechicero enemigo a 18\" saca doble (no 6s) al lanzar, hechizo falla auto (no rompe concentración)." },
        "Linterna de los Espíritus": { points: 20, faction: "catai", relic: false, summary: "Causa Terror. Repite 1s para herir vs Demonios/No Muertos." },
        "Gran Llave de la Puerta": { points: 20, faction: "catai", relic: false, summary: "1 Uso. Supera auto chequeo desmoralización. No si rehusó desafío." },
        "Tomo de Tzun Tze": { points: 15, faction: "catai", relic: false, summary: "Sólo Magistrado/Estratega. +6\" alcance Estratega/Gran Estratega." }
    },
    // --- ARTEFACTOS ARCANOS ---
    "Artefacto Arcano": {
        "Capa del Feng Shui": { points: 45, faction: "catai", relic: true, summary: "Señor Conocimiento (saber elegido). Guarda 1 dado no usado energía/disp por fase. Libera como energía/disp en fase posterior." },
        "Báculo del Concejero Celeste": { points: 30, faction: "catai", relic: false, summary: "+1 dispersar. Nunca pierde concentración." },
        "Brazales de Tigre y Dragón": { points: 25, faction: "catai", relic: false, summary: "Puede usar +1 dado extra al lanzar. Guarda hasta 2 dados no usados energía/disp por fase. Libera como energía/disp en fase posterior." },
        "Bastón de Jade": { points: 10, faction: "catai", relic: false, summary: "+2 canalizar." },
        "Piedra adivinatoria": { points: 5, faction: "catai", relic: false, summary: "1 Uso. Repite todos los dados de una tirada lanzar/dispersar." }
    },
    // --- ESTANDARTES MÁGICOS ---
    "Estandarte Mágico": {
        "Estandarte del Ojo del Dragón": { points: 25, faction: "catai", relic: true, summary: "Si hechizo objetivo es esta unidad, con 4+ hechizo falla y lanzador puede elegir otro objetivo." },
        "Estandarte de la Gran Muralla": { points: 45, faction: "catai", relic: false, summary: "Unidad gana Tozudez." },
        "Pabellón de Wei-Jin": { points: 40, faction: "catai", relic: false, summary: "Unidad causa Miedo. Enemigos a 12\" sufren -1L." },
        "Estandarte del Bastión": { points: 35, faction: "catai", relic: false, summary: "Unidad gana +2 TSA vs Proyectiles (mundanos y mágicos)." },
        "Estandarte de la Furia Celestial": { points: 30, faction: "catai", relic: false, summary: "1 Uso. Inicio CaC: Unidad gana Furia Asesina y Odio por esa fase." },
        "Icono de Tao": { points: 25, faction: "catai", relic: false, summary: "Sólo Lanceros Jade. +1D3+1\" a cargas y persecuciones." },
        "Estandarte del Tigre": { points: 25, faction: "catai", relic: false, summary: "Unidad Inmune Miedo. No pierde filas por carga Flanco/Retaguardia/Apabullar." },
        "Pabellón de la Puerta": { points: 15, faction: "catai", relic: false, summary: "Sólo unidades con Destacamento. Unidad +1I." } // Applies to Unidad Principal? PDF implies this.
    }
};

const armySkillsDB_catai = {}; // Catai does not have a specific army skills system like Virtues or Runes
const specialProfilesDB_catai = {}; // Catai does not seem to have special addon profiles

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Gran Catai",
    FACTION_ID: "catai",
    armySkillsLabel: null, // No specific army skills system
    FOC_CONFIG: {
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_catai,
    mountsDB: mountsDB_catai,
    magicItemsDB: magicItemsDB_catai,
    armySkillsDB: armySkillsDB_catai,
    specialProfilesDB: specialProfilesDB_catai
};


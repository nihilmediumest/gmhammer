// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: ORCOS Y GOBLINS ---
// ===================================================================================
// Last Updated: 2025-10-03 @ 14:35 - v4.1
import { commonMagicItemsDB } from '../comun.js';

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_oyg = {
    // === CORE ===
    "Goblins": {
        faction: "oyg",
        foc: "Core",
        points: 2.5,
        min: 20,
        max: 50,
        equipo: "Arma de mano y armadura ligera.",
        reglasEspeciales: "Animosidad, Miedo a loz orejotaz, Horda",
        perfiles: [
            { nombre: "Goblins", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Jefe Goblin", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 6 } }
        ],
        options: [
            { n: "Arco corto", p: 0.5 },
            { n: "Lanza", p: 0.5 },
            { n: "Escudo", p: 0.5 }
        ],
        command: { 
            c: { n: "Jefe", p: 4 }, 
            s: { n: "Portaestandarte", p: 4 }, 
            m: { n: "Músico", p: 4 } 
        },
        magicBanner: 25,
        specialAddons: [
            { name: "Merodeador odiozo", points: 15, max: 2, profileKey: "Merodeador" }
        ]
    },

    "Goblins Silvanos": {
        faction: "oyg",
        foc: "Core",
        points: 2.5,
        min: 20,
        max: 50,
        equipo: "Arma de mano.",
        reglasEspeciales: "Animosidad, Miedo a loz orejotaz, Cruzar bosques",
        perfiles: [
            { nombre: "Goblin silvanos", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 6 } },
            { nombre: "Jefe Goblin silvano", stats: { M: 4, HA: 2, HP: 4, F: 3, R: 3, H: 1, I: 4, A: 1, L: 6 } }
        ],
        options: [
            { n: "Armas de mano adicionales", p: 0.5 },
            { n: "Escudo", p: 0.5 },
            { n: "Arco corto", p: 0.5 },
            { n: "Lanza", p: 0.5 },
            { n: "Ataques envenenados", p: 2 },
        ],
        command: { 
            c: { n: "Jefe", p: 4 }, 
            m: { n: "Músico", p: 4 } 
        }
    },
"Goblins Silvanos Hostigadores": {
        faction: "oyg",
        foc: "Core",
        points: 3.5,
        min: 5,
        max: 20,
        equipo: "Arma de mano.",
        reglasEspeciales: "Animosidad, Miedo a loz orejotaz, Cruzar bosques",
        perfiles: [
            { nombre: "Batidores goblin silvanos", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 6 } },
            { nombre: "Jefe Goblin silvano", stats: { M: 4, HA: 2, HP: 4, F: 3, R: 3, H: 1, I: 4, A: 1, L: 6 } }
        ],
        options: [
            { n: "Armas de mano adicionales", p: 0.5 },
            { n: "Escudo", p: 0.5 },
            { n: "Arco corto", p: 0.5 },
            { n: "Lanza", p: 0.5 },
            { n: "Ataques envenenados", p: 2 },
        ],
        command: { 
            c: { n: "Jefe", p: 4 }, 
            m: { n: "Músico", p: 4 } 
        }
    },
    "Goblins Nocturnos": {
        faction: "oyg",
        foc: "Core",
        points: 3,
        min: 20,
        max: 50,
        equipo: "Arma de mano y armadura ligera.",
        reglasEspeciales: "Animosidad, Miedo a loz orejotaz, Odio (enanos), Horda",
        perfiles: [
            { nombre: "Goblins nocturnos", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 6 } },
            { nombre: "Jefe Goblin", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 2, L: 6 } }
        ],
        options: [
            { n: "Arco corto", p: 0.5 },
            { n: "Lanza", p: 0.5 },
            { n: "Escudo", p: 0.5 }
        ],
        command: { 
            c: { n: "Jefe", p: 4 }, 
            s: { n: "Portaestandarte", p: 4 }, 
            m: { n: "Músico", p: 4 } 
        },
        magicBanner: 25,
        specialAddons: [
            { name: "Fanático", points: 15, max: 3, profileKey: "Fanático" }
        ]
    },

    "Kazadores de Garrapatoz Goblins Nocturnos": {
        faction: "oyg",
        foc: "Core",
        warning: "0-1 por cada unidad de Goblins Nocturnos en el ejército",
        points: 4,
        min: 20,
        max: 50,
        equipo: "Garrotes, Redes y armadura ligera.",
        reglasEspeciales: "Animosidad, Miedo a loz orejotaz, Odio (enanos), Horda",
        perfiles: [
            { nombre: "Kazadores goblin nocturnos", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 6 } },
            { nombre: "Jefe Goblin nocturno", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 2, L: 6 } }
        ],
        specialAddons: [
            { name: "Fanático", points: 15, max: 3, profileKey: "Fanático" }
        ],
        command: { 
            c: { n: "Jefe", p: 4 }, 
            s: { n: "Portaestandarte", p: 4 }, 
            m: { n: "Músico", p: 4 } 
        },
        magicBanner: 25
    },

    "Guerreros Orcos": {
        faction: "oyg",
        foc: "Core",
        points: 5,
        min: 10,
        max: 40,
        equipo: "Rebanadora, armadura ligera y escudo.",
        reglasEspeciales: "Animosidad, Loz mejorez, Horda",
        perfiles: [
            { nombre: "Guerreros Orcos", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 1, L: 7 } },
            { nombre: "Jefe Orco", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 1, I: 2, A: 2, L: 7 } }
        ],
        options: [
            { n: "Rebanadora adicional", p: 0 },
            { n: "Arco", p: 1 },
            { n: "Arma a dos manos", p: 2 },
            { n: "Lanza", p: 1 }
        ],
        command: { 
            c: { n: "Jefe", p: 8 }, 
            s: { n: "Portaestandarte", p: 6 }, 
            m: { n: "Músico", p: 6 } 
        },
        magicBanner: 25
    },

    "Orcos Salvajes": {
        faction: "oyg",
        foc: "Core",
        points: 7,
        min: 10,
        max: 40,
        equipo: "Rebanadora.",
        reglasEspeciales: "Animosidad, Furia asesina, Pinturas de guerra, Loz mejorez, Horda",
        perfiles: [
            { nombre: "Orcos salvajes", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 1, L: 7 } },
            { nombre: "Jefe Orco salvaje", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 1, I: 2, A: 2, L: 7 } }
        ],
        options: [
            { n: "Escudo", p: 1 },
            { n: "Lanza", p: 2 },
            { n: "Arco", p: 1 },
            { n: "Rebanadora adicional", p: 1 }
        ],
        command: { 
            c: { n: "Jefe", p: 8 }, 
            s: { n: "Portaestandarte", p: 6 }, 
            m: { n: "Músico", p: 6 } 
        },
        magicBanner: 25
    },

    "Orcos Grandotes": {
        faction: "oyg",
        foc: "Core",
        warning: "0-1 por cada unidad de Guerreros Orcos",
        points: 8,
        min: 10,
        max: 40,
        equipo: "Rebanadora, armadura ligera y escudo.",
        reglasEspeciales: "Animosidad, Loz mejorez",
        perfiles: [
            { nombre: "Orcos Grandotes", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 1, I: 2, A: 1, L: 7 } },
            { nombre: "Jefe Orco", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 1, I: 2, A: 2, L: 7 } }
        ],
        options: [
            { n: "Rebanadora adicional", p: 0 },
            { n: "Arma a dos manos", p: 2 },
            { n: "Lanza", p: 1 },
            { n: "Armadura pesada", p: 1 }
        ],
        command: { 
            c: { n: "Jefe", p: 6 }, 
            s: { n: "Portaestandarte", p: 6 }, 
            m: { n: "Músico", p: 6 } 
        },
        magicBanner: 50,
        champItems: 15
    },

    "Orcos Salvajes Grandotes": {
        faction: "oyg",
        foc: "Core",
        warning: "0-1 por cada unidad de Orcos Salvajes",
        points: 10,
        min: 10,
        max: 40,
        equipo: "Rebanadora.",
        reglasEspeciales: "Animosidad, Furia asesina, Pinturas de guerra (6+), Loz mejorez",
        perfiles: [
            { nombre: "Orcos salvajes", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 1, I: 2, A: 1, L: 7 } },
            { nombre: "Jefe Orco salvaje", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 1, I: 2, A: 2, L: 7 } }
        ],
        options: [
            { n: "Escudo", p: 1 },
            { n: "Arma a dos manos", p: 2 },
            { n: "Rebanadora adicional", p: 1 }
        ],
        command: { 
            c: { n: "Jefe", p: 6 }, 
            s: { n: "Portaestandarte", p: 6 }, 
            m: { n: "Músico", p: 6 } 
        },
        magicBanner: 50,
        champItems: 15
    },

    "Jinetez de Lobo": {
        faction: "oyg",
        foc: "Core",
        points: 10,
        min: 5,
        max: 20,
        equipo: "Arma de mano y armadura ligera.",
        reglasEspeciales: "Animosidad, Miedo a loz orejotaz, Caballería rápida",
        perfiles: [
            { nombre: "Goblins", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Jefe Goblin", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 6 } },
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
        },
        magicBanner: 25
    },

    "Jinetez de Araña Goblin Silvanos": {
        faction: "oyg",
        foc: "Core",
        points: 10,
        min: 5,
        max: 20,
        equipo: "Arma de mano y Arcos cortos.",
        reglasEspeciales: "Animosidad, Miedo a loz orejotaz, Caballería rápida, Ataques envenenados (arañas), Poder de penetración (arañas), Cruzar bosques, Cruzar obstáculos, Miedo, Telarañas, Trepamuros",
        perfiles: [
            { nombre: "Goblins silvanos", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Jefe Goblin silvano", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 6 } },
            { nombre: "Araña gigante", stats: { M: 7, HA: 3, HP: 0, F: 3, R: 3, H: 1, I: 4, A: 1, L: 2 } }
        ],
        options: [
            { n: "Lanza", p: 1 },
            { n: "Escudo", p: 1 }
        ],
        command: { 
            c: { n: "Jefe", p: 6 }, 
            s: { n: "Portaestandarte", p: 6 }, 
            m: { n: "Músico", p: 6 } 
        },
        magicBanner: 25
    },

    // === SPECIAL ===
    "Jinetes de Jabalí Orcos": {
        faction: "oyg",
        foc: "Special",
        points: 13,
        min: 5,
        max: 20,
        equipo: "Rebanadora, Armadura ligera",
        reglasEspeciales: "Animosidad, Piel grueza (+1 armadura, jabalí), Carga devastadora (jabalí), Loz mejorez",
        perfiles: [
            { nombre: "Jinetes de jabalí orcos", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 1, L: 7 } },
            { nombre: "Jefe Jinete de jabalí", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 1, I: 2, A: 2, L: 7 } },
            { nombre: "Jabalí", stats: { M: 7, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 2, A: 1, L: 3 } }
        ],
        options: [
            { n: "Lanza Partekraneoz", p: 2 },
            { n: "Escudo", p: 1 }
        ],
        command: { 
            c: { n: "Oficial", p: 8 }, 
            s: { n: "Portaestandarte", p: 6 }, 
            m: { n: "Músico", p: 6 } 
        },
        magicBanner: 50
    },

    "Jinetes de Jabalí Orcos Grandotes": {
        faction: "oyg",
        foc: "Special",
        warning: "0-1 por cada unidad de Jinetes de Jabalí Orcos",
        points: 19,
        min: 5,
        max: 20,
        equipo: "Rebanadora, Armadura ligera",
        reglasEspeciales: "Animosidad, Piel grueza (+1 armadura, jabalí), Carga devastadora (jabalí), Loz mejorez",
        perfiles: [
            { nombre: "Jinetes de jabalí orcos grandotes", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 1, I: 2, A: 1, L: 7 } },
            { nombre: "Jefe grandote Jinete de jabalí", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 1, I: 2, A: 2, L: 7 } },
            { nombre: "Jabalí", stats: { M: 7, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 2, A: 1, L: 3 } }
        ],
        options: [
            { n: "Lanza Partekraneoz", p: 2 },
            { n: "Escudo", p: 1 },
            { n: "Armadura pesada", p: 2 }
        ],
        command: { 
            c: { n: "Oficial", p: 6 }, 
            s: { n: "Portaestandarte", p: 6 }, 
            m: { n: "Músico", p: 6 } 
        },
        magicBanner: 50,
        champItems: 15
    },

    "Jinetes de Jabalí Orcos Salvajes": {
        faction: "oyg",
        foc: "Special",
        points: 14,
        min: 5,
        max: 20,
        equipo: "Rebanadora",
        reglasEspeciales: "Animosidad, Piel grueza (+1 armadura, jabalí), Carga devastadora (jabalí), Furia asesina, Pinturas de guerra (6+), Caballería rápida, Loz mejorez",
        perfiles: [
            { nombre: "Jinetes de jabalí orcos salvajes", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 1, L: 7 } },
            { nombre: "Jefe Jinete de jabalí", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 1, I: 2, A: 2, L: 7 } },
            { nombre: "Jabalí", stats: { M: 7, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 2, A: 1, L: 3 } }
        ],
        options: [
            { n: "Lanza Partekraneoz", p: 2 },
            { n: "Escudo", p: 1 }
        ],
        command: { 
            c: { n: "Oficial", p: 8 }, 
            s: { n: "Portaestandarte", p: 6 }, 
            m: { n: "Músico", p: 6 } 
        },
        magicBanner: 50
    },

    "Jinetes de Jabalí Orcos Salvajes Grandotes": {
        faction: "oyg",
        foc: "Special",
        warning: "0-1 por cada unidad de Jinetes de Jabalí Orcos Salvajes",
        points: 20,
        min: 5,
        max: 20,
        equipo: "Rebanadora",
        reglasEspeciales: "Animosidad, Piel grueza (+1 armadura, jabalí), Carga devastadora (jabalí), Furia asesina, Pinturas de guerra (6+), Caballería rápida, Loz mejorez",
        perfiles: [
            { nombre: "Jinetes orcos salvajes grandotes", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 1, I: 2, A: 1, L: 7 } },
            { nombre: "Jefe grandote Jinete de jabalí", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 1, I: 2, A: 2, L: 7 } },
            { nombre: "Jabalí", stats: { M: 7, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 2, A: 1, L: 3 } }
        ],
        options: [
            { n: "Lanza Partekraneoz", p: 2 },
            { n: "Escudo", p: 1 }
        ],
        command: { 
            c: { n: "Oficial", p: 6 }, 
            s: { n: "Portaestandarte", p: 6 }, 
            m: { n: "Músico", p: 6 } 
        },
        magicBanner: 50,
        champItems: 15
    },

    "Orcos Negros": {
        faction: "oyg",
        foc: "Special",
        points: 11,
        min: 10,
        max: 30,
        equipo: "Koraza, Escudo y gran surtido de armas (Armadoz hazta loz piñoz)",
        reglasEspeciales: "Armadoz hazta loz piñoz, Inmunes a la psicología, Loz mejorez, Koraza",
        perfiles: [
            { nombre: "Oreos negros", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 1, I: 2, A: 1, L: 8 } },
            { nombre: "Jefe Oreo negro", stats: { M: 4, HA: 5, HP: 3, F: 5, R: 4, H: 1, I: 2, A: 2, L: 8 } }
        ],
        command: { 
            c: { n: "Jefe", p: 8 }, 
            s: { n: "Portaestandarte", p: 6 }, 
            m: { n: "Músico", p: 6 } 
        },
        magicBanner: 50,
        champItems: 25
    },

    "Carro de Jabalíes": {
        faction: "oyg",
        foc: "Special",
        points: 85,
        min: 1,
        max: 1,
        equipo: "Los orcos: Rebanadora y Lanza. El carro: cuchillas.",
        reglasEspeciales: "Tirada de salvación por armadura 4+, Carga devastadora (jabalís), Loz mejorez",
        perfiles: [
            { nombre: "Karro de jabalíes", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 5, H: 4, I: "-", A: "-", L: "-" } },
            { nombre: "Dotación de orcos (2)", stats: { M: "-", HA: 3, HP: 3, F: 3, R: "-", H: "-", I: 2, A: 1, L: 7 } },
            { nombre: "Jabalí de guerra (2)", stats: { M: 7, HA: 3, HP: 0, F: 4, R: "-", H: "-", I: 2, A: 1, L: 3 } }
        ],
        options: [
            { n: "Orco adicional en tripulación", p: 5 }
        ]
    },

    "Carro de Lobos": {
        faction: "oyg",
        foc: "Special",
        points: 55,
        min: 1,
        max: 2,
        equipo: "Los goblins: armas de mano, lanzas y arcos cortos. El carro: cuchillas.",
        reglasEspeciales: "Tirada de salvación por armadura 5+, Miedo a loz orejotaz",
        perfiles: [
            { nombre: "Karro de lobos", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 4, H: 3, I: "-", A: "-", L: "-" } },
            { nombre: "Dotación de goblins (2)", stats: { M: "-", HA: 2, HP: 3, F: 3, R: "-", H: "-", I: 3, A: 1, L: 6 } },
            { nombre: "Lobo (2)", stats: { M: 9, HA: 4, HP: 0, F: 4, R: "-", H: "-", I: 4, A: 1, L: 6 } }
        ],
        options: [
            { n: "Goblin adicional en tripulación", p: 3 },
            { n: "Lobo adicional por carro", p: 3 }
        ]
    },

    "Lanzapinchoz": {
        faction: "oyg",
        foc: "Special",
        points: 35,
        min: 1,
        max: 2,
        equipo: "La dotación: arma de mano y armadura ligera.",
        reglasEspeciales: "Dispara como lanzavirotes, Miedo a loz orejotaz",
        perfiles: [
            { nombre: "Enzatador", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: "-", I: "-", A: "-", L: "-" } },
            { nombre: "Dotación (2 goblins)", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } }
        ],
        options: [
            { n: "Orco adicional en dotación", p: 5 }
        ]
    },

    "Lanzapiedroz": {
        faction: "oyg",
        foc: "Special",
        points: 70,
        min: 1,
        max: 1,
        equipo: "La dotación: Rebanadora y Armadura ligera.",
        reglasEspeciales: "Dispara como catapulta, Miedo a loz orejotaz",
        perfiles: [
            { nombre: "Lanzapiedroz", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: "-", I: "-", A: "-", L: "-" } },
            { nombre: "Dotación (3 goblins)", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 2, A: 1, L: 7 } }
        ],
        options: [
            { n: "Orco adicional en dotación", p: 5 },
            { n: "Jarras de garrapatos zumbones", p: 15 }
        ]
    },

      "Trolls": {
        faction: "oyg",
        foc: "Special",
        points: 30,
        min: 2,
        max: 8,
        equipo: "Armas de mano",
        reglasEspeciales: "Miedo, Estupidez, Vómito de troll, Regeneración 4+",
        perfiles: [
            { nombre: "Trolls", stats: { M: 6, HA: 3, HP: 1, F: 5, R: 4, H: 3, I: 1, A: 3, L: 4 } }
        ],
        options: [
            { n: "Armas de mano adicionales", p: 5 },
            { n: "Armas a dos manos", p: 5 },
            { n: "Trolls de río (-1 para impactarles en CaC, cruzar ríos, cruzar pantanos)", p: 5 },
            { n: "Trolls de piedra (Piel escamosa 4+, Resistencia mágica 2)", p: 5 }
        ]
    },

    "Snotlings": {
        faction: "oyg",
        foc: "Special",
        points: 10,
        min: 1,
        max: 6,
        equipo: "Armas de mano",
        reglasEspeciales: "Impasibles",
        perfiles: [
            { nombre: "Snotlings", stats: { M: 4, HA: 2, HP: 2, F: 2, R: 2, H: 3, I: 3, A: 3, L: 10 } }
        ],
        options: [
            { n: "Ezporaz arrojadízaz", p: 1 }
        ]
    },

    "Jinetez de Garrapato Saltarín Goblins Nocturnos": {
        faction: "oyg",
        foc: "Special",
        points: 13,
        min: 5,
        max: 15,
        equipo: "Arma de mano y armadura ligera.",
        reglasEspeciales: "Odio (enanos), Inmunes a psicología, Movimiento aleatorio (3D6), Hostigadores, Detestables, Ataque rápido (garrapatos), ¡Boiling!",
        perfiles: [
            { nombre: "Garapato saltarín", stats: { M: "3D6", HA: 4, HP: 0, F: 5, R: 3, H: 1, I: 3, A: 2, L: 2 } }
        ],
        command: { 
            c: { n: "Jefe", p: 6 }
        }
    },

    "Paztorez de Garrapatoz": {
        faction: "oyg",
        foc: "Special",
        composition: {
            type: "ratioBased",
            primary: { name: "Garrapato", cost: 8 },
            secondary: { name: "Paztor", cost: 3 },
            ruleText: "Debes incluir 1-2 pastores por cada 3 garrapatos o fracción.",
            ruleLogic: { secondaryMin: 1, secondaryMax: 2, perPrimary: 3 }
        },
        min: { primary: 3, secondary: 2 },
        max: { primary: 15, secondary: 10 },
        equipo: "Pastores: Arma de mano, Pinchagarrapatoz y armadura ligera. Garrapatos: Afilados dientes (armas de mano).",
        reglasEspeciales: "Animosidad, Odio (enanos), Inmunes a psicología, Detestables, Ataque rápido (garrapatos), Rebaños de garrapatos, Garrapatos descontrolados",
        perfiles: [
            { nombre: "Paztorez Goblins nocturnos", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 6 } },
            { nombre: "Garrapato cavernícola", stats: { M: 4, HA: 4, HP: 0, F: 5, R: 3, H: 1, I: 3, A: 2, L: 2 } },
            { nombre: "Garrapato de crianza", stats: { M: 4, HA: 4, HP: 0, F: 5, R: 3, H: 1, I: 3, A: 3, L: 2 } }
        ],
        command: { 
            c: { n: "Garrapato de crianza", p: 6 }
        }
    },

    // === RARE ===
    "Katapulta de Goblinz Voladorez": {
        faction: "oyg",
        foc: "Rare",
        points: 80,
        min: 1,
        max: 1,
        equipo: "La dotación: Arma de mano y Armadura ligera.",
        reglasEspeciales: "Dispara como catapulta, Miedo a loz orejotaz, Goblin trazador",
        perfiles: [
            { nombre: "Katapulta", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: "-", I: "-", A: "-", L: "-" } },
            { nombre: "Dotación (3 goblins)", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } }
        ]
    },

     // === RARE === (continued)
    "Gigante": {
        faction: "oyg",
        foc: "Rare",
        points: 160,
        min: 1,
        max: 1,
        equipo: "Garrote (arma de mano)",
        reglasEspeciales: "Cruzar (obstáculos), Caídas, Ataques especiales del gigante",
        perfiles: [
            { nombre: "Gigante", stats: { M: 6, HA: 3, HP: 2, F: 6, R: 6, H: 6, I: 2, A: "*", L: 10 } }
        ]
    },
        "Aracnarock": {
        faction: "oyg",
        foc: "Rare",
        warning: "Requiere al menos un chamán o gran chamán goblin silvano en el ejército",
        points: 250,
        min: 1,
        max: 1,
        equipo: "Garras. Dotación: lanzas y arcos cortos.",
        reglasEspeciales: "Cruzar bosques, Immune a psicología, Cruzar obstáculos, Ataques envenenados (Aracnarock), Tozudez, Veloz, Trepamuros, Poder de penetración (Aracnarock), Piel escamosa 3+, Telarañas, Dotación de la Howda, Mordisco venenoso",
        perfiles: [
            { nombre: "Araña Aracnarock", stats: { M: 7, HA: 4, HP: 3, F: 6, R: 6, H: 8, I: 3, A: 7, L: "-" } },
            { nombre: "Dotación de la aracnarock (8 goblins silvanos)", stats: { M: "-", HA: 2, HP: 3, F: 3, R: "-", H: "-", I: 3, A: 1, L: 6 } }
        ]
    },

    "Vagoneta de Ataque Snotling": {
        faction: "oyg",
        foc: "Rare",
        points: 40,
        min: 1,
        max: 1,
        equipo: "Los snotlings: armas de mano.",
        reglasEspeciales: "Impasible, Immunes a psicología, Movimiento aleatorio, Tirada de salvación 5+",
        perfiles: [
            { nombre: "Vagoneta de ataque snotling", stats: { M: "2D6", HA: "-", HP: "-", F: 5, R: 4, H: 3, I: "-", A: "-", L: "-" } }
        ],
        options: [
            { n: "Rodillo con pinchos (tira 2D6 y elige el mayor para impactos por carga)", p: 10 },
            { n: "Velas (movimiento aleatorio 3D6)", p: 5 }
        ]
    },

    "Ídolo de Gorko (o Morko)": {
        faction: "oyg",
        foc: "Rare",
        warning: "Requiere un Gran Chamán Orco o Orco salvaje en el ejército",
        points: 230,
        min: 1,
        max: 1,
        equipo: "¡Piedras! (arma de mano)",
        reglasEspeciales: "Inestable, Tozudez, Piel escamosa (3+), Heridas múltiples (1D3), Ataques mágicos, Immune a veneno, Icono de los dioses pielesverdes",
        perfiles: [
            { nombre: "Ídolo de Gorko", stats: { M: 6, HA: 3, HP: 0, F: 7, R: 6, H: 6, I: 1, A: 4, L: 8 } },
            { nombre: "Ídolo de Morko", stats: { M: 6, HA: 3, HP: 0, F: 6, R: 7, H: 6, I: 1, A: 4, L: 8 } }
        ],
        options: [
            { n: "Ídolo de Gorko (Furia asesina, Odio todos los enemigos)", p: 20 },
            { n: "Ídolo de Morko (TSE 6+, Resistencia mágica 1)", p: 15 }
        ]
    },

    "Arrazadorez Orcos Negros": {
        faction: "oyg",
        foc: "Rare",
        points: 30,
        min: 5,
        max: 12,
        equipo: "Gran surtido de armas, Koraza y escudo",
        reglasEspeciales: "Armadoz hazta loz piñoz, Inmunes a la psicología, Loz mejores, Koraza, Piel grueza (jabalí), Carga devastadora (jabalí)",
        perfiles: [
            { nombre: "Orcos negros", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 1, I: 2, A: 1, L: 8 } },
            { nombre: "Jefe Orco negro", stats: { M: 4, HA: 5, HP: 3, F: 5, R: 4, H: 1, I: 2, A: 2, L: 8 } },
            { nombre: "Jabalí", stats: { M: 7, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 2, A: 1, L: 3 } }
        ],
        command: { 
            c: { n: "Jefe", p: 10 }, 
            s: { n: "Portaestandarte", p: 8 }, 
            m: { n: "Músico", p: 8 } 
        },
        magicBanner: 50
    },

    "Garrapato Despachurrador": {
        faction: "oyg",
        foc: "Rare",
        warning: "Requiere al menos un personaje goblin nocturno en el ejército",
        points: 80,
        min: 1,
        max: 1,
        equipo: "Dientes y cadenas (arma de mano)",
        reglasEspeciales: "Movimiento aleatorio, Pa-chof!, Potencial de destrucción masiva, Totalmente fuera de control",
        perfiles: [
            { nombre: "Garrapato despachurrador", stats: { M: "3D6", HA: "-", HP: "-", F: 6, R: 4, H: 3, I: 3, A: "*", L: 3 } }
        ]
    },

    // === LORDS ===
    "Kaudillo Orco Negro": {
        faction: "oyg",
        foc: "Lord",
        subfaction: "Orco",
        points: 140,
        min: 1, max: 1,
        equipo: "Koraza, Escudo.",
        reglasEspeciales: "Armado hazta loz piñoz, inmune a psicología, Dizziplina, Loz mejorez",
        perfiles: [ { nombre: "Kaudillo Orco Negro", stats: { M: 4, HA: 7, HP: 3, F: 5, R: 5, H: 3, I: 4, A: 4, L: 10 } } ],
        mounts: ["Jabalí de guerra"],
        maxMagicItems: 3,
        maxRelics: 1
    },

    "Kaudillo Orco Salvaje": {
        faction: "oyg",
        foc: "Lord",
        subfaction: "Orco",
        points: 125,
        min: 1, max: 1,
        equipo: "Rebanadora.",
        reglasEspeciales: "Furia asesina, Pinturas de guerra, Loz mejorez",
        perfiles: [ { nombre: "Kaudillo Orco salvaje", stats: { M: 4, HA: 6, HP: 3, F: 5, R: 5, H: 3, I: 4, A: 4, L: 9 } } ],
        options: [
            { n: "Rebanadora adicional", p: 3 },
            { n: "Arma a dos manos", p: 4 },
            { n: "Lanza (solo montado)", p: 1 },
            { n: "Escudo", p: 3 }
        ],
        mounts: ["Jabalí de guerra", "Serpiente alada"],
        maxMagicItems: 3,
        maxRelics: 1
    },

    "Kaudillo Orco": {
        faction: "oyg",
        foc: "Lord",
        subfaction: "Orco",
        points: 115,
        min: 1, max: 1,
        equipo: "Armadura pesada, Rebanadora.",
        reglasEspeciales: "Loz mejorez",
        perfiles: [ { nombre: "Kaudillo Orco", stats: { M: 4, HA: 6, HP: 3, F: 5, R: 5, H: 3, I: 4, A: 4, L: 9 } } ],
        options: [
            { n: "Rebanadora adicional", p: 3 },
            { n: "Arma a dos manos", p: 4 },
            { n: "Lanza (solo montado)", p: 1 },
            { n: "Escudo", p: 3 }
        ],
        mounts: ["Jabalí de guerra", "Carro de jabalíes", "Serpiente alada"],
        maxMagicItems: 3,
        maxRelics: 1
    },

    "Kaudillo Goblin": {
        faction: "oyg",
        foc: "Lord",
        subfaction: "goblin",
        points: 60,
        min: 1, max: 1,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Miedo a loz orejotaz",
        perfiles: [ { nombre: "Kaudillo Goblin", stats: { M: 4, HA: 5, HP: 4, F: 4, R: 4, H: 3, I: 6, A: 4, L: 8 } } ],
        options: [
            { n: "Arma a dos manos", p: 4 },
            { n: "Arma de mano adicional", p: 3 },
            { n: "Lanza", p: 3 },
            { n: "Arco corto", p: 5 },
            { n: "Armadura pesada", p: 4 },
            { n: "Escudo", p: 3 }
        ],
        mounts: ["Lobo gigante", "Karro de lobos", "Serpiente alada", "Troll Amacztrado"],
        maxMagicItems: 3,
        maxRelics: 1
    },

    "Kaudillo Goblin Silvano": {
        faction: "oyg",
        foc: "Lord",
        subfaction: "goblin",
        points: 65,
        min: 1, max: 1,
        equipo: "Arma de mano y Arco corto.",
        reglasEspeciales: "Miedo a loz orejotaz, Ataques envenenados, Cruzar bosques",
        perfiles: [ { nombre: "Kaudillo Goblin silvano", stats: { M: 4, HA: 5, HP: 5, F: 4, R: 4, H: 3, I: 6, A: 4, L: 8 } } ],
        options: [
            { n: "Arma a dos manos", p: 4 },
            { n: "Arma de mano adicional", p: 3 },
            { n: "Lanza", p: 3 },
            { n: "Escudo", p: 3 }
        ],
        mounts: ["Araña gigante", "Araña gigantesca", "Serpiente alada", "Troll de río"],
        maxMagicItems: 3,
        maxRelics: 1
    },

    "Kaudillo Goblin Nocturno": {
        faction: "oyg",
        foc: "Lord",
        subfaction: "goblin",
        points: 65,
        min: 1, max: 1,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Miedo a loz orejotaz, Odio (enanos)",
        perfiles: [ { nombre: "Kaudillo Goblin nocturno", stats: { M: 4, HA: 5, HP: 4, F: 4, R: 4, H: 3, I: 7, A: 4, L: 8 } } ],
        options: [
            { n: "Arma a dos manos", p: 4 },
            { n: "Arma de mano adicional", p: 3 },
            { n: "Garrote", p: 4 },
            { n: "Pinchagarrapatos", p: 4 },
            { n: "Lanza", p: 3 },
            { n: "Arco corto", p: 5 },
            { n: "Armadura pesada", p: 4 },
            { n: "Escudo", p: 3 }
        ],
        mounts: ["Garrapato cavernícola gigante", "Serpiente alada", "Troll amacztrado de piedra", "Palanquin de guerra"],
        maxMagicItems: 3,
        maxRelics: 1
    },

    "Gran Chamán Orco Salvaje": {
        faction: "oyg",
        foc: "Lord",
        subfaction: "Orco",
        points: 170,
        min: 1, max: 1,
        equipo: "Rebanadora.",
        reglasEspeciales: "Kanalización verde, Furia asesina, Pinturas de guerra, Loz mejorez",
        perfiles: [ { nombre: "Gran Chamán Orco Salvaje", stats: { M: 4, HA: 3, HP: 3, F: 4, R: 5, H: 3, I: 3, A: 2, L: 8 } } ],
        options: [
            { n: "Arma a dos manos", p: 4 },
            { n: "Rebanadora adicional", p: 3 },
            { n: "Nivel de Magia 4", p: 35 }
        ],
        mounts: ["Jabalí de guerra", "Serpiente alada"],
        maxMagicItems: 3,
        maxRelics: 1
    },

    "Gran Chamán Orco": {
        faction: "oyg",
        foc: "Lord",
        subfaction: "Orco",
        points: 160,
        min: 1, max: 1,
        equipo: "Rebanadora.",
        reglasEspeciales: "Kanalización verde, Loz mejorez",
        perfiles: [ { nombre: "Gran Chamán Orco", stats: { M: 4, HA: 3, HP: 3, F: 4, R: 5, H: 3, I: 3, A: 2, L: 8 } } ],
        options: [
            { n: "Arma a dos manos", p: 4 },
            { n: "Rebanadora adicional", p: 3 },
            { n: "Nivel de Magia 4", p: 35 }
        ],
        mounts: ["Jabalí de guerra", "Carro de jabalíes", "Serpiente alada"],
        maxMagicItems: 3,
        maxRelics: 1
    },

    "Gran Chamán Goblin": {
        faction: "oyg",
        foc: "Lord",
        subfaction: "goblin",
        points: 140,
        min: 1, max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Kanalización verde, Miedo a loz orejotaz",
        perfiles: [ { nombre: "Gran Chamán Goblin", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 4, H: 3, I: 4, A: 1, L: 7 } } ],
        options: [
            { n: "Arma a dos manos", p: 4 },
            { n: "Arma de mano adicional", p: 3 },
            { n: "Nivel de Magia 4", p: 35 }
        ],
        mounts: ["Lobo gigante", "Karro de lobos"],
        maxMagicItems: 3,
        maxRelics: 1
    },

    "Gran Chamán Goblin Silvano": {
        faction: "oyg",
        foc: "Lord",
        subfaction: "goblin",
        points: 145,
        min: 1, max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Kanalización verde, Miedo a loz orejotaz, Ataques envenenados, Cruzar bosques",
        perfiles: [ { nombre: "Gran Chamán Goblin silvano", stats: { M: 4, HA: 2, HP: 4, F: 3, R: 4, H: 3, I: 4, A: 1, L: 7 } } ],
        options: [
            { n: "Arma a dos manos", p: 4 },
            { n: "Arma de mano adicional", p: 3 },
            { n: "Arco corto", p: 3 },
            { n: "Nivel de Magia 4", p: 35 }
        ],
        mounts: ["Araña gigante", "Araña gigantesca", "Araña Aracnarock"],
        maxMagicItems: 3,
        maxRelics: 1
    },

    "Gran Chamán Goblin Nocturno": {
        faction: "oyg",
        foc: "Lord",
        subfaction: "goblin",
        points: 150,
        min: 1, max: 1,
        equipo: "Arma de mano y 1D3 Zetaz Mágikaz.",
        reglasEspeciales: "Kanalización verde, Miedo a loz orejotaz, Odio (enanos)",
        perfiles: [ { nombre: "Gran Chamán Goblin nocturno", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 4, H: 3, I: 5, A: 1, L: 7 } } ],
        options: [
            { n: "Arma a dos manos", p: 4 },
            { n: "Arma de mano adicional", p: 3 },
            { n: "Zetaz Mágikaz adicionales (hasta 3)", p: 10 },
            { n: "Nivel de Magia 4", p: 35 }
        ],
        mounts: ["Garrapato cavernícola gigante"],
        maxMagicItems: 3,
        maxRelics: 1
    },
    // Adding Heroes to unitsDB_oyg (insert this before the closing brace of unitsDB_oyg)
"Gran Jefe Orco Negro": {
    faction: "oyg",
    foc: "Hero",
    subfaction: "Orco",
    points: 90,
    min: 1, max: 1,
    equipo: "Koraza, Escudo.",
    reglasEspeciales: "Armado hazta loz piñoz, inmune a psicología, Dizziplina, Loz mejorez",
    perfiles: [ { nombre: "Gran jefe Orco Negro", stats: { M: 4, HA: 6, HP: 3, F: 5, R: 5, H: 2, I: 3, A: 3, L: 9 } } ],
    mounts: ["Jabalí de guerra"],
    maxMagicItems: 2,
     battleStandard: { name: "Portaestandarte de Batalla", cost: 25 }
},

"Gran Jefe Orco Salvaje": {
    faction: "oyg",
    foc: "Hero",
    subfaction: "Orco",
    points: 75,
    min: 1, max: 1,
    equipo: "Rebanadora.",
    reglasEspeciales: "Furia asesina, Pinturas de guerra, Loz mejorez",
    perfiles: [ { nombre: "Gran jefe Orco Salvaje", stats: { M: 4, HA: 5, HP: 3, F: 4, R: 5, H: 2, I: 3, A: 3, L: 8 } } ],
    options: [
        { n: "Rebanadora adicional", p: 2 },
        { n: "Arma a dos manos", p: 2 },
        { n: "Lanza (solo montado)", p: 1 },
        { n: "Escudo", p: 2 }
    ],
    mounts: ["Jabalí de guerra"],
    maxMagicItems: 2,
     battleStandard: { name: "Portaestandarte de Batalla", cost: 25 }
},

"Gran Jefe Orco": {
    faction: "oyg",
    foc: "Hero",
    subfaction: "Orco",
    points: 60,
    min: 1, max: 1,
    equipo: "Armadura pesada, Rebanadora.",
    reglasEspeciales: "Loz mejorez",
    perfiles: [ { nombre: "Gran jefe Orco", stats: { M: 4, HA: 5, HP: 3, F: 4, R: 5, H: 2, I: 3, A: 3, L: 8 } } ],
    options: [
        { n: "Rebanadora adicional", p: 2 },
        { n: "Arma a dos manos", p: 2 },
        { n: "Lanza (solo montado)", p: 1 },
        { n: "Escudo", p: 2 }
    ],
    mounts: ["Jabalí de guerra", "Carro de jabalíes"],
    maxMagicItems: 2,
     battleStandard: { name: "Portaestandarte de Batalla", cost: 25 }
},

"Gran Jefe Goblin": {
    faction: "oyg",
    foc: "Hero",
    subfaction: "goblin",
    points: 30,
    min: 1, max: 1,
    equipo: "Arma de mano y Armadura ligera.",
    reglasEspeciales: "Miedo a loz orejotaz",
    perfiles: [ { nombre: "Gran jefe Goblin", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 2, I: 5, A: 3, L: 7 } } ],
    options: [
        { n: "Arma a dos manos", p: 3 },
        { n: "Arma de mano adicional", p: 2 },
        { n: "Lanza", p: 1 },
        { n: "Arco corto", p: 3 },
        { n: "Armadura pesada", p: 3 },
        { n: "Escudo", p: 2 }
    ],
    mounts: ["Lobo gigante", "Karro de lobos", "Troll Amaeztrado"],
    maxMagicItems: 2,
     battleStandard: { name: "Portaestandarte de Batalla", cost: 25 }
},

"Gran Jefe Goblin Silvano": {
    faction: "oyg",
    foc: "Hero",
    subfaction: "goblin",
    points: 35,
    min: 1, max: 1,
    equipo: "Arma de mano y Arco corto.",
    reglasEspeciales: "Miedo a loz orejotaz, Ataques envenenados, Cruzar bosques",
    perfiles: [ { nombre: "Gran jefe Goblin silvano", stats: { M: 4, HA: 4, HP: 4, F: 4, R: 4, H: 2, I: 5, A: 3, L: 7 } } ],
    options: [
        { n: "Arma a dos manos", p: 3 },
        { n: "Arma de mano adicional", p: 2 },
        { n: "Lanza", p: 2 },
        { n: "Escudo", p: 2 }
    ],
    mounts: ["Araña gigante", "Araña gigantesca", "Troll amaeztrado de río"],
    maxMagicItems: 2,
     battleStandard: { name: "Portaestandarte de Batalla", cost: 25 }
},

"Gran Jefe Goblin Nocturno": {
    faction: "oyg",
    foc: "Hero",
    subfaction: "goblin",
    points: 35,
    min: 1, max: 1,
    equipo: "Arma de mano y Armadura ligera.",
    reglasEspeciales: "Miedo a loz orejotaz, Odio (enanos)",
    perfiles: [ { nombre: "Gran jefe Goblin nocturno", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 2, I: 6, A: 3, L: 7 } } ],
    options: [
        { n: "Arma a dos manos", p: 3 },
        { n: "Arma de mano adicional", p: 2 },
        { n: "Garrote", p: 3 },
        { n: "Pinchagarrapatos", p: 3 },
        { n: "Lanza", p: 2 },
        { n: "Arco corto", p: 3 },
        { n: "Armadura pesada", p: 3 },
        { n: "Escudo", p: 2 }
    ],
    mounts: ["Garrapato cavernícola gigante", "Troll amaeztrado de piedra"],
    maxMagicItems: 2,
     battleStandard: { name: "Portaestandarte de Batalla", cost: 25 }
},

"Chamán Orco": {
    faction: "oyg",
    foc: "Hero",
    subfaction: "Orco",
    points: 65,
    min: 1, max: 1,
    equipo: "Rebanadora.",
    reglasEspeciales: "Kanalización verde, Loz mejorez",
    perfiles: [ { nombre: "Chamán Orco", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 4, H: 2, I: 2, A: 1, L: 7 } } ],
    options: [
        { n: "Arma a dos manos", p: 2 },
        { n: "Rebanadora adicional", p: 2 },
        { n: "Nivel de Magia 2", p: 35 }
    ],
    mounts: ["Jabalí de guerra", "Carro de jabalíes"],
    maxMagicItems: 2
},

"Chamán Orco Salvaje": {
    faction: "oyg",
    foc: "Hero",
    subfaction: "Orco",
    points: 70,
    min: 1, max: 1,
    equipo: "Rebanadora.",
    reglasEspeciales: "Kanalización verde, Furia asesina, Pinturas de guerra, Loz mejorez",
    perfiles: [ { nombre: "Chamán Orco Salvaje", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 4, H: 2, I: 2, A: 1, L: 7 } } ],
    options: [
        { n: "Arma a dos manos", p: 2 },
        { n: "Rebanadora adicional", p: 2 },
        { n: "Nivel de Magia 2", p: 35 }
    ],
    mounts: ["Jabalí de guerra"],
    maxMagicItems: 2
},

"Chamán Goblin": {
    faction: "oyg",
    foc: "Hero",
    subfaction: "goblin",
    points: 50,
    min: 1, max: 1,
    equipo: "Arma de mano.",
    reglasEspeciales: "Kanalización verde, Miedo a loz orejotaz",
    perfiles: [ { nombre: "Chamán Goblin", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 1, L: 6 } } ],
    options: [
        { n: "Arma a dos manos", p: 2 },
        { n: "Arma de mano adicional", p: 2 },
        { n: "Nivel de Magia 2", p: 35 }
    ],
    mounts: ["Lobo gigante", "Karro de lobos"],
    maxMagicItems: 2
},

"Chamán Goblin Silvano": {
    faction: "oyg",
    foc: "Hero",
    subfaction: "goblin",
    points: 55,
    min: 1, max: 1,
    equipo: "Arma de mano.",
    reglasEspeciales: "Kanalización verde, Miedo a loz orejotaz, Ataques envenenados",
    perfiles: [ { nombre: "Chamán Goblin silvano", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 1, L: 6 } } ],
    options: [
        { n: "Arma a dos manos", p: 2 },
        { n: "Arma de mano adicional", p: 2 },
        { n: "Arco corto", p: 2 },
        { n: "Nivel de Magia 2", p: 35 }
    ],
    mounts: ["Araña gigante", "Araña gigantesca"],
    maxMagicItems: 2
},

"Chamán Goblin Nocturno": {
    faction: "oyg",
    foc: "Hero",
    subfaction: "goblin",
    points: 60,
    min: 1, max: 1,
    equipo: "Arma de mano y una Zeta Mágika.",
    reglasEspeciales: "Kanalización verde, Miedo a loz orejotaz, Odio (enanos)",
    perfiles: [ { nombre: "Chamán Goblin nocturno", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 2, I: 4, A: 1, L: 6 } } ],
    options: [
        { n: "Arma a dos manos", p: 2 },
        { n: "Arma de mano adicional", p: 2 },
        { n: "Zetaz Mágikaz adicionales (hasta 3)", p: 10 },
        { n: "Nivel de Magia 2", p: 35 }
    ],
    mounts: ["Garrapato cavernícola gigante"],
    maxMagicItems: 2
}
};
const mountsDB_oyg = {
    "Jabalí de guerra": { 
        faction: "oyg", 
        points: 15, 
        perfiles: [ { nombre: "Jabalí de guerra", stats: { M: 7, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 2, A: 1, L: 3 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. Piel grueza (+2 TSA jinete), Carga devastadora." 
    },
    "Lobo gigante": { 
        faction: "oyg", 
        points: 12, 
        perfiles: [ { nombre: "Lobo", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 4, A: 1, L: 6 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. Caballería rápida." 
    },
    "Araña gigante": { 
        faction: "oyg", 
        points: 12, 
        perfiles: [ { nombre: "Araña gigante", stats: { M: 7, HA: 3, HP: 0, F: 3, R: 3, H: 1, I: 4, A: 1, L: 2 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. Caballería rápida, Trepamuros, Cruzar bosques, Ataques envenenados, Poder de penetración, Cruzar obstáculos, Miedo, Telarañas, Piel quitinosa (+2 TSA jinete)." 
    },
    "Araña gigantesca": { 
        faction: "oyg", 
        points: 55, 
        perfiles: [ { nombre: "Araña gigantesca", stats: { M: 7, HA: 4, HP: 0, F: 5, R: 5, H: 4, I: 4, A: 4, L: 4 } } ], 
        reglasEspeciales: "Bestia monstruosa. Cambia el tipo a Caballería monstruosa. Caballería rápida, Trepamuros, Cruzar bosques, Ataques envenenados, Poder de penetración, Cruzar obstáculos, Miedo, Telarañas, Piel quitinosa (+2 TSA jinete)." 
    },
    "Garrapato cavernícola gigante": { 
        faction: "oyg", 
        points: 40, 
        perfiles: [ { nombre: "Garrapato cavernícola gigante", stats: { M: "3D6", HA: 4, HP: 0, F: 5, R: 4, H: 3, I: 3, A: 3, L: 3 } } ], 
        reglasEspeciales: "Bestia monstruosa. Cambia el tipo a Caballería monstruosa. Odio (enanos), Miedo, Impactos por carga (1), Immune a psicología, Movimiento aleatorio (3D6), Hostigador, Detestables, Ataque rápido, Vinkulo de manada." 
    },
    "Palanquin de guerra": { 
        faction: "oyg", 
        points: 40, 
        perfiles: [ 
            { nombre: "Palankín de guerra", stats: { M: 4, HA: 3, HP: 3, F: 3, R: "-", H: "-", I: 5, A: 1, L: 7 } },
            { nombre: "Chikoz duroz (4)", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 6 } }
        ], 
        reglasEspeciales: "Infantería. No cambia el tipo. +2 TSA jinete, +1 Herida al jinete." 
    },
    "Troll Amaeztrado": { 
        faction: "oyg", 
        points: 50, 
        perfiles: [ { nombre: "Troll Amacztrado", stats: { M: 6, HA: 3, HP: 1, F: 5, R: 4, H: 3, I: 1, A: 3, L: 4 } } ], 
        reglasEspeciales: "Bestia monstruosa. Cambia el tipo a Caballería monstruosa. No Veloz. Miedo, Estupidez, Regeneración (5+), Vómito de troll." 
    },
    "Troll Amaeztrado de río": { 
        faction: "oyg", 
        points: 60, 
        perfiles: [ { nombre: "Troll de río", stats: { M: 6, HA: 3, HP: 1, F: 5, R: 4, H: 3, I: 1, A: 3, L: 4 } } ], 
        reglasEspeciales: "Bestia monstruosa. Cambia el tipo a Caballería monstruosa. No Veloz. Miedo, Estupidez, Regeneración (5+), Vómito de troll, -1 para impactarles en CaC, cruzar ríos, cruzar pantanos." 
    },
    "Troll amaeztrado de piedra": { 
        faction: "oyg", 
        points: 60, 
        perfiles: [ { nombre: "Troll de piedra", stats: { M: 6, HA: 3, HP: 1, F: 5, R: 4, H: 3, I: 1, A: 3, L: 4 } } ], 
        reglasEspeciales: "Bestia monstruosa. Cambia el tipo a Caballería monstruosa. No Veloz. Miedo, Estupidez, Regeneración (5+), Vómito de troll, +1 TSA jinete, Resistencia mágica 2." 
    },
    "Serpiente alada": { 
        faction: "oyg", 
        points: 155, 
        perfiles: [ { nombre: "Serpiente alada", stats: { M: 8, HA: 5, HP: 0, F: 6, R: 5, H: 5, I: 3, A: 3, L: 6 } } ], 
        reglasEspeciales: "Monstruo. Volar. Ataques envenenados, Aguijón (Heridas múltiples 1D6), Piel escamosa 4+." 
    },
    "Araña Aracnarock": { 
        faction: "oyg", 
        points: 250, 
        perfiles: [ 
            { nombre: "Araña Aracnarock", stats: { M: 7, HA: 4, HP: 3, F: 6, R: 6, H: 8, I: 3, A: 7, L: "-" } },
            { nombre: "Dotación de la aracnarock (8 goblins silvanos)", stats: { M: "-", HA: 2, HP: 3, F: 3, R: "-", H: "-", I: 3, A: 1, L: 6 } }
        ], 
        reglasEspeciales: "Monstruo. Cruzar bosques, Immune a psicología, Cruzar obstáculos, Ataques envenenados, Tozudez, Veloz, Terror, Trepamuros, Poder de penetración, Piel escamosa 4+, Telarañas, Dotación de la Howda, Mordisco venenoso." 
    },
    "Carro de jabalíes": { 
        faction: "oyg", 
        points: 65, 
        perfiles: [ 
            { nombre: "Carro de jabalíes", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 5, H: 4, I: "-", A: "-", L: "-" } },
            { nombre: "Dotación de orcos (2)", stats: { M: "-", HA: 3, HP: 3, F: 3, R: "-", H: "-", I: 2, A: 1, L: 7 } },
            { nombre: "Jabalí de guerra (2)", stats: { M: 7, HA: 3, HP: 0, F: 4, R: "-", H: "-", I: 2, A: 1, L: 3 } }
        ], 
        reglasEspeciales: "Carro. TSA 4+, Carga devastadora (jabalís), Loz mejorez." 
    },
    "Karro de lobos": { 
        faction: "oyg", 
        points: 30, 
        perfiles: [ 
            { nombre: "Karro de lobos", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 4, H: 3, I: "-", A: "-", L: "-" } },
            { nombre: "Dotación de goblins (2)", stats: { M: "-", HA: 2, HP: 3, F: 3, R: "-", H: "-", I: 3, A: 1, L: 6 } },
            { nombre: "Lobo (2)", stats: { M: 9, HA: 4, HP: 0, F: 4, R: "-", H: "-", I: 4, A: 1, L: 6 } }
        ], 
        reglasEspeciales: "Carro. TSA 5+, Miedo a loz orejotaz." 
    }
};
const specialProfilesDB_oyg = {
    "Fanático": {
        perfiles: [
            { nombre: "Fanático", stats: { M: "2D6", HA: 0, HP: 0, F: 5, R: 3, H: 1, I: 4, A: 0, L: 6 } }
        ]
    },
    "Merodeador": {
        perfiles: [
            { nombre: "Merodeador odiozo", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 5, A: 2, L: 6 } }
        ]
    }
};
const magicItemsDB_oyg = {
    
        "Arma Mágica": {
            "Zúper-rebanadora del Gran Waaaaagh!": { points: 50, faction: "oyg", relic: true, subfaction: "Orco", summary: "Rebanadora. Sustituye Ataques por 2D6 Ataques aleatorios." },
            "Hacha de Batalla del último Waaaagh!": { points: 50, faction: "oyg", relic: true, subfaction: "Orco", summary: "Arma a dos Manos. +1D3 Ataques, Golpe Maestro, Heridas multiples (1D2)." },
            "Morgor la Mutiladora": { points: 50, faction: "oyg", relic: false, subfaction: "Orco", summary: "Rebanadora. +2 I, +1 HA, +1 F, +1 A." },
            "Gran machakadora de Basha": { points: 35, faction: "oyg", relic: false, subfaction: "Orco", summary: "Rebanadora. +2 Ataques, Poder de penetración." },
            "Hacha buzkadora de Ulag": { points: 35, faction: "oyg", relic: false, subfaction: "Orco", summary: "Rebanadora. +1 F, repetir tiradas para impactar en CaC." },
            "Pinchapuerkoz de Porko": { points: 30, faction: "oyg", relic: false, subfaction: "Orco", summary: "Lanza (solo montados). +Ataques igual al bonificador por filas enemigo." },
            "Tranka Krujehuezoz de Krumpa": { points: 25, faction: "oyg", relic: false, subfaction: "Orco", summary: "Arma a dos manos. Furia asesina permanente, Odio." },
            "Kacharroz de matar de Owzat": { points: 20, faction: "oyg", relic: false, subfaction: "Orco", summary: "Rebanadoras emparejadas. Odio, Golpe Maestro." },
            "Aplastakráncos": { points: 10, faction: "oyg", relic: false, subfaction: "Orco", summary: "Arma a dos manos. Una vez por batalla: +3 F adicional en una fase de CaC." },
            "La Ezpada de Borko": { points: 5, faction: "oyg", relic: false, subfaction: "Orco", summary: "Rebanadora. Ignorar primer fallo de Animosidad de la unidad." },
             "Hacha de chafar taponez": { points: 40, faction: "oyg", relic: true, subfaction: "goblin", summary: "Arma de mano. +2 F, +2 A, Poder de penetración. Vs enanos: Furia asesina." },
            "Tranka enorme de Gimlug": { points: 35, faction: "oyg", relic: false, subfaction: "goblin", summary: "Garrote goblin. F+1, Impactos multiples (2), Heridas múltiples (2)." },
            "Hacha zertera de Ulag": { points: 30, faction: "oyg", relic: false, subfaction: "goblin", summary: "Arma de mano. +1 F, repetir tiradas para impactar en CaC." },
            "Puñalez malvadoz": { points: 25, faction: "oyg", relic: false, subfaction: "goblin", summary: "Armas emparejadas. I10, Poder de penetración." },
            "Arko buzkador": { points: 25, faction: "oyg", relic: false, subfaction: "goblin", summary: "Arco largo. Francotirador, Ataques envenenados 5+." },
            "Ezpada traizionera": { points: 25, faction: "oyg", relic: false, subfaction: "goblin", summary: "Arma de mano. Ataques envenenados. +1 F si flanco, +2 F si retaguardia." },
            "Zeta Yuyu": { points: 20, faction: "oyg", relic: false, subfaction: "goblin", summary: "Arma a dos manos. Por impacto, oponente chequea Resistencia o queda HA/F/I 1." },
            "Úniko kaztañazo de Wollopa": { points: 15, faction: "oyg", relic: false, subfaction: "goblin", summary: "Arma de mano. Una vez por batalla: F10 durante una fase de CaC." },
            "Zuperacha de Martog": { points: 15, faction: "oyg", relic: false, subfaction: "goblin", summary: "Arma de mano. +1 HA, +1 F, +1 I." },
            "Zitepincho-temato": { points: 10, faction: "oyg", relic: false, subfaction: "goblin", summary: "Lanza. -3 adicional a TSA del enemigo." },
            "Akuchillador zuertudo": { points: 5, faction: "oyg", relic: false, subfaction: "goblin", summary: "Arma de mano. +1 F por cada objeto mágico que porte el personaje enemigo atacado." }
        },
        "Armadura Mágica": {
            "Koraza de Morko": { points: 60, faction: "oyg", relic: true, subfaction: "Orco", summary: "Koraza. Regeneración (4+), Resistencia mágica (2)." },
            "Koraza de Protekción": { points: 30, faction: "oyg", relic: false, subfaction: "Orco", summary: "Koraza. Regeneración (5+)." },
            "Ezkudo Pellejo'ierro": { points: 30, faction: "oyg", relic: false, subfaction: "Orco", summary: "Escudo. TSE 5+. Cada TSE exitosa en CaC causa impacto F5 al atacante." },
            "Koraza de Gorko": { points: 25, faction: "oyg", relic: false, subfaction: "Orco", summary: "Koraza. Repetir TSA fallidas." },
            "Kazko de Guerra de Urgluk": { points: 25, faction: "oyg", relic: false, subfaction: "Orco", summary: "Yelmo (+1 TSA). +6\" rango de influencia para Ni un paso atrás/Liderazgo inspirador." },
            "Armadura de loz taponez": { points: 35, faction: "oyg", relic: false, subfaction: "goblin", summary: "Armadura de gromril (TSA 4+). TSE 5+." },
            "Koraza vengativa": { points: 30, faction: "oyg", relic: false, subfaction: "goblin", summary: "Armadura pesada. Cada TSA exitosa en CaC causa impacto F4 al atacante." },
            "Kazko furiozo": { points: 10, faction: "oyg", relic: false, subfaction: "goblin", summary: "Yelmo (+1 TSA). Furia asesina permanente (no se pierde)." },
            "Pellejoz apeztozoz": { points: 5, faction: "oyg", relic: false, subfaction: "goblin", summary: "Armadura ligera. TSA 4+. No puede usar ¡Cuidado, señor!." }
       
        },
        "Talismán": {
            "El Talizman Verde": { points: 45, faction: "oyg", relic: true, subfaction: "Orco", summary: "Regeneración (4+)." },
            "El Kollar de Zorga": { points: 15, faction: "oyg", relic: false, subfaction: "Orco", summary: "Bestias/Monstruos solo impactan con 6 natural en CaC." },
            "El mejor Kachivache p'al ke manda": { points: 30, faction: "oyg", relic: false, subfaction: "Orco", summary: "TSE 5+. Una vez por batalla repetir tirada de impacto, herida, salvación o atributo." },
            "Pintura de guerra mágika": { points: 25, faction: "oyg", relic: false, subfaction: "Orco", summary: "Solo Orkoz Zalvajez. Sin armadura. TSE 5+, Resistencia mágica (1)." },
            "Kareto de Morko": { points: 20, faction: "oyg", relic: false, subfaction: "Orco", summary: "Ataques enemigos en CaC tienen -1 para impactar." },
            "Piedro de la zuerte": { points: 50, faction: "oyg", relic: true, subfaction: "goblin", summary: "Solo Goblins. Repetir todas tiradas de impacto, herida, salvación y atributo." },
            "Talizmán de Morko": { points: 20, faction: "oyg", relic: false, subfaction: "goblin", summary: "Ataques cuerpo a cuerpo contra portador tienen -1 para impactar." },
            "Pintura de guerra mágika": { points: 25, faction: "oyg", relic: false, subfaction: "goblin", summary: "Solo Goblins silvanos. Sin armadura. TSE 5+, Resistencia mágica (1)." },
            "El mejor Kachivache p'al ke manda": { points: 25, faction: "oyg", relic: false, subfaction: "goblin", summary: "TSE 5+." },
            "Kollar Chungo": { points: 20, faction: "oyg", relic: false, subfaction: "goblin", summary: "Al morir: plantilla pequeña, impacto F6 Heridas múltiples (1D3) a todos." },
            "Korona mágika": { points: 10, faction: "oyg", relic: false, subfaction: "goblin", summary: "Un solo uso. TSE 4+ hasta fin de fase." }
        
        },
        "Artefacto Arcano": {
            "Bákulo de Baduum": { points: 45, faction: "oyg", relic: true, subfaction: "Orco", summary: "+1 hechizo conocido, +1 al lanzar hechizos." },
            "Kollar de Huezoz y Kolmilloz": { points: 35, faction: "oyg", relic: false, subfaction: "Orco", summary: "+1D3 dados energía por fase (solo portador). Cada 1 causa herida. Herida por dado no gastado." },
            "Palo Achicharrador": { points: 30, faction: "oyg", relic: false, subfaction: "Orco", summary: "Portahechizos(4). Hechizo: proyectil 18\", 1D6 impactos F6 (Rayos)." },
            "El Baztón Rugozo de Buzgob": { points: 25, faction: "oyg", relic: false, subfaction: "Orco", summary: "+1 dispersar. Guardar 1 dado no usado para siguiente fase." },
            "Familiar Bazilón": { points: 15, faction: "oyg", relic: false, subfaction: "Orco", summary: "Un solo uso. Canalizar al 4+, pero 1's pierden nivel de magia temporal." },
            "Garabatoz Mágikoz": { points: 10, faction: "oyg", relic: false, subfaction: "Orco", summary: "+2 lanzar hechizos si ha perdido al menos 1 herida." },
            "Muñeko diabóliko": { points: 50, faction: "oyg", relic: false, subfaction: "goblin", summary: "Elegir hechicero enemigo: -1 lanzar y dispersar hechizos." },
            "Bákulo chorizador": { points: 40, faction: "oyg", relic: false, subfaction: "goblin", summary: "Robar 1 dado energía enemigo y añadirlo a tus dados dispersión." },
            "Palo de loz diozez": { points: 30, faction: "oyg", relic: false, subfaction: "goblin", summary: "Señor del conocimiento (Pequeño Waaagh), -1 adicional en tabla disfunciones." },
            "Veneno de aracnarock": { points: 20, faction: "oyg", relic: false, subfaction: "goblin", summary: "Repetir resultado en tabla de disfunciones mágicas." },
            "Kaldero de nieblaz": { points: 20, faction: "oyg", relic: false, subfaction: "goblin", summary: "Portahechizos(4). Hechizo: unidad amiga Cruzar, -1 impactar contra ella." },
            "Corona de Piñoz verdez": { points: 15, faction: "oyg", relic: false, subfaction: "goblin", summary: "Canalización verde también para dispersión, Resistencia mágica (1)." }
        },
        "Objeto Hechizado": {
            "Kuerno de Urgok": { points: 40, faction: "oyg", relic: true, subfaction: "Orco", summary: "Portahechizos(6). Hechizo: todas unidades +1L amigas/-1L enemigas por 1 turno." },
            "Mandíbula de Hierro del Kaudillo Imbaz": { points: 35, faction: "oyg", relic: false, subfaction: "Orco", summary: "Sangre fría, Golpe Maestro." },
            "Rokaz Verdez": { points: 30, faction: "oyg", relic: false, subfaction: "Orco", summary: "Impactos por carga enemigos se resuelven contra la unidad que los causa." },
            "Botaz Pateakulog Biggez": { points: 20, faction: "oyg", relic: false, subfaction: "Orco", summary: "+1 Ataque." },
            "Aro Pegapiñoz de Nibla": { points: 20, faction: "oyg", relic: false, subfaction: "Orco", summary: "Portahechizos(3). Contiene ¡Puñoz de Morko! del Gran Waaagh!" },
            "Talizman Rabiozo": { points: 10, faction: "oyg", relic: false, subfaction: "Orco", summary: "Solo Orcos Salvajes. No pierden Furia Asesina si derrotados en CaC." },
            "Kachivache volador de Fuggitt": { points: 35, faction: "oyg", relic: false, subfaction: "goblin", summary: "Volar. Considerado con dos armas de mano (sin otras armas)." },
            "Korona mágika": { points: 25, faction: "oyg", relic: false, subfaction: "goblin", summary: "Un solo uso. Liderazgo 10 hasta fin de turno." },
            "Pózima de hongoz": { points: 25, faction: "oyg", relic: false, subfaction: "goblin", summary: "Al inicio batalla, tirar 1D6 para efecto permanente en personaje y unidad." },
            "Kachivache Trukulento": { points: 25, faction: "oyg", relic: false, subfaction: "goblin", summary: "Nadie en contacto peana con peana puede hacer TSE (excepto Esquivar)." },
            "Kriztal de vizión": { points: 10, faction: "oyg", relic: false, subfaction: "goblin", summary: "Usar en inicio turno. Superar L: revelar objetos mágicos, hechizos, etc en 24\". Fallar: Estupidez." },
            "Piedro de atraer flechaz": { points: 10, faction: "oyg", relic: false, subfaction: "goblin", summary: "Un solo uso. Unidad enemiga a 12\": repetir tiradas fallidas para impactar contra ella." },
            "Garrapato de atake": { points: 5, faction: "oyg", relic: false, subfaction: "goblin", summary: "Solo goblins nocturnos. +1 Ataque (HA4, F5). 1 al impactar: impacto F5 al portador." }
        
        },
        "Estandarte Mágico": {
            "Estandarte de Guerra de Morko": { points: 50, faction: "oyg", relic: true, subfaction: "Orco", summary: "Resistencia mágica (1), TSE 5+ vs proyectiles." },
            "Estandarte de Guerra de Gorko": { points: 50, faction: "oyg", relic: true, subfaction: "Orco", summary: "+1 Impactar en CaC para la unidad." },
            "Estandarte del Machakador": { points: 40, faction: "oyg", relic: false, subfaction: "Orco", summary: "Poder de penetración, Resistencia mágica (1)." },
            "Estandarte del Mazakrador": { points: 40, faction: "oyg", relic: false, subfaction: "Orco", summary: "Miedo, Golpe Maestro (6's niegan salvación)." },
            "Eztandarte Beztia de Nogg": { points: 25, faction: "oyg", relic: false, subfaction: "Orco", summary: "Un solo uso. +1 Ataque por miniatura en el turno activado." },
            "Eztandarte de Zombraz": { points: 25, faction: "oyg", relic: false, subfaction: "Orco", summary: "Disparos contra la unidad tienen -1 para impactar." },
            "Trapo de Goff": { points: 25, faction: "oyg", relic: false, subfaction: "Orco", summary: "Solo Guerreros Orcos y Orcos Zalvajes (no grandotes). +1 HA." },
            "El Trapo Chorreante de Borko": { points: 15, faction: "oyg", relic: false, subfaction: "Orco", summary: "Fallos de Animosidad siempre son ¡¡A por elloz!!." },
            "Trapo Brillante": { points: 10, faction: "oyg", relic: false, subfaction: "Orco", summary: "Ataques mágicos." },
            "Eztandarte de guerra de Skarsnik": { points: 50, faction: "oyg", relic: true, subfaction: "goblin", summary: "Goblins a 12\": Immune a psicologia, Odio (enanos y skaven)." },
            "Eztandarte de la Luna Malvada": { points: 50, faction: "oyg", relic: false, subfaction: "goblin", summary: "Solo goblins nocturnos. Tozudez, -1 impactar contra unidad, cargadores I mitad." },
            "Eztandarte aráknido": { points: 25, faction: "oyg", relic: false, subfaction: "goblin", summary: "Solo goblins silvanos. Ataques envenenados (o 5+ si ya los tenían)." },
            "Eztandarte del Niii!": { points: 25, faction: "oyg", relic: false, subfaction: "goblin", summary: "Un solo uso. +1 Ataque por miniatura en el turno activado." },
            "Banderola del azalto": { points: 20, faction: "oyg", relic: false, subfaction: "goblin", summary: "+1 Impactar en CaC en turnos que carguen exitosamente." },
            "Eztandarte burlón": { points: 20, faction: "oyg", relic: false, subfaction: "goblin", summary: "Unidades enemigas que puedan cargar deben hacerlo o superar L (no inmunes a psicología)." },
            "Eztandarte de piel de garrapato": { points: 15, faction: "oyg", relic: false, subfaction: "goblin", summary: "+1D3\" a la carga." },
            "Eztandarte de Borko": { points: 10, faction: "oyg", relic: false, subfaction: "goblin", summary: "Activar para superar automáticamente chequeo de Animosidad." },
            "Trapo Brillante": { points: 10, faction: "oyg", relic: false, subfaction: "goblin", summary: "Ataques mágicos." }
       
        },
 
    
};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Orcos y Goblins",
    FACTION_ID: "oyg",
    FOC_CONFIG: { 
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_oyg,
    mountsDB: mountsDB_oyg,
    magicItemsDB: magicItemsDB_oyg,
    specialProfilesDB: specialProfilesDB_oyg,
    armySkillsDB: {},
};
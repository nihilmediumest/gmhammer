// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: GOBLINS ---
// ===================================================================================
// Last Updated: 2025-10-03 - v4.1 (Cleaned vestigial code)
import { commonMagicItemsDB } from '../comun.js';
// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_goblins = {
    // === CORE UNITS ===
    "Goblins": {
        faction: "gobs",
        foc: "Core",
        points: 2.5,
        min: 20,
        max: 50,
        equipo: "Arma de mano y armadura ligera.",
        reglasEspeciales: "Animosidad, Miedo a loz orejotaz, Horda.",
        perfiles: [
            { nombre: "Goblin", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Jefe Goblin", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 6 } }
        ],
        options: [ { n: "Arco corto", p: 0.5 }, { n: "Lanza", p: 0.5 }, { n: "Escudos", p: 0.5 } ],
        command: { c: { n: "Jefe", p: 4 }, s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } },
        specialAddons: [ { name: "Merodeador odiozo", points: 15, max: 2, profileKey: "Merodeador odiozo" } ],
        magicBanner: 25
    },
    "Chikoz duroz Goblins": {
        faction: "gobs",
        warning: "Sólo puedes incluir una unidad de Chikoz, Duroz, Goblins por cada unidad de Goblins de tu ejército.",
        foc: "Core",
        points: 4,
        min: 10,
        max: 40,
        equipo: "Arma de mano y armadura pesada.",
        reglasEspeciales: "Animosidad, Miedo a loz orejotaz.",
        perfiles: [
            { nombre: "Chiko Duro Goblin", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 7 } },
            { nombre: "Jefe Chiko Duro", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 2, L: 7 } }
        ],
        options: [ { n: "Arma a dos manos", p: 1 }, { n: "Lanza", p: 1 }, { n: "Escudos", p: 1 } ],
        command: { c: { n: "Jefe", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        specialAddons: [ { name: "Merodeador odiozo", points: 15, max: 2, profileKey: "Merodeador odiozo" } ],
        magicBanner: 50,
        champItems: 15
    },
    "Goblins Nocturnos": {
        faction: "gobs",
        foc: "Core",
        points: 3,
        min: 20,
        max: 50,
        equipo: "Arma de mano y armadura ligera.",
        reglasEspeciales: "Animosidad, Miedo a loz orejotaz, Odio (enanos), Horda.",
        perfiles: [
            { nombre: "Goblin nocturno", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 6 } },
            { nombre: "Jefe Goblin", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 2, L: 6 } },
        ],
        options: [ { n: "Arco corto", p: 0.5 }, { n: "Lanza", p: 0.5 }, { n: "Escudos", p: 0.5 } ],
        command: { c: { n: "Jefe", p: 4 }, s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } },
        specialAddons: [ { name: "Fanático", points: 15, max: 3, profileKey: "Fanático" } ],
        magicBanner: 25
    },
    "Chikoz duroz Goblins Nocturnos": {
        faction: "gobs",
        warning: "Sólo puedes incluir una unidad de Chikoz Duroz Goblins Nocturnos por cada unidad de Goblins Nocturnos de tu ejército.",
        foc: "Core",
        points: 5,
        min: 10,
        max: 40,
        equipo: "Arma de mano, Redes y armadura ligera y escudo.",
        reglasEspeciales: "Animosidad, Miedo a loz orejotaz, Odio (enanos).",
        perfiles: [
            { nombre: "Chiko Duro goblin nocturno", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 5, A: 1, L: 7 } },
            { nombre: "Jefe Goblin nocturno", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 5, A: 2, L: 7 } }
        ],
        options: [ { n: "Garrotes", p: 1 }, { n: "Lanzas", p: 1 } ],
        command: { c: { n: "Jefe", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        specialAddons: [ { name: "Fanático", points: 15, max: 3, profileKey: "Fanático" } ],
        magicBanner: 50,
        champItems: 15
    },
    "Kazadorez de Garrapatoz Goblins Nocturnos": {
        faction: "gobs",
        warning: "Solo puedes incluir una unidad de Kazadores de Garrapatos por cada unidad de Goblins nocturnos de tu ejército.",
        foc: "Core",
        points: 4,
        min: 20,
        max: 50,
        equipo: "Garrotes, Redes y armadura ligera.",
        reglasEspeciales: "Animosidad, Miedo a loz orejotaz, Odio (enanos), Horda.",
        perfiles: [
            { nombre: "Kazador goblin nocturno", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 6 } },
            { nombre: "Jefe Goblin nocturno", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 2, L: 6 } }
        ],
        command: { c: { n: "Jefe", p: 4 }, s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } },
        specialAddons: [ { name: "Fanático", points: 15, max: 3, profileKey: "Fanático" } ],
        magicBanner: 25
    },
    "Goblins Silvanos": {
        faction: "gobs",
        foc: "Core",
        points: 2.5,
        min: 20,
        max: 50,
        equipo: "Arma de mano.",
        reglasEspeciales: "Animosidad, Miedo a loz orejotaz, Cruzar bosques.",
        perfiles: [
            { nombre: "Batidor goblin silvano", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 6 } },
            { nombre: "Jefe Goblin silvano", stats: { M: 4, HA: 2, HP: 4, F: 3, R: 3, H: 1, I: 4, A: 1, L: 6 } }
        ],
        options: [ { n: "Armas de mano adicionales", p: 0.5 }, { n: "Escudos", p: 0.5 }, { n: "Arco corto", p: 0.5 }, { n: "Lanza", p: 0.5 }, { n: "Ataques envenenados", p: 2 }, { n: "Hostigadores (min 5, max 20)", p: 1 } ],
        command: { c: { n: "Jefe", p: 4 }, s: { n: "Portaestandarte (no si son Hostigadores)", p: 4 }, m: { n: "Músico", p: 4 } }
    },
    "Snotlings": {
        faction: "gobs",
        warning: "Unidad secundaria (No más U. Secund que U. Básicas).",
        foc: "Core",
        points: 10,
        min: 1,
        max: 6,
        equipo: "Armas de mano.",
        reglasEspeciales: "Impacible, Unidad secundaria.",
        perfiles: [ { nombre: "Snotlings", stats: { M: 4, HA: 2, HP: 2, F: 2, R: 2, H: 3, I: 3, A: 3, L: 10 } } ],
        options: [ { n: "Ezporaz arrojadizaz", p: 1 } ]
    },
    "Jinetez de Lobo": {
        faction: "gobs",
        foc: "Core",
        points: 10,
        min: 5,
        max: 20,
        equipo: "Arma de mano y armadura ligera.",
        reglasEspeciales: "Animosidad, Miedo a loz orejotaz, Caballería rápida.",
        perfiles: [
            { nombre: "Goblin", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Jefe Goblin", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 6 } },
            { nombre: "Lobo", stats: { M: 9, HA: 4, HP: 0, F: 4, R: 3, H: 1, I: 4, A: 1, L: 6 } }
        ],
        options: [ { n: "Lanza", p: 1 }, { n: "Escudos", p: 1 }, { n: "Arcos cortos", p: 1 } ],
        command: { c: { n: "Jefe", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        magicBanner: 25
    },
    "Jinetez de Araña Goblin Silvanos": {
        faction: "gobs",
        foc: "Core",
        points: 10,
        min: 5,
        max: 20,
        equipo: "Arma de mano y Arcos cortos.",
        reglasEspeciales: "Animosidad, Miedo a loz orejotaz, Caballería rápida, Ataques envenenados (sólo las arañas), Poder de penetración (sólo las arañas), Cruzar (bosques), Cruzar (obstáculos), Miedo, Telarañas (Redes), Trepamuros, Caparazón (+2 TSA en lugar de +1).",
        perfiles: [
            { nombre: "Goblin silvano", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Jefe Goblin silvano", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 6 } },
            { nombre: "Araña gigante", stats: { M: 7, HA: 3, HP: 0, F: 3, R: 3, H: 1, I: 4, A: 1, L: 2 } }
        ],
        options: [ { n: "Lanza", p: 1 }, { n: "Escudos", p: 1 }, { n: "Ataques envenenados (jinete)", p: 2 } ],
        command: { c: { n: "Jefe", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        magicBanner: 25
    },
    // === SPECIAL UNITS ===
    "0-1 Chikoz duroz jinetez de lobo": {
        faction: "gobs",
        foc: "Special",
        points: 14,
        min: 3,
        max: 8,
        equipo: "Arma de mano, lanza, armadura pesada y escudo.",
        reglasEspeciales: "Vanguardia, Animosidad, Miedo a loz orejotaz.",
        perfiles: [
            { nombre: "Chiko Duro Goblin", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 7 } },
            { nombre: "Jefe Chiko Duro", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 2, L: 7 } },
            { nombre: "Lobo", stats: { M: 9, HA: 4, HP: 0, F: 4, R: 3, H: 1, I: 4, A: 1, L: 6 } }
        ],
        options: [ { n: "Arcos cortos", p: 1 } ],
        command: { c: { n: "Jefe", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        magicBanner: 50,
        champItems: 15
    },
    "Chikoz duroz Goblins Silvanos": {
        faction: "gobs",
        foc: "Special",
        points: 14,
        min: 5,
        max: 15,
        equipo: "Arma de mano, lanza, arco corto y escudo.",
        reglasEspeciales: "Animosidad, Miedo a loz orejotaz, Caballería rápida, Ataques envenenados (todos), Poder de penetración (sólo las arañas), Cruzar (bosques), Cruzar (obstáculos), Miedo, Telarañas (Redes), Trepamuros, Caparazón (+2 TSA en lugar de +1).",
        perfiles: [
            { nombre: "Chiko Duro Goblin Silvano", stats: { M: 4, HA: 3, HP: 4, F: 3, R: 3, H: 1, I: 4, A: 1, L: 7 } },
            { nombre: "Jefe Chiko Duro Silvano", stats: { M: 4, HA: 3, HP: 4, F: 3, R: 3, H: 1, I: 4, A: 2, L: 7 } },
            { nombre: "Araña Gigante", stats: { M: 7, HA: 3, HP: 0, F: 3, R: 3, H: 1, I: 4, A: 1, L: 2 } }
        ],
        command: { c: { n: "Jefe", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        magicBanner: 50,
        champItems: 15
    },
     "Jinetez de Garrapato Zaltarín": {
        faction: "gobs",
        foc: "Special",
        points: 13,
        min: 5,
        max: 15,
        equipo: "Arma de mano y armadura ligera.",
        reglasEspeciales: "Odio (enanos), Inmunes a psicología, Movimiento aleatorio (3D6), Hostigadores, Detestables, Ataque rápido (sólo garrapatos), ¡Boiiing! (Impactos por carga(1) con dobles o triples en movimiento).",
        perfiles: [
            { nombre: "Jinete goblin nocturno", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 5, A: 1, L: 6 } },
            { nombre: "Jefe jinete de garrapato", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 5, A: 2, L: 6 } },
            { nombre: "Garrapato saltarin", stats: { M: "3D6", HA: 4, HP: 0, F: 5, R: 3, H: 1, I: 3, A: 2, L: 2 } }
        ],
        options: [ { n: "Garrotes", p: 2 }, { n: "Lanzas de caballería", p: 2 }, { n: "Escudos", p: 1 }, { n: "Armaduras pesadas (una unidad)", p: 1 } ],
        command: { c: { n: "Jefe", p: 5 } }
    },
    "Paztorez de garrapatoz": {
        faction: "gobs",
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
        equipo: "Paztorez: Arma de mano, Pinchagarrapatoz, armadura ligera. Garrapatos: Afilados dientes.",
        reglasEspeciales: "Animosidad, Odio (enanos), Inmunes a psicología, Detestables, Ataque rápido (sólo garrapatos), Rebaños de garrapatos, Garrapatos descontrolados.",
        perfiles: [
            { nombre: "Paztor Goblin nocturno", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 6 } },
            { nombre: "Garrapato cavernícola", stats: { M: 4, HA: 4, HP: 0, F: 5, R: 3, H: 1, I: 3, A: 2, L: 2 } },
            { nombre: "Garrapato de crianza", stats: { M: 4, HA: 4, HP: 0, F: 5, R: 3, H: 1, I: 3, A: 3, L: 2 } }
        ],
        command: { c: { n: "Garrapato de crianza", p: 5 } }
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
    "0-1 Goblinz Explozivoz": {
        faction: "gobs",
        foc: "Special",
        points: 7,
        min: 5,
        max: 10,
        equipo: "Bombas de relojeria Goblins.",
        reglasEspeciales: "Hostigadores, Vanguardia, Animosidad explosiva, Final Glorioso, Aktivad laz bombaz.",
        perfiles: [ { nombre: "Goblin Explosivo", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 6 } } ]
    },
    "Vagoneta de Ataque Snotling": {
        faction: "gobs",
        foc: "Special",
        points: 40,
        min: 1,
        max: 1,
        equipo: "Armas de mano.",
        reglasEspeciales: "Impasible, Inmunes a psicología, Movimiento aleatorio, Tirada de salvación 5+.",
        perfiles: [
            { nombre: "Vagoneta", stats: { M: "2D6", HA: 0, HP: 0, F: 5, R: 4, H: 3, I: 0, A: 0, L: 0 } },
            { nombre: "Dotación snotling", stats: { M: 0, HA: 2, HP: 2, F: 2, R: 0, H: 0, I: 3, A: 3, L: 10 } }
        ],
        options: [ { n: "Rodillo con pinchos (+2D6 elige mayor para impactos por carga)", p: 10 }, { n: "Velas (+Movimiento aleatorio a 3D6)", p: 5 } ]
    },
    "Carro de Lobos": {
        faction: "gobs",
        foc: "Special",
        points: 55,
        min: 1,
        max: 2,
        equipo: "Armas de mano, lanzas y arcos cortos. Cuchillas en las ruedas.",
        reglasEspeciales: "Tirada de salvación por armadura 5+, Miedo a loz orejotaz.",
        perfiles: [
            { nombre: "Karro de lobos", stats: { M: 0, HA: 0, HP: 0, F: 5, R: 4, H: 3, I: 0, A: 0, L: 0 } },
            { nombre: "Dotación goblin (2)", stats: { M: 0, HA: 2, HP: 3, F: 3, R: 0, H: 0, I: 3, A: 1, L: 6 } },
            { nombre: "Lobo (2)", stats: { M: 9, HA: 4, HP: 0, F: 4, R: 0, H: 0, I: 4, A: 1, L: 6 } }
        ],
        options: [ { n: "Añadir un goblin adicional", p: 3 }, { n: "Añadir un lobo adicional", p: 3 } ]
    },
    "Lanzapinchoz": {
        faction: "gobs",
        foc: "Special",
        points: 35,
        min: 1,
        max: 2,
        equipo: "Arma de mano y armadura ligera (dotación).",
        reglasEspeciales: "Dispara como un lanzavirotes, Miedo a loz orejotaz.",
        perfiles: [
            { nombre: "Lanzapinchoz", stats: { M: 0, HA: 0, HP: 0, F: 0, R: 7, H: 2, I: 0, A: 0, L: 0 } },
            { nombre: "Dotación (2)", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } }
        ]
    },
    "Lanzapiedroz": {
        faction: "gobs",
        foc: "Special",
        points: 70,
        min: 1,
        max: 1,
        equipo: "Rebanadora y Armadura ligera (dotación).",
        reglasEspeciales: "Dispara como una catapulta.",
        perfiles: [
            { nombre: "Lanzapiedroz", stats: { M: 0, HA: 0, HP: 0, F: 0, R: 7, H: 2, I: 0, A: 0, L: 0 } },
            { nombre: "Dotación (3)", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } }
        ],
        options: [ { n: "Añadir un goblin adicional a la dotación", p: 5 } ]
    },
    "Katapulta Lanzarredez": {
        faction: "gobs",
        foc: "Special",
        points: 60,
        min: 1,
        max: 1,
        equipo: "Arma de mano (dotación).",
        reglasEspeciales: "Dispara como catapulta (plantilla grande, F1/F3), unidad impactada tiene M e I a la mitad.",
        perfiles: [
            { nombre: "Katapulta", stats: { M: 0, HA: 0, HP: 0, F: 0, R: 7, H: 2, I: 0, A: 0, L: 0 } },
            { nombre: "Dotación (3)", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } }
        ],
        options: [ { n: "Jarras de garrapatos zumbones (plantilla grande F1 sin TSA)", p: 10 } ]
    },
    "Katapulta de Goblinz Voladorez": {
        faction: "gobs",
        foc: "Special",
        points: 80,
        min: 1,
        max: 1,
        equipo: "Arma de mano y armadura ligera (dotación).",
        reglasEspeciales: "Reglas especiales de disparo, Goblin trazador, Miedo a loz orejotaz.",
        perfiles: [
            { nombre: "Katapulta", stats: { M: 0, HA: 0, HP: 0, F: 0, R: 7, H: 2, I: 0, A: 0, L: 0 } },
            { nombre: "Dotación (3)", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } }
        ]
    },
    // === RARE UNITS ===
    "Garrapato Gargantúa": {
        faction: "gobs",
        foc: "Rare",
        points: 200,
        min: 1,
        max: 1,
        equipo: "Lanzas y arcos cortos (dotación), dientes inmensos (garrapato).",
        reglasEspeciales: "Movimiento aleatorio (3D6), Indesmoralizable, Impactos por carga (1D3), Odio (enanos), Piel escamosa (5+), Ataque veloz (sólo garrapato), Dotación del castillo, Ataques cuerpo a cuerpo aleatorios.",
        perfiles: [
            { nombre: "Garrapato gargantúa", stats: { M: "3D6", HA: 4, HP: 0, F: 7, R: 6, H: 6, I: 3, A: "*", L: 5 } },
            { nombre: "Dotación goblins (6)", stats: { M: 0, HA: 2, HP: 3, F: 3, R: 0, H: 0, I: 4, A: 6, L: 6 } }
        ]
    },
    "Aracnarock": {
        faction: "gobs",
        foc: "Rare",
        points: 250,
        min: 1,
        max: 1,
        equipo: "Garras (araña), lanzas y arcos cortos (dotación).",
        reglasEspeciales: "Cruzar bosques, Inmune a psicología, Cruzar obstáculos, Ataques envenenados (sólo Aracnarock), Tozudez, Veloz, Trepamuros, Poder de penetración (sólo Aracnarock), Piel escamosa 3+, Telarañas (catapulta), Dotación de la Howda, Mordisco venenoso.",
        perfiles: [
            { nombre: "Araña Aracnarock", stats: { M: 7, HA: 4, HP: 3, F: 6, R: 6, H: 8, I: 3, A: "7+1", L: 0 } },
            { nombre: "Dotación goblins (8)", stats: { M: 0, HA: 2, HP: 3, F: 3, R: 0, H: 0, I: 3, A: 8, L: 6 } }
        ]
    },
    "Altar del Waaagh Goblin": {
        faction: "gobs",
        foc: "Rare",
        points: 150,
        min: 1,
        max: 1,
        equipo: "Redes y armadura ligera (goblins).",
        reglasEspeciales: "Tirada de salvación por armadura 4+, Miedo a loz orejotaz, Estupidez, Super-vómito de troll, Regeneración 4+, Tambor del Waaagh.",
        perfiles: [
            { nombre: "Altar", stats: { M: 0, HA: 0, HP: 0, F: 5, R: 6, H: 4, I: 0, A: 0, L: 0 } },
            { nombre: "Dotación (3)", stats: { M: 0, HA: 2, HP: 3, F: 3, R: 0, H: 0, I: 3, A: 1, L: 6 } },
            { nombre: "Troll Esclavo", stats: { M: 6, HA: 3, HP: 1, F: 5, R: 0, H: 0, I: 1, A: 4, L: 5 } }
        ],
        options: [ { n: "Sustituir redes por Atrapahombres (A2M, Golpe letal)", p: 5 } ]
    },
    "Garrapato Despachurrador": {
        faction: "gobs",
        foc: "Rare",
        points: 80,
        min: 1,
        max: 1,
        equipo: "Dientes y cadenas (arma de mano).",
        reglasEspeciales: "Movimiento aleatorio, Pa-chof!, Potencial de destrucción masiva, Totalmente fuera de control.",
        perfiles: [ { nombre: "Garrapato despachurrador", stats: { M: "3D6", HA: 0, HP: 0, F: 6, R: 4, H: 3, I: 3, A: "*", L: 3 } } ]
    },
    "Gigante": {
        faction: "gobs",
        foc: "Rare",
        points: 160,
        min: 1,
        max: 1,
        equipo: "Garrote (arma de mano).",
        reglasEspeciales: "Cruzar (obstáculos), Caídas, Ataques especiales.",
        perfiles: [ { nombre: "Gigante", stats: { M: 6, HA: 3, HP: 2, F: 6, R: 6, H: 6, I: 2, A: "*", L: 10 } } ]
    },
    // === LORDS ===
    "Kaudillo Goblin": {
        faction: "gobs",
        foc: "Lord",
        points: 60,
        min: 1, max: 1,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Miedo a loz orejotaz.",
        perfiles: [ { nombre: "Kaudillo Goblin", stats: { M: 4, HA: 5, HP: 4, F: 4, R: 4, H: 3, I: 6, A: 4, L: 8 } } ],
        options: [ { n: "Arma a dos manos", p: 4 }, { n: "Arma de mano adicional", p: 3 }, { n: "Lanza", p: 3 }, { n: "Arco corto", p: 5 }, { n: "Armadura pesada", p: 4 }, { n: "Escudo", p: 3 } ],
        mounts: ["Lobo Gigante", "Karro de lobos", "Serpiente Alada", "Troll Amaeztrado"],
        maxMagicItems: 3,
        maxRelics: 1
    },
    "Kaudillo Goblin Silvano": {
        faction: "gobs",
        foc: "Lord",
        points: 65,
        min: 1, max: 1,
        equipo: "Arma de mano y Arco corto.",
        reglasEspeciales: "Miedo a loz orejotaz, Ataques envenenados, Cruzar bosques.",
        perfiles: [ { nombre: "Kaudillo Goblin silvano", stats: { M: 4, HA: 5, HP: 5, F: 4, R: 4, H: 3, I: 6, A: 4, L: 8 } } ],
        options: [ { n: "Arma a dos manos", p: 4 }, { n: "Arma de mano adicional", p: 3 }, { n: "Lanza", p: 3 }, { n: "Escudo", p: 3 } ],
        mounts: ["Araña Gigante", "Araña Gigantesca", "Serpiente Alada", "Troll amaeztrado de río"],
        maxMagicItems: 3,
        maxRelics: 1
    },
    "Kaudillo Goblin Nocturno": {
        faction: "gobs",
        foc: "Lord",
        points: 65,
        min: 1, max: 1,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Miedo a loz orejotaz, Odio (enanos).",
        perfiles: [ { nombre: "Kaudillo Goblin nocturno", stats: { M: 4, HA: 5, HP: 4, F: 4, R: 4, H: 3, I: 7, A: 4, L: 8 } } ],
        options: [ { n: "Arma a dos manos", p: 4 }, { n: "Arma de mano adicional", p: 3 }, { n: "Garrote", p: 4 }, { n: "Pinchagarrapatos", p: 4 }, { n: "Lanza", p: 3 }, { n: "Arco corto", p: 5 }, { n: "Armadura pesada", p: 4 }, { n: "Escudo", p: 3 } ],
        mounts: ["Garrapato cavernícola gigante", "Serpiente Alada", "Troll amaeztrado de piedra", "Palankín de guerra"],
        maxMagicItems: 3,
        maxRelics: 1
    },
    "Gran Chamán Goblin": {
        faction: "gobs",
        foc: "Lord",
        points: 140,
        min: 1, max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Kanalización verde, Miedo a loz orejotaz. Hechicero de Nivel 3.",
        perfiles: [ { nombre: "Gran Chamán Goblin", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 4, H: 3, I: 4, A: 1, L: 7 } } ],
        options: [ { n: "Arma a dos manos", p: 4 }, { n: "Arma de mano adicional", p: 3 }, { n: "Nivel de Magia 4", p: 35 } ],
        mounts: ["Lobo Gigante", "Karro de lobos"],
        maxMagicItems: 3,
        maxRelics: 1
    },
    "Gran Chamán Goblin Silvano": {
        faction: "gobs",
        foc: "Lord",
        points: 145,
        min: 1, max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Kanalización verde, Miedo a loz orejotaz, Ataques envenenados, Cruzar bosques. Hechicero de Nivel 3.",
        perfiles: [ { nombre: "Gran Chamán Goblin silvano", stats: { M: 4, HA: 2, HP: 4, F: 3, R: 4, H: 3, I: 4, A: 1, L: 7 } } ],
        options: [ { n: "Arma a dos manos", p: 4 }, { n: "Arma de mano adicional", p: 3 }, { n: "Arco corto", p: 3 }, { n: "Nivel de Magia 4", p: 35 } ],
        mounts: ["Araña Gigante", "Araña Gigantesca", "Araña Aracnarock con Templo"],
        maxMagicItems: 3,
        maxRelics: 1
    },
    "Gran Chamán Goblin Nocturno": {
        faction: "gobs",
        foc: "Lord",
        points: 150,
        min: 1, max: 1,
        equipo: "Arma de mano y 1D3 Zetaz Mágikaz.",
        reglasEspeciales: "Kanalización verde, Miedo a loz orejotaz, Odio (enanos). Hechicero de Nivel 3.",
        perfiles: [ { nombre: "Gran Chamán Goblin nocturno", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 4, H: 3, I: 5, A: 1, L: 7 } } ],
        options: [ { n: "Arma a dos manos", p: 4 }, { n: "Arma de mano adicional", p: 3 }, { n: "Nivel de Magia 4", p: 35 }, { n: "1 Zeta Mágika adicional", p: 10 }, { n: "2 Zetaz Mágikaz adicionales", p: 20 }, { n: "3 Zetaz Mágikaz adicionales", p: 30 } ],
        mounts: ["Garrapato cavernícola gigante"],
        maxMagicItems: 3,
        maxRelics: 1
    },
    // === HEROES ===
    "Gran Jefe Goblin": {
        faction: "gobs",
        foc: "Hero",
        points: 30,
        min: 1, max: 1,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Miedo a loz orejotaz.",
        perfiles: [ { nombre: "Gran jefe Goblin", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 2, I: 5, A: 3, L: 7 } } ],
        options: [ { n: "Arma a dos manos", p: 3 }, { n: "Arma de mano adicional", p: 2 }, { n: "Lanza", p: 1 }, { n: "Arco corto", p: 3 }, { n: "Armadura pesada", p: 3 }, { n: "Escudo", p: 2 } ],
        mounts: ["Lobo Gigante", "Karro de lobos", "Troll Amaeztrado"],
        maxMagicItems: 3,
        maxRelics: 0,
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 }
    },
    "Gran Jefe Goblin Silvano": {
        faction: "gobs",
        foc: "Hero",
        points: 35,
        min: 1, max: 1,
        equipo: "Arma de mano y Arco corto.",
        reglasEspeciales: "Miedo a loz orejotaz, Ataques envenenados, Cruzar bosques.",
        perfiles: [ { nombre: "Gran jefe Goblin silvano", stats: { M: 4, HA: 4, HP: 4, F: 4, R: 4, H: 2, I: 5, A: 3, L: 7 } } ],
        options: [ { n: "Arma a dos manos", p: 3 }, { n: "Arma de mano adicional", p: 2 }, { n: "Lanza", p: 2 }, { n: "Escudo", p: 2 } ],
        mounts: ["Araña Gigante", "Araña Gigantesca", "Troll amaeztrado de río"],
        maxMagicItems: 2,
        maxRelics: 0,
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 }
    },
    "Gran Jefe Goblin Nocturno": {
        faction: "gobs",
        foc: "Hero",
        points: 35,
        min: 1, max: 1,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Miedo a loz orejotaz, Odio (enanos).",
        perfiles: [ { nombre: "Gran jefe Goblin nocturno", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 2, I: 6, A: 3, L: 7 } } ],
        options: [ { n: "Arma a dos manos", p: 3 }, { n: "Arma de mano adicional", p: 2 }, { n: "Garrote", p: 3 }, { n: "Pinchagarrapatos", p: 3 }, { n: "Lanza", p: 2 }, { n: "Arco corto", p: 3 }, { n: "Armadura pesada", p: 3 }, { n: "Escudo", p: 2 } ],
        mounts: ["Garrapato cavernícola gigante", "Troll amaeztrado de piedra"],
        maxMagicItems: 2,
        maxRelics: 0,
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 }
    },
    "Chamán Goblin": {
        faction: "gobs",
        foc: "Hero",
        points: 50,
        min: 1, max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Kanalización verde, Miedo a loz orejotaz. Hechicero de Nivel 1.",
        perfiles: [ { nombre: "Chamán Goblin", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 1, L: 6 } } ],
        options: [ { n: "Arma a dos manos", p: 2 }, { n: "Arma de mano adicional", p: 2 }, { n: "Nivel de Magia 2", p: 35 } ],
        mounts: ["Lobo Gigante", "Karro de lobos"],
        maxMagicItems: 2,
        maxRelics: 0
    },
    "Chamán Goblin Silvano": {
        faction: "gobs",
        foc: "Hero",
        points: 55,
        min: 1, max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Kanalización verde, Miedo a loz orejotaz, Ataques envenenados. Hechicero de Nivel 1.",
        perfiles: [ { nombre: "Chamán Goblin silvano", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 1, L: 6 } } ],
        options: [ { n: "Arma a dos manos", p: 2 }, { n: "Arma de mano adicional", p: 2 }, { n: "Arco corto", p: 2 }, { n: "Nivel de Magia 2", p: 35 } ],
        mounts: ["Araña Gigante", "Araña Gigantesca"],
        maxMagicItems: 2,
        maxRelics: 0
    },
    "Chamán Goblin Nocturno": {
        faction: "gobs",
        foc: "Hero",
        points: 60,
        min: 1, max: 1,
        equipo: "Arma de mano y una Zeta Mágika.",
        reglasEspeciales: "Kanalización verde, Miedo a loz orejotaz, Odio (enanos). Hechicero de Nivel 1.",
        perfiles: [ { nombre: "Chamán Goblin nocturno", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 2, I: 4, A: 1, L: 6 } } ],
        options: [ { n: "Arma a dos manos", p: 2 }, { n: "Arma de mano adicional", p: 2 }, { n: "Nivel de Magia 2", p: 35 }, { n: "1 Zeta Mágika adicional", p: 10 }, { n: "2 Zetaz Mágikaz adicionales", p: 20 }, { n: "3 Zetaz Mágikaz adicionales", p: 30 } ],
        mounts: ["Garrapato cavernícola gigante"],
        maxMagicItems: 2,
        maxRelics: 0
    }
};

const mountsDB_goblins = {
    "Lobo Gigante": { faction: "gobs", points: 12, perfiles: [ { nombre: "Lobo", stats: { M: 9, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 4, A: 1, L: 6 } } ], reglasEspeciales: "Bestia. Cambia el tipo del jinete a Caballería. Caballería rápida." },
    "Araña Gigante": { faction: "gobs", points: 12, perfiles: [ { nombre: "Araña gigante", stats: { M: 7, HA: 3, HP: 0, F: 3, R: 3, H: 1, I: 4, A: 1, L: 2 } } ], reglasEspeciales: "Bestia. Cambia a Caballería. Caballería rápida, Trepamuros, Cruzar bosques, At. envenenados, Poder de penetración, Cruzar obstáculos, Telarañas (Redes), Piel quitinosa (+2 a TSA del jinete)." },
    "Araña Gigantesca": { faction: "gobs", points: 75, perfiles: [ { nombre: "Araña gigantesca", stats: { M: 7, HA: 4, HP: 0, F: 5, R: 5, H: 4, I: 4, A: "4+1", L: 4 } } ], reglasEspeciales: "Bestia Monstruosa. Cambia a Caballería monstruosa. Cab. rápida, Trepamuros, Cruzar bosques, At. envenenados, Poder penetración, Cruzar obstáculos, Miedo, Telarañas (Redes), Piel quitinosa (+2 a TSA), Mordisco venenoso (Heridas múltiples 1D3)." },
    "Garrapato cavernícola gigante": { faction: "gobs", points: 40, perfiles: [ { nombre: "Garrapato cavernícola gigante", stats: { M: "3D6", HA: 4, HP: 0, F: 5, R: 4, H: 3, I: 3, A: 3, L: 3 } } ], reglasEspeciales: "Bestia Monstruosa. Cambia a Caballería monstruosa. Odio (enanos), Miedo, Impactos por carga(1), Inmune a psicología (también jinete), Movimiento aleatorio (3D6), Hostigador, Detestables, Ataque rápido, Vínkulo de manada." },
    "Palankín de guerra": { faction: "gobs", points: 40, perfiles: [ { nombre: "Palankín de guerra", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 0, H: 0, I: 5, A: 4, L: 7 } } ], reglasEspeciales: "Infantería. No cambia tipo de tropa. Portado por 4 chikoz duroz. +2 a TSA y +1 Herida al jinete." },
    "Troll Amaeztrado": { faction: "gobs", points: 50, perfiles: [ { nombre: "Troll Amaeztrado", stats: { M: 6, HA: 3, HP: 1, F: 5, R: 5, H: 4, I: 1, A: 3, L: 4 } } ], reglasEspeciales: "Bestia Monstruosa. Cambia a Infantería monstruosa. Miedo, Estupidez, Regeneración (5+), Vómito de troll." },
    "Troll amaeztrado de río": { faction: "gobs", points: 60, perfiles: [ { nombre: "Troll Amaeztrado de Río", stats: { M: 6, HA: 3, HP: 1, F: 5, R: 5, H: 4, I: 1, A: 3, L: 4 } } ], reglasEspeciales: "Bestia Monstruosa. Cambia a Infantería monstruosa. Miedo, Estupidez, Regeneración (5+), Vómito de troll, -1 para impactarle en CaC, cruzar ríos y pantanos." },
    "Troll amaeztrado de piedra": { faction: "gobs", points: 60, perfiles: [ { nombre: "Troll Amaeztrado de Piedra", stats: { M: 6, HA: 3, HP: 1, F: 5, R: 5, H: 4, I: 1, A: 3, L: 4 } } ], reglasEspeciales: "Bestia Monstruosa. Cambia a Infantería monstruosa. Miedo, Estupidez, Regeneración (5+), Vómito de troll, +1 adicional a TSA del jinete, Resistencia mágica (2)." },
    "Serpiente Alada": { faction: "gobs", points: 155, perfiles: [ { nombre: "Serpiente Alada", stats: { M: 8, HA: 5, HP: 0, F: 6, R: 5, H: 5, I: 4, A: "4+1", L: 6 } } ], reglasEspeciales: "Monstruo. Volar, Ataques envenenados, Aguijón (ataque adicional con Heridas múltiples 1D6), Piel escamosa 4+." },
    "Karro de lobos": { faction: "gobs", points: 30, perfiles: [], reglasEspeciales: "Sustituye a un miembro de la dotación del Carro de Lobos." },
    "Araña Aracnarock con Templo": { faction: "gobs", points: 280, perfiles: [ { nombre: "Araña Aracnarock", stats: { M: 7, HA: 4, HP: 3, F: 5, R: 6, H: 8, I: 3, A: "7+1", L: 0 } }, { nombre: "Dotación goblins (8)", stats: { M: 0, HA: 2, HP: 3, F: 3, R: 0, H: 0, I: 3, A: 8, L: 6 } } ], reglasEspeciales: "Monstruo. Ver unidad. Templo Arácnido (+30 pts): El chamán se convierte en Señor del Conocimiento (Pequeño Waaagh!) y hechiceros amigos a 12\" +1 a canalizar." }
};

const magicItemsDB_goblins = {
    "Arma Mágica": {
        "Hacha de chafar taponez": { points: 30, faction: "gobs", relic: true, summary: "Arma de mano. +1F, +1A, Poder de penetración. +1F y +1A adicional vs Enanos."},
        "Tranka enorme de Gimlug": { points: 35, faction: "gobs", relic: false, summary: "Garrote (+1F, a dos manos). Heridas múltiples (1D3) y Odio." },
        "Hacha zertera de Ulag": { points: 30, faction: "gobs", relic: false, summary: "Arma de mano. +1F, repite para impactar en CaC." },
        "Arko buzkador": { points: 25, faction: "gobs", relic: false, summary: "Arco largo. Francotirador, Ataques envenenados (5+)." },
        "Puñalez malvadoz": { points: 20, faction: "gobs", relic: false, summary: "Armas emparejadas. I10, Odio, Poder de penetración." },
        "Ezpada traizionera": { points: 15, faction: "gobs", relic: false, summary: "Arma de mano. At. envenenados. +1F por flanco, +2F por retaguardia." },
        "Úniko kaztañazo de Wollopa": { points: 15, faction: "gobs", relic: false, summary: "Arma de mano. 1/batalla, F10 por una fase de CaC." },
        "Zuperacha de Martog": { points: 15, faction: "gobs", relic: false, summary: "Arma de mano. +1HA, +1F, +1I." },
        "Zitepincho-temato": { points: 10, faction: "gobs", relic: false, summary: "Lanza. -3 adicional a la TSA." },
        "Zeta Yuyu": { points: 5, faction: "gobs", relic: false, summary: "Arma a 2 manos. Por cada impacto, oponente chequea R o sus HA, F e I bajan a 1." },
        "Akuchillador zuertudo": { points: 5, faction: "gobs", relic: false, summary: "Arma de mano. +1F por cada objeto mágico del personaje enemigo." }
    },
    "Armadura Mágica": {
        "Armadura de loz taponez": { points: 35, faction: "gobs", relic: false, summary: "Armadura de gromril (TSA 4+). Otorga TSE 5+." },
        "Koraza vengativa": { points: 20, faction: "gobs", relic: false, summary: "Armadura pesada. Al salvar una herida en CaC, el atacante sufre un impacto de F4 sin TSA." },
        "Kazko furiozo": { points: 10, faction: "gobs", relic: false, summary: "Yelmo (+1 TSA). Otorga Furia Asesina (no la pierde)." },
        "Pellejoz apeztozoz": { points: 5, faction: "gobs", relic: false, summary: "Armadura ligera. Proporciona TSA 4+ total. No se beneficia de ¡Cuidado, señor!" }
    },
    "Talismán": {
        "Piedro de la zuerte": { points: 35, faction: "gobs", relic: true, summary: "Repite todas sus tiradas para impactar, herir, salvaciones y chequeos de atributo." },
        "Pintura de guerra mágika": { points: 25, faction: "gobs", relic: false, summary: "Sólo Goblins silvanos sin armadura. TSE 5+ y RM(1)." },
        "El mejor Kachivache p'al ke manda": { points: 25, faction: "gobs", relic: false, summary: "TSE 5+." },
        "Talizmán de Morko": { points: 20, faction: "gobs", relic: false, summary: "Ataques CaC contra el portador tienen -1 para impactar." },
        "Kollar Chungo": { points: 20, faction: "gobs", relic: false, summary: "Al morir, plantilla pequeña, miniaturas tocadas sufren impacto F6 con Heridas múltiples(1D3)." },
        "Korona mágika": { points: 10, faction: "gobs", relic: false, summary: "Un solo uso. TSE 4+ hasta el final de la fase." }
    },
    "Artefacto Arcano": {
        "Guanteletez de Gorko y Morko": { points: 35, faction: "gobs", relic: true, summary: "+1R. Puede elegir hechizos del Pequeño y Gran Waagh." },
        "Muñeko diabóliko": { points: 50, faction: "gobs", relic: false, summary: "Elige un hechicero enemigo al inicio de la batalla: -1 a sus tiradas de lanzamiento y dispersión." },
        "Bákulo chorizador": { points: 40, faction: "gobs", relic: false, summary: "Al inicio de la fase de magia enemiga, roba uno de sus dados de energía como dado de dispersión." },
        "Palo de loz diozez": { points: 30, faction: "gobs", relic: false, summary: "Señor del Conocimiento (Pequeño Waagh) y -1 adicional en la tabla de disfunciones." },
        "Veneno de aracnarock": { points: 20, faction: "gobs", relic: false, summary: "Puede repetir el resultado al tirar en la tabla de disfunciones mágicas." },
        "Kaldero de nieblaz": { points: 20, faction: "gobs", relic: false, summary: "Portahechizos (4). Potenciación a 12\".\nUnidad gana Cruzar y -1 a ser impactada." },
        "Corona de Piñoz verdez": { points: 15, faction: "gobs", relic: false, summary: "Permite usar Kanalización verde para dados de dispersión. RM(1)." }
    },
    "Objeto Hechizado": {
        "Chorizador mágiko": { points: 35, faction: "gobs", relic: true, summary: "Un solo uso. En CaC, roba las propiedades de un objeto mágico enemigo." },
        "Kachivache volador de Fuggitt": { points: 35, faction: "gobs", relic: false, summary: "Puede Volar. Se considera equipado con dos armas de mano." },
        "Kachivache Trukulento": { points: 20, faction: "gobs", relic: false, summary: "Nadie en contacto peana con peana puede efectuar TSE (excepto Esquivar)." },
        "Pózima de hongoz": { points: 20, faction: "gobs", relic: false, summary: "Un solo uso al inicio de la batalla. Tira 1D6 en la tabla de Pózima de Hongoz." },
        "Kriztal de vizión": { points: 10, faction: "gobs", relic: false, summary: "Al inicio del turno, supera un chequeo de L para revelar objetos y unidades ocultas a 24\"." },
        "Piedro de atraer flechaz": { points: 10, faction: "gobs", relic: false, summary: "Un solo uso. Arroja a unidad enemiga a 18\".\nEste turno, disparos contra esa unidad repiten para impactar." },
        "Garrapato de atake": { points: 5, faction: "gobs", relic: false, summary: "Sólo goblins nocturnos. +1A con HA4 y F5. Con 1 para impactar, el portador sufre el impacto." }
    },
    "Estandarte Mágico": {
        "Eztandarte de la Luna Malvada": { points: 50, faction: "gobs", relic: true, summary: "Unidad gana Tozudez. -1 a impactar a la unidad con disparos. Unidades que carguen contra ella tienen I a la mitad." },
        "Gran trapo rojo raído de Grott": { points: 45, faction: "gobs", relic: true, summary: "Sólo goblin común. Unidades amigas a 12\" +1L y repiten chequeos de Miedo/Pánico.\n+1 a la resolución del combate." },
        "Eztandarte de guerra de Skarsnik": { points: 40, faction: "gobs", relic: false, summary: "Sólo goblins nocturnos. La unidad gana +2I, Inmune a psicología y Odio." },
        "Eztandarte aráknido": { points: 25, faction: "gobs", relic: false, summary: "Sólo goblins silvanos. La unidad gana At. envenenados (o mejoran a 5+)." },
        "Eztandarte del Niii!": { points: 25, faction: "gobs", relic: false, summary: "Un solo uso. La unidad gana +1A por un turno." },
        "Eztandarte burlón": { points: 20, faction: "gobs", relic: false, summary: "Unidades enemigas deben superar chequeo de L para no cargar contra esta unidad." },
        "Banderola del azalto": { points: 20, faction: "gobs", relic: false, summary: "La unidad gana +1 para impactar en CaC el turno que carga." },
        "Eztandarte de piel de garrapato": { points: 15, faction: "gobs", relic: false, summary: "La unidad suma 1D3\" a sus cargas." },
        "Eztandarte de Borko": { points: 15, faction: "gobs", relic: false, summary: "Si falla animosidad, puede activarse para superarlo automáticamente y ganar Ataques mágicos." }
    }
};

const specialProfilesDB_goblins = {
    "Fanático": {
        perfiles: [{ nombre: "Fanático", stats: { M: "2D6", HA: 0, HP: 0, F: 5, R: 3, H: 1, I: 4, A: 0, L: 6 } }]
    },
    "Merodeador odiozo": {
        perfiles: [{ nombre: "Merodeador odiozo", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 5, A: 2, L: 6 } }]
    }
};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Goblins",
    FACTION_ID: "gobs",
    FOC_CONFIG: { 
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_goblins,
    mountsDB: mountsDB_goblins,
    magicItemsDB: magicItemsDB_goblins,
    specialProfilesDB: specialProfilesDB_goblins,
    armySkillsDB: {}, // Goblins do not have this
};

// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: GREY INFERNAL (STRICTLY CORRECTED) ---
// ===================================================================================
// Last Updated: 2025-10-03 - v4.0 Creation, rebuilt from the correct army book.

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_ginf = {
    // === LORDS ===
    "Ogro Dragón Shaggoth": {
        faction: "ginf",
        foc: "Lord",
        points: 330,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Piel escamosa (4+), Cólera de la tormenta, Inmune a psicología, Cruzar (obstáculos), La vida es sueño, El más anciano.",
        perfiles: [{ nombre: "Shaggoth", stats: { M: 7, HA: 6, HP: 2, F: 7, R: 6, H: 6, I: 2, A: 7, L: 10 } }],
        options: [
            { n: "Arma de mano adicional", p: 6 }, { n: "Arma a dos manos", p: 8 },
            { n: "Armadura pesada", p: 10 }
        ],
        maxMagicItems: 3,
        maxRelics: 1
    },
    "Meargh (Gran Bruja Fimir)": {
        faction: "ginf",
        foc: "Lord",
        warning: "Solo puedes incluir una Meargh por cada unidad de Guerreros Fimir.",
        points: 265,
        equipo: "Arma de mano.",
        reglasEspeciales: "Miedo, Piel escamosa (4+), Sangre fría, Cruzar pantanos, Ataque de cola, Envueltos en niebla. Hechicera de Nivel 3.",
        perfiles: [{ nombre: "Meargh", stats: { M: 6, HA: 4, HP: 2, F: 5, R: 6, H: 5, I: 2, A: "4+1", L: 9 } }],
        options: [
            { n: "Arma de mano adicional", p: 5 }, { n: "Arma a dos manos", p: 8 },
            { n: "Armadura ligera", p: 5 }, { n: "Nivel de Magia 4", p: 35 }
        ],
        maxMagicItems: 3,
        maxRelics: 1
    },
    "Minotauro de la Condenación": {
        faction: "ginf",
        foc: "Lord",
        warning: "Solo puedes incluir un Minotauro de la Condenación por cada unidad de Minotauros.",
        points: 230,
        equipo: "Arma de mano.",
        reglasEspeciales: "Piel Escamosa (6+), Ansia de sangre, Cruzar bosques, Miedo, Impactos por carga (1), Ojo de los Dioses, Canibalismo frenético.",
        perfiles: [{ nombre: "Minotauro de la Condenación", stats: { M: 6, HA: 6, HP: 3, F: 6, R: 5, H: 5, I: 5, A: 6, L: 9 } }],
        options: [
            { n: "Arma a dos manos", p: 8 }, { n: "Arma de mano adicional", p: 5 },
            { n: "Escudo", p: 3 }, { n: "Armadura ligera", p: 5 },
            { n: "Consagración a Khorne", p: 10 }, { n: "Consagración a Nurgle", p: 10 },
            { n: "Consagración al Caos Absoluto", p: 8 }
        ],
        maxMagicItems: 3,
        maxRelics: 1,
        maxSkills: { limit: 3, type: 'count' }
    },

    // === HEROES ===
    "Ogro Dragón Sharunok": {
        faction: "ginf",
        foc: "Hero",
        warning: "Solo puedes incluir un Sharunok por cada unidad de Ogros Dragón.",
        points: 190,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Piel escamosa (4+), Cólera de la tormenta, Miedo, La vida es sueño.",
        perfiles: [{ nombre: "Sharunok", stats: { M: 7, HA: 5, HP: 2, F: 6, R: 5, H: 5, I: 2, A: 6, L: 9 } }],
        options: [
            { n: "Arma de mano adicional", p: 5 }, { n: "Arma a dos manos", p: 8 },
            { n: "Armadura pesada", p: 6 }
        ],
        maxMagicItems: 2,
        maxRelics: 1,
        battleStandard: { name: "Portaestandarte de batalla", cost: 25 }
    },
    "Gran Arpía": {
        faction: "ginf",
        foc: "Hero",
        warning: "Solo puedes incluir una Gran Arpía por cada unidad de Arpías.",
        points: 75,
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "Miedo, Volar.",
        perfiles: [{ nombre: "Gran Arpía", stats: { M: 5, HA: 5, HP: 3, F: 4, R: 3, H: 2, I: 7, A: 4, L: 8 } }],
        options: [{ n: "Garras afiladas (Poder de penetración)", p: 5 }],
        maxMagicItems: 1,
        maxSkills: { limit: 2, type: 'count' }
    },
    "Troll del Caos Anciano": {
        faction: "ginf",
        foc: "Hero",
        warning: "Solo puedes incluir un Troll Anciano por cada unidad de Trolls.",
        points: 100,
        equipo: "Arma de mano.",
        reglasEspeciales: "Miedo, Regeneración mutante, Vómito de Troll (1D3 impactos), Estupidez.",
        perfiles: [
            { nombre: "Troll del Caos Anciano", stats: { M: 6, HA: 4, HP: 2, F: 5, R: 5, H: 4, I: 2, A: 4, L: 7 } },
            { nombre: "Bruja Troll del Caos", stats: { M: 6, HA: 3, HP: 1, F: 5, R: 5, H: 4, I: 1, A: 3, L: 6 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 4 }, { n: "Arma a dos manos", p: 6 },
            { n: "Convertir en Bruja Troll (Hechicero N2)", p: 50 }, { n: "Aumentar a Nivel 3 (solo Bruja)", p: 35 }
        ],
        maxMagicItems: 1,
        maxSkills: { limit: 3, type: 'count' },
        battleStandard: { name: "Portaestandarte de batalla", cost: 25 }
    },
    "Dirach (Hechicero Fimir)": {
        faction: "ginf",
        foc: "Hero",
        warning: "Solo puedes incluir un Dirach por cada unidad de Guerreros Fimir.",
        points: 175,
        equipo: "Arma de mano y armadura ligera.",
        reglasEspeciales: "Miedo, Piel escamosa (4+), Sangre fría, Cruzar pantanos, Ataque de cola, Envueltos en niebla. Hechicero de Nivel 1.",
        perfiles: [{ nombre: "Dirach", stats: { M: 6, HA: 5, HP: 2, F: 5, R: 5, H: 4, I: 3, A: "5+1", L: 8 } }],
        options: [
            { n: "Arma de mano adicional", p: 4 }, { n: "Arma a dos manos", p: 6 },
            { n: "Armadura pesada", p: 5 }, { n: "Nivel de Magia 2", p: 35 }
        ],
        maxMagicItems: 2,
        battleStandard: { name: "Portaestandarte de batalla", cost: 25 }
    },
    "Paladín Ogro del Caos": {
        faction: "ginf",
        foc: "Hero",
        warning: "Solo puedes incluir un Paladín por cada unidad de Ogros del Caos.",
        points: 120,
        equipo: "Arma de mano y Armadura pesada.",
        reglasEspeciales: "Miedo, Arremetida, La Voluntad del Caos, El Ojo de los Dioses.",
        perfiles: [{ nombre: "Paladín Ogro del Caos", stats: { M: 6, HA: 5, HP: 3, F: 5, R: 5, H: 4, I: 3, A: 4, L: 8 } }],
        options: [
            { n: "Arma de mano adicional", p: 4 }, { n: "Arma a dos manos", p: 6 },
            { n: "Escudo", p: 3 }, { n: "Armadura del Caos", p: 5 },
            { n: "Marca de Khorne", p: 10 }, { n: "Marca de Nurgle", p: 15 },
            { n: "Marca del Caos Absoluto", p: 5 }
        ],
        maxMagicItems: 2,
        maxSkills: { limit: 2, type: 'count' },
        battleStandard: { name: "Portaestandarte de batalla", cost: 25 }
    },
    "Brujo Ogro del Caos": {
        faction: "ginf",
        foc: "Hero",
        warning: "Solo puedes incluir un Brujo por cada unidad de Ogros del Caos.",
        points: 105,
        equipo: "Arma de mano.",
        reglasEspeciales: "Arremetida, La voluntad del Caos, Miedo, Ojo de los dioses. Hechicero de Nivel 1.",
        perfiles: [{ nombre: "Brujo Ogro del Caos", stats: { M: 6, HA: 4, HP: 2, F: 4, R: 5, H: 4, I: 2, A: 3, L: 7 } }],
        options: [
            { n: "Arma de mano adicional", p: 4 }, { n: "Arma a dos manos", p: 6 },
            { n: "Armadura del Caos", p: 10 }, { n: "Nivel de Magia 2", p: 35 },
            { n: "Marca de Nurgle", p: 15 }, { n: "Marca del Caos Absoluto", p: 5 }
        ],
        maxMagicItems: 2,
        maxSkills: { limit: 1, type: 'count' }
    },

    // === CORE ===
    "0-1 Ogros Dragón": {
        faction: "ginf",
        foc: "Core",
        points: 70,
        min: 3,
        max: 6,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "La voluntad del Caos, Miedo, Piel escamosa (5+), La vida es sueño, Cólera de la tormenta.",
        perfiles: [
            { nombre: "Ogro dragón", stats: { M: 7, HA: 4, HP: 2, F: 5, R: 5, H: 4, I: 2, A: 4, L: 8 } },
            { nombre: "Shartakh", stats: { M: 7, HA: 4, HP: 2, F: 5, R: 5, H: 4, I: 2, A: 5, L: 8 } }
        ],
        options: [
            { n: "Armas de mano adicionales", p: 5 }, { n: "Alabardas", p: 5 },
            { n: "Armas a dos manos", p: 5 }, { n: "Armaduras pesadas", p: 5 }
        ],
        command: { c: { n: "Shartakh", p: 12 } },
        flats: [{ n: "Runas del caos (Estandarte y Músico)", p: 20, costType: 'flat' }],
        champItems: 50
    },
    "Trolls del Caos": {
        faction: "ginf",
        foc: "Core",
        points: 45,
        min: 2,
        max: 8,
        equipo: "Armas de mano.",
        reglasEspeciales: "Miedo, Estupidez, Vómito de troll, Regeneración mutante (4+).",
        perfiles: [{ nombre: "Troll del Caos", stats: { M: 6, HA: 3, HP: 1, F: 5, R: 4, H: 3, I: 1, A: 3, L: 5 } }],
        options: [
            { n: "Armas de mano adicionales", p: 5 }, { n: "Armas a dos manos", p: 5 }
        ],
        flats: [{ n: "Runas del caos (Estandarte y Músico)", p: 20, costType: 'flat' }]
    },
    "Trolls": {
        faction: "ginf",
        foc: "Core",
        points: 30,
        min: 2,
        max: 8,
        equipo: "Armas de mano.",
        reglasEspeciales: "Miedo, Estupidez, Vómito de troll, Regeneración 4+.",
        perfiles: [{ nombre: "Troll", stats: { M: 6, HA: 3, HP: 1, F: 5, R: 4, H: 3, I: 1, A: 3, L: 4 } }],
        options: [
            { n: "Armas de mano adicionales", p: 5 }, { n: "Armas a dos manos", p: 5 },
            { n: "Trolls de río", p: 5 }, { n: "Trolls de piedra", p: 5 }
        ],
        flats: [{ n: "Runas del caos (Estandarte y Músico)", p: 20, costType: 'flat' }]
    },
    "Minotauros": {
        faction: "ginf",
        foc: "Core",
        points: 40,
        min: 3,
        max: 8,
        equipo: "Arma de mano.",
        reglasEspeciales: "La voluntad del Caos, Miedo, Ansia de sangre, Impactos por carga (1), Cruzar bosques, Piel escamosa (5+), Ojo de los Dioses (sólo Oficial), Canibalismo frenético.",
        perfiles: [
            { nombre: "Minotauro", stats: { M: 6, HA: 4, HP: 2, F: 5, R: 4, H: 3, I: 3, A: 3, L: 7 } },
            { nombre: "Campeón Minotauro", stats: { M: 6, HA: 4, HP: 2, F: 5, R: 4, H: 3, I: 3, A: 4, L: 7 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 3 }, { n: "Arma a dos manos", p: 5 },
            { n: "Armadura ligera", p: 2 }, { n: "Consagración a Khorne", p: 2 },
            { n: "Consagración a Nurgle", p: 2 }, { n: "Caos absoluto", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 8 }, s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } },
        magicBanner: 50,
        champItems: 25,
        maxSkills: { limit: 1, type: 'count' }
    },
    "Guerreros Fimir": {
        faction: "ginf",
        foc: "Core",
        points: 50,
        min: 3,
        max: 8,
        equipo: "Armas de mano y Armadura ligera.",
        reglasEspeciales: "Miedo, Piel escamosa (5+), Sangre fría, Cruzar pantanos, Ataque de cola, Envueltos en niebla.",
        perfiles: [
            { nombre: "Guerrero Fimir", stats: { M: 6, HA: 4, HP: 2, F: 4, R: 5, H: 3, I: 2, A: "3+1", L: 7 } },
            { nombre: "Noble Fimir", stats: { M: 6, HA: 4, HP: 2, F: 4, R: 5, H: 3, I: 2, A: "4+1", L: 8 } }
        ],
        options: [
            { n: "Armas de mano adicionales", p: 3 }, { n: "Armas a dos manos", p: 5 },
            { n: "Armaduras pesadas", p: 5 }
        ],
        command: { c: { n: "Noble", p: 8 } },
        flats: [{ n: "Runas del caos (Estandarte y Músico)", p: 20, costType: 'flat' }],
        champItems: 25
    },
    "Mastines del Caos": {
        faction: "ginf",
        foc: "Core",
        points: 6,
        min: 5,
        max: 20,
        equipo: "Garras y dientes (Arma de mano).",
        reglasEspeciales: "La voluntad del Caos.",
        perfiles: [
            { nombre: "Mastín del Caos", stats: { M: 7, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 4, A: 1, L: 5 } },
            { nombre: "Mastín Alfa", stats: { M: 7, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 4, A: 2, L: 5 } }
        ],
        options: [
            { n: "Ataques envenenados", p: 1 }, { n: "Piel escamosa 6+", p: 1 },
            { n: "Famélicos (furia asesina)", p: 2 }, { n: "Colmillos aserrados (Poder de penetración)", p: 1 },
            { n: "Apariencia asquerosa (Miedo)", p: 1 }, { n: "Depredadores del Caos (Vanguardia)", p: 2 }
        ],
        command: { c: { n: "Mastín Alfa", p: 4 } }
    },
    "Ogros del Caos": {
        faction: "ginf",
        foc: "Core",
        points: 32,
        min: 3,
        max: 9,
        equipo: "Armas de mano y Armadura pesada.",
        reglasEspeciales: "La voluntad del Caos, Miedo, Arremetida, Ojo de los Dioses (sólo Oficial).",
        perfiles: [
            { nombre: "Ogro del Caos", stats: { M: 6, HA: 4, HP: 2, F: 4, R: 4, H: 3, I: 2, A: 3, L: 8 } },
            { nombre: "Oficial ogro", stats: { M: 6, HA: 4, HP: 2, F: 4, R: 4, H: 3, I: 2, A: 4, L: 8 } }
        ],
        options: [
            { n: "Armas de mano adicionales", p: 2 }, { n: "Armas a dos manos", p: 4 },
            { n: "Escudo", p: 3 }, { n: "Armaduras del Caos", p: 4 },
            { n: "Marca de Khorne", p: 4 }, { n: "Marca de Nurgle", p: 2 },
            { n: "Marca del Caos Absoluto", p: 1 }
        ],
        command: { c: { n: "Oficial ogro", p: 8 }, s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } },
        magicBanner: 25,
        maxSkills: { limit: 25, type: 'points' }
    },
    "Arpías": {
        faction: "ginf",
        foc: "Core",
        points: 13,
        min: 5,
        max: 15,
        equipo: "Garras (Armas de mano).",
        reglasEspeciales: "Miedo, Volar, Hostigadoras.",
        perfiles: [
            { nombre: "Arpía", stats: { M: 5, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 5, A: 2, L: 7 } },
            { nombre: "Oficial", stats: { M: 5, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 5, A: 3, L: 7 } }
        ],
        options: [{ n: "Garras afiladas (Poder de penetración)", p: 1 }],
        command: { c: { n: "Oficial", p: 6 } }
    },
    "Engendros del Caos": {
        faction: "ginf",
        foc: "Core",
        points: 60,
        min: 1,
        max: 4,
        equipo: "Garras, tentáculos y dientes.",
        reglasEspeciales: "Indesmoralizables, Miedo, Movimiento aleatorio, Ataques aleatorios, Aura demoníaca (5+), Hostigadores.",
        perfiles: [{ nombre: "Engendro del Caos", stats: { M: "2D6", HA: 3, HP: 0, F: 5, R: 5, H: 3, I: 3, A: "1D6+1", L: 10 } }],
        options: [
            { n: "Marca de Khorne", p: 5 }, { n: "Marca de Nurgle", p: 10 },
            { n: "Marca de Tzeentch", p: 10 }, { n: "Marca de Slaanesh", p: 3 },
            { n: "Marca del Caos Absoluto", p: 4 }
        ]
    },

    // === SPECIAL ===
    "Shearl Fimir": {
        faction: "ginf",
        foc: "Special",
        warning: "Solo puedes incluir una unidad de Shearls por cada unidad de Guerreros Fimir.",
        points: 12,
        min: 5,
        max: 15,
        equipo: "Armas de mano y Armadura ligera.",
        reglasEspeciales: "Hostigadores, Piel escamosa (6+), Sangre fría, Cruzar (pantanos), Esbirros.",
        perfiles: [
            { nombre: "Shearl", stats: { M: 5, HA: 3, HP: 2, F: 4, R: 4, H: 1, I: 2, A: 2, L: 6 } },
            { nombre: "Oficial Shearl", stats: { M: 5, HA: 3, HP: 2, F: 4, R: 4, H: 1, I: 2, A: 3, L: 7 } }
        ],
        options: [
            { n: "Armas de mano adicionales", p: 3 }, { n: "Jabalinas", p: 1 },
            { n: "Armas a dos manos", p: 5 }, { n: "Emboscada o Vanguardia", p: 2 }
        ],
        command: { c: { n: "Oficial Shearl", p: 8 } }
    },
    "Quimera": {
        faction: "ginf",
        foc: "Special",
        points: 175,
        equipo: "Garras y dientes (arma de mano).",
        reglasEspeciales: "Volar, Piel escamosa (4+), Arma de aliento (F3, flamígero), La voluntad del Caos.",
        perfiles: [{ nombre: "Quimera", stats: { M: 6, HA: 4, HP: 0, F: 6, R: 5, H: 5, I: 2, A: 5, L: 6 } }],
        options: [{ n: "Regeneración 5+", p: 25 }]
    },
    "Mantícora": {
        faction: "ginf",
        foc: "Special",
        points: 175,
        equipo: "Garras y dientes (arma de mano).",
        reglasEspeciales: "Furia asesina, Volar, Piel escamosa (4+), Aguijón venenoso (ataque adicional con Envenenados y Heridas múltiples [1D3]), La voluntad del Caos.",
        perfiles: [{ nombre: "Mantícora", stats: { M: 6, HA: 5, HP: 0, F: 6, R: 5, H: 5, I: 3, A: "4+1", L: 6 } }]
    },
    "Cocatriz": {
        faction: "ginf",
        foc: "Special",
        points: 185,
        min: 1,
        max: 2,
        warning: "Máximo 2 en ejércitos de 3000+ pts.",
        equipo: "Garras y pico (arma de mano).",
        reglasEspeciales: "Volar, Ataques envenenados, Piel escamosa (5+), Mirada petrificadora, Vomitar bilis, Luchar a ciegas, Cobardía infame.",
        perfiles: [{ nombre: "Cocatriz", stats: { M: 8, HA: 3, HP: 4, F: 5, R: 5, H: 5, I: 5, A: 4, L: 6 } }]
    },
    "Gigante del Caos": {
        faction: "ginf",
        foc: "Special",
        points: 160,
        equipo: "Garrote (arma de mano).",
        reglasEspeciales: "Cruzar (obstáculos), mutaciones del Caos, Caídas, Ataques especiales.",
        perfiles: [{ nombre: "Gigante", stats: { M: 6, HA: 3, HP: 2, F: 6, R: 6, H: 6, I: 2, A: "*", L: 10 } }]
    },

    // === RARE ===
    "Engendro Monstruoso del Caos": {
        faction: "ginf",
        foc: "Rare",
        points: 250,
        equipo: "Incontables apéndices mutantes (arma de mano).",
        reglasEspeciales: "Indesmoralizable, Movimiento aleatorio (3D6), Ataques aleatorios (2D6+2), Aura demoníaca (5+), Vástago del Caos.",
        perfiles: [{ nombre: "Engendro monstruoso", stats: { M: "3D6", HA: "1D3+2", HP: 0, F: "2D3+2", R: "2D3+2", H: "2D3+2", I: "1D6", A: "2D6+2", L: 10 } }],
        options: [
            { n: "Marca de Khorne", p: 15 }, { n: "Marca de Nurgle", p: 30 },
            { n: "Marca de Tzeentch", p: 20 }, { n: "Marca de Slaanesh", p: 10 },
            { n: "Marca del Caos Absoluto", p: 10 }
        ]
    },
    "0-1 Dragón del Caos": {
        faction: "ginf",
        foc: "Rare",
        points: 325,
        equipo: "Garras y dientes (arma de mano).",
        reglasEspeciales: "La voluntad del Caos, Volar, Piel escamosa (3+), 2 armas de aliento (F4 flamígero y F2 sin TSA), Criatura legendaria.",
        perfiles: [{ nombre: "Dragón del Caos", stats: { M: 6, HA: 6, HP: 0, F: 6, R: 6, H: 6, I: 3, A: 7, L: 8 } }]
    },
    "Fauces del Terror": {
        faction: "ginf",
        foc: "Rare",
        points: 210,
        equipo: "Boca enorme con colmillos (arma de mano).",
        reglasEspeciales: "Impactos por carga (1D6), Piel escamosa (4+), Ataques aleatorios (1D3+2), Veloz, Vómito de cieno, Bestia subterránea, Devorar.",
        perfiles: [{ nombre: "Fauces del Terror", stats: { M: 7, HA: 3, HP: 0, F: 6, R: 5, H: 5, I: 2, A: "1D3+2", L: 7 } }],
        options: [
            { n: "Garfios de hueso", p: 15 }, { n: "Sangre venenosa", p: 10 },
            { n: "Mandíbula de acero", p: 10 }, { n: "Curación impía", p: 25 }
        ]
    },
    "Hidra del Caos": {
        faction: "ginf",
        foc: "Rare",
        points: 235,
        equipo: "Garras y colmillos (arma de mano).",
        reglasEspeciales: "La Voluntad del Caos, Piel Escamosa (4+), Cruzar (acuáticos), Sangre fría, Arma de aliento (F4, flamígero), Crecimiento Mutante, Regeneración mutante (4+).",
        perfiles: [{ nombre: "Hidra del Caos", stats: { M: 6, HA: 4, HP: 2, F: 6, R: 5, H: 6, I: 2, A: 6, L: 5 } }]
    }
};

const mountsDB_ginf = {}; // Grey Infernal does not have mounts for its characters.

const armySkillsDB_ginf = {
    "Ungido del Caos": { points: 50, faction: "ginf", type: "Recompensa del Caos", summary: "Tozudez." },
    "Esplendor diabólico": { points: 35, faction: "ginf", type: "Recompensa del Caos", summary: "Enemigos a 6\" -1L." },
    "Muchos brazos": { points: 25, faction: "ginf", type: "Recompensa del Caos", summary: "+1A." },
    "Aliento de fuego": { points: 25, faction: "ginf", type: "Recompensa del Caos", summary: "Arma de aliento F3, flamígero." },
    "Regeneración": { points: 25, faction: "ginf", type: "Recompensa del Caos", summary: "Regeneración (5+), o +1 si ya la tenía." },
    "Sudor fangoso": { points: 25, faction: "ginf", type: "Recompensa del Caos", summary: "-1 para impactarle en CC." },
    "Corpulencia del Caos": { points: 25, faction: "ginf", type: "Recompensa del Caos", summary: "+1H, -1I." },
    "Don de Morrslieb": { points: 20, faction: "ginf", type: "Recompensa del Caos", summary: "RM(2)." },
    "Apariencia horripilante": { points: 20, faction: "ginf", type: "Recompensa del Caos", summary: "Causa Terror." },
    "Cola maza": { points: 20, faction: "ginf", type: "Recompensa del Caos", summary: "+1A F5 con HA/I propias." },
    "Esencia demoníaca": { points: 20, faction: "ginf", type: "Recompensa del Caos", summary: "TSE 5+ vs no mágicos." },
    "Tumor inteligente": { points: 15, faction: "ginf", type: "Recompensa del Caos", summary: "Sólo hechiceros. +1 hechizo." },
    "Chillido infernal": { points: 15, faction: "ginf", type: "Recompensa del Caos", summary: "Ataque de disparo 8\", 2D6 impactos F1 sin TSA." },
    "Piel de hierro": { points: 15, faction: "ginf", type: "Recompensa del Caos", summary: "Piel escamosa (5+)." },
    "Apéndice adicional": { points: 10, faction: "ginf", type: "Recompensa del Caos", summary: "+1A con F básica." },
    "Astas descomunales": { points: 10, faction: "ginf", type: "Recompensa del Caos", summary: "Impactos por carga (1), o (1D3) si ya la tenía." },
    "Mirada disforme": { points: 10, faction: "ginf", type: "Recompensa del Caos", summary: "Ataque de disparo 12\", F4, mágico." },
    "Garras destripadoras": { points: 10, faction: "ginf", type: "Recompensa del Caos", summary: "+1F y Poder de penetración. No puede usar armas/escudo." },
    "Sentidos amplificados": { points: 10, faction: "ginf", type: "Recompensa del Caos", summary: "+1I." },
    "Piel de hierro (menor)": { points: 5, faction: "ginf", type: "Recompensa del Caos", summary: "Piel escamosa (6+)." },
    "Sangre venenosa": { points: 5, faction: "ginf", type: "Recompensa del Caos", summary: "Al ser herido en CC, atacante sufre impacto F4." },
    "Exudar veneno": { points: 5, faction: "ginf", type: "Recompensa del Caos", summary: "Ataques envenenados." },
    "Mandíbula distensible": { points: 5, faction: "ginf", type: "Recompensa del Caos", summary: "1A con +1F y Golpe letal." },
    "Mente enajenada": { points: 5, faction: "ginf", type: "Recompensa del Caos", summary: "Estupidez y Furia asesina." },
    "Collar de Khorne": { points: 35, faction: "ginf", type: "Recompensa de Khorne", subfaction: "Khorne", summary: "RM(3) y TSE 6+." },
    "Furia de batalla de Khorne": { points: 30, faction: "ginf", type: "Recompensa de Khorne", subfaction: "Khorne", summary: "+1A y Carga devastadora." },
    "Alabanza de Khorne": { points: 25, faction: "ginf", type: "Recompensa de Khorne", subfaction: "Khorne", summary: "Repite TSA fallidas." },
    "Hacha de Khorne": { points: 25, faction: "ginf", type: "Recompensa de Khorne", subfaction: "Khorne", summary: "Golpe letal." },
    "Tamaño descomunal": { points: 35, faction: "ginf", type: "Recompensa de Nurgle", subfaction: "Nurgle", summary: "+1R, -1I." },
    "Vigor de Nurgle": { points: 30, faction: "ginf", type: "Recompensa de Nurgle", subfaction: "Nurgle", summary: "+1H." },
    "Putrefacción de Nurgle": { points: 25, faction: "ginf", type: "Recompensa de Nurgle", subfaction: "Nurgle", summary: "Al inicio del CC, enemigos en contacto (no Nurgle) sufren herida a 6+ sin TSA." },
    "Vómito de corrupción": { points: 25, faction: "ginf", type: "Recompensa de Nurgle", subfaction: "Nurgle", summary: "Arma de aliento F3 sin TSA." }
};

const magicItemsDB_ginf = {
    "Arma Mágica": {
        "Cimitarra del Pacto": { points: 50, faction: "ginf", relic: true, summary: "Arma de Mano, Impactos Múltiples (1D3+1) y +1 impactar en CC." },
        "Hacha del Pánico": { points: 50, faction: "ginf", relic: false, summary: "Arma de mano. Niega TSE (excepto Esquivar)." },
        "Mazas de Balor": { points: 40, faction: "ginf", relic: false, summary: "Armas emparejadas. Repite para impactar fallidas, +1F." },
        "Mazo de la Ciénaga Negra": { points: 35, faction: "ginf", relic: false, summary: "Arma a dos manos. Heridas múltiples (2) y Odio." },
        "Espadas Gemelas de Darhuum": { points: 30, faction: "ginf", relic: false, summary: "Armas emparejadas. Heridas múltiples (2), Poder de penetración y Ataques flamígeros." },
        "Maza de obsidiana": { points: 25, faction: "ginf", relic: false, summary: "Arma a dos manos. Sólo hechiceros. RM(2). Al dispersar, gana 1 dado de energía." },
        "Garrote asesino": { points: 20, faction: "ginf", relic: false, summary: "Arma a dos manos. +2HA." }
    },
    "Armadura Mágica": {
        "Coraza de Azabache": { points: 50, faction: "ginf", relic: true, summary: "Armadura pesada. TSE 5+, inmune a Heridas múltiples." },
        "Armadura de las Tormentas": { points: 30, faction: "ginf", relic: false, summary: "Armadura del Caos. Repite TSA fallidas." },
        "El Yelmo Embrujado": { points: 25, faction: "ginf", relic: false, summary: "+1 a TSA y RM(2)." },
        "Armadura de la Ira": { points: 20, faction: "ginf", relic: false, summary: "Armadura del Caos. +1A por cada herida sufrida (máx 10)." },
        "Armadura del Caos": { points: 10, faction: "ginf", relic: false, summary: "TSA 4+. Un hechicero puede llevarla." }
    },
    "Talismán": {
        "Gema pulsante de Lisaart": { points: 60, faction: "ginf", relic: true, summary: "Impactos exitosos en CC contra portador y unidad deben repetirse." },
        "Rubí del Caos": { points: 45, faction: "ginf", relic: true, summary: "TSE 4+." },
        "El Corazón del Fango": { points: 35, faction: "ginf", relic: false, summary: "Inmune a Golpe letal y Heridas múltiples." },
        "Corona del Norte": { points: 35, faction: "ginf", relic: false, summary: "Tozudez y Estupidez." },
        "Fetiche Brujo": { points: 30, faction: "ginf", relic: false, summary: "TSE 5+ y RM(1)." },
        "Collar de Hielo Negro": { points: 25, faction: "ginf", relic: false, summary: "-1 a impactar al portador en CC." }
    },
    "Artefacto Arcano": {
        "Runa de Vórtice Ancestral": { points: 50, faction: "ginf", relic: true, summary: "Un solo uso. Dispersa auto y a 4+ destruye O a 4-6 redirige. No vs Fuerza Irresistible." },
        "Bastón Rúnico del Caos": { points: 50, faction: "ginf", relic: false, summary: "Inicio de tu fase de magia, roba 1 dado de dispersión enemigo como dado de energía." },
        "Familiar del Caos": { points: 40, faction: "ginf", relic: false, summary: "+1 dado de energía y dispersión." },
        "Placa de la Oscuridad Primigenia": { points: 35, faction: "ginf", relic: false, summary: "Conoce 1D3+1 hechizos adicionales, puede mezclar saberes." },
        "Tomo Oscuro": { points: 35, faction: "ginf", relic: false, summary: "Señor del Conocimiento (Magia Oscura)." },
        "Icono de la Tormenta": { points: 25, faction: "ginf", relic: false, summary: "Conoce 1 hechizo adicional y +2 a canalizar." }
    },
    "Objeto Hechizado": {
        "La Semilla de Fímul": { points: 35, faction: "ginf", relic: true, summary: "Un solo uso. Crea un pantano de 4\" de radio a 12\"." },
        "Collar de cabezas de brujo": { points: 35, faction: "ginf", relic: false, summary: "Portahechizos(1D6+1). Lanza un hechizo aleatorio de una tabla." },
        "Ojo Brujo": { points: 30, faction: "ginf", relic: false, summary: "Portahechizos(5). Potenciación a 12\". Efecto aleatorio 1D6 sobre F y R." },
        "Gema de Cristal Oscuro": { points: 25, faction: "ginf", relic: false, summary: "Un solo uso. En una Disfunción, tira 2D6 y elige el resultado." },
        "Relicario del Mar de las Garras": { points: 20, faction: "ginf", relic: false, summary: "Unidad Inmune a Fuego. Ataques flamígeros -F a la mitad." },
        "Icono de Fortaleza Inquebrantable": { points: 20, faction: "ginf", relic: false, summary: "Impactos por Carga contra la unidad se resuelven contra el atacante." },
        "Amuleto de piedra de disformidad": { points: 10, faction: "ginf", relic: false, summary: "Un solo uso. Repite una tirada." }
    },
    "Estandarte Mágico": {
        "Estandarte del Vacio Infinito": { points: 45, faction: "ginf", relic: true, summary: "Objetos mágicos en contacto (amigo/enemigo) se consideran mundanos." },
        "Estandarte de la Gran Bestia del Norte": { points: 40, faction: "ginf", relic: false, summary: "Un solo uso. Amigos a 12\" ganan Odio. Amigos a 24\" reagrupan auto." },
        "Tótem de la Tormenta": { points: 30, faction: "ginf", relic: false, summary: "Enemigos en contacto I a 0." },
        "Tótem de la Muerte": { points: 25, faction: "ginf", relic: false, summary: "Unidad gana Furia asesina y Carga devastadora." },
        "Estandarte de los Vientos del Caos": { points: 25, faction: "ginf", relic: false, summary: "Unidad +1M y Veloz." },
        "Estandarte de Piel de Demonio": { points: 25, faction: "ginf", relic: false, summary: "Unidad gana Odio (Todo el mundo) y es Odiada." },
        "Tótem del Horror": { points: 20, faction: "ginf", relic: false, summary: "Solo Ogros del Caos. Al cargar, unidad enemiga -bono por filas a la mitad." },
        "Tótem Encantado": { points: 10, faction: "ginf", relic: false, summary: "Unidad gana Ataques mágicos." }
    }
};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Grey Infernal",
    FACTION_ID: "ginf",
    armySkillsLabel: "Recompensas del Caos",
    FOC_CONFIG: {
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_ginf,
    mountsDB: mountsDB_ginf,
    magicItemsDB: magicItemsDB_ginf,
    armySkillsDB: armySkillsDB_ginf,
    specialProfilesDB: {},
};


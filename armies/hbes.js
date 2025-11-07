// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: HOMBRES BESTIA (v4.1 AUDITED & ENHANCED) ---
// ===================================================================================
// Last Updated: 2025-10-05 - v4.1.1 Added consecration summaries.

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_hbes = {
    // ===================================================================================
    // === COMANDANTES ===
    // ===================================================================================
    "Caudillo Hombre Bestia": {
        faction: "hbes",
        foc: "Lord",
        points: 150,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Piel Escamosa (6+), Cruzar bosques, Astado, Ojo de los Dioses.",
        perfiles: [{ nombre: "Caudillo", stats: { M: 5, HA: 6, HP: 3, F: 5, R: 5, H: 4, I: 5, A: 4, L: 9 } }],
        options: [
            { n: "Arma a dos manos", p: 6 },
            { n: "Arma de mano adicional", p: 4 },
            { n: "Alabarda", p: 6 },
            { n: "Escudo", p: 3 },
            { n: "Consagración a Khorne", p: 10, subfaction: "Khorne", summary: "Gana Furia Asesina." },
            { n: "Consagración a Slaanesh", p: 10, subfaction: "Slaanesh", summary: "Gana Inmunidad a Psicología." },
            { n: "Consagración a Nurgle", p: 10, subfaction: "Nurgle", summary: "Gana +1 a la Resistencia." },
            { n: "Consagración a Tzeentch", p: 10, subfaction: "Tzeentch", summary: "Gana TSE(6+) o mejora la que tenga en +1." }
        ],
        mounts: ["Carro de tuskgors (Caudillo)", "Carro de garragors (Caudillo)"],
        maxMagicItems: 3,
        maxRelics: 1,
        maxSkills: { limit: 2, type: 'count' }
    },
    "Gran Chamán Hombre Bestia": {
        faction: "hbes",
        foc: "Lord",
        points: 165,
        equipo: "Arma de mano.",
        reglasEspeciales: "Piel Escamosa (6+), Cruzar bosques, Astado, Hechicero de Nivel 3.",
        perfiles: [{ nombre: "Gran Chamán", stats: { M: 5, HA: 4, HP: 3, F: 4, R: 5, H: 3, I: 4, A: 2, L: 8 } }],
        options: [
            { n: "Nivel de Magia 4", p: 35 },
            { n: "Arma a dos manos", p: 4 },
            { n: "Arma de mano adicional", p: 2 },
            { n: "Consagración a Slaanesh", p: 10, subfaction: "Slaanesh", summary: "Gana Inmunidad a Psicología." },
            { n: "Consagración a Nurgle", p: 10, subfaction: "Nurgle", summary: "Gana +1 a la Resistencia." },
            { n: "Consagración a Tzeentch", p: 10, subfaction: "Tzeentch", summary: "Gana TSE(6+) o mejora la que tenga en +1." }
        ],
        mounts: ["Carro de tuskgors (Gran Chamán)", "Carro de garragors (Gran Chamán)"],
        maxMagicItems: 3,
        maxRelics: 1,
        maxSkills: { limit: 2, type: 'count' }
    },
    "Minotauro de la Condenación": {
        faction: "hbes",
        foc: "Lord",
        points: 230,
        equipo: "Arma de mano.",
        reglasEspeciales: "Piel Escamosa (5+), Ansia de sangre, Cruzar bosques, Miedo, Impactos por carga (1), Ojo de los Dioses, Canibalismo frenético.",
        perfiles: [{ nombre: "Minotauro de la Condenación", stats: { M: 6, HA: 6, HP: 3, F: 6, R: 5, H: 5, I: 5, A: 6, L: 9 } }],
        options: [
            { n: "Arma a dos manos", p: 8 },
            { n: "Arma de mano adicional", p: 5 },
            { n: "Escudo", p: 3 },
            { n: "Armadura ligera", p: 5 },
            { n: "Consagración a Khorne", p: 12, subfaction: "Khorne", summary: "Gana Furia Asesina." },
            { n: "Consagración a Slaanesh", p: 10, subfaction: "Slaanesh", summary: "Gana Inmunidad a Psicología." },
            { n: "Consagración a Nurgle", p: 12, subfaction: "Nurgle", summary: "Gana +1 a la Resistencia." },
            { n: "Consagración a Tzeentch", p: 10, subfaction: "Tzeentch", summary: "Gana TSE(6+) o mejora la que tenga en +1." }
        ],
        maxMagicItems: 1,
        maxRelics: 1,
        maxSkills: { limit: 2, type: 'count' }
    },
    "Bestia Ungida": {
        faction: "hbes",
        foc: "Lord",
        points: 225,
        equipo: "Arma de mano.",
        reglasEspeciales: "Piel Escamosa (6+), Demonio, Cruzar (bosques), Reverenciado, Devoción Demoniaca.",
        perfiles: [{ nombre: "Bestia Ungida", stats: { M: 6, HA: 8, HP: 3, F: 6, R: 5, H: 5, I: 6, A: 5, L: 9 } }],
        options: [
            { n: "Alas", p: 20 },
            { n: "Cuerpo Bestial (Movimiento 8 y Veloz)", p: 10 },
            { n: "Hechicero Nivel 1", p: 35 },
            { n: "Hechicero Nivel 2", p: 70 },
            { n: "Hechicero Nivel 3", p: 105 },
            { n: "Hechicero Nivel 4", p: 140 },
            { n: "Consagración a Khorne", p: 20, subfaction: "Khorne", summary: "Odio (todos), Resistencia Mágica (1)" },
            { n: "Consagración a Slaanesh", p: 25, subfaction: "Slaanesh", summary: "Sangre Fría" },
            { n: "Consagración a Nurgle", p: 15, subfaction: "Nurgle", summary: "Ataques Envenenados" },
            { n: "Consagración a Tzeentch", p: 15, subfaction: "Tzeentch", summary: "Aura demoníaca pasa a 4+" }
        ],
        maxMagicItems: 1,
        maxRelics: 0,
        maxSkills: { limit: 3, type: 'count' }
    },
    // ===================================================================================
    // === HÉROES ===
    // ===================================================================================
    "Beligor": {
        faction: "hbes",
        foc: "Hero",
        points: 85,
        equipo: "Arma de mano.",
        reglasEspeciales: "Piel Escamosa (6+), Cruzar bosques, Astado, Ojo de los Dioses.",
        perfiles: [{ nombre: "Beligor", stats: { M: 5, HA: 5, HP: 3, F: 4, R: 5, H: 3, I: 4, A: 3, L: 8 } }],
        options: [
            { n: "Arma a dos manos", p: 4 },
            { n: "Arma de mano adicional", p: 2 },
            { n: "Alabarda", p: 4 },
            { n: "Escudo", p: 2 },
            { n: "Armadura ligera", p: 2 },
            { n: "Consagración a Khorne", p: 5, subfaction: "Khorne", summary: "Gana Furia Asesina." },
            { n: "Consagración a Slaanesh", p: 5, subfaction: "Slaanesh", summary: "Gana Inmunidad a Psicología." },
            { n: "Consagración a Nurgle", p: 5, subfaction: "Nurgle", summary: "Gana +1 a la Resistencia." },
            { n: "Consagración a Tzeentch", p: 5, subfaction: "Tzeentch", summary: "Gana TSE(6+) o mejora la que tenga en +1." }
        ],
        mounts: ["Carro de tuskgors (Beligor)", "Carro de garragors (Beligor)"],
        maxMagicItems: 3,
        maxRelics: 0,
        maxSkills: { limit: 1, type: 'count' },
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 }
    },
    "Chamán Hombre Bestia": {
        faction: "hbes",
        foc: "Hero",
        points: 65,
        equipo: "Arma de mano.",
        reglasEspeciales: "Piel Escamosa (6+), Cruzar bosques, Astado, Ojo de los Dioses, Hechicero de Nivel 1.",
        perfiles: [{ nombre: "Chamán", stats: { M: 5, HA: 4, HP: 3, F: 3, R: 4, H: 2, I: 3, A: 1, L: 7 } }],
        options: [
            { n: "Nivel de Magia 2", p: 35 },
            { n: "Arma a dos manos", p: 2 },
            { n: "Arma de mano adicional", p: 1 },
            { n: "Consagración a Slaanesh", p: 5, subfaction: "Slaanesh", summary: "Gana Inmunidad a Psicología." },
            { n: "Consagración a Nurgle", p: 5, subfaction: "Nurgle", summary: "Gana +1 a la Resistencia." },
            { n: "Consagración a Tzeentch", p: 5, subfaction: "Tzeentch", summary: "Gana TSE(6+) o mejora la que tenga en +1." }
        ],
        mounts: ["Carro de tuskgors (Chamán)", "Carro de garragors (Chamán)"],
        maxMagicItems: 2,
        maxRelics: 0,
        maxSkills: { limit: 1, type: 'count' }
    },
    "Minotauro Destripador": {
        faction: "hbes",
        foc: "Hero",
        points: 150,
        equipo: "Arma de mano.",
        reglasEspeciales: "Piel Escamosa (5+), Ansia de sangre, Cruzar bosques, Miedo, Impactos por carga (1), Ojo de los Dioses, Canibalismo frenético.",
        perfiles: [{ nombre: "Minotauro Destripador", stats: { M: 6, HA: 5, HP: 3, F: 5, R: 5, H: 4, I: 4, A: 5, L: 8 } }],
        options: [
            { n: "Arma a dos manos", p: 6 },
            { n: "Arma de mano adicional", p: 4 },
            { n: "Escudo", p: 2 },
            { n: "Armadura ligera", p: 4 },
            { n: "Consagración a Khorne", p: 10, subfaction: "Khorne", summary: "Gana Furia Asesina." },
            { n: "Consagración a Slaanesh", p: 10, subfaction: "Slaanesh", summary: "Gana Inmunidad a Psicología." },
            { n: "Consagración a Nurgle", p: 10, subfaction: "Nurgle", summary: "Gana +1 a la Resistencia." },
            { n: "Consagración a Tzeentch", p: 10, subfaction: "Tzeentch", summary: "Gana TSE(6+) o mejora la que tenga en +1." }
        ],
        maxMagicItems: 1,
        maxRelics: 0,
        maxSkills: { limit: 1, type: 'count' },
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 }
    },
    "Saqueador Centigor": {
        faction: "hbes",
        foc: "Hero",
        points: 125,
        equipo: "Arma de mano.",
        reglasEspeciales: "Piel Escamosa (6+), Cruzar bosques, Borracho, Ojo de los Dioses, Corpulentos.",
        perfiles: [{ nombre: "Saqueador Centigor", stats: { M: 8, HA: 5, HP: 4, F: 5, R: 4, H: 3, I: 3, A: 4, L: 8 } }],
        options: [
            { n: "Lanza (como caballería)", p: 4 },
            { n: "Jabalinas", p: 2 },
            { n: "Arma de mano adicional", p: 2 },
            { n: "Hachas arrojadizas", p: 2 },
            { n: "Escudo", p: 3 },
            { n: "Armadura ligera", p: 3 },
            { n: "Consagración a Khorne", p: 8, subfaction: "Khorne", summary: "Gana Furia Asesina." },
            { n: "Consagración a Slaanesh", p: 8, subfaction: "Slaanesh", summary: "Gana Inmunidad a Psicología." },
            { n: "Consagración a Nurgle", p: 8, subfaction: "Nurgle", summary: "Gana +1 a la Resistencia." },
            { n: "Consagración a Tzeentch", p: 8, subfaction: "Tzeentch", summary: "Gana TSE(6+) o mejora la que tenga en +1." }
        ],
        maxMagicItems: 2,
        maxRelics: 0,
        maxSkills: { limit: 1, type: 'count' }
    },

    // ===================================================================================
    // === BÁSICAS ===
    // ===================================================================================
    "Gors": {
        faction: "hbes",
        foc: "Core",
        points: 6,
        min: 10,
        max: 35,
        equipo: "Dos Armas de mano.",
        reglasEspeciales: "Piel escamosa (6+), Cruzar bosques, Indisciplina, Astados, Ojo de los Dioses (sólo el Oficial).",
        perfiles: [
            { nombre: "Gor", stats: { M: 5, HA: 4, HP: 2, F: 3, R: 4, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Campeón Gor", stats: { M: 5, HA: 4, HP: 2, F: 3, R: 4, H: 1, I: 3, A: 2, L: 7 } }
        ],
        options: [
            { n: "Escudo y Lanza", p: 1 },
            { n: "Arma a dos manos", p: 2 },
            { n: "Consagración a Khorne", p: 2, subfaction: "Khorne", summary: "Gana Furia Asesina." },
            { n: "Consagración a Slaanesh", p: 1, subfaction: "Slaanesh", summary: "Gana Inmunidad a Psicología." },
            { n: "Consagración a Nurgle", p: 1, subfaction: "Nurgle", summary: "Gana +1 a la Resistencia." },
            { n: "Consagración a Tzeentch", p: 1, subfaction: "Tzeentch", summary: "Gana TSE(6+) o mejora la que tenga en +1." }
        ],
        command: { c: { n: "Oficial", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        magicBanner: 25
    },
    "Incursores Gors": {
        faction: "hbes",
        foc: "Core",
        points: 7,
        min: 10,
        max: 30,
        warning: "Puedes incluir una unidad de Incursores gors por cada unidad de Gors, Saqueagors o manada de Hombres bestia.",
        equipo: "Dos Armas de mano.",
        reglasEspeciales: "Piel escamosa (6+), Cruzar bosques, Indisciplina, Astados, Emboscada, Ojo de los Dioses (sólo el Oficial).",
        perfiles: [
            { nombre: "Gor", stats: { M: 5, HA: 4, HP: 2, F: 3, R: 4, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Campeón Gor", stats: { M: 5, HA: 4, HP: 2, F: 3, R: 4, H: 1, I: 3, A: 2, L: 7 } }
        ],
        options: [
            { n: "Escudo y Lanza", p: 1 },
            { n: "Arma a dos manos", p: 2 },
            { n: "Consagración a Khorne", p: 1, subfaction: "Khorne", summary: "Gana Furia Asesina." },
            { n: "Consagración a Slaanesh", p: 1, subfaction: "Slaanesh", summary: "Gana Inmunidad a Psicología." },
            { n: "Consagración a Nurgle", p: 1, subfaction: "Nurgle", summary: "Gana +1 a la Resistencia." },
            { n: "Consagración a Tzeentch", p: 1, subfaction: "Tzeentch", summary: "Gana TSE(6+) o mejora la que tenga en +1." }
        ],
        command: { c: { n: "Oficial", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        magicBanner: 25
    },
    // ... (rest of the file is unchanged but included for completeness)
    "Ungors": {
        faction: "hbes",
        foc: "Core",
        points: 4,
        min: 10,
        max: 40,
        equipo: "Arma de mano.",
        reglasEspeciales: "Cruzar bosques, Indisciplina.",
        perfiles: [
            { nombre: "Ungor", stats: { M: 5, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Campeón Ungor", stats: { M: 5, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 } }
        ],
        options: [
            { n: "Escudo y Lanza", p: 1 },
            { n: "Arco", p: 1 },
            { n: "Escudo y Jabalinas", p: 1 },
            { n: "Hostigadores", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 4 }, s: { n: "Portaestandarte", p: 4, warning: "No si son Hostigadores" }, m: { n: "Músico", p: 4 } },
    },
    "Incursores Ungors": {
        faction: "hbes",
        foc: "Core",
        points: 5,
        min: 10,
        max: 40,
        warning: "Puedes incluir una unidad de Incursores ungors por cada unidad de Ungors o Manada de Hombres bestia.",
        equipo: "Arma de mano.",
        reglasEspeciales: "Cruzar bosques, Indisciplina, Emboscada o Vanguardia (elige una).",
        perfiles: [
            { nombre: "Ungor", stats: { M: 5, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Campeón Ungor", stats: { M: 5, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 } }
        ],
        options: [
            { n: "Escudo y Lanza", p: 1 },
            { n: "Arco", p: 1 },
            { n: "Escudo y Jabalinas", p: 1 },
            { n: "Hostigadores", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 4 }, s: { n: "Portaestandarte", p: 4, warning: "No si son Hostigadores" }, m: { n: "Músico", p: 4 } },
    },
    "Mastines del Caos": {
        faction: "hbes",
        foc: "Core",
        points: 6,
        min: 5,
        max: 20,
        equipo: "Garras y dientes (Arma de mano).",
        reglasEspeciales: "Cruzar bosques.",
        perfiles: [
            { nombre: "Mastín del Caos", stats: { M: 7, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 4, A: 1, L: 5 } },
            { nombre: "Mastín Alfa", stats: { M: 7, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 4, A: 2, L: 5 } }
        ],
        options: [
            { n: "Ataques envenenados", p: 1 },
            { n: "Piel escamosa (6+)", p: 1 },
            { n: "Famélicos (Furia asesina y Ansia de sangre)", p: 2 },
            { n: "Apariencia asquerosa (Causan Miedo)", p: 1 },
            { n: "0-1 Emboscada o Vanguardia (hasta 15 miniaturas)", p: 2 }
        ],
        command: { c: { n: "Mastín Alfa", p: 5 } }
    },
    "Manada de Hombre Bestia": {
        faction: "hbes",
        foc: "Core",
        points: 0,
        min: 20,
        max: 40,
        equipo: "Arma de mano (Ungors), Dos Armas de mano (Gors).",
        reglasEspeciales: "Manada, Indisciplina, Cruzar bosques, Astados (solo Gors), Piel escamosa (6+) (solo Gors), Ojo de los Dioses (sólo el Oficial).",
        perfiles: [
            { nombre: "Ungor", stats: { M: 5, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Gor", stats: { M: 5, HA: 4, HP: 2, F: 3, R: 4, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Campeón Gor", stats: { M: 5, HA: 4, HP: 2, F: 3, R: 4, H: 1, I: 3, A: 2, L: 7 } }
        ],
        options: [
            { n: "(Ungors) Escudo y Lanza", p: 1 },
            { n: "(Gors) Escudo y Lanza", p: 1 },
            { n: "(Gors) Arma a dos manos", p: 2 }
        ],
        command: { c: { n: "Oficial", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        magicBanner: 25,
        composition: {
            type: "ratioBased",
            primary: { name: "Gor", cost: 6 },
            secondary: { name: "Ungor", cost: 4 },
            ruleText: "Debes incluir al menos la misma cantidad de Gors que de Ungors.",
            ruleLogic: { secondaryMin: 1, secondaryMax: 1, perPrimary: 1, constraint: 'max' }
        }
    },
    "Saqueagors": {
        faction: "hbes",
        foc: "Core",
        points: 10,
        min: 10,
        max: 20,
        warning: "Solo una unidad por cada unidad de Gors o Manada de Hombres bestia.",
        equipo: "Dos Armas de mano y Hachas arrojadizas.",
        reglasEspeciales: "Piel escamosa (6+), Cruzar bosques, Indisciplina, Astados, Ojo de los Dioses (sólo el Oficial), Exploradores, Hostigadores.",
        perfiles: [
            { nombre: "Saqueagor", stats: { M: 5, HA: 4, HP: 2, F: 3, R: 4, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Campeón Saqueagor", stats: { M: 5, HA: 4, HP: 2, F: 3, R: 4, H: 1, I: 3, A: 2, L: 7 } }
        ],
        options: [
            { n: "Consagración a Khorne", p: 1, subfaction: "Khorne", summary: "Gana Furia Asesina." },
            { n: "Consagración a Slaanesh", p: 1, subfaction: "Slaanesh", summary: "Gana Inmunidad a Psicología." },
            { n: "Consagración a Nurgle", p: 1, subfaction: "Nurgle", summary: "Gana +1 a la Resistencia." },
            { n: "Consagración a Tzeentch", p: 1, subfaction: "Tzeentch", summary: "Gana TSE(6+) o mejora la que tenga en +1." }
        ],
        command: { c: { n: "Campeón", p: 5 }, m: { n: "Músico", p: 5 } },
    },

    // ===================================================================================
    // === ESPECIALES ===
    // ===================================================================================
    "Bestigors": {
        faction: "hbes",
        foc: "Special",
        points: 12,
        min: 10,
        max: 30,
        equipo: "Arma a dos manos, Armadura pesada.",
        reglasEspeciales: "Piel escamosa (6+), Cruzar bosques, Astados, Inmunes a Psicología, Ojo de los Dioses (sólo el Oficial).",
        perfiles: [
            { nombre: "Bestigor", stats: { M: 5, HA: 4, HP: 2, F: 4, R: 4, H: 1, I: 3, A: 1, L: 8 } },
            { nombre: "Campeón Bestigor", stats: { M: 5, HA: 4, HP: 2, F: 4, R: 4, H: 1, I: 3, A: 2, L: 8 } }
        ],
        options: [
            { n: "Alabarda", p: 1 },
            { n: "Consagración a Khorne", p: 2, subfaction: "Khorne", summary: "Gana Furia Asesina." },
            { n: "Consagración a Slaanesh", p: 2, subfaction: "Slaanesh", summary: "Mantiene Inmunidad a Psicología (sin coste adicional de puntos)." },
            { n: "Consagración a Nurgle", p: 2, subfaction: "Nurgle", summary: "Gana +1 a la Resistencia." },
            { n: "Consagración a Tzeentch", p: 2, subfaction: "Tzeentch", summary: "Gana TSE(6+) o mejora la que tenga en +1." }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50,
        champItems: 25,
        champSkills: 25
    },
    "Minotauros": {
        faction: "hbes",
        foc: "Special",
        warning: "Si el señor de la hueste es un minotauro, cuentan como unidades básicas.",
        points: 40,
        min: 3,
        max: 8,
        equipo: "Arma de mano.",
        reglasEspeciales: "Miedo, Ansia de sangre, Impactos por carga (1), Cruzar bosques, Indisciplina, Piel escamosa (5+), Ojo de los Dioses (sólo el Oficial), Canibalismo frenético.",
        perfiles: [
            { nombre: "Minotauro", stats: { M: 6, HA: 4, HP: 2, F: 5, R: 4, H: 3, I: 3, A: 3, L: 7 } },
            { nombre: "Campeón Minotauro", stats: { M: 6, HA: 4, HP: 2, F: 5, R: 4, H: 3, I: 3, A: 4, L: 7 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 3 },
            { n: "Arma a dos manos", p: 5 },
            { n: "Armadura ligera", p: 2 },
            { n: "Consagración a Khorne", p: 2, subfaction: "Khorne", summary: "Gana Furia Asesina." },
            { n: "Consagración a Slaanesh", p: 2, subfaction: "Slaanesh", summary: "Gana Inmunidad a Psicología." },
            { n: "Consagración a Nurgle", p: 2, subfaction: "Nurgle", summary: "Gana +1 a la Resistencia." },
            { n: "Consagración a Tzeentch", p: 2, subfaction: "Tzeentch", summary: "Gana TSE(6+) o mejora la que tenga en +1." }
        ],
        command: { c: { n: "Oficial", p: 8 }, s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } },
        magicBanner: 50,
        champItems: 25,
        champSkills: 25
    },
    "Centigors": {
        faction: "hbes",
        foc: "Special",
        warning: "Si el señor de la hueste es un centigor, cuentan como unidades básicas.",
        points: 22,
        min: 5,
        max: 15,
        equipo: "Arma de mano.",
        reglasEspeciales: "Cruzar bosques, Caballería rápida, Piel escamosa (6+), Astados, Corpulentos (PU 2), Ojo de los Dioses (sólo el Oficial), Borrachos.",
        perfiles: [
            { nombre: "Centigor", stats: { M: 8, HA: 4, HP: 3, F: 4, R: 4, H: 2, I: 2, A: 1, L: 7 } },
            { nombre: "Campeón Centigor", stats: { M: 8, HA: 4, HP: 3, F: 4, R: 4, H: 2, I: 2, A: 2, L: 7 } }
        ],
        options: [
            { n: "Lanza (como caballería)", p: 1 },
            { n: "Arma de mano adicional", p: 1 },
            { n: "Jabalinas", p: 1 },
            { n: "Hachas arrojadizas", p: 1 },
            { n: "Escudo", p: 1 },
            { n: "Armadura ligera", p: 2 },
            { n: "0-1 Hostigadores", p: 2 },
            { n: "Consagración a Khorne", p: 2, subfaction: "Khorne", summary: "Gana Furia Asesina." },
            { n: "Consagración a Slaanesh", p: 2, subfaction: "Slaanesh", summary: "Gana Inmunidad a Psicología." },
            { n: "Consagración a Nurgle", p: 2, subfaction: "Nurgle", summary: "Gana +1 a la Resistencia." },
            { n: "Consagración a Tzeentch", p: 2, subfaction: "Tzeentch", summary: "Gana TSE(6+) o mejora la que tenga en +1." }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25,
        champItems: 25,
        champSkills: 25
    },
    "Carro de Tuskgors": {
        faction: "hbes",
        foc: "Special",
        warning: "Solo uno por cada unidad de Gors, Incursores Gors o Manada de Hombres bestias.",
        points: 90,
        min: 1,
        max: 1,
        equipo: "Bestigor (Arma a 2 manos), Ungor (dos armas de mano), Cuchillas.",
        reglasEspeciales: "Tirada de salvación por armadura de 4+, Potencia de unidad 4, Carga devastadora (sólo Tuskgors).",
        perfiles: [
            { nombre: "Carro", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 5, H: 4, I: "-", A: "-", L: "-" } },
            { nombre: "Bestigor", stats: { M: "-", HA: 4, HP: 2, F: 4, R: "-", H: "-", I: 3, A: 1, L: 8 } },
            { nombre: "Auriga Ungor", stats: { M: "-", HA: 3, HP: 3, F: 3, R: "-", H: "-", I: 3, A: 1, L: "-" } },
            { nombre: "Tuskgors (2)", stats: { M: 7, HA: 3, HP: "-", F: 4, R: "-", H: "-", I: 2, A: 1, L: 4 } }
        ],
        options: [
            { n: "Consagración a Khorne", p: 3, subfaction: "Khorne", summary: "Tripulación gana Furia Asesina." },
            { n: "Consagración a Slaanesh", p: 3, subfaction: "Slaanesh", summary: "Tripulación gana Inmunidad a Psicología." },
            { n: "Consagración a Nurgle", p: 3, subfaction: "Nurgle", summary: "Carro gana +1 a la Resistencia." },
            { n: "Consagración a Tzeentch", p: 3, subfaction: "Tzeentch", summary: "Carro gana TSE(6+)." }
        ]
    },
    "Engendros del Caos": {
        faction: "hbes",
        foc: "Special",
        points: 60,
        min: 1,
        max: 4,
        equipo: "Garras y dientes.",
        reglasEspeciales: "Indesmoralizables, Miedo, Movimiento aleatorio, Ataques aleatorios, Aura demoníaca (5+ especial contra no mágicos), Hostigadores.",
        perfiles: [{ nombre: "Engendro del Caos", stats: { M: "2D6", HA: 3, HP: 0, F: 5, R: 5, H: 3, I: 3, A: "1D6+1", L: 10 } }],
        options: [
            { n: "Marca de Khorne", p: 5, subfaction: "Khorne", summary: "Odio (todos), RM(1)" },
            { n: "Marca de Nurgle", p: 10, subfaction: "Nurgle", summary: "Ataques envenenados, -1 para impactarles" },
            { n: "Marca de Tzeentch", p: 10, subfaction: "Tzeentch", summary: "+1 a la TSE, ataques flamígeros" },
            { n: "Marca de Slaanesh", p: 3, subfaction: "Slaanesh", summary: "Poder de penetración" },
            { n: "Marca del Caos Absoluto", p: 4, subfaction: "Absoluto", summary: "Piel escamosa (5+)" }
        ]
    },
    "0-1 Garragors": {
        faction: "hbes",
        foc: "Special",
        points: 50,
        min: 1,
        max: 4,
        equipo: "Garras y dientes.",
        reglasEspeciales: "Indisciplina, Cruzar bosques, Piel escamosa (5+), Causan Miedo, Ariete porcino (Impactos por carga 1D3).",
        perfiles: [{ nombre: "Garragors", stats: { M: 7, HA: 3, HP: 0, F: 5, R: 5, H: 3, I: 2, A: 3, L: 6 } }],
    },

    // ===================================================================================
    // === SINGULARES ===
    // ===================================================================================
    "Cigor": {
        faction: "hbes",
        foc: "Rare",
        points: 180,
        min: 1,
        max: 1,
        equipo: "Arma de mano y piedras enormes.",
        reglasEspeciales: "Inmune a psicología, Resistencia mágica (2), Piel escamosa (5+), Visión ultraterrena, Arrojar rocas.",
        perfiles: [{ nombre: "Cigor", stats: { M: 7, HA: 2, HP: 1, F: 6, R: 6, H: 6, I: 2, A: 5, L: 8 } }],
    },
    "Gorgon": {
        faction: "hbes",
        foc: "Rare",
        points: 200,
        min: 1,
        max: 1,
        equipo: "Garras y dientes.",
        reglasEspeciales: "Inmune a psicología, Furia asesina, Ansia de sangre, Impactos por carga (1D3), Cruzar (obstáculos), Piel escamosa (5+), Engullir entero.",
        perfiles: [{ nombre: "Gorgon", stats: { M: 7, HA: 4, HP: 0, F: 7, R: 6, H: 6, I: 2, A: "5+1", L: 10 } }],
    },
    "Escuerzo Alado": {
        faction: "hbes",
        foc: "Rare",
        points: 195,
        min: 1,
        max: 1,
        equipo: "Garras y dientes.",
        reglasEspeciales: "Inmune a psicología, Volar, Ataques envenenados, Piel escamosa (5+), Aura de locura, Lengua prensil, Sangre ácida.",
        perfiles: [{ nombre: "Escuerzo Alado", stats: { M: 8, HA: 4, HP: 4, F: 6, R: 5, H: 5, I: 3, A: 5, L: 8 } }],
    },
    "0-1 Carro de Garragor": {
        faction: "hbes",
        foc: "Rare",
        points: 135,
        min: 1,
        max: 1,
        equipo: "Bestigor (Arma a 2 manos), Ungor (dos armas de mano), Cuchillas.",
        reglasEspeciales: "Tirada de salvación por armadura de 3+, Potencia de unidad 5, Causa Miedo, Ariete porcino (1D3 imp. por carga adicionales).",
        perfiles: [
            { nombre: "Carro", stats: { M: "-", HA: "-", HP: "-", F: 6, R: 5, H: 5, I: "-", A: "-", L: "-" } },
            { nombre: "Bestigor", stats: { M: "-", HA: 4, HP: 2, F: 4, R: "-", H: "-", I: 3, A: 1, L: 8 } },
            { nombre: "Auriga Ungor", stats: { M: "-", HA: 3, HP: 3, F: 3, R: "-", H: "-", I: 3, A: 1, L: "-" } },
            { nombre: "Garragor", stats: { M: 7, HA: 3, HP: "-", F: 5, R: "-", H: "-", I: 2, A: 3, L: 6 } }
        ],
        options: [
            { n: "Consagración a Khorne", p: 3, subfaction: "Khorne", summary: "Tripulación gana Furia Asesina." },
            { n: "Consagración a Slaanesh", p: 3, subfaction: "Slaanesh", summary: "Tripulación gana Inmunidad a Psicología." },
            { n: "Consagración a Nurgle", p: 3, subfaction: "Nurgle", summary: "Carro gana +1 a la Resistencia." },
            { n: "Consagración a Tzeentch", p: 3, subfaction: "Tzeentch", summary: "Carro gana TSE(6+)." }
        ]
    },
    "Gigante del Caos": {
        faction: "hbes",
        foc: "Rare",
        points: 160,
        min: 1,
        max: 1,
        equipo: "Garrote (arma de mano).",
        reglasEspeciales: "Cruzar (obstáculos), Mutaciones del Caos, Caídas, Ataques especiales.",
        perfiles: [{ nombre: "Gigante", stats: { M: 6, HA: 3, HP: 2, F: 6, R: 6, H: 6, I: 2, A: "*", L: 10 } }],
    }
};

const mountsDB_hbes = {
    "Carro de tuskgors (Caudillo)": { 
        points: 70,
        faction: "hbes", 
        reglasEspeciales: "Sustituye al tripulante bestigor de un Carro de Tuskgors.",
        perfiles: []
    },
    "Carro de garragors (Caudillo)": { 
        points: 115,
        faction: "hbes", 
        reglasEspeciales: "Sustituye al tripulante bestigor de un Carro de Garragors.",
        perfiles: [] 
    },
    "Carro de tuskgors (Gran Chamán)": {
        points: 70,
        faction: "hbes",
        reglasEspeciales: "Sustituye al tripulante bestigor de un Carro de Tuskgors.",
        perfiles: []
    },
    "Carro de garragors (Gran Chamán)": {
        points: 115,
        faction: "hbes",
        reglasEspeciales: "Sustituye al tripulante bestigor de un Carro de Garragors.",
        perfiles: []
    },
    "Carro de tuskgors (Beligor)": {
        points: 75,
        faction: "hbes",
        reglasEspeciales: "Sustituye al tripulante bestigor de un Carro de Tuskgors.",
        perfiles: []
    },
    "Carro de garragors (Beligor)": {
        points: 120,
        faction: "hbes",
        reglasEspeciales: "Sustituye al tripulante bestigor de un Carro de Garragors.",
        perfiles: []
    },
    "Carro de tuskgors (Chamán)": {
        points: 75,
        faction: "hbes",
        reglasEspeciales: "Sustituye al tripulante bestigor de un Carro de Tuskgors.",
        perfiles: []
    },
    "Carro de garragors (Chamán)": {
        points: 120,
        faction: "hbes",
        reglasEspeciales: "Sustituye al tripulante bestigor de un Carro de Garragors.",
        perfiles: []
    }
};

const armySkillsDB_hbes = {
    "Ungido del Caos": { points: 50, faction: "hbes", type: "Recompensa", summary: "Gana Tozudez." },
    "Coraza Demoniaca": { points: 35, faction: "hbes", type: "Recompensa", summary: "Solo Bestia Ungida. TSA(3+), no penaliza hechizos." },
    "Sudor fangoso": { points: 25, faction: "hbes", type: "Recompensa", summary: "Todos los ataques C/C contra el portador tienen -1 a impactar." },
    "Corpulencia del Caos": { points: 25, faction: "hbes", type: "Recompensa", summary: "Gana +1H y -1I." },
    "Expectoración demoníaca": { points: 25, faction: "hbes", type: "Recompensa", summary: "Arma de aliento F3, Ataques flamígeros." },
    "Metabolismo mutante": { points: 25, faction: "hbes", type: "Recompensa", summary: "Gana Regeneración (5+), o mejora en +1 la que ya tenga." },
    "Don de Morrslieb": { points: 25, faction: "hbes", type: "Recompensa", summary: "Gana Resistencia mágica (2)." },
    "Poderío Salvaje": { points: 25, faction: "hbes", type: "Recompensa", subfaction: "Khorne", summary: "Solo Khorne. Gana Furia Asesina y Carga Devastadora." },
    "Almizcle soporífero": { points: 25, faction: "hbes", type: "Recompensa", subfaction: "Slaanesh", summary: "Solo Slaanesh. Enemigos en contacto reducen HA e I a la mitad." },
    "Putrefacción de Nurgle": { points: 25, faction: "hbes", type: "Recompensa", subfaction: "Nurgle", summary: "Solo Nurgle. Miniaturas en contacto (amigas/enemigas) sin marca de Nurgle sufren herida a 6s." },
    "Destino de Tzeentch": { points: 25, faction: "hbes", type: "Recompensa", subfaction: "Tzeentch", summary: "Solo hechiceros de Tzeentch. Ignora la primera Disfunción mágica." },
    "Bebedor de Sangre": { points: 20, faction: "hbes", type: "Recompensa", subfaction: "Khorne", summary: "Solo Khorne. Por cada herida causada, a 5+ recupera una herida perdida." },
    "Cola de escorpión": { points: 20, faction: "hbes", type: "Recompensa", summary: "Gana un ataque adicional F5 con Ataques envenenados." },
    "Carcasa decadente": { points: 20, faction: "hbes", type: "Recompensa", subfaction: "Nurgle", summary: "Solo Nurgle. Inmune a veneno y los 5s para herir son ataques envenenados." },
    "Tumor inteligente": { points: 15, faction: "hbes", type: "Recompensa", summary: "Solo chamanes. Conoce un hechizo adicional." },
    "Reflejos sobrenaturales": { points: 15, faction: "hbes", type: "Recompensa", subfaction: "Slaanesh", summary: "Solo Slaanesh. Aumenta su Iniciativa a 10." },
    "Sanguijuela Arcana": { points: 15, faction: "hbes", type: "Recompensa", subfaction: "Tzeentch", summary: "Solo Tzeentch. Por cada herida causada, a 5+ añade un dado de energía o dispersión." },
    "Astas descomunales": { points: 10, faction: "hbes", type: "Recompensa", summary: "Gana Impactos por carga (1) o mejora a (1D3) si ya la tenía." },
    "Apéndice adicional": { points: 10, faction: "hbes", type: "Recompensa", summary: "Gana +1A con su Fuerza básica." },
    "Mirada disforme": { points: 10, faction: "hbes", type: "Recompensa", summary: "Ataque a distancia 12\" F4, ataques mágicos." },
    "Garras destripadoras": { points: 10, faction: "hbes", type: "Recompensa", summary: "Gana +1F y Poder de penetración. No puede usar armas ni escudos." },
    "Exudar veneno": { points: 10, faction: "hbes", type: "Recompensa", summary: "Gana Ataques envenenados." },
    "Sentir de la Manada": { points: 10, faction: "hbes", type: "Recompensa", summary: "Solo infantería. Puede desplegarse en una unidad con Emboscada." },
    "Piel de hierro": { points: 5, faction: "hbes", type: "Recompensa", summary: "Gana Piel escamosa (6+) o mejora en +1 su salvación por armadura." },
    "Sangre venenosa": { points: 5, faction: "hbes", type: "Recompensa", summary: "Cuando sufra una herida C/C, el causante sufre un impacto de F4." },
    "Apariencia horripilante": { points: 5, faction: "hbes", type: "Recompensa", summary: "Causa Miedo." },
    "Sentidos amplificados": { points: 5, faction: "hbes", type: "Recompensa", summary: "Gana +2 a la Iniciativa." },
    "Mandíbula distensible": { points: 5, faction: "hbes", type: "Recompensa", summary: "Puede sustituir todos sus ataques por uno con +1F y Golpe letal." },
    "Branquias": { points: 5, faction: "hbes", type: "Recompensa", summary: "Gana Cruzar ríos y Cruzar pantanos." },
    "Mente enajenada": { points: 5, faction: "hbes", type: "Recompensa", summary: "Gana Estupidez y Furia asesina." }
};

const magicItemsDB_hbes = {
    "Arma Mágica": {
        "Gran Colmillo": { points: 50, faction: "hbes", relic: true, summary: "Arma a dos manos. Repite para impactar y herir en C/C." },
        "Hachas de Khorgor": { points: 50, faction: "hbes", relic: false, summary: "Armas emparejadas. +1F y repite para impactar fallidas en C/C." },
        "Mazo Negro": { points: 45, faction: "hbes", relic: false, summary: "Arma de mano. +2F y Furia asesina (no la pierde)." },
        "Martillo Rompehuesos": { points: 45, faction: "hbes", relic: false, summary: "Arma a dos manos. Heridas múltiples (1D3)." },
        "Hacha de la Masacre": { points: 40, faction: "hbes", relic: false, summary: "Arma a dos manos. Por cada herida causada, a 4+ recupera una herida." },
        "Lanza de Caza": { points: 35, faction: "hbes", relic: false, summary: "Lanza. Poder de penetración C/C. Proyectil 18\", Disparo rápido, Arrojadiza, Disparo múltiple (2), F del usuario, Poder de penetración." },
        "Mayal de Bronce": { points: 20, faction: "hbes", relic: false, summary: "Mayal. Al inicio del combate, una miniatura en contacto sufre un impacto automático de F5." },
        "Cimitarra de Skultar": { points: 15, faction: "hbes", relic: false, summary: "Arma de mano. Poder de penetración y Golpe maestro (6s para herir niegan TSA)." },
        "Cayado de la Manada": { points: 15, faction: "hbes", relic: false, summary: "Sólo hechiceros. Arma a dos manos. Guarda un dado de energía o dispersión para la siguiente fase." }
    },
    "Armadura Mágica": {
        "Mellaespadas": { points: 50, faction: "hbes", relic: true, summary: "Armadura pesada. Armas mágicas se consideran mundanas. Si salva una herida de un arma mágica, ésta se destruye." },
        "Armadura de piel de troll": { points: 30, faction: "hbes", relic: false, summary: "Armadura ligera. Otorga Regeneración (5+)." },
        "Pellejo del Campeón": { points: 20, faction: "hbes", relic: false, summary: "Proporciona Piel escamosa de 4+ y Resistencia mágica (1)." },
        "La piel de Sharrgu": { points: 15, faction: "hbes", relic: false, summary: "Armadura pesada. +2 a la TSA contra proyectiles." },
        "Armadura del Caos": { points: 10, faction: "hbes", relic: false, summary: "TSA de 4+. Un hechicero puede llevarla." }
    },
    "Talismán": {
        "Runa de la Bestia Verdadera": { points: 30, faction: "hbes", relic: true, summary: "Solo puede ser impactado en C/C por Bestias, Monstruos, etc., con 6s." },
        "Corona de cuernos": { points: 35, faction: "hbes", relic: false, summary: "TSE de 5+. Unidades de hombres bestia a 12\" tienen +1L para reagruparse." },
        "Ojo de la Noche": { points: 30, faction: "hbes", relic: false, summary: "Sólo hechiceros. Otorga Etéreo." },
        "Piedra del Resentimiento": { points: 25, faction: "hbes", relic: false, summary: "Cada vez que supere una salvación en C/C, causa un impacto automático F5." }
    },
    "Artefacto Arcano": {
        "Cáliz de Plaga": { points: 50, faction: "hbes", relic: false, summary: "Al inicio de la fase de magia, puede reducir en 1D3 la reserva de dados de ambos jugadores." },
        "Familiar del Caos": { points: 50, faction: "hbes", relic: false, summary: "Genera un dado adicional de energía y dispersión." },
        "Báculo de Darkoth": { points: 35, faction: "hbes", relic: false, summary: "Conoce un hechizo adicional y tiene +1 a lanzar sus hechizos." },
        "Cráneo de Rarkos": { points: 35, faction: "hbes", relic: false, summary: "Portahechizos (5). Una unidad a 12\" mueve 1D6+2\" hacia adelante (puede cargar)." },
        "Fetiche del árbol brujo": { points: 20, faction: "hbes", relic: false, summary: "Una vez por fase, puede repetir un único dado de Energía al lanzar un hechizo." }
    },
    "Objeto Hechizado": {
        "Corazón Oscuro": { points: 35, faction: "hbes", relic: false, summary: "El portador y su unidad obtienen Furia asesina y no la pierden." },
        "Cuerno de la Gran Cacería": { points: 30, faction: "hbes", relic: false, summary: "El portador y su unidad pueden repetir todos los chequeos de Liderazgo." },
        "Las herraduras de Hrufgor": { points: 25, faction: "hbes", relic: false, summary: "Portador y su unidad +1M. Saqueador Centigor tira 2D6 en tabla de Borrachos y elige." },
        "Amuleto de piedra de disformidad": { points: 5, faction: "hbes", relic: false, summary: "Un solo uso. Repite una tirada." }
    },
    "Estandarte Mágico": {
        "Estandarte de la Bestia": { points: 50, faction: "hbes", relic: true, summary: "Portador y su unidad +1F e Impactos por carga(1)." },
        "Tótem Herrumbroso": { points: 45, faction: "hbes", relic: false, summary: "Unidades enemigas a 8\" -1 a sus TSA." },
        "Totem de la manada": { points: 40, faction: "hbes", relic: false, summary: "Portador y su unidad inmunes a psicología. Aliados a 6\" obtienen Valentía Épica con dobles o 1s en chequeos de desmoralización." },
        "Pabellón Virulento": { points: 25, faction: "hbes", relic: false, summary: "La unidad gana Regeneración (6+) o +1 si ya tenía (max 4+)." },
        "Tótem de Piedra Verde": { points: 25, faction: "hbes", relic: false, summary: "Portador y su unidad obtienen Ataques envenenados." },
        "Estandarte de la Perdición Humana": { points: 25, faction: "hbes", relic: false, summary: "Humanos a 8\" tienen -1L." },
        "Tótem de rabia y odio": { points: 25, faction: "hbes", relic: false, summary: "Solo Gors o Manadas. Obtienen la regla Odio." },
        "Estandarte de la cacería": { points: 20, faction: "hbes", relic: false, summary: "La unidad puede repetir la tirada para entrar por Emboscada." },
        "Estandarte de los Cuernos": { points: 15, faction: "hbes", relic: false, summary: "Sustituyen Astado por Impactos por Carga y ganan Carga devastadora." },
        "Pabellón Encantado": { points: 10, faction: "hbes", relic: false, summary: "La unidad obtiene Ataques mágicos." }
    }
};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Hombres Bestia",
    FACTION_ID: "hbes",
    armySkillsLabel: "Recompensas de las Bestias",
    FOC_CONFIG: { 
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_hbes,
    mountsDB: mountsDB_hbes,
    magicItemsDB: magicItemsDB_hbes,
    armySkillsDB: armySkillsDB_hbes,
    specialProfilesDB: {},
};
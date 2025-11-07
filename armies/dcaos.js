// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: DEMONIOS DEL CAOS (CORRECTED) ---
// ===================================================================================
// Last Updated: 2025-10-04 - v4.0 Creation, rebuilt with painstaking detail from the army book.

// ===================================================================================
// --- IN dcaos.js ---
// REPLACE the entire "regalosDemoniacosDB" constant with this corrected version.
// ===================================================================================
const regalosDemoniacosDB = {
    // Regalos Mayores
    "Señor de las Legiones Demoníacas": { points: 50, type: "Regalo Mayor", subfaction: "Absoluto", summary: "Solo General Príncipe Demonio. Miniaturas a 18\" con regla Demonio ganan ¡Ni un paso atrás!. Unidades a 8\" ganan Impasible." },
    "Mago Disforme": { points: 50, type: "Regalo Mayor", subfaction: "Absoluto", summary: "Solo hechiceros. +1 a lanzar y dispersar." },
    "Manto del Caos": { points: 50, type: "Regalo Mayor", subfaction: "Absoluto", summary: "Impactos de F>5 se consideran F5." },
    "Tamaño Descomunal": { points: 50, type: "Regalo Mayor", subfaction: "Absoluto", summary: "Solo infantería. +2H, -1I. Se considera Infantería Monstruosa. No puede tener Alas." },
    "Hacha del Pánico": { points: 50, type: "Regalo Mayor", subfaction: "Absoluto", summary: "+1F, niega TSE (excepto Esquiva)." },
    "Aura de energía Impía": { points: 50, type: "Regalo Mayor", subfaction: "Absoluto", summary: "Aura demoníaca mejora a 4+ y puede usarse contra ataques mágicos." },
    "Ira de Khorne": { points: 50, type: "Regalo Mayor", subfaction: "Khorne", summary: "A 4+, dispersa hechizo a 12\" y lanzador sufre 1H sin TSA." },
    "Poderío Infernal": { points: 50, type: "Regalo Mayor", subfaction: "Khorne", summary: "F y R +1." },
    "Collar de Khorne": { points: 50, type: "Regalo Mayor", subfaction: "Khorne", summary: "Resistencia mágica (3), aura demoníaca funciona contra ataques mágicos." },
    "Superioridad Marcial": { points: 50, type: "Regalo Mayor", subfaction: "Khorne", summary: "-1 a que le impacten en CC, repite para impactar fallidas en CC." },
    "Brazos Adicionales": { points: 50, type: "Regalo Mayor", subfaction: "Slaanesh", summary: "+2HA, +2A, +2I." },
    "Agilidad sobrenatural": { points: 50, type: "Regalo Mayor", subfaction: "Slaanesh", summary: "Esquiva (4+)." },
    "Pinzas descomunales": { points: 50, type: "Regalo Mayor", subfaction: "Slaanesh", summary: "+1F y +1 para impactar en CC." },
    "Indiferencia Sádica": { points: 50, type: "Regalo Mayor", subfaction: "Slaanesh", summary: "El Demonio y su unidad ganan Indesmoralizable (sustituye Inestabilidad)." },
    "Ladrón de Esencia Vital": { points: 50, type: "Regalo Mayor", subfaction: "Slaanesh", summary: "Por cada herida causada en CC, a 5+ recupera 1H." },
    "Ansias de Poder": { points: 50, type: "Regalo Mayor", subfaction: "Slaanesh", summary: "Solo hechiceros. +1 a lanzar y dispersar." },
    "Corpulento": { points: 50, type: "Regalo Mayor", subfaction: "Nurgle", summary: "+1R." },
    "Vigor de Nurgle (Mayor)": { points: 50, type: "Regalo Mayor", subfaction: "Nurgle", summary: "Regeneración (4+)." },
    "Abotargamiento Mórbido": { points: 50, type: "Regalo Mayor", subfaction: "Nurgle", summary: "Inmune a Heridas Múltiples." },
    "Flagelo Pestilente": { points: 50, type: "Regalo Mayor", subfaction: "Nurgle", summary: "+2F y Heridas Múltiples (2) en CC." },
    "Corrupción Arcana": { points: 50, type: "Regalo Mayor", subfaction: "Nurgle", summary: "Solo hechiceros. +1 a lanzar y dispersar." },
    "Fortuna de Tzeentch": { points: 50, type: "Regalo Mayor", subfaction: "Tzeentch", summary: "Repite 1D6 por fase (magia, disparo, combate)." },
    "Robar Poder": { points: 50, type: "Regalo Mayor", subfaction: "Tzeentch", summary: "1/batalla, dispersa auto. A 4+ roba el hechizo y el enemigo no puede usarlo más." },
    "Pozo de poder": { points: 50, type: "Regalo Mayor", subfaction: "Tzeentch", summary: "Solo Señor de la Transformación o Príncipe Demonio. +1 dado de energía al lanzar hechizos." },
    "Cetro de la Mutación": { points: 50, type: "Regalo Mayor", subfaction: "Tzeentch", summary: "+1F. Por cada baja causada, a 6+ crea un Engendro del Caos a 6\"." },
    // Regalos Menores
    "Espada Negra": { points: 25, type: "Regalo Menor", subfaction: "Absoluto", summary: "Repite para impactar fallidas en CC, Poder de Penetración." },
    "Mirada perturbadora": { points: 25, type: "Regalo Menor", subfaction: "Absoluto", summary: "Chequeos de Miedo causados -1L. Doble PU para Miedo." },
    "Extremidad adicional (Absoluto)": { points: 25, type: "Regalo Menor",subfaction: "Absoluto", summary: "+1A con +1F." },
    "Furia del Caos": { points: 25, type: "Regalo Menor", subfaction: "Absoluto", summary: "Unidad gana Carga Devastadora." },
    "Descarga Disforme": { points: 25, type: "Regalo Menor", subfaction: "Absoluto", summary: "Ataque de disparo 12\", F5, mágico, flamígero, francotirador. Impacta a 3+." },
    "Esencia Maldita": { points: 25, type: "Regalo Menor", subfaction: "Absoluto", summary: "Por cada impacto sufrido en CC, atacante sufre impacto F5 mágico." },
    "Armadura del Caos (Regalo)": { points: 25, type: "Regalo Menor",subfaction: "Absoluto", summary: "TSA de 1+." },
    "Amo de la Oscuridad": { points: 25, type: "Regalo Menor",subfaction: "Absoluto", summary: "Solo hechiceros. Señor del Conocimiento (Magia Oscura), +1 a canalizar." },
    "Mirada Infernal": { points: 25, type: "Regalo Menor",subfaction: "Absoluto", summary: "Portahechizos(4). Proyectil mágico 18\", 1D6 impactos F6 (Rayos)." },
    "Esencia Eterna": { points: 25, type: "Regalo Menor",subfaction: "Absoluto", summary: "Aura demoníaca funciona contra ataques mágicos." },
    "Viento Disforme": { points: 25, type: "Regalo Menor",subfaction: "Absoluto", summary: "1/batalla, dispersa auto un hechizo." },
    "Descuartizador": { points: 25, type: "Regalo Menor", subfaction: "Khorne", summary: "Heridas Múltiples (1D3) en CC." },
    "Decapitador": { points: 25, type: "Regalo Menor", subfaction: "Khorne", summary: "+1F y Ataques flamígeros. 6s para impactar generan ataques adicionales." },
    "Gran foco de Khorne": { points: 25, type: "Regalo Menor", subfaction: "Khorne", summary: "Solo Heraldos. Demonios de Khorne a 6\" sufren una baja menos por inestabilidad." },
    "Poder de la Masacre": { points: 25, type: "Regalo Menor", subfaction: "Khorne", summary: "El demonio y su unidad ganan Impasible." },
    "Astado": { points: 25, type: "Regalo Menor", subfaction: "Khorne", summary: "Impactos por carga (1D6)." },
    "Fuerza demoníaca (Khorne)": { points: 25, type: "Regalo Menor", subfaction: "Khorne", summary: "+2F." },
    "Bramido infernal": { points: 25, type: "Regalo Menor", subfaction: "Khorne", summary: "Arma de aliento F4, flamígero." },
    "Toque de Khorne": { points: 25, type: "Regalo Menor", subfaction: "Khorne", summary: "Golpe Letal y repite 1s para herir." },
    "Cuerpo acorazado": { points: 25, type: "Regalo Menor", subfaction: "Khorne", summary: "TSA mejora a 1+." },
    "Sangre de Khorne": { points: 25, type: "Regalo Menor", subfaction: "Khorne", summary: "+1HA, +1A." },
    "Látigo Flagelador de Almas": { points: 25, type: "Regalo Menor", subfaction: "Slaanesh", summary: "Cada herida causada cuenta doble para la resolución del combate." },
    "Fusta de la Vejación": { points: 25, type: "Regalo Menor", subfaction: "Slaanesh", summary: "Niega TSA en CC." },
    "Gran foco de Slaanesh": { points: 25, type: "Regalo Menor", subfaction: "Slaanesh", summary: "Solo Heraldos. Demonios de Slaanesh a 6\" sufren una baja menos por inestabilidad." },
    "Rapidez disforme": { points: 25, type: "Regalo Menor", subfaction: "Slaanesh", summary: "+3I, +2M y Veloz." },
    "Celeridad de Slaanesh": { points: 25, type: "Regalo Menor", subfaction: "Slaanesh", summary: "Repite para impactar fallidas en CC." },
    "Macabra fascinación": { points: 25, type: "Regalo Menor", subfaction: "Slaanesh", summary: "Causa Terror. Enemigos a 6\" -1L (o -2 si ya causaba Terror)." },
    "Extremidad adicional (Slaanesh)": { points: 25, type: "Regalo Menor", subfaction: "Slaanesh", summary: "+1HA, +1A, +1I." },
    "Apariencia Sobrecogedora": { points: 25, type: "Regalo Menor", subfaction: "Slaanesh", summary: "Unidad en contacto debe superar L-1 o HA/I/A a la mitad." },
    "Canto de Sirena": { points: 25, type: "Regalo Menor", subfaction: "Slaanesh", summary: "Enemigos a 8\" no pueden usar el L de personajes." },
    "Señor del Placer": { points: 25, type: "Regalo Menor", subfaction: "Slaanesh", summary: "Solo hechiceros. Señor del Conocimiento (Slaanesh), +1 a canalizar." },
    "Danzar con los vientos": { points: 25, type: "Regalo Menor", subfaction: "Slaanesh", summary: "Puede repetir los 1s al intentar dispersar." },
    "Espada de Plaga": { points: 25, type: "Regalo Menor", subfaction: "Nurgle", summary: "Hiere a 2+. Por cada herida, a 6+ la miniatura es retirada." },
    "Gran foco de Nurgle": { points: 25, type: "Regalo Menor", subfaction: "Nurgle", summary: "Solo Heraldos. Demonios de Nurgle a 6\" sufren una baja menos por inestabilidad." },
    "Torrente de Bilis": { points: 25, type: "Regalo Menor", subfaction: "Nurgle", summary: "Arma de aliento F3, sin TSA." },
    "Vitalidad necrótica": { points: 25, type: "Regalo Menor", subfaction: "Nurgle", summary: "Al inicio de tu turno, recupera 1H." },
    "Rastro legamoso": { points: 25, type: "Regalo Menor", subfaction: "Nurgle", summary: "Enemigos no ganan bonos por flanco/retaguardia/filas." },
    "Sangre Emponzoñada": { points: 25, type: "Regalo Menor", subfaction: "Nurgle", summary: "Al ser herido en CC, atacante sufre impacto F=R del demonio." },
    "Infestación de Nurgletes": { points: 25, type: "Regalo Menor", subfaction: "Nurgle", summary: "A 4+ al inicio del turno, crea una peana de Nurgletes a 6\"." },
    "Padre de la Plaga": { points: 25, type: "Regalo Menor", subfaction: "Nurgle", summary: "Solo hechiceros. Señor del Conocimiento (Nurgle), +1 a canalizar." },
    "Sabiduría Milenaria": { points: 25, type: "Regalo Menor", subfaction: "Tzeentch", summary: "Señor del Conocimiento (Tzeentch, Magia Oscura o Fuego)." },
    "Bastón de la Calcinación": { points: 25, type: "Regalo Menor", subfaction: "Tzeentch", summary: "Arma de aliento F4 flamígera. Por cada herida, a 4+ ganas un dado de energía/dispersión." },
    "Gran foco de Tzeentch": { points: 25, type: "Regalo Menor", subfaction: "Tzeentch", summary: "Solo Heraldos. Demonios de Tzeentch a 6\" sufren una baja menos por inestabilidad." },
    "Aureola Ignea": { points: 25, type: "Regalo Menor", subfaction: "Tzeentch", summary: "Enemigos en contacto sufren impacto F4 flamígero. Demonios a 12\" +2 a canalizar." },
    "Maestro de la mutación": { points: 25, type: "Regalo Menor", subfaction: "Tzeentch", summary: "Por cada baja, puedes añadir un Horror a una unidad a 8\"." },
    "Conocimientos prohibidos": { points: 25, type: "Regalo Menor", subfaction: "Tzeentch", summary: "Conoce 1 hechizo adicional y +1 a lanzar." },
    "Maestría de lo arcano": { points: 25, type: "Regalo Menor", subfaction: "Tzeentch", summary: "Repite tiradas en tablas de disfunción. Almacena 1 dado de energía/dispersión." },
    "Llamas de Tzeentch": { points: 25, type: "Regalo Menor", subfaction: "Tzeentch", summary: "Ataque de disparo 24\", F5, Disparos Múltiples (1D3+1), Disparo Rápido, Arrojadiza, flamígero, mágico." },
    "Bendecido por el Arquitecto del Destino": { points: 25, type: "Regalo Menor", subfaction: "Tzeentch", summary: "+1 a Aura demoníaca, +1 a canalizar." }
};

const iconosDemoniacosDB = {
    // ICONOS MAYORES (Portaestandarte de Batalla)
    "Glorioso Estandarte del Caos": { points: 40, type: "Mayor", subfaction: "Absoluto", summary: "Unidad Tozuda. Portador causa Terror." },
    "Gran Icono del Esplendor Infernal": { points: 50, type: "Mayor", subfaction: "Absoluto", summary: "Demonios a 6\" ganan TSE 5+." },
    "Pabellón del Frenesí Maníaco": { points: 40, type: "Mayor", subfaction: "Khorne", summary: "Demonios de Khorne a 6\" ganan Odio y Golpe Letal, y no pierden Furia Asesina." },
    "Gran Icono del Desenfreno Lascivo": { points: 40, type: "Mayor", subfaction: "Slaanesh", summary: "Enemigos en contacto pierden Tozudo, Impasible, Sangre fría, Odio y Furia Asesina. Portador causa Terror." },
    "Estandarte del Fuego Infernal": { points: 45, type: "Mayor", subfaction: "Tzeentch", summary: "Portahechizos (1D6). Lanza un hechizo aleatorio de una tabla." },
    "Gran Estandarte de la Podredumbre": { points: 45, type: "Mayor", subfaction: "Nurgle", summary: "A 5+, cada baja por At. Envenenado añade un Portador a la unidad. Portador causa Terror." },
    // ICONOS MENORES
    "Tótem de Cráneos": { points: 25, type: "Menor", subfaction: "Khorne", summary: "+1 a la resolución del combate por cada baja por golpe maestro." },
    "Icono del Repudio": { points: 30, type: "Menor", subfaction: "Khorne", summary: "Unidad gana RM(3)." },
    "Icono de Bronce": { points: 15, type: "Menor", subfaction: "Khorne", summary: "+1 a la tirada de Piel Escamosa." },
    "Pabellón del Cambio": { points: 25, type: "Menor", subfaction: "Tzeentch", summary: "Enemigos en contacto sufren un impacto de F3 flamígero y mágico al inicio del combate." },
    "Pabellón Ardiente": { points: 30, type: "Menor", subfaction: "Tzeentch", summary: "Ataques a distancia +6\" alcance." },
    "Símbolo Blasfemo": { points: 10, type: "Menor", subfaction: "Tzeentch", summary: "Miniaturas a 12\" repiten para canalizar." },
    "Pabellón de los danzantes infernales": { points: 30, type: "Menor", subfaction: "Slaanesh", summary: "Unidad +1 a su Esquiva y Veloz." },
    "Estandarte de la Sirena": { points: 25, type: "Menor", subfaction: "Slaanesh", summary: "Enemigos cargados por esta unidad solo pueden Mantener la Posición." },
    "Estandarte de la Perversión": { points: 20, type: "Menor", subfaction: "Slaanesh", summary: "Enemigos en contacto -1L." },
    "Icono de la virulencia eterna": { points: 25, type: "Menor", subfaction: "Nurgle", summary: "Cada herida no salvada por At. Envenenado cuenta como dos para la resolución." },
    "Estandarte del Marchitamiento": { points: 25, type: "Menor", subfaction: "Nurgle", summary: "Unidad repite para herir fallidas." },
    "Campana de la Condenación": { points: 25, type: "Menor", subfaction: "Nurgle", summary: "Solo infantería. A 6+, cada baja por At. Envenenado añade un Portador a la unidad." },
    "Pabellon del Paso del Averno": { points: 25, type: "Menor", subfaction: "Absoluto", summary: "Unidad +1M." },
    "Estandarte del Pavor": { points: 25, type: "Menor", subfaction: "Absoluto", summary: "Dobla la Potencia de Unidad." },
    "Icono Disforme": { points: 20, type: "Menor", subfaction: "Absoluto", summary: "Unidad puede canalizar con +2." },
    "Símbolo Arcano": { points: 15, type: "Menor", subfaction: "Absoluto", summary: "Portahechizos(2D3). El hechizo depende del dios." },
    "Runas Malditas": { points: 15, type: "Menor", subfaction: "Absoluto", summary: "Unidad gana RM(1)." }
};

const unitsDB_dcaos = {
    // === LORDS ===
    "Señor de la Transformación": {
        faction: "dcaos", subfaction: "Tzeentch", foc: "Lord", points: 480,
        min: 1,
        max: 1,
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "Gran Demonio (Tzeentch), Volar, Señor del Conocimiento (Tzeentch o Magia Oscura), Descarga Flamígera, Presencia inspiradora. Hechicero Nivel 4.",
        perfiles: [{ nombre: "Señor de la Transformación", stats: { M: 6, HA: 6, HP: 10, F: 6, R: 6, H: 6, I: 4, A: 5, L: 10 } }],
        maxSkills: { limit: 100, type: 'points' }
    },
    "Gran Inmundicia": {
        faction: "dcaos", subfaction: "Nurgle", foc: "Lord", points: 450,
        min: 1,
        max: 1,
        equipo: "Garras roñosas (Arma de mano envenenada).",
        reglasEspeciales: "Gran Demonio (Nurgle), Nube de Moscas, Presencia inspiradora. Hechicero Nivel 4.",
        perfiles: [{ nombre: "Gran Inmundicia", stats: { M: 6, HA: 5, HP: 4, F: 6, R: 6, H: 8, I: 2, A: 6, L: 10 } }],
        maxSkills: { limit: 100, type: 'points' }
    },
    "Guardián de los Secretos": {
        faction: "dcaos", subfaction: "Slaanesh", foc: "Lord", points: 450,
        min: 1,
        max: 1,
        equipo: "Pinzas (Arma de mano con Poder de penetración).",
        reglasEspeciales: "Gran Demonio (Slaanesh), Veloz, Almizcle Soporífero, Presencia inspiradora, Cruzar (obstáculos). Hechicero Nivel 4.",
        perfiles: [{ nombre: "Guardián de los Secretos", stats: { M: 9, HA: 8, HP: 6, F: 6, R: 6, H: 6, I: 8, A: 6, L: 10 } }],
        maxSkills: { limit: 100, type: 'points' }
    },
    "Devorador de Almas": {
        faction: "dcaos", subfaction: "Khorne", foc: "Lord", points: 400,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Gran Demonio (Khorne), Volar, Piel escamosa (3+), Presencia inspiradora.",
        perfiles: [{ nombre: "Devorador de Almas", stats: { M: 6, HA: 10, HP: 0, F: 7, R: 6, H: 6, I: 5, A: 7, L: 10 } }],
        maxSkills: { limit: 100, type: 'points' }
    },
    "Príncipe Demonio (Demonios)": {
        faction: "dcaos",foc: "Lord", points: 225,
        subfaction: "Absoluto", // The Prince starts as Chaos Undivided by default
        warning: "Si un príncipe Demonio del Caos Absoluto es general ignora animosidad demoniaca",
        min: 1,
        max: 1,
        equipo: "Arma de mano y Armadura del Caos.",
        reglasEspeciales: "Demonio, Presencia inspiradora, Devoción Demoníaca (No puede unirse a unidades. ¡Cuidado Señor! a 4+ si está a 3\" de una unidad de su hueste con su misma marca y no es el objetivo más cercano. Si es del Caos Absoluto, ignora el requisito de marca).",
        perfiles: [{ nombre: "Príncipe Demonio", stats: { M: 6, HA: 8, HP: 3, F: 6, R: 5, H: 5, I: 6, A: 5, L: 9 } }],
        options: [
            { n: "Alas (Volar)", p: 30 },
            { n: "Khorne", p: 30, summary: "Furia Asesina, Rest. Magia (1), Golpe Letal, Piel Escamosa (4+).", exclusiveGroup: 'chaosMark' },
            { n: "Nurgle", p: 15, summary: "Regeneración 6+, Toque de Plaga, Ataques Envenenados.", exclusiveGroup: 'chaosMark' },
            { n: "Tzeentch", p: 15, summary: "Proyectiles and melee Ataques flamígeros, Inmunes a Fuego, Descarga Flamígera proyectiles F4, 12” y Disparo Multiple (1D6), Disparo Rápido, Ataques mágicos y flamígeros", exclusiveGroup: 'chaosMark' },
            { n: "Slaanesh", p: 15, summary: "-1HA al atacarles, puede huir, Poder de Penetración, Almizcle Soporífero.", exclusiveGroup: 'chaosMark' },
            { n: "Absoluto", p: 20, summary: "Coraza Infernal (TSA 2+).", exclusiveGroup: 'chaosMark' },
            { n: "Nivel de Magia 1", p: 25 }, { n: "Nivel de Magia 2", p: 50 }
        ],
        maxSkills: { limit: 100, type: 'points' }
    },
    // === HEROES ===
    "Heraldo de Tzeentch": {
        faction: "dcaos", subfaction: "Tzeentch", foc: "Hero", points: 110,
        min: 1,
        max: 1,
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "Demonio (Tzeentch), Toque del Caos, Descarga Ígnea. Hechicero Nivel 2.",
        perfiles: [{ nombre: "Heraldo de Tzeentch", stats: { M: 4, HA: 4, HP: 4, F: 3, R: 3, H: 2, I: 6, A: 3, L: 9 } }],
        options: [
            { n: "Nivel de Magia 3", p: 25 },
            { n: "Foco Menor de Tzeentch", p: 5, summary: "TSE contra ataques mágicos." },
            { n: "Foco Mayor de Tzeentch", p: 10, summary: "Disparos Múltiples (2), o +1 si ya lo tenía." }
        ],
        mounts: ["Disco de Tzeentch", "Carruaje Flamígero de Tzeentch (tripulante)"],
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 },
        maxSkills: { limit: 50, type: 'points' }
    },
    "Heraldo de Nurgle": {
        faction: "dcaos", subfaction: "Nurgle", foc: "Hero", points: 110,
        min: 1,
        max: 1,
        equipo: "Espada de Plaga (Arma de mano envenenada).",
        reglasEspeciales: "Demonio (Nurgle: Regeneración (6+) y Toque de Plaga).",
        perfiles: [{ nombre: "Heraldo de Nurgle", stats: { M: 4, HA: 4, HP: 0, F: 5, R: 5, H: 3, I: 2, A: 3, L: 9 } }],
        options: [
            { n: "Nivel de Magia 1", p: 25 }, { n: "Nivel de Magia 2", p: 50 },
            { n: "Foco Menor de Nurgle", p: 5, summary: "Regeneración (5+)." },
            { n: "Foco Mayor de Nurgle", p: 10, summary: "ataques del demonio se consideran envenenados con 5 o 6." }
        ],
        mounts: ["Zángano de Plaga", "Carruaje de Plaga de Nurgle (tripulante)", "Palanquín de Nurgle"],
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 },
        maxSkills: { limit: 50, type: 'points' }
    },
    "Heraldo de Slaanesh": {
        faction: "dcaos", subfaction: "Slaanesh", foc: "Hero", points: 85,
        min: 1,
        max: 1,
        equipo: "Pinzas (Arma de mano con Poder de penetración).",
        reglasEspeciales: "Demonio (Slaanesh: -1HA al atacarles y pueden reaccionar huyendo), Esquiva 5+.",
        perfiles: [{ nombre: "Heraldo de Slaanesh", stats: { M: 6, HA: 7, HP: 0, F: 4, R: 4, H: 2, I: 8, A: 4, L: 9 } }],
        options: [
            { n: "Nivel de Magia 1", p: 25 }, { n: "Nivel de Magia 2", p: 50 },
            { n: "Foco Menor de Slaanesh", p: 5, summary: "Odio." },
            { n: "Foco Mayor de Slaanesh", p: 10, summary: "+1A." }
        ],
        mounts: ["Corcel de Slaanesh", "Carro de la demencia de Slaanesh (tripulante)"],
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 },
        maxSkills: { limit: 50, type: 'points' }
    },
    "Heraldo de Khorne": {
        faction: "dcaos", subfaction: "Khorne", foc: "Hero", points: 100,
        min: 1,
        max: 1,
        equipo: "Arma sangrienta (Arma de mano con +1F y Golpe maestro).",
        reglasEspeciales: "Demonio (Khorne: Furia asesina+ Resistencia magica (1)), Piel Escamosa (4+).",
        perfiles: [{ nombre: "Heraldo de Khorne", stats: { M: 4, HA: 7, HP: 0, F: 5, R: 4, H: 2, I: 6, A: 3, L: 9 } }],
        options: [
            { n: "Foco Menor de Khorne", p: 5, summary: "RM(2) y no pierde Furia Asesina." },
            { n: "Foco Mayor de Khorne", p: 10, summary: "Piel Escamosa (2+) y Odio." }
        ],
        mounts: ["Juggernaut de Khorne", "Carruaje de guerra de Khorne (tripulante)", "Trono de Bronce"],
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 },
        maxSkills: { limit: 50, type: 'points' }
    },
    "Heraldo del Caos Absoluto": {
        faction: "dcaos", subfaction: "Absoluto", foc: "Hero", points: 110,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Demonio, Foco del Caos Absoluto (Demonios a 12\" no sufren animosidad; si se une a Furias, ganan Odio al cargar).",
        perfiles: [{ nombre: "Heraldo del Caos Absoluto", stats: { M: 4, HA: 6, HP: 4, F: 5, R: 5, H: 2, I: 6, A: 3, L: 9 } }],
        options: [
            { n: "Alas (Volar)", p: 20 },
            { n: "Coraza Infernal (TSA 3+)", p: 15 },
            { n: "Nivel de Magia 1", p: 25 }, { n: "Nivel de Magia 2", p: 50 }
        ],
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 },
        maxSkills: { limit: 50, type: 'points' }
    },
     "0-1 Piro-Incinerador de Tzeentch": {
        faction: "dcaos", subfaction: "Tzeentch", foc: "Hero", points: 110,
        min: 1,
        max: 1,
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "Demonio (Tzeentch), Descarga ígnea, Escupir llamas, Canalizar.",
        perfiles: [{ nombre: "Piro-Incinerador", stats: { M: 6, HA: 3, HP: 0, F: 4, R: 5, H: 2, I: 4, A: 3, L: 8 } }],
        maxSkills: { limit: 25, type: 'points' }
    },
    
    // === CORE ===
    "Desangradores de Khorne": {
        faction: "dcaos", subfaction: "Khorne", foc: "Core", points: 15, min: 10, max: 30,
        equipo: "Armas sangrientas (Arma de mano con +1F y Golpe maestro).",
        reglasEspeciales: "Demonio (Khorne).",
        perfiles: [{ nombre: "Desangrador", stats: { M: 4, HA: 5, HP: 0, F: 4, R: 4, H: 1, I: 4, A: 1, L: 8 } }],
        command: { 
            c: { n: "Heraldo de la Sangre", p: 6 }, 
            s: { n: "Portaestandarte", p: 6, allowIcon: true }, 
            m: { n: "Músico", p: 6, upgrade: { n: "Cuerno de la Matanza", p: 10, summary: "+1D3\" a la primera carga." } } 
        },
        focos: {
             menor: { p: 1, summary: "Piel escamosa de 5+." },
             mayor: { p: 2, summary: "Odio y no pierde la Furia asesina." }
},
        champSkills: { limit: 25, type: 'points' }
    },
    "Horrores Rosas de Tzeentch": {
        faction: "dcaos", subfaction: "Tzeentch", foc: "Core", points: 13, min: 10, max: 30,
        equipo: "Garras, dientes y tentáculos (Arma de mano).",
        reglasEspeciales: "Demonio (Tzeentch), Toque del Caos, Descarga Ígnea.",
        perfiles: [{ nombre: "Horror de Tzeentch", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 2, L: 8 } }],
        command: { 
            c: { n: "Horror Iridescente", p: 6 }, 
            s: { n: "Portaestandarte", p: 6, allowIcon: true }, 
            m: { n: "Músico", p: 6, upgrade: { n: "Tambor de la Transformación", p: 10, summary: "Guarda 1 dado de energía/dispersión." } } 
        },
        focos: {
              menor: { p: 1, summary: "Aumenta el alcance de Descarga Ignea en 3\" y la TSE funciona vs ataques mágicos." },
              mayor: { p: 2, summary: "Disparos Múltiples (2), o +1 si ya lo tenía." }
},
        champSkills: { limit: 25, type: 'points' }
    },
     "Horrores Azules de Tzeentch": {
        faction: "dcaos", subfaction: "Tzeentch", foc: "Core", points: 6, min: 10, max: 40,
        equipo: "Garras, dientes y tentáculos (Arma de mano).",
        reglasEspeciales: "Demonio (Tzeentch), Toque del Caos, Insignificantes, Proyectar llamas.",
        perfiles: [{ nombre: "Horror Azul", stats: { M: 5, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 6, A: 1, L: 7 } }],
        command: { 
            c: { n: "Terror Azul", p: 6 }, 
            s: { n: "Portaestandarte", p: 6, allowIcon: true }, 
            m: { n: "Músico", p: 6, upgrade: { n: "Instrumento del Fuego", p: 5, summary: "Impacto F4 flamígero en CC." } } 
        },
        // Add to "Horrores Azules de Tzeentch"
        focos: {
             menor: { p: 1, summary: "TSE contra ataques mágicos." },
             mayor: { p: 2, summary: "Disparos Múltiples (2), o +1 si ya lo tenía." }
},
        champSkills: { limit: 25, type: 'points' }
    },
    "Diablillas de Slaanesh": {
        faction: "dcaos", subfaction: "Slaanesh", foc: "Core", points: 12, min: 5, max: 20,
        equipo: "Pinzas (Arma de mano con Poder de penetración).",
        reglasEspeciales: "Demonio (Slaanesh), Hostigador, Esquiva (5+).",
        perfiles: [{ nombre: "Diablilla", stats: { M: 6, HA: 5, HP: 0, F: 3, R: 3, H: 1, I: 5, A: 2, L: 8 } }],
        options: [ 
            { n: "Exploradoras", p: 3 }, { n: "Vanguardia", p: 2 }
        ],
        command: { 
            c: { n: "Alluress", p: 8 }, 
            s: { n: "Portaestandarte", p: 6, allowIcon: true }, 
            m: { n: "Músico", p: 6, upgrade: { n: "Flauta de la Sirena", p: 10, summary: "Enemigo no puede Aguantar y Disparar." }} 
        },
        focos: {
    menor: { p: 1, summary: "Odio." },
    mayor: { p: 2, summary: "+1A." }
},
        champSkills: { limit: 25, type: 'points' }
    },
    "Buscadoras de Placer de Slaanesh": {
        faction: "dcaos", subfaction: "Slaanesh", foc: "Core", points: 26, min: 5, max: 15,
        equipo: "Pinzas (Arma de mano con Poder de penetración).",
        reglasEspeciales: "Demonio (Slaanesh), Caballería Rápida, Esquiva (5+), Ladinas, Ataques envenenados (sólo Corceles).",
        perfiles: [
            { nombre: "Súcubo", stats: { M: 6, HA: 5, HP: 0, F: 4, R: 3, H: 1, I: 5, A: 3, L: 8 } },
            { nombre: "Corcel de Slaanesh", stats: { M: 10, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 5, A: 1, L: 5 } }
        ],
        command: { 
            c: { n: "Buscaalmas", p: 8 }, 
            s: { n: "Portaestandarte", p: 8, allowIcon: true }, 
            m: { n: "Músico", p: 8, upgrade: { n: "Flauta de la Sirena", p: 10, summary: "Enemigo no puede Aguantar y Disparar." } } 
        },
        focos: {
    menor: { p: 1, summary: "Odio." },
    mayor: { p: 2, summary: "+1A." }
},
        champSkills: { limit: 25, type: 'points' }
    },
    "Portadores de Plaga de Nurgle": {
        faction: "dcaos", subfaction: "Nurgle", foc: "Core", points: 13, min: 10, max: 30,
        equipo: "Espadas de plaga (Arma de mano envenenada).",
        reglasEspeciales: "Demonio (Nurgle).",
        perfiles: [{ nombre: "Portador de Plaga", stats: { M: 4, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 2, A: 1, L: 8 } }],
        command: { 
            c: { n: "Portador de la Plaga", p: 6 }, 
            s: { n: "Portaestandarte", p: 6, allowIcon: true }, 
            m: { n: "Músico", p: 6, upgrade: { n: "Gong de la Desesperación", p: 10, summary: "Enemigo repite chequeos de desmoralización superados." } } 
        },
        focos: {
    menor: { p: 1, summary: "Regeneración a 5+." },
    mayor: { p: 2, summary: "Nube de Moscas (-1 para impactarles)." }
},
        champSkills: { limit: 25, type: 'points' }
    },
    "Nurgletes": {
    faction: "dcaos",
    subfaction: "Nurgle",
    foc: "Core",
    points: 25,
    min: 2,
    max: 8,
    warning: "Puedes incluir una unidad de Nurgletes por cada unidad de Portadores de Plaga de tu ejército.",
    equipo: "Garras roñosas (Arma de mano con Ataques envenenados).",
    reglasEspeciales: "Demonio (Nurgle: Regeneración (6+) y Toque de Plaga), Vanguardia, Ataques aleatorios (1D6), Enjambre, Nube de Moscas (los enemigos tendrán un penalizador de -1 para impactarles en combate cuerpo a cuerpo y con proyectiles).",
    perfiles: [{ nombre: "Nurgletes", stats: { M: 4, HA: 2, HP: 2, F: 2, R: 3, H: 4, I: 2, A: "1D6", L: 7 } }]
},
"Demonios de la Oscuridad": {
    faction: "dcaos",
    subfaction: "Absoluto",
    foc: "Core",
    points: 50,
    min: 3,
    max: 6,
    warning: "Solo puedes incluir una unidad de Demonios de la oscuridad por cada personaje del Caos Absoluto de tu ejército.",
    equipo: "Arma de mano.",
    reglasEspeciales: "Demonio, Piel escamosa (6+).",
    perfiles: [
        { nombre: "Demonio de la oscuridad", stats: { M: 6, HA: 4, HP: 0, F: 5, R: 5, H: 3, I: 4, A: 3, L: 8 } },
        { nombre: "Oficial", stats: { M: 6, HA: 4, HP: 0, F: 5, R: 5, H: 3, I: 4, A: 4, L: 8 } }
    ],
    focos: {
    menor: { p: 3, summary: "salvación por armadura de 5+." },
    mayor: { p: 5, summary: "Sangre fría." }
},
    command: { 
        c: { n: "Oficial", p: 8 }, 
        s: { n: "Portaestandarte", p: 8, allowIcon: true }, 
        m: { n: "Músico", p: 8, upgrade: { n: "Cuerno de la oscuridad", p: 10, summary: "Carga Devastadora." } }
    }
},
    // === SPECIAL ===
    "Incineradores de Tzeentch": {
        faction: "dcaos", subfaction: "Tzeentch", foc: "Special", points: 30, min: 3, max: 10,
        equipo: "Garras (Arma de mano).",
        reglasEspeciales: "Demonio (Tzeentch), Descarga ígnea, Escupir llamas.",
        perfiles: [{ nombre: "Incinerador", stats: { M: 6, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 4, A: 2, L: 8 } }]
    },
    "Aulladores de Tzeentch": {
        faction: "dcaos", subfaction: "Tzeentch", foc: "Special", points: 35, min: 3, max: 10,
        equipo: "Dientes (Arma de mano).",
        reglasEspeciales: "Demonio (Tzeentch), Flotar, Ataque Rasante.",
        perfiles: [{ nombre: "Aullador", stats: { M: 1, HA: 4, HP: 0, F: 4, R: 4, H: 2, I: 4, A: 2, L: 8 } }]
    },
    "Bestias de Nurgle": {
        faction: "dcaos", subfaction: "Nurgle", foc: "Special", points: 40, min: 1, max: 5,
        equipo: "Cola y garras (Arma de mano).",
        reglasEspeciales: "Demonio (Nurgle), Regeneración (5+), Rastro de babas.",
        perfiles: [{ nombre: "Bestia de Nurgle", stats: { M: "2D6", HA: 3, HP: 0, F: 4, R: 5, H: 3, I: 2, A: "1D6", L: 8 } }]
    },
    "Mastines de Khorne": {
        faction: "dcaos", subfaction: "Khorne", foc: "Special", points: 25, min: 5, max: 15,
        equipo: "Dientes (Arma de mano).",
        reglasEspeciales: "Demonio (Khorne), RM(2), Piel Escamosa (5+).",
        perfiles: [{ nombre: "Mastín de Khorne", stats: { M: 7, HA: 5, HP: 0, F: 4, R: 4, H: 1, I: 5, A: 2, L: 6 } }]
    },
    "Diablos de Slaanesh": {
        faction: "dcaos", subfaction: "Slaanesh", foc: "Special", points: 45, min: 2, max: 8,
        equipo: "Pinzas (Arma de mano con Poder de penetración).",
        reglasEspeciales: "Demonio (Slaanesh), Veloz, Almizcle Soporífero.",
        perfiles: [{ nombre: "Diablo de Slaanesh", stats: { M: 8, HA: 4, HP: 0, F: 4, R: 4, H: 3, I: 5, A: 3, L: 8 } }]
    },
    // === RARE ===
    "0-1 Aplastadores de Khorne": {
        faction: "dcaos", subfaction: "Khorne", foc: "Rare", points: 85, min: 1, max: 6,
        equipo: "Armas sangrientas (Arma de mano con +1F y Golpe maestro).",
        reglasEspeciales: "Demonio (Khorne), Piel Escamosa (5+, sólo jinetes), Golpe Letal (sólo jinetes), Piel de Bronce (Juggernaut, TSA 2+ total para jinete), Impactos por carga (1, sólo Juggernaut).",
        perfiles: [
            { nombre: "Desangrador", stats: { M: 4, HA: 5, HP: 0, F: 4, R: 4, H: 1, I: 4, A: 2, L: 8 } },
            { nombre: "Juggernaut de Khorne", stats: { M: 7, HA: 4, HP: 0, F: 5, R: 5, H: 2, I: 2, A: 2, L: 6 } }
        ],
        command: { 
            c: { n: "Oficial", p: 12 }, 
            s: { n: "Portaestandarte", p: 12, allowIcon: true }, 
            m: { n: "Músico", p: 12, upgrade: { n: "Cuerno de la Matanza", p: 10, summary: "+1D3\" a la primera carga." } } 
        },
        champSkills: { limit: 25, type: 'points' }
    },
    "0-1 Zumbadores Bubónicos de Nurgle": {
        faction: "dcaos", subfaction: "Nurgle", foc: "Rare", points: 90, min: 1, max: 3,
        equipo: "Espadas de Plaga (Arma de mano envenenada).",
        reglasEspeciales: "Demonio (Nurgle), Flotar, Regeneración (5+), Caparazón quitinoso (Zánganos, Piel escamosa 5+, total TSA 4+ para jinete), Aguijón venenoso (+1F y Heridas Múltiples 1D3 en 1A), Hostigadores, Ataques envenenados (sólo Zánganos).",
        perfiles: [
            { nombre: "Portador de Plaga", stats: { M: 4, HA: 3, HP: 0, F: 4, R: 4, H: 2, I: 2, A: 2, L: 8 } },
            { nombre: "Zángano de Plaga", stats: { M: 6, HA: 2, HP: 0, F: 4, R: 5, H: 1, I: 2, A: 1, L: 6 } }
        ],
        command: { 
            c: { n: "Oficial", p: 12 }, 
            s: { n: "Portaestandarte", p: 12, allowIcon: true }, 
            m: { n: "Músico", p: 12, upgrade: { n: "Gong de la Desesperación", p: 20, summary: "Enemigos en contacto repiten chequeos de desmoralización superados." } } 
        },
        champSkills: { limit: 25, type: 'points' }
    },
    "0-1 Faetón Desollador de Slaanesh": {
        faction: "dcaos", subfaction: "Slaanesh", foc: "Rare", points: 150,
        equipo: "Pinzas (Arma de mano con Poder de penetración), Cuchillas en las ruedas.",
        reglasEspeciales: "Demonio (Slaanesh), TSA 4+, Ataques envenenados (sólo Corceles), Almizcle Soporífero (-1HA e I a enemigos en contacto), Causa 3D3+1 impactos por carga.",
        perfiles: [
            { nombre: "Carro", stats: { M: "-", HA: "-", HP: "-", F: 4, R: 4, H: 5, I: "-", A: "-", L: "-" } },
            { nombre: "Súcubo", stats: { M: "-", HA: 5, HP: 0, F: 4, R: "-", H: "-", I: 5, A: 3, L: 8 } },
            { nombre: "Diablilla (3)", stats: { M: "-", HA: 5, HP: 0, F: 3, R: "-", H: "-", I: 5, A: 2, L: 8 } },
            { nombre: "Corceles de Slaanesh (4)", stats: { M: 10, HA: 3, HP: 0, F: 4, R: "-", H: "-", I: 5, A: 1, L: 5 } }
        ]
    },
    "Carruaje Flamígero de Tzeentch": {
        faction: "dcaos", subfaction: "Tzeentch", foc: "Rare", points: 160,
        equipo: "Garras y tentáculos (Arma de mano), Cuchillas en las ruedas.",
        reglasEspeciales: "Demonio (Tzeentch), TSA 5+, Flotar, Ataque Rasante (1D3 impactos F3 por Aullador), Descarga ígnea (Horrores), Escupir llamas (Piro-Incinerador).",
        perfiles: [
            { nombre: "Carro", stats: { M: "-", HA: "-", HP: "-", F: 4, R: 4, H: 4, I: "-", A: "-", L: "-" } },
            { nombre: "Piro-Incinerador", stats: { M: "-", HA: 3, HP: 0, F: 4, R: "-", H: "-", I: 4, A: 3, L: 8 } },
            { nombre: "Horror de Tzeentch", stats: { M: "-", HA: 3, HP: 3, F: 3, R: "-", H: "-", I: 4, A: 2, L: 8 } },
            { nombre: "Aulladores de Tzeentch (2)", stats: { M: 1, HA: 4, HP: 0, F: 4, R: "-", H: "-", I: 4, A: 2, L: 6 } }
        ],
        options: [
            { n: "horror adicional", p: 5 },
            { n: "horror adicional", p: 5 }
        ]
    },
    "Engendro Monstruoso del Caos": {
        faction: "dcaos", subfaction: "Absoluto", foc: "Rare", points: 250,
        equipo: "Incontables apéndices mutantes (arma de mano).",
        reglasEspeciales: "Indesmoralizable, Movimiento aleatorio (3D6), Ataques aleatorios (2D6+2), Aura demoníaca (5+), Vástago del Caos (Atributos y mutación aleatorios).",
        perfiles: [{ nombre: "Engendro Monstruoso", stats: { M: "3D6", HA: "1D3+2", HP: 0, F: "2D3+2", R: "2D3+2", H: "2D3+2", I: "1D6", A: "2D6+2", L: 10 } }],
        options: [
            { n: "Marca de Khorne", p: 15, summary: "Odio (todos), RM(1)." },
            { n: "Marca de Nurgle", p: 20, summary: "Toque de Plaga." },
            { n: "Marca de Tzeentch", p: 25, summary: "+1 a la TSE, Ataques Flamígeros." },
            { n: "Marca de Slaanesh", p: 15, summary: "Poder de Penetración, +1I." },
            { n: "Marca del Caos Absoluto", p: 15, summary: "TSA 5+." }
        ]
    }
};

const mountsDB_dcaos = {
    "Disco de Tzeentch": { faction: "dcaos", subfaction: "Tzeentch", points: 20, perfiles: [{ nombre: "Disco de Tzeentch", stats: { M: 1, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 5, A: 2, L: 6 } }], reglasEspeciales: "Demonio (Tzeentch), Volar. Cambia a Caballería Monstruosa." },
    "Carruaje Flamígero de Tzeentch (tripulante)": { faction: "dcaos", subfaction: "Tzeentch", points: 70, perfiles: [], reglasEspeciales: "Sustituye al Piro-Incinerador de la dotación." },
    "Corcel de Slaanesh": { faction: "dcaos", subfaction: "Slaanesh", points: 15, perfiles: [{ nombre: "Corcel de Slaanesh", stats: { M: 10, HA: 3, HP: 0, F: 3, R: 3, H: 1, I: 5, A: 1, L: 5 } }], reglasEspeciales: "Demonio (Slaanesh), Veloz. Cambia a Caballería." },
    "Carro de la demencia de Slaanesh (tripulante)": { faction: "dcaos", subfaction: "Slaanesh", points: 85, perfiles: [], reglasEspeciales: "Sustituye a una de las Diablillas de la dotación." },
    "Palanquín de Nurgle": { faction: "dcaos", subfaction: "Nurgle", points: 50, perfiles: [], reglasEspeciales: "Infantería. Otorga +2H y Regeneración (4+)." },
    "Zángano de Plaga": { faction: "dcaos", subfaction: "Nurgle", points: 45, perfiles: [], reglasEspeciales: "Bestia Monstruosa. Cambia a Caballería Monstruosa. Volar." },
    "Carruaje de Plaga de Nurgle (tripulante)": { faction: "dcaos", subfaction: "Nurgle", points: 140, perfiles: [], reglasEspeciales: "Sustituye a uno de los Portadores de la dotación." },
    "Juggernaut de Khorne": { faction: "dcaos", subfaction: "Khorne", points: 50, perfiles: [{ nombre: "Juggernaut de Khorne", stats: { M: 7, HA: 4, HP: 0, F: 5, R: 5, H: 2, I: 2, A: 2, L: 6 } }], reglasEspeciales: "Demonio (Khorne), Piel de Bronce (TSA 3+). Cambia a Caballería Monstruosa." },
    "Carruaje de guerra de Khorne (tripulante)": { faction: "dcaos", subfaction: "Khorne", points: 130, perfiles: [], reglasEspeciales: "Sustituye a uno de los Desangradores de la dotación." },
    "Trono de Bronce": { faction: "dcaos", subfaction: "Khorne", points: 80, perfiles: [], reglasEspeciales: "El Heraldo se convierte en la dotación del Trono de Sangre." }
};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Demonios del Caos",
    FACTION_ID: "dcaos",
    armySkillsLabel: "Regalos Demoníacos",
    FOC_CONFIG: {
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_dcaos,
    mountsDB: mountsDB_dcaos,
    regalosDemoniacosDB: regalosDemoniacosDB,
    iconosDemoniacosDB: iconosDemoniacosDB,
    magicItemsDB: {}, // Daemons don't use common magic items
    armySkillsDB: regalosDemoniacosDB, // Use regalos as the skills
    specialProfilesDB: {},
};


// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: GUERREROS DEL CAOS (CORRECTED) ---
// ===================================================================================
// Last Updated: 2025-10-04 - Added summaries to Marks and Totems.

const armySkillsDB_gcaos = {
    "Manto del Caos": { points: 55, faction: "gcaos", type: "Recompensa del Caos", summary: "Impactos de F>5 se consideran F5." },
    "Esplendor diabólico": { points: 35, faction: "gcaos", type: "Recompensa del Caos", summary: "Enemigos a 6\" o menos tienen -1 Liderazgo." },
    "Muchos brazos": { points: 25, faction: "gcaos", type: "Recompensa del Caos", summary: "+1 Ataque." },
    "Aliento de fuego": { points: 25, faction: "gcaos", type: "Recompensa del Caos", summary: "Arma de aliento F3 (Ataques sólo flamígeros)." },
    "Regeneración": { points: 25, faction: "gcaos", type: "Recompensa del Caos", summary: "Regeneración (5+), o +1 si ya la tenía." },
    "Apariencia horripilante": { points: 20, faction: "gcaos", type: "Recompensa del Caos", summary: "Causa Terror." },
    "Cola maza": { points: 20, faction: "gcaos", type: "Recompensa del Caos", summary: "+1A con HA, I y F5 propias." },
    "Esencia demoníaca": { points: 20, faction: "gcaos", type: "Recompensa del Caos", summary: "Aura demoníaca (5+), o +1 si ya la tenía." },
    "Chillido infernal": { points: 20, faction: "gcaos", type: "Recompensa del Caos", summary: "Ataque de disparo 8\", 2D6 impactos F1 automáticos sin TSA." },
    "Hemónculo": { points: 15, faction: "gcaos", type: "Recompensa del Caos", summary: "Sólo hechiceros. 1/fase, +1D3 a la tirada para lanzar. Chequea Estupidez el turno siguiente." },
    "Piel de hierro": { points: 10, faction: "gcaos", type: "Recompensa del Caos", summary: "Piel escamosa (5+)." },
    "Grandes cuernos": { points: 5, faction: "gcaos", type: "Recompensa del Caos", summary: "Impactos por carga (1)." },
    "Collar de Khorne": { points: 35, faction: "gcaos", type: "Recompensa de Khorne", subfaction: "Khorne", summary: "RM(3) y TSE 6+." },
    "Furia de batalla de Khorne": { points: 30, faction: "gcaos", type: "Recompensa de Khorne", subfaction: "Khorne", summary: "+1A y Carga devastadora." },
    "Alabanza de Khorne": { points: 25, faction: "gcaos", type: "Recompensa de Khorne", subfaction: "Khorne", summary: "Repite TSA fallidas." },
    "Hacha de Khorne (Recompensa)": { points: 20, faction: "gcaos", type: "Recompensa de Khorne", subfaction: "Khorne", summary: "Golpe letal. No puede usar otras armas." },
    "Rapidez de Slaanesh": { points: 15, faction: "gcaos", type: "Recompensa de Slaanesh", subfaction: "Slaanesh", summary: "Duplica Iniciativa (máx 10)." },
    "Almizcle soporífero": { points: 25, faction: "gcaos", type: "Recompensa de Slaanesh", subfaction: "Slaanesh", summary: "Enemigos en contacto tienen HA e I a la mitad." },
    "Mirada de Slaanesh": { points: 15, faction: "gcaos", type: "Recompensa de Slaanesh", subfaction: "Slaanesh", summary: "1 enemigo en contacto: -1A (mín 1)." },
    "Fascinación de Slaanesh": { points: 20, faction: "gcaos", type: "Recompensa de Slaanesh", subfaction: "Slaanesh", summary: "Oponentes en combate -1 para impactar." },
    "Tamaño descomunal": { points: 35, faction: "gcaos", type: "Recompensa de Nurgle", subfaction: "Nurgle", summary: "+1R, -1I." },
    "Vigor de Nurgle": { points: 30, faction: "gcaos", type: "Recompensa de Nurgle", subfaction: "Nurgle", summary: "+1H." },
    "Putrefacción de Nurgle": { points: 25, faction: "gcaos", type: "Recompensa de Nurgle", subfaction: "Nurgle", summary: "Al inicio del combate, miniaturas en contacto sin Marca de Nurgle sufrirán una herida con 6 en 1D6 (sin TSA)." },
    "Vómito de corrupción": { points: 25, faction: "gcaos", type: "Recompensa de Nurgle", subfaction: "Nurgle", summary: "Arma de aliento F2 sin TSA." },
    "Fortuna de Tzeentch": { points: 35, faction: "gcaos", type: "Recompensa de Tzeentch", subfaction: "Tzeentch", summary: "1/turno, repetir 1D6 (excepto L)." },
    "Destino de Tzeentch": { points: 25, faction: "gcaos", type: "Recompensa de Tzeentch", subfaction: "Tzeentch", summary: "Sólo hechiceros. Ignora la primera Disfunción mágica." },
    "Voluntad de Tzeentch": { points: 25, faction: "gcaos", type: "Recompensa de Tzeentch", subfaction: "Tzeentch", summary: "Genera 1 dado de energía adicional por fase para personajes de Tzeentch." },
    "Maestro de la hechicería": { points: 15, faction: "gcaos", type: "Recompensa de Tzeentch", subfaction: "Tzeentch", summary: "Sólo hechiceros. Conoce 1 hechizo adicional." }
};

const magicItemsDB_gcaos = {
    "Arma Mágica": {
        "Arma Demonio": { points: 60, faction: "gcaos", relic: true, summary: "Sólo Príncipes Demonio. +1F, +1D3A, Poder Penetración. 1s para impactar hieren al portador." },
        "Segadora de Almas": { points: 45, faction: "gcaos", relic: true, subfaction: "Nurgle", summary: "Sólo Nurgle. Arma a 2 manos. Odio y Golpe Letal (5+)." },
        "Hachas Berserker": { points: 40, faction: "gcaos", relic: true, subfaction: "Khorne", summary: "Sólo Khorne. Armas emparejadas. Reemplaza A por 2D3+3." },
        "Espada de la Llama Infernal": { points: 50, faction: "gcaos", relic: false, summary: "Ataques flamígeros y niega TSA." },
        "Espada Rúnica del Caos": { points: 45, faction: "gcaos", relic: false, summary: "+1 HA, F, I y A." },
        "Espada de la Transformación": { points: 40, faction: "gcaos", relic: false, subfaction: "Tzeentch", summary: "Sólo Tzeentch. +2 canalizar, +1F, Poder Penetración, Heridas Múltiples(1D3)." },
        "Alfiler del Éxtasis": { points: 35, faction: "gcaos", relic: false, subfaction: "Slaanesh", summary: "Sólo Slaanesh. Armas emparejadas. -2 adicional a TSA. Si hiere, unidad Apabullada." },
        "Hacha de Khorne": { points: 35, faction: "gcaos", relic: false, subfaction: "Khorne", summary: "Sólo Khorne. +1F y Golpe letal." },
        "Maza de la Inmundicia": { points: 30, faction: "gcaos", relic: false, subfaction: "Nurgle", summary: "Sólo Nurgle. Poder Penetración, At. Enven, Heridas Múltiples(1D3)." },
        "Espada de Disformidad": { points: 25, faction: "gcaos", relic: false, subfaction: "Tzeentch", summary: "Sólo Tzeentch. At. Flamígeros. Tira 1D6 al inicio del combate para efecto aleatorio." },
        "Espada de Energía Oscura": { points: 25, faction: "gcaos", relic: false, summary: "Sólo hechiceros. Guarda 1 dado de energía/dispersión. Mientras, +1F." },
        "Látigo de Tormento": { points: 25, faction: "gcaos", relic: false, subfaction: "Slaanesh", summary: "Sólo Slaanesh. Repite para herir, +1I, Poder Penetración." },
        "Espadón de la Condenación": { points: 25, faction: "gcaos", relic: false, summary: "Arma a 2 manos. Odio y Golpe Maestro." },
        "Espada de los Campeones": { points: 20, faction: "gcaos", relic: false, summary: "+1F, repite 1 dado en tirada de Ojo de los Dioses." }
    },
    "Armadura Mágica": {
        "Coraza Negra de Asavar Kul": { points: 60, faction: "gcaos", relic: true, summary: "Armadura del Caos. TSE 4+ y RM(1)." },
        "Escudo rúnico del Caos": { points: 50, faction: "gcaos", relic: true, summary: "Escudo. Armas mágicas/rúnicas enemigas en contacto se consideran mundanas." },
        "Coraza del Pacto": { points: 45, faction: "gcaos", relic: false, summary: "Armadura del Caos. TSE 5+ y RM(1)." },
        "Armadura de Morrslieb": { points: 30, faction: "gcaos", relic: false, summary: "Armadura del Caos. TSE 4+ vs ataques no mágicos." },
        "Escudo Infernal": { points: 25, faction: "gcaos", relic: false, summary: "Escudo. Inmune a Fuego. Ataques en CaC contra portador -1F." },
        "Armadura carmesí de Dargan": { points: 25, faction: "gcaos", relic: false, summary: "Armadura del Caos. Oponentes en CaC repiten para impactar superadas." },
        "Armadura de bronce de Zhrakk": { points: 15, faction: "gcaos", relic: false, summary: "Armadura del Caos. Inmune a Veneno y Golpe Letal." }
    },
    "Talismán": {
        "Corona de la Conquista Eterna": { points: 45, faction: "gcaos", relic: true, summary: "Regeneración (4+)." },
        "El Ojo Divino": { points: 30, faction: "gcaos", relic: true, summary: "TSE 4+. Si huye, se transforma en Engendro del Caos." },
        "Collar de Khorne (Talismán)": { points: 40, faction: "gcaos", relic: false, subfaction: "Khorne", summary: "Sólo Khorne. TSE 5+ y RM(3)." },
        "Gema de la Seducción": { points: 30, faction: "gcaos", relic: false, subfaction: "Slaanesh", summary: "Sólo Slaanesh. Atacantes en CaC deben superar chequeo de L para atacar." },
        "Ojo dorado de Tzeentch": { points: 25, faction: "gcaos", relic: false, subfaction: "Tzeentch", summary: "Sólo Tzeentch. TSE 4+ vs proyectiles." },
        "Filacteria Necrótica": { points: 10, faction: "gcaos", relic: false, subfaction: "Nurgle", summary: "Sólo Nurgle. Supera auto chequeos de atributo. Inmune a hechizos de Nurgle, Muerte y Plaga." }
    },
    "Artefacto Arcano": {
        "Cetro del Caos": { points: 50, faction: "gcaos", relic: true, summary: "Conoce 1 hechizo adicional, guarda 1 dado de energía/dispersión, inmune a disfunciones." },
        "Cáliz del Caos": { points: 35, faction: "gcaos", relic: false, summary: "Al inicio de fase de magia, tira 1D6 para un efecto aleatorio." },
        "Familiar del Caos": { points: 50, faction: "gcaos", relic: false, summary: "Genera +1 dado de energía y dispersión." },
        "Cetro de la dominación de Slaanesh": { points: 40, faction: "gcaos", relic: false, subfaction: "Slaanesh", summary: "Sólo Slaanesh. Portahechizos(8). Unidad a 18\" debe superar L con 3D6 o no podrá moverse/disparar." },
        "La Calavera de Kasteman": { points: 35, faction: "gcaos", relic: false, summary: "+1 a lanzar a todos los hechiceros a 6\" (amigos y enemigos)." },
        "Liber Maleficus": { points: 30, faction: "gcaos", relic: false, subfaction: "Tzeentch", summary: "Sólo Tzeentch. Señor del Conocimiento (Saber de Tzeentch)." }
    },
    "Objeto Hechizado": {
        "Libro de los Secretos": { points: 30, faction: "gcaos", relic: false, summary: "Pasa a ser hechicero N1 (sombras/fuego/muerte) y genera 1 dado de energía." },
        "Poción del Caos": { points: 25, faction: "gcaos", relic: false, summary: "1 sólo uso al inicio. Tira 1D6 para un efecto aleatorio." },
        "Yelmo de incontables ojos": { points: 25, faction: "gcaos", relic: false, summary: "+1 a TSA e I10." },
        "Cráneos de muerte": { points: 20, faction: "gcaos", relic: false, subfaction: "Nurgle", summary: "Sólo Nurgle. Ataque de catapulta 8\", plantilla pequena, chequeo de R o herida sin TSA." },
        "Colgante de Slaanesh": { points: 15, faction: "gcaos", relic: false, subfaction: "Slaanesh", summary: "Sólo Slaanesh. Por cada herida sufrida, +1A." },
        "Amuleto de piedra de disformidad": { points: 10, faction: "gcaos", relic: false, summary: "1 sólo uso. Repetir una tirada." },
        "Favor de los dioses": { points: 5, faction: "gcaos", relic: false, summary: "Puede repetir tiradas en la tabla de El Ojo de los Dioses." }
    },
    "Estandarte Mágico": {
        "Estandarte de los Dioses": { points: 70, faction: "gcaos", relic: true, summary: "Unidad gana Sangre Fría, Ataques Flamígeros, At. Enven, Poder Penetración, Odio y RM(1)." },
        "Tótem maldito": { points: 40, faction: "gcaos", relic: false, summary: "Portahechizos(5). Daño directo 24\", 2D6 impactos F4 sólo flamígeros." },
        "El Estandarte maldito": { points: 40, faction: "gcaos", relic: false, subfaction: "Tzeentch", summary: "Sólo Tzeentch. Unidad TSE 5+ vs proyectiles." },
        "Pabellón de la Ira": { points: 35, faction: "gcaos", relic: false, subfaction: "Khorne", summary: "Sólo Khorne. Unidad gana Odio y no pierde Furia Asesina." },
        "Mortaja ulcerosa": { points: 30, faction: "gcaos", relic: false, subfaction: "Nurgle", summary: "Sólo Nurgle. Unidad gana At. Enven (5+)." },
        "Estandarte del éxtasis": { points: 25, faction: "gcaos", relic: false, subfaction: "Slaanesh", summary: "Sólo Slaanesh. Repite chequeos de desmoralización. Dobles o 1s se consideran doble uno." },
        "Pabellón del odio": { points: 25, faction: "gcaos", relic: false, summary: "Unidad gana Odio (todos). 1s para impactar hieren a la propia unidad." },
        "Pabellón de los Campeones": { points: 25, faction: "gcaos", relic: false, summary: "1 sólo uso. Activar para ganar Tozudez por un turno." }
    }
};

const mountsDB_gcaos = {
    "Corcel del Caos con barda": { points: 20, faction: "gcaos", perfiles: [{ nombre: "Corcel del Caos", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 3, A: 1, L: 6 } }], reglasEspeciales: "Bestia. Cambia a Caballería. Barda." },
    "Montura demoníaca": { points: 40, faction: "gcaos", perfiles: [{ nombre: "Bestia demoníaca", stats: { M: 8, HA: 4, HP: 0, F: 5, R: 5, H: 3, I: 2, A: 3, L: 7 } }], reglasEspeciales: "Bestia Monstruosa. Cambia a Caballería Monstruosa. Demonio." },
    "Juggernaut de Khorne": { points: 40, faction: "gcaos", subfaction: "Khorne", perfiles: [{ nombre: "Juggernaut de Khorne", stats: { M: 7, HA: 4, HP: 0, F: 5, R: 5, H: 3, I: 2, A: 2, L: 6 } }], reglasEspeciales: "Bestia Monstruosa. Cambia a Caballería Monstruosa. Demonio, Impactos por Carga(1), Piel de Bronce." },
    "Corcel de Slaanesh": { points: 25, faction: "gcaos", subfaction: "Slaanesh", perfiles: [{ nombre: "Corcel de Slaanesh", stats: { M: 10, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 5, A: 1, L: 5 } }], reglasEspeciales: "Bestia. Cambia a Caballería. Demonio, Causa Miedo, At. Envenenados, Poder Penetración." },
    "Palanquín de Nurgle": { points: 50, faction: "gcaos", subfaction: "Nurgle", perfiles: [{ nombre: "Palanquín de Nurgle", stats: { M: 4, HA: 3, HP: 0, F: 3, R: 3, H: 4, I: 3, A: 6, L: 7 } }], reglasEspeciales: "Infantería. No cambia tipo de tropa. Demonio, At. Envenenados." },
    "Disco de Tzeentch": { points: 20, faction: "gcaos", subfaction: "Tzeentch", perfiles: [{ nombre: "Disco de Tzeentch", stats: { M: 1, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 5, A: 2, L: 6 } }], reglasEspeciales: "Bestia. Cambia a Caballería. Demonio, Volar, Ataques Flamígeros." },
    "Manticora": { points: 185, faction: "gcaos", perfiles: [{ nombre: "Manticora", stats: { M: 6, HA: 5, HP: 0, F: 6, R: 5, H: 5, I: 3, A: "4+1", L: 6 } }], reglasEspeciales: "Monstruo. Furia Asesina, Volar, Golpe Letal." },
    "Quimera": { points: 185, faction: "gcaos", perfiles: [{ nombre: "Quimera", stats: { M: 6, HA: 4, HP: 0, F: 6, R: 5, H: 5, I: 2, A: 6, L: 6 } }], reglasEspeciales: "Monstruo. Volar, Piel Escamosa(4+), Arma de Aliento (F3, flamígero)." },
    "Dragón del Caos": { points: 280, faction: "gcaos", perfiles: [{ nombre: "Dragón del Caos", stats: { M: 6, HA: 6, HP: 0, F: 6, R: 6, H: 6, I: 3, A: 7, L: 8 } }], reglasEspeciales: "Monstruo. Volar, Piel Escamosa(3+), 2 Armas de Aliento (F4 flamígero y F2 sin TSA)." },
    "Carruaje del Caos": { points: 95, faction: "gcaos", perfiles: [
        { nombre: "Carruaje", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 5, H: 4, I: "-", A: "-", L: "-" } },
        { nombre: "Guerrero del Caos (1)", stats: { M: "-", HA: 5, HP: 3, F: 4, R: "-", H: "-", I: 4, A: 2, L: 8 } },
        { nombre: "Corceles del Caos (2)", stats: { M: 8, HA: 3, HP: 0, F: 4, R: "-", H: "-", I: 3, A: 1, L: 6 } }
    ], reglasEspeciales: "Sustituye a un miembro de la dotación." }
};

const unitsDB_gcaos = {
    // === LORDS ===
    "Señor del Caos": {
        faction: "gcaos", foc: "Lord", points: 210,
        equipo: "Arma de mano y Armadura del Caos.",
        reglasEspeciales: "Causa Miedo, La Voluntad del Caos, el Ojo de los Dioses.",
        perfiles: [{ nombre: "Señor del Caos", stats: { M: 4, HA: 8, HP: 3, F: 5, R: 5, H: 3, I: 7, A: 5, L: 9 } }],
        options: [
            { n: "Arma de mano adicional", p: 6 }, { n: "Arma a dos manos", p: 8 }, { n: "Alabarda", p: 8 },
            { n: "Mayal", p: 6 }, { n: "Lanza de caballería", p: 8 }, { n: "Escudo", p: 5 },
            { n: "Marca de Khorne", p: 15, summary: "Gana Furia Asesina." }, 
            { n: "Marca de Nurgle", p: 10, summary: "Causa Miedo, Inmune a Veneno." }, 
            { n: "Marca de Tzeentch", p: 10, summary: "TSE 6+ (5+ vs Proyectiles)." },
            { n: "Marca de Slaanesh", p: 10, summary: "Inmune a Pánico." }
        ],
        mounts: ["Corcel del Caos con barda", "Dragón del Caos", "Manticora", "Quimera", "Carruaje del Caos", "Montura demoníaca"],
        maxMagicItems: 3, maxRelics: 1, maxSkills: { limit: 100, type: 'points' }
    },
    "Príncipe Demonio": {
        faction: "gcaos", foc: "Lord", points: 225,
        equipo: "Arma de mano y Armadura del Caos.",
        reglasEspeciales: "Demonio, Devoción Demoniaca.",
        perfiles: [{ nombre: "Príncipe demonio", stats: { M: 6, HA: 8, HP: 3, F: 6, R: 5, H: 5, I: 6, A: 5, L: 9 } }],
        options: [
            { n: "Alas (Volar)", p: 20 }, 
            { n: "Marca de Khorne", p: 15, summary: "Gana Furia Asesina." }, 
            { n: "Marca de Nurgle", p: 10, summary: "Causa Miedo, Inmune a Veneno." },
            { n: "Marca de Tzeentch", p: 15, summary: "TSE 6+ (5+ vs Proyectiles)." }, 
            { n: "Marca de Slaanesh", p: 5, summary: "Inmune a Pánico." }, 
            { n: "Marca del Caos Absoluto", p: 5, summary: "Gana Tozudez." },
            { n: "Nivel de Magia 1", p: 30 }, { n: "Nivel de Magia 2", p: 60 }, { n: "Nivel de Magia 3", p: 90 }, { n: "Nivel de Magia 4", p: 120 }
        ],
        maxMagicItems: 1, maxRelics: 1, maxSkills: { limit: 150, type: 'points' }
    },
    "Gran Hechicero del Caos": {
        faction: "gcaos", foc: "Lord", points: 195,
        equipo: "Arma de mano y Armadura del Caos.",
        reglasEspeciales: "Causa Miedo, La Voluntad del Caos, el Ojo de los Dioses. Hechicero de nivel 3.",
        perfiles: [{ nombre: "Gran hechicero del Caos", stats: { M: 4, HA: 5, HP: 3, F: 4, R: 5, H: 3, I: 5, A: 3, L: 9 } }],
        options: [
            { n: "Nivel de Magia 4", p: 35 }, 
            { n: "Marca de Nurgle", p: 15, summary: "Causa Miedo, Inmune a Veneno." }, 
            { n: "Marca de Tzeentch", p: 20, summary: "TSE 6+ (5+ vs Proyectiles)." },
            { n: "Marca de Slaanesh", p: 10, summary: "Inmune a Pánico." }
        ],
        mounts: ["Corcel del Caos con barda", "Dragón del Caos", "Manticora", "Quimera", "Carruaje del Caos", "Montura demoníaca", "Disco de Tzeentch", "Palanquín de Nurgle", "Corcel de Slaanesh"],
        maxMagicItems: 3, maxRelics: 1, maxSkills: { limit: 100, type: 'points' }
    },
    // === HEROES ===
    "Paladín del Caos": {
        faction: "gcaos", foc: "Hero", points: 110,
        equipo: "Arma de mano y Armadura del caos.",
        reglasEspeciales: "Causa Miedo, La Voluntad del Caos, el Ojo de los Dioses.",
        perfiles: [{ nombre: "Paladín del Caos", stats: { M: 4, HA: 7, HP: 3, F: 5, R: 4, H: 2, I: 6, A: 4, L: 8 } }],
        options: [
            { n: "Arma de mano adicional", p: 4 }, { n: "Arma a dos manos", p: 6 }, { n: "Alabarda", p: 4 },
            { n: "Lanza de caballería", p: 6 }, { n: "Mayal", p: 4 }, { n: "Escudo", p: 3 },
            { n: "Marca de Khorne", p: 12, summary: "Gana Furia Asesina." }, 
            { n: "Marca de Nurgle", p: 8, summary: "Causa Miedo, Inmune a Veneno." }, 
            { n: "Marca de Tzeentch", p: 8, summary: "TSE 6+ (5+ vs Proyectiles)." },
            { n: "Marca de Slaanesh", p: 8, summary: "Inmune a Pánico." }
        ],
        mounts: ["Corcel del Caos con barda", "Carruaje del Caos", "Montura demoníaca", "Disco de Tzeentch", "Juggernaut de Khorne", "Palanquín de Nurgle", "Corcel de Slaanesh"],
        maxMagicItems: 2, maxRelics: 0, maxSkills: { limit: 50, type: 'points' }, battleStandard: { name: "Portaestandarte de Batalla", cost: 25 }
    },
    "Hechicero del Caos": {
        faction: "gcaos", foc: "Hero", points: 80,
        equipo: "Arma de mano y Armadura del Caos.",
        reglasEspeciales: "Causa Miedo, La Voluntad del Caos, el Ojo de los Dioses. Hechicero de nivel 1.",
        perfiles: [{ nombre: "Hechicero del Caos", stats: { M: 4, HA: 5, HP: 3, F: 4, R: 4, H: 2, I: 5, A: 2, L: 8 } }],
        options: [
            { n: "Nivel de Magia 2", p: 35 }, 
            { n: "Marca de Nurgle", p: 10, summary: "Causa Miedo, Inmune a Veneno." }, 
            { n: "Marca de Tzeentch", p: 15, summary: "TSE 6+ (5+ vs Proyectiles)." },
            { n: "Marca de Slaanesh", p: 5, summary: "Inmune a Pánico." }
        ],
        mounts: ["Corcel del Caos con barda", "Carruaje del Caos", "Montura demoníaca", "Disco de Tzeentch", "Palanquín de Nurgle", "Corcel de Slaanesh"],
        maxMagicItems: 2, maxRelics: 0, maxSkills: { limit: 50, type: 'points' }
    },
    // === CORE ===
    "Guerreros del Caos": {
        faction: "gcaos", foc: "Core", points: 14, min: 10, max: 30,
        equipo: "Arma de mano y Armadura del Caos.",
        reglasEspeciales: "La voluntad del Caos, Inmunes a miedo, Ojo de los Dioses (sólo el Oficial).",
        perfiles: [
            { nombre: "Guerrero del Caos", stats: { M: 4, HA: 5, HP: 3, F: 4, R: 4, H: 1, I: 4, A: 2, L: 8 } },
            { nombre: "Oficial", stats: { M: 4, HA: 5, HP: 3, F: 4, R: 4, H: 1, I: 4, A: 3, L: 8 } }
        ],
        options: [
            { n: "Alabardas", p: 3 }, { n: "Armas a dos manos", p: 2 }, { n: "Armas de mano adicionales", p: 1 },
            { n: "Escudos", p: 1 }, 
            { n: "Marca de Khorne", p: 2, summary: "Gana Furia Asesina." }, 
            { n: "Marca de Nurgle", p: 1, summary: "Causa Miedo, Inmune a Veneno." }, 
            { n: "Marca de Tzeentch", p: 1, summary: "TSE 6+ (5+ vs Proyectiles)." }, 
            { n: "Marca de Slaanesh", p: 1, summary: "Inmune a Pánico." }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50
    },
    "Bárbaros del Caos": {
        faction: "gcaos", foc: "Core", points: 5, min: 10, max: 40,
        warning: "Requiere Portaestandarte para elegir un Tótem. Solo se puede elegir un Tótem por unidad.",
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "La voluntad del Caos.",
        perfiles: [
            { nombre: "Bárbaro del Caos", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 2, L: 7 } }
        ],
        options: [
            { n: "Mayales", p: 1 }, { n: "Armas a dos manos", p: 1 }, { n: "Armas de mano adicionales", p: 1 }, { n: "Escudos", p: 1 },
          { n: "Tótem de Khorne", p: 10, summary: "+1 Fuerza.", costType: 'flat' }, 
        { n: "Tótem de Slaanesh", p: 5, summary: "+1 Iniciativa.", costType: 'flat' },
        { n: "Tótem de Nurgle", p: 10, summary: "+1 Resistencia.", costType: 'flat' }, 
        { n: "Tótem de Tzeentch", p: 10, summary: "TSE (6+).", costType: 'flat' },
        { n: "Tótem del Caos Absoluto", p: 5, summary: "+1 Liderazgo.", costType: 'flat' }
    ],
        command: { c: { n: "Oficial", p: 4 }, s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } }
    },
    "Jinetes Bárbaros del Caos": {
        faction: "gcaos", foc: "Core", points: 13, min: 5, max: 20,
        warning: "Requiere Portaestandarte para elegir un Tótem. Solo se puede elegir un Tótem por unidad.",
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "La voluntad del Caos, Caballería rápida, Jinetes expertos.",
        perfiles: [
            { nombre: "Jinete Bárbaro", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 2, L: 7 } },
            { nombre: "Caballo de guerra", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } }
        ],
        options: [
            { n: "Mayales", p: 2 }, { n: "Lanzas", p: 1 }, { n: "Hachas arrojadizas", p: 1 },
            { n: "Jabalinas", p: 1 }, { n: "Escudos", p: 1 },
           { n: "Tótem de Khorne", p: 10, summary: "+1 Fuerza.", costType: 'flat' }, 
        { n: "Tótem de Slaanesh", p: 5, summary: "+1 Iniciativa.", costType: 'flat' },
        { n: "Tótem de Nurgle", p: 10, summary: "+1 Resistencia.", costType: 'flat' }, 
        { n: "Tótem de Tzeentch", p: 10, summary: "TSE (6+).", costType: 'flat' },
        { n: "Tótem del Caos Absoluto", p: 5, summary: "+1 Liderazgo.", costType: 'flat' }
    ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } }
    },
    "Mastines del Caos": {
        faction: "gcaos", foc: "Core", points: 6, min: 5, max: 20,
        equipo: "Garras y dientes (Arma de mano).",
        reglasEspeciales: "La voluntad del Caos.",
        perfiles: [
            { nombre: "Mastín del Caos", stats: { M: 7, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 4, A: 1, L: 5 } },
            { nombre: "Mastín Alfa", stats: { M: 7, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 4, A: 2, L: 5 } }
        ],
        options: [
            { n: "Ataques Envenenados", p: 1 }, { n: "Piel escamosa (6+)", p: 1 }, { n: "Famélicos (Furia Asesina)", p: 2 },
            { n: "Colmillos aserrados (Poder de Penetración)", p: 1 }, { n: "Apariencia asquerosa (Miedo)", p: 1 },
            { n: "Depredadores del Caos (Vanguardia)", p: 2 }
        ],
        command: { c: { n: "Mastín Alfa", p: 4 } }
    },
    // === SPECIAL ===
    "Caballeros del Caos": {
        faction: "gcaos", foc: "Special", warning: "Puede ser Básica si un Señor/Paladín del Caos va en Corcel del Caos.",
        points: 36, min: 5, max: 15,
        equipo: "Armas hechizadas (+1F, mágicos), Armadura del Caos y Escudo.",
        reglasEspeciales: "La voluntad del Caos, Inmunes a miedo, Ojo de los Dioses (sólo el Oficial).",
        perfiles: [
            { nombre: "Caballero del Caos", stats: { M: 4, HA: 5, HP: 3, F: 4, R: 4, H: 1, I: 4, A: 2, L: 8 } },
            { nombre: "Oficial", stats: { M: 4, HA: 5, HP: 3, F: 4, R: 4, H: 1, I: 4, A: 3, L: 8 } },
            { nombre: "Corcel del Caos", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 3, A: 1, L: 6 } }
        ],
        options: [
            { n: "Lanzas de caballería", p: 4 }, 
            { n: "Marca de Khorne", p: 2, summary: "Gana Furia Asesina." }, 
            { n: "Marca de Nurgle", p: 2, summary: "Causa Miedo, Inmune a Veneno." }, 
            { n: "Marca de Tzeentch", p: 1, summary: "TSE 6+ (5+ vs Proyectiles)." }, 
            { n: "Marca de Slaanesh", p: 2, summary: "Inmune a Pánico." }
        ],
        command: { c: { n: "Oficial", p: 8 }, s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } },
        magicBanner: 50, champItems: 25
    },
    "Malditos del Caos": {
        faction: "gcaos", foc: "Special", points: 17, min: 5, max: 15,
        equipo: "Arma de mano y Armadura del Caos.",
        reglasEspeciales: "La voluntad del Caos, Inmunes a psicología, Furia asesina, Hostigadores.",
        perfiles: [{ nombre: "Maldito del Caos", stats: { M: 6, HA: 4, HP: 0, F: 5, R: 4, H: 1, I: 4, A: 2, L: 8 } }],
        options: [
            { n: "Marca de Khorne", p: 1, summary: "Gana Furia Asesina." }, 
            { n: "Marca de Nurgle", p: 2, summary: "Causa Miedo, Inmune a Veneno." }, 
            { n: "Marca de Tzeentch", p: 1, summary: "TSE 6+ (5+ vs Proyectiles)." },
            { n: "Marca de Slaanesh", p: 1, summary: "Inmune a Pánico." }
        ]
    },
    "Carruaje del Caos": {
        faction: "gcaos", foc: "Special", points: 120, min: 1, max: 2,
        equipo: "Alabardas, cuchillas en las ruedas.",
        reglasEspeciales: "La voluntad del Caos, Inmunes a miedo, TSA (3+).",
        perfiles: [
            { nombre: "Carruaje", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 5, H: 4, I: "-", A: "-", L: "-" } },
            { nombre: "Guerrero del Caos (2)", stats: { M: "-", HA: 5, HP: 3, F: 4, R: "-", H: "-", I: 4, A: 2, L: 8 } },
            { nombre: "Corceles del Caos (2)", stats: { M: 8, HA: 3, HP: 0, F: 4, R: "-", H: "-", I: 3, A: 1, L: 6 } }
        ],
        options: [
            { n: "Sustituir corceles por Bestia Demoníaca", p: 30 }, 
            { n: "Marca de Khorne", p: 20, summary: "Gana Furia Asesina." }, 
            { n: "Marca de Nurgle", p: 15, summary: "Causa Miedo, Inmune a Veneno." }, 
            { n: "Marca de Tzeentch", p: 5, summary: "TSE 6+ (5+ vs Proyectiles)." }, 
            { n: "Marca de Slaanesh", p: 5, summary: "Inmune a Pánico." }
        ]
    },
    "Engendros del Caos": {
        faction: "gcaos", foc: "Special", points: 60, min: 1, max: 4,
        equipo: "Garras y Dientes.",
        reglasEspeciales: "Indesmoralizables, Miedo, Movimiento aleatorio, Ataques aleatorios, Aura demoníaca (5+), Hostigadores.",
        perfiles: [{ nombre: "Engendro del Caos", stats: { M: "2D6", HA: 3, HP: 0, F: 5, R: 5, H: 3, I: 3, A: "1D6+1", L: 10 } }],
        options: [
            { n: "Marca de Khorne", p: 5, summary: "Gana Furia Asesina." }, 
            { n: "Marca de Nurgle", p: 10, summary: "Causa Miedo, Inmune a Veneno." }, 
            { n: "Marca de Tzeentch", p: 10, summary: "TSE 6+ (5+ vs Proyectiles)." },
            { n: "Marca de Slaanesh", p: 3, summary: "Inmune a Pánico." }, 
            { n: "Marca del Caos Absoluto", p: 2, summary: "Gana Tozudez." }
        ]
    },
    "Ogros del Caos": {
        faction: "gcaos", foc: "Special", points: 32, min: 3, max: 8,
        equipo: "Armas de mano y Armadura pesada.",
        reglasEspeciales: "La voluntad del Caos, Miedo, Arremetida, Ojo de los Dioses (sólo Oficial).",
        perfiles: [
            { nombre: "Ogro del Caos", stats: { M: 6, HA: 4, HP: 2, F: 4, R: 4, H: 3, I: 2, A: 3, L: 8 } },
            { nombre: "Oficial", stats: { M: 6, HA: 4, HP: 2, F: 4, R: 4, H: 3, I: 2, A: 4, L: 8 } }
        ],
        options: [
            { n: "Armas de mano adicionales", p: 2 }, { n: "Armas a dos manos", p: 4 }, { n: "Escudo", p: 3 },
            { n: "Armaduras del Caos", p: 4 }, 
            { n: "Marca de Khorne", p: 4, summary: "Gana Furia Asesina." }, 
            { n: "Marca de Nurgle", p: 2, summary: "Causa Miedo, Inmune a Veneno." }, 
            { n: "Marca del Caos Absoluto", p: 1, summary: "Gana Tozudez." }
        ],
        command: { c: { n: "Oficial", p: 8 }, s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } },
        magicBanner: 25, maxSkills: { limit: 25, type: 'points' }
    },
    // === RARE ===
    "Elegidos del Caos": {
        faction: "gcaos", foc: "Rare", points: 40, min: 5, max: 15,
        equipo: "Arma de mano y Armadura del Caos.",
        reglasEspeciales: "Miedo, Inmunes a psicología, Tozudez, Elegidos, Cábala de guerreros.",
        perfiles: [
            { nombre: "Elegido", stats: { M: 4, HA: 6, HP: 3, F: 5, R: 4, H: 2, I: 4, A: 3, L: 9 } },
            { nombre: "Paladín elegido", stats: { M: 4, HA: 6, HP: 3, F: 5, R: 4, H: 2, I: 4, A: 4, L: 9 } }
        ],
        options: [
            { n: "Alabardas", p: 4 }, { n: "Armas a dos manos", p: 2 }, { n: "Armas de mano adicionales", p: 2 },
            { n: "Escudos", p: 1 }, 
            { n: "Marca de Khorne", p: 3, summary: "Gana Furia Asesina." }, 
            { n: "Marca de Nurgle", p: 4, summary: "Causa Miedo, Inmune a Veneno." }, 
            { n: "Marca de Tzeentch", p: 3, summary: "TSE 6+ (5+ vs Proyectiles)." }, 
            { n: "Marca de Slaanesh", p: 3, summary: "Inmune a Pánico." }, 
            { n: "Marca del Caos Absoluto", p: 2, summary: "Gana Tozudez." }
        ],
        command: { c: { n: "Paladín Elegido", p: 8 }, s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } },
        magicBanner: 50, champItems: 25, maxSkills: { limit: 25, type: 'points' }
    },
    "Altar de Guerra del Caos": {
        faction: "gcaos", foc: "Rare", points: 165,
        equipo: "Alabardas.",
        reglasEspeciales: "La voluntad del Caos, Miedo, TSA (3+), TSE (4+), Dador de gloria.",
        perfiles: [
            { nombre: "Altar", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 5, H: 4, I: "-", A: "-", L: "-" } },
            { nombre: "Guerrero del Caos (2)", stats: { M: "-", HA: 5, HP: 3, F: 4, R: "-", H: "-", I: 4, A: 2, L: 8 } },
            { nombre: "Corceles del Caos (2)", stats: { M: 8, HA: 3, HP: 0, F: 4, R: "-", H: "-", I: 3, A: 1, L: 6 } }
        ],
        options: [
            { n: "Sustituir corceles por Bestia Demoníaca", p: 30 },
            { n: "Sustituir corceles por dos Trolls del Caos", p: 50 },
            { n: "Marca de Khorne", p: 10, summary: "Gana Furia Asesina." }, 
            { n: "Marca de Nurgle", p: 15, summary: "Causa Miedo, Inmune a Veneno." }, 
            { n: "Marca de Tzeentch", p: 5, summary: "TSE 6+ (5+ vs Proyectiles)." }, 
            { n: "Marca de Slaanesh", p: 5, summary: "Inmune a Pánico." }
        ]
    },
    "Engendro Monstruoso del Caos": {
        faction: "gcaos", foc: "Rare", points: 250,
        equipo: "Incontables apéndices mutantes (arma de mano).",
        reglasEspeciales: "Indesmoralizables, Movimiento aleatorio (3D6), Ataques aleatorios (2D6+2), Aura demoníaca (5+), Vástago del Caos.",
        perfiles: [{ nombre: "Engendro monstruoso", stats: { M: "3D6", HA: "1D3+2", HP: 0, F: "2D3+2", R: "2D3+2", H: "2D3+2", I: "1D6", A: "2D6+2", L: 10 } }],
        options: [
            { n: "Marca de Khorne", p: 15, summary: "Gana Furia Asesina." }, 
            { n: "Marca de Nurgle", p: 30, summary: "Causa Miedo, Inmune a Veneno." }, 
            { n: "Marca de Tzeentch", p: 20, summary: "TSE 6+ (5+ vs Proyectiles)." },
            { n: "Marca de Slaanesh", p: 10, summary: "Inmune a Pánico." }, 
            { n: "Marca del Caos Absoluto", p: 10, summary: "Gana Tozudez." }
        ]
    },
    "Elegidos de Khorne en Juggernaut": {
        faction: "gcaos", foc: "Rare", points: 105, min: 2, max: 4,
        equipo: "Armas hechizadas, Armadura del Caos y Escudo.",
        reglasEspeciales: "La voluntad del Caos, Miedo, Inmunes a psicología, Tozudez, Elegidos, Cábala de guerreros, Impactos por carga 1 (sólo Juggernaut), Demonio (sólo Juggernaut), Piel de bronce. Marca de Khorne de los Elegidos.",
        perfiles: [
            { nombre: "Elegido", stats: { M: 4, HA: 6, HP: 3, F: 5, R: 4, H: 2, I: 4, A: 3, L: 9 } },
            { nombre: "Paladín elegido", stats: { M: 4, HA: 6, HP: 3, F: 5, R: 4, H: 2, I: 4, A: 4, L: 9 } },
            { nombre: "Juggernaut de Khorne", stats: { M: 7, HA: 4, HP: 0, F: 5, R: 5, H: 3, I: 2, A: 2, L: 6 } }
        ],
        options: [{ n: "Lanzas de caballería", p: 5 }],
        command: { c: { n: "Paladín elegido", p: 12 }, s: { n: "Portaestandarte", p: 12 }, m: { n: "Músico", p: 12 } },
        magicBanner: 50, champItems: 25, maxSkills: { limit: 25, type: 'points' }
    },
    "Elegidos de Slaanesh en Corcel": {
        faction: "gcaos", foc: "Rare", points: 70, min: 3, max: 6,
        equipo: "Armas hechizadas, Armadura Ligera y Escudo.",
        reglasEspeciales: "La voluntad del Caos, Miedo, Inmunes a psicología, Tozudez, Cábala de guerreros, Caballería rápida, Hostigadores, At. Enven (sólo Corceles), Demonio (sólo Corcel), Ladinas. Marca de Slaanesh Mejorada.",
        perfiles: [
            { nombre: "Elegido", stats: { M: 4, HA: 6, HP: 3, F: 5, R: 4, H: 2, I: 5, A: 3, L: 9 } },
            { nombre: "Paladín elegido", stats: { M: 4, HA: 6, HP: 3, F: 5, R: 4, H: 2, I: 5, A: 4, L: 9 } },
            { nombre: "Corcel de Slaanesh", stats: { M: 10, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 5, A: 1, L: 5 } }
        ],
        options: [{ n: "Arcos", p: 5 }],
        command: { c: { n: "Paladín elegido", p: 10 }, s: { n: "Portaestandarte", p: 10 }, m: { n: "Músico", p: 10 } },
        magicBanner: 50, champItems: 25, maxSkills: { limit: 25, type: 'points' }
    }
};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Guerreros del Caos",
    FACTION_ID: "gcaos",
    armySkillsLabel: "Recompensas del Caos",
    FOC_CONFIG: { 
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_gcaos,
    mountsDB: mountsDB_gcaos,
    magicItemsDB: magicItemsDB_gcaos,
    armySkillsDB: armySkillsDB_gcaos,
    specialProfilesDB: {},
};


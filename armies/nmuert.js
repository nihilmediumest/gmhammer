// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: NO MUERTOS ---
// ===================================================================================
// Last Updated: 2025-10-04 - v4.1
import { commonMagicItemsDB } from '../comun.js';

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_nmuert = {
    // === CORE ===
    "Esqueletos": {
        faction: "nmuert",
        foc: "Core",
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
            { n: "Sustituir armadura ligera por pesada", p: 1 },
            { n: "Arqueros esqueleto", p: 2, summary:"Arcos y +1HP, Hasta la mitad de las unidades de esqueletos" },
            { n: "Sustituir arcos de los tiradores por ballestas", p: 2 }
        ],
        command: { c: { n: "Oficial", p: 4 }, s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } },
        magicBanner: 25
    },
    "Caballería Esquelética": {
        faction: "nmuert",
        foc: "Core",
        points: 10,
        min: 5,
        max: 20,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "No muertos, Corceles insustanciales (son etéreos cuando están moviendo).",
        perfiles: [
            { nombre: "Esqueleto", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 2, A: 1, L: 5 } },
            { nombre: "Oficial esqueleto", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 2, A: 2, L: 5 } },
            { nombre: "Corcel esquelético", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 4 } }
        ],
        options: [
            { n: "Lanza", p: 1 },
            { n: "Lanza de caballería", p: 2 },
            { n: "Escudo", p: 1 },
            { n: "Sustituir armadura ligera por pesada", p: 2 },
            { n: "Barda para corceles", p: 2 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },
    "Zombis": {
        faction: "nmuert",
        foc: "Core",
        points: 3,
        min: 20,
        max: 50,
        equipo: "Arma de mano.",
        reglasEspeciales: "No muertos.",
        perfiles: [
            { nombre: "Zombi", stats: { M: 4, HA: 1, HP: 0, F: 3, R: 4, H: 1, I: 0, A: 1, L: 2 } }
        ],
        command: { s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } }
    },
    "Hueste Espectral": {
        faction: "nmuert",
        foc: "Core",
        warning: "Sólo puedes incluir una unidad de hueste espectral por cada unidad de esqueletos o zombis de tu ejército.",
        points: 40,
        min: 1,
        max: 6,
        equipo: "Arma de mano.",
        reglasEspeciales: "No muertos, Etéreos, Ataques mágicos, Legión espectral.",
        perfiles: [
            { nombre: "Hueste espectral", stats: { M: 6, HA: 2, HP: 0, F: 3, R: 3, H: 4, I: 2, A: 4, L: 5 } }
        ]
    },
    "Necrófagos": {
        faction: "nmuert",
        foc: "Core",
        warning: "0-2",
        points: 7,
        min: 5,
        max: 15,
        equipo: "Arma de mano.",
        reglasEspeciales: "Miedo, Ataques envenenados, Hostigadores, Carroñeros, ¡Están vivos!",
        perfiles: [
            { nombre: "Necrófago", stats: { M: 5, HA: 3, HP: 0, F: 3, R: 4, H: 1, I: 3, A: 2, L: 6 } },
            { nombre: "Oficial necrófago", stats: { M: 5, HA: 3, HP: 0, F: 3, R: 4, H: 1, I: 3, A: 3, L: 6 } }
        ],
        command: { c: { n: "Oficial", p: 6 } }
    },

    // === SPECIAL ===
    "Tumularios": {
        faction: "nmuert",
        foc: "Special",
        points: 12,
        min: 10,
        max: 30,
        equipo: "Arma de mano funeraria y Armadura pesada.",
        reglasEspeciales: "No muertos, Armas funerarias.",
        perfiles: [
            { nombre: "Tumulario", stats: { M: 4, HA: 3, HP: 3, F: 4, R: 4, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Oficial Tumulario", stats: { M: 4, HA: 3, HP: 3, F: 4, R: 4, H: 1, I: 3, A: 2, L: 6 } }
        ],
        options: [
            { n: "Alabarda funeraria", p: 2 },
            { n: "Arma a dos manos funeraria", p: 1 },
            { n: "Escudo", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50
    },
    "Caballería Tumularia": {
        faction: "nmuert",
        foc: "Special",
        points: 19,
        min: 5,
        max: 15,
        equipo: "Arma de mano funeraria y Armadura pesada.",
        reglasEspeciales: "No muertos, Corceles insustanciales, Armas funerarias.",
        perfiles: [
            { nombre: "Tumulario", stats: { M: 4, HA: 3, HP: 3, F: 4, R: 4, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Oficial Tumulario", stats: { M: 4, HA: 3, HP: 3, F: 4, R: 4, H: 1, I: 3, A: 2, L: 6 } },
            { nombre: "Corcel esquelético", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 4 } }
        ],
        options: [
            { n: "Lanza de caballería funeraria", p: 3 },
            { n: "Arma a dos manos funeraria", p: 2 },
            { n: "Escudo", p: 1 },
            { n: "Barda para corceles", p: 2 }
        ],
        command: { c: { n: "Oficial", p: 8 }, s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } },
        magicBanner: 50
    },
    "Golems de Carne": {
        faction: "nmuert",
        foc: "Special",
        points: 45,
        min: 3,
        max: 6,
        equipo: "Arma de mano.",
        reglasEspeciales: "No muertos, Regeneración (5+).",
        perfiles: [
            { nombre: "Golem de carne", stats: { M: 5, HA: 2, HP: 0, F: 5, R: 5, H: 4, I: 0, A: 3, L: 4 } }
        ],
        command: { s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } }
    },
    "Carruaje de Huesos": {
        faction: "nmuert",
        foc: "Special",
        points: 55,
        min: 1,
        max: 2,
        equipo: "Cuchillas. Los esqueletos van equipados con Lanza.",
        reglasEspeciales: "No muertos, Tirada de salvación por armadura 5+.",
        perfiles: [
            { nombre: "Carruaje de Huesos", stats: { M: "-", HA: "-", HP: "-", F: "-", R: "-", H: 4, I: "-", A: "-", L: "-" } },
            { nombre: "Esqueleto (2)", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 2, A: 1, L: 5 } },
            { nombre: "Corcel esquelético (2)", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 4 } }
        ]
    },
    "Carroñeros": {
        faction: "nmuert",
        foc: "Special",
        points: 30,
        min: 1,
        max:6,
        equipo: "Arma de mano.",
        reglasEspeciales: "No muertos, Volar, Hostigadores, Piel coriácea (+1 TSA), Ataque espectral, Voluntad propia.",
        perfiles: [
            { nombre: "Jinete espectral", stats: { M: "-", HA: 3, HP: 0, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Carroñero", stats: { M: 1, HA: 3, HP: 0, F: 4, R: 4, H: 2, I: 2, A: 2, L: 2 } }
        ]
    },
    "Espíritus": {
        faction: "nmuert",
        foc: "Special",
        points: 24,
        min: 3,
        max: 10,
        equipo: "Arma a dos manos.",
        reglasEspeciales: "No muertos, Etéreos, Hostigadores, Ataques mágicos, Terror, Fantasmas.",
        perfiles: [
            { nombre: "Espíritu", stats: { M: 6, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 2, L: 6 } },
            { nombre: "Doncella espectral", stats: { M: 6, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 3, L: 7 } }
        ],
        command: { c: { n: "Doncella espectral", p: 15 } }
    },
    "Momias": {
        faction: "nmuert",
        foc: "Special",
        warning: "0-1",
        points: 20,
        min: 5,
        max: 15,
        equipo: "Arma a dos manos y Armadura ligera.",
        reglasEspeciales: "No muertos, Inflamables, Resistencia mágica (1), Resistencia sobrenatural.",
        perfiles: [
            { nombre: "Momia", stats: { M: 3, HA: 3, HP: 2, F: 4, R: 5, H: 2, I: 1, A: 2, L: 7 } },
            { nombre: "Señor Funerario", stats: { M: 3, HA: 4, HP: 2, F: 4, R: 5, H: 3, I: 1, A: 3, L: 8 } }
        ],
        options: [
            { n: "Sustituir arma a dos manos por Mayales o arma adicional", p: 0 }
        ],
        command: { c: { n: "Señor Funerario", p: 20 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50,
        champItems: 25
    },
    "Carro de Cadáveres": {
        faction: "nmuert",
        foc: "Special",
        points: 140,
        min: 1,
        max: 1,
        equipo: "El aprendiz de nigromante va equipado con un arma de mano.",
        reglasEspeciales: "No muerto, Tirada de salvación por armadura 5+, causa Terror, Horda de zombis, Aprendiz de nigromante, Vigor impío, Miasma de descomposición, Foco de poder nigromántico.",
        perfiles: [
            { nombre: "Aprendiz de nigromante", stats: { M: "-", HA: 3, HP: 3, F: 3, R: "-", H: "-", I: 3, A: 1, L: 7 } },
            { nombre: "Carro de cadáveres", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 4, H: 4, I: "-", A: "-", L: "-" } },
            { nombre: "Horda de zombis", stats: { M: 4, HA: 1, HP: 0, F: 3, R: "-", H: "-", I: 0, A: "2D6", L: 2 } }
        ],
        options: [
            { n: "Arma de mano adicional para aprendiz", p: 1 },
            { n: "Lanza para aprendiz", p: 1 },
            { n: "Fuego infernal", p: 15, costType: "flat" },
            { n: "Piedra impla", p: 15, costType: "flat" }
        ]
    },
    "Catapulta Lanzacráneos": {
        faction: "nmuert",
        foc: "Special",
        points: 80,
        min: 1,
        max: 1,
        equipo: "Los esqueletos están equipados con arma de mano y armadura ligera.",
        reglasEspeciales: "No muertos. La Catapulta lanzacráneos dispara como una catapulta, salvo que sus impactos tienen las reglas especiales Ataques flamígeros y Ataques mágicos. Cualquier unidad que sufra al menos una baja como consecuencia del ataque de disparo de un lanzacráneos deberá realizar inmediatamente un chequeo de pánico.",
        perfiles: [
            { nombre: "Catapulta lanzacráneos", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: "-", I: "-", A: "-", L: "-" } },
            { nombre: "Dotación de esqueletos (3)", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: "-", I: 2, A: 1, L: 5 } }
        ]
    },

    // === RARE ===
    "Espectros Condenadores": {
        faction: "nmuert",
        foc: "Rare",
        points: 36,
        min: 5,
        max: 10,
        equipo: "Arma a dos manos.",
        reglasEspeciales: "No muertos, Terror, Etéreos, Caballería rápida, Ataques flamígeros, Impactos por carga (1).",
        perfiles: [
            { nombre: "Espectro", stats: { M: 6, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 2, L: 6 } },
            { nombre: "Oficial Espectro", stats: { M: 6, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 3, L: 6 } },
            { nombre: "Corcel esquelético", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 4 } }
        ],
        options: [
            { n: "Barda para corceles", p: 2 }
        ],
        command: { c: { n: "Oficial", p: 10 } }
    },
    "Gigante de Hueso": {
        faction: "nmuert",
        foc: "Rare",
        points: 175,
        min: 1,
        max: 1,
        equipo: "Dos Armas de mano y Armadura pesada.",
        reglasEspeciales: "No muerto, Carga devastadora, Resistencia sobrenatural, Desgarrar.",
        perfiles: [
            { nombre: "Gigante de hueso", stats: { M: 6, HA: 3, HP: 0, F: 6, R: 6, H: 6, I: 1, A: 4, L: 8 } }
        ]
    },
    "Heraldo de Nagash": {
        faction: "nmuert",
        foc: "Rare",
        points: 205,
        min: 1,
        max: 1,
        equipo: "Arma de mano funeraria y Armadura pesada.",
        reglasEspeciales: "No muerto, Volar, Piel escamosa (5+), Resistencia mágica (1), Armas funerarias, Voluntad de Nagash, Halo de desesperación, Receptáculos de poder oscuro.",
        perfiles: [
            { nombre: "Heraldo de Nagash", stats: { M: 6, HA: 4, HP: 0, F: 6, R: 5, H: 5, I: 3, A: 5, L: 8 } }
        ],
        options: [
            { n: "Alabarda funeraria", p: 15 },
            { n: "Arma de mano funeraria adicional", p: 10 }
        ]
    },
    "Dragón Zombi": {
        faction: "nmuert",
        foc: "Rare",
        warning: "0-1",
        points: 285,
        min: 1,
        max: 1,
        equipo: "Garras y Dientes (Arma de mano).",
        reglasEspeciales: "No muerto, Volar, Piel escamosa (4+), Nube de moscas, Arma de aliento.",
        perfiles: [
            { nombre: "Dragón Zombi", stats: { M: 6, HA: 4, HP: 0, F: 6, R: 6, H: 6, I: 1, A: 6, L: 6 } }
        ]
    },

    // === LORDS ===
    "Liche": {
        faction: "nmuert",
        foc: "Lord",
        warning: "0-1",
        points: 235,
        min: 1,
        max: 1,
        equipo: "Arma de mano funeraria.",
        reglasEspeciales: "No muerto, causa Terror.",
        perfiles: [
            { nombre: "Liche", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 5, H: 4, I: 2, A: 1, L: 9 } }
        ],
        mounts: ["Corcel esquelético con barda", "Pesadilla Alada"],
        maxMagicItems: 3,
        maxRelics: 1,
        maxSkills: { limit: 3, type: 'count' }
    },
    "Maestro Nigromante": {
        faction: "nmuert",
        foc: "Lord",
        points: 170,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Miedo, ¡Están vivos!",
        perfiles: [
            { nombre: "Maestro Nigromante", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 4, H: 3, I: 4, A: 3, L: 8 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 3 },
            { n: "Arma de mano adicional", p: 3 },
            { n: "Nivel de Magia 4", p: 35 }
        ],
        mounts: ["Corcel esquelético con barda", "Pesadilla Alada", "Carruaje de Huesos", "Dragón Zombi", "Carro de Cadáveres"],
        maxMagicItems:3,
        maxRelics: 1,
        maxSkills: { limit: 2, type: 'count' }
    },
    "Rey Tumulario": {
        faction: "nmuert",
        foc: "Lord",
        warning: "Si tu ejército incluye un Rey tumulario, puedes incluir una única unidad de Tumularios como opción de Unidad básica.",
        points: 165,
        min: 1,
        max: 1,
        equipo: "Arma de mano funeraria y Armadura pesada.",
        reglasEspeciales: "No muerto, Armas funerarias",
        perfiles: [
            { nombre: "Rey Tumulario", stats: { M: 4, HA: 5, HP: 3, F: 5, R: 5, H: 4, I: 5, A: 4, L: 8 } }
        ],
        options: [
            { n: "Arma a dos manos funeraria", p: 5 },
            { n: "Alabarda funeraria", p: 5 },
            { n: "Arma de mano funeraria adicional", p: 3 },
            { n: "Mayal funerario", p: 4 },
            { n: "Lanza de caballería funeraria", p: 6 },
            { n: "Escudo", p: 3 }
        ],
        mounts: ["Corcel esquelético con barda", "Pesadilla Alada", "Carruaje de Huesos", "Dragón Zombi"],
        maxMagicItems:3,
        maxRelics: 1
    },

    // === HEROES ===
    "Nigromante": {
        faction: "nmuert",
        foc: "Hero",
        points: 60,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Miedo, ¡Está vivo!",
        perfiles: [
            { nombre: "Nigromante", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 1, L: 7 } }
        ],
        options: [
            { n: "Arma a dos manos", p: 2 },
            { n: "Arma de mano adicional", p: 2 },
            { n: "Nivel de Magia 2", p: 35 },
            { n: "Convertir en no muerto", p: 15 }
        ],
        mounts: ["Corcel esquelético con barda", "Carruaje de Huesos", "Carro de Cadáveres"],
        maxMagicItems: 3,
        maxSkills: { limit: 1, type: 'count' }
    },
    "Señor Tumulario": {
        faction: "nmuert",
        foc: "Hero",
        points: 80,
        min: 1,
        max: 1,
        equipo: "Arma de mano funeraria y Armadura pesada.",
        reglasEspeciales: "No muerto, Armas funerarias",
        perfiles: [
            { nombre: "Señor Tumulario", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 5, H: 3, I: 4, A: 3, L: 7 } }
        ],
        options: [
            { n: "Arma a dos manos funeraria", p: 3 },
            { n: "Alabarda funeraria", p: 3 },
            { n: "Arma de mano funeraria adicional", p: 2 },
            { n: "Mayal funerario", p: 2 },
            { n: "Lanza de caballería funeraria", p: 4 },
            { n: "Escudo", p: 2 }
        ],
        mounts: ["Corcel esquelético con barda", "Pesadilla Alada", "Carruaje de Huesos"],
        maxMagicItems: 2,  battleStandard: { name: "Portaestandarte de Batalla", cost: 25}
    },
    "Espectro": {
        faction: "nmuert",
        foc: "Hero",
        points: 80,
        min: 1,
        max: 1,
        equipo: "Arma a dos manos",
        reglasEspeciales: "No muerto, Etéreo, Terror, Toque mortal.",
        perfiles: [
            { nombre: "Espectro", stats: { M: 6, HA: 4, HP: 3, F: 3, R: 4, H: 3, I: 4, A: 4, L: 7 } }
        ],
        mounts: ["Corcel esquelético etéreo"],
        maxMagicItems: 1
    },
    "Señor de los Muertos": {
        faction: "nmuert",
        foc: "Hero",
        warning: "0-2. Los señores de los muertos solo pueden unirse a unidades de su mismo tipo y no puedes incluir más de estos personajes que unidades de su mismo tipo.",
        points: 30,
        min: 1,
        max: 1,
        equipo: "Arma de mano. El Señor de los Esqueletos lleva Armadura ligera.",
        reglasEspeciales: "No muerto, Ataques envenenados (solo señor de los zombis)",
        perfiles: [
            { nombre: "Señor de los Esqueletos", stats: { M: 4, HA: 3, HP: 3, F: 4, R: 4, H: 2, I: 3, A: 3, L: 6 } },
            { nombre: "Señor de los Zombis", stats: { M: 4, HA: 2, HP: 0, F: 4, R: 5, H: 2, I: 1, A: 3, L: 3 } }
        ],
        options: [
            { n: "Arma a dos manos (Señor Esqueletos)", p: 2 },
            { n: "Alabarda (Señor Esqueletos)", p: 3 },
            { n: "Lanza de caballería (Señor Esqueletos)", p: 3 },
            { n: "Escudo (Señor Esqueletos)", p: 2 },
            { n: "Armadura Pesada (Señor Esqueletos)", p: 2 }
        ],
        mounts: ["Corcel esquelético con barda"],
        maxMagicItems: 1
    },
    "Rey Necrófago": {
        faction: "nmuert",
        foc: "Hero",
        warning: "0-1",
        points: 60,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Miedo, Ataques envenenados, Hostigador, Carga devastadora, ¡Está vivo!",
        perfiles: [
            { nombre: "Rey necrófago", stats: { M: 5, HA: 4, HP: 0, F: 5, R: 4, H: 2, I: 5, A: 4, L: 7 } }
        ],
        options: [
            { n: "Arma de mano adicional", p: 5 },
            { n: "Mayal", p: 4 }
        ],
        maxMagicItems: 1
    }
};

const mountsDB_nmuert = {
    "Corcel esquelético": { 
        faction: "nmuert", 
        points: 12, 
        perfiles: [ { nombre: "Corcel esquelético", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 4 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. Corceles insustanciales." 
    },
    "Corcel esquelético con barda": { 
        faction: "nmuert", 
        points: 15, 
        perfiles: [ { nombre: "Corcel esquelético con barda", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 4 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. Corceles insustanciales. Barda (+1 TSA)." 
    },
    "Corcel esquelético etéreo": { 
        faction: "nmuert", 
        points: 15, 
        perfiles: [ { nombre: "Corcel esquelético etéreo", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 4 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. Etéreo." 
    },
    "Pesadilla Alada": { 
        faction: "nmuert", 
        points: 150, 
        perfiles: [ { nombre: "Pesadilla Alada", stats: { M: 6, HA: 3, HP: 0, F: 5, R: 5, H: 4, I: 2, A: 4, L: 5 } } ], 
        reglasEspeciales: "Monstruo. No muerto, Volar, Terror, Regeneración (4+)." 
    },
    "Dragón Zombi": { 
        faction: "nmuert", 
        points: 255, 
        perfiles: [ { nombre: "Dragón Zombi", stats: { M: 6, HA: 4, HP: 0, F: 6, R: 6, H: 6, I: 1, A: 6, L: 6 } } ], 
        reglasEspeciales: "Monstruo. No muerto, Volar, Piel escamosa (4+), Nube de moscas, Arma de aliento." 
    },
    "Carruaje de Huesos": { 
        faction: "nmuert", 
        points: 35, 
        perfiles: [
            { nombre: "Carruaje de Huesos", stats: { M: "-", HA: "-", HP: "-", F: "-", R: "-", H: 4, I: "-", A: "-", L: "-" } },
            { nombre: "Esqueleto (1)", stats: { M: 4, HA: 2, HP: 2, F: 3, R: 3, H: 1, I: 2, A: 1, L: 5 } },
            { nombre: "Corcel esquelético (2)", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 1, A: 1, L: 4 } }
        ],
        reglasEspeciales: "Carro. No muertos, Tirada de salvación por armadura 5+." 
    },
    "Carro de Cadáveres": { 
        faction: "nmuert", 
        points: 130, 
        perfiles: [
            { nombre: "Carro de cadáveres", stats: { M: "-", HA: "-", HP: "-", F: 5, R: 4, H: 4, I: "-", A: "-", L: "-" } },
            { nombre: "Horda de zombis", stats: { M: 4, HA: 1, HP: 0, F: 3, R: "-", H: "-", I: 0, A: "2D6", L: 2 } }
        ],
        reglasEspeciales: "Carro. No muerto, causa Terror, Tirada de salvación por armadura 5+, Regeneración (4+), Miasma de descomposición, Foco de poder nigromántico." 
    }
};

const armySkillsDB_nmuert = {
    "Manipulador de energía oscura": { points: 50, faction: "nmuert", type: "Arcano Nigromántico", summary: "Sólo Liches y Grandes nigromantes. Cada vez que el portador lance un hechizo, puede repetir la tirada de uno de sus dados de energía. Cada vez que se use, tira 1D6 con un 1-3 no puede ser usado más veces ese turno" },
    "El guardián de las antiguas tradiciones": { points: 50, faction: "nmuert", type: "Arcano Nigromántico", summary: "Sólo Liches y Grandes nigromantes. El hechicero genera dos dados de energía adicionales (no afecta a los dados de dispersión)." },
    "Bibliotecario Oscuro": { points: 30, faction: "nmuert", type: "Arcano Nigromántico", summary: "Sólo Liches y Grandes nigromantes. El hechicero obtiene la regla especial Señor del Conocimiento (Saber de la Muerte, de las Sombras, Magia Oscura o Nigromancia)." },
    "Salvaguarda oscura": { points: 25, faction: "nmuert", type: "Arcano Nigromántico", summary: "La presencia del hechicero añade un dado de dispersión extra" },
    "Portador del corazón de la noche": { points: 25, faction: "nmuert", type: "Arcano Nigromántico", summary: "El hechicero genera un dado de energía adicional" },
    "Maestro de la Magia Negra": { points: 25, faction: "nmuert", type: "Arcano Nigromántico", summary: "Sólo Liches y Grandes nigromantes. Permite repetir las tiradas en la tabla de disfunciones mágicas, aunque deberá aceptarse el segundo resultado." },
    "Caminante del sendero oscuro": { points: 20, faction: "nmuert", type: "Arcano Nigromántico", summary: "El hechicero obtiene un +1 al lanzamiento de todos los hechizos nigrománticos." },
    "Vigor nigromántico": { points: 20, faction: "nmuert", type: "Arcano Nigromántico", summary: "El hechicero (o la unidad en la que se incluya este) sufren una herida menos como resultado de perder un combate cuerpo a cuerpo y ambos gana la regla regeneración 6+." },
    "El escriba del Gran Nigromante": { points: 15, faction: "nmuert", type: "Arcano Nigromántico", summary: "El hechicero conoce un hechizo adicional (esto no afecta a su nivel de magia)" },
    "Coleccionista de artefactos oscuros": { points: 5, faction: "nmuert", type: "Arcano Nigromántico", summary: "El hechicero puede portar hasta dos objetos arcanos. Sólo Liches y Maestros nigromantes" },
    "Presencia oscura": { points: 5, faction: "nmuert", type: "Arcano Nigromántico", summary: "Suma +2 a todos los intentos de canalizar del hechicero." }
};

const magicItemsDB_nmuert = {
    "Arma Mágica": {
        "Espadón de muerte": { points: 50, faction: "nmuert", relic: true, summary: "A2M funeraria. F10, Odio." },
        "Garfios de Vorag": { points: 35, faction: "nmuert", relic: false, summary: "Armas emparejadas. +2HA +2I, Poder Penetración, Veneno(5+)." },
        "Espada de los reyes": { points: 30, faction: "nmuert", relic: false, summary: "Sólo Tumularios. AM funeraria. Golpe Letal(5+)." },
        "Espada de energía maldita": { points: 25, faction: "nmuert", relic: false, summary: "AM funeraria. Furia Asesina. +1D energía por herida." },
        "Espada de cristal oscuro": { points: 20, faction: "nmuert", relic: false, summary: "Sólo hechiceros. Guarda 1D energía/disp. +1F con dado guardado." },
        "Espada Negra": { points: 15, faction: "nmuert", relic: false, summary: "AM funeraria. +1 esqueleto/zombi por herida (en unidad)." },
        "Segadora de almas": { points: 10, faction: "nmuert", relic: false, summary: "Sólo Espectro con espíritus. A2M. +1 espíritu por Golpe Letal." },
        "Espada del Mal suparante": { points: 5, faction: "nmuert", relic: false, summary: "AM funeraria. Odio (todos)." }
    },
    "Armadura Mágica": {
        "Armadura de los cones": { points: 50, faction: "nmuert", relic: true, summary: "Armadura placas (TSA 4+). +3R." },
        "Coraza de huesos de dragón": { points: 40, faction: "nmuert", relic: true, summary: "Hechiceros. TSA 1+, RM(1)." },
        "Escudo maldito": { points: 30, faction: "nmuert", relic: false, summary: "Escudo. Repite impactos en portador." },
        "Armadura de sombras": { points: 20, faction: "nmuert", relic: false, summary: "AP. TSA 3+ CaC, 2+ vs disparos." },
        "Armadura de huesos de quimera": { points: 15, faction: "nmuert", relic: false, summary: "Hechiceros. AP (TSA 4+). RM(1)." }
    },
    "Talismán": {
        "Anillo de resurrección": { points: 70, faction: "nmuert", relic: true, summary: "Vuelve a vida con 1H. Mueve 10\" aleatorio." },
        "Amuleto de la Oscura Eternidad": { points: 55, faction: "nmuert", relic: false, summary: "TSE 5+, Regeneración(5+)." },
        "Corona de las sombras": { points: 45, faction: "nmuert", relic: false, summary: "Sólo hechiceros. -2F vs portador, Inmune Heridas Múltiples." },
        "Anillo de las tinieblas": { points: 35, faction: "nmuert", relic: false, summary: "TSE 5+, RM(2)." },
        "Relicario de condenación": { points: 25, faction: "nmuert", relic: false, summary: "Portador y unidad: RM(1), Reg(6+)." },
        "Colgante de nieblas y sombras": { points: 25, faction: "nmuert", relic: false, summary: "Sólo hechiceros. Etéreo. -1 impactar con armas mágicas." }
    },
    "Objeto Hechizado": {
        "Corona del Rey Brujo": { points: 80, faction: "nmuert", relic: true, summary: "Sólo Rey Tumulario. Nvl4 Saber Muerte. Lanza con armadura." },
        "El Libro Maldito": { points: 50, faction: "nmuert", relic: false, summary: "Enemigos en contacto: -1 impactar. No afecta NoMuertos/Demonios." },
        "Manto de la larga noche": { points: 45, faction: "nmuert", relic: false, summary: "No atacar CaC. Sólo impactado con 6+." },
        "La garra de Nagash": { points: 40, faction: "nmuert", relic: false, summary: "Portahechizos(2D6). Daño directo: 2D6-R heridas." },
        "Ánfora de huesos": { points: 35, faction: "nmuert", relic: false, summary: "Un uso. Invoca 1D6+9 esqueletos (8\")." },
        "Máscara azabache": { points: 30, faction: "nmuert", relic: false, summary: "Terror. Chequeos Terror: 3D6 descarta bajo." },
        "Anillo del viento de la muerte": { points: 25, faction: "nmuert", relic: false, summary: "Portahechizos(3). Proyectil: 2D6 impactos F3, pánico si baja." },
        "Icono del Vigor Mortis": { points: 15, faction: "nmuert", relic: false, summary: "+6\" Presencia Inspiradora y marcha del General." }
    },
    "Artefacto Arcano": {
        "El Libro de las Sombras": { points: 60, faction: "nmuert", relic: true, summary: "Señor Conocimiento: Nigromancia y Sombras." },
        "Libro de Arkhan": { points: 35, faction: "nmuert", relic: false, summary: "Portahechizos(7). Potenciación: +1 impactar CaC (12\")." },
        "Craneo Aullante": { points: 35, faction: "nmuert", relic: false, summary: "Portahechizos(4). Danza Macabra (12\", no repetible)." },
        "Familiar necrótico": { points: 30, faction: "nmuert", relic: false, summary: "+1D invocación para Invocación Nehek/Animar Muertos." },
        "Báculo de Huesos": { points: 25, faction: "nmuert", relic: false, summary: "Revela objetos mágicos enemigos 12\". Repite disfunciones." },
        "Piedra de oscuridad": { points: 25, faction: "nmuert", relic: false, summary: "-2 lanzar Saber Luz. Repite canalizar." },
        "Sombrero de la hechicería": { points: 15, faction: "nmuert", relic: false, summary: "Puede elegir hechizos: Fuego, Metal, Cielos o Bestias." }
    },
    "Estandarte Mágico": {
        "Estandarte de guerra de Drachenfels": { points: 45, faction: "nmuert", relic: true, summary: "Enemigos 6\": -2L." },
        "Estandarte funerario": { points: 50, faction: "nmuert", relic: false, summary: "Unidad: Golpe Letal (o 5+ si ya lo tiene)." },
        "Estandarte de los túmulos": { points: 45, faction: "nmuert", relic: false, summary: "Sólo Tumularios. +1 impactar CaC." },
        "Estandarte de la carne eterna": { points: 40, faction: "nmuert", relic: false, summary: "Unidad: Regeneración(5+)." },
        "Icono de la Piramide": { points: 40, faction: "nmuert", relic: false, summary: "Sólo Momias. +1RM, +1TSA sobrenatural." },
        "Estandarte de los lamentos": { points: 25, faction: "nmuert", relic: false, summary: "Chequeos Miedo: 3D6 descarta bajo." },
        "Pabellón de los condenados": { points: 25, faction: "nmuert", relic: false, summary: "Sólo Cab. Esquelética. Impacta automático al cargar." },
        "Estandarte de la legión eterna": { points: 25, faction: "nmuert", relic: false, summary: "Potenciación → +1D invocación." },
        "Estandarte del Vigor Mortis": { points: 25, faction: "nmuert", relic: false, summary: "Unidad: +1HA." },
        "Estandarte de los huesos": { points: 25, faction: "nmuert", relic: false, summary: "Sólo Esqueletos/Cab. Esquelética. Odio." },
        "Pabellón impío": { points: 20, faction: "nmuert", relic: false, summary: "Unidad: Marcha siempre." }
    }
};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "No Muertos",
    FACTION_ID: "nmuert",
    FOC_CONFIG: { 
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_nmuert,
    mountsDB: mountsDB_nmuert,
    magicItemsDB: magicItemsDB_nmuert,
    armySkillsDB: armySkillsDB_nmuert,
    specialProfilesDB: {}, // No special profiles like Fanatics in this army
    armySkillsLabel: "Arcanos Nigrománticos", // Custom label for the skills button
};
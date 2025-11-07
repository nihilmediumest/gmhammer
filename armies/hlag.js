// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: HOMBRES LAGARTO ---
// ===================================================================================
// Last Updated: 2025-10-04 - v4.1
import { commonMagicItemsDB } from '../comun.js';

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_hlag = {
    // === CORE ===
    "Guerreros Saurios": {
        faction: "hlag",
        foc: "Core",
        points: 12,
        min: 10,
        max: 30,
        equipo: "Arma de mano y Escudo.",
        reglasEspeciales: "Sangre Fría, Cruzar (elementos acuáticos), Piel Escamosa (5+)",
        perfiles: [
            { nombre: "Guerrero Saurio", stats: { M: 4, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 1, A: 2, L: 8 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 1, A: 3, L: 8 } }
        ],
        options: [
            { n: "Lanza", p: 1 },
            { n: "Desove Tzunki (+2I)", p: 1 },
            { n: "Desove Sotek (Odio)", p: 1 },
            { n: "Desove Quetzl (+1 Piel Escamosa)", p: 2 },
            { n: "Desove Tlazcotl (Inmune Psicología)", p: 1 },
            { n: "Desove Chotek (Veloz)", p: 1 },
            { n: "Desove Huanchi (Cruzar bosques)", p: 1 },
            { n: "Desove Tepok (Canaliza 6+)", p: 1 },
            { n: "Desove Quetli (RM1)", p: 1 },
            { n: "Desove Tlanxa (Carga Devastadora)", p: 1 },
            { n: "Desove Xhotl (Ataques mágicos)", p: 1 },
            { n: "Desove Chicotl (Regeneración 6+)", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50
    },

    "Guerreros Eslizones": {
        faction: "hlag",
        foc: "Core",
        points: 3,
        min: 20,
        max: 50,
        equipo: "Arma de mano.",
        reglasEspeciales: "Sangre Fría, Cruzar (elementos acuáticos)",
        perfiles: [
            { nombre: "Guerrero Eslizón", stats: { M: 6, HA: 2, HP: 3, F: 3, R: 2, H: 1, I: 4, A: 1, L: 6 } },
            { nombre: "Oficial", stats: { M: 6, HA: 2, HP: 3, F: 3, R: 2, H: 1, I: 4, A: 2, L: 6 } },
            { nombre: "Kroxigor", stats: { M: 6, HA: 3, HP: 0, F: 5, R: 4, H: 3, I: 1, A: 3, L: 8 } }
        ],
        options: [
            { n: "Escudo", p: 1 },
            { n: "Lanza", p: 1 },
            { n: "Arco corto", p: 1 },
            { n: "Jabalinas", p: 1 },
            { n: "Ataques envenenados", p: 2 },
            { n: "Kroxigor con arma a dos manos", p: 50, max: 3 },
            { n: "Desove Tzunki (+2I)", p: 1 },
            { n: "Desove Sotek (Odio)", p: 1 },
            { n: "Desove Quetzl (+1 Piel Escamosa)", p: 2 },
            { n: "Desove Tlazcotl (Inmune Psicología)", p: 1 },
            { n: "Desove Chotek (Veloz)", p: 1 },
            { n: "Desove Huanchi (Cruzar bosques)", p: 1 },
            { n: "Desove Tepok (Canaliza 6+)", p: 1 },
            { n: "Desove Quetli (RM1)", p: 1 },
            { n: "Desove Tlanxa (Carga Devastadora)", p: 1 },
            { n: "Desove Xhotl (Ataques mágicos)", p: 1 },
            { n: "Desove Chicotl (Regeneración 6+)", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 4 }, s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } },
        magicBanner: 25
    },

    "Hostigadores Eslizones": {
        faction: "hlag",
        foc: "Core",
        points: 6,
        min: 5,
        max: 15,
        equipo: "Arma de mano.",
        reglasEspeciales: "Sangre Fría, Cruzar (elementos acuáticos), Hostigadores, Vanguardia",
        perfiles: [
            { nombre: "Hostigador Eslizón", stats: { M: 6, HA: 2, HP: 3, F: 3, R: 2, H: 1, I: 4, A: 1, L: 6 } },
            { nombre: "Oficial", stats: { M: 6, HA: 2, HP: 4, F: 3, R: 2, H: 1, I: 4, A: 1, L: 6 } }
        ],
        options: [
            { n: "Arco corto", p: 1 },
            { n: "Jabalinas", p: 1 },
            { n: "Cerbatanas", p: 1 },
            { n: "Ataques envenenados", p: 2 },
            { n: "Desove Tzunki (+2I)", p: 1 },
            { n: "Desove Sotek (Odio)", p: 1 },
            { n: "Desove Quetzl (+1 Piel Escamosa)", p: 2 },
            { n: "Desove Tlazcotl (Inmune Psicología)", p: 1 },
            { n: "Desove Chotek (Veloz)", p: 1 },
            { n: "Desove Huanchi (Cruzar bosques)", p: 1 },
            { n: "Desove Tepok (Canaliza 6+)", p: 1 },
            { n: "Desove Quetli (RM1)", p: 1 },
            { n: "Desove Tlanxa (Carga Devastadora)", p: 1 },
            { n: "Desove Xhotl (Ataques mágicos)", p: 1 },
            { n: "Desove Chicotl (Regeneración 6+)", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 4 }, m: { n: "Músico", p: 4 } }
    },

    "Enjambres de la Jungla": {
        faction: "hlag",
        foc: "Core",
        warning: "0-2",
        points: 20,
        min: 2,
        max: 6,
        equipo: "Colmillos y dientes (arma de mano).",
        reglasEspeciales: "Sangre Fría, Cruzar (elementos acuáticos), Ataques Envenenados",
        perfiles: [
            { nombre: "Enjambre", stats: { M: 6, HA: 3, HP: 0, F: 2, R: 2, H: 4, I: 1, A: 4, L: 10 } }
        ]
    },

    // === SPECIAL ===
    "Guardia del Templo": {
        faction: "hlag",
        foc: "Special",
        points: 16,
        min: 10,
        max: 30,
        equipo: "Alabarda y armadura ligera.",
        reglasEspeciales: "Sangre Fría, Cruzar (elementos acuáticos), Piel Escamosa (5+), Escolta",
        perfiles: [
            { nombre: "Guarda del Templo", stats: { M: 4, HA: 4, HP: 0, F: 4, R: 4, H: 1, I: 2, A: 2, L: 8 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 0, F: 4, R: 4, H: 1, I: 2, A: 3, L: 8 } }
        ],
        options: [
            { n: "Escudo", p: 1 },
            { n: "Desove Tzunki (+2I)", p: 1 },
            { n: "Desove Sotek (Odio)", p: 1 },
            { n: "Desove Quetzl (+1 Piel Escamosa)", p: 2 },
            { n: "Desove Tlazcotl (Inmune Psicología)", p: 1 },
            { n: "Desove Chotek (Veloz)", p: 1 },
            { n: "Desove Huanchi (Cruzar bosques)", p: 1 },
            { n: "Desove Tepok (Canaliza 6+)", p: 1 },
            { n: "Desove Quetli (RM1)", p: 1 },
            { n: "Desove Tlanxa (Carga Devastadora)", p: 1 },
            { n: "Desove Xhotl (Ataques mágicos)", p: 1 },
            { n: "Desove Chicotl (Regeneración 6+)", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50,
        champItems: 25
    },

    "Guerreros Gélidos": {
        faction: "hlag",
        foc: "Special",
        points: 32,
        min: 5,
        max: 15,
        equipo: "Arma de mano, Lanza, Armadura ligera y Escudo.",
        reglasEspeciales: "Sangre Fría, Cruzar (elementos acuáticos), Piel Escamosa (5+), Miedo, Estupidez",
        perfiles: [
            { nombre: "Guerrero Gélido", stats: { M: 4, HA: 4, HP: 0, F: 4, R: 4, H: 1, I: 2, A: 2, L: 8 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 0, F: 4, R: 4, H: 1, I: 2, A: 3, L: 8 } },
            { nombre: "Gélido", stats: { M: 7, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 1, A: 2, L: 2 } }
        ],
        options: [
            { n: "Desove Tzunki (+2I)", p: 1 },
            { n: "Desove Sotek (Odio)", p: 2 },
            { n: "Desove Quetzl (+1 Piel Escamosa)", p: 2 },
            { n: "Desove Tlazcotl (Inmune Psicología)", p: 1 },
            { n: "Desove Huanchi (Cruzar bosques)", p: 1 },
            { n: "Desove Tepok (Canaliza 6+)", p: 1 },
            { n: "Desove Quetli (RM1)", p: 1 },
            { n: "Desove Tlanxa (Carga Devastadora)", p: 1 },
            { n: "Desove Xhotl (Ataques mágicos)", p: 1 },
            { n: "Desove Chicotl (Regeneración 6+)", p: 1 },
            { n: "Desove Itzl (Tozudos)", p: 3 }
        ],
        command: { c: { n: "Oficial", p: 8 }, s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } },
        magicBanner: 50,
        champItems: 25
    },

    "Salamandras": {
        faction: "hlag",
        foc: "Special",
        warning: "0-1",
        points: 50,
        min: 1,
        max: 3,
        equipo: "Los Batidores van armados con Lanza.",
        reglasEspeciales: "Sangre Fría, Cruzar (elementos acuáticos), Hostigadores, Piel Escamosa (5+), Miedo, Escupir Fuego",
        perfiles: [
            { nombre: "Batidor Eslizón", stats: { M: 7, HA: 2, HP: 3, F: 3, R: 2, H: 1, I: 4, A: 1, L: 6 } },
            { nombre: "Salamandra", stats: { M: 7, HA: 3, HP: 0, F: 5, R: 4, H: 3, I: 3, A: 2, L: 3 } }
        ],
        options: [
            { n: "Batidor Eslizón adicional", p: 5 },
            { n: "Salamandra Moteada", p: 5 }
        ]
    },

    "Razordones": {
        faction: "hlag",
        foc: "Special",
        warning: "0-1",
        points: 50,
        min: 1,
        max: 3,
        equipo: "Los Batidores van armados con Lanza.",
        reglasEspeciales: "Sangre Fría, Cruzar (elementos acuáticos), Hostigadores, Piel Escamosa (4+), Furia Asesina, Miedo, Descarga de Púas",
        perfiles: [
            { nombre: "Batidor Eslizón", stats: { M: 7, HA: 2, HP: 3, F: 3, R: 2, H: 1, I: 4, A: 1, L: 6 } },
            { nombre: "Razordón", stats: { M: 7, HA: 3, HP: 0, F: 5, R: 4, H: 3, I: 3, A: 3, L: 3 } }
        ],
        options: [
            { n: "Batidor Eslizón adicional", p: 5 }
        ]
    },

    "Jinetes de Terradón": {
        faction: "hlag",
        foc: "Special",
        points: 28,
        min: 3,
        max: 6,
        equipo: "Arma de mano.",
        reglasEspeciales: "Sangre Fría, Caballería Rápida, Volar, Hostigadores, Descarga en Vuelo",
        perfiles: [
            { nombre: "Eslizón", stats: { M: 6, HA: 2, HP: 3, F: 3, R: 2, H: 1, I: 4, A: 1, L: 6 } },
            { nombre: "Oficial", stats: { M: 6, HA: 2, HP: 4, F: 3, R: 2, H: 1, I: 4, A: 1, L: 6 } },
            { nombre: "Terradón", stats: { M: 1, HA: 3, HP: 0, F: 4, R: 3, H: 2, I: 4, A: 2, L: 3 } }
        ],
        options: [
            { n: "Arcos Cortos", p: 1 },
            { n: "Jabalinas", p: 1 },
            { n: "Lanzas", p: 1 },
            { n: "Ataques Envenenados", p: 1 }
        ],
        command: { c: { n: "Oficial", p: 8 } }
    },

    "Kroxigores": {
        faction: "hlag",
        foc: "Special",
        points: 45,
        min: 3,
        max: 6,
        equipo: "Arma a dos manos.",
        reglasEspeciales: "Sangre Fría, Cruzar (elementos acuáticos), Piel Escamosa (4+), Miedo",
        perfiles: [
            { nombre: "Kroxigor", stats: { M: 6, HA: 3, HP: 0, F: 5, R: 4, H: 3, I: 1, A: 3, L: 8 } },
            { nombre: "Oficial", stats: { M: 6, HA: 3, HP: 0, F: 5, R: 4, H: 3, I: 1, A: 4, L: 8 } }
        ],
        command: { c: { n: "Oficial", p: 8 } }
    },

    "Bastiodón": {
        faction: "hlag",
        foc: "Special",
        points: 165,
        min: 1,
        max: 1,
        equipo: "Los Eslizones van equipados con lanzas y Jabalinas.",
        reglasEspeciales: "Piel Escamosa (2+), Sangre Fría, Cruzar (elementos acuáticos), Impactos por carga (1D3), Cola Maza, Dotación del Castillo",
        perfiles: [
            { nombre: "Bastiodón", stats: { M: 6, HA: 2, HP: 0, F: 5, R: 6, H: 5, I: 1, A: 3, L: 6 } },
            { nombre: "Eslizón (4)", stats: { M: 6, HA: 2, HP: 3, F: 3, R: "-", H: "-", I: 4, A: 1, L: 6 } }
        ],
        options: [
            { n: "Arco corto", p: 1 },
            { n: "Ataques envenenados", p: 2 },
            { n: "Arca de Sotek", p: 20, costType: "flat" },
            { n: "Artefacto Solar", p: 45, costType: "flat" }
        ]
    },

    "Estegadón": {
        faction: "hlag",
        foc: "Special",
        points: 205,
        min: 1,
        max: 1,
        equipo: "Los Eslizones van equipados con lanzas y Jabalinas.",
        reglasEspeciales: "Piel Escamosa (3+), Sangre Fría, Cruzar (elementos acuáticos), Impactos por carga (1D6), Tozudez, Dotación del Castillo",
        perfiles: [
            { nombre: "Estegadón", stats: { M: 6, HA: 3, HP: 0, F: 6, R: 6, H: 6, I: 2, A: 4, L: 6 } },
            { nombre: "Eslizón (4)", stats: { M: 6, HA: 2, HP: 3, F: 3, R: "-", H: "-", I: 4, A: 1, L: 6 } }
        ],
        options: [
            { n: "Eslizón adicional", p: 5, max: 2 },
            { n: "Arco corto", p: 1 },
            { n: "Ataques envenenados", p: 2 },
            { n: "Arco Gigante", p: 30, costType: "flat" }
        ]
    },

    // === RARE ===
    "Eslizones Camaleón": {
        faction: "hlag",
        foc: "Rare",
        points: 12,
        min: 5,
        max: 15,
        equipo: "Arma de mano, Cerbatana.",
        reglasEspeciales: "Sangre Fría, Hostigadores, Cruzar (elementos acuáticos), Exploradores, Ataques Envenenados, Piel Camaleónica",
        perfiles: [
            { nombre: "Eslizón Camaleón", stats: { M: 6, HA: 2, HP: 4, F: 3, R: 2, H: 1, I: 5, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 6, HA: 2, HP: 5, F: 3, R: 2, H: 1, I: 5, A: 1, L: 7 } }
        ],
        command: { c: { n: "Oficial", p: 6 } }
    },

    "Jinetes de Gélido Cornudo": {
        faction: "hlag",
        foc: "Rare",
        points: 18,
        min: 5,
        max: 15,
        equipo: "Arma de mano, Lanza, Jabalinas y Escudo.",
        reglasEspeciales: "Sangre Fría, Cruzar (elementos acuáticos), Caballería Rápida, Impactos por carga (1)",
        perfiles: [
            { nombre: "Eslizón Gran Cresta", stats: { M: 6, HA: 3, HP: 3, F: 3, R: 2, H: 1, I: 5, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 6, HA: 3, HP: 3, F: 3, R: 2, H: 1, I: 5, A: 2, L: 7 } },
            { nombre: "Gélido Cornudo", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 4 } }
        ],
        options: [
            { n: "Ataques envenenados", p: 2 },
            { n: "Desove Itzl (Tozudos)", p: 3 }
        ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },

    "Estegadón Anciano": {
        faction: "hlag",
        foc: "Rare",
        points: 240,
        min: 1,
        max: 1,
        equipo: "Los Eslizones van equipados con lanzas y Jabalinas.",
        reglasEspeciales: "Piel Escamosa (2+), Sangre Fría, Cruzar (elementos acuáticos), Impactos por carga (1D6+1), Tozudez, Dotación del Castillo",
        perfiles: [
            { nombre: "Estegadón Anciano", stats: { M: 6, HA: 4, HP: 0, F: 6, R: 6, H: 7, I: 1, A: 4, L: 7 } },
            { nombre: "Eslizón (4)", stats: { M: 6, HA: 2, HP: 3, F: 3, R: "-", H: "-", I: 4, A: 1, L: 6 } }
        ],
        options: [
            { n: "Eslizón adicional", p: 5, max: 2 },
            { n: "Arco corto", p: 1 },
            { n: "Ataques envenenados", p: 2 },
            { n: "Cerbatanas Gigantes", p: 20, costType: "flat" }
        ]
    },

    "Troglodón": {
        faction: "hlag",
        foc: "Rare",
        points: 185,
        min: 1,
        max: 1,
        equipo: "Garras y dientes (arma de mano).",
        reglasEspeciales: "Piel Escamosa (4+), Sangre Fría, Cruzar (elementos acuáticos), Ataques Envenenados, Escupir Veneno",
        perfiles: [
            { nombre: "Troglodón", stats: { M: 7, HA: 3, HP: 3, F: 6, R: 5, H: 6, I: 3, A: 5, L: 6 } }
        ]
    },

    "Cazadores Jinetes de Destripadáctilos": {
        faction: "hlag",
        foc: "Rare",
        points: 35,
        min: 3,
        max: 6,
        equipo: "Arma de mano, lanza y Escudo",
        reglasEspeciales: "Miedo, Sangre Fría, Caballería Rápida, Volar, Hostigadores, Furia Asesina, Poder de Penetración",
        perfiles: [
            { nombre: "Cazador Eslizón", stats: { M: 6, HA: 3, HP: 3, F: 3, R: 2, H: 1, I: 5, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 6, HA: 3, HP: 3, F: 3, R: 2, H: 1, I: 5, A: 2, L: 7 } },
            { nombre: "Destripadáctilo", stats: { M: 1, HA: 4, HP: 0, F: 4, R: 4, H: 3, I: 4, A: 2, L: 5 } }
        ],
        options: [
            { n: "Ataques Envenenados", p: 2 }
        ],
        command: { c: { n: "Oficial", p: 8 } }
    },

    // === LORDS ===
    "Mago-Sacerdote Slann": {
        faction: "hlag",
        foc: "Lord",
        points: 290,
        min: 1,
        max: 1,
        equipo: "Arma de mano",
        reglasEspeciales: "Cruzar (elementos acuáticos), Sangre Fría, Flotar, Escudo de los Ancestrales(4+), Trono de Piedra, Telepatía",
        perfiles: [
            { nombre: "Mago-Sacerdote Slann", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 4, H: 5, I: 4, A: 1, L: 9 } }
        ],
        options: [
            { n: "Cuarta generación", p: 30 },
            { n: "Tercera generación", p: 100 },
            { n: "Segunda generación", p: 160 }
        ],
        maxMagicItems: 3,
        maxRelics: 3,
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 }
    },

    "Saurio Viejaestirpe": {
        faction: "hlag",
        foc: "Lord",
        points: 165,
        min: 1,
        max: 1,
        equipo: "Arma de mano, armadura ligera",
        reglasEspeciales: "Sangre Fría, Cruzar (elementos acuáticos), Piel Escamosa (5+)",
        perfiles: [
            { nombre: "Saurio viejaestirpe", stats: { M: 4, HA: 6, HP: 0, F: 5, R: 5, H: 3, I: 3, A: 5, L: 8 } }
        ],
        options: [
            { n: "Lanza", p: 6 },
            { n: "Alabarda", p: 8 },
            { n: "Arma a dos manos", p: 6 },
            { n: "Escudo", p: 5 },
            { n: "Desove Tzunki (+2I)", p: 5 },
            { n: "Desove Sotek (Odio)", p: 6 },
            { n: "Desove Quetzl (+1 Piel Escamosa)", p: 10 },
            { n: "Desove Tlazcotl (Inmune Psicología)", p: 5 },
            { n: "Desove Chotek (Veloz)", p: 5 },
            { n: "Desove Huanchi (Cruzar bosques)", p: 3 },
            { n: "Desove Tepok (Canaliza 6+)", p: 5 },
            { n: "Desove Quetli (RM1)", p: 15 },
            { n: "Desove Tlanxa (Carga Devastadora)", p: 5 },
            { n: "Desove Itzl (Tozudos)", p: 30 },
            { n: "Desove Xhotl (Ataques mágicos)", p: 5 },
            { n: "Desove Chicotl (Regeneración 6+)", p: 10 },
            { n: "Marca Sagrada de los Ancestrales", p: 20 }
        ],
        mounts: ["Gélido", "Carnosaurio", "Carnosaurio Alfa"],
        maxMagicItems: 3,
        maxRelics: 1
    },

    "Cacique Eslizón": {
        faction: "hlag",
        foc: "Lord",
        points: 50,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Sangre Fría, Cruzar (elementos acuáticos), Ataques Envenenados",
        perfiles: [
            { nombre: "Cacique Eslizón", stats: { M: 6, HA: 5, HP: 6, F: 3, R: 3, H: 3, I: 7, A: 4, L: 8 } }
        ],
        options: [
            { n: "Lanza", p: 4 },
            { n: "Cerbatana", p: 5 },
            { n: "Jabalinas", p: 3 },
            { n: "Arco corto", p: 6 },
            { n: "Armadura ligera", p: 3 },
            { n: "Escudo", p: 3 },
            { n: "Vetro Oracular", p: 10 },
            { n: "Desove Tzunki (+2I)", p: 5 },
            { n: "Desove Sotek (Odio)", p: 5 },
            { n: "Desove Quetzl (+1 Piel Escamosa)", p: 10 },
            { n: "Desove Tlazcotl (Inmune Psicología)", p: 5 },
            { n: "Desove Chotek (Veloz)", p: 5 },
            { n: "Desove Huanchi (Cruzar bosques)", p: 5 },
            { n: "Desove Tepok (Canaliza 6+)", p: 5 },
            { n: "Desove Quetli (RM1)", p: 15 },
            { n: "Desove Itzl (Tozudos)", p: 20 },
            { n: "Desove Xhotl (Ataques mágicos)", p: 5 },
            { n: "Desove Chicotl (Regeneración 6+)", p: 10 },
            { n: "Marca Sagrada de los Ancestrales", p: 20 }
        ],
        mounts: ["Gélido Cornudo", "Terradón", "Destripadáctilo", "Troglodón", "Estegadón", "Estegadón Anciano"],
        maxMagicItems: 3,
        maxRelics: 1
    },

    // === HEROES ===
    "Oráculo Eslizón": {
        faction: "hlag",
        foc: "Hero",
        points: 145,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Sangre Fría, Cruzar (elementos acuáticos), Ataques Envenenados, Oráculo Eslizón",
        perfiles: [
            { nombre: "Oráculo Eslizón", stats: { M: 6, HA: 3, HP: 3, F: 3, R: 3, H: 3, I: 5, A: 1, L: 7 } }
        ],
        options: [
            { n: "Lanza", p: 2 },
            { n: "Cerbatana", p: 3 },
            { n: "Jabalinas", p: 2 },
            { n: "Nivel de magia 3", p: 0 },
            { n: "Desove Tzunki (+2I)", p: 5 },
            { n: "Desove Sotek (Odio)", p: 5 },
            { n: "Desove Quetzl (+1 Piel Escamosa)", p: 10 },
            { n: "Desove Tlazcotl (Inmune Psicología)", p: 5 },
            { n: "Desove Chotek (Veloz)", p: 5 },
            { n: "Desove Huanchi (Cruzar bosques)", p: 5 },
            { n: "Desove Tepok (Canaliza 6+)", p: 5 },
            { n: "Desove Quetli (RM1)", p: 15 },
            { n: "Desove Itzl (Tozudos)", p: 20 },
            { n: "Desove Xhotl (Ataques mágicos)", p: 5 },
            { n: "Desove Chicotl (Regeneración 6+)", p: 10 },
            { n: "Marca Sagrada de los Ancestrales", p: 20 }
        ],
        mounts: ["Gélido Cornudo", "Terradón", "Troglodón"],
        maxMagicItems: 2,
        maxRelics: 1
    },

    "Saurio Escamadura": {
        faction: "hlag",
        foc: "Hero",
        points: 120,
        min: 1,
        max: 1,
        equipo: "Arma de mano, armadura ligera",
        reglasEspeciales: "Sangre Fría, Cruzar (elementos acuáticos), Piel Escamosa (5+)",
        perfiles: [
            { nombre: "Saurio Escamadura", stats: { M: 4, HA: 5, HP: 0, F: 5, R: 5, H: 2, I: 3, A: 4, L: 8 } }
        ],
        options: [
            { n: "Lanza", p: 4 },
            { n: "Alabarda", p: 6 },
            { n: "Arma a dos manos", p: 4 },
            { n: "Escudo", p: 3 },
            { n: "Desove Tzunki (+2I)", p: 5 },
            { n: "Desove Sotek (Odio)", p: 5 },
            { n: "Desove Quetzl (+1 Piel Escamosa)", p: 10 },
            { n: "Desove Tlazcotl (Inmune Psicología)", p: 5 },
            { n: "Desove Chotek (Veloz)", p: 5 },
            { n: "Desove Huanchi (Cruzar bosques)", p: 5 },
            { n: "Desove Tepok (Canaliza 6+)", p: 5 },
            { n: "Desove Quetli (RM1)", p: 15 },
            { n: "Desove Tlanxa (Carga Devastadora)", p: 5 },
            { n: "Desove Itzl (Tozudos)", p: 30 },
            { n: "Desove Xhotl (Ataques mágicos)", p: 5 },
            { n: "Desove Chicotl (Regeneración 6+)", p: 10 },
            { n: "Marca Sagrada de los Ancestrales", p: 20 }
        ],
        mounts: ["Gélido", "Carnosaurio"],
        maxMagicItems: 2,
        battleStandard: { name: "Portaestandarte de Batalla", cost: 25 }
    },

    "Chamán Eslizón": {
        faction: "hlag",
        foc: "Hero",
        points: 55,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Sangre Fría, Cruzar (elementos acuáticos), Ataques Envenenados",
        perfiles: [
            { nombre: "Chamán Eslizón", stats: { M: 6, HA: 2, HP: 3, F: 3, R: 2, H: 2, I: 4, A: 1, L: 7 } }
        ],
        options: [
            { n: "Lanza", p: 2 },
            { n: "Cerbatana", p: 3 },
            { n: "Jabalinas", p: 2 },
            { n: "Nivel de magia 2", p: 35 },
            { n: "Desove Tzunki (+2I)", p: 5 },
            { n: "Desove Sotek (Odio)", p: 5 },
            { n: "Desove Quetzl (+1 Piel Escamosa)", p: 10 },
            { n: "Desove Tlazcotl (Inmune Psicología)", p: 5 },
            { n: "Desove Chotek (Veloz)", p: 5 },
            { n: "Desove Huanchi (Cruzar bosques)", p: 5 },
            { n: "Desove Tepok (Canaliza 6+)", p: 5 },
            { n: "Desove Quetli (RM1)", p: 15 },
            { n: "Desove Itzl (Tozudos)", p: 20 },
            { n: "Desove Xhotl (Ataques mágicos)", p: 5 },
            { n: "Desove Chicotl (Regeneración 6+)", p: 10 },
            { n: "Marca Sagrada de los Ancestrales", p: 20 }
        ],
        mounts: ["Gélido Cornudo", "Terradón", "Estegadón Anciano con Artefacto de los Dioses"],
        maxMagicItems: 2
    },

    "Jefe Eslizón": {
        faction: "hlag",
        foc: "Hero",
        points: 30,
        min: 1,
        max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Sangre Fría, Cruzar (elementos acuáticos), Ataques Envenenados",
        perfiles: [
            { nombre: "Jefe Eslizón", stats: { M: 6, HA: 4, HP: 5, F: 3, R: 3, H: 2, I: 6, A: 3, L: 7 } }
        ],
        options: [
            { n: "Lanza", p: 3 },
            { n: "Cerbatana", p: 4 },
            { n: "Jabalinas", p: 2 },
            { n: "Arco corto", p: 5 },
            { n: "Armadura ligera", p: 2 },
            { n: "Escudo", p: 2 },
            { n: "Desove Tzunki (+2I)", p: 5 },
            { n: "Desove Sotek (Odio)", p: 5 },
            { n: "Desove Quetzl (+1 Piel Escamosa)", p: 10 },
            { n: "Desove Tlazcotl (Inmune Psicología)", p: 5 },
            { n: "Desove Chotek (Veloz)", p: 5 },
            { n: "Desove Huanchi (Cruzar bosques)", p: 5 },
            { n: "Desove Tepok (Canaliza 6+)", p: 5 },
            { n: "Desove Quetli (RM1)", p: 15 },
            { n: "Desove Itzl (Tozudos)", p: 20 },
            { n: "Desove Xhotl (Ataques mágicos)", p: 5 },
            { n: "Desove Chicotl (Regeneración 6+)", p: 10 },
            { n: "Marca Sagrada de los Ancestrales", p: 20 }
        ],
        mounts: ["Gélido Cornudo", "Terradón", "Destripadáctilo"],
        maxMagicItems: 2
    }
};

const mountsDB_hlag = {
    "Gélido": { 
        faction: "hlag", 
        points: 18, 
        perfiles: [ { nombre: "Gélido", stats: { M: 7, HA: 3, HP: 0, F: 4, R: 4, H: 1, I: 1, A: 2, L: 2 } } ], 
        reglasEspeciales: "Bestia. Cambia tipo a Caballería. Miedo, Estupidez, Cruzar (elementos acuáticos), Sangre Fría. +2 TSA jinete." 
    },
    "Gélido Cornudo": { 
        faction: "hlag", 
        points: 15, 
        perfiles: [ { nombre: "Gélido Cornudo", stats: { M: 8, HA: 3, HP: 0, F: 4, R: 3, H: 1, I: 3, A: 1, L: 4 } } ], 
        reglasEspeciales: "Bestia. Cambia tipo a Caballería. Caballería Rápida, Impactos por carga (1), Cruzar (elementos acuáticos), Sangre Fría. +2 TSA jinete." 
    },
    "Terradón": { 
        faction: "hlag", 
        points: 35, 
        perfiles: [ { nombre: "Terradón", stats: { M: 1, HA: 3, HP: 0, F: 4, R: 3, H: 2, I: 4, A: 2, L: 3 } } ], 
        reglasEspeciales: "Bestia Monstruosa. Cambia tipo a Caballería Monstruosa. Volar, Hostigadores, Caballería Rápida, Sangre Fría, Descarga en Vuelo." 
    },
    "Destripadáctilo": { 
        faction: "hlag", 
        points: 55, 
        perfiles: [ { nombre: "Destripadáctilo", stats: { M: 1, HA: 4, HP: 0, F: 4, R: 4, H: 3, I: 4, A: 2, L: 5 } } ], 
        reglasEspeciales: "Bestia Monstruosa. Cambia tipo a Caballería Monstruosa. Volar, Hostigadores, Caballería Rápida, Sangre Fría, Miedo, Furia Asesina, Poder de Penetración." 
    },
    "Estegadón": { 
        faction: "hlag", 
        points: 190, 
        perfiles: [
            { nombre: "Estegadón", stats: { M: 6, HA: 3, HP: 0, F: 6, R: 6, H: 6, I: 2, A: 4, L: 6 } },
            { nombre: "Eslizón (1)", stats: { M: 6, HA: 2, HP: 3, F: 3, R: "-", H: "-", I: 4, A: 1, L: 6 } }
        ],
        reglasEspeciales: "Monstruo. Piel Escamosa (3+), Sangre Fría, Cruzar (elementos acuáticos), Impactos por carga (1D6), Tozudez, Dotación del Castillo." 
    },
    "Estegadón Anciano": { 
        faction: "hlag", 
        points: 225, 
        perfiles: [
            { nombre: "Estegadón Anciano", stats: { M: 6, HA: 4, HP: 0, F: 6, R: 6, H: 7, I: 1, A: 4, L: 7 } },
            { nombre: "Eslizón (1)", stats: { M: 6, HA: 2, HP: 3, F: 3, R: "-", H: "-", I: 4, A: 1, L: 6 } }
        ],
        reglasEspeciales: "Monstruo. Piel Escamosa (2+), Sangre Fría, Cruzar (elementos acuáticos), Impactos por carga (1D6+1), Tozudez, Dotación del Castillo." 
    },
    "Troglodón": { 
        faction: "hlag", 
        points: 190, 
        perfiles: [ { nombre: "Troglodón", stats: { M: 7, HA: 3, HP: 3, F: 6, R: 5, H: 6, I: 3, A: 5, L: 6 } } ],
        reglasEspeciales: "Monstruo. Piel Escamosa (4+), Sangre Fría, Cruzar (elementos acuáticos), Ataques Envenenados, Escupir Veneno." 
    },
    "Carnosaurio": { 
        faction: "hlag", 
        points: 195, 
        perfiles: [ { nombre: "Carnosaurio", stats: { M: 7, HA: 4, HP: 0, F: 6, R: 5, H: 5, I: 3, A: 4, L: 6 } } ],
        reglasEspeciales: "Monstruo. Piel Escamosa (4+), Furia Asesina, Heridas múltiples (1D3), Sangre Fría, Cruzar (elementos acuáticos)." 
    },
    "Carnosaurio Alfa": { 
        faction: "hlag", 
        points: 260, 
        perfiles: [ { nombre: "Carnosaurio Alfa", stats: { M: 7, HA: 4, HP: 0, F: 7, R: 6, H: 6, I: 2, A: 5, L: 6 } } ],
        reglasEspeciales: "Monstruo. Piel Escamosa (4+), Furia Asesina, Heridas múltiples (1D3), Sangre Fría, Cruzar (elementos acuáticos)." 
    }
};

const armySkillsDB_hlag = {
    // Note: Hombres Lagarto don't have traditional army skills like other factions
    // This DB is kept for consistency but may remain empty or contain faction-specific abilities
};

const magicItemsDB_hlag = {
    "Arma Mágica": {
        "Espada de Cocacila": { points: 50, faction: "hlag", relic: true, summary: "AM. Anula objetos mágicos enemigos en contacto." },
        "Daga de Sotek": { points: 35, faction: "hlag", relic: false, summary: "Sólo eslizones. AM. +1F, unidades heridas Apabulladas." },
        "Espada Interdimensional": { points: 30, faction: "hlag", relic: false, summary: "AM. No TSE, Heridas Múltiples (1D3) vs Demonios." },
        "Alabarda del Sol Resplandeciente": { points: 30, faction: "hlag", relic: false, summary: "Alabarda. +1A, doble I, Odio." },
        "Maza de la Premonición": { points: 30, faction: "hlag", relic: false, summary: "A2M. +1 impactar CaC." },
        "Báculo del Sol Perdido": { points: 30, faction: "hlag", relic: false, summary: "Sólo eslizones. AM o disparo: 18\" F5, DM3, DR, AF." },
        "Espada Piraña": { points: 20, faction: "hlag", relic: false, summary: "Sólo eslizones. AM. Poder Penetración, HM2." },
        "Lanza de Guerra del Estegadón": { points: 10, faction: "hlag", relic: false, summary: "Sólo eslizones montados. Impactos carga: 2D6 elige mayor." },
        "Cimitarra Ardiente de Chotek": { points: 10, faction: "hlag", relic: false, summary: "AM. Poder Penetración, Ataques Flamígeros." }
    },
    "Armadura Mágica": {
        "Pellejo de Gélido": { points: 60, faction: "hlag", relic: true, summary: "Sólo Saurios. AP. +2R, TSE5+, Estupidez." },
        "Escudo del Estanque Cristalino": { points: 40, faction: "hlag", relic: true, summary: "Escudo. Portador y montura: TSE4+ vs proyectiles y daño directo." },
        "Armadura del Jaguar": { points: 40, faction: "hlag", relic: false, summary: "AL. Esquiva 5+, Tozudo, no unirse a unidades." },
        "Brazales de Chicotl": { points: 30, faction: "hlag", relic: false, summary: "+1 TSA, Regeneración (5+)." },
        "Escudo Mutilador": { points: 20, faction: "hlag", relic: false, summary: "Escudo. +1A, Ataques Mágicos." },
        "Yelmo Sagrado del Estegadón": { points: 10, faction: "hlag", relic: false, summary: "Sólo eslizones. Yelmo (+1 TSA). +1L." }
    },
    "Talismán": {
        "Bendición Solar": { points: 35, faction: "hlag", relic: false, summary: "TSE5+, Immune a Fuego, Golpe Letal. No Exploradores." },
        "Gargántilla de los Glifos": { points: 35, faction: "hlag", relic: false, summary: "Sólo Eslizones. Esquiva (4+)." },
        "Talismán de Itzl": { points: 25, faction: "hlag", relic: false, summary: "Sólo con Desove Itzl. Repite TSA falladas." },
        "Aura de Quetzl": { points: 25, faction: "hlag", relic: false, summary: "TSE4+ vs F5 o mayor." }
    },
    "Objeto Hechizado": {
        "Pájaro de Chotek": { points: 40, faction: "hlag", relic: false, summary: "Un uso. 1 turno: no volar/flotar, -1 impactar disparos enemigos." },
        "Estatuilla del Rencor": { points: 35, faction: "hlag", relic: false, summary: "Portahechizos(5). Daño directo: objetivo pierde mitad heridas si falla R." },
        "Colgante Reluciente de Chotek": { points: 25, faction: "hlag", relic: false, summary: "En combate: enemigos en contacto I=0." },
        "Cabeza Maldita": { points: 25, faction: "hlag", relic: false, summary: "Sólo eslizones. Fase magia: enemigo 18\" HM2 por disparos." },
        "Capa de Plumas": { points: 25, faction: "hlag", relic: false, summary: "Sólo eslizones. Volar." },
        "Cuenco Sagrado de Vinatl": { points: 25, faction: "hlag", relic: false, summary: "Sólo Eslizones. Portador y unidad: Furia Asesina." },
        "Libélula de Mercurio": { points: 20, faction: "hlag", relic: false, summary: "Sólo eslizones. Portador y unidad: Vanguardia." },
        "Veneno de la Ranita de Luz": { points: 15, faction: "hlag", relic: false, summary: "Ataques Envenenados y Mágicos. Veneno 5+ si ya tiene." },
        "Pendiente del Carnosaurio": { points: 15, faction: "hlag", relic: false, summary: "Si sufre herida: Furia Asesina y Odio." },
        "Embrujo del Guerrero Jaguar": { points: 15, faction: "hlag", relic: false, summary: "Sólo infantería. M9, Veloz, no unirse a unidades." },
        "Tambor de Guerra de Xahutec": { points: 10, faction: "hlag", relic: false, summary: "Portador y unidad: auto-pasan chequeos atributo (no L)." }
    },
    "Artefacto Arcano": {
        "Placa Sagrada de Tepok": { points: 50, faction: "hlag", relic: true, summary: "Sólo Slann. Lanzar mismo hechizo 2 veces/fase." },
        "Placa de Dominio": { points: 50, faction: "hlag", relic: true, summary: "Sólo Slann. Portahechizos(2D6). Maldición: -mitad HA,HP,I,A,L en 12\"." },
        "Cubo de Oscuridad": { points: 50, faction: "hlag", relic: true, summary: "Un uso. Dispersa hechizo enemigo, 4+ termina fase magia." },
        "Placa Sagrada de Protección": { points: 35, faction: "hlag", relic: true, summary: "Sólo Slann. Escudo Ancestral 3+." },
        "Placa Sagrada de la Confluencia Astral": { points: 35, faction: "hlag", relic: true, summary: "Sólo Slann. Elige nº 1-6: dados energía con ese nº = +1D energía." },
        "Bastón de Los Cielos": { points: 25, faction: "hlag", relic: false, summary: "Sólo Chamanes. +2 lanzar hechizos Cielos." },
        "Diadema de Poder": { points: 20, faction: "hlag", relic: false, summary: "Guarda 2D energía no usados → +2D dispersión siguiente fase enemiga." },
        "Amuleto de la Maldición de Tepok": { points: 20, faction: "hlag", relic: false, summary: "Un uso. Enemigo repite disfunción mágica, +1 canalizar." }
    },
    "Estandarte Mágico": {
        "Tótem Sagrado de Huanchi": { points: 50, faction: "hlag", relic: true, summary: "Un uso. Portahechizos(6). Puente de Sombras para portador y unidad." },
        "Estandarte de la Jungla": { points: 35, faction: "hlag", relic: false, summary: "Sólo Saurios. 2ª fila ataca con lanzas si no movió." },
        "Estandarte del Sol de Sotek": { points: 25, faction: "hlag", relic: false, summary: "-1 impactar disparos vs unidad. Immune hechizos Sombras." },
        "Estandarte de la Sangre Caliente": { points: 25, faction: "hlag", relic: false, summary: "Sólo Saurios. +1HA +1I, no desoves." },
        "Estandarte del Jaguar": { points: 25, faction: "hlag", relic: false, summary: "+1M, Veloz." },
        "Estandarte de Piel de Skaven": { points: 20, faction: "hlag", relic: false, summary: "Odio (Skaven), Skaven Odian unidad, Miedo vs Skaven." }
    }
};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Hombres Lagarto",
    FACTION_ID: "hlag",
    FOC_CONFIG: { 
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_hlag,
    mountsDB: mountsDB_hlag,
    magicItemsDB: magicItemsDB_hlag,
    armySkillsDB: armySkillsDB_hlag,
    specialProfilesDB: {}, // No special profiles in this army
    armySkillsLabel: "Desoves Sagrados", // Custom label for the skills button
};
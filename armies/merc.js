// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: MERCENARIOS ---
// ===================================================================================
// Last Updated: 2025-10-03 @ 14:35 - v4.1 (Cleaned vestigial code)
import { commonMagicItemsDB } from '../comun.js';
// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_merc = {
    // === CORE ===
    "Arqueros": {
        faction: "merc",
        foc: "Core",
        points: 5,
        min: 10,
        max: 40,
        equipo: "Arma de mano, Arco Largo.",
        reglasEspeciales: "Mercenarios.",
        perfiles: [
            { nombre: "Arquero", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 4, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } }
        ],
        options: [ { n: "Flechas incendiarias (Ataques flamígeros)", p: 1 }, { n: "Armadura ligera", p: 1 } ],
        command: { c: { n: "Oficial", p: 4 }, s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } },
        magicBanner: 25
    },
    "Arcabuceros": {
        faction: "merc",
        foc: "Core",
        points: 7,
        min: 10,
        max: 30,
        equipo: "Arcabuz y arma de mano.",
        reglasEspeciales: "Mercenarios.",
        perfiles: [
            { nombre: "Arcabucero", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 4, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } }
        ],
        options: [ { n: "Armadura ligera", p: 1 } ],
        command: { c: { n: "Oficial", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        magicBanner: 25
    },
    "Ballesteros": {
        faction: "merc",
        foc: "Core",
        points: 7,
        min: 10,
        max: 40,
        equipo: "Ballesta y arma de mano.",
        reglasEspeciales: "Mercenarios.",
        perfiles: [
            { nombre: "Ballestero", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 4, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } }
        ],
        options: [ { n: "Armadura ligera", p: 1 } ],
        command: { c: { n: "Oficial", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        magicBanner: 25
    },
    "Piqueros": {
        faction: "merc",
        foc: "Core",
        points: 6,
        min: 10,
        max: 40,
        equipo: "Pica y Armaduras ligeras.",
        reglasEspeciales: "Mercenario.",
        perfiles: [
            { nombre: "Piquero", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 } }
        ],
        options: [ { n: "Sustituir armadura ligera por pesada", p: 1 }, { n: "Escudo", p: 1 } ],
        command: { c: { n: "Oficial", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        magicBanner: 25
    },
    "Infantería Ligera": {
        faction: "merc",
        foc: "Core",
        points: 4,
        min: 10,
        max: 40,
        equipo: "Dos armas de mano y Armadura ligera.",
        reglasEspeciales: "Mercenarios.",
        perfiles: [
            { nombre: "Infantería ligera", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 } }
        ],
        options: [ { n: "Sustituir dos armas de mano por Escudo", p: 0 }, { n: "Sustituir dos armas de mano por lanza", p: 1 }, { n: "Sustituir dos armas de mano por Arma a dos Manos", p: 1 }, { n: "Sustituir dos armas de mano por alabarda", p: 2 } ],
        command: { c: { n: "Oficial", p: 4 }, s: { n: "Portaestandarte", p: 4 }, m: { n: "Músico", p: 4 } },
        magicBanner: 25
    },
    "Infantería Pesada": {
        faction: "merc",
        foc: "Core",
        points: 6,
        min: 10,
        max: 30,
        equipo: "Arma de mano, Armadura Pesada y Escudo.",
        reglasEspeciales: "Mercenarios.",
        perfiles: [
            { nombre: "Infante", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 } }
        ],
        options: [ { n: "Mangual", p: 1 } ],
        command: { c: { n: "Oficial", p: 5 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        magicBanner: 25
    },
    "Piqueros Veteranos": {
        faction: "merc",
        foc: "Core",
        warning: "0-1, o 0-2 en ejércitos de 3000+ pts.",
        points: 8,
        min: 10,
        max: 40,
        equipo: "Pica y Armadura pesada.",
        reglasEspeciales: "Mercenario, Veteranos (inmunes a Pánico), Formación Mixta.",
        perfiles: [
            { nombre: "Piquero", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 2, L: 8 } }
        ],
        options: [ { n: "Escudo", p: 1 }, { n: "Arcabuz (hasta la mitad de la unidad)", p: 3 } ],
        command: { c: { n: "Oficial", p: 8 }, s: { n: "Portaestandarte", p: 5 }, m: { n: "Músico", p: 5 } },
        magicBanner: 50,
        champItems: 15
    },
    "Tropas Auxiliares": {
        faction: "merc",
        foc: "Core",
        warning: "Unidad secundaria: No más U. Secundarias que Básicas.",
        points: 3,
        min: 5,
        max: 15,
        equipo: "Arma de mano.",
        reglasEspeciales: "Hostigadores, Vanguardia, Mercenarios, Repliegue, Unidad secundaria.",
        perfiles: [
            { nombre: "Recluta", stats: { M: 4, HA: 2, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 6 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } }
        ],
        options: [ { n: "Arcos", p: 2 }, { n: "Hondas", p: 2 }, { n: "Cuchillos arrojadizos", p: 1 }, { n: "Jabalinas", p: 1 }, { n: "Pistola", p: 4 } ],
        command: { c: { n: "Oficial", p: 6 }, m: { n: "Músico", p: 4 } }
    },
    "Caballería Ligera": {
        faction: "merc",
        foc: "Core",
        points: 12,
        min: 5,
        max: 15,
        equipo: "Arma de mano y armadura ligera.",
        reglasEspeciales: "Caballería rápida, Mercenarios.",
        perfiles: [
            { nombre: "Jinete", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } },
            { nombre: "Oficial", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 } },
            { nombre: "Caballo de Guerra", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } }
        ],
        options: [ { n: "Lanza", p: 1 }, { n: "Escudo", p: 1 }, { n: "Arco", p: 2 }, { n: "Jabalinas", p: 1 }, { n: "Pistola", p: 3 }, { n: "Ristra de pistolas", p: 5 }, { n: "Arcabuz", p: 5 }, { n: "Ballesta", p: 3 }, { n: "Hachas arrojadizas", p: 1 } ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } }
    },
    // === SPECIAL ===
    "0-1 Enanos Mercenarios": {
        faction: "merc",
        foc: "Special",
        points: 10,
        min: 5,
        max: 30,
        equipo: "Armadura pesada y Arma de mano.",
        reglasEspeciales: "Odio (Pielesverdes y skaven), Avance imparable.",
        perfiles: [
            { nombre: "Enano Mercenario", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 1, L: 9 } },
            { nombre: "Oficial", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 2, L: 9 } }
        ],
        options: [ { n: "Escudo", p: 1 }, { n: "Arma a dos manos", p: 2 }, { n: "Ballesta", p: 3 } ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50
    },
    "Escolta del Pagador": {
        faction: "merc",
        foc: "Special",
        points: 8,
        min: 10,
        max: 30,
        equipo: "Arma de mano y Armadura Ligera.",
        reglasEspeciales: "Sangre fría, Orgullosos, Mercenarios, Proteger lo que importa.",
        perfiles: [
            { nombre: "Escolta", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 1, L: 8 } },
            { nombre: "Campeón", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 2, L: 8 } }
        ],
        options: [ { n: "Escudo", p: 1 }, { n: "Armas a dos manos", p: 1 }, { n: "Alabardas", p: 2 }, { n: "Dos armas de mano", p: 1 }, { n: "Pistola", p: 2 }, { n: "Ristra de pistolas", p: 4 }, { n: "Sustituir Armadura ligera por pesada", p: 1 } ],
        command: { c: { n: "Campeón", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50,
        champItems: 25
    },
    "Duelistas": {
        faction: "merc",
        foc: "Special",
        points: 8,
        min: 5,
        max: 15,
        equipo: "Dos armas de mano y armadura ligera.",
        reglasEspeciales: "Hostigadores, Vanguardia, Esquiva (6+), Rodela, Repliegue.",
        perfiles: [
            { nombre: "Duelista", stats: { M: 4, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 4, A: 1, L: 8 } },
            { nombre: "Maestro", stats: { M: 4, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 4, A: 2, L: 8 } }
        ],
        options: [ { n: "Sustituir arma de mano adicional por Pistola", p: 2 }, { n: "Sustituir arma de mano adicional por Ristra de pistolas", p: 4 }, { n: "Cuchillos arrojadizos", p: 1 }, { n: "Cuchillos arrojadizos envenenados", p: 2 }, { n: "Rodela", p: 1 } ],
        command: { c: { n: "Maestro", p: 6 }, m: { n: "Músico", p: 6 } },
        champItems: 25
    },
    "Catapulta": {
        faction: "merc",
        foc: "Special",
        points: 75,
        min: 1,
        max: 1,
        equipo: "Arma de mano y armadura ligera (dotación).",
        reglasEspeciales: "Es una catapulta a todos los efectos.",
        perfiles: [
            { nombre: "Catapulta", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: 2, I: "-", A: "-", L: "-" } },
            { nombre: "Soldado (3)", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } }
        ],
        flats: [ { n: "Munición incendiaria", p: 10 } ]
    },
    "0-1 Incursores Nórdicos": {
        faction: "merc",
        foc: "Special",
        points: 6,
        min: 10,
        max: 30,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Nórdico (No pueden unirse personajes), Furia asesina.",
        perfiles: [
            { nombre: "Incursor Nórdico", stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 7 } },
            { nombre: "Campeón Incursor Nórdico", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 2, L: 8 } }
        ],
        options: [ { n: "Mayales", p: 1 }, { n: "Armas a dos manos", p: 1 }, { n: "Armas de mano adicionales", p: 1 }, { n: "Escudos", p: 1 }, { n: "Hachas arrojadizas", p: 1 } ],
        command: { c: { n: "Campeón Incursor", p: 8 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },
    "Balista Tileana": {
        faction: "merc",
        foc: "Special",
        points: 45,
        min: 1,
        max: 1,
        equipo: "Arma de mano y armadura ligera (dotación).",
        reglasEspeciales: "Lanzavirotes F5. Puede marchar y disparar.",
        perfiles: [
            { nombre: "Balista tileana", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 6, H: 2, I: "-", A: "-", L: "-" } },
            { nombre: "Soldado (2)", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } }
        ],
        options: [ { n: "Armadura pesada para dotación", p: 2 } ],
        flats: [ { n: "Añadir una segunda Balista", p: 50 } ]
    },
    "Caballería Pesada": {
        faction: "merc",
        foc: "Special",
        points: 15,
        min: 5,
        max: 15,
        equipo: "Arma de mano, Armadura Pesada.",
        reglasEspeciales: "Mercenarios, Orgullosos.",
        perfiles: [
            { nombre: "Caballero", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 1, L: 8 } },
            { nombre: "Oficial", stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 2, L: 8 } },
            { nombre: "Caballo de guerra", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } }
        ],
        options: [ { n: "Escudo", p: 1 }, { n: "Lanza de Caballería", p: 2 }, { n: "Arma a dos manos", p: 3 }, { n: "Mangual", p: 1 }, { n: "Pistola", p: 3 }, { n: "Arcabuz", p: 4 }, { n: "Ristra", p: 5 }, { n: "Barda para montura", p: 3 } ],
        command: { c: { n: "Oficial", p: 6 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 50,
        champItems: 25
    },
    // === RARE ===
    "Cañon": {
        faction: "merc",
        foc: "Rare",
        points: 85,
        min: 1,
        max: 1,
        equipo: "Arma de mano y armadura ligera (dotación).",
        reglasEspeciales: "Dispara como un cañón.",
        perfiles: [
            { nombre: "Cañón", stats: { M: "-", HA: "-", HP: "-", F: "-", R: 7, H: 3, I: "-", A: "-", L: "-" } },
            { nombre: "Soldado (3)", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 } }
        ],
        flats: [ { n: "Añadir un segundo Cañón", p: 85 } ]
    },
    "Condotieros": {
        faction: "merc",
        foc: "Rare",
        points: 11,
        min: 5,
        max: 15,
        equipo: "Arma de mano, Armadura ligera.",
        reglasEspeciales: "Mercenarios, Hostigadores, Sangre fría, Curtidos, Orgullosos, Emboscada.",
        perfiles: [
            { nombre: "Condotiero", stats: { M: 4, HA: 4, HP: 4, F: 4, R: 4, H: 1, I: 5, A: 2, L: 8 } },
            { nombre: "Maestro", stats: { M: 4, HA: 4, HP: 4, F: 4, R: 4, H: 1, I: 5, A: 3, L: 8 } }
        ],
        options: [ { n: "Sustituir armadura ligera por pesada", p: 1 }, { n: "Escudo", p: 1 }, { n: "Lanza", p: 1 }, { n: "Mangual", p: 1 }, { n: "Armas a dos manos", p: 2 }, { n: "Dos armas de mano", p: 1 }, { n: "Pistola", p: 2 }, { n: "Ristra de pistolas", p: 4 }, { n: "Arco", p: 1 }, { n: "Ballesta", p: 2 }, { n: "Arcabuz", p: 3 }, { n: "Cuchillos arrojadizos", p: 1 }, { n: "Cuchillos arrojadizos envenenados", p: 2 }, { n: "Exploradores", p: 2 }, { n: "Emboscada (10 miniaturas o menos)", p: 2 } ],
        command: { c: { n: "Maestro", p: 8 } },
        champItems: 25
    },
    "Condotieros Montados": {
        faction: "merc",
        foc: "Rare",
        points: 22,
        min: 5,
        max: 10,
        equipo: "Arma de mano, Armadura pesada.",
        reglasEspeciales: "Mercenarios, Hostigadores, Sangre fría, Curtidos, Orgullosos.",
        perfiles: [
            { nombre: "Condotiero", stats: { M: 4, HA: 4, HP: 4, F: 4, R: 4, H: 1, I: 5, A: 2, L: 8 } },
            { nombre: "Maestro", stats: { M: 4, HA: 4, HP: 4, F: 4, R: 4, H: 1, I: 5, A: 3, L: 8 } },
            { nombre: "Caballo de guerra", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } }
        ],
        options: [ { n: "Escudo", p: 1 }, { n: "Sustituir armadura pesada por de placas", p: 2 }, { n: "Lanza", p: 1 }, { n: "Mangual", p: 1 }, { n: "Lanza de Caballería", p: 2 }, { n: "Armas a dos manos", p: 2 }, { n: "Dos armas de mano", p: 1 }, { n: "Pistola", p: 2 }, { n: "Ristra de pistolas", p: 4 }, { n: "Arco", p: 1 }, { n: "Ballesta", p: 2 }, { n: "Arcabuz", p: 3 }, { n: "Barda para montura", p: 2 } ],
        command: { c: { n: "Maestro", p: 8 } },
        champItems: 25
    },
    "Matadores": {
        faction: "merc",
        foc: "Rare",
        points: 11,
        min: 5,
        max: 30,
        equipo: "Hachas de matador (usar como A2M o 2AM).",
        reglasEspeciales: "Odio (Pielesverdes y skaven), Avance imparable, Indesmoralizables, Matadores.",
        perfiles: [
            { nombre: "Matador", stats: { M: 3, HA: 4, HP: 3, F: 3, R: 4, H: 1, I: 2, A: 1, L: 9 } },
            { nombre: "Matagigantes", stats: { M: 3, HA: 5, HP: 3, F: 4, R: 4, H: 1, I: 3, A: 2, L: 9 } }
        ],
        options: [ { n: "Hachas arrojadizas", p: 1 }, { n: "Tatuajes protectores (RM 1)", p: 1 } ],
        command: { c: { n: "Matagigantes", p: 10 }, s: { n: "Portaestandarte", p: 6 }, m: { n: "Músico", p: 6 } },
        magicBanner: 25
    },
    "Comehombres": {
        faction: "merc",
        foc: "Rare",
        warning: "Elige hasta dos reglas de la lista de Aventureros.",
        points: 50,
        min: 2,
        max: 6,
        equipo: "Maza ogra (arma de mano, Poder de penetración) y Armadura ligera.",
        reglasEspeciales: "Miedo, Arremetida, Aventureros, Inmunes a la psicología.",
        perfiles: [
            { nombre: "Comehombres", stats: { M: 6, HA: 4, HP: 4, F: 5, R: 4, H: 3, I: 3, A: 4, L: 8 } },
            { nombre: "Oficial", stats: { M: 6, HA: 4, HP: 4, F: 5, R: 4, H: 3, I: 3, A: 5, L: 8 } }
        ],
        options: [ { n: "Maza ogra y Puño de Hierro", p: 4 }, { n: "Dos mazas ogras", p: 3 }, { n: "Arma a dos manos", p: 9 }, { n: "Pistola ogra", p: 7 }, { n: "Ristra de pistolas ogras", p: 11 }, { n: "Sustituir armadura ligera por pesada", p: 4 }, { n: "Aventurero: Tozudez", p: 5 }, { n: "Aventurero: Vanguardia", p: 5 }, { n: "Aventurero: Veloces", p: 3 }, { n: "Aventurero: Ataques envenenados", p: 2 }, { n: "Aventurero: Carga devastadora", p: 3 }, { n: "Aventurero: Cruzar (todos)", p: 2 }, { n: "Aventurero: Talismanes protectores (TSE 6+)", p: 4 }, { n: "Aventurero: Exploradores", p: 5 }, { n: "Aventurero: Hostigadores", p: 4 }, { n: "Aventurero: Odio (todos)", p: 3 } ],
        command: { c: { n: "Oficial", p: 8 }, s: { n: "Portaestandarte", p: 8 }, m: { n: "Músico", p: 8 } },
        magicBanner: 50,
        champItems: 25
    },
    // === LORDS ===
    "General Mercenario": {
        faction: "merc",
        foc: "Lord",
        points: 95,
        min: 1, max: 1,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Mercenario.",
        perfiles: [ { nombre: "General Mercenario", stats: { M: 4, HA: 6, HP: 6, F: 4, R: 4, H: 3, I: 6, A: 4, L: 9 } } ],
        options: [ { n: "Arma de mano adicional", p: 2 }, { n: "Arma a dos manos", p: 4 }, { n: "Alabarda", p: 5 }, { n: "Lanza", p: 1 }, { n: "Lanza de caballería", p: 6 }, { n: "Pistola", p: 5 }, { n: "Ristra de pistolas", p: 10 }, { n: "Arco largo", p: 5 }, { n: "Ballesta", p: 3 }, { n: "Arcabuz", p: 3 }, { n: "Escudo", p: 3 }, { n: "Sustituir Armadura ligera por pesada", p: 3 } ],
        mounts: ["Caballo de guerra", "Caballo de guerra con barda", "Pegaso", "Pegaso con barda", "Grifo"],
        maxMagicItems: 3,
        maxRelics: 1,
        maxSkills: { limit: 2, type: 'count' }
    },
    "Gran Hechicero Mercenario": {
        faction: "merc",
        foc: "Lord",
        points: 140,
        min: 1, max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Mercenario, Desconfianza.",
        perfiles: [ { nombre: "Gran Hechicero", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 4, H: 3, I: 4, A: 1, L: 8 } } ],
        options: [ { n: "Arma de mano adicional", p: 2 }, { n: "Arma a dos manos", p: 4 }, { n: "Nivel de Magia 4", p: 35 } ],
        mounts: ["Caballo de guerra", "Caballo de guerra con barda", "Pegaso"],
        maxMagicItems: 3,
        maxRelics: 1
    },
    // === HEROES ===
    "Capitán Mercenario": {
        faction: "merc",
        foc: "Hero",
        points: 45,
        min: 1, max: 1,
        equipo: "Arma de mano y Armadura ligera.",
        reglasEspeciales: "Mercenario.",
        perfiles: [ { nombre: "Capitán Mercenario", stats: { M: 4, HA: 5, HP: 5, F: 4, R: 4, H: 2, I: 5, A: 3, L: 8 } } ],
        options: [ { n: "Arma de mano adicional", p: 1 }, { n: "Arma a dos manos", p: 2 }, { n: "Alabarda", p: 3 }, { n: "Lanza", p: 1 }, { n: "Lanza de caballería", p: 4 }, { n: "Pistola", p: 5 }, { n: "Ristra de pistolas", p: 10 }, { n: "Arco largo", p: 2 }, { n: "Ballesta", p: 3 }, { n: "Arcabuz", p: 3 }, { n: "Escudo", p: 2 }, { n: "Sustituir Armadura ligera por pesada", p: 2 } ],
        mounts: ["Caballo de guerra", "Caballo de guerra con barda"],
        maxMagicItems: 2,
        maxRelics: 0,
        maxSkills: { limit: 1, type: 'count' }
    },
    "Hechicero Mercenario": {
        faction: "merc",
        foc: "Hero",
        points: 60,
        min: 1, max: 1,
        equipo: "Arma de mano.",
        reglasEspeciales: "Mercenario, Desconfianza.",
        perfiles: [ { nombre: "Hechicero", stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 1, L: 7 } } ],
        options: [ { n: "Arma de mano adicional", p: 1 }, { n: "Arma a dos manos", p: 2 }, { n: "Nivel de Magia 2", p: 35 } ],
        mounts: ["Caballo de guerra", "Caballo de guerra con barda"],
        maxMagicItems: 2,
        maxRelics: 1
    },
    "0-1 Pagador": {
        faction: "merc",
        foc: "Hero",
        points: 65,
        min: 1, max: 1,
        equipo: "Arma de mano, Armadura ligera.",
        reglasEspeciales: "Mercenario, ¡Ni un paso atrás! (Mercenarios), Si muere, ejército gana Odio (todos).",
        perfiles: [ { nombre: "Pagador", stats: { M: 4, HA: 4, HP: 4, F: 3, R: 4, H: 2, I: 3, A: 2, L: 8 } } ],
        options: [ { n: "Escudo", p: 2 }, { n: "Pistola", p: 4 }, { n: "Ballesta", p: 2 }, { n: "Cuchillos arrojadizos", p: 1 }, { n: "Sustituir armadura ligera por pesada", p: 2 } ],
        maxMagicItems: 1,
        maxRelics: 1
    },
    "Asesino Tileano": {
        faction: "merc",
        foc: "Hero",
        points: 65,
        min: 1, max: 1,
        equipo: "Arma de Mano.",
        reglasEspeciales: "Destreza marcial, Esquivar (5+), Ataques Envenenados, Explorador, Asesino, Sicario, Mercenario, Despliegue oculto.",
        perfiles: [ { nombre: "Asesino tileano", stats: { M: 4, HA: 6, HP: 6, F: 4, R: 3, H: 2, I: 6, A: 3, L: 8 } } ],
        options: [ { n: "Arma de mano adicional", p: 1 }, { n: "Cuchillos arrojadizos", p: 2 }, { n: "Armadura ligera", p: 2 } ],
        maxMagicItems: 2,
        maxRelics: 0
    }
};
const mountsDB_merc = {
    "Caballo de guerra": { faction: "merc", points: 12, perfiles: [ { nombre: "Caballo de guerra", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } } ], reglasEspeciales: "Bestia. Cambia el tipo a Caballería." },
    "Caballo de guerra con barda": { faction: "merc", points: 15, perfiles: [ { nombre: "Caballo de guerra con barda", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } } ], reglasEspeciales: "Bestia. Cambia el tipo a Caballería. Barda (+1 TSA)." },
    "Pegaso": { faction: "merc", points: 40, perfiles: [ { nombre: "Pegaso", stats: { M: 8, HA: 4, HP: 0, F: 4, R: 4, H: 3, I: 4, A: 2, L: 6 } } ], reglasEspeciales: "Bestia monstruosa. Cambia el tipo a Caballería monstruosa. Volar." },
    "Pegaso con barda": { faction: "merc", points: 45, perfiles: [ { nombre: "Pegaso con barda", stats: { M: 8, HA: 4, HP: 0, F: 4, R: 4, H: 3, I: 4, A: 2, L: 6 } } ], reglasEspeciales: "Bestia monstruosa. Cambia el tipo a Caballería monstruosa. Volar. Barda (+1 TSA)." },
    "Grifo": { faction: "merc", points: 150, perfiles: [ { nombre: "Grifo", stats: { M: 6, HA: 5, HP: 0, F: 6, R: 5, H: 5, I: 4, A: 4, L: 7 } } ], reglasEspeciales: "Monstruo. Volar." }
};

const armySkillsDB_merc = {
    "Viejo Perro de la Guerra": { points: 30, faction: "merc", type: "Renombre", summary: "El personaje y su unidad ganan Tozudez." },
    "Gran Estratega": { points: 25, faction: "merc", type: "Renombre", summary: "Solo general. Redesplegar una unidad después del despliegue." },
    "Practicante de las artes arcanas": { points: 20, faction: "merc", type: "Renombre", summary: "Gana Nivel 1 (hechizo identificativo). Pierde armadura ligera. Si es general, hechiceros pierden Desconfianza." },
    "Duelista": { points: 20, faction: "merc", type: "Renombre", summary: "Infantería. No escudo/armadura>ligera. Gana Esquivar (5+)." },
    "Coordinación Felina": { points: 20, faction: "merc", type: "Renombre", summary: "+1A." },
    "Envenenador aficionado": { points: 20, faction: "merc", type: "Renombre", summary: "Gana At. envenenados (o mejora a 5+). Permite comprar At. envenenados (+1ppm) a una unidad de Inf. ligera/pesada, Cab. ligera o Arqueros." },
    "Respetado": { points: 15, faction: "merc", type: "Renombre", summary: "Solo general. +6\" Presencia Inspiradora. Cuidado Señor a 2+. No puede usarse junto a Detestable." },
    "Bandido": { points: 15, faction: "merc", type: "Renombre", summary: "No general. Personaje y unidad (infantería, PU 15 o menos) ganan Explorador." },
    "Espadachín renombrado": { points: 15, faction: "merc", type: "Renombre", summary: "+1 HA, +2 I y Odio." },
    "Buena puntería": { points: 15, faction: "merc", type: "Renombre", summary: "+1 HP. Unidad no aplica modificadores por aguantar y disparar ni larga distancia." },
    "Buenos Contactos": { points: 10, faction: "merc", type: "Renombre", summary: "Permite 1 unidad Básica de IMP/BRE/KIS/NOR como Básica, o 1 unidad Básica de OGR/AE/ES/ENA como Especial." },
    "Creyente Devoto": { points: 10, faction: "merc", type: "Renombre", summary: "RM(2). Hechiceros no pueden unirse a su unidad. Permite Sacerdotes de Imperio o Bretonia." },
    "Alto Linaje": { points: 10, faction: "merc", type: "Renombre", summary: "Permite 1 Caballería pesada como Básica. Personaje gana Armadura de placas y Orgulloso. Otorga opción de Armadura de Placas (+2ppm) a Cab. Pesada o Escolta." },
    "Juega Sucio": { points: 10, faction: "merc", type: "Renombre", summary: "Personaje y unidad pueden Disparar y Huir. Pueden mover y actuar al reagruparse." },
    "Emblema Familiar": { points: 5, faction: "merc", type: "Renombre", summary: "No general. Gana Orgulloso. Puede portar un estandarte mágico (incluso Reliquia)." },
    "Reputación de Carnicero": { points: 5, faction: "merc", type: "Renombre", summary: "Causa Miedo." },
    "Detestable": { points: -30, faction: "merc", type: "Renombre", summary: "Solo general. Presencia Inspiradora reducida a 8\". No puede usar Cuidado Señor. Unidades no chequean pánico si muere." }
};
const magicItemsDB_merc = {
    "Arma Mágica": {
        "Hacedora de Fortunas": { points: 50, faction: "merc", relic: true, summary: "Arma de mano. +2F. Anula talismanes enemigos en contacto." },
        "Espada Decapitadora de Ogros": { points: 30, faction: "merc", relic: false, summary: "Arma de mano. +1F y Heridas múltiples (1D3)." },
        "Filo de la Venganza": { points: 25, faction: "merc", relic: false, summary: "Arma de mano. +1F. Elige un personaje enemigo al inicio: vs él, gana +1F adicional, Heridas Múltiples (1D3) y Odio." },
        "Hijas de la noche": { points: 20, faction: "merc", relic: false, summary: "Armas emparejadas. Odio, Poder de penetración y Golpe letal." },
        "Pica de Metal Estelar": { points: 20, faction: "merc", relic: false, summary: "Pica. +1F y Golpe Maestro." },
        "Espada de Marte": { points: 20, faction: "merc", relic: false, summary: "Solo hechiceros. Arma de mano. Guarda 1 dado de energía/dispersión no usado por fase. Pierde la regla Desconfianza." }
    },
    "Armadura Mágica": {
        "Armadura Sagrada de Miragliano": { points: 50, faction: "merc", relic: true, summary: "Armadura pesada. Inmune a Veneno y TSE(4+)." },
        "Escudo Especular": { points: 30, faction: "merc", relic: false, summary: "Escudo. Al inicio del combate, copia las propiedades de una armadura mágica enemiga en contacto." },
        "Coraza del conquistador": { points: 25, faction: "merc", relic: false, summary: "Armadura pesada. TSA 4+ y Resistencia mágica (2)." },
        "Armadura del Jaguar": { points: 20, faction: "merc", relic: false, summary: "Solo a pie. Armadura ligera. TSA 5+. Otorga Esquiva(6+) o la mejora en +1 (máx 4+)." },
        "Escudo de Oro": { points: 15, faction: "merc", relic: false, summary: "Escudo. +1 adicional a la TSA (total 5+). Permite repetir chequeos de liderazgo." },
        "Yelmo de Sartosa": { points: 10, faction: "merc", relic: false, summary: "+1 adicional a la TSA. Inmune al Miedo." }
    },
    "Talismán": {
        "Amuleto de Oro Maldito": { points: 45, faction: "merc", relic: true, summary: "TSE(5+). Enemigos en contacto repiten TSE superadas." },
        "Collar de Obsidiana": { points: 40, faction: "merc", relic: false, summary: "Resistencia mágica (3)." },
        "Amuleto de Zafiros": { points: 30, faction: "merc", relic: false, summary: "TSE(5+). Supera automáticamente cualquier chequeo excepto los de Liderazgo." },
        "Anillo del Cappo": { points: 25, faction: "merc", relic: false, summary: "Regeneración (5+) e Inmune a Veneno." },
        "Moneda de la Suerte": { points: 5, faction: "merc", relic: false, summary: "Puede repetir los resultados de 1 natural en sus tiradas de salvación por armadura." }
    },
    "Artefacto Arcano": {
        "Guanteletes Magicos": { points: 35, faction: "merc", relic: true, summary: "+2 a los intentos de dispersión y canalización." },
        "Bastón de oro de Lustria": { points: 25, faction: "merc", relic: false, summary: "Puedes escoger los hechizos en lugar de tirar. +2 a las tiradas en la tabla de Disfunciones mágicas." },
        "Báculo de Remas": { points: 25, faction: "merc", relic: false, summary: "+1 Hechizo. Nunca pierde la concentración." },
        "Huevo de Coatl": { points: 20, faction: "merc", relic: false, summary: "Un solo uso. Al inicio de una fase de magia, repite la tirada de vientos de la magia. Mientras no se use, otorga RM(2)." },
        "Poción de Sangre de Toro Roso": { points: 15, faction: "merc", relic: false, summary: "Un solo uso. Al inicio de tu fase de magia, +2 a todos los hechizos que lances este turno." }
    },
    "Objeto Hechizado": {
        "Gema de la Templanza": { points: 50, faction: "merc", relic: true, summary: "Solo Pagador. Unidades amigas a 12\" son inmunes a Pánico y Miedo." },
        "Manto Sombrío": { points: 30, faction: "merc", relic: false, summary: "Repite tiradas de salvación por Esquiva fallidas. No puede ser objetivo de disparos a 12\" o más." },
        "Llave de la Cámara del Tesoro": { points: 25, faction: "merc", relic: false, summary: "Permite equiparse con un objeto mágico adicional (no reliquia) de hasta 25 puntos de una de las siguientes listas: Imperio, Bretonia, Kislev, Elfos Silvanos, Altos Elfos o Nehekhara." },
        "Bola de Cristal": { points: 25, faction: "merc", relic: false, summary: "El oponente revela objetos, hechizos y unidades ocultas en un radio de 24\"." },
        "Anillo del Bribón": { points: 25, faction: "merc", relic: false, summary: "Portahechizos(3). Lanza un hechizo conocido por un hechicero oponente (dificultad 12+ o menos, no potenciado)." },
        "Bolsa del Oro mágico": { points: 10, faction: "merc", relic: false, summary: "Un solo uso. Una unidad a 6\" o menos supera automáticamente un chequeo de liderazgo fallido." }
    },
    "Estandarte Mágico": {
        "Estandarte de Miragliano": { points: 50, faction: "merc", relic: true, summary: "Otorga TSE(5+) vs proyectiles a todas las unidades amigas a 6\"." },
        "Estandarte de los Héroes": { points: 30, faction: "merc", relic: false, summary: "La unidad gana Sangre Fría." },
        "Estandarte del Cuerno de Unicornio": { points: 25, faction: "merc", relic: false, summary: "RM(2). Permite a hechiceros con Desconfianza unirse a la unidad." },
        "Estandarte de la Falange": { points: 25, faction: "merc", relic: false, summary: "Solo piqueros (no veteranos). +1 a la salvación en CaC y +2 vs proyectiles." },
        "Estandarte del Acero Estaliano": { points: 20, faction: "merc", relic: false, summary: "La unidad gana Poder de penetración en CaC." },
        "Estandarte de Tilea": { points: 20, faction: "merc", relic: false, summary: "La unidad gana Ataques envenenados en CaC." },
        "Estandarte de la Fuerza Inagotable": { points: 15, faction: "merc", relic: false, summary: "La unidad ignora la regla Agotamiento de sus armas." },
        "Estandarte de los Tercios": { points: 10, faction: "merc", relic: false, summary: "La unidad siempre puede mover y disparar. No aplica modificadores por aguantar y disparar." },
        "Pabellón Encantado": { points: 10, faction: "merc", relic: false, summary: "La unidad obtiene Ataques mágicos." }
    }
};




// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Mercenarios",
    FACTION_ID: "merc",
    FOC_CONFIG: { 
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_merc,
    mountsDB: mountsDB_merc,
    magicItemsDB:  magicItemsDB_merc,
    armySkillsDB: armySkillsDB_merc,
    specialProfilesDB: {}, // Mercenaries do not have special profiles like Fanatics
    armySkillsLabel: "Renombre", // Custom label for the skills button
};
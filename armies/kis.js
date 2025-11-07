// ===================================================================================
// --- GUAMAHAMMER ARMY MODULE: KISLEV ---
// ===================================================================================
// Last Updated: 2025-10-12 @ 16:45 - v4.0
import { commonMagicItemsDB } from '../comun.js';

// --- FACTION-SPECIFIC DATABASES ---

const unitsDB_kis = {
  // === CORE ===
  Kossars: {
    faction: "kis",
    foc: "Core",
    points: 7,
    min: 10,
    max: 40,
    equipo: "Arma a dos manos, Armadura ligera y Arco.",
    reglasEspeciales: "Odio (Caos)",
    perfiles: [
      {
        nombre: "Kossar",
        stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 },
      },
      {
        nombre: "Oficial",
        stats: { M: 4, HA: 3, HP: 4, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 },
      },
    ],
    options: [{ n: "Escudos", p: 1 }],
    command: {
      c: { n: "Oficial", p: 8 },
      s: { n: "Portaestandarte", p: 6 },
      m: { n: "Músico", p: 6 },
    },
    magicBanner: 25,
  },
  "Lanceros Gospodar": {
    faction: "kis",
    foc: "Core",
    points: 6,
    min: 10,
    max: 40,
    equipo: "Lanza, Armadura ligera y Escudo.",
    reglasEspeciales: "Odio (Caos)",
    perfiles: [
      {
        nombre: "Lancero Gospodar",
        stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 },
      },
      {
        nombre: "Oficial",
        stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 },
      },
    ],
    command: {
      c: { n: "Oficial", p: 6 },
      s: { n: "Portaestandarte", p: 6 },
      m: { n: "Músico", p: 6 },
    },
    magicBanner: 25,
  },
  Cazadores: {
    faction: "kis",
    foc: "Core",
    points: 10,
    min: 5,
    max: 15,
    equipo: "Arco, armadura ligera y arma de mano.",
    reglasEspeciales: "Hostigadores, Exploradores, Odio (Caos)",
    perfiles: [
      {
        nombre: "Cazadores",
        stats: { M: 4, HA: 3, HP: 4, F: 3, R: 3, H: 1, I: 4, A: 1, L: 7 },
      },
      {
        nombre: "Oficial",
        stats: { M: 4, HA: 3, HP: 5, F: 3, R: 3, H: 1, I: 4, A: 1, L: 7 },
      },
    ],
    options: [
      { n: "Armas de mano adicionales", p: 1 },
      { n: "Hachas arrojadizas", p: 1 },
    ],
    command: { c: { n: "Oficial", p: 6 }, m: { n: "Músico", p: 6 } },
  },
  "Lanceros Alados": {
    faction: "kis",
    foc: "Core",
    points: 16,
    min: 5,
    max: 20,
    equipo: "Arma de mano, Lanza de caballería, Armadura pesada y Escudo.",
    reglasEspeciales: "Jinetes expertos, Odio (Caos)",
    perfiles: [
      {
        nombre: "Lancero Alado",
        stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 },
      },
      {
        nombre: "Oficial",
        stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 },
      },
      {
        nombre: "Caballo de guerra",
        stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 },
      },
    ],
    command: {
      c: { n: "Oficial", p: 6 },
      s: { n: "Portaestandarte", p: 6 },
      m: { n: "Músico", p: 6 },
    },
    magicBanner: 25,
  },
  "Arqueros Ungol a Caballo": {
    faction: "kis",
    foc: "Core",
    points: 14,
    min: 5,
    max: 20,
    equipo: "Arma de mano y Arco compuesto Ungol",
    reglasEspeciales:
      'Caballería rápida, Jinetes expertos, Odio (Caos), Arco compuesto Ungol (18", F4, Disparo rápido)',
    perfiles: [
      {
        nombre: "Arquero Ungol",
        stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 },
      },
      {
        nombre: "Oficial",
        stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 },
      },
      {
        nombre: "Caballo de guerra",
        stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 },
      },
    ],
    options: [{ n: "Escudos", p: 1 }],
    command: { c: { n: "Oficial", p: 6 }, m: { n: "Músico", p: 6 } },
  },

  // === SPECIAL ===
  "Legión del Grifo": {
    faction: "kis",
    foc: "Special",
    points: 19,
    min: 5,
    max: 20,
    equipo: "Arma de mano, Lanza de caballería, Armadura Placas y Escudo.",
    reglasEspeciales: "Odio (Caos), Carga atronadora",
    perfiles: [
      {
        nombre: "Legionario del Grifo",
        stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 3, A: 1, L: 8 },
      },
      {
        nombre: "Oficial",
        stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 3, A: 2, L: 8 },
      },
      {
        nombre: "Caballo de guerra",
        stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 },
      },
    ],
    options: [{ n: "Barda para caballos", p: 2 }],
    command: {
      c: { n: "Oficial", p: 6 },
      s: { n: "Portaestandarte", p: 6 },
      m: { n: "Músico", p: 6 },
    },
    magicBanner: 50,
    champItems: 25,
  },
  "Hermandad del Oso": {
    faction: "kis",
    foc: "Special",
    points: 18,
    min: 5,
    max: 15,
    equipo: "Arma a dos manos, Arco y Armadura ligera.",
    reglasEspeciales: "Caballería rápida, Jinetes expertos, Odio (Caos)",
    perfiles: [
      {
        nombre: "Hermano del oso",
        stats: { M: 4, HA: 4, HP: 4, F: 3, R: 4, H: 1, I: 3, A: 1, L: 8 },
      },
      {
        nombre: "Oficial",
        stats: { M: 4, HA: 4, HP: 4, F: 3, R: 4, H: 1, I: 3, A: 2, L: 8 },
      },
      {
        nombre: "Caballo de guerra",
        stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 },
      },
    ],
    options: [
      { n: "Hachas arrojadizas", p: 1 },
      { n: "Escudos", p: 1 },
    ],
    command: {
      c: { n: "Oficial", p: 6 },
      s: { n: "Portaestandarte", p: 6 },
      m: { n: "Músico", p: 6 },
    },
    magicBanner: 50,
  },
  Druzinha: {
    faction: "kis",
    foc: "Special",
    warning: "0-2 por ejército",
    points: 19,
    min: 5,
    max: 12,
    equipo: "Arma de mano, Ristra de pistolas y Armadura pesada.",
    reglasEspeciales: "Jinetes expertos, Odio (Caos), Caballería rápida",
    perfiles: [
      {
        nombre: "Druzinha",
        stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 },
      },
      {
        nombre: "Oficial",
        stats: { M: 4, HA: 3, HP: 4, F: 3, R: 3, H: 1, I: 3, A: 2, L: 7 },
      },
      {
        nombre: "Caballo de guerra",
        stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 },
      },
    ],
    command: { c: { n: "Oficial", p: 6 }, m: { n: "Músico", p: 6 } },
  },
  "Círculo Interior de la Legión del Grifo": {
    faction: "kis",
    foc: "Special",
    warning: "0-1 por ejército",
    points: 24,
    min: 5,
    max: 12,
    equipo: "Arma de mano, Lanza de caballería, Armadura Placas y Escudo.",
    reglasEspeciales: "Inmunes a la psicología, Odio (Caos), Carga atronadora",
    perfiles: [
      {
        nombre: "Caballero del Círculo Interior",
        stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 1, L: 8 },
      },
      {
        nombre: "Oficial",
        stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 2, L: 8 },
      },
      {
        nombre: "Caballo de guerra con barda",
        stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 },
      },
    ],
    command: {
      c: { n: "Oficial", p: 8 },
      s: { n: "Portaestandarte", p: 8 },
      m: { n: "Músico", p: 8 },
    },
    magicBanner: 50,
    champItems: 25,
  },
  Bardiches: {
    faction: "kis",
    foc: "Special",
    points: 8,
    min: 10,
    max: 30,
    equipo: "Bardiche, Armadura Pesada.",
    reglasEspeciales:
      "Odio (Caos), Bardiche (se puede usar como Arma a dos manos o como alabarda si no han movido)",
    perfiles: [
      {
        nombre: "Guerrero Bardiche",
        stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 1, L: 8 },
      },
      {
        nombre: "Oficial",
        stats: { M: 4, HA: 4, HP: 3, F: 3, R: 3, H: 1, I: 4, A: 2, L: 8 },
      },
    ],
    options: [{ n: "Escudos", p: 1 }],
    command: {
      c: { n: "Oficial", p: 6 },
      s: { n: "Portaestandarte", p: 6 },
      m: { n: "Músico", p: 6 },
    },
    magicBanner: 25,
  },
  "Guardia Gospodar": {
    faction: "kis",
    foc: "Special",
    warning: "0-1 por ejército",
    points: 12,
    min: 10,
    max: 30,
    equipo: "Alabarda y Armadura pesada.",
    reglasEspeciales: "Odio (Caos), Tozudez, Inmunes a la psicología",
    perfiles: [
      {
        nombre: "Guerrero Guardia Gospodar",
        stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 1, L: 8 },
      },
      {
        nombre: "Oficial",
        stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 2, L: 8 },
      },
    ],
    options: [{ n: "Escudos", p: 1 }],
    command: {
      c: { n: "Oficial", p: 6 },
      s: { n: "Portaestandarte", p: 6 },
      m: { n: "Músico", p: 6 },
    },
    magicBanner: 50,
    champItems: 25,
  },
  "Señor de las Bestias": {
    faction: "kis",
    foc: "Special",
    points: 25,
    min: 1,
    max: 1,
    equipo:
      "El Señor de las bestias: dos armas de mano y armadura ligera. Bestias: garras y dientes.",
    reglasEspeciales: "Veloz, Odio (Caos), Hostigador, Unidad mixta",
    perfiles: [
      {
        nombre: "Señor de las bestias",
        stats: { M: 4, HA: 4, HP: 4, F: 4, R: 4, H: 2, I: 4, A: 2, L: 8 },
      },
      {
        nombre: "Lobo invernal",
        stats: { M: 9, HA: 4, HP: 0, F: 4, R: 4, H: 1, I: 4, A: 2, L: 6 },
      },
      {
        nombre: "Oso blanco kislevita",
        stats: { M: 6, HA: 4, HP: 0, F: 5, R: 5, H: 3, I: 2, A: 3, L: 6 },
      },
    ],
    composition: {
      type: "ratioBased",
      primary: { name: "Señor de las Bestias", cost: 25 },
      secondary: { name: "Bestias", cost: 0 },
      ruleText: "1 Señor + 1-6 Lobos invernales O 1-2 Osos blancos",
      ruleLogic: {
        secondaryMin: 1,
        secondaryMax: 6,
        perPrimary: 1,
        secondaryType: "choice", // Special handling for choice between wolves and bears
      },
    },
    min: { primary: 1, secondary: 1 },
    max: { primary: 1, secondary: 6 },
    options: [{ n: "Jabalinas", p: 1 }],
  },

  // === RARE ===
  Streltsi: {
    faction: "kis",
    foc: "Rare",
    points: 14,
    min: 10,
    max: 20,
    equipo: "Arcabuz, Alabarda y Armadura pesada.",
    reglasEspeciales: "Odio (Caos)",
    perfiles: [
      {
        nombre: "Streltsi",
        stats: { M: 4, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 3, A: 1, L: 8 },
      },
      {
        nombre: "Oficial",
        stats: { M: 4, HA: 4, HP: 4, F: 3, R: 3, H: 1, I: 3, A: 2, L: 8 },
      },
    ],
    options: [{ n: "Escudos", p: 1 }],
    command: {
      c: { n: "Oficial", p: 6 },
      s: { n: "Portaestandarte", p: 6 },
      m: { n: "Músico", p: 6 },
    },
    magicBanner: 50,
    champItems: 25,
  },
  Cañón: {
    faction: "new",
    foc: "Rare",
    points: 85,
    min: 1,
    max: 1,
    equipo: "Arma de mano y armadura ligera.",
    reglasEspeciales: "",
    perfiles: [
      {
        nombre: "Cañón",
        stats: {
          M: 4,
          HA: 3,
          HP: 3,
          F: 3,
          R: 3,
          H: 1,
          I: 3,
          A: 1,
          L: 7,
        },
      },
      {
        nombre: "Dotación (3)",
        stats: {
          M: 4,
          HA: 3,
          HP: 3,
          F: 3,
          R: 3,
          H: 1,
          I: 3,
          A: 1,
          L: 7,
        },
      },
    ],
  },
  Mortero: {
    faction: "kis",
    foc: "Rare",
    points: 55,
    min: 1,
    max: 1,
    equipo: "La dotación: arma de mano.",
    reglasEspeciales:
      "Mortero (catapulta con plantilla redonda grande, F3, Poder de penetración; impacto central F6, Heridas múltiples 1D3, niega TSA; usa tabla problemas cañón).\nOdio (Caos).",
    perfiles: [
      {
        nombre: "Mortero",
        stats: {
          M: "-",
          HA: "-",
          HP: "-",
          F: "-",
          R: 7,
          H: "-",
          I: "-",
          A: "-",
          L: "-",
        },
      },
      {
        nombre: "Dotación (3)",
        stats: {
          M: 4,
          HA: 3,
          HP: 3,
          F: 3,
          R: 3,
          H: 1,
          I: 3,
          A: 1,
          L: 7,
        },
      },
    ],
  },
  "Gran Cañón Urugán": {
    faction: "kis",
    foc: "Rare",
    points: 110,
    min: 1,
    max: 1,
    equipo: "La dotación: arma de mano.",
    reglasEspeciales:
      "Dispara como Batería de cohetes (catapulta con plantilla redonda pequeña, F5, Poder de penetración; impacto central F8, niega TSA, Heridas múltiples 1D6; usa tabla problemas lanzallamas)",
    perfiles: [
      {
        nombre: "Gran cañón Urugán",
        stats: {
          M: "-",
          HA: "-",
          HP: "-",
          F: "-",
          R: 7,
          H: "-",
          I: "-",
          A: "-",
          L: "-",
        },
      },
      {
        nombre: "Dotación (3)",
        stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 1, I: 3, A: 1, L: 7 },
      },
    ],
  },
  "Hijos de Ursun": {
    faction: "kis",
    foc: "Rare",
    points: 75,
    min: 2,
    max: 5,
    equipo: "Arma de mano, Lanza de caballería, Armadura pesada y Escudo.",
    reglasEspeciales:
      "Inmunes a la psicología, Odio (Caos), Causan Miedo, Inflamables, Seguidos por el invierno (-1/2 I enemigos en contacto)",
    perfiles: [
      {
        nombre: "Hijo de Ursun",
        stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 1, L: 8 },
      },
      {
        nombre: "Oficial",
        stats: { M: 4, HA: 4, HP: 3, F: 4, R: 3, H: 1, I: 4, A: 2, L: 8 },
      },
      {
        nombre: "Oso blanco kislevita",
        stats: { M: 6, HA: 4, HP: 0, F: 5, R: 5, H: 3, I: 2, A: 3, L: 6 },
      },
    ],
    options: [{ n: "Hachas arrojadizas", p: 1 }],
    command: {
      c: { n: "Oficial", p: 10 },
      s: { n: "Portaestandarte", p: 10 },
      m: { n: "Músico", p: 10 },
    },
    magicBanner: 50,
    champItems: 25,
  },

  // === LORDS ===
  "Comandante Kislevita": {
    faction: "kis",
    foc: "Lord",
    points: 105,
    min: 1,
    max: 1,
    equipo: "Arma de mano y Armadura ligera.",
    reglasEspeciales: "Odio (Caos), Jinete experto (si va montado en caballo)",
    perfiles: [
      {
        nombre: "Comandante kislevita",
        stats: { M: 4, HA: 6, HP: 6, F: 4, R: 4, H: 3, I: 6, A: 4, L: 9 },
      },
    ],
    options: [
      { n: "Arma de mano adicional", p: 2 },
      { n: "Arma a dos manos", p: 4 },
      { n: "Alabarda", p: 5 },
      { n: "Lanza", p: 3 },
      { n: "Lanza de caballería", p: 6 },
      { n: "Pistola", p: 5 },
      { n: "Ristra de pistolas", p: 10 },
      { n: "Arco", p: 5 },
      { n: "Escudo", p: 3 },
      { n: "Armadura pesada", p: 3 },
    ],
    mounts: [
      "Caballo de guerra",
      "Caballo de guerra con barda",
      "Oso blanco kislevita",
    ],
    maxMagicItems: 3,
    maxRelics: 1,
  },
  "Hija de Miska": {
    faction: "kis",
    foc: "Lord",
    points: 165,
    min: 1,
    max: 1,
    equipo: "Arma de mano",
    reglasEspeciales:
      'Odio (Caos), Immune a psicología, Resistencia mágica (1), Icono legendario (unidades kislevitas a 12-18" son Inmunes a psicología)',
    perfiles: [
      {
        nombre: "Hija de Miska",
        stats: { M: 4, HA: 5, HP: 4, F: 4, R: 4, H: 3, I: 5, A: 3, L: 8 },
      },
    ],
    options: [
      { n: "Arma a dos manos", p: 4 },
      { n: "Lanza", p: 2 },
      { n: "Arma de mano adicional", p: 3 },
      { n: "Arco", p: 5 },
    ],
    mounts: [
      "Caballo de guerra",
      "Caballo de guerra con barda",
      "Dragón blanco",
    ],
    maxMagicItems: 3,
    maxRelics: 1,
    magia: "Hechicera nivel 2 (Saber del Hielo)",
  },
  "Gran Maga de Hielo": {
    faction: "kis",
    foc: "Lord",
    points: 140,
    min: 1,
    max: 1,
    equipo: "Arma de mano.",
    reglasEspeciales: "Odio (Caos), Jinete experta",
    perfiles: [
      {
        nombre: "Gran Maga de Hielo",
        stats: { M: 4, HA: 3, HP: 3, F: 3, R: 4, H: 3, I: 4, A: 1, L: 8 },
      },
    ],
    options: [
      { n: "Arma de mano adicional", p: 2 },
      { n: "Arma a dos manos", p: 4 },
      { n: "Nivel de Magia 4", p: 35 },
    ],
    mounts: ["Caballo de guerra", "Caballo de guerra con barda"],
    maxMagicItems: 3,
    maxRelics: 1,
    magia: "Nivel de magia 3 (Saber del Hielo)",
  },

  // === HEROES ===
  Boyardo: {
    faction: "kis",
    foc: "Hero",
    points: 55,
    min: 1,
    max: 1,
    equipo: "Arma de mano y Armadura ligera.",
    reglasEspeciales: "Odio (Caos), Jinete experto (si va montado en caballo)",
    perfiles: [
      {
        nombre: "Boyardo",
        stats: { M: 4, HA: 5, HP: 5, F: 4, R: 4, H: 2, I: 5, A: 3, L: 8 },
      },
    ],
    options: [
      { n: "Arma de mano adicional", p: 1 },
      { n: "Arma a dos manos", p: 2 },
      { n: "Alabarda", p: 3 },
      { n: "Lanza", p: 2 },
      { n: "Lanza de caballería", p: 4 },
      { n: "Pistola", p: 5 },
      { n: "Ristra de pistolas", p: 10 },
      { n: "Arco largo", p: 5 },
      { n: "Escudo", p: 2 },
      { n: "Armadura pesada", p: 2 },
    ],
    mounts: [
      "Caballo de guerra",
      "Caballo de guerra con barda",
      "Oso blanco kislevita",
    ],
    maxMagicItems: 2,
    battleStandard: { name: "Portaestandarte de Batalla", cost: 25 },
  },
  "Maga de Hielo": {
    faction: "kis",
    foc: "Hero",
    points: 60,
    min: 1,
    max: 1,
    equipo: "Arma de mano.",
    reglasEspeciales: "Odio (Caos), Jinete experta",
    perfiles: [
      {
        nombre: "Maga de Hielo",
        stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 1, L: 7 },
      },
    ],
    options: [
      { n: "Arma de mano adicional", p: 1 },
      { n: "Arma a dos manos", p: 2 },
      { n: "Nivel de Magia 2", p: 35 },
    ],
    mounts: ["Caballo de guerra", "Caballo de guerra con barda"],
    maxMagicItems: 2,
    magia: "Nivel de magia 1 (Saber del Hielo)",
  },
  "Sacerdote Guerrero": {
    faction: "kis",
    foc: "Hero",
    points: 60,
    min: 1,
    max: 1,
    equipo: "Arma de mano y Armadura ligera.",
    reglasEspeciales:
      "Immune a la psicología, Inspirador (unidad a la que se une será Immune a psicología)",
    perfiles: [
      {
        nombre: "Sacerdote guerrero",
        stats: { M: 4, HA: 4, HP: 4, F: 4, R: 4, H: 2, I: 4, A: 2, L: 8 },
      },
    ],
    options: [
      { n: "Arma de mano adicional", p: 1 },
      { n: "Arma a dos manos", p: 2 },
      { n: "Escudo", p: 2 },
      { n: "Arco", p: 4 },
      { n: "Hachas arrojadizas", p: 2 },
      { n: "Armadura pesada", p: 2 },
    ],
    mounts: ["Caballo de guerra", "Caballo de guerra con barda"],
    maxMagicItems: 2,
    plegarias:
      "Conoce todas las Plegarias, puede lanzar una por fase con Nivel de energía 3",
  },
  Atamán: {
    faction: "kis",
    foc: "Hero",
    points: 70,
    min: 1,
    max: 1,
    equipo: "Arma de mano y Arco Compuesto Ungol.",
    reglasEspeciales:
      "Odio (Caos), Jinete experto, Caballería rápida, Inmunes al Pánico (él y arqueros Ungol a los que se una)",
    perfiles: [
      {
        nombre: "Atamán",
        stats: { M: 4, HA: 4, HP: 6, F: 4, R: 4, H: 2, I: 6, A: 3, L: 8 },
      },
      {
        nombre: "Caballo de guerra",
        stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 },
      },
    ],
    options: [
      { n: "Armadura ligera", p: 3 },
      { n: "Escudo", p: 2 },
    ],
    maxMagicItems: 1,
  },
  "Bruja Ungol": {
    faction: "kis",
    foc: "Hero",
    points: 75,
    min: 1,
    max: 1,
    equipo: "Arma de mano.",
    reglasEspeciales:
      "Odio (Caos), Jinete experta, Protectora de almas (RM1, RM2 vs Caos/Nigromancia), Tribus del norte (sólo se une a arqueros Ungol montados), Causa Miedo",
    perfiles: [
      {
        nombre: "Bruja Ungol",
        stats: { M: 4, HA: 3, HP: 3, F: 3, R: 3, H: 2, I: 3, A: 1, L: 8 },
      },
    ],
    options: [
      { n: "Arma de mano adicional", p: 1 },
      { n: "Arma a dos manos", p: 2 },
      { n: "Nivel de Magia 2", p: 35 },
    ],
    mounts: ["Caballo de guerra"],
    maxMagicItems: 2,
    magia: "Nivel de magia 1 (Bestias y/o Cielos)",
  },
};

const mountsDB_kis = {
    "Caballo de guerra": { 
        faction: "kis", 
        points: 12, 
        perfiles: [ { nombre: "Caballo de guerra", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería." 
    },
    "Caballo de guerra con barda": { 
        faction: "kis", 
        points: 15, 
        perfiles: [ { nombre: "Caballo de guerra con barda", stats: { M: 8, HA: 2, HP: 0, F: 4, R: 3, H: 1, I: 2, A: 1, L: 5 } } ], 
        reglasEspeciales: "Bestia. Cambia el tipo a Caballería. Barda (+1 TSA)." 
    },
    "Oso blanco kislevita": { 
        faction: "kis", 
        points: 55, 
        perfiles: [ { nombre: "Oso blanco kislevita", stats: { M: 6, HA: 4, HP: 0, F: 5, R: 5, H: 3, I: 2, A: 3, L: 6 } } ], 
        reglasEspeciales: "Bestia monstruosa. Cambia el tipo a Caballería monstruosa. Causa Miedo, Inflamable. +2 TSA (en lugar de +1)." 
    },
    "Dragón blanco": { 
        faction: "kis", 
        points: 275, 
        perfiles: [ { nombre: "Dragón blanco", stats: { M: 6, HA: 6, HP: 0, F: 6, R: 6, H: 6, I: 2, A: 6, L: 8 } } ], 
        reglasEspeciales: "Monstruo. Volar, Piel Escamosa (3+), Arma de aliento (chequeo de Resistencia o herida sin TSA; no afecta a Demonios/No muertos), Aura de escarcha (-1 HA e I enemigos en contacto; no afecta a Demonios/No muertos)." 
    }
};

const magicItemsDB_kis = {
    "Arma Mágica": {
        "Filosangriento": { points: 40, faction: "kis", relic: true, summary: "Arma de mano. +2F, Furia asesina (no se pierde)." },
        "Hacha sagrada de Miska": { points: 50, faction: "kis", relic: false, summary: "Arma a dos manos. Poder de penetración, Heridas múltiples (1D3)." },
        "La cimitarra glacial": { points: 35, faction: "kis", relic: false, summary: "Arma de mano. +1F y +1A en CaC." },
        "Lanza bendita de Dazh": { points: 30, faction: "kis", relic: false, summary: "Lanza. +1F en CaC. Heridas múltiples (2) vs Demonio/No muerto." },
        "Arco de hueso Ungol": { points: 25, faction: "kis", relic: false, summary: "Arco. Disparos múltiples (1D6), F4." },
        "Pistolas del príncipe Boydinov": { points: 25, faction: "kis", relic: false, summary: "Ristra de pistolas. +1 al impactar (disparo y CaC)." }
    },
    "Armadura Mágica": {
        "Armadura de hielo de Jekaterina": { points: 35, faction: "kis", relic: false, summary: "Armadura pesada. TSE 4+ (anulada por Ataques mágicos/flamígeros)." },
        "Armadura de Alexander": { points: 35, faction: "kis", relic: false, summary: "Armadura pesada. TSA 3+. Repite TSA fallidas." },
        "Escudo de Ursun": { points: 30, faction: "kis", relic: false, summary: "Escudo. +1F." },
        "Pellejo del Lobo Invernal": { points: 15, faction: "kis", relic: false, summary: "Puede llevarse sobre otra armadura. Piel escamosa (5+) e Immune a fuego." }
    },
    "Talismán": {
        "La Corona de hielo": { points: 50, faction: "kis", relic: true, summary: "Sólo hechiceros. +1R, Inmune a fuego, +1 dado dispersión/fase magia." },
        "Manto sagrado de Ursun": { points: 45, faction: "kis", relic: false, summary: "Impactos vs portador: -2F (-1F vs Ataques mágicos). No afecta impactos sin F." },
        "Orbe Glaciar": { points: 25, faction: "kis", relic: false, summary: "Regeneración 5+ e inmune al fuego." },
        "Collar de dientes de oso": { points: 15, faction: "kis", relic: false, summary: "Piel escamosa (5+)." }
    },
    "Objeto Hechizado": {
        "La Manzana de Kislev": { points: 50, faction: "kis", relic: true, summary: "Sólo general. +1L (máx 10), Tozudez." },
        "Pluma de Finist el Halcón": { points: 40, faction: "kis", relic: false, summary: "Portahechizos(5). Potenciación: teletransporta portador y montura." },
        "Relicario de congelación": { points: 30, faction: "kis", relic: false, summary: "Enemigos en contacto: I reducida a la mitad." },
        "Icono del Juramento Eterno": { points: 30, faction: "kis", relic: false, summary: "Portador y unidad repiten tiradas para impactar vs Caos." },
        "El Farol de Dazh": { points: 25, faction: "kis", relic: false, summary: "Portahechizos(4). Proyectil mágico 18\": 2D6 impactos F4 (Ataques flamígeros; F6 vs No muerto/Demonio)." },
        "Pócima gélida ungol": { points: 20, faction: "kis", relic: false, summary: "Un sólo uso. Arma de aliento F3 (no permite TSA)." }
    },
    "Artefactos Arcanos": {
        "Guanteletes de guerra de Miska": { points: 40, faction: "kis", relic: false, summary: "+1 lanzar hechizos, +1 hechizo." },
        "La Vara del Hielo": { points: 35, faction: "kis", relic: false, summary: "+1 lanzar hechizos del hielo, repite canalizar." },
        "El Ojo de Vladimir": { points: 25, faction: "kis", relic: false, summary: "Puede elegir uno de los ocho saberes de la magia." },
        "La Trenza de Vasilisa": { points: 25, faction: "kis", relic: false, summary: "Repite resultados de 1 natural en dispersión." }
    },
    "Estandarte Mágico": {
        "Estandarte de la Reina de Hielo": { points: 50, faction: "kis", relic: true, summary: "¡Ni un paso atrás! 24\" (en lugar de 12\")." },
        "Bandera de los Gospodar": { points: 50, faction: "kis", relic: false, summary: "Sólo Caballería/Caballería monstruosa. Carga devastadora, repite impactos al cargar." },
        "Pabellón de Tormentas": { points: 45, faction: "kis", relic: false, summary: "Portahechizos(4). Daño directo 18\": 1D6 impactos F6 (no TSA, ataque rayos)." },
        "Icono sagrado de Miska": { points: 25, faction: "kis", relic: false, summary: "+1 HA (no monturas)." },
        "Estandarte aullante de Njevski": { points: 15, faction: "kis", relic: false, summary: "Causa Miedo al cargar." },
        "Pabellón Encantado": { points: 10, faction: "kis", relic: false, summary: "Ataques mágicos." }
    }
};

const armySkillsDB_kis = {
    // Habilidades especiales de personajes (si las hubiera)
    // Por ahora vacío ya que el libro no especifica habilidades de renombre
};

const specialProfilesDB_kis = {
    // Perfiles especiales para unidades dentro de unidades
    // Por ahora vacío ya que no hay unidades con modelos especiales como fanáticos
};

// --- EXPORT THE MODULE ---
export default {
    ARMY_NAME: "Kislev",
    FACTION_ID: "kis",
    FOC_CONFIG: { 
        Lord: { label: "Comandantes", min: 0, max: 0.25, color: "bg-red-600" },
        Hero: { label: "Héroes", min: 0, max: 0.50, color: "bg-orange-500" },
        Core: { label: "Básicas", min: 0.25, max: 1, color: "bg-green-600" },
        Special: { label: "Especiales", min: 0, max: 0.50, color: "bg-blue-500" },
        Rare: { label: "Singulares", min: 0, max: 0.25, color: "bg-purple-600" },
    },
    unitsDB: unitsDB_kis,
    mountsDB: mountsDB_kis,
    magicItemsDB: magicItemsDB_kis,
    armySkillsDB: armySkillsDB_kis,
    specialProfilesDB: specialProfilesDB_kis,
    armySkillsLabel: "Habilidades", // Custom label for the skills button
};
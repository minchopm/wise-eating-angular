import { CORE_ES } from './es-ES/core';
import { LocaleContent } from './types';

/**
 * Español.
 *
 * Traducido de nutrients.en-US.ts. Las cifras no están aquí: viven una sola
 * vez, en nutrient-facts.ts, y se unen al renderizar por identificador. Una
 * traducción puede hacer que una página se lea mal; no puede hacerla insegura.
 *
 * Español neutro a propósito. El mercado principal es hispanohablante en
 * Estados Unidos, pero la misma página se sirve a España y a América Latina, y
 * el vocabulario marcadamente regional cuesta más lectores de los que gana.
 * Donde no hay un término común, gana el de uso más amplio.
 */
export const ES_ES: LocaleContent = {
  chrome: {
    whatItDoes: 'Qué hace en el cuerpo',
    howMuch: 'Cuánto necesita',
    colWho: 'Para quién',
    colPerDay: 'Al día',
    colNote: 'Nota',
    fromOurData: 'De nuestros propios datos',
    foodsHeading: 'Los alimentos con más {n}',
    foodsFootnote:
      'Por 100 g, de nuestra copia de USDA FoodData Central, frente a un valor diario de ' +
      '{dv}{unit}. Ordenados por cantidad, no por cuánto absorbe realmente el cuerpo — lea la ' +
      'sección siguiente antes de fiarse del orden.',
    absorption: 'Qué ayuda y qué estorba',
    helps: 'Ayuda',
    hinders: 'Estorba',
    shortfall: 'A quién le suele faltar',
    shortfallLede:
      'Grupos en los que la ingesta o la absorción son habitualmente menores que la referencia. ' +
      'Es una lista de poblaciones, no de síntomas: no puede decirle nada sobre usted.',
    cookIt: 'Cocínelo',
    ingredients: 'Ingredientes',
    method: 'Preparación',
    sources: 'Fuentes',
    reviewed: 'Última revisión',
    disclaimer:
      'Esta página es divulgación, no consejo médico. No diagnostica nada y no sustituye a un ' +
      'profesional que conozca su historia. Si cree que le falta {n}, la respuesta es un análisis ' +
      'y una conversación, no un suplemento comprado por lo que decía un artículo.',
    ctaLine: 'Todos los alimentos de arriba y 12.601 más, con el panel completo — en la app.',
    allNutrients: 'Todos los nutrientes',
    familyVitamin: 'Vitamina',
    familyMineral: 'Mineral',
    familyMacronutrient: 'Macronutriente',
    referenceNote:
      'Las cifras de la tabla son las Dietary Reference Intakes de Estados Unidos, el estándar ' +
      'con el que está compilada la base de alimentos de la app. Los valores de referencia de la ' +
      'EFSA para la Unión Europea difieren en algunos nutrientes. Las diferencias son pequeñas y ' +
      'no cambian la conclusión práctica, pero si compara con una fuente española o europea, esa ' +
      'es la razón de que los números no coincidan exactamente.',
  },

  hub: {
    eyebrow: 'Los datos',
    title: 'Nutrientes y datos del USDA',
    lede: 'De dónde salen las cifras, qué pueden decirle y — igual de importante — qué no.',
    description:
      'Los artículos sobre nutrientes en español: qué hace cada uno, cuánto necesita y qué ' +
      'alimentos llevan más — de {source}.',
    dataHeading: 'Una base de datos, y de las buenas',
    dataBody: [
      'La app lleva {foods} alimentos de {source} dentro del propio dispositivo, no en un ' +
        'servidor. Por eso una consulta es instantánea, funciona en un avión y nada de lo que ' +
        'usted busca sale del teléfono.',
      'Cada alimento lleva {fields} campos de nutrientes: {vitamins} vitaminas, {minerals} ' +
        'minerales, los macronutrientes, la fibra y los azúcares. Los valores están por ración y ' +
        'por 100 g, y se puede cambiar de uno a otro sin salir del panel — lo que importa más de ' +
        'lo que parece, porque casi toda discusión sobre si un alimento es «rico» en algo es en ' +
        'realidad una discusión sobre el denominador.',
      'Los datos son estadounidenses de origen e internacionales de uso. La composición es una ' +
        'propiedad del alimento, no de la frontera que ha cruzado: una lenteja en Madrid y una ' +
        'lenteja en Seattle son la misma lenteja. Lo que de verdad varía — variedad, suelo, ' +
        'almacenamiento, cocinado — varía dentro de un país tanto como entre dos, y por eso la ' +
        'app trata cada cifra como una estimación.',
    ],
    indexHeading: 'Un nutriente cada vez',
    indexLede:
      'Para qué sirve, cuánto necesita a cada edad, qué alimentos llevan más — ordenados a partir ' +
      'de los mismos registros del USDA que trae la app — y algo para cocinar.',
    read: 'Leer →',
    disclaimer:
      'Nada en estas páginas es consejo médico, y ningún alimento previene ni trata una ' +
      'enfermedad. Si cree que le falta algo, la respuesta es un análisis y una conversación con ' +
      'un profesional, no una app.',
    englishNote: 'Más completo, en inglés: {href}',
    englishLink: 'Nutrients & USDA data',
  },

  articles: CORE_ES,
};

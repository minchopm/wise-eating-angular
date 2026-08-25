import { CORE_FR } from './fr-FR/core';
import { LocaleContent } from './types';

/**
 * Français.
 *
 * Traduit de nutrients.en-US.ts. Les chiffres ne sont pas ici : ils vivent une
 * seule fois, dans nutrient-facts.ts, et sont rattachés au rendu par
 * identifiant. Une traduction peut rendre une page mal écrite ; elle ne peut
 * pas la rendre dangereuse.
 *
 * Terminologie : « apport journalier recommandé » pour l’ANC/RDA, « apport
 * suffisant » pour l’AI. Les unités restent celles de la source — µg et UI —
 * parce que c’est ainsi qu’elles figurent sur les étiquettes.
 */
export const FR_FR: LocaleContent = {
  chrome: {
    whatItDoes: 'Ce qu’il fait dans le corps',
    howMuch: 'Quelle quantité il vous faut',
    colWho: 'Pour qui',
    colPerDay: 'Par jour',
    colNote: 'Remarque',
    fromOurData: 'D’après nos propres données',
    foodsHeading: 'Les aliments les plus riches en {n}',
    foodsFootnote:
      'Pour 100 g, d’après notre copie d’USDA FoodData Central, rapporté à une valeur ' +
      'quotidienne de {dv}{unit}. Classés par quantité, non par ce que le corps absorbe ' +
      'réellement — lisez la section suivante avant de vous fier à cet ordre.',
    absorption: 'Ce qui aide et ce qui gêne',
    helps: 'Aide',
    hinders: 'Gêne',
    shortfall: 'Qui en manque le plus souvent',
    shortfallLede:
      'Groupes chez qui l’apport ou l’absorption sont couramment inférieurs à la référence. ' +
      'C’est une liste de populations, pas de symptômes : elle ne peut rien vous dire sur vous.',
    cookIt: 'À cuisiner',
    ingredients: 'Ingrédients',
    method: 'Préparation',
    sources: 'Sources',
    reviewed: 'Dernière vérification',
    disclaimer:
      'Cette page relève de l’information, pas du conseil médical. Elle ne pose aucun diagnostic ' +
      'et ne remplace pas un professionnel qui connaît votre histoire. Si vous pensez manquer de ' +
      '{n}, la réponse est une prise de sang et une discussion, pas un complément acheté sur la ' +
      'foi d’un article.',
    ctaLine: 'Tous les aliments ci-dessus, et 12 601 autres, avec le profil complet — dans l’app.',
    allNutrients: 'Tous les nutriments',
    familyVitamin: 'Vitamine',
    familyMineral: 'Minéral',
    familyMacronutrient: 'Macronutriment',
    referenceNote:
      'Les valeurs du tableau sont les Dietary Reference Intakes américaines — la référence ' +
      'contre laquelle la base alimentaire de l’app est compilée. Les références nutritionnelles ' +
      'de l’ANSES et celles de l’EFSA diffèrent pour certains nutriments. Les écarts sont faibles ' +
      'et ne changent pas la conclusion pratique, mais si vous comparez avec une source française ' +
      'ou européenne, c’est la raison pour laquelle les chiffres ne coïncident pas exactement.',
  },

  hub: {
    eyebrow: 'Les données',
    title: 'Nutriments et données de l’USDA',
    lede: 'D’où viennent les chiffres, ce qu’ils peuvent vous dire et — tout aussi important — ce qu’ils ne peuvent pas.',
    description:
      'Les articles sur les nutriments en français : ce que fait chacun, quelle quantité il vous ' +
      'faut et quels aliments en portent le plus — d’après {source}.',
    dataHeading: 'Une base de données, et une bonne',
    dataBody: [
      'L’app embarque {foods} aliments issus de {source} dans l’appareil lui-même, et non sur un ' +
        'serveur. Une recherche est donc instantanée, elle fonctionne en avion, et rien de ce que ' +
        'vous cherchez ne quitte le téléphone.',
      'Chaque aliment porte {fields} champs de nutriments : {vitamins} vitamines, {minerals} ' +
        'minéraux, les macronutriments, les fibres et les sucres. Les valeurs existent par ' +
        'portion et pour 100 g, et l’on passe de l’une à l’autre sans quitter le panneau — ce qui ' +
        'compte plus qu’il n’y paraît, car presque toute discussion sur le fait qu’un aliment ' +
        'soit « riche » en quelque chose est en réalité une discussion sur le dénominateur.',
      'Les données sont américaines d’origine et internationales d’usage. La composition est une ' +
        'propriété de l’aliment, pas de la frontière qu’il a franchie : une lentille à Lyon et ' +
        'une lentille à Seattle sont la même lentille. Ce qui varie vraiment — variété, sol, ' +
        'stockage, cuisson — varie autant à l’intérieur d’un pays qu’entre deux, et c’est pour ' +
        'cela que l’app traite chaque chiffre comme une estimation.',
    ],
    indexHeading: 'Un nutriment à la fois',
    indexLede:
      'À quoi il sert, quelle quantité il vous faut à chaque âge, quels aliments en portent le ' +
      'plus — classés depuis les mêmes enregistrements USDA que l’app embarque — et quelque chose ' +
      'à cuisiner.',
    read: 'Lire →',
    disclaimer:
      'Rien sur ces pages n’est un conseil médical, et aucun aliment ne prévient ni ne traite une ' +
      'maladie. Si vous pensez manquer de quelque chose, la réponse est une prise de sang et une ' +
      'discussion avec un professionnel, pas une application.',
    englishNote: 'Plus complet, en anglais : {href}',
    englishLink: 'Nutrients & USDA data',
  },

  shell: {
    tagline:
      '{foods} aliments tirés de la base {source}, dans le téléphone — avec les outils de ' +
      'planification, d’entraînement et de garde-manger pour vraiment s’en servir.',
    product: 'Produit',
    learn: 'Comprendre',
    legal: 'Mentions légales',
    contact: 'Contact',
    note:
      '{name} est un outil de planification et d’information. Il ne pose aucun diagnostic, ne ' +
      'traite ni ne guérit aucune affection, et ne remplace pas un avis médical professionnel. ' +
      'Les valeurs nutritionnelles sont des estimations tirées de la base {source} ; la teneur ' +
      'réelle d’un aliment varie avec le sol, le stockage et la cuisson.',
    rights: 'Tous droits réservés.',
    storeNote:
      'Publié sur l’App Store par {seller}. Apple et App Store sont des marques d’Apple Inc.',
    englishPages: 'Les pages ci-dessous sont en anglais.',
  },

  articles: CORE_FR,
};

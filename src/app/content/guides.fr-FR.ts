import { GUIDES_CORE_FR } from './fr-FR/guides-core';
import { GuideLocale } from './guide-types';

/**
 * Français.
 *
 * Huit des vingt guides, les mêmes huit dans les quatre langues qui ne sont ni
 * l’anglais ni l’allemand. Les chiffres ne sont pas ici : ils vivent une seule
 * fois, dans guide-facts.ts, avec l’indication de leur solidité.
 *
 * Les numéros ci-dessous sont français, délibérément. Une ligne d’écoute
 * britannique sur une page en français n’est pas un panneau, c’est une impasse :
 * mauvaise langue, mauvais horaires, mauvais système de soins. Quelqu’un qui lit
 * cette page parce qu’elle le décrit a besoin d’un numéro qu’il peut appeler
 * aujourd’hui.
 */
export const GUIDES_FR_FR: GuideLocale = {
  chrome: {
    commonBelief: 'Ce que presque tout le monde croit',
    whatEvidenceSays: 'Ce que dit réellement la recherche',
    numbers: 'Les chiffres, et leur solidité',
    colWhat: 'Ce qu’il décrit',
    colFigure: 'Valeur',
    colStrength: 'Niveau de preuve',
    practical: 'Quoi faire concrètement',
    seeAlso: 'Les nutriments derrière tout ça',
    sources: 'Sources',
    reviewed: 'Dernière vérification',

    strengthEstablished: 'Établi',
    strengthProbable: 'Probable',
    strengthContested: 'Débattu',
    strengthNote:
      'Établi signifie que les sociétés savantes s’accordent et que l’on peut agir en ' +
      'conséquence. Probable signifie que le poids des données va dans un sens, avec un ' +
      'désaccord réel. Débattu signifie que la question est vraiment ouverte — et quiconque vous ' +
      'vend une certitude là-dessus vous vend quelque chose.',

    familyTraining: 'Entraînement',
    familyShortfall: 'Carence cachée',
    familyMind: 'Psychisme',

    disclaimer:
      'Cette page relève de l’information, pas du conseil médical. Elle ne pose aucun diagnostic ' +
      'et ne remplace pas un professionnel qui connaît votre histoire. La nutrition sportive en ' +
      'particulier est un domaine où les données bougent, et où un chiffre qui convient à une ' +
      'personne entraînée de vingt-cinq ans peut être faux pour vous.',

    careHeading: 'Si cette page vous décrit et ne fait pas que vous intéresser',
    careBody:
      'Cette page décrit un mécanisme. Elle ne peut pas vous dire si vous avez un problème, et ' +
      'elle n’est pas un traitement. Les troubles des conduites alimentaires ont la mortalité la ' +
      'plus élevée de toutes les maladies psychiatriques et répondent bien aux soins — ce sont ' +
      'deux raisons d’en parler tôt plutôt que tard. Votre médecin traitant est une première ' +
      'porte raisonnable et a déjà eu cette conversation.',
    careLinks: [
      {
        label: 'Anorexie Boulimie Info Écoute — 09 69 325 900',
        url: 'https://www.fna-tca.org/trouvez-de-laide',
      },
      { label: 'FFAB — Fédération Française Anorexie Boulimie', url: 'https://www.ffab.fr/' },
      {
        label: '3114 — numéro national de prévention du suicide, 24 h/24',
        url: 'https://3114.fr/',
      },
      { label: 'Trouver une ligne d’écoute dans votre pays', url: 'https://findahelpline.com/' },
    ],

    ctaLine: 'Chaque nutriment cité plus haut, mesuré — dans l’app.',
    allGuides: 'Tous les guides',
  },

  guides: GUIDES_CORE_FR,
};

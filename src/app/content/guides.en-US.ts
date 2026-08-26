import { GUIDES_MIND_EN } from './en-US/guides-mind';
import { GUIDES_SHORTFALL_EN } from './en-US/guides-shortfall';
import { GUIDES_TRAINING_EN } from './en-US/guides-training';
import { GuideLocale } from './guide-types';

/**
 * English (United States) — the source text for the guides.
 *
 * Every other language is translated from here, so this is the one that has to
 * be right.
 */
export const GUIDES_EN_US: GuideLocale = {
  chrome: {
    commonBelief: 'What most people believe',
    whatEvidenceSays: 'What the evidence actually says',
    numbers: 'The numbers, and how firmly they are held',
    colWhat: 'What it describes',
    colFigure: 'Figure',
    colStrength: 'Evidence',
    practical: 'What to actually do',
    seeAlso: 'The nutrients behind this',
    sources: 'Sources',
    reviewed: 'Last reviewed',

    strengthEstablished: 'Established',
    strengthProbable: 'Probable',
    strengthContested: 'Contested',
    strengthNote:
      'Established means the position stands agree and you can act on it. Probable means the ' +
      'weight of evidence points one way with real dissent. Contested means it is genuinely ' +
      'unsettled, and anyone selling you certainty about it is selling something.',

    familyTraining: 'Training',
    familyShortfall: 'Shortfall',
    familyMind: 'Mind',

    disclaimer:
      'This page is education, not medical advice. It does not diagnose anything and it is not a ' +
      'substitute for a clinician who knows your history. Sports nutrition in particular is a ' +
      'field where the evidence moves, and where a figure that suits a trained twenty-five-year-' +
      'old may be wrong for you.',

    careHeading: 'If this describes you rather than interests you',
    careBody:
      'This page describes a mechanism. It cannot tell you whether you have a problem, and it is ' +
      'not treatment. Eating disorders have the highest mortality of any psychiatric illness and ' +
      'they respond well to treatment — which are both reasons to speak to someone early rather ' +
      'than late. A GP is a reasonable first door and will have had the conversation before.',
    careLinks: [
      {
        label: 'Beat — UK eating disorder helplines, Mon–Fri 3pm–8pm',
        url: 'https://www.beateatingdisorders.org.uk/get-information-and-support/get-help-for-myself/i-need-support-now/helplines/',
      },
      {
        label: 'ANAD — US eating disorders helpline: 1-888-375-7767, Mon–Fri 9am–9pm CT',
        url: 'https://anad.org/get-support/eating-disorders-helpline/',
      },
      {
        label: 'NICE guideline NG69 — what good treatment looks like',
        url: 'https://www.nice.org.uk/guidance/ng69',
      },
      { label: 'Find a helpline in your country', url: 'https://findahelpline.com/' },
    ],

    ctaMid: 'What follows is easier when you know what you are already eating.',

    ctaLine: 'Every nutrient named above, measured — in the app.',
    allGuides: 'All guides',
  },

  guides: {
    ...GUIDES_TRAINING_EN,
    ...GUIDES_SHORTFALL_EN,
    ...GUIDES_MIND_EN,
  },
};

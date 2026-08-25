import { LocalisedGuide } from '../guide-types';

/** The shortfall guides, in English. Figures live in guide-facts.ts. */
export const GUIDES_SHORTFALL_EN: Readonly<Record<string, LocalisedGuide>> = {
  'hidden-hunger': {
    title: 'Hidden hunger: eating too much and short of it anyway',
    short: 'Hidden hunger',
    lede:
      'The word malnutrition brings up an image of scarcity. The commonest form of it in wealthy ' +
      'countries looks like the opposite — plenty of food, plenty of energy, and a panel with ' +
      'holes in it.',
    description:
      'Why you can eat more than enough calories and still be short of iron, magnesium or ' +
      'calcium — what hidden hunger is, who it affects, and how to find it.',

    commonBelief:
      'Deficiency is something that happens where there is not enough food. If I am eating ' +
      'plenty — too much, if anything — that is not my problem.',

    sections: [
      {
        heading: 'Two different hungers',
        body: [
          'Energy and nutrients arrive in the same mouthful and are counted separately by the ' +
            'body. You can meet one and miss the other, and the two failures feel nothing alike: ' +
            'a shortage of energy announces itself as hunger, and a shortage of magnesium ' +
            'announces itself as almost nothing at all for years.',
          'That silence is the whole difficulty. There is no receptor for iron status. Nothing ' +
            'makes you crave zinc. The body will let a mineral run down for a very long time ' +
            'while keeping the blood level normal by taking it out of somewhere else — bone, ' +
            'usually — and the first symptom is often the consequence rather than the shortage.',
        ],
      },
      {
        heading: 'How a full plate ends up empty',
        body: [
          'The mechanism is dilution, not absence. A food that has been through heavy processing ' +
            'usually keeps its energy and loses a share of what came with it: milling takes the ' +
            'germ and bran off a grain, and about four-fifths of its magnesium goes with them. ' +
            'Refining does the same to oils. None of this is a conspiracy — it is what makes food ' +
            'shelf-stable and cheap — but the result is a diet that is energy-dense and ' +
            'nutrient-thin.',
          'Then the arithmetic works against you. Requirements are roughly fixed while appetite is ' +
            'satisfied by energy, so the more of your energy comes from foods carrying little ' +
            'besides energy, the less room is left for the ones carrying everything else.',
          'This is why the pattern shows up as overweight and deficient at once, which sounds like ' +
            'a contradiction and is not. It is two different accounts, and only one of them is ' +
            'in surplus.',
        ],
      },
      {
        heading: 'Who this actually is',
        body: [
          'National survey data is unusually good at answering this, because it measures what ' +
            'people ate rather than what they say they eat. In the United States a short list of ' +
            'nutrients turns up repeatedly below the reference across the whole population, not ' +
            'in a corner of it.',
          'Calcium and magnesium are the two that stand out, and the reason is the same: both come ' +
            'largely from food groups people have quietly eaten less of — dairy for one, whole ' +
            'grains and legumes for the other. Vitamin D belongs in the list too, but for a ' +
            'different reason, since food was never where most of it came from.',
          'None of that means everyone reading this is deficient. Below the reference intake is ' +
            'not the same as deficient — the reference is set to cover almost everybody, so ' +
            'falling under it means "possibly short", not "certainly ill". What it does mean is ' +
            'that the assumption of being fine because there is food in the house does not hold.',
        ],
      },
      {
        heading: 'What to do about it, given none of it is visible',
        body: [
          'The honest first move is to stop guessing. Vague tiredness is compatible with a dozen ' +
            'nutrient shortfalls, with poor sleep, with an underactive thyroid and with nothing at ' +
            'all, and picking a supplement off the shelf to match a feeling is how people end up ' +
            'taking zinc for a year and giving themselves a copper problem.',
          'The useful move is to find out what you actually eat, in the boring sense — for a week, ' +
            'not forever. Most gaps in a real diet turn out to be structural: an entire food group ' +
            'that quietly left, one meal a day that contributes nothing, a swap made for a good ' +
            'reason that took something with it.',
          'And where a shortfall looks real, the answer is a blood test and a clinician, not an ' +
            'article. That is not throat-clearing. Iron in particular is genuinely dangerous to ' +
            'supplement blind, because the body has no way to excrete a surplus.',
        ],
      },
    ],

    claims: {
      'global-affected': {
        what: 'People affected worldwide',
        note: 'The WHO’s figure for micronutrient deficiency',
      },
      'us-shortfall-nutrients': {
        what: 'Nutrients under-consumed across the US population',
        note: 'Named as such by the Dietary Guidelines committee',
      },
      'calcium-shortfall': { what: 'US adults below the calcium reference' },
      'magnesium-shortfall': { what: 'US adults below the magnesium reference' },
    },
    claimsNote:
      'Below the reference intake is not the same as deficient. The reference is set high enough ' +
      'to cover nearly everybody, so falling under it means "possibly short" rather than ' +
      '"certainly ill".',

    practical: [
      {
        title: 'Look at a week, not a day',
        detail:
          'One day tells you about one day. A week shows the structure: the meal that contributes ' +
            'nothing, the food group that left without being replaced.',
      },
      {
        title: 'Find the swap that cost you something',
        detail:
          'Most gaps trace to a single substitution made for a good reason — dairy out for ' +
            'lactose, bread out for carbohydrates, meat out for ethics — where nothing came in to ' +
            'carry what left.',
      },
      {
        title: 'Do not treat a feeling with a supplement',
        detail:
          'Tiredness matches too many causes. If a shortfall looks real, a blood test costs less ' +
            'than a year of the wrong pill, and in the case of iron it is the difference between ' +
            'help and harm.',
      },
    ],

    seeAlso: ['magnesium', 'calcium', 'iron', 'vitamin-d'],

    sources: {
      'who-micronutrient': 'World Health Organization — micronutrients',
      dgac: 'Dietary Guidelines for Americans — scientific report',
      nhanes: 'National Health and Nutrition Examination Survey (NHANES)',
    },
  },
};

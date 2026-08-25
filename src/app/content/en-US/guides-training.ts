import { LocalisedGuide } from '../guide-types';

/** The training guides, in English. Figures live in guide-facts.ts. */
export const GUIDES_TRAINING_EN: Readonly<Record<string, LocalisedGuide>> = {
  /* ------------------------------------------------------- protein timing */
  'protein-per-meal': {
    title: 'You are probably eating enough protein and still wasting most of it',
    short: 'Protein per meal',
    lede:
      'The daily total is the number everyone tracks and the one that matters least. Muscle is ' +
      'built in response to individual meals, and a day that hits its target in one sitting is ' +
      'not the same day as one that hits it across three.',
    description:
      'Why protein works per meal rather than per day, what the leucine threshold is, and why ' +
      'the anabolic window turned out to be far wider than anyone sold you.',

    commonBelief:
      'Hit your grams for the day and the distribution takes care of itself — and get a shake ' +
      'in within thirty minutes of the last set or the session is wasted.',

    sections: [
      {
        heading: 'Muscle does not have an account, it has a switch',
        body: [
          'There is no protein store. Fat has one, carbohydrate has a small one, and protein has ' +
            'none — every gram of it in your body is already a working part of something. So the ' +
            'body cannot bank a surplus from dinner and spend it at breakfast the way it does ' +
            'with energy.',
          'What it does instead is switch. A meal arrives, amino acids appear in the blood, and ' +
            'if they cross a certain concentration the machinery that builds muscle protein turns ' +
            'on for a few hours and then turns off again regardless of what else is in the blood. ' +
            'Below that concentration it does not turn on at all.',
          'That is the whole reason the daily total misleads. Two people eating 120 g of protein ' +
            'are not doing the same thing if one crosses the threshold three times and the other ' +
            'crosses it once. The one who crossed it once ate the same food and got most of the ' +
            'way through it on a switch that was off.',
        ],
      },
      {
        heading: 'What flips the switch is leucine, not protein',
        body: [
          'The trigger is one amino acid. Leucine is the signal the sensing machinery reads, and ' +
            'the rest of the amino acids are the bricks it then uses. A meal with enough total ' +
            'protein but little leucine gets a weak response, which is exactly what happens when ' +
            'someone tops up with gelatin or a bag of collagen and wonders why nothing changed.',
          'That is why animal proteins and soy do this more efficiently than most single plant ' +
            'proteins: they carry more leucine per gram. It is not a claim about them being ' +
            'better foods, and it does not mean a plant-based lifter cannot get there — it means ' +
            'they have to eat somewhat more of it, or combine sources, to arrive at the same ' +
            'signal.',
        ],
      },
      {
        heading: 'The window is a room',
        body: [
          'The thirty-minute rule sold a great deal of powder and did not survive testing. When ' +
            'trials controlled for total daily intake — which the early ones did not — the ' +
            'advantage of eating immediately after training mostly disappeared. The elevated ' +
            'sensitivity to protein lasts for hours, not minutes.',
          'This is one of the places where the evidence is genuinely still moving, and the table ' +
            'below says so rather than pretending otherwise. What is not contested is the shape ' +
            'of the advice that falls out of it: get enough, spread it, and stop setting a timer.',
          'The one situation where timing does matter is when the next meal is a long way off — ' +
            'training fasted at six in the morning and not eating until one o’clock leaves a long ' +
            'stretch with the switch off. That is a distribution problem wearing a timing costume.',
        ],
      },
      {
        heading: 'Where this gets serious is age',
        body: [
          'Older muscle is less sensitive to the same signal. The threshold rises, so a portion ' +
            'that would have triggered a response at thirty does not at seventy, and the result ' +
            'is the slow loss of muscle and the fall that follows it.',
          'That is why the figure for older adults in the table is higher than the general ' +
            'recommendation and much higher than the RDA. The RDA is the amount that prevents ' +
            'deficiency in almost everyone. Preventing deficiency and holding on to muscle are ' +
            'not the same question, and the same number cannot answer both.',
        ],
      },
    ],

    claims: {
      rda: {
        what: 'The RDA, all adults',
        note: 'Prevents deficiency. Not a target for anyone training',
      },
      'daily-athlete': { what: 'Trained adults, daily' },
      'per-meal': { what: 'Per meal, to trigger a response' },
      'leucine-threshold': { what: 'Leucine per meal', note: 'Roughly 25–30 g of a quality protein' },
      'older-adults': { what: 'Adults over about 65', note: 'The threshold rises with age' },
      window: {
        what: 'The post-exercise window',
        note: 'Far wider than the thirty minutes it was sold as',
      },
    },
    claimsNote:
      'Per kilogram of body weight. The ranges are ranges because the underlying trials disagree ' +
      'at the edges, and a single number would be a tidier lie.',

    practical: [
      {
        title: 'Count meals, not grams',
        detail:
          'Three or four meals that each clear the threshold beats a day that hits the same total ' +
            'with one large dinner. If you change one thing, change breakfast — it is the meal ' +
            'most often below it.',
      },
      {
        title: 'Put a number on the smallest meal',
        detail:
          'Most people know what dinner looks like and have no idea what lunch contains. Look up ' +
            'the one you are least sure about; that is usually where the gap is.',
      },
      {
        title: 'Stop timing and start spacing',
        detail:
          'Three to five hours between protein feedings, not a stopwatch after the last set. The ' +
            'exception is a long gap around training — then eat nearer to it, for distribution ' +
            'reasons rather than magic ones.',
      },
      {
        title: 'If you are over sixty-five, aim higher on purpose',
        detail:
          'The same portion does less. This is the one group where the difference between the ' +
            'RDA and the training figure is not academic.',
      },
    ],

    seeAlso: ['protein', 'vitamin-d', 'calcium'],

    sources: {
      'issn-protein': 'International Society of Sports Nutrition — position stand on protein and exercise',
      'issn-timing': 'International Society of Sports Nutrition — position stand on nutrient timing',
      'prot-age': 'PROT-AGE study group — protein intake in older adults',
      'dri-macro': 'Dietary Reference Intakes for Energy, Carbohydrate, Fibre, Fat, Protein and Amino Acids',
    },
  },
};

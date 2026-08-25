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

  /* ------------------------------------------ ultra-processed and density */
  'ultra-processed-and-density': {
    title: 'The problem with ultra-processed food is what is missing, not only what is added',
    short: 'Ultra-processed food',
    lede:
      'Most of the argument is about sugar, salt and additives. The quieter issue is arithmetic: ' +
      'these foods keep their energy and lose much of what came with it, and they now supply ' +
      'over half the calories in some countries.',
    description:
      'What ultra-processed means, why it displaces nutrients rather than only adding bad ones, ' +
      'and what the one controlled feeding trial actually showed.',

    commonBelief:
      'Processed food is bad because of what is put into it — the additives, the sugar, the ' +
      'preservatives. Eat it in moderation and there is no real problem.',

    sections: [
      {
        heading: 'What the term actually means',
        body: [
          'Processing is not one thing. Freezing peas is processing. Milling flour is processing. ' +
            'The NOVA classification separates these by degree, and the category people argue ' +
            'about is the fourth: industrial formulations made largely from substances extracted ' +
            'from foods — starches, protein isolates, modified oils — plus additives that make ' +
            'the result palatable and stable.',
          'The distinguishing feature is not that they are unhealthy by definition. It is that ' +
            'they are assembled from fractions rather than made from foods, and a fraction is ' +
            'the part of a food someone wanted, separated from the parts they did not.',
        ],
      },
      {
        heading: 'The displacement problem',
        body: [
          'Requirements for nutrients are roughly fixed. Appetite is satisfied by energy. Those ' +
            'two facts together mean every calorie from a food carrying little besides energy is ' +
            'a calorie of room that something else could have used.',
          'Milling is the clearest case. Take the germ and bran off a grain and you remove about ' +
            'four-fifths of its magnesium along with most of the fibre and much of the B ' +
            'vitamins. The energy stays. Fortification puts a few of those back — usually iron ' +
            'and some B vitamins, because they are cheap and stable — and does not put back the ' +
            'magnesium, the fibre, or the several dozen compounds nobody is measuring.',
          'This is why the pattern shows up in national data as overweight and deficient at once. ' +
            'The two accounts are separate and only one is in surplus.',
        ],
      },
      {
        heading: 'The trial that changed the conversation',
        body: [
          'Most nutrition evidence is observational, and observational data cannot easily separate ' +
            'ultra-processed food from being poorer, more rushed and more stressed.',
          'One controlled inpatient study did separate it. Participants lived in a research ' +
            'facility and were given either ultra-processed or minimally processed meals, matched ' +
            'for calories, sugar, fat, fibre and sodium, and told to eat as much as they wanted. ' +
            'On the ultra-processed diet they ate substantially more — several hundred calories a ' +
            'day — and gained weight. On the other they lost it.',
          'The matching is the important part. Something about the food itself drove the ' +
            'over-eating, independent of its nutrient profile on paper. It is one study with a ' +
            'small number of people, and it is the best evidence there is.',
        ],
      },
      {
        heading: 'What follows, and what does not',
        body: [
          'What does not follow is that a category label tells you whether a food is good. ' +
            'Wholemeal supermarket bread is technically ultra-processed and is a perfectly ' +
            'reasonable food. Tinned beans and frozen vegetables are processed and among the best ' +
            'value on any shelf.',
          'What does follow is that the share matters more than the individual item. When more ' +
            'than half your energy comes from formulations, the gaps stop being a rounding error ' +
            'and start being the pattern in the survey data.',
          'The useful question is therefore not "is this food processed" but "what is this food ' +
            'displacing". A biscuit eaten after a meal displaces nothing. Half a day of energy ' +
            'from snacks displaces a great deal.',
        ],
      },
    ],

    claims: {
      'us-energy-share': { what: 'Share of US calories from ultra-processed food' },
      'trial-excess': {
        what: 'Extra intake on an ultra-processed diet',
        note: 'Matched for calories, sugar, fat, fibre and sodium',
      },
      'nova-definition': { what: 'The classification the research uses' },
    },

    practical: [
      {
        title: 'Ask what it displaces, not whether it is processed',
        detail:
          'A biscuit after a meal displaces nothing. Half a day of energy from snacks displaces ' +
            'most of a panel.',
      },
      {
        title: 'Wholegrain is the single highest-yield swap',
        detail:
          'Milling removes about eighty per cent of the magnesium along with the fibre. No other ' +
            'one-for-one change moves as much.',
      },
      {
        title: 'Do not mistake fortified for restored',
        detail:
          'Fortification replaces a handful of cheap, stable nutrients. It does not put back what ' +
            'the germ and bran were carrying.',
      },
    ],

    seeAlso: ['magnesium', 'fibre', 'folate', 'zinc'],

    sources: {
      'upf-share': 'Ultra-processed foods and the US diet — dietary share analysis',
      'hall-trial': 'Ultra-processed diets cause excess calorie intake — a controlled inpatient trial',
      nova: 'The NOVA food classification — FAO',
    },
  },

  /* ------------------------------------------------- dieting and deficit */
  'dieting-and-deficit': {
    title: 'A deficit cuts nutrients before it cuts fat',
    short: 'Dieting and deficit',
    lede:
      'Eating less means eating less of everything, and the requirements do not scale down with ' +
      'the calories. Below a certain intake, meeting them stops being a matter of choosing well ' +
      'and starts being arithmetically difficult.',
    description:
      'Why micronutrient intake falls faster than calories during weight loss, how much protein ' +
      'protects muscle in a deficit, and where the floor is.',

    commonBelief:
      'Losing weight is about calories. If I keep the number low enough, the composition sorts ' +
      'itself out.',

    sections: [
      {
        heading: 'The arithmetic nobody does',
        body: [
          'A person eating 2,400 calories has room for a wide diet. The same person at 1,200 has ' +
            'half the room and identical requirements for iron, calcium, magnesium, folate and ' +
            'everything else. Nothing about the requirement noticed that they decided to lose ' +
            'weight.',
          'Analyses of popular diets have found that most fail to meet the reference intake for ' +
            'several nutrients when followed as written — not because they are badly designed, ' +
            'but because below a certain energy intake the space is genuinely tight. Around 1,600 ' +
            'calories is where it becomes difficult even with careful choices; below that it ' +
            'takes deliberate work or supplementation.',
          'And the cuts are not random. People remove the categories they think of as ' +
            'calorie-dense — nuts, oily fish, dairy, whole grains — which are the same categories ' +
            'carrying magnesium, omega-3s, calcium and B vitamins.',
        ],
      },
      {
        heading: 'What a deficit does to muscle, and what protects it',
        body: [
          'Weight lost in a deficit is not only fat. Some fraction is lean tissue, and how large ' +
            'that fraction is depends on how the deficit is run — chiefly on protein intake and ' +
            'whether the muscle is being asked to do anything.',
          'The protein figure that protects lean mass in a deficit is markedly higher than the ' +
            'figure for maintenance, which strikes people as backwards. The logic is that the ' +
            'body is now looking for fuel and muscle is a candidate source, so the signal to keep ' +
            'it has to be louder — and resistance training is what makes that signal mean ' +
            'anything.',
          'Losing muscle also makes the outcome worse in a way that is easy to miss: a smaller ' +
            'body with less muscle burns less at rest, so the same weight regained later is ' +
            'regained as a worse composition than it started.',
        ],
      },
      {
        heading: 'The gaps that show up first',
        body: [
          'Iron, in women who are menstruating, because the requirement is high and the foods ' +
            'that carry usable iron are the ones people cut.',
          'Calcium, when dairy goes and nothing replaces it — which happens constantly, since ' +
            'dairy reads as a calorie-dense category.',
          'And the fat-soluble vitamins, when fat intake drops very low, because they need fat to ' +
            'be absorbed at all. A fat-free meal absorbs a fraction of the vitamin D, E, A and K ' +
            'in it.',
        ],
      },
      {
        heading: 'A note about how this connects to the rest of the site',
        body: [
          'Everything above is about a deficit run deliberately and reasonably. There is a ' +
            'different situation where the restriction is not a plan but a pattern, and the ' +
            'arithmetic on this page is the least of the problem.',
          'If the number keeps moving down, if a day of eating normally feels like failure, or if ' +
            'the deficit is being maintained through hunger that never settles — that is not a ' +
            'nutrition question and it will not be solved with a better food list.',
        ],
      },
    ],

    claims: {
      'micronutrient-floor': {
        what: 'Intake below which meeting requirements gets hard',
        note: 'Even with careful choices',
      },
      'protein-in-deficit': {
        what: 'Protein that protects lean mass in a deficit',
        note: 'Higher than for maintenance, not lower',
      },
      'lean-loss-share': {
        what: 'Share of weight lost as lean tissue',
        note: 'Varies widely with protein and training',
      },
    },

    practical: [
      {
        title: 'Raise protein when you cut calories',
        detail:
          'It goes up, not down. The body is looking for fuel and muscle is a candidate, so the ' +
            'signal to keep it has to be louder.',
      },
      {
        title: 'Lift something while you do it',
        detail:
          'Protein is the material and resistance training is the instruction. Without the ' +
            'second, the first is largely just calories.',
      },
      {
        title: 'Keep some fat in the meal',
        detail:
          'Vitamins A, D, E and K need it to be absorbed. A very low-fat diet leaves them in the ' +
            'plate rather than in you.',
      },
      {
        title: 'Notice if the deficit has stopped being a plan',
        detail:
          'A number that keeps moving down, or a normal day that feels like failure, is a ' +
            'different problem from the one this page describes.',
      },
    ],

    seeAlso: ['protein', 'iron', 'calcium', 'vitamin-d'],

    sources: {
      'deficit-micros': 'Micronutrient adequacy of popular weight-loss diets',
      'helms-deficit': 'Protein intake for lean mass retention during energy restriction',
    },
  },

  /* -------------------------------------------- plant-based and training */
  'plant-based-and-training': {
    title: 'Plant-based training works, and four nutrients need a plan',
    short: 'Plant-based and training',
    lede:
      'The old argument was about protein, and it was mostly wrong. The real list is shorter, ' +
      'more specific and less discussed — and one item on it is genuinely non-negotiable.',
    description:
      'What actually needs attention on a plant-based diet in heavy training: protein quantity ' +
      'and leucine, iron and zinc absorption, B12, and the creatine baseline.',

    commonBelief:
      'You cannot build muscle without animal protein — or, from the other side, a plant-based ' +
      'diet needs no special attention at all.',

    sections: [
      {
        heading: 'Protein: a quantity question, not a quality one',
        body: [
          'Both halves of the old argument were overstated. Plant proteins are not incomplete in ' +
            'any useful sense — every plant protein contains all twenty amino acids — but they ' +
            'carry less leucine per gram, and leucine is the trigger.',
          'The consequence is arithmetic rather than mystical: a plant-based lifter needs somewhat ' +
            'more total protein to hit the same per-meal leucine threshold. Soy, lentils and ' +
            'seitan get closer than most; combining sources across a meal closes the rest.',
          'The idea that proteins had to be combined at the same meal was withdrawn decades ago. ' +
            'The body holds an amino acid pool for hours. Beans at lunch and rice at dinner is ' +
            'fine.',
        ],
      },
      {
        heading: 'Iron and zinc: the absorption penalty',
        body: [
          'This is the part that matters more than protein and gets discussed less. Iron from ' +
            'plants is non-heme, absorbed at a fraction of the rate of heme iron and heavily ' +
            'affected by what else is on the plate. Zinc is bound by phytate, which is abundant ' +
            'in exactly the whole grains and legumes a plant-based diet is built on.',
          'That is why the official recommendations carry multipliers rather than the same number ' +
            '— an acknowledgement that identical intake does not mean identical absorption.',
          'The levers are practical and effective. Vitamin C in the same meal multiplies non-heme ' +
            'iron absorption several times over. Soaking, sprouting, fermenting and leavening all ' +
            'cut phytate substantially. Tea and coffee with the meal work strongly against you.',
        ],
      },
      {
        heading: 'B12: the one with no workaround',
        body: [
          'No plant makes B12. Neither does any animal — bacteria make it and animals accumulate ' +
            'it. There is no plant food that supplies it in usable form.',
          'Spirulina, nori and fermented foods are frequently listed as sources. Most of what they ' +
            'contain are analogues that occupy the receptor without doing the job, and some ' +
            'evidence suggests they make status worse rather than better.',
          'So this is a supplement or fortified foods, and it is not a matter of dietary ' +
            'preference. The consequences of a long shortfall are neurological and can be ' +
            'permanent, and they can develop while the blood count still looks normal.',
        ],
      },
      {
        heading: 'Creatine: a lower starting point',
        body: [
          'Dietary creatine comes from meat and fish, so vegetarians and vegans start with lower ' +
            'muscle stores. That is measurable and consistent.',
          'It also means supplementation has more room to work — the response in people starting ' +
            'from a low baseline tends to be larger. This is one of the few places where a ' +
            'supplement is more worth considering on a plant-based diet than off it, which is a ' +
            'pleasing inversion of the usual story.',
        ],
      },
    ],

    claims: {
      'protein-uplift': { what: 'Additional protein to match leucine intake' },
      'iron-multiplier': { what: 'Iron requirement, relative to the RDA' },
      'zinc-uplift': { what: 'Zinc requirement, where phytate is high' },
      'b12-required': { what: 'Vitamin B12', note: 'Not a preference question' },
      'creatine-baseline': { what: 'Muscle creatine at baseline', note: 'Which makes supplementing more effective' },
    },

    practical: [
      {
        title: 'B12 first, and settle it permanently',
        detail:
          'Supplement or fortified foods. Of everything here, this is the only one where getting ' +
            'it wrong causes damage that does not fully reverse.',
      },
      {
        title: 'Put vitamin C on the iron meal',
        detail:
          'It multiplies non-heme absorption several times over, and it is the largest free lever ' +
            'available on this diet.',
      },
      {
        title: 'Soak, sprout, ferment, leaven',
        detail:
          'All four cut phytate substantially, which is what stands between you and the zinc and ' +
            'iron already on your plate.',
      },
      {
        title: 'Move the tea away from the meal',
        detail:
          'Tannins can halve iron absorption. An hour either side undoes most of the damage.',
      },
    ],

    seeAlso: ['protein', 'iron', 'zinc', 'vitamin-b12'],

    sources: {
      'ods-iron-pb': 'NIH Office of Dietary Supplements — Iron',
      'ods-zinc-pb': 'NIH Office of Dietary Supplements — Zinc',
      'ods-b12-pb': 'NIH Office of Dietary Supplements — Vitamin B12',
      'plant-protein': 'Plant protein and muscle protein synthesis — a review',
      'plant-creatine': 'Muscle creatine in vegetarians and omnivores',
    },
  },
};

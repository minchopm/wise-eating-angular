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

  /* ---------------------------------------------------- iron & endurance */
  'iron-and-endurance': {
    title: 'Going flat is not always overtraining',
    short: 'Iron and endurance',
    lede:
      'An athlete whose sessions have quietly got harder is usually told to rest more. Sometimes ' +
      'that is right. Sometimes the ferritin has been sliding for four months and no amount of ' +
      'rest will touch it.',
    description:
      'Why endurance athletes lose iron faster than they replace it, what ferritin actually ' +
      'tells you, and why supplementing without a blood test is the wrong move.',

    commonBelief:
      'If my full blood count came back normal, iron is not my problem — and if I feel tired, a ' +
      'supplement can only help.',

    sections: [
      {
        heading: 'Three ways training takes iron out',
        body: [
          'The first is mechanical. Every footstrike destroys a small number of red cells in the ' +
            'capillaries of the sole — foot-strike haemolysis — and the iron inside them is not ' +
            'all recovered. On its own this is minor. Multiplied by a hundred kilometres a week, ' +
            'for years, it stops being minor.',
          'The second is sweat, which carries iron in small quantities that add up over long ' +
            'sessions in heat.',
          'The third is the one people miss, because it works in the opposite direction to ' +
            'intuition. Hard exercise raises hepcidin, the hormone that shuts down iron ' +
            'absorption, and it stays raised for hours afterwards. So the meal eaten after a hard ' +
            'session — the one an athlete is most careful about — is absorbed worse than the same ' +
            'meal on a rest day. The body loses iron to training and then briefly refuses to take ' +
            'more in.',
        ],
      },
      {
        heading: 'Why a normal blood count proves nothing',
        body: [
          'Haemoglobin is the last thing to fall. The body has a store — ferritin — and it will ' +
            'empty that store completely before it lets the blood count drop, because carrying ' +
            'oxygen is more urgent than keeping a reserve.',
          'So there is a long stretch, often many months, where the reserve is gone, the athlete ' +
            'feels progressively worse, and every standard blood test comes back normal. This is ' +
            'called iron deficiency without anaemia, and it is the state most affected athletes ' +
            'are actually in. Anaemia is the end of the process, not the start of it.',
          'The test that sees it is ferritin, and it has to be asked for. It is not on a routine ' +
            'panel. If you take one thing from this page, it is the name of that test.',
        ],
      },
      {
        heading: 'What the number means, and its one big trap',
        body: [
          'The threshold used in sports medicine is higher than the one used to diagnose anaemia ' +
            'in the general population, because the question is different — not "is this person ' +
            'ill" but "does this person have enough reserve to train hard".',
          'The trap is that ferritin also rises with inflammation, and hard training is ' +
            'inflammatory. A ferritin drawn the morning after a hard session can read ' +
            'reassuringly high while the actual store is low. Blood taken on a rest day, ideally ' +
            'alongside a marker of inflammation, is worth the inconvenience of arranging.',
        ],
      },
      {
        heading: 'Why not to just take some',
        body: [
          'Because the body has no way to get rid of a surplus. It regulates iron by absorbing ' +
            'more or less, and once it is in, it stays. Sustained supplementation in someone who ' +
            'was not short accumulates, and in a person carrying a haemochromatosis gene — which ' +
            'is common enough that you would not know — it accumulates fast.',
          'Iron also competes with zinc and copper for the same absorption routes, so months of ' +
            'unnecessary iron can create a different deficiency while you are treating one you ' +
            'did not have.',
          'Where a genuine shortfall is confirmed, treatment is straightforward and often ' +
            'dramatic. That is the argument for testing rather than against acting.',
        ],
      },
      {
        heading: 'The food side is mostly about what it is eaten with',
        body: [
          'Absorption from a plant source swings by a factor of five or more depending on the ' +
            'rest of the plate. Vitamin C in the same meal multiplies it. Tea or coffee with the ' +
            'meal roughly halves it, and the athlete who has porridge and a large coffee is ' +
            'undoing the porridge.',
          'The practical version of this is unglamorous: move the coffee an hour away from the ' +
            'iron-containing meal, and put something acidic on the plate. That is a bigger ' +
            'intervention than most supplements, and it is free.',
        ],
      },
    ],

    claims: {
      'athlete-multiplier': {
        what: 'Endurance athletes, relative to the RDA',
        note: 'Higher again for those on a plant-based diet',
      },
      'ferritin-floor': {
        what: 'Ferritin below which sports medicine acts',
        note: 'Higher than the threshold for diagnosing anaemia',
      },
      'female-endurance-prevalence': {
        what: 'Female endurance athletes affected',
        note: 'Iron deficiency without anaemia, not anaemia',
      },
      'vitamin-c-effect': { what: 'Effect of vitamin C on non-heme absorption' },
      'tea-effect': { what: 'Effect of tea or coffee with the meal' },
    },
    claimsNote:
      'The prevalence figure is a range because studies use different ferritin thresholds. That ' +
      'disagreement is real and is why the number is given as a band.',

    practical: [
      {
        title: 'Ask for ferritin by name',
        detail:
          'It is not on a routine blood panel and a normal full blood count does not rule out a ' +
            'problem. This is the single most useful sentence on this page.',
      },
      {
        title: 'Draw the blood on a rest day',
        detail:
          'Ferritin rises with inflammation and training is inflammatory, so a sample taken after ' +
            'a hard session can read falsely reassuring.',
      },
      {
        title: 'Move the coffee, not the porridge',
        detail:
          'An hour either side of an iron-containing meal. Tannins can halve absorption, which is ' +
            'a larger effect than most things people buy.',
      },
      {
        title: 'Do not supplement on a hunch',
        detail:
          'The body cannot excrete a surplus, and iron competes with zinc and copper on the way ' +
            'in. Confirmed shortfall, then treat.',
      },
    ],

    seeAlso: ['iron', 'vitamin-c', 'zinc', 'copper'],

    sources: {
      'ods-iron': 'NIH Office of Dietary Supplements — Iron',
      'iom-iron': 'Dietary Reference Intakes for iron — Institute of Medicine',
      'iron-athletes': 'Iron considerations for the athlete — a review',
    },
  },

  /* --------------------------------------------------- cramp & electrolytes */
  'cramp-and-electrolytes': {
    title: 'Cramp is probably not your electrolytes',
    short: 'Cramp and electrolytes',
    lede:
      'The salt-and-magnesium explanation is the most widely believed thing in amateur sport, and ' +
      'the evidence for it is far thinner than the confidence with which it is repeated.',
    description:
      'What the evidence says about exercise-associated muscle cramp, why magnesium supplements ' +
      'do not prevent it, and what actually seems to.',

    commonBelief:
      'Cramp means I am dehydrated or short of salt and magnesium. Take a magnesium tablet before ' +
      'bed and it will stop.',

    sections: [
      {
        heading: 'The theory everyone knows, and the trouble with it',
        body: [
          'The dehydration-and-electrolyte account says that sweating depletes fluid and sodium, ' +
            'the fluid around the muscle changes, and the muscle becomes hyper-excitable. It is ' +
            'plausible, it fits the fact that cramp happens in hot races, and it has been the ' +
            'standard explanation for decades.',
          'The trouble is that it has not held up well when tested. Studies comparing crampers ' +
            'with non-crampers in the same race have generally not found the difference in ' +
            'hydration or blood sodium that the theory needs. Cramp also happens in cool ' +
            'conditions, in swimmers, and in muscles that were not the ones working hardest.',
          'And there is a simpler problem: cramp usually strikes one muscle group while the rest ' +
            'of the body, drinking the same fluid and losing the same salt, is unaffected. A ' +
            'whole-body deficiency is a poor explanation for a local event.',
        ],
      },
      {
        heading: 'The account that fits better',
        body: [
          'The current leading explanation is neuromuscular rather than chemical. When a muscle ' +
            'is fatigued, the reflexes that govern it drift out of balance — the signal telling ' +
            'it to contract stays elevated while the one telling it to relax weakens — and the ' +
            'muscle locks.',
          'This account predicts what the electrolyte one struggles with: that cramp arrives at ' +
            'the end of hard efforts rather than the start, in the specific muscles being worked, ' +
            'in a shortened position, and that it is relieved by stretching. Stretching does ' +
            'nothing to your blood sodium and everything to the reflex loop, and stretching is ' +
            'what actually stops a cramp in the moment.',
          'It is also consistent with the best single predictor found so far, which is not a ' +
            'blood value at all: a history of cramping, and going out faster than usual.',
        ],
      },
      {
        heading: 'Where magnesium comes in, and why it mostly does not',
        body: [
          'Magnesium is genuinely involved in muscle relaxation, which is why the story is so ' +
            'appealing. But the trials do not support supplementing to prevent cramp — in people ' +
            'who are not deficient, reviews have repeatedly concluded there is no meaningful ' +
            'effect, and the effect in older adults with nocturnal leg cramp is small at best.',
          'That is a narrower claim than "magnesium is useless". If your intake is genuinely low, ' +
            'fixing it is worth doing for reasons that have nothing to do with cramp, and roughly ' +
            'half of adults are below the reference intake. Fixing a real shortfall and treating ' +
            'a symptom are different projects.',
        ],
      },
      {
        heading: 'What sodium is actually for',
        body: [
          'Sodium replacement matters, but for a different problem. Over long events, drinking ' +
            'large volumes of plain water while sweating out salt can dilute blood sodium — ' +
            'hyponatraemia — which is dangerous in a way cramp is not.',
          'The sweat sodium range in the table is enormous, and that is the honest finding: ' +
            'people differ by a factor of ten in how salty their sweat is. Which means generic ' +
            'advice about how much salt to take during exercise is close to meaningless, and the ' +
            'salt tablet that transformed one runner may do nothing for the next.',
        ],
      },
    ],

    claims: {
      'sweat-sodium': {
        what: 'Sodium in sweat, between individuals',
        note: 'A tenfold range, which is why generic advice fails',
      },
      'sweat-rate': { what: 'Sweat rate during exercise' },
      'magnesium-evidence': {
        what: 'Magnesium supplements for cramp prevention',
        note: 'In people who are not deficient',
      },
      'weight-loss-limit': {
        what: 'Fluid loss beyond which performance falls',
        note: 'A guide, not a cliff',
      },
    },

    practical: [
      {
        title: 'Stretch it, do not drink it',
        detail:
          'Passive stretching of the cramping muscle is the one intervention that reliably ends ' +
            'an episode, and it works through the reflex rather than the bloodstream.',
      },
      {
        title: 'Look at your pacing before your supplements',
        detail:
          'The strongest predictor found so far is going out faster than your training supports. ' +
            'That is a harder thing to hear than "take magnesium" and a more useful one.',
      },
      {
        title: 'Fix a real magnesium shortfall for its own sake',
        detail:
          'About half of adults are below the reference intake, which is worth correcting. Just ' +
            'do not expect it to be a cramp cure.',
      },
      {
        title: 'If you are going long, learn your own sweat',
        detail:
          'The tenfold spread between people means the only useful number is yours. Weigh ' +
            'yourself before and after a long session in the heat.',
      },
    ],

    seeAlso: ['magnesium', 'potassium', 'calcium'],

    sources: {
      'acsm-fluid': 'American College of Sports Medicine — position stand on exercise and fluid replacement',
      'cochrane-cramp': 'Magnesium for muscle cramps — systematic review',
      'cramp-neuro': 'Altered neuromuscular control and exercise-associated muscle cramp',
    },
  },

  /* ------------------------------------------------------------ creatine */
  'creatine-what-holds-up': {
    title: 'Creatine is the one that survived',
    short: 'Creatine',
    lede:
      'Almost everything on the supplement shelf is either untested or tested and found wanting. ' +
      'One cheap, unglamorous compound has been studied for thirty years and keeps working, ' +
      'which is worth saying plainly on a site that spends most of its time telling people not ' +
      'to bother.',
    description:
      'What creatine actually does, the doses that have evidence behind them, what the water ' +
      'weight is, and why the kidney warning never had support.',

    commonBelief:
      'Creatine is a steroid-adjacent bodybuilding thing, it is hard on the kidneys, and you have ' +
      'to load it and cycle off.',

    sections: [
      {
        heading: 'What it is, which is less exotic than the packaging suggests',
        body: [
          'Creatine is a compound your liver already makes and your muscles already store, and ' +
            'you eat about a gram a day of it in meat and fish. Supplementing raises muscle ' +
            'stores by something like twenty to forty per cent above what food alone provides.',
          'What those stores do is regenerate ATP during very short, very hard efforts. The first ' +
            'few seconds of a sprint or a heavy set run on a phosphate system that empties fast ' +
            'and refills from creatine. More stored creatine means the refill is quicker, which ' +
            'means one more repetition, which — repeated over months — means more work done and ' +
            'more adaptation.',
          'That is the whole mechanism. It does not build muscle directly; it lets you train ' +
            'slightly harder, and the training builds the muscle.',
        ],
      },
      {
        heading: 'Where the kidney warning came from',
        body: [
          'Creatine raises blood creatinine, which is the marker laboratories use to estimate ' +
            'kidney function. So a routine blood test in someone taking creatine can look like ' +
            'impaired kidneys while the kidneys are entirely fine — the marker moved, not the ' +
            'organ.',
          'That artefact became a health warning and has stayed in circulation for twenty-five ' +
            'years. Controlled studies, including ones running for years, have not found kidney ' +
            'harm in healthy adults. The position stands are unusually direct about this.',
          'The genuine caveat: if you have existing kidney disease, this is a conversation with a ' +
            'clinician rather than a decision to make from an article. And if you are having ' +
            'blood tests, mention that you take it, so nobody chases a number that has a boring ' +
            'explanation.',
        ],
      },
      {
        heading: 'Loading, cycling, and other things you do not have to do',
        body: [
          'Loading works and is not necessary. A high dose for five to seven days fills the ' +
            'stores quickly; a maintenance dose fills them just as completely in about three to ' +
            'four weeks. The only reason to load is impatience, and the cost of loading is that ' +
            'it is the phase where stomach upset happens.',
          'Cycling off has no evidence behind it at all. The stores simply decline back to ' +
            'baseline over about a month, which is not a benefit.',
          'The form is settled too: creatine monohydrate. The more expensive variants have not ' +
            'outperformed it in head-to-head trials, and monohydrate is the one all the research ' +
            'was done on.',
        ],
      },
      {
        heading: 'The weight gain, which is real and is not fat',
        body: [
          'Creatine draws water into muscle cells. The scale goes up by a kilogram or two in the ' +
            'first weeks and that is intracellular water, not fat and not bloating in the usual ' +
            'sense of the word.',
          'For most people this is irrelevant or mildly positive. For anyone in a weight-class ' +
            'sport or an endurance event where every kilogram is carried up a hill, it is a real ' +
            'trade-off to think about rather than dismiss.',
        ],
      },
      {
        heading: 'What we are not claiming',
        body: [
          'There is a growing literature on creatine and cognition, particularly under sleep ' +
            'deprivation, and some of it looks interesting. It is much younger and much smaller ' +
            'than the muscle literature, and it is not the reason to take it.',
          'This page is confident about the strength and lean mass findings because thirty years ' +
            'of trials agree. It is deliberately not confident about the rest, and the table says ' +
            'which is which.',
        ],
      },
    ],

    claims: {
      maintenance: { what: 'Maintenance dose', note: 'Monohydrate; no need to cycle off' },
      loading: { what: 'Optional loading phase', note: 'Faster, not better' },
      'strength-effect': { what: 'Gain in strength over training alone' },
      'water-weight': { what: 'Early weight gain', note: 'Intracellular water, not fat' },
      'kidney-evidence': { what: 'Kidney harm in healthy adults' },
    },

    practical: [
      {
        title: 'Buy monohydrate and nothing else',
        detail:
          'It is the cheapest form and the one every trial used. The expensive variants have not ' +
            'beaten it in direct comparison.',
      },
      {
        title: 'Skip the loading phase',
        detail:
          'A maintenance dose reaches the same stores in three to four weeks and avoids the ' +
            'stomach upset that loading sometimes causes.',
      },
      {
        title: 'Take it daily, including rest days',
        detail:
          'It works by keeping stores full rather than by acting acutely, so timing around ' +
            'training does not matter much and consistency does.',
      },
      {
        title: 'Mention it before a blood test',
        detail:
          'It raises creatinine, which is the number used to estimate kidney function. Say so and ' +
            'nobody investigates an artefact.',
      },
    ],

    seeAlso: ['protein', 'magnesium'],

    sources: {
      'issn-creatine': 'International Society of Sports Nutrition — position stand on creatine',
      'creatine-brain': 'Creatine and cognitive performance — a recent review',
    },
  },

  /* -------------------------------------------------- magnesium & muscle */
  'magnesium-and-muscle': {
    title: 'Magnesium does a great deal, and almost none of it is what it is sold for',
    short: 'Magnesium and muscle',
    lede:
      'It is a cofactor in several hundred enzyme reactions, roughly half of adults get less than ' +
      'the reference intake, and the marketing has attached it to the one outcome the trials are ' +
      'least kind to.',
    description:
      'What magnesium actually does in muscle and nerve, why athletes lose more of it, and the ' +
      'gap between a real shortfall and the claims on the tub.',

    commonBelief:
      'Magnesium is the recovery mineral. Take it after training or before bed and muscles relax, ' +
      'sleep improves and cramp stops.',

    sections: [
      {
        heading: 'The actual job',
        body: [
          'Magnesium does not do anything by itself. It is what several hundred enzymes need in ' +
            'order to do their work — including the ones that build protein, copy DNA, and turn ' +
            'food into usable energy. Every molecule of ATP is functionally magnesium-bound. That ' +
            'is why a shortfall shows up as diffuse tiredness rather than as one specific ' +
            'complaint: it is not one system failing, it is everything running slightly worse.',
          'In muscle it sits opposite calcium. Calcium tells a fibre to contract; magnesium is ' +
            'part of what lets it release. That pairing is the seed of the recovery marketing, ' +
            'and the biology is real — it is the leap from the biology to the tub that does not ' +
            'hold.',
        ],
      },
      {
        heading: 'Why training raises the requirement',
        body: [
          'Some is lost in sweat, in quantities that matter over long sessions in heat. Some is ' +
            'lost in urine, and hard exercise increases that loss. And magnesium redistributes ' +
            'during exercise — it moves between compartments — which is one reason blood levels ' +
            'are such a poor guide to status.',
          'How much extra an athlete needs is genuinely unsettled, and the table says so. The ' +
            'figure usually quoted is modest, and it is smaller than the gap most people already ' +
            'have from eating refined grain.',
        ],
      },
      {
        heading: 'Where a blood test misleads',
        body: [
          'About sixty per cent of the body’s magnesium is in bone and most of the rest is inside ' +
            'cells. Under one per cent is in blood, and the body defends that fraction by pulling ' +
            'magnesium out of bone.',
          'So a normal serum magnesium is compatible with a depleted store, in exactly the way a ' +
            'normal blood calcium is compatible with a skeleton that has been paying for it for ' +
            'years. There is no cheap, routine test that sees the store, which is why the ' +
            'sensible approach is to look at what you eat rather than to chase a number.',
        ],
      },
      {
        heading: 'The gap between fixing a shortfall and buying an effect',
        body: [
          'If your intake is low, raising it is worth doing — for the enzymes, the blood pressure ' +
            'evidence, and the bone. That is a real and common situation, and milling is why: ' +
            'refining a grain removes the germ and bran and about four-fifths of its magnesium.',
          'If your intake is already adequate, adding more has not been shown to do much of ' +
            'anything, including for cramp and including for sleep. The trials that show benefit ' +
            'are largely trials in people who were short.',
          'There is also a ceiling that surprises people: the upper limit applies to supplemental ' +
            'magnesium only, not to food. You cannot overdo it from almonds. You can from a tub, ' +
            'and the first sign is diarrhoea, because the forms that absorb worst are precisely ' +
            'the ones sold as laxatives.',
        ],
      },
    ],

    claims: {
      'sweat-loss': { what: 'Magnesium lost in sweat' },
      'athlete-need': {
        what: 'Additional requirement in athletes',
        note: 'Genuinely unsettled; smaller than most dietary gaps',
      },
      'supplement-effect': {
        what: 'Benefit from supplementing',
        note: 'Trials showing effect are mostly in people who were short',
      },
      'upper-limit-supplemental': {
        what: 'Upper limit, supplements only',
        note: 'Does not apply to magnesium from food',
      },
    },

    practical: [
      {
        title: 'Change the grain before you buy the tub',
        detail:
          'Milling removes about eighty per cent of the magnesium. Wholegrain instead of refined ' +
            'moves more than a supplement does, and brings everything else that went with it.',
      },
      {
        title: 'Do not read serum magnesium as reassurance',
        detail:
          'Under one per cent of your magnesium is in blood, and the body defends that fraction ' +
            'from bone. A normal result does not rule out a depleted store.',
      },
      {
        title: 'If you do supplement, mind the form',
        detail:
          'Oxide is poorly absorbed and is what most cheap tubs contain. Citrate and glycinate ' +
            'absorb better. And the upper limit applies to supplements, not food.',
      },
    ],

    seeAlso: ['magnesium', 'calcium', 'potassium'],

    sources: {
      'ods-mg': 'NIH Office of Dietary Supplements — Magnesium',
      'mg-exercise': 'Magnesium status and exercise — a review',
      'mg-review': 'Magnesium supplementation and outcomes — systematic review',
    },
  },

  /* ------------------------------------------------ vitamin D & performance */
  'vitamin-d-and-performance': {
    title: 'Vitamin D fixes a deficiency; it does not grant a benefit',
    short: 'Vitamin D and performance',
    lede:
      'Roughly half of athletes tested are insufficient, and correcting that is worth doing. The ' +
      'part that does not follow is the one on the label: that more, in someone already ' +
      'sufficient, does anything at all.',
    description:
      'Why athletes are so often low in vitamin D, what correcting it does and does not do for ' +
      'performance, and where the real risk of overdoing it sits.',

    commonBelief:
      'Vitamin D boosts strength and immunity, so more is better and a large weekly dose is a ' +
      'sensible insurance policy.',

    sections: [
      {
        heading: 'Why athletes are low so often',
        body: [
          'Because most sport happens indoors, or early, or covered up. Vitamin D is made in skin ' +
            'from UVB, and UVB does not pass through glass, sunscreen or clothing. An athlete ' +
            'training in a pool, a gym or a hall in winter has approximately the same exposure as ' +
            'an office worker.',
          'Latitude does the rest. Above roughly thirty-seven degrees the winter sun is too low in ' +
            'the sky to make meaningful amounts for several months. Darker skin needs longer ' +
            'exposure for the same synthesis, so the same schedule produces less.',
          'Food barely participates. Outside oily fish, egg yolk and deliberately fortified ' +
            'products, this is not a nutrient the diet supplies, which is why it behaves ' +
            'differently from everything else on this site.',
        ],
      },
      {
        heading: 'What correcting it does',
        body: [
          'In people who were deficient, restoring vitamin D improves muscle function and reduces ' +
            'the stress fracture rate. That effect is real and it is worth having.',
          'In people who were already sufficient, adding more has not produced a performance ' +
            'benefit in controlled trials. This is the shape of most micronutrient stories and it ' +
            'is worth internalising: the curve is a plateau, not a slope. Removing a limitation ' +
            'helps; adding surplus to a system that was not limited does not.',
        ],
      },
      {
        heading: 'The bone half, which matters more than the performance half',
        body: [
          'Vitamin D governs how much calcium you absorb. An athlete with low vitamin D can eat ' +
            'plenty of calcium and still not get it into bone, and bone under repetitive load is ' +
            'exactly the tissue that cannot afford that.',
          'This is why the vitamin D conversation and the stress fracture conversation are the ' +
            'same conversation, and why it belongs alongside energy availability rather than ' +
            'alongside supplements.',
        ],
      },
      {
        heading: 'The one genuinely risky micronutrient to guess at',
        body: [
          'Vitamin D is fat-soluble and stored rather than excreted, which makes it one of the ' +
            'few where careless supplementation can cause real harm. Sustained high doses raise ' +
            'blood calcium, and that damages kidneys and blood vessels.',
          'Very large intermittent doses — the monthly mega-dose that sounds efficient — have ' +
            'also performed badly in trials, with some showing increased falls and fractures ' +
            'rather than fewer. Daily and moderate beats monthly and heroic.',
          'As with iron, the sensible move is a blood test. It is cheap, it is the only way to ' +
            'know which side of the plateau you are on, and it turns a guess into a decision.',
        ],
      },
    ],

    claims: {
      'athlete-insufficiency': {
        what: 'Athletes found insufficient',
        note: 'Pooled across studies; higher at northern latitudes',
      },
      sufficiency: { what: 'Blood level regarded as sufficient' },
      'performance-effect': {
        what: 'Performance benefit',
        note: 'From correcting deficiency, not from adding surplus',
      },
      'upper-limit': { what: 'Upper limit for adults' },
    },

    practical: [
      {
        title: 'Test rather than assume, in either direction',
        detail:
          'Half of athletes are low and half are not, and there is no symptom that separates ' +
            'them. A blood test turns a guess into a decision.',
      },
      {
        title: 'Daily and moderate, not monthly and heroic',
        detail:
          'Large intermittent doses have performed worse in trials than steady ones, including ' +
            'on the outcomes they were meant to improve.',
      },
      {
        title: 'Treat it as a bone question first',
        detail:
          'The calcium absorption effect is the one that matters most under repetitive load. It ' +
            'belongs in the same conversation as stress fractures.',
      },
    ],

    seeAlso: ['vitamin-d', 'calcium', 'magnesium'],

    sources: {
      'ods-vitd': 'NIH Office of Dietary Supplements — Vitamin D',
      'vitd-athletes': 'Vitamin D status in athletes — a systematic review and meta-analysis',
    },
  },

  /* ------------------------------------------------------ bone under load */
  'bone-under-load': {
    title: 'Stress fractures are usually a fuelling problem wearing a bone costume',
    short: 'Bone under load',
    lede:
      'Bone responds to training the way muscle does — it gets stronger. It only does that if ' +
      'there is enough energy coming in, and the commonest reason it does not is not calcium.',
    description:
      'Why stress fractures cluster in under-fuelled athletes, what energy availability means, ' +
      'and where calcium and vitamin D actually fit.',

    commonBelief:
      'Stress fractures come from training too much, and the nutritional side is about getting ' +
      'enough calcium.',

    sections: [
      {
        heading: 'Bone is not scaffolding, it is a tissue with a budget',
        body: [
          'It is constantly being demolished and rebuilt. Loading it — running, jumping, lifting ' +
            '— signals it to rebuild stronger in the places taking the load, which is why weight-' +
            'bearing athletes have denser bone than swimmers.',
          'Rebuilding costs energy, and it is not an urgent cost. Faced with a shortage, a body ' +
            'funds the things that keep it alive today and defers the things that pay off over ' +
            'years. Bone remodelling is squarely in the second category, along with reproduction ' +
            'and immune function.',
          'So the failure mode is not "trained too hard". It is "trained this hard on this little ' +
            'food", and those are different problems with different fixes. One of them gets ' +
            'worse if you respond by resting and eating less.',
        ],
      },
      {
        heading: 'The number that actually predicts it',
        body: [
          'Energy availability is the energy left over after training, expressed against lean ' +
            'mass. It is the input the body is really reading, and below a threshold the ' +
            'hormonal consequences begin: sex hormones fall, bone turnover shifts toward ' +
            'breakdown, and in women periods become irregular or stop.',
          'That is a signal, not a side effect. A runner whose periods have stopped is being told ' +
            'something specific about her bone, and the correct response is not to treat the ' +
            'symptom.',
          'This is why the syndrome was renamed. It was the female athlete triad; it is now ' +
            'relative energy deficiency in sport, because it turned out to affect men too and to ' +
            'reach well beyond bone — into immunity, mood, cardiovascular health and the ' +
            'performance the whole thing was meant to protect.',
        ],
      },
      {
        heading: 'Where calcium and vitamin D come in, and where they do not',
        body: [
          'They matter. Vitamin D governs how much of your calcium you absorb, and an athlete low ' +
            'in it can eat plenty and still not get it into bone. Athletes also lose meaningful ' +
            'calcium in sweat, which is why the figures used in sport sit above the general ' +
            'recommendation.',
          'But they are the raw materials, not the instruction. Supplying bricks to a site with ' +
            'no budget to build does not produce a wall. This is the part that gets inverted in ' +
            'practice: the athlete with three stress fractures is handed calcium tablets and not ' +
            'asked what she eats.',
        ],
      },
      {
        heading: 'The uncomfortable part',
        body: [
          'A meaningful share of stress fractures in endurance sport occur in athletes who are ' +
            'under-eating, and a meaningful share of those are under-eating on purpose, because ' +
            'in most endurance disciplines being lighter is faster until quite suddenly it is not.',
          'That means the honest version of this page is partly about a psychological pattern ' +
            'rather than a nutritional one, and a nutrition article is the wrong instrument for ' +
            'it. If eating less is the strategy and the injuries keep coming, the useful ' +
            'conversation is with a sports physician and often a dietitian, not with a calcium ' +
            'supplement.',
        ],
      },
    ],

    claims: {
      'calcium-athlete': {
        what: 'Calcium for athletes in heavy training',
        note: 'Above the general recommendation, largely for sweat losses',
      },
      'vitamin-d-target': { what: 'Blood vitamin D regarded as sufficient' },
      'energy-availability': { what: 'Energy availability considered adequate', note: 'Per kg of fat-free mass' },
      'low-energy-threshold': {
        what: 'Threshold below which hormonal disruption begins',
        note: 'The number that actually predicts bone injury',
      },
      'stress-fracture-share': { what: 'Athletes affected by a stress fracture at some point' },
    },

    practical: [
      {
        title: 'Ask about the food before the training load',
        detail:
          'Repeated stress fractures in someone who trains sensibly point at intake, not volume. ' +
            'Resting and eating less makes that version worse.',
      },
      {
        title: 'Treat a missing period as bone information',
        detail:
          'It is one of the clearest signals that energy availability is too low, and it is about ' +
            'the skeleton as much as the cycle.',
      },
      {
        title: 'Fix vitamin D before increasing calcium',
        detail:
          'Without it you absorb a fraction of what arrives, so the order matters.',
      },
      {
        title: 'If lightness is the plan, get someone else in the room',
        detail:
          'A sports physician and a dietitian. This is the point where an article stops being the ' +
            'right instrument.',
      },
    ],

    seeAlso: ['calcium', 'vitamin-d', 'vitamin-k', 'protein'],

    sources: {
      'ioc-reds': 'IOC consensus statement — relative energy deficiency in sport (REDs)',
      'ods-vitd': 'NIH Office of Dietary Supplements — Vitamin D',
      'stress-fx': 'Stress fracture epidemiology in athletes',
    },
  },

  /* ----------------------------------------- antioxidants and adaptation */
  'antioxidants-and-adaptation': {
    title: 'High-dose antioxidants can blunt the training you just did',
    short: 'Antioxidants and adaptation',
    lede:
      'The oxidative stress produced by hard exercise looks like damage, and the instinct is to ' +
      'mop it up. It is also the signal that tells the muscle to adapt, and there is trial ' +
      'evidence that mopping it up costs you some of the adaptation.',
    description:
      'Why vitamin C and E supplements can interfere with training adaptation, at what doses, and ' +
      'why the same nutrients from food do not appear to.',

    commonBelief:
      'Exercise creates free radicals, free radicals are bad, so antioxidant supplements help ' +
      'recovery and are at worst harmless.',

    sections: [
      {
        heading: 'The signal that looks like damage',
        body: [
          'Contracting muscle produces reactive oxygen species. For a long time these were ' +
            'understood purely as wear — something to be neutralised — and the supplement ' +
            'industry was built on that reading.',
          'It turned out they are also messengers. The rise in oxidative stress after a hard ' +
            'session is part of how the cell knows it was worked: it switches on the genes that ' +
            'build mitochondria and improve antioxidant defence. The stress is the instruction.',
          'Which sets up the awkward result. Flood the system with high-dose antioxidants at the ' +
            'wrong moment and you suppress the instruction along with the stress. Several ' +
            'controlled trials have found exactly that — training adaptations blunted in the ' +
            'supplemented group relative to placebo, in people doing identical training.',
        ],
      },
      {
        heading: 'What the doses look like',
        body: [
          'The trials that found blunting used doses well above what food delivers — the kind ' +
            'printed on a sports supplement rather than found in fruit. The table gives the ' +
            'figures used in the best-known of them.',
          'This is one of the clearer illustrations of a principle that runs through this whole ' +
            'site: a nutrient is not a substance with a direction. The same compound at dietary ' +
            'amounts and at pharmacological amounts is doing two different things, and the second ' +
            'is not simply more of the first.',
        ],
      },
      {
        heading: 'Why food does not have this problem',
        body: [
          'No study has shown blunted adaptation from eating fruit and vegetables, and the reason ' +
            'is dose and delivery. A large serving of berries provides an order of magnitude less ' +
            'vitamin C than the capsules in these trials, arriving slowly, alongside hundreds of ' +
            'other compounds.',
          'So the practical conclusion is not "avoid antioxidants". It is the reverse of what the ' +
            'supplement aisle suggests: get them from food freely, and be sceptical of the tub.',
        ],
      },
      {
        heading: 'When suppressing the signal is the right call',
        body: [
          'There is a real exception, and it follows from the mechanism. If the goal is not to ' +
            'adapt but to recover as fast as possible — three matches in a week, a stage race, a ' +
            'tournament — then damping the response may be a reasonable trade.',
          'That is a narrow, tactical use during competition, not a training-phase habit. During ' +
            'a build, the adaptation is the entire point and interfering with it is paying money ' +
            'to train less effectively.',
        ],
      },
    ],

    claims: {
      'blunting-dose-c': { what: 'Vitamin C dose that blunted adaptation', note: 'Daily, in trial conditions' },
      'blunting-dose-e': { what: 'Vitamin E dose in the same trials' },
      'food-dose-safe': {
        what: 'Antioxidants from food',
        note: 'No trial has shown blunted adaptation from eating them',
      },
    },
    claimsNote:
      'Marked probable rather than established because the trials are relatively few and not all ' +
      'agree. The direction of the finding is consistent; its size is not settled.',

    practical: [
      {
        title: 'Eat the fruit, skip the capsule',
        detail:
          'Food doses have never shown this effect. The problem appears at supplement doses, ' +
            'which are an order of magnitude higher.',
      },
      {
        title: 'If you do take them, keep them away from training',
        detail:
          'The interference is with the post-exercise signalling window. Timing them away from ' +
            'sessions is the least-bad version of taking them.',
      },
      {
        title: 'Separate competition from build',
        detail:
          'Damping the response can be sensible in a congested fixture list and is ' +
            'counterproductive during a training block.',
      },
    ],

    seeAlso: ['vitamin-c', 'vitamin-e', 'selenium'],

    sources: {
      'antiox-blunt': 'Vitamin C and E supplementation blunts endurance training adaptations',
      'antiox-review': 'Antioxidant supplementation and exercise adaptation — a review',
    },
  },

  /* ------------------------------------------------------ zinc & recovery */
  'zinc-and-recovery': {
    title: 'Zinc: worth having enough of, not worth loading',
    short: 'Zinc and recovery',
    lede:
      'The body stores almost none of it, athletes lose more of it, and it sits behind wound ' +
      'healing, immune function and testosterone — which is exactly the combination that ' +
      'produces bad supplement advice.',
    description:
      'What zinc does for recovery and immunity in athletes, why the testosterone claim is only ' +
      'half true, and the dose above which it causes a copper problem.',

    commonBelief:
      'Zinc raises testosterone and strengthens immunity, so a heavy dose is a reasonable thing ' +
      'for anyone training hard.',

    sections: [
      {
        heading: 'Why athletes run short more often',
        body: [
          'There is no meaningful zinc store. Unlike iron, which the body hoards, zinc has to ' +
            'arrive more or less continuously, and status falls within weeks of intake dropping.',
          'Training adds two losses on top: sweat, and increased urinary excretion after hard ' +
            'sessions. Neither is dramatic alone, and together with the low storage they mean an ' +
            'athlete with a mediocre intake gets to a shortfall faster than a sedentary person ' +
            'with the same diet.',
          'The group most exposed is athletes eating mostly plants, and the reason is not intake ' +
            'but phytate — which binds zinc in the gut and can halve what is available. The ' +
            'phytate-to-zinc ratio of a diet predicts absorption better than its zinc content ' +
            'does.',
        ],
      },
      {
        heading: 'The recovery claim, which is real but narrow',
        body: [
          'Zinc is genuinely central to tissue repair and immune function, and both depend on ' +
            'cells dividing quickly. Any tissue with fast turnover — gut lining, skin, immune ' +
            'cells — feels a shortage early.',
          'So a deficient athlete who corrects it recovers better and gets ill less. An athlete ' +
            'who was already replete and takes more does not, and that is the distinction the ' +
            'marketing collapses.',
        ],
      },
      {
        heading: 'The testosterone claim, which is where it gets sold',
        body: [
          'Zinc deficiency lowers testosterone. That is well established, and it is the entire ' +
            'basis of the category.',
          'What does not follow is that adding zinc to a man with normal status raises it. The ' +
            'trials that show a testosterone effect are trials in deficient men. This is the same ' +
            'shape as vitamin D and performance, and it is worth learning to recognise, because ' +
            'most supplement marketing is built on exactly this move: take a real finding about ' +
            'correcting a deficiency and present it as a benefit of surplus.',
        ],
      },
      {
        heading: 'The real risk, which is copper',
        body: [
          'Zinc and copper compete for the same absorption pathway. Sustained high-dose zinc ' +
            'suppresses copper absorption, and copper deficiency produces an anaemia that looks ' +
            'like iron deficiency and does not respond to iron — along with neurological problems ' +
            'that can be permanent.',
          'This is not exotic. It happens in people taking the doses commonly sold in ' +
            'testosterone-support and immune products, taken daily for months. The upper limit ' +
            'exists for this reason and is easy to exceed without noticing.',
          'The other, smaller point: zinc lozenges for a cold are a different question with ' +
            'different evidence, and taking them for a few days is not the pattern that causes ' +
            'this.',
        ],
      },
    ],

    claims: {
      'sweat-loss': { what: 'Zinc lost in sweat' },
      'upper-limit': { what: 'Upper limit for adults', note: 'Easy to exceed with common products' },
      'copper-interference': {
        what: 'Dose at which copper absorption suffers',
        note: 'Sustained, not occasional',
      },
      'testosterone-caveat': {
        what: 'Testosterone benefit',
        note: 'Found in deficient men; not in replete ones',
      },
    },

    practical: [
      {
        title: 'Deal with phytate before dose',
        detail:
          'Soaking, sprouting, fermenting and leavening all reduce it substantially. Sourdough ' +
            'over unleavened bread is a real difference, not a flourish.',
      },
      {
        title: 'Check what is already in the stack',
        detail:
          'Zinc appears in multivitamins, immune products and testosterone-support blends at ' +
            'once. The total is what matters and it is rarely on anyone’s radar.',
      },
      {
        title: 'If you have been taking a high dose for months, stop and ask',
        detail:
          'A copper deficiency caused this way looks like iron deficiency and will not respond to ' +
            'iron. It is worth a blood test rather than a guess.',
      },
    ],

    seeAlso: ['zinc', 'copper', 'iron', 'protein'],

    sources: {
      'ods-zinc': 'NIH Office of Dietary Supplements — Zinc',
      'zinc-athletes': 'Zinc status and exercise — a review',
    },
  },

  /* --------------------------------------------------- B vitamins & energy */
  'b-vitamins-and-energy': {
    title: 'The energy vitamins do not give you energy',
    short: 'B vitamins and energy',
    lede:
      'They are called that because they release energy from food, which is true and is not the ' +
      'same as providing it. If you are already replete, the extra goes into your urine, ' +
      'brightly.',
    description:
      'What B vitamins actually do in energy metabolism, why training raises the requirement, and ' +
      'why supplements do nothing for someone who is not short.',

    commonBelief:
      'A B-complex before training gives you energy, and since they are water-soluble there is no ' +
      'downside to taking plenty.',

    sections: [
      {
        heading: 'What "energy vitamin" actually means',
        body: [
          'B vitamins are cofactors, not fuel. They carry no calories. What they do is enable the ' +
            'enzymes that convert carbohydrate, fat and protein into usable energy — thiamin at ' +
            'the entry to the citric acid cycle, riboflavin and niacin as the electron carriers, ' +
            'B6 across the amino acid reactions.',
          'The consequence is that a shortage produces fatigue and correcting it removes the ' +
            'fatigue, while adding surplus to an already-working system does nothing. The enzyme ' +
            'is either enabled or it is not; it does not run faster with more cofactor sitting ' +
            'around.',
          'This is the whole story of the category, and it explains both halves of the ' +
            'observation people find contradictory: that deficiency really does cause exhaustion, ' +
            'and that supplements really do nothing for most people.',
        ],
      },
      {
        heading: 'Why training does raise the requirement',
        body: [
          'More energy through the system means more cofactor turnover, and some is lost in sweat ' +
            'and urine. Requirements for several of the B vitamins scale with energy expenditure ' +
            'rather than with body size — which is why they are sometimes expressed per thousand ' +
            'calories.',
          'The increase is real and modest. It is also usually self-correcting, because an ' +
            'athlete eating more food is eating more of everything in it. The exception is the ' +
            'athlete eating more energy from foods that carry little else, which brings this back ' +
            'to the same place as most of these guides.',
        ],
      },
      {
        heading: 'The two that are worth actual attention',
        body: [
          'B12, because it is only in animal foods and fortified products, and because the ' +
            'consequences of a long shortfall are neurological and can be permanent. Any athlete ' +
            'eating no animal foods needs a supplement or fortified foods — this is not a ' +
            'preference question.',
          'And B6, because it is the one water-soluble vitamin with a real upper limit. Sustained ' +
            'high doses cause peripheral neuropathy — numbness and unsteadiness — that is ' +
            'sometimes only partly reversible. Doses in that range are sold routinely, which is ' +
            'the part worth knowing.',
        ],
      },
      {
        heading: 'The bright yellow urine',
        body: [
          'That is riboflavin being excreted, and it is harmless. It is also the most honest ' +
            'feedback any supplement gives: it is the visible portion of a dose the body had no ' +
            'use for.',
        ],
      },
    ],

    claims: {
      'requirement-rise': {
        what: 'Requirement in heavy training, relative to sedentary',
        note: 'Scales with energy throughput',
      },
      'supplement-effect': {
        what: 'Performance benefit in replete athletes',
        note: 'Consistent across the position stands',
      },
      'b6-upper-limit': {
        what: 'Upper limit for vitamin B6',
        note: 'The one water-soluble vitamin where excess causes nerve damage',
      },
    },

    practical: [
      {
        title: 'Check the B6 in what you already take',
        detail:
          'Doses at or above the upper limit are sold routinely in B-complex and "energy" ' +
            'products. Sustained, they cause a neuropathy that is not always fully reversible.',
      },
      {
        title: 'If you eat no animal foods, B12 is not optional',
        detail:
          'Supplement or fortified foods. Spirulina and fermented foods contain analogues that ' +
            'occupy the receptor without doing the job.',
      },
      {
        title: 'Treat fatigue as a question, not a diagnosis',
        detail:
          'It matches a dozen shortfalls, poor sleep, low iron and an underactive thyroid. A ' +
            'B-complex is a poor way to find out which.',
      },
    ],

    seeAlso: ['thiamin', 'riboflavin', 'niacin', 'vitamin-b6', 'vitamin-b12'],

    sources: {
      'acsm-nutrition': 'ACSM, AND and DC — joint position stand on nutrition and athletic performance',
      'ods-b6': 'NIH Office of Dietary Supplements — Vitamin B6',
      'ods-thiamin': 'NIH Office of Dietary Supplements — Thiamin',
    },
  },

  /* ------------------------------------------- amino acids beyond protein */
  'amino-acids-beyond-protein': {
    title: 'Most amino acid supplements are protein, sold at a markup',
    short: 'Amino acids beyond protein',
    lede:
      'BCAAs, glutamine, EAAs, beta-alanine — four categories with very different evidence behind ' +
      'them, sold in the same aisle with the same confidence. Only one of them has much.',
    description:
      'What the evidence says about BCAAs, EAAs, glutamine and beta-alanine — which do something, ' +
      'which are redundant if you eat enough protein, and why.',

    commonBelief:
      'BCAAs during training protect muscle, and glutamine helps recovery and immunity. They are ' +
      'basics, not extras.',

    sections: [
      {
        heading: 'BCAAs: the incomplete set problem',
        body: [
          'Building a muscle protein requires all twenty amino acids present at once. BCAAs ' +
            'supply three of them. Leucine, one of the three, is the signal that switches the ' +
            'machinery on — which is why BCAAs do raise the signal and why the early studies ' +
            'looked encouraging.',
          'But switching on a construction site without delivering the other materials does not ' +
            'build anything. When trials compared BCAAs against a complete protein containing the ' +
            'same amount of leucine, the complete protein won clearly.',
          'So the honest description is that BCAAs are a partial and expensive version of ' +
            'something most people already eat. If your protein intake is adequate, they add ' +
            'nothing you did not have.',
        ],
      },
      {
        heading: 'EAAs: the same idea, done properly',
        body: [
          'Essential amino acids supply all nine the body cannot make, which fixes the structural ' +
            'objection to BCAAs. They do stimulate muscle protein synthesis, and at smaller doses ' +
            'than whole protein.',
          'Where they earn their place is narrow: someone who genuinely cannot eat — around ' +
            'illness, in the first days after surgery, in a very old person with no appetite. For ' +
            'a healthy person eating enough protein, they are a more expensive route to the same ' +
            'destination.',
        ],
      },
      {
        heading: 'Glutamine: a good hypothesis that did not survive',
        body: [
          'The reasoning was sound. Glutamine is the fuel immune cells prefer, blood levels fall ' +
            'after prolonged exercise, and athletes get more upper-respiratory infections. Supply ' +
            'the missing fuel and the infections should fall.',
          'They did not. Trials in fed athletes have generally found no benefit for immunity, ' +
            'recovery or performance. The likely explanation is that a person eating enough ' +
            'protein is already making plenty — glutamine is the most abundant amino acid in the ' +
            'body — and the post-exercise dip is transient rather than limiting.',
          'It remains genuinely useful in clinical settings such as severe burns or gut disease. ' +
            'That is not the same population as a lifter, and it is where the sports claim ' +
            'borrowed its authority from.',
        ],
      },
      {
        heading: 'Beta-alanine: the one that works, for one thing',
        body: [
          'Beta-alanine raises muscle carnosine, which buffers the acidity that builds during ' +
            'hard efforts. That improves performance in a specific window — efforts of roughly ' +
            'one to ten minutes, where acid accumulation is what limits you.',
          'Outside that window it does little. It will not help a marathon and it will not help a ' +
            'single heavy triple. And it takes weeks of daily loading to raise carnosine, so it ' +
            'is not something to take before a session.',
          'The tingling is harmless and is the one supplement side effect people reliably ' +
            'notice — split doses reduce it.',
        ],
      },
    ],

    claims: {
      'bcaa-alone': {
        what: 'BCAAs against complete protein',
        note: 'Matched for leucine, the complete protein wins',
      },
      'leucine-per-meal': { what: 'Leucine needed to trigger synthesis', note: 'Available from ordinary food' },
      'glutamine-effect': { what: 'Glutamine in fed athletes' },
      'beta-alanine': { what: 'Beta-alanine, daily', note: 'Weeks of loading; helps 1–10 minute efforts' },
    },

    practical: [
      {
        title: 'Count your protein before buying an amino acid',
        detail:
          'Almost every claim in this category evaporates in someone already eating enough. That ' +
            'is the cheapest thing to check and the least often checked.',
      },
      {
        title: 'If you want the leucine, eat the food',
        detail:
          'Twenty-five to thirty grams of a quality protein carries the threshold dose and brings ' +
            'the other nineteen amino acids with it.',
      },
      {
        title: 'Beta-alanine only if your event is in the window',
        detail:
          'One to ten minutes of hard work. It is a real effect and a narrow one, and it needs ' +
            'weeks of daily dosing rather than a scoop beforehand.',
      },
    ],

    seeAlso: ['protein'],

    sources: {
      'issn-protein': 'International Society of Sports Nutrition — position stand on protein and exercise',
      'bcaa-review': 'BCAA supplementation and muscle protein synthesis — a critical review',
      'issn-glutamine': 'Glutamine supplementation in athletes — a review',
      'issn-beta-alanine': 'International Society of Sports Nutrition — position stand on beta-alanine',
    },
  },

  /* ------------------------------------------------------ collagen & tendon */
  'collagen-and-tendon': {
    title: 'Collagen for tendons: promising, early, and oversold',
    short: 'Collagen and tendon',
    lede:
      'Tendon and ligament injuries are the ones that end seasons and there has never been much ' +
      'to offer nutritionally, which is exactly the vacuum a thin literature gets marketed into.',
    description:
      'What the evidence does and does not support about collagen for tendon, why vitamin C is ' +
      'the part that is settled, and how to read a young literature honestly.',

    commonBelief:
      'Collagen supplements rebuild joints and tendons. It is the same protein, so eating it puts ' +
      'it where it is needed.',

    sections: [
      {
        heading: 'The objection everyone raises, and why it is not quite decisive',
        body: [
          'Eaten collagen is digested into amino acids like any other protein. It does not travel ' +
            'to a tendon as collagen, and the idea that it does is nonsense. That objection is ' +
            'correct as far as it goes.',
          'Where it stops short: collagen is unusually rich in glycine and proline, which are ' +
            'exactly the amino acids tendon needs in quantity, and some collagen-derived peptides ' +
            'do appear in blood intact. So there is a plausible mechanism that is not "the ' +
            'collagen goes to the tendon" — it is closer to supplying an unusual raw material mix ' +
            'at a moment the tissue can use it.',
          'Plausible is not proven, and the table marks it contested for that reason.',
        ],
      },
      {
        heading: 'What the actual trials look like',
        body: [
          'Small. Often short. Frequently funded by companies selling the product, which is not ' +
            'disqualifying and is worth knowing. Several show improvements in tendon or ligament ' +
            'stiffness and in joint pain; others show nothing.',
          'The most-discussed protocol combines a dose of gelatin or collagen with vitamin C, ' +
            'taken shortly before loading the tissue, on the reasoning that a brief rise in ' +
            'circulating amino acids coinciding with mechanical load is what the tendon can act ' +
            'on. It is an elegant hypothesis with genuinely limited human outcome data behind it.',
          'This is what an early literature looks like. It is not fraud and it is not established ' +
            'science, and the honest thing is to say which one it is rather than to round it to ' +
            'whichever suits.',
        ],
      },
      {
        heading: 'The part that is not contested',
        body: [
          'Vitamin C is required to build collagen at all. The enzymes that stabilise the collagen ' +
            'triple helix cannot work without it — that is what scurvy is, connective tissue ' +
            'failing for want of a cofactor.',
          'Which means anyone genuinely low in vitamin C has a real connective tissue problem, and ' +
            'it is cheap to rule out. Beyond sufficiency, more vitamin C does not build more ' +
            'collagen, for the same reason more of any cofactor does not.',
        ],
      },
      {
        heading: 'What actually strengthens a tendon',
        body: [
          'Load. Progressive, patient, boring load. Tendon adapts far more slowly than muscle — ' +
            'months rather than weeks — which is precisely why people get hurt: the muscle is ' +
            'ready to do more well before the tendon is.',
          'Nothing in this category substitutes for that, and the risk of a supplement here is not ' +
            'the money. It is believing you have addressed a problem you have not, and adding ' +
            'load on that belief.',
        ],
      },
    ],

    claims: {
      dose: { what: 'Dose used in the trials', note: 'Gelatin or hydrolysed collagen' },
      timing: { what: 'Timing before loading the tissue', note: 'The mechanism the protocol assumes' },
      'vitamin-c-cofactor': {
        what: 'Vitamin C required for collagen synthesis',
        note: 'This part is not in doubt',
      },
    },
    claimsNote:
      'Two of these are marked contested deliberately. The trials are small, short and often ' +
      'industry-funded, and rounding that up to established would be exactly what this site ' +
      'exists not to do.',

    practical: [
      {
        title: 'Load it properly first',
        detail:
          'Progressive loading is the intervention with actual evidence. Tendon adapts over ' +
            'months, and the gap between muscle readiness and tendon readiness is where injuries ' +
            'live.',
      },
      {
        title: 'Rule out low vitamin C, then stop worrying about it',
        detail:
          'It is genuinely required for collagen synthesis. Beyond sufficiency, more does not ' +
            'build more.',
      },
      {
        title: 'If you try it, know what you are buying',
        detail:
          'A plausible mechanism with early data. That can be worth a punt on your own money; it ' +
            'is not worth adding load in the belief that the tissue is protected.',
      },
    ],

    seeAlso: ['vitamin-c', 'protein', 'copper'],

    sources: {
      'collagen-tendon': 'Gelatin supplementation and collagen synthesis — a controlled trial',
      'ods-vitc': 'NIH Office of Dietary Supplements — Vitamin C',
    },
  },
};

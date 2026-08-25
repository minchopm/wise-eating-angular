import { LocalisedGuide } from '../guide-types';

/**
 * The psychology guides, in English.
 *
 * These carry `careNotice` in guide-facts.ts, which switches on a heavier
 * disclaimer and a block of real referral routes. A page about the binge cycle
 * that ends in an App Store button and nothing else is the wrong thing to
 * publish.
 *
 * The line these hold: describe the mechanism, say plainly when something has
 * stopped being a habit and become a condition, and then stop. No
 * interventions, no "try this instead", no implication that the right app
 * fixes it. Nobody here holds a clinical qualification and the writing does
 * not pretend otherwise.
 */
export const GUIDES_MIND_EN: Readonly<Record<string, LocalisedGuide>> = {
  'restriction-and-the-binge-cycle': {
    title: 'The binge is not the failure. It is the second half of the restriction.',
    short: 'Restriction and bingeing',
    lede:
      'People describe it as losing control, and the sequence almost never starts there. It ' +
      'starts days earlier, with a rule — and the loss of control is what a body does at the end ' +
      'of one, reliably enough that it was demonstrated in a laboratory eighty years ago.',
    description:
      'Why severe restriction produces bingeing as a physiological response rather than a ' +
      'failure of will — what the Minnesota experiment showed, and when this stops being a ' +
      'pattern and becomes a condition.',

    commonBelief:
      'I did well for four days and then blew it. If I had more discipline, the fifth day would ' +
      'have gone like the others.',

    sections: [
      {
        heading: 'What thirty-six men in Minnesota demonstrated',
        body: [
          'In 1944 a group of healthy volunteers — screened for stability, chosen partly for it — ' +
            'agreed to eat roughly half of what they needed for six months, so that researchers ' +
            'could learn how to refeed a starving Europe. What the study is remembered for is not ' +
            'the refeeding protocol.',
          'The men became obsessed with food. They read cookbooks for pleasure. They collected ' +
            'recipes, hoarded utensils, drew out meals for hours, talked about eating and little ' +
            'else. They became irritable, withdrawn and unable to concentrate. Several developed ' +
            'episodes of uncontrolled eating that appalled them, and some of that behaviour ' +
            'persisted for months after normal food was restored.',
          'These were not people with a weak relationship to food. They had no relationship to ' +
            'food worth remarking on until the restriction created one. That is the finding: the ' +
            'behaviour was manufactured by the deprivation, in ordinary men, on purpose.',
        ],
      },
      {
        heading: 'Why the body treats a diet as an emergency',
        body: [
          'It has no way to tell the difference between a shortage you chose and one you did not. ' +
            'The signals it reads are energy in, energy stored, and how long the gap has run — ' +
            'and none of those carry your intention.',
          'So it does what it has always done in a shortage. Attention narrows onto food, because ' +
            'noticing food is how a hungry animal survives. Fullness signalling weakens. The ' +
            'reward attached to eating goes up, so the same meal is more compelling than it was a ' +
            'week ago. This is not weakness being revealed; it is a system working exactly as ' +
            'built, on someone who has decided the system is the enemy.',
          'And it escalates rather than settling. The longer and harder the restriction, the ' +
            'stronger the pull — which is why the pattern so often ends in an episode that feels ' +
            'wildly out of proportion to the rule that started it.',
        ],
      },
      {
        heading: 'The part that makes it a cycle',
        body: [
          'What turns an episode into a loop is what happens next. The episode is read as proof of ' +
            'a character flaw, and the response to a character flaw is a stricter rule. The ' +
            'stricter rule produces a stronger pull. The stronger pull produces a larger episode, ' +
            'which is read as further proof.',
          'Each turn of that makes the next one more likely, and the person in it experiences the ' +
            'whole thing as evidence about themselves rather than as a predictable response to ' +
            'the thing they keep doing.',
          'It is worth saying plainly, because it is the part people rarely hear: the fact that ' +
            'this is predictable does not make it a small problem. Predictable and serious are ' +
            'not opposites.',
        ],
      },
      {
        heading: 'When this stops being a pattern',
        body: [
          'There is a line, and it is not drawn by how much someone eats in an episode. It is ' +
            'drawn by what the eating is doing to the rest of a life.',
          'Some markers that it has been crossed: episodes accompanied by a real sense of loss of ' +
            'control rather than simple over-eating; anything done afterwards to compensate — ' +
            'vomiting, laxatives, punitive exercise, fasting the next day; food or body shape ' +
            'occupying so much attention that work, study or relationships are suffering; and ' +
            'secrecy, which is one of the most reliable signals of all.',
          'None of that is diagnosis, and this page cannot do that. It is the point at which the ' +
            'right next step stops being a different eating strategy and starts being a person — ' +
            'a GP, a psychologist, a helpline. Eating disorders have the highest mortality of any ' +
            'psychiatric illness and they respond well to treatment, and both halves of that ' +
            'sentence are reasons to make the call early rather than late.',
        ],
      },
      {
        heading: 'What this means for tracking anything, including with us',
        body: [
          'We make an app that counts things, so we have an obvious interest here and should ' +
            'declare it. Measuring what you eat is genuinely useful to some people and genuinely ' +
            'harmful to others, and which one you are is not determined by how disciplined you ' +
            'are.',
          'If a number on a screen sets the tone of your day, if you have started eating around ' +
            'the app rather than using it, or if seeing a total makes you want to compensate — ' +
            'that is not a sign to track more carefully. Close it. That advice costs us a user ' +
            'and it is the correct advice.',
        ],
      },
    ],

    claims: {},

    practical: [
      {
        title: 'Notice which half of the cycle you are treating',
        detail:
          'Almost every plan people try after an episode is aimed at the episode. The episode is ' +
            'the second half. The first half is the rule that preceded it, and it is the one ' +
            'still in place.',
      },
      {
        title: 'Secrecy is the signal worth taking seriously',
        detail:
          'Of everything on this page, hiding it is the marker that most reliably separates a ' +
            'difficult patch from something that needs help. If nobody in your life knows this ' +
            'is happening, that is information.',
      },
      {
        title: 'Ask someone whose job this is',
        detail:
          'Not a nutrition article, and not an app. A GP is a reasonable first door and will have ' +
            'had the conversation before.',
      },
    ],

    seeAlso: ['protein', 'magnesium', 'iron'],

    sources: {
      minnesota: 'The Minnesota Starvation Experiment — Keys et al., and later analyses',
      'nice-eating': 'NICE guideline NG69 — eating disorders: recognition and treatment',
      beat: 'Beat — eating disorder support and helplines',
    },
  },

  /* ----------------------------------------------------------- willpower */
  'why-willpower-is-the-wrong-frame': {
    title: 'Willpower is a description of the outcome, not an explanation of it',
    short: 'The willpower frame',
    lede:
      'When eating goes the way someone intended we call it discipline, and when it does not we ' +
      'call it a lack of the same thing. That is not a mechanism. It is the result, renamed, and ' +
      'used as its own cause.',
    description:
      'Why explaining eating through willpower fails as an account, what the environment and ' +
      'biology are actually doing, and what changes when the frame changes.',

    commonBelief:
      'I know what I should eat. The gap between knowing and doing is discipline, and if I had ' +
      'more of it the problem would be solved.',

    sections: [
      {
        heading: 'The circular part',
        body: [
          'Ask why someone ate the biscuits and the answer is that they lacked willpower. Ask how ' +
            'we know they lacked willpower and the answer is that they ate the biscuits. Nothing ' +
            'has been explained; a label has been applied and then treated as a finding.',
          'This matters practically rather than philosophically. An explanation that points at ' +
            'nothing you can change produces no plan. If the cause is a character trait you are ' +
            'short of, the only available action is to try harder — which is precisely the ' +
            'strategy that has already failed, prescribed again at higher intensity.',
        ],
      },
      {
        heading: 'What is actually happening instead',
        body: [
          'Some of it is the food. The controlled feeding trial that matched ultra-processed and ' +
            'minimally processed diets for calories, sugar, fat, fibre and salt found people ate ' +
            'several hundred calories a day more on the ultra-processed one, without being asked ' +
            'to and largely without noticing. The participants had not become less disciplined ' +
            'between conditions. The food had changed.',
          'Some of it is the environment. Portion size, availability, how visible something is, ' +
            'whether it needs unwrapping — these move intake measurably in people who report no ' +
            'change in intention. A decision made twenty times a day is not really made twenty ' +
            'times; it is mostly made once, by whatever is within reach.',
          'And some of it is the body defending its weight. Weight loss lowers energy expenditure ' +
            'and raises appetite signalling, and both persist. The person regaining weight two ' +
            'years after a successful diet is not failing at something they previously succeeded ' +
            'at — they are experiencing a defended system doing what it does, against a plan that ' +
            'assumed it would not.',
        ],
      },
      {
        heading: 'Why this is not permission',
        body: [
          'It would be easy to read the above as saying none of it is up to you, and that is not ' +
            'the claim. People do change what they eat, durably, and it is worth doing.',
          'The point is about where the effort is best spent. Effort applied to resisting food ' +
            'twenty times a day loses to a system that never gets tired. Effort applied once, to ' +
            'what is in the house, what is on the shelf at eye level, what takes three minutes ' +
            'versus twenty — that holds, because it does not need renewing.',
          'The uncomfortable version: most of what looks like discipline in people who eat well is ' +
            'not discipline. It is a set of arrangements that means the choice rarely has to be ' +
            'made at all.',
        ],
      },
      {
        heading: 'Where the frame does real harm',
        body: [
          'A person who believes their eating is a character problem responds to a difficult week ' +
            'by tightening the rules. If the difficulty came from restriction in the first place ' +
            '— which it often does — that response makes the next week worse, and the worse week ' +
            'confirms the belief.',
          'This is the mechanism behind a great deal of unnecessary suffering, and it is the point ' +
            'where a framing problem stops being academic. If reading this recognises something, ' +
            'the guide on restriction and bingeing is the one that follows.',
        ],
      },
    ],

    claims: {},

    practical: [
      {
        title: 'Change the arrangement, not the resolve',
        detail:
          'What is in the house, what is at eye level, what takes three minutes rather than ' +
            'twenty. Decisions made once beat decisions made twenty times a day.',
      },
      {
        title: 'Treat a bad week as information, not evidence',
        detail:
          'The useful question is what preceded it. Almost always something did, and usually it ' +
            'was a rule.',
      },
      {
        title: 'Notice when tightening is the reflex',
        detail:
          'If the response to every difficulty is a stricter rule, the rules are worth examining ' +
            'before the discipline is.',
      },
    ],

    seeAlso: ['protein', 'fibre'],

    sources: {
      'hall-trial': 'Ultra-processed diets cause excess calorie intake — a controlled inpatient trial',
      'habit-review': 'Habit formation and behaviour change — a review',
      'set-point': 'Metabolic adaptation and weight regain — long-term follow-up',
    },
  },

  /* --------------------------------------------------- emotional eating */
  'emotional-eating': {
    title: 'Eating for a reason that is not hunger is not a malfunction',
    short: 'Emotional eating',
    lede:
      'Food has regulated mood for as long as there have been people, and calling that a disorder ' +
      'by default is both wrong and unhelpful. The question worth asking is narrower: whether it ' +
      'is the only tool available.',
    description:
      'What emotional eating is, why food genuinely does change how you feel, when it becomes a ' +
      'problem, and where the line into something needing help sits.',

    commonBelief:
      'Eating because I am stressed or sad is a bad habit I should break, and the fact that I ' +
      'keep doing it means something is wrong with me.',

    sections: [
      {
        heading: 'It works, which is why it happens',
        body: [
          'Eating palatable food reliably produces a short-term shift in affect. It is not ' +
            'imaginary and it is not weakness — it is a real effect, mediated by real systems, ' +
            'and it is a large part of why food is at the centre of comfort, celebration and ' +
            'grief in every culture there has ever been.',
          'Any behaviour that reliably relieves discomfort will be repeated. That is not a flaw ' +
            'in the person; it is the most basic thing learning does. Framing it as an ' +
            'inexplicable failure mistakes a functioning process for a broken one.',
        ],
      },
      {
        heading: 'What separates ordinary from costly',
        body: [
          'Almost everyone eats for reasons other than hunger, and for most people it costs ' +
            'nothing worth counting. What changes that is not frequency and not the food.',
          'It is range. Distress has many possible responses — talking to someone, moving, ' +
            'sleeping, solving the thing, tolerating it. Trouble arrives when the range collapses ' +
            'and food is the only one left, because then every difficult feeling has exactly one ' +
            'exit and that exit gets used regardless of whether it fits.',
          'The second thing is what follows. Eating for comfort and feeling comforted is a closed ' +
            'loop. Eating for comfort and then feeling ashamed, resolving to restrict, and ' +
            'restricting into the next episode is not a loop, it is a spiral, and the shame is ' +
            'doing more damage than the eating.',
        ],
      },
      {
        heading: 'The restriction connection',
        body: [
          'A great deal of what gets called emotional eating is physiological hunger arriving in ' +
            'an emotional moment. Someone under-eating all day is in a state where attention has ' +
            'narrowed onto food and fullness signalling has weakened, and then something ' +
            'stressful happens in the evening.',
          'That episode gets attributed to the stress, because the stress is visible and the ' +
            'day-long deficit is not. And the plan that follows targets the emotion, which leaves ' +
            'the actual driver untouched and running.',
          'It is worth checking the boring explanation first: whether the day contained enough ' +
            'food, and enough protein and fibre to hold. Not because feelings are not real, but ' +
            'because hunger is much easier to fix and is present far more often than people think.',
        ],
      },
      {
        heading: 'Where this page stops',
        body: [
          'This describes a mechanism. It cannot tell you whether what you are experiencing needs ' +
            'help, and it is not treatment.',
          'Some signs that the answer is yes: eating accompanied by a genuine sense of loss of ' +
            'control rather than a decision; anything done afterwards to compensate; eating in ' +
            'secret; food or shape taking up so much attention that work or relationships are ' +
            'suffering; or distress about it that persists rather than passing.',
          'None of that is a diagnosis. It is the point at which the right next step is a person ' +
            'rather than a strategy — and eating disorders are both more common and more ' +
            'treatable than most people assume, which are two good reasons to ask early.',
        ],
      },
    ],

    claims: {},

    practical: [
      {
        title: 'Check whether you were simply hungry',
        detail:
          'A day that was too small produces an evening that looks emotional. It is the commonest ' +
            'explanation and the easiest to rule out.',
      },
      {
        title: 'Widen the range rather than removing the option',
        detail:
          'The problem is rarely that food is one response to distress. It is that it has become ' +
            'the only one.',
      },
      {
        title: 'Drop the shame before you drop anything else',
        detail:
          'Shame reliably produces restriction, and restriction reliably produces the next ' +
            'episode. It is the part of the cycle doing the most damage.',
      },
    ],

    seeAlso: ['protein', 'fibre', 'magnesium'],

    sources: {
      'nice-eating': 'NICE guideline NG69 — eating disorders: recognition and treatment',
      'emotional-review': 'Emotional eating — a review of the construct and its measurement',
      nimh: 'US National Institute of Mental Health — eating disorders',
    },
  },

  /* ------------------------------------------------ tracking without harm */
  'tracking-without-obsession': {
    title: 'We make a tracking app, so read this part sceptically',
    short: 'Tracking without obsession',
    lede:
      'Measuring what you eat helps some people a great deal and harms others, and which group ' +
      'you are in is not decided by how sensible you are. We have an obvious interest in the ' +
      'first answer, which is exactly why this page exists.',
    description:
      'When food tracking helps, when it becomes harmful, the signs that it has, and why the ' +
      'right advice is sometimes to stop.',

    commonBelief:
      'Tracking is just information. More data about what I eat can only help me make better ' +
      'decisions.',

    sections: [
      {
        heading: 'What it is genuinely good at',
        body: [
          'Finding out what you actually eat, which almost nobody knows. Estimates of intake from ' +
            'memory are wrong by large margins in both directions, and the errors are not random ' +
            '— they cluster around exactly the things people are least keen to look at.',
          'It is also good at answering a specific question. Where is my protein short. Am I ' +
            'anywhere near enough iron. What is actually in the lunch I eat four times a week. ' +
            'Those have answers, the answers are useful, and once you have them you do not need ' +
            'to ask again.',
          'That is the shape of tracking at its best: a short investigation with a beginning and ' +
            'an end. A fortnight of measuring to find out where the gaps are is worth far more ' +
            'than a year of logging out of habit.',
        ],
      },
      {
        heading: 'How it turns',
        body: [
          'A measurement becomes a target, and a target becomes a rule. That progression is not ' +
            'inevitable and it is common, and it usually happens without any moment where someone ' +
            'decides to let it.',
          'The signals are recognisable. Eating around the app rather than using it — choosing ' +
            'the food that logs neatly over the food that fits the meal. Anxiety about eating ' +
            'something that cannot be measured, which quietly rules out other people’s cooking ' +
            'and most restaurants. A number at the end of the day that sets the tone of the ' +
            'evening. The urge to compensate after seeing a total.',
          'And the one that matters most: logging something and then eating differently because ' +
            'of what the screen said, rather than because of hunger, fullness or plan.',
        ],
      },
      {
        heading: 'Who should probably not do this',
        body: [
          'Anyone with a history of an eating disorder. This is not a cautious hedge — dietary ' +
            'self-monitoring is associated with worse outcomes in this group, and clinical ' +
            'guidance generally advises against it outside supervised treatment.',
          'Anyone for whom the numbers have previously become the point. If a past attempt ended ' +
            'with tracking taking over, the app is not different this time.',
          'And adolescents, where the risk-benefit is poor and the developmental timing is bad. ' +
            'We build for adults for that reason.',
        ],
      },
      {
        heading: 'What we would rather you did',
        body: [
          'Track for two weeks, with a question in mind. Answer it. Stop. Come back if the ' +
            'question changes or the diet does.',
          'Use it to look up individual foods without logging anything at all — most of the value ' +
            'in this app is in the panel for a food rather than in the diary, and that use has ' +
            'none of the risk described above.',
          'And if any of the signals in this page describe you, close it. That advice costs us a ' +
            'user, and it is still the correct advice. An app that could only be defended by not ' +
            'saying this would not be worth building.',
        ],
      },
    ],

    claims: {},

    practical: [
      {
        title: 'Give it a question and an end date',
        detail:
          'Two weeks to find out where the gaps are beats a year of logging from habit, and it is ' +
            'where nearly all the value sits.',
      },
      {
        title: 'Watch for eating around the app',
        detail:
          'Choosing food because it logs neatly rather than because it fits the meal is the ' +
            'earliest reliable sign that the tool has become the goal.',
      },
      {
        title: 'Use the lookup without the diary',
        detail:
          'Most of what is useful here is the nutrient panel for a food. That carries none of the ' +
            'risk that daily logging does.',
      },
      {
        title: 'If you have a history, do not start',
        detail:
          'Self-monitoring is associated with worse outcomes where there is a history of an ' +
            'eating disorder. That is guidance, not caution.',
      },
    ],

    seeAlso: ['protein', 'iron', 'calcium'],

    sources: {
      'tracking-review': 'Dietary self-monitoring and outcomes — a systematic review',
      orthorexia: 'Orthorexia nervosa and health-tracking technology — a review',
      'nice-eating': 'NICE guideline NG69 — eating disorders: recognition and treatment',
    },
  },
};

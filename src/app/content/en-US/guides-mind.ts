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
};

import { GUIDES_CORE_DA } from './da-DK/guides-core';
import { GuideLocale } from './guide-types';

/**
 * Dansk.
 *
 * Otte af de tyve guides, de samme otte i de fire sprog der hverken er
 * engelsk eller tysk. Tallene står ikke her: de lever ét sted, i
 * guide-facts.ts, sammen med angivelsen af hvor solide de er.
 *
 * Numrene nedenfor er danske med vilje. En britisk hjælpelinje for
 * spiseforstyrrelser på en dansk side er ikke en vejviser, det er en blindgyde:
 * forkert sprog, forkerte åbningstider, forkert sundhedsvæsen. Den, der læser
 * denne side, fordi den beskriver ham, har brug for et nummer han kan ringe til
 * i dag.
 */
export const GUIDES_DA_DK: GuideLocale = {
  chrome: {
    commonBelief: 'Hvad de fleste tror',
    whatEvidenceSays: 'Hvad evidensen faktisk siger',
    numbers: 'Tallene, og hvor solide de er',
    colWhat: 'Hvad det beskriver',
    colFigure: 'Værdi',
    colStrength: 'Evidens',
    practical: 'Hvad man konkret gør',
    seeAlso: 'Næringsstofferne bag',
    sources: 'Kilder',
    reviewed: 'Sidst gennemgået',

    strengthEstablished: 'Fastslået',
    strengthProbable: 'Sandsynligt',
    strengthContested: 'Omstridt',
    strengthNote:
      'Fastslået betyder, at fagselskaberne er enige, og at man kan handle på det. Sandsynligt ' +
      'betyder, at evidensen peger én vej, med reel uenighed. Omstridt betyder, at spørgsmålet ' +
      'reelt er åbent — og den, der sælger dig vished om det, sælger dig noget.',

    familyTraining: 'Træning',
    familyShortfall: 'Skjult mangel',
    familyMind: 'Psyke',

    disclaimer:
      'Denne side er oplysning, ikke lægelig rådgivning. Den stiller ingen diagnose og erstatter ' +
      'ikke en behandler, der kender din historie. Især sportsernæring er et felt, hvor evidensen ' +
      'flytter sig, og hvor et tal der passer til en trænet femogtyveårig kan være forkert for ' +
      'dig.',

    careHeading: 'Hvis denne side beskriver dig og ikke bare interesserer dig',
    careBody:
      'Denne side beskriver en mekanisme. Den kan ikke fortælle dig, om du har et problem, og den ' +
      'er ikke behandling. Spiseforstyrrelser har den højeste dødelighed af alle psykiske ' +
      'lidelser og reagerer godt på behandling — begge dele er grunde til at tale med nogen tidligt ' +
      'frem for sent. Egen læge er en fornuftig første dør og har haft samtalen før.',
    careLinks: [
      {
        label: 'Somenta (tidligere LMS) — rådgivning om spiseforstyrrelser: 70 10 18 18',
        url: 'https://somenta.dk/',
      },
      {
        label: 'Patienthåndbogen på sundhed.dk — spiseforstyrrelser hos voksne',
        url: 'https://www.sundhed.dk/borger/patienthaandbogen/psyke/sygdomme/anoreksi/anoreksi-hos-voksne/',
      },
      { label: 'Livslinien — 70 201 201, hver dag', url: 'https://www.livslinien.dk/' },
      { label: 'Find en hjælpelinje i dit land', url: 'https://findahelpline.com/' },
    ],

    ctaLine: 'Hvert næringsstof nævnt ovenfor, målt — i appen.',
    allGuides: 'Alle guides',
  },

  guides: GUIDES_CORE_DA,
};

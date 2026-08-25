import { GUIDES_MIND_DE } from './de-DE/guides-mind';
import { GUIDES_SHORTFALL_DE } from './de-DE/guides-shortfall';
import { GUIDES_TRAINING_DE } from './de-DE/guides-training';
import { GuideLocale } from './guide-types';

/**
 * Deutsch.
 *
 * Übersetzt aus guides.en-US.ts. Die Zahlen stehen nicht hier — sie leben
 * einmal, in guide-facts.ts, und werden beim Rendern über ihre Kennung
 * eingesetzt, zusammen mit der Angabe, wie belastbar sie sind.
 *
 * Die Anlaufstellen unten sind bewusst deutsche. Eine britische
 * Essstörungs-Hotline auf einer deutschen Seite ist kein Hinweis, sondern eine
 * Sackgasse: falsche Sprache, falsche Öffnungszeiten, falsches
 * Gesundheitssystem. Wer diese Seite liest, weil sie ihn betrifft, braucht eine
 * Nummer, die er heute anrufen kann.
 */
export const GUIDES_DE_DE: GuideLocale = {
  chrome: {
    commonBelief: 'Was die meisten glauben',
    whatEvidenceSays: 'Was die Evidenz tatsächlich sagt',
    numbers: 'Die Zahlen, und wie belastbar sie sind',
    colWhat: 'Wofür sie steht',
    colFigure: 'Wert',
    colStrength: 'Evidenz',
    practical: 'Was konkret zu tun ist',
    seeAlso: 'Die Nährstoffe dahinter',
    sources: 'Quellen',
    reviewed: 'Zuletzt geprüft',

    strengthEstablished: 'Gesichert',
    strengthProbable: 'Wahrscheinlich',
    strengthContested: 'Umstritten',
    strengthNote:
      'Gesichert heißt: die Fachgesellschaften sind sich einig und man kann danach handeln. ' +
      'Wahrscheinlich heißt: die Evidenz weist in eine Richtung, mit ernstzunehmendem ' +
      'Widerspruch. Umstritten heißt: es ist wirklich offen — und wer Ihnen dazu Gewissheit ' +
      'verkauft, verkauft Ihnen etwas.',

    familyTraining: 'Training',
    familyShortfall: 'Versteckter Mangel',
    familyMind: 'Psyche',

    disclaimer:
      'Diese Seite ist Aufklärung, keine medizinische Beratung. Sie stellt keine Diagnose und ' +
      'ersetzt keine Ärztin und keinen Arzt, die Ihre Vorgeschichte kennen. Gerade die ' +
      'Sporternährung ist ein Feld, in dem sich die Evidenz bewegt und in dem ein Wert, der zu ' +
      'einem trainierten Fünfundzwanzigjährigen passt, für Sie falsch sein kann.',

    careHeading: 'Wenn diese Seite Sie beschreibt und nicht nur interessiert',
    careBody:
      'Diese Seite beschreibt einen Mechanismus. Sie kann Ihnen nicht sagen, ob Sie ein Problem ' +
      'haben, und sie ist keine Behandlung. Essstörungen haben die höchste Sterblichkeit aller ' +
      'psychischen Erkrankungen und sprechen gut auf Behandlung an — beides sind Gründe, früh ' +
      'mit jemandem zu sprechen statt spät. Die Hausarztpraxis ist eine vernünftige erste Tür ' +
      'und hat dieses Gespräch schon geführt.',
    careLinks: [
      {
        label: 'BIÖG — Beratungstelefon Essstörungen: 0221 892031',
        url: 'https://essstoerungen.bioeg.de/',
      },
      { label: 'ANAD e. V. — Beratung und Therapievermittlung', url: 'https://www.anad.de/' },
      {
        label: 'Telefonseelsorge — 0800 111 0 111 oder 116 123, rund um die Uhr',
        url: 'https://www.telefonseelsorge.de/',
      },
      { label: 'Hilfetelefon in Ihrem Land finden', url: 'https://findahelpline.com/' },
    ],

    ctaLine: 'Jeder oben genannte Nährstoff, gemessen — in der App.',
    allGuides: 'Alle Ratgeber',
  },

  guides: {
    ...GUIDES_TRAINING_DE,
    ...GUIDES_SHORTFALL_DE,
    ...GUIDES_MIND_DE,
  },
};

import { GUIDES_CORE_ES } from './es-ES/guides-core';
import { GuideLocale } from './guide-types';

/**
 * Español.
 *
 * Ocho de las veinte guías, las mismas ocho en los cuatro idiomas que no son
 * inglés ni alemán. Las cifras no están aquí: viven una vez, en
 * guide-facts.ts, junto con la indicación de cuán firmemente se sostienen.
 *
 * Los teléfonos de abajo son españoles a propósito. Una línea británica de
 * trastornos alimentarios en una página en español no es una señal, es un
 * callejón sin salida: idioma equivocado, horario equivocado, sistema
 * sanitario equivocado. Quien lee esta página porque le describe necesita un
 * número al que pueda llamar hoy.
 */
export const GUIDES_ES_ES: GuideLocale = {
  chrome: {
    commonBelief: 'Lo que casi todo el mundo cree',
    whatEvidenceSays: 'Lo que dice realmente la evidencia',
    numbers: 'Las cifras, y cuán firmes son',
    colWhat: 'Qué describe',
    colFigure: 'Cifra',
    colStrength: 'Evidencia',
    practical: 'Qué hacer en concreto',
    seeAlso: 'Los nutrientes detrás de esto',
    sources: 'Fuentes',
    reviewed: 'Última revisión',

    strengthEstablished: 'Establecido',
    strengthProbable: 'Probable',
    strengthContested: 'Discutido',
    strengthNote:
      'Establecido significa que las sociedades científicas coinciden y se puede actuar en ' +
      'consecuencia. Probable significa que el peso de la evidencia apunta en una dirección, con ' +
      'discrepancia real. Discutido significa que está genuinamente abierto — y quien le venda ' +
      'certeza sobre ello le está vendiendo algo.',

    familyTraining: 'Entrenamiento',
    familyShortfall: 'Déficit oculto',
    familyMind: 'Mente',

    disclaimer:
      'Esta página es divulgación, no consejo médico. No diagnostica nada y no sustituye a un ' +
      'profesional que conozca su historia. La nutrición deportiva en particular es un campo ' +
      'donde la evidencia se mueve, y donde una cifra que le sirve a alguien de veinticinco años ' +
      'entrenado puede ser errónea para usted.',

    careHeading: 'Si esta página le describe y no solo le interesa',
    careBody:
      'Esta página describe un mecanismo. No puede decirle si usted tiene un problema, y no es ' +
      'tratamiento. Los trastornos de la conducta alimentaria tienen la mortalidad más alta de ' +
      'cualquier enfermedad psiquiátrica y responden bien al tratamiento — ambas son razones ' +
      'para hablar con alguien pronto y no tarde. Su médico de familia es una primera puerta ' +
      'razonable y ya ha tenido esta conversación antes.',
    careLinks: [
      {
        label: 'ACAB — Asociación contra la Anorexia y la Bulimia: 93 454 91 09',
        url: 'https://www.acab.org/es',
      },
      {
        label: 'Línea 024 — atención a la conducta suicida, gratuita, 24 horas',
        url: 'https://www.sanidad.gob.es/linea024/home.htm',
      },
      {
        label: 'Teléfono de la Esperanza — 717 003 717, 24 horas',
        url: 'https://telefonodelaesperanza.org/',
      },
      { label: 'Buscar una línea de ayuda en su país', url: 'https://findahelpline.com/' },
    ],

    ctaLine: 'Cada nutriente nombrado arriba, medido — en la app.',
    allGuides: 'Todas las guías',
  },

  guides: GUIDES_CORE_ES,
};

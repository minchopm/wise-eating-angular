import { GUIDES_CORE_IT } from './it-IT/guides-core';
import { GuideLocale } from './guide-types';

/**
 * Italiano.
 *
 * Otto delle venti guide, le stesse otto nelle quattro lingue che non sono
 * inglese né tedesco. I numeri non stanno qui: vivono una volta sola, in
 * guide-facts.ts, insieme all’indicazione di quanto siano solidi.
 *
 * I recapiti qui sotto sono italiani di proposito. Un numero britannico per i
 * disturbi alimentari su una pagina in italiano non è un’indicazione, è un
 * vicolo cieco: lingua sbagliata, orari sbagliati, sistema sanitario sbagliato.
 * Chi legge questa pagina perché lo riguarda ha bisogno di un numero che possa
 * chiamare oggi.
 */
export const GUIDES_IT_IT: GuideLocale = {
  chrome: {
    commonBelief: 'Quello che quasi tutti credono',
    whatEvidenceSays: 'Quello che dice davvero l’evidenza',
    numbers: 'I numeri, e quanto sono solidi',
    colWhat: 'Che cosa descrive',
    colFigure: 'Valore',
    colStrength: 'Evidenza',
    practical: 'Che cosa fare in concreto',
    seeAlso: 'I nutrienti dietro tutto questo',
    sources: 'Fonti',
    reviewed: 'Ultima verifica',

    strengthEstablished: 'Consolidato',
    strengthProbable: 'Probabile',
    strengthContested: 'Discusso',
    strengthNote:
      'Consolidato significa che le società scientifiche concordano e ci si può agire. Probabile ' +
      'significa che il peso dell’evidenza va in una direzione, con un dissenso reale. Discusso ' +
      'significa che è davvero aperto — e chi vi vende certezze su questo vi sta vendendo ' +
      'qualcosa.',

    familyTraining: 'Allenamento',
    familyShortfall: 'Carenza nascosta',
    familyMind: 'Mente',

    disclaimer:
      'Questa pagina è divulgazione, non consiglio medico. Non fa diagnosi e non sostituisce un ' +
      'professionista che conosca la vostra storia. La nutrizione sportiva in particolare è un ' +
      'campo in cui l’evidenza si muove, e in cui un valore adatto a un venticinquenne allenato ' +
      'può essere sbagliato per voi.',

    careHeading: 'Se questa pagina vi descrive e non vi interessa soltanto',
    careBody:
      'Questa pagina descrive un meccanismo. Non può dirvi se avete un problema, e non è una ' +
      'terapia. I disturbi del comportamento alimentare hanno la mortalità più alta fra le ' +
      'malattie psichiatriche e rispondono bene alle cure — entrambe ragioni per parlarne presto ' +
      'anziché tardi. Il medico di famiglia è una prima porta ragionevole e questa conversazione ' +
      'l’ha già fatta.',
    careLinks: [
      {
        label: 'Numero Verde SOS Disturbi Alimentari — 800 180 969, lun–ven 9–21',
        url: 'https://sosdisturbialimentari.it/',
      },
      {
        label: 'EpiCentro (ISS) — disturbi della nutrizione e dell’alimentazione',
        url: 'https://www.epicentro.iss.it/anoressia/',
      },
      {
        label: 'Telefono Amico Italia — 02 2327 2327, tutti i giorni 9–24',
        url: 'https://www.telefonoamico.it/',
      },
      {
        label: 'Trovare una linea di ascolto nel proprio paese',
        url: 'https://findahelpline.com/',
      },
    ],

    ctaLine: 'Ogni nutriente citato sopra, misurato — nell’app.',
    allGuides: 'Tutte le guide',
  },

  guides: GUIDES_CORE_IT,
};

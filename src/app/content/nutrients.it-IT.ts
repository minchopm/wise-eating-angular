import { CORE_IT } from './it-IT/core';
import { LocaleContent } from './types';

/**
 * Italiano.
 *
 * Tradotto da nutrients.en-US.ts. I numeri non stanno qui: vivono una volta
 * sola, in nutrient-facts.ts, e vengono uniti in fase di rendering tramite
 * identificatore. Una traduzione può far leggere male una pagina; non può
 * renderla pericolosa.
 *
 * Terminologia: «assunzione giornaliera raccomandata» per la RDA, «assunzione
 * adeguata» per l’AI. Le unità restano quelle della fonte — µg e UI — perché
 * così compaiono in etichetta.
 */
export const IT_IT: LocaleContent = {
  chrome: {
    whatItDoes: 'Che cosa fa nel corpo',
    howMuch: 'Quanto ve ne serve',
    colWho: 'Per chi',
    colPerDay: 'Al giorno',
    colNote: 'Nota',
    fromOurData: 'Dai nostri dati',
    foodsHeading: 'Gli alimenti più ricchi di {n}',
    foodsFootnote:
      'Per 100 g, dalla nostra copia di USDA FoodData Central, rispetto a un valore giornaliero ' +
      'di {dv}{unit}. Ordinati per quantità, non per quanto il corpo ne assorbe davvero — leggete ' +
      'la sezione seguente prima di fidarvi dell’ordine.',
    absorption: 'Che cosa aiuta e che cosa ostacola',
    helps: 'Aiuta',
    hinders: 'Ostacola',
    shortfall: 'A chi tende a mancare',
    shortfallLede:
      'Gruppi in cui assunzione o assorbimento sono abitualmente inferiori al riferimento. È un ' +
      'elenco di popolazioni, non di sintomi: non può dirvi nulla su di voi.',
    cookIt: 'Cucinatelo',
    ingredients: 'Ingredienti',
    method: 'Preparazione',
    sources: 'Fonti',
    reviewed: 'Ultima verifica',
    disclaimer:
      'Questa pagina è divulgazione, non consiglio medico. Non fa diagnosi e non sostituisce un ' +
      'medico che conosca la vostra storia. Se pensate che vi manchi {n}, la risposta è un esame ' +
      'del sangue e una conversazione, non un integratore comprato per via di un articolo.',
    ctaMid:
      'La tabella qui sopra è per 100 g. L’app calcola la porzione che avete davvero mangiato.',
    ctaLine: 'Tutti gli alimenti qui sopra e altri 12.601, con il profilo completo — nell’app.',
    allNutrients: 'Tutti i nutrienti',
    familyVitamin: 'Vitamina',
    familyMineral: 'Minerale',
    familyMacronutrient: 'Macronutriente',
    referenceNote:
      'I valori in tabella sono le Dietary Reference Intakes statunitensi, lo standard rispetto ' +
      'al quale è compilata la banca dati alimentare dell’app. I LARN italiani e i valori di ' +
      'riferimento dell’EFSA differiscono per alcuni nutrienti. Le differenze sono piccole e non ' +
      'cambiano la conclusione pratica, ma se confrontate con una fonte italiana o europea, è ' +
      'questo il motivo per cui i numeri non coincidono esattamente.',
  },

  hub: {
    eyebrow: 'I dati',
    title: 'Nutrienti e dati USDA',
    lede: 'Da dove vengono i numeri, che cosa possono dirvi e — altrettanto importante — che cosa no.',
    description:
      'Gli articoli sui nutrienti in italiano: che cosa fa ciascuno, quanto ve ne serve e quali ' +
      'alimenti ne portano di più — da {source}.',
    dataHeading: 'Una banca dati, e delle buone',
    dataBody: [
      'L’app porta con sé {foods} alimenti da {source}, dentro il dispositivo e non su un server. ' +
        'Per questo una ricerca è istantanea, funziona in aereo, e niente di ciò che cercate esce ' +
        'dal telefono.',
      'Ogni alimento porta {fields} campi di nutrienti: {vitamins} vitamine, {minerals} minerali, ' +
        'i macronutrienti, le fibre e gli zuccheri. I valori ci sono per porzione e per 100 g, e ' +
        'si passa dall’uno all’altro senza uscire dal pannello — cosa che conta più di quanto ' +
        'sembri, perché quasi ogni discussione sul fatto che un alimento sia «ricco» di qualcosa ' +
        'è in realtà una discussione sul denominatore.',
      'I dati sono statunitensi di origine e internazionali nell’uso. La composizione è una ' +
        'proprietà dell’alimento, non del confine che ha attraversato: una lenticchia a Bologna e ' +
        'una lenticchia a Seattle sono la stessa lenticchia. Ciò che varia davvero — varietà, ' +
        'suolo, conservazione, cottura — varia dentro un paese quanto fra due, ed è per questo ' +
        'che l’app tratta ogni numero come una stima.',
    ],
    indexHeading: 'Un nutriente alla volta',
    indexLede:
      'A che cosa serve, quanto ve ne serve a ogni età, quali alimenti ne portano di più — ' +
      'ordinati dagli stessi archivi USDA che l’app porta con sé — e qualcosa da cucinare.',
    read: 'Leggi →',
    disclaimer:
      'Nulla in queste pagine è consiglio medico, e nessun alimento previene o cura una malattia. ' +
      'Se pensate che vi manchi qualcosa, la risposta è un esame del sangue e una conversazione ' +
      'con un medico, non un’app.',
    englishNote: 'Più completo, in inglese: {href}',
    englishLink: 'Nutrients & USDA data',
  },

  shell: {
    tagline:
      '{foods} alimenti dalla banca dati {source}, nel telefono — con gli strumenti di ' +
      'pianificazione, allenamento e dispensa per usarli davvero.',
    product: 'Prodotto',
    learn: 'Approfondire',
    legal: 'Note legali',
    contact: 'Contatti',
    note:
      '{name} è uno strumento di pianificazione e divulgazione. Non fa diagnosi, non cura né ' +
      'tratta alcuna condizione e non sostituisce il parere di un medico. I valori nutrizionali ' +
      'sono stime tratte da {source}; il contenuto reale di un alimento varia con il suolo, la ' +
      'conservazione e la cottura.',
    rights: 'Tutti i diritti riservati.',
    storeNote: 'Pubblicato sull’App Store da {seller}. Apple e App Store sono marchi di Apple Inc.',
    englishPages: 'Le pagine qui sotto sono in inglese.',
  },

  articles: CORE_IT,
};

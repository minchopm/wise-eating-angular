import { MACROS_DE } from './de-DE/macros';
import { MINERALS_DE } from './de-DE/minerals';
import { VITAMINS_ACDEK_DE } from './de-DE/vitamins-acdek';
import { VITAMINS_B_DE } from './de-DE/vitamins-b';
import { LocaleContent } from './types';

/**
 * Deutsch.
 *
 * Übersetzt aus nutrients.en-US.ts. Die Zahlen stehen nicht hier — sie leben
 * einmal, in nutrient-facts.ts, und werden beim Rendern über ihre Kennung
 * eingesetzt. Eine Übersetzung kann eine Seite schlecht lesbar machen; sie
 * kann sie nicht unsicher machen.
 *
 * Terminologie folgt dem deutschen Sprachgebrauch: „empfohlene Zufuhr" für
 * RDA, „Schätzwert" für AI. Die Einheiten bleiben wie in der Quelle — µg und
 * IU —, weil sie auf den Etiketten so stehen.
 *
 * Die vollständigen 24 Artikel, in vier Familien aufgeteilt wie im Original,
 * damit sich eine Familie am Stück übersetzen und gegenlesen lässt.
 */
export const DE_DE: LocaleContent = {
  chrome: {
    whatItDoes: 'Was er im Körper tut',
    howMuch: 'Wie viel Sie brauchen',
    colWho: 'Für wen',
    colPerDay: 'Pro Tag',
    colNote: 'Anmerkung',
    fromOurData: 'Aus unseren eigenen Daten',
    foodsHeading: 'Die Lebensmittel mit dem meisten {n}',
    foodsFootnote:
      'Je 100 g, aus unserer Kopie von USDA FoodData Central, bezogen auf einen Tagesbezugswert ' +
      'von {dv}{unit}. Sortiert nach Menge, nicht danach, wie viel der Körper davon tatsächlich ' +
      'aufnimmt — lesen Sie den nächsten Abschnitt, bevor Sie sich auf die Reihenfolge verlassen.',
    absorption: 'Was hilft und was im Weg steht',
    helps: 'Hilft',
    hinders: 'Steht im Weg',
    shortfall: 'Wer typischerweise zu wenig bekommt',
    shortfallLede:
      'Gruppen, bei denen Zufuhr oder Aufnahme regelmäßig unter dem Referenzwert liegen. Das ist ' +
      'eine Liste von Bevölkerungsgruppen und keine Liste von Symptomen — sie kann Ihnen nichts ' +
      'über Sie selbst sagen.',
    cookIt: 'Kochen Sie es',
    ingredients: 'Zutaten',
    method: 'Zubereitung',
    sources: 'Quellen',
    reviewed: 'Zuletzt geprüft',
    disclaimer:
      'Diese Seite ist Aufklärung, keine medizinische Beratung. Sie stellt keine Diagnose und ' +
      'ersetzt keine Ärztin und keinen Arzt, die Ihre Vorgeschichte kennen. Wenn Sie vermuten, ' +
      'dass Ihnen {n} fehlt, ist die Antwort eine Blutuntersuchung und ein Gespräch — nicht ein ' +
      'Präparat, das man wegen eines Artikels kauft.',
    ctaMid:
      'Die Tabelle oben gilt pro 100 g. Die App rechnet mit der Portion, die Sie wirklich gegessen haben.',
    ctaLine:
      'Jedes Lebensmittel oben und 12.601 weitere, mit dem vollständigen Profil — in der App.',
    allNutrients: 'Alle Nährstoffe',
    familyVitamin: 'Vitamin',
    familyMineral: 'Mineralstoff',
    familyMacronutrient: 'Makronährstoff',
    referenceNote:
      'Die Werte in der Tabelle sind die US-amerikanischen Dietary Reference Intakes — der ' +
      'Standard, gegen den die Nährwertdatenbank der App zusammengestellt ist. Die ' +
      'Referenzwerte der DGE und die von EFSA weichen bei einzelnen Nährstoffen davon ab. Die ' +
      'Unterschiede sind klein und ändern die praktische Schlussfolgerung nicht, aber wenn Sie ' +
      'mit einer deutschen oder europäischen Quelle vergleichen, ist das der Grund, warum die ' +
      'Zahlen nicht exakt übereinstimmen.',
  },

  hub: {
    eyebrow: 'Die Daten',
    title: 'Nährstoffe und USDA-Daten',
    lede: 'Woher die Zahlen kommen, was sie sagen können und — genauso wichtig — was nicht.',
    description:
      'Die Nährstoffartikel auf Deutsch: was jeder Nährstoff tut, wie viel Sie brauchen und ' +
      'welche Lebensmittel am meisten davon tragen — aus {source}.',
    dataHeading: 'Eine Datenbank, und zwar eine gute',
    dataBody: [
      'Die App trägt {foods} Lebensmittel aus {source} bei sich — im Gerät, nicht auf einem ' +
        'Server. Eine Abfrage ist damit sofort da, sie funktioniert im Flugzeug, und nichts ' +
        'darüber, wonach Sie gesucht haben, verlässt das Telefon.',
      'Jedes Lebensmittel führt {fields} Nährstofffelder: {vitamins} Vitamine, {minerals} ' +
        'Mineralstoffe, die Makronährstoffe, Ballaststoffe und Zucker. Die Werte gibt es je ' +
        'Portion und je 100 g, und man kann zwischen beiden umschalten, ohne die Ansicht zu ' +
        'verlassen — was mehr ausmacht, als es klingt, denn fast jeder Streit darüber, ob ein ' +
        'Lebensmittel „viel" von etwas enthält, ist in Wahrheit ein Streit über den Nenner.',
      'Die Daten sind amerikanischer Herkunft und international im Gebrauch. Zusammensetzung ist ' +
        'eine Eigenschaft des Lebensmittels und nicht der Grenze, die es überquert hat: Eine Linse ' +
        'in Hamburg und eine Linse in Seattle sind dieselbe Linse. Was wirklich schwankt — Sorte, ' +
        'Boden, Lagerung, Zubereitung —, schwankt innerhalb eines Landes so stark wie zwischen ' +
        'zweien, und deshalb behandelt die App jede Zahl als Schätzung.',
    ],
    railTitle: 'Wo diese Nährstoffe tatsächlich vorkommen',
    indexHeading: 'Ein Nährstoff nach dem anderen',
    indexLede:
      'Wofür er da ist, wie viel Sie in welchem Alter brauchen, welche Lebensmittel am meisten ' +
      'davon tragen — sortiert aus denselben USDA-Datensätzen, die die App mitbringt — und etwas ' +
      'zum Kochen.',
    read: 'Lesen →',
    disclaimer:
      'Nichts auf diesen Seiten ist medizinische Beratung, und kein Lebensmittel verhindert oder ' +
      'behandelt eine Erkrankung. Wenn Sie vermuten, dass Ihnen etwas fehlt, ist die Antwort eine ' +
      'Blutuntersuchung und ein Gespräch mit einer Ärztin oder einem Arzt — nicht eine App.',
    englishNote: 'Ausführlicher, auf Englisch: {href}',
    englishLink: 'Nutrients & USDA data',
  },

  shell: {
    tagline:
      '{foods} Lebensmittel aus {source}, auf dem Telefon — mit den Werkzeugen für Planung, ' +
      'Training und Vorrat, um sie auch zu nutzen.',
    product: 'Produkt',
    learn: 'Wissen',
    legal: 'Rechtliches',
    contact: 'Kontakt',
    note:
      '{name} ist ein Planungs- und Aufklärungswerkzeug. Es stellt keine Diagnose, behandelt und ' +
      'heilt nichts und ersetzt keine ärztliche Beratung. Die Nährwerte sind Schätzungen aus ' +
      '{source}; der tatsächliche Gehalt eines Lebensmittels schwankt mit Boden, Lagerung und ' +
      'Zubereitung.',
    rights: 'Alle Rechte vorbehalten.',
    storeNote:
      'Im App Store veröffentlicht von {seller}. Apple und App Store sind Marken von Apple Inc.',
    englishPages: 'Die folgenden Seiten sind auf Englisch.',
  },

  articles: {
    ...MINERALS_DE,
    ...VITAMINS_ACDEK_DE,
    ...VITAMINS_B_DE,
    ...MACROS_DE,
  },
};

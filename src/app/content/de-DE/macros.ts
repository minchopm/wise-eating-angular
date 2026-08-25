import { LocalisedArticle } from '../types';

/** Die Makronährstoffe auf Deutsch. Zahlen stehen in nutrient-facts.ts. */
export const MACROS_DE: Readonly<Record<string, LocalisedArticle>> = {
  /* -------------------------------------------------------------- protein */
  protein: {
    name: 'Eiweiß',
    title: 'Eiweiß: nicht wie viel, sondern welches und wann',
    lede:
      'Fast alle in wohlhabenden Ländern nehmen mehr als die Mindestmenge auf. Trotzdem verlieren ' +
      'viele Ältere Muskelmasse, und der Grund liegt in der Verteilung über den Tag, nicht in der ' +
      'Tagessumme.',
    description:
      'Wie viel Eiweiß man wirklich braucht, warum die Verteilung über den Tag zählt, was ' +
      'vollständige Proteine sind, und die eiweißreichsten Lebensmittel aus USDA-Daten.',

    whatItDoes: [
      'Eiweiß liefert die zwanzig Aminosäuren, aus denen der Körper alles baut, was kein Fett und ' +
        'kein Zucker ist: Muskel, Enzyme, Antikörper, Hormone, Kollagen, Transportproteine im Blut. ' +
        'Neun dieser Aminosäuren kann er nicht selbst herstellen, sie müssen aus der Nahrung kommen.',
      'Anders als bei Fett und Kohlenhydraten gibt es keinen Eiweißspeicher. Wenn nichts kommt, ' +
        'baut der Körper vorhandenes Gewebe ab, meist Muskel, um an die Aminosäuren zu kommen, die ' +
        'er gerade braucht.',
      'Der interessante Teil ist die Schwelle. Eine Mahlzeit löst die Muskelproteinsynthese erst ' +
        'aus, wenn sie genug Leucin enthält — grob zwanzig bis dreißig Gramm Eiweiß bei einem ' +
        'Erwachsenen, mehr bei Älteren. Wer den Tag mit Toast beginnt, mittags einen Salat isst ' +
        'und den ganzen Eiweißanteil abends unterbringt, überschreitet die Schwelle einmal statt ' +
        'dreimal, auch wenn die Tagessumme stimmt.',
    ],

    intake: {
      'infant-0-6': { who: 'Säuglinge, 0–6 Monate', note: 'Schätzwert' },
      'infant-7-12': { who: 'Säuglinge, 7–12 Monate' },
      'child-1-3': { who: 'Kinder, 1–3 Jahre' },
      'child-4-8': { who: 'Kinder, 4–8 Jahre' },
      'child-9-13': { who: 'Kinder, 9–13 Jahre' },
      'men-19-plus': {
        who: 'Männer, ab 19',
        note: 'Bei einem Referenzkörpergewicht',
      },
      'women-19-plus': {
        who: 'Frauen, ab 19',
        note: 'Bei einem Referenzkörpergewicht',
      },
      'per-kilo': {
        who: 'Erwachsene, je Kilogramm',
        note: 'Der Wert, aus dem die übrigen abgeleitet sind',
      },
      pregnancy: { who: 'Schwangerschaft und Stillzeit' },
    },
    intakeNote:
      'Die Empfehlung von 0,8 g je Kilogramm ist die Menge, die einen Mangel verhindert, nicht ' +
      'die, die zu optimaler Gesundheit führt. Für Ältere, für Menschen im Krafttraining und in ' +
      'der Genesung nach Krankheit liegen die üblichen Empfehlungen deutlich höher — meist zwischen ' +
      '1,2 und 1,6 g je Kilogramm.',

    foodsIntro:
      'Fleisch, Fisch, Eier und Milchprodukte liefern alle neun unentbehrlichen Aminosäuren in ' +
      'brauchbaren Mengen. Hülsenfrüchte, Getreide und Kerne liefern sie ebenfalls, nur in ' +
      'ungleichen Anteilen — was über einen ganzen Tag hinweg selten eine Rolle spielt.',

    helps: [
      'Über drei Mahlzeiten verteilen statt alles in eine zu legen',
      'Zwanzig bis dreißig Gramm je Mahlzeit, um die Synthese tatsächlich auszulösen',
      'Krafttraining, das die Aufnahme deutlich wirksamer macht',
      'Hülsenfrüchte und Getreide über den Tag kombinieren, nicht zwingend in derselben Schüssel',
    ],
    hinders: [
      'Ein eiweißfreies Frühstück, das den Morgen unter der Schwelle lässt',
      'Sehr niedrige Kalorienzufuhr, bei der Eiweiß als Brennstoff verheizt wird',
      'Bewegungsmangel, unter dem Muskel unabhängig von der Zufuhr abgebaut wird',
    ],
    absorptionNote:
      'Das alte „unvollständige Proteine müssen in derselben Mahlzeit kombiniert werden" ist ' +
      'überholt. Der Körper hält einen Aminosäurepool über Stunden vorrätig; Bohnen mittags und ' +
      'Reis abends erfüllen denselben Zweck. Für eine rein pflanzliche Ernährung bleibt es ' +
      'trotzdem sinnvoll, Hülsenfrüchte, Getreide, Kerne und Soja abzuwechseln, statt sich auf ' +
      'eine Gruppe zu verlassen.',

    shortfall: [
      'Ältere Erwachsene, deren Bedarf steigt und deren Appetit meist fällt',
      'Menschen in der Genesung nach Operation, Verletzung oder Krankheit',
      'Wer stark kalorienreduziert isst, ohne den Eiweißanteil zu schützen',
      'Menschen mit rein pflanzlicher Ernährung ohne Blick auf Vielfalt und Menge',
    ],

    recipe: {
      title: 'Weiße Bohnen mit Fenchel, Zitrone und Sardinen',
      serves: 'Zwei, fünfzehn Minuten',
      ingredients: [
        '2 Dosen weiße Bohnen, abgetropft',
        '2 Dosen Sardinen in Öl',
        '1 Fenchelknolle, dünn gehobelt',
        '1 Zitrone, Schale und Saft',
        '2 EL Olivenöl',
        'Eine Handvoll Petersilie',
        'Schwarzer Pfeffer',
      ],
      steps: [
        {
          title: 'Die Bohnen im eigenen Öl erwärmen',
          detail:
            'Bei mittlerer Hitze mit dem Öl aus der Sardinendose, fünf Minuten. Sie sollen warm ' +
            'werden und Geschmack aufnehmen, nicht kochen.',
        },
        {
          title: 'Ein Drittel zerdrücken',
          detail:
            'Mit dem Löffelrücken direkt in der Pfanne. Das bindet das Gericht, ohne Sahne oder ' +
            'Mehl, und alles bleibt zusammen statt auseinanderzurollen.',
        },
        {
          title: 'Fenchel roh dazu',
          detail:
            'Dünn gehobelt und erst vom Herd genommen untergehoben, damit er knackig und ' +
            'anisfrisch bleibt — der Gegenpol zu den weichen Bohnen.',
        },
        {
          title: 'Sardinen obenauf, nicht unterrühren',
          detail:
            'Ganz auflegen, Zitronenschale und -saft darüber, Petersilie und Pfeffer. Untergerührt ' +
            'zerfallen sie zu Paste.',
        },
      ],
      note:
        'Rund 35 g Eiweiß pro Portion aus Dosen, plus die Omega-3-Fettsäuren und das Calcium aus ' +
        'den Sardinengräten, die man mitisst, ohne es zu merken.',
    },

    sources: {
      dri: 'Dietary Reference Intakes für Energie, Kohlenhydrate, Ballaststoffe, Fett, Fettsäuren, Cholesterin, Protein und Aminosäuren',
      who: 'WHO/FAO/UNU — Protein and Amino Acid Requirements in Human Nutrition',
      fdc: 'USDA FoodData Central',
    },
  },

  /* --------------------------------------------------------------- fibre */
  fibre: {
    name: 'Ballaststoffe',
    title: 'Ballaststoffe: der Nährstoff, der nicht für Sie ist',
    lede:
      'Ballaststoffe werden nicht verdaut, das ist der Punkt. Sie passieren den Dünndarm unverändert ' +
      'und ernähren im Dickdarm die Bakterien, die dort leben — und deren Stoffwechselprodukte ' +
      'wirken auf den ganzen Körper zurück.',
    description:
      'Was Ballaststoffe tun, der Unterschied zwischen löslich und unlöslich, wie viel man ' +
      'braucht, und die ballaststoffreichsten Lebensmittel — aus USDA-Daten.',

    whatItDoes: [
      'Unlösliche Ballaststoffe — Cellulose, Vollkornschalen, Gemüsefasern — binden Wasser und ' +
        'geben dem Stuhl Volumen. Das ist die mechanische Hälfte, und sie ist der Grund, warum ' +
        'Ballaststoffe gegen Verstopfung helfen.',
      'Lösliche Ballaststoffe — Beta-Glucan aus Hafer, Pektin aus Äpfeln, die Fasern in Bohnen — ' +
        'lösen sich zu einem Gel. Das Gel verlangsamt die Magenentleerung, dämpft den ' +
        'Blutzuckeranstieg nach dem Essen und bindet Gallensäuren, wodurch die Leber Cholesterin ' +
        'verbraucht, um neue zu bilden. Daher der messbare Effekt von Hafer auf das LDL.',
      'Und dann die Fermentation. Dickdarmbakterien bauen einen Teil der Ballaststoffe zu ' +
        'kurzkettigen Fettsäuren ab, vor allem Butyrat, das die Zellen der Darmwand direkt als ' +
        'Brennstoff nutzen. Das ist die Hälfte, über die noch aktiv geforscht wird, und ' +
        'wahrscheinlich die wichtigere.',
    ],

    intake: {
      'child-1-3': { who: 'Kinder, 1–3 Jahre', note: 'Schätzwert' },
      'child-4-8': { who: 'Kinder, 4–8 Jahre' },
      'boys-9-13': { who: 'Jungen, 9–13' },
      'girls-9-13': { who: 'Mädchen, 9–13' },
      'men-19-50': { who: 'Männer, 19–50' },
      'women-19-50': { who: 'Frauen, 19–50' },
      'men-51-plus': { who: 'Männer, ab 51' },
      'women-51-plus': { who: 'Frauen, ab 51' },
      'per-1000-kcal': {
        who: 'Je 1.000 kcal',
        note: 'Der Wert, aus dem die übrigen abgeleitet sind',
      },
    },
    intakeNote:
      'Die Werte leiten sich aus 14 g je 1.000 kcal ab, der Menge, bei der in Studien das ' +
      'kardiovaskuläre Risiko am niedrigsten lag. Die durchschnittliche tatsächliche Zufuhr in ' +
      'westlichen Ländern liegt bei etwa der Hälfte.',

    foodsIntro:
      'Hülsenfrüchte, Vollkorn, Kerne, Beeren und Gemüse mit Schale. Weizenkleie und ' +
      'Flohsamenschalen führen jede Tabelle an, aber Bohnen sind das Lebensmittel, das die meisten ' +
      'Menschen tatsächlich regelmäßig essen können.',

    helps: [
      'Genug trinken, denn Ballaststoffe ohne Wasser verschlimmern Verstopfung',
      'Die Menge über Wochen steigern, damit sich die Darmflora anpasst',
      'Beide Arten mischen — Hafer und Bohnen löslich, Vollkorn und Gemüse unlöslich',
      'Die Schale dranlassen, wo es geht',
    ],
    hinders: [
      'Zu schnell zu viel, was Blähungen und Krämpfe auslöst und die meisten wieder aufgeben lässt',
      'Saft statt ganzer Frucht, wobei praktisch alle Ballaststoffe zurückbleiben',
      'Auszugsmehl, dem beim Mahlen Kleie und Keim entzogen wurden',
    ],
    absorptionNote:
      'Ballaststoffe binden im Darm auch etwas Zink, Eisen und Calcium. Bei üblicher Zufuhr ist ' +
      'das ohne Bedeutung; bei sehr hoher Zufuhr zusammen mit knapper Mineralstoffversorgung kann ' +
      'es eine Rolle spielen — es ist ein Argument für Vielfalt, nicht gegen Ballaststoffe.',

    shortfall: [
      'Fast alle in westlichen Ländern, im Durchschnitt bei etwa der Hälfte des Zielwerts',
      'Wer sich überwiegend von verarbeiteten Lebensmitteln ernährt',
      'Menschen unter Low-Carb-Ernährung ohne Ersatz durch Gemüse und Kerne',
      'Kinder, deren Zufuhr in Erhebungen durchweg unter dem Schätzwert liegt',
    ],

    recipe: {
      title: 'Schwarze Bohnen mit Kreuzkümmel und geröstetem Kürbis',
      serves: 'Vier, vierzig Minuten',
      ingredients: [
        '2 Dosen schwarze Bohnen, mit Flüssigkeit',
        '600 g Hokkaidokürbis, gewürfelt, mit Schale',
        '1 Zwiebel, gewürfelt',
        '2 TL ganzer Kreuzkümmel',
        '1 TL geräuchertes Paprikapulver',
        '3 EL Olivenöl',
        '1 Limette',
        'Koriander',
      ],
      steps: [
        {
          title: 'Den Kürbis mit Schale rösten',
          detail:
            'Hokkaidoschale wird beim Rösten weich und essbar, und sie trägt einen erheblichen ' +
            'Teil der Ballaststoffe. 25 Minuten bei 220 °C, einmal wenden.',
        },
        {
          title: 'Den Kreuzkümmel ganz anrösten',
          detail:
            'Die Samen trocken in der Pfanne, bis sie duften und leicht springen, dann erst das ' +
            'Öl und die Zwiebel. Gemahlener Kreuzkümmel gibt hier nur die Hälfte her.',
        },
        {
          title: 'Die Bohnenflüssigkeit mitverwenden',
          detail:
            'Nicht abgießen — die stärkehaltige Flüssigkeit bindet das Gericht. Fünfzehn Minuten ' +
            'köcheln, dabei ein Drittel der Bohnen zerdrücken.',
        },
        {
          title: 'Limette zum Schluss',
          detail:
            'Saft nach dem Herd, Kürbis untergehoben, Koriander darüber. Die Säure macht die ' +
            'Erdigkeit hell, und gekocht verliert sie das.',
        },
      ],
      note:
        'Rund 15 g Ballaststoffe pro Portion, gut die Hälfte des Tagesziels für eine erwachsene ' +
        'Frau, aus Zutaten, die zusammen weniger kosten als ein Kaffee.',
    },

    sources: {
      dri: 'Dietary Reference Intakes für Energie, Kohlenhydrate, Ballaststoffe, Fett, Fettsäuren, Cholesterin, Protein und Aminosäuren',
      fda: 'FDA — Ballaststoffe auf dem Nutrition-Facts-Etikett',
      fdc: 'USDA FoodData Central',
    },
  },
};

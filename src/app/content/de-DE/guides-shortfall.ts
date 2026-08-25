import { LocalisedGuide } from '../guide-types';

/** Die Ratgeber zum versteckten Mangel auf Deutsch. Zahlen stehen in guide-facts.ts. */
export const GUIDES_SHORTFALL_DE: Readonly<Record<string, LocalisedGuide>> = {
  'hidden-hunger': {
    title: 'Versteckter Hunger: zu viel essen und trotzdem zu wenig bekommen',
    short: 'Versteckter Hunger',
    lede:
      'Das Wort Mangelernährung ruft ein Bild von Knappheit auf. Ihre häufigste Form in ' +
      'wohlhabenden Ländern sieht aus wie das Gegenteil — reichlich Essen, reichlich Energie, ' +
      'und ein Nährstoffprofil mit Löchern.',
    description:
      'Warum man mehr als genug Kalorien essen und trotzdem zu wenig Eisen, Magnesium oder ' +
      'Calcium bekommen kann — was versteckter Hunger ist, wen er trifft und wie man ihn findet.',

    commonBelief:
      'Mangel gibt es dort, wo es zu wenig zu essen gibt. Wenn ich reichlich esse — eher zu viel ' +
      '—, ist das nicht mein Problem.',

    sections: [
      {
        heading: 'Zwei verschiedene Arten von Hunger',
        body: [
          'Energie und Nährstoffe kommen im selben Bissen an und werden vom Körper getrennt ' +
            'verbucht. Man kann das eine decken und das andere verfehlen, und die beiden Ausfälle ' +
            'fühlen sich nicht im Entferntesten gleich an: Energiemangel meldet sich als Hunger, ' +
            'Magnesiummangel meldet sich jahrelang als so gut wie nichts.',
          'Diese Stille ist die ganze Schwierigkeit. Es gibt keinen Rezeptor für den Eisenstatus. ' +
            'Nichts erzeugt Appetit auf Zink. Der Körper lässt ein Mineral sehr lange absinken und ' +
            'hält den Blutspiegel normal, indem er es woanders herholt — meist aus dem Knochen —, ' +
            'und das erste Symptom ist oft die Folge und nicht der Mangel.',
        ],
      },
      {
        heading: 'Wie ein voller Teller leer wird',
        body: [
          'Der Mechanismus ist Verdünnung, nicht Abwesenheit. Ein stark verarbeitetes Lebensmittel ' +
            'behält meist seine Energie und verliert einen Teil dessen, was mitkam: Beim Mahlen ' +
            'gehen Keim und Schale ab, und rund vier Fünftel des Magnesiums gehen mit. Beim ' +
            'Raffinieren von Ölen dasselbe. Nichts davon ist eine Verschwörung — es macht ' +
            'Lebensmittel haltbar und billig —, aber das Ergebnis ist eine Kost, die energiedicht ' +
            'und nährstoffarm ist.',
          'Dann arbeitet die Arithmetik gegen einen. Der Bedarf ist weitgehend fest, während der ' +
            'Appetit von Energie gestillt wird. Je mehr Ihrer Energie also aus Lebensmitteln ' +
            'kommt, die kaum etwas außer Energie tragen, desto weniger Platz bleibt für die, die ' +
            'alles andere tragen.',
          'Deshalb zeigt sich das Muster als übergewichtig und unterversorgt zugleich, was nach ' +
            'einem Widerspruch klingt und keiner ist. Es sind zwei getrennte Konten, und nur ' +
            'eines davon ist im Plus.',
        ],
      },
      {
        heading: 'Wen es tatsächlich betrifft',
        body: [
          'Nationale Erhebungsdaten beantworten das ungewöhnlich gut, weil sie messen, was ' +
            'Menschen gegessen haben, und nicht, was sie darüber sagen. In den USA taucht eine ' +
            'kurze Liste von Nährstoffen wiederholt unterhalb des Referenzwerts auf — quer durch ' +
            'die Bevölkerung, nicht in einer Ecke davon.',
          'Calcium und Magnesium stechen heraus, und der Grund ist derselbe: Beide kamen ' +
            'überwiegend aus Lebensmittelgruppen, von denen still weniger gegessen wurde — ' +
            'Milchprodukte für das eine, Vollkorn und Hülsenfrüchte für das andere. Vitamin D ' +
            'gehört auch auf die Liste, aber aus einem anderen Grund, denn Lebensmittel waren nie ' +
            'die Hauptquelle.',
          'Nichts davon heißt, dass jede Leserin einen Mangel hat. Unter dem Referenzwert ist ' +
            'nicht dasselbe wie Mangel — der Referenzwert ist so gesetzt, dass er fast alle deckt, ' +
            'also bedeutet ein Wert darunter „möglicherweise zu wenig" und nicht „sicher krank". ' +
            'Was es heißt, ist: die Annahme, versorgt zu sein, weil Essen im Haus ist, trägt nicht.',
        ],
      },
      {
        heading: 'Was man tut, wenn man nichts davon sieht',
        body: [
          'Der ehrliche erste Schritt ist, mit dem Raten aufzuhören. Diffuse Müdigkeit passt zu ' +
            'einem Dutzend Nährstofflücken, zu schlechtem Schlaf, zu einer Unterfunktion der ' +
            'Schilddrüse und zu gar nichts — und sich passend zum Gefühl ein Präparat aus dem ' +
            'Regal zu greifen, ist der Weg, auf dem Menschen ein Jahr lang Zink nehmen und sich ' +
            'ein Kupferproblem einhandeln.',
          'Nützlich ist herauszufinden, was Sie tatsächlich essen, im langweiligen Sinn — für eine ' +
            'Woche, nicht für immer. Die meisten Lücken in einer echten Ernährung sind ' +
            'strukturell: eine ganze Lebensmittelgruppe, die still verschwunden ist; eine ' +
            'Mahlzeit am Tag, die nichts beiträgt; ein Tausch aus gutem Grund, der etwas ' +
            'mitgenommen hat.',
          'Und wo eine Lücke echt aussieht, ist die Antwort eine Blutuntersuchung und eine Ärztin, ' +
            'kein Artikel. Das ist keine Floskel. Gerade Eisen ist blind zu supplementieren ' +
            'wirklich gefährlich, weil der Körper einen Überschuss nicht ausscheiden kann.',
        ],
      },
    ],

    claims: {
      'global-affected': {
        what: 'Weltweit betroffene Menschen',
        note: 'Die WHO-Zahl für Mikronährstoffmangel',
      },
      'us-shortfall-nutrients': {
        what: 'In den USA bevölkerungsweit zu wenig aufgenommene Nährstoffe',
        note: 'So benannt vom Ausschuss für die Ernährungsleitlinien',
      },
      'calcium-shortfall': { what: 'US-Erwachsene unter dem Calcium-Referenzwert' },
      'magnesium-shortfall': { what: 'US-Erwachsene unter dem Magnesium-Referenzwert' },
    },
    claimsNote:
      'Unter dem Referenzwert ist nicht dasselbe wie Mangel. Der Referenzwert ist hoch genug ' +
      'angesetzt, um fast alle abzudecken, also heißt ein Wert darunter „möglicherweise zu wenig" ' +
      'und nicht „sicher krank".',

    practical: [
      {
        title: 'Schauen Sie auf eine Woche, nicht auf einen Tag',
        detail:
          'Ein Tag sagt Ihnen etwas über einen Tag. Eine Woche zeigt die Struktur: die Mahlzeit, ' +
            'die nichts beiträgt, die Gruppe, die gegangen ist, ohne ersetzt zu werden.',
      },
      {
        title: 'Finden Sie den Tausch, der etwas gekostet hat',
        detail:
          'Die meisten Lücken lassen sich auf eine einzige Ersetzung aus gutem Grund zurückführen ' +
            '— Milch raus wegen Laktose, Brot raus wegen Kohlenhydraten, Fleisch raus aus ' +
            'Überzeugung —, bei der nichts nachkam, was das Weggefallene trägt.',
      },
      {
        title: 'Behandeln Sie kein Gefühl mit einem Präparat',
        detail:
          'Müdigkeit passt zu zu vielen Ursachen. Wenn eine Lücke echt aussieht, kostet eine ' +
            'Blutuntersuchung weniger als ein Jahr der falschen Tablette — und bei Eisen ist sie ' +
            'der Unterschied zwischen Hilfe und Schaden.',
      },
    ],

    seeAlso: ['magnesium', 'calcium', 'iron', 'vitamin-d'],

    sources: {
      'who-micronutrient': 'Weltgesundheitsorganisation — Mikronährstoffe',
      dgac: 'Dietary Guidelines for Americans — wissenschaftlicher Bericht',
      nhanes: 'National Health and Nutrition Examination Survey (NHANES)',
    },
  },
};

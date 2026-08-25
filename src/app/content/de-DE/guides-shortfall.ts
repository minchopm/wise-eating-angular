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

  /* --------------------------------- Hochverarbeitet und Nährstoffdichte */
  'ultra-processed-and-density': {
    title: 'Das Problem hochverarbeiteter Lebensmittel ist, was fehlt, nicht nur was zugesetzt ist',
    short: 'Hochverarbeitete Lebensmittel',
    lede:
      'Der meiste Streit dreht sich um Zucker, Salz und Zusatzstoffe. Die leisere Frage ist ' +
      'Arithmetik: Diese Lebensmittel behalten ihre Energie und verlieren vieles, was mitkam — ' +
      'und sie liefern in manchen Ländern inzwischen mehr als die Hälfte der Kalorien.',
    description:
      'Was hochverarbeitet bedeutet, warum diese Lebensmittel Nährstoffe verdrängen statt nur ' +
      'schlechte hinzuzufügen, und was die eine kontrollierte Studie tatsächlich zeigte.',

    commonBelief:
      'Verarbeitetes Essen ist schlecht wegen dem, was hineinkommt — Zusatzstoffe, Zucker, ' +
      'Konservierung. In Maßen ist es kein echtes Problem.',

    sections: [
      {
        heading: 'Was der Begriff tatsächlich meint',
        body: [
          'Verarbeitung ist nicht eine Sache. Erbsen einfrieren ist Verarbeitung. Mehl mahlen ist ' +
            'Verarbeitung. Die NOVA-Klassifikation trennt das nach Grad, und die Kategorie, um die ' +
            'gestritten wird, ist die vierte: industrielle Formulierungen, überwiegend aus ' +
            'Substanzen, die aus Lebensmitteln extrahiert wurden — Stärken, Proteinisolate, ' +
            'modifizierte Öle — plus Zusatzstoffe, die das Ergebnis schmackhaft und haltbar machen.',
          'Das Kennzeichen ist nicht, dass sie per Definition ungesund wären. Es ist, dass sie aus ' +
            'Fraktionen zusammengesetzt sind statt aus Lebensmitteln gemacht — und eine Fraktion ' +
            'ist der Teil eines Lebensmittels, den jemand wollte, getrennt von den Teilen, die er ' +
            'nicht wollte.',
        ],
      },
      {
        heading: 'Das Verdrängungsproblem',
        body: [
          'Der Nährstoffbedarf ist weitgehend fest. Der Appetit wird von Energie gestillt. Beides ' +
            'zusammen heißt: Jede Kalorie aus einem Lebensmittel, das kaum etwas außer Energie ' +
            'trägt, ist Platz, den etwas anderes hätte nutzen können.',
          'Das Mahlen ist der klarste Fall. Nimmt man Keim und Schale von einem Korn, entfernt man ' +
            'rund vier Fünftel seines Magnesiums, das meiste der Ballaststoffe und viel der ' +
            'B-Vitamine. Die Energie bleibt. Die Anreicherung setzt einige davon wieder ein — ' +
            'meist Eisen und ein paar B-Vitamine, weil sie billig und stabil sind — und setzt ' +
            'weder das Magnesium noch die Ballaststoffe noch die mehreren Dutzend Verbindungen ' +
            'wieder ein, die niemand misst.',
          'Deshalb zeigt sich das Muster in nationalen Daten als übergewichtig und unterversorgt ' +
            'zugleich. Es sind zwei getrennte Konten, und nur eines ist im Plus.',
        ],
      },
      {
        heading: 'Die Studie, die das Gespräch verändert hat',
        body: [
          'Die meiste Ernährungsevidenz ist beobachtend, und Beobachtungsdaten können ' +
            'hochverarbeitetes Essen schwer davon trennen, ärmer, gehetzter und gestresster zu ' +
            'sein.',
          'Eine kontrollierte stationäre Studie hat es getrennt. Die Teilnehmenden lebten in einer ' +
            'Forschungsstation und bekamen entweder hochverarbeitete oder minimal verarbeitete ' +
            'Mahlzeiten, abgestimmt auf Kalorien, Zucker, Fett, Ballaststoffe und Natrium, mit der ' +
            'Anweisung, so viel zu essen, wie sie wollten. Auf der hochverarbeiteten Kost aßen sie ' +
            'deutlich mehr — mehrere hundert Kalorien am Tag — und nahmen zu. Auf der anderen ' +
            'nahmen sie ab.',
          'Die Abstimmung ist der wichtige Teil. Etwas am Essen selbst trieb das Mehressen an, ' +
            'unabhängig von seinem Nährwertprofil auf dem Papier. Es ist eine Studie mit wenigen ' +
            'Menschen, und es ist die beste Evidenz, die es gibt.',
        ],
      },
      {
        heading: 'Was folgt, und was nicht',
        body: [
          'Nicht folgt, dass ein Kategorienetikett Ihnen sagt, ob ein Lebensmittel gut ist. ' +
            'Vollkorn-Toastbrot aus dem Supermarkt ist technisch hochverarbeitet und ein völlig ' +
            'vernünftiges Lebensmittel. Bohnen aus der Dose und tiefgekühltes Gemüse sind ' +
            'verarbeitet und gehören zum Besten in jedem Regal.',
          'Es folgt, dass der Anteil mehr zählt als der einzelne Artikel. Wenn mehr als die Hälfte ' +
            'Ihrer Energie aus Formulierungen kommt, hören die Lücken auf, ein Rundungsfehler zu ' +
            'sein, und werden zu dem Muster in den Erhebungsdaten.',
          'Die nützliche Frage lautet daher nicht „ist dieses Lebensmittel verarbeitet", sondern ' +
            '„was verdrängt dieses Lebensmittel". Ein Keks nach einer Mahlzeit verdrängt nichts. ' +
            'Ein halber Tag Energie aus Snacks verdrängt sehr viel.',
        ],
      },
    ],

    claims: {
      'us-energy-share': { what: 'Anteil der US-Kalorien aus hochverarbeiteten Lebensmitteln' },
      'trial-excess': {
        what: 'Mehraufnahme auf hochverarbeiteter Kost',
        note: 'Abgestimmt auf Kalorien, Zucker, Fett, Ballaststoffe und Natrium',
      },
      'nova-definition': { what: 'Die von der Forschung verwendete Klassifikation' },
    },

    practical: [
      {
        title: 'Fragen Sie, was es verdrängt, nicht ob es verarbeitet ist',
        detail:
          'Ein Keks nach dem Essen verdrängt nichts. Ein halber Tag Energie aus Snacks verdrängt ' +
            'ein ganzes Nährstoffprofil.',
      },
      {
        title: 'Vollkorn ist der wirksamste einzelne Tausch',
        detail:
          'Beim Mahlen gehen etwa achtzig Prozent des Magnesiums mitsamt den Ballaststoffen ' +
            'verloren. Keine andere Eins-zu-eins-Änderung bewegt so viel.',
      },
      {
        title: 'Verwechseln Sie angereichert nicht mit wiederhergestellt',
        detail:
          'Anreicherung ersetzt eine Handvoll billiger, stabiler Nährstoffe. Sie setzt nicht ' +
            'wieder ein, was Keim und Schale getragen haben.',
      },
    ],

    seeAlso: ['magnesium', 'fibre', 'folate', 'zinc'],

    sources: {
      'upf-share': 'Hochverarbeitete Lebensmittel und die US-Ernährung — Anteilsanalyse',
      'hall-trial': 'Hochverarbeitete Kost führt zu Mehraufnahme — kontrollierte stationäre Studie',
      nova: 'Die NOVA-Lebensmittelklassifikation — FAO',
    },
  },

  /* ------------------------------------------------- Diät und Defizit */
  'dieting-and-deficit': {
    title: 'Ein Defizit kürzt Nährstoffe, bevor es Fett kürzt',
    short: 'Diät und Defizit',
    lede:
      'Weniger essen heißt weniger von allem essen, und der Bedarf schrumpft nicht mit den ' +
      'Kalorien mit. Unterhalb einer bestimmten Zufuhr hört es auf, eine Frage guter Auswahl zu ' +
      'sein, und wird arithmetisch schwierig.',
    description:
      'Warum die Mikronährstoffzufuhr beim Abnehmen schneller fällt als die Kalorien, wie viel ' +
      'Eiweiß Muskel im Defizit schützt, und wo der Boden liegt.',

    commonBelief:
      'Abnehmen ist eine Frage der Kalorien. Wenn ich die Zahl niedrig genug halte, regelt sich ' +
      'die Zusammensetzung von selbst.',

    sections: [
      {
        heading: 'Die Arithmetik, die niemand macht',
        body: [
          'Wer 2.400 Kalorien isst, hat Platz für eine breite Ernährung. Dieselbe Person bei 1.200 ' +
            'hat halb so viel Platz und identischen Bedarf an Eisen, Calcium, Magnesium, Folat und ' +
            'allem anderen. Nichts an diesem Bedarf hat bemerkt, dass sie abnehmen wollte.',
          'Analysen beliebter Diäten fanden, dass die meisten den Referenzwert für mehrere ' +
            'Nährstoffe verfehlen, wenn man sie so befolgt, wie sie geschrieben sind — nicht weil ' +
            'sie schlecht entworfen wären, sondern weil unterhalb einer bestimmten Energiezufuhr ' +
            'der Platz wirklich knapp wird. Um 1.600 Kalorien herum wird es selbst mit sorgfältiger ' +
            'Auswahl schwierig; darunter braucht es bewusste Arbeit oder Supplemente.',
          'Und die Streichungen sind nicht zufällig. Menschen entfernen die Kategorien, die sie ' +
            'für energiedicht halten — Nüsse, fetten Fisch, Milchprodukte, Vollkorn —, und das ' +
            'sind dieselben Kategorien, die Magnesium, Omega-3, Calcium und B-Vitamine tragen.',
        ],
      },
      {
        heading: 'Was ein Defizit mit dem Muskel macht, und was ihn schützt',
        body: [
          'Das im Defizit verlorene Gewicht ist nicht nur Fett. Ein Teil ist Magermasse, und wie ' +
            'groß dieser Teil ist, hängt davon ab, wie das Defizit geführt wird — vor allem von ' +
            'der Eiweißzufuhr und davon, ob der Muskel überhaupt etwas zu tun bekommt.',
          'Der Eiweißwert, der Magermasse im Defizit schützt, liegt deutlich über dem für den ' +
            'Erhalt, was Menschen verkehrt herum vorkommt. Die Logik: Der Körper sucht jetzt nach ' +
            'Brennstoff, und Muskel ist eine Kandidatenquelle — also muss das Signal, ihn zu ' +
            'behalten, lauter sein. Und Krafttraining ist, was dieses Signal überhaupt bedeutsam ' +
            'macht.',
          'Muskel zu verlieren verschlechtert das Ergebnis außerdem auf eine leicht übersehene ' +
            'Weise: Ein kleinerer Körper mit weniger Muskel verbrennt in Ruhe weniger, sodass ' +
            'dasselbe später wieder zugenommene Gewicht in schlechterer Zusammensetzung ' +
            'zurückkommt, als es gegangen ist.',
        ],
      },
      {
        heading: 'Die Lücken, die zuerst auftauchen',
        body: [
          'Eisen, bei Frauen mit Zyklus, weil der Bedarf hoch ist und die Lebensmittel mit gut ' +
            'verfügbarem Eisen genau die sind, die gestrichen werden.',
          'Calcium, wenn Milchprodukte gehen und nichts nachkommt — was ständig passiert, weil ' +
            'Milchprodukte als energiedichte Kategorie gelesen werden.',
          'Und die fettlöslichen Vitamine, wenn die Fettzufuhr sehr niedrig wird, weil sie Fett ' +
            'brauchen, um überhaupt aufgenommen zu werden. Eine fettfreie Mahlzeit nimmt einen ' +
            'Bruchteil des Vitamin D, E, A und K auf, das in ihr steckt.',
        ],
      },
      {
        heading: 'Eine Anmerkung, wie das mit dem Rest der Seite zusammenhängt',
        body: [
          'Alles oben handelt von einem bewusst und vernünftig geführten Defizit. Es gibt eine ' +
            'andere Lage, in der die Einschränkung kein Plan ist, sondern ein Muster — und dann ist ' +
            'die Arithmetik auf dieser Seite das kleinste Problem.',
          'Wenn die Zahl immer weiter sinkt, wenn ein Tag mit normalem Essen sich wie Versagen ' +
            'anfühlt, oder wenn das Defizit über einen Hunger gehalten wird, der sich nie legt — ' +
            'dann ist das keine Ernährungsfrage und wird nicht mit einer besseren Lebensmittelliste ' +
            'gelöst.',
        ],
      },
    ],

    claims: {
      'micronutrient-floor': {
        what: 'Zufuhr, unter der der Bedarf schwer zu decken ist',
        note: 'Auch bei sorgfältiger Auswahl',
      },
      'protein-in-deficit': {
        what: 'Eiweiß, das Magermasse im Defizit schützt',
        note: 'Höher als für den Erhalt, nicht niedriger',
      },
      'lean-loss-share': {
        what: 'Anteil des Gewichtsverlusts als Magermasse',
        note: 'Schwankt stark mit Eiweiß und Training',
      },
    },

    practical: [
      {
        title: 'Erhöhen Sie das Eiweiß, wenn Sie Kalorien kürzen',
        detail:
          'Es geht hoch, nicht runter. Der Körper sucht Brennstoff und Muskel ist ein Kandidat, ' +
            'also muss das Signal, ihn zu behalten, lauter sein.',
      },
      {
        title: 'Heben Sie dabei etwas',
        detail:
          'Eiweiß ist das Material, Krafttraining ist die Anweisung. Ohne das Zweite ist das ' +
            'Erste weitgehend nur Kalorien.',
      },
      {
        title: 'Lassen Sie etwas Fett in der Mahlzeit',
        detail:
          'Vitamine A, D, E und K brauchen es zur Aufnahme. Eine sehr fettarme Kost lässt sie im ' +
            'Teller statt in Ihnen.',
      },
      {
        title: 'Merken Sie, wenn das Defizit aufgehört hat, ein Plan zu sein',
        detail:
          'Eine Zahl, die immer weiter sinkt, oder ein normaler Tag, der sich wie Versagen ' +
            'anfühlt, ist ein anderes Problem als das, was diese Seite beschreibt.',
      },
    ],

    seeAlso: ['protein', 'iron', 'calcium', 'vitamin-d'],

    sources: {
      'deficit-micros': 'Mikronährstoffdeckung populärer Reduktionsdiäten',
      'helms-deficit': 'Eiweißzufuhr zum Erhalt der Magermasse bei Energierestriktion',
    },
  },

  /* ------------------------------------------ Pflanzlich und Training */
  'plant-based-and-training': {
    title: 'Pflanzlich trainieren funktioniert, und vier Nährstoffe brauchen einen Plan',
    short: 'Pflanzlich und Training',
    lede:
      'Der alte Streit ging um Eiweiß und lag größtenteils daneben. Die wirkliche Liste ist kürzer, ' +
      'genauer und wird weniger diskutiert — und ein Punkt darauf ist wirklich nicht verhandelbar.',
    description:
      'Was bei pflanzlicher Ernährung im harten Training tatsächlich Aufmerksamkeit braucht: ' +
      'Eiweißmenge und Leucin, Eisen- und Zinkaufnahme, B12 und der Kreatin-Ausgangswert.',

    commonBelief:
      'Ohne tierisches Eiweiß baut man keinen Muskel auf — oder, von der anderen Seite, eine ' +
      'pflanzliche Ernährung braucht überhaupt keine besondere Aufmerksamkeit.',

    sections: [
      {
        heading: 'Eiweiß: eine Mengenfrage, keine Qualitätsfrage',
        body: [
          'Beide Hälften des alten Streits waren überzogen. Pflanzliche Proteine sind in keinem ' +
            'nützlichen Sinn unvollständig — jedes Pflanzenprotein enthält alle zwanzig ' +
            'Aminosäuren —, aber sie tragen weniger Leucin pro Gramm, und Leucin ist der Auslöser.',
          'Die Folge ist arithmetisch statt mystisch: Wer pflanzlich isst und Kraft trainiert, ' +
            'braucht etwas mehr Gesamteiweiß, um dieselbe Leucin-Schwelle pro Mahlzeit zu ' +
            'erreichen. Soja, Linsen und Seitan kommen näher heran als die meisten; Quellen ' +
            'innerhalb einer Mahlzeit zu kombinieren schließt den Rest.',
          'Die Vorstellung, Proteine müssten in derselben Mahlzeit kombiniert werden, wurde vor ' +
            'Jahrzehnten zurückgezogen. Der Körper hält einen Aminosäurepool über Stunden. Bohnen ' +
            'mittags und Reis abends genügt.',
        ],
      },
      {
        heading: 'Eisen und Zink: der Aufnahmeabschlag',
        body: [
          'Das ist der Teil, der mehr zählt als das Eiweiß und weniger besprochen wird. Eisen aus ' +
            'Pflanzen ist Nicht-Häm-Eisen, wird zu einem Bruchteil der Rate von Häm-Eisen ' +
            'aufgenommen und hängt stark davon ab, was sonst auf dem Teller liegt. Zink wird von ' +
            'Phytat gebunden, das reichlich in genau den Vollkornprodukten und Hülsenfrüchten ' +
            'steckt, auf denen eine pflanzliche Ernährung aufgebaut ist.',
          'Deshalb tragen die offiziellen Empfehlungen Multiplikatoren statt derselben Zahl — ein ' +
            'Eingeständnis, dass gleiche Zufuhr nicht gleiche Aufnahme bedeutet.',
          'Die Hebel sind praktisch und wirksam. Vitamin C in derselben Mahlzeit vervielfacht die ' +
            'Nicht-Häm-Eisenaufnahme. Einweichen, Keimen, Fermentieren und Sauerteig senken das ' +
            'Phytat deutlich. Tee und Kaffee zur Mahlzeit arbeiten kräftig gegen Sie.',
        ],
      },
      {
        heading: 'B12: das eine ohne Umweg',
        body: [
          'Keine Pflanze bildet B12. Kein Tier auch — Bakterien bilden es, Tiere reichern es an. ' +
            'Es gibt kein pflanzliches Lebensmittel, das es in nutzbarer Form liefert.',
          'Spirulina, Nori und Fermentiertes werden häufig als Quellen genannt. Das meiste darin ' +
            'sind Analoga, die den Rezeptor besetzen, ohne die Arbeit zu tun, und einiges spricht ' +
            'dafür, dass sie den Status eher verschlechtern.',
          'Das ist also ein Präparat oder angereicherte Lebensmittel, und es ist keine Frage der ' +
            'Ernährungsvorliebe. Die Folgen einer langen Lücke sind neurologisch und können ' +
            'bleiben — und sie können entstehen, während das Blutbild noch normal aussieht.',
        ],
      },
      {
        heading: 'Kreatin: ein niedrigerer Ausgangspunkt',
        body: [
          'Nahrungskreatin kommt aus Fleisch und Fisch, Vegetarier und Veganer starten also mit ' +
            'niedrigeren Muskelspeichern. Das ist messbar und konsistent.',
          'Es heißt auch, dass Supplementieren mehr Raum hat zu wirken — die Antwort bei Menschen ' +
            'mit niedrigem Ausgangswert fällt tendenziell größer aus. Das ist eine der wenigen ' +
            'Stellen, an denen ein Präparat bei pflanzlicher Ernährung eher zu erwägen ist als ' +
            'ohne, was eine erfreuliche Umkehrung der üblichen Geschichte ist.',
        ],
      },
    ],

    claims: {
      'protein-uplift': { what: 'Zusätzliches Eiweiß, um dieselbe Leucinmenge zu erreichen' },
      'iron-multiplier': { what: 'Eisenbedarf, gegenüber der Zufuhrempfehlung' },
      'zinc-uplift': { what: 'Zinkbedarf bei hohem Phytatanteil' },
      'b12-required': { what: 'Vitamin B12', note: 'Keine Frage der Vorliebe' },
      'creatine-baseline': {
        what: 'Muskelkreatin zu Beginn',
        note: 'Weshalb Supplementieren wirksamer ist',
      },
    },

    practical: [
      {
        title: 'B12 zuerst, und dauerhaft geklärt',
        detail:
          'Präparat oder angereicherte Lebensmittel. Von allem hier ist das der einzige Punkt, bei ' +
            'dem ein Fehler Schaden anrichtet, der nicht vollständig zurückgeht.',
      },
      {
        title: 'Vitamin C auf die Eisenmahlzeit',
        detail:
          'Es vervielfacht die Nicht-Häm-Aufnahme und ist der größte kostenlose Hebel, den diese ' +
            'Ernährung hat.',
      },
      {
        title: 'Einweichen, keimen, fermentieren, säuern',
        detail:
          'Alle vier senken das Phytat deutlich — und das steht zwischen Ihnen und dem Zink und ' +
            'Eisen, das ohnehin auf dem Teller liegt.',
      },
      {
        title: 'Rücken Sie den Tee von der Mahlzeit weg',
        detail:
          'Gerbstoffe können die Eisenaufnahme halbieren. Eine Stunde vorher oder nachher macht ' +
            'das meiste davon rückgängig.',
      },
    ],

    seeAlso: ['protein', 'iron', 'zinc', 'vitamin-b12'],

    sources: {
      'ods-iron-pb': 'NIH Office of Dietary Supplements — Eisen',
      'ods-zinc-pb': 'NIH Office of Dietary Supplements — Zink',
      'ods-b12-pb': 'NIH Office of Dietary Supplements — Vitamin B12',
      'plant-protein': 'Pflanzliches Protein und Muskelproteinsynthese — eine Übersichtsarbeit',
      'plant-creatine': 'Muskelkreatin bei Vegetariern und Mischköstlern',
    },
  },
};

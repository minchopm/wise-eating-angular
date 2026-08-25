import { LocalisedArticle } from '../types';

/**
 * Die Mineralstoff-Artikel auf Deutsch.
 *
 * Zahlen stehen nicht hier — sie liegen in content/nutrient-facts.ts und
 * werden erst beim Rendern über eine ID eingesetzt. Alles in dieser Datei ist
 * Sprache, und genau das ersetzt eine Übersetzung.
 */
export const MINERALS_DE: Readonly<Record<string, LocalisedArticle>> = {
  /* ------------------------------------------------------------ magnesium */
  magnesium: {
    name: 'Magnesium',
    title: 'Magnesium: der Mineralstoff, der den meisten unbemerkt fehlt',
    lede:
      'Über dreihundert Enzymreaktionen brauchen ihn, der größte Teil liegt im Knochen, wo ihn ' +
      'keine Blutprobe sieht, und rund die Hälfte der Erwachsenen nimmt weniger auf als ' +
      'empfohlen. Hier steht, wo er zu finden ist.',
    description:
      'Was Magnesium im Körper tut, wie viel man in welchem Alter braucht und welche Lebensmittel ' +
      'am meisten davon enthalten — berechnet aus USDA-Daten, pro 100 g.',

    whatItDoes: [
      'Magnesium ist ein Cofaktor: Es erledigt die Arbeit nicht selbst, sondern ist das, was ' +
        'mehrere hundert Enzyme brauchen, um ihre zu erledigen. Dazu gehören die Enzyme, die ' +
        'Eiweiß aufbauen, die DNA kopieren und die aus Nahrung nutzbare Energie machen — deshalb ' +
        'zeigt sich ein Mangel als diffuse Müdigkeit und nicht als etwas Bestimmtes.',
      'Am Muskel steht Magnesium dem Calcium gegenüber. Calcium gibt der Muskelfaser das Signal ' +
        'zur Kontraktion; Magnesium gehört zu dem, was sie wieder loslassen lässt. Dasselbe Paar ' +
        'arbeitet im Nervengewebe und in den Wänden der Blutgefäße.',
      'Etwa 60 % des Magnesiums im erwachsenen Körper stecken im Knochen, das meiste Übrige in ' +
        'den Zellen, weniger als 1 % im Blut. Diese letzte Zahl wiegt schwerer, als sie klingt: ' +
        'Ein normaler Magnesiumwert im Blut schließt leere Speicher nicht aus, denn der Körper ' +
        'löst Magnesium aus dem Knochen, um den Blutspiegel konstant zu halten.',
    ],

    intake: {
      'infant-0-6': {
        who: 'Säuglinge, 0–6 Monate',
        note: 'Schätzwert, aus der Milch',
      },
      'infant-7-12': { who: 'Säuglinge, 7–12 Monate', note: 'Schätzwert' },
      'child-1-3': { who: 'Kinder, 1–3 Jahre' },
      'child-4-8': { who: 'Kinder, 4–8 Jahre' },
      'child-9-13': { who: 'Kinder, 9–13 Jahre' },
      'men-19-30': { who: 'Männer, 19–30' },
      'men-31-plus': { who: 'Männer, ab 31' },
      'women-19-30': { who: 'Frauen, 19–30' },
      'women-31-plus': { who: 'Frauen, ab 31' },
      pregnancy: { who: 'Schwangerschaft', note: 'Je nach Alter' },
    },
    intakeNote:
      'Das sind empfohlene Zufuhrmengen, außer wo anders vermerkt: Für Säuglinge reicht die ' +
      'Datenlage nicht für eine Empfehlung, deshalb steht dort ein Schätzwert. Die Prozentangaben ' +
      'in der Tabelle darunter beziehen sich auf den Etikettenwert von 420 mg — eine einzige Zahl ' +
      'für alle ab vier Jahren und damit für die meisten Leser großzügig bemessen.',

    foodsIntro:
      'Magnesium sitzt im Chlorophyll, grüne Blätter enthalten es also. Kerne, Nüsse und ' +
      'Hülsenfrüchte enthalten pro Bissen deutlich mehr, weil sie Mineralstoffe für eine Pflanze ' +
      'einlagern, die es noch nicht gibt.',

    helps: [
      'Über den Tag verteilt essen statt auf einmal — die Aufnahme sinkt mit steigender Menge',
      'Vollkorn statt Auszugsmehl: Beim Mahlen fällt weg, wo das Magnesium sitzt',
      'Hülsenfrüchte und Getreide einweichen oder keimen lassen, was Phytat abbaut',
    ],
    hinders: [
      'Sehr hoch dosierte Zinkpräparate, die um dieselbe Aufnahme konkurrieren',
      'Phytat in nicht eingeweichtem Vollkorn und Hülsenfrüchten, das Magnesium im Darm bindet',
      'Chronischer Alkoholkonsum und manche Diuretika, die den Verlust über den Urin erhöhen',
    ],
    absorptionNote:
      'Aus Lebensmitteln werden etwa 30–40 % aufgenommen, und der Anteil steigt, wenn die ' +
      'Speicher niedrig sind — der Körper tut also das Vernünftige. Magnesiumoxid aus Präparaten ' +
      'wird schlecht aufgenommen, verglichen mit Citrat oder Glycinat; wenn ärztlich ein Präparat ' +
      'empfohlen wurde, lohnt die Frage nach der Verbindung.',

    shortfall: [
      'Wer überwiegend Auszugsmehl isst — beim Mahlen gehen rund 80 % verloren',
      'Ältere Menschen, die weniger aufnehmen und mehr ausscheiden',
      'Menschen mit Typ-2-Diabetes, Zöliakie oder Morbus Crohn',
      'Langzeitanwender von Protonenpumpenhemmern',
    ],

    recipe: {
      title: 'Püree aus Kürbiskernen und Spinat',
      serves: 'Ab 8 Monaten, und in größerer Menge für den Rest des Tisches',
      ingredients: [
        '2 EL Kürbiskerne, ungesalzen',
        '2 große Handvoll Spinat, gewaschen',
        '1 kleine Kartoffel, geschält und gewürfelt',
        '1 TL Olivenöl',
        '3–4 EL warmes Wasser, Muttermilch oder Säuglingsnahrung zum Verdünnen',
      ],
      steps: [
        {
          title: 'Die Kerne rösten',
          detail:
            'Trockene Pfanne, mittlere Hitze, drei bis vier Minuten unter ständigem Bewegen. ' +
            'Fertig sind sie, wenn sie nussig riechen und die ersten aufspringen. Vollständig ' +
            'abkühlen lassen — warme Kerne werden zu Paste statt zu Pulver.',
        },
        {
          title: 'Fein mahlen',
          detail:
            'In der Gewürzmühle oder einem kleinen Mixer zu feinem Pulver. Für ein Baby ist das ' +
            'nicht optional: Ganze Kerne sind bis weit nach dem zweiten Geburtstag eine ' +
            'Erstickungsgefahr.',
        },
        {
          title: 'Die Kartoffel garen',
          detail: 'In ungesalzenem Wasser 12–15 Minuten köcheln, bis das Messer leicht durchgeht.',
        },
        {
          title: 'Den Spinat zusammenfallen lassen',
          detail:
            'Für die letzten 60 Sekunden dazugeben. Länger, und der größte Teil des Folats ist ' +
            'im Wasser statt im Essen.',
        },
        {
          title: 'Pürieren',
          detail:
            'Abgießen, etwas Kochwasser aufheben. Kartoffel und Spinat mit dem Öl pürieren, dann ' +
            'die gemahlenen Kerne unterrühren und auf die gewohnte Konsistenz verdünnen.',
        },
      ],
      note:
        'Kerne wie jedes andere neue Lebensmittel einführen: einzeln, morgens, nicht zusammen mit ' +
        'etwas anderem Neuem. Vorher mit der Kinderärztin oder dem Kinderarzt sprechen, besonders ' +
        'wenn es in der Familie Allergien gibt.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Magnesium',
      dri: 'Dietary Reference Intakes für Calcium, Phosphor, Magnesium, Vitamin D und Fluorid',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ----------------------------------------------------------------- iron */
  iron: {
    name: 'Eisen',
    title: 'Eisen: warum Linsen und Spinat nicht dasselbe Eisen sind',
    lede:
      'Eisen aus Pflanzen und Eisen aus Fleisch sind chemisch verschieden, und der Darm behandelt ' +
      'sie verschieden. Diesen Unterschied zu kennen ist der Unterschied zwischen viel Eisen ' +
      'essen und etwas Eisen aufnehmen.',
    description:
      'Häm- und Nicht-Häm-Eisen, wie viel man in welchem Alter braucht, was die Aufnahme fördert ' +
      'und blockiert, und die eisenreichsten Lebensmittel — aus USDA-Daten, pro 100 g.',

    whatItDoes: [
      'Der größte Teil des Eisens im Körper hat eine Aufgabe: Es sitzt im Zentrum des Hämoglobins ' +
        'und hält ein Sauerstoffmolekül fest, damit ein rotes Blutkörperchen es von der Lunge zum ' +
        'Muskel bringen kann. Fehlt Eisen, kommt weniger Sauerstoff an — deshalb fällt zuerst ' +
        'auf, dass eine Treppe außer Atem bringt, die vorher keine war.',
      'Ein kleinerer Teil steckt im Myoglobin, das Sauerstoff im Muskel selbst speichert, und in ' +
        'Enzymen der Energiegewinnung. Eisen wird außerdem für die Enzyme gebraucht, die Myelin ' +
        'und mehrere Neurotransmitter aufbauen — deshalb wird der Eisenstatus in den ersten zwei ' +
        'Lebensjahren so ernst genommen.',
      'Der Körper kann Eisen nicht gezielt ausscheiden. Er reguliert über die Aufnahme, und das ' +
        'schneidet in beide Richtungen: Deshalb steigt die Aufnahme bei Mangel — und deshalb sind ' +
        'nicht verordnete Präparate eine wirklich schlechte Idee.',
    ],

    intake: {
      'infant-0-6': {
        who: 'Säuglinge, 0–6 Monate',
        note: 'Schätzwert; Speicher von Geburt an',
      },
      'infant-7-12': {
        who: 'Säuglinge, 7–12 Monate',
        note: 'Der steilste Sprung der Tabelle',
      },
      'child-1-3': { who: 'Kinder, 1–3 Jahre' },
      'child-4-8': { who: 'Kinder, 4–8 Jahre' },
      'men-19-50': { who: 'Männer, 19–50' },
      'women-19-50': {
        who: 'Frauen, 19–50',
        note: 'Verluste durch die Menstruation',
      },
      'women-51-plus': { who: 'Frauen, ab 51' },
      pregnancy: { who: 'Schwangerschaft' },
      vegetarian: {
        who: 'Vegetarisch und vegan',
        note: 'Den Wert für Alter und Geschlecht multiplizieren — pflanzliches Eisen wird schlechter aufgenommen',
      },
    },
    intakeNote:
      'Der Sprung im siebten Monat ist der wichtige. Ein Kind kommt mit einem Eisenspeicher zur ' +
      'Welt, der etwa um den sechsten Monat aufgebraucht ist — genau dann, wenn Milch allein den ' +
      'Bedarf nicht mehr deckt. Deshalb sind eisenreiche Beikostgerichte eine Priorität und kein ' +
      'nettes Extra.',

    foodsIntro:
      'Sortiert nach Gesamteisen pro 100 g. Lesen Sie die Liste mit dem nächsten Abschnitt im ' +
      'Kopf: Die tierischen Lebensmittel geben ihr Eisen viel bereitwilliger ab, die Reihenfolge ' +
      'hier ist also nicht die Reihenfolge dessen, was tatsächlich im Blut ankommt.',

    helps: [
      'Vitamin C in derselben Mahlzeit — es kann die Aufnahme pflanzlichen Eisens vervielfachen',
      'Etwas Fleisch, Geflügel oder Fisch neben pflanzlichen Quellen',
      'Hülsenfrüchte und Getreide einweichen, keimen lassen oder fermentieren',
      'Saures in gusseisernen Pfannen garen, was tatsächlich etwas abgibt',
    ],
    hinders: [
      'Tee und Kaffee zur Mahlzeit — Tannine können die Aufnahme mehr als halbieren',
      'Calcium zur selben Zeit, ob aus Milchprodukten oder als Präparat',
      'Phytat in nicht eingeweichtem Vollkorn, Hülsenfrüchten und Nüssen',
      'Langfristige Säureblocker, denn Magensäure gehört zur Freisetzung des Eisens',
    ],
    absorptionNote:
      'Das ist der ganze Punkt dieses Artikels. Häm-Eisen aus Fleisch, Geflügel und Fisch wird zu ' +
      'etwa 15–35 % aufgenommen und kaum davon beeinflusst, was sonst auf dem Teller liegt. ' +
      'Nicht-Häm-Eisen aus Pflanzen, Eiern und angereicherten Lebensmitteln wird zu etwa 2–20 % ' +
      'aufgenommen — und diese Spanne bestimmt fast ausschließlich die Begleitung. Linsen und ' +
      'Spinat sind keine schlechten Quellen; sie sind Quellen, die einen Spritzer Zitrone ' +
      'brauchen und keinen Tee.',

    shortfall: [
      'Säuglinge ab etwa sechs Monaten, wenn der mitgebrachte Speicher endet',
      'Menstruierende Frauen, besonders bei starken Blutungen',
      'Schwangere, deren Bedarf um die Hälfte steigt',
      'Vegetarier und Veganer, die etwa das 1,8-Fache brauchen',
      'Ausdauersportler, durch Hämolyse beim Aufsetzen des Fußes und Verluste über den Schweiß',
    ],

    recipe: {
      title: 'Püree aus roten Linsen und Paprika',
      serves: 'Ab 7 Monaten — eine Eisenquelle mit eingebautem Vitamin C',
      ingredients: [
        '3 EL rote Linsen, gewaschen bis das Wasser klar bleibt',
        '1 kleine rote Paprika, entkernt und gewürfelt',
        '1 kleine Karotte, geschält und gewürfelt',
        '150 ml ungesalzenes Wasser oder Brühe',
        '1 TL Olivenöl',
        'Etwas Zitrone, zum Schluss',
      ],
      steps: [
        {
          title: 'Die Linsen richtig waschen',
          detail:
            'Im Sieb unter kaltem Wasser, bis es klar und nicht mehr trüb abläuft. Das spült ' +
            'Oberflächenstärke und einen Teil des Phytats weg, das sonst das Eisen binden würde.',
        },
        {
          title: 'Köcheln',
          detail:
            'Linsen, Karotte und Wasser in einen kleinen Topf. Aufkochen, dann 15 Minuten leise ' +
            'köcheln, Deckel halb auf.',
        },
        {
          title: 'Die Paprika spät zugeben',
          detail:
            'Nur für die letzten 5 Minuten. Vitamin C zerfällt mit Hitze und Zeit, und die ' +
            'Paprika ist genauso wegen des Vitamin C hier wie wegen des Geschmacks.',
        },
        {
          title: 'Pürieren und abrunden',
          detail:
            'Mit dem Öl glatt pürieren, dann die Zitrone abseits der Hitze unterrühren. Mit etwas ' +
            'abgekühltem Kochwasser verdünnen, falls es dicker ist als gewohnt.',
        },
      ],
      note:
        'Zeitlich getrennt von einer Milchmahlzeit geben, nicht zusammen — das Calcium der Milch ' +
        'konkurriert mit dem Eisen. Eine Stunde Abstand genügt. Wie immer: vor neuen Lebensmitteln ' +
        'mit der Kinderärztin oder dem Kinderarzt sprechen.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Eisen',
      dri: 'Dietary Reference Intakes für Vitamin A, Vitamin K, Eisen, Zink und weitere',
      fdc: 'USDA FoodData Central',
    },
  },

  /* -------------------------------------------------------------- calcium */
  calcium: {
    name: 'Calcium',
    title: 'Calcium: ein Konto, auf das man nur einzahlen kann, solange es offen ist',
    lede:
      'Fast alles davon steckt im Skelett, und das Skelett nimmt etwa bis Ende zwanzig ' +
      'Einzahlungen an. Was bis dahin aufgebaut ist, wird den Rest des Lebens ausgegeben.',
    description:
      'Was Calcium außer Knochen noch tut, wie viel man in welchem Alter braucht, warum Vitamin D ' +
      'über die Aufnahme entscheidet, und die calciumreichsten Lebensmittel — aus USDA-Daten.',

    whatItDoes: [
      'Rund 99 % des Calciums im Körper sind Baumaterial — es macht Knochen und Zähne fest. Das ' +
        'restliche eine Prozent tut etwas Dringenderes: Jede Muskelkontraktion, jedes Nervensignal ' +
        'und jeder Schritt der Blutgerinnung braucht Calciumionen in sehr genauer Konzentration.',
      'Dieses eine Prozent wird kompromisslos verteidigt. Sinkt der Calciumspiegel im Blut, steigt ' +
        'das Parathormon und der Körper löst Knochen auf, um ihn wieder anzuheben. Deshalb sagt ' +
        'ein Blutwert fast nichts über die Zufuhr aus: Er bleibt normal, bis das Skelett jahrelang ' +
        'dafür bezahlt hat.',
      'Knochenmasse wird durch Kindheit und Jugend aufgebaut, erreicht zwischen Mitte zwanzig und ' +
        'dreißig ihren Höchststand und nimmt danach langsam ab. Die Jugendjahre sind die größte ' +
        'Einzahlung, die je gemacht wird — deshalb liegt die Empfehlung für eine Vierzehnjährige ' +
        'höher als für ihre Eltern.',
    ],

    intake: {
      'infant-0-6': { who: 'Säuglinge, 0–6 Monate', note: 'Schätzwert' },
      'infant-7-12': { who: 'Säuglinge, 7–12 Monate', note: 'Schätzwert' },
      'child-1-3': { who: 'Kinder, 1–3 Jahre' },
      'child-4-8': { who: 'Kinder, 4–8 Jahre' },
      'teen-9-18': {
        who: '9–18 Jahre',
        note: 'Der höchste Wert der Tabelle, und das mit Grund',
      },
      'adults-19-50': { who: 'Erwachsene, 19–50' },
      'men-51-70': { who: 'Männer, 51–70' },
      'women-51-plus': {
        who: 'Frauen, ab 51',
        note: 'Nach der Menopause beschleunigt sich der Abbau',
      },
      'age-71-plus': { who: 'Erwachsene, ab 71' },
    },
    intakeNote:
      'Mehr ist nicht besser. Oberhalb von etwa 2.000–2.500 mg täglich aus Essen und Präparaten ' +
      'zusammen verschwindet der Nutzen und das Risiko für Nierensteine steigt. Calcium ist ein ' +
      'Nährstoff, dessen sinnvoller Bereich nach oben wie nach unten begrenzt ist.',

    foodsIntro:
      'Milchprodukte führen die Menge an, nicht aber die Aufnahme: Das Calcium in oxalatarmem ' +
      'Grün wie Grünkohl und Pak Choi wird etwa doppelt so gut aufgenommen wie das aus Milch. ' +
      'Spinat ist die berühmte Ausnahme — calciumreich, und fast nichts davon verfügbar.',

    helps: [
      'Vitamin D, ohne das der Darm nur einen Bruchteil aufnimmt',
      'Auf Mahlzeiten verteilen — am besten wirkt es in Portionen bis etwa 500 mg',
      'Oxalatarmes Grün: Grünkohl, Pak Choi, Brokkoli, Brunnenkresse',
      'Fermentieren und Einweichen, was Phytat reduziert',
    ],
    hinders: [
      'Oxalat, weshalb Spinat, Rhabarber und Mangold sehr wenig abgeben',
      'Sehr hohe Natriumzufuhr, die den Calciumverlust über den Urin erhöht',
      'Viel Koffein und Alkohol, in geringem Maß',
      'Gleichzeitige Einnahme mit einem Eisenpräparat — beides blockiert sich gegenseitig',
    ],
    absorptionNote:
      'Die Aufnahme liegt bei etwa 30 % und sinkt mit steigender Einzelmenge — das ist das ' +
      'Argument für Verteilen statt einer großen Tablette. Sie sinkt außerdem mit dem Alter: Ein ' +
      'älterer Mensch nimmt aus demselben Glas Milch deutlich weniger auf als ein Jugendlicher, ' +
      'was mit ein Grund ist, warum die Empfehlung ab siebzig wieder steigt.',

    shortfall: [
      'Jugendliche, die am meisten brauchen und oft am wenigsten Milch trinken',
      'Frauen nach der Menopause',
      'Wer Milchprodukte meidet, ohne sie durch angereicherte Alternativen zu ersetzen',
      'Menschen mit Laktoseintoleranz, die Milchprodukte gestrichen statt gewechselt haben',
      'Wer langfristig Kortikosteroide einnimmt',
    ],

    recipe: {
      title: 'Geschmorter Grünkohl mit weißen Bohnen und Zitrone',
      serves: 'Zwei als Beilage, etwa zwanzig Minuten',
      ingredients: [
        '250 g Grünkohl, Stiele entfernt, Blätter gezupft',
        '1 Dose weiße Bohnen, abgespült',
        '2 Knoblauchzehen, in Scheiben',
        '2 EL Olivenöl',
        '100 ml Wasser oder Brühe',
        'Abrieb und Saft einer halben Zitrone',
        'Schwarzer Pfeffer',
      ],
      steps: [
        {
          title: 'Die Stiele abziehen',
          detail:
            'Den Stiel unten festhalten und das Blatt mit der anderen Hand abziehen. Die Stiele ' +
            'sind essbar, brauchen aber dreimal so lange — und dieses Gericht ist kurz.',
        },
        {
          title: 'Den Knoblauch weich werden lassen',
          detail:
            'Olivenöl in einer weiten Pfanne bei kleiner Hitze, Knoblauch zwei Minuten, bis er ' +
            'duftet und kaum Farbe hat. Gebräunter Knoblauch wird bitter, und hier ist nichts, ' +
            'was das überdeckt.',
        },
        {
          title: 'Den Grünkohl schmoren',
          detail:
            'Blätter und Wasser dazu, Deckel drauf, acht bis zehn Minuten bei mittlerer Hitze, ' +
            'bis der Kohl weich, aber noch grün ist. Oliv gewordener Grünkohl hat verloren, was ' +
            'ihn interessant machte.',
        },
        {
          title: 'Abrunden',
          detail:
            'Bohnen zum Erwärmen dazu, dann Zitronenabrieb und -saft abseits der Hitze. Pfeffer, ' +
            'und kein Salz, bevor Sie probiert haben — Dosenbohnen bringen eigenes mit.',
        },
      ],
      note:
        'Grünkohl ist oxalatarm, und darum geht es: Sein Calcium wird etwa doppelt so gut ' +
        'aufgenommen wie das aus Spinat. Die Zitrone ist nicht nur Geschmack — die Säure hilft ' +
        'auch dem Eisen in den Bohnen.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Calcium',
      dri: 'Dietary Reference Intakes für Calcium und Vitamin D',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ----------------------------------------------------------------- zinc */
  zinc: {
    name: 'Zink',
    title: 'Zink: das merkt man am Geschmackssinn',
    lede:
      'Der Körper legt praktisch keinen Vorrat an, die Zufuhr muss also stetig sein statt ' +
      'gelegentlich. Deshalb ist ein abgestumpfter Geschmackssinn eines der frühesten Zeichen ' +
      'dafür, dass die Zufuhr länger zu niedrig war.',
    description:
      'Was Zink für Immunsystem, Wundheilung und Geschmack tut, wie viel man braucht, warum ' +
      'Phytat entscheidet, und die zinkreichsten Lebensmittel — aus USDA-Daten.',

    whatItDoes: [
      'Zink ist auf eine Weise strukturell, wie es die wenigsten Mineralstoffe sind. Hunderte ' +
        'Proteine falten sich um ein Zinkion, um ihre Form zu halten — die bekanntesten sind die ' +
        'Zinkfinger, mit denen Transkriptionsfaktoren die DNA greifen. Ohne Zink arbeiten diese ' +
        'Proteine nicht bloß langsamer; sie entstehen gar nicht.',
      'Es ist außerdem zentral für Immunfunktion und Wundheilung — beides hängt an schnell ' +
        'teilenden Zellen. Gewebe mit hohem Umsatz, also Darmschleimhaut, Haut, Immunzellen und ' +
        'Geschmacksknospen, spürt einen Mangel zuerst.',
      'Einen nennenswerten Zinkspeicher gibt es nicht. Anders als Eisen, das der Körper hortet, ' +
        'muss Zink mehr oder weniger laufend ankommen, und der Status fällt innerhalb von Wochen.',
    ],

    intake: {
      'infant-0-6': { who: 'Säuglinge, 0–6 Monate', note: 'Schätzwert' },
      'infant-7-12': { who: 'Säuglinge, 7–12 Monate' },
      'child-1-3': { who: 'Kinder, 1–3 Jahre' },
      'child-4-8': { who: 'Kinder, 4–8 Jahre' },
      'child-9-13': { who: 'Kinder, 9–13 Jahre' },
      'men-14-plus': { who: 'Männer, ab 14' },
      'women-19-plus': { who: 'Frauen, ab 19' },
      pregnancy: { who: 'Schwangerschaft' },
      breastfeeding: { who: 'Stillzeit' },
    },
    intakeNote:
      'Vegetarier brauchen unter Umständen bis zu 50 % mehr als diese Werte. Das ist kein ' +
      'Sicherheitsaufschlag, sondern der Phytatgehalt einer pflanzenbetonten Ernährung, der Zink ' +
      'im Darm bindet und die Verfügbarkeit halbieren kann.',

    foodsIntro:
      'Austern liegen so weit vorn, dass sie den Maßstab verzerren — eine Portion deckt mehrere ' +
      'Tage. Darunter folgen rotes Fleisch, Meeresfrüchte, Kerne und Hülsenfrüchte, in dieser ' +
      'Reihenfolge der Verfügbarkeit statt der Menge.',

    helps: [
      'Tierisches Eiweiß in derselben Mahlzeit, das die Aufnahme aus allem darauf verbessert',
      'Einweichen, Keimen, Fermentieren und Säuern — alles senkt Phytat deutlich',
      'Sauerteig statt ungesäuertem Brot, aus demselben Grund',
    ],
    hinders: [
      'Phytat in unverarbeitetem Vollkorn und Hülsenfrüchten, der größte einzelne Hemmer',
      'Hoch dosierte Eisenpräparate, gleichzeitig und auf nüchternen Magen',
      'Sehr hohe Calciumzufuhr, in geringem Maß',
      'Chronischer Durchfall oder chronisch-entzündliche Darmerkrankungen',
    ],
    absorptionNote:
      'Das Verhältnis von Phytat zu Zink sagt die Aufnahme besser voraus als der Zinkgehalt ' +
      'selbst. Deshalb sind dieselben Milligramm aus Rindfleisch und aus Vollkornbrot nicht ' +
      'dasselbe — und deshalb stellt sich heraus, dass traditionelle Zubereitung, Bohnen über ' +
      'Nacht einweichen und Brot säuern, nebenbei echte ernährungsphysiologische Arbeit geleistet ' +
      'hat.',

    shortfall: [
      'Vegetarier und Veganer, über das Phytat statt über die Menge',
      'Ältere Menschen, durch niedrigere Zufuhr und schlechtere Aufnahme zugleich',
      'Menschen mit Morbus Crohn, Zöliakie oder chronischem Durchfall',
      'Menschen mit Sichelzellkrankheit',
      'Starke Trinker, durch schlechtere Aufnahme und höhere Ausscheidung',
    ],

    recipe: {
      title: 'Rindfleisch-Sofrito mit Kürbiskernen',
      serves: 'Zwei, etwa fünfundzwanzig Minuten',
      ingredients: [
        '250 g Rinderhackfleisch',
        '3 EL Kürbiskerne',
        '1 Zwiebel, fein gewürfelt',
        '1 rote Paprika, gewürfelt',
        '2 Knoblauchzehen, zerdrückt',
        '1 TL geräuchertes Paprikapulver',
        '1 EL Olivenöl',
        '1 Dose gehackte Tomaten',
      ],
      steps: [
        {
          title: 'Zuerst die Kerne rösten',
          detail:
            'Trockene Pfanne, drei Minuten, dann herausnehmen. Vor dem Fleisch, damit die Pfanne ' +
            'sauber ist und die Kerne nicht im Fett dämpfen.',
        },
        {
          title: 'Das Hackfleisch richtig anbraten',
          detail:
            'Hohe Hitze, eine Lage, und zwei Minuten in Ruhe lassen, bevor gerührt wird. Eine ' +
            'überfüllte Pfanne macht es grau, und graues Hack hat nichts von dem Geschmack, den ' +
            'die Röstung erzeugt.',
        },
        {
          title: 'Das Sofrito aufbauen',
          detail:
            'Fleisch heraus, Hitze runter, Zwiebel und Paprika acht Minuten weich und süß werden ' +
            'lassen. Knoblauch und Paprikapulver erst in der letzten Minute — Paprikapulver ' +
            'verbrennt schnell und wird bitter.',
        },
        {
          title: 'Schmoren',
          detail:
            'Tomaten und das Fleisch zurück, fünfzehn Minuten leise köcheln. Die Kerne erst bei ' +
            'Tisch darüberstreuen, damit sie knusprig bleiben.',
        },
      ],
      note:
        'Rindfleisch und Kerne zusammen ist der Punkt: Das tierische Eiweiß verbessert, wie viel ' +
        'Zink aus den Kernen aufgenommen wird, die für sich genommen vom Phytat gebremst werden.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Zink',
      dri: 'Dietary Reference Intakes für Vitamin A, Vitamin K, Eisen, Zink und weitere',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ------------------------------------------------------------ potassium */
  potassium: {
    name: 'Kalium',
    title: 'Kalium: die andere Hälfte der Salzdebatte',
    lede:
      'Vierzig Jahre lang hat die Gesundheitspolitik gesagt, man solle weniger Natrium essen. Das ' +
      'Verhältnis von Natrium zu Kalium sagt den Blutdruck besser voraus als jede der beiden ' +
      'Zahlen allein — und an Natrium mangelt es fast niemandem.',
    description:
      'Warum das Verhältnis von Natrium zu Kalium mehr zählt als jede Zahl für sich, wie viel ' +
      'Kalium man braucht, und die kaliumreichsten Lebensmittel — aus USDA-Daten.',

    whatItDoes: [
      'Kalium ist das wichtigste positiv geladene Ion innerhalb der Zellen, so wie Natrium ' +
        'außerhalb. Der Unterschied über die Membran hinweg ist das, was ein Nervenimpuls ' +
        'tatsächlich ist: ein kurzer, kontrollierter Zusammenbruch dieses Gefälles und das ' +
        'anschließende Zurückpumpen. Jeder Herzschlag läuft über denselben Mechanismus.',
      'In der Niere werden Kalium und Natrium gemeinsam gehandhabt. Höhere Kaliumzufuhr erhöht ' +
        'die Natriumausscheidung — das ist der Mechanismus hinter der Blutdruckwirkung und der ' +
        'Grund, warum das Verhältnis mehr zählt als jede Zahl für sich.',
      'Es ist außerdem am Transport von Glukose in den Muskel und am Knochenerhalt beteiligt, ' +
        'beides in kleinerem und weniger sicherem Ausmaß als die Wirkung auf den Blutdruck.',
    ],

    intake: {
      'infant-0-6': { who: 'Säuglinge, 0–6 Monate', note: 'Schätzwert' },
      'infant-7-12': { who: 'Säuglinge, 7–12 Monate', note: 'Schätzwert' },
      'child-1-3': { who: 'Kinder, 1–3 Jahre' },
      'child-4-8': { who: 'Kinder, 4–8 Jahre' },
      'child-9-13': { who: 'Kinder, 9–13 Jahre' },
      'men-19-plus': { who: 'Männer, ab 19' },
      'women-19-plus': { who: 'Frauen, ab 19' },
      pregnancy: { who: 'Schwangerschaft' },
    },
    intakeNote:
      'Alle diese Werte sind Schätzwerte und keine Empfehlungen — die Datenlage wurde nicht als ' +
      'ausreichend beurteilt. Sie wurden 2019 nach unten korrigiert; ältere Artikel, die für alle ' +
      'Erwachsenen 4.700 mg nennen, zitieren eine überholte Zahl.',

    foodsIntro:
      'Bananen haben den Ruf und sind nicht annähernd vorn. Bohnen, Kartoffeln mit Schale, ' +
      'Blattgemüse und Trockenobst enthalten mehr — die Kartoffel ist dabei das Lebensmittel, das ' +
      'am deutlichsten unterschätzt wird.',

    helps: [
      'Garmethoden, die das Wasser behalten: braten und dämpfen statt kochen',
      'Kartoffeln und Süßkartoffeln mit Schale essen',
      'Bohnen und Linsen, die dicht daran und günstig sind',
    ],
    hinders: [
      'Kochen und abgießen, was einen großen Teil ins Wasser verlagert',
      'Manche Diuretika, die den Verlust über den Urin deutlich erhöhen',
      'Anhaltendes Erbrechen oder Durchfall',
    ],
    absorptionNote:
      'Kalium aus Lebensmitteln wird gut aufgenommen und der Rest über die Niere reguliert — die ' +
      'praktische Frage ist also die Zufuhr, nicht die Aufnahme. Eine echte Einschränkung: Wer ' +
      'eine eingeschränkte Nierenfunktion hat oder ACE-Hemmer, Sartane oder kaliumsparende ' +
      'Diuretika nimmt, kann zu viel zurückhalten. Für diese Menschen sind kaliumreiche ' +
      'Lebensmittel und Salzersatz eine Sache für die behandelnde Ärztin, nicht für einen Artikel.',

    shortfall: [
      'Wer wenig Gemüse, Obst oder Hülsenfrüchte isst — also die meisten',
      'Menschen unter Thiazid- oder Schleifendiuretika',
      'Menschen mit chronisch-entzündlichen Darmerkrankungen',
      'Starke Trinker',
    ],

    recipe: {
      title: 'Ofenkartoffel-Salat mit weißen Bohnen',
      serves: 'Zwei als Hauptgericht, vier als Beilage',
      ingredients: [
        '600 g kleine Kartoffeln, mit Schale, halbiert',
        '1 Dose Cannellini-Bohnen, abgetropft',
        '2 EL Olivenöl',
        '1 EL Rotweinessig',
        '1 TL Dijonsenf',
        'Eine große Handvoll Petersilie, gehackt',
        '2 Frühlingszwiebeln, in Ringen',
      ],
      steps: [
        {
          title: 'Die Schale dranlassen',
          detail:
            'Ein erheblicher Teil des Kaliums sitzt in und direkt unter der Schale, und Schälen ' +
            'ist die einfachste Art, ihn wegzuwerfen.',
        },
        {
          title: 'Backen statt kochen',
          detail:
            'Mit einem Esslöffel Öl mischen, 200 °C, 30–35 Minuten, bis die Schnittflächen ' +
            'goldbraun sind. Kochen würde ein Drittel des Kaliums in Wasser überführen, das dann ' +
            'im Abfluss landet.',
        },
        {
          title: 'Heiß marinieren',
          detail:
            'Essig, Senf und restliches Öl verrühren und direkt aus dem Ofen darübergeben — ' +
            'heiße Kartoffeln nehmen die Marinade auf, kalte tragen sie nur.',
        },
        {
          title: 'Den Rest unterheben',
          detail: 'Bohnen, Petersilie und Frühlingszwiebeln vorsichtig, damit nichts zerfällt.',
        },
      ],
      note:
        'Wer kaliumsparende Diuretika, ACE-Hemmer oder Sartane nimmt oder eine eingeschränkte ' +
        'Nierenfunktion hat, sollte kaliumreiche Mahlzeiten vorher ärztlich besprechen.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Kalium',
      dri: 'Dietary Reference Intakes für Natrium und Kalium',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ----------------------------------------------------------- phosphorus */
  phosphorus: {
    name: 'Phosphor',
    title: 'Phosphor: es mangelt niemandem, und das ist die Geschichte',
    lede:
      'Er steckt in jeder Zelle, in jeder Energieübertragung und in den meisten verarbeiteten ' +
      'Lebensmitteln. Ein Mangel allein durch die Ernährung ist bei Gesunden nahezu unbekannt — ' +
      'was die interessante Frage zur umgekehrten macht.',
    description:
      'Was Phosphor tut, warum Mangel selten ist, warum Zusatzstoffe das Bild verändert haben, ' +
      'und die phosphorreichsten Lebensmittel — aus USDA-Daten.',

    whatItDoes: [
      'Phosphor ist die Hälfte des Minerals, das Knochen fest macht — Hydroxylapatit besteht aus ' +
        'Calcium und Phosphat. Etwa 85 % des Körperphosphors sitzen dort.',
      'Der Rest macht Chemie. ATP, das Molekül, das jede Zelle für alles ausgibt, ist Adenosin ' +
        'mit drei Phosphaten; eines davon abzuspalten ist wörtlich, was „Energie verbrauchen" ' +
        'heißt. DNA und RNA haben ein Phosphatrückgrat. Zellmembranen bestehen aus ' +
        'Phospholipiden.',
      'Weil er in so vielem steckt und die Niere ihn eng reguliert, bleibt das Blutphosphat bei ' +
        'funktionierenden Nieren über eine enorme Spanne der Zufuhr im Normbereich.',
    ],

    intake: {
      'infant-0-6': { who: 'Säuglinge, 0–6 Monate', note: 'Schätzwert' },
      'infant-7-12': { who: 'Säuglinge, 7–12 Monate', note: 'Schätzwert' },
      'child-1-3': { who: 'Kinder, 1–3 Jahre' },
      'child-4-8': { who: 'Kinder, 4–8 Jahre' },
      'teen-9-18': { who: '9–18 Jahre', note: 'Höchster Knochenaufbau' },
      'adults-19-plus': { who: 'Erwachsene, ab 19' },
    },
    intakeNote:
      'Die meisten Erwachsenen liegen mühelos deutlich über der Empfehlung. Der Wert steht hier ' +
      'der Vollständigkeit halber und nicht als Ziel.',

    foodsIntro:
      'Eiweißreiche Lebensmittel sind phosphorreiche Lebensmittel, praktisch ausnahmslos: ' +
      'Milchprodukte, Fleisch, Fisch, Eier, Nüsse, Kerne, Hülsenfrüchte. Was die Liste nicht ' +
      'zeigt, sind Phosphatzusätze, die weit vollständiger aufgenommen werden als natürlich ' +
      'gebundener Phosphor.',

    helps: [
      'Nichts muss. Aus einer gemischten Kost werden 55–70 % ohne Hilfe aufgenommen',
      'Vitamin D, in geringem Maß, wie beim Calcium',
    ],
    hinders: [
      'Phytat, weshalb Phosphor aus Vollkorn und Kernen weniger verfügbar ist als die Zahl verspricht',
      'Phosphatbinder, die bei Nierenerkrankungen bewusst verordnet werden',
      'Sehr hoher, langfristiger Gebrauch mancher Antazida',
    ],
    absorptionNote:
      'Der wichtige Unterschied ist natürlich gegen zugesetzt. Als Phytat pflanzlich gebundener ' +
      'Phosphor wird zu vielleicht 40 % aufgenommen; Phosphatzusätze in verarbeiteten ' +
      'Lebensmitteln zu nahezu 100 %. Zwei Lebensmittel mit derselben Zahl auf dem Etikett können ' +
      'also sehr Verschiedenes liefern — und Zusatzstoffe müssen nicht als Phosphor ausgewiesen ' +
      'werden.',

    shortfall: [
      'Bei Gesunden allein durch Ernährung wirklich selten',
      'Menschen mit Alkoholabhängigkeit',
      'Menschen, die sich von schwerer Mangelernährung erholen — beim Wiederaufbau kann das Blutphosphat stark abfallen',
      'Wer langfristig hoch dosierte, phosphatbindende Antazida nimmt',
      'Sehr früh geborene Kinder, deren Bedarf außergewöhnlich ist',
    ],

    recipe: {
      title: 'Sardinen auf Brot mit Tomate und Oregano',
      serves: 'Eine Portion, fünf Minuten',
      ingredients: [
        '1 Dose Sardinen in Olivenöl',
        '2 dicke Scheiben Sauerteigbrot',
        '1 reife Tomate, halbiert',
        'Getrockneter Oregano',
        'Zitrone',
        'Schwarzer Pfeffer',
      ],
      steps: [
        {
          title: 'Das Brot kräftig rösten',
          detail:
            'Dunkler als sonst. Es muss einer nassen Tomate standhalten, ohne in der Mitte weich ' +
            'zu werden.',
        },
        {
          title: 'Mit Tomate einreiben',
          detail:
            'Schnittfläche nach unten, direkt auf das heiße Brot, drücken, bis nur die Schale ' +
            'übrig bleibt. Eine katalanische Gewohnheit, und besser als jeder Aufstrich.',
        },
        {
          title: 'Die Sardinen auflegen',
          detail:
            'Ganz, mit etwas von ihrem Öl. Die weichen Gräten sind das meiste Calcium und ' +
            'vollständig essbar.',
        },
        {
          title: 'Abrunden',
          detail:
            'Oregano zwischen den Fingern zerrieben, Zitrone, Pfeffer. Kein Salz — der Fisch ' +
            'bringt genug mit.',
        },
      ],
      note:
        'Sardinen sind eines der wenigen Lebensmittel, die gleichzeitig viel Phosphor, Calcium, ' +
        'Vitamin D und Omega-3 liefern — eine ungewöhnliche Kombination, die daher kommt, dass man ' +
        'den ganzen Fisch isst, Gräten inklusive.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Phosphor',
      dri: 'Dietary Reference Intakes für Calcium und Vitamin D',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ------------------------------------------------------------- selenium */
  selenium: {
    name: 'Selen',
    title: 'Selen: ein Mineralstoff, der davon abhängt, wo das Essen gewachsen ist',
    lede:
      'Der Selengehalt einer Pflanze spiegelt das Selen im Boden, und das schwankt weltweit um ' +
      'mehr als das Hundertfache. Es ist einer der wenigen Nährstoffe, bei denen die Geografie ' +
      'die Hauptvariable ist.',
    description:
      'Warum der Selengehalt vom Boden abhängt, wie viel man braucht, warum der Abstand zwischen ' +
      'genug und zu viel eng ist, und die selenreichsten Lebensmittel — aus USDA-Daten.',

    whatItDoes: [
      'Selen ist in etwa fünfundzwanzig Proteine eingebaut, und in jedem sitzt es als ' +
        'Selenocystein im aktiven Zentrum — einer Aminosäure, die der Körper eigens dafür ' +
        'zusammensetzt. Die bekannteste Familie, die Glutathionperoxidasen, entschärft Peroxide, ' +
        'bevor sie Membranen schädigen.',
      'Eine zweite Familie wandelt Schilddrüsenhormon aus der Speicherform T4 in die aktive Form ' +
        'T3 um. Schilddrüsengewebe enthält pro Gramm mehr Selen als jedes andere Organ, was ein ' +
        'Hinweis darauf ist, wie zentral das ist.',
      'Außerdem unterstützt es die Immunfunktion und schützt über dieselbe Maschinerie die DNA ' +
        'vor oxidativen Schäden.',
    ],

    intake: {
      'infant-0-6': { who: 'Säuglinge, 0–6 Monate', note: 'Schätzwert' },
      'infant-7-12': { who: 'Säuglinge, 7–12 Monate', note: 'Schätzwert' },
      'child-1-3': { who: 'Kinder, 1–3 Jahre' },
      'child-4-8': { who: 'Kinder, 4–8 Jahre' },
      'child-9-13': { who: 'Kinder, 9–13 Jahre' },
      'adults-14-plus': { who: 'Ab 14 Jahren' },
      pregnancy: { who: 'Schwangerschaft' },
      breastfeeding: { who: 'Stillzeit' },
    },
    intakeNote:
      'Die Obergrenze für Erwachsene liegt bei 400 µg täglich, etwa dem Siebenfachen der ' +
      'Empfehlung — ein engerer Abstand als bei den meisten Nährstoffen. Zwei bis drei Paranüsse ' +
      'täglich sind eine vernünftige Gewohnheit; eine Handvoll täglich nicht.',

    foodsIntro:
      'Paranüsse stehen für sich allein, und der Grund ist geologisch: Sie wachsen in ' +
      'amazonischem Boden, der zufällig selenreich ist. Alles andere auf der Liste sind ' +
      'Meeresfrüchte, Innereien und — wo der Boden es hergibt — Weizen.',

    helps: [
      'Herkunftsvielfalt — Lebensmittel aus mehreren Regionen gleichen aus, was ein Boden liefert',
      'Meeresfrüchte und Innereien, die unabhängig vom Boden anreichern',
      'Vitamin E, mit dem es eng gegen oxidative Schäden zusammenarbeitet',
    ],
    hinders: [
      'Ausgelaugte Böden, weshalb dieselbe Frucht zwischen Ländern enorm schwankt',
      'Malabsorption, besonders nach Darmresektion',
      'Dialyse, die es entfernt',
    ],
    absorptionNote:
      'Die Aufnahme ist hoch — 80 % und mehr — und weitgehend unreguliert, weshalb die ' +
      'Obergrenze zählt. Der Körper schützt nicht vor zu viel Selen, wie er es bei Eisen tut. ' +
      'Chronischer Überschuss führt zur Selenose: zuerst brüchige Haare und Nägel, dann Magen- ' +
      'und Nervenbeschwerden.',

    shortfall: [
      'Menschen, deren Nahrung auf selenarmem Boden wächst — Teile Europas, Chinas und Neuseelands',
      'Menschen unter langfristiger parenteraler Ernährung ohne Zusatz',
      'Dialysepatienten',
      'Menschen mit schwerer Malabsorption',
    ],

    recipe: {
      title: 'Salat aus Thunfisch, Ei und Paranüssen',
      serves: 'Zwei, zehn Minuten',
      ingredients: [
        '1 Dose Thunfisch in Olivenöl, abgetropft',
        '2 Eier, wachsweich',
        '4 Paranüsse, grob gehackt',
        'Zwei Handvoll Brunnenkresse oder Rucola',
        '1 EL Olivenöl',
        'Saft einer halben Zitrone',
        'Schwarzer Pfeffer',
      ],
      steps: [
        {
          title: 'Die Eier sieben Minuten kochen',
          detail:
            'Ins bereits kochende Wasser, genau sieben Minuten, dann sofort in kaltes. Das Gelb ' +
            'soll am Rand fest und in der Mitte weich sein.',
        },
        {
          title: 'Die Nüsse grob hacken',
          detail:
            'Vier ist die Zahl. Paranüsse enthalten so viel Selen, dass eine größere Handvoll ' +
            'täglich über die Obergrenze führen würde — ein Satz, der auf wenige Lebensmittel ' +
            'zutrifft.',
        },
        {
          title: 'Zuerst die Blätter marinieren',
          detail:
            'Öl, Zitrone und Pfeffer durch die Kresse ziehen, bevor irgendetwas anderes dazukommt, ' +
            'damit die Blätter überzogen sind und nicht in einer Lache liegen.',
        },
        {
          title: 'Anrichten',
          detail:
            'Thunfisch darüberzupfen, Eier halbiert obenauf, Nüsse zuletzt, damit sie knusprig ' +
            'bleiben.',
        },
      ],
      note:
        'Vier Paranüsse sind eine Portion und keine Einladung zur Großzügigkeit. Sie sind die mit ' +
        'Abstand reichste verbreitete Selenquelle, und der Abstand zwischen sinnvoll und zu viel ' +
        'ist ungewöhnlich klein.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Selen',
      dri: 'Dietary Reference Intakes für Vitamin C, Vitamin E, Selen und Carotinoide',
      fdc: 'USDA FoodData Central',
    },
  },

  /* --------------------------------------------------------------- copper */
  copper: {
    name: 'Kupfer',
    title: 'Kupfer: der Mineralstoff, ohne den Eisen nicht arbeiten kann',
    lede:
      'Man kann reichlich Eisen essen und trotzdem anämisch sein, wenn Kupfer fehlt — denn das ' +
      'Enzym, das Eisen auf sein Transportprotein lädt, ist ein Kupferenzym. Ein kleiner Bedarf ' +
      'mit einer übergroßen Folge.',
    description:
      'Warum Kupfermangel wie Eisenmangel aussieht, wie viel man braucht, was Zinkpräparate damit ' +
      'anstellen, und die kupferreichsten Lebensmittel — aus USDA-Daten.',

    whatItDoes: [
      'Kupfer sitzt im aktiven Zentrum von Enzymen, die Aufgaben erledigen, die sonst niemand ' +
        'übernimmt. Die Cytochrom-c-Oxidase, der letzte Schritt der Energiegewinnung, ist eines. ' +
        'Die Lysyloxidase, die Kollagen und Elastin vernetzt, damit Bindegewebe und Gefäßwände ' +
        'halten, ein anderes.',
      'Coeruloplasmin, ein Kupferprotein, oxidiert Eisen, damit es an Transferrin binden und ' +
        'transportiert werden kann. Ohne genug Kupfer sammelt sich Eisen dort an, wo es ' +
        'gespeichert wird, und erreicht das Knochenmark nie — eine Anämie, die Eisenpräparate ' +
        'nicht beheben.',
      'Es wird außerdem für den Farbstoff Melanin und für mehrere Schritte der ' +
        'Neurotransmittersynthese gebraucht.',
    ],

    intake: {
      'infant-0-6': { who: 'Säuglinge, 0–6 Monate', note: 'Schätzwert' },
      'infant-7-12': { who: 'Säuglinge, 7–12 Monate', note: 'Schätzwert' },
      'child-1-3': { who: 'Kinder, 1–3 Jahre' },
      'child-4-8': { who: 'Kinder, 4–8 Jahre' },
      'child-9-13': { who: 'Kinder, 9–13 Jahre' },
      'teen-14-18': { who: '14–18 Jahre' },
      'adults-19-plus': { who: 'Erwachsene, ab 19' },
      pregnancy: { who: 'Schwangerschaft' },
      breastfeeding: { who: 'Stillzeit' },
    },
    intakeNote:
      'Mikrogramm, nicht Milligramm. Kupfer wird in etwa tausendmal kleineren Mengen gebraucht ' +
      'als Calcium, und die Obergrenze für Erwachsene liegt bei 10 mg — etwa dem Elffachen der ' +
      'Empfehlung.',

    foodsIntro:
      'Leber und Meeresfrüchte führen deutlich, danach Kerne, Nüsse, Kakao und Vollkorn. Dunkle ' +
      'Schokolade ist eine echte Quelle und keine Wunschvorstellung.',

    helps: [
      'Eine abwechslungsreiche Kost mit Meeresfrüchten, Innereien, Nüssen, Kernen oder Kakao',
      'Vollkorn statt Auszugsmehl, wie bei den übrigen Spurenelementen',
    ],
    hinders: [
      'Hoch dosierte Zinkpräparate — in der Praxis die häufigste Ursache eines Kupfermangels',
      'Sehr hohe Vitamin-C-Zufuhr aus Präparaten, in geringem Maß',
      'Adipositaschirurgie und andere Ursachen von Malabsorption',
    ],
    absorptionNote:
      'Die Zink-Wechselwirkung ist die, die man kennen sollte. Zink induziert im Darm ein Protein ' +
      'namens Metallothionein, das Kupfer bindet und mit den abgestoßenen Zellen hinausträgt. ' +
      '50 mg Zink täglich über Monate — eine frei verkäufliche Dosis — kann eine Kupfermangel- ' +
      'Anämie erzeugen, die genau wie Eisenmangel aussieht und auf Eisen nicht anspricht.',

    shortfall: [
      'Wer über lange Zeit hoch dosiertes Zink nimmt',
      'Menschen nach Magenbypass oder anderer Adipositaschirurgie',
      'Säuglinge, die ausschließlich Kuhmilch bekommen, die kupferarm ist',
      'Menschen mit Menkes-Syndrom, einer seltenen erblichen Transportstörung',
    ],

    recipe: {
      title: 'Bruchschokolade mit gerösteten Kernen',
      serves: 'Ein Blech; zwanzig Minuten plus Aushärten',
      ingredients: [
        '200 g dunkle Schokolade, ab 70 %',
        '3 EL Sonnenblumenkerne',
        '3 EL Kürbiskerne',
        '2 EL Sesam',
        'Eine Prise Salzflocken',
      ],
      steps: [
        {
          title: 'Die Kerne getrennt rösten',
          detail:
            'Sie sind verschieden groß und verbrennen unterschiedlich schnell. Sesam zuerst und ' +
            'am schnellsten — dreißig Sekunden zu lang und er ist bitter.',
        },
        {
          title: 'Vorsichtig schmelzen',
          detail:
            'Eine Schüssel über kaum siedendem Wasser, vom Herd nehmen, bevor die letzten Stücke ' +
            'weg sind. Über etwa 50 °C gerinnt Schokolade, und das lässt sich nicht retten.',
        },
        {
          title: 'Dünn ausstreichen',
          detail:
            'Auf Backpapier, etwa 5 mm. Dicker, und es ist eine Platte statt eines Bruchs, für ' +
            'die man einen Hammer braucht.',
        },
        {
          title: 'Bestreuen und fest werden lassen',
          detail:
            'Kerne und Salz aufstreuen, solange die Schokolade noch nass ist, dann eine Stunde ' +
            'bei Raumtemperatur. Im Kühlschrank wird sie grau.',
        },
      ],
      note:
        'Kakao und Kerne sind beide wirklich gute Kupferquellen, was dies zu einem der wenigen ' +
        'Rezepte auf dieser Seite macht, das zugleich eine Süßigkeit ist.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Kupfer',
      dri: 'Dietary Reference Intakes für Vitamin A, Vitamin K, Kupfer, Eisen, Zink und weitere',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ------------------------------------------------------------ manganese */
  manganese: {
    name: 'Mangan',
    title: 'Mangan: ein Spurenelement, das Sie mit ziemlicher Sicherheit schon bekommen',
    lede:
      'Eine Tasse Tee, eine Schüssel Haferflocken und eine Handvoll Nüsse decken zusammen den ' +
      'Tagesbedarf. Ernährungsbedingter Mangel ist beim Menschen so selten, dass das meiste ' +
      'Wissen aus Studien stammt und nicht von Patienten.',
    description:
      'Was Mangan tut, wie viel man braucht, warum Mangel praktisch unbekannt und eingeatmeter ' +
      'Überschuss es nicht ist, und die manganreichsten Lebensmittel — aus USDA-Daten.',

    whatItDoes: [
      'Mangan aktiviert Enzyme, statt von ihnen verbraucht zu werden. Die Mangan- ' +
        'Superoxiddismutase ist die Variante dieses Schutzenzyms, die in den Mitochondrien ' +
        'arbeitet, wo der reaktivste Sauerstoff entsteht — ein Ort, den keine andere Form abdeckt.',
      'Es wird außerdem für den Aufbau von Knorpel und Knochenmatrix gebraucht und für Enzyme des ' +
        'Harnstoffzyklus und des Kohlenhydratstoffwechsels.',
      'Der Bedarf ist klein und pflanzliche Lebensmittel sind dicht daran — zusammen erklärt das, ' +
        'warum ein Mangel bei normaler Kost praktisch nicht vorkommt.',
    ],

    intake: {
      'infant-7-12': { who: 'Säuglinge, 7–12 Monate', note: 'Schätzwert' },
      'child-1-3': { who: 'Kinder, 1–3 Jahre' },
      'child-4-8': { who: 'Kinder, 4–8 Jahre' },
      'boys-9-13': { who: 'Jungen, 9–13' },
      'girls-9-13': { who: 'Mädchen, 9–13' },
      'men-19-plus': { who: 'Männer, ab 19' },
      'women-19-plus': { who: 'Frauen, ab 19' },
      pregnancy: { who: 'Schwangerschaft' },
    },
    intakeNote:
      'Jeder dieser Werte ist ein Schätzwert. Für Mangan gibt es keine Empfehlung, weil die ' +
      'Datenlage nie ausgereicht hat — die Zahlen bilden ab, was gesunde Bevölkerungen ohnehin ' +
      'aufnehmen.',

    foodsIntro:
      'Vollkorn, Nüsse, Hülsenfrüchte und Tee. Ananas ist der Ausreißer, an den sich alle ' +
      'erinnern, und tatsächlich eine gute Quelle.',

    helps: [
      'Vollkorn, das in den meisten Ernährungsweisen den größten Beitrag liefert',
      'Tee, der ungewöhnlich reich daran ist',
      'Eine abwechslungsreiche pflanzliche Kost, die einen Mangel nahezu ausschließt',
    ],
    hinders: [
      'Hohe Eisenzufuhr, die um denselben Transporter konkurriert',
      'Viel Calcium und Phosphor, in geringem Maß',
      'Phytat, wie bei den anderen Spurenelementen',
    ],
    absorptionNote:
      'Die Aufnahme ist gering — wenige Prozent — und sinkt weiter, wenn die Zufuhr steigt, was ' +
      'ein großer Teil des Grundes ist, warum ein Überschuss über die Nahrung praktisch keine ' +
      'Rolle spielt. Eingeatmetes Mangan ist etwas völlig anderes: Schweißer und Bergleute, die ' +
      'Manganstaub ausgesetzt sind, können ein Parkinson-ähnliches Syndrom entwickeln, weil ' +
      'Einatmen die Darmregulation umgeht.',

    shortfall: [
      'Über die Nahrung praktisch niemand',
      'Menschen unter langfristiger parenteraler Ernährung ohne Zusatz',
      'Menschen mit schwerer Lebererkrankung, bei denen der Umgang damit in beide Richtungen gestört ist',
    ],

    recipe: {
      title: 'Overnight Oats mit Ananas und Pekannüssen',
      serves: 'Eine Portion, fünf Minuten am Vorabend',
      ingredients: [
        '50 g kernige Haferflocken',
        '120 ml Milch oder ein angereichertes Pflanzengetränk',
        '2 EL Joghurt',
        '80 g frische Ananas, gewürfelt',
        '1 EL Pekannüsse, gehackt',
        '1 TL Chiasamen',
      ],
      steps: [
        {
          title: 'Kernige, keine Instant-Flocken',
          detail:
            'Instantflocken sind vorgegart und zerfallen über Nacht zu Brei. Kernige Flocken ' +
            'weichen auf und behalten ihre Form.',
        },
        {
          title: 'Alles außer den Nüssen mischen',
          detail:
            'Flocken, Milch, Joghurt, Chia und die Hälfte der Ananas in ein Glas. Gründlich ' +
            'rühren — Chia verklumpt, wenn es nicht verteilt ist, bevor es quillt.',
        },
        {
          title: 'Über Nacht in den Kühlschrank',
          detail: 'Mindestens sechs Stunden. Das Chia dickt an, die Flocken erledigen den Rest.',
        },
        {
          title: 'Morgens fertigstellen',
          detail:
            'Restliche Ananas und die Pekannüsse obenauf. Am Vorabend zugegeben wird die Frucht ' +
            'wässrig und die Nüsse weich.',
        },
      ],
      note:
        'Hafer, Pekannüsse und Ananas sind drei der besseren Manganquellen — was eine leicht ' +
        'absurde Sache ist über ein Frühstück zu sagen, das ausgewählt wurde, weil es gut ist.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Mangan',
      dri: 'Dietary Reference Intakes für Vitamin A, Vitamin K, Mangan und weitere',
      fdc: 'USDA FoodData Central',
    },
  },
};

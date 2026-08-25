import { LocalisedArticle } from '../types';

/** Vitamin A, C, D, E und K auf Deutsch. Zahlen stehen in nutrient-facts.ts. */
export const VITAMINS_ACDEK_DE: Readonly<Record<string, LocalisedArticle>> = {
  /* ------------------------------------------------------------ vitamin A */
  'vitamin-a': {
    name: 'Vitamin A',
    title: 'Vitamin A: zwei verschiedene Dinge unter einem Namen',
    lede:
      'Retinol aus tierischen Lebensmitteln und Carotinoide aus Pflanzen heißen beide Vitamin A ' +
      'und verhalten sich völlig unterschiedlich. Das eine reichert sich an und kann giftig ' +
      'werden; das andere wird nur nach Bedarf umgewandelt und im Grunde nicht.',
    description:
      'Retinol gegen Carotinoide, wie viel Vitamin A man in welchem Alter braucht, warum die ' +
      'Obergrenze in der Schwangerschaft zählt, und die vitamin-A-reichsten Lebensmittel.',

    whatItDoes: [
      'Die klassische Rolle ist das Sehen. Retinal, eine Form von Vitamin A, bindet in der ' +
        'Netzhaut an ein Protein und bildet Rhodopsin, und Rhodopsin ändert seine Form, wenn ein ' +
        'Photon auftrifft. Genau deshalb ist Nachtblindheit das früheste funktionelle Zeichen ' +
        'eines Mangels — weltweit bleibt Vitamin-A-Mangel eine führende Ursache vermeidbarer ' +
        'Erblindung im Kindesalter.',
      'Weniger bekannt: Es reguliert Genaktivität. Retinsäure bindet an Rezeptoren im Zellkern ' +
        'und schaltet Gene an, die steuern, wie sich Epithelzellen ausdifferenzieren — Haut, ' +
        'Darmschleimhaut, Atemwege. Deshalb zeigt sich ein Mangel ebenso als trockene Haut und ' +
        'wiederkehrende Infekte wie am Auge.',
      'Es wird außerdem für die Entwicklung von Immunzellen und für die normale fetale ' +
        'Entwicklung gebraucht — daher stammen sowohl seine Bedeutung als auch seine Gefahr in ' +
        'der Schwangerschaft.',
    ],

    intake: {
      'infant-0-6': { who: 'Säuglinge, 0–6 Monate', note: 'Schätzwert' },
      'infant-7-12': { who: 'Säuglinge, 7–12 Monate', note: 'Schätzwert' },
      'child-1-3': { who: 'Kinder, 1–3 Jahre' },
      'child-4-8': { who: 'Kinder, 4–8 Jahre' },
      'child-9-13': { who: 'Kinder, 9–13 Jahre' },
      'men-14-plus': { who: 'Männer, ab 14' },
      'women-14-plus': { who: 'Frauen, ab 14' },
      pregnancy: { who: 'Schwangerschaft' },
      breastfeeding: { who: 'Stillzeit' },
      'upper-limit': {
        who: 'Obergrenze, Erwachsene',
        note: 'Nur vorgebildetes Retinol — Carotinoide zählen nicht mit',
      },
    },
    intakeNote:
      'RAE steht für Retinol-Aktivitätsäquivalente, die Einheit, die Retinol und Carotinoide ' +
      'vergleichbar macht: 1 µg RAE ist 1 µg Retinol oder 12 µg Beta-Carotin. Ältere Quellen ' +
      'rechnen in Internationalen Einheiten, und manche verwenden „IE" und „RE" synonym, was sie ' +
      'nicht sind.',

    foodsIntro:
      'Leber liegt so weit vorn, dass der Rest der Liste flach wirkt — und das ist ebenso sehr ' +
      'die Warnung wie der Befund. Darunter liefern orangefarbene und dunkelgrüne Gemüse ' +
      'Carotinoide, die der Körper nach Bedarf umwandelt.',

    helps: [
      'Fett in derselben Mahlzeit — beide Formen sind fettlöslich, ein fettfreier Salat liefert wenig',
      'Gemüse garen und zerkleinern, was Zellwände aufbricht und Carotinoide freisetzt',
      'Ausreichend Zink, das gebraucht wird, um Vitamin A aus der Leber abzurufen',
    ],
    hinders: [
      'Sehr fettarme Ernährung',
      'Fettmalabsorption — Zöliakie, Pankreasinsuffizienz, Mukoviszidose',
      'Zinkmangel, der trotz ausreichender Zufuhr einen funktionellen Vitamin-A-Mangel erzeugt',
    ],
    absorptionNote:
      'Die Asymmetrie ist das Entscheidende. Vorgebildetes Retinol wird zu 70–90 % aufgenommen ' +
      'und in der Leber gespeichert, Überschuss reichert sich also an: Chronisch hohe Zufuhr ' +
      'führt zu Kopfschmerzen, Leberschäden und Knochenabbau, und hohe Zufuhr in der frühen ' +
      'Schwangerschaft ist fruchtschädigend. Beta-Carotin wird viel schlechter aufgenommen und ' +
      'nur nach Bedarf umgewandelt — wer so viele Karotten isst, dass sich die Handflächen orange ' +
      'färben, hat einen kosmetischen Effekt erzeugt, keine Vergiftung.',

    shortfall: [
      'Bevölkerungen, die von Getreide leben und wenig Gemüse oder tierische Lebensmittel essen',
      'Menschen mit Fettmalabsorption jeder Ursache',
      'Frühgeborene, die mit kleinen Speichern zur Welt kommen',
      'Menschen mit schwerer Lebererkrankung',
    ],

    recipe: {
      title: 'Ofensuppe aus Karotte und Süßkartoffel',
      serves: 'Vier, etwa fünfundvierzig Minuten',
      ingredients: [
        '500 g Karotten, längs halbiert',
        '400 g Süßkartoffel, gewürfelt',
        '1 Zwiebel, geviertelt',
        '3 EL Olivenöl',
        '1 TL gemahlener Kreuzkümmel',
        '900 ml Brühe',
        '2 EL Sahne oder Vollmilchjoghurt zum Servieren',
      ],
      steps: [
        {
          title: 'Backen statt kochen',
          detail:
            '200 °C, 35 Minuten, bis die Kanten Farbe haben. Backen konzentriert Zucker und ' +
            'Aroma; Kochen verdünnt beides in Wasser, das man danach wieder nachwürzen muss.',
        },
        {
          title: 'Nicht am Öl sparen',
          detail:
            'Drei Esslöffel klingen viel für Gemüse. Carotinoide sind fettlöslich, und eine ' +
            'fettfreie Version dieser Suppe liefert einen Bruchteil des Vitamin A.',
        },
        {
          title: 'Den Kreuzkümmel anrösten',
          detail:
            'Dreißig Sekunden in der trockenen Pfanne, bevor Flüssigkeit dazukommt. Gemahlenes ' +
            'Gewürz direkt in die Brühe schmeckt staubig; dasselbe Gewürz in Hitze aufgeschlossen ' +
            'nicht.',
        },
        {
          title: 'Pürieren und abrunden',
          detail:
            'Brühe dazu, zehn Minuten köcheln, glatt pürieren. Ein Löffel Joghurt bei Tisch ist ' +
            'nicht nur Deko — das Fett hilft der Aufnahme.',
        },
      ],
      note:
        'Dieses Rezept nutzt bewusst Carotinoide statt Retinol. In der Schwangerschaft sind Leber ' +
        'und hoch dosierte Retinolpräparate die Formen, die zu meiden sind; orangefarbenes Gemüse ' +
        'ist es nicht.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Vitamin A',
      dri: 'Dietary Reference Intakes für Vitamin A, Vitamin K, Eisen, Zink und weitere',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ------------------------------------------------------------ vitamin C */
  'vitamin-c': {
    name: 'Vitamin C',
    title: 'Vitamin C: weniger eine Frage von Erkältungen als von Kollagen',
    lede:
      'Die Belege, dass es Erkältungen verhindert, sind seit fünfzig Jahren schwach. Die Belege, ' +
      'dass der Körper ohne es kein Bindegewebe bauen kann, sind absolut — genau das ist Skorbut.',
    description:
      'Was Vitamin C tatsächlich tut, wie viel man braucht, warum es die Eisenaufnahme ' +
      'vervielfacht, und die vitamin-C-reichsten Lebensmittel — aus USDA-Daten.',

    whatItDoes: [
      'Vitamin C ist der Cofaktor für die Enzyme, die Prolin und Lysin im Kollagen ' +
        'hydroxylieren. Ohne diesen Schritt hält die Kollagen-Tripelhelix nicht, und Bindegewebe ' +
        'im ganzen Körper verliert seine Festigkeit — blutendes Zahnfleisch, schlechte ' +
        'Wundheilung, Gelenkschmerzen. Das ist Skorbut, und es ist keine historische Kuriosität: ' +
        'Bei stark eingeschränkter Ernährung kommt es weiterhin vor.',
      'Es ist außerdem das wichtigste wasserlösliche Antioxidans des Körpers und regeneriert ' +
        'Vitamin E, nachdem dieses in einer Membran ein Radikal abgefangen hat. Die beiden ' +
        'arbeiten als Paar über die Grenze zwischen wässrigen und fettigen Bereichen hinweg.',
      'Und es reduziert Nahrungseisen von der dreiwertigen zur zweiwertigen Form — der Form, die ' +
        'der Darm aufnehmen kann. Das ist die praktisch nützlichste Tatsache über dieses Vitamin.',
    ],

    intake: {
      'infant-0-6': { who: 'Säuglinge, 0–6 Monate', note: 'Schätzwert' },
      'infant-7-12': { who: 'Säuglinge, 7–12 Monate', note: 'Schätzwert' },
      'child-1-3': { who: 'Kinder, 1–3 Jahre' },
      'child-4-8': { who: 'Kinder, 4–8 Jahre' },
      'child-9-13': { who: 'Kinder, 9–13 Jahre' },
      'men-19-plus': { who: 'Männer, ab 19' },
      'women-19-plus': { who: 'Frauen, ab 19' },
      smokers: {
        who: 'Rauchende',
        note: 'Zusätzlich zum Wert für Alter und Geschlecht',
      },
      pregnancy: { who: 'Schwangerschaft' },
      breastfeeding: { who: 'Stillzeit' },
    },
    intakeNote:
      'Das Plasma ist bei etwa 200 mg täglich gesättigt; darüber scheidet die Niere den Rest aus, ' +
      'und die verbreitete 1.000-mg-Tablette erzeugt vor allem teuren Urin. Sehr hohe Dosen ' +
      'können Durchfall und bei Veranlagung Nierensteine auslösen.',

    foodsIntro:
      'Zitrusfrüchte haben den Ruf; Paprika, schwarze Johannisbeeren und Acerola haben die ' +
      'Zahlen. Eine rote Paprika enthält bei gleichem Gewicht etwa dreimal so viel Vitamin C wie ' +
      'eine Orange.',

    helps: [
      'Roh essen, wo das Lebensmittel es zulässt — kein Vitamin ist hitzeempfindlicher',
      'Dämpfen statt kochen, und das Kochwasser weiterverwenden',
      'Frisches zügig essen, denn der Gehalt sinkt während der Lagerung',
    ],
    hinders: [
      'Hitze, Licht, Luft und Zeit — alle vier bauen es ab',
      'Kochen und abgießen, was mehr als die Hälfte kosten kann',
      'Rauchen, das den Umsatz so weit erhöht, dass sich die Empfehlung ändert',
    ],
    absorptionNote:
      'Bei üblicher Zufuhr ist die Aufnahme nahezu vollständig und fällt oberhalb von etwa 1 g ' +
      'stark ab — das ist Regulation. Die Wechselwirkung, um die man Mahlzeiten bauen sollte, ist ' +
      'die mit Eisen: Vitamin C in derselben Mahlzeit kann die Aufnahme pflanzlichen Eisens ' +
      'vervielfachen, was Zitrone auf Linsen zu einer ernährungsphysiologischen Handlung macht ' +
      'und nicht nur zu einer kulinarischen.',

    shortfall: [
      'Wer sehr wenig Obst und Gemüse isst — das klassische moderne Skorbutrisiko',
      'Rauchende, die täglich 35 mg mehr brauchen',
      'Menschen mit schwerer Malabsorption oder unter Dialyse',
      'Säuglinge, die unveränderte Kuhmilch bekommen, die sehr wenig enthält',
    ],

    recipe: {
      title: 'Roher Paprika-Tomaten-Salat mit Petersilie',
      serves: 'Zwei, zehn Minuten, ganz ohne Hitze',
      ingredients: [
        '2 rote Paprika, entkernt und dünn geschnitten',
        '2 reife Tomaten, in Spalten',
        'Ein großer Bund glatte Petersilie, gehackt',
        'Eine halbe rote Zwiebel, hauchdünn',
        '2 EL Olivenöl',
        'Saft einer Zitrone',
        'Schwarzer Pfeffer',
      ],
      steps: [
        {
          title: 'Nichts wird gegart',
          detail:
            'Das ist der ganze Entwurf. Vitamin C wird durch Hitze schneller zerstört als jedes ' +
            'andere Vitamin, und eine rohe Paprika enthält ein Vielfaches einer gebackenen.',
        },
        {
          title: 'Die Zwiebel wässern',
          detail:
            'Dünn geschnitten, zehn Minuten in kaltem Wasser, dann abgießen. Das nimmt die ' +
            'Schärfe, ohne sie zu garen.',
        },
        {
          title: 'Den ganzen Bund Petersilie verwenden',
          detail:
            'Petersilie ist hier keine Garnitur — pro Gewicht enthält sie mehr Vitamin C als ' +
            'eine Zitrone, und ein großer Bund ist ein echter Beitrag.',
        },
        {
          title: 'Erst bei Tisch marinieren',
          detail:
            'Öl, Zitrone und Pfeffer kurz vor dem Essen. Zu früh angemacht ziehen Salz und Säure ' +
            'Wasser heraus und die Paprika wird schlaff.',
        },
      ],
      note:
        'Zu Linsen, Bohnen oder Vollkorn servieren, und das Vitamin C vervielfacht, wie viel ' +
        'Eisen daraus aufgenommen wird. Diese Kombination ist das Nützlichste auf dieser Seite.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Vitamin C',
      dri: 'Dietary Reference Intakes für Vitamin C, Vitamin E, Selen und Carotinoide',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ------------------------------------------------------------ vitamin D */
  'vitamin-d': {
    name: 'Vitamin D',
    title: 'Vitamin D: das, was man überwiegend nicht isst',
    lede:
      'Fast jeder andere Nährstoff kommt aus dem Essen. Dieser entsteht in der Haut aus ' +
      'Sonnenlicht — deshalb ändern sich die Empfehlungen mit Breitengrad, Jahreszeit und dem ' +
      'Anteil des Jahres, den man drinnen verbringt.',
    description:
      'Warum Vitamin D anders ist als jedes andere Vitamin, wie viel man in welchem Alter ' +
      'braucht, und die wenigen Lebensmittel, die es tatsächlich enthalten — aus USDA-Daten.',

    whatItDoes: [
      'Vitamin D steuert, wie viel Calcium aus der Nahrung aufgenommen wird. Ohne genug davon ' +
        'kann man sich calciumreich ernähren und bekommt das Calcium trotzdem nicht in die ' +
        'Knochen — genau das sind Rachitis bei Kindern und Osteomalazie bei Erwachsenen.',
      'Es verhält sich eher wie ein Hormon als wie ein Vitamin. Die Haut bildet es aus ' +
        'UVB-Licht, Leber und dann Nieren wandeln es in die aktive Form um, und Rezeptoren dafür ' +
        'finden sich in Geweben, die mit Knochen nichts Offensichtliches zu tun haben: ' +
        'Immunzellen, Muskel, Darmschleimhaut.',
      'Weil es fettlöslich ist, wird es gespeichert statt ausgeschieden. Das nützt über einen ' +
        'Winter und ist zugleich der Grund, warum Vitamin D einer der wenigen Nährstoffe ist, bei ' +
        'denen sorgloses Supplementieren tatsächlich schaden kann.',
    ],

    intake: {
      'infant-0-12': { who: 'Säuglinge, 0–12 Monate', note: 'Schätzwert' },
      'age-1-70': { who: 'Kinder und Erwachsene, 1–70' },
      'age-71-plus': { who: 'Erwachsene, ab 71' },
      pregnancy: { who: 'Schwangerschaft und Stillzeit' },
    },
    intakeNote:
      'Mikrogramm und Internationale Einheiten sind beide gebräuchlich, 1 µg = 40 IE — eine ' +
      'häufige Quelle von Verwirrung auf Etiketten. Diese Werte gehen von minimaler ' +
      'Sonnenexposition aus; sie sind bewusst für den ungünstigsten Fall gesetzt, weil die ' +
      'Alternative eine Empfehlung wäre, die nur im Juli funktioniert.',

    foodsIntro:
      'Das ist die kürzeste wirklich brauchbare Liste dieser Seite, und genau das ist der Befund. ' +
      'Außer fettem Fisch, Eigelb und gezielt angereicherten Produkten ist Essen nicht der Ort, ' +
      'aus dem Vitamin D kommt.',

    helps: [
      'Mit Fett essen, da es fettlöslich ist und eine fettfreie Mahlzeit weniger aufnimmt',
      'Sonne auf der Haut — mittags, Arme und Gesicht, und viel kürzer als die meisten annehmen',
      'Angereicherte Lebensmittel, in vielen Ländern die mit Abstand größte Nahrungsquelle',
    ],
    hinders: [
      'Breitengrad und Jahreszeit: oberhalb von etwa 37° bildet Wintersonne fast nichts',
      'Sonnencreme, Glas und Kleidung, die alle UVB abhalten',
      'Dunklere Haut, die für dieselbe Menge längere Zeit braucht',
      'Alter, das die Bildungsfähigkeit der Haut verringert',
    ],

    shortfall: [
      'Gestillte Säuglinge — deshalb wird für sie routinemäßig supplementiert',
      'Wer sich bedeckt, drinnen arbeitet oder im Winter in nördlichen Breiten lebt',
      'Menschen mit dunklerer Haut fern des Äquators',
      'Ältere Menschen, durch weniger Zeit draußen und geringere Bildung',
      'Menschen mit Fettmalabsorption — Zöliakie, Morbus Crohn, nach Adipositaschirurgie',
    ],

    recipe: {
      title: 'Lachs-Süßkartoffel-Püree',
      serves: 'Ab 7 Monaten; eine der wenigen Mahlzeiten, die eine echte Nahrungsquelle ist',
      ingredients: [
        '40 g Lachsfilet, Haut und Gräten sorgfältig entfernt',
        '1 kleine Süßkartoffel, geschält und gewürfelt',
        '1 TL Olivenöl oder ungesalzene Butter',
        '2–3 EL warmes Wasser, Muttermilch oder Säuglingsnahrung',
      ],
      steps: [
        {
          title: 'Den Fisch zweimal prüfen',
          detail:
            'Mit dem Finger in beide Richtungen über das Filet fahren. Grätchen sind fein, ' +
            'spitz und leicht zu übersehen — dieser Schritt duldet keine Eile.',
        },
        {
          title: 'Zusammen dämpfen',
          detail:
            'Süßkartoffel 12 Minuten, dann den Lachs obenauf weitere 6–8, bis er sich in ' +
            'Schichten löst. Dämpfen statt kochen hält das Fett — und das darin gelöste Vitamin D ' +
            '— im Essen statt im Wasser.',
        },
        {
          title: 'Zerteilen und nochmals prüfen',
          detail:
            'Den Lachs mit der Gabel auseinanderziehen und ein letztes Mal nach Gräten sehen.',
        },
        {
          title: 'Zerdrücken',
          detail:
            'Süßkartoffel mit dem Öl zerdrücken, den Lachs unterheben und auf die gewohnte ' +
            'Konsistenz bringen. Warm servieren, nicht heiß.',
        },
      ],
      note:
        'Fetter Fisch steht auf den meisten Beikostlisten ab etwa sechs Monaten und ist zugleich ' +
        'ein häufiges Allergen — einzeln einführen, früh am Tag. Offizielle Empfehlungen begrenzen ' +
        'fetten Fisch für kleine Kinder auf ein bis zwei Portionen pro Woche. Vorher ärztlich ' +
        'abklären.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Vitamin D',
      dri: 'Dietary Reference Intakes für Calcium und Vitamin D',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ------------------------------------------------------------ vitamin E */
  'vitamin-e': {
    name: 'Vitamin E',
    title: 'Vitamin E: das, was die Fette schützt, aus denen wir bestehen',
    lede:
      'Zellmembranen bestehen aus Fetten, und Fette werden ranzig. Vitamin E ist das Molekül, das ' +
      'in der Membran sitzt und die Kettenreaktion stoppt, bevor sie sich ausbreitet.',
    description:
      'Was Vitamin E in Zellmembranen tut, wie viel man braucht, warum Präparate enttäuscht ' +
      'haben, und die vitamin-E-reichsten Lebensmittel — aus USDA-Daten.',

    whatItDoes: [
      'Jede Zellmembran ist eine Doppelschicht aus Fettsäuren, und mehrfach ungesättigte ' +
        'oxidieren leicht. Ist eine erst einmal oxidiert, entsteht ein Radikal, das die nächste ' +
        'angreift — eine Kettenreaktion, die eine Membran auseinandernehmen würde. ' +
        'Alpha-Tocopherol sitzt in der Membran und bricht diese Kette ab.',
      'Dabei wird es selbst oxidiert, und Vitamin C regeneriert es. Die beiden Vitamine sind eine ' +
        'Staffel über die fettigen und wässrigen Bereiche einer Zelle hinweg, weshalb sie fast ' +
        'immer zusammen besprochen werden.',
      'Es gibt acht natürlich vorkommende Formen, aber menschliches Gewebe behält gezielt ' +
        'Alpha-Tocopherol; die Leber hat ein Transportprotein eigens dafür und lässt die anderen ' +
        'ziehen. Deshalb ist der Bedarf in Alpha-Tocopherol angegeben und nicht in „Vitamin E".',
    ],

    intake: {
      'infant-0-6': { who: 'Säuglinge, 0–6 Monate', note: 'Schätzwert' },
      'infant-7-12': { who: 'Säuglinge, 7–12 Monate', note: 'Schätzwert' },
      'child-1-3': { who: 'Kinder, 1–3 Jahre' },
      'child-4-8': { who: 'Kinder, 4–8 Jahre' },
      'child-9-13': { who: 'Kinder, 9–13 Jahre' },
      'adults-14-plus': { who: 'Ab 14 Jahren' },
      breastfeeding: { who: 'Stillzeit' },
    },
    intakeNote:
      'Der Bedarf steigt mit der Zufuhr mehrfach ungesättigter Fette, denn genau die schützt ' +
      'Vitamin E. Praktischerweise sind die Lebensmittel mit den meisten mehrfach ungesättigten ' +
      'Fetten — Kerne, Nüsse, Pflanzenöle — auch die mit dem meisten Vitamin E, beides kommt also ' +
      'zusammen an.',

    foodsIntro:
      'Kerne, Nüsse und die daraus gepressten Öle, danach grüne Blätter und Avocado. In ' +
      'tierischen Lebensmitteln steckt sehr wenig, in raffinierten Kohlenhydraten fast nichts.',

    helps: [
      'Fett in der Mahlzeit, wie bei allen fettlöslichen Vitaminen',
      'Die Nüsse und Kerne selbst essen statt der Öle, was Ballaststoffe und Mineralstoffe mitbringt',
      'Ausreichend Vitamin C, das es nach getaner Arbeit regeneriert',
    ],
    hinders: [
      'Fettmalabsorption jeder Ursache',
      'Sehr fettarme Ernährung',
      'Frittieren und lange Hitze, die es im Öl selbst zerstören',
    ],
    absorptionNote:
      'Hoch dosierte Präparate haben die Wirkungen, die die Biochemie nahelegte, wiederholt nicht ' +
      'gezeigt, und einzelne Studien fanden Schaden ab 400 IE täglich — darunter mehr hämorrhagische ' +
      'Schlaganfälle, denn Vitamin E wirkt leicht gerinnungshemmend. Das ist einer der klarsten ' +
      'Fälle eines Nährstoffs, der im Essen unentbehrlich und in der Kapsel nutzlos ist.',

    shortfall: [
      'Bei normaler Ernährung wirklich selten',
      'Menschen mit Mukoviszidose, cholestatischer Lebererkrankung oder Pankreasinsuffizienz',
      'Sehr früh geborene Kinder',
      'Menschen mit Abetalipoproteinämie, einer seltenen erblichen Fetttransportstörung',
    ],

    recipe: {
      title: 'Pesto aus Mandeln, Sonnenblumenkernen und Spinat',
      serves: 'Ergibt ein Glas; zehn Minuten',
      ingredients: [
        '60 g Mandeln, geröstet',
        '30 g Sonnenblumenkerne, geröstet',
        '100 g Blattspinat',
        '1 Knoblauchzehe',
        '120 ml Olivenöl',
        'Saft einer halben Zitrone',
        '30 g Hartkäse, gerieben (optional)',
      ],
      steps: [
        {
          title: 'Nüsse und Kerne rösten',
          detail:
            'Acht Minuten bei 180 °C oder in der trockenen Pfanne mit Aufmerksamkeit. ' +
            'Ungeröstete Mandeln ergeben ein Pesto, das nach nichts Bestimmtem schmeckt.',
        },
        {
          title: 'Erst das Feste zerkleinern',
          detail:
            'Nüsse, Kerne, Knoblauch und Spinat zu grobem Schrot, bevor Öl dazukommt. Früh ' +
            'zugegebenes Öl emulgiert alles zu Paste, statt dass es zerkleinert wird.',
        },
        {
          title: 'Das Öl in einem Faden zugeben',
          detail:
            'Bei laufendem Motor, langsam. Hier sitzt das Vitamin E — aus dem Öl und aus dem, ' +
            'was das Öl aus den Nüssen herausträgt.',
        },
        {
          title: 'Zuletzt abschmecken',
          detail:
            'Zitrone, dann gegebenenfalls Käse, und erst probieren, bevor Salz dazukommt. ' +
            'Hartkäse ist salzig genug, dass viele Gläser keines brauchen.',
        },
      ],
      note:
        'Spinat statt Basilikum ist kein Kompromiss — er ist milder, günstiger, ganzjährig ' +
        'verfügbar und bringt eigenes Vitamin E und Vitamin K mit.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Vitamin E',
      dri: 'Dietary Reference Intakes für Vitamin C, Vitamin E, Selen und Carotinoide',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ------------------------------------------------------------ vitamin K */
  'vitamin-k': {
    name: 'Vitamin K',
    title: 'Vitamin K: Gerinnung, Knochen und eine wichtige Wechselwirkung',
    lede:
      'Das K steht für Koagulation, aus der deutschen Arbeit, die es beschrieb. Neunzig Jahre ' +
      'später ist die Gerinnungsrolle immer noch der Grund, warum Neugeborene am Tag ihrer Geburt ' +
      'eine Vitamin-K-Gabe bekommen.',
    description:
      'Was Vitamin K für Gerinnung und Knochen tut, wie viel man braucht, warum unter Warfarin ' +
      'Beständigkeit statt Verzicht gilt, und die vitamin-K-reichsten Lebensmittel.',

    whatItDoes: [
      'Vitamin K ist der Cofaktor eines Enzyms, das bestimmten Proteinen eine Carboxylgruppe ' +
        'anhängt, und erst diese Änderung lässt sie Calcium binden. Mehrere Gerinnungsfaktoren ' +
        'hängen davon ab; ohne die Änderung zirkulieren sie, können aber nicht arbeiten.',
      'Dieselbe Chemie gilt für Osteocalcin im Knochen und für Matrix-Gla-Protein in den ' +
        'Gefäßwänden, wo sie offenbar hilft, Calcium im Knochen und aus den Arterien zu halten. ' +
        'Dieser Teil der Geschichte ist jünger und weniger gesichert als der zur Gerinnung.',
      'Es gibt zwei Formen in der Nahrung. K1, Phyllochinon, kommt aus grünen Blättern und macht ' +
        'den Großteil der Zufuhr aus. K2, Menachinon, kommt aus fermentierten und tierischen ' +
        'Lebensmitteln und wird auch von Darmbakterien gebildet — wie viel davon tatsächlich ' +
        'aufgenommen wird, ist weiter umstritten.',
    ],

    intake: {
      'infant-0-6': { who: 'Säuglinge, 0–6 Monate', note: 'Schätzwert' },
      'infant-7-12': { who: 'Säuglinge, 7–12 Monate', note: 'Schätzwert' },
      'child-1-3': { who: 'Kinder, 1–3 Jahre' },
      'child-4-8': { who: 'Kinder, 4–8 Jahre' },
      'child-9-13': { who: 'Kinder, 9–13 Jahre' },
      'teen-14-18': { who: '14–18 Jahre' },
      'men-19-plus': { who: 'Männer, ab 19' },
      'women-19-plus': { who: 'Frauen, ab 19' },
    },
    intakeNote:
      'Alles Schätzwerte; eine Empfehlung gibt es nicht. Die Säuglingswerte sind winzig und nicht ' +
      'die ganze Geschichte: Neugeborene kommen mit sehr wenig Vitamin K zur Welt und Muttermilch ' +
      'enthält wenig, weshalb eine Gabe bei Geburt in den meisten Ländern Standard ist und eine ' +
      'seltene, aber katastrophale Blutungsstörung verhindert.',

    foodsIntro:
      'Dunkelgrüne Blätter, ganz überwiegend. Grünkohl, Spinat und Brokkoli enthalten mehr als ' +
      'alles andere, und der Abstand zwischen grünem Gemüse und dem Rest ist hier größer als bei ' +
      'jedem anderen Vitamin.',

    helps: [
      'Fett in der Mahlzeit — es ist fettlöslich, Blattgemüse ist es nicht',
      'Fermentiertes wie Natto und manche Käse, für die K2-Formen',
      'Schlicht regelmäßig grünes Gemüse essen, was den Bedarf bequem deckt',
    ],
    hinders: [
      'Fettmalabsorption',
      'Lange Breitbandantibiotika, die die bakterielle Bildung im Darm verringern',
      'Manche Cholesterinsenker, die Gallensäuren binden',
    ],
    absorptionNote:
      'Wer Warfarin oder Phenprocoumon nimmt: Der Rat lautet Beständigkeit, nicht Verzicht. ' +
      'Vitamin K ist genau das, was diese Mittel blockieren — eine Woche mit großen Salaten und ' +
      'eine ohne lässt die Einstellung schwanken, was in beide Richtungen gefährlich ist. Eine ' +
      'gleichbleibende Menge Grün ist leichter einzustellen als gar keine. Neuere Gerinnungshemmer ' +
      'wie Apixaban und Rivaroxaban haben diese Wechselwirkung nicht. Jede Änderung gehört zu der ' +
      'Ärztin oder dem Arzt, die die Einstellung führen.',

    shortfall: [
      'Neugeborene, ausnahmslos, bis zur Standardgabe',
      'Menschen mit Fettmalabsorption oder Gallenwegsverschluss',
      'Menschen unter langfristigen Breitbandantibiotika',
      'Wer über lange Zeit sehr wenig grünes Gemüse isst',
    ],

    recipe: {
      title: 'Angerösteter Brokkoli mit Sardellen-Knoblauch-Öl',
      serves: 'Zwei als Beilage, fünfzehn Minuten',
      ingredients: [
        '400 g Brokkoli, in lange Spalten geschnitten',
        '3 EL Olivenöl',
        '4 Sardellenfilets',
        '2 Knoblauchzehen, in Scheiben',
        'Eine Prise Chiliflocken',
        'Zitrone',
      ],
      steps: [
        {
          title: 'Spalten statt Röschen',
          detail:
            'Längs durch den Strunk, damit jedes Stück eine flache Seite hat. Flache Seiten ' +
            'bekommen Farbe; Röschen dämpfen nur und rollen herum.',
        },
        {
          title: 'Zwei Minuten blanchieren',
          detail:
            'In kochendem Salzwasser, dann abgießen und gründlich trocknen. Nasser Brokkoli ' +
            'bekommt keine Farbe, egal wie heiß die Pfanne ist.',
        },
        {
          title: 'Die Sardellen im Öl auflösen',
          detail:
            'Bei kleiner Hitze mit Knoblauch und Chili, bis die Sardellen vollständig zergangen ' +
            'sind — drei, vier Minuten. Sie schmecken dann nicht mehr nach Fisch, sondern nach ' +
            'herzhaft.',
        },
        {
          title: 'Anrösten und anmachen',
          detail:
            'Brokkoli in eine sehr heiße trockene Pfanne, Schnittfläche nach unten, drei Minuten ' +
            'unberührt. Dann das Sardellenöl darüber und Zitrone.',
        },
      ],
      note:
        'Das Öl leistet hier ernährungsphysiologische Arbeit und nicht nur kulinarische: Vitamin K ' +
        'ist fettlöslich, und Brokkoli ohne jedes Fett gibt deutlich weniger davon ab.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Vitamin K',
      dri: 'Dietary Reference Intakes für Vitamin A, Vitamin K, Eisen, Zink und weitere',
      fdc: 'USDA FoodData Central',
    },
  },
};

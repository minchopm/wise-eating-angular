import { LocalisedArticle } from '../types';

/** Die B-Vitamine und Cholin auf Deutsch. Zahlen stehen in nutrient-facts.ts. */
export const VITAMINS_B_DE: Readonly<Record<string, LocalisedArticle>> = {
  /* -------------------------------------------------------------- thiamin */
  thiamin: {
    name: 'Thiamin',
    title: 'Thiamin: was passiert, wenn ein Grundnahrungsmittel poliert wird',
    lede:
      'Beriberi breitete sich im 19. Jahrhundert über Asien aus, verbreitet durch eine Technik: ' +
      'die Maschine, die Reis die Silberhaut abschleift. Das Vitamin sitzt in dem Teil, der ' +
      'weggeworfen wurde.',
    description:
      'Was Thiamin (Vitamin B1) tut, wie viel man braucht, warum Alkohol das größte moderne ' +
      'Risiko ist, und die thiaminreichsten Lebensmittel — aus USDA-Daten.',

    whatItDoes: [
      'Thiamin ist der Cofaktor der Enzyme, mit denen eine Zelle Energie aus Kohlenhydraten ' +
        'gewinnt. Die Pyruvatdehydrogenase, der Schritt, der Zucker in den Citratzyklus einspeist, ' +
        'läuft ohne es nicht — also versagen zuerst die Gewebe, die am stärksten von Glukose ' +
        'abhängen: Nerven und Herzmuskel.',
      'Das erklärt die beiden klassischen Formen. Die trockene Beriberi ist neurologisch: ' +
        'Taubheit, Schwäche, Gangunsicherheit. Die feuchte ist kardial: vergrößertes Herz und ' +
        'Wassereinlagerungen.',
      'Das Wernicke-Korsakow-Syndrom ist derselbe Mangel im Zeitraffer, meist bei starkem ' +
        'Alkoholkonsum, und kann bleibende Gedächtnisschäden verursachen. Es ist ein Notfall und ' +
        'wird mit intravenösem Thiamin behandelt, bevor irgendetwas anderes gegeben wird, auch vor ' +
        'Glukose — denn Glukose zuerst verbraucht das wenige verbliebene Thiamin.',
    ],

    intake: {
      'infant-0-6': { who: 'Säuglinge, 0–6 Monate', note: 'Schätzwert' },
      'infant-7-12': { who: 'Säuglinge, 7–12 Monate', note: 'Schätzwert' },
      'child-1-3': { who: 'Kinder, 1–3 Jahre' },
      'child-4-8': { who: 'Kinder, 4–8 Jahre' },
      'child-9-13': { who: 'Kinder, 9–13 Jahre' },
      'men-14-plus': { who: 'Männer, ab 14' },
      'women-19-plus': { who: 'Frauen, ab 19' },
      pregnancy: { who: 'Schwangerschaft und Stillzeit' },
    },
    intakeNote:
      'Die Speicher reichen nur wenige Wochen, weshalb sich ein Mangel schneller entwickeln kann ' +
      'als bei den meisten Vitaminen. Eine Obergrenze ist nicht festgelegt, weil Überschüsse ' +
      'bereitwillig ausgeschieden werden.',

    foodsIntro:
      'Schweinefleisch ist unter den verbreiteten Lebensmitteln der Ausreißer. Daneben: Vollkorn, ' +
      'Hülsenfrüchte, Kerne und — wo vorgeschrieben — angereichertes Mehl, der einzige Grund, ' +
      'warum Beriberi im Westen heute selten ist.',

    helps: [
      'Vollkorn statt Auszugsmehl, denn beim Mahlen geht das meiste verloren',
      'Angereichertes Mehl und Getreideprodukte, wo es das Gesetz verlangt',
      'Hülsenfrüchte und Kerne, die dicht daran sind',
    ],
    hinders: [
      'Alkohol, der Aufnahme stört und Verluste erhöht — der dominierende Risikofaktor',
      'Langes Kochen, denn Thiamin ist wasserlöslich und hitzeempfindlich',
      'Rohe Fische und Meeresfrüchte in Menge, die Thiaminase enthalten',
      'Langfristig hoch dosierte Diuretika',
    ],
    absorptionNote:
      'Thiamin geht ins Kochwasser über und wird durch lange Hitze zerstört, der Tabellenwert ' +
      'eines Lebensmittels ist also eine Obergrenze und kein Versprechen. Auch Sulfite, als ' +
      'Konservierungsmittel eingesetzt, bauen es ab.',

    shortfall: [
      'Menschen mit Alkoholabhängigkeit — mit Abstand die häufigste Ursache in wohlhabenden Ländern',
      'Menschen nach Adipositaschirurgie',
      'Menschen mit anhaltendem Erbrechen, einschließlich schwerer Schwangerschaftsübelkeit',
      'Menschen unter langfristigen Diuretika bei Herzinsuffizienz',
      'Bevölkerungen, die von poliertem Reis ohne Anreicherung leben',
    ],

    recipe: {
      title: 'Schweinegulasch mit weißen Bohnen und Rosmarin',
      serves: 'Vier, etwa eine Stunde',
      ingredients: [
        '500 g Schweineschulter, gewürfelt',
        '2 Dosen weiße Bohnen, abgetropft',
        '1 Zwiebel, gewürfelt',
        '2 Karotten, in Scheiben',
        '3 Knoblauchzehen',
        '1 Zweig Rosmarin',
        '600 ml Brühe',
        '1 EL Olivenöl',
      ],
      steps: [
        {
          title: 'Das Fleisch portionsweise anbraten',
          detail:
            'Zwei oder drei Durchgänge, nicht einer. Eine überfüllte Pfanne fällt unter ' +
            'Bratentemperatur und das Fleisch kocht im eigenen Saft — das ist der Unterschied ' +
            'zwischen einem Gulasch, das nach etwas schmeckt, und einem, das es nicht tut.',
        },
        {
          title: 'Die Basis aufbauen',
          detail:
            'Zwiebel und Karotte acht Minuten in derselben Pfanne, dabei alles loskratzen, was ' +
            'das Fleisch hinterlassen hat. Dieser Bratensatz ist der größte Teil des Geschmacks.',
        },
        {
          title: 'Niedrig und lang schmoren',
          detail:
            'Fleisch zurück, Brühe, Knoblauch und Rosmarin. Kaum blubbernd, Deckel halb auf, ' +
            'fünfundvierzig Minuten. Sprudelndes Kochen macht Schulter zäh statt zart.',
        },
        {
          title: 'Bohnen zum Schluss',
          detail:
            'Nur die letzten zehn Minuten — sie sind schon gar und werden sonst breiig. Mit der ' +
            'Brühe servieren, in der das ausgetretene Thiamin steckt.',
        },
      ],
      note:
        'Die Flüssigkeit mitessen, nicht nur das Feste. Thiamin ist wasserlöslich, und ein ' +
        'Schmorgericht behält, was Kochen und Abgießen weggeschüttet hätte.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Thiamin',
      dri: 'Dietary Reference Intakes für Thiamin, Riboflavin, Niacin, Vitamin B6, Folat und Vitamin B12',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ----------------------------------------------------------- riboflavin */
  riboflavin: {
    name: 'Riboflavin',
    title: 'Riboflavin: das Vitamin, das den Urin gelb färbt',
    lede:
      'Das leuchtende Gelb nach einem Multivitamin ist ausgeschiedenes Riboflavin, und es ist ' +
      'harmlos. Es ist zugleich eine nützliche Erinnerung daran, was dieses Vitamin ist: etwas, ' +
      'wovon der Körper täglich nimmt, was er braucht, und den Rest verwirft.',
    description:
      'Was Riboflavin (Vitamin B2) tut, wie viel man braucht, warum Licht es zerstört, und die ' +
      'riboflavinreichsten Lebensmittel — aus USDA-Daten.',

    whatItDoes: [
      'Riboflavin wird zu zwei Coenzymen, FAD und FMN, die im Zentrum der Reaktionen stehen, die ' +
        'Elektronen bewegen. Die Atmungskette — die letzte Stufe der Energiegewinnung — hängt ' +
        'unmittelbar von ihnen ab.',
      'Es wird außerdem gebraucht, um andere Vitamine zu aktivieren. Vitamin B6 und Folat ' +
        'brauchen beide riboflavinabhängige Enzyme, um in ihre Arbeitsform zu kommen, und das ' +
        'Enzym, das Tryptophan in Niacin umwandelt, ebenfalls. Ein Riboflavinmangel erzeugt also ' +
        'zugleich einen funktionellen Mangel mehrerer anderer B-Vitamine.',
      'Und es regeneriert Glutathion, eines der wichtigsten körpereigenen Antioxidantien.',
    ],

    intake: {
      'infant-0-6': { who: 'Säuglinge, 0–6 Monate', note: 'Schätzwert' },
      'infant-7-12': { who: 'Säuglinge, 7–12 Monate', note: 'Schätzwert' },
      'child-1-3': { who: 'Kinder, 1–3 Jahre' },
      'child-4-8': { who: 'Kinder, 4–8 Jahre' },
      'child-9-13': { who: 'Kinder, 9–13 Jahre' },
      'men-14-plus': { who: 'Männer, ab 14' },
      'women-19-plus': { who: 'Frauen, ab 19' },
      pregnancy: { who: 'Schwangerschaft' },
      breastfeeding: { who: 'Stillzeit' },
    },

    foodsIntro:
      'Milchprodukte, Eier, Innereien und grünes Gemüse. Milch ist in den meisten westlichen ' +
      'Ernährungsweisen der größte Einzelbeitrag, weshalb die Verpackung mehr zählt, als es ' +
      'klingt.',

    helps: [
      'Lichtundurchlässige Verpackung — ein realer Effekt, keine Formalität',
      'Milchprodukte, Eier und grünes Gemüse regelmäßig',
      'Angereicherte Getreideprodukte, wo vorgeschrieben',
    ],
    hinders: [
      'Licht. Milch in einer Glasflasche in der Sonne verliert binnen Stunden viel davon',
      'Kochen und das Wasser wegschütten',
      'Einige Psychopharmaka und Krebsmedikamente, die den Stoffwechsel stören',
    ],
    absorptionNote:
      'Riboflavin ist bemerkenswert hitzestabil und bemerkenswert lichtempfindlich — das Gegenteil ' +
      'von Vitamin C. Der Übergang von der Glasflasche vor der Tür zum undurchsichtigen Karton war ' +
      'nebenbei eine ernährungsphysiologische Verbesserung.',

    shortfall: [
      'Wer keine Milchprodukte und wenig grünes Gemüse isst',
      'Veganer ohne angereicherte Lebensmittel',
      'Menschen mit Alkoholabhängigkeit',
      'Schwangere und Stillende mit eingeschränkter Ernährung',
    ],

    recipe: {
      title: 'Frittata mit Pilzen und Spinat',
      serves: 'Zwei bis drei, zwanzig Minuten',
      ingredients: [
        '6 Eier',
        '250 g Champignons, in Scheiben',
        '150 g Spinat',
        '40 g Hartkäse, gerieben',
        '2 EL Olivenöl',
        'Schwarzer Pfeffer',
      ],
      steps: [
        {
          title: 'Die Pilze zuerst trocken anbraten',
          detail:
            'Heiße Pfanne, kein Öl, bis das Wasser ausgetreten und verdampft ist. Mit Öl zuerst ' +
            'schmoren sie darin und werden nie braun.',
        },
        {
          title: 'Spinat zusammenfallen lassen und ausdrücken',
          detail:
            'In derselben Pfanne, eine Minute, dann ausdrücken. Nasser Spinat macht eine ' +
            'wässrige Frittata, die nicht richtig stockt.',
        },
        {
          title: 'Fast bis zum Schluss kleine Hitze',
          detail:
            'Öl hinein, Eier mit Käse und Pfeffer verquirlt, dann acht bis zehn Minuten auf ' +
            'kleinster Stufe. Hohe Hitze macht sie unten gummiartig und oben roh.',
        },
        {
          title: 'Unter dem Grill fertigstellen',
          detail: 'Zwei Minuten, bis die Oberfläche gerade gestockt und leicht gebräunt ist.',
        },
      ],
      note:
        'Eier, Pilze und Käse sind drei der besseren Riboflavinquellen, und Pilze liefern zudem ' +
        'Vitamin D, wenn sie UV-Licht ausgesetzt waren.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Riboflavin',
      dri: 'Dietary Reference Intakes für Thiamin, Riboflavin, Niacin, Vitamin B6, Folat und Vitamin B12',
      fdc: 'USDA FoodData Central',
    },
  },

  /* --------------------------------------------------------------- niacin */
  niacin: {
    name: 'Niacin',
    title: 'Niacin: das Vitamin, das der Körper selbst herstellen kann — mit genug Eiweiß',
    lede:
      'Ungewöhnlicherweise lässt sich Niacin aus Tryptophan bauen, einer Aminosäure aus Eiweiß. ' +
      'Deshalb traf Pellagra maisessende Bevölkerungen und nicht jene, deren Grundnahrungsmittel ' +
      'Weizen war.',
    description:
      'Was Niacin (Vitamin B3) tut, wie der Körper es aus Tryptophan bildet, warum die ' +
      'Nixtamalisation entscheidend war, und die niacinreichsten Lebensmittel.',

    whatItDoes: [
      'Niacin wird zu NAD und NADP, den Trägern, die Wasserstoff und Elektronen durch Hunderte ' +
        'von Reaktionen bewegen. NAD ist an mehr enzymatischen Schritten beteiligt als fast jedes ' +
        'andere Molekül im Körper.',
      'Ein Mangel erzeugt Pellagra: Hautentzündung an sonnenexponierten Stellen, Durchfall und ' +
        'Demenz. Im frühen 20. Jahrhundert starben im Süden der USA Zehntausende daran, bevor die ' +
        'Ursache verstanden war.',
      'Das historische Detail lohnt sich. Mais enthält Niacin in gebundener Form, die der Darm ' +
        'nicht freisetzen kann. Mesoamerikanische Kulturen weichten Mais seit Jahrtausenden in ' +
        'Kalkwasser ein — Nixtamalisation —, was es freisetzt. Mais wurde nach Europa und Amerika ' +
        'exportiert, das Verfahren nicht. Pellagra folgte.',
    ],

    intake: {
      'infant-0-6': {
        who: 'Säuglinge, 0–6 Monate',
        note: 'Schätzwert, als vorgebildetes Niacin',
      },
      'infant-7-12': { who: 'Säuglinge, 7–12 Monate', note: 'Schätzwert' },
      'child-1-3': { who: 'Kinder, 1–3 Jahre' },
      'child-4-8': { who: 'Kinder, 4–8 Jahre' },
      'child-9-13': { who: 'Kinder, 9–13 Jahre' },
      'men-14-plus': { who: 'Männer, ab 14' },
      'women-14-plus': { who: 'Frauen, ab 14' },
      pregnancy: { who: 'Schwangerschaft' },
      breastfeeding: { who: 'Stillzeit' },
    },
    intakeNote:
      'NE steht für Niacinäquivalente: 1 mg Niacin oder 60 mg Tryptophan, das der Körper etwa in ' +
      'diesem Verhältnis umwandelt. Eine Ernährung mit ausreichend Eiweiß liefert also einen ' +
      'großen Teil ihres eigenen Niacins, ohne dass Niacin darin enthalten wäre.',

    foodsIntro:
      'Fleisch, Fisch und Geflügel führen, danach Vollkorn, Hülsenfrüchte und Kerne. Die Tabelle ' +
      'zählt nur vorgebildetes Niacin — ein eiweißreiches Lebensmittel trägt mehr bei, als seine ' +
      'Zahl zeigt.',

    helps: [
      'Ausreichend Eiweiß, das Tryptophan zur Umwandlung liefert',
      'Nixtamalisierter Mais — Masa, Tortillas — statt einfachem Maismehl',
      'Ausreichend Riboflavin, B6 und Eisen, die der Umwandlungsweg alle braucht',
    ],
    hinders: [
      'Unbehandelter Mais als Grundnahrungsmittel, wo das Niacin gebunden bleibt',
      'Wenig Eiweiß, was den Tryptophanweg wegnimmt',
      'Karzinoidsyndrom, das Tryptophan anderweitig verbraucht',
      'Isoniazid gegen Tuberkulose, das die Umwandlung stört',
    ],
    absorptionNote:
      'Hoch dosierte Nicotinsäure — ein Gramm und mehr, früher gegen Cholesterin verordnet — löst ' +
      'starke Hautrötung an Gesicht und Brust aus und kann in diesen Dosen die Leber schädigen. ' +
      'Das ist eine pharmakologische Wirkung beim Hundertfachen des Bedarfs und hat mit Niacin aus ' +
      'Lebensmitteln nichts zu tun.',

    shortfall: [
      'Bevölkerungen, die von unbehandeltem Mais oder Sorghum leben',
      'Menschen mit Alkoholabhängigkeit',
      'Menschen mit Karzinoidsyndrom oder Hartnup-Krankheit',
      'Menschen unter langfristigem Isoniazid ohne Ausgleich',
    ],

    recipe: {
      title: 'Hähnchenschenkel mit Paprika und Tomaten',
      serves: 'Vier, vierzig Minuten',
      ingredients: [
        '8 Hähnchenoberschenkel, mit Knochen und Haut',
        '2 TL geräuchertes Paprikapulver',
        '1 Dose gehackte Tomaten',
        '1 Zwiebel, in Scheiben',
        '4 Knoblauchzehen, ganz',
        '1 EL Olivenöl',
        'Eine Handvoll Petersilie',
      ],
      steps: [
        {
          title: 'Die Haut trocknen',
          detail:
            'Gründlich mit Küchenpapier, dann würzen. Feuchte Haut dämpft statt knusprig zu ' +
            'werden, und das lässt sich später nicht mehr beheben.',
        },
        {
          title: 'Auf der Hautseite auslassen',
          detail:
            'Kalte Pfanne, mittlere Hitze, acht Minuten ohne zu bewegen. Kalt anzufangen lässt ' +
            'das Fett austreten, bevor die Haut fest wird — das macht sie knusprig statt ledrig.',
        },
        {
          title: 'Paprikapulver abseits der Hitze',
          detail:
            'Zwiebel im ausgelassenen Fett weich werden lassen, dann die Pfanne vom Herd nehmen, ' +
            'bevor das Paprikapulver dazukommt. Über direkter Hitze verbrennt es in Sekunden.',
        },
        {
          title: 'Mit der Haut nach oben schmoren',
          detail:
            'Tomaten und Knoblauch dazu, Hähnchen obenauf mit der Haut über der Flüssigkeit, ' +
            '25 Minuten bei 190 °C. Petersilie zum Schluss.',
        },
      ],
      note:
        'Hähnchen liefert sowohl vorgebildetes Niacin als auch das Tryptophan, aus dem der Körper ' +
        'weiteres bildet — deshalb deckt Geflügel diesen Bedarf so mühelos.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Niacin',
      dri: 'Dietary Reference Intakes für Thiamin, Riboflavin, Niacin, Vitamin B6, Folat und Vitamin B12',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ----------------------------------------------------- pantothenic acid */
  'pantothenic-acid': {
    name: 'Pantothensäure',
    title: 'Pantothensäure: benannt nach dem Griechischen für „von überall"',
    lede:
      'Der Name beschreibt, wo sie vorkommt, nämlich in praktisch allen Lebensmitteln. Ein ' +
      'isolierter Mangel wurde experimentell erzeugt und ist sonst nahezu unbekannt.',
    description:
      'Was Pantothensäure (Vitamin B5) tut, wie viel man braucht, warum ein Mangel praktisch ' +
      'nicht vorkommt, und die reichsten Lebensmittel — aus USDA-Daten.',

    whatItDoes: [
      'Pantothensäure ist das Rückgrat von Coenzym A, dem Molekül, das Acetylgruppen transportiert. ' +
        'Jedes abgebaute Fett, jede aufgebaute Fettsäure und der Eingang des Citratzyklus laufen ' +
        'über Acetyl-CoA.',
      'Sie ist außerdem Teil des Acyl-Carrier-Proteins, das eine wachsende Fettsäurekette während ' +
        'des Aufbaus festhält.',
      'Weil Coenzym A an einer Kreuzung sitzt, an der Kohlenhydrat-, Fett- und Eiweißstoffwechsel ' +
        'zusammentreffen, gibt es keine saubere Liste von Mangelsymptomen — alles wird zugleich ' +
        'langsamer.',
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
      'Alles Schätzwerte. Weder eine Empfehlung noch eine Obergrenze wurde festgelegt, weil weder ' +
      'Mangel noch Überschuss aus Lebensmitteln je genug Datenmaterial ergeben haben.',

    foodsIntro:
      'Leber, Pilze, Avocado, Eier, Sonnenblumenkerne und Vollkorn — aber die ehrliche ' +
      'Zusammenfassung ist, dass die Spanne über gewöhnliche Lebensmittel schmal ist, und genau ' +
      'das sagt der Name.',

    helps: ['Abwechslungsreich und wenig verarbeitet essen, das ist die ganze Strategie'],
    hinders: [
      'Starke Verarbeitung und Raffination, die einen erheblichen Teil entfernen',
      'Langes Kochen',
      'Alkoholabhängigkeit, wie bei den übrigen B-Vitaminen',
    ],
    absorptionNote:
      'Der interessante Ausfall ist kein ernährungsbedingter. Das „Burning-Feet-Syndrom" wurde bei ' +
      'Kriegsgefangenen im Zweiten Weltkrieg beschrieben und sprach gezielt auf Pantothensäure an ' +
      '— das ist das meiste, was über isolierten Mangel beim Menschen bekannt ist.',

    shortfall: [
      'Bei gewöhnlicher Ernährung praktisch niemand',
      'Menschen mit schwerer Mangelernährung insgesamt, neben anderen Defiziten',
      'Menschen mit Alkoholabhängigkeit',
    ],

    recipe: {
      title: 'Pilze auf Brot mit weichem Ei',
      serves: 'Eine Portion, zwölf Minuten',
      ingredients: [
        '200 g gemischte Pilze, gezupft',
        '1 Ei',
        '1 dicke Scheibe Sauerteigbrot',
        '1 EL Butter',
        '1 Knoblauchzehe',
        'Thymianblättchen',
        'Schwarzer Pfeffer',
      ],
      steps: [
        {
          title: 'Zupfen, nicht schneiden',
          detail:
            'Gezupfte Kanten sind rau und fangen mehr Hitze, was besser bräunt als die glatte ' +
            'Fläche, die ein Messer hinterlässt.',
        },
        {
          title: 'Heiß und trocken beginnen',
          detail:
            'Pilze in eine heiße trockene Pfanne, eine Lage. Sie geben Wasser ab; warten, bis es ' +
            'weg ist, bevor die Butter dazukommt.',
        },
        {
          title: 'Butter, Knoblauch, Thymian',
          detail:
            'Sobald sie trocken sind und Farbe nehmen. Zwei Minuten mehr, den Knoblauch gerieben ' +
            'statt gehackt, damit er in der Butter verschwindet.',
        },
        {
          title: 'Weiches Ei obenauf',
          detail:
            'Sanft gebraten oder pochiert, auf die Pilze auf dem Brot, das mit dem Knoblauchrest ' +
            'eingerieben wurde.',
        },
      ],
      note:
        'Pilze und Eier gehören beide zu den besseren Quellen, und das ist ein Gericht aus fünf ' +
        'Zutaten, das zufällig eine ist.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Pantothensäure',
      dri: 'Dietary Reference Intakes für Thiamin, Riboflavin, Niacin, Vitamin B6, Folat und Vitamin B12',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ----------------------------------------------------------- vitamin B6 */
  'vitamin-b6': {
    name: 'Vitamin B6',
    title: 'Vitamin B6: unentbehrlich, und das einzige B-Vitamin mit echter Obergrenze',
    lede:
      'Es steuert über hundert Enzymreaktionen, fast alle mit Aminosäuren. Es ist zugleich das ' +
      'einzige wasserlösliche Vitamin, bei dem hohe Dosen über lange Zeit nachweislich Nerven ' +
      'schädigen.',
    description:
      'Was Vitamin B6 tut, wie viel man in welchem Alter braucht, warum hoch dosierte Präparate ' +
      'Nerven schädigen können, und die reichsten Lebensmittel — aus USDA-Daten.',

    whatItDoes: [
      'Seine aktive Form, Pyridoxalphosphat, ist der Cofaktor der Enzyme, die Aminogruppen ' +
        'verschieben. Damit ist es am Auf- und Abbau praktisch jeder Aminosäure beteiligt — ' +
        'insgesamt über hundert Reaktionen.',
      'Mehrere davon bilden Neurotransmitter: Serotonin, Dopamin, GABA. Es wird außerdem für den ' +
        'ersten Schritt der Häm-Synthese gebraucht, weshalb ein Mangel eine mikrozytäre Anämie ' +
        'erzeugen kann, die wie Eisenmangel aussieht.',
      'Und es arbeitet mit Folat und B12 zusammen, um Homocystein abzubauen.',
    ],

    intake: {
      'infant-0-6': { who: 'Säuglinge, 0–6 Monate', note: 'Schätzwert' },
      'infant-7-12': { who: 'Säuglinge, 7–12 Monate', note: 'Schätzwert' },
      'child-1-3': { who: 'Kinder, 1–3 Jahre' },
      'child-4-8': { who: 'Kinder, 4–8 Jahre' },
      'child-9-13': { who: 'Kinder, 9–13 Jahre' },
      'adults-19-50': { who: 'Erwachsene, 19–50' },
      'men-51-plus': { who: 'Männer, ab 51' },
      'women-51-plus': { who: 'Frauen, ab 51' },
      pregnancy: { who: 'Schwangerschaft' },
    },
    intakeNote:
      'Die Obergrenze für Erwachsene liegt bei 100 mg täglich. Präparate mit 50–100 mg sind ' +
      'verbreitet, und anhaltende Zufuhr in dieser Höhe hat periphere Neuropathien ausgelöst — ' +
      'Taubheit und Gangunsicherheit, teils nur unvollständig rückbildungsfähig. Das ist das ' +
      'klarste Beispiel eines wasserlöslichen Vitamins, das im Überschuss nicht harmlos ist.',

    foodsIntro:
      'Fisch, Geflügel, Innereien, Kartoffeln, Kichererbsen und Bananen. Es ist weit verbreitet, ' +
      'weshalb ein echter Mangel meist auf ein Medikament oder eine Resorptionsstörung hinweist ' +
      'und nicht auf die Ernährung.',

    helps: [
      'Aus Lebensmitteln statt aus hoch dosierten Präparaten',
      'Ausreichend Riboflavin, das zur Aktivierung gebraucht wird',
      'Wenig verarbeitete Lebensmittel — Raffination entfernt einen großen Teil',
    ],
    hinders: [
      'Isoniazid, Penicillamin und einige andere Medikamente, die es direkt binden',
      'Langes Garen und starke Verarbeitung',
      'Alkoholabhängigkeit',
      'Nierenerkrankung und Dialyse',
    ],
    absorptionNote:
      'Wenn zu Isoniazid ein Präparat verordnet wird, ist das beabsichtigt und richtig — das ' +
      'Medikament entleert B6 und das Präparat verhindert die dadurch drohende Neuropathie. Das ' +
      'oben beschriebene Risiko betrifft unbeaufsichtigte hohe Dosen über lange Zeit, nicht das.',

    shortfall: [
      'Menschen unter Isoniazid, Cycloserin oder Penicillamin',
      'Menschen mit Nierenerkrankung oder unter Dialyse',
      'Menschen mit Autoimmunerkrankungen wie rheumatoider Arthritis oder Zöliakie',
      'Menschen mit Alkoholabhängigkeit',
    ],

    recipe: {
      title: 'Salat aus Kichererbsen, Kartoffeln und Thunfisch',
      serves: 'Zwei, zwanzig Minuten',
      ingredients: [
        '400 g Frühkartoffeln, halbiert',
        '1 Dose Kichererbsen, abgetropft',
        '1 Dose Thunfisch, abgetropft',
        '2 Frühlingszwiebeln, in Ringen',
        '2 EL Olivenöl',
        '1 EL Rotweinessig',
        '1 TL Dijonsenf',
        'Petersilie',
      ],
      steps: [
        {
          title: 'Die Kartoffeln im kalten Wasser ansetzen',
          detail:
            'Kalt, gesalzen, dann zum Simmern bringen. In kochendes Wasser geworfen garen sie ' +
            'außen vor der Mitte und zerfallen.',
        },
        {
          title: 'Nicht zu lange kochen',
          detail:
            'Fünfzehn Minuten, bis das Messer gerade durchgeht. B6 ist wasserlöslich, und jede ' +
            'weitere Minute ist mehr davon im Topf statt im Essen.',
        },
        {
          title: 'Heiß marinieren',
          detail:
            'Essig, Senf und Öl verrühren und sofort über die abgegossenen Kartoffeln, damit sie ' +
            'aufnehmen statt abzuweisen.',
        },
        {
          title: 'Den Rest unterheben',
          detail:
            'Kichererbsen, Thunfisch, Frühlingszwiebeln und Petersilie, wenn die Kartoffeln ' +
            'etwas abgekühlt sind.',
        },
      ],
      note:
        'Kartoffeln, Kichererbsen und Thunfisch sind drei der besseren B6-Quellen und ergeben ' +
        'nebenbei ein gutes Mittagessen, was nicht immer so ausgeht.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Vitamin B6',
      dri: 'Dietary Reference Intakes für Thiamin, Riboflavin, Niacin, Vitamin B6, Folat und Vitamin B12',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ---------------------------------------------------------- vitamin B12 */
  'vitamin-b12': {
    name: 'Vitamin B12',
    title: 'Vitamin B12: nur aus Tieren oder aus der Fabrik',
    lede:
      'Keine Pflanze bildet B12. Kein Tier auch — Bakterien bilden es, Tiere reichern es an. ' +
      'Diese eine Tatsache entscheidet alles darüber, wer darauf achten muss.',
    description:
      'Woher Vitamin B12 tatsächlich kommt, wie viel man braucht, warum die Aufnahme mit Alter ' +
      'und Medikamenten versagt, und die B12-reichsten Lebensmittel — aus USDA-Daten.',

    whatItDoes: [
      'B12 wird gebraucht, um rote Blutkörperchen fertigzustellen. Ohne es geraten sie groß, ' +
        'wenige und schlecht geformt — megaloblastäre Anämie — und die Müdigkeit danach ist ' +
        'dieselbe wie bei Eisenmangel, aus einem völlig anderen Mechanismus.',
      'Es erhält außerdem die Myelinscheide um die Nerven. Das ist die wichtigere Hälfte, denn ' +
        'Nervenschäden aus langbestehendem Mangel können bleiben — und sie können entstehen, ' +
        'während das Blutbild noch normal aussieht.',
      'Und es arbeitet mit Folat in der Reaktion, die Homocystein recycelt. Viel Folat kann die ' +
        'Anämie eines B12-Mangels beheben, während der Nervenschaden darunter weiterläuft — genau ' +
        'deshalb ist Selbstbehandlung mit einem B-Komplex unklug.',
    ],

    intake: {
      'infant-0-6': { who: 'Säuglinge, 0–6 Monate', note: 'Schätzwert' },
      'infant-7-12': { who: 'Säuglinge, 7–12 Monate', note: 'Schätzwert' },
      'child-1-3': { who: 'Kinder, 1–3 Jahre' },
      'child-4-8': { who: 'Kinder, 4–8 Jahre' },
      'child-9-13': { who: 'Kinder, 9–13 Jahre' },
      adults: { who: 'Erwachsene' },
      pregnancy: { who: 'Schwangerschaft' },
      breastfeeding: { who: 'Stillzeit' },
    },
    intakeNote:
      'Das sind kleine Zahlen, und das führt in die Irre. Das Problem bei B12 ist fast nie, wie ' +
      'viel auf dem Teller liegt — sondern ob der Körper es noch vom Teller nehmen kann.',

    foodsIntro:
      'Leber und Muscheln liegen so weit vor allem anderen, dass die Liste kaum eine Rangfolge ' +
      'ist. Beachten Sie, was fehlt: kein einziges nicht angereichertes pflanzliches Lebensmittel, ' +
      'weil keines es enthält.',

    helps: [
      'Magensäure und Intrinsic Factor, die B12 aus der Nahrung lösen und durch den Darm tragen',
      'Angereicherte Lebensmittel und Präparate, in denen B12 bereits frei vorliegt',
      'Über den Tag verteilen — pro Mahlzeit sind nur wenige Mikrogramm aufnehmbar',
    ],
    hinders: [
      'Metformin über lange Zeit',
      'Protonenpumpenhemmer und H2-Blocker, die die nötige Säure verringern',
      'Atrophische Gastritis, im Alter häufig, die den Intrinsic Factor verringert',
      'Magen- oder Ileumoperationen, die das bildende oder aufnehmende Gewebe entfernen',
    ],
    absorptionNote:
      'Spirulina, Nori und fermentierte Lebensmittel werden oft als pflanzliche Quellen genannt. ' +
      'Das meiste darin sind B12-Analoga, die den Rezeptor besetzen, ohne die Arbeit zu tun, und ' +
      'einiges spricht dafür, dass sie die Lage eher verschlechtern. Wer keine tierischen ' +
      'Lebensmittel isst, braucht ein Präparat oder angereicherte Produkte — das ist keine Frage ' +
      'der Ernährungsvorliebe.',

    shortfall: [
      'Veganer und langjährige Vegetarier ohne angereicherte Lebensmittel oder Präparat',
      'Erwachsene ab etwa fünfzig, durch nachlassende Magensäure',
      'Menschen unter Metformin oder langfristiger Säurehemmung',
      'Gestillte Kinder von Müttern mit Mangel — die Speicher bei Geburt sind klein',
      'Menschen nach Adipositaschirurgie oder mit Morbus Crohn im Ileum',
    ],

    recipe: {
      title: 'Püree aus Hühnerleber und Apfel',
      serves: 'Ab 7 Monaten, höchstens ein- bis zweimal im Monat',
      ingredients: [
        '30 g Hühnerleber, geputzt',
        '1 kleiner süßer Apfel, geschält und entkernt',
        '1 kleine Kartoffel, geschält und gewürfelt',
        '1 TL ungesalzene Butter oder Olivenöl',
        'Wasser zum Verdünnen',
      ],
      steps: [
        {
          title: 'Die Leber putzen',
          detail:
            'Helles Bindegewebe und grünlich verfärbte Stellen wegschneiden. Abspülen und trocken tupfen.',
        },
        {
          title: 'Kartoffel und Apfel garen',
          detail: 'Zusammen in ungesalzenem Wasser etwa 12 Minuten, bis beide weich sind.',
        },
        {
          title: 'Die Leber vollständig durchgaren',
          detail:
            'Sanft in der Butter 5–6 Minuten, wendend, bis nirgends mehr Rosa zu sehen ist. Bei ' +
            'Innereien ist „gerade gar" für ein Baby nicht gut genug.',
        },
        {
          title: 'Pürieren',
          detail:
            'Alles zusammen glatt, mit dem Kochwasser verdünnt. Der Apfel leistet hier echte ' +
            'Arbeit — er nimmt einem kräftigen Geschmack die Spitze.',
        },
      ],
      note:
        'Leber ist außerordentlich reich an Vitamin A, und Vitamin A reichert sich an. Zweimal im ' +
        'Monat ist für ein kleines Kind die übliche Obergrenze, und in der Schwangerschaft wird ' +
        'Leber aus demselben Grund gar nicht empfohlen. Vorher ärztlich abklären.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Vitamin B12',
      dri: 'Dietary Reference Intakes für Thiamin, Riboflavin, Niacin, Vitamin B6, Folat und Vitamin B12',
      fdc: 'USDA FoodData Central',
    },
  },

  /* --------------------------------------------------------------- folate */
  folate: {
    name: 'Folat',
    title: 'Folat: das Vitamin, das da sein muss, bevor man es weiß',
    lede:
      'Das Neuralrohr schließt sich in den ersten 28 Tagen einer Schwangerschaft — oft bevor eine ' +
      'Frau weiß, dass sie schwanger ist. Allein wegen dieser Zeitspanne wird Folsäure in über ' +
      'achtzig Ländern dem Mehl zugesetzt.',
    description:
      'Folat gegen Folsäure, wie viel man braucht, warum der Zeitpunkt in der Schwangerschaft ' +
      'alles ist, und die folatreichsten Lebensmittel — aus USDA-Daten.',

    whatItDoes: [
      'Folat transportiert Einkohlenstoffeinheiten, und die Reaktionen, die sie brauchen, sind ' +
        'jene, die DNA aufbauen. Jedes schnell teilende Gewebe — Knochenmark, Darmschleimhaut, ' +
        'ein wachsender Embryo — hängt an stetigem Nachschub.',
      'Ohne es beginnen Zellen die Teilung und können sie nicht beenden. Im Mark ergibt das eine ' +
        'megaloblastäre Anämie, dasselbe Bild wie bei B12-Mangel, weil beide in derselben ' +
        'Reaktion zusammentreffen.',
      'Bei einem Embryo ist der Ausfall strukturell. Das Neuralrohr — aus dem Gehirn und ' +
        'Rückenmark werden — schließt sich zwischen dem 21. und 28. Tag nach der Empfängnis. ' +
        'Ausreichendes Folat in diesem Moment senkt das Risiko für Spina bifida und Anenzephalie ' +
        'deutlich. Ausreichendes Folat zwei Monate später hilft nicht.',
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
      'DFE steht für Folatäquivalente und existiert, weil Folsäure aus Präparaten und ' +
      'angereicherten Lebensmitteln etwa 1,7-mal besser aufgenommen wird als Folat aus ' +
      'Lebensmitteln. Die Empfehlung in den meisten Ländern lautet, dass alle, die schwanger ' +
      'werden könnten, täglich 400 µg Folsäure nehmen — nicht ab der Schwangerschaft, sondern ' +
      'vorher, genau wegen des Zeitpunkts oben.',

    foodsIntro:
      'Der Name kommt von folium, lateinisch für Blatt, und die Rangfolge bestätigt es: ' +
      'Blattgemüse, Hülsenfrüchte, Leber und — wo vorgeschrieben — angereichertes Mehl.',

    helps: [
      'Blattgemüse roh oder kurz gegart, denn Folat ist hitzeempfindlich',
      'Hülsenfrüchte, die dicht daran sind und es besser halten als Blätter',
      'Angereichertes Mehl und Getreideprodukte, wo vorgeschrieben',
    ],
    hinders: [
      'Langes Kochen, das das meiste zerstören oder auswaschen kann',
      'Alkohol, der die Aufnahme stört und die Ausscheidung erhöht',
      'Methotrexat und manche Antiepileptika, die Folatantagonisten sind',
      'Zöliakie und andere Resorptionsstörungen',
    ],
    absorptionNote:
      'Eine Warnung zu Präparaten. Viel Folsäure kann die Anämie eines B12-Mangels verdecken, ' +
      'während der neurologische Schaden unbemerkt fortschreitet — deshalb gibt es die ' +
      'Obergrenze von 1.000 µg für Erwachsene, und deshalb ist ein B-Komplex ein schlechtes ' +
      'Mittel gegen Müdigkeit auf eigene Faust.',

    shortfall: [
      'Alle, die schwanger werden könnten und nicht supplementieren',
      'Menschen mit Alkoholabhängigkeit',
      'Menschen unter Methotrexat, Sulfasalazin oder bestimmten Antiepileptika',
      'Menschen mit Zöliakie oder chronisch-entzündlicher Darmerkrankung',
    ],

    recipe: {
      title: 'Warmer Linsensalat mit Spargel und weichem Ei',
      serves: 'Zwei, fünfundzwanzig Minuten',
      ingredients: [
        '150 g Belugalinsen oder Le Puy',
        '250 g Spargel, holzige Enden abgebrochen',
        '2 Eier',
        '2 EL Olivenöl',
        '1 EL Sherryessig',
        '1 Schalotte, fein gewürfelt',
        'Eine Handvoll Petersilie',
      ],
      steps: [
        {
          title: 'Die Linsen köcheln, nicht kochen',
          detail:
            'Zwanzig Minuten bei kaum sichtbarem Sieden in ungesalzenem Wasser. Sprudelndes ' +
            'Kochen sprengt die Schalen und man bekommt Suppe.',
        },
        {
          title: 'Den Spargel kurz dämpfen',
          detail:
            'Drei bis vier Minuten, noch mit Biss. Folat ist eines der hitzeempfindlichsten ' +
            'Vitamine, und weich gekochter Spargel hat das meiste abgegeben.',
        },
        {
          title: 'Die Eier wachsweich kochen',
          detail:
            'Sechseinhalb Minuten ab dem Kochen, dann in kaltes Wasser und vorsichtig pellen.',
        },
        {
          title: 'Warm marinieren',
          detail:
            'Schalotte, Essig und Öl über die abgegossenen Linsen, solange sie heiß sind; Spargel ' +
            'und Petersilie unterheben; Eier halbiert obenauf.',
        },
      ],
      note:
        'Linsen, Spargel und Eigelb sind alle drei starke Folatquellen. Kurz zu garen ist hier ' +
        'keine Pedanterie — es ist der größte Teil des Unterschieds zwischen der Zahl auf dem ' +
        'Etikett und der Zahl auf dem Teller.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Folat',
      dri: 'Dietary Reference Intakes für Thiamin, Riboflavin, Niacin, Vitamin B6, Folat und Vitamin B12',
      fdc: 'USDA FoodData Central',
    },
  },

  /* -------------------------------------------------------------- choline */
  choline: {
    name: 'Cholin',
    title: 'Cholin: erst 1998 als unentbehrlich anerkannt',
    lede:
      'Jahrzehntelang wurde angenommen, der Körper bilde genug davon selbst. Er bildet etwas — ' +
      'nur nicht genug — und die meisten Erwachsenen nehmen weniger auf als empfohlen, wobei die ' +
      'Empfehlung erst 1998 erschien.',
    description:
      'Was Cholin für Zellmembranen, Gedächtnis und die Leber tut, wie viel man braucht, und die ' +
      'cholinreichsten Lebensmittel — aus USDA-Daten.',

    whatItDoes: [
      'Cholin ist die Kopfgruppe des Phosphatidylcholins, des wichtigsten Phospholipids jeder ' +
        'Zellmembran. Strukturell ist es eines der Materialien, aus denen der Körper gebaut ist, ' +
        'und kein Katalysator.',
      'Es ist außerdem die Vorstufe von Acetylcholin, dem Neurotransmitter von Gedächtnis, ' +
        'Aufmerksamkeit und jeder willkürlichen Muskelkontraktion.',
      'Und es wird gebraucht, um Fett als VLDL aus der Leber zu exportieren. Ohne genug davon ' +
        'sammelt sich dort Fett an — Cholinmangel erzeugt in kontrollierten Studien zuverlässig ' +
        'eine Fettleber, und so wurde der Bedarf überhaupt erst festgestellt.',
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
    },
    intakeNote:
      'Alles Schätzwerte. Nationale Erhebungen finden die durchschnittliche Zufuhr regelmäßig ' +
      'deutlich darunter, besonders bei Menschen, die keine Eier essen — und der Bedarf in der ' +
      'Schwangerschaft ist höher, weil das fetale Gehirn stark aus dem mütterlichen Vorrat zieht.',

    foodsIntro:
      'Eigelb und Leber dominieren. Daneben tragen Fleisch, Fisch, Soja, Kohlgemüse und Bohnen ' +
      'bei, aber nichts kommt den ersten beiden nahe.',

    helps: [
      'Ganze Eier statt nur Eiweiß — praktisch alles Cholin sitzt im Gelb',
      'Gelegentlich Leber, die dichteste Quelle überhaupt',
      'Soja, Kohlgemüse und Bohnen für alle, die beides meiden',
    ],
    hinders: [
      'Eigelb wegwerfen, was einem Ei fast alles Cholin nimmt',
      'Wenig Folat, da sich die beiden Wege teilweise vertreten',
      'Bestimmte Genvarianten, die den individuellen Bedarf deutlich erhöhen',
    ],
    absorptionNote:
      'Darmbakterien wandeln einen Teil des Nahrungscholins in TMAO um, eine Verbindung, die in ' +
      'Beobachtungsstudien mit kardiovaskulärem Risiko in Verbindung gebracht wird. Die Datenlage ' +
      'ist nicht abschließend und rechtfertigt derzeit nicht, cholinreiche Lebensmittel zu meiden ' +
      '— aber sie erklärt, warum darüber gestritten wird, und warum „mehr ist besser" nicht die ' +
      'Schlussfolgerung ist.',

    shortfall: [
      'Wer Eier und Innereien meidet',
      'Schwangere, deren Bedarf steigt und deren Zufuhr oft nicht',
      'Frauen nach der Menopause, denen der östrogenbedingte Eigenbeitrag wegfällt',
      'Menschen mit bestimmten verbreiteten Genvarianten im Syntheseweg',
    ],

    recipe: {
      title: 'Shakshuka mit ganzen Eiern',
      serves: 'Zwei, fünfundzwanzig Minuten',
      ingredients: [
        '4 Eier',
        '1 Dose gehackte Tomaten',
        '1 rote Paprika, in Streifen',
        '1 Zwiebel, in Scheiben',
        '2 Knoblauchzehen',
        '1 TL Kreuzkümmel',
        '1 TL Paprikapulver',
        '2 EL Olivenöl',
        'Petersilie oder Koriander',
      ],
      steps: [
        {
          title: 'Die Basis richtig einkochen',
          detail:
            'Zwiebel und Paprika zehn Minuten, dann die Tomaten weitere zehn, bis ein Löffel eine ' +
            'Spur hinterlässt. Eine wässrige Basis hält die Eier nicht dort, wo man sie hinsetzt.',
        },
        {
          title: 'Mulden formen',
          detail:
            'Vier Vertiefungen mit dem Löffelrücken drücken und je ein Ei hineinschlagen. Ganze ' +
            'Eier — im Gelb sitzt praktisch alles Cholin.',
        },
        {
          title: 'Deckel drauf, Hitze runter',
          detail:
            'Sechs bis acht Minuten. Das Eiweiß soll gestockt und das Gelb noch weich sein; der ' +
            'Deckel gart oben, ohne unten zu übergaren.',
        },
        {
          title: 'Kräuter bei Tisch',
          detail: 'Erst nach dem Herd darüberstreuen, damit sie grün bleiben.',
        },
      ],
      note:
        'Vier Eigelb für zwei Personen decken einen erheblichen Teil des Tagesbedarfs an Cholin, ' +
        'was ohne Leber schwer anders zu erreichen ist.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Cholin',
      dri: 'Dietary Reference Intakes für Thiamin, Riboflavin, Niacin, Vitamin B6, Folat, Vitamin B12 und Cholin',
      fdc: 'USDA FoodData Central',
    },
  },
};

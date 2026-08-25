import { LocalisedGuide } from '../guide-types';

/** Die Trainings-Ratgeber auf Deutsch. Zahlen stehen in guide-facts.ts. */
export const GUIDES_TRAINING_DE: Readonly<Record<string, LocalisedGuide>> = {
  /* ------------------------------------------------------ Protein pro Mahlzeit */
  'protein-per-meal': {
    title: 'Sie essen wahrscheinlich genug Eiweiß und verschenken das meiste davon',
    short: 'Eiweiß pro Mahlzeit',
    lede:
      'Die Tagessumme ist die Zahl, die alle verfolgen, und die am wenigsten aussagt. Muskel ' +
      'wird als Antwort auf einzelne Mahlzeiten aufgebaut, und ein Tag, der sein Ziel in einer ' +
      'Sitzung erreicht, ist nicht derselbe Tag wie einer, der es über drei erreicht.',
    description:
      'Warum Eiweiß pro Mahlzeit wirkt und nicht pro Tag, was die Leucin-Schwelle ist, und warum ' +
      'das anabole Fenster sehr viel weiter ist, als es verkauft wurde.',

    commonBelief:
      'Wenn die Gramm am Tagesende stimmen, regelt sich die Verteilung von selbst — und nach dem ' +
      'letzten Satz müssen binnen dreißig Minuten Proteine rein, sonst war das Training umsonst.',

    sections: [
      {
        heading: 'Muskel hat kein Konto, sondern einen Schalter',
        body: [
          'Es gibt keinen Eiweißspeicher. Fett hat einen, Kohlenhydrate einen kleinen, Eiweiß ' +
            'keinen — jedes Gramm davon im Körper ist bereits ein arbeitender Teil von etwas. Der ' +
            'Körper kann einen Überschuss vom Abendessen also nicht anlegen und beim Frühstück ' +
            'ausgeben, wie er es mit Energie tut.',
          'Stattdessen schaltet er. Eine Mahlzeit kommt an, Aminosäuren erscheinen im Blut, und ' +
            'wenn sie eine bestimmte Konzentration überschreiten, läuft die Maschinerie, die ' +
            'Muskeleiweiß baut, für einige Stunden — und schaltet danach ab, unabhängig davon, ' +
            'was sonst noch im Blut ist. Unterhalb dieser Konzentration springt sie gar nicht an.',
          'Genau deshalb führt die Tagessumme in die Irre. Zwei Menschen mit 120 g Eiweiß tun ' +
            'nicht dasselbe, wenn der eine die Schwelle dreimal überschreitet und der andere ' +
            'einmal. Der zweite hat dasselbe gegessen und den größten Teil davon an einem ' +
            'Schalter vorbeigeschickt, der aus war.',
        ],
      },
      {
        heading: 'Was den Schalter umlegt, ist Leucin, nicht Eiweiß',
        body: [
          'Der Auslöser ist eine einzelne Aminosäure. Leucin ist das Signal, das die Messstelle ' +
            'liest; die übrigen Aminosäuren sind die Ziegel, die danach verbaut werden. Eine ' +
            'Mahlzeit mit genug Gesamteiweiß, aber wenig Leucin erzeugt eine schwache Antwort — ' +
            'genau das passiert, wenn jemand mit Gelatine oder Kollagenpulver auffüllt und sich ' +
            'wundert, dass nichts geschieht.',
          'Deshalb erledigen tierische Proteine und Soja das effizienter als die meisten einzelnen ' +
            'Pflanzenproteine: Sie tragen mehr Leucin pro Gramm. Das ist keine Aussage darüber, ' +
            'welches die besseren Lebensmittel sind, und es bedeutet nicht, dass eine ' +
            'pflanzlich essende Person das nicht erreicht — es bedeutet, dass sie etwas mehr ' +
            'davon essen oder Quellen kombinieren muss, um beim selben Signal anzukommen.',
        ],
      },
      {
        heading: 'Das Fenster ist ein Saal',
        body: [
          'Die Dreißig-Minuten-Regel hat sehr viel Pulver verkauft und die Prüfung nicht ' +
            'überstanden. Sobald Studien die Tagesgesamtmenge konstant hielten — was die frühen ' +
            'nicht taten —, verschwand der Vorteil des sofortigen Essens weitgehend. Die erhöhte ' +
            'Empfindlichkeit für Eiweiß hält Stunden an, nicht Minuten.',
          'Das ist eine der Stellen, an denen sich die Evidenz wirklich noch bewegt, und die ' +
            'Tabelle sagt das, statt es zu verschweigen. Nicht umstritten ist die Form des Rats, ' +
            'der daraus folgt: genug essen, verteilen, und den Wecker weglassen.',
          'Der eine Fall, in dem Timing doch zählt, ist eine lange Lücke danach — nüchtern um ' +
            'sechs trainieren und bis eins nichts essen lässt den Schalter sehr lange aus. Das ' +
            'ist ein Verteilungsproblem im Timing-Kostüm.',
        ],
      },
      {
        heading: 'Ernst wird es beim Alter',
        body: [
          'Älterer Muskel reagiert schwächer auf dasselbe Signal. Die Schwelle steigt, eine ' +
            'Portion, die mit dreißig eine Antwort ausgelöst hätte, tut es mit siebzig nicht mehr ' +
            '— und das Ergebnis ist der langsame Verlust von Muskel und der Sturz, der darauf ' +
            'folgt.',
          'Deshalb liegt der Wert für ältere Menschen in der Tabelle höher als die allgemeine ' +
            'Empfehlung und deutlich höher als die Zufuhrempfehlung. Diese verhindert einen ' +
            'Mangel. Einen Mangel verhindern und Muskel halten sind zwei Fragen, und eine Zahl ' +
            'kann nicht beide beantworten.',
        ],
      },
    ],

    claims: {
      rda: {
        what: 'Empfohlene Zufuhr, alle Erwachsenen',
        note: 'Verhindert einen Mangel. Kein Zielwert für Trainierende',
      },
      'daily-athlete': { what: 'Trainierende Erwachsene, täglich' },
      'per-meal': { what: 'Pro Mahlzeit, um eine Antwort auszulösen' },
      'leucine-threshold': { what: 'Leucin pro Mahlzeit', note: 'Etwa 25–30 g eines guten Proteins' },
      'older-adults': { what: 'Ab etwa 65 Jahren', note: 'Die Schwelle steigt mit dem Alter' },
      window: {
        what: 'Das Fenster nach dem Training',
        note: 'Weit größer als die verkauften dreißig Minuten',
      },
    },
    claimsNote:
      'Je Kilogramm Körpergewicht. Die Spannen sind Spannen, weil die zugrunde liegenden Studien ' +
      'an den Rändern uneins sind — eine einzelne Zahl wäre eine ordentlichere Lüge.',

    practical: [
      {
        title: 'Zählen Sie Mahlzeiten, nicht Gramm',
        detail:
          'Drei oder vier Mahlzeiten, die jeweils die Schwelle überschreiten, schlagen einen Tag, ' +
            'der dieselbe Summe mit einem großen Abendessen erreicht. Wenn Sie eine Sache ändern, ' +
            'ändern Sie das Frühstück — es liegt am häufigsten darunter.',
      },
      {
        title: 'Setzen Sie eine Zahl auf die kleinste Mahlzeit',
        detail:
          'Die meisten wissen, wie ihr Abendessen aussieht, und haben keine Vorstellung vom ' +
            'Mittag. Schlagen Sie die nach, bei der Sie am unsichersten sind; dort liegt meist ' +
            'die Lücke.',
      },
      {
        title: 'Hören Sie auf zu timen und fangen Sie an zu verteilen',
        detail:
          'Drei bis fünf Stunden zwischen den Eiweißmahlzeiten, keine Stoppuhr nach dem letzten ' +
            'Satz. Ausnahme ist eine lange Lücke rund ums Training — dann näher dran essen, aus ' +
            'Verteilungsgründen und nicht aus magischen.',
      },
      {
        title: 'Ab fünfundsechzig bewusst höher zielen',
        detail:
          'Dieselbe Portion leistet weniger. Das ist die eine Gruppe, bei der der Unterschied ' +
            'zwischen Zufuhrempfehlung und Trainingswert nicht akademisch ist.',
      },
    ],

    seeAlso: ['protein', 'vitamin-d', 'calcium'],

    sources: {
      'issn-protein': 'International Society of Sports Nutrition — Position zu Protein und Training',
      'issn-timing': 'International Society of Sports Nutrition — Position zum Nährstoff-Timing',
      'prot-age': 'PROT-AGE-Studiengruppe — Proteinzufuhr bei älteren Menschen',
      'dri-macro': 'Dietary Reference Intakes für Energie, Kohlenhydrate, Ballaststoffe, Fett, Protein und Aminosäuren',
    },
  },

  /* ------------------------------------------------- Eisen und Ausdauer */
  'iron-and-endurance': {
    title: 'Wer plötzlich nicht mehr vorankommt, hat nicht immer übertrainiert',
    short: 'Eisen und Ausdauer',
    lede:
      'Einer Athletin, deren Einheiten still schwerer geworden sind, wird meist mehr Erholung ' +
      'geraten. Manchmal stimmt das. Manchmal sinkt das Ferritin seit vier Monaten, und keine ' +
      'Erholung der Welt fasst das an.',
    description:
      'Warum Ausdauersportler Eisen schneller verlieren, als sie es ersetzen, was Ferritin ' +
      'wirklich aussagt, und warum Supplementieren ohne Blutbild der falsche Schritt ist.',

    commonBelief:
      'Wenn mein Blutbild normal war, ist Eisen nicht mein Problem — und wenn ich müde bin, kann ' +
      'ein Präparat nur helfen.',

    sections: [
      {
        heading: 'Drei Wege, auf denen Training Eisen herausnimmt',
        body: [
          'Der erste ist mechanisch. Jeder Fußaufsatz zerstört eine kleine Zahl roter Blutkörper ' +
            'in den Kapillaren der Sohle — Marschhämolyse —, und das Eisen darin wird nicht ' +
            'vollständig zurückgewonnen. Für sich genommen ist das gering. Mal hundert Kilometer ' +
            'pro Woche, über Jahre, ist es das nicht mehr.',
          'Der zweite ist Schweiß, der Eisen in kleinen Mengen trägt, die sich über lange ' +
            'Einheiten in Hitze summieren.',
          'Der dritte wird übersehen, weil er der Intuition entgegenläuft. Hartes Training hebt ' +
            'Hepcidin, das Hormon, das die Eisenaufnahme drosselt, und es bleibt stundenlang ' +
            'erhöht. Die Mahlzeit nach einer harten Einheit — die, auf die eine Athletin am ' +
            'meisten achtet — wird also schlechter aufgenommen als dieselbe Mahlzeit an einem ' +
            'Ruhetag. Der Körper verliert Eisen ans Training und weigert sich danach kurz, mehr ' +
            'aufzunehmen.',
        ],
      },
      {
        heading: 'Warum ein normales Blutbild nichts beweist',
        body: [
          'Hämoglobin fällt zuletzt. Der Körper hat einen Speicher — Ferritin — und er wird ihn ' +
            'vollständig leeren, bevor er den Blutwert sinken lässt, denn Sauerstoff zu ' +
            'transportieren ist dringender, als eine Reserve zu halten.',
          'Es gibt daher eine lange Strecke, oft viele Monate, in der die Reserve weg ist, die ' +
            'Athletin sich fortschreitend schlechter fühlt und jedes Standardlabor normal ' +
            'zurückkommt. Das heißt Eisenmangel ohne Anämie, und in diesem Zustand sind die ' +
            'meisten Betroffenen tatsächlich. Die Anämie ist das Ende des Vorgangs, nicht sein ' +
            'Anfang.',
          'Der Test, der das sieht, ist Ferritin, und man muss ihn verlangen. Er steht nicht auf ' +
            'dem Routineblatt. Wenn Sie eine Sache von dieser Seite mitnehmen, dann den Namen ' +
            'dieses Tests.',
        ],
      },
      {
        heading: 'Was der Wert bedeutet, und seine große Falle',
        body: [
          'Der in der Sportmedizin verwendete Schwellenwert liegt höher als der, mit dem in der ' +
            'Allgemeinbevölkerung eine Anämie diagnostiziert wird, weil die Frage eine andere ' +
            'ist — nicht „ist dieser Mensch krank", sondern „hat dieser Mensch genug Reserve, um ' +
            'hart zu trainieren".',
          'Die Falle ist, dass Ferritin auch bei Entzündung steigt, und hartes Training ist ' +
            'entzündlich. Ein Ferritin, das am Morgen nach einer harten Einheit abgenommen wird, ' +
            'kann beruhigend hoch aussehen, während der Speicher tatsächlich niedrig ist. Blut an ' +
            'einem Ruhetag, idealerweise zusammen mit einem Entzündungsmarker, ist die Mühe der ' +
            'Terminplanung wert.',
        ],
      },
      {
        heading: 'Warum man nicht einfach etwas nimmt',
        body: [
          'Weil der Körper keinen Weg hat, einen Überschuss loszuwerden. Er reguliert Eisen über ' +
            'die Aufnahme, und was einmal drin ist, bleibt drin. Dauerhafte Einnahme bei jemandem, ' +
            'der nicht knapp war, reichert an — und bei einer Person mit einer ' +
            'Hämochromatose-Anlage, die häufig genug ist, dass man nichts davon wüsste, reichert ' +
            'sie schnell an.',
          'Eisen konkurriert außerdem mit Zink und Kupfer um dieselben Aufnahmewege, sodass ' +
            'Monate unnötigen Eisens einen anderen Mangel schaffen können, während Sie einen ' +
            'behandeln, den Sie nicht hatten.',
          'Wo eine echte Lücke bestätigt ist, ist die Behandlung einfach und oft eindrucksvoll. ' +
            'Das ist ein Argument fürs Testen, nicht gegen das Handeln.',
        ],
      },
      {
        heading: 'Bei der Nahrung geht es vor allem darum, womit man sie isst',
        body: [
          'Die Aufnahme aus einer pflanzlichen Quelle schwankt um den Faktor fünf und mehr, je ' +
            'nachdem, was sonst auf dem Teller liegt. Vitamin C in derselben Mahlzeit ' +
            'vervielfacht sie. Tee oder Kaffee zur Mahlzeit halbiert sie ungefähr — und wer ' +
            'Haferbrei mit einem großen Kaffee isst, hebt den Haferbrei wieder auf.',
          'Die praktische Fassung davon ist unglamourös: den Kaffee eine Stunde von der ' +
            'eisenhaltigen Mahlzeit wegrücken und etwas Saures auf den Teller legen. Das ist ein ' +
            'größerer Eingriff als die meisten Präparate, und er kostet nichts.',
        ],
      },
    ],

    claims: {
      'athlete-multiplier': {
        what: 'Ausdauersportler, gegenüber der Zufuhrempfehlung',
        note: 'Nochmals höher bei pflanzlicher Ernährung',
      },
      'ferritin-floor': {
        what: 'Ferritin, unter dem die Sportmedizin handelt',
        note: 'Höher als die Schwelle zur Anämiediagnose',
      },
      'female-endurance-prevalence': {
        what: 'Betroffene Ausdauersportlerinnen',
        note: 'Eisenmangel ohne Anämie, nicht Anämie',
      },
      'vitamin-c-effect': { what: 'Wirkung von Vitamin C auf Nicht-Häm-Eisen' },
      'tea-effect': { what: 'Wirkung von Tee oder Kaffee zur Mahlzeit' },
    },
    claimsNote:
      'Die Häufigkeitsangabe ist eine Spanne, weil Studien unterschiedliche Ferritin-Schwellen ' +
      'verwenden. Diese Uneinigkeit ist real und der Grund, warum hier ein Band steht.',

    practical: [
      {
        title: 'Fragen Sie Ferritin ausdrücklich nach',
        detail:
          'Es steht nicht auf dem Routineblatt, und ein normales Blutbild schließt ein Problem ' +
            'nicht aus. Das ist der nützlichste Satz auf dieser Seite.',
      },
      {
        title: 'Blut an einem Ruhetag abnehmen lassen',
        detail:
          'Ferritin steigt bei Entzündung, und Training ist entzündlich. Nach einer harten ' +
            'Einheit fällt der Wert falsch beruhigend aus.',
      },
      {
        title: 'Verschieben Sie den Kaffee, nicht den Haferbrei',
        detail:
          'Eine Stunde vor oder nach der eisenhaltigen Mahlzeit. Gerbstoffe können die Aufnahme ' +
            'halbieren, was mehr bewegt als das meiste, was Menschen kaufen.',
      },
      {
        title: 'Nicht auf Verdacht supplementieren',
        detail:
          'Der Körper kann keinen Überschuss ausscheiden, und Eisen konkurriert auf dem Weg ' +
            'hinein mit Zink und Kupfer. Erst bestätigen, dann behandeln.',
      },
    ],

    seeAlso: ['iron', 'vitamin-c', 'zinc', 'copper'],

    sources: {
      'ods-iron': 'NIH Office of Dietary Supplements — Eisen',
      'iom-iron': 'Dietary Reference Intakes für Eisen — Institute of Medicine',
      'iron-athletes': 'Eisen im Sport — eine Übersichtsarbeit',
    },
  },

  /* ------------------------------------------- Krämpfe und Elektrolyte */
  'cramp-and-electrolytes': {
    title: 'Der Krampf liegt wahrscheinlich nicht an Ihren Elektrolyten',
    short: 'Krämpfe und Elektrolyte',
    lede:
      'Die Salz-und-Magnesium-Erklärung ist das am weitesten verbreitete Wissen im Amateursport, ' +
      'und die Evidenz dafür ist sehr viel dünner als die Überzeugung, mit der sie wiederholt ' +
      'wird.',
    description:
      'Was die Evidenz zu belastungsbedingten Muskelkrämpfen sagt, warum Magnesiumpräparate sie ' +
      'nicht verhindern, und was offenbar doch hilft.',

    commonBelief:
      'Krämpfe heißen, dass ich zu wenig getrunken habe oder Salz und Magnesium fehlen. Eine ' +
      'Magnesiumtablette vor dem Schlafen, und es hört auf.',

    sections: [
      {
        heading: 'Die Theorie, die alle kennen, und was mit ihr nicht stimmt',
        body: [
          'Die Dehydratations- und Elektrolyt-Erklärung sagt: Schwitzen entzieht Flüssigkeit und ' +
            'Natrium, die Flüssigkeit um den Muskel verändert sich, und der Muskel wird ' +
            'übererregbar. Das ist plausibel, es passt dazu, dass Krämpfe in heißen Rennen ' +
            'auftreten, und es ist seit Jahrzehnten die Standarderklärung.',
          'Nur hat es der Prüfung nicht gut standgehalten. Studien, die Krampfende und ' +
            'Nicht-Krampfende im selben Rennen verglichen, fanden meist nicht den Unterschied in ' +
            'Flüssigkeitshaushalt oder Blutnatrium, den die Theorie braucht. Krämpfe treten auch ' +
            'bei Kühle auf, bei Schwimmern, und in Muskeln, die nicht am härtesten gearbeitet ' +
            'haben.',
          'Und es gibt ein einfacheres Problem: Ein Krampf trifft meist eine Muskelgruppe, während ' +
            'der Rest des Körpers, der dieselbe Flüssigkeit getrunken und dasselbe Salz verloren ' +
            'hat, unbeteiligt bleibt. Ein Mangel des ganzen Körpers erklärt ein örtliches ' +
            'Ereignis schlecht.',
        ],
      },
      {
        heading: 'Die Erklärung, die besser passt',
        body: [
          'Die derzeit führende Erklärung ist neuromuskulär statt chemisch. Wenn ein Muskel ' +
            'ermüdet, geraten die Reflexe, die ihn steuern, aus dem Gleichgewicht — das Signal ' +
            'zum Anspannen bleibt erhöht, während das zum Loslassen schwächer wird — und der ' +
            'Muskel verriegelt.',
          'Diese Erklärung sagt vorher, womit die Elektrolytversion sich schwertut: dass Krämpfe ' +
            'am Ende harter Belastungen kommen und nicht am Anfang, in genau den arbeitenden ' +
            'Muskeln, in verkürzter Stellung, und dass Dehnen sie löst. Dehnen tut nichts für Ihr ' +
            'Blutnatrium und alles für die Reflexschleife — und Dehnen ist, was einen Krampf im ' +
            'Moment tatsächlich beendet.',
          'Es passt auch zum besten bisher gefundenen Einzelprädiktor, und der ist überhaupt kein ' +
            'Blutwert: eine Vorgeschichte von Krämpfen, und schneller loszulaufen als sonst.',
        ],
      },
      {
        heading: 'Wo Magnesium hereinkommt, und warum meist nicht',
        body: [
          'Magnesium ist tatsächlich an der Muskelentspannung beteiligt, weshalb die Geschichte so ' +
            'einleuchtet. Nur stützen die Studien das Supplementieren zur Krampfvermeidung nicht ' +
            '— bei Menschen ohne Mangel kamen Übersichtsarbeiten wiederholt zu keinem ' +
            'bedeutsamen Effekt, und bei nächtlichen Wadenkrämpfen älterer Menschen ist er ' +
            'bestenfalls klein.',
          'Das ist eine engere Aussage als „Magnesium ist nutzlos". Wenn Ihre Zufuhr wirklich ' +
            'niedrig ist, lohnt es sich, das zu beheben — aus Gründen, die mit Krämpfen nichts zu ' +
            'tun haben, und etwa die Hälfte der Erwachsenen liegt unter dem Referenzwert. Eine ' +
            'echte Lücke schließen und ein Symptom behandeln sind zwei verschiedene Vorhaben.',
        ],
      },
      {
        heading: 'Wofür Natrium tatsächlich da ist',
        body: [
          'Natriumersatz zählt, aber für ein anderes Problem. Über lange Belastungen kann es, ' +
            'wenn man große Mengen reines Wasser trinkt und dabei Salz ausschwitzt, das Blutnatrium ' +
            'verdünnen — Hyponatriämie —, und die ist auf eine Weise gefährlich, wie es ein ' +
            'Krampf nicht ist.',
          'Die Spanne des Schweißnatriums in der Tabelle ist enorm, und das ist der ehrliche ' +
            'Befund: Menschen unterscheiden sich um den Faktor zehn darin, wie salzig ihr Schweiß ' +
            'ist. Womit allgemeine Ratschläge zur Salzmenge während Belastung nahezu bedeutungslos ' +
            'sind — und die Salztablette, die einen Läufer verwandelt hat, für den nächsten nichts ' +
            'tut.',
        ],
      },
    ],

    claims: {
      'sweat-sodium': {
        what: 'Natrium im Schweiß, zwischen Personen',
        note: 'Ein Zehnfaches, weshalb allgemeine Ratschläge scheitern',
      },
      'sweat-rate': { what: 'Schweißrate unter Belastung' },
      'magnesium-evidence': {
        what: 'Magnesiumpräparate zur Krampfvermeidung',
        note: 'Bei Menschen ohne Mangel',
      },
      'weight-loss-limit': {
        what: 'Flüssigkeitsverlust, ab dem die Leistung fällt',
        note: 'Ein Richtwert, keine Klippe',
      },
    },

    practical: [
      {
        title: 'Dehnen, nicht trinken',
        detail:
          'Passives Dehnen des krampfenden Muskels ist der eine Eingriff, der eine Episode ' +
            'zuverlässig beendet — und er wirkt über den Reflex, nicht über die Blutbahn.',
      },
      {
        title: 'Schauen Sie aufs Tempo, bevor Sie aufs Präparat schauen',
        detail:
          'Der stärkste bisher gefundene Prädiktor ist, schneller loszulaufen, als das Training ' +
            'trägt. Das hört sich schlechter an als „nimm Magnesium" und ist nützlicher.',
      },
      {
        title: 'Eine echte Magnesiumlücke um ihrer selbst willen schließen',
        detail:
          'Etwa die Hälfte der Erwachsenen liegt unter dem Referenzwert, und das zu korrigieren ' +
            'lohnt sich. Erwarten Sie nur keine Krampfheilung.',
      },
      {
        title: 'Für lange Distanzen: lernen Sie Ihren eigenen Schweiß kennen',
        detail:
          'Bei einem Zehnfachen zwischen Menschen ist die einzige brauchbare Zahl Ihre eigene. ' +
            'Wiegen Sie sich vor und nach einer langen Einheit in der Hitze.',
      },
    ],

    seeAlso: ['magnesium', 'potassium', 'calcium'],

    sources: {
      'acsm-fluid': 'American College of Sports Medicine — Position zu Belastung und Flüssigkeitsersatz',
      'cochrane-cramp': 'Magnesium bei Muskelkrämpfen — systematische Übersichtsarbeit',
      'cramp-neuro': 'Veränderte neuromuskuläre Kontrolle und belastungsbedingter Muskelkrampf',
    },
  },

  /* --------------------------------------------------------------- Kreatin */
  'creatine-what-holds-up': {
    title: 'Kreatin ist das, was übrig geblieben ist',
    short: 'Kreatin',
    lede:
      'Fast alles im Regal für Nahrungsergänzung ist entweder ungeprüft oder geprüft und für ' +
      'leicht befunden. Eine billige, unglamouröse Substanz wird seit dreißig Jahren untersucht ' +
      'und wirkt weiterhin — was auf einer Seite, die die meiste Zeit davon abrät, deutlich ' +
      'gesagt gehört.',
    description:
      'Was Kreatin tatsächlich tut, welche Dosierungen belegt sind, was das Wassergewicht ist, ' +
      'und warum die Nierenwarnung nie eine Grundlage hatte.',

    commonBelief:
      'Kreatin ist etwas aus der Bodybuilding-Ecke, es belastet die Nieren, und man muss laden ' +
      'und wieder absetzen.',

    sections: [
      {
        heading: 'Was es ist, und das ist weniger exotisch als die Verpackung',
        body: [
          'Kreatin ist eine Verbindung, die Ihre Leber ohnehin herstellt und Ihre Muskeln ohnehin ' +
            'speichern, und Sie essen etwa ein Gramm davon täglich in Fleisch und Fisch. ' +
            'Supplementieren hebt die Muskelspeicher um etwa zwanzig bis vierzig Prozent über ' +
            'das, was Nahrung allein liefert.',
          'Was diese Speicher tun, ist ATP während sehr kurzer, sehr harter Belastungen ' +
            'nachzuliefern. Die ersten Sekunden eines Sprints oder eines schweren Satzes laufen ' +
            'über ein Phosphatsystem, das schnell leer ist und sich aus Kreatin wieder füllt. ' +
            'Mehr gespeichertes Kreatin heißt schnelleres Nachfüllen, heißt eine Wiederholung ' +
            'mehr, heißt — über Monate wiederholt — mehr geleistete Arbeit und mehr Anpassung.',
          'Das ist der ganze Mechanismus. Es baut keinen Muskel auf; es lässt Sie etwas härter ' +
            'trainieren, und das Training baut den Muskel.',
        ],
      },
      {
        heading: 'Woher die Nierenwarnung kam',
        body: [
          'Kreatin hebt das Kreatinin im Blut, und Kreatinin ist der Marker, mit dem Labore die ' +
            'Nierenfunktion schätzen. Eine Routineuntersuchung bei jemandem, der Kreatin nimmt, ' +
            'kann also nach eingeschränkter Niere aussehen, während die Niere völlig in Ordnung ' +
            'ist — der Marker hat sich bewegt, nicht das Organ.',
          'Aus diesem Artefakt wurde eine Gesundheitswarnung, die seit fünfundzwanzig Jahren im ' +
            'Umlauf ist. Kontrollierte Studien, auch über Jahre laufende, haben bei gesunden ' +
            'Erwachsenen keinen Nierenschaden gefunden. Die Fachgesellschaften sind hier ' +
            'ungewöhnlich deutlich.',
          'Der echte Vorbehalt: Bei bestehender Nierenerkrankung ist das ein Gespräch mit einer ' +
            'Ärztin und keine Entscheidung aus einem Artikel. Und wenn Blut abgenommen wird, ' +
            'sagen Sie, dass Sie es nehmen, damit niemand einer Zahl hinterherjagt, die eine ' +
            'langweilige Erklärung hat.',
        ],
      },
      {
        heading: 'Laden, absetzen und anderes, was man nicht muss',
        body: [
          'Laden funktioniert und ist nicht nötig. Eine hohe Dosis über fünf bis sieben Tage füllt ' +
            'die Speicher schnell; eine Erhaltungsdosis füllt sie in etwa drei bis vier Wochen ' +
            'genauso vollständig. Der einzige Grund zu laden ist Ungeduld, und der Preis ist, ' +
            'dass in dieser Phase Magenprobleme auftreten.',
          'Für das Absetzen gibt es überhaupt keine Evidenz. Die Speicher sinken über etwa einen ' +
            'Monat auf den Ausgangswert zurück, was kein Vorteil ist.',
          'Auch die Form ist geklärt: Kreatin-Monohydrat. Die teureren Varianten haben es im ' +
            'direkten Vergleich nicht übertroffen, und Monohydrat ist das, woran die gesamte ' +
            'Forschung gemacht wurde.',
        ],
      },
      {
        heading: 'Die Gewichtszunahme, die real ist und kein Fett',
        body: [
          'Kreatin zieht Wasser in die Muskelzellen. Die Waage steigt in den ersten Wochen um ein ' +
            'bis zwei Kilogramm, und das ist Wasser innerhalb der Zellen — kein Fett und kein ' +
            'Aufgeschwemmtsein im üblichen Sinn.',
          'Für die meisten ist das unerheblich oder leicht positiv. Für alle in einer ' +
            'Gewichtsklasse oder in einem Ausdauerwettkampf, in dem jedes Kilogramm einen Berg ' +
            'hinaufgetragen wird, ist es eine echte Abwägung und keine Nebensache.',
        ],
      },
      {
        heading: 'Was wir nicht behaupten',
        body: [
          'Es gibt eine wachsende Literatur zu Kreatin und Kognition, besonders unter Schlafmangel, ' +
            'und ein Teil davon sieht interessant aus. Sie ist viel jünger und viel kleiner als ' +
            'die Muskelliteratur, und sie ist nicht der Grund, es zu nehmen.',
          'Diese Seite ist bei Kraft und Magermasse zuversichtlich, weil dreißig Jahre Studien ' +
            'übereinstimmen. Beim Rest ist sie es bewusst nicht, und die Tabelle sagt, was was ' +
            'ist.',
        ],
      },
    ],

    claims: {
      maintenance: { what: 'Erhaltungsdosis', note: 'Monohydrat; kein Absetzen nötig' },
      loading: { what: 'Optionale Ladephase', note: 'Schneller, nicht besser' },
      'strength-effect': { what: 'Kraftzuwachs gegenüber Training allein' },
      'water-weight': { what: 'Frühe Gewichtszunahme', note: 'Wasser in der Zelle, kein Fett' },
      'kidney-evidence': { what: 'Nierenschaden bei gesunden Erwachsenen' },
    },

    practical: [
      {
        title: 'Kaufen Sie Monohydrat und sonst nichts',
        detail:
          'Es ist die billigste Form und die, mit der jede Studie gearbeitet hat. Die teuren ' +
            'Varianten haben sie im direkten Vergleich nicht geschlagen.',
      },
      {
        title: 'Lassen Sie die Ladephase weg',
        detail:
          'Eine Erhaltungsdosis erreicht dieselben Speicher in drei bis vier Wochen und vermeidet ' +
            'die Magenprobleme, die das Laden manchmal macht.',
      },
      {
        title: 'Täglich nehmen, auch an Ruhetagen',
        detail:
          'Es wirkt, indem es Speicher voll hält, nicht akut. Timing ums Training herum spielt ' +
            'kaum eine Rolle, Regelmäßigkeit schon.',
      },
      {
        title: 'Vor der Blutabnahme erwähnen',
        detail:
          'Es hebt das Kreatinin, mit dem die Nierenfunktion geschätzt wird. Sagen Sie es, und ' +
            'niemand untersucht ein Artefakt.',
      },
    ],

    seeAlso: ['protein', 'magnesium'],

    sources: {
      'issn-creatine': 'International Society of Sports Nutrition — Position zu Kreatin',
      'creatine-brain': 'Kreatin und kognitive Leistung — eine neuere Übersichtsarbeit',
    },
  },

  /* --------------------------------------------------- Magnesium und Muskel */
  'magnesium-and-muscle': {
    title: 'Magnesium leistet sehr viel, und fast nichts davon ist das, wofür es verkauft wird',
    short: 'Magnesium und Muskel',
    lede:
      'Es ist Cofaktor in mehreren hundert Enzymreaktionen, etwa die Hälfte der Erwachsenen ' +
      'bekommt weniger als den Referenzwert, und die Werbung hat es an genau das Ergebnis ' +
      'gehängt, zu dem die Studien am wenigsten freundlich sind.',
    description:
      'Was Magnesium in Muskel und Nerv tatsächlich tut, warum Sportler mehr davon verlieren, und ' +
      'der Abstand zwischen einer echten Lücke und den Versprechen auf der Dose.',

    commonBelief:
      'Magnesium ist das Regenerationsmineral. Nach dem Training oder vor dem Schlafen genommen, ' +
      'entspannen sich Muskeln, der Schlaf wird besser und Krämpfe hören auf.',

    sections: [
      {
        heading: 'Die eigentliche Aufgabe',
        body: [
          'Magnesium tut nichts von sich aus. Es ist das, was mehrere hundert Enzyme brauchen, um ' +
            'ihre Arbeit zu tun — darunter die, die Eiweiß bauen, DNA kopieren und Nahrung in ' +
            'nutzbare Energie verwandeln. Jedes ATP-Molekül ist funktionell magnesiumgebunden. ' +
            'Deshalb zeigt sich eine Lücke als diffuse Müdigkeit statt als eine bestimmte Klage: ' +
            'Es fällt nicht ein System aus, es läuft alles etwas schlechter.',
          'Im Muskel steht es dem Calcium gegenüber. Calcium sagt einer Faser, sie soll sich ' +
            'zusammenziehen; Magnesium ist Teil dessen, was sie wieder loslassen lässt. Dieses ' +
            'Paar ist der Keim der Regenerationswerbung, und die Biologie stimmt — der Sprung von ' +
            'der Biologie zur Dose ist es, der nicht trägt.',
        ],
      },
      {
        heading: 'Warum Training den Bedarf hebt',
        body: [
          'Ein Teil geht über den Schweiß verloren, in Mengen, die über lange Einheiten in Hitze ' +
            'zählen. Ein Teil über den Urin, und harte Belastung erhöht diesen Verlust. Und ' +
            'Magnesium verteilt sich während der Belastung um — es wandert zwischen Kompartimenten ' +
            '—, was einer der Gründe ist, warum Blutwerte den Status so schlecht abbilden.',
          'Wie viel mehr eine Sportlerin braucht, ist wirklich offen, und die Tabelle sagt das. ' +
            'Der übliche Wert ist bescheiden, und er ist kleiner als die Lücke, die die meisten ' +
            'ohnehin schon durch raffiniertes Getreide haben.',
        ],
      },
      {
        heading: 'Wo ein Bluttest in die Irre führt',
        body: [
          'Etwa sechzig Prozent des Magnesiums im Körper sind im Knochen, das meiste übrige in den ' +
            'Zellen. Unter einem Prozent ist im Blut, und der Körper verteidigt diesen Anteil, ' +
            'indem er Magnesium aus dem Knochen holt.',
          'Ein normales Serummagnesium ist daher mit einem geleerten Speicher vereinbar — genauso ' +
            'wie ein normales Blutcalcium mit einem Skelett vereinbar ist, das seit Jahren dafür ' +
            'bezahlt. Es gibt keinen billigen Routinetest, der den Speicher sieht, weshalb der ' +
            'vernünftige Weg ist, auf das zu schauen, was Sie essen, statt einer Zahl ' +
            'hinterherzujagen.',
        ],
      },
      {
        heading: 'Der Abstand zwischen Lücke schließen und Wirkung kaufen',
        body: [
          'Wenn Ihre Zufuhr niedrig ist, lohnt es sich, sie zu heben — für die Enzyme, für die ' +
            'Blutdruckdaten und für den Knochen. Das ist eine reale und häufige Lage, und das ' +
            'Mahlen ist der Grund: Beim Raffinieren gehen Keim und Schale ab und mit ihnen rund ' +
            'vier Fünftel des Magnesiums.',
          'Wenn Ihre Zufuhr bereits ausreicht, hat mehr davon nichts Nennenswertes gezeigt, auch ' +
            'nicht für Krämpfe und auch nicht für den Schlaf. Die Studien mit Nutzen sind ' +
            'weitgehend Studien an Menschen, die zu wenig hatten.',
          'Es gibt auch eine Obergrenze, die überrascht: Sie gilt nur für Magnesium aus ' +
            'Präparaten, nicht aus Lebensmitteln. Mit Mandeln kann man es nicht übertreiben. Mit ' +
            'einer Dose schon, und das erste Zeichen ist Durchfall — denn genau die Formen, die am ' +
            'schlechtesten aufgenommen werden, sind die, die als Abführmittel verkauft werden.',
        ],
      },
    ],

    claims: {
      'sweat-loss': { what: 'Magnesiumverlust über den Schweiß' },
      'athlete-need': {
        what: 'Zusätzlicher Bedarf bei Sportlern',
        note: 'Wirklich offen; kleiner als die meisten Ernährungslücken',
      },
      'supplement-effect': {
        what: 'Nutzen des Supplementierens',
        note: 'Studien mit Wirkung sind meist an Menschen mit Mangel',
      },
      'upper-limit-supplemental': {
        what: 'Obergrenze, nur Präparate',
        note: 'Gilt nicht für Magnesium aus Lebensmitteln',
      },
    },

    practical: [
      {
        title: 'Ändern Sie das Getreide, bevor Sie die Dose kaufen',
        detail:
          'Beim Mahlen gehen etwa achtzig Prozent des Magnesiums verloren. Vollkorn statt ' +
            'raffiniert bewegt mehr als ein Präparat und bringt alles andere mit, was mitging.',
      },
      {
        title: 'Lesen Sie ein normales Serummagnesium nicht als Entwarnung',
        detail:
          'Unter einem Prozent Ihres Magnesiums ist im Blut, und der Körper verteidigt diesen ' +
            'Anteil aus dem Knochen. Ein normaler Wert schließt einen geleerten Speicher nicht aus.',
      },
      {
        title: 'Wenn Sie doch supplementieren, achten Sie auf die Form',
        detail:
          'Oxid wird schlecht aufgenommen und steckt in den meisten billigen Dosen. Citrat und ' +
            'Glycinat werden besser aufgenommen. Und die Obergrenze gilt für Präparate, nicht für ' +
            'Lebensmittel.',
      },
    ],

    seeAlso: ['magnesium', 'calcium', 'potassium'],

    sources: {
      'ods-mg': 'NIH Office of Dietary Supplements — Magnesium',
      'mg-exercise': 'Magnesiumstatus und körperliche Belastung — eine Übersichtsarbeit',
      'mg-review': 'Magnesiumsupplementierung und Endpunkte — systematische Übersichtsarbeit',
    },
  },
};

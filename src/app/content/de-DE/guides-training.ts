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

  /* --------------------------------------------- Vitamin D und Leistung */
  'vitamin-d-and-performance': {
    title: 'Vitamin D behebt einen Mangel; es verleiht keinen Vorteil',
    short: 'Vitamin D und Leistung',
    lede:
      'Etwa die Hälfte der getesteten Sportler ist unterversorgt, und das zu korrigieren lohnt ' +
      'sich. Was daraus nicht folgt, ist das, was auf dem Etikett steht: dass mehr, bei jemandem ' +
      'der bereits versorgt ist, überhaupt etwas tut.',
    description:
      'Warum Sportler so oft zu wenig Vitamin D haben, was das Korrigieren für die Leistung tut ' +
      'und was nicht, und wo das echte Risiko der Überdosierung liegt.',

    commonBelief:
      'Vitamin D steigert Kraft und Immunsystem, also ist mehr besser, und eine große Wochendosis ' +
      'ist eine vernünftige Absicherung.',

    sections: [
      {
        heading: 'Warum Sportler so oft niedrig liegen',
        body: [
          'Weil der meiste Sport drinnen stattfindet, früh, oder bedeckt. Vitamin D entsteht in ' +
            'der Haut aus UVB, und UVB geht nicht durch Glas, Sonnencreme oder Kleidung. Wer in ' +
            'einer Halle, einem Becken oder einem Studio trainiert, hat im Winter ungefähr ' +
            'dieselbe Exposition wie ein Büromensch.',
          'Die Breite erledigt den Rest. Oberhalb von etwa siebenunddreißig Grad steht die ' +
            'Wintersonne zu tief, um nennenswerte Mengen zu erzeugen — für mehrere Monate. ' +
            'Dunklere Haut braucht längere Exposition für dieselbe Synthese, derselbe Plan ' +
            'liefert also weniger.',
          'Lebensmittel beteiligen sich kaum. Außerhalb von fettem Fisch, Eigelb und bewusst ' +
            'angereicherten Produkten ist das kein Nährstoff, den die Ernährung liefert — weshalb ' +
            'er sich anders verhält als alles andere auf dieser Seite.',
        ],
      },
      {
        heading: 'Was das Korrigieren bewirkt',
        body: [
          'Bei Menschen mit Mangel verbessert das Auffüllen die Muskelfunktion und senkt die Rate ' +
            'an Ermüdungsbrüchen. Dieser Effekt ist real und er ist es wert.',
          'Bei Menschen, die bereits ausreichend versorgt waren, hat mehr in kontrollierten ' +
            'Studien keinen Leistungsvorteil erzeugt. Das ist die Form der meisten ' +
            'Mikronährstoffgeschichten und lohnt sich zu verinnerlichen: Die Kurve ist ein Plateau ' +
            'und keine Steigung. Eine Begrenzung wegzunehmen hilft; einem System, das nicht ' +
            'begrenzt war, Überschuss hinzuzufügen, tut es nicht.',
        ],
      },
      {
        heading: 'Die Knochenhälfte, die mehr zählt als die Leistungshälfte',
        body: [
          'Vitamin D steuert, wie viel Calcium Sie aufnehmen. Eine Sportlerin mit niedrigem ' +
            'Vitamin D kann reichlich Calcium essen und es trotzdem nicht in den Knochen ' +
            'bekommen — und Knochen unter wiederholter Belastung ist genau das Gewebe, das sich ' +
            'das nicht leisten kann.',
          'Deshalb sind das Vitamin-D-Gespräch und das Ermüdungsbruch-Gespräch dasselbe Gespräch, ' +
            'und deshalb gehört es neben die Energieverfügbarkeit und nicht neben die Präparate.',
        ],
      },
      {
        heading: 'Der eine Mikronährstoff, bei dem Raten wirklich riskant ist',
        body: [
          'Vitamin D ist fettlöslich und wird gespeichert statt ausgeschieden, was es zu einem der ' +
            'wenigen macht, bei denen unbedachtes Supplementieren echten Schaden anrichtet. ' +
            'Anhaltend hohe Dosen heben das Blutcalcium, und das schädigt Nieren und Gefäße.',
          'Sehr große Einzeldosen — die Monatsdosis, die effizient klingt — haben in Studien ' +
            'ebenfalls schlecht abgeschnitten; einige zeigten mehr Stürze und Brüche statt ' +
            'weniger. Täglich und moderat schlägt monatlich und heroisch.',
          'Wie beim Eisen ist der vernünftige Schritt ein Bluttest. Er ist billig, er ist die ' +
            'einzige Möglichkeit zu wissen, auf welcher Seite des Plateaus Sie stehen, und er ' +
            'macht aus einer Vermutung eine Entscheidung.',
        ],
      },
    ],

    claims: {
      'athlete-insufficiency': {
        what: 'Als unterversorgt befundene Sportler',
        note: 'Gepoolt über Studien; höher in nördlichen Breiten',
      },
      sufficiency: { what: 'Als ausreichend geltender Blutspiegel' },
      'performance-effect': {
        what: 'Leistungsnutzen',
        note: 'Aus dem Beheben eines Mangels, nicht aus Überschuss',
      },
      'upper-limit': { what: 'Obergrenze für Erwachsene' },
    },

    practical: [
      {
        title: 'Testen statt annehmen, in beide Richtungen',
        detail:
          'Die Hälfte der Sportler liegt niedrig und die Hälfte nicht, und es gibt kein Symptom, ' +
            'das die beiden trennt. Ein Bluttest macht aus einer Vermutung eine Entscheidung.',
      },
      {
        title: 'Täglich und moderat, nicht monatlich und heroisch',
        detail:
          'Große Einzeldosen haben in Studien schlechter abgeschnitten als gleichmäßige — auch ' +
            'bei genau den Endpunkten, die sie verbessern sollten.',
      },
      {
        title: 'Behandeln Sie es zuerst als Knochenfrage',
        detail:
          'Der Effekt auf die Calciumaufnahme ist der, der unter wiederholter Belastung am ' +
            'meisten zählt. Er gehört in dasselbe Gespräch wie Ermüdungsbrüche.',
      },
    ],

    seeAlso: ['vitamin-d', 'calcium', 'magnesium'],

    sources: {
      'ods-vitd': 'NIH Office of Dietary Supplements — Vitamin D',
      'vitd-athletes': 'Vitamin-D-Status bei Sportlern — systematische Übersicht und Metaanalyse',
    },
  },

  /* ------------------------------------------------ Knochen unter Last */
  'bone-under-load': {
    title: 'Ermüdungsbrüche sind meist ein Energieproblem im Knochenkostüm',
    short: 'Knochen unter Last',
    lede:
      'Knochen reagiert auf Training wie Muskel — er wird stärker. Das tut er nur, wenn genug ' +
      'Energie hereinkommt, und der häufigste Grund, warum er es nicht tut, ist nicht Calcium.',
    description:
      'Warum sich Ermüdungsbrüche bei unterversorgten Sportlern häufen, was Energieverfügbarkeit ' +
      'bedeutet, und wo Calcium und Vitamin D tatsächlich hineingehören.',

    commonBelief:
      'Ermüdungsbrüche kommen von zu viel Training, und die Ernährungsseite besteht darin, genug ' +
      'Calcium zu bekommen.',

    sections: [
      {
        heading: 'Knochen ist kein Gerüst, sondern ein Gewebe mit Budget',
        body: [
          'Er wird ständig abgebaut und wieder aufgebaut. Ihn zu belasten — laufen, springen, ' +
            'heben — signalisiert ihm, dort stärker wieder aufzubauen, wo die Last liegt. Deshalb ' +
            'haben Sportler mit Bodenkontakt dichteren Knochen als Schwimmer.',
          'Wiederaufbau kostet Energie, und es ist kein dringender Posten. Bei Knappheit finanziert ' +
            'ein Körper das, was ihn heute am Leben hält, und verschiebt das, was sich über Jahre ' +
            'auszahlt. Knochenumbau gehört klar in die zweite Kategorie, zusammen mit ' +
            'Fortpflanzung und Immunfunktion.',
          'Der Ausfallmodus ist also nicht „zu hart trainiert". Er ist „so hart trainiert bei so ' +
            'wenig Essen", und das sind verschiedene Probleme mit verschiedenen Lösungen. Eines ' +
            'davon wird schlimmer, wenn man mit Ruhe und weniger Essen antwortet.',
        ],
      },
      {
        heading: 'Die Zahl, die es tatsächlich vorhersagt',
        body: [
          'Energieverfügbarkeit ist die Energie, die nach dem Training übrig bleibt, bezogen auf ' +
            'die fettfreie Masse. Das ist die Größe, die der Körper wirklich liest, und unterhalb ' +
            'einer Schwelle beginnen die hormonellen Folgen: Sexualhormone fallen, der ' +
            'Knochenumbau verschiebt sich Richtung Abbau, und bei Frauen wird der Zyklus ' +
            'unregelmäßig oder bleibt aus.',
          'Das ist ein Signal, keine Nebenwirkung. Einer Läuferin, deren Periode ausbleibt, wird ' +
            'etwas Bestimmtes über ihren Knochen gesagt, und die richtige Antwort ist nicht, das ' +
            'Symptom zu behandeln.',
          'Deshalb wurde das Syndrom umbenannt. Es hieß Female Athlete Triad; heute heißt es ' +
            'relativer Energiemangel im Sport, weil sich zeigte, dass es auch Männer betrifft und ' +
            'weit über den Knochen hinausreicht — bis in Immunsystem, Stimmung, Herz-Kreislauf ' +
            'und genau die Leistung, die das Ganze schützen sollte.',
        ],
      },
      {
        heading: 'Wo Calcium und Vitamin D hineingehören, und wo nicht',
        body: [
          'Sie zählen. Vitamin D steuert, wie viel Ihres Calciums Sie aufnehmen, und eine ' +
            'Sportlerin mit niedrigem Vitamin D kann reichlich essen und es trotzdem nicht in den ' +
            'Knochen bekommen. Sportler verlieren zudem nennenswert Calcium über den Schweiß, ' +
            'weshalb die im Sport verwendeten Werte über der allgemeinen Empfehlung liegen.',
          'Aber sie sind das Rohmaterial, nicht die Anweisung. Ziegel an eine Baustelle ohne Budget ' +
            'zu liefern, ergibt keine Mauer. Genau dieser Teil wird in der Praxis umgedreht: Der ' +
            'Athletin mit drei Ermüdungsbrüchen werden Calciumtabletten gereicht, und niemand ' +
            'fragt, was sie isst.',
        ],
      },
      {
        heading: 'Der unangenehme Teil',
        body: [
          'Ein nennenswerter Anteil der Ermüdungsbrüche im Ausdauersport tritt bei Sportlern auf, ' +
            'die zu wenig essen, und ein nennenswerter Anteil davon tut es mit Absicht — weil in ' +
            'den meisten Ausdauerdisziplinen leichter schneller ist, bis es das ziemlich plötzlich ' +
            'nicht mehr ist.',
          'Das heißt, die ehrliche Fassung dieser Seite handelt teilweise von einem psychologischen ' +
            'Muster und nicht von einem ernährungsphysiologischen — und ein Ernährungsartikel ist ' +
            'dafür das falsche Instrument. Wenn weniger essen die Strategie ist und die ' +
            'Verletzungen weiter kommen, ist das nützliche Gespräch eines mit Sportmedizin und ' +
            'oft mit einer Ernährungsfachkraft, nicht mit einem Calciumpräparat.',
        ],
      },
    ],

    claims: {
      'calcium-athlete': {
        what: 'Calcium bei hoher Trainingsbelastung',
        note: 'Über der allgemeinen Empfehlung, vor allem wegen Schweißverlusten',
      },
      'vitamin-d-target': { what: 'Als ausreichend geltender Vitamin-D-Spiegel' },
      'energy-availability': {
        what: 'Als ausreichend geltende Energieverfügbarkeit',
        note: 'Je kg fettfreier Masse',
      },
      'low-energy-threshold': {
        what: 'Schwelle, unter der die hormonelle Störung beginnt',
        note: 'Die Zahl, die Knochenverletzungen tatsächlich vorhersagt',
      },
      'stress-fracture-share': { what: 'Sportler mit mindestens einem Ermüdungsbruch' },
    },

    practical: [
      {
        title: 'Fragen Sie nach dem Essen, bevor Sie nach dem Umfang fragen',
        detail:
          'Wiederholte Ermüdungsbrüche bei jemandem, der vernünftig trainiert, deuten auf die ' +
            'Zufuhr und nicht auf das Volumen. Ruhe plus weniger essen macht diese Variante ' +
            'schlimmer.',
      },
      {
        title: 'Behandeln Sie eine ausbleibende Periode als Knocheninformation',
        detail:
          'Sie ist eines der klarsten Zeichen, dass die Energieverfügbarkeit zu niedrig ist, und ' +
            'sie betrifft das Skelett ebenso wie den Zyklus.',
      },
      {
        title: 'Vitamin D vor Calcium in Ordnung bringen',
        detail:
          'Ohne es nehmen Sie nur einen Bruchteil dessen auf, was ankommt. Die Reihenfolge zählt.',
      },
      {
        title: 'Wenn Leichtsein der Plan ist, holen Sie jemanden dazu',
        detail:
          'Sportmedizin und Ernährungsfachkraft. Das ist der Punkt, an dem ein Artikel aufhört, ' +
            'das richtige Instrument zu sein.',
      },
    ],

    seeAlso: ['calcium', 'vitamin-d', 'vitamin-k', 'protein'],

    sources: {
      'ioc-reds': 'IOC-Konsenspapier — relativer Energiemangel im Sport (REDs)',
      'ods-vitd': 'NIH Office of Dietary Supplements — Vitamin D',
      'stress-fx': 'Epidemiologie von Ermüdungsbrüchen im Sport',
    },
  },

  /* --------------------------------------- Antioxidantien und Anpassung */
  'antioxidants-and-adaptation': {
    title: 'Hochdosierte Antioxidantien können das Training abschwächen, das Sie gerade gemacht haben',
    short: 'Antioxidantien und Anpassung',
    lede:
      'Der oxidative Stress aus hartem Training sieht aus wie Schaden, und der Reflex ist, ihn ' +
      'wegzuwischen. Er ist zugleich das Signal, das dem Muskel sagt, sich anzupassen — und es ' +
      'gibt Studien, die zeigen, dass Wegwischen einen Teil der Anpassung kostet.',
    description:
      'Warum hochdosiertes Vitamin C und E die Trainingsanpassung stören können, ab welchen ' +
      'Dosen, und warum dieselben Nährstoffe aus Lebensmitteln es offenbar nicht tun.',

    commonBelief:
      'Training erzeugt freie Radikale, freie Radikale sind schlecht, also helfen Antioxidantien ' +
      'bei der Regeneration und sind im schlimmsten Fall harmlos.',

    sections: [
      {
        heading: 'Das Signal, das wie Schaden aussieht',
        body: [
          'Arbeitender Muskel erzeugt reaktive Sauerstoffspezies. Lange galten sie ausschließlich ' +
            'als Verschleiß — als etwas zu Neutralisierendes —, und die Ergänzungsmittelindustrie ' +
            'wurde auf dieser Lesart gebaut.',
          'Es stellte sich heraus, dass sie auch Boten sind. Der Anstieg des oxidativen Stresses ' +
            'nach einer harten Einheit ist Teil dessen, woran die Zelle merkt, dass sie ' +
            'gearbeitet hat: Sie schaltet die Gene an, die Mitochondrien bauen und die eigene ' +
            'antioxidative Abwehr verbessern. Der Stress ist die Anweisung.',
          'Damit ergibt sich das unangenehme Resultat. Flutet man das System im falschen Moment ' +
            'mit hochdosierten Antioxidantien, unterdrückt man die Anweisung mitsamt dem Stress. ' +
            'Mehrere kontrollierte Studien fanden genau das — abgeschwächte Anpassungen in der ' +
            'supplementierten Gruppe gegenüber Placebo, bei identischem Training.',
        ],
      },
      {
        heading: 'Wie die Dosen aussehen',
        body: [
          'Die Studien, die eine Abschwächung fanden, arbeiteten mit Dosen weit über dem, was ' +
            'Lebensmittel liefern — der Art, die auf einem Sportpräparat steht und nicht in Obst ' +
            'vorkommt. Die Tabelle nennt die Werte aus der bekanntesten davon.',
          'Das ist eine der klareren Veranschaulichungen eines Prinzips, das durch diese ganze ' +
            'Seite läuft: Ein Nährstoff ist keine Substanz mit einer Richtung. Dieselbe Verbindung ' +
            'in Ernährungsmengen und in pharmakologischen Mengen tut zwei verschiedene Dinge, und ' +
            'das zweite ist nicht einfach mehr vom ersten.',
        ],
      },
      {
        heading: 'Warum Lebensmittel dieses Problem nicht haben',
        body: [
          'Keine Studie hat eine abgeschwächte Anpassung durch das Essen von Obst und Gemüse ' +
            'gezeigt, und der Grund ist Dosis und Darreichung. Eine große Portion Beeren liefert ' +
            'eine Größenordnung weniger Vitamin C als die Kapseln in diesen Studien, langsam, und ' +
            'neben Hunderten anderer Verbindungen.',
          'Die praktische Schlussfolgerung ist daher nicht „Antioxidantien meiden". Sie ist das ' +
            'Gegenteil dessen, was das Regal nahelegt: aus Lebensmitteln reichlich, und der Dose ' +
            'gegenüber skeptisch sein.',
        ],
      },
      {
        heading: 'Wann das Signal zu dämpfen richtig ist',
        body: [
          'Es gibt eine echte Ausnahme, und sie folgt aus dem Mechanismus. Wenn das Ziel nicht ' +
            'Anpassung ist, sondern so schnell wie möglich wieder einsatzfähig zu sein — drei ' +
            'Spiele in einer Woche, eine Rundfahrt, ein Turnier —, kann das Dämpfen der Antwort ' +
            'ein vernünftiger Tausch sein.',
          'Das ist ein enger, taktischer Einsatz im Wettkampf und keine Gewohnheit für die ' +
            'Trainingsphase. Im Aufbau ist die Anpassung der gesamte Zweck, und sie zu stören ' +
            'heißt, dafür zu bezahlen, weniger wirksam zu trainieren.',
        ],
      },
    ],

    claims: {
      'blunting-dose-c': {
        what: 'Vitamin-C-Dosis, die die Anpassung abschwächte',
        note: 'Täglich, unter Studienbedingungen',
      },
      'blunting-dose-e': { what: 'Vitamin-E-Dosis in denselben Studien' },
      'food-dose-safe': {
        what: 'Antioxidantien aus Lebensmitteln',
        note: 'Keine Studie zeigte eine Abschwächung durch Essen',
      },
    },
    claimsNote:
      'Als wahrscheinlich statt gesichert eingestuft, weil die Studien relativ wenige sind und ' +
      'nicht alle übereinstimmen. Die Richtung des Befundes ist konsistent, seine Größe nicht.',

    practical: [
      {
        title: 'Essen Sie das Obst, lassen Sie die Kapsel',
        detail:
          'Lebensmitteldosen haben diesen Effekt nie gezeigt. Er tritt bei Präparatdosen auf, die ' +
            'eine Größenordnung höher liegen.',
      },
      {
        title: 'Wenn Sie sie nehmen, halten Sie sie vom Training fern',
        detail:
          'Die Störung betrifft das Signalfenster nach der Belastung. Sie zeitlich davon ' +
            'wegzurücken ist die am wenigsten schlechte Art, sie zu nehmen.',
      },
      {
        title: 'Trennen Sie Wettkampf von Aufbau',
        detail:
          'Die Antwort zu dämpfen kann bei dichtem Spielplan sinnvoll sein und ist im ' +
            'Trainingsblock kontraproduktiv.',
      },
    ],

    seeAlso: ['vitamin-c', 'vitamin-e', 'selenium'],

    sources: {
      'antiox-blunt': 'Vitamin C und E schwächen Ausdaueranpassungen ab — kontrollierte Studie',
      'antiox-review': 'Antioxidantien und Trainingsanpassung — eine Übersichtsarbeit',
    },
  },

  /* -------------------------------------------------- Zink und Regeneration */
  'zinc-and-recovery': {
    title: 'Zink: genug davon lohnt sich, viel davon nicht',
    short: 'Zink und Regeneration',
    lede:
      'Der Körper speichert fast nichts davon, Sportler verlieren mehr, und es steht hinter ' +
      'Wundheilung, Immunfunktion und Testosteron — genau die Kombination, die schlechte ' +
      'Präparateberatung hervorbringt.',
    description:
      'Was Zink für Regeneration und Immunsystem bei Sportlern tut, warum die Testosteron-Aussage ' +
      'nur halb stimmt, und ab welcher Dosis es ein Kupferproblem erzeugt.',

    commonBelief:
      'Zink hebt Testosteron und stärkt das Immunsystem, also ist eine ordentliche Dosis für ' +
      'jeden vernünftig, der hart trainiert.',

    sections: [
      {
        heading: 'Warum Sportler häufiger knapp sind',
        body: [
          'Es gibt keinen nennenswerten Zinkspeicher. Anders als Eisen, das der Körper hortet, ' +
            'muss Zink mehr oder weniger fortlaufend ankommen, und der Status fällt innerhalb von ' +
            'Wochen, wenn die Zufuhr sinkt.',
          'Training legt zwei Verluste darauf: Schweiß und eine erhöhte Ausscheidung über den ' +
            'Urin nach harten Einheiten. Keiner ist für sich dramatisch, aber zusammen mit der ' +
            'fehlenden Speicherung heißt das, dass eine Sportlerin mit mittelmäßiger Zufuhr ' +
            'schneller in eine Lücke gerät als eine sitzende Person mit derselben Ernährung.',
          'Am stärksten betroffen sind Sportler, die überwiegend pflanzlich essen, und der Grund ' +
            'ist nicht die Zufuhr, sondern Phytat — das Zink im Darm bindet und die verfügbare ' +
            'Menge halbieren kann. Das Verhältnis von Phytat zu Zink sagt die Aufnahme besser ' +
            'voraus als der Zinkgehalt.',
        ],
      },
      {
        heading: 'Die Regenerationsaussage, die stimmt und eng ist',
        body: [
          'Zink ist tatsächlich zentral für Gewebereparatur und Immunfunktion, und beide hängen ' +
            'an schnell teilenden Zellen. Jedes Gewebe mit raschem Umsatz — Darmschleimhaut, ' +
            'Haut, Immunzellen — spürt einen Mangel früh.',
          'Eine Sportlerin mit Mangel, die ihn behebt, regeneriert besser und wird seltener krank. ' +
            'Eine, die bereits gut versorgt war und mehr nimmt, nicht — und genau diesen ' +
            'Unterschied lässt die Werbung zusammenfallen.',
        ],
      },
      {
        heading: 'Die Testosteron-Aussage, mit der es verkauft wird',
        body: [
          'Zinkmangel senkt Testosteron. Das ist gut belegt und die gesamte Grundlage der ' +
            'Kategorie.',
          'Was daraus nicht folgt, ist, dass Zink bei einem Mann mit normalem Status es hebt. Die ' +
            'Studien mit Testosteroneffekt sind Studien an Männern mit Mangel. Das ist dieselbe ' +
            'Form wie bei Vitamin D und Leistung, und es lohnt sich, sie zu erkennen — denn die ' +
            'meiste Präparatewerbung ist auf genau diesem Zug gebaut: einen echten Befund über ' +
            'das Beheben eines Mangels nehmen und ihn als Nutzen eines Überschusses darstellen.',
        ],
      },
      {
        heading: 'Das echte Risiko, und das ist Kupfer',
        body: [
          'Zink und Kupfer konkurrieren um denselben Aufnahmeweg. Anhaltend hochdosiertes Zink ' +
            'unterdrückt die Kupferaufnahme, und Kupfermangel erzeugt eine Anämie, die wie ' +
            'Eisenmangel aussieht und auf Eisen nicht anspricht — dazu neurologische Probleme, ' +
            'die bleiben können.',
          'Das ist nicht exotisch. Es passiert bei den Dosen, die üblicherweise in ' +
            'Testosteron-Support- und Immunprodukten verkauft werden, täglich über Monate ' +
            'genommen. Die Obergrenze gibt es aus diesem Grund und sie ist leicht zu überschreiten, ' +
            'ohne es zu merken.',
          'Der andere, kleinere Punkt: Zinklutschtabletten bei einer Erkältung sind eine andere ' +
            'Frage mit anderer Evidenz, und sie ein paar Tage zu nehmen ist nicht das Muster, das ' +
            'dies verursacht.',
        ],
      },
    ],

    claims: {
      'sweat-loss': { what: 'Zinkverlust über den Schweiß' },
      'upper-limit': {
        what: 'Obergrenze für Erwachsene',
        note: 'Mit gängigen Produkten leicht zu überschreiten',
      },
      'copper-interference': {
        what: 'Dosis, ab der die Kupferaufnahme leidet',
        note: 'Anhaltend, nicht gelegentlich',
      },
      'testosterone-caveat': {
        what: 'Testosteron-Nutzen',
        note: 'Bei Männern mit Mangel gefunden; nicht bei gut versorgten',
      },
    },

    practical: [
      {
        title: 'Kümmern Sie sich um Phytat, bevor Sie an die Dosis denken',
        detail:
          'Einweichen, Keimen, Fermentieren und Sauerteig senken es alle deutlich. Sauerteig statt ' +
            'ungesäuertem Brot ist ein echter Unterschied, keine Verzierung.',
      },
      {
        title: 'Prüfen Sie, was ohnehin schon drin ist',
        detail:
          'Zink steckt gleichzeitig in Multivitaminen, Immunprodukten und ' +
            'Testosteron-Support-Mischungen. Die Summe zählt, und sie hat kaum jemand im Blick.',
      },
      {
        title: 'Wenn Sie seit Monaten hoch dosieren, aufhören und fragen',
        detail:
          'Ein so entstandener Kupfermangel sieht aus wie Eisenmangel und spricht auf Eisen nicht ' +
            'an. Das ist einen Bluttest wert und keine Vermutung.',
      },
    ],

    seeAlso: ['zinc', 'copper', 'iron', 'protein'],

    sources: {
      'ods-zinc': 'NIH Office of Dietary Supplements — Zink',
      'zinc-athletes': 'Zinkstatus und körperliche Belastung — eine Übersichtsarbeit',
    },
  },

  /* ------------------------------------------------ B-Vitamine und Energie */
  'b-vitamins-and-energy': {
    title: 'Die Energievitamine geben keine Energie',
    short: 'B-Vitamine und Energie',
    lede:
      'Sie heißen so, weil sie Energie aus Nahrung freisetzen — was stimmt und nicht dasselbe ist ' +
      'wie Energie zu liefern. Wer bereits gut versorgt ist, scheidet den Rest aus. Leuchtend.',
    description:
      'Was B-Vitamine im Energiestoffwechsel tatsächlich tun, warum Training den Bedarf hebt, und ' +
      'warum Präparate bei Versorgten nichts bewirken.',

    commonBelief:
      'Ein B-Komplex vor dem Training gibt Energie, und da sie wasserlöslich sind, kann viel davon ' +
      'nicht schaden.',

    sections: [
      {
        heading: 'Was „Energievitamin" tatsächlich heißt',
        body: [
          'B-Vitamine sind Cofaktoren, kein Brennstoff. Sie tragen keine Kalorien. Was sie tun, ' +
            'ist die Enzyme zu ermöglichen, die Kohlenhydrate, Fett und Eiweiß in nutzbare ' +
            'Energie umwandeln — Thiamin am Eingang des Citratzyklus, Riboflavin und Niacin als ' +
            'Elektronenträger, B6 quer durch die Aminosäurereaktionen.',
          'Die Folge ist: Ein Mangel erzeugt Müdigkeit, und ihn zu beheben nimmt die Müdigkeit weg, ' +
            'während Überschuss in einem bereits funktionierenden System nichts tut. Das Enzym ' +
            'ist ermöglicht oder nicht; es läuft nicht schneller, wenn mehr Cofaktor herumliegt.',
          'Das ist die ganze Geschichte der Kategorie, und sie erklärt beide Hälften der ' +
            'Beobachtung, die Menschen widersprüchlich finden: dass Mangel wirklich erschöpft, ' +
            'und dass Präparate bei den meisten wirklich nichts tun.',
        ],
      },
      {
        heading: 'Warum Training den Bedarf tatsächlich hebt',
        body: [
          'Mehr Energie durch das System heißt mehr Cofaktor-Umsatz, und ein Teil geht über ' +
            'Schweiß und Urin verloren. Der Bedarf mehrerer B-Vitamine skaliert mit dem ' +
            'Energieumsatz und nicht mit der Körpergröße — weshalb er manchmal je tausend ' +
            'Kalorien angegeben wird.',
          'Der Anstieg ist real und bescheiden. Er gleicht sich meist auch selbst aus, denn wer ' +
            'mehr isst, isst mehr von allem, was darin ist. Die Ausnahme ist, wer mehr Energie ' +
            'aus Lebensmitteln isst, die kaum etwas anderes tragen — womit wir wieder dort sind, ' +
            'wo die meisten dieser Ratgeber landen.',
        ],
      },
      {
        heading: 'Die zwei, die echte Aufmerksamkeit verdienen',
        body: [
          'B12, weil es nur in tierischen und angereicherten Lebensmitteln vorkommt und weil die ' +
            'Folgen einer langen Lücke neurologisch sind und bleiben können. Wer keine tierischen ' +
            'Lebensmittel isst, braucht ein Präparat oder angereicherte Produkte — das ist keine ' +
            'Geschmacksfrage.',
          'Und B6, weil es das eine wasserlösliche Vitamin mit einer echten Obergrenze ist. ' +
            'Anhaltend hohe Dosen verursachen eine periphere Neuropathie — Taubheit und ' +
            'Gangunsicherheit —, die manchmal nur teilweise zurückgeht. Dosen in diesem Bereich ' +
            'werden routinemäßig verkauft, und das ist der Teil, den man wissen sollte.',
        ],
      },
      {
        heading: 'Der leuchtend gelbe Urin',
        body: [
          'Das ist ausgeschiedenes Riboflavin, und es ist harmlos. Es ist zugleich die ehrlichste ' +
            'Rückmeldung, die ein Präparat gibt: der sichtbare Teil einer Dosis, für die der ' +
            'Körper keine Verwendung hatte.',
        ],
      },
    ],

    claims: {
      'requirement-rise': {
        what: 'Bedarf bei hartem Training, gegenüber sitzend',
        note: 'Skaliert mit dem Energieumsatz',
      },
      'supplement-effect': {
        what: 'Leistungsnutzen bei gut versorgten Sportlern',
        note: 'Über die Positionspapiere hinweg konsistent',
      },
      'b6-upper-limit': {
        what: 'Obergrenze für Vitamin B6',
        note: 'Das eine wasserlösliche Vitamin, bei dem Überschuss Nerven schädigt',
      },
    },

    practical: [
      {
        title: 'Prüfen Sie das B6 in dem, was Sie schon nehmen',
        detail:
          'Dosen an oder über der Obergrenze stecken routinemäßig in B-Komplexen und ' +
            '„Energie"-Produkten. Anhaltend verursachen sie eine Neuropathie, die nicht immer ' +
            'vollständig zurückgeht.',
      },
      {
        title: 'Wer keine tierischen Lebensmittel isst: B12 ist nicht optional',
        detail:
          'Präparat oder angereicherte Lebensmittel. Spirulina und Fermentiertes enthalten ' +
            'Analoga, die den Rezeptor besetzen, ohne die Arbeit zu tun.',
      },
      {
        title: 'Behandeln Sie Müdigkeit als Frage, nicht als Diagnose',
        detail:
          'Sie passt zu einem Dutzend Lücken, zu schlechtem Schlaf, zu niedrigem Eisen und zu ' +
            'einer Schilddrüsenunterfunktion. Ein B-Komplex ist ein schlechter Weg, das ' +
            'herauszufinden.',
      },
    ],

    seeAlso: ['thiamin', 'riboflavin', 'niacin', 'vitamin-b6', 'vitamin-b12'],

    sources: {
      'acsm-nutrition': 'ACSM, AND und DC — gemeinsames Positionspapier zu Ernährung und sportlicher Leistung',
      'ods-b6': 'NIH Office of Dietary Supplements — Vitamin B6',
      'ods-thiamin': 'NIH Office of Dietary Supplements — Thiamin',
    },
  },

  /* -------------------------------------- Aminosäuren jenseits von Eiweiß */
  'amino-acids-beyond-protein': {
    title: 'Die meisten Aminosäurepräparate sind Eiweiß mit Aufschlag',
    short: 'Aminosäuren jenseits von Eiweiß',
    lede:
      'BCAA, Glutamin, EAA, Beta-Alanin — vier Kategorien mit sehr unterschiedlicher Evidenz, im ' +
      'selben Regal mit derselben Überzeugung verkauft. Nur eine davon hat viel.',
    description:
      'Was die Evidenz zu BCAA, EAA, Glutamin und Beta-Alanin sagt — was etwas tut, was überflüssig ' +
      'ist, wenn man genug Eiweiß isst, und warum.',

    commonBelief:
      'BCAA während des Trainings schützen Muskel, und Glutamin hilft Regeneration und Immunsystem. ' +
      'Das sind Grundlagen, keine Extras.',

    sections: [
      {
        heading: 'BCAA: das Problem des unvollständigen Satzes',
        body: [
          'Ein Muskeleiweiß zu bauen erfordert alle zwanzig Aminosäuren gleichzeitig. BCAA liefern ' +
            'drei davon. Leucin, eine der drei, ist das Signal, das die Maschinerie anschaltet — ' +
            'weshalb BCAA das Signal tatsächlich heben und die frühen Studien ermutigend aussahen.',
          'Nur baut eine Baustelle, die eingeschaltet wird, ohne dass das übrige Material geliefert ' +
            'wird, nichts. Als Studien BCAA gegen ein vollständiges Protein mit derselben ' +
            'Leucinmenge stellten, gewann das vollständige Protein deutlich.',
          'Die ehrliche Beschreibung ist also: BCAA sind eine unvollständige und teure Fassung von ' +
            'etwas, das die meisten ohnehin essen. Wenn Ihre Eiweißzufuhr reicht, fügen sie nichts ' +
            'hinzu, was Sie nicht hatten.',
        ],
      },
      {
        heading: 'EAA: dieselbe Idee, ordentlich gemacht',
        body: [
          'Essenzielle Aminosäuren liefern alle neun, die der Körper nicht bilden kann, was den ' +
            'strukturellen Einwand gegen BCAA behebt. Sie regen die Muskelproteinsynthese an, und ' +
            'zwar bei kleineren Mengen als ganzes Protein.',
          'Ihren Platz verdienen sie in einem engen Fall: jemand, der wirklich nicht essen kann — ' +
            'rund um eine Erkrankung, in den ersten Tagen nach einer Operation, bei sehr alten ' +
            'Menschen ohne Appetit. Für eine gesunde Person mit ausreichender Eiweißzufuhr sind ' +
            'sie ein teurerer Weg zum selben Ziel.',
        ],
      },
      {
        heading: 'Glutamin: eine gute Hypothese, die nicht überlebt hat',
        body: [
          'Die Überlegung war stimmig. Glutamin ist der bevorzugte Brennstoff von Immunzellen, die ' +
            'Blutspiegel fallen nach langer Belastung, und Sportler haben mehr Infekte der oberen ' +
            'Atemwege. Liefert man den fehlenden Brennstoff, sollten die Infekte zurückgehen.',
          'Sie gingen nicht zurück. Studien an ernährten Sportlern fanden im Allgemeinen keinen ' +
            'Nutzen für Immunsystem, Regeneration oder Leistung. Die wahrscheinliche Erklärung: ' +
            'Wer genug Eiweiß isst, bildet ohnehin reichlich davon — Glutamin ist die häufigste ' +
            'Aminosäure im Körper — und der Abfall nach der Belastung ist vorübergehend statt ' +
            'begrenzend.',
          'In klinischen Situationen wie schweren Verbrennungen oder Darmerkrankungen bleibt es ' +
            'wirklich nützlich. Das ist nicht dieselbe Population wie ein Kraftsportler, und dort ' +
            'hat sich die Sportaussage ihre Autorität geliehen.',
        ],
      },
      {
        heading: 'Beta-Alanin: das eine, das wirkt, für eine Sache',
        body: [
          'Beta-Alanin hebt das Muskelcarnosin, das die Übersäuerung während harter Belastungen ' +
            'abpuffert. Das verbessert die Leistung in einem bestimmten Fenster — Belastungen von ' +
            'etwa einer bis zehn Minuten, in denen die Säureansammlung das Limit ist.',
          'Außerhalb dieses Fensters tut es wenig. Es hilft keinem Marathon und keinem einzelnen ' +
            'schweren Dreier. Und es braucht Wochen täglicher Einnahme, um das Carnosin zu heben, ' +
            'ist also nichts, was man vor einer Einheit nimmt.',
          'Das Kribbeln ist harmlos und die eine Nebenwirkung, die Menschen zuverlässig bemerken — ' +
            'aufgeteilte Dosen mildern es.',
        ],
      },
    ],

    claims: {
      'bcaa-alone': {
        what: 'BCAA gegen vollständiges Protein',
        note: 'Bei gleichem Leucin gewinnt das vollständige Protein',
      },
      'leucine-per-meal': {
        what: 'Leucin, um die Synthese auszulösen',
        note: 'Aus gewöhnlichen Lebensmitteln erreichbar',
      },
      'glutamine-effect': { what: 'Glutamin bei ernährten Sportlern' },
      'beta-alanine': {
        what: 'Beta-Alanin, täglich',
        note: 'Wochen der Aufsättigung; hilft bei 1–10-Minuten-Belastungen',
      },
    },

    practical: [
      {
        title: 'Zählen Sie Ihr Eiweiß, bevor Sie eine Aminosäure kaufen',
        detail:
          'Fast jede Aussage dieser Kategorie verdampft bei jemandem, der ohnehin genug isst. Das ' +
            'ist das Billigste zu prüfen und das, was am seltensten geprüft wird.',
      },
      {
        title: 'Wenn Sie das Leucin wollen, essen Sie das Lebensmittel',
        detail:
          'Fünfundzwanzig bis dreißig Gramm eines guten Proteins tragen die Schwellendosis und ' +
            'bringen die anderen neunzehn Aminosäuren mit.',
      },
      {
        title: 'Beta-Alanin nur, wenn Ihre Belastung im Fenster liegt',
        detail:
          'Eine bis zehn Minuten harter Arbeit. Ein echter und enger Effekt, der Wochen täglicher ' +
            'Einnahme braucht statt eines Löffels vorher.',
      },
    ],

    seeAlso: ['protein'],

    sources: {
      'issn-protein': 'International Society of Sports Nutrition — Position zu Protein und Training',
      'bcaa-review': 'BCAA und Muskelproteinsynthese — eine kritische Übersichtsarbeit',
      'issn-glutamine': 'Glutaminsupplementierung bei Sportlern — eine Übersichtsarbeit',
      'issn-beta-alanine': 'International Society of Sports Nutrition — Position zu Beta-Alanin',
    },
  },

  /* -------------------------------------------------- Kollagen und Sehne */
  'collagen-and-tendon': {
    title: 'Kollagen für Sehnen: vielversprechend, jung und überverkauft',
    short: 'Kollagen und Sehne',
    lede:
      'Sehnen- und Bandverletzungen beenden Saisons, und ernährungsseitig gab es dagegen nie viel ' +
      '— genau das Vakuum, in das eine dünne Studienlage hineinvermarktet wird.',
    description:
      'Was die Evidenz zu Kollagen für Sehnen stützt und was nicht, warum Vitamin C der geklärte ' +
      'Teil ist, und wie man eine junge Literatur ehrlich liest.',

    commonBelief:
      'Kollagenpräparate bauen Gelenke und Sehnen wieder auf. Es ist dasselbe Eiweiß, also landet ' +
      'es dort, wo es gebraucht wird.',

    sections: [
      {
        heading: 'Der Einwand, den alle bringen, und warum er nicht ganz entscheidet',
        body: [
          'Gegessenes Kollagen wird wie jedes andere Eiweiß in Aminosäuren zerlegt. Es reist nicht ' +
            'als Kollagen zu einer Sehne, und die Vorstellung, dass es das tut, ist Unsinn. So ' +
            'weit stimmt der Einwand.',
          'Wo er zu kurz greift: Kollagen ist ungewöhnlich reich an Glycin und Prolin — genau den ' +
            'Aminosäuren, die Sehne in Menge braucht —, und einige kollagenstämmige Peptide ' +
            'erscheinen intakt im Blut. Es gibt also einen plausiblen Mechanismus, der nicht „das ' +
            'Kollagen geht zur Sehne" lautet, sondern eher: ein ungewöhnliches Rohstoffgemisch in ' +
            'einem Moment liefern, in dem das Gewebe es verwenden kann.',
          'Plausibel ist nicht bewiesen, und die Tabelle markiert es deshalb als umstritten.',
        ],
      },
      {
        heading: 'Wie die Studien tatsächlich aussehen',
        body: [
          'Klein. Oft kurz. Häufig von Firmen finanziert, die das Produkt verkaufen, was nicht ' +
            'disqualifiziert und wissenswert ist. Mehrere zeigen Verbesserungen der Sehnen- oder ' +
            'Bandsteifigkeit und der Gelenkschmerzen; andere zeigen nichts.',
          'Das meistdiskutierte Protokoll kombiniert eine Dosis Gelatine oder Kollagen mit Vitamin ' +
            'C, kurz vor der Belastung des Gewebes genommen — mit der Überlegung, dass ein kurzer ' +
            'Anstieg zirkulierender Aminosäuren zeitgleich mit mechanischer Last das ist, worauf ' +
            'die Sehne reagieren kann. Eine elegante Hypothese mit wirklich begrenzten ' +
            'Endpunktdaten am Menschen.',
          'So sieht eine frühe Literatur aus. Es ist kein Betrug und keine gesicherte Wissenschaft, ' +
            'und ehrlich ist zu sagen, welches von beidem — statt auf das zu runden, was gerade ' +
            'passt.',
        ],
      },
      {
        heading: 'Der Teil, der nicht umstritten ist',
        body: [
          'Vitamin C wird gebraucht, um Kollagen überhaupt zu bilden. Die Enzyme, die die ' +
            'Kollagen-Tripelhelix stabilisieren, können ohne es nicht arbeiten — das ist Skorbut: ' +
            'Bindegewebe, das mangels eines Cofaktors versagt.',
          'Wer also wirklich wenig Vitamin C hat, hat ein echtes Bindegewebsproblem, und das ist ' +
            'billig auszuschließen. Jenseits der Sättigung baut mehr Vitamin C kein weiteres ' +
            'Kollagen, aus demselben Grund, aus dem mehr von jedem Cofaktor es nicht tut.',
        ],
      },
      {
        heading: 'Was eine Sehne tatsächlich stärkt',
        body: [
          'Belastung. Progressiv, geduldig, langweilig. Sehne passt sich weit langsamer an als ' +
            'Muskel — Monate statt Wochen —, und genau deshalb verletzen sich Menschen: Der Muskel ' +
            'ist bereit, mehr zu tun, lange bevor die Sehne es ist.',
          'Nichts in dieser Kategorie ersetzt das, und das Risiko eines Präparats ist hier nicht ' +
            'das Geld. Es ist zu glauben, ein Problem behoben zu haben, das man nicht behoben hat, ' +
            'und auf diesen Glauben hin Last hinzuzufügen.',
        ],
      },
    ],

    claims: {
      dose: { what: 'In den Studien verwendete Dosis', note: 'Gelatine oder hydrolysiertes Kollagen' },
      timing: {
        what: 'Zeitpunkt vor der Belastung',
        note: 'Der Mechanismus, den das Protokoll annimmt',
      },
      'vitamin-c-cofactor': {
        what: 'Vitamin C für die Kollagensynthese nötig',
        note: 'Dieser Teil steht nicht infrage',
      },
    },
    claimsNote:
      'Zwei davon sind bewusst als umstritten markiert. Die Studien sind klein, kurz und häufig ' +
      'industriefinanziert, und das auf gesichert aufzurunden wäre genau das, wogegen es diese ' +
      'Seite gibt.',

    practical: [
      {
        title: 'Belasten Sie sie zuerst richtig',
        detail:
          'Progressive Belastung ist der Eingriff mit tatsächlicher Evidenz. Sehne passt sich über ' +
            'Monate an, und im Abstand zwischen Muskel- und Sehnenbereitschaft leben die ' +
            'Verletzungen.',
      },
      {
        title: 'Niedriges Vitamin C ausschließen, dann nicht weiter sorgen',
        detail:
          'Es wird für die Kollagensynthese wirklich gebraucht. Jenseits der Sättigung baut mehr ' +
            'kein weiteres.',
      },
      {
        title: 'Wenn Sie es versuchen, wissen Sie, was Sie kaufen',
        detail:
          'Einen plausiblen Mechanismus mit frühen Daten. Das kann das eigene Geld wert sein; es ' +
            'ist nicht wert, im Glauben an geschütztes Gewebe Last hinzuzufügen.',
      },
    ],

    seeAlso: ['vitamin-c', 'protein', 'copper'],

    sources: {
      'collagen-tendon': 'Gelatinesupplementierung und Kollagensynthese — kontrollierte Studie',
      'ods-vitc': 'NIH Office of Dietary Supplements — Vitamin C',
    },
  },
};

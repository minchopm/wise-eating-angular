import { LocalisedGuide } from '../guide-types';

/**
 * Die psychologischen Ratgeber auf Deutsch.
 *
 * Diese tragen careNotice in guide-facts.ts, was den schwereren Hinweis und
 * die deutschen Anlaufstellen einschaltet und den App-Store-Knopf entfernt.
 *
 * Die Linie, die sie halten: den Mechanismus beschreiben, deutlich sagen, wann
 * etwas aufhört, eine Gewohnheit zu sein, und eine Erkrankung wird — und dann
 * aufhören. Keine Interventionen, kein „versuchen Sie stattdessen".
 */
export const GUIDES_MIND_DE: Readonly<Record<string, LocalisedGuide>> = {
  'restriction-and-the-binge-cycle': {
    title: 'Der Essanfall ist nicht das Versagen. Er ist die zweite Hälfte der Einschränkung.',
    short: 'Einschränkung und Essanfälle',
    lede:
      'Menschen beschreiben es als Kontrollverlust, und die Abfolge beginnt fast nie dort. Sie ' +
      'beginnt Tage früher, mit einer Regel — und der Kontrollverlust ist das, was ein Körper am ' +
      'Ende einer solchen Regel tut, zuverlässig genug, dass es vor achtzig Jahren im Labor ' +
      'gezeigt wurde.',
    description:
      'Warum starke Einschränkung Essanfälle als körperliche Antwort erzeugt und nicht als ' +
      'Willensschwäche — was das Minnesota-Experiment zeigte, und wann daraus eine Erkrankung wird.',

    commonBelief:
      'Vier Tage lief es gut und dann habe ich alles hingeworfen. Mit mehr Disziplin wäre der ' +
      'fünfte Tag wie die anderen gewesen.',

    sections: [
      {
        heading: 'Was sechsunddreißig Männer in Minnesota gezeigt haben',
        body: [
          '1944 erklärte sich eine Gruppe gesunder Freiwilliger — auf Stabilität geprüft, zum ' +
            'Teil deswegen ausgewählt — bereit, sechs Monate lang etwa die Hälfte ihres Bedarfs ' +
            'zu essen, damit Forscher lernten, wie ein hungerndes Europa wieder zu ernähren sei. ' +
            'Woran die Studie erinnert wird, ist nicht das Ernährungsprotokoll.',
          'Die Männer wurden von Essen besessen. Sie lasen Kochbücher zum Vergnügen. Sie ' +
            'sammelten Rezepte, horteten Besteck, zogen Mahlzeiten über Stunden hin, sprachen ' +
            'über Essen und über wenig sonst. Sie wurden reizbar, zogen sich zurück, konnten sich ' +
            'nicht konzentrieren. Mehrere entwickelten Episoden unkontrollierten Essens, die sie ' +
            'entsetzten, und ein Teil dieses Verhaltens hielt Monate an, nachdem es wieder normal ' +
            'zu essen gab.',
          'Das waren keine Menschen mit einem schwierigen Verhältnis zum Essen. Sie hatten bis zu ' +
            'dieser Einschränkung überhaupt kein bemerkenswertes Verhältnis dazu. Das ist der ' +
            'Befund: Das Verhalten wurde vom Entzug hergestellt, in gewöhnlichen Männern, mit ' +
            'Absicht.',
        ],
      },
      {
        heading: 'Warum der Körper eine Diät als Notlage behandelt',
        body: [
          'Er kann nicht unterscheiden zwischen einer Knappheit, die Sie gewählt haben, und einer, ' +
            'die Sie nicht gewählt haben. Die Signale, die er liest, sind: wie viel Energie ' +
            'ankommt, wie viel gespeichert ist und wie lange die Lücke schon läuft — und keines ' +
            'davon trägt Ihre Absicht.',
          'Also tut er, was er in einer Knappheit immer getan hat. Die Aufmerksamkeit verengt sich ' +
            'auf Essen, denn Essen zu bemerken ist, wie ein hungriges Tier überlebt. Die ' +
            'Sättigungssignale werden schwächer. Die Belohnung des Essens steigt, dieselbe ' +
            'Mahlzeit ist zwingender als noch vor einer Woche. Das ist keine offengelegte ' +
            'Schwäche; es ist ein System, das genau wie gebaut arbeitet, an jemandem, der ' +
            'beschlossen hat, das System sei der Gegner.',
          'Und es eskaliert, statt sich einzupendeln. Je länger und härter die Einschränkung, ' +
            'desto stärker der Zug — weshalb das Muster so oft in einer Episode endet, die in ' +
            'keinem Verhältnis zur Regel steht, die sie ausgelöst hat.',
        ],
      },
      {
        heading: 'Was daraus einen Kreis macht',
        body: [
          'Was aus einer Episode eine Schleife macht, ist das, was danach passiert. Die Episode ' +
            'wird als Beweis eines Charakterfehlers gelesen, und die Antwort auf einen ' +
            'Charakterfehler ist eine strengere Regel. Die strengere Regel erzeugt einen ' +
            'stärkeren Zug. Der stärkere Zug erzeugt eine größere Episode, die als weiterer ' +
            'Beweis gelesen wird.',
          'Jede Runde macht die nächste wahrscheinlicher, und die Person darin erlebt das Ganze ' +
            'als Aussage über sich selbst statt als vorhersehbare Antwort auf das, was sie immer ' +
            'wieder tut.',
          'Es lohnt sich, das deutlich zu sagen, weil man es selten hört: Dass dies vorhersehbar ' +
            'ist, macht es nicht zu einem kleinen Problem. Vorhersehbar und ernst sind keine ' +
            'Gegensätze.',
        ],
      },
      {
        heading: 'Wann das aufhört, ein Muster zu sein',
        body: [
          'Es gibt eine Grenze, und sie wird nicht dadurch gezogen, wie viel jemand in einer ' +
            'Episode isst. Sie wird dadurch gezogen, was das Essen mit dem übrigen Leben macht.',
          'Einige Marker, dass sie überschritten ist: Episoden mit einem echten Gefühl von ' +
            'Kontrollverlust statt bloßem Zuvielessen; alles, was danach ausgleichen soll — ' +
            'Erbrechen, Abführmittel, strafender Sport, am nächsten Tag fasten; Essen oder ' +
            'Körperform nehmen so viel Aufmerksamkeit ein, dass Arbeit, Studium oder Beziehungen ' +
            'leiden; und Heimlichkeit, eines der verlässlichsten Signale überhaupt.',
          'Nichts davon ist eine Diagnose, und diese Seite kann keine stellen. Es ist der Punkt, ' +
            'an dem der richtige nächste Schritt aufhört, eine andere Essstrategie zu sein, und ' +
            'ein Mensch wird — Hausarztpraxis, Psychotherapie, Beratungstelefon. Essstörungen ' +
            'haben die höchste Sterblichkeit aller psychischen Erkrankungen und sprechen gut auf ' +
            'Behandlung an, und beide Hälften dieses Satzes sind Gründe, früh anzurufen statt spät.',
        ],
      },
      {
        heading: 'Was das für jedes Tracking bedeutet, auch für unseres',
        body: [
          'Wir bauen eine App, die zählt, haben hier also ein offensichtliches Interesse und ' +
            'sollten das offenlegen. Zu messen, was man isst, nützt manchen Menschen wirklich und ' +
            'schadet anderen wirklich, und welche Gruppe man ist, hängt nicht davon ab, wie ' +
            'diszipliniert man ist.',
          'Wenn eine Zahl auf einem Bildschirm den Ton Ihres Tages setzt, wenn Sie angefangen ' +
            'haben, um die App herum zu essen statt sie zu benutzen, oder wenn der Anblick einer ' +
            'Summe den Wunsch auslöst, das auszugleichen — dann ist das kein Anlass, sorgfältiger ' +
            'zu tracken. Schließen Sie sie. Dieser Rat kostet uns eine Nutzerin und ist der ' +
            'richtige.',
        ],
      },
    ],

    claims: {},

    practical: [
      {
        title: 'Merken Sie, welche Hälfte des Kreises Sie behandeln',
        detail:
          'Fast jeder Plan nach einer Episode zielt auf die Episode. Die Episode ist die zweite ' +
            'Hälfte. Die erste ist die Regel davor — und die steht noch.',
      },
      {
        title: 'Heimlichkeit ist das Signal, das zählt',
        detail:
          'Von allem auf dieser Seite trennt Verheimlichen am zuverlässigsten eine schwierige ' +
            'Phase von etwas, das Hilfe braucht. Wenn niemand in Ihrem Leben davon weiß, ist das ' +
            'eine Information.',
      },
      {
        title: 'Fragen Sie jemanden, dessen Beruf das ist',
        detail:
          'Kein Ernährungsartikel und keine App. Die Hausarztpraxis ist eine vernünftige erste ' +
            'Tür und hat dieses Gespräch schon geführt.',
      },
    ],

    seeAlso: ['protein', 'magnesium', 'iron'],

    sources: {
      minnesota: 'Das Minnesota-Hungerexperiment — Keys et al. und spätere Auswertungen',
      'nice-eating': 'NICE-Leitlinie NG69 — Essstörungen: Erkennung und Behandlung',
      beat: 'Beat — Beratung und Hilfetelefone bei Essstörungen',
    },
  },

  /* ------------------------------------------------------- Willenskraft */
  'why-willpower-is-the-wrong-frame': {
    title: 'Willenskraft beschreibt das Ergebnis, sie erklärt es nicht',
    short: 'Die Willenskraft-Erzählung',
    lede:
      'Wenn Essen so läuft, wie jemand es vorhatte, nennen wir es Disziplin, und wenn nicht, ' +
      'nennen wir es einen Mangel derselben Sache. Das ist kein Mechanismus. Das ist das ' +
      'Ergebnis, umbenannt und als seine eigene Ursache verwendet.',
    description:
      'Warum die Erklärung über Willenskraft als Erklärung versagt, was Umgebung und Biologie ' +
      'tatsächlich tun, und was sich ändert, wenn sich die Erzählung ändert.',

    commonBelief:
      'Ich weiß, was ich essen sollte. Die Lücke zwischen Wissen und Tun ist Disziplin, und mit ' +
      'mehr davon wäre das Problem gelöst.',

    sections: [
      {
        heading: 'Der zirkuläre Teil',
        body: [
          'Fragt man, warum jemand die Kekse gegessen hat, lautet die Antwort: zu wenig ' +
            'Willenskraft. Fragt man, woher wir wissen, dass die Willenskraft fehlte, lautet die ' +
            'Antwort: weil er die Kekse gegessen hat. Es wurde nichts erklärt; ein Etikett wurde ' +
            'angebracht und dann als Befund behandelt.',
          'Das zählt praktisch, nicht philosophisch. Eine Erklärung, die auf nichts zeigt, was man ' +
            'ändern kann, erzeugt keinen Plan. Wenn die Ursache eine Charaktereigenschaft ist, von ' +
            'der man zu wenig hat, ist die einzige verfügbare Handlung, sich mehr anzustrengen — ' +
            'genau die Strategie, die bereits gescheitert ist, erneut verordnet, nur intensiver.',
        ],
      },
      {
        heading: 'Was stattdessen tatsächlich passiert',
        body: [
          'Ein Teil ist das Essen. Die kontrollierte Studie, die hochverarbeitete und minimal ' +
            'verarbeitete Kost auf Kalorien, Zucker, Fett, Ballaststoffe und Salz abstimmte, fand, ' +
            'dass Menschen auf der hochverarbeiteten mehrere hundert Kalorien am Tag mehr aßen — ' +
            'ungefragt und weitgehend ohne es zu merken. Die Teilnehmenden waren zwischen den ' +
            'Bedingungen nicht undisziplinierter geworden. Das Essen hatte sich geändert.',
          'Ein Teil ist die Umgebung. Portionsgröße, Verfügbarkeit, wie sichtbar etwas ist, ob es ' +
            'ausgepackt werden muss — das verschiebt die Zufuhr messbar bei Menschen, die keine ' +
            'Änderung ihrer Absicht berichten. Eine Entscheidung, die zwanzigmal am Tag getroffen ' +
            'wird, wird nicht wirklich zwanzigmal getroffen; sie wird meist einmal getroffen, von ' +
            'dem, was in Reichweite liegt.',
          'Und ein Teil ist der Körper, der sein Gewicht verteidigt. Gewichtsabnahme senkt den ' +
            'Energieverbrauch und hebt die Appetitsignale, und beides hält an. Wer zwei Jahre nach ' +
            'einer erfolgreichen Diät wieder zunimmt, versagt nicht an etwas, worin er vorher ' +
            'erfolgreich war — er erlebt ein verteidigtes System, das tut, was es tut, gegen einen ' +
            'Plan, der annahm, dass es das nicht täte.',
        ],
      },
      {
        heading: 'Warum das keine Erlaubnis ist',
        body: [
          'Man könnte das oben so lesen, als läge nichts davon an einem selbst, und das ist nicht ' +
            'die Behauptung. Menschen ändern dauerhaft, was sie essen, und es lohnt sich.',
          'Der Punkt ist, wo die Anstrengung am besten hingeht. Anstrengung, die zwanzigmal am Tag ' +
            'gegen Essen aufgewendet wird, verliert gegen ein System, das nie müde wird. ' +
            'Anstrengung, die einmal aufgewendet wird — für das, was im Haus ist, was auf ' +
            'Augenhöhe steht, was drei statt zwanzig Minuten dauert —, hält, weil sie nicht ' +
            'erneuert werden muss.',
          'Die unangenehme Fassung: Das meiste, was bei Menschen, die gut essen, nach Disziplin ' +
            'aussieht, ist keine. Es ist eine Reihe von Arrangements, die dafür sorgen, dass die ' +
            'Entscheidung selten überhaupt getroffen werden muss.',
        ],
      },
      {
        heading: 'Wo die Erzählung echten Schaden anrichtet',
        body: [
          'Wer glaubt, sein Essen sei ein Charakterproblem, antwortet auf eine schwierige Woche mit ' +
            'strengeren Regeln. Wenn die Schwierigkeit von der Einschränkung kam — was oft der ' +
            'Fall ist —, macht diese Antwort die nächste Woche schlimmer, und die schlimmere Woche ' +
            'bestätigt den Glauben.',
          'Das ist der Mechanismus hinter sehr viel unnötigem Leid, und es ist der Punkt, an dem ' +
            'ein Erzählproblem aufhört, akademisch zu sein. Wenn Sie hier etwas wiedererkennen, ' +
            'ist der Ratgeber zu Einschränkung und Essanfällen der, der als Nächstes kommt.',
        ],
      },
    ],

    claims: {},

    practical: [
      {
        title: 'Ändern Sie das Arrangement, nicht den Vorsatz',
        detail:
          'Was im Haus ist, was auf Augenhöhe steht, was drei statt zwanzig Minuten dauert. Einmal ' +
            'getroffene Entscheidungen schlagen zwanzigmal am Tag getroffene.',
      },
      {
        title: 'Behandeln Sie eine schlechte Woche als Information, nicht als Beweis',
        detail:
          'Die nützliche Frage ist, was ihr vorausging. Fast immer ging ihr etwas voraus, und ' +
            'meist war es eine Regel.',
      },
      {
        title: 'Merken Sie, wenn Verschärfen der Reflex ist',
        detail:
          'Wenn die Antwort auf jede Schwierigkeit eine strengere Regel ist, lohnt es sich, die ' +
            'Regeln zu prüfen, bevor man die Disziplin prüft.',
      },
    ],

    seeAlso: ['protein', 'fibre'],

    sources: {
      'hall-trial': 'Hochverarbeitete Kost führt zu Mehraufnahme — kontrollierte stationäre Studie',
      'habit-review': 'Gewohnheitsbildung und Verhaltensänderung — eine Übersichtsarbeit',
      'set-point': 'Metabolische Anpassung und Wiederzunahme — Langzeitnachbeobachtung',
    },
  },

  /* ------------------------------------------------- Emotionales Essen */
  'emotional-eating': {
    title: 'Aus einem anderen Grund als Hunger zu essen ist keine Fehlfunktion',
    short: 'Emotionales Essen',
    lede:
      'Essen reguliert Stimmung, so lange es Menschen gibt, und das pauschal als Störung zu ' +
      'bezeichnen ist falsch und nicht hilfreich. Die lohnende Frage ist enger: ob es das einzige ' +
      'verfügbare Werkzeug ist.',
    description:
      'Was emotionales Essen ist, warum Essen tatsächlich das Befinden verändert, wann es zum ' +
      'Problem wird, und wo die Grenze zu etwas liegt, das Hilfe braucht.',

    commonBelief:
      'Aus Stress oder Traurigkeit zu essen ist eine schlechte Angewohnheit, die ich ablegen ' +
      'sollte, und dass ich es weiter tue, heißt, dass mit mir etwas nicht stimmt.',

    sections: [
      {
        heading: 'Es wirkt, deshalb passiert es',
        body: [
          'Schmackhaftes Essen erzeugt zuverlässig eine kurzfristige Verschiebung des Befindens. ' +
            'Das ist nicht eingebildet und keine Schwäche — es ist ein realer Effekt, getragen von ' +
            'realen Systemen, und ein großer Teil dessen, warum Essen in jeder Kultur, die es je ' +
            'gab, im Zentrum von Trost, Feier und Trauer steht.',
          'Jedes Verhalten, das Unbehagen zuverlässig lindert, wird wiederholt. Das ist kein Fehler ' +
            'im Menschen; das ist das Grundlegendste, was Lernen tut. Es als unerklärliches ' +
            'Versagen zu rahmen, verwechselt einen funktionierenden Vorgang mit einem kaputten.',
        ],
      },
      {
        heading: 'Was gewöhnlich von teuer trennt',
        body: [
          'Fast alle essen aus anderen Gründen als Hunger, und für die meisten kostet es nichts ' +
            'Nennenswertes. Was das ändert, ist nicht die Häufigkeit und nicht das Essen.',
          'Es ist die Bandbreite. Belastung hat viele mögliche Antworten — mit jemandem reden, sich ' +
            'bewegen, schlafen, die Sache lösen, sie aushalten. Schwierig wird es, wenn die ' +
            'Bandbreite zusammenfällt und Essen die einzige übrig bleibt, denn dann hat jedes ' +
            'schwierige Gefühl genau einen Ausgang, und der wird genommen, ob er passt oder nicht.',
          'Das Zweite ist, was danach kommt. Aus Trost zu essen und getröstet zu sein ist ein ' +
            'geschlossener Kreis. Aus Trost zu essen, sich dann zu schämen, sich Einschränkung ' +
            'vorzunehmen und in die nächste Episode hineinzuschränken, ist kein Kreis, sondern eine ' +
            'Spirale — und die Scham richtet mehr Schaden an als das Essen.',
        ],
      },
      {
        heading: 'Die Verbindung zur Einschränkung',
        body: [
          'Sehr viel von dem, was emotionales Essen genannt wird, ist körperlicher Hunger, der in ' +
            'einem emotionalen Moment ankommt. Wer den ganzen Tag zu wenig isst, ist in einem ' +
            'Zustand, in dem sich die Aufmerksamkeit auf Essen verengt hat und die ' +
            'Sättigungssignale schwächer sind — und dann passiert am Abend etwas Belastendes.',
          'Diese Episode wird dem Stress zugeschrieben, weil der Stress sichtbar ist und das ' +
            'tagelange Defizit nicht. Und der Plan, der folgt, zielt auf die Emotion, was den ' +
            'eigentlichen Treiber unberührt und in Betrieb lässt.',
          'Es lohnt sich, zuerst die langweilige Erklärung zu prüfen: ob der Tag genug Essen ' +
            'enthielt, und genug Eiweiß und Ballaststoffe, um zu tragen. Nicht weil Gefühle nicht ' +
            'real wären, sondern weil Hunger viel leichter zu beheben ist und weit häufiger ' +
            'vorliegt, als Menschen denken.',
        ],
      },
      {
        heading: 'Wo diese Seite aufhört',
        body: [
          'Sie beschreibt einen Mechanismus. Sie kann Ihnen nicht sagen, ob das, was Sie erleben, ' +
            'Hilfe braucht, und sie ist keine Behandlung.',
          'Einige Zeichen, dass die Antwort ja lautet: Essen mit einem echten Gefühl von ' +
            'Kontrollverlust statt einer Entscheidung; alles, was danach ausgleichen soll; heimlich ' +
            'essen; Essen oder Körperform nehmen so viel Aufmerksamkeit ein, dass Arbeit oder ' +
            'Beziehungen leiden; oder ein Leidensdruck, der bleibt statt vorbeizugehen.',
          'Nichts davon ist eine Diagnose. Es ist der Punkt, an dem der richtige nächste Schritt ein ' +
            'Mensch ist und keine Strategie — und Essstörungen sind sowohl häufiger als auch besser ' +
            'behandelbar, als die meisten annehmen, was zwei gute Gründe sind, früh zu fragen.',
        ],
      },
    ],

    claims: {},

    practical: [
      {
        title: 'Prüfen Sie, ob Sie einfach hungrig waren',
        detail:
          'Ein zu kleiner Tag erzeugt einen Abend, der emotional aussieht. Das ist die häufigste ' +
            'Erklärung und die am leichtesten auszuschließende.',
      },
      {
        title: 'Erweitern Sie die Bandbreite, statt die Option zu streichen',
        detail:
          'Das Problem ist selten, dass Essen eine Antwort auf Belastung ist. Es ist, dass es die ' +
            'einzige geworden ist.',
      },
      {
        title: 'Lassen Sie die Scham fallen, bevor Sie sonst etwas fallen lassen',
        detail:
          'Scham erzeugt zuverlässig Einschränkung, und Einschränkung erzeugt zuverlässig die ' +
            'nächste Episode. Sie ist der Teil des Kreises, der den meisten Schaden anrichtet.',
      },
    ],

    seeAlso: ['protein', 'fibre', 'magnesium'],

    sources: {
      'nice-eating': 'NICE-Leitlinie NG69 — Essstörungen: Erkennung und Behandlung',
      'emotional-review': 'Emotionales Essen — Übersicht zum Konstrukt und seiner Messung',
      nimh: 'US-amerikanisches National Institute of Mental Health — Essstörungen',
    },
  },

  /* ---------------------------------------------- Tracking ohne Zwang */
  'tracking-without-obsession': {
    title: 'Wir bauen eine Tracking-App, lesen Sie diesen Teil also skeptisch',
    short: 'Tracking ohne Zwang',
    lede:
      'Zu messen, was man isst, hilft manchen Menschen sehr und schadet anderen, und welche Gruppe ' +
      'man ist, entscheidet nicht, wie vernünftig man ist. Wir haben ein offensichtliches ' +
      'Interesse an der ersten Antwort — genau deshalb gibt es diese Seite.',
    description:
      'Wann Ernährungstracking hilft, wann es schadet, woran man merkt, dass es gekippt ist, und ' +
      'warum der richtige Rat manchmal lautet aufzuhören.',

    commonBelief:
      'Tracking ist einfach Information. Mehr Daten darüber, was ich esse, können nur helfen.',

    sections: [
      {
        heading: 'Worin es wirklich gut ist',
        body: [
          'Herauszufinden, was Sie tatsächlich essen — was fast niemand weiß. Schätzungen der ' +
            'eigenen Zufuhr aus dem Gedächtnis liegen in beide Richtungen weit daneben, und die ' +
            'Fehler sind nicht zufällig: Sie häufen sich genau um die Dinge, die man am wenigsten ' +
            'gern anschaut.',
          'Es ist auch gut darin, eine bestimmte Frage zu beantworten. Wo fehlt mir Eiweiß? Komme ' +
            'ich überhaupt in die Nähe von genug Eisen? Was steckt eigentlich in dem Mittagessen, ' +
            'das ich viermal die Woche esse? Diese Fragen haben Antworten, die Antworten sind ' +
            'nützlich, und wenn man sie hat, muss man nicht weiterfragen.',
          'Das ist die Form von Tracking im besten Fall: eine kurze Untersuchung mit Anfang und ' +
            'Ende. Zwei Wochen messen, um die Lücken zu finden, ist weit mehr wert als ein Jahr ' +
            'Protokollieren aus Gewohnheit.',
        ],
      },
      {
        heading: 'Wie es kippt',
        body: [
          'Aus einer Messung wird ein Ziel, und aus einem Ziel wird eine Regel. Diese Abfolge ist ' +
            'nicht zwangsläufig und sie ist häufig, und meist passiert sie ohne einen Moment, in ' +
            'dem jemand beschließt, sie zuzulassen.',
          'Die Signale sind erkennbar. Um die App herum essen statt sie zu benutzen — das ' +
            'Lebensmittel wählen, das sich sauber protokollieren lässt, statt das, was zur ' +
            'Mahlzeit passt. Unruhe davor, etwas zu essen, das sich nicht messen lässt, was still ' +
            'das Kochen anderer Leute und die meisten Restaurants ausschließt. Eine Zahl am ' +
            'Tagesende, die den Ton des Abends setzt. Der Drang, nach dem Blick auf eine Summe ' +
            'auszugleichen.',
          'Und das eine, das am meisten zählt: etwas protokollieren und dann wegen des Bildschirms ' +
            'anders essen — statt wegen Hunger, Sättigung oder Plan.',
        ],
      },
      {
        heading: 'Wer das wahrscheinlich nicht tun sollte',
        body: [
          'Jeder mit einer Vorgeschichte einer Essstörung. Das ist keine vorsichtige Absicherung — ' +
            'diätetische Selbstbeobachtung ist in dieser Gruppe mit schlechteren Verläufen ' +
            'verbunden, und Leitlinien raten außerhalb begleiteter Behandlung im Allgemeinen davon ' +
            'ab.',
          'Jeder, bei dem die Zahlen früher zur Hauptsache wurden. Wenn ein früherer Versuch damit ' +
            'endete, dass das Tracking übernahm, ist die App diesmal nicht anders.',
          'Und Jugendliche, bei denen das Verhältnis von Nutzen und Risiko schlecht und der ' +
            'Zeitpunkt in der Entwicklung ungünstig ist. Wir bauen aus diesem Grund für Erwachsene.',
        ],
      },
      {
        heading: 'Was uns lieber wäre',
        body: [
          'Zwei Wochen tracken, mit einer Frage im Kopf. Die Frage beantworten. Aufhören. ' +
            'Wiederkommen, wenn sich die Frage ändert oder die Ernährung.',
          'Die App benutzen, um einzelne Lebensmittel nachzuschlagen, ganz ohne zu protokollieren — ' +
            'der größte Teil des Werts liegt im Nährstoffprofil eines Lebensmittels und nicht im ' +
            'Tagebuch, und diese Nutzung trägt keines der oben beschriebenen Risiken.',
          'Und wenn irgendeines der Signale auf dieser Seite Sie beschreibt: schließen Sie sie. ' +
            'Dieser Rat kostet uns eine Nutzerin, und er ist trotzdem der richtige. Eine App, die ' +
            'sich nur verteidigen ließe, indem man das nicht sagt, wäre es nicht wert, gebaut zu ' +
            'werden.',
        ],
      },
    ],

    claims: {},

    practical: [
      {
        title: 'Geben Sie ihm eine Frage und ein Enddatum',
        detail:
          'Zwei Wochen, um die Lücken zu finden, schlagen ein Jahr Protokollieren aus Gewohnheit — ' +
            'und dort liegt fast der gesamte Wert.',
      },
      {
        title: 'Achten Sie darauf, ob Sie um die App herum essen',
        detail:
          'Essen zu wählen, weil es sich sauber protokollieren lässt, statt weil es zur Mahlzeit ' +
            'passt, ist das früheste verlässliche Zeichen, dass das Werkzeug zum Ziel geworden ist.',
      },
      {
        title: 'Nutzen Sie das Nachschlagen ohne das Tagebuch',
        detail:
          'Das meiste, was hier nützlich ist, ist das Nährstoffprofil eines Lebensmittels. Das ' +
            'trägt keines der Risiken des täglichen Protokollierens.',
      },
      {
        title: 'Mit einer Vorgeschichte: fangen Sie nicht an',
        detail:
          'Selbstbeobachtung ist bei einer Vorgeschichte von Essstörungen mit schlechteren ' +
            'Verläufen verbunden. Das ist eine Leitlinie, keine Vorsicht.',
      },
    ],

    seeAlso: ['protein', 'iron', 'calcium'],

    sources: {
      'tracking-review': 'Diätetische Selbstbeobachtung und Verläufe — systematische Übersichtsarbeit',
      orthorexia: 'Orthorexia nervosa und Gesundheits-Tracking — eine Übersichtsarbeit',
      'nice-eating': 'NICE-Leitlinie NG69 — Essstörungen: Erkennung und Behandlung',
    },
  },
};

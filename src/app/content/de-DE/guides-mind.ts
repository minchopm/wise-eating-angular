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
};

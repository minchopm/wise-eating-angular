import { CORE_DA } from './da-DK/core';
import { LocaleContent } from './types';

/**
 * Dansk.
 *
 * Oversat fra nutrients.en-US.ts. Tallene står ikke her: de lever ét sted, i
 * nutrient-facts.ts, og sættes sammen ved rendering via id. En oversættelse
 * kan gøre en side dårligt skrevet; den kan ikke gøre den farlig.
 *
 * Terminologi: «anbefalet dagligt indtag» for RDA, «tilstrækkeligt indtag»
 * for AI. Enhederne er som i kilden — µg og IE — fordi det er sådan, de står
 * på varedeklarationerne.
 */
export const DA_DK: LocaleContent = {
  chrome: {
    whatItDoes: 'Hvad det gør i kroppen',
    howMuch: 'Hvor meget du har brug for',
    colWho: 'For hvem',
    colPerDay: 'Pr. dag',
    colNote: 'Bemærkning',
    fromOurData: 'Fra vores egne data',
    foodsHeading: 'De fødevarer der indeholder mest {n}',
    foodsFootnote:
      'Pr. 100 g, fra vores kopi af USDA FoodData Central, målt mod en daglig værdi på ' +
      '{dv}{unit}. Rangeret efter mængde, ikke efter hvor meget kroppen faktisk optager — læs ' +
      'næste afsnit, før du stoler på rækkefølgen.',
    absorption: 'Hvad der hjælper, og hvad der står i vejen',
    helps: 'Hjælper',
    hinders: 'Står i vejen',
    shortfall: 'Hvem der typisk får for lidt',
    shortfallLede:
      'Grupper hvor indtag eller optagelse almindeligvis ligger under referencen. Det er en ' +
      'liste over befolkningsgrupper, ikke over symptomer — den kan ikke fortælle dig noget om ' +
      'dig selv.',
    cookIt: 'Lav det',
    ingredients: 'Ingredienser',
    method: 'Fremgangsmåde',
    sources: 'Kilder',
    reviewed: 'Sidst gennemgået',
    disclaimer:
      'Denne side er oplysning, ikke lægelig rådgivning. Den stiller ingen diagnose og erstatter ' +
      'ikke en læge, der kender din historie. Hvis du tror, du mangler {n}, er svaret en ' +
      'blodprøve og en samtale — ikke et kosttilskud købt på baggrund af en artikel.',
    ctaMid: 'Tabellen ovenfor er per 100 g. Appen regner på den portion, du faktisk spiste.',
    ctaLine: 'Alle fødevarer ovenfor og 12.601 mere, med hele profilen — i appen.',
    allNutrients: 'Alle næringsstoffer',
    familyVitamin: 'Vitamin',
    familyMineral: 'Mineral',
    familyMacronutrient: 'Makronæringsstof',
    referenceNote:
      'Værdierne i tabellen er de amerikanske Dietary Reference Intakes — den standard, appens ' +
      'fødevaredatabase er sammenstillet imod. De nordiske næringsstofanbefalinger (NNR) og ' +
      'EFSA’s referenceværdier afviger for enkelte næringsstoffer. Forskellene er små og ændrer ' +
      'ikke den praktiske konklusion, men hvis du sammenligner med en dansk eller europæisk ' +
      'kilde, er det grunden til, at tallene ikke stemmer helt.',
  },

  hub: {
    eyebrow: 'Dataene',
    title: 'Næringsstoffer og USDA-data',
    lede: 'Hvor tallene kommer fra, hvad de kan fortælle dig og — lige så vigtigt — hvad de ikke kan.',
    description:
      'Artiklerne om næringsstoffer på dansk: hvad hvert enkelt gør, hvor meget du har brug for, ' +
      'og hvilke fødevarer der indeholder mest — fra {source}.',
    dataHeading: 'Én database, og en god en',
    dataBody: [
      'Appen har {foods} fødevarer fra {source} med sig — i selve enheden, ikke på en server. ' +
        'Derfor er et opslag øjeblikkeligt, det virker i et fly, og intet om det, du har søgt ' +
        'efter, forlader telefonen.',
      'Hver fødevare bærer {fields} næringsstoffelter: {vitamins} vitaminer, {minerals} ' +
        'mineraler, makronæringsstofferne, kostfibre og sukkerarter. Værdierne findes pr. portion ' +
        'og pr. 100 g, og man kan skifte mellem de to uden at forlade panelet — hvilket betyder ' +
        'mere, end det lyder, fordi næsten enhver diskussion om, hvorvidt en fødevare er «rig» på ' +
        'noget, i virkeligheden er en diskussion om nævneren.',
      'Dataene er amerikanske af oprindelse og internationale i brug. Sammensætning er en ' +
        'egenskab ved fødevaren, ikke ved den grænse den har krydset: en linse i København og en ' +
        'linse i Seattle er den samme linse. Det der faktisk varierer — sort, jord, opbevaring, ' +
        'tilberedning — varierer inden for ét land lige så meget som mellem to, og derfor ' +
        'behandler appen hvert tal som et skøn.',
    ],
    railTitle: 'Hvor disse næringsstoffer faktisk findes',
    indexHeading: 'Ét næringsstof ad gangen',
    indexLede:
      'Hvad det er til for, hvor meget du har brug for i hver alder, hvilke fødevarer der ' +
      'indeholder mest — rangeret fra de samme USDA-optegnelser, appen har med sig — og noget at ' +
      'lave mad af.',
    read: 'Læs →',
    disclaimer:
      'Intet på disse sider er lægelig rådgivning, og ingen fødevare forebygger eller behandler ' +
      'en sygdom. Hvis du tror, du mangler noget, er svaret en blodprøve og en samtale med en ' +
      'læge, ikke en app.',
    englishNote: 'Mere udførligt, på engelsk: {href}',
    englishLink: 'Nutrients & USDA data',
  },

  shell: {
    tagline:
      '{foods} fødevarer fra {source}, på telefonen — med værktøjerne til planlægning, træning ' +
      'og spisekammer, så de rent faktisk bliver brugt.',
    product: 'Produkt',
    learn: 'Læs mere',
    legal: 'Juridisk',
    note:
      '{name} er et planlægnings- og oplysningsværktøj. Det stiller ingen diagnose, behandler og ' +
      'helbreder ingenting, og det erstatter ikke professionel lægelig rådgivning. ' +
      'Næringsværdierne er skøn fra {source}; det faktiske indhold i en fødevare varierer med ' +
      'jord, opbevaring og tilberedning.',
    rights: 'Alle rettigheder forbeholdes.',
    storeNote:
      'Udgivet i App Store af {seller}. Apple og App Store er varemærker tilhørende Apple Inc.',
    englishPages: 'Siderne herunder er på engelsk.',
  },

  articles: CORE_DA,
};

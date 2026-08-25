import { LocalisedArticle } from '../types';

/**
 * De otte mest søgte næringsstoffer, på dansk.
 *
 * Otte og ikke fireogtyve, med vilje. De engelske artikler har ligget online i
 * få dage, og vi ved endnu ikke, om de rangerer; at oversætte alle fireogtyve
 * til fire sprog inden et eneste signal ville være et væddemål, ikke en
 * strategi. Disse otte dækker størstedelen af søgeefterspørgslen, og resten
 * kan følge, når data retfærdiggør det.
 *
 * Tallene står ikke her. De lever ét sted, i nutrient-facts.ts, og sættes
 * sammen ved rendering via id.
 */
export const CORE_DA: Readonly<Record<string, LocalisedArticle>> = {
  /* ------------------------------------------------------------- magnesium */
  magnesium: {
    name: 'Magnesium',
    title: 'Magnesium: mineralet, de fleste mangler i stilhed',
    lede:
      'Det er nødvendigt for mere end tre hundrede enzymreaktioner, det meste er lagret i knoglen, ' +
      'hvor en blodprøve ikke kan se det, og omkring halvdelen af voksne i USA får mindre end det ' +
      'anbefalede. Her er, hvor du finder det.',
    description:
      'Hvad magnesium gør, hvor meget du har brug for efter alder, og de fødevarer der indeholder ' +
      'mest — rangeret fra USDA-data, pr. 100 g.',

    whatItDoes: [
      'Magnesium er en cofaktor: det gør ikke arbejdet selv, det er dét, flere hundrede enzymer ' +
        'har brug for for at gøre deres. Blandt dem er de enzymer, der bygger protein, dem der ' +
        'kopierer DNA, og dem der laver mad om til brugbar energi — derfor viser en mangel sig ' +
        'som vag træthed frem for som noget bestemt.',
      'Det står også over for calcium ved musklen. Calcium giver muskelfiberen besked om at ' +
        'trække sig sammen; magnesium er en del af det, der lader den slippe igen. Det samme par ' +
        'arbejder i nervevæv og i blodkarrenes vægge.',
      'Omkring 60 % af magnesiummet i en voksen krop sidder i knoglen, det meste af resten inde i ' +
        'cellerne, og under 1 % i blodet. Det sidste tal betyder mere, end det lyder: et normalt ' +
        'magnesiumtal i blodet udelukker ikke lave depoter, fordi kroppen trækker magnesium ud af ' +
        'knoglen for at holde blodniveauet stabilt.',
    ],

    intake: {
      'infant-0-6': { who: 'Spædbørn, 0–6 måneder', note: 'Tilstrækkeligt indtag, fra mælk' },
      'infant-7-12': { who: 'Spædbørn, 7–12 måneder', note: 'Tilstrækkeligt indtag' },
      'child-1-3': { who: 'Børn, 1–3 år' },
      'child-4-8': { who: 'Børn, 4–8 år' },
      'child-9-13': { who: 'Børn, 9–13 år' },
      'men-19-30': { who: 'Mænd, 19–30' },
      'men-31-plus': { who: 'Mænd, 31 og derover' },
      'women-19-30': { who: 'Kvinder, 19–30' },
      'women-31-plus': { who: 'Kvinder, 31 og derover' },
      pregnancy: { who: 'Graviditet', note: 'Afhængigt af alder' },
    },
    intakeNote:
      'Det er anbefalede daglige indtag, undtagen hvor andet er markeret: for spædbørn er der ' +
      'ikke evidens nok til at fastsætte et, så der angives et tilstrækkeligt indtag i stedet. ' +
      'Procenterne i tabellen nedenfor er af den daglige værdi på 420 mg, der bruges på ' +
      'varedeklarationer — ét tal for alle over fire år og derfor rigeligt for de fleste læsere.',

    foodsIntro:
      'Magnesium sidder i klorofyl, så grønne blade indeholder det — men kerner, nødder og bønner ' +
      'indeholder langt mere pr. mundfuld, fordi de opbevarer mineraler til en plante, der endnu ' +
      'ikke er vokset op.',

    helps: [
      'At fordele det over dagen — optagelsen falder, når dosis stiger',
      'Fuldkorn frem for raffineret; formalingen fjerner kim og klid, hvor magnesiummet sidder',
      'Udblødning eller spiring af bønner og korn, som nedbryder noget af fytatet',
    ],
    hinders: [
      'Meget høje zinktilskud, som konkurrerer om optagelsen',
      'Fytater i ikke-udblødt fuldkorn og bælgfrugter, som binder magnesium i tarmen',
      'Kronisk alkoholforbrug og visse vanddrivende midler, som øger tabet med urinen',
    ],
    absorptionNote:
      'Optagelsen fra mad ligger på cirka 30–40 % og stiger, når depoterne er lave, hvilket er ' +
      'kroppen der gør det fornuftige. Magnesiumoxid i tilskud optages dårligt sammenlignet med ' +
      'citrat eller glycinat; hvis en læge har anbefalet et tilskud, er formen værd at spørge om.',

    shortfall: [
      'Folk der mest spiser raffineret korn, da formalingen fjerner omkring 80 % af magnesiummet',
      'Ældre, som optager mindre og udskiller mere',
      'Folk med type 2-diabetes, cøliaki eller Crohns sygdom, gennem tab eller malabsorption',
      'Langtidsbrugere af protonpumpehæmmere, som kan sænke magnesium over år',
    ],

    recipe: {
      title: 'Puré af græskarkerner og spinat',
      serves: 'Fra 8 måneder, og den skalerer op til resten af bordet',
      ingredients: [
        '2 spsk græskarkerner, usaltede',
        '2 store håndfulde spinat, skyllet',
        '1 lille kartoffel, skrællet og i tern',
        '1 tsk olivenolie',
        '3–4 spsk lunkent vand, modermælk eller modermælkserstatning, til at løsne med',
      ],
      steps: [
        {
          title: 'Rist kernerne',
          detail:
            'Tør pande, middelvarme, tre til fire minutter under konstant omrøring. De er færdige, ' +
            'når de dufter nøddeagtigt, og en eller to begynder at hoppe. Lad dem køle helt af — ' +
            'varme kerner bliver til pasta i stedet for pulver.',
        },
        {
          title: 'Mal dem',
          detail:
            'Til fint pulver i en krydderikværn eller en lille blender. For et spædbarn er dette ' +
            'ikke valgfrit: hele kerner er en kvælningsrisiko til et godt stykke efter toårsdagen.',
        },
        {
          title: 'Kog kartoflen',
          detail: 'Ved svag varme i usaltet vand i 12–15 minutter, til en kniv går let igennem.',
        },
        {
          title: 'Lad spinaten falde sammen',
          detail:
            'Kom den i de sidste 60 sekunder. Længere tid, og det meste af folatet ender i vandet ' +
            'i stedet for i maden.',
        },
        {
          title: 'Blend',
          detail:
            'Hæld fra, men gem lidt af kogevandet. Blend kartoffel og spinat med olien, og rør så ' +
            'de malede kerner i. Løsn til den konsistens, dit barn er vant til.',
        },
      ],
      note:
        'Introducér kerner som enhver anden ny fødevare: alene først, om formiddagen, og ikke ' +
        'sammen med noget andet nyt. Tal med sundhedsplejersken eller lægen, før du begynder — ' +
        'især hvis der er allergi i familien.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Magnesium',
      dri: 'Dietary Reference Intakes for calcium, fosfor, magnesium, D-vitamin og fluorid',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ------------------------------------------------------------------ jern */
  iron: {
    name: 'Jern',
    title: 'Jern: hvorfor linser og spinat ikke er det samme jern',
    lede:
      'Jern fra planter og jern fra kød er kemisk forskelligt, og tarmen behandler dem ' +
      'forskelligt. At forstå hvad der er hvad, er forskellen på at spise meget jern og at optage ' +
      'noget af det.',
    description:
      'Hæmjern over for ikke-hæmjern, hvor meget du har brug for efter alder, hvad der hjælper og ' +
      'blokerer optagelsen, og de fødevarer der indeholder mest jern — fra USDA-data.',

    whatItDoes: [
      'Det meste af kroppens jern gør én ting: sidder midt i hæmoglobinet og holder på et ' +
        'iltmolekyle, så en rød blodcelle kan bære det fra lungen til musklen. Mangler der jern, ' +
        'når mindre ilt frem, og derfor er det første, folk bemærker, at blive forpustet på en ' +
        'trappe, de før klarede.',
      'En mindre del sidder i myoglobin, som lagrer ilt inde i selve musklen, og i enzymer der ' +
        'driver energimaskineriet i hver celle. Jern er også nødvendigt for de enzymer, der bygger ' +
        'myelin og flere signalstoffer — derfor tages jernstatus i de første to leveår så ' +
        'alvorligt.',
      'Kroppen har ingen måde at udskille jern med vilje. Den regulerer ved at optage mere eller ' +
        'mindre, og det skærer begge veje: derfor stiger optagelsen, når du mangler, og derfor er ' +
        'det en decideret dårlig idé at tage tilskud, ingen har ordineret.',
    ],

    intake: {
      'infant-0-6': {
        who: 'Spædbørn, 0–6 måneder',
        note: 'Tilstrækkeligt indtag; depot fra fødslen',
      },
      'infant-7-12': { who: 'Spædbørn, 7–12 måneder', note: 'Det største spring i hele tabellen' },
      'child-1-3': { who: 'Børn, 1–3 år' },
      'child-4-8': { who: 'Børn, 4–8 år' },
      'men-19-50': { who: 'Mænd, 19–50' },
      'women-19-50': { who: 'Kvinder, 19–50', note: 'Menstruationstab' },
      'women-51-plus': { who: 'Kvinder, 51 og derover' },
      pregnancy: { who: 'Graviditet' },
      vegetarian: {
        who: 'Vegetarer og veganere',
        note: 'Gang tallet for din alder og dit køn — optagelsen fra planter er lavere',
      },
    },
    intakeNote:
      'Springet ved syv måneder er det, der er værd at kende. Et spædbarn fødes med et jerndepot, ' +
      'der slipper op omkring seks måneder, præcis når mælk alene holder op med at dække behovet ' +
      '— derfor er jernrig overgangskost en prioritet og ikke en detalje.',

    foodsIntro:
      'Rangeret efter samlet jern pr. 100 g. Læs listen med næste afsnit i baghovedet: de ' +
      'animalske fødevarer på den afgiver deres jern langt lettere end de vegetabilske, så ' +
      'rækkefølgen her er ikke rækkefølgen for, hvad der faktisk når blodet.',

    helps: [
      'C-vitamin i samme måltid — det kan mangedoble optagelsen af ikke-hæmjern',
      'Lidt kød, fjerkræ eller fisk ved siden af plantekilder, hvilket løfter begge dele',
      'Udblødning, spiring eller fermentering af bønner og korn, som nedbryder fytat',
      'At tilberede sur mad i en støbejernspande, hvilket faktisk overfører noget',
    ],
    hinders: [
      'Te og kaffe til maden — tanninerne kan skære optagelsen mere end halvt over',
      'Calcium taget samtidig, uanset om det er fra mejeriprodukter eller et tilskud',
      'Fytater i ikke-udblødt fuldkorn, bælgfrugter og nødder',
      'Langvarig syrehæmmende medicin, da mavesyre er en del af, hvordan jern frigøres',
    ],
    absorptionNote:
      'Dette er hele pointen med artiklen. Hæmjern, fra kød, fjerkræ og fisk, optages med omkring ' +
      '15–35 % og påvirkes næsten ikke af, hvad der ellers er på tallerkenen. Ikke-hæmjern, fra ' +
      'planter, æg og berigede fødevarer, optages med omkring 2–20 % — og det spænd afgøres ' +
      'næsten udelukkende af, hvad det spises sammen med. Linser og spinat er ikke dårlige ' +
      'kilder; de er kilder, der har brug for et pres citron og ingen te.',

    shortfall: [
      'Spædbørn fra omkring seks måneder, når depotet fra fødslen slipper op',
      'Kvinder der menstruerer, og især dem med kraftige blødninger',
      'Gravide, hvor behovet stiger med halvdelen igen',
      'Vegetarer og veganere, som har brug for omkring 1,8 gange tallet i tabellen',
      'Udholdenhedsatleter, gennem hæmolyse ved landing og tab med sved',
    ],

    recipe: {
      title: 'Puré af røde linser og rød peberfrugt',
      serves: 'Fra 7 måneder — en jernkilde med sit eget C-vitamin indbygget',
      ingredients: [
        '3 spsk røde linser, skyllet til vandet er klart',
        '1 lille rød peberfrugt, uden kerner og hakket',
        '1 lille gulerod, skrællet og hakket',
        '150 ml usaltet vand eller bouillon',
        '1 tsk olivenolie',
        'Et pres citron, til sidst',
      ],
      steps: [
        {
          title: 'Skyl linserne ordentligt',
          detail:
            'Under koldt vand i en sigte, til det løber klart og ikke uklart. Det skyller ' +
            'overfladestivelse væk sammen med noget af det fytat, der ellers ville binde jernet.',
        },
        {
          title: 'Lad det simre',
          detail:
            'Linser, gulerod og vand i en lille gryde. Kog op, og skru så ned til svag simren i ' +
            '15 minutter med låget på klem.',
        },
        {
          title: 'Peberfrugten sent',
          detail:
            'Kun de sidste 5 minutter. C-vitamin nedbrydes af varme og tid, og peberfrugten er ' +
            'her lige så meget for C-vitaminet som for smagen.',
        },
        {
          title: 'Blend og afslut',
          detail:
            'Blend glat med olien, og rør så citronen i uden for varmen. Løsn med lidt afkølet ' +
            'kogevand, hvis den er tykkere, end dit barn er vant til.',
        },
      ],
      note:
        'Server dette adskilt fra et mælkemåltid frem for sammen med et — calcium i mælk ' +
        'konkurrerer med jernet om optagelsen. En time til hver side er nok. Som altid: spørg ' +
        'sundhedsplejersken eller lægen, før du introducerer en ny fødevare.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Jern',
      dri: 'Dietary Reference Intakes for A-vitamin, K-vitamin, jern, zink og flere',
      fdc: 'USDA FoodData Central',
    },
  },

  /* -------------------------------------------------------------- calcium */
  calcium: {
    name: 'Calcium',
    title: 'Calcium: en bank, man kun kan indbetale i, mens den har åbent',
    lede:
      'Næsten alt sammen sidder i skelettet, og skelettet holder op med at tage imod indskud et ' +
      'sted i slutningen af tyverne. Det, du bygger op inden da, er det, du bruger af resten af ' +
      'livet.',
    description:
      'Hvad calcium gør ud over knogler, hvor meget du har brug for i hver alder, hvorfor ' +
      'D-vitamin afgør om du optager det, og de fødevarer der indeholder mest — fra USDA-data.',

    whatItDoes: [
      'Omkring 99 % af kroppens calcium er strukturelt — det er mineralet, der gør knogler og ' +
        'tænder stive. Den sidste procent laver noget mere presserende: hver muskelsammentrækning, ' +
        'hvert nervesignal og hvert trin i blodets størkning kræver calciumioner i en meget ' +
        'præcis koncentration.',
      'Den ene procent forsvares ubetinget. Begynder calcium i blodet at falde, stiger ' +
        'parathyreoideahormon, og kroppen opløser knogle for at genoprette det. Derfor siger en ' +
        'blodprøve næsten intet om calciumindtag: tallet forbliver normalt til længe efter, at ' +
        'skelettet har betalt for det i årevis.',
      'Knoglemassen bygges op gennem barndom og ungdom, topper et sted mellem midt i tyverne og ' +
        'tredive, og falder langsomt derefter. Teenageårene er det største enkeltindskud, nogen ' +
        'foretager, og derfor er anbefalingen til en fjortenårig højere end til forældrene.',
    ],

    intake: {
      'infant-0-6': { who: 'Spædbørn, 0–6 måneder', note: 'Tilstrækkeligt indtag' },
      'infant-7-12': { who: 'Spædbørn, 7–12 måneder', note: 'Tilstrækkeligt indtag' },
      'child-1-3': { who: 'Børn, 1–3 år' },
      'child-4-8': { who: 'Børn, 4–8 år' },
      'teen-9-18': {
        who: '9–18 år',
        note: 'Det højeste tal i tabellen, og ikke ved et tilfælde',
      },
      'adults-19-50': { who: 'Voksne, 19–50' },
      'men-51-70': { who: 'Mænd, 51–70' },
      'women-51-plus': {
        who: 'Kvinder, 51 og derover',
        note: 'Knogletabet accelererer efter overgangsalderen',
      },
      'age-71-plus': { who: 'Voksne, 71 og derover' },
    },
    intakeNote:
      'Mere er ikke bedre. Over cirka 2.000–2.500 mg om dagen fra mad og tilskud tilsammen ' +
      'forsvinder evidensen for gavn, og risikoen for nyresten stiger. Calcium er et ' +
      'næringsstof, hvor det brugbare interval har et loft såvel som et gulv.',

    foodsIntro:
      'Mejeriprodukter dominerer på mængde, men ikke på optagelse: calcium i grønt med lavt ' +
      'oxalatindhold, som grønkål og pak choi, optages omkring dobbelt så godt som calcium i ' +
      'mælk. Spinat er den berømte undtagelse — rig på calcium, hvoraf næsten intet er ' +
      'tilgængeligt.',

    helps: [
      'D-vitamin, uden hvilket tarmen kun optager en brøkdel af det, der kommer ind',
      'At dele indtaget op — optagelsen er mest effektiv i doser på omkring 500 mg eller mindre',
      'Grønt med lavt oxalatindhold: grønkål, pak choi, broccoli, brøndkarse',
      'Fermentering og udblødning, som reducerer fytat i bønner og korn',
    ],
    hinders: [
      'Oxalat, som er grunden til at spinat, rabarber og bladbeder afgiver meget lidt af deres',
      'Meget højt saltindtag, som øger det calcium, der tabes med urinen',
      'For meget koffein og alkohol, i moderat grad',
      'At tage det samtidig med et jerntilskud — de blokerer hinanden',
    ],
    absorptionNote:
      'Optagelsen ligger omkring 30 % fra de fleste fødevarer og falder, når dosis stiger, hvilket ' +
      'er argumentet for at sprede det ud over måltiderne frem for at tage ét stort tilskud. Den ' +
      'falder også med alderen: en ældre optager væsentligt mindre end en teenager fra det samme ' +
      'glas mælk, og det er en del af grunden til, at anbefalingen stiger igen efter halvfjerds.',

    shortfall: [
      'Teenagere, som har brug for mest og ofte drikker mindst mælk',
      'Kvinder efter overgangsalderen, gennem faldende østrogen og hurtigere knogleomsætning',
      'Folk der undgår mejeriprodukter uden at erstatte dem med berigede eller calciumrige alternativer',
      'Folk med laktoseintolerance, der har fjernet mejeri i stedet for at skifte form',
      'Alle i langvarig behandling med binyrebarkhormon',
    ],

    recipe: {
      title: 'Braiseret grønkål med hvide bønner og citron',
      serves: 'To, som tilbehør; cirka tyve minutter',
      ingredients: [
        '250 g grønkål, stilke pillet fra, blade revet i stykker',
        '1 dåse hvide bønner, drænet og skyllet',
        '2 fed hvidløg, i skiver',
        '2 spsk olivenolie',
        '100 ml vand eller bouillon',
        'Skal og saft af en halv citron',
        'Sort peber',
      ],
      steps: [
        {
          title: 'Pil stilkene fra',
          detail:
            'Hold i bunden af stilken og træk bladet af med den anden hånd. Stilkene kan spises, ' +
            'men er tre gange så længe om at blive møre, og denne ret er kort.',
        },
        {
          title: 'Blødgør hvidløget',
          detail:
            'Olivenolie i en bred pande ved svag varme, hvidløg i to minutter til det dufter og ' +
            'knap nok tager farve. Brunet hvidløg bliver bittert, og der er intet her til at ' +
            'skjule det.',
        },
        {
          title: 'Braisér grønkålen',
          detail:
            'Blade og vand i, låg på, otte til ti minutter ved middel-svag varme, til kålen er ' +
            'mør men stadig grøn. Grønkål der er blevet olivenfarvet, har mistet den konsistens, ' +
            'der gjorde den værd at tilberede.',
        },
        {
          title: 'Afslut',
          detail:
            'Bønnerne i for at blive varme, derefter citronskal og -saft uden for varmen. Peber, ' +
            'og intet salt før du har smagt — bønner på dåse har deres eget med.',
        },
      ],
      note:
        'Grønkål er et grønt med lavt oxalatindhold, og det er pointen: dens calcium optages ' +
        'omkring dobbelt så godt som spinatens. Citronen er ikke kun for smagens skyld — syren ' +
        'hjælper også på jernet i bønnerne.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Calcium',
      dri: 'Dietary Reference Intakes for calcium og D-vitamin',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ----------------------------------------------------------------- zink */
  zinc: {
    name: 'Zink',
    title: 'Zink: den man opdager gennem smagssansen',
    lede:
      'Kroppen lagrer næsten intet af det, hvilket betyder, at indtaget skal være jævnt frem for ' +
      'lejlighedsvist. Det er også grunden til, at en sløvet smagssans er et af de tidligste ' +
      'tegn på, at indtaget har været lavt et stykke tid.',
    description:
      'Hvad zink gør for immunforsvar, sårheling og smagssans, hvor meget du har brug for efter ' +
      'alder, hvorfor fytat betyder noget, og de fødevarer der indeholder mest — fra USDA-data.',

    whatItDoes: [
      'Zink er strukturelt på en måde, de fleste mineraler ikke er. Hundredvis af proteiner ' +
        'folder sig omkring en zinkion for at holde deres form — de «zinkfinger»-motiver, der ' +
        'lader transkriptionsfaktorer gribe fat i DNA, er de bedst kendte. Uden zink arbejder de ' +
        'proteiner ikke bare langsomt; de dannes ikke.',
      'Det er også centralt for immunforsvaret og for sårheling, som begge afhænger af celler, ' +
        'der deler sig hurtigt. Ethvert væv med hurtig udskiftning — tarmslimhinde, hud, ' +
        'immunceller, smagsløg — mærker en mangel først.',
      'Der findes ikke noget zinkdepot værd at tale om. Modsat jern, som kroppen hamstrer, skal ' +
        'zink ankomme mere eller mindre løbende, og status falder inden for uger, hvis indtaget ' +
        'går ned.',
    ],

    intake: {
      'infant-0-6': { who: 'Spædbørn, 0–6 måneder', note: 'Tilstrækkeligt indtag' },
      'infant-7-12': { who: 'Spædbørn, 7–12 måneder' },
      'child-1-3': { who: 'Børn, 1–3 år' },
      'child-4-8': { who: 'Børn, 4–8 år' },
      'child-9-13': { who: 'Børn, 9–13 år' },
      'men-14-plus': { who: 'Mænd, 14 og derover' },
      'women-19-plus': { who: 'Kvinder, 19 og derover' },
      pregnancy: { who: 'Graviditet' },
      breastfeeding: { who: 'Amning' },
    },
    intakeNote:
      'Vegetarer kan have brug for op til 50 % mere end disse tal. Det er ikke et ' +
      'afrundingstillæg — det afspejler fytatindholdet i en plantebaseret kost, som binder zink i ' +
      'tarmen og kan halvere, hvor meget der er tilgængeligt.',

    foodsIntro:
      'Østers ligger så langt foran, at de forvrænger skalaen — én portion indeholder flere dages ' +
      'behov. Under dem er listen rødt kød, skaldyr, kerner og bælgfrugter, i den rækkefølge af ' +
      'tilgængelighed snarere end af mængde.',

    helps: [
      'Animalsk protein i samme måltid, hvilket forbedrer optagelsen fra alt på tallerkenen',
      'Udblødning, spiring, fermentering og hævning — alt sammen reducerer fytat betydeligt',
      'Surdej frem for usyret brød, af samme grund',
    ],
    hinders: [
      'Fytat i ubehandlet fuldkorn og bælgfrugter, den enkeltstørste hæmmer',
      'Højdosis jerntilskud taget på tom mave samtidig',
      'Meget højt calciumindtag, i moderat grad',
      'Kronisk diarré eller inflammatorisk tarmsygdom, gennem direkte tab',
    ],
    absorptionNote:
      'Forholdet mellem fytat og zink i en kost forudsiger optagelsen bedre end zinkindholdet gør. ' +
      'Derfor er den samme mængde zink fra oksekød og fra fuldkornsbrød ikke det samme, og derfor ' +
      'viser traditionelle tilberedningsmetoder — at udbløde bønner natten over, at hæve brød — ' +
      'sig at have udført et reelt ernæringsmæssigt arbejde hele tiden.',

    shortfall: [
      'Vegetarer og veganere, gennem fytat snarere end gennem indtag',
      'Ældre, gennem lavere indtag og nedsat optagelse på én gang',
      'Folk med Crohns sygdom, cøliaki eller kronisk diarré',
      'Folk med seglcelleanæmi',
      'Storforbrugere af alkohol, gennem nedsat optagelse og øget tab med urinen',
    ],

    recipe: {
      title: 'Oksekød og græskarkerner i sofrito',
      serves: 'To, cirka femogtyve minutter',
      ingredients: [
        '250 g hakket oksekød',
        '3 spsk græskarkerner',
        '1 løg, fint hakket',
        '1 rød peberfrugt, i tern',
        '2 fed hvidløg, knust',
        '1 tsk røget paprika',
        '1 spsk olivenolie',
        '1 dåse hakkede tomater',
      ],
      steps: [
        {
          title: 'Rist kernerne først',
          detail:
            'Tør pande, tre minutter, og hæld dem så ud. At gøre det før kødet holder panden ren ' +
            'og forhindrer kernerne i at dampe i fedtet.',
        },
        {
          title: 'Brun kødet ordentligt',
          detail:
            'Kraftig varme, i ét lag, og lad det være i to minutter, før du rører. En overfyldt ' +
            'pande gør det gråt, og gråt hakket kød har intet af den smag, bruningen skaber.',
        },
        {
          title: 'Byg sofritoen',
          detail:
            'Kødet op, varmen ned, løg og peberfrugt i otte minutter til de er bløde og søde. ' +
            'Hvidløg og paprika kun det sidste minut — paprika brænder hurtigt og bliver besk.',
        },
        {
          title: 'Lad det simre',
          detail:
            'Tomater og kødet tilbage i, femten minutter ved svag simren. Drys kernerne over ved ' +
            'bordet, så de bliver ved med at være sprøde.',
        },
      ],
      note:
        'Oksekød og kerner sammen er pointen: det animalske protein forbedrer, hvor meget zink du ' +
        'optager fra kernerne, som alene holdes tilbage af fytat.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Zink',
      dri: 'Dietary Reference Intakes for A-vitamin, K-vitamin, jern, zink og flere',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ----------------------------------------------------------- D-vitamin */
  'vitamin-d': {
    name: 'D-vitamin',
    title: 'D-vitamin: den man for det meste ikke spiser',
    lede:
      'Næsten alle andre næringsstoffer kommer fra mad. Dette dannes i huden ud fra sollys, og ' +
      'derfor ændrer rådene om det sig med breddegrad, årstid og hvor meget af året man ' +
      'tilbringer indendørs.',
    description:
      'Hvorfor D-vitamin er anderledes end alle andre vitaminer, hvor meget du har brug for efter ' +
      'alder, og de få fødevarer der faktisk indeholder det — rangeret fra USDA-data.',

    whatItDoes: [
      'D-vitamin styrer, hvor meget calcium du optager fra det, du spiser. Uden nok kan du have ' +
        'en calciumrig kost og alligevel ikke få calciummet ind i knoglerne — hvilket er, hvad ' +
        'engelsk syge hos børn og knoglemarvsblødhed hos voksne i virkeligheden er.',
      'Det opfører sig mere som et hormon end som et vitamin. Huden danner det ud fra UVB-lys, ' +
        'leveren og derefter nyrerne omdanner det til den aktive form, og receptorer for det ' +
        'dukker op i væv, der intet oplagt har med knogler at gøre: immunceller, muskel, ' +
        'tarmslimhinde.',
      'Fordi det er fedtopløseligt, lagres det frem for at blive skyllet ud. Det er nyttigt hen ' +
        'over en vinter, og det er også grunden til, at D-vitamin er et af de få næringsstoffer, ' +
        'hvor et ubetænksomt tilskud faktisk kan skade.',
    ],

    intake: {
      'infant-0-12': { who: 'Spædbørn, 0–12 måneder', note: 'Tilstrækkeligt indtag' },
      'age-1-70': { who: 'Børn og voksne, 1–70' },
      'age-71-plus': { who: 'Voksne, 71 og derover' },
      pregnancy: { who: 'Graviditet og amning' },
    },
    intakeNote:
      'Mikrogram og internationale enheder er begge i brug, og 1 µg = 40 IE, hvilket er en ' +
      'hyppig kilde til forvirring på varedeklarationer. Tallene forudsætter minimal soleksponering ' +
      '— de er bevidst sat til det værst tænkelige tilfælde, fordi alternativet er råd, der kun ' +
      'virker i juli.',

    foodsIntro:
      'Dette er den korteste reelt nyttige liste på sitet, og det er netop resultatet. Uden for ' +
      'fed fisk, æggeblomme og ting der er beriget med vilje, er mad ikke der, D-vitamin kommer ' +
      'fra.',

    helps: [
      'At spise det sammen med fedt, da det er fedtopløseligt, og et fedtfrit måltid optager mindre',
      'Sol på huden — midt på dagen, arme og ansigt, og langt kortere tid end de fleste tror',
      'Berigede fødevarer, som i mange lande er den klart største kostkilde',
    ],
    hinders: [
      'Breddegrad og årstid: over cirka 37° danner vintersol så godt som intet',
      'Solcreme, glas og tøj, som alle blokerer UVB',
      'Mørkere hud, som kræver længere eksponering for den samme mængde',
      'Alderen, som mindsker hudens effektivitet i at danne det',
    ],

    shortfall: [
      'Ammede spædbørn, hvilket er grunden til at tilskud rutinemæssigt anbefales til dem',
      'Folk der tildækker sig, arbejder indendørs eller bor på nordlige breddegrader gennem vinteren',
      'Folk med mørkere hud, der bor langt fra ækvator',
      'Ældre, gennem mindre tid udendørs og mindre effektiv dannelse',
      'Folk med fedtmalabsorption — cøliaki, Crohns sygdom, efter fedmekirurgi',
    ],

    recipe: {
      title: 'Mos af laks og sød kartoffel',
      serves: 'Fra 7 måneder; et af de få måltider, der er en reel kostkilde',
      ingredients: [
        '40 g laksefilet, skind og ben omhyggeligt fjernet',
        '1 lille sød kartoffel, skrællet og i tern',
        '1 tsk olivenolie eller usaltet smør',
        '2–3 spsk lunkent vand, modermælk eller modermælkserstatning',
      ],
      steps: [
        {
          title: 'Tjek fisken to gange',
          detail:
            'Kør en finger hen over fileten begge veje. Nålebenene er hårde, skarpe og lette at ' +
            'overse, og dette er trinnet, man ikke skal haste igennem.',
        },
        {
          title: 'Damp dem sammen',
          detail:
            'Sød kartoffel i 12 minutter, derefter laksen ovenpå i yderligere 6–8, til den ' +
            'flager. At dampe frem for at koge holder fedtet — og D-vitaminet der er opløst i det ' +
            '— i maden i stedet for i vandet.',
        },
        {
          title: 'Del den i flager og tjek igen',
          detail: 'Del laksen med en gaffel, og se den igennem en gang til for ben.',
        },
        {
          title: 'Mos',
          detail:
            'Mos den søde kartoffel med olien, vend laksen i, og løsn til den konsistens, dit ' +
            'barn kan klare. Server lunt, ikke varmt.',
        },
      ],
      note:
        'Fed fisk står på de fleste lister over overgangskost fra omkring seks måneder og er ' +
        'samtidig et almindeligt allergen — introducér den alene, tidligt på dagen. Officielle ' +
        'råd begrænser fed fisk til et par portioner om ugen for små børn. Spørg lægen først.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — D-vitamin',
      dri: 'Dietary Reference Intakes for calcium og D-vitamin',
      fdc: 'USDA FoodData Central',
    },
  },

  /* --------------------------------------------------------- B12-vitamin */
  'vitamin-b12': {
    name: 'B12-vitamin',
    title: 'B12-vitamin: kun fra dyr, eller fra en fabrik',
    lede:
      'Ingen plante danner B12. Det gør intet dyr heller — bakterier danner det, og dyr ophober ' +
      'det. Den ene kendsgerning afgør alt om, hvem der skal være opmærksom på det.',
    description:
      'Hvor B12-vitamin faktisk kommer fra, hvor meget du har brug for, hvorfor optagelsen ' +
      'svigter med alder og medicin, og de fødevarer der indeholder mest — fra USDA-data.',

    whatItDoes: [
      'B12 er nødvendigt for at gøre røde blodceller færdige. Uden det kommer de ud store, få og ' +
        'dårligt formede — megaloblastær anæmi — og trætheden der følger, er den samme træthed ' +
        'lavt jern giver, ud fra en helt anden mekanisme.',
      'Det vedligeholder også myelinskeden omkring nerverne. Det er den halvdel, der betyder ' +
        'mest, fordi nerveskader fra langvarig mangel kan blive blivende, og de kan udvikle sig, ' +
        'mens blodbilledet stadig ser normalt ud.',
      'Og det arbejder sammen med folat i den reaktion, der genbruger homocystein. Store mængder ' +
        'folat kan rette anæmien ved en B12-mangel, mens nerveskaden fortsætter nedenunder — ' +
        'hvilket er præcis derfor, det er uklogt at behandle sig selv med et B-kompleks.',
    ],

    intake: {
      'infant-0-6': { who: 'Spædbørn, 0–6 måneder', note: 'Tilstrækkeligt indtag' },
      'infant-7-12': { who: 'Spædbørn, 7–12 måneder', note: 'Tilstrækkeligt indtag' },
      'child-1-3': { who: 'Børn, 1–3 år' },
      'child-4-8': { who: 'Børn, 4–8 år' },
      'child-9-13': { who: 'Børn, 9–13 år' },
      adults: { who: 'Voksne' },
      pregnancy: { who: 'Graviditet' },
      breastfeeding: { who: 'Amning' },
    },
    intakeNote:
      'Det er små tal, og det er misvisende. Problemet med B12 er næsten aldrig, hvor meget der ' +
      'ligger på tallerkenen — det er, om kroppen stadig kan tage det af tallerkenen.',

    foodsIntro:
      'Lever og skaldyr ligger så langt foran alt andet, at listen næppe er en rangering. Læg ' +
      'mærke til, hvad der mangler: ingen uberiget planteføde optræder, fordi ingen indeholder det.',

    helps: [
      'Mavesyre og intrinsic factor, som frigør B12 fra maden og bærer det gennem tarmen',
      'Berigede fødevarer og tilskud, hvor B12 allerede er frit',
      'At fordele indtaget over dagen — optagelsen pr. måltid stopper ved et par mikrogram',
    ],
    hinders: [
      'Metformin, taget i lang tid',
      'Protonpumpehæmmere og H2-blokkere, som reducerer den syre, der skal til for at frigøre det',
      'Atrofisk gastritis, almindelig med alderen, som reducerer intrinsic factor',
      'Kirurgi på mavesæk eller ileum, som fjerner det væv der danner eller optager det',
    ],
    absorptionNote:
      'Spirulina, nori og fermenterede fødevarer nævnes ofte som plantekilder. Det meste af det, ' +
      'de indeholder, er B12-analoger, som besætter receptoren uden at udføre arbejdet, og noget ' +
      'tyder på, at de kan gøre situationen værre snarere end bedre. Enhver der ikke spiser ' +
      'animalske fødevarer, har brug for et tilskud eller berigede fødevarer — det er ikke et ' +
      'spørgsmål om kostpræference.',

    shortfall: [
      'Veganere og mangeårige vegetarer uden berigede fødevarer eller tilskud',
      'Voksne over cirka halvtreds, gennem faldende mavesyre',
      'Folk på metformin eller langvarig syrehæmning',
      'Ammede børn af mødre med mangel — depoterne ved fødslen er små og slipper hurtigt op',
      'Folk efter fedmekirurgi eller med Crohns sygdom i ileum',
    ],

    recipe: {
      title: 'Puré af kyllingelever og æble',
      serves: 'Fra 7 måneder, højst en til to gange om måneden',
      ingredients: [
        '30 g kyllingelever, renset',
        '1 lille sødt æble, skrællet og uden kernehus',
        '1 lille kartoffel, skrællet og i tern',
        '1 tsk usaltet smør eller olivenolie',
        'Vand til at løsne med',
      ],
      steps: [
        {
          title: 'Rens leveren',
          detail: 'Skær lyst bindevæv og grønlige områder væk. Skyl og dup tør.',
        },
        {
          title: 'Kog kartoffel og æble',
          detail: 'Sammen i usaltet vand i cirka 12 minutter, til begge dele er bløde.',
        },
        {
          title: 'Steg leveren helt igennem',
          detail:
            'Nænsomt i smørret i 5–6 minutter under vending, til der ikke er rosa nogen steder. ' +
            'Ved indmad er «lige akkurat gennemstegt» ikke godt nok til et spædbarn.',
        },
        {
          title: 'Blend',
          detail:
            'Det hele sammen, glat, løsnet med kogevandet. Æblet gør et reelt stykke arbejde her ' +
            '— det tager kanten af en kraftig smag.',
        },
      ],
      note:
        'Lever er usædvanlig rig på A-vitamin såvel som B12, og A-vitamin ophobes. To gange om ' +
        'måneden er det sædvanlige loft for et lille barn, og lever anbefales slet ikke under ' +
        'graviditet af samme grund. Spørg lægen, før du begynder.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — B12-vitamin',
      dri: 'Dietary Reference Intakes for thiamin, riboflavin, niacin, B6-vitamin, folat og B12-vitamin',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ---------------------------------------------------------------- folat */
  folate: {
    name: 'Folat',
    title: 'Folat: vitaminet der skal være der, før du ved, du har brug for det',
    lede:
      'Neuralrøret lukker inden for de første 28 dage af en graviditet — ofte før en kvinde ved, ' +
      'at hun er gravid. Netop den detalje om timing er grunden til, at folat tilsættes mel i ' +
      'mere end firs lande.',
    description:
      'Folat over for folinsyre, hvor meget du har brug for, hvorfor timingen i graviditeten er ' +
      'alt, og de fødevarer der indeholder mest — fra USDA-data.',

    whatItDoes: [
      'Folat transporterer enkeltkulstofenheder rundt, og de reaktioner, der har brug for dem, er ' +
        'dem der bygger DNA. Ethvert væv, der deler sig hurtigt — knoglemarv, tarmslimhinde, et ' +
        'foster i vækst — afhænger af en jævn forsyning.',
      'Uden det begynder cellerne at dele sig og kan ikke gøre det færdigt. I marven giver det ' +
        'megaloblastær anæmi, det samme billede som B12-mangel giver, fordi B12 og folat mødes i ' +
        'den samme reaktion.',
      'Hos et foster er svigtet strukturelt. Neuralrøret — som bliver til hjerne og rygmarv — ' +
        'lukker mellem dag 21 og 28 efter undfangelsen. Tilstrækkeligt folat i det øjeblik ' +
        'nedsætter risikoen for rygmarvsbrok og anencefali betydeligt. Tilstrækkeligt folat to ' +
        'måneder senere hjælper ikke.',
    ],

    intake: {
      'infant-0-6': { who: 'Spædbørn, 0–6 måneder', note: 'Tilstrækkeligt indtag' },
      'infant-7-12': { who: 'Spædbørn, 7–12 måneder', note: 'Tilstrækkeligt indtag' },
      'child-1-3': { who: 'Børn, 1–3 år' },
      'child-4-8': { who: 'Børn, 4–8 år' },
      'child-9-13': { who: 'Børn, 9–13 år' },
      'adults-14-plus': { who: '14 år og derover' },
      pregnancy: { who: 'Graviditet' },
      breastfeeding: { who: 'Amning' },
    },
    intakeNote:
      'DFE står for kostfolatækvivalenter, og de findes, fordi folinsyre fra tilskud og berigede ' +
      'fødevarer optages omkring 1,7 gange bedre end folat fra mad. Anbefalingen i de fleste ' +
      'lande er, at enhver der kan blive gravid, tager 400 µg folinsyre dagligt — ikke når man er ' +
      'gravid, men inden, netop på grund af timingen ovenfor.',

    foodsIntro:
      'Navnet kommer af folium, latin for blad, og rangeringen bekræfter det: bladgrønt, ' +
      'bælgfrugter, lever og — hvor loven kræver det — beriget mel.',

    helps: [
      'At spise det grønne råt eller let tilberedt, da folat er varmefølsomt',
      'Bælgfrugter, som er tætte på det og holder bedre på det end blade gør',
      'Beriget mel og korn, hvor det er påbudt',
    ],
    hinders: [
      'Langvarig kogning, som kan ødelægge eller udvaske det meste',
      'Alkohol, som hæmmer optagelsen og øger udskillelsen',
      'Methotrexat og visse epilepsimidler, som er folatantagonister',
      'Cøliaki og anden malabsorption',
    ],
    absorptionNote:
      'En advarsel om tilskud. Et højt indtag af folinsyre kan maskere anæmien ved en B12-mangel, ' +
      'mens den neurologiske skade skrider frem ubemærket — derfor findes den øvre grænse på ' +
      '1.000 µg for voksne, og derfor er et B-kompleks en dårlig måde at selvbehandle træthed på.',

    shortfall: [
      'Enhver der kan blive gravid og ikke tager tilskud',
      'Folk med alkoholafhængighed',
      'Folk på methotrexat, sulfasalazin eller visse epilepsimidler',
      'Folk med cøliaki eller inflammatorisk tarmsygdom',
    ],

    recipe: {
      title: 'Lun linsesalat med asparges og blødkogt æg',
      serves: 'To, femogtyve minutter',
      ingredients: [
        '150 g Puy-linser',
        '250 g asparges, de træede ender knækket af',
        '2 æg',
        '2 spsk olivenolie',
        '1 spsk sherryeddike',
        '1 skalotteløg, fint hakket',
        'En håndfuld persille',
      ],
      steps: [
        {
          title: 'Lad linserne simre, kog dem ikke',
          detail:
            'Tyve minutter ved knap synlig simren i usaltet vand. Kraftig kogning sprænger deres ' +
            'skal, og så ender man med suppe.',
        },
        {
          title: 'Damp aspargesen kort',
          detail:
            'Tre til fire minutter, stadig med bid. Folat er et af de mest varmeskrøbelige ' +
            'vitaminer, og asparges kogt til den er blød, har afgivet det meste.',
        },
        {
          title: 'Blødkog æggene',
          detail:
            'Seks et halvt minut fra kogepunktet, derefter i koldt vand og pil dem forsigtigt.',
        },
        {
          title: 'Vend dem lune',
          detail:
            'Skalotteløg, eddike og olie over de drænede linser, mens de stadig er varme; ' +
            'asparges og persille vendt i; æggene halveret ovenpå.',
        },
      ],
      note:
        'Linser, asparges og æggeblomme er alle tre stærke folatkilder. At holde tilberedningen ' +
        'kort er ikke pedanteri her — det er størstedelen af forskellen mellem tallet på ' +
        'varedeklarationen og tallet på tallerkenen.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Folat',
      dri: 'Dietary Reference Intakes for thiamin, riboflavin, niacin, B6-vitamin, folat og B12-vitamin',
      fdc: 'USDA FoodData Central',
    },
  },

  /* -------------------------------------------------------------- protein */
  protein: {
    name: 'Protein',
    title: 'Protein: anbefalingen er et gulv, ikke et mål',
    lede:
      'Det anbefalede indtag er den mængde, der forhindrer mangel hos næsten alle — hvilket er et ' +
      'andet spørgsmål end, hvad der er optimalt for en atlet, eller for en på over halvfjerds, ' +
      'der prøver ikke at miste muskelmasse.',
    description:
      'Hvad protein bruges til ud over muskler, hvor meget du har brug for efter alder og vægt, ' +
      'hvorfor anbefalingen er et minimum, og de fødevarer der indeholder mest — fra USDA-data.',

    whatItDoes: [
      'Protein er ikke først og fremmest brændstof. Det er materiale: enzymer, antistoffer, ' +
        'transportproteiner, kollagen, musklens sammentrækkende maskineri og ethvert hormon der ' +
        'ikke er et steroid. Kroppen har ikke et proteindepot, som den har et fedtdepot — alt ' +
        'hvad der er protein, er allerede i arbejde, så en mangel betyder at pille noget ned, der ' +
        'var i brug.',
      'Ni af de tyve aminosyrer kan ikke dannes og skal komme med maden. At et protein er ' +
        '«komplet» betyder, at det indeholder alle ni i brugbar andel; animalske proteiner gør ' +
        'det som regel, og de fleste enkelte planteproteiner er lave i en eller to.',
      'Det er et mindre problem, end man engang troede. At spise en variation af planteproteiner ' +
        'hen over en dag dækker mønsteret rigeligt — idéen om at de skulle kombineres i samme ' +
        'måltid, blev opgivet for årtier siden.',
    ],

    intake: {
      'infant-0-6': { who: 'Spædbørn, 0–6 måneder', note: 'Tilstrækkeligt indtag' },
      'infant-7-12': { who: 'Spædbørn, 7–12 måneder' },
      'child-1-3': { who: 'Børn, 1–3 år' },
      'child-4-8': { who: 'Børn, 4–8 år' },
      'child-9-13': { who: 'Børn, 9–13 år' },
      'men-19-plus': { who: 'Mænd, 19 og derover', note: 'Ved en referencekropsvægt' },
      'women-19-plus': { who: 'Kvinder, 19 og derover', note: 'Ved en referencekropsvægt' },
      'per-kilo': {
        who: 'Voksne, pr. kilogram',
        note: 'Det tal, de øvrige er afledt af',
      },
      pregnancy: { who: 'Graviditet og amning' },
    },
    intakeNote:
      'Tallet pr. kilogram er den egentlige anbefaling; gramtotalerne er den anvendt på en ' +
      'gennemsnitskrop. Og det er udtrykkeligt et minimum. Forskning i ældre og i folk der ' +
      'træner seriøst, peger på højere indtag — ofte 1,0–1,6 g/kg — som bedre til at holde på ' +
      'muskelmassen. Det er et andet spørgsmål end det, anbefalingen besvarer, og det er værd at ' +
      'holde de to adskilt.',

    foodsIntro:
      'Rangeret efter gram pr. 100 g. Læs det vel vidende, at koncentration ikke er hele ' +
      'historien: en fødevare kan være 25 % protein og stadig bidrage mindre på en dag end noget ' +
      'mindre tæt, som man spiser mere af.',

    helps: [
      'At fordele det over måltiderne frem for at læsse aftensmaden — muskelproteinsyntesen svarer pr. måltid',
      'Variation blandt plantekilder, som dækker aminosyremønsteret uden nogen planlægning',
      'Styrketræning, uden hvilken ekstra protein stort set bare er kalorier',
    ],
    hinders: [
      'Et meget lavt samlet energiindtag, hvor protein bliver brændt af som brændstof i stedet',
      'Høj alder, som dæmper muskelens respons på en given dosis',
      'Visse nyresygdomme, hvor indtaget kræver en lægefaglig vurdering frem for en artikel',
    ],
    absorptionNote:
      'Proteinkvalitet kan måles, og den nuværende standard er DIAAS, som scorer hvor fordøjelig ' +
      'hver essentiel aminosyre faktisk er. Mejeriprodukter og æg scorer højest; de fleste ' +
      'enkelte plantekilder lavere, primært fordi fibre og antinæringsstoffer bremser ' +
      'fordøjelsen. Det betyder mest ved lave samlede indtag og næsten intet ved rigelige.',

    shortfall: [
      'Ældre, hvis indtag ofte falder netop som deres behov stiger',
      'Folk der er ved at komme sig efter sygdom, operation eller skade',
      'Folk på meget restriktive slankekure',
      'Nogle veganere med lavt samlet energiindtag, selvom en varieret plantekost dækker det uden besvær',
    ],

    recipe: {
      title: 'Skål med græsk yoghurt, kerner og sprøde linser',
      serves: 'Én, ti minutter',
      ingredients: [
        '200 g græsk yoghurt, fed',
        '3 spsk kogte grønne linser',
        '1 spsk græskarkerner',
        '1 spsk hampefrø',
        '1 tsk olivenolie',
        'Citronskal',
        'Sort peber og flagesalt',
      ],
      steps: [
        {
          title: 'Brug siet yoghurt',
          detail:
            'Græsk eller skyr, ikke almindelig yoghurt. Sining fjerner valle og fordobler cirka ' +
            'proteinet pr. ske, hvilket er hele grunden til at det her virker.',
        },
        {
          title: 'Gør linserne sprøde',
          detail:
            'Kogte linser, duppet tørre, i en varm pande med olien i fire minutter, til nogle af ' +
            'dem popper og bliver sprøde. Våde linser bliver ikke sprøde.',
        },
        {
          title: 'Rist kernerne med dem',
          detail: 'I de sidste halvfems sekunder, så de bliver varme uden at brænde på.',
        },
        {
          title: 'Sæt den sammen som noget salt',
          detail:
            'Yoghurt i skålen, linser og kerner over, citronskal, salt og masser af peber. Det ' +
            'her er en salt morgenmad, og den er bedre for det.',
        },
      ],
      note:
        'Omkring tredive gram protein fra tre ingredienser, og det tager ti minutter — hvilket ' +
        'betyder mere end tallet, fordi et proteinmål bliver nået med det, man faktisk gider lave ' +
        'en tirsdag.',
    },

    sources: {
      dri: 'Dietary Reference Intakes for energi, kulhydrat, kostfibre, fedt, fedtsyrer, kolesterol, protein og aminosyrer',
      who: 'WHO/FAO/UNU — Protein and Amino Acid Requirements in Human Nutrition',
      fdc: 'USDA FoodData Central',
    },
  },
};

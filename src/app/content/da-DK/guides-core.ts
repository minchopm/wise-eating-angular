import { LocalisedGuide } from '../guide-types';

/**
 * De otte kerneguides, på dansk.
 *
 * Otte og ikke tyve: de engelske artikler har ligget online kort tid, og vi
 * ved endnu ikke, hvilke emner der bliver søgt på. Seks er her på grund af
 * søgeefterspørgsel; de sidste to af en anden grund, nemlig at de er de eneste,
 * der kan nå nogen i et dårligt øjeblik.
 */
export const GUIDES_CORE_DA: Readonly<Record<string, LocalisedGuide>> = {
  'protein-per-meal': {
    title: 'Du spiser sandsynligvis protein nok og spilder det meste af det',
    short: 'Protein pr. måltid',
    lede:
      'Dagens samlede tal er det, alle følger, og det der betyder mindst. Muskel bygges som svar ' +
      'på enkelte måltider, og en dag der rammer sit mål i én omgang er ikke den samme dag som ' +
      'en, der rammer det fordelt over tre.',
    description:
      'Hvorfor protein virker pr. måltid og ikke pr. dag, hvad leucintærsklen er, og hvorfor det ' +
      'anabole vindue viste sig at være langt bredere end det blev solgt som.',

    commonBelief:
      'Hvis gramtallet passer for dagen, ordner fordelingen sig selv — og der skal en shake ind ' +
      'inden for tredive minutter efter sidste sæt, ellers tæller træningen ikke.',

    sections: [
      {
        heading: 'Muskel har ikke en konto, den har en kontakt',
        body: [
          'Der findes intet proteindepot. Fedt har et, kulhydrat et lille, og protein intet — hvert ' +
            'gram af det i din krop er allerede en del, der arbejder. Kroppen kan derfor ikke ' +
            'lægge overskuddet fra aftensmaden til side og bruge det til morgenmad, sådan som den ' +
            'gør med energi.',
          'Det den gør i stedet, er at slå til. Et måltid ankommer, aminosyrer dukker op i blodet, ' +
            'og hvis de krydser en bestemt koncentration, kører maskineriet der bygger ' +
            'muskelprotein i nogle timer og slår så fra igen, uanset hvad der ellers er i blodet. ' +
            'Under den koncentration slår det slet ikke til.',
          'Det er derfor dagssummen vildleder. To mennesker med 120 g protein gør ikke det samme, ' +
            'hvis den ene krydser tærsklen tre gange og den anden én. Den anden spiste det samme ' +
            'og sendte det meste forbi en kontakt, der var slået fra.',
        ],
      },
      {
        heading: 'Det der slår kontakten til, er leucin, ikke protein',
        body: [
          'Udløseren er én enkelt aminosyre. Leucin er signalet, som måleapparatet læser; resten af ' +
            'aminosyrerne er murstenene, der derefter bruges. Et måltid med nok samlet protein men ' +
            'lidt leucin giver et svagt svar — hvilket er præcis, hvad der sker, når nogen fylder ' +
            'op med gelatine eller kollagenpulver og undrer sig over, at intet ændrer sig.',
          'Derfor gør animalske proteiner og soja dette mere effektivt end de fleste enkelte ' +
            'planteproteiner: de bærer mere leucin pr. gram. Det er ikke en påstand om, hvilke ' +
            'fødevarer der er bedre, og det betyder ikke, at en der spiser plantebaseret ikke kan ' +
            'nå derhen — det betyder, at vedkommende skal spise lidt mere af det, eller kombinere ' +
            'kilder, for at nå frem til samme signal.',
        ],
      },
      {
        heading: 'Vinduet er en sal',
        body: [
          'Tredive-minutters-reglen solgte enorme mængder pulver og overlevede ikke afprøvningen. ' +
            'Da forsøgene holdt dagens samlede indtag konstant — hvilket de tidlige ikke gjorde — ' +
            'forsvandt fordelen ved at spise umiddelbart efter stort set. Den øgede følsomhed over ' +
            'for protein varer timer, ikke minutter.',
          'Det er et af de steder, hvor evidensen faktisk stadig flytter sig, og tabellen siger det ' +
            'i stedet for at skjule det. Det der ikke er omstridt, er formen på det råd der følger: ' +
            'spis nok, fordel det, og drop stopuret.',
          'Den ene situation, hvor timing faktisk betyder noget, er når næste måltid ligger langt ' +
            'ude — at træne fastende klokken seks og ikke spise før klokken et efterlader en meget ' +
            'lang strækning med kontakten slået fra. Det er et fordelingsproblem i timing-kostume.',
        ],
      },
      {
        heading: 'Hvor det bliver alvorligt, er ved alderen',
        body: [
          'Ældre muskel reagerer dårligere på det samme signal. Tærsklen stiger, så en portion der ' +
            'ville have udløst et svar som tredveårig ikke gør det som halvfjerdsårig — og ' +
            'resultatet er det langsomme tab af muskel og det fald, der følger.',
          'Derfor er tallet for ældre i tabellen højere end den generelle anbefaling og meget ' +
            'højere end det anbefalede indtag. Sidstnævnte forhindrer en mangel. At forhindre en ' +
            'mangel og at holde på muskel er ikke det samme spørgsmål, og ét tal kan ikke besvare ' +
            'begge.',
        ],
      },
    ],

    claims: {
      rda: {
        what: 'Anbefalet indtag, alle voksne',
        note: 'Forhindrer mangel. Ikke et mål for den, der træner',
      },
      'daily-athlete': { what: 'Trænede voksne, dagligt' },
      'per-meal': { what: 'Pr. måltid, for at udløse et svar' },
      'leucine-threshold': { what: 'Leucin pr. måltid', note: 'Cirka 25–30 g af et godt protein' },
      'older-adults': { what: 'Fra omkring 65 år', note: 'Tærsklen stiger med alderen' },
      window: {
        what: 'Vinduet efter træning',
        note: 'Langt bredere end de tredive minutter, det blev solgt som',
      },
    },
    claimsNote:
      'Pr. kilogram kropsvægt. Intervallerne er intervaller, fordi de underliggende forsøg er ' +
      'uenige i kanterne, og ét enkelt tal ville være en pænere løgn.',

    practical: [
      {
        title: 'Tæl måltider, ikke gram',
        detail:
          'Tre eller fire måltider, der hver især krydser tærsklen, slår en dag der rammer samme ' +
            'sum med én stor aftensmad. Hvis du ændrer én ting, så ændr morgenmaden — det er det ' +
            'måltid, der oftest ligger under.',
      },
      {
        title: 'Sæt et tal på det mindste måltid',
        detail:
          'De fleste ved, hvordan deres aftensmad ser ud, og aner ikke hvad frokosten indeholder. ' +
            'Slå den op, du er mest usikker på; der ligger hullet som regel.',
      },
      {
        title: 'Hold op med at tage tid og begynd at sprede',
        detail:
          'Tre til fem timer mellem proteinmåltider, ikke et stopur efter sidste sæt. Undtagelsen ' +
            'er et langt hul omkring træningen — så spis tættere på, af fordelingshensyn og ikke ' +
            'magiske hensyn.',
      },
      {
        title: 'Er du over femogtres, så sigt højere med vilje',
        detail:
          'Den samme portion yder mindre. Det er den ene gruppe, hvor forskellen mellem det ' +
            'anbefalede indtag og træningstallet ikke er akademisk.',
      },
    ],

    seeAlso: ['protein', 'vitamin-d', 'calcium'],

    sources: {
      'issn-protein': 'International Society of Sports Nutrition — position om protein og træning',
      'issn-timing': 'International Society of Sports Nutrition — position om timing af næringsstoffer',
      'prot-age': 'PROT-AGE-studiegruppen — proteinindtag hos ældre',
      'dri-macro': 'Dietary Reference Intakes for energi, kulhydrat, kostfibre, fedt, protein og aminosyrer',
    },
  },

  'iron-and-endurance': {
    title: 'At gå død er ikke altid overtræning',
    short: 'Jern og udholdenhed',
    lede:
      'En atlet, hvis træningspas stille og roligt er blevet hårdere, får som regel at vide, at ' +
      'hun skal hvile mere. Nogle gange er det rigtigt. Nogle gange har ferritinen været på vej ' +
      'ned i fire måneder, og ingen hvile i verden rører ved det.',
    description:
      'Hvorfor udholdenhedsatleter taber jern hurtigere end de erstatter det, hvad ferritin ' +
      'faktisk fortæller, og hvorfor det er forkert at supplere uden en blodprøve.',

    commonBelief:
      'Hvis mit blodbillede var normalt, er jern ikke mit problem — og hvis jeg er træt, kan et ' +
      'tilskud kun hjælpe.',

    sections: [
      {
        heading: 'Tre måder træning tager jern ud på',
        body: [
          'Den første er mekanisk. Hvert fodnedslag ødelægger et lille antal røde blodlegemer i ' +
            'kapillærerne i fodsålen — hæmolyse ved nedslag — og jernet i dem bliver ikke helt ' +
            'genvundet. Alene er det ubetydeligt. Ganget med hundrede kilometer om ugen, gennem ' +
            'år, holder det op med at være ubetydeligt.',
          'Den anden er sved, som bærer jern med i små mængder, der lægger sig sammen over lange ' +
            'pas i varme.',
          'Den tredje bliver overset, fordi den går imod intuitionen. Hård træning hæver hepcidin, ' +
            'hormonet der lukker for jernoptagelsen, og det bliver ved med at være forhøjet i ' +
            'timevis. Måltidet efter et hårdt pas — det som en atlet passer mest på — optages ' +
            'altså dårligere end det samme måltid på en hviledag. Kroppen taber jern til træningen ' +
            'og nægter derefter kortvarigt at tage mere ind.',
        ],
      },
      {
        heading: 'Hvorfor et normalt blodbillede intet beviser',
        body: [
          'Hæmoglobin er det sidste, der falder. Kroppen har et depot — ferritin — og den vil tømme ' +
            'det helt, før den lader blodtallet falde, fordi det er mere presserende at ' +
            'transportere ilt end at bevare en reserve.',
          'Der findes derfor en lang strækning, ofte mange måneder, hvor reserven er væk, atleten ' +
            'får det gradvis værre, og hver standardprøve kommer normal tilbage. Det hedder ' +
            'jernmangel uden anæmi, og det er den tilstand, de fleste ramte faktisk er i. Anæmien ' +
            'er slutningen på processen, ikke begyndelsen.',
          'Prøven, der ser det, er ferritin, og man skal bede om den. Den står ikke på et ' +
            'rutinepanel. Hvis du tager én ting med fra denne side, så tag navnet på den prøve.',
        ],
      },
      {
        heading: 'Hvad tallet betyder, og dets store fælde',
        body: [
          'Den grænse, idrætsmedicinen bruger, er højere end den, der bruges til at diagnosticere ' +
            'anæmi i befolkningen, fordi spørgsmålet er et andet — ikke «er dette menneske sygt», ' +
            'men «har dette menneske reserve nok til at træne hårdt».',
          'Fælden er, at ferritin også stiger ved betændelse, og hård træning er betændelsesagtig. ' +
            'En ferritin taget morgenen efter et hårdt pas kan se beroligende høj ud, mens det ' +
            'faktiske depot er lavt. Blod taget på en hviledag, helst sammen med en ' +
            'betændelsesmarkør, er besværet med at få arrangeret værd.',
        ],
      },
      {
        heading: 'Hvorfor man ikke bare tager noget',
        body: [
          'Fordi kroppen ikke har nogen måde at komme af med et overskud på. Den regulerer jern ved ' +
            'at optage mere eller mindre, og det der kommer ind, bliver. Vedvarende tilskud til en, ' +
            'der ikke manglede, ophobes — og i en person med et hæmokromatose-gen, hvilket er ' +
            'almindeligt nok til, at man ikke ville vide det, ophobes det hurtigt.',
          'Jern konkurrerer desuden med zink og kobber om de samme optagelsesveje, så måneders ' +
            'unødvendigt jern kan skabe en anden mangel, mens du behandler en, du ikke havde.',
          'Hvor en reel mangel er bekræftet, er behandlingen enkel og ofte dramatisk. Det er et ' +
            'argument for at måle, ikke imod at handle.',
        ],
      },
      {
        heading: 'Madsiden handler mest om, hvad man spiser det sammen med',
        body: [
          'Optagelsen fra en plantekilde svinger med en faktor fem eller mere alt efter, hvad der ' +
            'ellers er på tallerkenen. C-vitamin i samme måltid mangedobler den. Te eller kaffe til ' +
            'maden halverer den nogenlunde, og den der spiser havregrød med en stor kaffe ophæver ' +
            'havregrøden.',
          'Den praktiske udgave af det er uglamourøs: flyt kaffen en time væk fra det jernholdige ' +
            'måltid, og læg noget syrligt på tallerkenen. Det er et større indgreb end de fleste ' +
            'tilskud, og det er gratis.',
        ],
      },
    ],

    claims: {
      'athlete-multiplier': {
        what: 'Udholdenhedsatleter, i forhold til det anbefalede indtag',
        note: 'Endnu højere ved plantebaseret kost',
      },
      'ferritin-floor': {
        what: 'Ferritin, hvorunder idrætsmedicinen handler',
        note: 'Højere end grænsen for at diagnosticere anæmi',
      },
      'female-endurance-prevalence': {
        what: 'Berørte kvindelige udholdenhedsatleter',
        note: 'Jernmangel uden anæmi, ikke anæmi',
      },
      'vitamin-c-effect': { what: 'C-vitaminets virkning på ikke-hæmjern' },
      'tea-effect': { what: 'Te eller kaffe til måltidets virkning' },
    },
    claimsNote:
      'Forekomsttallet er et interval, fordi studier bruger forskellige ferritingrænser. Den ' +
      'uenighed er reel og er grunden til, at der står et bånd her.',

    practical: [
      {
        title: 'Bed om ferritin ved navn',
        detail:
          'Den står ikke på en rutineblodprøve, og et normalt blodbillede udelukker ikke et ' +
            'problem. Det er den mest nyttige sætning på denne side.',
      },
      {
        title: 'Få taget blod på en hviledag',
        detail:
          'Ferritin stiger ved betændelse, og træning er betændelsesagtig, så efter et hårdt pas ' +
            'ser værdien falsk beroligende ud.',
      },
      {
        title: 'Flyt kaffen, ikke havregrøden',
        detail:
          'En time før eller efter det jernholdige måltid. Tanniner kan halvere optagelsen, hvilket ' +
            'er mere end næsten alt det, folk køber.',
      },
      {
        title: 'Suppler ikke på fornemmelse',
        detail:
          'Kroppen kan ikke udskille et overskud, og jern konkurrerer med zink og kobber på vejen ' +
            'ind. Først bekræfte, så behandle.',
      },
    ],

    seeAlso: ['iron', 'vitamin-c', 'zinc', 'copper'],

    sources: {
      'ods-iron': 'NIH Office of Dietary Supplements — Jern',
      'iom-iron': 'Dietary Reference Intakes for jern — Institute of Medicine',
      'iron-athletes': 'Jern hos atleten — en oversigtsartikel',
    },
  },

  'creatine-what-holds-up': {
    title: 'Kreatin er det, der overlevede',
    short: 'Kreatin',
    lede:
      'Næsten alt på tilskudshylden er enten uafprøvet eller afprøvet og fundet utilstrækkeligt. ' +
      'Ét billigt og uglamourøst stof er blevet undersøgt i tredive år og bliver ved med at ' +
      'virke, og det er værd at sige tydeligt på et sted, der bruger det meste af tiden på at ' +
      'fraråde.',
    description:
      'Hvad kreatin faktisk gør, hvilke doser der har evidens bag sig, hvad vandvægten er, og ' +
      'hvorfor nyreadvarslen aldrig havde hold i sig.',

    commonBelief:
      'Kreatin er bodybuilding-noget, det er hårdt ved nyrerne, og man skal lade op og holde ' +
      'pauser.',

    sections: [
      {
        heading: 'Hvad det er, mindre eksotisk end emballagen',
        body: [
          'Kreatin er et stof, din lever allerede laver, og dine muskler allerede lagrer, og du ' +
            'spiser omkring et gram om dagen af det i kød og fisk. Tilskud hæver muskeldepoterne ' +
            'med tyve til fyrre procent over det, mad alene giver.',
          'Det, depoterne gør, er at gendanne ATP under meget korte, meget hårde anstrengelser. De ' +
            'første sekunder af en spurt eller et tungt sæt kører på et fosfatsystem, der tømmes ' +
            'hurtigt og fyldes op fra kreatin. Mere lagret kreatin betyder hurtigere genopfyldning, ' +
            'som betyder én gentagelse mere, som — gentaget over måneder — betyder mere arbejde ' +
            'udført og mere tilpasning.',
          'Det er hele mekanismen. Det bygger ikke muskel direkte; det lader dig træne en anelse ' +
            'hårdere, og træningen bygger musklen.',
        ],
      },
      {
        heading: 'Hvor nyreadvarslen kom fra',
        body: [
          'Kreatin hæver kreatinin i blodet, som er den markør laboratorier bruger til at vurdere ' +
            'nyrefunktion. En rutineprøve hos en, der tager kreatin, kan derfor ligne nedsat ' +
            'nyrefunktion, mens nyrerne har det helt fint — markøren flyttede sig, ikke organet.',
          'Det artefakt blev til en sundhedsadvarsel og har været i omløb i femogtyve år. ' +
            'Kontrollerede studier, også flerårige, har ikke fundet nyreskade hos raske voksne. ' +
            'Fagselskaberne er usædvanligt direkte på dette punkt.',
          'Det reelle forbehold: har du en nyresygdom i forvejen, er dette en samtale med en læge ' +
            'og ikke en beslutning taget ud fra en artikel. Og skal du have taget blodprøver, så ' +
            'sig at du tager det, så ingen jagter et tal med en kedelig forklaring.',
        ],
      },
      {
        heading: 'Opladning, pauser og andre ting man ikke behøver',
        body: [
          'Opladning virker og er ikke nødvendig. En høj dosis i fem til syv dage fylder depoterne ' +
            'hurtigt; en vedligeholdelsesdosis fylder dem lige så helt på tre til fire uger. Den ' +
            'eneste grund til at lade op er utålmodighed, og prisen er, at det er den fase, hvor ' +
            'maveproblemer opstår.',
          'At holde pauser har slet ingen evidens bag sig. Depoterne falder simpelthen tilbage til ' +
            'udgangspunktet over cirka en måned, hvilket ikke er en fordel.',
          'Formen er også afklaret: kreatinmonohydrat. De dyrere varianter har ikke slået det i ' +
            'direkte sammenligninger, og monohydrat er det, al forskningen er lavet på.',
        ],
      },
      {
        heading: 'Vægtøgningen, som er reel og ikke er fedt',
        body: [
          'Kreatin trækker vand ind i muskelcellerne. Vægten stiger et til to kilo de første uger, ' +
            'og det er vand inde i cellerne, ikke fedt og ikke oppustethed i sædvanlig forstand.',
          'For de fleste er det uden betydning eller mildt positivt. For enhver i en vægtklassesport ' +
            'eller en udholdenhedsdisciplin, hvor hvert kilo skal bæres op ad en bakke, er det en ' +
            'reel afvejning at tænke over og ikke at feje væk.',
        ],
      },
      {
        heading: 'Hvad vi ikke påstår',
        body: [
          'Der findes en voksende litteratur om kreatin og kognition, især under søvnmangel, og ' +
            'noget af den ser interessant ud. Den er meget yngre og meget mindre end ' +
            'muskellitteraturen, og den er ikke grunden til at tage det.',
          'Denne side er sikker på resultaterne for styrke og fedtfri masse, fordi tredive års ' +
            'forsøg er enige. Den er bevidst ikke sikker på resten, og tabellen siger hvad der er ' +
            'hvad.',
        ],
      },
    ],

    claims: {
      maintenance: { what: 'Vedligeholdelsesdosis', note: 'Monohydrat; ingen grund til pauser' },
      loading: { what: 'Valgfri opladningsfase', note: 'Hurtigere, ikke bedre' },
      'strength-effect': { what: 'Styrkefremgang ud over træning alene' },
      'water-weight': { what: 'Tidlig vægtøgning', note: 'Vand inde i cellerne, ikke fedt' },
      'kidney-evidence': { what: 'Nyreskade hos raske voksne' },
    },

    practical: [
      {
        title: 'Køb monohydrat og intet andet',
        detail:
          'Det er den billigste form og den, hvert forsøg brugte. De dyre varianter har ikke slået ' +
            'den i direkte sammenligning.',
      },
      {
        title: 'Spring opladningsfasen over',
        detail:
          'En vedligeholdelsesdosis når de samme depoter på tre til fire uger og undgår de ' +
            'maveproblemer, opladning nogle gange giver.',
      },
      {
        title: 'Tag det dagligt, også på hviledage',
        detail:
          'Det virker ved at holde depoterne fulde, ikke akut, så timing omkring træningen betyder ' +
            'ikke meget, mens regelmæssighed gør.',
      },
      {
        title: 'Nævn det før en blodprøve',
        detail:
          'Det hæver kreatinin, som er det tal der bruges til at vurdere nyrefunktion. Sig det, så ' +
            'undersøger ingen et artefakt.',
      },
    ],

    seeAlso: ['protein', 'magnesium'],

    sources: {
      'issn-creatine': 'International Society of Sports Nutrition — position om kreatin',
      'creatine-brain': 'Kreatin og kognitiv præstation — nyere oversigtsartikel',
    },
  },

  'cramp-and-electrolytes': {
    title: 'Krampen skyldes formentlig ikke dine elektrolytter',
    short: 'Kramper og elektrolytter',
    lede:
      'Salt-og-magnesium-forklaringen er det mest udbredte i amatøridrætten, og evidensen bag den ' +
      'er langt tyndere end den overbevisning, den gentages med.',
    description:
      'Hvad evidensen siger om træningsudløst muskelkrampe, hvorfor magnesiumtilskud ikke ' +
      'forebygger den, og hvad der faktisk ser ud til at gøre det.',

    commonBelief:
      'En krampe betyder, at jeg er dehydreret eller mangler salt og magnesium. En ' +
      'magnesiumtablet inden sengetid, og det holder op.',

    sections: [
      {
        heading: 'Teorien alle kender, og problemet med den',
        body: [
          'Dehydrerings- og elektrolytforklaringen siger, at sved tømmer væske og natrium, at ' +
            'væsken omkring musklen ændrer sig, og at musklen bliver overfølsom. Det er plausibelt, ' +
            'det passer med at kramper opstår i varme løb, og det har været standardforklaringen i ' +
            'årtier.',
          'Problemet er, at den ikke har holdt særlig godt, når den er blevet efterprøvet. Studier, ' +
            'der sammenligner dem der får kramper med dem der ikke gør i samme løb, har generelt ' +
            'ikke fundet den forskel i væskestatus eller blodnatrium, som teorien har brug for. ' +
            'Kramper opstår også i køligt vejr, hos svømmere, og i muskler der ikke var dem, der ' +
            'arbejdede hårdest.',
          'Og der er et enklere problem: krampen rammer som regel én muskelgruppe, mens resten af ' +
            'kroppen, der drak den samme væske og tabte det samme salt, er upåvirket. En mangel i ' +
            'hele kroppen forklarer dårligt en lokal begivenhed.',
        ],
      },
      {
        heading: 'Den forklaring der passer bedre',
        body: [
          'Den førende forklaring i dag er neuromuskulær frem for kemisk. Når en muskel bliver ' +
            'træt, kommer de reflekser der styrer den ud af balance — signalet der beder den ' +
            'trække sig sammen forbliver forhøjet, mens det der beder den slippe bliver svagere — ' +
            'og musklen låser.',
          'Den forklaring forudsiger det, elektrolytforklaringen har svært ved: at krampen kommer i ' +
            'slutningen af hårde anstrengelser og ikke i begyndelsen, i netop de muskler der ' +
            'arbejder, i forkortet stilling, og at den lindres af udstrækning. Udstrækning gør ' +
            'intet ved dit blodnatrium og alt ved refleksløkken, og udstrækning er det, der ' +
            'faktisk stopper en krampe i øjeblikket.',
          'Den passer også med den bedste enkeltprædiktor, der er fundet indtil nu, og den er slet ' +
            'ikke en blodværdi: at have haft kramper før, og at være startet hurtigere end ' +
            'sædvanligt.',
        ],
      },
      {
        heading: 'Hvor magnesium kommer ind, og hvorfor mest ikke',
        body: [
          'Magnesium er faktisk involveret i muskelafslapning, og det er derfor historien er så ' +
            'tiltalende. Men forsøgene understøtter ikke tilskud til at forebygge kramper — hos ' +
            'folk uden mangel har oversigtsartikler gentagne gange konkluderet, at der ikke er ' +
            'nogen betydelig effekt, og effekten på natlige lægkramper hos ældre er i bedste fald ' +
            'lille.',
          'Det er en snævrere påstand end «magnesium er nytteløst». Er dit indtag reelt lavt, er ' +
            'det værd at rette op på af grunde, der intet har med kramper at gøre, og omkring ' +
            'halvdelen af voksne ligger under referenceværdien. At rette op på en reel mangel og ' +
            'at behandle et symptom er to forskellige projekter.',
        ],
      },
      {
        heading: 'Hvad natrium faktisk er til for',
        body: [
          'Natriumerstatning betyder noget, men for et andet problem. Over lange distancer kan det ' +
            'at drikke store mængder rent vand, mens man sveder salt ud, fortynde blodets natrium ' +
            '— hyponatriæmi — som er farlig på en måde, en krampe ikke er.',
          'Spændet for svednatrium i tabellen er enormt, og det er det ærlige fund: mennesker ' +
            'adskiller sig med en faktor ti i, hvor salt deres sved er. Hvilket gør generelle råd ' +
            'om, hvor meget salt man skal tage under træning, tæt på meningsløse — og salttabletten ' +
            'der forvandlede den ene løber gør ingenting for den næste.',
        ],
      },
    ],

    claims: {
      'sweat-sodium': {
        what: 'Natrium i sved, mellem personer',
        note: 'En faktor ti, hvorfor generelle råd slår fejl',
      },
      'sweat-rate': { what: 'Svedrate under træning' },
      'magnesium-evidence': {
        what: 'Magnesiumtilskud til forebyggelse af kramper',
        note: 'Hos folk uden mangel',
      },
      'weight-loss-limit': {
        what: 'Væsketab hvorover præstationen falder',
        note: 'En rettesnor, ikke en klippe',
      },
    },

    practical: [
      {
        title: 'Stræk den ud, drik den ikke væk',
        detail:
          'Passiv udstrækning af den krampende muskel er det ene indgreb, der pålideligt afslutter ' +
            'et anfald, og det virker gennem refleksen og ikke gennem blodbanen.',
      },
      {
        title: 'Kig på tempoet før tilskuddene',
        detail:
          'Den stærkeste prædiktor fundet indtil nu er at starte hurtigere, end træningen bærer. ' +
            'Det er hårdere at høre end «tag magnesium» og mere brugbart.',
      },
      {
        title: 'Ret en reel magnesiummangel for dens egen skyld',
        detail:
          'Omkring halvdelen af voksne ligger under referenceværdien, og det er værd at rette op ' +
            'på. Forvent bare ikke en kur mod kramper.',
      },
      {
        title: 'Skal du langt, så lær din egen sved at kende',
        detail:
          'Med en faktor ti mellem mennesker er det eneste brugbare tal dit eget. Vej dig før og ' +
            'efter et langt pas i varmen.',
      },
    ],

    seeAlso: ['magnesium', 'potassium', 'calcium'],

    sources: {
      'acsm-fluid': 'American College of Sports Medicine — position om træning og væskeerstatning',
      'cochrane-cramp': 'Magnesium mod muskelkramper — systematisk oversigt',
      'cramp-neuro': 'Ændret neuromuskulær kontrol og træningsudløst muskelkrampe',
    },
  },

  'vitamin-d-and-performance': {
    title: 'D-vitamin retter en mangel; det giver ikke en fordel',
    short: 'D-vitamin og præstation',
    lede:
      'Omkring halvdelen af testede atleter ligger for lavt, og at rette op på det er det værd. ' +
      'Det der ikke følger, er det der står på etiketten: at mere, hos en der allerede har nok, ' +
      'gør noget som helst.',
    description:
      'Hvorfor atleter så ofte er lave i D-vitamin, hvad det gør og ikke gør for præstationen at ' +
      'rette op på det, og hvor den reelle risiko ved at overdrive ligger.',

    commonBelief:
      'D-vitamin øger styrke og immunforsvar, så mere er bedre, og en stor ugentlig dosis er en ' +
      'fornuftig forsikring.',

    sections: [
      {
        heading: 'Hvorfor atleter så ofte ligger lavt',
        body: [
          'Fordi det meste sport foregår indendørs, eller tidligt, eller tildækket. D-vitamin ' +
            'dannes i huden ud fra UVB-lys, og UVB går ikke gennem glas, solcreme eller tøj. Den ' +
            'der træner i en svømmehal, et fitnesscenter eller en hal om vinteren har omtrent ' +
            'samme eksponering som en kontoransat.',
          'Breddegraden gør resten. Over cirka syvogtredive grader står vintersolen for lavt til at ' +
            'danne mængder, der betyder noget, i flere måneder. Mørkere hud kræver længere ' +
            'eksponering for samme dannelse, så den samme kalender giver mindre.',
          'Mad deltager knap nok. Uden for fed fisk, æggeblomme og det der er beriget med vilje, er ' +
            'dette ikke et næringsstof, kosten leverer — derfor opfører det sig anderledes end alt ' +
            'andet på dette site.',
        ],
      },
      {
        heading: 'Hvad det gør at rette op på det',
        body: [
          'Hos folk med mangel forbedrer det at genoprette D-vitamin muskelfunktionen og sænker ' +
            'antallet af træthedsbrud. Den effekt er reel og værd at have.',
          'Hos folk der allerede havde nok, har mere ikke givet nogen præstationsgevinst i ' +
            'kontrollerede forsøg. Det er formen på de fleste mikronæringsstofhistorier og er værd ' +
            'at få under huden: kurven er et plateau, ikke en stigning. At fjerne en begrænsning ' +
            'hjælper; at lægge overskud oveni et system, der ikke var begrænset, gør ikke.',
        ],
      },
      {
        heading: 'Knogledelen, som betyder mere end præstationsdelen',
        body: [
          'D-vitamin styrer, hvor meget calcium du optager. En atlet med lavt D-vitamin kan spise ' +
            'rigeligt med calcium og alligevel ikke få det ind i knoglen — og knogle under gentagen ' +
            'belastning er netop det væv, der ikke har råd til det.',
          'Derfor er samtalen om D-vitamin og samtalen om træthedsbrud den samme samtale, og derfor ' +
            'hører den hjemme ved siden af energitilgængelighed og ikke ved siden af tilskuddene.',
        ],
      },
      {
        heading: 'Det ene mikronæringsstof, hvor det er reelt risikabelt at gætte',
        body: [
          'D-vitamin er fedtopløseligt og lagres frem for at blive skyllet ud, hvilket gør det til ' +
            'et af de få, hvor uovervejet tilskud kan gøre reel skade. Vedvarende høje doser hæver ' +
            'calcium i blodet, og det skader nyrer og blodkar.',
          'Meget store enkeltdoser — den månedlige megadosis der lyder effektiv — har også klaret ' +
            'sig dårligt i forsøg, hvor nogle viste flere fald og brud i stedet for færre. Dagligt ' +
            'og moderat slår månedligt og heroisk.',
          'Som med jern er det fornuftige skridt en blodprøve. Den er billig, den er den eneste ' +
            'måde at vide, hvilken side af plateauet du er på, og den gør et gæt til en ' +
            'beslutning.',
        ],
      },
    ],

    claims: {
      'athlete-insufficiency': {
        what: 'Atleter fundet utilstrækkelige',
        note: 'Samlet på tværs af studier; højere på nordlige breddegrader',
      },
      sufficiency: { what: 'Blodniveau der regnes som tilstrækkeligt' },
      'performance-effect': {
        what: 'Præstationsgevinst',
        note: 'Ved at rette en mangel, ikke ved at lægge overskud oveni',
      },
      'upper-limit': { what: 'Øvre grænse for voksne' },
    },

    practical: [
      {
        title: 'Mål frem for at antage, i begge retninger',
        detail:
          'Halvdelen af atleterne ligger lavt og halvdelen gør ikke, og der er intet symptom, der ' +
            'skiller dem. En blodprøve gør et gæt til en beslutning.',
      },
      {
        title: 'Dagligt og moderat, ikke månedligt og heroisk',
        detail:
          'Store enkeltdoser har klaret sig dårligere i forsøg end jævne — også på netop de mål, ' +
            'de skulle forbedre.',
      },
      {
        title: 'Behandl det først som et knoglespørgsmål',
        detail:
          'Effekten på calciumoptagelsen er den, der betyder mest under gentagen belastning. Den ' +
            'hører til i samme samtale som træthedsbrud.',
      },
    ],

    seeAlso: ['vitamin-d', 'calcium', 'magnesium'],

    sources: {
      'ods-vitd': 'NIH Office of Dietary Supplements — D-vitamin',
      'vitd-athletes': 'D-vitaminstatus hos atleter — systematisk oversigt og metaanalyse',
    },
  },

  'hidden-hunger': {
    title: 'Skjult sult: at spise for meget og alligevel mangle',
    short: 'Skjult sult',
    lede:
      'Ordet fejlernæring fremkalder et billede af knaphed. Dens almindeligste form i rige lande ' +
      'ligner det modsatte — masser af mad, masser af energi, og en næringsstofprofil med huller ' +
      'i.',
    description:
      'Hvorfor man kan spise rigeligt med kalorier og stadig mangle jern, magnesium eller calcium ' +
      '— hvad skjult sult er, hvem den rammer, og hvordan man finder den.',

    commonBelief:
      'Mangel findes der, hvor der ikke er mad nok. Når jeg spiser rigeligt — for meget, om noget ' +
      '— er det ikke mit problem.',

    sections: [
      {
        heading: 'To forskellige slags sult',
        body: [
          'Energi og næringsstoffer ankommer i samme mundfuld og bogføres hver for sig af kroppen. ' +
            'Man kan opfylde det ene og forfejle det andet, og de to svigt føles slet ikke ens: ' +
            'mangel på energi melder sig som sult, og mangel på magnesium melder sig praktisk talt ' +
            'ikke i årevis.',
          'Den tavshed er hele vanskeligheden. Der findes ingen receptor for jernstatus. Intet ' +
            'skaber trang til zink. Kroppen vil lade et mineral løbe ned meget længe og holde ' +
            'blodværdien normal ved at hente det et andet sted — som regel knoglen — og det første ' +
            'symptom er ofte følgen frem for manglen.',
        ],
      },
      {
        heading: 'Hvordan en fuld tallerken ender tom',
        body: [
          'Mekanismen er fortynding, ikke fravær. En kraftigt forarbejdet fødevare beholder som ' +
            'regel sin energi og mister en del af det, der fulgte med: formalingen tager kim og ' +
            'klid, og omkring fire femtedele af magnesiummet går med. Raffinering gør det samme ' +
            'ved olier. Intet af dette er en sammensværgelse — det er det, der gør mad holdbar og ' +
            'billig — men resultatet er en kost, der er energitæt og næringsstoftynd.',
          'Så arbejder regnestykket imod dig. Behovene er stort set faste, mens appetitten stilles ' +
            'af energi, så jo mere af din energi der kommer fra fødevarer, der bærer lidt andet ' +
            'end energi, jo mindre plads er der tilbage til dem, der bærer alt det øvrige.',
          'Derfor viser mønstret sig som overvægt og mangel på én gang, hvilket lyder som en ' +
            'modsigelse og ikke er det. Det er to forskellige konti, og kun den ene er i overskud.',
        ],
      },
      {
        heading: 'Hvem det faktisk rammer',
        body: [
          'Data fra nationale undersøgelser besvarer dette usædvanligt godt, fordi de måler, hvad ' +
            'folk spiste, og ikke hvad de siger de spiser. I USA dukker en kort liste af ' +
            'næringsstoffer gentagne gange op under referenceværdien på tværs af hele ' +
            'befolkningen, ikke i et hjørne af den.',
          'Calcium og magnesium skiller sig ud, og grunden er den samme: begge kom i høj grad fra ' +
            'fødevaregrupper, folk stille og roligt har spist mindre af — mejeriprodukter for det ' +
            'ene, fuldkorn og bælgfrugter for det andet. D-vitamin hører også til på listen, men af ' +
            'en anden grund, da mad aldrig var hovedkilden.',
          'Intet af det betyder, at enhver læser har en mangel. Under referenceværdien er ikke det ' +
            'samme som mangelfuld — referencen er sat, så den dækker næsten alle, så at ligge under ' +
            'den betyder «muligvis for lidt», ikke «med sikkerhed syg». Det det betyder, er at ' +
            'antagelsen om at have det fint, fordi der er mad i huset, ikke holder.',
        ],
      },
      {
        heading: 'Hvad man gør, når intet af det kan ses',
        body: [
          'Det ærlige første skridt er at holde op med at gætte. Vag træthed er forenelig med et ' +
            'dusin mangler, med dårlig søvn, med et lavt stofskifte og med ingenting overhovedet — ' +
            'og at gribe et tilskud fra hylden, der passer til en fornemmelse, er sådan folk ender ' +
            'med at tage zink i et år og skabe sig et kobberproblem.',
          'Det brugbare er at finde ud af, hvad du faktisk spiser, i den kedelige forstand — i en ' +
            'uge, ikke for evigt. De fleste huller i en virkelig kost viser sig at være ' +
            'strukturelle: en hel fødevaregruppe der stille forsvandt, ét måltid om dagen der ikke ' +
            'bidrager, en udskiftning foretaget af en god grund, som tog noget med sig.',
          'Og hvor en mangel ser reel ud, er svaret en blodprøve og en læge, ikke en artikel. Det ' +
            'er ikke en formalitet. Især jern er reelt farligt at supplere i blinde, fordi kroppen ' +
            'ikke har nogen måde at udskille et overskud på.',
        ],
      },
    ],

    claims: {
      'global-affected': {
        what: 'Berørte mennesker på verdensplan',
        note: 'WHO’s tal for mikronæringsstofmangel',
      },
      'us-shortfall-nutrients': {
        what: 'Næringsstoffer indtaget for lidt af i den amerikanske befolkning',
        note: 'Sådan navngivet af udvalget bag kostrådene',
      },
      'calcium-shortfall': { what: 'Amerikanske voksne under calciumreferencen' },
      'magnesium-shortfall': { what: 'Amerikanske voksne under magnesiumreferencen' },
    },
    claimsNote:
      'Under referenceværdien er ikke det samme som mangelfuld. Referencen er sat højt nok til at ' +
      'dække næsten alle, så at ligge under den betyder «muligvis for lidt» og ikke «med sikkerhed ' +
      'syg».',

    practical: [
      {
        title: 'Se på en uge, ikke en dag',
        detail:
          'En dag fortæller dig om en dag. En uge viser strukturen: måltidet der ikke bidrager, ' +
            'gruppen der forsvandt uden at blive erstattet.',
      },
      {
        title: 'Find den udskiftning, der kostede dig noget',
        detail:
          'De fleste huller kan spores til én enkelt udskiftning foretaget af en god grund — ' +
            'mejeri ud på grund af laktose, brød ud på grund af kulhydrater, kød ud af etiske ' +
            'grunde — hvor intet kom ind og bar det, der forsvandt.',
      },
      {
        title: 'Behandl ikke en fornemmelse med et tilskud',
        detail:
          'Træthed passer til for mange årsager. Ser en mangel reel ud, koster en blodprøve mindre ' +
            'end et år med den forkerte pille — og ved jern er den forskellen på at hjælpe og at ' +
            'skade.',
      },
    ],

    seeAlso: ['magnesium', 'calcium', 'iron', 'vitamin-d'],

    sources: {
      'who-micronutrient': 'Verdenssundhedsorganisationen — mikronæringsstoffer',
      dgac: 'Dietary Guidelines for Americans — videnskabelig rapport',
      nhanes: 'Den amerikanske sundheds- og ernæringsundersøgelse (NHANES)',
    },
  },

  'restriction-and-the-binge-cycle': {
    title: 'Overspisningen er ikke svigtet. Den er anden halvdel af restriktionen.',
    short: 'Restriktion og overspisning',
    lede:
      'Folk beskriver det som at miste kontrollen, og forløbet begynder næsten aldrig der. Det ' +
      'begynder dage tidligere, med en regel — og kontroltabet er, hvad en krop gør ved enden af ' +
      'en regel, pålideligt nok til at være blevet påvist i et laboratorium for firs år siden.',
    description:
      'Hvorfor kraftig restriktion producerer overspisning som en fysiologisk reaktion og ikke ' +
      'som viljesvigt — hvad Minnesota-forsøget viste, og hvornår dette holder op med at være et ' +
      'mønster og bliver en lidelse.',

    commonBelief:
      'Jeg klarede det fint i fire dage og smed så det hele. Med mere disciplin havde femtedagen ' +
      'været som de andre.',

    sections: [
      {
        heading: 'Hvad seksogtredive mænd i Minnesota påviste',
        body: [
          'I 1944 indvilligede en gruppe raske frivillige — udvalgt for deres stabilitet, delvis ' +
            'netop derfor — i at spise omkring halvdelen af deres behov i seks måneder, så ' +
            'forskere kunne lære at genernære et sultende Europa. Det studiet huskes for, er ikke ' +
            'genernæringsprotokollen.',
          'Mændene blev besat af mad. De læste kogebøger for fornøjelsens skyld. De samlede på ' +
            'opskrifter, hamstrede bestik, trak måltider ud i timevis, talte om at spise og om ' +
            'lidt andet. De blev irritable, indelukkede og ude af stand til at koncentrere sig. ' +
            'Flere udviklede episoder med ukontrolleret spisning, som forfærdede dem, og en del af ' +
            'den adfærd fortsatte i måneder efter, at normal mad var genindført.',
          'Det var ikke mennesker med et vanskeligt forhold til mad. De havde intet nævneværdigt ' +
            'forhold til mad, før restriktionen skabte et. Det er fundet: adfærden blev fremstillet ' +
            'af afsavnet, i almindelige mænd, med vilje.',
        ],
      },
      {
        heading: 'Hvorfor kroppen behandler en slankekur som en nødsituation',
        body: [
          'Den har ingen måde at skelne mellem en knaphed, du valgte, og en du ikke valgte. De ' +
            'signaler den læser er, hvor meget energi der kommer ind, hvor meget der er lagret, og ' +
            'hvor længe hullet har varet — og ingen af dem bærer din hensigt.',
          'Så den gør, hvad den altid har gjort under knaphed. Opmærksomheden snævrer ind om mad, ' +
            'fordi at lægge mærke til mad er, hvordan et sultent dyr overlever. Mæthedssignalerne ' +
            'bliver svagere. Belønningen ved at spise stiger, så det samme måltid er mere ' +
            'uimodståeligt end for en uge siden. Dette er ikke svaghed der afsløres; det er et ' +
            'system der arbejder præcis som bygget, i en person der har besluttet, at systemet er ' +
            'fjenden.',
          'Og det tiltager i stedet for at falde til ro. Jo længere og hårdere restriktionen er, jo ' +
            'stærkere trækket — hvorfor mønstret så ofte ender i en episode, der er helt ude af ' +
            'proportion med den regel, der startede den.',
        ],
      },
      {
        heading: 'Den del der gør det til en cirkel',
        body: [
          'Det der gør en episode til en løkke, er det der sker bagefter. Episoden læses som bevis ' +
            'på en karakterbrist, og svaret på en karakterbrist er en strengere regel. Den ' +
            'strengere regel giver et stærkere træk. Det stærkere træk giver en større episode, ' +
            'som læses som yderligere bevis.',
          'Hver omgang gør den næste mere sandsynlig, og den person der er inde i det, oplever det ' +
            'hele som information om sig selv frem for som et forudsigeligt svar på det, hun ' +
            'bliver ved med at gøre.',
          'Det er værd at sige tydeligt, fordi det er den del folk sjældent hører: at dette er ' +
            'forudsigeligt gør det ikke til et lille problem. Forudsigeligt og alvorligt er ikke ' +
            'modsætninger.',
        ],
      },
      {
        heading: 'Hvornår dette holder op med at være et mønster',
        body: [
          'Der findes en grænse, og den trækkes ikke af, hvor meget nogen spiser i en episode. Den ' +
            'trækkes af, hvad spisningen gør ved resten af et liv.',
          'Nogle tegn på at den er overskredet: episoder ledsaget af en reel fornemmelse af ' +
            'kontroltab og ikke bare af at spise for meget; alt der gøres bagefter for at ' +
            'kompensere — opkastning, afføringsmidler, straffende motion, faste dagen efter; at ' +
            'mad eller kropsform fylder så meget, at arbejde, studier eller relationer lider; og ' +
            'hemmeligholdelse, et af de mest pålidelige signaler af alle.',
          'Intet af det er en diagnose, og denne side kan ikke stille en. Det er det punkt, hvor ' +
            'det rigtige næste skridt holder op med at være en anden spisestrategi og bliver et ' +
            'menneske — egen læge, en psykolog, en rådgivningslinje. Spiseforstyrrelser har den ' +
            'højeste dødelighed af alle psykiske lidelser og reagerer godt på behandling, og begge ' +
            'halvdele af den sætning er grunde til at ringe tidligt frem for sent.',
        ],
      },
      {
        heading: 'Hvad det betyder for al registrering, også vores',
        body: [
          'Vi laver en app, der tæller, så vi har en åbenlys interesse her og bør sige det højt. At ' +
            'måle, hvad man spiser, gavner nogle mennesker virkelig og skader andre virkelig, og ' +
            'hvilken gruppe man er i, afgøres ikke af, hvor disciplineret man er.',
          'Hvis et tal på en skærm sætter tonen for din dag, hvis du er begyndt at spise uden om ' +
            'appen i stedet for at bruge den, eller hvis synet af en sum får dig til at ville ' +
            'kompensere — så er det ikke et tegn på at registrere mere omhyggeligt. Luk den. Det ' +
            'råd koster os en bruger, og det er det rigtige råd.',
        ],
      },
    ],

    claims: {},

    practical: [
      {
        title: 'Læg mærke til hvilken halvdel af cirklen du behandler',
        detail:
          'Næsten enhver plan, folk prøver efter en episode, sigter på episoden. Episoden er anden ' +
            'halvdel. Første halvdel er reglen der gik forud, og den står stadig.',
      },
      {
        title: 'Hemmeligholdelse er det signal, der skal tages alvorligt',
        detail:
          'Af alt på denne side er det at skjule det den markør, der mest pålideligt skiller en ' +
            'svær periode fra noget, der kræver hjælp. Hvis ingen i dit liv ved, at det sker, er ' +
            'det en information.',
      },
      {
        title: 'Spørg nogen, hvis arbejde det er',
        detail:
          'Ikke en ernæringsartikel og ikke en app. Egen læge er en fornuftig første dør og har ' +
            'haft samtalen før.',
      },
    ],

    seeAlso: ['protein', 'magnesium', 'iron'],

    sources: {
      minnesota: 'Minnesota-sultforsøget — Keys et al. og senere analyser',
      'nice-eating': 'NICE-retningslinje NG69 — spiseforstyrrelser: opsporing og behandling',
      beat: 'Beat — støtte og hjælpelinjer ved spiseforstyrrelser',
    },
  },

  'tracking-without-obsession': {
    title: 'Vi laver en registrerings-app, så læs denne del skeptisk',
    short: 'Registrering uden tvang',
    lede:
      'At måle, hvad man spiser, hjælper nogle mennesker meget og skader andre, og hvilken gruppe ' +
      'man er i, afgøres ikke af, hvor fornuftig man er. Vi har en åbenlys interesse i det første ' +
      'svar — og det er præcis derfor, denne side findes.',
    description:
      'Hvornår registrering af mad hjælper, hvornår den bliver skadelig, tegnene på at det er ' +
      'sket, og hvorfor det rigtige råd nogle gange er at holde op.',

    commonBelief:
      'Registrering er bare information. Flere data om det jeg spiser kan kun hjælpe mig.',

    sections: [
      {
        heading: 'Hvad den faktisk er god til',
        body: [
          'At finde ud af, hvad du virkelig spiser, hvilket næsten ingen ved. Skøn over eget indtag ' +
            'fra hukommelsen rammer forkert med store marginer i begge retninger, og fejlene er ' +
            'ikke tilfældige: de samler sig netop om det, man har mindst lyst til at kigge på.',
          'Den er også god til at besvare ét bestemt spørgsmål. Hvor mangler jeg protein? Kommer jeg ' +
            'overhovedet i nærheden af nok jern? Hvad er der egentlig i den frokost, jeg spiser ' +
            'fire gange om ugen? De spørgsmål har svar, svarene er brugbare, og når du har dem, ' +
            'behøver du ikke spørge igen.',
          'Det er formen på registrering, når den er bedst: en kort undersøgelse med en begyndelse ' +
            'og en slutning. Fjorten dages måling for at finde hullerne er langt mere værd end et ' +
            'år med registrering af vane.',
        ],
      },
      {
        heading: 'Hvordan det tipper',
        body: [
          'En måling bliver til et mål, og et mål bliver til en regel. Den udvikling er ikke ' +
            'uundgåelig, og den er almindelig, og den sker som regel uden noget øjeblik, hvor ' +
            'nogen beslutter at lade det ske.',
          'Tegnene er til at genkende. At spise uden om appen i stedet for at bruge den — at vælge ' +
            'den mad, der registreres pænt, frem for den der passer til måltidet. Uro ved at spise ' +
            'noget, der ikke kan måles, hvilket stille udelukker andres madlavning og de fleste ' +
            'restauranter. Et tal ved dagens slutning, der sætter tonen for aftenen. Trangen til at ' +
            'kompensere efter at have set en sum.',
          'Og den der betyder mest: at registrere noget og derefter spise anderledes på grund af, ' +
            'hvad skærmen sagde, frem for på grund af sult, mæthed eller plan.',
        ],
      },
      {
        heading: 'Hvem der formentlig ikke bør gøre dette',
        body: [
          'Enhver med en historie med en spiseforstyrrelse. Det er ikke et forsigtigt forbehold — ' +
            'kostmæssig selvregistrering er forbundet med dårligere forløb i denne gruppe, og ' +
            'kliniske retningslinjer fraråder det generelt uden for et behandlingsforløb.',
          'Enhver for hvem tallene før er blevet selve sagen. Endte et tidligere forsøg med, at ' +
            'registreringen tog over, er appen ikke anderledes denne gang.',
          'Og unge, hvor forholdet mellem risiko og gavn er dårligt, og hvor udviklingstidspunktet ' +
            'er dårligt. Vi bygger til voksne af den grund.',
        ],
      },
      {
        heading: 'Hvad vi hellere så',
        body: [
          'Registrer i to uger med et spørgsmål i hovedet. Besvar det. Stop. Kom igen, hvis ' +
            'spørgsmålet ændrer sig, eller kosten gør.',
          'Brug appen til at slå enkelte fødevarer op uden at registrere noget som helst — det ' +
            'meste af værdien ligger i næringsstofprofilen for en fødevare og ikke i dagbogen, og ' +
            'den brug bærer ingen af de risici, der er beskrevet ovenfor.',
          'Og hvis noget af det, denne side beskriver, passer på dig, så luk den. Det råd koster os ' +
            'en bruger, og det er stadig det rigtige. En app, der kun kunne forsvares ved at tie ' +
            'med dette, ville ikke være værd at bygge.',
        ],
      },
    ],

    claims: {},

    practical: [
      {
        title: 'Giv den et spørgsmål og en slutdato',
        detail:
          'To uger til at finde hullerne slår et år med registrering af vane, og det er der, næsten ' +
            'hele værdien ligger.',
      },
      {
        title: 'Hold øje med om du spiser uden om appen',
        detail:
          'At vælge mad, fordi den registreres pænt, frem for fordi den passer til måltidet, er det ' +
            'tidligste pålidelige tegn på, at værktøjet er blevet målet.',
      },
      {
        title: 'Brug opslaget uden dagbogen',
        detail:
          'Det mest brugbare her er næringsstofprofilen for en fødevare. Den bærer ingen af de ' +
            'risici, daglig registrering gør.',
      },
      {
        title: 'Har du en historie, så begynd ikke',
        detail:
          'Selvregistrering er forbundet med dårligere forløb, hvor der er en historie med en ' +
            'spiseforstyrrelse. Det er en anbefaling, ikke en forsigtighed.',
      },
    ],

    seeAlso: ['protein', 'iron', 'calcium'],

    sources: {
      'tracking-review': 'Kostmæssig selvregistrering og forløb — systematisk oversigt',
      orthorexia: 'Ortoreksi og sundheds-tracking-teknologi — en oversigt',
      'nice-eating': 'NICE-retningslinje NG69 — spiseforstyrrelser: opsporing og behandling',
    },
  },
};

import { LocalisedArticle } from '../types';

/**
 * Gli otto nutrienti più cercati, in italiano.
 *
 * Otto e non ventiquattro, deliberatamente. Gli articoli inglesi sono online da
 * pochi giorni e non sappiamo ancora se si posizionano; tradurne ventiquattro
 * in quattro lingue prima di un solo segnale sarebbe una scommessa, non una
 * strategia. Questi otto coprono gran parte della domanda di ricerca, il resto
 * seguirà quando i dati lo giustificheranno.
 *
 * I numeri non stanno qui. Vivono una volta sola, in nutrient-facts.ts, e
 * vengono uniti in fase di rendering tramite identificatore.
 */
export const CORE_IT: Readonly<Record<string, LocalisedArticle>> = {
  /* ------------------------------------------------------------- magnesio */
  magnesium: {
    name: 'Magnesio',
    title: 'Magnesio: il minerale che manca in silenzio a quasi tutti',
    lede:
      'Serve a più di trecento reazioni enzimatiche, la maggior parte è depositata nell’osso dove ' +
      'un esame del sangue non la vede, e circa metà degli adulti negli Stati Uniti ne assume ' +
      'meno di quanto raccomandato. Ecco dove trovarlo.',
    description:
      'Che cosa fa il magnesio, quanto ve ne serve secondo l’età e quali alimenti ne portano di ' +
      'più — ordinati dai dati USDA, per 100 g.',

    whatItDoes: [
      'Il magnesio è un cofattore: non fa il lavoro da solo, è ciò di cui diverse centinaia di ' +
        'enzimi hanno bisogno per fare il loro. Fra questi ci sono quelli che costruiscono ' +
        'proteine, quelli che copiano il DNA e quelli che trasformano il cibo in energia ' +
        'utilizzabile — per questo una carenza si presenta come stanchezza vaga e non come ' +
        'qualcosa di preciso.',
      'Sta anche di fronte al calcio nel muscolo. Il calcio segnala alla fibra muscolare di ' +
        'contrarsi; il magnesio è parte di ciò che le permette di rilasciarsi. La stessa coppia ' +
        'lavora nel tessuto nervoso e nella parete dei vasi sanguigni.',
      'Circa il 60 % del magnesio di un corpo adulto è nell’osso, gran parte del resto dentro le ' +
        'cellule e meno dell’1 % nel sangue. Quest’ultimo dato conta più di quanto sembri: una ' +
        'magnesiemia normale non esclude riserve basse, perché il corpo preleva magnesio ' +
        'dall’osso per tenere stabile il livello nel sangue.',
    ],

    intake: {
      'infant-0-6': { who: 'Lattanti, 0–6 mesi', note: 'Assunzione adeguata, dal latte' },
      'infant-7-12': { who: 'Lattanti, 7–12 mesi', note: 'Assunzione adeguata' },
      'child-1-3': { who: 'Bambini, 1–3 anni' },
      'child-4-8': { who: 'Bambini, 4–8 anni' },
      'child-9-13': { who: 'Bambini, 9–13 anni' },
      'men-19-30': { who: 'Uomini, 19–30' },
      'men-31-plus': { who: 'Uomini, dai 31 in su' },
      'women-19-30': { who: 'Donne, 19–30' },
      'women-31-plus': { who: 'Donne, dai 31 in su' },
      pregnancy: { who: 'Gravidanza', note: 'A seconda dell’età' },
    },
    intakeNote:
      'Sono assunzioni giornaliere raccomandate, salvo dove indicato: per i lattanti non ci sono ' +
      'prove sufficienti per fissarne una, quindi si dà un’assunzione adeguata. Le percentuali ' +
      'nella tabella qui sotto sono sul valore giornaliero di 420 mg usato in etichetta, un ' +
      'numero unico per tutti sopra i quattro anni e quindi generoso per quasi ogni lettore.',

    foodsIntro:
      'Il magnesio sta nella clorofilla, quindi la foglia verde ne porta — ma semi, frutta secca ' +
      'e legumi ne portano molto di più per boccone, perché stanno conservando minerali per una ' +
      'pianta che non è ancora cresciuta.',

    helps: [
      'Distribuirlo nella giornata: l’assorbimento cala man mano che la dose sale',
      'Cereali integrali invece che raffinati: la macinazione toglie germe e crusca, dove sta',
      'Ammollo o germogliazione di legumi e cereali, che degrada parte dei fitati',
    ],
    hinders: [
      'Integratori di zinco ad altissimo dosaggio, che competono per l’assorbimento',
      'I fitati di cereali integrali e legumi non ammollati, che lo legano nell’intestino',
      'L’alcol cronico e alcuni diuretici, che aumentano la perdita con le urine',
    ],
    absorptionNote:
      'L’assorbimento dagli alimenti si aggira sul 30–40 % e sale quando le riserve sono basse, ' +
      'che è il corpo che fa la cosa sensata. L’ossido di magnesio degli integratori è assorbito ' +
      'male rispetto al citrato o al bisglicinato; se un medico vi ha consigliato un integratore, ' +
      'vale la pena chiedere quale forma.',

    shortfall: [
      'Chi mangia soprattutto cereali raffinati, dato che la macinazione toglie circa l’80 % del magnesio',
      'Gli anziani, che ne assorbono meno e ne eliminano di più',
      'Chi ha diabete di tipo 2, celiachia o morbo di Crohn, per perdite o malassorbimento',
      'Chi usa inibitori di pompa protonica per anni, che possono abbassarlo',
    ],

    recipe: {
      title: 'Purea di semi di zucca e spinaci',
      serves: 'Dagli 8 mesi, e si moltiplica per il resto della tavola',
      ingredients: [
        '2 cucchiai di semi di zucca, non salati',
        '2 belle manciate di spinaci, lavati',
        '1 patata piccola, pelata e a cubetti',
        '1 cucchiaino di olio extravergine',
        '3–4 cucchiai di acqua tiepida, latte materno o formula, per stemperare',
      ],
      steps: [
        {
          title: 'Tostare i semi',
          detail:
            'Padella asciutta, fuoco medio, tre o quattro minuti muovendoli in continuazione. ' +
            'Sono pronti quando profumano di nocciola e uno o due iniziano a saltare. Farli ' +
            'raffreddare del tutto: da caldi diventano crema invece che polvere.',
        },
        {
          title: 'Macinarli',
          detail:
            'A polvere fine, in un macinaspezie o un piccolo frullatore. Per un bambino non è ' +
            'facoltativo: i semi interi sono un rischio di soffocamento ben oltre il secondo anno.',
        },
        {
          title: 'Cuocere la patata',
          detail:
            'A fuoco dolce in acqua non salata, 12–15 minuti, finché il coltello entra da solo.',
        },
        {
          title: 'Far appassire gli spinaci',
          detail:
            'Aggiungerli negli ultimi 60 secondi. Più a lungo e gran parte del folato finisce ' +
            'nell’acqua anziché nel piatto.',
        },
        {
          title: 'Frullare',
          detail:
            'Scolare tenendo un po’ di acqua di cottura. Frullare patata e spinaci con l’olio, ' +
            'poi incorporare i semi macinati. Stemperare fino alla consistenza a cui il bambino è ' +
            'abituato.',
        },
      ],
      note:
        'Introducete i semi come qualsiasi alimento nuovo: da soli, al mattino e non insieme ad ' +
        'altre novità. Parlatene con il pediatra prima di cominciare, soprattutto se in famiglia ' +
        'ci sono precedenti di allergia.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Magnesio',
      dri: 'Dietary Reference Intakes per calcio, fosforo, magnesio, vitamina D e fluoro',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ---------------------------------------------------------------- ferro */
  iron: {
    name: 'Ferro',
    title: 'Ferro: perché lenticchie e spinaci non sono lo stesso ferro',
    lede:
      'Il ferro dei vegetali e quello della carne sono chimicamente diversi, e l’intestino li ' +
      'tratta in modo diverso. Capire quale è quale è la differenza fra mangiare molto ferro e ' +
      'assorbirne un po’.',
    description:
      'Ferro eme e non eme, quanto ve ne serve secondo l’età, che cosa aiuta e che cosa blocca ' +
      'l’assorbimento, e gli alimenti più ricchi di ferro — ordinati dai dati USDA.',

    whatItDoes: [
      'Quasi tutto il ferro del corpo fa una cosa sola: stare al centro dell’emoglobina tenendo ' +
        'una molecola di ossigeno perché un globulo rosso la porti dal polmone al muscolo. Se ne ' +
        'manca arriva meno ossigeno, ed è per questo che la prima cosa che si nota è restare ' +
        'senza fiato su scale che prima non pesavano.',
      'Una quota minore sta nella mioglobina, che immagazzina ossigeno dentro il muscolo stesso, ' +
        'e in enzimi che fanno girare il macchinario energetico di ogni cellula. Il ferro serve ' +
        'anche agli enzimi che costruiscono la mielina e diversi neurotrasmettitori — ecco perché ' +
        'lo stato del ferro nei primi due anni di vita si prende tanto sul serio.',
      'Il corpo non ha modo di eliminare ferro a volontà. Si regola assorbendone di più o di ' +
        'meno, il che taglia da entrambi i lati: per questo l’assorbimento sale quando se ne ha ' +
        'poco, e per questo prendere integratori che nessuno ha prescritto è una pessima idea.',
    ],

    intake: {
      'infant-0-6': {
        who: 'Lattanti, 0–6 mesi',
        note: 'Assunzione adeguata; riserve dalla nascita',
      },
      'infant-7-12': {
        who: 'Lattanti, 7–12 mesi',
        note: 'Il salto più grande di tutta la tabella',
      },
      'child-1-3': { who: 'Bambini, 1–3 anni' },
      'child-4-8': { who: 'Bambini, 4–8 anni' },
      'men-19-50': { who: 'Uomini, 19–50' },
      'women-19-50': { who: 'Donne, 19–50', note: 'Perdite mestruali' },
      'women-51-plus': { who: 'Donne, dai 51 in su' },
      pregnancy: { who: 'Gravidanza' },
      vegetarian: {
        who: 'Vegetariani e vegani',
        note: 'Moltiplicate il valore per la vostra età e sesso — l’assorbimento vegetale è minore',
      },
    },
    intakeNote:
      'Il salto ai sette mesi è il dato da conoscere. Un neonato nasce con una riserva di ferro ' +
      'che si esaurisce intorno ai sei mesi, proprio quando il latte da solo smette di coprire il ' +
      'fabbisogno — per questo i primi alimenti ricchi di ferro sono una priorità e non un ' +
      'dettaglio.',

    foodsIntro:
      'Ordinati per ferro totale per 100 g. Leggeteli tenendo a mente la sezione seguente: gli ' +
      'alimenti animali di questo elenco cedono il loro ferro molto più facilmente di quelli ' +
      'vegetali, quindi quest’ordine non è l’ordine di ciò che arriva davvero al sangue.',

    helps: [
      'Vitamina C nello stesso pasto: può moltiplicare più volte l’assorbimento del ferro non eme',
      'Una piccola quantità di carne, pollame o pesce accanto alle fonti vegetali, che alza entrambi',
      'Ammollo, germogliazione o fermentazione di legumi e cereali, che degrada i fitati',
      'Cuocere piatti acidi in una padella di ghisa, che ne trasferisce davvero un po’',
    ],
    hinders: [
      'Tè e caffè durante il pasto: i tannini possono ridurre l’assorbimento di oltre la metà',
      'Calcio assunto nello stesso momento, da latticini o da integratore',
      'I fitati di cereali integrali, legumi e frutta secca non ammollati',
      'Farmaci antiacido a lungo termine, dato che l’acidità gastrica partecipa a liberare il ferro',
    ],
    absorptionNote:
      'Questo è il senso dell’intero articolo. Il ferro eme, da carne, pollame e pesce, è ' +
      'assorbito attorno al 15–35 % ed è quasi indifferente a che altro c’è nel piatto. Il ferro ' +
      'non eme, da vegetali, uova e alimenti fortificati, è assorbito attorno al 2–20 % — e ' +
      'quell’intervallo lo decide quasi interamente ciò con cui viene mangiato. Lenticchie e ' +
      'spinaci non sono fonti scarse; sono fonti che chiedono una spremuta di limone e niente tè.',

    shortfall: [
      'I lattanti da circa sei mesi, quando si esaurisce la riserva con cui sono nati',
      'Le donne con il ciclo, e in particolare chi ha mestruazioni abbondanti',
      'Chi è in gravidanza, dove il fabbisogno cresce di metà',
      'Vegetariani e vegani, che hanno bisogno di circa 1,8 volte il valore in tabella',
      'Gli atleti di resistenza, per emolisi da impatto e perdite con il sudore',
    ],

    recipe: {
      title: 'Purea di lenticchie rosse e peperone',
      serves: 'Dai 7 mesi — una fonte di ferro con la sua vitamina C incorporata',
      ingredients: [
        '3 cucchiai di lenticchie rosse, sciacquate finché l’acqua esce limpida',
        '1 peperone rosso piccolo, senza semi e a pezzi',
        '1 carota piccola, pelata e a pezzi',
        '150 ml di acqua o brodo non salato',
        '1 cucchiaino di olio extravergine',
        'Una spremuta di limone, alla fine',
      ],
      steps: [
        {
          title: 'Sciacquare bene le lenticchie',
          detail:
            'Sotto acqua fredda in un colino finché esce limpida e non torbida. Questo porta via ' +
            'l’amido di superficie e parte dei fitati che altrimenti legherebbero il ferro.',
        },
        {
          title: 'Cuocere a fuoco dolce',
          detail:
            'Lenticchie, carota e acqua in un pentolino. Portare a bollore, poi abbassare a ' +
            'sobbollire per 15 minuti con il coperchio socchiuso.',
        },
        {
          title: 'Il peperone tardi',
          detail:
            'Solo negli ultimi 5 minuti. La vitamina C si degrada con calore e tempo, e il ' +
            'peperone è qui per la vitamina C tanto quanto per il sapore.',
        },
        {
          title: 'Frullare e completare',
          detail:
            'Frullare liscio con l’olio, poi aggiungere il limone fuori dal fuoco. Stemperare con ' +
            'un po’ di acqua di cottura raffreddata se risulta più densa del solito.',
        },
      ],
      note:
        'Servitela lontano da una poppata invece che insieme: il calcio del latte compete con il ' +
        'ferro per l’assorbimento. Un’ora prima o dopo basta. Come sempre, chiedete al pediatra ' +
        'prima di introdurre un alimento nuovo.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Ferro',
      dri: 'Dietary Reference Intakes per vitamina A, vitamina K, ferro, zinco e altri',
      fdc: 'USDA FoodData Central',
    },
  },

  /* --------------------------------------------------------------- calcio */
  calcium: {
    name: 'Calcio',
    title: 'Calcio: una banca in cui si versa solo finché è aperta',
    lede:
      'Quasi tutto sta nello scheletro, e lo scheletro smette di accettare versamenti verso la ' +
      'fine dei vent’anni. Quello che si costruisce prima è quello che si spende per il resto ' +
      'della vita.',
    description:
      'Che cosa fa il calcio oltre all’osso, quanto ve ne serve a ogni età, perché la vitamina D ' +
      'decide se lo assorbite, e gli alimenti più ricchi — dai dati USDA.',

    whatItDoes: [
      'Circa il 99 % del calcio del corpo è strutturale: è il minerale che rende rigidi osso e ' +
        'dente. Il restante 1 % fa qualcosa di più urgente: ogni contrazione muscolare, ogni ' +
        'segnale nervoso e ogni passaggio della coagulazione richiede ioni calcio a una ' +
        'concentrazione molto precisa.',
      'Quell’1 % viene difeso in modo assoluto. Se la calcemia inizia a scendere, il paratormone ' +
        'sale e il corpo scioglie osso per ripristinarla. Ecco perché un esame del sangue non ' +
        'dice quasi nulla sull’assunzione di calcio: il valore resta normale fino a molto dopo ' +
        'che lo scheletro lo sta pagando da anni.',
      'La massa ossea si accumula nell’infanzia e nell’adolescenza, culmina fra i venticinque e i ' +
        'trent’anni e poi cala lentamente. L’adolescenza è il singolo versamento più grande che ' +
        'chiunque faccia, ed è per questo che la raccomandazione per un quattordicenne è più alta ' +
        'che per i suoi genitori.',
    ],

    intake: {
      'infant-0-6': { who: 'Lattanti, 0–6 mesi', note: 'Assunzione adeguata' },
      'infant-7-12': { who: 'Lattanti, 7–12 mesi', note: 'Assunzione adeguata' },
      'child-1-3': { who: 'Bambini, 1–3 anni' },
      'child-4-8': { who: 'Bambini, 4–8 anni' },
      'teen-9-18': {
        who: 'Dai 9 ai 18 anni',
        note: 'Il valore più alto della tabella, e non per caso',
      },
      'adults-19-50': { who: 'Adulti, 19–50' },
      'men-51-70': { who: 'Uomini, 51–70' },
      'women-51-plus': {
        who: 'Donne, dai 51 in su',
        note: 'La perdita ossea accelera dopo la menopausa',
      },
      'age-71-plus': { who: 'Adulti, dai 71 in su' },
    },
    intakeNote:
      'Di più non è meglio. Oltre circa 2.000–2.500 mg al giorno fra alimenti e integratori, le ' +
      'prove di beneficio spariscono e il rischio di calcoli renali sale. Il calcio è un ' +
      'nutriente il cui intervallo utile ha un tetto oltre che un pavimento.',

    foodsIntro:
      'I latticini dominano per quantità, ma non per assorbimento: il calcio delle verdure a ' +
      'foglia povere di ossalati, come il cavolo riccio o il pak choi, viene assorbito circa il ' +
      'doppio di quello del latte. Lo spinacio è la famosa eccezione: ricco di calcio e con quasi ' +
      'niente di disponibile.',

    helps: [
      'La vitamina D, senza la quale l’intestino assorbe una frazione di ciò che arriva',
      'Frazionare l’assunzione: l’assorbimento è più efficiente in dosi di circa 500 mg o meno',
      'Verdure a foglia povere di ossalati: cavolo riccio, pak choi, broccoli, crescione',
      'Fermentazione e ammollo, che riducono i fitati di legumi e cereali',
    ],
    hinders: [
      'Gli ossalati, per cui spinaci, rabarbaro e bietola cedono pochissimo del loro',
      'Un apporto di sodio molto alto, che aumenta il calcio perso con le urine',
      'Caffeina e alcol in eccesso, in misura moderata',
      'Prenderlo insieme a un integratore di ferro: ciascuno blocca l’altro',
    ],
    absorptionNote:
      'L’assorbimento è attorno al 30 % dalla maggior parte degli alimenti e cala al salire della ' +
      'dose, che è l’argomento per distribuirlo fra i pasti invece di prendere un unico grande ' +
      'integratore. Cala anche con l’età: un anziano assorbe sensibilmente meno di un adolescente ' +
      'dallo stesso bicchiere di latte, e questo è in parte il motivo per cui la raccomandazione ' +
      'risale dopo i settanta.',

    shortfall: [
      'Gli adolescenti, che ne hanno più bisogno e spesso bevono meno latte',
      'Le donne in postmenopausa, per il calo degli estrogeni e un turnover osseo più rapido',
      'Chi evita i latticini senza sostituirli con alternative fortificate o ricche di calcio',
      'Chi è intollerante al lattosio e ha eliminato il latticino invece di cambiarne la forma',
      'Chiunque assuma corticosteroidi a lungo termine',
    ],

    recipe: {
      title: 'Cavolo riccio brasato con fagioli bianchi e limone',
      serves: 'Due, come contorno; una ventina di minuti',
      ingredients: [
        '250 g di cavolo riccio, senza coste, foglie spezzate a mano',
        '1 barattolo di fagioli bianchi, scolati e sciacquati',
        '2 spicchi d’aglio, a fettine',
        '2 cucchiai di olio extravergine',
        '100 ml di acqua o brodo',
        'Scorza e succo di mezzo limone',
        'Pepe nero',
      ],
      steps: [
        {
          title: 'Togliere le coste',
          detail:
            'Tenete la base della costa e tirate via la foglia con l’altra mano. Le coste si ' +
            'mangiano, ma impiegano il triplo ad ammorbidirsi e questo piatto è corto.',
        },
        {
          title: 'Ammorbidire l’aglio',
          detail:
            'Olio in una padella larga a fuoco basso, aglio due minuti finché profuma e prende ' +
            'appena colore. L’aglio dorato diventa amaro e qui non c’è nulla che lo copra.',
        },
        {
          title: 'Brasare il cavolo',
          detail:
            'Foglie e acqua dentro, coperchio, otto-dieci minuti a fuoco medio-basso finché è ' +
            'tenero ma ancora verde. Un cavolo virato all’oliva ha perso la consistenza che ' +
            'rendeva sensato cucinarlo.',
        },
        {
          title: 'Completare',
          detail:
            'Fagioli dentro a scaldarsi, poi scorza e succo fuori dal fuoco. Pepe, e niente sale ' +
            'finché non avete assaggiato: i fagioli in barattolo portano il loro.',
        },
      ],
      note:
        'Il cavolo riccio è una foglia povera di ossalati, ed è tutto il punto: il suo calcio ' +
        'viene assorbito circa il doppio di quello dello spinacio. Il limone non è solo per il ' +
        'gusto — l’acido aiuta anche il ferro dei fagioli.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Calcio',
      dri: 'Dietary Reference Intakes per calcio e vitamina D',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ---------------------------------------------------------------- zinco */
  zinc: {
    name: 'Zinco',
    title: 'Zinco: quello che si nota dal gusto',
    lede:
      'Il corpo non ne immagazzina quasi nulla, il che significa che l’assunzione deve essere ' +
      'costante e non occasionale. È anche il motivo per cui un gusto attenuato è uno dei primi ' +
      'segnali che l’assunzione è bassa da un po’.',
    description:
      'Che cosa fa lo zinco per immunità, cicatrizzazione e gusto, quanto ve ne serve secondo ' +
      'l’età, perché contano i fitati, e gli alimenti più ricchi — dai dati USDA.',

    whatItDoes: [
      'Lo zinco è strutturale in un modo in cui la maggior parte dei minerali non lo è. Centinaia ' +
        'di proteine si ripiegano attorno a uno ione zinco per tenere la forma — i motivi a ' +
        '«dito di zinco» che permettono ai fattori di trascrizione di afferrare il DNA sono i più ' +
        'noti. Senza zinco quelle proteine non funzionano lentamente: non si formano.',
      'È anche centrale per la funzione immunitaria e la cicatrizzazione, che dipendono entrambe ' +
        'da cellule che si dividono in fretta. Ogni tessuto a ricambio rapido — mucosa ' +
        'intestinale, pelle, cellule immunitarie, papille gustative — sente la mancanza per primo.',
      'Non esiste una riserva di zinco degna di questo nome. A differenza del ferro, che il corpo ' +
        'accumula, lo zinco deve arrivare più o meno di continuo, e lo stato cala nel giro di ' +
        'settimane se l’assunzione scende.',
    ],

    intake: {
      'infant-0-6': { who: 'Lattanti, 0–6 mesi', note: 'Assunzione adeguata' },
      'infant-7-12': { who: 'Lattanti, 7–12 mesi' },
      'child-1-3': { who: 'Bambini, 1–3 anni' },
      'child-4-8': { who: 'Bambini, 4–8 anni' },
      'child-9-13': { who: 'Bambini, 9–13 anni' },
      'men-14-plus': { who: 'Uomini, dai 14 in su' },
      'women-19-plus': { who: 'Donne, dai 19 in su' },
      pregnancy: { who: 'Gravidanza' },
      breastfeeding: { who: 'Allattamento' },
    },
    intakeNote:
      'I vegetariani possono averne bisogno fino al 50 % in più di questi valori. Non è un ' +
      'margine di arrotondamento: riflette il contenuto di fitati di un’alimentazione vegetale, ' +
      'che lega lo zinco nell’intestino e può dimezzare quanto ne resta disponibile.',

    foodsIntro:
      'Le ostriche sono così avanti da distorcere la scala: una sola porzione porta l’equivalente ' +
      'di diversi giorni. Sotto di loro l’elenco è carne rossa, molluschi, semi e legumi, in ' +
      'quest’ordine di disponibilità più che di quantità.',

    helps: [
      'Proteine animali nello stesso pasto, che migliorano l’assorbimento da tutto ciò che c’è nel piatto',
      'Ammollo, germogliazione, fermentazione e lievitazione: tutti riducono i fitati in modo netto',
      'Pasta madre invece di pane azzimo, per lo stesso motivo',
    ],
    hinders: [
      'I fitati di cereali integrali e legumi non trattati, il maggiore inibitore in assoluto',
      'Integratori di ferro ad alto dosaggio presi a stomaco vuoto nello stesso momento',
      'Un apporto di calcio molto alto, in misura moderata',
      'Diarrea cronica o malattia infiammatoria intestinale, per perdita diretta',
    ],
    absorptionNote:
      'Il rapporto fra fitati e zinco di una dieta prevede l’assorbimento meglio del suo ' +
      'contenuto di zinco. È per questo che la stessa quantità di zinco dal manzo e dal pane ' +
      'integrale non è equivalente, e per questo i metodi tradizionali di preparazione — mettere ' +
      'a bagno i legumi la sera prima, far lievitare il pane — risultano aver fatto un lavoro ' +
      'nutrizionale reale da sempre.',

    shortfall: [
      'Vegetariani e vegani, per i fitati più che per l’assunzione',
      'Gli anziani, per assunzione più bassa e assorbimento ridotto insieme',
      'Chi ha morbo di Crohn, celiachia o diarrea cronica',
      'Chi ha anemia falciforme',
      'I forti bevitori, per ridotto assorbimento e maggiore perdita urinaria',
    ],

    recipe: {
      title: 'Ragù rapido di manzo e semi di zucca',
      serves: 'Due, circa venticinque minuti',
      ingredients: [
        '250 g di macinato di manzo',
        '3 cucchiai di semi di zucca',
        '1 cipolla, tritata fine',
        '1 peperone rosso, a dadini',
        '2 spicchi d’aglio, schiacciati',
        '1 cucchiaino di paprica affumicata',
        '1 cucchiaio di olio extravergine',
        '1 barattolo di pomodori a pezzi',
      ],
      steps: [
        {
          title: 'Tostare prima i semi',
          detail:
            'Padella asciutta, tre minuti, poi toglierli. Farlo prima della carne tiene la ' +
            'padella pulita ed evita che i semi cuociano a vapore nel grasso.',
        },
        {
          title: 'Rosolare bene la carne',
          detail:
            'Fuoco vivo, in un solo strato, e senza toccarla per due minuti. Una padella ' +
            'affollata la fa diventare grigia, e la carne grigia non ha niente del sapore che dà ' +
            'la rosolatura.',
        },
        {
          title: 'Costruire il soffritto',
          detail:
            'Carne da parte, fuoco basso, cipolla e peperone otto minuti finché sono morbidi e ' +
            'dolci. Aglio e paprica solo nell’ultimo minuto: la paprica brucia in fretta e ' +
            'diventa acre.',
        },
        {
          title: 'Sobbollire',
          detail:
            'Pomodori e carne di nuovo dentro, quindici minuti a fuoco dolce. Spargete i semi a ' +
            'tavola perché restino croccanti.',
        },
      ],
      note:
        'Manzo e semi insieme è il punto: la proteina animale migliora quanto zinco si ricava dai ' +
        'semi, che da soli sono frenati dai fitati.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Zinco',
      dri: 'Dietary Reference Intakes per vitamina A, vitamina K, ferro, zinco e altri',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ---------------------------------------------------------- vitamina D */
  'vitamin-d': {
    name: 'Vitamina D',
    title: 'Vitamina D: quella che in gran parte non si mangia',
    lede:
      'Quasi tutti gli altri nutrienti vengono dal cibo. Questo si forma nella pelle a partire ' +
      'dalla luce solare, ed è per questo che i consigli che la riguardano cambiano con la ' +
      'latitudine, la stagione e quanta parte dell’anno si passa al chiuso.',
    description:
      'Perché la vitamina D è diversa da ogni altra, quanta ve ne serve secondo l’età, e i pochi ' +
      'alimenti che la contengono davvero — ordinati dai dati USDA.',

    whatItDoes: [
      'La vitamina D governa quanto calcio si assorbe da ciò che si mangia. Senza abbastanza, si ' +
        'può avere una dieta ricca di calcio e comunque non portarlo nell’osso — che è ciò che ' +
        'sono in realtà il rachitismo nei bambini e l’osteomalacia negli adulti.',
      'Si comporta più come un ormone che come una vitamina. La pelle la produce dalla luce UVB, ' +
        'il fegato e poi i reni la convertono nella forma attiva, e i suoi recettori compaiono in ' +
        'tessuti che con l’osso non hanno nulla di ovvio a che fare: cellule immunitarie, ' +
        'muscolo, mucosa intestinale.',
      'Essendo liposolubile, viene immagazzinata invece che eliminata. È utile lungo un inverno, ' +
        'ed è anche il motivo per cui la vitamina D è uno dei pochi nutrienti in cui integrare ' +
        'alla leggera può fare davvero male.',
    ],

    intake: {
      'infant-0-12': { who: 'Lattanti, 0–12 mesi', note: 'Assunzione adeguata' },
      'age-1-70': { who: 'Bambini e adulti, 1–70' },
      'age-71-plus': { who: 'Adulti, dai 71 in su' },
      pregnancy: { who: 'Gravidanza e allattamento' },
    },
    intakeNote:
      'Microgrammi e unità internazionali sono entrambi in uso e 1 µg = 40 UI, che è una fonte ' +
      'costante di confusione in etichetta. Questi valori presuppongono un’esposizione solare ' +
      'minima: sono fissati apposta per il caso peggiore, perché l’alternativa è un consiglio che ' +
      'funziona solo a luglio.',

    foodsIntro:
      'Questo è l’elenco davvero utile più corto del sito, e questo è il risultato. Fuori dal ' +
      'pesce grasso, dal tuorlo e da ciò che è stato fortificato apposta, il cibo non è da dove ' +
      'viene la vitamina D.',

    helps: [
      'Assumerla con dei grassi, dato che è liposolubile e un pasto senza grassi ne assorbe meno',
      'Sole sulla pelle — mezzogiorno, braccia e viso, e molto meno tempo di quanto si supponga',
      'Alimenti fortificati, che in molti paesi sono di gran lunga la principale fonte alimentare',
    ],
    hinders: [
      'Latitudine e stagione: oltre i 37° circa, il sole invernale non ne produce quasi',
      'Crema solare, vetro e vestiti, che bloccano tutti gli UVB',
      'La pelle più scura, che richiede un’esposizione più lunga per la stessa quantità',
      'L’età, che riduce l’efficienza con cui la pelle la produce',
    ],

    shortfall: [
      'I lattanti allattati al seno, per cui la supplementazione è raccomandata di routine',
      'Chi si copre, lavora al chiuso o vive a latitudini nordiche durante l’inverno',
      'Le persone con pelle più scura che vivono lontano dall’equatore',
      'Gli anziani, per meno tempo all’aperto e una sintesi meno efficiente',
      'Chi ha malassorbimento dei grassi — celiachia, Crohn, dopo chirurgia bariatrica',
    ],

    recipe: {
      title: 'Purea di salmone e patata dolce',
      serves: 'Dai 7 mesi; uno dei pochi pasti che sia una vera fonte alimentare',
      ingredients: [
        '40 g di filetto di salmone, senza pelle e senza spine, controllato con cura',
        '1 patata dolce piccola, pelata e a cubetti',
        '1 cucchiaino di olio extravergine o burro non salato',
        '2–3 cucchiai di acqua tiepida, latte materno o formula',
      ],
      steps: [
        {
          title: 'Controllare il pesce due volte',
          detail:
            'Passate un dito sul filetto in entrambe le direzioni. Le spine sottili sono dure, ' +
            'appuntite e facili da mancare, e questo è il passaggio da non affrettare.',
        },
        {
          title: 'Cuocere al vapore insieme',
          detail:
            'Patata dolce 12 minuti, poi il salmone sopra per altri 6–8 finché si sfalda. Al ' +
            'vapore invece che lessato, il grasso — e la vitamina D che vi è disciolta — resta ' +
            'nel piatto e non nell’acqua.',
        },
        {
          title: 'Sfaldare e ricontrollare',
          detail:
            'Separate il salmone con una forchetta e guardatelo ancora una volta cercando spine.',
        },
        {
          title: 'Schiacciare',
          detail:
            'Schiacciate la patata dolce con l’olio, incorporate il salmone e stemperate fino ' +
            'alla consistenza che il bambino gestisce. Servire tiepido, non caldo.',
        },
      ],
      note:
        'Il pesce grasso è in quasi tutti gli elenchi di primi alimenti dai sei mesi ed è anche ' +
        'un allergene frequente: introducetelo da solo, presto nella giornata. Le indicazioni ' +
        'ufficiali limitano il pesce grasso a un paio di porzioni a settimana nei bambini ' +
        'piccoli. Chiedete prima al pediatra.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Vitamina D',
      dri: 'Dietary Reference Intakes per calcio e vitamina D',
      fdc: 'USDA FoodData Central',
    },
  },

  /* -------------------------------------------------------- vitamina B12 */
  'vitamin-b12': {
    name: 'Vitamina B12',
    title: 'Vitamina B12: solo dagli animali, o da una fabbrica',
    lede:
      'Nessuna pianta produce B12. Nemmeno gli animali: la producono i batteri, e gli animali la ' +
      'accumulano. Quest’unico fatto decide tutto su chi deve farci attenzione.',
    description:
      'Da dove viene davvero la vitamina B12, quanta ve ne serve, perché l’assorbimento viene ' +
      'meno con l’età e con i farmaci, e gli alimenti più ricchi — dai dati USDA.',

    whatItDoes: [
      'La B12 serve a completare la produzione dei globuli rossi. Senza, escono grandi, pochi e ' +
        'mal formati — anemia megaloblastica — e la stanchezza che ne segue è la stessa che ' +
        'provoca il ferro basso, per un meccanismo del tutto diverso.',
      'Mantiene anche la guaina mielinica attorno ai nervi. Questa è la metà che conta di più, ' +
        'perché il danno nervoso da carenza prolungata può diventare permanente, e può svilupparsi ' +
        'mentre il quadro ematico sembra ancora normale.',
      'E lavora con il folato nella reazione che ricicla l’omocisteina. Assumere molto folato può ' +
        'correggere l’anemia di una carenza di B12 mentre il danno nervoso prosegue sotto — che è ' +
        'esattamente perché curarsi da soli con un complesso B è imprudente.',
    ],

    intake: {
      'infant-0-6': { who: 'Lattanti, 0–6 mesi', note: 'Assunzione adeguata' },
      'infant-7-12': { who: 'Lattanti, 7–12 mesi', note: 'Assunzione adeguata' },
      'child-1-3': { who: 'Bambini, 1–3 anni' },
      'child-4-8': { who: 'Bambini, 4–8 anni' },
      'child-9-13': { who: 'Bambini, 9–13 anni' },
      adults: { who: 'Adulti' },
      pregnancy: { who: 'Gravidanza' },
      breastfeeding: { who: 'Allattamento' },
    },
    intakeNote:
      'Sono numeri piccoli, e questo trae in inganno. Il problema con la B12 non è quasi mai ' +
      'quanta ce n’è nel piatto — è se il corpo riesce ancora a prenderla dal piatto.',

    foodsIntro:
      'Fegato e molluschi sono così avanti rispetto a tutto il resto che l’elenco è a malapena ' +
      'una classifica. Notate ciò che manca: non compare nessun alimento vegetale non ' +
      'fortificato, perché nessuno la contiene.',

    helps: [
      'Acidità gastrica e fattore intrinseco, che liberano la B12 dal cibo e la portano attraverso l’intestino',
      'Alimenti fortificati e integratori, dove la B12 è già libera',
      'Distribuire l’assunzione: l’assorbimento per pasto si ferma a un paio di microgrammi',
    ],
    hinders: [
      'La metformina, presa a lungo termine',
      'Inibitori di pompa protonica e anti-H2, che riducono l’acidità necessaria a liberarla',
      'La gastrite atrofica, comune con l’età, che riduce il fattore intrinseco',
      'La chirurgia gastrica o ileale, che asporta il tessuto che la produce o la assorbe',
    ],
    absorptionNote:
      'Spirulina, alga nori e alimenti fermentati vengono spesso indicati come fonti vegetali. ' +
      'Gran parte di ciò che contengono sono analoghi della B12 che occupano il recettore senza ' +
      'fare il lavoro, e alcuni dati suggeriscono che possano peggiorare la situazione anziché ' +
      'migliorarla. Chi non mangia alimenti animali ha bisogno di un integratore o di alimenti ' +
      'fortificati: non è una questione di preferenza alimentare.',

    shortfall: [
      'Vegani e vegetariani di lunga data senza alimenti fortificati né integratore',
      'Gli adulti dai cinquant’anni circa, per il calo dell’acidità gastrica',
      'Chi assume metformina o antiacidi a lungo termine',
      'I lattanti allattati da madri carenti: le riserve alla nascita sono basse e finiscono in fretta',
      'Chi ha subito chirurgia bariatrica o ha un Crohn che interessa l’ileo',
    ],

    recipe: {
      title: 'Purea di fegatini di pollo e mela',
      serves: 'Dai 7 mesi, una o due volte al mese al massimo',
      ingredients: [
        '30 g di fegatini di pollo, puliti',
        '1 mela dolce piccola, pelata e senza torsolo',
        '1 patata piccola, pelata e a cubetti',
        '1 cucchiaino di burro non salato o olio extravergine',
        'Acqua per stemperare',
      ],
      steps: [
        {
          title: 'Pulire i fegatini',
          detail:
            'Eliminate il tessuto connettivo chiaro e le zone verdastre. Sciacquate e asciugate.',
        },
        {
          title: 'Cuocere patata e mela',
          detail: 'Insieme in acqua non salata per circa 12 minuti, finché entrambe sono morbide.',
        },
        {
          title: 'Cuocere i fegatini fino in fondo',
          detail:
            'Dolcemente nel burro, 5–6 minuti girandoli, finché non resta rosa da nessuna parte. ' +
            'Con le frattaglie, «appena cotto» non basta per un bambino.',
        },
        {
          title: 'Frullare',
          detail:
            'Tutto insieme, liscio, stemperando con l’acqua di cottura. La mela qui fa un lavoro ' +
            'vero: smussa un sapore forte.',
        },
      ],
      note:
        'Il fegato è straordinariamente ricco di vitamina A oltre che di B12, e la vitamina A si ' +
        'accumula. Due volte al mese è il tetto abituale per un bambino piccolo, e il fegato non ' +
        'è raccomandato affatto in gravidanza per lo stesso motivo. Chiedete al pediatra prima di ' +
        'iniziare.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Vitamina B12',
      dri: 'Dietary Reference Intakes per tiamina, riboflavina, niacina, vitamina B6, folato e vitamina B12',
      fdc: 'USDA FoodData Central',
    },
  },

  /* --------------------------------------------------------------- folato */
  folate: {
    name: 'Folato',
    title: 'Folato: la vitamina che deve esserci prima che sappiate di averne bisogno',
    lede:
      'Il tubo neurale si chiude entro i primi 28 giorni di gravidanza — spesso prima che una ' +
      'donna sappia di essere incinta. Quest’unico dettaglio di calendario è il motivo per cui il ' +
      'folato viene aggiunto alla farina in più di ottanta paesi.',
    description:
      'Folato e acido folico, quanto ve ne serve, perché il momento in gravidanza è tutto, e gli ' +
      'alimenti più ricchi — dai dati USDA.',

    whatItDoes: [
      'Il folato trasporta unità a un carbonio, e le reazioni che ne hanno bisogno sono quelle ' +
        'che costruiscono il DNA. Ogni tessuto che si divide in fretta — midollo osseo, mucosa ' +
        'intestinale, un embrione in crescita — dipende da un rifornimento costante.',
      'Senza, le cellule iniziano a dividersi e non riescono a finire. Nel midollo questo produce ' +
        'un’anemia megaloblastica, lo stesso quadro della carenza di B12, perché B12 e folato si ' +
        'incontrano nella stessa reazione.',
      'In un embrione il guasto è strutturale. Il tubo neurale — da cui nascono cervello e ' +
        'midollo spinale — si chiude fra il 21° e il 28° giorno dal concepimento. Un folato ' +
        'sufficiente in quel momento riduce nettamente il rischio di spina bifida e anencefalia. ' +
        'Un folato sufficiente due mesi dopo non serve.',
    ],

    intake: {
      'infant-0-6': { who: 'Lattanti, 0–6 mesi', note: 'Assunzione adeguata' },
      'infant-7-12': { who: 'Lattanti, 7–12 mesi', note: 'Assunzione adeguata' },
      'child-1-3': { who: 'Bambini, 1–3 anni' },
      'child-4-8': { who: 'Bambini, 4–8 anni' },
      'child-9-13': { who: 'Bambini, 9–13 anni' },
      'adults-14-plus': { who: 'Dai 14 anni in su' },
      pregnancy: { who: 'Gravidanza' },
      breastfeeding: { who: 'Allattamento' },
    },
    intakeNote:
      'DFE significa equivalenti alimentari di folato, ed esistono perché l’acido folico degli ' +
      'integratori e degli alimenti fortificati viene assorbito circa 1,7 volte meglio del folato ' +
      'degli alimenti. L’indicazione di sanità pubblica nella maggior parte dei paesi è che ' +
      'chiunque possa iniziare una gravidanza assuma 400 µg di acido folico al giorno: non una ' +
      'volta incinta, ma prima, proprio per il calendario di cui sopra.',

    foodsIntro:
      'Il nome viene da folium, foglia in latino, e la classifica lo conferma: verdure a foglia, ' +
      'legumi, fegato e — dove la legge lo impone — farina fortificata.',

    helps: [
      'Mangiare le verdure crude o poco cotte, dato che il folato è sensibile al calore',
      'I legumi, che ne sono densi e lo conservano meglio delle foglie',
      'Farina e cereali fortificati, dove è obbligatorio',
    ],
    hinders: [
      'La bollitura prolungata, che può distruggerne o dilavarne gran parte',
      'L’alcol, che ostacola l’assorbimento e aumenta l’escrezione',
      'Metotrexato e alcuni antiepilettici, che sono antagonisti del folato',
      'Celiachia e altri malassorbimenti',
    ],
    absorptionNote:
      'Un’avvertenza sugli integratori. Un’assunzione elevata di acido folico può mascherare ' +
      'l’anemia di una carenza di B12 mentre il danno neurologico avanza senza essere notato — ' +
      'per questo esiste il limite superiore di 1.000 µg per gli adulti, e per questo un ' +
      'complesso B è un pessimo modo di curarsi la stanchezza da soli.',

    shortfall: [
      'Chiunque possa iniziare una gravidanza e non stia integrando',
      'Chi ha un disturbo da uso di alcol',
      'Chi assume metotrexato, sulfasalazina o certi antiepilettici',
      'Chi ha celiachia o malattia infiammatoria intestinale',
    ],

    recipe: {
      title: 'Insalata tiepida di lenticchie con asparagi e uovo morbido',
      serves: 'Due, venticinque minuti',
      ingredients: [
        '150 g di lenticchie di Castelluccio o di Puy',
        '250 g di asparagi, base legnosa spezzata',
        '2 uova',
        '2 cucchiai di olio extravergine',
        '1 cucchiaio di aceto di Jerez',
        '1 scalogno, tritato fine',
        'Una manciata di prezzemolo',
      ],
      steps: [
        {
          title: 'Sobbollire le lenticchie, non bollirle',
          detail:
            'Venti minuti a fremito appena visibile, in acqua non salata. Il bollore forte spacca ' +
            'la buccia e si finisce con una zuppa.',
        },
        {
          title: 'Asparagi al vapore, brevemente',
          detail:
            'Tre o quattro minuti, ancora croccanti. Il folato è fra le vitamine più fragili al ' +
            'calore, e un asparago bollito fino a diventare molle ne ha ceduto quasi tutto.',
        },
        {
          title: 'Uova morbide',
          detail: 'Sei minuti e mezzo dal bollore, poi in acqua fredda e sgusciate con cura.',
        },
        {
          title: 'Condire da tiepide',
          detail:
            'Scalogno, aceto e olio sulle lenticchie scolate ancora calde; asparagi e prezzemolo ' +
            'incorporati; uova a metà sopra.',
        },
      ],
      note:
        'Lenticchie, asparagi e tuorlo sono tutte e tre buone fonti di folato. Cuocere poco qui ' +
        'non è pignoleria: è gran parte della differenza fra il numero in etichetta e il numero ' +
        'nel piatto.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Folato',
      dri: 'Dietary Reference Intakes per tiamina, riboflavina, niacina, vitamina B6, folato e vitamina B12',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ------------------------------------------------------------- proteine */
  protein: {
    name: 'Proteine',
    title: 'Proteine: la raccomandazione è un pavimento, non un obiettivo',
    lede:
      'La quantità raccomandata è quella che evita la carenza in quasi tutti — una domanda ' +
      'diversa da quale sia la quantità ottimale per un atleta, o per chi ha più di settant’anni ' +
      'e cerca di non perdere muscolo.',
    description:
      'A che cosa servono le proteine oltre al muscolo, quante ve ne servono per età e peso, ' +
      'perché la raccomandazione è un minimo, e gli alimenti più ricchi — dai dati USDA.',

    whatItDoes: [
      'Le proteine non sono anzitutto carburante. Sono materiale: enzimi, anticorpi, proteine di ' +
        'trasporto, collagene, il macchinario contrattile del muscolo e ogni ormone che non sia ' +
        'uno steroide. Il corpo non ha una riserva di proteine come ha una riserva di grasso — ' +
        'tutto ciò che è proteina sta già facendo un lavoro, quindi una mancanza significa ' +
        'smontare qualcosa che era in uso.',
      'Nove dei venti amminoacidi non possono essere prodotti e devono arrivare con il cibo. ' +
        '«Completa» significa che una proteina li contiene tutti e nove in proporzione utile; le ' +
        'proteine animali di solito lo sono, e la maggior parte delle proteine vegetali isolate è ' +
        'povera di uno o due.',
      'È meno un problema di quanto si credesse. Mangiare varietà di proteine vegetali nell’arco ' +
        'di una giornata copre il profilo con ampio margine — l’idea che andassero combinate ' +
        'nello stesso pasto è stata abbandonata decenni fa.',
    ],

    intake: {
      'infant-0-6': { who: 'Lattanti, 0–6 mesi', note: 'Assunzione adeguata' },
      'infant-7-12': { who: 'Lattanti, 7–12 mesi' },
      'child-1-3': { who: 'Bambini, 1–3 anni' },
      'child-4-8': { who: 'Bambini, 4–8 anni' },
      'child-9-13': { who: 'Bambini, 9–13 anni' },
      'men-19-plus': { who: 'Uomini, dai 19 in su', note: 'A un peso corporeo di riferimento' },
      'women-19-plus': { who: 'Donne, dai 19 in su', note: 'A un peso corporeo di riferimento' },
      'per-kilo': {
        who: 'Adulti, per chilogrammo',
        note: 'Il valore da cui gli altri sono derivati',
      },
      pregnancy: { who: 'Gravidanza e allattamento' },
    },
    intakeNote:
      'Il valore per chilogrammo è la vera raccomandazione; i totali in grammi sono quel valore ' +
      'applicato a un corpo medio. Ed è esplicitamente un minimo. La ricerca sugli anziani e su ' +
      'chi si allena seriamente indica che assunzioni più alte — spesso 1,0–1,6 g/kg — vanno ' +
      'meglio per conservare il muscolo. È una domanda diversa da quella a cui risponde la ' +
      'raccomandazione, e conviene non confonderle.',

    foodsIntro:
      'Ordinati per grammi su 100 g. Leggeteli sapendo che la concentrazione non è tutta la ' +
      'storia: un alimento può essere al 25 % di proteine e contribuire meno in una giornata di ' +
      'un altro meno denso di cui si mangia di più.',

    helps: [
      'Distribuirle fra i pasti invece di caricare la cena: la sintesi muscolare risponde per pasto',
      'Varietà fra le fonti vegetali, che copre il profilo amminoacidico senza pianificare nulla',
      'L’allenamento con i pesi, senza il quale le proteine in più sono in gran parte solo calorie',
    ],
    hinders: [
      'Un apporto energetico totale molto basso, in cui le proteine vengono bruciate come carburante',
      'L’età avanzata, che smorza la risposta muscolare a una data dose',
      'Alcune malattie renali, dove l’assunzione richiede un parere clinico e non un articolo',
    ],
    absorptionNote:
      'La qualità proteica si può misurare, e lo standard attuale è il DIAAS, che valuta quanto ' +
      'sia realmente digeribile ciascun amminoacido essenziale. Latticini e uovo ottengono i ' +
      'punteggi più alti; la maggior parte delle fonti vegetali isolate più bassi, soprattutto ' +
      'perché fibre e antinutrienti rallentano la digestione. Conta molto ad assunzioni totali ' +
      'basse e quasi nulla ad assunzioni generose.',

    shortfall: [
      'Gli anziani, la cui assunzione spesso cala proprio mentre il fabbisogno sale',
      'Chi si sta riprendendo da una malattia, un intervento o un infortunio',
      'Chi segue diete molto restrittive per dimagrire',
      'Alcuni vegani con basso apporto energetico, benché una dieta vegetale varia lo copra senza sforzo',
    ],

    recipe: {
      title: 'Ciotola di yogurt greco con semi e lenticchie croccanti',
      serves: 'Una persona, dieci minuti',
      ingredients: [
        '200 g di yogurt greco, intero',
        '3 cucchiai di lenticchie verdi lessate',
        '1 cucchiaio di semi di zucca',
        '1 cucchiaio di semi di canapa',
        '1 cucchiaino di olio extravergine',
        'Scorza di limone',
        'Pepe nero e sale in fiocchi',
      ],
      steps: [
        {
          title: 'Usare yogurt colato',
          detail:
            'Greco o skyr, non yogurt normale. La colatura toglie siero e raddoppia all’incirca ' +
            'le proteine per cucchiaio, che è l’intera ragione per cui questo funziona.',
        },
        {
          title: 'Rendere croccanti le lenticchie',
          detail:
            'Lenticchie lessate e ben asciugate, in padella calda con l’olio quattro minuti ' +
            'finché alcune scoppiettano e diventano croccanti. Le lenticchie bagnate non ' +
            'diventano croccanti.',
        },
        {
          title: 'Tostare i semi con loro',
          detail: 'Negli ultimi novanta secondi, così si scaldano senza bruciare.',
        },
        {
          title: 'Comporre in versione salata',
          detail:
            'Yogurt nella ciotola, lenticchie e semi sopra, scorza di limone, sale e molto pepe. ' +
            'È una colazione salata e ci guadagna.',
        },
      ],
      note:
        'Circa trenta grammi di proteine con tre ingredienti e in dieci minuti — cosa che conta ' +
        'più del numero, perché un obiettivo proteico si raggiunge con quello che uno preparerà ' +
        'davvero di martedì.',
    },

    sources: {
      dri: 'Dietary Reference Intakes per energia, carboidrati, fibre, grassi, acidi grassi, colesterolo, proteine e amminoacidi',
      who: 'OMS/FAO/UNU — Protein and Amino Acid Requirements in Human Nutrition',
      fdc: 'USDA FoodData Central',
    },
  },
};

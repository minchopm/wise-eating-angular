import { LocalisedGuide } from '../guide-types';

/**
 * Le otto guide principali, in italiano.
 *
 * Otto e non venti: gli articoli inglesi sono online da poco e non sappiamo
 * ancora quali temi vengano cercati. Sei sono qui per la domanda di ricerca; le
 * ultime due per un altro motivo, cioè che sono le uniche che possono
 * raggiungere qualcuno in un brutto momento.
 */
export const GUIDES_CORE_IT: Readonly<Record<string, LocalisedGuide>> = {
  'protein-per-meal': {
    title: 'Probabilmente mangiate abbastanza proteine e ne sprecate la maggior parte',
    short: 'Proteine per pasto',
    lede:
      'Il totale della giornata è il numero che tutti seguono e quello che conta meno. Il muscolo ' +
      'si costruisce in risposta a singoli pasti, e una giornata che raggiunge il suo obiettivo ' +
      'in una volta non è la stessa giornata di una che lo raggiunge in tre.',
    description:
      'Perché le proteine agiscono per pasto e non per giorno, cos’è la soglia della leucina, e ' +
      'perché la finestra anabolica si è rivelata molto più ampia di come è stata venduta.',

    commonBelief:
      'Se i grammi della giornata tornano, la distribuzione si sistema da sola — e serve uno ' +
      'shaker entro trenta minuti dall’ultima serie, altrimenti la seduta non conta.',

    sections: [
      {
        heading: 'Il muscolo non ha un conto, ha un interruttore',
        body: [
          'Non esiste una riserva di proteine. Il grasso ne ha una, i carboidrati una piccola, le ' +
            'proteine nessuna — ogni grammo nel vostro corpo è già un pezzo che lavora. Il corpo ' +
            'quindi non può mettere da parte l’eccedenza della cena e spenderla a colazione, come ' +
            'fa con l’energia.',
          'Quello che fa invece è commutare. Arriva un pasto, compaiono amminoacidi nel sangue, e ' +
            'se superano una certa concentrazione il macchinario che costruisce proteina muscolare ' +
            'si accende per qualche ora e poi si spegne, indipendentemente da cos’altro ci sia nel ' +
            'sangue. Sotto quella concentrazione non si accende affatto.',
          'Ecco perché il totale giornaliero inganna. Due persone con 120 g di proteine non stanno ' +
            'facendo la stessa cosa se una supera la soglia tre volte e l’altra una. La seconda ha ' +
            'mangiato lo stesso e ne ha mandata la maggior parte davanti a un interruttore spento.',
        ],
      },
      {
        heading: 'Ciò che aziona l’interruttore è la leucina, non la proteina',
        body: [
          'L’innesco è un singolo amminoacido. La leucina è il segnale che il macchinario di ' +
            'rilevamento legge; gli altri amminoacidi sono i mattoni che poi vengono usati. Un ' +
            'pasto con proteine totali sufficienti ma poca leucina dà una risposta debole — ' +
            'esattamente quello che succede quando qualcuno integra con gelatina o collagene in ' +
            'polvere e si chiede perché non cambi nulla.',
          'Per questo le proteine animali e la soia lo fanno più efficientemente della maggior ' +
            'parte delle proteine vegetali isolate: portano più leucina per grammo. Non è ' +
            'un’affermazione su quali alimenti siano migliori, e non significa che chi mangia ' +
            'vegetale non ci arrivi — significa che deve mangiarne un po’ di più, o combinare ' +
            'fonti, per arrivare allo stesso segnale.',
        ],
      },
      {
        heading: 'La finestra è una sala',
        body: [
          'La regola dei trenta minuti ha venduto moltissima polvere e non ha superato le prove. ' +
            'Quando gli studi hanno controllato l’assunzione totale della giornata — cosa che i ' +
            'primi non facevano — il vantaggio del mangiare subito dopo è in gran parte sparito. ' +
            'La maggiore sensibilità alle proteine dura ore, non minuti.',
          'È uno dei punti in cui l’evidenza si muove davvero ancora, e la tabella lo dice invece ' +
            'di nasconderlo. Quello che non è discusso è la forma del consiglio che ne deriva: ' +
            'mangiatene abbastanza, distribuitele, e lasciate stare il cronometro.',
          'L’unica situazione in cui il momento conta è quando il pasto successivo è lontano — ' +
            'allenarsi a digiuno alle sei e non mangiare fino all’una lascia un tratto molto lungo ' +
            'con l’interruttore spento. È un problema di distribuzione travestito da problema di ' +
            'orario.',
        ],
      },
      {
        heading: 'Dove la cosa si fa seria è con l’età',
        body: [
          'Il muscolo anziano risponde peggio allo stesso segnale. La soglia sale, così una ' +
            'porzione che a trent’anni avrebbe innescato una risposta a settanta non lo fa più, e ' +
            'il risultato è la lenta perdita di muscolo e la caduta che ne segue.',
          'Per questo il valore per gli anziani in tabella è più alto della raccomandazione ' +
            'generale e molto più alto dell’assunzione raccomandata. Quest’ultima previene la ' +
            'carenza. Prevenire una carenza e conservare muscolo non sono la stessa domanda, e un ' +
            'solo numero non può rispondere a entrambe.',
        ],
      },
    ],

    claims: {
      rda: {
        what: 'Assunzione raccomandata, tutti gli adulti',
        note: 'Previene la carenza. Non è un obiettivo per chi si allena',
      },
      'daily-athlete': { what: 'Adulti allenati, al giorno' },
      'per-meal': { what: 'Per pasto, per innescare una risposta' },
      'leucine-threshold': { what: 'Leucina per pasto', note: 'Circa 25–30 g di una proteina di qualità' },
      'older-adults': { what: 'Dai 65 anni circa', note: 'La soglia sale con l’età' },
      window: {
        what: 'La finestra dopo l’allenamento',
        note: 'Molto più ampia dei trenta minuti con cui è stata venduta',
      },
    },
    claimsNote:
      'Per chilogrammo di peso corporeo. Gli intervalli sono intervalli perché gli studi non ' +
      'concordano ai margini, e un numero singolo sarebbe una bugia più ordinata.',

    practical: [
      {
        title: 'Contate i pasti, non i grammi',
        detail:
          'Tre o quattro pasti che superano ciascuno la soglia battono una giornata che raggiunge ' +
            'lo stesso totale con una cena grande. Se cambiate una cosa, cambiate la colazione: è ' +
            'il pasto più spesso sotto soglia.',
      },
      {
        title: 'Mettete un numero sul pasto più piccolo',
        detail:
          'Quasi tutti sanno com’è la loro cena e non hanno idea di cosa contenga il pranzo. ' +
            'Guardate quello di cui siete meno sicuri; di solito il buco è lì.',
      },
      {
        title: 'Smettete di cronometrare e iniziate a distanziare',
        detail:
          'Tre-cinque ore fra le assunzioni di proteine, non un cronometro dopo l’ultima serie. ' +
            'L’eccezione è un intervallo lungo attorno all’allenamento — allora mangiate più ' +
            'vicino, per ragioni di distribuzione e non magiche.',
      },
      {
        title: 'Dopo i sessantacinque, puntate più in alto di proposito',
        detail:
          'La stessa porzione rende meno. È l’unico gruppo in cui la differenza fra assunzione ' +
            'raccomandata e valore da allenamento non è accademica.',
      },
    ],

    seeAlso: ['protein', 'vitamin-d', 'calcium'],

    sources: {
      'issn-protein': 'International Society of Sports Nutrition — posizione su proteine ed esercizio',
      'issn-timing': 'International Society of Sports Nutrition — posizione sul timing dei nutrienti',
      'prot-age': 'Gruppo di studio PROT-AGE — assunzione proteica nell’anziano',
      'dri-macro': 'Dietary Reference Intakes per energia, carboidrati, fibre, grassi, proteine e amminoacidi',
    },
  },

  'iron-and-endurance': {
    title: 'Restare piatti non è sempre sovrallenamento',
    short: 'Ferro e resistenza',
    lede:
      'A un’atleta le cui sedute sono diventate silenziosamente più dure si consiglia di solito ' +
      'di riposare di più. A volte è giusto. A volte la ferritina scende da quattro mesi e nessun ' +
      'riposo al mondo la tocca.',
    description:
      'Perché gli atleti di resistenza perdono ferro più in fretta di quanto lo reintegrino, cosa ' +
      'dice davvero la ferritina, e perché integrare senza esami è la mossa sbagliata.',

    commonBelief:
      'Se l’emocromo è normale, il ferro non è il mio problema — e se sono stanco, un integratore ' +
      'può solo aiutare.',

    sections: [
      {
        heading: 'Tre modi in cui l’allenamento porta via ferro',
        body: [
          'Il primo è meccanico. Ogni appoggio del piede distrugge un piccolo numero di globuli ' +
            'rossi nei capillari della pianta — emolisi da impatto — e il ferro che contenevano ' +
            'non viene recuperato del tutto. Da solo è trascurabile. Moltiplicato per cento ' +
            'chilometri a settimana, per anni, smette di esserlo.',
          'Il secondo è il sudore, che porta via ferro in quantità piccole che si sommano nelle ' +
            'sedute lunghe al caldo.',
          'Il terzo sfugge perché va contro l’intuizione. L’esercizio intenso alza l’epcidina, ' +
            'l’ormone che chiude l’assorbimento del ferro, e resta alta per ore. Quindi il pasto ' +
            'dopo una seduta dura — quello a cui un’atleta bada di più — viene assorbito peggio ' +
            'dello stesso pasto in un giorno di riposo. Il corpo perde ferro con l’allenamento e ' +
            'poi per un po’ rifiuta di prenderne altro.',
        ],
      },
      {
        heading: 'Perché un emocromo normale non prova nulla',
        body: [
          'L’emoglobina è l’ultima a cadere. Il corpo ha una riserva — la ferritina — e la ' +
            'svuoterà completamente prima di lasciar scendere l’emocromo, perché trasportare ' +
            'ossigeno è più urgente che conservare una riserva.',
          'Esiste quindi un tratto lungo, spesso di molti mesi, in cui la riserva è finita, ' +
            'l’atleta sta progressivamente peggio, e ogni esame standard torna normale. Si chiama ' +
            'carenza marziale senza anemia, ed è lo stato in cui si trovano di fatto la maggior ' +
            'parte delle persone colpite. L’anemia è la fine del processo, non il suo inizio.',
          'L’esame che lo vede è la ferritina, e va richiesta. Non è in un pannello di routine. Se ' +
            'da questa pagina portate via una cosa sola, che sia il nome di quell’esame.',
        ],
      },
      {
        heading: 'Cosa significa il numero, e la sua grande trappola',
        body: [
          'La soglia usata in medicina dello sport è più alta di quella con cui si diagnostica ' +
            'un’anemia nella popolazione generale, perché la domanda è diversa — non «questa ' +
            'persona è malata» ma «questa persona ha riserva sufficiente per allenarsi duro».',
          'La trappola è che la ferritina sale anche con l’infiammazione, e allenarsi duro è ' +
            'infiammatorio. Una ferritina prelevata la mattina dopo una seduta dura può risultare ' +
            'rassicurante mentre la riserva reale è bassa. Prelevare in un giorno di riposo, ' +
            'idealmente insieme a un marcatore di infiammazione, vale la scomodità di ' +
            'organizzarlo.',
        ],
      },
      {
        heading: 'Perché non prenderne e basta',
        body: [
          'Perché il corpo non ha modo di liberarsi di un eccesso. Regola il ferro assorbendone di ' +
            'più o di meno, e quello che entra resta. Integrare a lungo in chi non era carente ' +
            'accumula — e in una persona portatrice di un gene per l’emocromatosi, abbastanza ' +
            'comune da non saperlo, accumula in fretta.',
          'Il ferro inoltre compete con zinco e rame per le stesse vie di assorbimento, quindi mesi ' +
            'di ferro inutile possono creare una carenza diversa mentre ne trattate una che non ' +
            'avevate.',
          'Dove una carenza è confermata, la terapia è semplice e spesso spettacolare. È un ' +
            'argomento a favore degli esami, non contro l’agire.',
        ],
      },
      {
        heading: 'Il lato alimentare riguarda soprattutto con cosa lo si mangia',
        body: [
          'L’assorbimento da una fonte vegetale varia di un fattore cinque o più a seconda del ' +
            'resto del piatto. La vitamina C nello stesso pasto lo moltiplica. Tè o caffè col ' +
            'pasto lo dimezzano circa, e chi fa colazione con avena e un caffè grande sta ' +
            'annullando l’avena.',
          'La versione pratica non ha glamour: spostate il caffè di un’ora dal pasto ricco di ' +
            'ferro, e mettete qualcosa di acido nel piatto. È un intervento più grande di quasi ' +
            'ogni integratore, ed è gratis.',
        ],
      },
    ],

    claims: {
      'athlete-multiplier': {
        what: 'Atleti di resistenza, rispetto all’assunzione raccomandata',
        note: 'Più alto ancora con alimentazione vegetale',
      },
      'ferritin-floor': {
        what: 'Ferritina sotto la quale la medicina dello sport interviene',
        note: 'Più alta della soglia per diagnosticare l’anemia',
      },
      'female-endurance-prevalence': {
        what: 'Atlete di resistenza interessate',
        note: 'Carenza marziale senza anemia, non anemia',
      },
      'vitamin-c-effect': { what: 'Effetto della vitamina C sul ferro non eme' },
      'tea-effect': { what: 'Effetto di tè o caffè col pasto' },
    },
    claimsNote:
      'Il dato di prevalenza è un intervallo perché gli studi usano soglie di ferritina diverse. ' +
      'Quel disaccordo è reale ed è la ragione per cui qui compare una fascia.',

    practical: [
      {
        title: 'Chiedete la ferritina per nome',
        detail:
          'Non è in un pannello di routine, e un emocromo normale non esclude un problema. È la ' +
            'frase più utile di questa pagina.',
      },
      {
        title: 'Fate il prelievo in un giorno di riposo',
        detail:
          'La ferritina sale con l’infiammazione e allenarsi è infiammatorio: dopo una seduta dura ' +
            'il valore risulta falsamente rassicurante.',
      },
      {
        title: 'Spostate il caffè, non l’avena',
        detail:
          'Un’ora prima o dopo il pasto ricco di ferro. I tannini possono dimezzare ' +
            'l’assorbimento, che è più di quanto faccia quasi tutto ciò che si compra.',
      },
      {
        title: 'Non integrate a sensazione',
        detail:
          'Il corpo non può eliminare un eccesso, e il ferro compete con zinco e rame all’entrata. ' +
            'Prima confermare, poi trattare.',
      },
    ],

    seeAlso: ['iron', 'vitamin-c', 'zinc', 'copper'],

    sources: {
      'ods-iron': 'NIH Office of Dietary Supplements — Ferro',
      'iom-iron': 'Dietary Reference Intakes per il ferro — Institute of Medicine',
      'iron-athletes': 'Il ferro nell’atleta — una rassegna',
    },
  },

  'creatine-what-holds-up': {
    title: 'La creatina è quella che è sopravvissuta',
    short: 'Creatina',
    lede:
      'Quasi tutto quello che sta sullo scaffale degli integratori o non è stato testato o è ' +
      'stato testato e trovato scarso. Un composto economico e senza fascino viene studiato da ' +
      'trent’anni e continua a funzionare, e questo va detto chiaramente su un sito che passa la ' +
      'maggior parte del tempo a dire di lasciar perdere.',
    description:
      'Cosa fa davvero la creatina, quali dosi hanno evidenza dietro, cos’è il peso in acqua, e ' +
      'perché l’avvertenza sui reni non ha mai avuto fondamento.',

    commonBelief:
      'La creatina è roba da culturismo, è pesante per i reni, e bisogna caricare e poi ' +
      'sospendere a cicli.',

    sections: [
      {
        heading: 'Cos’è, meno esotico della confezione',
        body: [
          'La creatina è un composto che il vostro fegato già produce e i vostri muscoli già ' +
            'immagazzinano, e ne mangiate circa un grammo al giorno in carne e pesce. Integrarla ' +
            'alza le scorte muscolari del venti-quaranta per cento sopra quello che il cibo da ' +
            'solo fornisce.',
          'Quello che quelle scorte fanno è rigenerare ATP durante sforzi molto brevi e molto ' +
            'duri. I primi secondi di uno sprint o di una serie pesante vanno su un sistema di ' +
            'fosfati che si svuota in fretta e si ricarica dalla creatina. Più creatina ' +
            'immagazzinata significa ricarica più veloce, quindi una ripetizione in più, quindi — ' +
            'ripetuto per mesi — più lavoro svolto e più adattamento.',
          'Questo è tutto il meccanismo. Non costruisce muscolo direttamente; vi permette di ' +
            'allenarvi un po’ più duro, ed è l’allenamento a costruire il muscolo.',
        ],
      },
      {
        heading: 'Da dove viene l’avvertenza sui reni',
        body: [
          'La creatina alza la creatinina nel sangue, che è il marcatore con cui i laboratori ' +
            'stimano la funzione renale. Un esame di routine in chi prende creatina può quindi ' +
            'sembrare una funzione renale compromessa mentre i reni stanno benissimo — si è mosso ' +
            'il marcatore, non l’organo.',
          'Quell’artefatto è diventato un’avvertenza sanitaria e circola da venticinque anni. Studi ' +
            'controllati, anche pluriennali, non hanno trovato danno renale in adulti sani. I ' +
            'documenti di posizione sono insolitamente diretti su questo.',
          'Il caveat vero: in presenza di una malattia renale, questa è una conversazione con un ' +
            'medico e non una decisione presa da un articolo. E se fate esami del sangue, dite che ' +
            'la prendete, così nessuno insegue un numero che ha una spiegazione noiosa.',
        ],
      },
      {
        heading: 'Carico, cicli e altre cose che non servono',
        body: [
          'Il carico funziona e non è necessario. Una dose alta per cinque-sette giorni riempie le ' +
            'scorte in fretta; una dose di mantenimento le riempie altrettanto completamente in ' +
            'tre-quattro settimane. L’unico motivo per caricare è l’impazienza, e il prezzo è che ' +
            'è la fase in cui compaiono i disturbi gastrici.',
          'Sospendere a cicli non ha alcuna evidenza dietro. Le scorte semplicemente tornano al ' +
            'punto di partenza in circa un mese, il che non è un vantaggio.',
          'Anche la forma è risolta: creatina monoidrato. Le varianti più costose non l’hanno ' +
            'superata nei confronti diretti, e il monoidrato è quello su cui è stata fatta tutta ' +
            'la ricerca.',
        ],
      },
      {
        heading: 'L’aumento di peso, che è reale e non è grasso',
        body: [
          'La creatina richiama acqua dentro le cellule muscolari. La bilancia sale di uno o due ' +
            'chili nelle prime settimane e quella è acqua intracellulare, non grasso né gonfiore ' +
            'nel senso comune.',
          'Per la maggior parte delle persone è irrilevante o lievemente positivo. Per chi gareggia ' +
            'in categorie di peso o in una prova di resistenza dove ogni chilo si porta in salita, ' +
            'è un compromesso reale su cui ragionare e non da liquidare.',
        ],
      },
      {
        heading: 'Cosa non stiamo affermando',
        body: [
          'Esiste una letteratura crescente su creatina e cognizione, soprattutto in privazione di ' +
            'sonno, e una parte sembra interessante. È molto più giovane e molto più piccola di ' +
            'quella sul muscolo, e non è il motivo per prenderla.',
          'Questa pagina è sicura sui risultati di forza e massa magra perché trent’anni di studi ' +
            'concordano. Deliberatamente non lo è sul resto, e la tabella dice quale è quale.',
        ],
      },
    ],

    claims: {
      maintenance: { what: 'Dose di mantenimento', note: 'Monoidrato; non serve sospendere' },
      loading: { what: 'Fase di carico facoltativa', note: 'Più rapida, non migliore' },
      'strength-effect': { what: 'Guadagno di forza rispetto al solo allenamento' },
      'water-weight': { what: 'Aumento di peso iniziale', note: 'Acqua intracellulare, non grasso' },
      'kidney-evidence': { what: 'Danno renale in adulti sani' },
    },

    practical: [
      {
        title: 'Comprate monoidrato e nient’altro',
        detail:
          'È la forma più economica e quella usata da ogni studio. Le varianti costose non l’hanno ' +
            'battuta nel confronto diretto.',
      },
      {
        title: 'Saltate la fase di carico',
        detail:
          'Una dose di mantenimento raggiunge le stesse scorte in tre-quattro settimane ed evita i ' +
            'disturbi gastrici che il carico a volte provoca.',
      },
      {
        title: 'Prendetela ogni giorno, anche nei giorni di riposo',
        detail:
          'Agisce tenendo piene le scorte, non in acuto: il momento rispetto all’allenamento conta ' +
            'poco, la costanza molto.',
      },
      {
        title: 'Segnalatela prima di un esame del sangue',
        detail:
          'Alza la creatinina, il numero usato per stimare la funzione renale. Ditelo e nessuno ' +
            'indagherà un artefatto.',
      },
    ],

    seeAlso: ['protein', 'magnesium'],

    sources: {
      'issn-creatine': 'International Society of Sports Nutrition — posizione sulla creatina',
      'creatine-brain': 'Creatina e prestazione cognitiva — rassegna recente',
    },
  },

  'cramp-and-electrolytes': {
    title: 'Il crampo probabilmente non dipende dai vostri elettroliti',
    short: 'Crampi ed elettroliti',
    lede:
      'La spiegazione del sale e del magnesio è la cosa più creduta dello sport amatoriale, e le ' +
      'prove che la sostengono sono molto più sottili della sicurezza con cui viene ripetuta.',
    description:
      'Cosa dice l’evidenza sul crampo muscolare associato all’esercizio, perché gli integratori ' +
      'di magnesio non lo prevengono, e cosa invece sembra funzionare.',

    commonBelief:
      'Un crampo vuol dire che sono disidratato o che mi mancano sale e magnesio. Una compressa ' +
      'di magnesio prima di dormire e passa.',

    sections: [
      {
        heading: 'La teoria che tutti conoscono, e il suo problema',
        body: [
          'La spiegazione di disidratazione ed elettroliti dice che sudare esaurisce liquidi e ' +
            'sodio, che il liquido attorno al muscolo cambia, e che il muscolo diventa ' +
            'ipereccitabile. È plausibile, si accorda al fatto che i crampi arrivino nelle gare ' +
            'calde, ed è la spiegazione standard da decenni.',
          'Il guaio è che non ha retto bene alle verifiche. Gli studi che confrontano chi ha crampi ' +
            'e chi no nella stessa gara in genere non hanno trovato la differenza di idratazione o ' +
            'di sodio nel sangue di cui la teoria ha bisogno. I crampi arrivano anche col fresco, ' +
            'nei nuotatori, e in muscoli che non erano quelli che lavoravano di più.',
          'E c’è un problema più semplice: il crampo di solito colpisce un gruppo muscolare mentre ' +
            'il resto del corpo, che ha bevuto lo stesso liquido e perso lo stesso sale, non ha ' +
            'nulla. Una carenza di tutto il corpo spiega male un evento locale.',
        ],
      },
      {
        heading: 'La spiegazione che si adatta meglio',
        body: [
          'La spiegazione oggi prevalente è neuromuscolare e non chimica. Quando un muscolo si ' +
            'affatica, i riflessi che lo governano si sbilanciano — il segnale che gli dice di ' +
            'contrarsi resta alto mentre quello che gli dice di rilasciare si indebolisce — e il ' +
            'muscolo si blocca.',
          'Questa spiegazione prevede ciò con cui quella degli elettroliti fatica: che il crampo ' +
            'arrivi alla fine degli sforzi duri e non all’inizio, nei muscoli precisamente ' +
            'impegnati, in posizione accorciata, e che ceda allo stiramento. Stirare non fa nulla ' +
            'al vostro sodio ematico e tutto all’anello riflesso, e stirare è ciò che davvero ' +
            'ferma un crampo sul momento.',
          'Si accorda anche al miglior predittore trovato finora, che non è affatto un valore ' +
            'ematico: aver già avuto crampi, e essere partiti più forte del solito.',
        ],
      },
      {
        heading: 'Dove entra il magnesio, e perché quasi mai',
        body: [
          'Il magnesio partecipa davvero al rilassamento muscolare, ed è per questo che la storia ' +
            'è così convincente. Ma gli studi non sostengono l’integrazione per prevenire i crampi ' +
            '— in persone senza carenza, le revisioni hanno ripetutamente concluso che non c’è ' +
            'effetto rilevante, e l’effetto sui crampi notturni negli anziani è al massimo piccolo.',
          'È un’affermazione più stretta di «il magnesio non serve». Se la vostra assunzione è ' +
            'davvero bassa, correggerla vale la pena per ragioni che con i crampi non c’entrano, e ' +
            'circa metà degli adulti è sotto il valore di riferimento. Correggere una carenza vera ' +
            'e trattare un sintomo sono progetti diversi.',
        ],
      },
      {
        heading: 'A cosa serve davvero il sodio',
        body: [
          'Reintegrare sodio conta, ma per un altro problema. Nelle prove lunghe, bere grandi ' +
            'volumi di acqua pura mentre si suda sale può diluire il sodio ematico — iponatriemia ' +
            '— che è pericolosa in un modo in cui un crampo non lo è.',
          'L’intervallo di sodio nel sudore in tabella è enorme, ed è il risultato onesto: le ' +
            'persone differiscono di un fattore dieci in quanto salato è il loro sudore. Il che ' +
            'rende i consigli generici su quanto sale prendere durante l’esercizio quasi vuoti — e ' +
            'la pastiglia di sale che ha trasformato un corridore non farà nulla per il successivo.',
        ],
      },
    ],

    claims: {
      'sweat-sodium': {
        what: 'Sodio nel sudore, fra individui',
        note: 'Un fattore dieci, per cui i consigli generici falliscono',
      },
      'sweat-rate': { what: 'Tasso di sudorazione durante l’esercizio' },
      'magnesium-evidence': {
        what: 'Integratori di magnesio per prevenire i crampi',
        note: 'In persone senza carenza',
      },
      'weight-loss-limit': {
        what: 'Perdita di liquidi oltre la quale la prestazione cala',
        note: 'Un riferimento, non un precipizio',
      },
    },

    practical: [
      {
        title: 'Stiratelo, non bevetelo',
        detail:
          'Lo stiramento passivo del muscolo che ha il crampo è l’unico intervento che chiude un ' +
            'episodio in modo affidabile, e agisce attraverso il riflesso e non attraverso il ' +
            'sangue.',
      },
      {
        title: 'Guardate il passo prima degli integratori',
        detail:
          'Il predittore più forte trovato finora è partire più forte di quanto l’allenamento ' +
            'sostenga. È più sgradevole da sentire di «prendi il magnesio» ed è più utile.',
      },
      {
        title: 'Correggete una carenza vera di magnesio per sé',
        detail:
          'Circa metà degli adulti è sotto il valore di riferimento, e vale la pena correggerlo. ' +
            'Solo, non aspettatevi una cura per i crampi.',
      },
      {
        title: 'Sulle distanze lunghe, imparate il vostro sudore',
        detail:
          'Con un fattore dieci fra le persone, l’unico numero utile è il vostro. Pesatevi prima e ' +
            'dopo una seduta lunga al caldo.',
      },
    ],

    seeAlso: ['magnesium', 'potassium', 'calcium'],

    sources: {
      'acsm-fluid': 'American College of Sports Medicine — posizione su esercizio e reintegro dei liquidi',
      'cochrane-cramp': 'Magnesio per i crampi muscolari — revisione sistematica',
      'cramp-neuro': 'Controllo neuromuscolare alterato e crampo associato all’esercizio',
    },
  },

  'vitamin-d-and-performance': {
    title: 'La vitamina D corregge una carenza; non concede un vantaggio',
    short: 'Vitamina D e prestazione',
    lede:
      'Circa metà degli atleti testati è insufficiente, e correggerlo vale la pena. Quello che ' +
      'non ne consegue è ciò che sta sull’etichetta: che di più, in chi è già a posto, faccia ' +
      'qualcosa.',
    description:
      'Perché gli atleti sono così spesso bassi di vitamina D, cosa fa e cosa non fa correggerla ' +
      'per la prestazione, e dove sta il rischio vero dell’eccesso.',

    commonBelief:
      'La vitamina D migliora forza e immunità, quindi più è meglio, e una grossa dose ' +
      'settimanale è un’assicurazione ragionevole.',

    sections: [
      {
        heading: 'Perché gli atleti sono bassi così spesso',
        body: [
          'Perché quasi tutto lo sport si fa al chiuso, o presto, o coperti. La vitamina D si ' +
            'forma nella pelle dai raggi UVB, e gli UVB non passano attraverso vetro, crema solare ' +
            'o vestiti. Chi si allena in piscina, in palestra o in palazzetto d’inverno ha ' +
            'all’incirca la stessa esposizione di un impiegato.',
          'La latitudine fa il resto. Sopra i trentasette gradi circa, il sole invernale è troppo ' +
            'basso per produrne quantità utili per diversi mesi. La pelle più scura richiede ' +
            'esposizioni più lunghe per la stessa sintesi, quindi lo stesso orario rende meno.',
          'Il cibo partecipa a malapena. Fuori dal pesce grasso, dal tuorlo e da ciò che è stato ' +
            'fortificato di proposito, non è un nutriente che la dieta fornisce — per questo si ' +
            'comporta diversamente da tutto il resto su questo sito.',
        ],
      },
      {
        heading: 'Cosa fa correggerla',
        body: [
          'In chi era carente, ripristinare la vitamina D migliora la funzione muscolare e riduce ' +
            'il tasso di fratture da stress. Quell’effetto è reale e vale averlo.',
          'In chi era già a posto, aggiungerne non ha prodotto benefici prestativi negli studi ' +
            'controllati. È la forma della maggior parte delle storie sui micronutrienti e vale la ' +
            'pena interiorizzarla: la curva è un plateau, non una salita. Togliere un limite aiuta; ' +
            'aggiungere eccedenza a un sistema che non era limitato, no.',
        ],
      },
      {
        heading: 'La metà ossea, che conta più di quella prestativa',
        body: [
          'La vitamina D governa quanto calcio assorbite. Un’atleta con vitamina D bassa può ' +
            'mangiare calcio in abbondanza e comunque non portarlo nell’osso — e l’osso sotto ' +
            'carico ripetuto è proprio il tessuto che non può permetterselo.',
          'Per questo il discorso sulla vitamina D e quello sulle fratture da stress sono lo stesso ' +
            'discorso, e per questo appartiene accanto alla disponibilità energetica e non accanto ' +
            'agli integratori.',
        ],
      },
      {
        heading: 'L’unico micronutriente in cui tirare a indovinare è davvero rischioso',
        body: [
          'La vitamina D è liposolubile e viene immagazzinata anziché eliminata, il che la rende ' +
            'uno dei pochi in cui integrare con leggerezza può fare danni veri. Dosi alte protratte ' +
            'alzano il calcio nel sangue, e questo danneggia reni e vasi.',
          'Anche le dosi singole molto grandi — la megadose mensile che sembra efficiente — hanno ' +
            'reso male negli studi, e alcuni hanno mostrato più cadute e fratture anziché meno. ' +
            'Quotidiano e moderato batte mensile ed eroico.',
          'Come per il ferro, la mossa sensata è un esame del sangue. Costa poco, è l’unico modo di ' +
            'sapere da che parte del plateau siete, e trasforma una supposizione in una decisione.',
        ],
      },
    ],

    claims: {
      'athlete-insufficiency': {
        what: 'Atleti risultati insufficienti',
        note: 'Aggregato fra studi; più alto alle latitudini settentrionali',
      },
      sufficiency: { what: 'Livello ematico considerato sufficiente' },
      'performance-effect': {
        what: 'Beneficio prestativo',
        note: 'Dal correggere una carenza, non dall’aggiungere eccedenza',
      },
      'upper-limit': { what: 'Limite superiore per gli adulti' },
    },

    practical: [
      {
        title: 'Misurare invece di supporre, in entrambe le direzioni',
        detail:
          'Metà degli atleti è bassa e metà no, e non c’è nessun sintomo che li separi. Un esame ' +
            'trasforma una supposizione in una decisione.',
      },
      {
        title: 'Quotidiano e moderato, non mensile ed eroico',
        detail:
          'Le dosi singole grandi hanno reso peggio negli studi rispetto a quelle costanti — anche ' +
            'sugli esiti che dovevano migliorare.',
      },
      {
        title: 'Trattatela prima come una questione ossea',
        detail:
          'L’effetto sull’assorbimento del calcio è quello che conta di più sotto carico ripetuto. ' +
            'Appartiene allo stesso discorso delle fratture da stress.',
      },
    ],

    seeAlso: ['vitamin-d', 'calcium', 'magnesium'],

    sources: {
      'ods-vitd': 'NIH Office of Dietary Supplements — Vitamina D',
      'vitd-athletes': 'Stato di vitamina D negli atleti — revisione sistematica e metanalisi',
    },
  },

  'hidden-hunger': {
    title: 'Fame nascosta: mangiare troppo e restare comunque a corto',
    short: 'Fame nascosta',
    lede:
      'La parola malnutrizione evoca un’immagine di scarsità. La sua forma più comune nei paesi ' +
      'ricchi somiglia al contrario — cibo in abbondanza, energia in abbondanza, e un profilo ' +
      'nutrizionale bucato.',
    description:
      'Perché si possono mangiare calorie in abbondanza e restare comunque a corto di ferro, ' +
      'magnesio o calcio — cos’è la fame nascosta, chi colpisce, e come trovarla.',

    commonBelief:
      'La carenza c’è dove non c’è abbastanza da mangiare. Se io mangio in abbondanza — anzi, ' +
      'troppo — non è un mio problema.',

    sections: [
      {
        heading: 'Due fami diverse',
        body: [
          'Energia e nutrienti arrivano nello stesso boccone e il corpo li contabilizza ' +
            'separatamente. Si può soddisfare l’una e mancare l’altro, e i due fallimenti non si ' +
            'somigliano affatto: la mancanza di energia si annuncia come fame, la mancanza di ' +
            'magnesio non si annuncia praticamente in alcun modo per anni.',
          'Quel silenzio è tutta la difficoltà. Non esiste un recettore per lo stato del ferro. ' +
            'Nulla fa venire voglia di zinco. Il corpo lascerà scendere un minerale a lungo ' +
            'mantenendo normale il valore nel sangue prelevandolo altrove — dall’osso, di solito — ' +
            'e il primo sintomo è spesso la conseguenza anziché la carenza.',
        ],
      },
      {
        heading: 'Come un piatto pieno finisce vuoto',
        body: [
          'Il meccanismo è diluizione, non assenza. Un alimento molto trasformato di solito ' +
            'mantiene la sua energia e perde parte di ciò che l’accompagnava: la macinazione toglie ' +
            'germe e crusca, e con essi se ne vanno circa quattro quinti del suo magnesio. La ' +
            'raffinazione fa lo stesso agli oli. Nulla di questo è un complotto — è ciò che rende ' +
            'il cibo stabile ed economico — ma il risultato è un’alimentazione densa di energia e ' +
            'povera di nutrienti.',
          'Poi l’aritmetica gioca contro. I fabbisogni sono più o meno fissi mentre l’appetito si ' +
            'sazia con l’energia: più la vostra energia viene da alimenti che portano poco altro, ' +
            'meno spazio resta per quelli che portano tutto il resto.',
          'Per questo il quadro si presenta come sovrappeso e carenza insieme, il che suona come ' +
            'una contraddizione e non lo è. Sono due conti distinti, e solo uno è in attivo.',
        ],
      },
      {
        heading: 'Chi riguarda davvero',
        body: [
          'I dati delle indagini nazionali rispondono a questo insolitamente bene, perché misurano ' +
            'ciò che le persone hanno mangiato e non ciò che dicono di mangiare. Negli Stati Uniti ' +
            'un breve elenco di nutrienti compare ripetutamente sotto il valore di riferimento in ' +
            'tutta la popolazione, non in un angolo di essa.',
          'Calcio e magnesio spiccano, e la ragione è la stessa: entrambi venivano in gran parte da ' +
            'gruppi alimentari che le persone hanno silenziosamente mangiato meno — i latticini per ' +
            'l’uno, i cereali integrali e i legumi per l’altro. Anche la vitamina D è nell’elenco, ' +
            'ma per un motivo diverso, dato che il cibo non è mai stato la sua fonte principale.',
          'Niente di tutto ciò significa che chiunque legga sia carente. Sotto il valore di ' +
            'riferimento non è lo stesso che carente — il riferimento è fissato per coprire quasi ' +
            'tutti, quindi finirci sotto significa «forse a corto», non «sicuramente malato». Quel ' +
            'che significa è che il presupposto di stare bene perché c’è cibo in casa non regge.',
        ],
      },
      {
        heading: 'Che fare, dato che nulla di questo si vede',
        body: [
          'La prima mossa onesta è smettere di indovinare. Una stanchezza vaga è compatibile con ' +
            'una dozzina di carenze, con un sonno cattivo, con una tiroide pigra e con niente del ' +
            'tutto — e scegliere un integratore dallo scaffale per far combaciare una sensazione è ' +
            'il modo in cui si finisce a prendere zinco per un anno e a crearsi un problema di ' +
            'rame.',
          'La mossa utile è scoprire cosa mangiate davvero, nel senso noioso — per una settimana, ' +
            'non per sempre. La maggior parte dei buchi in un’alimentazione reale è strutturale: un ' +
            'intero gruppo alimentare andato via in silenzio, un pasto al giorno che non ' +
            'contribuisce, una sostituzione fatta per una buona ragione che si è portata via ' +
            'qualcosa.',
          'E dove una carenza sembra reale, la risposta è un esame del sangue e un medico, non un ' +
            'articolo. Non è una premessa di comodo. Il ferro in particolare è davvero pericoloso ' +
            'da integrare alla cieca, perché il corpo non ha modo di eliminare un eccesso.',
        ],
      },
    ],

    claims: {
      'global-affected': {
        what: 'Persone interessate nel mondo',
        note: 'Il dato dell’OMS per le carenze di micronutrienti',
      },
      'us-shortfall-nutrients': {
        what: 'Nutrienti assunti in quantità insufficiente nella popolazione USA',
        note: 'Così definiti dal comitato per le linee guida alimentari',
      },
      'calcium-shortfall': { what: 'Adulti statunitensi sotto il riferimento per il calcio' },
      'magnesium-shortfall': { what: 'Adulti statunitensi sotto il riferimento per il magnesio' },
    },
    claimsNote:
      'Sotto il valore di riferimento non è lo stesso che carente. Il riferimento è fissato ' +
      'abbastanza in alto da coprire quasi tutti, quindi finirci sotto significa «forse a corto» e ' +
      'non «sicuramente malato».',

    practical: [
      {
        title: 'Guardate una settimana, non un giorno',
        detail:
          'Un giorno vi parla di un giorno. Una settimana mostra la struttura: il pasto che non ' +
            'contribuisce, il gruppo andato via senza essere sostituito.',
      },
      {
        title: 'Trovate la sostituzione che vi è costata qualcosa',
        detail:
          'La maggior parte dei buchi risale a una singola sostituzione fatta per una buona ' +
            'ragione — via i latticini per il lattosio, via il pane per i carboidrati, via la ' +
            'carne per etica — dove non è entrato nulla a portare ciò che se n’è andato.',
      },
      {
        title: 'Non trattate una sensazione con un integratore',
        detail:
          'La stanchezza combacia con troppe cause. Se una carenza sembra reale, un esame costa ' +
            'meno di un anno della pillola sbagliata — e col ferro è la differenza fra aiutare e ' +
            'fare danno.',
      },
    ],

    seeAlso: ['magnesium', 'calcium', 'iron', 'vitamin-d'],

    sources: {
      'who-micronutrient': 'Organizzazione Mondiale della Sanità — micronutrienti',
      dgac: 'Dietary Guidelines for Americans — rapporto scientifico',
      nhanes: 'Indagine nazionale statunitense su salute e nutrizione (NHANES)',
    },
  },

  'restriction-and-the-binge-cycle': {
    title: 'L’abbuffata non è il fallimento. È la seconda metà della restrizione.',
    short: 'Restrizione e abbuffate',
    lede:
      'Le persone lo descrivono come perdita di controllo, e la sequenza non comincia quasi mai ' +
      'lì. Comincia giorni prima, con una regola — e la perdita di controllo è ciò che un corpo ' +
      'fa alla fine di una regola, in modo abbastanza affidabile da essere stato dimostrato in ' +
      'laboratorio ottant’anni fa.',
    description:
      'Perché una restrizione severa produce abbuffate come risposta fisiologica e non come ' +
      'cedimento della volontà — cosa mostrò l’esperimento del Minnesota, e quando questo smette ' +
      'di essere uno schema e diventa un disturbo.',

    commonBelief:
      'Ho tenuto bene per quattro giorni e poi ho mollato tutto. Con più disciplina il quinto ' +
      'giorno sarebbe stato come gli altri.',

    sections: [
      {
        heading: 'Cosa dimostrarono trentasei uomini in Minnesota',
        body: [
          'Nel 1944 un gruppo di volontari sani — selezionati per la loro stabilità, in parte ' +
            'proprio per quella — accettò di mangiare circa metà del proprio fabbisogno per sei ' +
            'mesi, perché dei ricercatori imparassero a rialimentare un’Europa affamata. Ciò per ' +
            'cui lo studio è ricordato non è il protocollo di rialimentazione.',
          'Gli uomini divennero ossessionati dal cibo. Leggevano libri di cucina per piacere. ' +
            'Collezionavano ricette, accumulavano posate, tiravano per le lunghe i pasti, ' +
            'parlavano di mangiare e di poco altro. Divennero irritabili, chiusi, incapaci di ' +
            'concentrarsi. Diversi svilupparono episodi di alimentazione incontrollata che li ' +
            'sgomentarono, e parte di quel comportamento persistette per mesi dopo il ritorno a ' +
            'un’alimentazione normale.',
          'Non erano persone con un rapporto difficile col cibo. Non avevano alcun rapporto ' +
            'degno di nota col cibo finché la restrizione non ne creò uno. È questo il risultato: ' +
            'il comportamento fu fabbricato dalla privazione, in uomini comuni, di proposito.',
        ],
      },
      {
        heading: 'Perché il corpo tratta una dieta come un’emergenza',
        body: [
          'Non ha modo di distinguere una scarsità che avete scelto da una che non avete scelto. I ' +
            'segnali che legge sono quanta energia entra, quanta è immagazzinata e da quanto dura ' +
            'il divario — e nessuno di questi trasporta la vostra intenzione.',
          'Quindi fa ciò che ha sempre fatto davanti a una scarsità. L’attenzione si restringe sul ' +
            'cibo, perché notare il cibo è come sopravvive un animale affamato. I segnali di sazietà ' +
            'si indeboliscono. La ricompensa legata al mangiare sale, così lo stesso pasto è più ' +
            'irresistibile di una settimana fa. Non è debolezza che si rivela; è un sistema che ' +
            'funziona esattamente come è costruito, in qualcuno che ha deciso che il sistema è il ' +
            'nemico.',
          'E aumenta invece di stabilizzarsi. Più lunga e dura la restrizione, più forte la spinta ' +
            '— ed è per questo che lo schema finisce così spesso in un episodio del tutto ' +
            'sproporzionato rispetto alla regola che l’ha avviato.',
        ],
      },
      {
        heading: 'La parte che ne fa un ciclo',
        body: [
          'Ciò che trasforma un episodio in un anello è quello che viene dopo. L’episodio viene ' +
            'letto come prova di un difetto caratteriale, e la risposta a un difetto caratteriale ' +
            'è una regola più severa. La regola più severa produce una spinta più forte. La spinta ' +
            'più forte produce un episodio più grande, letto come ulteriore prova.',
          'Ogni giro rende il successivo più probabile, e la persona che ci sta dentro vive tutto ' +
            'questo come un’informazione su di sé anziché come una risposta prevedibile a ciò che ' +
            'continua a fare.',
          'Vale la pena dirlo chiaramente, perché è la parte che si sente di rado: che sia ' +
            'prevedibile non lo rende un problema piccolo. Prevedibile e grave non sono opposti.',
        ],
      },
      {
        heading: 'Quando questo smette di essere uno schema',
        body: [
          'C’è una linea, e non la traccia quanto qualcuno mangia in un episodio. La traccia ciò ' +
            'che il mangiare sta facendo al resto di una vita.',
          'Alcuni segnali che è stata superata: episodi accompagnati da un reale senso di perdita ' +
            'di controllo e non da un semplice eccesso; qualsiasi cosa fatta dopo per compensare — ' +
            'vomito, lassativi, esercizio punitivo, digiuno il giorno dopo; cibo o forma del corpo ' +
            'che occupano tanta attenzione da far soffrire lavoro, studio o relazioni; e la ' +
            'segretezza, uno dei segnali più affidabili di tutti.',
          'Nulla di questo è una diagnosi, e questa pagina non può farne. È il punto in cui il ' +
            'passo giusto successivo smette di essere un’altra strategia alimentare e diventa una ' +
            'persona — un medico di famiglia, uno psicologo, una linea di ascolto. I disturbi del ' +
            'comportamento alimentare hanno la mortalità più alta fra le malattie psichiatriche e ' +
            'rispondono bene alle cure, ed entrambe le metà di questa frase sono ragioni per ' +
            'chiamare presto anziché tardi.',
        ],
      },
      {
        heading: 'Cosa significa per qualunque tracciamento, incluso il nostro',
        body: [
          'Facciamo un’app che conta, quindi qui abbiamo un interesse evidente e dovremmo ' +
            'dichiararlo. Misurare quello che si mangia serve davvero ad alcune persone e fa ' +
            'davvero male ad altre, e in quale gruppo siate non lo decide quanto siete ' +
            'disciplinati.',
          'Se un numero su uno schermo dà il tono alla vostra giornata, se avete iniziato a ' +
            'mangiare attorno all’app invece che a usarla, o se vedere un totale vi fa venire ' +
            'voglia di compensare — non è un segnale per tracciare con più cura. Chiudetela. Quel ' +
            'consiglio ci costa un’utente ed è il consiglio giusto.',
        ],
      },
    ],

    claims: {},

    practical: [
      {
        title: 'Notate quale metà del ciclo state trattando',
        detail:
          'Quasi ogni piano che si prova dopo un episodio punta all’episodio. L’episodio è la ' +
            'seconda metà. La prima è la regola che l’ha preceduto, ed è ancora in piedi.',
      },
      {
        title: 'La segretezza è il segnale da prendere sul serio',
        detail:
          'Di tutto quello che c’è in questa pagina, nasconderlo è il marcatore che più ' +
            'affidabilmente separa un periodo difficile da qualcosa che ha bisogno di aiuto. Se ' +
            'nessuno nella vostra vita sa che sta succedendo, quella è un’informazione.',
      },
      {
        title: 'Chiedete a qualcuno il cui mestiere è questo',
        detail:
          'Non un articolo di nutrizione e non un’app. Il medico di famiglia è una prima porta ' +
            'ragionevole e questa conversazione l’ha già fatta.',
      },
    ],

    seeAlso: ['protein', 'magnesium', 'iron'],

    sources: {
      minnesota: 'L’esperimento del Minnesota sulla fame — Keys et al. e analisi successive',
      'nice-eating': 'Linea guida NICE NG69 — disturbi alimentari: riconoscimento e trattamento',
      beat: 'Beat — supporto e linee di ascolto per i disturbi alimentari',
    },
  },

  'tracking-without-obsession': {
    title: 'Facciamo un’app di tracciamento, quindi leggete questa parte con scetticismo',
    short: 'Tracciare senza ossessione',
    lede:
      'Misurare quello che si mangia aiuta molto alcune persone e ne danneggia altre, e in quale ' +
      'gruppo siate non lo decide quanto siete assennati. Abbiamo un interesse evidente nella ' +
      'prima risposta — ed è esattamente per questo che esiste questa pagina.',
    description:
      'Quando tracciare il cibo aiuta, quando diventa dannoso, i segnali che è successo, e perché ' +
      'a volte il consiglio giusto è smettere.',

    commonBelief:
      'Tracciare è solo informazione. Più dati su quello che mangio possono solo aiutarmi.',

    sections: [
      {
        heading: 'In cosa è davvero bravo',
        body: [
          'Nello scoprire cosa mangiate davvero, cosa che quasi nessuno sa. Le stime dei propri ' +
            'consumi fatte a memoria sbagliano di molto in entrambe le direzioni, e gli errori non ' +
            'sono casuali: si concentrano proprio attorno alle cose che si ha meno voglia di ' +
            'guardare.',
          'È anche bravo a rispondere a una domanda precisa. Dove mi manca la proteina? Mi avvicino ' +
            'anche solo a un ferro sufficiente? Cosa c’è davvero nel pranzo che mangio quattro ' +
            'volte a settimana? Quelle domande hanno risposte, le risposte sono utili, e una volta ' +
            'ottenute non serve richiedere.',
          'È questa la forma del tracciamento nella sua versione migliore: un’indagine breve con un ' +
            'inizio e una fine. Quindici giorni di misurazione per trovare dove sono i buchi ' +
            'valgono molto più di un anno di registrazione per abitudine.',
        ],
      },
      {
        heading: 'Come si guasta',
        body: [
          'Una misura diventa un obiettivo, e un obiettivo diventa una regola. Quella progressione ' +
            'non è inevitabile ed è frequente, e di solito avviene senza alcun momento in cui ' +
            'qualcuno decide di permetterla.',
          'I segnali sono riconoscibili. Mangiare attorno all’app invece di usarla — scegliere ' +
            'l’alimento che si registra pulito invece di quello che sta bene nel pasto. Ansia ' +
            'all’idea di mangiare qualcosa che non si può misurare, cosa che in silenzio esclude ' +
            'la cucina degli altri e la maggior parte dei ristoranti. Un numero a fine giornata ' +
            'che dà il tono alla serata. L’impulso a compensare dopo aver visto un totale.',
          'E quello che conta di più: registrare qualcosa e poi mangiare diversamente per via di ' +
            'ciò che ha detto lo schermo, anziché per fame, sazietà o programma.',
        ],
      },
      {
        heading: 'Chi probabilmente non dovrebbe farlo',
        body: [
          'Chiunque abbia una storia di disturbo alimentare. Non è una cautela di forma — ' +
            'l’automonitoraggio alimentare è associato a esiti peggiori in questo gruppo, e le ' +
            'linee guida cliniche in genere lo sconsigliano al di fuori di un percorso di cura ' +
            'seguito.',
          'Chiunque per cui i numeri siano già diventati il punto. Se un tentativo precedente è ' +
            'finito col tracciamento che prendeva il sopravvento, l’app non è diversa stavolta.',
          'E gli adolescenti, per cui il rapporto fra rischio e beneficio è cattivo e il momento ' +
            'dello sviluppo pure. Costruiamo per adulti per questa ragione.',
        ],
      },
      {
        heading: 'Cosa preferiremmo',
        body: [
          'Tracciate due settimane, con una domanda in testa. Rispondetele. Smettete. Tornate se ' +
            'cambia la domanda o cambia l’alimentazione.',
          'Usate l’app per consultare singoli alimenti senza registrare nulla — la maggior parte ' +
            'del valore sta nel profilo nutrizionale di un alimento e non nel diario, e quell’uso ' +
            'non porta nessuno dei rischi descritti sopra.',
          'E se qualcuno dei segnali di questa pagina vi descrive, chiudetela. Quel consiglio ci ' +
            'costa un’utente, e resta quello giusto. Un’app che potesse difendersi solo tacendo ' +
            'questo non varrebbe la pena di essere costruita.',
        ],
      },
    ],

    claims: {},

    practical: [
      {
        title: 'Dategli una domanda e una data di fine',
        detail:
          'Due settimane per trovare dove sono i buchi battono un anno di registrazione per ' +
            'abitudine, ed è lì che sta quasi tutto il valore.',
      },
      {
        title: 'Guardate se state mangiando attorno all’app',
        detail:
          'Scegliere un cibo perché si registra pulito anziché perché sta bene nel pasto è il primo ' +
            'segnale affidabile che lo strumento è diventato il fine.',
      },
      {
        title: 'Usate la consultazione senza il diario',
        detail:
          'La cosa più utile qui è il profilo nutrizionale di un alimento. Non porta nessuno dei ' +
            'rischi della registrazione quotidiana.',
      },
      {
        title: 'Con una storia alle spalle, non cominciate',
        detail:
          'L’automonitoraggio è associato a esiti peggiori quando c’è una storia di disturbo ' +
            'alimentare. È un’indicazione, non una cautela.',
      },
    ],

    seeAlso: ['protein', 'iron', 'calcium'],

    sources: {
      'tracking-review': 'Automonitoraggio alimentare ed esiti — revisione sistematica',
      orthorexia: 'Ortoressia nervosa e tecnologie di monitoraggio della salute — una rassegna',
      'nice-eating': 'Linea guida NICE NG69 — disturbi alimentari: riconoscimento e trattamento',
    },
  },
};

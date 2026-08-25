import { LocalisedGuide } from '../guide-types';

/**
 * Les huit guides principaux, en français.
 *
 * Huit et non vingt : les articles anglais sont en ligne depuis peu et nous ne
 * savons pas encore quels sujets sont cherchés. Six sont là pour la demande de
 * recherche ; les deux derniers pour une autre raison, à savoir qu’ils sont les
 * seuls susceptibles d’atteindre quelqu’un dans un mauvais moment.
 */
export const GUIDES_CORE_FR: Readonly<Record<string, LocalisedGuide>> = {
  'protein-per-meal': {
    title: 'Vous mangez probablement assez de protéines et en gaspillez l’essentiel',
    short: 'Protéines par repas',
    lede:
      'Le total de la journée est le chiffre que tout le monde suit et celui qui compte le moins. ' +
      'Le muscle se construit en réponse à des repas précis, et une journée qui atteint son ' +
      'objectif en une fois n’est pas la même journée qu’une qui l’atteint en trois.',
    description:
      'Pourquoi les protéines agissent par repas et non par jour, ce qu’est le seuil de leucine, ' +
      'et pourquoi la fenêtre anabolique s’est révélée bien plus large qu’annoncé.',

    commonBelief:
      'Si les grammes de la journée y sont, la répartition se règle toute seule — et il faut un ' +
      'shaker dans les trente minutes après la dernière série, sinon la séance ne compte pas.',

    sections: [
      {
        heading: 'Le muscle n’a pas un compte, il a un interrupteur',
        body: [
          'Il n’existe pas de réserve de protéines. La graisse en a une, les glucides une petite, ' +
            'les protéines aucune — chaque gramme dans votre corps est déjà une pièce qui ' +
            'travaille. Le corps ne peut donc pas mettre de côté l’excédent du dîner et le ' +
            'dépenser au petit-déjeuner, comme il le fait avec l’énergie.',
          'Ce qu’il fait à la place, c’est commuter. Un repas arrive, des acides aminés ' +
            'apparaissent dans le sang, et s’ils franchissent une certaine concentration la ' +
            'machinerie qui construit la protéine musculaire s’allume pour quelques heures puis ' +
            's’éteint, quoi qu’il reste dans le sang. En dessous de cette concentration, elle ne ' +
            's’allume pas du tout.',
          'C’est pour cela que le total quotidien induit en erreur. Deux personnes à 120 g de ' +
            'protéines ne font pas la même chose si l’une franchit le seuil trois fois et l’autre ' +
            'une. La seconde a mangé la même chose et en a envoyé l’essentiel devant un ' +
            'interrupteur éteint.',
        ],
      },
      {
        heading: 'Ce qui actionne l’interrupteur, c’est la leucine',
        body: [
          'Le déclencheur est un seul acide aminé. La leucine est le signal que lit la machinerie ' +
            'de détection ; les autres acides aminés sont les briques ensuite utilisées. Un repas ' +
            'avec assez de protéines totales mais peu de leucine donne une réponse faible — ce qui ' +
            'arrive exactement quand quelqu’un complète avec de la gélatine ou du collagène en ' +
            'poudre et s’étonne que rien ne change.',
          'C’est pourquoi les protéines animales et le soja font cela plus efficacement que la ' +
            'plupart des protéines végétales isolées : elles portent plus de leucine par gramme. ' +
            'Ce n’est pas une affirmation sur la qualité des aliments, et cela ne veut pas dire ' +
            'qu’une personne qui mange végétal n’y arrive pas — cela veut dire qu’elle doit en ' +
            'manger un peu plus, ou combiner des sources, pour arriver au même signal.',
        ],
      },
      {
        heading: 'La fenêtre est une salle',
        body: [
          'La règle des trente minutes a vendu énormément de poudre et n’a pas survécu aux essais. ' +
            'Dès que les études ont contrôlé l’apport total de la journée — ce que les premières ' +
            'ne faisaient pas —, l’avantage de manger immédiatement après a largement disparu. La ' +
            'sensibilité accrue aux protéines dure des heures, pas des minutes.',
          'C’est l’un des points où les données bougent encore vraiment, et le tableau le dit au ' +
            'lieu de le masquer. Ce qui n’est pas débattu, c’est la forme du conseil qui en ' +
            'découle : mangez-en assez, répartissez, et laissez tomber le chronomètre.',
          'Le seul cas où le moment compte vraiment, c’est quand le repas suivant est loin — ' +
            's’entraîner à jeun à six heures et ne rien manger avant treize heures laisse une ' +
            'longue plage avec l’interrupteur éteint. C’est un problème de répartition déguisé en ' +
            'problème d’horaire.',
        ],
      },
      {
        heading: 'Là où cela devient sérieux, c’est avec l’âge',
        body: [
          'Le muscle âgé répond moins bien au même signal. Le seuil monte, si bien qu’une portion ' +
            'qui aurait déclenché une réponse à trente ans ne le fait plus à soixante-dix — et le ' +
            'résultat est la perte lente de muscle, puis la chute qui suit.',
          'C’est pourquoi la valeur pour les personnes âgées dans le tableau est plus haute que la ' +
            'recommandation générale et bien plus haute que l’apport conseillé. Celui-ci prévient ' +
            'la carence. Prévenir une carence et conserver du muscle ne sont pas la même question, ' +
            'et un seul chiffre ne peut pas répondre aux deux.',
        ],
      },
    ],

    claims: {
      rda: {
        what: 'Apport conseillé, tous adultes',
        note: 'Prévient la carence. Pas un objectif pour qui s’entraîne',
      },
      'daily-athlete': { what: 'Adultes entraînés, par jour' },
      'per-meal': { what: 'Par repas, pour déclencher une réponse' },
      'leucine-threshold': { what: 'Leucine par repas', note: 'Environ 25–30 g d’une protéine de qualité' },
      'older-adults': { what: 'À partir de 65 ans environ', note: 'Le seuil monte avec l’âge' },
      window: {
        what: 'La fenêtre après l’effort',
        note: 'Bien plus large que les trente minutes annoncées',
      },
    },
    claimsNote:
      'Par kilogramme de poids corporel. Les fourchettes sont des fourchettes parce que les ' +
      'essais divergent sur les bords, et un chiffre unique serait un mensonge plus net.',

    practical: [
      {
        title: 'Comptez les repas, pas les grammes',
        detail:
          'Trois ou quatre repas franchissant chacun le seuil valent mieux qu’une journée qui ' +
            'atteint le même total avec un gros dîner. Si vous changez une chose, changez le ' +
            'petit-déjeuner : c’est le repas le plus souvent en dessous.',
      },
      {
        title: 'Mettez un chiffre sur le plus petit repas',
        detail:
          'Presque tout le monde sait à quoi ressemble son dîner et n’a aucune idée de ce que ' +
            'contient son déjeuner. Regardez celui dont vous êtes le moins sûr ; c’est là qu’est ' +
            'le trou.',
      },
      {
        title: 'Arrêtez de chronométrer, commencez à espacer',
        detail:
          'Trois à cinq heures entre les prises de protéines, pas un chronomètre après la dernière ' +
            'série. L’exception est une longue plage autour de l’entraînement — mangez alors plus ' +
            'près, pour des raisons de répartition et non de magie.',
      },
      {
        title: 'Après soixante-cinq ans, visez plus haut exprès',
        detail:
          'La même portion rend moins. C’est le seul groupe où l’écart entre l’apport conseillé et ' +
            'la valeur d’entraînement n’est pas théorique.',
      },
    ],

    seeAlso: ['protein', 'vitamin-d', 'calcium'],

    sources: {
      'issn-protein': 'International Society of Sports Nutrition — position sur protéines et exercice',
      'issn-timing': 'International Society of Sports Nutrition — position sur le timing des nutriments',
      'prot-age': 'Groupe PROT-AGE — apport protéique chez la personne âgée',
      'dri-macro': 'Dietary Reference Intakes pour l’énergie, les glucides, les fibres, les lipides, les protéines et les acides aminés',
    },
  },

  'iron-and-endurance': {
    title: 'Être à plat n’est pas toujours du surentraînement',
    short: 'Fer et endurance',
    lede:
      'À une athlète dont les séances sont devenues discrètement plus dures, on conseille en ' +
      'général de récupérer davantage. Parfois c’est juste. Parfois la ferritine baisse depuis ' +
      'quatre mois et aucun repos au monde n’y touche.',
    description:
      'Pourquoi les athlètes d’endurance perdent du fer plus vite qu’ils n’en remettent, ce que ' +
      'dit vraiment la ferritine, et pourquoi se supplémenter sans bilan est le mauvais geste.',

    commonBelief:
      'Si ma numération est normale, le fer n’est pas mon problème — et si je suis fatigué, un ' +
      'complément ne peut que m’aider.',

    sections: [
      {
        heading: 'Trois façons dont l’entraînement retire du fer',
        body: [
          'La première est mécanique. Chaque impact du pied détruit un petit nombre de globules ' +
            'rouges dans les capillaires de la plante — hémolyse d’impact — et le fer qu’ils ' +
            'contenaient n’est pas entièrement récupéré. Isolément, c’est mineur. Multiplié par ' +
            'cent kilomètres par semaine, pendant des années, ça ne l’est plus.',
          'La deuxième est la sueur, qui emporte du fer en petites quantités qui s’additionnent sur ' +
            'de longues séances à la chaleur.',
          'La troisième échappe à l’attention parce qu’elle va à contre-courant de l’intuition. ' +
            'L’effort intense élève l’hepcidine, l’hormone qui ferme l’absorption du fer, et elle ' +
            'reste élevée plusieurs heures. Le repas pris après une séance dure — celui auquel une ' +
            'athlète fait le plus attention — est donc moins bien absorbé que le même repas un ' +
            'jour de repos. Le corps perd du fer à l’entraînement puis refuse brièvement d’en ' +
            'reprendre.',
        ],
      },
      {
        heading: 'Pourquoi une numération normale ne prouve rien',
        body: [
          'L’hémoglobine est ce qui tombe en dernier. Le corps a une réserve — la ferritine — et il ' +
            'la videra entièrement avant de laisser la numération baisser, parce que transporter ' +
            'l’oxygène est plus urgent que garder une réserve.',
          'Il existe donc une longue période, souvent de plusieurs mois, où la réserve est partie, ' +
            'où l’athlète se sent progressivement moins bien, et où chaque bilan standard revient ' +
            'normal. Cela s’appelle une carence martiale sans anémie, et c’est l’état dans lequel ' +
            'se trouvent la plupart des personnes concernées. L’anémie est la fin du processus, ' +
            'pas son début.',
          'L’examen qui le voit, c’est la ferritine, et il faut la demander. Elle ne figure pas sur ' +
            'un bilan de routine. Si vous ne retenez qu’une chose de cette page, retenez le nom de ' +
            'cet examen.',
        ],
      },
      {
        heading: 'Ce que veut dire le chiffre, et son grand piège',
        body: [
          'Le seuil utilisé en médecine du sport est plus élevé que celui qui sert à diagnostiquer ' +
            'une anémie en population générale, parce que la question n’est pas la même — non pas ' +
            '« cette personne est-elle malade » mais « cette personne a-t-elle assez de réserve ' +
            'pour s’entraîner dur ».',
          'Le piège est que la ferritine monte aussi avec l’inflammation, et l’entraînement dur est ' +
            'inflammatoire. Une ferritine prélevée le lendemain matin d’une grosse séance peut ' +
            'paraître rassurante alors que la réserve réelle est basse. Un prélèvement un jour de ' +
            'repos, idéalement avec un marqueur d’inflammation, vaut la peine d’être organisé.',
        ],
      },
      {
        heading: 'Pourquoi ne pas simplement en prendre',
        body: [
          'Parce que le corps n’a aucun moyen d’éliminer un excédent. Il régule le fer en en ' +
            'absorbant plus ou moins, et ce qui entre reste. Une supplémentation prolongée chez ' +
            'quelqu’un qui n’en manquait pas s’accumule — et chez une personne porteuse d’un gène ' +
            'd’hémochromatose, assez fréquent pour qu’on l’ignore, elle s’accumule vite.',
          'Le fer entre aussi en concurrence avec le zinc et le cuivre sur les mêmes voies ' +
            'd’absorption, si bien que des mois de fer inutile peuvent créer une autre carence ' +
            'pendant que vous en traitez une que vous n’aviez pas.',
          'Quand un déficit est confirmé, le traitement est simple et souvent spectaculaire. C’est ' +
            'un argument pour tester, pas contre agir.',
        ],
      },
      {
        heading: 'Côté alimentation, tout est dans ce qu’on mange avec',
        body: [
          'L’absorption depuis une source végétale varie d’un facteur cinq ou plus selon le reste ' +
            'de l’assiette. La vitamine C au même repas la multiplie. Le thé ou le café pendant le ' +
            'repas la réduit environ de moitié, et celui qui prend son porridge avec un grand café ' +
            'défait le porridge.',
          'La version pratique n’a rien de glamour : éloignez le café d’une heure du repas riche en ' +
            'fer, et mettez quelque chose d’acide dans l’assiette. C’est une intervention plus ' +
            'grande que la plupart des compléments, et elle est gratuite.',
        ],
      },
    ],

    claims: {
      'athlete-multiplier': {
        what: 'Athlètes d’endurance, par rapport à l’apport conseillé',
        note: 'Plus élevé encore en alimentation végétale',
      },
      'ferritin-floor': {
        what: 'Ferritine en dessous de laquelle la médecine du sport agit',
        note: 'Plus haute que le seuil de diagnostic de l’anémie',
      },
      'female-endurance-prevalence': {
        what: 'Athlètes féminines d’endurance concernées',
        note: 'Carence martiale sans anémie, pas anémie',
      },
      'vitamin-c-effect': { what: 'Effet de la vitamine C sur le fer non héminique' },
      'tea-effect': { what: 'Effet du thé ou du café pendant le repas' },
    },
    claimsNote:
      'Le chiffre de prévalence est une fourchette parce que les études utilisent des seuils de ' +
      'ferritine différents. Ce désaccord est réel et c’est pourquoi une plage figure ici.',

    practical: [
      {
        title: 'Demandez la ferritine par son nom',
        detail:
          'Elle ne figure pas sur un bilan de routine, et une numération normale n’exclut pas un ' +
            'problème. C’est la phrase la plus utile de cette page.',
      },
      {
        title: 'Faites le prélèvement un jour de repos',
        detail:
          'La ferritine monte avec l’inflammation et l’entraînement est inflammatoire ; après une ' +
            'grosse séance, le résultat est faussement rassurant.',
      },
      {
        title: 'Déplacez le café, pas le porridge',
        detail:
          'Une heure avant ou après le repas riche en fer. Les tanins peuvent diviser l’absorption ' +
            'par deux, ce qui est plus que ne fait presque tout ce qui s’achète.',
      },
      {
        title: 'Ne vous supplémentez pas au feeling',
        detail:
          'Le corps ne peut pas éliminer un excédent, et le fer concurrence le zinc et le cuivre à ' +
            'l’entrée. D’abord confirmer, ensuite traiter.',
      },
    ],

    seeAlso: ['iron', 'vitamin-c', 'zinc', 'copper'],

    sources: {
      'ods-iron': 'NIH Office of Dietary Supplements — Fer',
      'iom-iron': 'Dietary Reference Intakes pour le fer — Institute of Medicine',
      'iron-athletes': 'Le fer chez le sportif — une revue',
    },
  },

  'creatine-what-holds-up': {
    title: 'La créatine est celle qui a survécu',
    short: 'Créatine',
    lede:
      'Presque tout ce qui se trouve au rayon compléments est soit non testé, soit testé et jugé ' +
      'insuffisant. Un composé bon marché et sans prestige est étudié depuis trente ans et ' +
      'continue de fonctionner — ce qui mérite d’être dit clairement sur un site qui passe le ' +
      'plus clair de son temps à dire de ne pas s’embêter.',
    description:
      'Ce que fait réellement la créatine, quelles doses reposent sur des preuves, ce qu’est le ' +
      'poids d’eau, et pourquoi l’avertissement sur les reins n’a jamais eu de fondement.',

    commonBelief:
      'La créatine, c’est du culturisme, c’est dur pour les reins, et il faut faire une charge ' +
      'puis arrêter par cycles.',

    sections: [
      {
        heading: 'Ce que c’est, moins exotique que l’emballage',
        body: [
          'La créatine est un composé que votre foie fabrique déjà et que vos muscles stockent ' +
            'déjà, et vous en mangez environ un gramme par jour dans la viande et le poisson. La ' +
            'supplémentation élève les stocks musculaires de vingt à quarante pour cent au-dessus ' +
            'de ce que l’alimentation seule fournit.',
          'Ce que font ces stocks, c’est régénérer l’ATP pendant des efforts très courts et très ' +
            'durs. Les premières secondes d’un sprint ou d’une série lourde fonctionnent sur un ' +
            'système phosphate qui se vide vite et se remplit depuis la créatine. Plus de créatine ' +
            'stockée signifie une recharge plus rapide, donc une répétition de plus, donc — ' +
            'répété sur des mois — plus de travail effectué et plus d’adaptation.',
          'C’est tout le mécanisme. Elle ne construit pas de muscle directement ; elle vous permet ' +
            'de vous entraîner un peu plus dur, et c’est l’entraînement qui construit le muscle.',
        ],
      },
      {
        heading: 'D’où vient l’avertissement sur les reins',
        body: [
          'La créatine élève la créatinine sanguine, qui est le marqueur utilisé par les ' +
            'laboratoires pour estimer la fonction rénale. Un bilan de routine chez quelqu’un qui ' +
            'prend de la créatine peut donc ressembler à une fonction rénale altérée alors que les ' +
            'reins vont parfaitement bien — c’est le marqueur qui a bougé, pas l’organe.',
          'Cet artefact est devenu un avertissement sanitaire et circule depuis vingt-cinq ans. Les ' +
            'études contrôlées, y compris sur plusieurs années, n’ont pas trouvé d’atteinte rénale ' +
            'chez l’adulte en bonne santé. Les prises de position sont inhabituellement directes ' +
            'là-dessus.',
          'La vraie réserve : en cas de maladie rénale existante, c’est une conversation avec un ' +
            'médecin et non une décision prise dans un article. Et si vous faites une prise de ' +
            'sang, dites que vous en prenez, pour que personne ne poursuive un chiffre qui a une ' +
            'explication ennuyeuse.',
        ],
      },
      {
        heading: 'Charge, cycles et autres choses inutiles',
        body: [
          'La charge fonctionne et n’est pas nécessaire. Une dose élevée pendant cinq à sept jours ' +
            'remplit les stocks rapidement ; une dose d’entretien les remplit tout aussi ' +
            'complètement en trois à quatre semaines. La seule raison de charger est ' +
            'l’impatience, et le prix est que c’est la phase où surviennent les troubles ' +
            'digestifs.',
          'Arrêter par cycles n’a aucun fondement. Les stocks redescendent simplement au niveau de ' +
            'départ en un mois environ, ce qui n’est pas un avantage.',
          'La forme est réglée aussi : monohydrate de créatine. Les variantes plus chères ne l’ont ' +
            'pas surpassée en comparaison directe, et le monohydrate est celle sur laquelle toute ' +
            'la recherche a été faite.',
        ],
      },
      {
        heading: 'La prise de poids, réelle et qui n’est pas de la graisse',
        body: [
          'La créatine attire l’eau dans les cellules musculaires. La balance monte d’un à deux ' +
            'kilos les premières semaines et c’est de l’eau intracellulaire, pas de la graisse ni ' +
            'un gonflement au sens habituel.',
          'Pour la plupart des gens c’est sans importance ou légèrement positif. Pour quiconque ' +
            'concourt en catégories de poids ou sur une épreuve d’endurance où chaque kilo se ' +
            'monte en côte, c’est un vrai arbitrage à considérer et non à balayer.',
        ],
      },
      {
        heading: 'Ce que nous n’affirmons pas',
        body: [
          'Il existe une littérature croissante sur créatine et cognition, notamment en privation ' +
            'de sommeil, et une partie paraît intéressante. Elle est bien plus jeune et bien plus ' +
            'petite que celle sur le muscle, et ce n’est pas la raison d’en prendre.',
          'Cette page est confiante sur les résultats de force et de masse maigre parce que trente ' +
            'ans d’essais concordent. Elle ne l’est délibérément pas sur le reste, et le tableau ' +
            'dit lequel est lequel.',
        ],
      },
    ],

    claims: {
      maintenance: { what: 'Dose d’entretien', note: 'Monohydrate ; inutile d’arrêter par cycles' },
      loading: { what: 'Phase de charge facultative', note: 'Plus rapide, pas meilleure' },
      'strength-effect': { what: 'Gain de force par rapport à l’entraînement seul' },
      'water-weight': { what: 'Prise de poids initiale', note: 'Eau intracellulaire, pas de la graisse' },
      'kidney-evidence': { what: 'Atteinte rénale chez l’adulte en bonne santé' },
    },

    practical: [
      {
        title: 'Achetez du monohydrate et rien d’autre',
        detail:
          'C’est la forme la moins chère et celle qu’a utilisée chaque essai. Les variantes chères ' +
            'ne l’ont pas battue en comparaison directe.',
      },
      {
        title: 'Sautez la phase de charge',
        detail:
          'Une dose d’entretien atteint les mêmes stocks en trois à quatre semaines et évite les ' +
            'troubles digestifs que la charge provoque parfois.',
      },
      {
        title: 'Prenez-en tous les jours, y compris les jours de repos',
        detail:
          'Elle agit en maintenant les stocks pleins, pas de façon aiguë ; le moment par rapport à ' +
            'l’entraînement importe peu, la régularité beaucoup.',
      },
      {
        title: 'Signalez-la avant une prise de sang',
        detail:
          'Elle élève la créatinine, le chiffre utilisé pour estimer la fonction rénale. Dites-le ' +
            'et personne n’ira enquêter sur un artefact.',
      },
    ],

    seeAlso: ['protein', 'magnesium'],

    sources: {
      'issn-creatine': 'International Society of Sports Nutrition — position sur la créatine',
      'creatine-brain': 'Créatine et performance cognitive — revue récente',
    },
  },

  'cramp-and-electrolytes': {
    title: 'La crampe ne vient probablement pas de vos électrolytes',
    short: 'Crampes et électrolytes',
    lede:
      'L’explication par le sel et le magnésium est la croyance la plus répandue du sport ' +
      'amateur, et les preuves qui la soutiennent sont bien plus minces que l’assurance avec ' +
      'laquelle on la répète.',
    description:
      'Ce que disent les données sur la crampe musculaire liée à l’effort, pourquoi les ' +
      'compléments de magnésium ne la préviennent pas, et ce qui semble marcher.',

    commonBelief:
      'Une crampe veut dire que je suis déshydraté ou que je manque de sel et de magnésium. Un ' +
      'comprimé de magnésium avant de dormir et ça s’arrête.',

    sections: [
      {
        heading: 'La théorie que tout le monde connaît, et son problème',
        body: [
          'L’explication par la déshydratation et les électrolytes dit que transpirer épuise le ' +
            'liquide et le sodium, que le liquide autour du muscle change, et que le muscle ' +
            'devient hyperexcitable. C’est plausible, cela colle au fait que les crampes ' +
            'surviennent dans les courses chaudes, et c’est l’explication standard depuis des ' +
            'décennies.',
          'L’ennui est qu’elle n’a pas bien résisté aux tests. Les études comparant ceux qui ' +
            'crampent et ceux qui ne crampent pas sur la même course n’ont en général pas trouvé ' +
            'la différence d’hydratation ou de sodium sanguin dont la théorie a besoin. Les ' +
            'crampes surviennent aussi par temps frais, chez des nageurs, et dans des muscles qui ' +
            'n’étaient pas les plus sollicités.',
          'Et il y a un problème plus simple : la crampe frappe en général un groupe musculaire ' +
            'alors que le reste du corps, qui a bu le même liquide et perdu le même sel, n’a rien. ' +
            'Une carence de tout le corps explique mal un événement local.',
        ],
      },
      {
        heading: 'L’explication qui colle mieux',
        body: [
          'L’explication aujourd’hui dominante est neuromusculaire et non chimique. Quand un muscle ' +
            'fatigue, les réflexes qui le gouvernent se déséquilibrent — le signal qui lui dit de ' +
            'se contracter reste élevé pendant que celui qui lui dit de relâcher faiblit — et le ' +
            'muscle se verrouille.',
          'Cette explication prédit ce que celle des électrolytes peine à expliquer : que la crampe ' +
            'arrive à la fin des efforts durs et non au début, dans les muscles précisément ' +
            'sollicités, en position raccourcie, et qu’elle cède à l’étirement. Étirer ne fait ' +
            'rien à votre sodium sanguin et tout à la boucle réflexe — et c’est l’étirement qui ' +
            'arrête réellement une crampe sur le moment.',
          'Elle colle aussi au meilleur prédicteur trouvé à ce jour, qui n’est pas du tout une ' +
            'valeur biologique : avoir déjà crampé, et être parti plus vite que d’habitude.',
        ],
      },
      {
        heading: 'Où entre le magnésium, et pourquoi le plus souvent non',
        body: [
          'Le magnésium participe réellement à la relaxation musculaire, ce qui rend l’histoire si ' +
            'séduisante. Mais les essais ne soutiennent pas la supplémentation pour prévenir les ' +
            'crampes — chez les personnes sans carence, les revues concluent régulièrement à ' +
            'l’absence d’effet notable, et l’effet sur les crampes nocturnes des personnes âgées ' +
            'est au mieux faible.',
          'C’est une affirmation plus étroite que « le magnésium ne sert à rien ». Si votre apport ' +
            'est réellement bas, le corriger vaut la peine pour des raisons qui n’ont rien à voir ' +
            'avec les crampes, et environ la moitié des adultes est sous la référence. Corriger un ' +
            'manque réel et traiter un symptôme sont deux projets différents.',
        ],
      },
      {
        heading: 'À quoi sert vraiment le sodium',
        body: [
          'Remplacer le sodium compte, mais pour un autre problème. Sur les épreuves longues, boire ' +
            'de grands volumes d’eau pure tout en transpirant du sel peut diluer le sodium sanguin ' +
            '— hyponatrémie — qui est dangereuse d’une manière dont la crampe ne l’est pas.',
          'La fourchette de sodium sudoral du tableau est énorme, et c’est le constat honnête : les ' +
            'gens diffèrent d’un facteur dix selon la salinité de leur sueur. Ce qui rend les ' +
            'conseils génériques sur la quantité de sel à prendre pendant l’effort à peu près ' +
            'vides — et la pastille de sel qui a transformé un coureur ne fera rien pour le ' +
            'suivant.',
        ],
      },
    ],

    claims: {
      'sweat-sodium': {
        what: 'Sodium dans la sueur, entre individus',
        note: 'Un facteur dix, d’où l’échec des conseils génériques',
      },
      'sweat-rate': { what: 'Débit sudoral à l’effort' },
      'magnesium-evidence': {
        what: 'Compléments de magnésium pour prévenir les crampes',
        note: 'Chez les personnes sans carence',
      },
      'weight-loss-limit': {
        what: 'Perte hydrique au-delà de laquelle la performance baisse',
        note: 'Un repère, pas une falaise',
      },
    },

    practical: [
      {
        title: 'Étirez-la, ne la buvez pas',
        detail:
          'L’étirement passif du muscle qui crampe est la seule intervention qui met fin de façon ' +
            'fiable à un épisode, et elle agit par le réflexe et non par le sang.',
      },
      {
        title: 'Regardez votre allure avant vos compléments',
        detail:
          'Le prédicteur le plus fort trouvé à ce jour est de partir plus vite que ne le permet ' +
            'votre entraînement. C’est plus désagréable à entendre que « prends du magnésium » et ' +
            'plus utile.',
      },
      {
        title: 'Corrigez un vrai manque de magnésium pour lui-même',
        detail:
          'Environ la moitié des adultes est sous la référence, et cela vaut d’être corrigé. ' +
            'N’attendez simplement pas une guérison des crampes.',
      },
      {
        title: 'Sur longue distance, apprenez votre propre sueur',
        detail:
          'Avec un facteur dix entre individus, le seul chiffre utile est le vôtre. Pesez-vous ' +
            'avant et après une longue séance à la chaleur.',
      },
    ],

    seeAlso: ['magnesium', 'potassium', 'calcium'],

    sources: {
      'acsm-fluid': 'American College of Sports Medicine — position sur l’exercice et le remplacement hydrique',
      'cochrane-cramp': 'Magnésium et crampes musculaires — revue systématique',
      'cramp-neuro': 'Contrôle neuromusculaire altéré et crampe liée à l’effort',
    },
  },

  'vitamin-d-and-performance': {
    title: 'La vitamine D corrige une carence ; elle n’accorde pas un avantage',
    short: 'Vitamine D et performance',
    lede:
      'Environ la moitié des sportifs testés est insuffisante, et corriger cela vaut la peine. Ce ' +
      'qui ne suit pas, c’est ce qui figure sur l’étiquette : que davantage, chez quelqu’un déjà ' +
      'suffisant, fasse quoi que ce soit.',
    description:
      'Pourquoi les sportifs manquent si souvent de vitamine D, ce que la correction fait et ne ' +
      'fait pas pour la performance, et où se situe le vrai risque de l’excès.',

    commonBelief:
      'La vitamine D améliore la force et l’immunité, donc plus il y en a mieux c’est, et une ' +
      'grosse dose hebdomadaire est une assurance raisonnable.',

    sections: [
      {
        heading: 'Pourquoi les sportifs sont si souvent bas',
        body: [
          'Parce que le sport se pratique surtout en intérieur, ou tôt, ou couvert. La vitamine D ' +
            'se fabrique dans la peau à partir des UVB, et les UVB ne traversent ni le verre, ni ' +
            'la crème solaire, ni les vêtements. Qui s’entraîne en piscine, en salle ou en gymnase ' +
            'l’hiver a à peu près la même exposition qu’un employé de bureau.',
          'La latitude fait le reste. Au-delà d’environ trente-sept degrés, le soleil d’hiver est ' +
            'trop bas pour en produire des quantités utiles pendant plusieurs mois. Une peau plus ' +
            'foncée demande une exposition plus longue pour la même synthèse, donc le même emploi ' +
            'du temps produit moins.',
          'L’alimentation participe à peine. En dehors des poissons gras, du jaune d’œuf et de ce ' +
            'qui a été enrichi exprès, ce n’est pas un nutriment que le régime apporte — c’est ' +
            'pourquoi il se comporte autrement que tout le reste sur ce site.',
        ],
      },
      {
        heading: 'Ce que fait la correction',
        body: [
          'Chez les personnes carencées, restaurer la vitamine D améliore la fonction musculaire et ' +
            'réduit le taux de fractures de fatigue. Cet effet est réel et vaut d’être obtenu.',
          'Chez celles qui étaient déjà suffisantes, en ajouter n’a pas produit de bénéfice de ' +
            'performance dans les essais contrôlés. C’est la forme de la plupart des histoires de ' +
            'micronutriments et elle vaut d’être intégrée : la courbe est un plateau, pas une ' +
            'pente. Lever une limitation aide ; ajouter un excédent à un système qui n’était pas ' +
            'limité, non.',
        ],
      },
      {
        heading: 'La moitié osseuse, qui compte plus que celle de la performance',
        body: [
          'La vitamine D gouverne la quantité de calcium que vous absorbez. Une athlète avec une ' +
            'vitamine D basse peut manger largement assez de calcium et ne pas le faire entrer ' +
            'dans l’os — et l’os sous charge répétée est précisément le tissu qui ne peut pas se ' +
            'le permettre.',
          'C’est pourquoi la conversation sur la vitamine D et celle sur les fractures de fatigue ' +
            'sont la même conversation, et pourquoi elle a sa place à côté de la disponibilité ' +
            'énergétique et non à côté des compléments.',
        ],
      },
      {
        heading: 'Le seul micronutriment où deviner est vraiment risqué',
        body: [
          'La vitamine D est liposoluble et stockée plutôt qu’éliminée, ce qui en fait l’un des ' +
            'rares où se supplémenter sans précaution peut faire de vrais dégâts. Des doses ' +
            'élevées prolongées augmentent le calcium sanguin, et cela abîme reins et vaisseaux.',
          'Les très grosses doses ponctuelles — la mégadose mensuelle qui paraît efficace — ont ' +
            'aussi mal marché dans les essais, certains montrant plus de chutes et de fractures ' +
            'plutôt que moins. Quotidien et modéré bat mensuel et héroïque.',
          'Comme pour le fer, le geste raisonnable est un dosage sanguin. Il est peu coûteux, c’est ' +
            'la seule façon de savoir de quel côté du plateau vous êtes, et il transforme une ' +
            'supposition en décision.',
        ],
      },
    ],

    claims: {
      'athlete-insufficiency': {
        what: 'Sportifs trouvés insuffisants',
        note: 'Regroupé entre études ; plus élevé aux latitudes nord',
      },
      sufficiency: { what: 'Taux sanguin considéré comme suffisant' },
      'performance-effect': {
        what: 'Bénéfice de performance',
        note: 'Par correction d’une carence, pas par ajout d’un excédent',
      },
      'upper-limit': { what: 'Limite supérieure pour l’adulte' },
    },

    practical: [
      {
        title: 'Doser plutôt que supposer, dans les deux sens',
        detail:
          'La moitié des sportifs est basse et la moitié ne l’est pas, et aucun symptôme ne les ' +
            'sépare. Un dosage transforme une supposition en décision.',
      },
      {
        title: 'Quotidien et modéré, pas mensuel et héroïque',
        detail:
          'Les grosses doses ponctuelles ont fait moins bien dans les essais que les doses ' +
            'régulières — y compris sur les critères qu’elles devaient améliorer.',
      },
      {
        title: 'Traitez-la d’abord comme une question osseuse',
        detail:
          'L’effet sur l’absorption du calcium est celui qui compte le plus sous charge répétée. ' +
            'Il appartient à la même conversation que les fractures de fatigue.',
      },
    ],

    seeAlso: ['vitamin-d', 'calcium', 'magnesium'],

    sources: {
      'ods-vitd': 'NIH Office of Dietary Supplements — Vitamine D',
      'vitd-athletes': 'Statut en vitamine D chez les sportifs — revue systématique et méta-analyse',
    },
  },

  'hidden-hunger': {
    title: 'Faim cachée : manger trop et en manquer quand même',
    short: 'Faim cachée',
    lede:
      'Le mot malnutrition évoque une image de pénurie. Sa forme la plus courante dans les pays ' +
      'riches ressemble à l’inverse — de la nourriture en abondance, de l’énergie en abondance, ' +
      'et un profil nutritionnel troué.',
    description:
      'Pourquoi on peut manger largement assez de calories et manquer quand même de fer, de ' +
      'magnésium ou de calcium — ce qu’est la faim cachée, qui elle touche, et comment la trouver.',

    commonBelief:
      'La carence, c’est là où il n’y a pas assez à manger. Si je mange largement — trop, même —, ' +
      'ce n’est pas mon problème.',

    sections: [
      {
        heading: 'Deux faims différentes',
        body: [
          'L’énergie et les nutriments arrivent dans la même bouchée et le corps les comptabilise ' +
            'séparément. On peut satisfaire l’une et manquer l’autre, et les deux défauts ne se ' +
            'ressemblent en rien : un manque d’énergie s’annonce comme de la faim, un manque de ' +
            'magnésium ne s’annonce pratiquement pas pendant des années.',
          'Ce silence est toute la difficulté. Il n’existe pas de récepteur du statut en fer. Rien ' +
            'ne donne envie de zinc. Le corps laissera un minéral s’épuiser très longtemps tout en ' +
            'maintenant le taux sanguin normal en le prélevant ailleurs — dans l’os, en général — ' +
            'et le premier symptôme est souvent la conséquence plutôt que le manque.',
        ],
      },
      {
        heading: 'Comment une assiette pleine finit vide',
        body: [
          'Le mécanisme est la dilution, pas l’absence. Un aliment très transformé conserve en ' +
            'général son énergie et perd une part de ce qui l’accompagnait : la mouture retire le ' +
            'germe et le son, et environ quatre cinquièmes de son magnésium partent avec. Le ' +
            'raffinage fait de même aux huiles. Rien de tout cela n’est un complot — c’est ce qui ' +
            'rend la nourriture stable et bon marché — mais le résultat est une alimentation dense ' +
            'en énergie et pauvre en nutriments.',
          'Ensuite l’arithmétique joue contre vous. Les besoins sont à peu près fixes tandis que ' +
            'l’appétit est rassasié par l’énergie ; plus votre énergie vient d’aliments qui ne ' +
            'portent guère autre chose, moins il reste de place pour ceux qui portent tout le ' +
            'reste.',
          'C’est pourquoi le schéma apparaît comme surpoids et carence à la fois, ce qui sonne ' +
            'comme une contradiction et n’en est pas une. Ce sont deux comptes distincts, et un ' +
            'seul est excédentaire.',
        ],
      },
      {
        heading: 'Qui est réellement concerné',
        body: [
          'Les données des enquêtes nationales répondent à cela particulièrement bien, parce ' +
            'qu’elles mesurent ce que les gens ont mangé et non ce qu’ils déclarent manger. Aux ' +
            'États-Unis, une courte liste de nutriments revient régulièrement sous la référence ' +
            'dans l’ensemble de la population, pas dans un coin de celle-ci.',
          'Le calcium et le magnésium ressortent, et la raison est la même : tous deux venaient ' +
            'largement de groupes d’aliments que les gens ont discrètement moins mangés — les ' +
            'produits laitiers pour l’un, les céréales complètes et les légumineuses pour l’autre. ' +
            'La vitamine D figure aussi sur la liste, mais pour une autre raison, puisque ' +
            'l’alimentation n’en a jamais été la source principale.',
          'Rien de cela ne signifie que toute personne qui lit ceci est carencée. Sous la référence ' +
            'n’est pas la même chose que carencé — la référence est fixée pour couvrir presque ' +
            'tout le monde, donc passer en dessous signifie « peut-être en manque », pas ' +
            '« certainement malade ». Ce que cela signifie, c’est que l’hypothèse d’aller bien ' +
            'parce qu’il y a à manger à la maison ne tient pas.',
        ],
      },
      {
        heading: 'Que faire, puisque rien de tout cela ne se voit',
        body: [
          'Le premier geste honnête est d’arrêter de deviner. Une fatigue vague est compatible avec ' +
            'une dizaine de manques, avec un mauvais sommeil, avec une thyroïde paresseuse et avec ' +
            'rien du tout — et choisir un complément dans le rayon pour coller à une sensation, ' +
            'c’est ainsi que des gens prennent du zinc pendant un an et se créent un problème de ' +
            'cuivre.',
          'Ce qui est utile, c’est de découvrir ce que vous mangez réellement, au sens ennuyeux — ' +
            'pendant une semaine, pas pour toujours. La plupart des trous d’une alimentation ' +
            'réelle sont structurels : un groupe d’aliments entier parti en silence, un repas par ' +
            'jour qui n’apporte rien, un remplacement fait pour une bonne raison qui a emporté ' +
            'quelque chose avec lui.',
          'Et là où un manque semble réel, la réponse est une prise de sang et un médecin, pas un ' +
            'article. Ce n’est pas une précaution de façade. Le fer en particulier est vraiment ' +
            'dangereux à supplémenter à l’aveugle, parce que le corps n’a aucun moyen d’éliminer ' +
            'un excédent.',
        ],
      },
    ],

    claims: {
      'global-affected': {
        what: 'Personnes concernées dans le monde',
        note: 'Le chiffre de l’OMS pour les carences en micronutriments',
      },
      'us-shortfall-nutrients': {
        what: 'Nutriments insuffisamment consommés dans la population américaine',
        note: 'Ainsi nommés par le comité des recommandations alimentaires',
      },
      'calcium-shortfall': { what: 'Adultes américains sous la référence en calcium' },
      'magnesium-shortfall': { what: 'Adultes américains sous la référence en magnésium' },
    },
    claimsNote:
      'Sous la référence n’est pas la même chose que carencé. La référence est fixée assez haut ' +
      'pour couvrir presque tout le monde, donc passer en dessous signifie « peut-être en ' +
      'manque » et non « certainement malade ».',

    practical: [
      {
        title: 'Regardez une semaine, pas une journée',
        detail:
          'Une journée vous parle d’une journée. Une semaine montre la structure : le repas qui ' +
            'n’apporte rien, le groupe parti sans être remplacé.',
      },
      {
        title: 'Trouvez le remplacement qui vous a coûté quelque chose',
        detail:
          'La plupart des trous remontent à une seule substitution faite pour une bonne raison — ' +
            'les laitages pour le lactose, le pain pour les glucides, la viande par éthique — où ' +
            'rien n’est venu porter ce qui est parti.',
      },
      {
        title: 'Ne traitez pas une sensation avec un complément',
        detail:
          'La fatigue colle à trop de causes. Si un manque semble réel, une prise de sang coûte ' +
            'moins qu’un an du mauvais comprimé — et pour le fer, c’est la différence entre aider ' +
            'et nuire.',
      },
    ],

    seeAlso: ['magnesium', 'calcium', 'iron', 'vitamin-d'],

    sources: {
      'who-micronutrient': 'Organisation mondiale de la santé — micronutriments',
      dgac: 'Dietary Guidelines for Americans — rapport scientifique',
      nhanes: 'Enquête nationale américaine de santé et nutrition (NHANES)',
    },
  },

  'restriction-and-the-binge-cycle': {
    title: 'La crise n’est pas l’échec. C’est la seconde moitié de la restriction.',
    short: 'Restriction et crises',
    lede:
      'Les gens décrivent une perte de contrôle, et la séquence ne commence presque jamais là. ' +
      'Elle commence des jours plus tôt, par une règle — et la perte de contrôle est ce que fait ' +
      'un corps au bout d’une règle, assez régulièrement pour avoir été démontré en laboratoire ' +
      'il y a quatre-vingts ans.',
    description:
      'Pourquoi une restriction sévère produit des crises comme réponse physiologique et non ' +
      'comme défaut de volonté — ce qu’a montré l’expérience du Minnesota, et quand cela cesse ' +
      'd’être un schéma pour devenir un trouble.',

    commonBelief:
      'J’ai bien tenu quatre jours puis j’ai tout lâché. Avec plus de discipline, le cinquième ' +
      'jour aurait ressemblé aux autres.',

    sections: [
      {
        heading: 'Ce qu’ont démontré trente-six hommes au Minnesota',
        body: [
          'En 1944, un groupe de volontaires en bonne santé — sélectionnés pour leur stabilité, en ' +
            'partie pour cela — a accepté de manger environ la moitié de ses besoins pendant six ' +
            'mois, afin que des chercheurs apprennent à réalimenter une Europe affamée. Ce dont ' +
            'l’étude a laissé le souvenir n’est pas le protocole de réalimentation.',
          'Les hommes sont devenus obsédés par la nourriture. Ils lisaient des livres de cuisine ' +
            'par plaisir. Ils collectionnaient des recettes, accumulaient des couverts, faisaient ' +
            'durer les repas des heures, parlaient de manger et de peu d’autre. Ils sont devenus ' +
            'irritables, repliés, incapables de se concentrer. Plusieurs ont développé des ' +
            'épisodes de prise alimentaire incontrôlée qui les ont consternés, et une partie de ce ' +
            'comportement a persisté des mois après le retour à une alimentation normale.',
          'Ce n’étaient pas des personnes ayant un rapport difficile à la nourriture. Elles ' +
            'n’avaient aucun rapport notable à la nourriture avant que la restriction n’en crée ' +
            'un. C’est le résultat : le comportement a été fabriqué par la privation, chez des ' +
            'hommes ordinaires, exprès.',
        ],
      },
      {
        heading: 'Pourquoi le corps traite un régime comme une urgence',
        body: [
          'Il n’a aucun moyen de distinguer une pénurie que vous avez choisie d’une que vous ' +
            'n’avez pas choisie. Les signaux qu’il lit sont : combien d’énergie entre, combien est ' +
            'stockée, depuis combien de temps dure l’écart — et aucun ne transporte votre ' +
            'intention.',
          'Alors il fait ce qu’il a toujours fait devant une pénurie. L’attention se resserre sur ' +
            'la nourriture, parce que remarquer la nourriture est la façon dont un animal affamé ' +
            'survit. Les signaux de satiété faiblissent. La récompense associée au fait de manger ' +
            'monte, si bien que le même repas est plus irrésistible qu’il y a une semaine. Ce ' +
            'n’est pas une faiblesse qui se révèle ; c’est un système qui fonctionne exactement ' +
            'comme il est construit, chez quelqu’un qui a décidé que le système est l’ennemi.',
          'Et cela s’aggrave au lieu de se stabiliser. Plus la restriction est longue et dure, plus ' +
            'la traction est forte — d’où le fait que le schéma finisse si souvent par un épisode ' +
            'sans commune mesure avec la règle qui l’a déclenché.',
        ],
      },
      {
        heading: 'Ce qui en fait un cycle',
        body: [
          'Ce qui transforme un épisode en boucle, c’est ce qui vient après. L’épisode est lu comme ' +
            'la preuve d’un défaut de caractère, et la réponse à un défaut de caractère est une ' +
            'règle plus stricte. La règle plus stricte produit une traction plus forte. La ' +
            'traction plus forte produit un épisode plus grand, lu comme une preuve ' +
            'supplémentaire.',
          'Chaque tour rend le suivant plus probable, et la personne qui s’y trouve vit tout cela ' +
            'comme une information sur elle-même plutôt que comme une réponse prévisible à ce ' +
            'qu’elle continue de faire.',
          'Cela mérite d’être dit clairement, car c’est la partie qu’on entend rarement : que ce ' +
            'soit prévisible n’en fait pas un petit problème. Prévisible et grave ne sont pas ' +
            'opposés.',
        ],
      },
      {
        heading: 'Quand cela cesse d’être un schéma',
        body: [
          'Il y a une ligne, et elle n’est pas tracée par la quantité mangée pendant un épisode. ' +
            'Elle est tracée par ce que le fait de manger fait au reste d’une vie.',
          'Quelques repères qu’elle a été franchie : des épisodes accompagnés d’un vrai sentiment ' +
            'de perte de contrôle et non d’un simple excès ; tout ce qui est fait ensuite pour ' +
            'compenser — vomissements, laxatifs, sport punitif, jeûne le lendemain ; la nourriture ' +
            'ou la silhouette occupant tant d’attention que le travail, les études ou les ' +
            'relations en souffrent ; et le secret, l’un des signaux les plus fiables de tous.',
          'Rien de cela n’est un diagnostic, et cette page ne peut pas en poser. C’est le moment où ' +
            'le bon geste suivant cesse d’être une autre stratégie alimentaire et devient une ' +
            'personne — un médecin traitant, un psychologue, une ligne d’écoute. Les troubles des ' +
            'conduites alimentaires ont la mortalité la plus élevée de toutes les maladies ' +
            'psychiatriques et répondent bien aux soins, et les deux moitiés de cette phrase sont ' +
            'des raisons d’appeler tôt plutôt que tard.',
        ],
      },
      {
        heading: 'Ce que cela implique pour tout suivi, y compris le nôtre',
        body: [
          'Nous faisons une application qui compte, nous avons donc un intérêt évident ici et ' +
            'devrions le déclarer. Mesurer ce qu’on mange sert réellement à certaines personnes et ' +
            'nuit réellement à d’autres, et le groupe dont vous faites partie ne dépend pas de ' +
            'votre discipline.',
          'Si un chiffre sur un écran donne le ton de votre journée, si vous vous êtes mis à manger ' +
            'autour de l’application plutôt qu’à l’utiliser, ou si voir un total vous donne envie ' +
            'de compenser — ce n’est pas un signe qu’il faut suivre plus rigoureusement. Fermez-la. ' +
            'Ce conseil nous coûte une utilisatrice et c’est le bon conseil.',
        ],
      },
    ],

    claims: {},

    practical: [
      {
        title: 'Repérez quelle moitié du cycle vous traitez',
        detail:
          'Presque tous les plans essayés après un épisode visent l’épisode. L’épisode est la ' +
            'seconde moitié. La première est la règle qui l’a précédé, et elle tient toujours.',
      },
      {
        title: 'Le secret est le signal à prendre au sérieux',
        detail:
          'De tout ce qui figure sur cette page, le cacher est le marqueur qui distingue le plus ' +
            'sûrement une mauvaise passe de quelque chose qui demande de l’aide. Si personne dans ' +
            'votre entourage ne sait que cela arrive, c’est une information.',
      },
      {
        title: 'Demandez à quelqu’un dont c’est le métier',
        detail:
          'Ni un article de nutrition ni une application. Le médecin traitant est une première ' +
            'porte raisonnable et a déjà eu cette conversation.',
      },
    ],

    seeAlso: ['protein', 'magnesium', 'iron'],

    sources: {
      minnesota: 'L’expérience de famine du Minnesota — Keys et al. et analyses ultérieures',
      'nice-eating': 'Recommandation NICE NG69 — troubles des conduites alimentaires : repérage et prise en charge',
      beat: 'Beat — soutien et lignes d’écoute pour les troubles alimentaires',
    },
  },

  'tracking-without-obsession': {
    title: 'Nous faisons une app de suivi, alors lisez cette partie avec scepticisme',
    short: 'Suivre sans obsession',
    lede:
      'Mesurer ce qu’on mange aide beaucoup certaines personnes et en abîme d’autres, et le ' +
      'groupe dont vous faites partie ne dépend pas de votre bon sens. Nous avons un intérêt ' +
      'évident dans la première réponse — c’est exactement pour cela que cette page existe.',
    description:
      'Quand le suivi alimentaire aide, quand il devient nuisible, les signes que c’est arrivé, ' +
      'et pourquoi le bon conseil est parfois d’arrêter.',

    commonBelief:
      'Le suivi, c’est juste de l’information. Plus de données sur ce que je mange ne peut que ' +
      'm’aider.',

    sections: [
      {
        heading: 'Ce qu’il fait vraiment bien',
        body: [
          'Découvrir ce que vous mangez réellement, ce que presque personne ne sait. Les ' +
            'estimations de ses propres apports faites de mémoire se trompent de beaucoup dans ' +
            'les deux sens, et les erreurs ne sont pas aléatoires : elles se concentrent ' +
            'précisément autour de ce qu’on a le moins envie de regarder.',
          'Il est aussi bon pour répondre à une question précise. Où me manque-t-il des protéines ? ' +
            'Suis-je seulement proche d’un apport suffisant en fer ? Que contient réellement le ' +
            'déjeuner que je mange quatre fois par semaine ? Ces questions ont des réponses, les ' +
            'réponses sont utiles, et une fois obtenues il n’y a plus à redemander.',
          'C’est la forme du suivi dans sa meilleure version : une enquête courte, avec un début et ' +
            'une fin. Quinze jours de mesure pour trouver où sont les trous valent bien plus ' +
            'qu’une année d’enregistrement par habitude.',
        ],
      },
      {
        heading: 'Comment cela bascule',
        body: [
          'Une mesure devient un objectif, et un objectif devient une règle. Cette progression ' +
            'n’est pas inévitable et elle est fréquente, et elle se produit en général sans aucun ' +
            'moment où quelqu’un décide de la laisser faire.',
          'Les signes sont reconnaissables. Manger autour de l’application plutôt que s’en servir — ' +
            'choisir l’aliment qui s’enregistre proprement plutôt que celui qui convient au repas. ' +
            'De l’inquiétude à l’idée de manger quelque chose qui ne se mesure pas, ce qui exclut ' +
            'en silence la cuisine des autres et la plupart des restaurants. Un chiffre en fin de ' +
            'journée qui donne le ton de la soirée. L’envie de compenser après avoir vu un total.',
          'Et celui qui compte le plus : enregistrer quelque chose puis manger différemment à cause ' +
            'de ce qu’a dit l’écran, plutôt qu’à cause de la faim, de la satiété ou d’un plan.',
        ],
      },
      {
        heading: 'Qui ne devrait probablement pas faire cela',
        body: [
          'Toute personne ayant un antécédent de trouble des conduites alimentaires. Ce n’est pas ' +
            'une précaution de principe — l’auto-surveillance alimentaire est associée à de moins ' +
            'bons résultats dans ce groupe, et les recommandations la déconseillent en général en ' +
            'dehors d’un suivi encadré.',
          'Toute personne pour qui les chiffres sont déjà devenus l’enjeu. Si une tentative ' +
            'précédente s’est terminée par le suivi prenant le dessus, l’application n’est pas ' +
            'différente cette fois-ci.',
          'Et les adolescents, chez qui le rapport bénéfice-risque est mauvais et le moment du ' +
            'développement l’est aussi. Nous construisons pour des adultes pour cette raison.',
        ],
      },
      {
        heading: 'Ce que nous préférerions',
        body: [
          'Suivez deux semaines, avec une question en tête. Répondez-y. Arrêtez. Revenez si la ' +
            'question change ou si l’alimentation change.',
          'Servez-vous de l’application pour consulter des aliments isolés sans rien enregistrer — ' +
            'l’essentiel de la valeur est dans le profil nutritionnel d’un aliment et non dans le ' +
            'journal, et cet usage ne comporte aucun des risques décrits plus haut.',
          'Et si l’un des signes de cette page vous décrit, fermez-la. Ce conseil nous coûte une ' +
            'utilisatrice, et il reste le bon. Une application qui ne pourrait se défendre qu’en ' +
            'taisant cela ne mériterait pas d’être construite.',
        ],
      },
    ],

    claims: {},

    practical: [
      {
        title: 'Donnez-lui une question et une date de fin',
        detail:
          'Deux semaines pour trouver où sont les trous valent mieux qu’une année ' +
            'd’enregistrement par habitude, et c’est là qu’est presque toute la valeur.',
      },
      {
        title: 'Surveillez si vous mangez autour de l’application',
        detail:
          'Choisir un aliment parce qu’il s’enregistre proprement plutôt que parce qu’il convient ' +
            'au repas est le premier signe fiable que l’outil est devenu le but.',
      },
      {
        title: 'Utilisez la consultation sans le journal',
        detail:
          'Le plus utile ici, c’est le profil nutritionnel d’un aliment. Cela ne comporte aucun des ' +
            'risques de l’enregistrement quotidien.',
      },
      {
        title: 'Avec un antécédent, ne commencez pas',
        detail:
          'L’auto-surveillance est associée à de moins bons résultats en cas d’antécédent de ' +
            'trouble alimentaire. C’est une recommandation, pas une précaution.',
      },
    ],

    seeAlso: ['protein', 'iron', 'calcium'],

    sources: {
      'tracking-review': 'Auto-surveillance alimentaire et résultats — revue systématique',
      orthorexia: 'Orthorexie et technologies de suivi de santé — une revue',
      'nice-eating': 'Recommandation NICE NG69 — troubles des conduites alimentaires : repérage et prise en charge',
    },
  },
};

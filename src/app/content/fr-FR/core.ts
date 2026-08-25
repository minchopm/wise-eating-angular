import { LocalisedArticle } from '../types';

/**
 * Les huit nutriments les plus recherchés, en français.
 *
 * Huit et non vingt-quatre, délibérément. Les articles anglais sont en ligne
 * depuis quelques jours et nous ne savons pas encore s’ils se positionnent ;
 * traduire les vingt-quatre en quatre langues avant le moindre signal serait un
 * pari, pas une stratégie. Ces huit couvrent l’essentiel de la demande, et le
 * reste suivra quand les données le justifieront.
 *
 * Les chiffres ne sont pas ici. Ils vivent une seule fois, dans
 * nutrient-facts.ts, et sont rattachés au rendu par identifiant.
 */
export const CORE_FR: Readonly<Record<string, LocalisedArticle>> = {
  /* ------------------------------------------------------------ magnésium */
  magnesium: {
    name: 'Magnésium',
    title: 'Magnésium : le minéral qui manque discrètement à presque tout le monde',
    lede:
      'Il est nécessaire à plus de trois cents réactions enzymatiques, l’essentiel est stocké ' +
      'dans l’os où une prise de sang ne le voit pas, et environ la moitié des adultes aux ' +
      'États-Unis en consomme moins que la recommandation. Voici où le trouver.',
    description:
      'Ce que fait le magnésium, quelle quantité il vous faut selon l’âge, et les aliments qui en ' +
      'contiennent le plus — classés à partir des données de l’USDA, pour 100 g.',

    whatItDoes: [
      'Le magnésium est un cofacteur : il ne fait pas le travail lui-même, il est ce dont ' +
        'plusieurs centaines d’enzymes ont besoin pour faire le leur. Parmi elles, celles qui ' +
        'fabriquent les protéines, celles qui copient l’ADN et celles qui transforment les ' +
        'aliments en énergie utilisable — c’est pourquoi un manque se manifeste par une fatigue ' +
        'vague plutôt que par quelque chose de précis.',
      'Il fait aussi face au calcium au niveau du muscle. Le calcium signale à la fibre ' +
        'musculaire de se contracter ; le magnésium fait partie de ce qui lui permet de se ' +
        'relâcher. Le même couple opère dans le tissu nerveux et dans la paroi des vaisseaux.',
      'Environ 60 % du magnésium d’un adulte se trouve dans l’os, l’essentiel du reste à ' +
        'l’intérieur des cellules, et moins de 1 % dans le sang. Ce dernier chiffre compte plus ' +
        'qu’il n’y paraît : un magnésium sanguin normal n’exclut pas des réserves basses, car le ' +
        'corps puise dans l’os pour maintenir le taux sanguin stable.',
    ],

    intake: {
      'infant-0-6': { who: 'Nourrissons, 0–6 mois', note: 'Apport suffisant, via le lait' },
      'infant-7-12': { who: 'Nourrissons, 7–12 mois', note: 'Apport suffisant' },
      'child-1-3': { who: 'Enfants, 1–3 ans' },
      'child-4-8': { who: 'Enfants, 4–8 ans' },
      'child-9-13': { who: 'Enfants, 9–13 ans' },
      'men-19-30': { who: 'Hommes, 19–30' },
      'men-31-plus': { who: 'Hommes, 31 ans et plus' },
      'women-19-30': { who: 'Femmes, 19–30' },
      'women-31-plus': { who: 'Femmes, 31 ans et plus' },
      pregnancy: { who: 'Grossesse', note: 'Selon l’âge' },
    },
    intakeNote:
      'Ce sont des apports journaliers recommandés, sauf indication contraire : pour les ' +
      'nourrissons, les données ne suffisent pas à en fixer un, on donne donc un apport ' +
      'suffisant. Les pourcentages du tableau ci-dessous portent sur la valeur quotidienne de ' +
      '420 mg utilisée sur les étiquettes, un chiffre unique pour tous les plus de quatre ans et ' +
      'donc généreux pour la plupart des lecteurs.',

    foodsIntro:
      'Le magnésium se trouve dans la chlorophylle, donc la feuille verte en porte — mais les ' +
      'graines, les fruits à coque et les légumineuses en portent bien davantage par bouchée, ' +
      'parce qu’elles stockent des minéraux pour une plante qui n’a pas encore poussé.',

    helps: [
      'Le répartir sur la journée : l’absorption baisse à mesure que la dose monte',
      'Les céréales complètes plutôt que raffinées ; la mouture retire le germe et le son, là où il est',
      'Le trempage ou la germination des légumineuses et céréales, qui dégrade une partie des phytates',
    ],
    hinders: [
      'Des suppléments de zinc à très forte dose, qui entrent en concurrence pour l’absorption',
      'Les phytates des céréales complètes et légumineuses non trempées, qui le fixent dans l’intestin',
      'L’alcool chronique et certains diurétiques, qui augmentent les pertes urinaires',
    ],
    absorptionNote:
      'L’absorption à partir des aliments tourne autour de 30–40 % et augmente quand les réserves ' +
      'sont basses, ce qui est le corps faisant la chose sensée. L’oxyde de magnésium des ' +
      'compléments est mal absorbé par rapport au citrate ou au bisglycinate ; si un ' +
      'professionnel de santé vous a conseillé un complément, la forme mérite une question.',

    shortfall: [
      'Les personnes mangeant surtout des céréales raffinées, la mouture en retirant environ 80 %',
      'Les personnes âgées, qui en absorbent moins et en excrètent plus',
      'Les personnes atteintes de diabète de type 2, de maladie cœliaque ou de Crohn, par pertes ou malabsorption',
      'Les usagers au long cours d’inhibiteurs de la pompe à protons, qui peuvent l’abaisser',
    ],

    recipe: {
      title: 'Purée de graines de courge et d’épinards',
      serves: 'À partir de 8 mois, et se multiplie pour le reste de la table',
      ingredients: [
        '2 c. à soupe de graines de courge, non salées',
        '2 grosses poignées d’épinards, lavés',
        '1 petite pomme de terre, pelée et coupée en dés',
        '1 c. à café d’huile d’olive',
        '3–4 c. à soupe d’eau tiède, de lait maternel ou de préparation, pour détendre',
      ],
      steps: [
        {
          title: 'Torréfier les graines',
          detail:
            'Poêle sèche, feu moyen, trois à quatre minutes en remuant sans arrêt. Elles sont ' +
            'prêtes quand elles sentent la noisette et qu’une ou deux commencent à sauter. Les ' +
            'laisser refroidir complètement : chaudes, elles donnent une pâte et non une poudre.',
        },
        {
          title: 'Les moudre',
          detail:
            'En poudre fine, au moulin à épices ou au petit blender. Pour un bébé ce n’est pas ' +
            'facultatif : les graines entières présentent un risque d’étouffement bien au-delà du ' +
            'deuxième anniversaire.',
        },
        {
          title: 'Cuire la pomme de terre',
          detail:
            'À frémissement dans une eau non salée, 12–15 minutes, jusqu’à ce qu’un couteau entre seul.',
        },
        {
          title: 'Faire tomber les épinards',
          detail:
            'Les ajouter les 60 dernières secondes. Au-delà, l’essentiel du folate finit dans ' +
            'l’eau plutôt que dans le plat.',
        },
        {
          title: 'Mixer',
          detail:
            'Égoutter en gardant un peu d’eau de cuisson. Mixer pomme de terre et épinards avec ' +
            'l’huile, puis incorporer les graines moulues. Détendre à la texture habituelle de ' +
            'votre bébé.',
        },
      ],
      note:
        'Introduisez les graines comme tout nouvel aliment : seules d’abord, le matin, et pas en ' +
        'même temps qu’une autre nouveauté. Parlez-en à votre pédiatre avant de commencer, en ' +
        'particulier s’il existe des antécédents familiaux d’allergie.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Magnésium',
      dri: 'Dietary Reference Intakes pour le calcium, le phosphore, le magnésium, la vitamine D et le fluor',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ------------------------------------------------------------------ fer */
  iron: {
    name: 'Fer',
    title: 'Fer : pourquoi les lentilles et les épinards ne sont pas le même fer',
    lede:
      'Le fer des végétaux et celui de la viande sont chimiquement différents, et l’intestin les ' +
      'traite différemment. Comprendre lequel est lequel, c’est la différence entre manger ' +
      'beaucoup de fer et en absorber un peu.',
    description:
      'Fer héminique et non héminique, quelle quantité selon l’âge, ce qui aide et ce qui bloque ' +
      'l’absorption, et les aliments les plus riches en fer — d’après les données de l’USDA.',

    whatItDoes: [
      'L’essentiel du fer de l’organisme fait une seule chose : se tenir au centre de ' +
        'l’hémoglobine et retenir une molécule d’oxygène pour qu’un globule rouge la porte du ' +
        'poumon au muscle. S’il en manque, moins d’oxygène arrive, et c’est pourquoi la première ' +
        'chose que l’on remarque est l’essoufflement dans un escalier qui ne posait pas problème.',
      'Une part plus faible se trouve dans la myoglobine, qui stocke l’oxygène dans le muscle ' +
        'lui-même, et dans des enzymes qui font tourner la machinerie énergétique de chaque ' +
        'cellule. Le fer est aussi nécessaire aux enzymes qui construisent la myéline et ' +
        'plusieurs neurotransmetteurs — d’où le sérieux avec lequel on prend le statut en fer ' +
        'des deux premières années de vie.',
      'Le corps n’a aucun moyen d’excréter le fer volontairement. Il régule en absorbant plus ou ' +
        'moins, ce qui coupe des deux côtés : c’est pourquoi l’absorption monte quand on en ' +
        'manque, et pourquoi prendre des compléments que personne n’a prescrits est une très ' +
        'mauvaise idée.',
    ],

    intake: {
      'infant-0-6': {
        who: 'Nourrissons, 0–6 mois',
        note: 'Apport suffisant ; réserves de naissance',
      },
      'infant-7-12': {
        who: 'Nourrissons, 7–12 mois',
        note: 'Le plus grand saut de tout le tableau',
      },
      'child-1-3': { who: 'Enfants, 1–3 ans' },
      'child-4-8': { who: 'Enfants, 4–8 ans' },
      'men-19-50': { who: 'Hommes, 19–50' },
      'women-19-50': { who: 'Femmes, 19–50', note: 'Pertes menstruelles' },
      'women-51-plus': { who: 'Femmes, 51 ans et plus' },
      pregnancy: { who: 'Grossesse' },
      vegetarian: {
        who: 'Végétariens et végétaliens',
        note: 'Multipliez le chiffre de votre âge et sexe — l’absorption végétale est moindre',
      },
    },
    intakeNote:
      'Le saut à sept mois est le point à retenir. Un bébé naît avec une réserve de fer qui ' +
      's’épuise vers six mois, exactement au moment où le lait seul cesse de couvrir le besoin — ' +
      'd’où la priorité donnée aux premiers aliments riches en fer.',

    foodsIntro:
      'Classés par fer total pour 100 g. À lire en gardant la section suivante en tête : les ' +
      'aliments d’origine animale de cette liste cèdent leur fer bien plus facilement que les ' +
      'végétaux, donc cet ordre n’est pas celui de ce qui atteint réellement le sang.',

    helps: [
      'De la vitamine C au même repas : elle peut multiplier plusieurs fois l’absorption du fer non héminique',
      'Une petite quantité de viande, volaille ou poisson à côté des sources végétales, qui relève les deux',
      'Trempage, germination ou fermentation des légumineuses et céréales, qui dégrade les phytates',
      'Cuire un plat acide dans une poêle en fonte, ce qui en transfère réellement un peu',
    ],
    hinders: [
      'Thé et café pendant le repas : les tanins peuvent réduire l’absorption de plus de moitié',
      'Du calcium pris en même temps, qu’il vienne des produits laitiers ou d’un complément',
      'Les phytates des céréales complètes, légumineuses et fruits à coque non trempés',
      'Les traitements antiacides au long cours, l’acidité gastrique participant à libérer le fer',
    ],
    absorptionNote:
      'C’est tout le propos de l’article. Le fer héminique, de la viande, la volaille et le ' +
      'poisson, est absorbé à environ 15–35 % et n’est presque pas affecté par le reste de ' +
      'l’assiette. Le fer non héminique, des végétaux, de l’œuf et des aliments enrichis, est ' +
      'absorbé à environ 2–20 % — et cette fourchette est fixée presque entièrement par ce avec ' +
      'quoi il est mangé. Les lentilles et les épinards ne sont pas de mauvaises sources ; ce ' +
      'sont des sources qui demandent un filet de citron et pas de thé.',

    shortfall: [
      'Les nourrissons à partir de six mois environ, quand la réserve de naissance s’épuise',
      'Les femmes réglées, et en particulier celles aux règles abondantes',
      'Les personnes enceintes, chez qui le besoin augmente de moitié',
      'Les végétariens et végétaliens, qui ont besoin d’environ 1,8 fois le chiffre du tableau',
      'Les sportifs d’endurance, par hémolyse d’impact et pertes dans la sueur',
    ],

    recipe: {
      title: 'Purée de lentilles corail et poivron rouge',
      serves: 'À partir de 7 mois — une source de fer avec sa vitamine C intégrée',
      ingredients: [
        '3 c. à soupe de lentilles corail, rincées jusqu’à ce que l’eau soit claire',
        '1 petit poivron rouge, épépiné et coupé',
        '1 petite carotte, pelée et coupée',
        '150 ml d’eau ou de bouillon non salé',
        '1 c. à café d’huile d’olive',
        'Un filet de citron, à la fin',
      ],
      steps: [
        {
          title: 'Bien rincer les lentilles',
          detail:
            'À l’eau froide dans une passoire jusqu’à ce qu’elle soit claire et non trouble. ' +
            'Cela emporte l’amidon de surface et une partie des phytates qui fixeraient le fer.',
        },
        {
          title: 'Cuire à frémissement',
          detail:
            'Lentilles, carotte et eau dans une petite casserole. Porter à ébullition puis ' +
            'réduire à frémissement 15 minutes, couvercle entrouvert.',
        },
        {
          title: 'Le poivron, tard',
          detail:
            'Seulement les 5 dernières minutes. La vitamine C se dégrade à la chaleur et avec le ' +
            'temps, et le poivron est là pour la vitamine C autant que pour le goût.',
        },
        {
          title: 'Mixer et finir',
          detail:
            'Mixer lisse avec l’huile, puis ajouter le citron hors du feu. Détendre avec un peu ' +
            'd’eau de cuisson refroidie si c’est plus épais que d’habitude.',
        },
      ],
      note:
        'Servez ce plat à distance d’une tétée ou d’un biberon plutôt qu’avec : le calcium du ' +
        'lait concurrence le fer pour l’absorption. Une heure avant ou après suffit. Comme ' +
        'toujours, demandez à votre pédiatre avant d’introduire un nouvel aliment.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Fer',
      dri: 'Dietary Reference Intakes pour la vitamine A, la vitamine K, le fer, le zinc et autres',
      fdc: 'USDA FoodData Central',
    },
  },

  /* -------------------------------------------------------------- calcium */
  calcium: {
    name: 'Calcium',
    title: 'Calcium : une banque où l’on ne dépose que tant qu’elle est ouverte',
    lede:
      'Presque tout se trouve dans le squelette, et le squelette cesse d’accepter des dépôts ' +
      'quelque part à la fin de la vingtaine. Ce que l’on construit avant est ce que l’on dépense ' +
      'le reste de sa vie.',
    description:
      'Ce que fait le calcium au-delà de l’os, quelle quantité à chaque âge, pourquoi la vitamine ' +
      'D décide si vous l’absorbez, et les aliments les plus riches — d’après les données USDA.',

    whatItDoes: [
      'Environ 99 % du calcium du corps est structurel : c’est le minéral qui rend l’os et la ' +
        'dent rigides. Le 1 % restant fait quelque chose de plus urgent : chaque contraction ' +
        'musculaire, chaque signal nerveux et chaque étape de la coagulation exige des ions ' +
        'calcium à une concentration très précise.',
      'Ce 1 % est défendu absolument. Si la calcémie commence à baisser, la parathormone monte et ' +
        'le corps dissout de l’os pour la rétablir. C’est pourquoi une prise de sang ne dit ' +
        'presque rien de l’apport en calcium : le chiffre reste normal jusque bien après que le ' +
        'squelette l’a payé pendant des années.',
      'La masse osseuse s’accumule pendant l’enfance et l’adolescence, culmine entre vingt-cinq ' +
        'et trente ans, puis décline lentement. L’adolescence est le plus gros dépôt que ' +
        'quiconque effectue, et c’est pourquoi la recommandation pour une personne de quatorze ' +
        'ans est plus élevée que pour ses parents.',
    ],

    intake: {
      'infant-0-6': { who: 'Nourrissons, 0–6 mois', note: 'Apport suffisant' },
      'infant-7-12': { who: 'Nourrissons, 7–12 mois', note: 'Apport suffisant' },
      'child-1-3': { who: 'Enfants, 1–3 ans' },
      'child-4-8': { who: 'Enfants, 4–8 ans' },
      'teen-9-18': {
        who: 'De 9 à 18 ans',
        note: 'Le chiffre le plus élevé du tableau, et pas par hasard',
      },
      'adults-19-50': { who: 'Adultes, 19–50' },
      'men-51-70': { who: 'Hommes, 51–70' },
      'women-51-plus': {
        who: 'Femmes, 51 ans et plus',
        note: 'La perte osseuse s’accélère après la ménopause',
      },
      'age-71-plus': { who: 'Adultes, 71 ans et plus' },
    },
    intakeNote:
      'Plus n’est pas mieux. Au-delà d’environ 2 000–2 500 mg par jour, alimentation et ' +
      'compléments confondus, le bénéfice disparaît des données et le risque de calculs rénaux ' +
      'augmente. Le calcium est un nutriment dont la plage utile a un plafond autant qu’un ' +
      'plancher.',

    foodsIntro:
      'Les produits laitiers dominent en quantité, mais pas en absorption : le calcium des ' +
      'légumes-feuilles pauvres en oxalates, comme le chou kale ou le pak-choï, est capté à peu ' +
      'près deux fois mieux que celui du lait. L’épinard est l’exception célèbre : riche en ' +
      'calcium, dont presque rien n’est disponible.',

    helps: [
      'La vitamine D, sans laquelle l’intestin n’absorbe qu’une fraction de ce qui arrive',
      'Fractionner l’apport : l’absorption est la plus efficace à des doses d’environ 500 mg ou moins',
      'Les légumes-feuilles pauvres en oxalates : kale, pak-choï, brocoli, cresson',
      'La fermentation et le trempage, qui réduisent les phytates des légumineuses et céréales',
    ],
    hinders: [
      'Les oxalates, raison pour laquelle l’épinard, la rhubarbe et la bette cèdent très peu du leur',
      'Un apport en sodium très élevé, qui augmente le calcium perdu dans les urines',
      'L’excès de caféine et d’alcool, modérément',
      'Le prendre en même temps qu’un complément de fer : chacun bloque l’autre',
    ],
    absorptionNote:
      'L’absorption avoisine 30 % pour la plupart des aliments et baisse quand la dose monte, ce ' +
      'qui plaide pour l’étaler sur les repas plutôt que de prendre un gros complément. Elle ' +
      'baisse aussi avec l’âge : une personne âgée absorbe nettement moins qu’un adolescent du ' +
      'même verre de lait, et c’est en partie pourquoi la recommandation remonte après ' +
      'soixante-dix ans.',

    shortfall: [
      'Les adolescents, qui en ont le plus besoin et boivent souvent le moins de lait',
      'Les femmes ménopausées, par la baisse des œstrogènes et un remodelage osseux plus rapide',
      'Les personnes évitant les produits laitiers sans les remplacer par des alternatives enrichies',
      'Les personnes intolérantes au lactose ayant supprimé le laitier au lieu d’en changer la forme',
      'Toute personne sous corticoïdes au long cours',
    ],

    recipe: {
      title: 'Kale braisé aux haricots blancs et au citron',
      serves: 'Deux, en accompagnement ; une vingtaine de minutes',
      ingredients: [
        '250 g de kale, tiges retirées, feuilles déchirées',
        '1 boîte de haricots blancs, égouttés et rincés',
        '2 gousses d’ail, émincées',
        '2 c. à soupe d’huile d’olive',
        '100 ml d’eau ou de bouillon',
        'Zeste et jus d’un demi-citron',
        'Poivre noir',
      ],
      steps: [
        {
          title: 'Retirer les tiges',
          detail:
            'Tenez la base de la tige et tirez la feuille de l’autre main. Les tiges se mangent, ' +
            'mais mettent trois fois plus longtemps à s’attendrir, et ce plat est court.',
        },
        {
          title: 'Attendrir l’ail',
          detail:
            'Huile d’olive dans une large poêle à feu doux, ail deux minutes jusqu’à ce qu’il ' +
            'embaume et colore à peine. L’ail bruni devient amer et rien ici ne le masque.',
        },
        {
          title: 'Braiser le kale',
          detail:
            'Feuilles et eau dedans, couvercle, huit à dix minutes à feu moyen-doux jusqu’à ce ' +
            'que le kale soit tendre mais encore vert. Un kale devenu olive a perdu la texture ' +
            'qui justifiait de le cuisiner.',
        },
        {
          title: 'Finir',
          detail:
            'Les haricots pour réchauffer, puis le zeste et le jus hors du feu. Poivre, et pas de ' +
            'sel avant d’avoir goûté : les haricots en boîte apportent la leur.',
        },
      ],
      note:
        'Le kale est un légume-feuille pauvre en oxalates, et c’est tout l’intérêt : son calcium ' +
        'est absorbé environ deux fois mieux que celui de l’épinard. Le citron n’est pas là que ' +
        'pour le goût — l’acide aide aussi le fer des haricots.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Calcium',
      dri: 'Dietary Reference Intakes pour le calcium et la vitamine D',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ----------------------------------------------------------------- zinc */
  zinc: {
    name: 'Zinc',
    title: 'Zinc : celui que l’on remarque au goût',
    lede:
      'Le corps n’en stocke presque pas, ce qui veut dire que l’apport doit être régulier plutôt ' +
      'qu’occasionnel. C’est aussi pourquoi un goût émoussé est l’un des premiers signes que ' +
      'l’apport est bas depuis quelque temps.',
    description:
      'Ce que fait le zinc pour l’immunité, la cicatrisation et le goût, quelle quantité selon ' +
      'l’âge, pourquoi les phytates comptent, et les aliments les plus riches — données USDA.',

    whatItDoes: [
      'Le zinc est structurel d’une manière qui n’est pas celle de la plupart des minéraux. Des ' +
        'centaines de protéines se replient autour d’un ion zinc pour tenir leur forme — les ' +
        'motifs en « doigt de zinc » qui permettent aux facteurs de transcription d’agripper ' +
        'l’ADN sont les plus connus. Sans zinc, ces protéines ne fonctionnent pas lentement : ' +
        'elles ne se forment pas.',
      'Il est aussi central pour l’immunité et la cicatrisation, qui dépendent toutes deux de ' +
        'cellules se divisant vite. Tout tissu à renouvellement rapide — muqueuse intestinale, ' +
        'peau, cellules immunitaires, papilles — ressent le manque en premier.',
      'Il n’existe pas de réserve de zinc digne de ce nom. Contrairement au fer, que le corps ' +
        'thésaurise, le zinc doit arriver plus ou moins en continu, et le statut chute en ' +
        'quelques semaines si l’apport baisse.',
    ],

    intake: {
      'infant-0-6': { who: 'Nourrissons, 0–6 mois', note: 'Apport suffisant' },
      'infant-7-12': { who: 'Nourrissons, 7–12 mois' },
      'child-1-3': { who: 'Enfants, 1–3 ans' },
      'child-4-8': { who: 'Enfants, 4–8 ans' },
      'child-9-13': { who: 'Enfants, 9–13 ans' },
      'men-14-plus': { who: 'Hommes, 14 ans et plus' },
      'women-19-plus': { who: 'Femmes, 19 ans et plus' },
      pregnancy: { who: 'Grossesse' },
      breastfeeding: { who: 'Allaitement' },
    },
    intakeNote:
      'Les végétariens peuvent avoir besoin de jusqu’à 50 % de plus que ces chiffres. Ce n’est ' +
      'pas une marge d’arrondi : cela reflète la teneur en phytates d’une alimentation végétale, ' +
      'qui fixe le zinc dans l’intestin et peut diviser par deux ce qui reste disponible.',

    foodsIntro:
      'Les huîtres sont si loin devant qu’elles faussent l’échelle : une seule portion porte ' +
      'l’équivalent de plusieurs jours. En dessous, la liste est viande rouge, coquillages, ' +
      'graines et légumineuses, dans cet ordre de disponibilité plutôt que de quantité.',

    helps: [
      'Des protéines animales au même repas, ce qui améliore l’absorption de tout ce qu’il y a dans l’assiette',
      'Trempage, germination, fermentation et panification au levain — tous réduisent nettement les phytates',
      'Le levain plutôt que le pain azyme, pour la même raison',
    ],
    hinders: [
      'Les phytates des céréales complètes et légumineuses non traitées, le principal inhibiteur',
      'Des compléments de fer à forte dose pris à jeun en même temps',
      'Un apport calcique très élevé, modérément',
      'Diarrhée chronique ou maladie inflammatoire de l’intestin, par perte directe',
    ],
    absorptionNote:
      'Le rapport phytates/zinc d’un régime prédit mieux l’absorption que sa teneur en zinc. ' +
      'C’est pourquoi la même quantité de zinc venue du bœuf et du pain complet n’est pas ' +
      'équivalente, et pourquoi les méthodes traditionnelles — tremper les légumineuses la ' +
      'veille, faire lever le pain — se révèlent avoir fait un vrai travail nutritionnel depuis ' +
      'toujours.',

    shortfall: [
      'Les végétariens et végétaliens, par les phytates plutôt que par l’apport',
      'Les personnes âgées, par un apport plus faible et une absorption réduite à la fois',
      'Les personnes atteintes de maladie de Crohn, de maladie cœliaque ou de diarrhée chronique',
      'Les personnes drépanocytaires',
      'Les gros consommateurs d’alcool, par absorption réduite et pertes urinaires accrues',
    ],

    recipe: {
      title: 'Sofrito de bœuf aux graines de courge',
      serves: 'Deux, environ vingt-cinq minutes',
      ingredients: [
        '250 g de bœuf haché',
        '3 c. à soupe de graines de courge',
        '1 oignon, finement coupé',
        '1 poivron rouge, coupé en dés',
        '2 gousses d’ail, écrasées',
        '1 c. à café de paprika fumé',
        '1 c. à soupe d’huile d’olive',
        '1 boîte de tomates concassées',
      ],
      steps: [
        {
          title: 'Torréfier les graines d’abord',
          detail:
            'Poêle sèche, trois minutes, puis les réserver. Le faire avant la viande garde la ' +
            'poêle propre et évite que les graines cuisent à la vapeur dans le gras.',
        },
        {
          title: 'Bien saisir la viande',
          detail:
            'Feu vif, en une seule couche, et sans y toucher pendant deux minutes. Une poêle ' +
            'surchargée donne une viande grise, et la viande grise n’a rien du goût que la ' +
            'coloration apporte.',
        },
        {
          title: 'Monter le sofrito',
          detail:
            'Viande réservée, feu baissé, oignon et poivron huit minutes jusqu’à tendreté et ' +
            'douceur. Ail et paprika la dernière minute seulement : le paprika brûle vite et ' +
            'devient âcre.',
        },
        {
          title: 'Mijoter',
          detail:
            'Tomates et viande de retour, quinze minutes à petit frémissement. Parsemez les ' +
            'graines à table pour qu’elles restent croquantes.',
        },
      ],
      note:
        'Bœuf et graines ensemble, c’est tout le propos : la protéine animale améliore la ' +
        'quantité de zinc absorbée depuis les graines, que les phytates freinent lorsqu’elles ' +
        'sont seules.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Zinc',
      dri: 'Dietary Reference Intakes pour la vitamine A, la vitamine K, le fer, le zinc et autres',
      fdc: 'USDA FoodData Central',
    },
  },

  /* --------------------------------------------------------- vitamine D */
  'vitamin-d': {
    name: 'Vitamine D',
    title: 'Vitamine D : celle que l’on ne mange pour ainsi dire pas',
    lede:
      'Presque tous les autres nutriments viennent de l’alimentation. Celui-ci est fabriqué dans ' +
      'la peau à partir de la lumière du soleil, et c’est pourquoi les conseils à son sujet ' +
      'changent avec la latitude, la saison et le temps passé à l’intérieur.',
    description:
      'Pourquoi la vitamine D est différente de toutes les autres, quelle quantité selon l’âge, ' +
      'et les rares aliments qui en contiennent réellement — d’après les données de l’USDA.',

    whatItDoes: [
      'La vitamine D gouverne la quantité de calcium absorbée depuis l’alimentation. Sans elle en ' +
        'quantité suffisante, on peut avoir un régime riche en calcium et ne pas le faire entrer ' +
        'dans l’os — ce que sont en réalité le rachitisme chez l’enfant et l’ostéomalacie chez ' +
        'l’adulte.',
      'Elle se comporte davantage comme une hormone que comme une vitamine. La peau la fabrique à ' +
        'partir des UVB, le foie puis les reins la convertissent en forme active, et l’on trouve ' +
        'des récepteurs dans des tissus qui n’ont rien d’évident à voir avec l’os : cellules ' +
        'immunitaires, muscle, muqueuse intestinale.',
      'Étant liposoluble, elle est stockée plutôt qu’éliminée. C’est utile pendant un hiver, et ' +
        'c’est aussi pourquoi la vitamine D est l’un des rares nutriments où se supplémenter à la ' +
        'légère peut réellement nuire.',
    ],

    intake: {
      'infant-0-12': { who: 'Nourrissons, 0–12 mois', note: 'Apport suffisant' },
      'age-1-70': { who: 'Enfants et adultes, 1–70' },
      'age-71-plus': { who: 'Adultes, 71 ans et plus' },
      pregnancy: { who: 'Grossesse et allaitement' },
    },
    intakeNote:
      'Les microgrammes et les unités internationales sont tous deux courants, et 1 µg = 40 UI, ' +
      'source fréquente de confusion sur les étiquettes. Ces chiffres supposent une exposition ' +
      'solaire minimale : ils sont fixés exprès pour le pire cas, parce que l’alternative est un ' +
      'conseil qui ne marche qu’en juillet.',

    foodsIntro:
      'C’est la liste réellement utile la plus courte du site, et c’est là le résultat. En dehors ' +
      'des poissons gras, du jaune d’œuf et de ce qui a été enrichi exprès, l’alimentation n’est ' +
      'pas d’où vient la vitamine D.',

    helps: [
      'La prendre avec du gras, puisqu’elle est liposoluble et qu’un repas sans gras en absorbe moins',
      'Du soleil sur la peau — midi, bras et visage, et bien moins de temps qu’on ne le suppose',
      'Les aliments enrichis, qui dans beaucoup de pays sont de loin la principale source alimentaire',
    ],
    hinders: [
      'La latitude et la saison : au-delà d’environ 37°, le soleil d’hiver n’en produit presque pas',
      'La crème solaire, le verre et les vêtements, qui bloquent tous les UVB',
      'Une peau plus foncée, qui demande une exposition plus longue pour la même quantité',
      'L’âge, qui réduit l’efficacité de la synthèse cutanée',
    ],

    shortfall: [
      'Les nourrissons allaités, d’où la supplémentation recommandée en routine',
      'Les personnes qui se couvrent, travaillent à l’intérieur ou vivent à des latitudes nordiques l’hiver',
      'Les personnes à peau plus foncée vivant loin de l’équateur',
      'Les personnes âgées, par moins de temps dehors et une synthèse moins efficace',
      'Les personnes en malabsorption des graisses — maladie cœliaque, Crohn, après chirurgie bariatrique',
    ],

    recipe: {
      title: 'Purée de saumon et patate douce',
      serves: 'À partir de 7 mois ; l’un des rares repas qui soit une vraie source alimentaire',
      ingredients: [
        '40 g de filet de saumon, peau et arêtes retirées avec soin',
        '1 petite patate douce, pelée et coupée en dés',
        '1 c. à café d’huile d’olive ou de beurre doux',
        '2–3 c. à soupe d’eau tiède, de lait maternel ou de préparation',
      ],
      steps: [
        {
          title: 'Vérifier le poisson deux fois',
          detail:
            'Passez un doigt sur le filet dans les deux sens. Les arêtes fines sont dures, ' +
            'pointues et faciles à manquer, et c’est l’étape à ne pas presser.',
        },
        {
          title: 'Cuire à la vapeur ensemble',
          detail:
            'Patate douce 12 minutes, puis le saumon par-dessus 6 à 8 minutes de plus jusqu’à ce ' +
            'qu’il s’effeuille. À la vapeur plutôt qu’à l’eau, le gras — et la vitamine D qui y ' +
            'est dissoute — reste dans le plat et non dans l’eau.',
        },
        {
          title: 'Effeuiller et revérifier',
          detail:
            'Séparez le saumon à la fourchette et regardez une fois de plus s’il reste des arêtes.',
        },
        {
          title: 'Écraser',
          detail:
            'Écrasez la patate douce avec l’huile, incorporez le saumon et détendez à la texture ' +
            'que votre bébé maîtrise. Servir tiède, pas chaud.',
        },
      ],
      note:
        'Le poisson gras figure sur la plupart des listes de premiers aliments dès six mois, et ' +
        'c’est aussi un allergène fréquent : introduisez-le seul, tôt dans la journée. Les ' +
        'recommandations officielles limitent le poisson gras à deux portions par semaine chez le ' +
        'jeune enfant. Demandez d’abord à votre pédiatre.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Vitamine D',
      dri: 'Dietary Reference Intakes pour le calcium et la vitamine D',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ------------------------------------------------------- vitamine B12 */
  'vitamin-b12': {
    name: 'Vitamine B12',
    title: 'Vitamine B12 : uniquement d’origine animale, ou d’usine',
    lede:
      'Aucune plante ne fabrique la B12. Aucun animal non plus : ce sont des bactéries qui la ' +
      'fabriquent, et les animaux qui l’accumulent. Ce seul fait décide de tout, à commencer par ' +
      'qui doit y faire attention.',
    description:
      'D’où vient réellement la vitamine B12, quelle quantité il vous faut, pourquoi l’absorption ' +
      'échoue avec l’âge et les médicaments, et les aliments les plus riches — données USDA.',

    whatItDoes: [
      'La B12 est nécessaire pour terminer la fabrication des globules rouges. Sans elle, ils ' +
        'sortent gros, peu nombreux et mal formés — anémie mégaloblastique — et la fatigue qui ' +
        'suit est la même que celle du manque de fer, par un mécanisme entièrement différent.',
      'Elle entretient aussi la gaine de myéline autour des nerfs. C’est la moitié qui compte le ' +
        'plus, car les lésions nerveuses d’une carence installée peuvent devenir permanentes, et ' +
        'elles peuvent apparaître alors que la numération sanguine paraît encore normale.',
      'Et elle travaille avec le folate dans la réaction qui recycle l’homocystéine. Prendre ' +
        'beaucoup de folate peut corriger l’anémie d’une carence en B12 pendant que l’atteinte ' +
        'nerveuse se poursuit en dessous — précisément pourquoi se traiter soi-même avec un ' +
        'complexe B est imprudent.',
    ],

    intake: {
      'infant-0-6': { who: 'Nourrissons, 0–6 mois', note: 'Apport suffisant' },
      'infant-7-12': { who: 'Nourrissons, 7–12 mois', note: 'Apport suffisant' },
      'child-1-3': { who: 'Enfants, 1–3 ans' },
      'child-4-8': { who: 'Enfants, 4–8 ans' },
      'child-9-13': { who: 'Enfants, 9–13 ans' },
      adults: { who: 'Adultes' },
      pregnancy: { who: 'Grossesse' },
      breastfeeding: { who: 'Allaitement' },
    },
    intakeNote:
      'Ce sont de petits chiffres, et cela induit en erreur. Le problème avec la B12 n’est ' +
      'presque jamais la quantité dans l’assiette — c’est de savoir si le corps peut encore la ' +
      'prendre dans l’assiette.',

    foodsIntro:
      'Le foie et les coquillages sont si loin devant tout le reste que la liste n’est guère un ' +
      'classement. Notez ce qui manque : aucun aliment végétal non enrichi n’y figure, parce ' +
      'qu’aucun n’en contient.',

    helps: [
      'L’acidité gastrique et le facteur intrinsèque, qui libèrent la B12 des aliments et la font traverser l’intestin',
      'Les aliments enrichis et les compléments, où la B12 est déjà libre',
      'Répartir l’apport : l’absorption par repas plafonne à quelques microgrammes',
    ],
    hinders: [
      'La metformine, prise au long cours',
      'Les inhibiteurs de la pompe à protons et anti-H2, qui réduisent l’acidité nécessaire à sa libération',
      'La gastrite atrophique, fréquente avec l’âge, qui réduit le facteur intrinsèque',
      'La chirurgie gastrique ou iléale, qui retire le tissu qui la produit ou l’absorbe',
    ],
    absorptionNote:
      'La spiruline, le nori et les aliments fermentés sont souvent cités comme sources ' +
      'végétales. L’essentiel de ce qu’ils contiennent sont des analogues de B12 qui occupent le ' +
      'récepteur sans faire le travail, et certaines données suggèrent qu’ils aggravent les ' +
      'choses plutôt qu’ils ne les améliorent. Toute personne ne mangeant aucun aliment animal a ' +
      'besoin d’un complément ou d’aliments enrichis : ce n’est pas une question de préférence ' +
      'alimentaire.',

    shortfall: [
      'Les végétaliens et végétariens de longue date sans aliments enrichis ni complément',
      'Les adultes à partir d’une cinquantaine d’années, par la baisse de l’acidité gastrique',
      'Les personnes sous metformine ou sous antiacides au long cours',
      'Les nourrissons allaités de mères carencées : les réserves à la naissance sont faibles et s’épuisent vite',
      'Les personnes après chirurgie bariatrique ou avec un Crohn touchant l’iléon',
    ],

    recipe: {
      title: 'Purée de foie de volaille et pomme',
      serves: 'À partir de 7 mois, une à deux fois par mois au maximum',
      ingredients: [
        '30 g de foie de volaille, paré',
        '1 petite pomme douce, pelée et épépinée',
        '1 petite pomme de terre, pelée et coupée en dés',
        '1 c. à café de beurre doux ou d’huile d’olive',
        'De l’eau pour détendre',
      ],
      steps: [
        {
          title: 'Parer le foie',
          detail: 'Retirez le tissu conjonctif clair et les zones verdâtres. Rincez et épongez.',
        },
        {
          title: 'Cuire la pomme de terre et la pomme',
          detail:
            'Ensemble dans une eau non salée, environ 12 minutes, jusqu’à ce que les deux soient tendres.',
        },
        {
          title: 'Cuire le foie à cœur',
          detail:
            'Doucement dans le beurre, 5 à 6 minutes en retournant, jusqu’à ce qu’il ne reste ' +
            'aucun rosé nulle part. Avec les abats, « juste cuit » ne suffit pas pour un bébé.',
        },
        {
          title: 'Mixer',
          detail:
            'Le tout ensemble, lisse, en détendant avec l’eau de cuisson. La pomme fait ici un ' +
            'vrai travail : elle adoucit une saveur forte.',
        },
      ],
      note:
        'Le foie est extraordinairement riche en vitamine A autant qu’en B12, et la vitamine A ' +
        's’accumule. Deux fois par mois est le plafond habituel pour un jeune enfant, et le foie ' +
        'n’est pas recommandé du tout pendant la grossesse pour la même raison. Demandez à votre ' +
        'pédiatre avant de commencer.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Vitamine B12',
      dri: 'Dietary Reference Intakes pour la thiamine, la riboflavine, la niacine, la vitamine B6, le folate et la vitamine B12',
      fdc: 'USDA FoodData Central',
    },
  },

  /* --------------------------------------------------------------- folate */
  folate: {
    name: 'Folate',
    title: 'Folate : la vitamine qui doit être là avant que vous le sachiez',
    lede:
      'Le tube neural se ferme dans les 28 premiers jours de grossesse — souvent avant qu’une ' +
      'femme sache qu’elle est enceinte. Ce seul point de calendrier explique pourquoi le folate ' +
      'est ajouté à la farine dans plus de quatre-vingts pays.',
    description:
      'Folate et acide folique, quelle quantité il vous faut, pourquoi le moment dans la ' +
      'grossesse est tout, et les aliments les plus riches — d’après les données de l’USDA.',

    whatItDoes: [
      'Le folate transporte des unités à un carbone, et les réactions qui en ont besoin sont ' +
        'celles qui construisent l’ADN. Tout tissu se divisant vite — moelle osseuse, muqueuse ' +
        'intestinale, un embryon en croissance — dépend d’un apport régulier.',
      'Sans lui, les cellules commencent leur division et ne peuvent la terminer. Dans la moelle, ' +
        'cela produit une anémie mégaloblastique, le même tableau que la carence en B12, parce ' +
        'que B12 et folate se rencontrent dans la même réaction.',
      'Chez un embryon, la défaillance est structurelle. Le tube neural — qui devient le cerveau ' +
        'et la moelle épinière — se ferme entre le 21e et le 28e jour après la conception. Un ' +
        'folate suffisant à ce moment-là réduit nettement le risque de spina bifida et ' +
        'd’anencéphalie. Un folate suffisant deux mois plus tard n’y change rien.',
    ],

    intake: {
      'infant-0-6': { who: 'Nourrissons, 0–6 mois', note: 'Apport suffisant' },
      'infant-7-12': { who: 'Nourrissons, 7–12 mois', note: 'Apport suffisant' },
      'child-1-3': { who: 'Enfants, 1–3 ans' },
      'child-4-8': { who: 'Enfants, 4–8 ans' },
      'child-9-13': { who: 'Enfants, 9–13 ans' },
      'adults-14-plus': { who: '14 ans et plus' },
      pregnancy: { who: 'Grossesse' },
      breastfeeding: { who: 'Allaitement' },
    },
    intakeNote:
      'DFE signifie équivalents folates alimentaires, et ils existent parce que l’acide folique ' +
      'des compléments et des aliments enrichis est absorbé environ 1,7 fois mieux que le folate ' +
      'des aliments. La recommandation de santé publique dans la plupart des pays est que toute ' +
      'personne susceptible d’être enceinte prenne 400 µg d’acide folique par jour — non pas une ' +
      'fois enceinte, mais avant, précisément à cause du calendrier ci-dessus.',

    foodsIntro:
      'Le nom vient de folium, feuille en latin, et le classement le confirme : légumes-feuilles, ' +
      'légumineuses, foie et — là où la loi l’impose — farine enrichie.',

    helps: [
      'Manger les légumes verts crus ou peu cuits, le folate étant sensible à la chaleur',
      'Les légumineuses, qui en sont denses et le conservent mieux que les feuilles',
      'La farine et les céréales enrichies, là où c’est obligatoire',
    ],
    hinders: [
      'Une ébullition prolongée, qui peut en détruire ou en emporter l’essentiel',
      'L’alcool, qui gêne l’absorption et augmente l’excrétion',
      'Le méthotrexate et certains antiépileptiques, qui sont des antagonistes du folate',
      'La maladie cœliaque et d’autres malabsorptions',
    ],
    absorptionNote:
      'Une mise en garde sur les compléments. Un apport élevé en acide folique peut masquer ' +
      'l’anémie d’une carence en B12 pendant que l’atteinte neurologique progresse sans être vue ' +
      '— d’où la limite supérieure de 1 000 µg chez l’adulte, et d’où le fait qu’un complexe B ' +
      'soit un mauvais moyen de traiter soi-même une fatigue.',

    shortfall: [
      'Toute personne susceptible d’être enceinte et qui ne se supplémente pas',
      'Les personnes ayant un trouble de l’usage de l’alcool',
      'Les personnes sous méthotrexate, sulfasalazine ou certains antiépileptiques',
      'Les personnes atteintes de maladie cœliaque ou de MICI',
    ],

    recipe: {
      title: 'Salade tiède de lentilles, asperges et œuf mollet',
      serves: 'Deux, vingt-cinq minutes',
      ingredients: [
        '150 g de lentilles du Puy',
        '250 g d’asperges, pieds ligneux cassés',
        '2 œufs',
        '2 c. à soupe d’huile d’olive',
        '1 c. à soupe de vinaigre de Xérès',
        '1 échalote, finement ciselée',
        'Une poignée de persil',
      ],
      steps: [
        {
          title: 'Faire frémir les lentilles, ne pas les bouillir',
          detail:
            'Vingt minutes à frémissement à peine visible, dans une eau non salée. Une grosse ' +
            'ébullition fend leur peau et l’on obtient une soupe.',
        },
        {
          title: 'Cuire les asperges brièvement à la vapeur',
          detail:
            'Trois à quatre minutes, encore croquantes. Le folate est l’une des vitamines les ' +
            'plus fragiles à la chaleur, et une asperge bouillie jusqu’à mollesse a rendu ' +
            'l’essentiel du sien.',
        },
        {
          title: 'Œufs mollets',
          detail:
            'Six minutes trente à partir de l’ébullition, puis eau froide et écalage délicat.',
        },
        {
          title: 'Assaisonner tiède',
          detail:
            'Échalote, vinaigre et huile sur les lentilles égouttées encore chaudes ; asperges et ' +
            'persil incorporés ; œufs coupés en deux par-dessus.',
        },
      ],
      note:
        'Lentilles, asperges et jaune d’œuf sont tous trois de bonnes sources de folate. Cuire ' +
        'peu n’est pas ici une coquetterie : c’est l’essentiel de l’écart entre le chiffre de ' +
        'l’étiquette et le chiffre dans l’assiette.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Folate',
      dri: 'Dietary Reference Intakes pour la thiamine, la riboflavine, la niacine, la vitamine B6, le folate et la vitamine B12',
      fdc: 'USDA FoodData Central',
    },
  },

  /* -------------------------------------------------------------- protéines */
  protein: {
    name: 'Protéines',
    title: 'Protéines : la recommandation est un plancher, pas un objectif',
    lede:
      'L’apport recommandé est la quantité qui évite la carence chez presque tout le monde — ce ' +
      'qui est une autre question que celle de la quantité optimale pour un sportif, ou pour ' +
      'quelqu’un de plus de soixante-dix ans qui essaie de ne pas perdre de muscle.',
    description:
      'À quoi servent les protéines au-delà du muscle, quelle quantité selon l’âge et le poids, ' +
      'pourquoi la recommandation est un minimum, et les aliments les plus riches — données USDA.',

    whatItDoes: [
      'Les protéines ne sont pas d’abord un carburant. Elles sont un matériau : enzymes, ' +
        'anticorps, protéines de transport, collagène, la machinerie contractile du muscle et ' +
        'toute hormone qui n’est pas un stéroïde. Le corps n’a pas de réserve de protéines comme ' +
        'il a une réserve de graisse — tout ce qui est protéine fait déjà un travail, donc un ' +
        'manque signifie démonter quelque chose qui servait.',
      'Neuf des vingt acides aminés ne peuvent pas être fabriqués et doivent arriver par ' +
        'l’alimentation. « Complète » signifie qu’une protéine les contient tous les neuf en ' +
        'proportion utile ; les protéines animales le sont généralement, et la plupart des ' +
        'protéines végétales isolées sont pauvres en un ou deux.',
      'C’est moins un problème qu’on ne l’a cru. Manger une variété de protéines végétales sur ' +
        'une journée couvre largement le profil — l’idée qu’il fallait les associer au même repas ' +
        'a été abandonnée il y a des décennies.',
    ],

    intake: {
      'infant-0-6': { who: 'Nourrissons, 0–6 mois', note: 'Apport suffisant' },
      'infant-7-12': { who: 'Nourrissons, 7–12 mois' },
      'child-1-3': { who: 'Enfants, 1–3 ans' },
      'child-4-8': { who: 'Enfants, 4–8 ans' },
      'child-9-13': { who: 'Enfants, 9–13 ans' },
      'men-19-plus': { who: 'Hommes, 19 ans et plus', note: 'À un poids corporel de référence' },
      'women-19-plus': { who: 'Femmes, 19 ans et plus', note: 'À un poids corporel de référence' },
      'per-kilo': {
        who: 'Adultes, par kilogramme',
        note: 'Le chiffre dont les autres sont dérivés',
      },
      pregnancy: { who: 'Grossesse et allaitement' },
    },
    intakeNote:
      'Le chiffre par kilogramme est la vraie recommandation ; les totaux en grammes en sont ' +
      'l’application à un corps moyen. Et c’est explicitement un minimum. Les travaux chez les ' +
      'personnes âgées et chez celles qui s’entraînent sérieusement pointent vers des apports ' +
      'plus élevés — souvent 1,0–1,6 g/kg — pour conserver le muscle. C’est une autre question ' +
      'que celle à laquelle répond la recommandation, et il vaut mieux ne pas les confondre.',

    foodsIntro:
      'Classés par grammes pour 100 g. À lire en sachant que la concentration n’est pas toute ' +
      'l’histoire : un aliment peut être à 25 % de protéines et contribuer moins sur une journée ' +
      'qu’un autre, moins dense, dont on mange davantage.',

    helps: [
      'Les répartir sur les repas plutôt que charger le dîner : la synthèse musculaire répond par repas',
      'La variété entre sources végétales, qui couvre le profil d’acides aminés sans planification',
      'La musculation, sans laquelle les protéines supplémentaires ne sont guère que des calories',
    ],
    hinders: [
      'Un apport énergétique total très bas, où les protéines sont brûlées comme carburant',
      'L’âge avancé, qui émousse la réponse musculaire à une dose donnée',
      'Certaines maladies rénales, où l’apport relève d’un avis médical et non d’un article',
    ],
    absorptionNote:
      'La qualité des protéines se mesure, et la référence actuelle est le DIAAS, qui note la ' +
      'digestibilité réelle de chaque acide aminé essentiel. Produits laitiers et œuf obtiennent ' +
      'les meilleurs scores ; la plupart des sources végétales isolées sont plus basses, surtout ' +
      'parce que les fibres et les antinutriments ralentissent la digestion. Cela compte beaucoup ' +
      'à faible apport total, et presque pas à apport généreux.',

    shortfall: [
      'Les personnes âgées, dont l’apport baisse souvent au moment où le besoin augmente',
      'Les personnes en convalescence après une maladie, une opération ou une blessure',
      'Les personnes suivant des régimes très restrictifs pour maigrir',
      'Certains végétaliens à faible apport énergétique, même si une alimentation végétale variée le couvre facilement',
    ],

    recipe: {
      title: 'Bol de yaourt grec, graines et lentilles croustillantes',
      serves: 'Une personne, dix minutes',
      ingredients: [
        '200 g de yaourt grec, entier',
        '3 c. à soupe de lentilles vertes cuites',
        '1 c. à soupe de graines de courge',
        '1 c. à soupe de graines de chanvre',
        '1 c. à café d’huile d’olive',
        'Zeste de citron',
        'Poivre noir et sel en flocons',
      ],
      steps: [
        {
          title: 'Prendre un yaourt égoutté',
          detail:
            'Grec ou skyr, pas un yaourt ordinaire. L’égouttage retire le lactosérum et double à ' +
            'peu près les protéines par cuillère, ce qui est toute la raison d’être du plat.',
        },
        {
          title: 'Faire croustiller les lentilles',
          detail:
            'Lentilles cuites, bien épongées, dans une poêle chaude avec l’huile quatre minutes ' +
            'jusqu’à ce que certaines éclatent et croustillent. Des lentilles humides ne ' +
            'croustilleront pas.',
        },
        {
          title: 'Torréfier les graines avec elles',
          detail: 'Les quatre-vingt-dix dernières secondes, pour qu’elles chauffent sans brûler.',
        },
        {
          title: 'Monter en salé',
          detail:
            'Yaourt dans le bol, lentilles et graines dessus, zeste de citron, sel et beaucoup de ' +
            'poivre. C’est un petit-déjeuner salé et il y gagne.',
        },
      ],
      note:
        'Une trentaine de grammes de protéines avec trois ingrédients, en dix minutes — ce qui ' +
        'compte plus que le chiffre, parce qu’un objectif protéique se tient avec ce que l’on va ' +
        'réellement préparer un mardi.',
    },

    sources: {
      dri: 'Dietary Reference Intakes pour l’énergie, les glucides, les fibres, les lipides, les acides gras, le cholestérol, les protéines et les acides aminés',
      who: 'OMS/FAO/UNU — Protein and Amino Acid Requirements in Human Nutrition',
      fdc: 'USDA FoodData Central',
    },
  },
};

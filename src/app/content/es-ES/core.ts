import { LocalisedArticle } from '../types';

/**
 * Los ocho nutrientes que más se buscan, en español.
 *
 * Ocho y no veinticuatro, deliberadamente. Los artículos en inglés llevan días
 * publicados y todavía no sabemos si posicionan; traducir los veinticuatro a
 * cuatro idiomas antes de tener una sola señal sería una apuesta, no una
 * estrategia. Estos ocho cubren la mayor parte de la demanda de búsqueda y el
 * resto puede seguir cuando los datos lo justifiquen.
 *
 * Las cifras no están aquí. Viven una sola vez, en nutrient-facts.ts, y se
 * unen al renderizar por identificador.
 */
export const CORE_ES: Readonly<Record<string, LocalisedArticle>> = {
  /* ------------------------------------------------------------- magnesio */
  magnesium: {
    name: 'Magnesio',
    title: 'Magnesio: el mineral que a casi todo el mundo le falta en silencio',
    lede:
      'Hace falta para más de trescientas reacciones enzimáticas, la mayor parte está guardada en ' +
      'el hueso donde un análisis de sangre no la ve, y alrededor de la mitad de los adultos en ' +
      'Estados Unidos toma menos de lo recomendado. Aquí es donde encontrarlo.',
    description:
      'Qué hace el magnesio, cuánto necesita según la edad y qué alimentos llevan más — ordenados ' +
      'a partir de datos del USDA, por 100 g.',

    whatItDoes: [
      'El magnesio es un cofactor: no hace el trabajo por sí mismo, es lo que varios cientos de ' +
        'enzimas necesitan para hacer el suyo. Entre ellas están las que fabrican proteína, las ' +
        'que copian el ADN y las que convierten la comida en energía utilizable — por eso la ' +
        'falta se manifiesta como un cansancio difuso y no como algo concreto.',
      'También se sitúa enfrente del calcio en el músculo. El calcio ordena a la fibra muscular ' +
        'que se contraiga; el magnesio forma parte de lo que le permite soltarse otra vez. La ' +
        'misma pareja trabaja en el tejido nervioso y en la pared de los vasos sanguíneos.',
      'Cerca del 60 % del magnesio de un cuerpo adulto está en el hueso, la mayor parte del resto ' +
        'dentro de las células y menos del 1 % en la sangre. Esa última cifra importa más de lo ' +
        'que parece: un magnesio normal en sangre no descarta reservas bajas, porque el cuerpo ' +
        'saca magnesio del hueso para mantener estable el nivel sanguíneo.',
    ],

    intake: {
      'infant-0-6': { who: 'Lactantes, 0–6 meses', note: 'Ingesta adecuada, de la leche' },
      'infant-7-12': { who: 'Lactantes, 7–12 meses', note: 'Ingesta adecuada' },
      'child-1-3': { who: 'Niños, 1–3 años' },
      'child-4-8': { who: 'Niños, 4–8 años' },
      'child-9-13': { who: 'Niños, 9–13 años' },
      'men-19-30': { who: 'Hombres, 19–30' },
      'men-31-plus': { who: 'Hombres, 31 en adelante' },
      'women-19-30': { who: 'Mujeres, 19–30' },
      'women-31-plus': { who: 'Mujeres, 31 en adelante' },
      pregnancy: { who: 'Embarazo', note: 'Según la edad' },
    },
    intakeNote:
      'Son cantidades diarias recomendadas, salvo donde se indica: para lactantes no hay ' +
      'evidencia suficiente para fijar una, así que se da una ingesta adecuada. Los porcentajes ' +
      'de la tabla siguiente son sobre el valor diario de 420 mg que se usa en el etiquetado, una ' +
      'cifra única para todos los mayores de cuatro años y por tanto generosa para casi cualquier ' +
      'lector.',

    foodsIntro:
      'El magnesio está en la clorofila, así que la hoja verde lo lleva — pero las semillas, los ' +
      'frutos secos y las legumbres llevan mucho más por bocado, porque están guardando minerales ' +
      'para una planta que aún no ha crecido.',

    helps: [
      'Repartirlo a lo largo del día: la absorción baja según sube la dosis',
      'Grano integral en lugar de refinado; la molienda quita el germen y el salvado, que es donde está',
      'Remojar o germinar legumbres y cereales, lo que degrada parte del fitato',
    ],
    hinders: [
      'Suplementos de zinc en dosis muy altas, que compiten por la absorción',
      'Los fitatos del grano integral y las legumbres sin remojar, que lo atrapan en el intestino',
      'El consumo crónico de alcohol y algunos diuréticos, que aumentan la pérdida por la orina',
    ],
    absorptionNote:
      'La absorción a partir de alimentos ronda el 30–40 % y sube cuando las reservas están ' +
      'bajas, que es el cuerpo haciendo lo sensato. El óxido de magnesio de los suplementos se ' +
      'absorbe mal en comparación con el citrato o el glicinato; si un profesional le ha ' +
      'recomendado un suplemento, merece la pena preguntar por la forma.',

    shortfall: [
      'Quien come sobre todo cereales refinados, ya que la molienda quita cerca del 80 % del magnesio',
      'Personas mayores, que absorben menos y excretan más',
      'Personas con diabetes tipo 2, celiaquía o enfermedad de Crohn, por pérdidas o malabsorción',
      'Quien toma inhibidores de la bomba de protones durante años, que pueden bajarlo',
    ],

    recipe: {
      title: 'Puré de pipas de calabaza y espinacas',
      serves: 'Desde los 8 meses, y sube de escala para el resto de la mesa',
      ingredients: [
        '2 cucharadas de pipas de calabaza, sin sal',
        '2 buenos puñados de espinacas, lavadas',
        '1 patata pequeña, pelada y en dados',
        '1 cucharadita de aceite de oliva',
        '3–4 cucharadas de agua templada, leche materna o fórmula, para aligerar',
      ],
      steps: [
        {
          title: 'Tostar las pipas',
          detail:
            'Sartén seca, fuego medio, tres o cuatro minutos moviéndolas sin parar. Están listas ' +
            'cuando huelen a fruto seco y una o dos empiezan a saltar. Dejarlas enfriar del todo: ' +
            'en caliente se hacen pasta en vez de polvo.',
        },
        {
          title: 'Molerlas',
          detail:
            'A polvo fino, en molinillo o batidora pequeña. Para un bebé esto no es opcional: las ' +
            'semillas enteras son riesgo de atragantamiento hasta bastante después de los dos años.',
        },
        {
          title: 'Cocer la patata',
          detail: 'A fuego suave en agua sin sal, 12–15 minutos, hasta que el cuchillo entre solo.',
        },
        {
          title: 'Marchitar las espinacas',
          detail:
            'Añadirlas los últimos 60 segundos. Más tiempo y la mayor parte del folato acaba en ' +
            'el agua y no en la comida.',
        },
        {
          title: 'Triturar',
          detail:
            'Escurrir guardando un poco del agua de cocción. Triturar la patata y las espinacas ' +
            'con el aceite y luego incorporar las pipas molidas. Aligerar hasta la textura a la ' +
            'que su bebé esté acostumbrado.',
        },
      ],
      note:
        'Introduzca las semillas como cualquier alimento nuevo: solas primero, por la mañana y no ' +
        'junto a otra novedad. Consulte con su pediatra antes de empezar, sobre todo si hay ' +
        'antecedentes familiares de alergia.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Magnesio',
      dri: 'Dietary Reference Intakes para calcio, fósforo, magnesio, vitamina D y flúor',
      fdc: 'USDA FoodData Central',
    },
  },

  /* --------------------------------------------------------------- hierro */
  iron: {
    name: 'Hierro',
    title: 'Hierro: por qué las lentejas y las espinacas no son el mismo hierro',
    lede:
      'El hierro de las plantas y el de la carne son químicamente distintos, y el intestino los ' +
      'trata de forma distinta. Entender cuál es cuál es la diferencia entre comer mucho hierro y ' +
      'absorber algo.',
    description:
      'Hierro hemo frente a no hemo, cuánto necesita según la edad, qué ayuda y qué bloquea la ' +
      'absorción, y los alimentos con más hierro — ordenados a partir de datos del USDA.',

    whatItDoes: [
      'Casi todo el hierro del cuerpo hace una sola cosa: sentarse en el centro de la ' +
        'hemoglobina sujetando una molécula de oxígeno para que un glóbulo rojo la lleve del ' +
        'pulmón al músculo. Si falta, llega menos oxígeno, y por eso lo primero que se nota es ' +
        'quedarse sin aire en unas escaleras que antes no costaban.',
      'Una parte menor está en la mioglobina, que almacena oxígeno dentro del propio músculo, y ' +
        'en enzimas que mueven la maquinaria energética de cada célula. El hierro también hace ' +
        'falta para las enzimas que construyen mielina y varios neurotransmisores — de ahí que el ' +
        'estado de hierro en los dos primeros años de vida se tome tan en serio.',
      'El cuerpo no tiene forma de excretar hierro a voluntad. Se regula absorbiendo más o menos, ' +
        'lo que corta por los dos lados: por eso la absorción sube cuando falta, y por eso tomar ' +
        'suplementos que nadie ha prescrito es una idea genuinamente mala.',
    ],

    intake: {
      'infant-0-6': {
        who: 'Lactantes, 0–6 meses',
        note: 'Ingesta adecuada; reservas de nacimiento',
      },
      'infant-7-12': { who: 'Lactantes, 7–12 meses', note: 'El salto más grande de toda la tabla' },
      'child-1-3': { who: 'Niños, 1–3 años' },
      'child-4-8': { who: 'Niños, 4–8 años' },
      'men-19-50': { who: 'Hombres, 19–50' },
      'women-19-50': { who: 'Mujeres, 19–50', note: 'Pérdidas menstruales' },
      'women-51-plus': { who: 'Mujeres, 51 en adelante' },
      pregnancy: { who: 'Embarazo' },
      vegetarian: {
        who: 'Vegetarianos y veganos',
        note: 'Multiplique la cifra de su edad y sexo — la absorción vegetal es menor',
      },
    },
    intakeNote:
      'El salto de los siete meses es el dato que conviene saber. Un bebé nace con una reserva de ' +
      'hierro que se agota alrededor de los seis meses, justo cuando la leche sola deja de cubrir ' +
      'la necesidad — por eso los primeros alimentos ricos en hierro son una prioridad y no un ' +
      'detalle.',

    foodsIntro:
      'Ordenados por hierro total por 100 g. Léalo teniendo en cuenta la sección siguiente: los ' +
      'alimentos de origen animal de esta lista sueltan su hierro con mucha más facilidad que los ' +
      'vegetales, así que este orden no es el orden de lo que de verdad llega a la sangre.',

    helps: [
      'Vitamina C en la misma comida: puede multiplicar varias veces la absorción del hierro no hemo',
      'Una pequeña cantidad de carne, ave o pescado junto a fuentes vegetales, que sube ambas',
      'Remojar, germinar o fermentar legumbres y cereales, lo que degrada el fitato',
      'Cocinar alimentos ácidos en una sartén de hierro fundido, que transfiere algo de verdad',
    ],
    hinders: [
      'Té y café con la comida: los taninos pueden reducir la absorción a menos de la mitad',
      'Calcio tomado a la vez, sea de lácteos o de un suplemento',
      'Los fitatos del grano integral, las legumbres y los frutos secos sin remojar',
      'Medicación antiácida prolongada, ya que el ácido gástrico participa en liberar el hierro',
    ],
    absorptionNote:
      'Este es el sentido entero del artículo. El hierro hemo, de carne, ave y pescado, se absorbe ' +
      'en torno al 15–35 % y apenas le afecta lo demás que haya en el plato. El hierro no hemo, ' +
      'de plantas, huevo y alimentos enriquecidos, se absorbe en torno al 2–20 % — y ese rango lo ' +
      'decide casi por completo aquello con lo que se come. Las lentejas y las espinacas no son ' +
      'malas fuentes; son fuentes que necesitan un chorro de limón y nada de té.',

    shortfall: [
      'Lactantes a partir de unos seis meses, cuando se agota la reserva con la que nacieron',
      'Mujeres con menstruación, y en particular quien tiene reglas abundantes',
      'Personas embarazadas, donde la necesidad sube la mitad otra vez',
      'Vegetarianos y veganos, que necesitan alrededor de 1,8 veces la cifra de la tabla',
      'Deportistas de resistencia, por hemólisis de impacto y pérdidas por el sudor',
    ],

    recipe: {
      title: 'Puré de lenteja roja y pimiento',
      serves: 'Desde los 7 meses — una fuente de hierro con su propia vitamina C incorporada',
      ingredients: [
        '3 cucharadas de lentejas rojas, enjuagadas hasta que el agua salga clara',
        '1 pimiento rojo pequeño, sin semillas y troceado',
        '1 zanahoria pequeña, pelada y troceada',
        '150 ml de agua o caldo sin sal',
        '1 cucharadita de aceite de oliva',
        'Un chorro de limón, al final',
      ],
      steps: [
        {
          title: 'Enjuagar bien las lentejas',
          detail:
            'Bajo agua fría en un colador hasta que salga clara y no turbia. Eso arrastra el ' +
            'almidón de superficie y parte del fitato que si no atraparía el hierro.',
        },
        {
          title: 'Cocer a fuego suave',
          detail:
            'Lentejas, zanahoria y agua en un cazo pequeño. Llevar a ebullición y bajar a fuego ' +
            'muy suave 15 minutos, con la tapa entreabierta.',
        },
        {
          title: 'El pimiento, tarde',
          detail:
            'Solo los últimos 5 minutos. La vitamina C se degrada con el calor y el tiempo, y el ' +
            'pimiento está aquí por la vitamina C tanto como por el sabor.',
        },
        {
          title: 'Triturar y terminar',
          detail:
            'Triturar fino con el aceite y añadir el limón fuera del fuego. Aligerar con un poco ' +
            'del agua de cocción templada si queda más espeso de lo habitual.',
        },
      ],
      note:
        'Sírvalo separado de una toma de leche y no junto a ella: el calcio de la leche compite ' +
        'con el hierro por la absorción. Una hora antes o después basta. Como siempre, consulte ' +
        'con su pediatra antes de introducir un alimento nuevo.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Hierro',
      dri: 'Dietary Reference Intakes para vitamina A, vitamina K, hierro, zinc y otros',
      fdc: 'USDA FoodData Central',
    },
  },

  /* --------------------------------------------------------------- calcio */
  calcium: {
    name: 'Calcio',
    title: 'Calcio: un banco en el que solo se ingresa mientras está abierto',
    lede:
      'Casi todo está en el esqueleto, y el esqueleto deja de aceptar ingresos hacia el final de ' +
      'la veintena. Lo que se construye antes es lo que se gasta el resto de la vida.',
    description:
      'Qué hace el calcio más allá del hueso, cuánto necesita a cada edad, por qué la vitamina D ' +
      'decide si lo absorbe, y los alimentos con más calcio — de datos del USDA.',

    whatItDoes: [
      'Alrededor del 99 % del calcio del cuerpo es estructural: es el mineral que da rigidez al ' +
        'hueso y al diente. El 1 % restante hace algo más urgente: cada contracción muscular, ' +
        'cada señal nerviosa y cada paso de la coagulación necesita iones de calcio a una ' +
        'concentración muy precisa.',
      'Ese 1 % se defiende de forma absoluta. Si el calcio en sangre empieza a bajar, sube la ' +
        'hormona paratiroidea y el cuerpo disuelve hueso para reponerlo. Por eso un análisis de ' +
        'sangre no dice casi nada sobre la ingesta de calcio: la cifra sigue siendo normal hasta ' +
        'mucho después de que el esqueleto lleve años pagándola.',
      'La masa ósea se acumula durante la infancia y la adolescencia, alcanza su máximo entre los ' +
        'veinticinco y los treinta y desciende despacio después. La adolescencia es el ingreso ' +
        'más grande que hace nadie, y por eso la recomendación para alguien de catorce años es ' +
        'más alta que para sus padres.',
    ],

    intake: {
      'infant-0-6': { who: 'Lactantes, 0–6 meses', note: 'Ingesta adecuada' },
      'infant-7-12': { who: 'Lactantes, 7–12 meses', note: 'Ingesta adecuada' },
      'child-1-3': { who: 'Niños, 1–3 años' },
      'child-4-8': { who: 'Niños, 4–8 años' },
      'teen-9-18': {
        who: 'De 9 a 18 años',
        note: 'La cifra más alta de la tabla, y no por casualidad',
      },
      'adults-19-50': { who: 'Adultos, 19–50' },
      'men-51-70': { who: 'Hombres, 51–70' },
      'women-51-plus': {
        who: 'Mujeres, 51 en adelante',
        note: 'La pérdida ósea se acelera tras la menopausia',
      },
      'age-71-plus': { who: 'Adultos, 71 en adelante' },
    },
    intakeNote:
      'Más no es mejor. Por encima de unos 2.000–2.500 mg al día entre comida y suplementos, la ' +
      'evidencia de beneficio desaparece y el riesgo de cálculos renales sube. El calcio es un ' +
      'nutriente cuyo rango útil tiene techo además de suelo.',

    foodsIntro:
      'Los lácteos dominan por cantidad, pero no por absorción: el calcio de las verduras de hoja ' +
      'bajas en oxalato, como la col rizada o el pak choi, se aprovecha aproximadamente al doble ' +
      'que el de la leche. La espinaca es la excepción célebre: es rica en calcio y casi nada de ' +
      'él está disponible.',

    helps: [
      'Vitamina D, sin la cual el intestino absorbe una fracción de lo que llega',
      'Repartir la ingesta: la absorción es más eficiente en dosis de unos 500 mg o menos',
      'Verduras de hoja bajas en oxalato: col rizada, pak choi, brócoli, berros',
      'Fermentación y remojo, que reducen el fitato de legumbres y cereales',
    ],
    hinders: [
      'El oxalato, razón por la que la espinaca, el ruibarbo y la acelga sueltan muy poco del suyo',
      'Una ingesta de sodio muy alta, que aumenta el calcio perdido por la orina',
      'Cafeína y alcohol en exceso, de forma moderada',
      'Tomarlo a la vez que un suplemento de hierro: cada uno bloquea al otro',
    ],
    absorptionNote:
      'La absorción ronda el 30 % en la mayoría de alimentos y baja según sube la dosis, que es el ' +
      'argumento para repartirlo entre comidas en vez de tomar un suplemento grande. También baja ' +
      'con la edad: una persona mayor absorbe bastante menos que un adolescente del mismo vaso de ' +
      'leche, y eso es parte de por qué la recomendación vuelve a subir después de los setenta.',

    shortfall: [
      'Adolescentes, que necesitan más y suelen beber menos leche',
      'Mujeres posmenopáusicas, por la caída de estrógenos y un recambio óseo más rápido',
      'Quien evita los lácteos sin sustituirlos por alternativas enriquecidas o ricas en calcio',
      'Personas con intolerancia a la lactosa que han retirado el lácteo en vez de cambiar de forma',
      'Cualquiera con corticoides a largo plazo',
    ],

    recipe: {
      title: 'Col rizada guisada con alubias blancas y limón',
      serves: 'Dos, como guarnición; unos veinte minutos',
      ingredients: [
        '250 g de col rizada, sin tallos, hojas rasgadas',
        '1 bote de alubias blancas, escurridas y enjuagadas',
        '2 dientes de ajo, en láminas',
        '2 cucharadas de aceite de oliva',
        '100 ml de agua o caldo',
        'Ralladura y zumo de medio limón',
        'Pimienta negra',
      ],
      steps: [
        {
          title: 'Quitar los tallos',
          detail:
            'Sujete la base del tallo y tire de la hoja con la otra mano. Los tallos se comen, ' +
            'pero tardan el triple en ablandarse y este plato es corto.',
        },
        {
          title: 'Ablandar el ajo',
          detail:
            'Aceite en una sartén amplia a fuego bajo, ajo dos minutos hasta que huela y apenas ' +
            'tome color. El ajo dorado amarga y aquí no hay nada que lo tape.',
        },
        {
          title: 'Guisar la col',
          detail:
            'Hojas y agua dentro, tapado, ocho a diez minutos a fuego medio-bajo hasta que esté ' +
            'tierna pero aún verde. La col que ha virado a aceituna ha perdido la textura que ' +
            'hacía que mereciera la pena cocinarla.',
        },
        {
          title: 'Terminar',
          detail:
            'Alubias dentro para que se calienten, y luego la ralladura y el zumo fuera del ' +
            'fuego. Pimienta, y nada de sal hasta haberlo probado: las alubias de bote traen la suya.',
        },
      ],
      note:
        'La col rizada es una hoja baja en oxalato, y ese es el punto: su calcio se absorbe ' +
        'aproximadamente al doble que el de la espinaca. El limón no está solo por el sabor — el ' +
        'ácido también ayuda con el hierro de las alubias.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Calcio',
      dri: 'Dietary Reference Intakes para calcio y vitamina D',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ----------------------------------------------------------------- zinc */
  zinc: {
    name: 'Zinc',
    title: 'Zinc: el que se nota por el gusto',
    lede:
      'El cuerpo casi no lo almacena, lo que significa que la ingesta tiene que ser constante y ' +
      'no ocasional. Es también la razón de que un sentido del gusto apagado sea una de las ' +
      'primeras señales de que lleva tiempo bajo.',
    description:
      'Qué hace el zinc por la inmunidad, la cicatrización y el gusto, cuánto necesita según la ' +
      'edad, por qué importa el fitato, y los alimentos con más zinc — de datos del USDA.',

    whatItDoes: [
      'El zinc es estructural de una forma en que la mayoría de minerales no lo son. Cientos de ' +
        'proteínas se pliegan alrededor de un ion de zinc para mantener su forma — los motivos ' +
        'de «dedo de zinc» que permiten a los factores de transcripción agarrar el ADN son los ' +
        'más conocidos. Sin zinc, esas proteínas no funcionan despacio: no se forman.',
      'También es central para la función inmunitaria y la cicatrización, que dependen de células ' +
        'que se dividen deprisa. Cualquier tejido de recambio rápido — mucosa intestinal, piel, ' +
        'células inmunitarias, papilas gustativas — nota la falta primero.',
      'No hay una reserva de zinc digna de ese nombre. A diferencia del hierro, que el cuerpo ' +
        'atesora, el zinc tiene que llegar de forma más o menos continua, y el estado cae en ' +
        'semanas si la ingesta baja.',
    ],

    intake: {
      'infant-0-6': { who: 'Lactantes, 0–6 meses', note: 'Ingesta adecuada' },
      'infant-7-12': { who: 'Lactantes, 7–12 meses' },
      'child-1-3': { who: 'Niños, 1–3 años' },
      'child-4-8': { who: 'Niños, 4–8 años' },
      'child-9-13': { who: 'Niños, 9–13 años' },
      'men-14-plus': { who: 'Hombres, 14 en adelante' },
      'women-19-plus': { who: 'Mujeres, 19 en adelante' },
      pregnancy: { who: 'Embarazo' },
      breastfeeding: { who: 'Lactancia' },
    },
    intakeNote:
      'Los vegetarianos pueden necesitar hasta un 50 % más que estas cifras. No es un margen de ' +
      'redondeo: refleja el contenido de fitato de una dieta vegetal, que atrapa el zinc en el ' +
      'intestino y puede reducir a la mitad lo que queda disponible.',

    foodsIntro:
      'Las ostras van tan por delante que distorsionan la escala: una sola ración lleva el ' +
      'equivalente a varios días. Por debajo, la lista es carne roja, marisco, semillas y ' +
      'legumbres, en ese orden de disponibilidad más que de cantidad.',

    helps: [
      'Proteína animal en la misma comida, que mejora la captación de todo lo que hay en el plato',
      'Remojar, germinar, fermentar y fermentar la masa del pan: todo reduce el fitato de forma notable',
      'Masa madre antes que pan ácimo, por la misma razón',
    ],
    hinders: [
      'El fitato del grano integral y las legumbres sin procesar, el mayor inhibidor de todos',
      'Suplementos de hierro en dosis altas tomados en ayunas a la vez',
      'Una ingesta de calcio muy alta, de forma moderada',
      'Diarrea crónica o enfermedad inflamatoria intestinal, por pérdida directa',
    ],
    absorptionNote:
      'La proporción entre fitato y zinc de una dieta predice la absorción mejor que el contenido ' +
      'de zinc. Por eso la misma cantidad de zinc de la ternera y del pan integral no son ' +
      'equivalentes, y por eso los métodos tradicionales de preparación — remojar las legumbres ' +
      'de un día para otro, fermentar el pan — resultan haber estado haciendo un trabajo ' +
      'nutricional real todo este tiempo.',

    shortfall: [
      'Vegetarianos y veganos, por el fitato más que por la ingesta',
      'Personas mayores, por menor ingesta y menor absorción a la vez',
      'Personas con enfermedad de Crohn, celiaquía o diarrea crónica',
      'Personas con anemia falciforme',
      'Bebedores importantes, por menor absorción y mayor pérdida urinaria',
    ],

    recipe: {
      title: 'Sofrito de ternera y pipas de calabaza',
      serves: 'Dos, unos veinticinco minutos',
      ingredients: [
        '250 g de carne picada de ternera',
        '3 cucharadas de pipas de calabaza',
        '1 cebolla, en dados finos',
        '1 pimiento rojo, en dados',
        '2 dientes de ajo, machacados',
        '1 cucharadita de pimentón ahumado',
        '1 cucharada de aceite de oliva',
        '1 bote de tomate troceado',
      ],
      steps: [
        {
          title: 'Tostar las pipas primero',
          detail:
            'Sartén seca, tres minutos, y fuera. Hacerlo antes que la carne deja la sartén limpia ' +
            'y evita que las pipas se cuezan en la grasa.',
        },
        {
          title: 'Dorar bien la carne',
          detail:
            'Fuego fuerte, en una sola capa y sin tocarla durante dos minutos. Amontonarla la ' +
            'vuelve gris, y la carne gris no tiene nada del sabor que da el dorado.',
        },
        {
          title: 'Montar el sofrito',
          detail:
            'Carne fuera, bajar el fuego, cebolla y pimiento ocho minutos hasta que estén blandos ' +
            'y dulces. Ajo y pimentón solo el último minuto: el pimentón se quema rápido y amarga.',
        },
        {
          title: 'Cocer a fuego lento',
          detail:
            'Tomate y la carne de vuelta, quince minutos a fuego suave. Esparza las pipas en la ' +
            'mesa para que sigan crujientes.',
        },
      ],
      note:
        'Ternera y semillas juntas es el sentido del plato: la proteína animal mejora cuánto zinc ' +
        'se aprovecha de las pipas, que por sí solas están frenadas por el fitato.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Zinc',
      dri: 'Dietary Reference Intakes para vitamina A, vitamina K, hierro, zinc y otros',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ---------------------------------------------------------- vitamina D */
  'vitamin-d': {
    name: 'Vitamina D',
    title: 'Vitamina D: la que en su mayoría no se come',
    lede:
      'Casi todos los demás nutrientes vienen de la comida. Este se fabrica en la piel a partir ' +
      'de la luz solar, y por eso el consejo sobre él cambia con la latitud, la estación y cuánto ' +
      'del año se pasa a cubierto.',
    description:
      'Por qué la vitamina D es distinta de cualquier otra, cuánta necesita según la edad, y los ' +
      'pocos alimentos que de verdad la contienen — de datos del USDA.',

    whatItDoes: [
      'La vitamina D gobierna cuánto calcio se absorbe de lo que se come. Sin suficiente, se ' +
        'puede llevar una dieta rica en calcio y aun así no meterlo en el hueso — que es lo que ' +
        'son en realidad el raquitismo en niños y la osteomalacia en adultos.',
      'Se comporta más como una hormona que como una vitamina. La piel la fabrica a partir de la ' +
        'luz UVB, el hígado y luego el riñón la convierten en la forma activa, y aparecen ' +
        'receptores para ella en tejidos que nada tienen que ver de forma obvia con el hueso: ' +
        'células inmunitarias, músculo, mucosa intestinal.',
      'Como es liposoluble, se almacena en vez de eliminarse. Eso es útil a lo largo de un ' +
        'invierno y es también por lo que la vitamina D es uno de los pocos nutrientes en los que ' +
        'suplementarse a la ligera puede hacer daño de verdad.',
    ],

    intake: {
      'infant-0-12': { who: 'Lactantes, 0–12 meses', note: 'Ingesta adecuada' },
      'age-1-70': { who: 'Niños y adultos, 1–70' },
      'age-71-plus': { who: 'Adultos, 71 en adelante' },
      pregnancy: { who: 'Embarazo y lactancia' },
    },
    intakeNote:
      'Microgramos y unidades internacionales se usan ambos y 1 µg = 40 UI, lo que causa ' +
      'confusión constante en las etiquetas. Estas cifras suponen una exposición solar mínima: ' +
      'están fijadas a propósito para el peor caso, porque la alternativa es un consejo que solo ' +
      'funciona en julio.',

    foodsIntro:
      'Esta es la lista genuinamente útil más corta del sitio, y ese es el hallazgo. Fuera del ' +
      'pescado azul, la yema de huevo y lo que se ha enriquecido a propósito, la comida no es de ' +
      'donde viene la vitamina D.',

    helps: [
      'Tomarla con grasa, ya que es liposoluble y una comida sin grasa absorbe menos',
      'Sol en la piel — mediodía, brazos y cara, y mucho menos tiempo del que se supone',
      'Alimentos enriquecidos, que en muchos países son con diferencia la principal fuente dietética',
    ],
    hinders: [
      'Latitud y estación: por encima de unos 37°, el sol de invierno no produce casi nada',
      'Protector solar, cristal y ropa, que bloquean el UVB',
      'La piel más oscura, que necesita más exposición para la misma cantidad',
      'La edad, que reduce la eficiencia con la que la piel la fabrica',
    ],

    shortfall: [
      'Lactantes amamantados, por lo que se les recomienda suplementación de forma sistemática',
      'Quien se cubre, trabaja a cubierto o vive en latitudes altas durante el invierno',
      'Personas de piel más oscura que viven lejos del ecuador',
      'Personas mayores, por menos tiempo al aire libre y una síntesis menos eficiente',
      'Personas con malabsorción de grasas: celiaquía, Crohn, tras cirugía bariátrica',
    ],

    recipe: {
      title: 'Puré de salmón y boniato',
      serves: 'Desde los 7 meses; una de las pocas comidas que es fuente dietética real',
      ingredients: [
        '40 g de lomo de salmón, sin piel y sin espinas, revisado con cuidado',
        '1 boniato pequeño, pelado y en dados',
        '1 cucharadita de aceite de oliva o mantequilla sin sal',
        '2–3 cucharadas de agua templada, leche materna o fórmula',
      ],
      steps: [
        {
          title: 'Revisar el pescado dos veces',
          detail:
            'Pase el dedo por el lomo en los dos sentidos. Las espinas finas son duras, ' +
            'puntiagudas y fáciles de pasar por alto, y este es el paso que no hay que correr.',
        },
        {
          title: 'Cocer al vapor juntos',
          detail:
            'Boniato 12 minutos y luego el salmón encima otros 6–8 hasta que se desmigue. Al ' +
            'vapor y no hervido, la grasa — y la vitamina D disuelta en ella — se queda en la ' +
            'comida y no en el agua.',
        },
        {
          title: 'Desmigar y revisar otra vez',
          detail: 'Separe el salmón con un tenedor y mírelo una vez más buscando espinas.',
        },
        {
          title: 'Aplastar',
          detail:
            'Aplaste el boniato con el aceite, incorpore el salmón y aligere hasta la textura que ' +
            'su bebé maneje. Sirva templado, no caliente.',
        },
      ],
      note:
        'El pescado azul está en casi todas las listas de primeros alimentos desde los seis meses ' +
        'y es también un alérgeno frecuente: introdúzcalo solo, temprano en el día. Las guías ' +
        'oficiales limitan el pescado azul a un par de raciones por semana en niños pequeños. ' +
        'Pregunte antes a su pediatra.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Vitamina D',
      dri: 'Dietary Reference Intakes para calcio y vitamina D',
      fdc: 'USDA FoodData Central',
    },
  },

  /* -------------------------------------------------------- vitamina B12 */
  'vitamin-b12': {
    name: 'Vitamina B12',
    title: 'Vitamina B12: solo de animales, o de una fábrica',
    lede:
      'Ninguna planta fabrica B12. Ningún animal tampoco: la fabrican bacterias y los animales la ' +
      'acumulan. Ese único hecho decide todo sobre quién tiene que prestarle atención.',
    description:
      'De dónde viene realmente la vitamina B12, cuánta necesita, por qué la absorción falla con ' +
      'la edad y con la medicación, y los alimentos con más B12 — de datos del USDA.',

    whatItDoes: [
      'La B12 hace falta para terminar de fabricar glóbulos rojos. Sin ella salen grandes, pocos ' +
        'y mal formados — anemia megaloblástica — y el cansancio que sigue es el mismo que causa ' +
        'el hierro bajo, por un mecanismo completamente distinto.',
      'También mantiene la vaina de mielina alrededor de los nervios. Esta es la mitad que más ' +
        'importa, porque el daño nervioso de una carencia prolongada puede volverse permanente, y ' +
        'puede desarrollarse mientras el hemograma sigue pareciendo normal.',
      'Y trabaja con el folato en la reacción que recicla la homocisteína. Tomar mucho folato ' +
        'puede corregir la anemia de una carencia de B12 mientras el daño nervioso continúa por ' +
        'debajo — que es precisamente por lo que automedicarse con un complejo B es imprudente.',
    ],

    intake: {
      'infant-0-6': { who: 'Lactantes, 0–6 meses', note: 'Ingesta adecuada' },
      'infant-7-12': { who: 'Lactantes, 7–12 meses', note: 'Ingesta adecuada' },
      'child-1-3': { who: 'Niños, 1–3 años' },
      'child-4-8': { who: 'Niños, 4–8 años' },
      'child-9-13': { who: 'Niños, 9–13 años' },
      adults: { who: 'Adultos' },
      pregnancy: { who: 'Embarazo' },
      breastfeeding: { who: 'Lactancia' },
    },
    intakeNote:
      'Son cifras pequeñas, y eso engaña. El problema con la B12 casi nunca es cuánta hay en el ' +
      'plato — es si el cuerpo todavía puede sacarla del plato.',

    foodsIntro:
      'El hígado y los moluscos van tan por delante de todo lo demás que la lista apenas es una ' +
      'clasificación. Fíjese en lo que falta: no aparece ningún alimento vegetal sin enriquecer, ' +
      'porque ninguno la contiene.',

    helps: [
      'Ácido gástrico y factor intrínseco, que liberan la B12 del alimento y la cruzan el intestino',
      'Alimentos enriquecidos y suplementos, donde la B12 ya viene libre',
      'Repartir la ingesta: la absorción por comida está limitada a un par de microgramos',
    ],
    hinders: [
      'Metformina, tomada a largo plazo',
      'Inhibidores de la bomba de protones y antiH2, que reducen el ácido necesario para liberarla',
      'Gastritis atrófica, frecuente con la edad, que reduce el factor intrínseco',
      'Cirugía gástrica o ileal, que quita el tejido que la produce o la absorbe',
    ],
    absorptionNote:
      'La espirulina, el alga nori y los fermentados se citan a menudo como fuentes vegetales. La ' +
      'mayor parte de lo que contienen son análogos de B12 que ocupan el receptor sin hacer el ' +
      'trabajo, y hay indicios de que pueden empeorar la situación en vez de mejorarla. Quien no ' +
      'come alimentos de origen animal necesita un suplemento o alimentos enriquecidos: esto no ' +
      'es una cuestión de preferencia dietética.',

    shortfall: [
      'Veganos y vegetarianos de larga duración sin alimentos enriquecidos ni suplemento',
      'Adultos a partir de unos cincuenta, por la caída del ácido gástrico',
      'Quien toma metformina o antiácidos a largo plazo',
      'Lactantes amamantados de madres con carencia: las reservas al nacer son bajas y se agotan rápido',
      'Personas tras cirugía bariátrica o con Crohn que afecte al íleon',
    ],

    recipe: {
      title: 'Puré de hígado de pollo y manzana',
      serves: 'Desde los 7 meses, una o dos veces al mes como mucho',
      ingredients: [
        '30 g de hígado de pollo, limpio',
        '1 manzana dulce pequeña, pelada y sin corazón',
        '1 patata pequeña, pelada y en dados',
        '1 cucharadita de mantequilla sin sal o aceite de oliva',
        'Agua para aligerar',
      ],
      steps: [
        {
          title: 'Limpiar el hígado',
          detail:
            'Retire el tejido conectivo pálido y las zonas con tono verdoso. Enjuague y seque con papel.',
        },
        {
          title: 'Cocer la patata y la manzana',
          detail: 'Juntas en agua sin sal unos 12 minutos, hasta que ambas estén blandas.',
        },
        {
          title: 'Cocinar el hígado del todo',
          detail:
            'Suave, en la mantequilla, 5–6 minutos dándole la vuelta, hasta que no quede rosa en ' +
            'ninguna parte. Con la casquería, «justo hecho» no es suficiente para un bebé.',
        },
        {
          title: 'Triturar',
          detail:
            'Todo junto, fino, aligerando con el agua de cocción. La manzana hace un trabajo real ' +
            'aquí: le quita el filo a un sabor fuerte.',
        },
      ],
      note:
        'El hígado es extraordinariamente rico en vitamina A además de B12, y la vitamina A se ' +
        'acumula. Dos veces al mes es el techo habitual para un niño pequeño, y el hígado no se ' +
        'recomienda en absoluto durante el embarazo por la misma razón. Consulte a su pediatra ' +
        'antes de empezar.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Vitamina B12',
      dri: 'Dietary Reference Intakes para tiamina, riboflavina, niacina, vitamina B6, folato y vitamina B12',
      fdc: 'USDA FoodData Central',
    },
  },

  /* --------------------------------------------------------------- folato */
  folate: {
    name: 'Folato',
    title: 'Folato: la vitamina que tiene que estar antes de que sepa que la necesita',
    lede:
      'El tubo neural se cierra en los primeros 28 días de embarazo, a menudo antes de que una ' +
      'mujer sepa que está embarazada. Ese único detalle de calendario es la razón de que el ' +
      'folato se añada a la harina en más de ochenta países.',
    description:
      'Folato frente a ácido fólico, cuánto necesita, por qué el momento en el embarazo lo es ' +
      'todo, y los alimentos con más folato — de datos del USDA.',

    whatItDoes: [
      'El folato transporta unidades de un carbono, y las reacciones que las necesitan son las ' +
        'que construyen ADN. Cualquier tejido que se divida deprisa — médula ósea, mucosa ' +
        'intestinal, un embrión en crecimiento — depende de un suministro constante.',
      'Sin él, las células empiezan a dividirse y no pueden terminar. En la médula eso produce ' +
        'una anemia megaloblástica, el mismo cuadro que causa la carencia de B12, porque B12 y ' +
        'folato se encuentran en la misma reacción.',
      'En un embrión, el fallo es estructural. El tubo neural — del que salen el cerebro y la ' +
        'médula espinal — se cierra entre los días 21 y 28 tras la concepción. Un folato ' +
        'suficiente en ese momento reduce sustancialmente el riesgo de espina bífida y ' +
        'anencefalia. Un folato suficiente dos meses después no sirve.',
    ],

    intake: {
      'infant-0-6': { who: 'Lactantes, 0–6 meses', note: 'Ingesta adecuada' },
      'infant-7-12': { who: 'Lactantes, 7–12 meses', note: 'Ingesta adecuada' },
      'child-1-3': { who: 'Niños, 1–3 años' },
      'child-4-8': { who: 'Niños, 4–8 años' },
      'child-9-13': { who: 'Niños, 9–13 años' },
      'adults-14-plus': { who: 'De 14 años en adelante' },
      pregnancy: { who: 'Embarazo' },
      breastfeeding: { who: 'Lactancia' },
    },
    intakeNote:
      'DFE significa equivalentes dietéticos de folato, y existen porque el ácido fólico de los ' +
      'suplementos y los alimentos enriquecidos se absorbe alrededor de 1,7 veces mejor que el ' +
      'folato de los alimentos. La recomendación de salud pública en la mayoría de países es que ' +
      'toda persona que pueda quedarse embarazada tome 400 µg de ácido fólico al día: no una vez ' +
      'embarazada, sino antes, precisamente por el calendario de arriba.',

    foodsIntro:
      'El nombre viene de folium, hoja en latín, y la clasificación lo confirma: verduras de ' +
      'hoja, legumbres, hígado y — donde la ley lo exige — harina enriquecida.',

    helps: [
      'Comer las verdes crudas o poco cocinadas, ya que el folato es sensible al calor',
      'Legumbres, que son densas en él y lo conservan mejor que las hojas',
      'Harina y cereales enriquecidos, donde sea obligatorio',
    ],
    hinders: [
      'Hervir mucho rato, que puede destruir o arrastrar la mayor parte',
      'El alcohol, que dificulta la absorción y aumenta la excreción',
      'Metotrexato y algunos anticonvulsivantes, que son antagonistas del folato',
      'Celiaquía y otras malabsorciones',
    ],
    absorptionNote:
      'Una advertencia sobre los suplementos. Mucho ácido fólico puede enmascarar la anemia de ' +
      'una carencia de B12 mientras el daño neurológico avanza sin notarse — por eso existe el ' +
      'límite superior de 1.000 µg para adultos, y por eso un complejo B es una mala forma de ' +
      'tratarse el cansancio por cuenta propia.',

    shortfall: [
      'Cualquier persona que pueda quedarse embarazada y no esté suplementándose',
      'Personas con trastorno por consumo de alcohol',
      'Quien toma metotrexato, sulfasalazina o ciertos anticonvulsivantes',
      'Personas con celiaquía o enfermedad inflamatoria intestinal',
    ],

    recipe: {
      title: 'Ensalada templada de lentejas con espárragos y huevo mollet',
      serves: 'Dos, veinticinco minutos',
      ingredients: [
        '150 g de lentejas pardina o de Puy',
        '250 g de espárragos verdes, sin la base leñosa',
        '2 huevos',
        '2 cucharadas de aceite de oliva',
        '1 cucharada de vinagre de Jerez',
        '1 chalota, en dados finos',
        'Un puñado de perejil',
      ],
      steps: [
        {
          title: 'Cocer las lentejas a fuego muy suave, no a borbotones',
          detail:
            'Veinte minutos con el agua apenas temblando y sin sal. El hervor fuerte revienta la ' +
            'piel y acaba en sopa.',
        },
        {
          title: 'Los espárragos, al vapor y poco',
          detail:
            'Tres o cuatro minutos, que sigan con mordida. El folato es de las vitaminas más ' +
            'frágiles al calor, y un espárrago hervido hasta ablandarse ha soltado casi todo.',
        },
        {
          title: 'Huevos mollet',
          detail: 'Seis minutos y medio desde que hierve, luego a agua fría y pelar con cuidado.',
        },
        {
          title: 'Aliñar en caliente',
          detail:
            'Chalota, vinagre y aceite sobre las lentejas escurridas mientras siguen calientes; ' +
            'espárragos y perejil incorporados; huevos partidos por encima.',
        },
      ],
      note:
        'Lentejas, espárragos y yema de huevo son las tres buenas fuentes de folato. Cocinar poco ' +
        'no es una manía aquí: es la mayor parte de la diferencia entre la cifra de la etiqueta y ' +
        'la cifra del plato.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Folato',
      dri: 'Dietary Reference Intakes para tiamina, riboflavina, niacina, vitamina B6, folato y vitamina B12',
      fdc: 'USDA FoodData Central',
    },
  },

  /* -------------------------------------------------------------- proteína */
  protein: {
    name: 'Proteína',
    title: 'Proteína: la recomendación es un suelo, no un objetivo',
    lede:
      'La cantidad recomendada es la que evita la carencia en casi todo el mundo, que es una ' +
      'pregunta distinta de cuál es la óptima para un deportista, o para alguien de más de ' +
      'setenta que intenta no perder músculo.',
    description:
      'Para qué sirve la proteína más allá del músculo, cuánta necesita según edad y peso, por ' +
      'qué la recomendación es un mínimo, y los alimentos con más proteína — de datos del USDA.',

    whatItDoes: [
      'La proteína no es principalmente combustible. Es material: enzimas, anticuerpos, proteínas ' +
        'de transporte, colágeno, la maquinaria contráctil del músculo y toda hormona que no sea ' +
        'un esteroide. El cuerpo no tiene una reserva de proteína como tiene una de grasa — todo ' +
        'lo que es proteína ya está haciendo un trabajo, así que un déficit significa desmontar ' +
        'algo que estaba en uso.',
      'Nueve de los veinte aminoácidos no se pueden fabricar y tienen que llegar con la comida. ' +
        'Que una proteína sea «completa» significa que los contiene los nueve en proporción útil; ' +
        'las proteínas animales suelen serlo y la mayoría de proteínas vegetales aisladas van ' +
        'bajas en uno o dos.',
      'Eso es menos problema de lo que se creía. Comer variedad de proteínas vegetales a lo largo ' +
        'de un día cubre el patrón de sobra — la idea de que había que combinarlas en la misma ' +
        'comida se retiró hace décadas.',
    ],

    intake: {
      'infant-0-6': { who: 'Lactantes, 0–6 meses', note: 'Ingesta adecuada' },
      'infant-7-12': { who: 'Lactantes, 7–12 meses' },
      'child-1-3': { who: 'Niños, 1–3 años' },
      'child-4-8': { who: 'Niños, 4–8 años' },
      'child-9-13': { who: 'Niños, 9–13 años' },
      'men-19-plus': { who: 'Hombres, 19 en adelante', note: 'A un peso corporal de referencia' },
      'women-19-plus': { who: 'Mujeres, 19 en adelante', note: 'A un peso corporal de referencia' },
      'per-kilo': {
        who: 'Adultos, por kilogramo',
        note: 'La cifra de la que se derivan las demás',
      },
      pregnancy: { who: 'Embarazo y lactancia' },
    },
    intakeNote:
      'La cifra por kilogramo es la recomendación real; los totales en gramos son esa cifra ' +
      'aplicada a un cuerpo medio. Y es explícitamente un mínimo. La investigación en personas ' +
      'mayores y en quien entrena en serio apunta a que ingestas más altas — a menudo 1,0–1,6 ' +
      'g/kg — van mejor para conservar músculo. Esa es una pregunta distinta de la que responde ' +
      'la recomendación, y conviene no confundirlas.',

    foodsIntro:
      'Ordenados por gramos por 100 g. Léalo sabiendo que la concentración no es toda la ' +
      'historia: un alimento puede ser 25 % proteína y aportar menos en un día que otro menos ' +
      'denso del que se come más.',

    helps: [
      'Repartirla entre comidas en vez de cargar la cena: la síntesis muscular responde por comida',
      'Variedad entre fuentes vegetales, que cubre el patrón de aminoácidos sin planificar nada',
      'Ejercicio de fuerza, sin el cual la proteína extra son en buena medida solo calorías',
    ],
    hinders: [
      'Una ingesta energética total muy baja, en la que la proteína se quema como combustible',
      'La edad avanzada, que amortigua la respuesta muscular a una dosis dada',
      'Algunas enfermedades renales, donde la ingesta necesita criterio clínico y no un artículo',
    ],
    absorptionNote:
      'La calidad proteica se puede medir, y el estándar actual es el DIAAS, que puntúa lo ' +
      'digerible que resulta cada aminoácido esencial. Lácteos y huevo puntúan más alto; la ' +
      'mayoría de fuentes vegetales aisladas más bajo, sobre todo porque la fibra y los ' +
      'antinutrientes ralentizan la digestión. Importa mucho con ingestas totales bajas y casi ' +
      'nada con ingestas generosas.',

    shortfall: [
      'Personas mayores, cuya ingesta suele caer justo cuando su necesidad sube',
      'Personas que se recuperan de una enfermedad, una cirugía o una lesión',
      'Quien sigue dietas muy restrictivas para adelgazar',
      'Algunos veganos con ingesta energética baja, aunque una dieta vegetal variada lo cubre sin esfuerzo',
    ],

    recipe: {
      title: 'Bol de yogur griego con semillas y lentejas crujientes',
      serves: 'Uno, diez minutos',
      ingredients: [
        '200 g de yogur griego, entero',
        '3 cucharadas de lentejas verdes cocidas',
        '1 cucharada de pipas de calabaza',
        '1 cucharada de semillas de cáñamo',
        '1 cucharadita de aceite de oliva',
        'Ralladura de limón',
        'Pimienta negra y sal en escamas',
      ],
      steps: [
        {
          title: 'Use yogur colado',
          detail:
            'Griego o skyr, no yogur normal. El colado quita suero y aproximadamente duplica la ' +
            'proteína por cucharada, que es la razón entera de que esto funcione.',
        },
        {
          title: 'Dorar las lentejas',
          detail:
            'Lentejas cocidas y bien secas, a una sartén caliente con el aceite cuatro minutos ' +
            'hasta que algunas salten y queden crujientes. Las lentejas húmedas no crujen.',
        },
        {
          title: 'Tostar las semillas con ellas',
          detail: 'Dentro los últimos noventa segundos, para que se calienten sin quemarse.',
        },
        {
          title: 'Montarlo salado',
          detail:
            'Yogur en el bol, lentejas y semillas encima, ralladura de limón, sal y mucha ' +
            'pimienta. Esto es un desayuno salado y sale ganando.',
        },
      ],
      note:
        'Unos treinta gramos de proteína con tres ingredientes y en diez minutos — lo que importa ' +
        'más que la cifra, porque un objetivo de proteína se cumple con lo que uno de verdad va a ' +
        'preparar un martes.',
    },

    sources: {
      dri: 'Dietary Reference Intakes para energía, hidratos de carbono, fibra, grasa, ácidos grasos, colesterol, proteína y aminoácidos',
      who: 'OMS/FAO/UNU — Protein and Amino Acid Requirements in Human Nutrition',
      fdc: 'USDA FoodData Central',
    },
  },
};

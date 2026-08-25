import { LocalisedGuide } from '../guide-types';

/**
 * Las ocho guías principales, en español.
 *
 * Ocho y no veinte: los artículos en inglés llevan poco tiempo publicados y
 * todavía no sabemos qué temas se buscan. Seis de estas ocho están aquí por
 * demanda de búsqueda; las dos últimas están por otra razón, y es que son las
 * únicas que pueden llegarle a alguien en un mal momento.
 */
export const GUIDES_CORE_ES: Readonly<Record<string, LocalisedGuide>> = {
  'protein-per-meal': {
    title: 'Probablemente come suficiente proteína y desperdicia la mayor parte',
    short: 'Proteína por comida',
    lede:
      'El total del día es la cifra que todo el mundo sigue y la que menos importa. El músculo se ' +
      'construye en respuesta a comidas concretas, y un día que llega a su objetivo de una ' +
      'sentada no es el mismo día que uno que llega repartiéndolo en tres.',
    description:
      'Por qué la proteína funciona por comida y no por día, qué es el umbral de leucina, y por ' +
      'qué la ventana anabólica resultó mucho más ancha de lo que le vendieron.',

    commonBelief:
      'Si cuadran los gramos del día, el reparto se soluciona solo — y hay que meter un batido ' +
      'en los treinta minutos siguientes a la última serie o la sesión no cuenta.',

    sections: [
      {
        heading: 'El músculo no tiene una cuenta, tiene un interruptor',
        body: [
          'No hay reserva de proteína. La grasa tiene una, el hidrato una pequeña, y la proteína ' +
            'ninguna — cada gramo de ella en su cuerpo ya es una pieza que trabaja en algo. Así ' +
            'que el cuerpo no puede guardar el excedente de la cena y gastarlo en el desayuno, ' +
            'como sí hace con la energía.',
          'Lo que hace en su lugar es conmutar. Llega una comida, aparecen aminoácidos en sangre, ' +
            'y si cruzan cierta concentración la maquinaria que construye proteína muscular se ' +
            'enciende unas horas y luego se apaga, sin importar qué más haya en sangre. Por ' +
            'debajo de esa concentración no se enciende en absoluto.',
          'Por eso el total diario engaña. Dos personas con 120 g de proteína no están haciendo lo ' +
            'mismo si una cruza el umbral tres veces y la otra una. La segunda comió lo mismo y ' +
            'mandó la mayor parte por delante de un interruptor apagado.',
        ],
      },
      {
        heading: 'Lo que acciona el interruptor es la leucina, no la proteína',
        body: [
          'El disparador es un solo aminoácido. La leucina es la señal que lee la maquinaria de ' +
            'detección; el resto de aminoácidos son los ladrillos que luego se usan. Una comida ' +
            'con proteína total suficiente pero poca leucina da una respuesta débil — que es ' +
            'exactamente lo que ocurre cuando alguien completa con gelatina o colágeno en polvo y ' +
            'se pregunta por qué no cambia nada.',
          'Por eso las proteínas animales y la soja hacen esto de forma más eficiente que la ' +
            'mayoría de proteínas vegetales aisladas: llevan más leucina por gramo. No es una ' +
            'afirmación sobre qué alimentos son mejores, y no significa que quien come plantas no ' +
            'pueda llegar — significa que tiene que comer algo más, o combinar fuentes, para ' +
            'llegar a la misma señal.',
        ],
      },
      {
        heading: 'La ventana es una sala',
        body: [
          'La regla de los treinta minutos vendió muchísimo polvo y no sobrevivió a las pruebas. ' +
            'Cuando los ensayos controlaron la ingesta total del día — cosa que los primeros no ' +
            'hicieron —, la ventaja de comer inmediatamente después casi desapareció. La ' +
            'sensibilidad elevada a la proteína dura horas, no minutos.',
          'Este es uno de los puntos donde la evidencia sigue moviéndose de verdad, y la tabla lo ' +
            'dice en lugar de disimularlo. Lo que no está discutido es la forma del consejo que ' +
            'sale de ahí: coma suficiente, repártalo, y deje el cronómetro.',
          'La única situación en la que el momento sí importa es cuando la siguiente comida queda ' +
            'lejos — entrenar en ayunas a las seis y no comer hasta la una deja un tramo muy ' +
            'largo con el interruptor apagado. Eso es un problema de reparto disfrazado de ' +
            'problema de horario.',
        ],
      },
      {
        heading: 'Donde esto se pone serio es con la edad',
        body: [
          'El músculo mayor responde peor a la misma señal. El umbral sube, así que una ración que ' +
            'habría disparado una respuesta a los treinta no lo hace a los setenta, y el ' +
            'resultado es la pérdida lenta de músculo y la caída que viene después.',
          'Por eso la cifra para personas mayores en la tabla es más alta que la recomendación ' +
            'general y mucho más alta que la cantidad recomendada. Esta última es la que evita la ' +
            'carencia. Evitar la carencia y conservar músculo no son la misma pregunta, y una ' +
            'sola cifra no puede responder a las dos.',
        ],
      },
    ],

    claims: {
      rda: {
        what: 'Cantidad recomendada, todos los adultos',
        note: 'Evita la carencia. No es un objetivo para quien entrena',
      },
      'daily-athlete': { what: 'Adultos que entrenan, al día' },
      'per-meal': { what: 'Por comida, para disparar una respuesta' },
      'leucine-threshold': { what: 'Leucina por comida', note: 'Unos 25–30 g de una proteína de calidad' },
      'older-adults': { what: 'A partir de unos 65 años', note: 'El umbral sube con la edad' },
      window: {
        what: 'La ventana tras el ejercicio',
        note: 'Mucho más ancha que los treinta minutos que le vendieron',
      },
    },
    claimsNote:
      'Por kilogramo de peso corporal. Los rangos son rangos porque los ensayos discrepan en los ' +
      'bordes, y una cifra única sería una mentira más ordenada.',

    practical: [
      {
        title: 'Cuente comidas, no gramos',
        detail:
          'Tres o cuatro comidas que crucen el umbral cada una ganan a un día que llega al mismo ' +
            'total con una cena grande. Si cambia una cosa, cambie el desayuno: es la comida que ' +
            'más a menudo queda por debajo.',
      },
      {
        title: 'Ponga un número a la comida más pequeña',
        detail:
          'Casi todo el mundo sabe cómo es su cena y no tiene ni idea de qué lleva su almuerzo. ' +
            'Mire la que menos controla; ahí suele estar el hueco.',
      },
      {
        title: 'Deje de cronometrar y empiece a espaciar',
        detail:
          'Tres a cinco horas entre tomas de proteína, no un cronómetro tras la última serie. La ' +
            'excepción es un hueco largo alrededor del entrenamiento — entonces coma más cerca, ' +
            'por reparto y no por magia.',
      },
      {
        title: 'Si pasa de sesenta y cinco, apunte más alto a propósito',
        detail:
          'La misma ración rinde menos. Es el único grupo donde la diferencia entre la cantidad ' +
            'recomendada y la cifra de entrenamiento no es académica.',
      },
    ],

    seeAlso: ['protein', 'vitamin-d', 'calcium'],

    sources: {
      'issn-protein': 'International Society of Sports Nutrition — posicionamiento sobre proteína y ejercicio',
      'issn-timing': 'International Society of Sports Nutrition — posicionamiento sobre el momento de los nutrientes',
      'prot-age': 'Grupo de estudio PROT-AGE — ingesta de proteína en personas mayores',
      'dri-macro': 'Dietary Reference Intakes para energía, hidratos, fibra, grasa, proteína y aminoácidos',
    },
  },

  'iron-and-endurance': {
    title: 'Quedarse plano no siempre es sobreentrenamiento',
    short: 'Hierro y resistencia',
    lede:
      'A una deportista cuyas sesiones se han vuelto discretamente más duras se le suele decir ' +
      'que descanse más. A veces es lo correcto. A veces la ferritina lleva cuatro meses bajando ' +
      'y ningún descanso del mundo la toca.',
    description:
      'Por qué los deportistas de resistencia pierden hierro más rápido de lo que lo reponen, qué ' +
      'dice realmente la ferritina, y por qué suplementarse sin análisis es el paso equivocado.',

    commonBelief:
      'Si mi hemograma salió normal, el hierro no es mi problema — y si estoy cansado, un ' +
      'suplemento solo puede ayudar.',

    sections: [
      {
        heading: 'Tres formas en que el entrenamiento saca hierro',
        body: [
          'La primera es mecánica. Cada impacto del pie destruye una pequeña cantidad de glóbulos ' +
            'rojos en los capilares de la planta — hemólisis por impacto — y el hierro que ' +
            'contenían no se recupera del todo. Por sí solo es menor. Multiplicado por cien ' +
            'kilómetros semanales, durante años, deja de serlo.',
          'La segunda es el sudor, que arrastra hierro en cantidades pequeñas que suman en ' +
            'sesiones largas con calor.',
          'La tercera se pasa por alto porque va en contra de la intuición. El ejercicio intenso ' +
            'sube la hepcidina, la hormona que cierra la absorción de hierro, y permanece elevada ' +
            'durante horas. Así que la comida posterior a una sesión dura — la que una deportista ' +
            'cuida más — se absorbe peor que la misma comida en un día de descanso. El cuerpo ' +
            'pierde hierro con el entrenamiento y luego se niega brevemente a admitir más.',
        ],
      },
      {
        heading: 'Por qué un hemograma normal no demuestra nada',
        body: [
          'La hemoglobina es lo último que cae. El cuerpo tiene una reserva — la ferritina — y la ' +
            'vaciará por completo antes de dejar que baje el recuento, porque transportar oxígeno ' +
            'es más urgente que conservar una reserva.',
          'Existe por tanto un tramo largo, a menudo de muchos meses, en el que la reserva se ha ' +
            'ido, la deportista se encuentra progresivamente peor, y cada análisis estándar sale ' +
            'normal. Eso se llama ferropenia sin anemia, y es el estado en el que están de hecho ' +
            'la mayoría de los afectados. La anemia es el final del proceso, no su comienzo.',
          'La prueba que lo ve es la ferritina, y hay que pedirla. No está en un panel de rutina. ' +
            'Si se lleva una sola cosa de esta página, que sea el nombre de esa prueba.',
        ],
      },
      {
        heading: 'Qué significa el número, y su gran trampa',
        body: [
          'El umbral que usa la medicina deportiva es más alto que el que sirve para diagnosticar ' +
            'anemia en población general, porque la pregunta es otra — no «está esta persona ' +
            'enferma» sino «tiene esta persona reserva suficiente para entrenar duro».',
          'La trampa es que la ferritina también sube con la inflamación, y entrenar duro es ' +
            'inflamatorio. Una ferritina extraída la mañana después de una sesión dura puede salir ' +
            'tranquilizadoramente alta mientras la reserva real está baja. Sacar sangre en un día ' +
            'de descanso, idealmente junto a un marcador de inflamación, merece la molestia de ' +
            'organizarlo.',
        ],
      },
      {
        heading: 'Por qué no tomar sin más',
        body: [
          'Porque el cuerpo no tiene manera de deshacerse de un excedente. Regula el hierro ' +
            'absorbiendo más o menos, y lo que entra se queda. Suplementarse de forma sostenida ' +
            'sin estar corto acumula — y en una persona portadora de un gen de hemocromatosis, ' +
            'algo bastante común como para no saberlo, acumula rápido.',
          'El hierro además compite con el zinc y el cobre por las mismas vías de absorción, así ' +
            'que meses de hierro innecesario pueden crear una carencia distinta mientras trata ' +
            'una que no tenía.',
          'Donde hay un déficit confirmado, el tratamiento es sencillo y a menudo espectacular. Ese ' +
            'es un argumento a favor de analizar, no en contra de actuar.',
        ],
      },
      {
        heading: 'Lo de la comida va sobre con qué se come',
        body: [
          'La absorción de una fuente vegetal varía por un factor de cinco o más según qué haya en ' +
            'el resto del plato. La vitamina C en la misma comida la multiplica. El té o el café ' +
            'con la comida la reducen más o menos a la mitad, y quien desayuna avena con un café ' +
            'grande está deshaciendo la avena.',
          'La versión práctica de esto no tiene glamur: aleje el café una hora de la comida con ' +
            'hierro, y ponga algo ácido en el plato. Es una intervención mayor que la de casi ' +
            'cualquier suplemento, y es gratis.',
        ],
      },
    ],

    claims: {
      'athlete-multiplier': {
        what: 'Deportistas de resistencia, sobre la cantidad recomendada',
        note: 'Más alto todavía en dieta vegetal',
      },
      'ferritin-floor': {
        what: 'Ferritina por debajo de la cual actúa la medicina deportiva',
        note: 'Más alta que el umbral para diagnosticar anemia',
      },
      'female-endurance-prevalence': {
        what: 'Deportistas de resistencia afectadas',
        note: 'Ferropenia sin anemia, no anemia',
      },
      'vitamin-c-effect': { what: 'Efecto de la vitamina C sobre el hierro no hemo' },
      'tea-effect': { what: 'Efecto del té o el café con la comida' },
    },
    claimsNote:
      'La cifra de prevalencia es un rango porque los estudios usan umbrales de ferritina ' +
      'distintos. Ese desacuerdo es real y es la razón de que aquí aparezca una banda.',

    practical: [
      {
        title: 'Pida la ferritina por su nombre',
        detail:
          'No está en un análisis de rutina, y un hemograma normal no descarta un problema. Es la ' +
            'frase más útil de esta página.',
      },
      {
        title: 'Sáquese la sangre en un día de descanso',
        detail:
          'La ferritina sube con la inflamación y entrenar es inflamatorio, así que tras una ' +
            'sesión dura el valor sale falsamente tranquilizador.',
      },
      {
        title: 'Mueva el café, no la avena',
        detail:
          'Una hora antes o después de la comida con hierro. Los taninos pueden reducir la ' +
            'absorción a la mitad, que es más de lo que consigue casi todo lo que se compra.',
      },
      {
        title: 'No se suplemente por corazonada',
        detail:
          'El cuerpo no puede excretar un excedente, y el hierro compite con el zinc y el cobre a ' +
            'la entrada. Primero confirmar, luego tratar.',
      },
    ],

    seeAlso: ['iron', 'vitamin-c', 'zinc', 'copper'],

    sources: {
      'ods-iron': 'NIH Office of Dietary Supplements — Hierro',
      'iom-iron': 'Dietary Reference Intakes para el hierro — Institute of Medicine',
      'iron-athletes': 'El hierro en el deportista — una revisión',
    },
  },

  'creatine-what-holds-up': {
    title: 'La creatina es la que sobrevivió',
    short: 'Creatina',
    lede:
      'Casi todo lo que hay en el estante de suplementos o no se ha probado o se ha probado y ha ' +
      'quedado corto. Un compuesto barato y sin glamur lleva treinta años estudiándose y sigue ' +
      'funcionando, y eso merece decirse claramente en un sitio que se pasa la mayor parte del ' +
      'tiempo diciendo que no se moleste.',
    description:
      'Qué hace realmente la creatina, qué dosis tienen evidencia detrás, qué es el peso en agua, ' +
      'y por qué la advertencia sobre el riñón nunca tuvo base.',

    commonBelief:
      'La creatina es cosa de culturismo, es dura para los riñones, y hay que cargarla y luego ' +
      'descansar.',

    sections: [
      {
        heading: 'Qué es, menos exótico que el envase',
        body: [
          'La creatina es un compuesto que su hígado ya fabrica y sus músculos ya almacenan, y ' +
            'usted come alrededor de un gramo al día en carne y pescado. Suplementarse eleva los ' +
            'depósitos musculares entre un veinte y un cuarenta por ciento por encima de lo que ' +
            'da la comida sola.',
          'Lo que hacen esos depósitos es regenerar ATP durante esfuerzos muy cortos y muy duros. ' +
            'Los primeros segundos de un sprint o de una serie pesada funcionan con un sistema de ' +
            'fosfatos que se vacía rápido y se rellena desde la creatina. Más creatina almacenada ' +
            'significa recarga más rápida, que significa una repetición más, que — repetido ' +
            'durante meses — significa más trabajo hecho y más adaptación.',
          'Ese es todo el mecanismo. No construye músculo directamente; le permite entrenar algo ' +
            'más duro, y el entrenamiento construye el músculo.',
        ],
      },
      {
        heading: 'De dónde salió la advertencia sobre el riñón',
        body: [
          'La creatina eleva la creatinina en sangre, que es el marcador con el que los ' +
            'laboratorios estiman la función renal. Un análisis de rutina en alguien que toma ' +
            'creatina puede por tanto parecer un riñón deteriorado cuando el riñón está ' +
            'perfectamente — se movió el marcador, no el órgano.',
          'Ese artefacto se convirtió en una advertencia sanitaria y lleva veinticinco años en ' +
            'circulación. Los estudios controlados, incluidos algunos de años, no han encontrado ' +
            'daño renal en adultos sanos. Los posicionamientos son inusualmente directos sobre esto.',
          'La salvedad real: si tiene una enfermedad renal previa, esto es una conversación con un ' +
            'médico y no una decisión sacada de un artículo. Y si le van a hacer análisis, diga ' +
            'que la toma, para que nadie persiga un número con una explicación aburrida.',
        ],
      },
      {
        heading: 'Cargar, ciclar y otras cosas que no hace falta',
        body: [
          'Cargar funciona y no es necesario. Una dosis alta durante cinco a siete días llena los ' +
            'depósitos rápido; una dosis de mantenimiento los llena igual de completos en unas ' +
            'tres o cuatro semanas. La única razón para cargar es la impaciencia, y el precio es ' +
            'que esa fase es donde aparecen las molestias digestivas.',
          'Ciclar no tiene ninguna evidencia detrás. Los depósitos simplemente bajan al punto de ' +
            'partida en un mes, lo cual no es un beneficio.',
          'La forma también está resuelta: monohidrato de creatina. Las variantes más caras no lo ' +
            'han superado en comparaciones directas, y el monohidrato es aquello sobre lo que se ' +
            'hizo toda la investigación.',
        ],
      },
      {
        heading: 'La ganancia de peso, que es real y no es grasa',
        body: [
          'La creatina mete agua dentro de las células musculares. La báscula sube uno o dos kilos ' +
            'en las primeras semanas y eso es agua intracelular, no grasa ni hinchazón en el ' +
            'sentido habitual.',
          'Para la mayoría es irrelevante o levemente positivo. Para quien compite por categorías ' +
            'de peso o en una prueba de resistencia donde cada kilo sube una cuesta, es una ' +
            'contrapartida real en la que pensar y no algo que despachar.',
        ],
      },
      {
        heading: 'Lo que no estamos afirmando',
        body: [
          'Hay una literatura creciente sobre creatina y cognición, sobre todo bajo privación de ' +
            'sueño, y parte de ella resulta interesante. Es mucho más joven y mucho más pequeña ' +
            'que la de músculo, y no es la razón para tomarla.',
          'Esta página está segura de los hallazgos de fuerza y masa magra porque treinta años de ' +
            'ensayos coinciden. Deliberadamente no está segura del resto, y la tabla dice cuál es ' +
            'cuál.',
        ],
      },
    ],

    claims: {
      maintenance: { what: 'Dosis de mantenimiento', note: 'Monohidrato; no hace falta ciclar' },
      loading: { what: 'Fase de carga opcional', note: 'Más rápida, no mejor' },
      'strength-effect': { what: 'Ganancia de fuerza sobre entrenar solo' },
      'water-weight': { what: 'Aumento de peso inicial', note: 'Agua intracelular, no grasa' },
      'kidney-evidence': { what: 'Daño renal en adultos sanos' },
    },

    practical: [
      {
        title: 'Compre monohidrato y nada más',
        detail:
          'Es la forma más barata y la que usó cada ensayo. Las variantes caras no la han ganado ' +
            'en comparación directa.',
      },
      {
        title: 'Sáltese la fase de carga',
        detail:
          'Una dosis de mantenimiento llega a los mismos depósitos en tres o cuatro semanas y ' +
            'evita las molestias digestivas que la carga a veces provoca.',
      },
      {
        title: 'Tómela a diario, también los días de descanso',
        detail:
          'Funciona manteniendo llenos los depósitos, no de forma aguda, así que el momento ' +
            'respecto al entrenamiento importa poco y la constancia mucho.',
      },
      {
        title: 'Menciónela antes de un análisis',
        detail:
          'Eleva la creatinina, que es el número usado para estimar la función renal. Dígalo y ' +
            'nadie investigará un artefacto.',
      },
    ],

    seeAlso: ['protein', 'magnesium'],

    sources: {
      'issn-creatine': 'International Society of Sports Nutrition — posicionamiento sobre creatina',
      'creatine-brain': 'Creatina y rendimiento cognitivo — revisión reciente',
    },
  },

  'cramp-and-electrolytes': {
    title: 'El calambre probablemente no son sus electrolitos',
    short: 'Calambres y electrolitos',
    lede:
      'La explicación de la sal y el magnesio es lo más creído del deporte amateur, y la ' +
      'evidencia que la sostiene es mucho más fina que la confianza con la que se repite.',
    description:
      'Qué dice la evidencia sobre el calambre muscular asociado al ejercicio, por qué los ' +
      'suplementos de magnesio no lo previenen, y qué parece que sí.',

    commonBelief:
      'Un calambre significa que estoy deshidratado o me falta sal y magnesio. Una pastilla de ' +
      'magnesio antes de dormir y se acaba.',

    sections: [
      {
        heading: 'La teoría que todos conocen, y su problema',
        body: [
          'La explicación de la deshidratación y los electrolitos dice que sudar agota líquido y ' +
            'sodio, que el líquido alrededor del músculo cambia, y que el músculo se vuelve ' +
            'hiperexcitable. Es plausible, encaja con que los calambres aparezcan en carreras ' +
            'calurosas, y lleva décadas siendo la explicación estándar.',
          'El problema es que no ha aguantado bien las pruebas. Los estudios que comparan a quienes ' +
            'sufren calambres con quienes no en la misma carrera no suelen encontrar la ' +
            'diferencia de hidratación o de sodio en sangre que la teoría necesita. También hay ' +
            'calambres en condiciones frescas, en nadadores, y en músculos que no eran los que más ' +
            'trabajaban.',
          'Y hay un problema más simple: el calambre suele atacar a un grupo muscular mientras el ' +
            'resto del cuerpo, que bebió el mismo líquido y perdió la misma sal, sigue sin ' +
            'inmutarse. Una carencia de todo el cuerpo explica mal un suceso local.',
        ],
      },
      {
        heading: 'La explicación que encaja mejor',
        body: [
          'La explicación hoy dominante es neuromuscular y no química. Cuando un músculo se fatiga, ' +
            'los reflejos que lo gobiernan se desequilibran — la señal que le dice que se contraiga ' +
            'sigue elevada mientras la que le dice que se relaje se debilita — y el músculo se ' +
            'bloquea.',
          'Esta explicación predice lo que a la de los electrolitos le cuesta: que el calambre llega ' +
            'al final de los esfuerzos duros y no al principio, en los músculos concretos que se ' +
            'están usando, en posición acortada, y que se alivia estirando. Estirar no hace nada a ' +
            'su sodio en sangre y todo al bucle reflejo, y estirar es lo que de hecho detiene un ' +
            'calambre en el momento.',
          'También encaja con el mejor predictor encontrado hasta ahora, que no es un valor ' +
            'analítico en absoluto: haber tenido calambres antes, y salir más rápido de lo ' +
            'habitual.',
        ],
      },
      {
        heading: 'Dónde entra el magnesio, y por qué casi nunca',
        body: [
          'El magnesio participa de verdad en la relajación muscular, y por eso la historia resulta ' +
            'tan atractiva. Pero los ensayos no respaldan suplementarse para prevenir calambres — ' +
            'en personas que no tienen carencia, las revisiones han concluido repetidamente que no ' +
            'hay efecto relevante, y el efecto en calambres nocturnos de personas mayores es como ' +
            'mucho pequeño.',
          'Eso es una afirmación más estrecha que «el magnesio no sirve». Si su ingesta es ' +
            'realmente baja, corregirla merece la pena por razones que nada tienen que ver con los ' +
            'calambres, y alrededor de la mitad de los adultos está por debajo de la referencia. ' +
            'Corregir un déficit real y tratar un síntoma son proyectos distintos.',
        ],
      },
      {
        heading: 'Para qué sirve el sodio de verdad',
        body: [
          'Reponer sodio importa, pero para otro problema. En pruebas largas, beber grandes ' +
            'volúmenes de agua sola mientras se suda sal puede diluir el sodio en sangre — ' +
            'hiponatremia — que es peligrosa de una manera en que un calambre no lo es.',
          'El rango de sodio en sudor de la tabla es enorme, y ese es el hallazgo honesto: las ' +
            'personas difieren por un factor de diez en lo salado que es su sudor. Lo que hace que ' +
            'el consejo genérico sobre cuánta sal tomar durante el ejercicio sea casi vacío, y que ' +
            'la pastilla de sal que transformó a un corredor no haga nada por el siguiente.',
        ],
      },
    ],

    claims: {
      'sweat-sodium': {
        what: 'Sodio en sudor, entre personas',
        note: 'Un rango de diez veces, por eso falla el consejo genérico',
      },
      'sweat-rate': { what: 'Tasa de sudoración durante el ejercicio' },
      'magnesium-evidence': {
        what: 'Suplementos de magnesio para prevenir calambres',
        note: 'En personas sin carencia',
      },
      'weight-loss-limit': {
        what: 'Pérdida de líquido a partir de la cual cae el rendimiento',
        note: 'Una guía, no un precipicio',
      },
    },

    practical: [
      {
        title: 'Estírelo, no lo beba',
        detail:
          'El estiramiento pasivo del músculo acalambrado es la única intervención que termina un ' +
            'episodio de forma fiable, y funciona por el reflejo y no por la sangre.',
      },
      {
        title: 'Mire su ritmo antes que sus suplementos',
        detail:
          'El predictor más fuerte encontrado hasta ahora es salir más rápido de lo que sostiene ' +
            'su entrenamiento. Es más incómodo de oír que «toma magnesio» y más útil.',
      },
      {
        title: 'Corrija un déficit real de magnesio por sí mismo',
        detail:
          'Cerca de la mitad de los adultos está por debajo de la referencia, y eso merece ' +
            'corregirse. Solo que no espere una cura para los calambres.',
      },
      {
        title: 'Para distancias largas, conozca su propio sudor',
        detail:
          'Con diez veces de diferencia entre personas, la única cifra útil es la suya. Pésese ' +
            'antes y después de una sesión larga con calor.',
      },
    ],

    seeAlso: ['magnesium', 'potassium', 'calcium'],

    sources: {
      'acsm-fluid': 'American College of Sports Medicine — posicionamiento sobre ejercicio y reposición de líquidos',
      'cochrane-cramp': 'Magnesio para los calambres musculares — revisión sistemática',
      'cramp-neuro': 'Control neuromuscular alterado y calambre asociado al ejercicio',
    },
  },

  'vitamin-d-and-performance': {
    title: 'La vitamina D corrige una carencia; no concede una ventaja',
    short: 'Vitamina D y rendimiento',
    lede:
      'Cerca de la mitad de los deportistas analizados está por debajo, y corregir eso merece la ' +
      'pena. Lo que no se sigue es lo que pone la etiqueta: que más, en alguien que ya está bien, ' +
      'haga algo en absoluto.',
    description:
      'Por qué los deportistas están tan a menudo bajos de vitamina D, qué hace y qué no hace ' +
      'corregirlo para el rendimiento, y dónde está el riesgo real de pasarse.',

    commonBelief:
      'La vitamina D mejora la fuerza y la inmunidad, así que más es mejor y una dosis semanal ' +
      'grande es un seguro razonable.',

    sections: [
      {
        heading: 'Por qué los deportistas están bajos tan a menudo',
        body: [
          'Porque casi todo el deporte ocurre bajo techo, o temprano, o tapado. La vitamina D se ' +
            'fabrica en la piel a partir de UVB, y el UVB no atraviesa el cristal, la crema solar ' +
            'ni la ropa. Quien entrena en una piscina, un gimnasio o un pabellón en invierno tiene ' +
            'aproximadamente la misma exposición que un oficinista.',
          'La latitud hace el resto. Por encima de unos treinta y siete grados, el sol de invierno ' +
            'está demasiado bajo para producir cantidades relevantes durante varios meses. La piel ' +
            'más oscura necesita exposiciones más largas para la misma síntesis, así que el mismo ' +
            'horario rinde menos.',
          'La comida apenas participa. Fuera del pescado azul, la yema y lo que se ha enriquecido a ' +
            'propósito, este no es un nutriente que la dieta aporte — por eso se comporta distinto ' +
            'de todo lo demás en este sitio.',
        ],
      },
      {
        heading: 'Qué hace corregirla',
        body: [
          'En personas con carencia, restaurar la vitamina D mejora la función muscular y reduce la ' +
            'tasa de fracturas por estrés. Ese efecto es real y merece tenerse.',
          'En personas que ya estaban bien, añadir más no ha producido beneficio de rendimiento en ' +
            'ensayos controlados. Esta es la forma de la mayoría de historias de micronutrientes y ' +
            'merece interiorizarse: la curva es una meseta, no una pendiente. Quitar una ' +
            'limitación ayuda; añadir excedente a un sistema que no estaba limitado, no.',
        ],
      },
      {
        heading: 'La mitad ósea, que importa más que la del rendimiento',
        body: [
          'La vitamina D gobierna cuánto calcio absorbe. Una deportista con vitamina D baja puede ' +
            'comer calcio de sobra y aun así no meterlo en el hueso, y el hueso bajo carga ' +
            'repetida es justo el tejido que no puede permitírselo.',
          'Por eso la conversación sobre la vitamina D y la conversación sobre las fracturas por ' +
            'estrés son la misma conversación, y por eso pertenece junto a la disponibilidad ' +
            'energética y no junto a los suplementos.',
        ],
      },
      {
        heading: 'El único micronutriente donde adivinar es de verdad arriesgado',
        body: [
          'La vitamina D es liposoluble y se almacena en lugar de eliminarse, lo que la convierte ' +
            'en uno de los pocos donde suplementarse sin cuidado puede hacer daño real. Dosis ' +
            'altas sostenidas elevan el calcio en sangre, y eso daña riñones y vasos.',
          'Las dosis únicas muy grandes — la megadosis mensual que suena eficiente — también han ' +
            'salido mal en los ensayos, y algunos mostraron más caídas y fracturas en lugar de ' +
            'menos. Diaria y moderada gana a mensual y heroica.',
          'Como con el hierro, el paso sensato es un análisis. Es barato, es la única manera de ' +
            'saber en qué lado de la meseta está, y convierte una suposición en una decisión.',
        ],
      },
    ],

    claims: {
      'athlete-insufficiency': {
        what: 'Deportistas con niveles insuficientes',
        note: 'Agrupado entre estudios; más alto en latitudes norteñas',
      },
      sufficiency: { what: 'Nivel en sangre considerado suficiente' },
      'performance-effect': {
        what: 'Beneficio de rendimiento',
        note: 'Por corregir una carencia, no por añadir excedente',
      },
      'upper-limit': { what: 'Límite superior para adultos' },
    },

    practical: [
      {
        title: 'Analizar en vez de suponer, en ambas direcciones',
        detail:
          'La mitad de los deportistas está baja y la mitad no, y no hay ningún síntoma que separe ' +
            'a unos de otros. Un análisis convierte una suposición en una decisión.',
      },
      {
        title: 'Diaria y moderada, no mensual y heroica',
        detail:
          'Las dosis únicas grandes han salido peor en los ensayos que las constantes — incluso en ' +
            'los resultados que se suponía que iban a mejorar.',
      },
      {
        title: 'Trátela primero como una cuestión de hueso',
        detail:
          'El efecto sobre la absorción de calcio es el que más importa bajo carga repetida. ' +
            'Pertenece a la misma conversación que las fracturas por estrés.',
      },
    ],

    seeAlso: ['vitamin-d', 'calcium', 'magnesium'],

    sources: {
      'ods-vitd': 'NIH Office of Dietary Supplements — Vitamina D',
      'vitd-athletes': 'Estado de vitamina D en deportistas — revisión sistemática y metaanálisis',
    },
  },

  'hidden-hunger': {
    title: 'Hambre oculta: comer de más y aun así quedarse corto',
    short: 'Hambre oculta',
    lede:
      'La palabra desnutrición evoca una imagen de escasez. Su forma más común en los países ' +
      'ricos se parece a lo contrario — comida de sobra, energía de sobra, y un panel con ' +
      'agujeros.',
    description:
      'Por qué se pueden comer calorías de sobra y seguir corto de hierro, magnesio o calcio — ' +
      'qué es el hambre oculta, a quién afecta, y cómo encontrarla.',

    commonBelief:
      'La carencia pasa donde no hay bastante comida. Si yo como de sobra — de más, si acaso —, ' +
      'ese no es mi problema.',

    sections: [
      {
        heading: 'Dos hambres distintas',
        body: [
          'La energía y los nutrientes llegan en el mismo bocado y el cuerpo los contabiliza por ' +
            'separado. Se puede cumplir con uno y fallar con el otro, y los dos fallos no se ' +
            'parecen en nada: la falta de energía se anuncia como hambre, y la falta de magnesio ' +
            'no se anuncia prácticamente de ninguna manera durante años.',
          'Ese silencio es toda la dificultad. No hay receptor para el estado de hierro. Nada ' +
            'produce antojo de zinc. El cuerpo dejará bajar un mineral durante muchísimo tiempo ' +
            'manteniendo normal el nivel en sangre a base de sacarlo de otro sitio — del hueso, ' +
            'normalmente — y el primer síntoma suele ser la consecuencia y no la carencia.',
        ],
      },
      {
        heading: 'Cómo un plato lleno acaba vacío',
        body: [
          'El mecanismo es dilución, no ausencia. Un alimento muy procesado suele conservar su ' +
            'energía y perder parte de lo que venía con ella: la molienda quita el germen y el ' +
            'salvado, y con ellos se va alrededor de cuatro quintos de su magnesio. El refinado ' +
            'hace lo mismo con los aceites. Nada de esto es una conspiración — es lo que hace la ' +
            'comida estable y barata — pero el resultado es una dieta densa en energía y fina en ' +
            'nutrientes.',
          'Y entonces la aritmética juega en contra. Las necesidades son más o menos fijas mientras ' +
            'que el apetito se sacia con energía, así que cuanta más energía venga de alimentos ' +
            'que apenas llevan otra cosa, menos sitio queda para los que llevan todo lo demás.',
          'Por eso el patrón aparece como sobrepeso y carencia a la vez, lo que suena a ' +
            'contradicción y no lo es. Son dos cuentas distintas, y solo una está en superávit.',
        ],
      },
      {
        heading: 'A quién le pasa de verdad',
        body: [
          'Los datos de las encuestas nacionales responden a esto inusualmente bien, porque miden ' +
            'lo que la gente comió y no lo que dice que come. En Estados Unidos una lista corta de ' +
            'nutrientes aparece repetidamente por debajo de la referencia en el conjunto de la ' +
            'población, no en un rincón de ella.',
          'El calcio y el magnesio destacan, y la razón es la misma: ambos venían en gran parte de ' +
            'grupos de alimentos que la gente ha ido comiendo menos — los lácteos para uno, los ' +
            'integrales y las legumbres para el otro. La vitamina D también está en la lista, pero ' +
            'por otro motivo, ya que la comida nunca fue de donde venía la mayor parte.',
          'Nada de eso significa que quien lea esto tenga una carencia. Por debajo de la referencia ' +
            'no es lo mismo que carente — la referencia se fija para cubrir a casi todo el mundo, ' +
            'así que quedar por debajo significa «posiblemente corto», no «seguro que enfermo». Lo ' +
            'que sí significa es que la suposición de estar bien porque hay comida en casa no se ' +
            'sostiene.',
        ],
      },
      {
        heading: 'Qué hacer, dado que nada de esto se ve',
        body: [
          'El primer movimiento honesto es dejar de adivinar. El cansancio difuso es compatible con ' +
            'una docena de déficits, con dormir mal, con un tiroides lento y con nada en absoluto, ' +
            'y elegir un suplemento del estante para que encaje con una sensación es como la gente ' +
            'acaba tomando zinc un año y creándose un problema de cobre.',
          'Lo útil es averiguar qué come realmente, en el sentido aburrido — durante una semana, no ' +
            'para siempre. La mayoría de los huecos de una dieta real resultan ser estructurales: ' +
            'un grupo de alimentos entero que se marchó en silencio, una comida al día que no ' +
            'aporta nada, un cambio hecho por una buena razón que se llevó algo consigo.',
          'Y donde un déficit parezca real, la respuesta es un análisis y un médico, no un ' +
            'artículo. Eso no es carraspeo. El hierro en particular es genuinamente peligroso de ' +
            'suplementar a ciegas, porque el cuerpo no tiene forma de excretar un excedente.',
        ],
      },
    ],

    claims: {
      'global-affected': {
        what: 'Personas afectadas en el mundo',
        note: 'La cifra de la OMS para las carencias de micronutrientes',
      },
      'us-shortfall-nutrients': {
        what: 'Nutrientes con ingesta insuficiente en la población de EE. UU.',
        note: 'Así los nombra el comité de las guías alimentarias',
      },
      'calcium-shortfall': { what: 'Adultos estadounidenses por debajo de la referencia de calcio' },
      'magnesium-shortfall': { what: 'Adultos estadounidenses por debajo de la referencia de magnesio' },
    },
    claimsNote:
      'Por debajo de la referencia no es lo mismo que carente. La referencia se fija lo bastante ' +
      'alta como para cubrir a casi todo el mundo, así que quedar por debajo significa ' +
      '«posiblemente corto» y no «seguro que enfermo».',

    practical: [
      {
        title: 'Mire una semana, no un día',
        detail:
          'Un día le habla de un día. Una semana enseña la estructura: la comida que no aporta ' +
            'nada, el grupo que se fue sin que nada lo sustituyera.',
      },
      {
        title: 'Encuentre el cambio que le costó algo',
        detail:
          'La mayoría de los huecos se remontan a una sola sustitución hecha por una buena razón — ' +
            'fuera lácteos por la lactosa, fuera pan por los hidratos, fuera carne por ética — ' +
            'donde no entró nada que llevara lo que se fue.',
      },
      {
        title: 'No trate una sensación con un suplemento',
        detail:
          'El cansancio encaja con demasiadas causas. Si un déficit parece real, un análisis cuesta ' +
            'menos que un año de la pastilla equivocada — y con el hierro es la diferencia entre ' +
            'ayudar y hacer daño.',
      },
    ],

    seeAlso: ['magnesium', 'calcium', 'iron', 'vitamin-d'],

    sources: {
      'who-micronutrient': 'Organización Mundial de la Salud — micronutrientes',
      dgac: 'Dietary Guidelines for Americans — informe científico',
      nhanes: 'Encuesta Nacional de Salud y Nutrición de EE. UU. (NHANES)',
    },
  },

  'restriction-and-the-binge-cycle': {
    title: 'El atracón no es el fallo. Es la segunda mitad de la restricción.',
    short: 'Restricción y atracones',
    lede:
      'La gente lo describe como perder el control, y la secuencia casi nunca empieza ahí. ' +
      'Empieza días antes, con una norma — y la pérdida de control es lo que hace un cuerpo al ' +
      'final de una, de forma tan fiable que se demostró en un laboratorio hace ochenta años.',
    description:
      'Por qué la restricción severa produce atracones como respuesta fisiológica y no como fallo ' +
      'de voluntad — qué mostró el experimento de Minnesota, y cuándo esto deja de ser un patrón ' +
      'y se convierte en un trastorno.',

    commonBelief:
      'Lo hice bien cuatro días y luego lo tiré todo. Con más disciplina, el quinto día habría ' +
      'sido como los otros.',

    sections: [
      {
        heading: 'Lo que demostraron treinta y seis hombres en Minnesota',
        body: [
          'En 1944 un grupo de voluntarios sanos — seleccionados por su estabilidad, en parte por ' +
            'eso mismo — aceptó comer alrededor de la mitad de lo que necesitaba durante seis ' +
            'meses, para que los investigadores aprendieran a realimentar a una Europa hambrienta. ' +
            'Por lo que se recuerda el estudio no es por el protocolo de realimentación.',
          'Los hombres se obsesionaron con la comida. Leían libros de cocina por placer. Coleccionaban ' +
            'recetas, acaparaban cubiertos, alargaban las comidas durante horas, hablaban de comer ' +
            'y de poco más. Se volvieron irritables, retraídos, incapaces de concentrarse. Varios ' +
            'desarrollaron episodios de comer sin control que les horrorizaron, y parte de ese ' +
            'comportamiento persistió meses después de que la comida normal se restaurara.',
          'No eran personas con una relación difícil con la comida. No tenían ninguna relación ' +
            'reseñable con la comida hasta que la restricción creó una. Ese es el hallazgo: el ' +
            'comportamiento lo fabricó la privación, en hombres corrientes, a propósito.',
        ],
      },
      {
        heading: 'Por qué el cuerpo trata una dieta como una emergencia',
        body: [
          'No tiene manera de distinguir entre una escasez que usted eligió y una que no. Las ' +
            'señales que lee son cuánta energía entra, cuánta hay almacenada y cuánto lleva ' +
            'durando el hueco — y ninguna de ellas transporta su intención.',
          'Así que hace lo que siempre ha hecho ante una escasez. La atención se estrecha sobre la ' +
            'comida, porque fijarse en la comida es como sobrevive un animal hambriento. Las ' +
            'señales de saciedad se debilitan. La recompensa asociada a comer sube, así que la ' +
            'misma comida resulta más irresistible que hace una semana. Esto no es debilidad ' +
            'revelándose; es un sistema funcionando exactamente como está construido, en alguien ' +
            'que ha decidido que el sistema es el enemigo.',
          'Y escala en vez de estabilizarse. Cuanto más larga y dura la restricción, más fuerte el ' +
            'tirón — por lo que el patrón acaba tan a menudo en un episodio que parece ' +
            'desproporcionado respecto a la norma que lo inició.',
        ],
      },
      {
        heading: 'La parte que lo convierte en un ciclo',
        body: [
          'Lo que convierte un episodio en un bucle es lo que pasa después. El episodio se lee como ' +
            'prueba de un defecto de carácter, y la respuesta a un defecto de carácter es una ' +
            'norma más estricta. La norma más estricta produce un tirón más fuerte. El tirón más ' +
            'fuerte produce un episodio mayor, que se lee como más prueba.',
          'Cada vuelta hace la siguiente más probable, y la persona que está dentro vive todo esto ' +
            'como información sobre sí misma en lugar de como una respuesta predecible a lo que ' +
            'sigue haciendo.',
          'Merece decirse claramente, porque es la parte que la gente rara vez oye: que esto sea ' +
            'predecible no lo convierte en un problema pequeño. Predecible y grave no son ' +
            'opuestos.',
        ],
      },
      {
        heading: 'Cuándo esto deja de ser un patrón',
        body: [
          'Hay una línea, y no la traza cuánto come alguien en un episodio. La traza lo que el ' +
            'comer le está haciendo al resto de una vida.',
          'Algunas señales de que se ha cruzado: episodios acompañados de una sensación real de ' +
            'pérdida de control y no de simple comer de más; cualquier cosa hecha después para ' +
            'compensar — vomitar, laxantes, ejercicio punitivo, ayunar al día siguiente —; que la ' +
            'comida o la figura ocupen tanta atención que el trabajo, los estudios o las ' +
            'relaciones estén sufriendo; y el secretismo, una de las señales más fiables de todas.',
          'Nada de eso es un diagnóstico, y esta página no puede hacerlo. Es el punto en el que el ' +
            'siguiente paso correcto deja de ser otra estrategia alimentaria y pasa a ser una ' +
            'persona — un médico de familia, un psicólogo, un teléfono de ayuda. Los trastornos de ' +
            'la conducta alimentaria tienen la mortalidad más alta de cualquier enfermedad ' +
            'psiquiátrica y responden bien al tratamiento, y ambas mitades de esa frase son ' +
            'razones para llamar pronto y no tarde.',
        ],
      },
      {
        heading: 'Qué significa esto para cualquier registro, incluido el nuestro',
        body: [
          'Hacemos una app que cuenta, así que aquí tenemos un interés evidente y deberíamos ' +
            'declararlo. Medir lo que se come le sirve de verdad a algunas personas y le hace daño ' +
            'de verdad a otras, y en qué grupo está usted no lo decide lo disciplinado que sea.',
          'Si un número en una pantalla marca el tono de su día, si ha empezado a comer alrededor ' +
            'de la app en lugar de usarla, o si ver un total le da ganas de compensar — eso no es ' +
            'una señal para registrar con más cuidado. Ciérrela. Ese consejo nos cuesta una ' +
            'usuaria y es el consejo correcto.',
        ],
      },
    ],

    claims: {},

    practical: [
      {
        title: 'Fíjese en qué mitad del ciclo está tratando',
        detail:
          'Casi todos los planes que se prueban tras un episodio apuntan al episodio. El episodio ' +
            'es la segunda mitad. La primera es la norma que lo precedió, y sigue en pie.',
      },
      {
        title: 'El secretismo es la señal que hay que tomarse en serio',
        detail:
          'De todo lo que hay en esta página, esconderlo es el marcador que más fiablemente separa ' +
            'una mala racha de algo que necesita ayuda. Si nadie en su vida sabe que esto ocurre, ' +
            'eso es información.',
      },
      {
        title: 'Pregúntele a alguien cuyo trabajo sea esto',
        detail:
          'Ni un artículo de nutrición ni una app. El médico de familia es una primera puerta ' +
            'razonable y ya ha tenido esta conversación antes.',
      },
    ],

    seeAlso: ['protein', 'magnesium', 'iron'],

    sources: {
      minnesota: 'El experimento de inanición de Minnesota — Keys et al. y análisis posteriores',
      'nice-eating': 'Guía NICE NG69 — trastornos de la conducta alimentaria: detección y tratamiento',
      beat: 'Beat — apoyo y líneas de ayuda en trastornos alimentarios',
    },
  },

  'tracking-without-obsession': {
    title: 'Hacemos una app de registro, así que lea esta parte con escepticismo',
    short: 'Registrar sin obsesión',
    lede:
      'Medir lo que se come ayuda mucho a algunas personas y perjudica a otras, y en qué grupo ' +
      'está no lo decide lo sensato que sea. Tenemos un interés evidente en la primera respuesta, ' +
      'que es exactamente por lo que existe esta página.',
    description:
      'Cuándo ayuda registrar la comida, cuándo se vuelve dañino, las señales de que ha pasado, y ' +
      'por qué a veces el consejo correcto es dejarlo.',

    commonBelief:
      'Registrar es solo información. Más datos sobre lo que como solo pueden ayudarme.',

    sections: [
      {
        heading: 'En qué es genuinamente bueno',
        body: [
          'En averiguar qué come usted de verdad, que casi nadie sabe. Las estimaciones de la ' +
            'propia ingesta hechas de memoria fallan por márgenes grandes en ambas direcciones, y ' +
            'los errores no son aleatorios: se acumulan justo alrededor de las cosas que uno menos ' +
            'quiere mirar.',
          'También es bueno para responder a una pregunta concreta. ¿Dónde me falta proteína? ¿Me ' +
            'acerco siquiera a suficiente hierro? ¿Qué lleva realmente el almuerzo que como cuatro ' +
            'veces por semana? Esas preguntas tienen respuesta, la respuesta es útil, y una vez la ' +
            'tiene no hace falta volver a preguntar.',
          'Esa es la forma del registro en su mejor versión: una investigación corta con principio ' +
            'y final. Quince días midiendo para encontrar dónde están los huecos valen mucho más ' +
            'que un año registrando por costumbre.',
        ],
      },
      {
        heading: 'Cómo se tuerce',
        body: [
          'Una medición se convierte en un objetivo, y un objetivo en una norma. Esa progresión no ' +
            'es inevitable y es frecuente, y suele ocurrir sin ningún momento en el que alguien ' +
            'decida permitirla.',
          'Las señales son reconocibles. Comer alrededor de la app en lugar de usarla — elegir el ' +
            'alimento que se registra limpio antes que el que encaja en la comida. Inquietud por ' +
            'comer algo que no se puede medir, lo que en silencio descarta la cocina de otras ' +
            'personas y la mayoría de los restaurantes. Un número al final del día que marca el ' +
            'tono de la noche. El impulso de compensar tras ver un total.',
          'Y la que más importa: registrar algo y después comer distinto por lo que dijo la ' +
            'pantalla, en lugar de por hambre, saciedad o plan.',
        ],
      },
      {
        heading: 'Quién probablemente no debería hacer esto',
        body: [
          'Cualquiera con antecedentes de un trastorno de la conducta alimentaria. Esto no es una ' +
            'cautela de compromiso — el autorregistro dietético se asocia a peores resultados en ' +
            'este grupo, y las guías clínicas suelen desaconsejarlo fuera de un tratamiento ' +
            'supervisado.',
          'Cualquiera para quien los números ya se convirtieron en el objetivo alguna vez. Si un ' +
            'intento anterior terminó con el registro tomando el mando, la app no es distinta esta ' +
            'vez.',
          'Y los adolescentes, donde la relación entre riesgo y beneficio es mala y el momento del ' +
            'desarrollo es malo. Construimos para adultos por esa razón.',
        ],
      },
      {
        heading: 'Qué preferiríamos que hiciera',
        body: [
          'Registre dos semanas, con una pregunta en la cabeza. Respóndala. Pare. Vuelva si cambia ' +
            'la pregunta o cambia la dieta.',
          'Use la app para consultar alimentos sueltos sin registrar nada — la mayor parte del ' +
            'valor está en el panel de un alimento y no en el diario, y ese uso no tiene ninguno ' +
            'de los riesgos descritos arriba.',
          'Y si alguna de las señales de esta página le describe, ciérrela. Ese consejo nos cuesta ' +
            'una usuaria, y sigue siendo el correcto. Una app que solo pudiera defenderse callando ' +
            'esto no merecería construirse.',
        ],
      },
    ],

    claims: {},

    practical: [
      {
        title: 'Póngale una pregunta y una fecha de fin',
        detail:
          'Dos semanas para encontrar dónde están los huecos ganan a un año registrando por ' +
            'costumbre, y ahí está casi todo el valor.',
      },
      {
        title: 'Vigile si come alrededor de la app',
        detail:
          'Elegir comida porque se registra limpio en lugar de porque encaja en la comida es la ' +
            'primera señal fiable de que la herramienta se ha convertido en el objetivo.',
      },
      {
        title: 'Use la consulta sin el diario',
        detail:
          'Lo más útil de aquí es el panel de nutrientes de un alimento. Eso no lleva ninguno de ' +
            'los riesgos del registro diario.',
      },
      {
        title: 'Si tiene antecedentes, no empiece',
        detail:
          'El autorregistro se asocia a peores resultados cuando hay antecedentes de un trastorno ' +
            'alimentario. Eso es una recomendación, no una precaución.',
      },
    ],

    seeAlso: ['protein', 'iron', 'calcium'],

    sources: {
      'tracking-review': 'Autorregistro dietético y resultados — revisión sistemática',
      orthorexia: 'Ortorexia nerviosa y tecnología de seguimiento de la salud — una revisión',
      'nice-eating': 'Guía NICE NG69 — trastornos de la conducta alimentaria: detección y tratamiento',
    },
  },
};

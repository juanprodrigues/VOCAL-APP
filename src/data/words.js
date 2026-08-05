const words = [
  {
    id:1,
    english:"accept",
    past:"accepted",
    spanish:"aceptar",
    example:"She accepted the offer",
    exampleEs:"Ella aceptó la oferta"
  },
  {
    id:2,
    english:"add",
    past:"added",
    spanish:"agregar",
    example:"I added some sugar",
    exampleEs:"Agregué un poco de azúcar"
  },
  {
    id:3,
    english:"allow",
    past:"allowed",
    spanish:"permitir",
    example:"They allowed me to enter",
    exampleEs:"Me permitieron entrar"
  },
  {
    id:4,
    english:"answer",
    past:"answered",
    spanish:"responder",
    example:"He answered the question",
    exampleEs:"Él respondió la pregunta"
  },
  {
    id:5,
    english:"ask",
    past:"asked",
    spanish:"preguntar",
    example:"She asked for help",
    exampleEs:"Ella pidió ayuda"
  },
  {
    id:6,
    english:"be",
    past:"was",
    spanish:"ser/estar(singular)",
    example:"I was happy",
    exampleEs:"Yo estaba feliz"
  },
  {
    id:7,
    english:"become",
    past:"became",
    spanish:"convertirse",
    example:"He became a doctor",
    exampleEs:"Él se convirtió en doctor"
  },
  {
    id:8,
    english:"begin",
    past:"began",
    spanish:"comenzar",
    example:"The class began early",
    exampleEs:"La clase comenzó temprano"
  },
  {
    id:9,
    english:"believe",
    past:"believed",
    spanish:"creer",
    example:"I believed his story",
    exampleEs:"Creí su historia"
  },
  {
    id:10,
    english:"bring",
    past:"brought",
    spanish:"traer",
    example:"She brought food",
    exampleEs:"Ella trajo comida"
  },
  {
    id:11,
    english:"buy",
    past:"bought",
    spanish:"comprar",
    example:"I bought a new phone",
    exampleEs:"Compré un teléfono nuevo"
  },
  {
    id:12,
    english:"call",
    past:"called",
    spanish:"llamar",
    example:"I called my friend",
    exampleEs:"Llamé a mi amigo"
  },
  {
    id:13,
    english:"can",
    past:"could",
    spanish:"poder",
    example:"I can swim",
    exampleEs:"Puedo nadar"
  },
  {
    id:14,
    english:"change",
    past:"changed",
    spanish:"cambiar",
    example:"She changed her mind",
    exampleEs:"Ella cambió de opinión"
  },
  {
    id:15,
    english:"choose",
    past:"chose",
    spanish:"elegir",
    example:"I chose the blue one",
    exampleEs:"Elegí el azul"
  },
  {
    id:16,
    english:"come",
    past:"came",
    spanish:"venir",
    example:"He came home late",
    exampleEs:"Él vino tarde a casa"
  },
  {
    id:17,
    english:"consider",
    past:"considered",
    spanish:"considerar",
    example:"I considered the idea",
    exampleEs:"Consideré la idea"
  },
  {
    id:18,
    english:"continue",
    past:"continued",
    spanish:"continuar",
    example:"She continued working",
    exampleEs:"Ella continuó trabajando"
  },
  {
    id:19,
    english:"cook",
    past:"cooked",
    spanish:"cocinar",
    example:"He cooked dinner",
    exampleEs:"Él cocinó la cena"
  },
  {
    id:20,
    english:"create",
    past:"created",
    spanish:"crear",
    example:"They created a website",
    exampleEs:"Ellos crearon un sitio web"
  },
  {
    id:21,
    english:"cut",
    past:"cut",
    spanish:"cortar",
    example:"I cut the paper",
    exampleEs:"Corté el papel"
  },
  {
    id:22,
    english:"decide",
    past:"decided",
    spanish:"decidir",
    example:"She decided to leave",
    exampleEs:"Ella decidió irse"
  },
  {
    id:23,
    english:"do",
    past:"did",
    spanish:"hacer",
    example:"I did my homework",
    exampleEs:"Hice mi tarea"
  },
  {
    id:24,
    english:"draw",
    past:"drew",
    spanish:"dibujar",
    example:"He drew a picture",
    exampleEs:"Él dibujó una imagen"
  },
  {
    id:25,
    english:"drink",
    past:"drank",
    spanish:"beber",
    example:"She drank water",
    exampleEs:"Ella bebió agua"
  },
  {
    id:26,
    english:"drive",
    past:"drove",
    spanish:"conducir",
    example:"I drove to work",
    exampleEs:"Conduje al trabajo"
  },
  {
    id:27,
    english:"eat",
    past:"ate",
    spanish:"comer",
    example:"We ate pizza",
    exampleEs:"Comimos pizza"
  },
  {
    id:28,
    english:"end",
    past:"ended",
    spanish:"terminar",
    example:"The movie ended",
    exampleEs:"La película terminó"
  },
  {
    id:29,
    english:"enjoy",
    past:"enjoyed",
    spanish:"disfrutar",
    example:"I enjoyed the trip",
    exampleEs:"Disfruté el viaje"
  },
  {
    id:30,
    english:"explain",
    past:"explained",
    spanish:"explicar",
    example:"She explained the problem",
    exampleEs:"Ella explicó el problema"
  },
  {
    id:31,
    english:"fall",
    past:"fell",
    spanish:"caer",
    example:"He fell down",
    exampleEs:"Él se cayó"
  },
  {
    id:32,
    english:"feel",
    past:"felt",
    spanish:"sentir",
    example:"I felt tired",
    exampleEs:"Me sentí cansado"
  },
  {
    id:33,
    english:"find",
    past:"found",
    spanish:"encontrar",
    example:"She found her keys",
    exampleEs:"Ella encontró sus llaves"
  },
  {
    id:34,
    english:"finish",
    past:"finished",
    spanish:"terminar",
    example:"I finished my work",
    exampleEs:"Terminé mi trabajo"
  },
  {
    id:35,
    english:"fly",
    past:"flew",
    spanish:"volar",
    example:"They flew to Spain",
    exampleEs:"Ellos volaron a España"
  },
  {
    id:36,
    english:"forget",
    past:"forgot",
    spanish:"olvidar",
    example:"I forgot your name",
    exampleEs:"Olvidé tu nombre"
  },
  {
    id:37,
    english:"get",
    past:"got",
    spanish:"obtener",
    example:"I got a new job",
    exampleEs:"Conseguí un nuevo trabajo"
  },
  {
    id:38,
    english:"give",
    past:"gave",
    spanish:"dar",
    example:"She gave me a gift",
    exampleEs:"Ella me dio un regalo"
  },
  {
    id:39,
    english:"go",
    past:"went",
    spanish:"ir",
    example:"We went home",
    exampleEs:"Fuimos a casa"
  },
  {
    id:40,
    english:"grow",
    past:"grew",
    spanish:"crecer",
    example:"The plant grew fast",
    exampleEs:"La planta creció rápido"
  },
  {
    id:41,
    english:"happen",
    past:"happened",
    spanish:"suceder",
    example:"What happened yesterday?",
    exampleEs:"¿Qué pasó ayer?"
  },
  {
    id:42,
    english:"have",
    past:"had",
    spanish:"tener",
    example:"I had a car",
    exampleEs:"Tenía un auto"
  },
  {
    id:43,
    english:"hear",
    past:"heard",
    spanish:"escuchar",
    example:"I heard a noise",
    exampleEs:"Escuché un ruido"
  },
  {
    id:44,
    english:"help",
    past:"helped",
    spanish:"ayudar",
    example:"She helped me",
    exampleEs:"Ella me ayudó"
  },
  {
    id:45,
    english:"hold",
    past:"held",
    spanish:"sostener",
    example:"He held the box",
    exampleEs:"Él sostuvo la caja"
  },
  {
    id:46,
    english:"keep",
    past:"kept",
    spanish:"mantener",
    example:"Keep the door closed",
    exampleEs:"Mantén la puerta cerrada"
  },
  {
    id:47,
    english:"know",
    past:"knew",
    spanish:"saber/conocer",
    example:"I knew the answer",
    exampleEs:"Sabía la respuesta"
  },
  {
    id:48,
    english:"learn",
    past:"learned",
    spanish:"aprender",
    example:"I learned English",
    exampleEs:"Aprendí inglés"
  },
  {
    id:49,
    english:"leave",
    past:"left",
    spanish:"salir/dejar",
    example:"She left early",
    exampleEs:"Ella salió temprano"
  },
  {
    id:50,
    english:"like",
    past:"liked",
    spanish:"gustar",
    example:"I liked the movie",
    exampleEs:"Me gustó la película"
  },
  {
    id:51,
    english:"listen",
    past:"listened",
    spanish:"escuchar",
    example:"I listened to music",
    exampleEs:"Escuché música"
  },
  {
    id:52,
    english:"live",
    past:"lived",
    spanish:"vivir",
    example:"They lived in London",
    exampleEs:"Ellos vivieron en Londres"
  },
  {
    id:53,
    english:"look",
    past:"looked",
    spanish:"mirar",
    example:"She looked at me",
    exampleEs:"Ella me miró"
  },
  {
    id:54,
    english:"lose",
    past:"lost",
    spanish:"perder",
    example:"I lost my keys",
    exampleEs:"Perdí mis llaves"
  },
  {
    id:55,
    english:"make",
    past:"made",
    spanish:"hacer/crear",
    example:"He made a cake",
    exampleEs:"Él hizo un pastel"
  },
  {
    id:56,
    english:"mean",
    past:"meant",
    spanish:"significar",
    example:"What does this word mean?",
    exampleEs:"¿Qué significa esta palabra?"
  },
  {
    id:57,
    english:"meet",
    past:"met",
    spanish:"conocer/reunirse",
    example:"I met my friend yesterday",
    exampleEs:"Me reuní con mi amigo ayer"
  },
  {
    id:58,
    english:"move",
    past:"moved",
    spanish:"mover/mudarse",
    example:"They moved to a new house",
    exampleEs:"Ellos se mudaron a una casa nueva"
  },
  {
    id:59,
    english:"need",
    past:"needed",
    spanish:"necesitar",
    example:"I need some help",
    exampleEs:"Necesito ayuda"
  },
  {
    id:60,
    english:"open",
    past:"opened",
    spanish:"abrir",
    example:"She opened the door",
    exampleEs:"Ella abrió la puerta"
  },
  {
    id:61,
    english:"pay",
    past:"paid",
    spanish:"pagar",
    example:"I paid the bill",
    exampleEs:"Pagué la cuenta"
  },
  {
    id:62,
    english:"play",
    past:"played",
    spanish:"jugar/tocar",
    example:"He played football",
    exampleEs:"Él jugó fútbol"
  },
  {
    id:63,
    english:"put",
    past:"put",
    spanish:"poner",
    example:"I put the book here",
    exampleEs:"Puse el libro aquí"
  },
  {
    id:64,
    english:"read",
    past:"read",
    spanish:"leer",
    example:"I read a book",
    exampleEs:"Leí un libro"
  },
  {
    id:65,
    english:"remember",
    past:"remembered",
    spanish:"recordar",
    example:"I remembered her name",
    exampleEs:"Recordé su nombre"
  },
  {
    id:66,
    english:"run",
    past:"ran",
    spanish:"correr",
    example:"He ran fast",
    exampleEs:"Él corrió rápido"
  },
  {
    id:67,
    english:"say",
    past:"said",
    spanish:"decir",
    example:"She said hello",
    exampleEs:"Ella dijo hola"
  },
  {
    id:68,
    english:"see",
    past:"saw",
    spanish:"ver",
    example:"I saw a bird",
    exampleEs:"Vi un pájaro"
  },
  {
    id:69,
    english:"sell",
    past:"sold",
    spanish:"vender",
    example:"They sold their car",
    exampleEs:"Ellos vendieron su auto"
  },
  {
    id:70,
    english:"send",
    past:"sent",
    spanish:"enviar",
    example:"I sent an email",
    exampleEs:"Envié un correo"
  },
  {
    id:71,
    english:"show",
    past:"showed",
    spanish:"mostrar",
    example:"She showed me the photo",
    exampleEs:"Ella me mostró la foto"
  },
  {
    id:72,
    english:"sit",
    past:"sat",
    spanish:"sentarse",
    example:"I sat on the chair",
    exampleEs:"Me senté en la silla"
  },
  {
    id:73,
    english:"sleep",
    past:"slept",
    spanish:"dormir",
    example:"The baby slept well",
    exampleEs:"El bebé durmió bien"
  },
  {
    id:74,
    english:"speak",
    past:"spoke",
    spanish:"hablar",
    example:"He spoke English",
    exampleEs:"Él habló inglés"
  },
  {
    id:75,
    english:"spend",
    past:"spent",
    spanish:"gastar/pasar",
    example:"I spent time with my family",
    exampleEs:"Pasé tiempo con mi familia"
  },
  {
    id:76,
    english:"stand",
    past:"stood",
    spanish:"estar de pie",
    example:"She stood near the door",
    exampleEs:"Ella estuvo cerca de la puerta"
  },
  {
    id:77,
    english:"start",
    past:"started",
    spanish:"empezar",
    example:"The game started late",
    exampleEs:"El juego empezó tarde"
  },
  {
    id:78,
    english:"stay",
    past:"stayed",
    spanish:"quedarse",
    example:"I stayed at home",
    exampleEs:"Me quedé en casa"
  },
  {
    id:79,
    english:"stop",
    past:"stopped",
    spanish:"parar",
    example:"The car stopped",
    exampleEs:"El auto se detuvo"
  },
  {
    id:80,
    english:"study",
    past:"studied",
    spanish:"estudiar",
    example:"I studied English",
    exampleEs:"Estudié inglés"
  },
  {
    id:81,
    english:"take",
    past:"took",
    spanish:"tomar/llevar",
    example:"She took a picture",
    exampleEs:"Ella tomó una foto"
  },
  {
    id:82,
    english:"talk",
    past:"talked",
    spanish:"hablar",
    example:"We talked yesterday",
    exampleEs:"Hablamos ayer"
  },
  {
    id:83,
    english:"teach",
    past:"taught",
    spanish:"enseñar",
    example:"He taught me English",
    exampleEs:"Él me enseñó inglés"
  },
  {
    id:84,
    english:"tell",
    past:"told",
    spanish:"decir/contar",
    example:"She told me the truth",
    exampleEs:"Ella me dijo la verdad"
  },
  {
    id:85,
    english:"think",
    past:"thought",
    spanish:"pensar",
    example:"I thought about you",
    exampleEs:"Pensé en ti"
  },
  {
    id:86,
    english:"try",
    past:"tried",
    spanish:"intentar",
    example:"I tried again",
    exampleEs:"Intenté otra vez"
  },
  {
    id:87,
    english:"turn",
    past:"turned",
    spanish:"girar/cambiar",
    example:"He turned left",
    exampleEs:"Él giró a la izquierda"
  },
  {
    id:88,
    english:"understand",
    past:"understood",
    spanish:"entender",
    example:"I understood the lesson",
    exampleEs:"Entendí la lección"
  },
  {
    id:89,
    english:"use",
    past:"used",
    spanish:"usar",
    example:"I used my computer",
    exampleEs:"Usé mi computadora"
  },
  {
    id:90,
    english:"wait",
    past:"waited",
    spanish:"esperar",
    example:"She waited for me",
    exampleEs:"Ella me esperó"
  },
  {
    id:91,
    english:"walk",
    past:"walked",
    spanish:"caminar",
    example:"I walked home",
    exampleEs:"Caminé a casa"
  },
  {
    id:92,
    english:"want",
    past:"wanted",
    spanish:"querer",
    example:"I wanted a coffee",
    exampleEs:"Quería un café"
  },
  {
    id:93,
    english:"watch",
    past:"watched",
    spanish:"mirar/ver",
    example:"We watched a movie",
    exampleEs:"Vimos una película"
  },
  {
    id:94,
    english:"win",
    past:"won",
    spanish:"ganar",
    example:"They won the match",
    exampleEs:"Ellos ganaron el partido"
  },
  {
    id:95,
    english:"work",
    past:"worked",
    spanish:"trabajar",
    example:"I worked yesterday",
    exampleEs:"Trabajé ayer"
  },
  {
    id:96,
    english:"write",
    past:"wrote",
    spanish:"escribir",
    example:"She wrote a letter",
    exampleEs:"Ella escribió una carta"
  },
  {
    id:97,
    english:"arrive",
    past:"arrived",
    spanish:"llegar",
    example:"He arrived early",
    exampleEs:"Él llegó temprano"
  },
  {
    id:98,
    english:"build",
    past:"built",
    spanish:"construir",
    example:"They built a house",
    exampleEs:"Ellos construyeron una casa"
  },
  {
    id:99,
    english:"break",
    past:"broke",
    spanish:"romper",
    example:"I broke the glass",
    exampleEs:"Rompí el vaso"
  },
  {
    id:100,
    english:"carry",
    past:"carried",
    spanish:"llevar/cargar",
    example:"She carried the bag",
    exampleEs:"Ella llevó la bolsa"
  },
  {
    id:101,
    english:"catch",
    past:"caught",
    spanish:"atrapar",
    example:"He caught the ball",
    exampleEs:"Él atrapó la pelota"
  },
  {
    id:102,
    english:"check",
    past:"checked",
    spanish:"revisar",
    example:"I checked my email",
    exampleEs:"Revisé mi correo"
  },
  {
    id:103,
    english:"clean",
    past:"cleaned",
    spanish:"limpiar",
    example:"She cleaned the room",
    exampleEs:"Ella limpió la habitación"
  },
  {
    id:104,
    english:"close",
    past:"closed",
    spanish:"cerrar",
    example:"I closed the window",
    exampleEs:"Cerré la ventana"
  },
  {
    id:105,
    english:"collect",
    past:"collected",
    spanish:"recoger/recolectar",
    example:"He collected stamps",
    exampleEs:"Él coleccionó estampillas"
  },
  {
    id:106,
    english:"compare",
    past:"compared",
    spanish:"comparar",
    example:"I compared the prices",
    exampleEs:"Comparé los precios"
  },
  {
    id:107,
    english:"complete",
    past:"completed",
    spanish:"completar",
    example:"She completed the task",
    exampleEs:"Ella completó la tarea"
  },
  {
    id:108,
    english:"cover",
    past:"covered",
    spanish:"cubrir",
    example:"He covered the table",
    exampleEs:"Él cubrió la mesa"
  },
  {
    id:109,
    english:"dance",
    past:"danced",
    spanish:"bailar",
    example:"They danced together",
    exampleEs:"Ellos bailaron juntos"
  },
  {
    id:110,
    english:"develop",
    past:"developed",
    spanish:"desarrollar",
    example:"The company developed a product",
    exampleEs:"La empresa desarrolló un producto"
  },
  {
    id:111,
    english:"die",
    past:"died",
    spanish:"morir",
    example:"The plant died",
    exampleEs:"La planta murió"
  },
  {
    id:112,
    english:"discover",
    past:"discovered",
    spanish:"descubrir",
    example:"They discovered a new place",
    exampleEs:"Ellos descubrieron un lugar nuevo"
  },
  {
    id:113,
    english:"discuss",
    past:"discussed",
    spanish:"discutir",
    example:"We discussed the problem",
    exampleEs:"Discutimos el problema"
  },
  {
    id:114,
    english:"dream",
    past:"dreamed",
    spanish:"soñar",
    example:"I dreamed about traveling",
    exampleEs:"Soñé con viajar"
  },
  {
    id:115,
    english:"drop",
    past:"dropped",
    spanish:"dejar caer",
    example:"She dropped her phone",
    exampleEs:"Ella dejó caer su teléfono"
  },
  {
    id:116,
    english:"earn",
    past:"earned",
    spanish:"ganar dinero",
    example:"He earned a lot of money",
    exampleEs:"Él ganó mucho dinero"
  },
  {
    id:117,
    english:"enter",
    past:"entered",
    spanish:"entrar",
    example:"They entered the building",
    exampleEs:"Ellos entraron al edificio"
  },
  {
    id:118,
    english:"escape",
    past:"escaped",
    spanish:"escapar",
    example:"The dog escaped",
    exampleEs:"El perro escapó"
  },
  {
    id:119,
    english:"expect",
    past:"expected",
    spanish:"esperar",
    example:"I expected good news",
    exampleEs:"Esperaba buenas noticias"
  },
  {
    id:120,
    english:"face",
    past:"faced",
    spanish:"enfrentar",
    example:"She faced the problem",
    exampleEs:"Ella enfrentó el problema"
  },
  {
    id:121,
    english:"fill",
    past:"filled",
    spanish:"llenar",
    example:"I filled the bottle",
    exampleEs:"Llené la botella"
  },
  {
    id:122,
    english:"follow",
    past:"followed",
    spanish:"seguir",
    example:"He followed me",
    exampleEs:"Él me siguió"
  },
  {
    id:123,
    english:"force",
    past:"forced",
    spanish:"forzar",
    example:"They forced the door open",
    exampleEs:"Ellos forzaron la puerta"
  },
  {
    id:124,
    english:"get up",
    past:"got up",
    spanish:"levantarse",
    example:"I got up early",
    exampleEs:"Me levanté temprano"
  },
  {
    id:125,
    english:"guess",
    past:"guessed",
    spanish:"adivinar",
    example:"She guessed the answer",
    exampleEs:"Ella adivinó la respuesta"
  },
  {
    id:126,
    english:"handle",
    past:"handled",
    spanish:"manejar",
    example:"He handled the situation",
    exampleEs:"Él manejó la situación"
  },
  {
    id:127,
    english:"happen",
    past:"happened",
    spanish:"pasar/suceder",
    example:"It happened suddenly",
    exampleEs:"Sucedió de repente"
  },
  {
    id:128,
    english:"improve",
    past:"improved",
    spanish:"mejorar",
    example:"I improved my English",
    exampleEs:"Mejoré mi inglés"
  },
  {
    id:129,
    english:"include",
    past:"included",
    spanish:"incluir",
    example:"The price included taxes",
    exampleEs:"El precio incluía impuestos"
  },
  {
    id:130,
    english:"increase",
    past:"increased",
    spanish:"aumentar",
    example:"Prices increased last year",
    exampleEs:"Los precios aumentaron el año pasado"
  },
  {
    id:131,
    english:"introduce",
    past:"introduced",
    spanish:"presentar",
    example:"He introduced his friend",
    exampleEs:"Él presentó a su amigo"
  },
  {
    id:132,
    english:"join",
    past:"joined",
    spanish:"unirse",
    example:"She joined the team",
    exampleEs:"Ella se unió al equipo"
  },
  {
    id:133,
    english:"jump",
    past:"jumped",
    spanish:"saltar",
    example:"The boy jumped high",
    exampleEs:"El niño saltó alto"
  },
  {
    id:134,
    english:"kill",
    past:"killed",
    spanish:"matar",
    example:"The plant was killed by frost",
    exampleEs:"La planta murió por la helada"
  },
  {
    id:135,
    english:"laugh",
    past:"laughed",
    spanish:"reír",
    example:"They laughed a lot",
    exampleEs:"Ellos se rieron mucho"
  },
  {
    id:136,
    english:"lead",
    past:"led",
    spanish:"liderar",
    example:"She led the group",
    exampleEs:"Ella lideró el grupo"
  },
  {
    id:137,
    english:"let",
    past:"let",
    spanish:"dejar/permitir",
    example:"He let me go",
    exampleEs:"Él me dejó ir"
  },
  {
    id:138,
    english:"lie",
    past:"lay",
    spanish:"acostarse",
    example:"I lay on the bed",
    exampleEs:"Me acosté en la cama"
  },
  {
    id:139,
    english:"lift",
    past:"lifted",
    spanish:"levantar",
    example:"He lifted the box",
    exampleEs:"Él levantó la caja"
  },
  {
    id:140,
    english:"love",
    past:"loved",
    spanish:"amar",
    example:"I loved the movie",
    exampleEs:"Me encantó la película"
  },
  {
    id:141,
    english:"manage",
    past:"managed",
    spanish:"lograr/manejar",
    example:"She managed the project",
    exampleEs:"Ella manejó el proyecto"
  },
  {
    id:142,
    english:"marry",
    past:"married",
    spanish:"casarse",
    example:"They married in 2020",
    exampleEs:"Ellos se casaron en 2020"
  },
  {
    id:143,
    english:"miss",
    past:"missed",
    spanish:"extrañar/perder",
    example:"I missed the bus",
    exampleEs:"Perdí el autobús"
  },
  {
    id:144,
    english:"notice",
    past:"noticed",
    spanish:"notar",
    example:"I noticed the difference",
    exampleEs:"Noté la diferencia"
  },
  {
    id:145,
    english:"offer",
    past:"offered",
    spanish:"ofrecer",
    example:"She offered help",
    exampleEs:"Ella ofreció ayuda"
  },
  {
    id:146,
    english:"order",
    past:"ordered",
    spanish:"ordenar/pedir",
    example:"I ordered food",
    exampleEs:"Pedí comida"
  },
  {
    id:147,
    english:"own",
    past:"owned",
    spanish:"poseer",
    example:"He owned a business",
    exampleEs:"Él tenía un negocio"
  },
  {
    id:148,
    english:"pass",
    past:"passed",
    spanish:"pasar",
    example:"I passed the exam",
    exampleEs:"Aprobé el examen"
  },
  {
    id:149,
    english:"pick",
    past:"picked",
    spanish:"elegir/recoger",
    example:"She picked a flower",
    exampleEs:"Ella recogió una flor"
  },
  {
    id:150,
    english:"plan",
    past:"planned",
    spanish:"planear",
    example:"We planned a trip",
    exampleEs:"Planeamos un viaje"
  },
  {
    id:151,
    english:"prepare",
    past:"prepared",
    spanish:"preparar",
    example:"I prepared dinner",
    exampleEs:"Preparé la cena"
  },
  {
    id:152,
    english:"produce",
    past:"produced",
    spanish:"producir",
    example:"The factory produced cars",
    exampleEs:"La fábrica produjo autos"
  },
  {
    id:153,
    english:"promise",
    past:"promised",
    spanish:"prometer",
    example:"He promised to help",
    exampleEs:"Él prometió ayudar"
  },
  {
    id:154,
    english:"protect",
    past:"protected",
    spanish:"proteger",
    example:"She protected her family",
    exampleEs:"Ella protegió a su familia"
  },
  {
    id:155,
    english:"provide",
    past:"provided",
    spanish:"proporcionar",
    example:"They provided information",
    exampleEs:"Ellos proporcionaron información"
  },
  {
    id:156,
    english:"reach",
    past:"reached",
    spanish:"alcanzar/llegar",
    example:"I reached my goal",
    exampleEs:"Alcancé mi objetivo"
  },
  {
    id:157,
    english:"receive",
    past:"received",
    spanish:"recibir",
    example:"I received a message",
    exampleEs:"Recibí un mensaje"
  },
  {
    id:158,
    english:"recognize",
    past:"recognized",
    spanish:"reconocer",
    example:"I recognized him",
    exampleEs:"Lo reconocí"
  },
  {
    id:159,
    english:"record",
    past:"recorded",
    spanish:"grabar/registrar",
    example:"She recorded a video",
    exampleEs:"Ella grabó un video"
  },
  {
    id:160,
    english:"reduce",
    past:"reduced",
    spanish:"reducir",
    example:"We reduced the price",
    exampleEs:"Reducimos el precio"
  },
  {
    id:161,
    english:"remain",
    past:"remained",
    spanish:"permanecer",
    example:"He remained calm",
    exampleEs:"Él permaneció tranquilo"
  },
  {
    id:162,
    english:"repeat",
    past:"repeated",
    spanish:"repetir",
    example:"Please repeat the sentence",
    exampleEs:"Por favor repite la oración"
  },
  {
    id:163,
    english:"replace",
    past:"replaced",
    spanish:"reemplazar",
    example:"I replaced the battery",
    exampleEs:"Reemplacé la batería"
  },
  {
    id:164,
    english:"reply",
    past:"replied",
    spanish:"responder",
    example:"She replied quickly",
    exampleEs:"Ella respondió rápido"
  },
  {
    id:165,
    english:"return",
    past:"returned",
    spanish:"volver/regresar",
    example:"I returned home",
    exampleEs:"Regresé a casa"
  },
  {
    id:166,
    english:"save",
    past:"saved",
    spanish:"guardar/salvar",
    example:"I saved the file",
    exampleEs:"Guardé el archivo"
  },
  {
    id:167,
    english:"search",
    past:"searched",
    spanish:"buscar",
    example:"I searched for information",
    exampleEs:"Busqué información"
  },
  {
    id:168,
    english:"seem",
    past:"seemed",
    spanish:"parecer",
    example:"It seemed easy",
    exampleEs:"Parecía fácil"
  },
  {
    id:169,
    english:"serve",
    past:"served",
    spanish:"servir",
    example:"They served dinner",
    exampleEs:"Ellos sirvieron la cena"
  },
  {
    id:170,
    english:"share",
    past:"shared",
    spanish:"compartir",
    example:"She shared her ideas",
    exampleEs:"Ella compartió sus ideas"
  },
  {
    id:171,
    english:"shoot",
    past:"shot",
    spanish:"disparar/lanzar",
    example:"He shot the ball",
    exampleEs:"Él lanzó la pelota"
  },
  {
    id:172,
    english:"sing",
    past:"sang",
    spanish:"cantar",
    example:"She sang a song",
    exampleEs:"Ella cantó una canción"
  },
  {
    id:173,
    english:"smile",
    past:"smiled",
    spanish:"sonreír",
    example:"He smiled at me",
    exampleEs:"Él me sonrió"
  },
  {
    id:174,
    english:"solve",
    past:"solved",
    spanish:"resolver",
    example:"I solved the problem",
    exampleEs:"Resolví el problema"
  },
  {
    id:175,
    english:"sound",
    past:"sounded",
    spanish:"sonar",
    example:"It sounded great",
    exampleEs:"Sonó genial"
  },
  {
    id:176,
    english:"spend",
    past:"spent",
    spanish:"gastar/pasar",
    example:"I spent money yesterday",
    exampleEs:"Gasté dinero ayer"
  },
  {
    id:177,
    english:"stand",
    past:"stood",
    spanish:"estar de pie",
    example:"He stood outside",
    exampleEs:"Él estuvo afuera"
  },
  {
    id:178,
    english:"steal",
    past:"stole",
    spanish:"robar",
    example:"Someone stole my bike",
    exampleEs:"Alguien robó mi bicicleta"
  },
  {
    id:179,
    english:"suggest",
    past:"suggested",
    spanish:"sugerir",
    example:"She suggested a solution",
    exampleEs:"Ella sugirió una solución"
  },
  {
    id:180,
    english:"support",
    past:"supported",
    spanish:"apoyar",
    example:"They supported me",
    exampleEs:"Ellos me apoyaron"
  },
  {
    id:181,
    english:"suppose",
    past:"supposed",
    spanish:"suponer",
    example:"I supposed he was right",
    exampleEs:"Supuse que él tenía razón"
  },
  {
    id:182,
    english:"teach",
    past:"taught",
    spanish:"enseñar",
    example:"She taught English",
    exampleEs:"Ella enseñó inglés"
  },
  {
    id:183,
    english:"thank",
    past:"thanked",
    spanish:"agradecer",
    example:"I thanked my parents",
    exampleEs:"Agradecí a mis padres"
  },
  {
    id:184,
    english:"travel",
    past:"traveled",
    spanish:"viajar",
    example:"We traveled last summer",
    exampleEs:"Viajamos el verano pasado"
  },
  {
    id:185,
    english:"treat",
    past:"treated",
    spanish:"tratar",
    example:"He treated me well",
    exampleEs:"Él me trató bien"
  },
  {
    id:186,
    english:"trust",
    past:"trusted",
    spanish:"confiar",
    example:"I trusted my friend",
    exampleEs:"Confié en mi amigo"
  },
  {
    id:187,
    english:"visit",
    past:"visited",
    spanish:"visitar",
    example:"I visited my family",
    exampleEs:"Visité a mi familia"
  },
  {
    id:188,
    english:"vote",
    past:"voted",
    spanish:"votar",
    example:"People voted yesterday",
    exampleEs:"La gente votó ayer"
  },
  {
    id:189,
    english:"wake",
    past:"woke",
    spanish:"despertar",
    example:"I woke up early",
    exampleEs:"Me desperté temprano"
  },
  {
    id:190,
    english:"wear",
    past:"wore",
    spanish:"usar/llevar puesto",
    example:"She wore a dress",
    exampleEs:"Ella usó un vestido"
  },
  {
    id:191,
    english:"win",
    past:"won",
    spanish:"ganar",
    example:"Our team won",
    exampleEs:"Nuestro equipo ganó"
  },
  {
    id:192,
    english:"wish",
    past:"wished",
    spanish:"desear",
    example:"I wished for success",
    exampleEs:"Deseé éxito"
  },
  {
    id:193,
    english:"wonder",
    past:"wondered",
    spanish:"preguntarse",
    example:"I wondered why",
    exampleEs:"Me pregunté por qué"
  },
  {
    id:194,
    english:"worry",
    past:"worried",
    spanish:"preocuparse",
    example:"She worried too much",
    exampleEs:"Ella se preocupó demasiado"
  },
  {
    id:195,
    english:"accept",
    past:"accepted",
    spanish:"aceptar",
    example:"They accepted the decision",
    exampleEs:"Ellos aceptaron la decisión"
  },
  {
    id:196,
    english:"agree",
    past:"agreed",
    spanish:"estar de acuerdo",
    example:"I agreed with him",
    exampleEs:"Estuve de acuerdo con él"
  },
  {
    id:197,
    english:"appear",
    past:"appeared",
    spanish:"aparecer",
    example:"He appeared suddenly",
    exampleEs:"Él apareció de repente"
  },
  {
    id:198,
    english:"avoid",
    past:"avoided",
    spanish:"evitar",
    example:"I avoided the problem",
    exampleEs:"Evité el problema"
  },
  {
    id:199,
    english:"belong",
    past:"belonged",
    spanish:"pertenecer",
    example:"This book belonged to me",
    exampleEs:"Este libro me pertenecía"
  },
  {
    id:200,
    english:"build",
    past:"built",
    spanish:"construir",
    example:"They built a new school",
    exampleEs:"Ellos construyeron una escuela nueva"
  }
];

export default wordsData;


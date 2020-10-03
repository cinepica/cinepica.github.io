var loadedFilms = 0;
var filmsDisplayed = 0;
var filmsList = [];
var films = [
    {   name:"Three Billboards Outside Ebbing, Missouri",
        alternateName: "Tres anuncios por un crimen",
        genres: ["comedia", "suspenso", "policial", "drama"], 
        country:"USA",
        runtime: "1h 55min",
        year: 2017,
        director: "Martin McDonagh",
        actores: ["Sam Rockwell", "Woody Harrelson", "Frances McDormand"],
        image1: "posts/threebill.jpg",
        image2: "posts/threebill2.jpg",
        description: "Meses han pasado desde que la hija de Mildred (Frances McDormand) fue violada y asesinada. Para llamar la atención, ella decide pintar tres carteles en la entrada del pueblo acusando de desidia a las autoridades locales. <br><br>Three Billboards es un film con una historia fuerte y actuaciones poderosas por parte de McDormand, Woody Harrelson y Sam Rockwell, en el que el director juega con la opinión del espectador en relación a los personajes. Un drama con toques de comedia negra que les valió a la actriz principal y a Rockwell un Óscar a cada uno por sus actuaciones.",
        rating: `<span class="imdbRatingPlugin" data-user="ur9121736" data-title="tt5027774" data-style="p2"><a href="https://www.imdb.com/title/tt5027774/?ref_=plg_rt_1"><img src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/images/imdb_38x18.png" alt=" Three Billboards Outside Ebbing, Missouri
        (2017) on IMDb" />
        </a></span><script>(function(d,s,id){var js,stags=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return;}js=d.createElement(s);js.id=id;js.src="https://ia.media-imdb.com/images/G/01/imdb/plugins/rating/js/rating.js";stags.parentNode.insertBefore(js,stags);})(document,"script","imdb-rating-api");</script>`
},
    {   name:"4 meses, 3 semanas, 2 días",
        alternateName:"4 luni, 3 saptamâni si 2 zile",
        genres: ["drama"], 
        country:"Rumania",
        runtime: "1h 53min",
        year: 2007,
        director: "Cristian Mungiu",
        actores: ["Anamaria Marinca", "Laura Vasiliu", "Vlad Ivanov"],
        image1: "posts/4-meses.jpg",
        image2: "posts/4-meses2.jpg",
        description:"Rumania, año 1987. Gabita y Otilia deben superar duras adversidades para realizar un aborto en un contexto histórico que lo restringe y penaliza fuertemente por ley, así como también a los métodos anticonceptivos. Una película con una fuerte crítica social a la opresión ejercida por el régimen comunista de la época, en vigencia del decreto 770 mediante el cual se pretendía aumentar drásticamente la población prohibiendo la terminación de los embarazos y la anticoncepción. Esto forzaba a las mujeres a recurrir a métodos clandestinos, poniendo en riesgo sus propias vidas. Una cinta minimalista, brutalmente honesta, donde se muestra sin reparos lo que sucede, sin hacer juicios morales. Una muestra de la dura realidad de las mujeres y de las difíciles situaciones que deben enfrentar. La cinta pertenece a la denominada 'Nueva Ola' rumana, cuyas películas se caracterizan en su mayoría por ser austeras y realistas, con contenido social, ambientadas durante el fin del comunismo y la transición al nuevo sistema económico y político. 🌈Dato de color: Ganó la Palma de Oro del Festival de Cannes en 2007, entre otros galardones."
    },
    {        name:"Princesa Mononoke",
        alternateName:"Mononoke Hime",
        genres: ["animada", "fantasia", "drama"], 
        country:"Japón",
        runtime: "2h 14min",
        year: 1997,
        director: "Hayao Miyazaki",
        actores: ["Yôji Matsuda", "Yuriko Ishida", "Yûko Tanaka"],
        image1: "posts/mononoke.jpg",
        image2: "posts/mononoke2.jpg",
        description:"Al defender a su aldea del ataque de un feroz demonio, el brazo de Ashitaka es infectado por una maldición. Deberá aventurarse en busca de la cura, y su camino lo llevará a cruzarse con fantásticos personajes, entre ellos una aguerrida joven montada en un enorme lobo blanco. Una de las obras maestras de Miyazaki, 'Princesa Mononoke' representa en toda su profundidad el eterno conflicto entre la naturaleza y la raza humana."
    },
    {
        name:"La Cena de los Idiotas",
        alternateName:"Le Dîner de Cons",
        genres: ["comedia"], 
        country:"Francia",
        runtime: "1h 20min",
        year: 1998,
        director: "Francis Veber",
        actores: ["Thierry Lhermitte", "Jacques Villeret"],
        image1: "posts/diner-de-cons.jpg",
        image2: "posts/diner-de-cons2.jpg",
        description:"Un grupo de gente de clase alta tiene para la cena de cada miércoles la misma premisa: llevar consigo al hombre más tonto que puedan encontrar para reirse de ellos. Pero justo cuando Pierre encuentra a Monsieur Pignon, un especimen muy particular, las cosas comienzan a salir mal. 'La cena de los idiotas' es un clásico de la comedia francesa, y ya han visto la luz adaptaciones tanto en cine como en teatro en Estados Unidos (con Steve Carell y Paul Rudd), Argentina (Guillermo Francella y Adrían Suar), India y China."
    },
    {
        name:"Amores Perros",
        genres: ["drama"], 
        country:"México",
        runtime: "",
        year: 2000,
        director: "Alejandro González Iñárritu",
        actores: ["Emilio Echevarría", "Gael García Bernal", "Goya Toledo."],
        escritor: "Guillermo Arriaga",
        image1: "posts/amores-perros.jpg",
        image2: "posts/amores-perros2.jpg",
        description:"Un trágico accidente conecta tres historias: un indigente alejado de su familia, un joven que sueña con escapar de la pobreza, y una famosa supermodelo al inicio de una nueva relación. Todas ellas con un particular punto de contacto: los perros. Es el primer largometraje de Iñárritu, y al igual que en la mayoría de sus obras, tiene al dolor como parte fundamental de la trama. Aquí además encontraremos escenas de violencia gráfica, peleas de perros, historias de traición, desencuentro, frustración y necesidad. Un film crudo que nos habla del desamor y del amor dañino, la decadencia y las relaciones humanas."
    },
    {
        name:"Synecdoche, New York",
        genres: ["drama", "comedia"], 
        country:"USA",
        runtime: "2h 4min",
        year: "2008",
        director: "Charlie Kaufman",
        actores: ["Philip Seymour Hoffman", "Samantha Morton", "Michelle Williams", "Catherine Keener"],
        image1: "posts/synecdoche.jpg",
        image2: "posts/synecdoche2.jpg",
        description:"Caden (Phillip Seymour Hoffman) es un director de teatro obsesionado con su trabajo, a través del cual intenta olvidar los problemas de su vida personal. Con su ex y su hija lejos, intentará crear la obra maestra para la que siempre ha vivido. En Synecdoche, Hoffman incomoda al representar un personaje que se frustra ante la dificultad de plasmar sus ideas en la realidad, en otra gran actuación. Charlie Kaufmann vuelve a tocar los temas existenciales (y hasta filosóficos) que son recurrentes en él. La película, que comienza bastante cómica, se va complejizando y ramificando, abordando ideas como la muerte, la identidad y la trascendencia. Dato de color: Charlie Kaufman es famoso por su trabajo como escritor, siendo él el autor de guiones muy originales como los de Adaptation, Being John Malkovich y Eternal Sunshine of the Spotless Mind."
    },
    {
        name:"Hereditary",
        alternateName:"El Legado del Diablo",
        genres: ["terror", "suspenso"], 
        country:["USA"],
        runtime: "2h 7min",
        year: 2018,
        director: "Ari Aster",
        actores: ["Toni Collette", "Milly Shapiro", "Gabriel Byrne", "Alex Wolff"],
        image1: "posts/hereditary.jpg",
        image2: "posts/hereditary2.jpg",
        description:"Luego de la muerte de su madre, Anne y su familia comienzan a experimentar sucesos extraños."
    },
    {
        name:"The Pervert's Guide to Ideology",
        alternateName:"Guía ideológica para pervertidos",
        genres: ["documental"], 
        country:"UK",
        runtime: "2h 16min",
        year: 2012,
        director: "Sophie Fiennes",
        actores: ["Slavoj Žižek"],
        image1: "posts/perverts.jpg",
        image2: "posts/perverts2.jpg",
        description:"Slavoj Žižek ya está comiendo del tacho de basura. Este tacho de basura es, por supuesto, la ideología, y es el mismo que nos alimenta a todos. 'La Guía de la Ideología para Pervertidos' es un documental en el cual el filósofo esloveno toma fragmentos de películas (y algún que otro momento histórico) y los analiza desde un punto de vista ideológico y psicoanalítico. Films como Titanic, They Live, Taxi Driver o incluso obras casi ignotas para nosotros como una película en donde Stalin da el aval para una relación romántica son fragmentados y deconstruidos, en pos de comprender mensajes y simbolismos que se encuentran ocultos detrás de las apariencias de las cosas.Conceptos como 'El Gran Otro', la utilización de obras como 'El Himno a la Alegría' por facciones diametralmente opuestas, las ideas ocultas tras determinados artilugios utilizados por grandes empresas como Starbucks o Coca-Cola. Todo es analizado y expuesto por Žižek y Sophie Fiennes, la directora de este infaltable documental. ⚠️ADVERTENCIA: Contiene spoilers de las películas que analiza."
    },
    {
        name:"Shoplifters",
        alternateName: ["Manbiki Kazoku", "Un asunto de familia"],
        genres: ["drama"], 
        country:"Japón",
        runtime: "2h 1min",
        year: "2018",
        director: "Hirokazu Kore-eda",
        actores: ["Lily Franky", "Sakura Andô", "Kirin Kiki"],
        image1: "posts/shoplifters.jpg",
        image2: "posts/shoplifters2.jpg",
        description:"Retrata la vida de una familia pobre japonesa que encuentra a una pequeña niña sola en medio del frío y decide llevarla a casa. A lo largo de la película iremos descubriendo la verdad detrás de los personajes."
    },
    {
        name:"La Noche de 12 Años",
        genres: ["drama", "biografica", "historica"], 
        country:"Uruguay",
        runtime: "2h 2min",
        year: "2018",
        director: "Álvaro Brechner",
        escritor: ["Mauricio Rosencoff", "Álvaro Brechner"],
        actores: ["Antonio de la Torre", "Chino Darín", "Alfonso Tort"],
        image1: "posts/12-anos.jpg",
        image2: "posts/12-anos2.jpg",
        description:"Uruguay, década del '70. Cuenta la historia de José 'Pepe' Mujica durante su detención clandestina en la dictadura militar. Si te gustó 'La Historia Oficial', esta película es para vos."
    },
    {
        name:"Possession",
        genres: ["psicologica", "drama", "terror"], 
        country:["Francia", "Alemania Occidental", "Polonia"],
        runtime: "2h 4min",
        year: 1981,
        director: "Andrzej Żuławski",
        actores: ["Isabelle Adjani", "Sam Neill"],
        image1: "posts/possession.jpg",
        image2: "posts/possession2.jpg",
        description:"Una pareja conflictuada y con un hijo pequeño vive momentos difíciles. Anna (Isabelle Adjani) parece tener un amante y ya no soporta la situación, mientras que su marido no se resigna a dejarla ir. Possession es una película bizarra, profundamente simbólica, existencial, filosófica, surreal, violenta, incómoda y frenética. En ella veremos constante conflicto entre personajes que se comportarán de maneras extrañas, mucho histrionismo (con una actuación sublime de Isabelle Adjani que le valió varios galardones como mejor actriz) y una trama atrapante para quien gusta de historias enigmáticas en donde no todo viene servido en bandeja. La cinta está situada en Berlín durante la guerra fría, una ciudad gris y desolada dividida por el muro. La obra expresa la experiencia misma del director, hundido en la depresión luego de su divorcio y en el exilio. Nos habla de la obsesión, del fin del amor, de la locura, la contradicción y la autodestrucción. Possesion es uno de esos films que hay que ver varias veces antes de sacar conclusiones."
    },
    {
        name:"moon",
        genres: ["psicologica", "sci-fi", "drama"], 
        country:["USA","UK"],
        runtime: "1h 37min",
        year: 2009,
        director: "Duncan Jones",
        actores: ["Sam Rockwell", "Kevin Spacey"],
        image1: "posts/moon.jpg",
        image2: "posts/moon2.jpg",
        description:"Sam es un astronauta que trabaja en una base lunar en compañía de GERTY, una computadora con inteligencia artificial. A dos semanas de finalizar su contrato y volver a casa, empieza a enfermarse y a tener visiones. Moon es una película que nos hará reflexionar sobre la relación entre el ser humano, la tecnología y las corporaciones, en donde lo que nos hace humanos queda en segundo plano. La actuación de Sam rockwell, hundido en la soledad y al borde de la locura, resulta brillante."
    },
    {
        name:"machuca",
        genres: ["drama", "historica"], 
        country:"Chile",
        runtime: "1h 56min",
        year: 2004,
        director: "Andrés Wood",
        actores: ["Matías Quer", "Ariel Mateluna", "Manuela Martelli"],
        image1: "posts/machuca.jpg",
        image2: "posts/machuca2.jpg",
        description:"Gonzalo viene de una familia pudiente y es alumno del colegio St. Patrick, donde el cura que maneja la institución decide becar a algunos niños provenientes de barrios pobres. Así es como aparece Pedro Machuca, quien empezará a formar un vínculo con Gonzalo a pesar de los diferentes contextos familiares y sociales que los rodean. Estamos en Santiago de Chile en el año 1973. El gobierno de Allende pende de un hilo entre protestas, el desabastecimiento generado por el bloqueo y el Plan Cóndor golpeando la puerta. La película hace una crítica social, haciendo foco en dos familias de distintas clases sociales, y en cómo se relacionan los integrantes más inocentes de ambas durante esta época tan complicada."
    },
    {
        name:"Oslo, 31. August",
        genres: ["drama"], 
        country:"Noruega",
        runtime: "1h 35min",
        year: 2011,
        director: "Joachim Trier",
        actores: ["Anders Danielsen Lie", "Hans Olav Brenner", "Ingrid Olava"],
        image1: "posts/oslo.jpg",
        image2: "posts/oslo2.jpg",
        description:"Un día en la vida de Anders, un joven drogadicto internado en una clínica de rehabilitación. Anders es autorizado a salir por un día de la clínica para ir a una entrevista de trabajo. Aprovechará esta oportunidad para ponerse al día con amigos de su pasado. Oslo, 31. August es una película gris que nos habla de la depresión y de la falta de perspectiva del futuro, así como de las expectativas que los demás tienen sobre nosotros y del peso que eso representa. Una cinta honesta que retrata a una generación en un mundo que no se detiene."
    },
    {
        name:"prisoners",
        genres: ["thriller", "suspenso", "drama"], 
        country:["Canada", "USA"],
        runtime: "2h 33min",
        year: 2013,
        director: "Denis Villeneuve",
        actores: ["Hugh Jackman", "Jake Gyllenhall", "Paul Dano"],
        image1: "posts/prisoners.jpg",
        image2: "posts/prisoners2.jpg",
        description:"La hija de Keller Dover (Hugh Jackman) desaparece junto con una amiga. Aunque el detective a cargo (Jake Gyllenhall) se esfuerza por avanzar en el caso, las cosas no evolucionan, y Dover comienza a impacientarse. En otra gran obra de su autoría, el director hace hincapié en la desesperación de un padre ante la obligación de proteger a su familia. El suspenso y la tensión van creciendo a medida que avanza el film, que cuenta con muy buenas actuaciones y una historia atrapante que plantea algunas preguntas al respecto de la moral y los límites de la justicia."
    },
    {
        name:"loveless",
        alternateName:["Nelyubov", "Нелюбовь", "Sin Amor"],
        genres: ["drama"], 
        country:"Rusia",
        runtime: "2h 7min",
        year: 2017,
        director: "Andrey Zvyagintsev",
        actores: ["Maryana Spivak", "Aleksey Rozin", "Matvey Novikov"],
        image1: "posts/loveless.jpg",
        image2: "posts/loveless2.jpg",
        description:"La madre y el padre de Alyosha están transitando su divorcio. Entre peleas y discusiones, ninguno le presta atención al niño, que súbitamente desaparece. Loveless es una película dura, despiadada y honesta, que nos muestra las facetas de los personajes sin hacer un juicio de valor. Nos habla del desamor, de las relaciones humanas, de las decisiones y sus consecuencias. Durante la búsqueda del niño, la cinta nos hace partícipes, juega con nuestra expectativa y nuestra desilusión."
    },
    {
        name:"Jagten",
        alternateName:["La Cacería", "The Hunt"],
        genres: ["drama"], 
        country:["Dinamarca", "Suecia"],
        runtime: "1h 55min",
        year: 2012,
        director: "Thomas Vinterberg",
        actores: ["Mads Mikkelsen", "Thomas Bo Larsen", "Annika Wedderkopp"],
        image1: "posts/jagten.jpg",
        image2: "posts/jagten2.jpg",
        description:"Lucas (Mads Mikkelsen), un maestro de jardín de infantes en un pequeño pueblo de Dinamarca, es acusado de abusar sexualmente de una niña. La película nos muestra cómo reacciona la sociedad frente a este tipo de situiaciones, particularmente en comunidades pequeñas, y qué consecuencias tiene sobre la vida del protagonista."
    },
    {
        name:"El Odio",
        alternateName:"La Haine",
        genres: ["drama", "policial"], 
        country:"Francia",
        runtime: "1h 38min",
        year: 1995,
        director: "Mathieu Kassovitz",
        actores: ["Vincent Cassel", "Hubert Koundé", "Saïd Taghmaoui"],
        image1: "posts/la-haine.jpg",
        image2: "posts/la-haine2.jpg",
        description:"Retrata un día en la vida de tres jovenes de un suburbio de París, luego de que uno de sus amigos cayera en coma a causa de la violencia policial. La película hace una crítica social de la situación de vulnerabilidad que sufren los jóvenes de los barrios pobres y de familias inmigrantes en Francia; nos habla del racismo, la violencia, el uso del poder y la falta de perspectiva del futuro en medio de la vorágine del mundo moderno."
    },
    {
        name:"El Planeta Salvaje",
        alternateName:"La Planète Sauvage",
        genres: ["animada", "fantasia", "sci-fi"], 
        country:["francia", "checoslovaquia"],
        runtime: "1h 12min",
        year: 1973,
        director: "René Laloux",
        actores: ["Jean Valmont", "Jennifer Drake", "Eric Baugin"],
        image1: "posts/planete-sauvage.jpg",
        image2: "posts/planete-sauvage2.jpg",
        description:"En el planeta Ygam, los Traag son la raza dominante. Los humanos, seres inferiores a estos tanto física como espiritualmente, son tratados como una peste, como salvajes alimañas o, en el mejor de los casos, como mascotas. Hasta que un niño huérfano y adoptado por un Traag logra tener acceso a una fuente inagotable de información. El film es una obra fantástica de ciencia ficción que hace varias analogías a la manera en que la raza humana actúa, con un estilo visual único, una musicalización destacable y con muchos elementos pertenecientes al esoterismo y a la mitología como base."
    },
    {
        name:"Ema",
        genres: ["drama", "musica"], 
        country:"Chile",
        runtime: "1h 47min",
        year: "2019",
        director: "Pablo Larraín",
        actores: ["Mariana Di Girloamo", "Gael García Bernal"],
        image1: "posts/ema.jpg",
        image2: "posts/ema2.jpg",
        description:"Ema (Mariana di Girolamo) y Gastón (Gael García Bernal) son una pareja que atraviesa una crisis luego de haber adoptado y devuelto a Polo, un niño problemático. Larraín nos sorprende con una propuesta visual interesante, donde el fuego es el centro de la escena. Ema es una película frenética y febril, con una trama un tanto descabellada y un trasfondo psicológico, que nos habla del amor y de la obsesión."
    },
    {
        name:"Me and Earl and the Dying Girl",
        alternateName:"Yo, él y Raquel",
        genres: ["comedia", "drama"], 
        country:"USA",
        runtime: "1h 45min",
        year: 2015,
        director: "Alfonso Gómez-Rejón",
        actores: ["Thomas Mann", "RJ Cyler", "Olivia Cooke"],
        image1: "posts/me-earl-dying.jpg",
        image2: "posts/me-earl-dying2.jpg",
        description:"Greg, un adolescente carismático es obligado por su madre a interactuar con Rachel, una chica de su escuela a la que le diagnosticaron cáncer. Entre Greg, Rachel y Earl (el mejor amigo de Greg) surgirá una amistad especial. La película es una comedia que va adquiriendo intensidad, permitiendonos experimentar una variedad de emociones."
    },
    {
        name:"Biutiful",
        genres: ["drama"], 
        country:["España", "México"],
        runtime: "2h 28min",
        year: 2010,
        director: "Alejandro González Iñárritu",
        actores: ["Javier Bardem", "Maricel Álvarez", "Hanaa Bouchaib."],
        image1: "posts/biutiful.jpg",
        image2: "posts/biutiful2.jpg",
        description:"Uxbal (Javier Bardem) vive una vida compleja y ajetreada en Barcelona. Entre su familia, su trabajo y su salud se debate su existencia, intentando ayudar a quienes más lo necesitan mientras busca desesperadamente la paz. Biutiful es una pelicula que sólo se puede ver si se tiene el corazón fuerte y bien plantado. Esta maravilla de Iñárritu, que merodea lo trascendental, es una experiencia que pondrá a prueba al espectador, a su empatía y a su humanidad. Una historia de vida como cualquier otra y, al mismo tiempo, como ninguna."
    },
    {
        name:"The Wailing",
        alternateName:"Gok-seong",
        genres: ["terror", "psicologica", "thriller"], 
        country:"Corea del Sur",
        runtime: "2h 36min",
        year: 2016,
        director: "Hong-jin Na",
        actores: ["Jun Kunimura", "Jung-min Hwang", "Do-won Kwak"],
        image1: "posts/the-wailing.jpg",
        image2: "posts/the-wailing2.jpg",
        description:"Sangrientos asesinatos, una extraña enfermedad, rumores acerca de un solitario japonés que vive en las montañas. En el pueblo de Goksung el policía Jong-Goo se verá implicado en una trama que pondrá a prueba no sólo sus capacidades como detective, sino también sus creencias. The Wailing es thriller, es psicología, es suspenso, es ocultismo. Una muestra más del enorme crecimiento que ha logrado el cine coreano, especialmente en géneros como éste."
    },
    {
        name:"You Were Never Really Here",
        alternateName:["Nunca estarás a salvo", "En realidad nunca estuviste aquí"],
        genres: ["policial", "drama", "suspenso"], 
        country:["USA", "Escocia"],
        runtime: "1h 29min",
        year: 2017,
        director: "Lynne Ramsay",
        actores: ["Joaquin Phoenix", "Judith Roberts", "Ekaterina Samsonov"],
        image1: "posts/never-really-here.jpg",
        image2: "posts/never-really-here2.jpg",
        description:"De la directora de 'We need to talk abour Kevin' (Lynne Ramsay), en este film veremos a Joaquin Phoenix haciendo lo que mejor sabe hacer: un hombre deprimido que conoce la oscuridad del mundo. Por lo que el film nos deja entrever, nuestro protagonista se dedica a realizar misiones clandestinas. Quizás una de las mejores cosas que tiene este film es la atención a los pequeños detalles y cómo la información nos es entregada a cuenta gotas, siempre con la marca personal de la directora, por lo que es mejor no decir demasiado acerca de la trama. 'You were never really here' es una cinta con una bella fotografía donde no hacen falta palabras para decir lo que se debe decir. Alcanza con saber que es un drama para armar, un puzzle psicológico, un thriller bastante violento, una historia donde la vida distante y cansina del personaje de Phoenix se entrevera con el pasado que arrastra junto con su cuerpo y el presente de una niña en dificultades."
    },
    {
        name:"Submarine",
        genres: ["comedia", "drama", "romantica"], 
        country:"UK",
        runtime: "1h 37min",
        year: 2010,
        director: "Richard Ayoade",
        actores: ["Craig Roberts", "Sally Hawkins", "Paddy Considine"],
        image1: "posts/submarine.jpg",
        image2: "posts/submarine2.jpg",
        description:"Cuenta la historia de Oliver, un chico de 15 años que quiere perder su virginidad a la vez que intenta reparar el matrimonio de sus padres."
    },
    {
        name:"We Need to Talk About Kevin",
        alternateName:"Tenemos que hablar de Kevin",
        genres: ["drama", "suspenso", "psicologica"], 
        country:["UK","USA","Escocia"],
        runtime: "1h 52min",
        year: 2011,
        director: "Lynne Ramsay",
        actores: ["Tilda Swinton", "John C. Reilly", "Ezra Miller"],
        image1: "posts/kevin.jpg",
        image2: "posts/kevin2.jpg",
        description:"Cuenta la historia de Eva (Tilda Swinton) y su familia, haciendo foco en su relación son su hijo Kevin (Ezra Miller), que desde muy pequeño muestra comportamientos extraños que parecen agravarse con el paso de los años más allá de lo imaginable."
    },
    {
        name:"Capharnaüm",
        genres: ["drama"], 
        country:"Libano",
        runtime: "2h 6min",
        year: 2018,
        director: "Nadine Labaki",
        actores: ["Zain Al Rafeea", "Yordanos Shiferaw", "Boluwatife Treasure Bankole"],
        image1: "posts/capharnaum.jpg",
        image2: "posts/capharnaum2.jpg",
        description:"Zain es un niño libanés de 12 años que ha crecido en la pobreza. Luego de abandonar su casa, sobrevive por su cuenta hasta que comete un crimen por el que lo encarcelan, pero al mismo tiempo les hace juicio a sus padres por la negligencia y el desamparo en que lo criaron. Capharnaüm camina por la delgada línea entre la necesidad y lo incorrecto. En medio queda la moral, determinando hasta dónde se es capaz de llegar cuando se trata de sobrevivir y escapar a la pobreza."
    },
    {
        name:"Kynodontas",
        alternateName:["Dogtooth", "Canino", "Colmillo"],
        genres: ["drama", "psicologica", "suspenso"], 
        country:"grecias",
        runtime: "1h 39min",
        year: 2009,
        director: "Yorgos Lanthimos",
        actores: ["Christos Stergioglou", "Michele Valley", "Angeliki Papoulia"],
        image1: "posts/kynodontas.jpg",
        image2: "posts/kynodontas2.jpg",
        description:"En las afueras de la ciudad, tres hijos crecen bajo la estricta tutela de sus padres, que en su afán de protegerlos los mantienen al margen de cualquier influencia del exterior. ¿Cómo es conveniente educar? ¿Qué tanto control se debe ejercer sobre la educación? Concepto, realidad y significado son algunas de las cuestiones que Lanthimos nos plantea en este filosófico film."
    },
    {
        name:"El Laberinto del Fauno",
        genres: ["drama", "fantasia", "suspenso"], 
        country:"España",
        runtime: "1h 58min",
        year: 2006,
        director: "Guillermo del Toro",
        actores: ["Ivana Baquero", "Ariadna Gil", "Sergi López"],
        image1: "posts/fauno.jpg",
        image2: "posts/fauno2.jpg",
        description:"Durante la Guerra Civil española, Ofelia llega para vivir bajo la tutela del capitán Vidal, quien es su padrastro y un riguroso oficial de la armada. Solitaria y con su madre enferma, la niña se interna poco a poco en un mundo extraño y fantástico donde eventualmente conoce al Fauno. El Laberinto del Fauno es un historia agridulce, donde mitología y aventura funcionan como purga de algo tan real y crudo como las armas, las bombas y las navajas que se ciernen en las guerras al otro lado de la puerta. Una película que fusiona la fantasía en la mente de una niña con la cruel realidad de la época."
    },
    {
        name:"Adaptation.",
        alternateName:"El Ladrón de Orquídeas",
        genres: ["drama", "comedia"], 
        country:"USA",
        runtime: "1h 55min",
        year: 2002,
        director: "Spike Jonze",
        escritor: ["Susan Orlean (libro)", "Charlie Kaufman", "Donald Kaufman (guión)"],
        actores: ["Nicholas Cage", "Meryl Streep", "Chris Cooper", "Tilda Swinton"],
        image1: "posts/adaptation.jpg",
        image2: "posts/adaptation2.jpg",
        description:"Charlie Kaufman (Nicholas Cage) es un escritor intentando adaptar el libro 'El Ladrón de Orquídeas' en el guón para una película. Pero, tan intelectual como inseguro, atraviesa una etapa de crisis creativa. Su hermano gemelo Donald (tambien interpretado por Cage) es la antítesis de su forma de ser: carismático y sonriente, exitoso en los asuntos cotidianos, despreocupado de su propia mediocridad. Adaptation es una cinta bastante autobiógrafica (como la mayor parte de la obra del verdadero Charlie Kaufman, quien efectivamente escribió el guión de esta película) e inmensamente original, yuxtaponiendo realidad y ficción. El filme nos sumerge en el proceso creativo del protagonista, siempre con un trasfondo existencial y reflexivo sobre la vida y el sentido de las cosas, donde la trama se va desarrollando en capas superpuestas. 🌈Dato de color: Donald Kaufman (el hermano de Charlie en la película) fue incluido como co-autor del guión de la misma, e incluso nominado a un Óscar por ello. El asunto aquí es que Donald no existe en la vida real..."
    },
    {
        name:"El Ángel",
        genres: ["thriller", "biografica", "policial", "drama"], 
        country:["Argentina", "España"],
        runtime: "1h 58min",
        year: 2018,
        director: "Luis Ortega",
        actores: ["Lorenzo Ferro", "Cecilia Roth", "Luis Gnecco", "Chino Darín", "Mercedes Morán", "Daniel Fanego"],
        image1: "posts/el-angel.jpg",
        image2: "posts/el-angel2.jpg",
        description:"Carlos (Lorenzo Ferro), un adolescente de rostro angelical, esconde una faceta muy oscura. Esta comenzará a hacerse visible luego de conocer a Ramón (Chino Darín), su compañero del secundario, y a su familia. Inspirada en la vida de Carlos Robledo Puch. La película, con un color particular y bizarra por momentos, nos cautivará desde el principio con su carismático protagonista."
    },
    {
        name:"Innocence",
        genres: ["drama", "psicologica"], 
        country:["Francia", "Bélgica"],
        runtime: "2h 2min",
        year: 2004,
        director: "Lucile Hadžihalilović",
        actores: ["Zoé Auclair", "Lea Bridarolli", "Bérangère Haubruge"],
        image1: "posts/innocence.jpg",
        image2: "posts/innocence2.jpg",
        description:"Iris, una niña de 6 años, llega a un internado no mixto con un extraño sistema educativo. Innocence es una película metafórica, escencialmente surreal, como un sueño, que nos evoca diferentes emociones, por momento opresiva, sonde el peligro acecha pero no logramos verlo con calridad. La cinta nos hará reflexionar sobre la educación de las niñas y el paso de la infancia a la adolescencia."
    },
    {
        name:"En la Boca del Miedo",
        alternateName:"In the Mouth of Madness",
        genres: ["terror", "psicologica", "thriller"], 
        country:"USA",
        runtime: "1h 35min",
        year: 1994,
        director: "John Carpenter",
        actores: ["Sam Neill", "Jürgen Prochnow", "Julie Carmen"],
        image1: "posts/in-the-mouth.jpg",
        image2: "posts/in-the-mouth2.jpg",
        description:"John Trent (Sam Neill) es especialista en desenmascarar estafas. Por ello lo contratan para averiguar acerca de la desaparición de Sutter Cane, un escritor de novelas de terror que se está convirtiendo en un gran suceso y causando un gran impacto en sus lectores. 'En La Boca del Miedo' es un film donde Carpenter usa toda su imaginación para diseñar una trama atrapante y llena de suspenso. Con marcadas influencias (y referencias) de los cuentos de H. P. Lovecraft, este thriller psicológico se materializa en elementos del horror al que tanto el director como el creador de Cthhulhu nos han acostumbrado. Más allá de su contenido 'gráfico', la película también hace foco en los conceptos de realidad y religión, abordando ambas temáticas de una manera reflexiva, filosófica y satírica, siempre al estilo de Carpenter."
    },
    {
        name:"Castaway on the Moon",
        alternateName:["Kimssi pyoryugi", "Náufrago en la luna"],
        genres: ["comedia", "drama", "romantica"], 
        country:"Corea del Sur",
        runtime: "1h 56min",
        year: 2009,
        director: "Hae-jun Lee",
        actores: ["Jae-yeong Jeong", "Ryeowon Jung", "Yeong-seo Park"],
        image1: "posts/castaway.jpg",
        image2: "posts/castaway2.jpg",
        description:"Cansado de la vida, Seong-Geun Kim decide suicidarse saltando de un puente, pero incluso esto le sale mal y acaba en una isla abandonada a escasos kilómetros de la ciudad. Kim Jung-yeon, una jóven con fobia social que nunca sale de su cuarto, lo descubre desde su ventana gracias a la cámara de fotos que usa para fotografiar la luna. Una película cómica, a la vez sensible y emotiva, que nos hace reflexionar sobre la vorágine de la vida moderna."
    },
    {
        name:"El Movimiento",
        genres: ["drama"], 
        country:"Argentina",
        runtime: "1h 10min",
        year: 2015,
        director: "Benjamín Naishtat",
        actores: ["Pablo Cedrón"],
        image1: "posts/el-movimiento.jpg",
        image2: "posts/el-movimiento2.jpg",
        description:"Argentina, primera mitad del siglo XIX. Diversos grupos pertenecientes al 'Movimiento', una supuesta organización que pretende salvar a la patria de la anarquía, recorren las pampas exigiendo víveres y dinero de los pobladores. Naishtat nos presenta una cinta en blanco y negro que se desarrolla en pequeños fragmentos donde la musicalización es una parte imprescindible en la experiencia que se nos plantea. En un territorio desolado, perdido en la inmensidad de la llanura, azotado por la peste y la desgracia, podemos percibir el caos y la confusión. Los diversos personajes que participan en la trama se entremezclan en forma aparentemente errática, conformando un retrato de la locura, la ambición de poder y la desesperación. Una obra que no se compone de una trama lineal, sino que es una composición de momentos, sonidos, experiencias y detalles, donde hay que mirar más de cerca para ver lo que el autor nos quiere mostrar. Con una destacable actuación de Pablo Cedrón que interpreta a un hombre culto, soberbio, perdido en su ambición, que se proclama  a sí mismo como el depurador del repetidamente mencionado 'Movimiento'."
    },
    {
        name:"The Gift",
        alternateName:"El Regalo",
        genres: ["suspenso", "psicologica", "drama"], 
        country:["Australia", "USA"],
        runtime: "1h 48min",
        year: 2015,
        director: "Joel Edgerton",
        actores: ["Jason Bateman", "Rebecca Hall", "Joel Edgerton"],
        image1: "posts/the-gift.jpg",
        image2: "posts/the-gift2.jpg",
        description:"Simon y Robyn (Jason Bateman, Rebecca Hall) se mudan a Chicago, donde se encuentran casualmente con Gordo (Joel Edgerton), una persona bastante particular perteneciente al pasado de Simon. Luego de que el extraño decida enviarles un regalo, las cosas ya no volverán a ser iguales."
    },
    {
        name:"Los Olvidados",
        genres: ["drama"], 
        country:"México",
        runtime: "1h 25min",
        year: 1950,
        director: "Luis Buñuel",
        actores: ["Alfonso Mejía, Roberto Cobo, Estela Inda"],
        image1: "posts/los-olvidados.jpg",
        image2: "posts/los-olvidados2.jpg",
        description:"Un grupo de niños recibe a Jaibo, luego de que éste escapa de la correccional de menores. Una vida de fechorías hará que él y Pedro se acerquen cada vez más. Año 1950, Ciudad de México. El célebre Luis Buñuel, en uno de sus primeros films, nos deja ver la vida de aquellos que, ya en ese entonces, se encuentran al margen del sistema. Esta es una historia acerca del paso de la niñez a la adolescencia en un entorno de pobreza y necesidad, y cómo éste moldea a los integrantes de la sociedad. La cinta es una obra cruda y realista, que no ostenta tanto el surrealismo que caracteriza al director y nos sumerge en la realidad de la calle. En ella encontraremos la vida simple, el hambre, la miseria, el despertar sexual, la violencia y la delincuencia, en oposición al énfasis que Buñuel pondrá en la clase burguesa en películas posteriores."
    },
    {
        name:"A Tale of Two Sisters",
        alternateName:["Dos Hermanas", "Janghwa, Hongryeon"],
        genres: ["terror", "psicologica", "drama", ""], 
        country:"Corea del Sur",
        runtime: "1h 54min",
        year: 2003,
        director: "Jee-woon Kim",
        actores: ["Kap-su Kim", "Jung-ah Yum", "Soo-jung Lim"],
        image1: "posts/two-sisters.jpg",
        image2: "posts/two-sisters2.jpg",
        description:"Su-mi es dada de alta de una institución psiquiátrica y se va con su hermana, su padre y su madrastra a vivir a una casa en el campo. Cosas extrañas le suceden a nuestra protagonista y su hermana, donde se confunden los limítes entre la realidad y la imaginación. Una cinta por momentos aterradora y confusa en donde lo real, la imaginación y los traumas se entrelazan y dan forma a un misterioso rompecabezas, dando importancia a cada pequeño detalle. Un film que explora la culpa, el dolor y el remordimiento, así como el paso de la infancia a la adolescencia."
    },
    {
        name:"La Cinta Blanca",
        alternateName:"Das Weiße Band - Eine deutsche Kindergeschichte",
        genres: ["suspenso", "drama", "historica"], 
        country:["Alemania", "Austria"],
        runtime: "2h 24min",
        year: 2009,
        director: "Michael Haneke",
        actores: ["Christian Friedel", "Ernst Jacobi", "Leonie Benesch"],
        image1: "posts/das-weisse-band.jpg",
        image2: "posts/das-weisse-band2.jpg",
        description:"En un pequeño pueblo alemán a principios de siglo una serie de crueles castigos recaen sobre la población. ¿Quién es responsable?"
    },
    {
        name:"La Historia Oficial",
        genres: ["drama", "historica"], 
        country:"Argentina",
        runtime: "1h 52min",
        year: 1985,
        director: "Luis Puenzo",
        actores: ["Norma Aleandro", "Héctor Alterio", "Chunchuna Villafañe", "Hugo Arana", "Patricio Contreras"],
        image1: "posts/historia-oficial.jpg",
        image2: "posts/historia-oficial2.jpg",
        description:"Cuenta la historia de una profesora durante el fin de la última dictadura militar argentina (1976-1983), cuando comienza a tener dudas sobre el pasado de su hija. "
    },
    {
        name:"The Rocky Horror Picture Show",
        genres: ["comedia", "musical", "sci-fi", "terror"], 
        country:["USA", "UK"],
        runtime: "1h 40min",
        year: 1975,
        director: "Jim Sharman",
        actores: ["Tim Curry", "Susan Sarandon", "Barry Bostwick", "Peter Hinwood"],
        image1: "posts/rocky-horror.jpg",
        image2: "posts/rocky-horror2.jpg",
        description:"Janet y Brad (Susan Sarandon y Barry Bostwick) son una joven pareja que, a causa de una avería en su auto, se ven obligados a buscar refugio en la mansión del Doctor Frank-N-Furter (Tim Curry), un científico travestido que está llevando a cabo una extraña convención con extravagantes personajes. Una película que homenajea a las películas de horror y ciencia ficción clase B, que llegó a convertirse en una película de culto, con personajes y canciones inolvidables."
    },
    {
        name:"The VVitch",
        alternateName:"La Bruja",
        genres: ["terror", "suspenso", "psicologica"], 
        country:["Canada", "USA"],
        runtime: "1h 32min",
        year: 2016,
        director: "Robert Eggers",
        actores: ["Anya Taylor-Joy", "Ralph Ineson", "Kate Dickie", "Harvey Scrimshaw"],
        image1: "posts/the-vvitch.jpg",
        image2: "posts/the-vvitch2.jpg",
        description:"Durante el siglo XVII en Nueva Inglaterra, una familia puritana es desterrada de su pueblo y se ve forzada a vivir aislada en las cercanías de un bosque. Fuerzas oscuras acecharán a la familia e intentarán corromperla. La película crea un manto de misterio, donde no sabemos que está pasando realmente y que es fruto de la imaginación. Asimismo, la cinta expone elementos del folclore así como de la religión, ya que está inspirada en histórias populares y registros escritos sobre brujería. La historia se centra en Thomasin, la hija mayor de la familia que comienza a convertirse en mujer y cuya floreciente femineidad supone una amenaza para la moral religiosa de la familia."
    },
    {
        name:"Mommy",
        genres: ["drama"], 
        country:"Canada",
        runtime: "2h 19min",
        year: 2014,
        director: "Xavier Dolan",
        actores: ["Anne Dorval", "Antoine Olivier Pilon", "Suzanne Clément"],
        image1: "posts/mommy.jpg",
        image2: "posts/mommy2.jpg",
        description:"Cuenta la historia de Diane, una madre viuda, cuyo hijo adolescente tiene problemas psiquiátricos que lo llevan a tener conductas agresivas. Sus vidas cambiarán cuando conozcan a su nueva vecina. La película nos sumerge en la vida de estos tres personajes, y en la particular forma en que se relacionan entre sí."
    },
    {
        name:"Aquarius",
        alternateName:"",
        genres: ["drama"], 
        country:["Brasil", "Francia"],
        runtime: "2h 14min",
        year: 2016,
        director: "Kleber Mendonça Filho",
        actores: ["Sônia Braga", "Maeve Jinkings", "Irandhir Santos"],
        image1: "posts/aquarius.jpg",
        image2: "posts/aquarius2.jpg",
        description:"Clara es una mujer jubilada y viuda que vive en su apartamento en Recife. Una compañía decide comprar el edificio donde se encuentra su hogar e comienza a hostigarla para forzarla a venderlo. Durante el desarrollo de la película iremos descubriendo los conflictos internos de la protagonista, el comienzo de la vejez, los vinculos con su familia y los recuerdos del pasado, estrechamente ligados a la casa que se rehúsa a vender. Por otro lado, la cinta indaga también el los conflictos sociales relacionados con las diferencias de clase."
    },
    {
        name:"The Master",
        genres: ["drama"], 
        country:"USA",
        runtime: "2h 18min",
        year: 2012,
        director: "Paul Thomas Anderson",
        actores: ["Joaquin Phoenix", "Phillip Seymour Hoffman", "Amy Adams"],
        image1: "posts/the-master.jpg",
        image2: "posts/the-master2.jpg",
        description:"Freddie (Joaquin Phoenix) ha vuelto de la guerra y anda por la vida sin rumbo. En una noche de borrachera acaba infiltrándose en un bote donde conoce a su carísmatico capitán (Phillip Seymour Hoffman), quien ve con buenos ojos incorporarlo a su proyecto. The Master indaga en las emociones de una persona con trastorno de estrés postraumático, en alguien que no logra adaptarse a una vida convencional y que se mueve puramente por instinto. A esto se le opone la presencia de Hoffman, un líder carimático y análitico que trabaja con las emociones y que predica sus creencias."
    },
    {
        name:"La Teta Asustada",
        genres: ["drama"], 
        country:["Perú", "España"],
        runtime: "1h 35min",
        year: 2009,
        director: "Claudia Llosa.",
        actores: ["Magaly Solier", "Susi Sánchez", "Efraín Solís"],
        image1: "posts/teta.jpg",
        image2: "posts/teta2.jpg",
        description:"Cuenta la historia de Fausta, una joven indígena peruana que sufre de 'la teta asustada', una enfermedad que, según las creencias locales, consiste en la transmición del miedo a través de la leche materna. Ella posee este mal como consecuencia de que su madre haya sido violada cuando estaba embarazada, durante los conflictos armados que vivió Perú en las últimas dos décadas del siglo XX. La cinta nos muestra la cruda realidad de los sectores marginales de Perú y las cicatrices que deja la violencia. Expresa lo que significa nacer mujer, indígena y pobre, y cómo la opresión se ejerce sobre la protagonista tanto por su condición económica y social como por su condición de mujer."
    },
/*    TEMPLATE {
        name:"",
        alternateName:"",
        genres: ["", "", "", ""], 
        country:"",
        runtime: "",
        year: "",
        director: "",
        actores: ["", "", ""],
        image1: "posts/.jpg",
        image2: "posts/.jpg",
        description:""
    }, */
];
var filteredList = films;
var filmsContainer = document.querySelector("#all-films");

function handleFilterEvent(filtro){
    if (filtro == "all") {
        filteredList = films;
    } else {
        let preLista = films.filter(genre=>genre.genres.includes(filtro));
        filteredList = preLista;
    }
    filmsContainer.innerHTML = "";
    loadedFilms = 0;
    filmsDisplayed = 0;
    appendFilm();
}
function openNav(x) {
    if (x.classList.contains("change")){
        closeNav(x);
    } else {
    document.getElementById("navbar-container").style.width = "45%";
    document.getElementById("collapse-button").style.marginLeft = "45%";
    document.getElementById("collapse-button").style.backgroundColor = "rgb(46,156,69)";
};  x.classList.toggle("change");
    document.getElementById("navbar-list").classList.toggle("active-navbar");
    document.getElementById("page-container").classList.toggle("grayed-out");
    document.getElementById("footer").classList.toggle("grayed-out");
    document.body.classList.toggle("block-touch");
};
function closeNav(x) {
    document.getElementById("collapse-button").style.marginLeft = "0%";
    document.getElementById("navbar-container").style.width = "0%";
    document.getElementById("collapse-button").style.backgroundColor = "#222222";
}

function appendFilm() {
    for (let i=0; i<10; i++){
        if (filteredList.length > loadedFilms ){
    var filmTemplate = `<div id="film-display-${loadedFilms}" class="card mb-3 film">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img id="film-image1-${loadedFilms}" src="" class="card-img image1" alt=""></img>
        <img id="film-image2-${loadedFilms}" src="" class="card-img image2" alt=""></img>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <div class="title-info">
            <h7><span id="film-country-${loadedFilms}" class="film-country"></span>  • <span id="film-year-${loadedFilms}" class="film-year"></span> • <span id="film-runtime-${loadedFilms}" class="film-runtime"></span></h7>
            <h5 class="card-title film-name" id="film-name-${loadedFilms}"></h5>
            <h7 ><span id="film-alternate-name-${loadedFilms}"  class="film-alternate-name"></span></h7>
            <div id="film-genres-${loadedFilms}" class="genres">
              
          </div>
  
          <div class="staff-info">
            <h7>
              Dirección: <span id="film-director-${loadedFilms}" class="film-director"></span>
              <br>
              Reparto: <span id="film-actores-${loadedFilms}" class="film-actores"></span> 
              <br>  
              <span id="film-escritor-${loadedFilms}" class="film-escritor"></span> 
            </h7>
          </div>
          <p id="film-description-${loadedFilms}" class="card-text film-description"></p>
          <span id="film-rating-${loadedFilms}"></span>
        </div>
      </div>
    </div>
  </div>
</div>`;
    filmsList.push(filmTemplate);
    loadedFilms++;}
    else {continue}
    }
    filmsList.forEach((x)=>{
        let filmShown = document.createElement("div");
        filmShown.innerHTML = x;
        filmsContainer.appendChild(filmShown);
        fetchFilmData(`${filmsDisplayed}`);
        filmsDisplayed++;
        }
    );
    filmsList = [];
}
function fetchFilmData (x) {
    document.querySelector(`#film-name-${x}`).innerHTML = filteredList[x].name.charAt(0).toUpperCase() + filteredList[x].name.slice(1);
    (filteredList[x].alternateName) ? document.getElementById(`film-alternate-name-${x}`).innerHTML = (Array.isArray(filteredList[x].alternateName)) ? '("' + filteredList[x].alternateName.join('" - "') + '")' : '("' + filteredList[x].alternateName + '")' : null;
    document.getElementById(`film-country-${x}`).innerHTML = (Array.isArray(filteredList[x].country)) ? filteredList[x].country.join("/") : filteredList[x].country;
    document.getElementById(`film-runtime-${x}`).innerHTML = filteredList[x].runtime;
    document.getElementById(`film-genres-${x}`).innerHTML = (Array.isArray(filteredList[x].genres)) ? filteredList[x].genres.map(x=>'<div class="badge badge-pill badge-'+ x +'">' + x.toUpperCase() + '</div>').join('')
    :'<div class="badge badge-pill badge-'+ filteredList[x].genres +'">' + filteredList[x].genres.toUpperCase() + '</div>';
    document.getElementById(`film-image1-${x}`).src = filteredList[x].image1;
    document.getElementById(`film-image2-${x}`).src = filteredList[x].image2;
    document.getElementById(`film-description-${x}`).innerHTML = filteredList[x].description;
    document.getElementById(`film-director-${x}`).innerHTML = (Array.isArray(filteredList[x].director)) ? filteredList[x].director.join(", ") + "." : filteredList[x].director + ".";
    document.getElementById(`film-actores-${x}`).innerHTML = (Array.isArray(filteredList[x].actores)) ? filteredList[x].actores.join(", ") + "." : filteredList[x].actores + ".";
    document.getElementById(`film-year-${x}`).innerHTML = filteredList[x].year;
    (filteredList[x].escritor) ? document.getElementById(`film-escritor-${x}`).innerHTML = (Array.isArray(filteredList[x].escritor)) ? "Guión: " + filteredList[x].escritor.join(", ") + "." : "Guión: " + filteredList[x].escritor + "." : null;
    document.getElementById(`film-rating-${x}`).innerHTML = filteredList[x].rating;
}

appendFilm();

$(window).scroll(function() {
    if(($(window).scrollTop() + $(window).height() > $(document).height() - 100) && loadedFilms < filteredList.length) {
        appendFilm();
    }
});


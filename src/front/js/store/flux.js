const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      peliculasTrailer: [],
      peliculasBusqueda: [],
      generoSeleccionado: "Género",
      peliculas: [],
      peliculasPrueba: [],
      peliculasPopulares: [],
      peliculasporVotos: [],
      carrousel: [],
      posters: [],
      generos: [],
      proximamente: [],
      enCines: [],
      ruleta: [],
      peliculasporGenero: [],
      message: null,
      messageLogin: "",
      commentsForOneMovie: null,
    },

    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      popularidad: () => {
        console.log("ORDENANDO POR POPULARIDAD");
        let store = getStore();

        store.peliculas.sort(function (a, b) {
          if (a.popularity > b.popularity) {
            return 1;
          }
          if (a.popularity < b.popularity) {
            return -1;
          }
          return 0;
        });
        setStore({ peliculasPopulares: store.peliculas });
        console.log(getStore());
      },
      generartrailer: async () => {
        console.log(" GENERANDO TRAilers ");
        const store = getStore();
        const actions = getActions();
        // store.carrousel = [];
        for (var i = 0; i < store.peliculas.length; i++) {
          await fetch(
            "https://api.themoviedb.org/3/movie/" +
              +store.peliculas[i].id +
              "/videos?api_key=87330f0fa794fb3eb980c887157031c9&language=en-US"
          )
            .then((response) => response.json())
            .then((data) => {
              // console.log("trailer para " + store.peliculas[i].title);
              // store.peliculas[0].trailer = "none";
              for (var x = 0; x < data.results.length; x++) {
                if (
                  data.results[x].official == true &&
                  (data.results.type = "Trailer") &&
                  (data.results.type = "Youtube")
                ) {
                  store.peliculas[i].trailer =
                    "https://www.youtube.com/embed/" + data.results[x].key;
                  store.peliculasTrailer.push(store.peliculas[i]);
                  //HACEMOS BREAK PARA QUE ÚNICAMENTE MUESTRE UN TRAILER OFICIAL
                  //YA QUE HAY PELICULAS QUE TIENEN VARIOS TRAILERS
                  break;
                } else {
                  store.peliculas[i].trailer =
                    "https://www.youtube.com/embed/111111";
                }
              }
              // setStore({ carrousel: store.peliculas[i] });

              // store.carrousel.push(store.peliculas[i]);
            })
            // .then(actions.cargarCarrousel())
            .catch((error) => console.log("Algo salió mal", error));
        }
        // actions.cargarCarrousel();
        console.log(getStore());
      },
      buscarPelicula: (busqueda) => {
        console.log("ejecutando buscarpelicula");

        var cadena = busqueda;
        var minusculas = cadena.toLowerCase();
        const store = getStore();
        store.buscarPelicula = [];
        var array = [];
        for (var i = 0; i < store.peliculas.length - 1; i++) {
          // console.log("en minusculas busqueda", minusculas);
          var titulo = store.peliculas[i].title.toLowerCase();
          // console.log("titulos en minusculas", titulo);

          if (titulo.includes(minusculas)) {
            console.log(
              "found " + minusculas + " en la pelicula",
              store.peliculas[i].title
            );
            array.push(store.peliculas[i]);
          }
          store.peliculasBusqueda = array;
        }
        console.log("set Store busqueda", getStore());
      },
      getMessage: () => {
        // fetching data from the backend
        fetch(process.env.BACKEND_URL + "/api/hello")
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.log("Error loading message from backend", error)
          );
      },
      peliculaDetalle: () => {
        var store = getStore();
        //for (var i = 0; i < store.peliculas.length - 1; i++) {
        //  if (store.peliculas.id == id) {
        //    console("Peli encontraDA ", store.peliculas[id].title);
        //  }
        //}
      },

      generosDePeliculas: async () => {
        console.log("buscando los generos de las pelis en la API");

        await fetch(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=87330f0fa794fb3eb980c887157031c9"
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("generos:", data.genres);
            setStore({ generos: data.genres });
          })
          .catch((error) => console.log("Algo salió mal", error));
      },
      peliculasGenerales: async () => {
        console.log("generando el array de todas las pelis");
        var peliculasTotales = [];
        var actions = getActions();
        for (var pagina = 1; pagina < 21; pagina++) {
          await fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=87330f0fa794fb3eb980c887157031c9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3" +
              pagina +
              "&with_watch_monetization_types=flatrate"
          )
            .then((response) => response.json())
            .then((data) => {
              //console.log(data.results);
              peliculasTotales = [...peliculasTotales, ...data.results];
              setStore({ peliculas: peliculasTotales });
            })
            // .then(state.actions.cargarCarrousel())
            .catch((error) => console.log("Algo salió mal", error));
        }
        let store = getStore();
        actions.generartrailer();
        actions.topRated();
        actions.cargarCarrousel();
        actions.proximamente();
        actions.popularidad();

        console.log("PELICULAS TOTALES", store.peliculas);
        // actcargarCarrousel();
      },
      filtroDeGenero(genero) {
        const store = getStore();

        for (var i = 0; i < store.generos.length - 1; i++) {
          if (genero == store.generos[i].id) {
            store.generoSeleccionado = store.generos[i].name;
            console.log(store.generos[i].name);
            //console.log("GENERO SELECCIONADO : ", store.generoSeleccionado);
          }
        }
        //var indicePeliculas = [];
        //COMENTAR
        store.peliculasporGenero = [];
        for (var i = 0; i < store.peliculas.length - 1; i++) {
          for (var x = 0; x < store.peliculas[i].genre_ids.length - 1; x++) {
            if (store.peliculas[i].genre_ids[x] == genero) {
              //SI ES DEL GENERO ACCION (12) MOSTRAMOS EL TITULO
              console.log(
                "DESDE FLUX => ENCONTRADA PELICULO CON GENERO ",
                genero,
                "  ",
                store.peliculas[i].original_title
              );
              //indicePeliculas.push(i);
              store.peliculasporGenero.push(store.peliculas[i]);
            } //FIN IF
          }
        }
      },
      enCines: async () => {
        console.log("en cines.... buscando");

        await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=87330f0fa794fb3eb980c887157031c9&page=1"
        )
          .then((response) => response.json())
          .then((data) => {
            //console.log(data.results);
            setStore({ enCines: data.results });
          })
          .catch((error) => console.log("Algo salió mal", error));
        const store = getStore();
        console.log("en cines...", store.enCines);
        let actions = getActions();
        actions.OrdenarPorFecha();
      },
      OrdenarPorFecha: () => {
        let store = getStore();
        store.enCines.sort(function (a, b) {
          if (a.release_date < b.release_date) {
            return 1;
          }
          if (a.release_date > b.release_date) {
            return -1;
          }
          return 0;
        });
      },
      topRated: () => {
        let store = getStore();
        store.peliculas.sort(function (a, b) {
          if (a.vote_average < b.vote_average) {
            return 1;
          }
          if (a.vote_average > b.vote_average) {
            return -1;
          }
          return 0;
        });
        // const actions = getActions();

        // console.log("peliculas ordenadas por votos", store.peliculas);
      },
      paginarPeliculas: (pagina, elementosPorPagina, arrayaPaginar) => {
        //Le pasamos como argumentos
        // pagina -> la pagina a la que pasamos
        //elementosPorPagina -> cuantos elementos se van a mostrar en cada pagina
        // array - > array completo con todos los elementos que se mostraran,  esta función
        //decidirá cuales se muestran , es decir pasamos el array total por ejemplio 400 elementos
        // y la función , en base a la pagina y de los elementos a mostrar calcula que elementos del array mostrar
        pagina = pagina - 1;
        var inicio = pagina * elementosPorPagina;
        var fin = inicio + (elementosPorPagina - 1);
        var arrayAMostrar = [];
        if (fin > arrayaPaginar.length - 1) {
          // comprobamos si es el ultimo elemento
          fin = arrayaPaginar.length - 1;
        }
        console.log(
          "inicio = ",
          inicio,
          "Fin : ",
          fin,
          "longitud array ",
          arrayaPaginar.length
        );
        console.log("array 399", arrayaPaginar[399]);
        for (var i = inicio; i <= fin; i++) {
          // if (i <= array.length - 1) {
          arrayAMostrar.push(arrayaPaginar[i]);
          // }
        }
        //EN EL COMPONENTE A RENDERIZAR DEBERIAMOS COGER LOS DATOS DE arrayAMostrar
        console.log(arrayAMostrar);
        // return array;
      },
      popularidad: () => {
        let store = getStore();
        store.peliculasPopulares = store.peliculas;
        console.log("ORDENANDO POR POPULARIDAD");

        store.peliculasPopulares.sort(function (a, b) {
          if (a.popularity < b.popularity) {
            return 1;
          }
          if (a.popularity > b.popularity) {
            return -1;
          }
          return 0;
        });
        // setStore({ peliculasPopulares: store.peliculas });
      },
      cargarCarrousel: () => {
        //Funcion para cargar las tres peliculas AL AZAR para el carrousel
        const store = getStore();
        var tresAleatorios = [];
        for (let i = 0; i < 3; i++) {
          tresAleatorios.push(Math.floor(Math.random() * 399 + 1));
        }
        console.log(tresAleatorios);
        for (var i = 0; i < 3; i++) {
          store.carrousel.push(store.peliculas[tresAleatorios[i]]);
          //store.carrousel[tresAleatorios][i].id = tresAleatorios[i];
        }
        console.log(store.carrousel);
      },
      proximamente: async () => {
        console.log("buscando las pelis en la API");

        await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=87330f0fa794fb3eb980c887157031c9&page=1"
        )
          .then((response) => response.json())
          .then((data) => {
            //console.log(data.results);
            setStore({ proximamente: data.results });
          })
          .catch((error) => console.log("Algo salió mal", error));
      },
      rodarRuleta: () => {
        const store = getStore();
        var veinteRandom = [];
        store.ruleta = [];
        for (let i = 0; i < 20; i++) {
          veinteRandom.push(Math.floor(Math.random() * 399 + 1));
        }
        console.log("veinte random", veinteRandom);
        let cadenaTitulo = "";

        for (let i = 0; i < 20; i++) {
          cadenaTitulo =
            store.peliculas[veinteRandom[i]]?.title /*.substring(0, 15)*/;
          setStore({
            ruleta: [...store.ruleta, { option: cadenaTitulo.substring(0, 9) }],
          });
          console.log(getStore());
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },

      logIn: (email, password) => {
        var myHeaders = new Headers();
        let store = getStore();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          email: email,
          password: password,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(
          "https://3001-lulmg-strangerfilms-bmgcedkl5a2.ws-eu47.gitpod.io/login",
          requestOptions
        )
          .then((response) => response.JSON())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },

      register: (username, email, password) => {
        // pegar postman
      },

      favmovie: (favmovie) => {
        //     var myHeaders = new Headers();
        //     myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY1NzA1Mzc1OCwianRpIjoiZmQyMWUzYWUtYzAzNC00NjNmLWE1MzItMTM2OTk4MWQ4M2E0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNjU3MDUzNzU4LCJleHAiOjE2NTcwNTczNTh9.lcRtVDsip4TF7j959aJzYwTlOIAmMjU_2LR2fzAO1kc");
        //     myHeaders.append("Content-Type", "application/json");
        //     var raw = JSON.stringify({
        //       "user_id": "1",
        //       "movie_id": "3000"
        //     });
        //     var requestOptions = {
        //       method: 'POST',
        //       headers: myHeaders,
        //       body: raw,
        //       redirect: 'follow'
        //     };
        //     fetch("https://3001-lulmg-strangerfilms-y7ik6qmo9n4.ws-eu51.gitpod.io/favorite/movie", requestOptions)
        //       .then(response => response.text())
        //       .then(result => console.log(result))
        //       .catch(error => console.log('error', error));
      },

      newcomment: (newcoment) => {
        // pegar postman
      },

      newcomment: (newcomment, idPeli) => {
        var myHeaders = new Headers();
        myHeaders.append(
          "Authorization",
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY1NzAyMzcyNywianRpIjoiMDRjMDZmYjQtNjQ1Ny00OWZiLTk1MTAtNTNkNWFhMmFiNzY0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNjU3MDIzNzI3LCJleHAiOjE2NTcwMjczMjd9.DUrEfsd6ZDv0hjjokNeS1-HmIhh3l5EiIstnt4gwEkw"
        );
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          movie_id: idPeli,
          user_comment: newcomment,
          movie_id: id,
        });

        const response = await fetch(
          "https://3001-lulmg-strangerfilms-y7ik6qmo9n4.ws-eu51.gitpod.io/add/comment",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(comment),
          }
        );
      },
      getAllcommentsForOneMovie: async (id) => {
        const response = await fetch(
          `https://3001-lulmg-strangerfilms-y7ik6qmo9n4.ws-eu51.gitpod.io/comment/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        const data = await response.json();

        setStore({ commentsForOneMovie: data.resultado });
      },
    },
  };
};

export default getState;

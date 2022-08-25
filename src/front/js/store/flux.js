const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
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
      commentsForOneMovie: [{ user_comment: "No hay comentarios" }],
      userComment: "",
    },

    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      popularidad: () => {
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
        const store = getStore();
        for (var i = 0; i < store.peliculas.length - 1; i++) {
          await fetch(
            "https://api.themoviedb.org/3/movie/" +
              +store.peliculas[i].id +
              "/videos?api_key=87330f0fa794fb3eb980c887157031c9&language=en-US"
          )
            .then((response) => response.json())
            .then((data) => {
              for (var x = 0; x < data.results.length - 1; x++) {
                if (
                  data.results[x].official == true &&
                  (data.results.type = "Trailer") &&
                  (data.results.type = "Youtube")
                ) {
                  store.peliculas[i].trailer =
                    "https://www.youtube.com/watch?v=" + data.results[x].key;
                  //HACEMOS BREAK PARA QUE ÚNICAMENTE MUESTRE UN TRAILER OFICIAL
                  //YA QUE HAY PELICULAS QUE TIENEN VARIOS TRAILERS
                  break;
                } else {
                  store.peliculas[i].trailer = "none";
                }
              }
            })
            .catch((error) => console.log("Algo salió mal", error));
        }
      },
      buscarPelicula: (busqueda) => {
        var cadena = busqueda;
        var minusculas = cadena.toLowerCase();
        const store = getStore();
        store.buscarPelicula = [];
        var array = [];
        for (var i = 0; i < store.peliculas.length - 1; i++) {
          var titulo = store.peliculas[i].title.toLowerCase();

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
      generosDePeliculas: async () => {
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
        var peliculasTotales = [];
        var actions = getActions();

        await fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=87330f0fa794fb3eb980c887157031c9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1" +
            "&with_watch_monetization_types=flatrate"
        )
          .then((response) => response.json())
          .then((data) => {
            peliculasTotales = [...peliculasTotales, ...data.results];
            setStore({ peliculas: peliculasTotales });
          })
          // .then(state.actions.cargarCarrousel())
          .catch((error) => console.log("Algo salió mal", error));

        let store = getStore();
        actions.topRated();
        actions.cargarCarrousel();
        actions.proximamente();
        actions.popularidad();

        console.log("PELICULAS TOTALES", store.peliculas);
      },
      peliculasGeneralesAntiguas: async () => {
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
              peliculasTotales = [...peliculasTotales, ...data.results];
              setStore({ peliculas: peliculasTotales });
            })
            // .then(state.actions.cargarCarrousel())
            .catch((error) => console.log("Algo salió mal", error));
        }
        actions.topRated();
        actions.cargarCarrousel();
        actions.proximamente();
        actions.popularidad();
      },
      filtroDeGenero(genero) {
        const store = getStore();

        for (var i = 0; i < store.generos.length - 1; i++) {
          if (genero == store.generos[i].id) {
            store.generoSeleccionado = store.generos[i].name;
            console.log(store.generos[i].name);
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
      //añadirEnCinesApeliculas: () => {
      //  console.log("ejecutando añadir a pelis");
      //  let store = getStore();
      //  for (var i = 0; i < store.enCines.length; i++) {
      //    for (var x = 0; x < store.peliculas.length; x++) {
      //      //if (store.enCines.id != store.peliculas.id) {
      //      store.peliculas.push(store.enCines[i]);
      //      console.log("añadida peliculas con titulo", store.enCines.title);
      //      //}
      //    }
      //  }
      //},
      enCines: async () => {
        await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=87330f0fa794fb3eb980c887157031c9&page=1"
        )
          .then((response) => response.json())
          .then((data) => {
            //console.log("encines", data.results);
            setStore({ enCines: data.results });
          })
          .catch((error) => console.log("Algo salió mal", error));
        const store = getStore();
        console.log("en cines...", store.enCines);
        let actions = getActions();
        actions.OrdenarPorFecha();
        //store.peliculas = store.peliculas.concat(store.enCines);
        //console.log("Peliculas añadidas de encines", store.peliculas);
        //store.peliculas = [...store.peliculas, ...store.enCines];
        ////setStore({ peliculas: peliculas });
        //console.log("ejecutado en cines", store.enCines);
        //actions.añadirEnCinesApeliculas();
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

      popularidad: () => {
        let store = getStore();
        store.peliculasPopulares = store.peliculas;

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
          tresAleatorios.push(Math.floor(Math.random() * 19 + 1));
        }
        for (var i = 0; i < 3; i++) {
          store.carrousel.push(store.peliculas[tresAleatorios[i]]);
        }
        console.log(store.carrousel);
      },
      proximamente: async () => {
        await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=87330f0fa794fb3eb980c887157031c9&page=1"
        )
          .then((response) => response.json())
          .then((data) => {
            setStore({ proximamente: data.results });
          })
          .catch((error) => console.log("Algo salió mal", error));
      },
      rodarRuleta: () => {
        const store = getStore();
        var veinteRandom = [];
        store.ruleta = [];
        for (let i = 0; i < 20; i++) {
          //veinteRandom.push(Math.floor(Math.random() * 399 + 1));
          veinteRandom.push(Math.floor(Math.random() * 20));
        }
        let cadenaTitulo = "";
        let elementoRuleta = {};
        for (let i = 0; i < 20; i++) {
          cadenaTitulo =
            store.peliculas[veinteRandom[i]]?.title /*.substring(0, 15)*/;
          setStore({
            ruleta: [
              ...store.ruleta,
              {
                option: cadenaTitulo.substring(0, 9),
                indice: veinteRandom[i],
              },
            ],
          });
        }
        console.log("ruleta", getStore());
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

        fetch(process.env.BACKEND_URL + "/login", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            store.messageLogin = result.mensaje;
            console.log("mensaje", result.mensaje);
            localStorage.setItem("token", result.token);
            window.location.reload(false);
          })
          .catch((error) => console.log("error", error));
      },

      logOut: () => {
        localStorage.removeItem("token");
        window.location.reload(false);
      },

      register: (username, email, password) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          username: username,
          email: email,
          password: password,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        fetch(process.env.BACKEND_URL + "/register", requestOptions)
          .then((response) => response.text())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
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
      newcomment: async (newcomment, id, user) => {
        let comment = {
          user_comment: newcomment,
          movie_id: id,
        };

        const response = await fetch(process.env.BACKEND_URL + "/add/comment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(comment),
        });
      },
      getAllcommentsForOneMovie: async (id) => {
        const response = await fetch(
          process.env.BACKEND_URL + `/comment/${id}`,
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
        console.log("XXX", data.resultado);
        //setStore({ userComment: data.userName });
      },

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
    },
  };
};

export default getState;

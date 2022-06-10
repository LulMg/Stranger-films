const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      peliculas: [],
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      loadFilmsFromExternalAPI: async () => {
        //CONECTAMOS A LA API EXTERNA Y TRATAMOS DE LEER LAS PELICULAS
        console.log("INTENTAMOS CONECTAR A LA API EXTERNA");
        //ÚNICAMENTE SE ESTÁ CARGANDO LA PRIMERA PAGINA, PELICULAS EN INGLES

        await fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=87330f0fa794fb3eb980c887157031c9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=12&with_watch_monetization_types=flatrate"
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data.results);
            setStore({ personajes: data.results });
          })
          .catch((error) => console.log(error));
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
    },
  };
};

export default getState;

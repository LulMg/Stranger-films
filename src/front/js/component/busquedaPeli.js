import React, { useEffect, useState } from "react";
import "../../styles/pageGenero.css";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
//COMPONENTES
import CardPelicula from "./card-pelicula";
import AcordionGenero from "./navbar-generos";
import MiLista from "../component/acordionMilista";

export default function Busqueda() {
  const params = useParams();
  const { store, actions } = useContext(Context);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      actions.buscarPelicula(params.inputText);
      setLoad(true);
    }, 4000);
  }, []);
  return (
    <div className="d-flex">
      <div>
        {localStorage.getItem("token") ? (
          <>
            <MiLista />
          </>
        ) : (
          <AcordionGenero />
        )}
      </div>
      <div className="col">
        <div className="m-3">
          <p className="glitch generoNombre" data-text="RESULTADOS">
            RESULTADOS
          </p>
        </div>
        <div className="text-light row">
          {load ? (
            store.peliculasBusqueda?.map((obj, index) => {
              return (
                <div key={index} className="col-3">
                  <CardPelicula
                    poster={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
                    titulo={obj.title}
                    averageVote={
                      <div>
                        <i
                          style={{ color: "yellow" }}
                          className="fas fa-star me-1 mt-1"
                        ></i>
                        {obj.vote_average}
                      </div>
                    }
                  />
                </div>
              );
            })
          ) : (
            <lord-icon
              src="https://cdn.lordicon.com/ymrqtsej.json"
              trigger="loop"
              colors="primary:#e94242"
              style={{ width: "250px", height: "250px" }}
            ></lord-icon>
          )}
        </div>
      </div>
    </div>
  );
}

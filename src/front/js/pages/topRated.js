import React, { useContext } from "react";
import { Context } from "../store/appContext";
//COMPONENTES
import AcordionGenero from "../component/navbar-generos";
import CardPelicula from "../component/card-pelicula";

export const TopRated = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="d-flex">
      <div>
        <AcordionGenero />
      </div>
      <div className="row">
        {store.peliculas.map((obj, index) => {
          return (
            <div key={index} className="col text-light mb-2">
              <CardPelicula
                key={obj.id}
                poster={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
                titulo={obj.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

import React, { useContext } from "react";
import { Context } from "../store/appContext";
//COMPONENTES
import AcordionGenero from "../component/navbar-generos";
import CardPelicula from "../component/card-pelicula";

export const Proximamente = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <div className="d-flex">
        <div>
          <AcordionGenero />
        </div>
        <div>
          <div className="row">
            <div className="text-center text-light">
              <hr />
              <h2 className="text-danger">PROXIMAMENTE</h2>
              <hr />
            </div>
            {store.proximamente.map((obj, index) => {
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
          <div className="d-flex justify-content-center">
            <button className="btn btn-danger me-2 mb-4">Anterior</button>
            <button className="btn btn-danger mb-4">Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  );
};

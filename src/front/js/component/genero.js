//IMPORTAMOS CONTEXT Y USECONTEXT PARA PODER ACCEDER A LOS DATOS QUE TENEMOS EN EL FLUX
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/pageGenero.css";
import { useParams } from "react-router-dom";
//COMPONENTES
import CardPelicula from "./card-pelicula";
import AcordionGenero from "../component/navbar-generos";

export const Genero = () => {
  //LLAMAMOS A STORE Y ACTIONS Y USAMOS EL CONTEXT CON EL USECONTEXT
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div>
      {/*LISTA DE GENEROS*/}
      <div className="d-flex">
        <div>
          <AcordionGenero />
        </div>
        {/*TITULO*/}
        <div className="col">
          <div>
            <div class="glitch d-flex generoNombre" data-text="GENERO">
              GENERO
              <div class="glow">GENERO</div>
            </div>
            <div className="row">
              {store.peliculasporGenero?.map((obj, index) => {
                //if (index < 19) {
                var pelisAmostrar = 19;
                for (var i = 0; i < 20; i + 20) {
                  return (
                    <div key={index} className="col text-light mb-2">
                      <CardPelicula
                        key={index}
                        poster={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
                        titulo={obj.title}
                      />
                    </div>
                  );
                }
                //}
              })}
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-danger me-2 mb-4">Anterior</button>
              <button className="btn btn-danger mb-4">Siguiente</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

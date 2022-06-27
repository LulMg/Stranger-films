//IMPORTAMOS CONTEXT Y USECONTEXT PARA PODER ACCEDER A LOS DATOS QUE TENEMOS EN EL FLUX
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/pageGenero.css";
import CardPelicula from "./card-pelicula";

export const Genero = () => {
  //LLAMAMOS A STORE Y ACTIONS Y USAMOS EL CONTEXT CON EL USECONTEXT
  const { store, actions } = useContext(Context);
  return (
    <div>
      {/*LISTA DE GENEROS*/}
      <div className="d-flex">
        <div>
          <div className="accordion accordion-flush">
            <div className="accordion-item bg-transparent">
              <h1 className="accordion-header">
                <button
                  className="accordion-button text-light ps-5"
                  type="btn"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  <h2>GENEROS</h2>
                </button>
              </h1>

              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body text-dark">
                  <div>
                    {store.generos?.map((obj, index) => {
                      return (
                        <div key={index}>
                          <div
                            className="flex-shrink-0 p-3 bg-gradient ms-1 d-flex"
                            style={{ width: "280px" }}
                          >
                            <li
                              key={obj.id} //al poner de ID el OBJ.ID Coincide con el genero de la API de MOVIEDB
                              onClick={() => {
                                actions.filtroDeGenero(obj.id); //
                              }}
                            >
                              <i className="fas fa-tag me-3 ms-5"></i>
                              {obj.name}
                            </li>
                            <span
                              className="expand"
                              data-toggle="sidebar-tpggle-genre-on"
                            ></span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/*ACCESO A MI LISTA DE REPRODUCCION*/}

            <div className="mt-5 text-light">
              <div className="d-flex mt-2">
                <div className="divisor bg-light mx-2 ms-5"></div>
                <h4>Mi lista de seguimiento</h4>
              </div>
              <div
                className="mt-5 bg-gradient rounded p-3 text-center"
                style={{ width: "21rem" }}
              >
                <i class="fas fa-plus-square fa-2x m-3"></i>
                <h6>Inicia sesión para acceder a tu lista de reproducción</h6>
                <small className="text-secondary">
                  Guarda tus peliculas favoritas
                </small>
                <button className="btn btn-danger mt-3">
                  Inicia sesión en Stranger Films
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*TITULO*/}
        <div className="col">
          <div>
            <div class="glitch d-flex generoNombre" data-text="GENERO">
              GENERO
              <div class="glow">GENERO</div>
            </div>
            <div className="row">
              {store.proximamente?.map((obj, index) => {
                return (
                  <div key={index} className="col">
                    <CardPelicula
                      key={index}
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
    </div>
  );
};

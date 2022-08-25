import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { LogIn } from "./login";

export default function AcordionGenero() {
  const { store, actions } = useContext(Context);
  return (
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
                      {/* HACEMOS QUE EL KEY SEA EL OBJ.ID ASÍ LUEGO LO APROVECHAMOS 
                              PARA HACER LA BUSQUEDA POR GENEROS AL LLAMAR A LA FUNCION DE MOSTRAR
                              POR GENERO EL ID SE CORRESPONDE CON LA CONSULTA DEVUELTA POR LA API Y QUE
                              CONTIENE EL GENERO DE CADA PELICULA
                              EJ :     {
                              "id": 37,
                              "name": "Western"}
                            */}
                      <Link to={"/genero/" + obj.id}>
                        <li
                          key={obj.id} //al poner de ID el OBJ.ID Coincide con el genero de la API de MOVIEDB
                          onClick={() => {
                            actions.filtroDeGenero(obj.id); //
                          }}
                        >
                          <i className="fas fa-tag me-3 ms-5"></i>
                          {obj.name}
                        </li>
                      </Link>
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
      {/*MI LISTA DE REPRODUCCION*/}
      <div className="mt-5 text-light">
        <div className="d-flex mt-2">
          <div className="divisor bg-light mx-2 ms-5"></div>
          <h4>Mi lista de seguimiento</h4>
        </div>
        <div
          className="mt-5 bg-gradient rounded p-3 text-center"
          style={{ width: "21rem" }}
        >
          <i className="fas fa-plus-square fa-2x m-3"></i>
          <h6>Inicia sesión para acceder a tu lista de reproducción</h6>
          <small className="text-secondary">
            Guarda tus peliculas favoritas
          </small>

          <button
            className="btn btn-danger mt-3"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Inicia sesión en Stranger Films
          </button>
        </div>
      </div>
      {/*MODAL DEL INICIO DE SESION*/}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog"></div>
        <LogIn />
      </div>
    </div>
  );
}

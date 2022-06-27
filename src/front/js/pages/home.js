import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { object } from "prop-types";
import { useState, useEffect } from "react";
import ruletaa from "../../img/ruletaa.png";
import giphy from "../../img/giphy.gif";
//COMPONENTES
import CardPelicula from "../component/card-pelicula";
import RatedMovie from "../component/rates";
import Detalles from "../component/descripPoster";
import Ruleta from "../component/ruleta";

var estilo = {
  backgroundImage: `url(${giphy})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  opacity: "0.8",
};
export const Home = (props) => {
  const { store, actions } = useContext(Context);
  const [categoria, setCategoia] = useState(12);
  //EN LA VARIABLE DE ESTADO CATEGORIA PONEMOS UN USEEFECT PARA QUE NOS MUESTRE LA LISTA DE PELICULAS ORDENADAS POR GENERO
  //useEffect(() => {
  //  store.peliculas.length > 0 && actions.filtroDeGenero(12);
  //}, []);
  return (
    <div className="text-end mx-5 mt-2" id="home">
      {/*CAROUSEL ESTRENOS*/}

      <div
        id="carouselExampleCaptions"
        className="carousel slide fondo rounded"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" style={estilo}>
          {store.carrousel?.map((obj, index) => {
            if (index == 0) {
              return (
                <div className="carousel-item active" style={estilo}>
                  <img
                    onError={(e) => {
                      e.target.src =
                        "https://c.tenor.com/T4DuBupd0IUAAAAd/stand-by-technical-difficulties.gif";
                    }}
                    src={`https://image.tmdb.org/t/p/w500/${obj.backdrop_path}`}
                    className="imagenPrinc"
                    alt="..."
                    style={{
                      width: "60rem",
                      height: "30rem",
                      borderBlockStartColor: "greenyellow",
                    }}
                  />
                  <div className="carousel-caption">
                    <Detalles
                      title={<h1 className="display-6 ms-3">{obj.title}</h1>}
                      description={obj.overview}
                    />
                  </div>
                </div>
              );
            } else {
              return (
                <div className="carousel-item" style={estilo}>
                  <img
                    onError={(e) => {
                      e.target.src =
                        "https://c.tenor.com/T4DuBupd0IUAAAAd/stand-by-technical-difficulties.gif";
                    }}
                    src={`https://image.tmdb.org/t/p/w500/${obj.backdrop_path}`}
                    className="imagenPrinc"
                    alt="..."
                    style={{ width: "60rem", height: "30rem" }}
                  />
                  <div className="carousel-caption">
                    <Detalles
                      title={<h1 className="display-6 ms-3">{obj.title}</h1>}
                      description={obj.overview}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/*SECCION DE POPULARES*/}

      <div className="tendencias text-light">
        <h2
          className="mt-3 text-start ps-5 py-4 ms-5"
          onClick={() => {
            actions.popularidad();
          }}
        >
          POPULARES
        </h2>
        <div>
          {/*//NOS GENERA UNA LISTA DINAMICA EN BASE AL GENERO QUE SE ENCUENTRA
          ALMACENADO EN PELICULASGENERO*/}
          {/* <ul>
            {store.peliculas?.map((pelicula, index) => {
              store.peliculasPopulares.map((peliprueba, indice) => {
                if (peliprueba === index) {
                  console.log("DESDE HOME => peli de genero ", pelicula.title);
                  return <li key={index}>{pelicula.title}</li>;
                }
              });
              // return <li key={index}>{pelicula.title}</li>;
            })}
          </ul> */}
        </div>
        <div className="d-flex pt-3 px-0 overflow">
          {/*COMPONENTE CARDMOVIE*/}

          {store.peliculasPopulares?.map((obj, index) => {
            return (
              <div key={index}>
                <CardPelicula
                  key={index}
                  poster={`https://image.tmdb.org/t/p/w342/${obj.poster_path}`}
                  averageVote={
                    <div>
                      <i
                        style={{ color: "yellow" }}
                        className="fas fa-star me-1 mt-1"
                      ></i>
                      {obj.vote_average}
                    </div>
                  }
                  titulo={obj.title}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/*SECCION AHORA EN CINES*/}
      <div>
        <h2 className="mt-3 text-start text-light ps-5 py-4 ms-5">
          ULTIMOS ESTRENOS
        </h2>
        <div className="d-flex pt-3 px-0 overflow">
          {store.enCines?.map((obj, index) => {
            return (
              <div key={index}>
                <CardPelicula
                  key={index}
                  poster={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
                  averageVote={
                    <div>
                      <i
                        style={{ color: "yellow" }}
                        className="fas fa-star me-1 mt-1"
                      ></i>
                      {obj.vote_average}
                    </div>
                  }
                  titulo={obj.title}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/*SECCION TOP-RATED*/}

      <div className="text-light">
        <div>
          <h2
            className="mt-3 text-start ps-5 py-4 ms-5"
            onClick={actions.topRated()}
          >
            MEJOR VALORADAS
          </h2>
          <div className="d-flex">
            <div className="d-flex overflow me-5">
              {store.peliculas?.map((obj, index) => {
                return (
                  <div key={index}>
                    <RatedMovie
                      key={index}
                      poster={`https://image.tmdb.org/t/p/w154${obj.poster_path}`}
                      titulo={obj.title}
                      rate={obj.vote_average}
                      fecha={obj.release_date}
                      vote_count={obj.vote_count}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <h2 className="mt-5 text-start proximamente">PRÓXIMAMENTE</h2>

          {/*SECCION DE GENEROS Y PERSONAJES*/}
          <div>
            <div className="d-flex">
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
                    <h6>
                      Inicia sesión para acceder a tu lista de reproducción
                    </h6>
                    <small className="text-secondary">
                      Guarda tus peliculas favoritas
                    </small>
                    <button className="btn btn-danger mt-3">
                      Inicia sesión en Stranger Films
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-flex pt-3 px-0 overflow">
                {store.proximamente?.map((obj, index) => {
                  return (
                    <div key={index}>
                      <CardPelicula
                        key={index}
                        poster={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
                        titulo={obj.title}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/*RULETA*/}
            <div className="bg-gradient container rounded p-3 mt-3">
              <h2 className="mt-5 text-start proximamente">
                ¿NO SABES QUE VER?
              </h2>
              <h4 className="text-center text-secondary">
                Haz rodar la ruleta y déjalo a la suerte!
              </h4>
              <Ruleta />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

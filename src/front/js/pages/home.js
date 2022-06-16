import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { object } from "prop-types";
//COMPONENTES
import CardPelicula from "../component/card-pelicula";
import RatedMovie from "../component/rates";
import Detalles from "../component/descripPoster";
import { useState, useEffect } from "react";

export const Home = (props) => {
  const { store, actions } = useContext(Context);
  const [categoria, setCategoia] = useState(12);
  //EN LA VARIABLE DE ESTADO CATEGORIA PONEMOS UN USEEFECT PARA QUE NOS MUESTRE LA LISTA DE PELICULAS ORDENADAS POR GENERO
  //useEffect(() => {
  //  store.peliculas.length > 0 && actions.filtroDeGenero(12);
  //}, []);
  return (
    <div className="text-center" id="home">
      {/*CAROUSEL ESTRENOS*/}

      <div
        id="carouselExampleCaptions"
        className="carousel slide"
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
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://los40.com/los40/imagenes/2022/03/29/cinetv/1648545776_800000_1648545862_gigante_normal.jpg"
              className="imagenPrinc"
              alt="..."
            />
            <div className="carousel-caption">
              <Detalles
                title={<h1 className="display-6 ms-3">"Sonic"</h1>}
                description={"ANIMACION | ACCION | FANTASIA"}
              />
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/3FF6648A2BB444D7A43CB0E41FD3E1F1AB3E0500CEF32F07A002ABDC30212A0D/scale?width=2880&aspectRatio=1.78&format=jpeg"
              className="imagenPrinc"
              alt="..."
            />
            <div className="carousel-caption">
              <Detalles
                title={
                  <h1 className="display-6 ms-3">
                    "Doctor Strange in the Multiverse of Madness"
                  </h1>
                }
                description={"ACCION | SUPERHEROES | FANTASIA"}
              />
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://ntvb.tmsimg.com/assets/p22147304_v_h8_aa.jpg?w=960&h=540"
              className="imagenPrinc"
              alt="..."
            />
            <div className="carousel-caption">
              <Detalles
                title={<h1 className="display-6 ms-3">"Jackass"</h1>}
                description={"COMEDIA | AVENTURA | ACCION"}
              />
            </div>
          </div>
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
            actions.filtroDeGenero(10752);
          }}
        >
          POPULARES
        </h2>
        <h2
          className="mt-3 text-start ps-5 py-4 ms-5"
          onClick={() => {
            actions.popularidad();
          }}
        >
          ORDENAR POR POPULARIDAD
        </h2>
        <div>
          //NOS GENERA UNA LISTA DINAMICA EN BASE AL GENERO QUE SE ENCUENTRA
          ALMACENADO EN PELICULASGENERO
          <ul>
            {store.peliculas?.map((pelicula, index) => {
              store.peliculasPrueba.map((peliprueba, indice) => {
                if (peliprueba === index) {
                  console.log("DESDE HOME => peli de genero ", pelicula.title);
                  return <li key={index}>{pelicula.title}</li>;
                }
              });
              // return <li key={index}>{pelicula.title}</li>;
            })}
          </ul>
        </div>
        <div className="d-flex pt-3 px-0 overflow">
          {/*COMPONENTE CARDMOVIE*/}

          {store.peliculas?.map((obj, index) => {
            return (
              <div key={index}>
                <CardPelicula
                  key={index}
                  poster={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
                  averageVote={obj.vote_average}
                  titulo={obj.title}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-light">
        <div>
          <h2
            className="mt-3 text-start ps-5 py-4 ms-5"
            onClick={actions.topRated()}
          >
            MEJOR VALORADAS
          </h2>
          <div className="d-flex">
            {/*SECCION TOP-RATED*/}

            <div className="d-flex overflow me-5">
              {store.peliculas?.map((obj, index) => {
                return (
                  <div key={index}>
                    <RatedMovie
                      key={index}
                      poster={`https://image.tmdb.org/t/p/w500${obj.poster_path}`}
                      titulo={obj.title}
                      rate={obj.vote_average}
                      fecha={obj.release_date}
                      popularidad={obj.popularity}
                    />
                  </div>
                );
              })}
            </div>

            {/*SECCION DE GENEROS Y PERSONAJES*/}
          </div>
          <div className="accordion d-flex mt-5">
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
                className="accordion-collapse collapse show"
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
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <h2 className="mt-3 text-start py-4 ms-5">PRÓXIMAMENTE</h2>
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
        </div>
      </div>
    </div>
  );
};
//{/*SECCION AHORA EN CINES*/}
//<div>
//  <h2 className="mt-3 text-start py-4 ms-5 ps-5">AHORA EN CINES</h2>
//  <div className="px-5 mx-5">
//    {store.enCines?.map((obj, index) => {
//      return (
//        <div key={index} className="text-light d-flex">
//          <div className="col p-2 d-flex">
//            <p>{obj.title}</p>
//          </div>
//          <div className="d-flex flex-start">
//            <p>{obj.release_date}</p>
//          </div>
//          <div className="progress">
//            <div
//              className="progress-bar bg-danger"
//              role="progressbar"
//              style={{
//                width: `4${obj.vote_average}%`,
//              }}
//              aria-valuemin="0"
//              aria-valuemax="20"
//            >
//              {obj.vote_average}
//            </div>
//          </div>
//          <button className="btn">
//            <i className="fas fa-plus-square fa-2x"></i>
//          </button>
//        </div>
//      );
//    })}
//  </div>
//</div>

//
//

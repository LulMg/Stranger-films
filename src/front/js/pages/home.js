import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//COMPONENTES
import CardPelicula from "../component/card-pelicula";
import RatedMovie from "../component/rates";
import Detalles from "../component/descripPoster";
import Ruleta from "../component/ruleta";
import AcordionGenero from "../component/navbar-generos";
import MiLista from "../component/acordionMilista";

var estilo = {
  backgroundImage: `url(${"https://media.giphy.com/media/l1KcPTbTKdeF2u0Ja/giphy.gif"})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  opacity: "0.8",
};
export const Home = (props) => {
  const { store, actions } = useContext(Context);
  const [categoria, setCategoia] = useState(12);

  return (
    <div className="text-center mx-5 mt-2" id="home">
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
                      //PENDIENTE
                      id={obj.id}
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
                    style={{
                      width: "60rem",
                      height: "30rem",
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
        <Link to={"/Populares"}>
          <h2
            className="mt-3 text-start ps-5 py-4 ms-5 "
            onClick={() => {
              actions.popularidad();
            }}
          >
            POPULARES
          </h2>
        </Link>
        {/* <h2 className="text-light" onClick={() =>{
          console.log(store.messageLogin)
        }}>CLick aqui</h2> */}
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
              <div key={obj.id}>
                <Link to={"/detalles/" + obj.id}>
                  <CardPelicula
                    key={obj.id}
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
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/*SECCION ULTIMOS ESTRENOS*/}
      <div>
        <Link to={"/UltimosEstrenos"}>
          <h2 className="mt-3 text-start ps-5 py-4 ms-5 ">ULTIMOS ESTRENOS</h2>
        </Link>
        <div className="d-flex pt-3 px-0 overflow text-light">
          {store.enCines?.map((obj, index) => {
            return (
              <div key={index}>
                <Link to={"/detallesCine/" + obj.id}>
                  <CardPelicula
                    key={obj.id}
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
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/*SECCION TOP-RATED*/}

      <div className="text-light">
        <div>
          <Link to={"/Mejorvaloradas"}>
            <h2
              className="mt-3 text-start ps-5 py-4 ms-5"
              onClick={actions.topRated()}
            >
              MEJOR VALORADAS
            </h2>
          </Link>
          <div className="d-flex">
            <div className="d-flex overflow me-5">
              {store.peliculas?.map((obj, index) => {
                return (
                  <div key={index}>
                    <Link to={"/detalles/" + obj.id}>
                      <RatedMovie
                        key={index}
                        poster={`https://image.tmdb.org/t/p/w154${obj.poster_path}`}
                        titulo={obj.title}
                        rate={obj.vote_average}
                        fecha={obj.release_date}
                        vote_count={obj.vote_count}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <Link to={"/Proximamente"}>
            <h2 className="mt-5 text-start proximamente">PRÓXIMAMENTE</h2>
          </Link>
          {/*SECCION DE GENEROS Y PERSONAJES*/}
          <div>
            <div className="d-flex">
              {localStorage.getItem("token") ? (
                <>
                  <MiLista />
                </>
              ) : (
                <AcordionGenero />
              )}
              <div className="d-flex pt-3 px-0 overflow">
                {store.proximamente?.map((obj, index) => {
                  return (
                    <div key={index}>
                      <Link to={"/detallesProx/" + obj.id}>
                        <CardPelicula
                          key={obj.id}
                          poster={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
                          titulo={obj.title}
                        />
                      </Link>
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

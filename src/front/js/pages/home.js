import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardPelicula from "../component/card-pelicula";
import Detalles from "../component/descripPoster";

export const Home = (props) => {
  const { store, actions } = useContext(Context);

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
              src="https://estaticos-cdn.epe.es/clip/5f67e001-e043-4993-8880-b9a80b108be6_alta-libre-aspect-ratio_default_0.jpg"
              className="imagenPrinc"
              alt="..."
            />
            <div className="carousel-caption">
              <Detalles
                title={"hola"}
                description={"ashvbhsgdfailgdfiSOPGFUIEG"}
              />
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://estaticos-cdn.epe.es/clip/5f67e001-e043-4993-8880-b9a80b108be6_alta-libre-aspect-ratio_default_0.jpg"
              className="imagenPrinc"
              alt="..."
            />
            <div className="carousel-caption">
              <Detalles
                title={"hola"}
                description={"ashvbhsgdfailgdfiSOPGFUIEG"}
              />
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://estaticos-cdn.epe.es/clip/5f67e001-e043-4993-8880-b9a80b108be6_alta-libre-aspect-ratio_default_0.jpg"
              className="imagenPrinc"
              alt="..."
            />
            <div className="carousel-caption">
              <Detalles
                title={"hola"}
                description={"ashvbhsgdfailgdfiSOPGFUIEG"}
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
            var arraysFiltrados = actions.filtroDeGenero(12);
            console.log(arraysFiltrados);
          }}
        >
          POPULARES
        </h2>
        <div className="d-flex pt-3 px-0 overflow">
          {/*COMPONENTE CARDMOVIE*/}

          {store.peliculasPopulares?.map((obj, index) => {
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
        {/*SECCION DE GENEROS*/}

        <h2 className="mt-3 text-start ps-5 py-4 ms-5">GENEROS</h2>
        <div>
          {store.generos?.map((obj, index) => {
            return (
              <div key={index}>
                <div
                  className="flex-shrink-0 p-3 bg-gradient ms-1 d-flex"
                  style={{ width: "280px" }}
                >
                  <div></div>
                  <li key={index}>
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
  );
};

import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
//import "../../styles/home.css";
import Comentario from "../component/comentarios";
import { useParams } from "react-router-dom";
import { object, objectOf } from "prop-types";
import "../../styles/detallesPeli.css";
import Trailer from "./pupUpTrailer";

export const DetallesPeli = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [favmovie, setFavmovie] = useState("");
  const [newcomment, setNewcomment] = useState("");
  console.log(params);
  useEffect(() => {
    console.log(favmovie, newcomment);
  }, [favmovie, newcomment]);

  return store.peliculas.map(function (obj, index) {
    if (obj.id == params.theid) {
      //con.log("params = ", +params.theid + "id " + obj.id);
      return (
        <div classNameName="container2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div id="contenedor" className="row detallesPelis3">
              <div id="verde" className="col-3">
                <div className="card detallesPelis2">
                  <img
                    src={"https://image.tmdb.org/t/p/w500/" + obj.poster_path}
                    className="card-img-top"
                    alt="..."
                  />

                  <div className="card-body">
                    <h5 className="card-title">{obj.title}</h5>
                    <p className="card-text">{obj.release_date}</p>
                    <p className="card-text1">
                      <i
                        style={{ color: "yellow" }}
                        className="fas fa-star me-1 mt-1"
                      ></i>
                      {obj.vote_average} // {obj.vote_count}
                    </p>
                    <a
                      href="#"
                      className="btn btn-danger col-12"
                      onClick={() => {
                        actions.favmovie(favmovie);
                      }}
                    >
                      Favoritos
                    </a>
                  </div>
                </div>
              </div>

              <div id="naranja" className="col-9 my-auto mx-auto">
                <div id="imagen-superior" className="imagen-path">
                  <div className="imagen-detalle">
                    <div className="imagen-active">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w500/" + obj.backdrop_path
                        }
                        className="d-block w-100"
                        alt="..."
                      />
                      <div className="carousel-caption d-none d-md-block detallesPelis1">
                        <h2 className="detallesPelis">{obj.title}</h2>
                        <p className="descripcion p-3">
                          {obj.overview}
                          <div className="mt-4">
                            <Trailer trailer={obj.trailer} />
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container" id="comentarios">
              <div className="col-lg-11 ms-5">
                <form>
                  <div className="form-group">
                    <label>Comentario</label>
                    <p className="clasificacion">
                      <input
                        id="radio1"
                        type="radio"
                        name="estrellas"
                        value="5"
                      />
                      <label for="radio1">★</label>
                      <input
                        id="radio2"
                        type="radio"
                        name="estrellas"
                        value="4"
                      />
                      <label for="radio2">★</label>
                      <input
                        id="radio3"
                        type="radio"
                        name="estrellas"
                        value="3"
                      />
                      <label for="radio3">★</label>
                      <input
                        id="radio4"
                        type="radio"
                        name="estrellas"
                        value="2"
                      />
                      <label for="radio4">★</label>
                      <input
                        id="radio5"
                        type="radio"
                        name="estrellas"
                        value="1"
                      />
                      <label for="radio5">★</label>
                    </p>
                  </div>
                  {localStorage.getItem("token") ? (
                    <>
                      {" "}
                      <input
                        className="caja-comentarios"
                        type="comments"
                        onChange={(e) => setNewcomment(e.target.value)}
                      ></input>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          actions.newcomment(newcomment, obj.id);
                        }}
                      >
                        Enviar
                      </button>
                    </>
                  ) : (
                    ""
                  )}
                </form>
              </div>
            </div>
          </form>

          <div class="container-fluid" id="main-content">
            <div className="columna6">
              <Comentario
                id={params.theid}
                key={obj.id}
                poster={`https://image.tmdb.org/t/p/w342/${obj.poster_path}`}
                averageVote={<div>{obj.title}</div>}
              />
              );
            </div>
          </div>
        </div>
      );
    }
  });
};

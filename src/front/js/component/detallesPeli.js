import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
//import "../../styles/home.css";
import CardPelicula from "../component/card-pelicula";
import { useParams } from "react-router-dom";
import { object, objectOf } from "prop-types";
import "../../styles/detallesPeli.css";

export const DetallesPeli = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [favmovie, setFavmovie] = useState("");
  const [newcomment, setNewcomment] = useState("");

  useEffect(() => {
    console.log(favmovie, newcomment);
  }, [favmovie, newcomment]);
  //<div classNameName="generalBody">
  return store.peliculas.map(function (obj, index) {
    if (obj.id == params.theid) {
      //con.log("params = ", +params.theid + "id " + obj.id);
      console.log(obj.title);
      return (
        // <div classNameName="container">
        //   <a classNameName="tittle text-white font-weight-700">
        //   <span>{obj.title}</span>
        //   </a>
        //   <div>
        //     <img src={"https://image.tmdb.org/t/p/w500/" + obj.poster_path} />
        //     <img src={"https://image.tmdb.org/t/p/w500/" + obj.backdrop_path} />
        //   </div>
        //   <div classNameName="text-white">{obj.id}</div>
        //   <div classNameName="text-white">{index}</div>
        // </div>
        <div classNameName="container2 text-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div id="contenedor" className="row">
              <div id="verde" className="col-3 my-auto mx-auto">
                <div className="card">
                  <img
                    src={"https://image.tmdb.org/t/p/w500/" + obj.poster_path}
                    className="card-img-top"
                    alt="..."
                  />

                  <div className="card-body">
                    <h5 className="card-title">{obj.title}</h5>
                    <p className="card-text">{obj.averageVote}Corre platano</p>
                    <a
                      href="#"
                      className="btn btn-danger"
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
                      <div className="carousel-caption d-none d-md-block">
                        <h2>{obj.title}</h2>
                        <p className="descripcion">
                          Inserte descripción de la película aquí
                          <a href="#" className="btn btn-danger" id="trailer">
                            Trailer
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container" id="comentarios">
              <div className="col-lg-11">
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

                    <input
                      className="caja-comentarios"
                      type="comments"
                      placeholder="Inserte su comentario aquí"
                      onChange={(e) => setNewcomment(e.target.value)}
                    ></input>
                  </div>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      actions.newcoment(newcomment);
                    }}
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </form>
        </div>
      );
    }
    //<div classNameName="prueba text-light"> hey</div>;
  });
};

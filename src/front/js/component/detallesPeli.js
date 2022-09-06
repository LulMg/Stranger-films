import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
//import "../../styles/home.css";
import { useParams } from "react-router-dom";
import "../../styles/detallesPeli.css";
import Trailer from "./pupUpTrailer";
//COMPONENTES
import CardPelicula from "./card-pelicula";

export const DetallesPeli = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [favmovie, setFavmovie] = useState("");
  const [newcomment, setNewcomment] = useState("");

  console.log(params);
  useEffect(() => {
    actions.getAllcommentsForOneMovie(params.theid);
  }, []);

  //prueba desde laura

  //test git comment

  return store.peliculas.map(function (obj, index) {
    if (obj.id == params.theid) {
      //con.log("params = ", +params.theid + "id " + obj.id);
      return (
        <div className=" general" key={index}>
          <div className="divImg">
            <img
              src={"https://image.tmdb.org/t/p/w500/" + obj.backdrop_path}
              className="d-block w-100 imagenLarga"
            />
          </div>
          <div className="container general2 pb-4">
            <div className="d-flex">
              <div className="row detallesPelis3 rounded d-block p-5">
                <div className="">
                  <CardPelicula
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
                  />
                </div>
              </div>
              <div className="p-5">
                <div className="d-flex">
                  <h2 className="detallesPelis text-light">{obj.title}</h2>{" "}
                  <h4 className="p-2">({obj.release_date})</h4>
                </div>
                <div className="border border-dark bg-gradient mt-3 p-3">
                  <div className="text-light">
                    <h4>SINOPSIS</h4>
                    <p className="descripcion p-3">{obj.overview}</p>
                  </div>
                  <div className="text-light mt-2 d-flex">
                    <h4>IDIOMA ORIGINAL</h4>
                    <p className="descripcion ms-3"> {obj.original_language}</p>
                  </div>
                  <div className="text-light mt-2">
                    <h4>POPULARIDAD</h4>
                    <p className="descripcion ms-2">
                      <i className="fas fa-fire"></i> {obj.popularity}
                    </p>
                  </div>
                  <div className="text-light mt-2">
                    <h4>GENERO</h4>
                    <p className="descripcion ms-3"> PONER GENERO AQUI{}</p>
                  </div>
                  <div className="mt-4">
                    <Trailer trailer={obj.trailer} />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="col-6">
                <div>
                  {localStorage.getItem("token") ? (
                    <>
                      {" "}
                      <div className="ps-2 d-flex ms-5">
                        <textarea
                          className="p-2"
                          type="comments"
                          rows="4"
                          cols="57"
                          placeholder="Deja tu comentario..."
                          onChange={(e) => setNewcomment(e.target.value)}
                        ></textarea>
                        <button
                          type="button"
                          className="btn btn-outline-success ms-2"
                          onClick={() => {
                            actions.newcomment(newcomment, obj.id);
                          }}
                        >
                          Enviar
                        </button>
                      </div>
                      {/*SECCION DE COMENTARIOS*/}
                      <div className="comentario-texto p-1 mt-2 ms-5 col-10">
                        <h4>COMENTARIOS</h4>
                        <div className="ms-1 bg-gradient p-1 px-3">
                          {store.commentsForOneMovie.map((value, index) => {
                            return (
                              <>
                                <li key={value.id}>
                                  {/*<p>{value.user_name ? user_name : ""}</p>*/}
                                  <div className="d-flex">
                                    <div className="col-10">
                                      <p>
                                        <i className="fas fa-comment me-3 ps-2"></i>

                                        {value.user_comment
                                          ? value.user_name +
                                            ": " +
                                            value.user_comment
                                          : "No hay comentarios"}
                                      </p>
                                    </div>
                                    {value.user_name ==
                                    localStorage.getItem("user") ? (
                                      <div className="d-flex justify-content-end col-2">
                                        <button
                                          type="button"
                                          className="btn btn-outline-secondary my-2 text-warning"
                                          onClick={() => {
                                            //const modalBorrarCom =
                                            //  new bootstrap.Modal(
                                            //    document.getElementById(
                                            //      "borrarComm"
                                            //    )
                                            //  );
                                            //modalBorrarCom.show();
                                            console.log(value);
                                            alert("hola");
                                            actions.eliminarComentario(
                                              value.id
                                            );
                                          }}
                                        >
                                          <i className="far fa-edit"></i>
                                        </button>
                                        <button
                                          //type="button"
                                          //data-bs-toggle="modal"
                                          //data-bs-target="#modalBorrar"
                                          className="btn btn-outline-secondary my-2 text-danger "
                                        >
                                          <i className="far fa-trash-alt"></i>
                                        </button>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </li>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  ) : (
                    <div>
                      <div className="text-center text-light border border-danger p-3 mx-5 rounded">
                        <h5>Para dejar tu comentario inicia sesión</h5>
                      </div>
                      {/*SECCION DE COMENTARIOS*/}
                      <div className="comentario-texto p-1 mt-2 ms-5 col-10">
                        <h4>COMENTARIOS</h4>
                        <div className="ms-1 bg-gradient p-1 px-3">
                          {store.commentsForOneMovie.map((value, index) => {
                            return (
                              <>
                                <li key={value.id}>
                                  {/*<p>{value.user_name ? user_name : ""}</p>*/}
                                  <div className="d-flex">
                                    <p>
                                      <i className="fas fa-comment me-3 ps-2"></i>

                                      {value.user_comment
                                        ? value.user_name +
                                          ": " +
                                          value.user_comment
                                        : "No hay comentarios"}
                                    </p>
                                  </div>
                                </li>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-6 text-center">
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + obj.backdrop_path}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  });
};

//MODAL BORRAR COMENTARIOS
<div
  class="modal fade"
  id="borrarComm"
  data-bs-backdrop="static"
  data-bs-keyboard="false"
  tabindex="-1"
  aria-labelledby="staticBackdropLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">
          Modal title
        </h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
        <button type="button" class="btn btn-primary">
          Understood
        </button>
      </div>
    </div>
  </div>
</div>;
{
  /*<form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >*/
}
{
  /*</form>*/
}

{
  /*<div className="form-group">
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
                  </div>*/
}

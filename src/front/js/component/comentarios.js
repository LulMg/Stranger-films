import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../styles/comentarios.css";
import { Context } from "../store/appContext";

export default function Comments(props) {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getAllcommentsForOneMovie(props.id);
  }, []);

  return (
    <div className="comentario5 text-light">
      <div className="row">
        <div className="col-6">
          <div className="columna1">
            <img
              className="card-img-top"
              src={props.poster}
              alt="movie-poster"
            />
          </div>
          <div className="comentario2">
            <div className="d-flex">
              <span>
                <strong>{props.averageVote}</strong>
              </span>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="comentario-texto">
            <ul>
              {store.commentsForOneMovie
                ? store.commentsForOneMovie.map((value, index) => {
                    return (
                      <>
                        <li key={index}>
                          <p>{value.user_id}</p>
                          <p
                            id="message"
                            name="message"
                            placeholder="Insert your comment."
                            rows="9"
                          >
                            {value.user_comment}
                          </p>
                        </li>
                      </>
                    );
                  })
                : "No hay comentarios"}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

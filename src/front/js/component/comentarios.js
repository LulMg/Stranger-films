import React from "react";
import "../../styles/comentarios.css";

export default function Comments(props) {
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
          <p>Aquí va el usuario</p>
            <p

              id="message"
              name="message"
              placeholder="Insert your comment."
              rows="9"
            >La vida es dura pero mas dura es la verdura</p>
          </div>
        </div>
      </div>
    </div>
  );
}

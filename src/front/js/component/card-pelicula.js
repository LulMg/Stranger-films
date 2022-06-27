import React from "react";
import "../../styles/cardMovie.css";

export default function CardPelicula(props) {
  return (
    <div>
      <div
        className="tarjeta card text-light rounded mx-2"
        style={{ width: "17rem", height: "32rem" }}
      >
        <img className="card-img-top" src={props.poster} alt="movie-poster" />
        <div className="card-body">
          <div className="d-flex">
            <p>
              <strong>{props.averageVote}</strong>
            </p>
          </div>
          <div className="mx-1 botones rounded text-center">
            <button className="btn col text-light">
              <i className="fa fa-plus me-2"></i>Mi lista
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mb-2">
        <p className="card-title mt-3 titulo">{props.titulo}</p>
      </div>
    </div>
  );
}

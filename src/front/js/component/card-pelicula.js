import React from "react";
import "../../styles/cardMovie.css";

export default function CardPelicula(props) {
  return (
    <div>
      <div
        className="tarjeta card text-light rounded mx-2"
        style={{ width: "16rem", height: "32rem" }}
      >
        <img
          className="card-img-top"
          style={{ height: "24rem" }}
          src={props.poster}
          alt="movie-poster"
        />
        <div className="card-body">
          <div className="d-flex">
            <span>
              <strong>{props.averageVote}</strong>
            </span>
          </div>
          <div className="mx-1 mt-1 botones rounded text-center d-flex flex-column">
            <button className="btn text-light border border-dark">
              <i className="fa fa-plus me-2"></i>Favoritos
            </button>

            <button className="btn text-light border border-dark">
              <i className="fa fa-plus me-2"></i>Pendientes
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

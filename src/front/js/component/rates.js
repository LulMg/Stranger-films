import React from "react";
import "../../styles/rates.css";

export default function RatedMovie(props) {
  return (
    <div>
      <div className="lista rounded ms-2 my-3 p-4 d-flex">
        <img src={props.poster} className="poster me-2"></img>

        <span
          href="#"
          className="list-group-item-action text-light"
          aria-current="true"
        >
          <div className="d-flex w-100 justify-content-between mt-2">
            <h5 className="mb-1">{props.titulo}</h5>
            <small>
              <i className="fas fa-film fa-lg"></i>
            </small>
          </div>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `7${props.rate}%`,
              }}
              aria-valuemin="0"
              aria-valuemax="20"
            >
              {props.rate}
            </div>
          </div>
          <small className="d-flex flex-start mt-3">Votos</small>
          <div
            className="ms-5"
            style={{
              width: "10rem",
            }}
          >
            <div className="bg-gradient rounded">{props.vote_count}</div>
          </div>
          <div className="text-end me-3">
            <small className="text-secondary">{props.fecha}</small>
          </div>
        </span>
      </div>
    </div>
  );
}

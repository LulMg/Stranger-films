import React from "react";
import "../../styles/descripPoster.css";

export default function Detalles(props) {
  return (
    <div className="descrip p-3">
      <div className="d-flex justify-content-start">
        <h5>{props.title}</h5>
      </div>
      <div className="d-flex justify-content-start">
        <p>{props.description}</p>
      </div>
      <div className="d-flex justify-content-start">
        <button className="btn btn-danger">Trailer</button>
      </div>
    </div>
  );
}

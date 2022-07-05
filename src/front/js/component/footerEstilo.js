import React from "react";
import "../../styles/StrangerFilms.css";

export default function Esqueleto(props) {
  return (
    <div>
      <div className="tematica text-light container-fluid p-5 mt-2">
        <div className="text-center p-5">
          <h1 className="display-3">
            <strong className="texto">STRANGER FILMS</strong>
          </h1>
        </div>
        <h3 className="text-center pb-5 acerca texto">{props.subtitulo}</h3>
      </div>
      <div className="d-flex container mt-4">
        <div>
          <img className="image me-3" src={props.img1}></img>
          <img className="image me-3" src={props.img2}></img>
        </div>
        <div className="text-light bg-dark p-4">
          <p className="bg-gradient p-2">{props.texto}</p>
          <p className="text-center p-4">{props.texto2}</p>
          <h4 className="text-danger">{props.titulo}</h4>
          <div>{props.contenido}</div>

          <h6 className="text-center">
            Para crear tu cuenta en Stranger Films , ve a la página de registro.
          </h6>
        </div>
      </div>
    </div>
  );
}

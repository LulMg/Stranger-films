import React from "react";
import "../../styles/StrangerFilms.css";

export default function Stranger() {
  return (
    <div>
      <div className="tematica text-light container-fluid p-5 mt-2">
        <div className="text-center p-5">
          <h1 className="display-3">
            <strong className="texto">STRANGER FILMS</strong>
          </h1>
        </div>
        <h3 className="text-center pb-5 acerca">Acerca de nosotros</h3>
      </div>
      <div className="d-flex container mt-4">
        <div>
          <img
            className="image"
            src="https://d500.epimg.net/cincodias/imagenes/2020/12/31/lifestyle/1609408585_467254_1609408795_rrss_normal.jpg"
          ></img>
          <img
            className="image"
            src="https://torresvedrasweb.pt/abc/uploads/2021/03/variossc_reaberturacinemas-destaque-1.png"
          ></img>
        </div>
        <div className="text-light bg-dark p-4">
          <p className="bg-gradient p-2">
            Lanzado en línea en 2022, Stranger Films es la fuente más genial del
            mundo para contenido de cine y televisión, diseñada para ayudar a
            los fanáticos a explorar el mundo de las películas y los programas y
            decidir qué ver.
          </p>
          <p className="text-center p-4">
            Nuestra base de datos de búsqueda incluye millones de películas,
            programas de televisión y entretenimiento.
          </p>
          <h4 className="text-danger">Stranger Films te ayuda:</h4>
          <ul>
            <li>
              Refresca tu memoria sobre una película o programa en la punta de
              tu lengua
            </li>
            <li>Encuentra la mejor película o programa para ver</li>
            <li>
              Permite compartir tus conocimientos y opiniones sobre
              entretenimiento con la comunidad de fans más grande del mundo.
            </li>
            <li>Te entretiene mientras ves nuestro contenido</li>
          </ul>

          <h6 className="text-center">
            Para crear su cuenta de IMDb, vaya a la página de registro.
          </h6>
        </div>
      </div>
    </div>
  );
}

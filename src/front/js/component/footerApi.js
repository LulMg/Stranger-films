import React from "react";
import "../../styles/StrangerFilms.css";
import Esqueleto from "./footerEstilo";

export default function Api() {
  return (
    <div>
      <Esqueleto
        subtitulo="API"
        img1="https://play-lh.googleusercontent.com/IO3niAyss5tFXAQP176P0Jk5rg_A_hfKPNqzC4gb15WjLPjo5I-f7oIZ9Dqxw2wPBAg"
        img2="https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg"
        texto={`La base de datos de películas (TMDB) es una base de datos de
            películas y TV creada por la comunidad. Nuestra increíble comunidad
            ha agregado todos los datos desde 2008. El sólido enfoque
            internacional de TMDb y la amplitud de los datos son en gran medida
            incomparables y es algo de lo que estamos increíblemente orgullosos.
            En pocas palabras, vivimos y respiramos en comunidad y eso es
            precisamente lo que nos hace diferentes.`}
        titulo="Acceso a la API:"
        contenido={
          <ul>
            <li>Membresía</li>
            <li>Licencia</li>
            <li>Aceptar los términos y condiciones</li>
          </ul>
        }
      />
    </div>
  );
}

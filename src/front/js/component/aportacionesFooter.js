import React from "react";
import "../../styles/StrangerFilms.css";
import Esqueleto from "./footerEstilo";

export default function Aportaciones() {
  return (
    <div>
      <Esqueleto
        subtitulo="APORTACIONES"
        img1="https://d500.epimg.net/cincodias/imagenes/2020/12/31/lifestyle/1609408585_467254_1609408795_rrss_normal.jpg"
        img2="https://torresvedrasweb.pt/abc/uploads/2021/03/variossc_reaberturacinemas-destaque-1.png"
        texto={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`}
        titulo="Déjanos tu opinión y comentarios!"
      />
    </div>
  );
}

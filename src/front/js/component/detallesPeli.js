import React, { useContext } from "react";
import { Context } from "../store/appContext";
//import "../../styles/home.css";
import CardPelicula from "../component/card-pelicula";
import { useParams } from "react-router-dom";
import { objectOf } from "prop-types";

export const DetallesPeli = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  //<div className="generalBody">
  return store.peliculas.map(function (obj, index) {
    if (obj.id == params.theid) {
      //con.log("params = ", +params.theid + "id " + obj.id);
      console.log("OJITO SAM, hemos encontrado la pelicula");
      console.log(obj.title);
      console.log(obj);
      return <div></div>;
    }
  });
};

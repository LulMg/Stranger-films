import { useEffect, useContext } from "react";
import React from "react";
import { Context } from "../store/appContext";

export const Privado = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {}, []);
  return (
    <h1>
      {" "}
      {store.permiso
        ? "Acceso A ESPACIO PRIVADO CONCEDIDO"
        : "ACCESO DENEGADO 404 NO EXISTE"}
    </h1>
  );
};

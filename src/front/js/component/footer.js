import React, { Component } from "react";
import "../../styles/footer.css";
import logo from "../../img/logo.png";

export const Footer = () => (
  <footer className="footer mt-auto py-3 container">
    <div className="d-flex text-light text-center">
      <div>
        <img className="logo-footer mt-4 me-4" src={logo}></img>
      </div>
      <div className="m-2">
        <ul>
          <h5>Lo básico</h5>
          <li>Sobre Stranger Films</li>
          <li>Contacto</li>
          <li>API</li>
        </ul>
      </div>
      <div className="border ms-4"></div>
      <div className="m-2">
        <ul>
          <h5>Participa</h5>
          <li>Aportaciones</li>
          <li>Guía de aportaciones</li>
          <li>Añadir nueva película</li>
        </ul>
      </div>
      <div className="border ms-4"></div>
      <div className="m-2">
        <ul>
          <h5>Comunidad</h5>
          <li>Discusiones</li>
          <li>Contenidos</li>
          <li>Redes sociales</li>
        </ul>
      </div>
      <div className="border ms-4"></div>
      <div className="m-2">
        <ul>
          <h5 className="ps-4">Legal</h5>
          <li>Política de privacidad</li>
          <li>Términos de uso</li>
        </ul>
      </div>
    </div>
  </footer>
);

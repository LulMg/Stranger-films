import React, { Component } from "react";
import "../../styles/footer.css";
import logo from "../../img/logo.png";

export const Footer = () => (
  <footer className="footer mt-auto py-3 container mt-5">
    <div className="d-flex text-light text-center">
      <div>
        <img className="logo-footer mt-4 me-4" src={logo}></img>
      </div>
      <div className="m-2">
        <ul>
          <h5>Lo básico</h5>
          <li key={0}>Sobre Stranger Films</li>
          <li key={1}>Contacto</li>
          <li key={2}>API</li>
        </ul>
      </div>
      <div className="border ms-4"></div>
      <div className="m-2">
        <ul>
          <h5>Participa</h5>
          <li key={3}>Aportaciones</li>
          <li key={4}>Guía de aportaciones</li>
          <li key={5}>Añadir nueva película</li>
        </ul>
      </div>
      <div className="border ms-4"></div>
      <div className="m-2">
        <ul>
          <h5>Comunidad</h5>
          <li key={6}>Discusiones</li>
          <li key={7}>Contenidos</li>
          <li key={8}>Redes sociales</li>
        </ul>
      </div>
      <div className="border ms-4"></div>
      <div className="m-2">
        <ul>
          <h5 className="ps-4">Legal</h5>
          <li key={9}>Política de privacidad</li>
          <li key={10}>Términos de uso</li>
        </ul>
      </div>
    </div>
  </footer>
);

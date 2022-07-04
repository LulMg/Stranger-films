import React, { Component } from "react";
import "../../styles/footer.css";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="footer mt-auto py-3 container mt-5">
    <div className="d-flex text-light text-center">
      <div>
        <img className="logo-footer mt-4 me-4" src={logo}></img>
      </div>
      <div className="m-2">
        <ul>
          <h5>Lo básico</h5>
          <Link to="/StrangerFilms">
            <li key={0}>Sobre Stranger Films</li>
          </Link>
          <Link to="/Api">
            <li key={2}>API</li>
          </Link>
        </ul>
      </div>
      <div className="border ms-4"></div>
      <div className="m-2">
        <ul>
          <h5>Participa</h5>
          <Link to="/Aportaciones">
            <li key={3}>Aportaciones</li>
          </Link>
        </ul>
      </div>
      <div className="border ms-4"></div>
      <div className="m-2">
        <ul>
          <h5>Comunidad</h5>
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

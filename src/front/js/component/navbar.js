import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/navbar.css";

//funcion que retorna el NAVBAR
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex">
          <div>
            <Link to="/">
              <span className="navbar-brand mb-0 h1">
                <img className="logo" src={logo}></img>
              </span>
            </Link>
          </div>
          <div className="d-flex">
            <div className="ml-auto d-flex bg-tranparent bg-gradient rounded-pill me-3">
              <input
                className="border-0 ps-2 rounded-start buscar bg-transparent"
                type="search"
                placeholder="Buscar"
                id="search"
              />
              <button className="btn" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div className="divisor bg-light me-3"></div>
            <h6 className="text-light mt-1 me-2">iniciar sesión</h6>
          </div>
        </div>
      </nav>
      <div className="d-flex justify-content-center">
        <div className="d-flex">
          <a
            className="nav-link active px-5 py-3 mb-2 "
            aria-current="page"
            href="#"
          >
            Principal
          </a>
          <a
            className="nav-link border-start px-5 py-3 mb-2 border-danger"
            href="#"
          >
            Películas
          </a>
          <a
            className="nav-link border-start px-5 py-3 mb-2 border-danger"
            href="#"
          >
            Más
          </a>
          <a className="nav-link disabled border-start px-5 py-3 mb-2 border-danger">
            Disabled
          </a>
        </div>
      </div>
    </div>
  );
};

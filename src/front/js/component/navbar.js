import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/navbar.css";

//funcion que retorna el NAVBAR
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex">
        <div>
          <Link to="/">
            <span className="navbar-brand mb-0 h1">
              <img className="logo" src={logo}></img>
            </span>
          </Link>
        </div>
        <div className="collapse navbar-collapse me-5">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Principal
            </a>
            <a className="nav-link" href="#">
              Películas
            </a>
            <a className="nav-link" href="#">
              Más
            </a>
            <a className="nav-link disabled">Disabled</a>
          </div>
        </div>
        <div className="d-flex">
          <div className="ml-auto d-flex bg-danger rounded-pill me-3">
            <input
              className="border-0 ps-2 rounded-start bg-light"
              type="search"
              placeholder="Buscar"
              id="search"
            />
            <button className="btn" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="divisor bg-light me-3"></div>
          <h6 className="text-light mt-1">iniciar sesión</h6>
        </div>
      </div>
    </nav>
  );
};

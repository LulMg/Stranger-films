import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/navbar.css";
import { LogIn } from "../component/login";

//funcion que retorna el NAVBAR
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex">
          <div className="d-flex">
            <Link to="/">
              <span className="navbar-brand mb-0 h1">
                <img className="logo" src={logo}></img>
              </span>
            </Link>
            <div className="d-flex">
              <div className="d-flex">
                <a
                  className="nav-link active py-3 mt-2"
                  aria-current="page"
                  href="#"
                >
                  Principal
                </a>
                <div className="divisor bg-light mt-4"></div>

                <a className="nav-link py-3 mt-2 border-danger" href="#">
                  Películas
                </a>
                <div className="divisor bg-light mt-4"></div>

                <a className="nav-link py-3 mt-2" href="#">
                  Más
                </a>
              </div>
            </div>
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
            <h6 className="text-light mt-1 me-2" onClick={() => {}}>
              iniciar sesión
            </h6>
          </div>
        </div>
      </nav>
    </div>
  );
};

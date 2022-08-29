import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/navbar.css";
import { LogIn } from "../component/login";
import { useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
//funcion que retorna el NAVBAR
export const Navbar = () => {
  const [inputText, setInputText] = useState("");
  const { store, actions } = useContext(Context);
  const history = useHistory();

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
            <div className="d-flex"></div>
          </div>
          <div className="d-flex">
            <div className="ml-auto d-flex bg-tranparent bg-gradient rounded-pill me-3">
              <input
                className="border-0 ps-2 rounded-start buscar bg-transparent"
                type="search"
                value={inputText}
                placeholder="Buscar"
                id="search"
                onChange={(e) => setInputText(e.target.value)}
              />

              <button
                className="btn"
                type="submit"
                onClick={() => {
                  window.location.href = `/busqueda/${inputText}`;
                }}
              >
                <i className="fas fa-search text-light mt-2"></i>
              </button>
            </div>
            <div className="divisor bg-light me-3"></div>
            <h6 className="text-light mt-1 me-2">
              {localStorage.getItem("token") ? (
                <>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-gradient text-light"
                    >
                      <i className="far fa-user mx-3 "></i>
                      hola {store.userName}
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li className="dropdown-item">Favoritos</li>
                      <li className="dropdown-item">Pendientes</li>
                      <li>
                        <hr />
                      </li>
                      <li
                        className="text-center dropdown-item"
                        onClick={() => {
                          actions.logOut();
                        }}
                      >
                        Cerrar sesión
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Iniciar sesión
                </button>
              )}
            </h6>
          </div>
        </div>
      </nav>
      {/*MODAL DEL INICIO DE SESION*/}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog"></div>
        <LogIn />
      </div>
    </div>
  );
};

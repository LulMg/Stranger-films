import React, { useEffect, useState, useContext } from "react";
import "../../styles/login.css";
import logo from "../../img/logo.png";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions } = useContext(Context);
  // useEffect(() => {
  //   console.log(email, password);
  // }, [email, password]);
  return (
    <div className="container1">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-group px-2">
          <label htmlFor="exampleInputEmail1">Email address</label>

          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group px-2">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mx-3">
          <div className="form-group px-2">
            <Link to="/register">
              <a href="https://lulmg-strangerfilms-y7ik6qmo9n4.ws-eu51.gitpod.io/register">
                {" "}
                ¿Aún no te has registrado? Crear cuenta
              </a>
            </Link>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            onClick={() => {
              actions.logIn(email, password);
            }}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

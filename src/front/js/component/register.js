import React, { useEffect, useState, useContext } from "react";
import "../../styles/register.css";
import logo from "../../img/logo.png";
import { Context } from "../store/appContext";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { actions } = useContext(Context);

  useEffect(() => {
    console.log(username, email, password);
  }, [username, email, password]);

  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-group">
          <label htmlFor="exampleInputUsername1">Usuario</label>
          <input
            type="username"
            className="form-control"
            id="exampleInputUsername1"
            aria-describedby="usernameHelp"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            Introduce tu usuario. Debe ser único.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            Nunca compartiremos tu Email con nadie mas.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Cerrar Sesión
          </label>
        </div>
        <button
          type="submit"
          onClick={() => {
            actions.register(username, email, password);
          }}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

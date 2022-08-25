import React, { useEffect, useState, useContext } from "react";
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
    <div className="container bg-gradient p-5 mt-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-group1 mb-3">
          <p>
            <bold>Usuario</bold>
          </p>
          <input
            type="username"
            className="form-control"
            aria-describedby="usernameHelp"
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            Introduce tu usuario. Debe ser único.
          </small>
        </div>

        <div className="form-group2 mb-3">
          <p>
            <bold>Email</bold>
          </p>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            Nunca compartiremos tu Email con nadie mas.
          </small>
        </div>
        <div className="form-group3 mb-3">
          <p>
            <bold>Password</bold>
          </p>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Cerrar Sesión
          </label>
        </div>
        <div className="text-center d-grid gap-2 col-6 mx-auto">
          <button
            type="submit"
            onClick={() => {
              actions.register(username, email, password);
            }}
            className="btn btn-danger py-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

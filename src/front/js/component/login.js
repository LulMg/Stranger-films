import React, { useEffect, useState, useContext } from "react";
import "../../styles/login.css";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions } = useContext(Context);

  return (
    <div className="d-flex justify-content-center">
      <div className="container1">
        <form
        //onSubmit={(e) => {
        //  e.preventDefault();
        //}}
        >
          <div className="form-group px-2 text-light">
            <>Email address</>

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
              <div className="text-light p-2 d-flex justify-content-center">
                ¿Aún no te has registrado?
                <Link to="/register">
                  <p className="noAccount ps-2">
                    {/*{" "}*/}
                    <strong>CREAR CUENTA</strong>
                  </p>
                </Link>
              </div>
            </div>
            <div className="form-check text-end">
              <label className="form-check-label" htmlFor="exampleCheck1">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                Check me out
              </label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                onClick={() => {
                  actions.logIn(email, password);
                }}
                className="btn btn-lg btn-dark px-5"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

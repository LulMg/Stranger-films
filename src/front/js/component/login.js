import React, { useEffect, useState, useContext } from "react";
import "../../styles/login.css";
import logo from "../../img/logo.png";
import { Context } from "../store/appContext";

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {actions} = useContext(Context);
  useEffect(()=>{
    console.log(email,password)
  },[email,password])
  return (
    <div className="container">
      <form
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   setEmail(e.target[0].value);
        //   setPassword(e.target[1].value);
        //   actions.logIn(email,password);
        // }}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />
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
        <button onClick={()=>{actions.logIn(email, password)}} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

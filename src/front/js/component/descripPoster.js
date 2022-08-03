import React from "react";
import "../../styles/descripPoster.css";
import { Context } from "../store/appContext";
import { useContext } from "react";
//COMPONENTE TRAILER
import Trailer from "./pupUpTrailer";
import { objectOf } from "prop-types";
import { Link } from "react-router-dom";

export default function Detalles(props) {
  const { store, actions } = useContext(Context);
  return (
    <div className="descrip m-3 p-3" style={{ width: "30rem" }}>
      <div
        className="d-flex justify-content-start glitch"
        style={{ width: "50rem", fontFamily: "fantasy" }}
      >
        <span>{props.title}</span>
      </div>
      <div
        className="p-3 rounded"
        style={{
          width: "25rem",
          height: "5rem",
          overflow: "hidden",
          background: "linear-gradient(#322F2F, rgba(0,0,0,0.0))",
        }}
      >
        <p className="text-light">{props.description}</p>
      </div>
      <div className="d-flex justify-content-center m-3">
        <Link to={"/detalles/" + props.id}>
          <button className="btn btn-dark px-5 me-5">Ver mas</button>
        </Link>
      </div>
    </div>
  );
}
//<img className="gif mt-5" src={giphy}></img>

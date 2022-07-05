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
    <div className="descrip p-3 px-5 mx-5 mt-3">
      <div
        className="d-flex justify-content-start mt-5 glitch"
        style={{ width: "28rem", fontFamily: "fantasy" }}
      >
        <span>{props.title}</span>
      </div>
      <div className=" bg-gradient p-3 rounded" style={{ width: "30rem" }}>
        <p>{props.description}</p>
      </div>
      <div className="d-flex justify-content-start">
        <Link to={"/detalles/" + props.id}>
          <button>Ver mas</button>
        </Link>
      </div>
    </div>
  );
}
//<img className="gif mt-5" src={giphy}></img>

import React from "react";
import "../../styles/StrangerFilms.css";

export default function Api() {
  return (
    <div className="container texto">
      <div className="tematica text-light container-fluid p-5 mt-2">
        <div className="text-center p-5">
          <h1 className="display-3">
            <strong className="texto">STRANGER FILMS</strong>
          </h1>
        </div>
        <h1 className="text-center pb-5 acerca">
          <strong>API</strong>
        </h1>
      </div>
      <div className="d-flex mt-2">
        <div>
          <img src="https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg"></img>
        </div>
      </div>
    </div>
  );
}

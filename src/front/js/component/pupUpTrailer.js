import React, { useState } from "react";
import "../../styles/pupUpTrailer.css";

export default function Trailer(props) {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <div className="Trailer">
      <button
        className="btn btn-danger"
        onClick={openModal}
        data-bs-toggle="modal"
      >
        TRAILER
        {modal ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal-content" modal={modal}>
                <i
                  class="fas fa-times-circle fa-3x text-light modal__close"
                  onClick={setModal}
                ></i>
                <div>
                  <h1>{props.tituloPeli}</h1>
                  <h1>{props.trailerTitulo}</h1>
                  {console.log(props)}
                </div>
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : null}
                  <div>
                    <iframe
                      className="modal__video-style"
                      onLoad={spinner}
                      loading="lazy"
                      width="800"
                      height="500"
                      src={props.trailer}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </button>
    </div>
  );
}

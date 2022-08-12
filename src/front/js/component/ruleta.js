import React, { useEffect, useState } from "react";
import "../../styles/ruleta.css";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { Wheel } from "react-custom-roulette";
import { Link } from "react-router-dom";

export default function Ruleta() {
  const { store, actions } = useContext(Context);
  const [prize, showPrize] = useState(false);
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [ruleta, showRuleta] = useState(false);
  const data = store.ruleta?.map((obj, i) => {
    return obj;
  });

  useEffect(() => {
    ruleta && console.log(store.ruleta);
  }, [ruleta]);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div className="ruleta row">
      <button
        className="btn btn-danger btn-lg"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        onClick={() => {
          actions.rodarRuleta();
          showRuleta(true);
        }}
      >
        cargar ruleta
      </button>

      {ruleta && (
        <>
          <div className="d-flex justify-content-center mt-5">
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={store.ruleta}
              backgroundColors={["#eeeaea", "#df3428"]}
              textColors={["#e60808", "#ffffff"]}
              onStopSpinning={() => {
                setMustSpin(false);
              }}
            />
          </div>
          <div className="text-center mt-3">
            <button
              className="btn btn-danger btn-lg"
              data-bs-toggle="modal"
              onClick={() => {
                handleSpinClick();
                setTimeout(() => {
                  showPrize(true);
                  const myModal = new bootstrap.Modal(
                    document.getElementById("exampleMo")
                  );
                  myModal.show();
                }, 12000);
              }}
            >
              A rodar!!
            </button>
            <h1>{prize && store.ruleta[prizeNumber].option}</h1>
            <h1>{prize && store.ruleta[prizeNumber].indice}</h1>
            {console.log(store.peliculas[store.ruleta[prizeNumber].indice])}
            {console.log(
              store.peliculas[store.ruleta[prizeNumber].indice].overview
            )}
          </div>

          {/*MODAL*/}

          <div
            className="modal fade"
            id="exampleMo"
            tabIndex="-1"
            aria-labelledby="exampleMoLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content modalTama">
                <div className="modal-header">
                  <h5 className="modal-title text-light">
                    {store.peliculas[store.ruleta[prizeNumber].indice].title}
                  </h5>
                  <button
                    type="button"
                    className="btn btn-close colorBoton"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body text-light contenidoModal">
                  <div className="d-flex">
                    <div>
                      <img
                        className="imgModal"
                        src={`https://image.tmdb.org/t/p/w500/${
                          store.peliculas[store.ruleta[prizeNumber].indice]
                            .poster_path
                        }`}
                      ></img>
                    </div>
                    <div className="text-start ms-2 overview">
                      {
                        store.peliculas[store.ruleta[prizeNumber].indice]
                          .overview
                      }
                    </div>
                  </div>
                  <div className="text-center">
                    <Link
                      to={
                        "/detalles/" +
                        store.peliculas[store.ruleta[prizeNumber].indice].id
                      }
                    >
                      <button type="button" className="btn btn-dark m-4 px-5">
                        Ver mas
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

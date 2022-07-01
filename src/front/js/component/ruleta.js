import React, { useEffect, useState } from "react";
import "../../styles/ruleta.css";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { Wheel } from "react-custom-roulette";

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
              onClick={() => {
                handleSpinClick();
                setTimeout(() => {
                  showPrize(true);
                }, 12000);
              }}
            >
              A rodar!!
            </button>
            <p className="text-light">
              {prize && store.ruleta[prizeNumber].option}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

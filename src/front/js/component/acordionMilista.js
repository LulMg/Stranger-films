import React from "react";

export default function MiLista() {
  return (
    <div>
      <div className="mt-5 text-light">
        <div className="d-flex mt-2">
          <div className="divisor bg-light mx-2 ms-5"></div>
          <h4>Mi lista de seguimiento</h4>
        </div>
        <div
          className="mt-5 bg-gradient rounded p-3 text-center"
          style={{ width: "21rem" }}
        >
          <i className="fas fa-list fa-2x mb-2"></i>

          <ul className="mt-4">
            <th>
              <h5 className="bg-dark p-2 rounded">Favoritos</h5>
            </th>
            <li>peli1sdhaiwfgaiowgefa</li>
            <li>peli2dsfasgfasegfas</li>
          </ul>
          <ul className="mt-4">
            <th>
              <h5 className="bg-dark p-2 rounded">Pendientes</h5>
            </th>
            <li>asjkdfgashilgsiaer</li>
            <li>asjkdfgashilgsiaer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

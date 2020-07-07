import React from "react";
import PropTypes from "prop-types";

const Clima = ({ resultado }) => {
  //extraer valores
  const { main, name } = resultado;
  if (!name) return null;

  //grados kelvin
  const Kelvin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>El clima de {name} es: </h2>
        <p className="temperatura">
          {parseFloat(main.temp - Kelvin, 10).toFixed(2)}{" "}
          <span> &#x2103; </span>
        </p>
        <p className="">
          Temperatura Maxima:
          {parseFloat(main.temp_max - Kelvin, 10).toFixed(2)}{" "}
          <span> &#x2103; </span>
        </p>
        <p className="">
          Temperatura Minima:
          {parseFloat(main.temp_min - Kelvin, 10).toFixed(2)}{" "}
          <span> &#x2103; </span>
        </p>
      </div>
    </div>
  );
};

Clima.propTypes = {
  resultado: PropTypes.object.isRequired,
};

export default Clima;

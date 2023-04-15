import React, { useState } from "react";

function Kilometer(props) {
  const [kilo, setKilo] = useState(0);
  function convertKilo(e) {
    e.preventDefault();
    setKilo(e.target.value);
    props.calculateCM(e.target.value * 100000);
    props.calculateM(e.target.value * 1000);
    props.calculateFt(e.target.value * 3280.84);
    props.calculateIn(e.target.value * 39370.1);
  }
  return (
    <div>
      <h2>kilometer</h2>
      <input value={kilo} onChange={convertKilo} />
    </div>
  );
}

export default Kilometer;

import React, { useState } from "react";

function Inches(props) {
  const [inches, setInches] = useState("");

  function convertInch(e) {
    e.preventDefault();
    setInches(e.target.value);
    props.calculateCM(e.target.value * 2.54);
    props.calculateM(e.target.value * 0.0254);
    props.calculateFt(e.target.value * 0.0833333334);
    props.calculateIn(e.target.value);
  }
  return (
    <div>
      <h2>inches</h2>
      <input value={inches} onChange={convertInch} placeholder="0" />
    </div>
  );
}

export default Inches;

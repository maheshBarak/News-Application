import React from "react";
import "./button.css";

/* function Buttons() {
  const btns = {
    display: "flex",
    gap: "10px",
    marginInline: "20px",
  };
  return (
    <div style={btns}>
      <p className="para1">Recently uploaded</p>
      <p className="para2">Popular</p>
    </div>
  );
} */

function Buttons() {
  const btn = {
    border: "2px solid black",
    display: "flex",
    justifyContent: "center",
    width: "fit-content",
    padding: "5px 15px",
  };
  return (
    <div className="btnn">
      <p style={btn}>Learn more</p>
    </div>
  );
}
export default Buttons;

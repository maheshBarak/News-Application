import React from "react";
import Buttons from "./Buttons";
import "./card.css";

/* function Card(props) {
  // destructuring of props

  const image = {
    width: "100%",
  };
  return (

    <div className="cardStyle">
      <img className="image" style={image} src={props.image} alt="" />

      <div className="caption">
        <h3>Learn React with this video.</h3>
        <p>{props.name}</p>
      </div>
    </div>
  );
} */

function Card() {
  return (
    <div className="card">
      <h2>Card sorting</h2>
      <p>Discover how people group nad label information.Discover how people group nad label information</p>
      <Buttons />
    </div>
  );
}

export default Card;

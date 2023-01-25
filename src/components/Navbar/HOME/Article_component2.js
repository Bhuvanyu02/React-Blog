import React from "react";
import "./Article_component.css";
import img from "./mr_beast.webp";
export default function Article_component2(props) {
  return (
    <div className="art">
      <div>
        <img src={img} alt="Image5" />
      </div>
      <div className="art3">
        <h3>{props.head}</h3>
        <p>{props.para}</p>
      </div>
    </div>
  );
}

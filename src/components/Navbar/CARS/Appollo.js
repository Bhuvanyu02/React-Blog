import React from "react";
import "./CarPost.css";
import img8 from "./appollo.jpg";
export default function Appollo(props) {
    return (
    <div className="post23">
        <div className="cars_div2">
        <img src={img8} alt="Image" />
      <h2>{props.text}</h2>
        </div>
      <h3>{props.text2}</h3>
    </div>
  );
}

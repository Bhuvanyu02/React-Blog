import React from "react";
import "./CarPost.css";
import img8 from "./aston2.jpg";
export default function Vulcan(props) {
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

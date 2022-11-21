import React from "react";
import "./CarPost.css";
import img8 from "./lambo2.jpg";
import { Link } from "react-router-dom";
export default function Lambo2(props) {
    return (
    <div className="post23">
        <div className="cars_div2">
        <Link to="/cars_comp"><img src={img8} alt="Image" /></Link>
      <h2>{props.text}</h2>
        </div>
      <h3>{props.text2}</h3>
    </div>
  );
}

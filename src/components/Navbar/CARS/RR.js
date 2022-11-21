import React from "react";
import { Link } from "react-router-dom";
import "./NewPost.css";
import img7 from "./img7.jpg";
export default function RR(props) {
    return (
    <div className="post2">
      <Link to="/cars_comp"><img src={img7} alt="Image" /></Link>
      <h2>{props.text}</h2>
      <h3>{props.text2}</h3>
    </div>
  );
}

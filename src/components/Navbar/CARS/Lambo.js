import React from "react";
import "./NewPost.css";
import img8 from "./img8.jpg";
import { Link } from "react-router-dom";
export default function Lambo(props) {
    return (
    <div className="post2">
      <Link to="/cars_comp2"><img src={img8} alt="Image" /></Link>
      <h2>{props.text}</h2>
      <h3>{props.text2}</h3>
    </div>
  );
}

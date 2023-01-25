import React from "react";
import "./NewPost.css";
import img10 from "./img10.jpeg";
import { Link } from "react-router-dom";
export default function Buggati(props) {
    return (
    <div className="post2">
      <Link to="/cars_comp3"><img src={img10} alt="Image" /></Link>
      <h2>{props.text}</h2>
      <h3>{props.text2}</h3>
    </div>
  );
}

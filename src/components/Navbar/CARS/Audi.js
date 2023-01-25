import React from "react";
import "./NewPost.css";
import img12 from "./img12.jpg";
import { Link } from "react-router-dom";
export default function Buggati(props) {
    return (
    <div className="post2">
      <Link to="/cars_comp5"><img src={img12} alt="Image" /></Link>
      <h2>{props.text}</h2>
      <h3>{props.text2}</h3>
    </div>
  );
}

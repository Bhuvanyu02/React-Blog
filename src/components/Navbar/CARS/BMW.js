import React from "react";
import "./NewPost.css";
import img13 from "./img13.jpg";
import { Link } from "react-router-dom";
export default function Buggati(props) {
    return (
    <div className="post2">
      <Link to="/cars_comp6">
      <img src={img13} alt="Image" />
      </Link>
      <h2>{props.text}</h2>
      <h3>{props.text2}</h3>
    </div>
  );
}

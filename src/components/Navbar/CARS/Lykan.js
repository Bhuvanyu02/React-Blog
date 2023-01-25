import React from "react";
import "./NewPost.css";
import img11 from "./img11.jpg";
import { Link } from "react-router-dom";
export default function Lykan(props) {
    return (
    <div className="post2">
      <Link to="/cars_comp4"><img src={img11} alt="Image" /></Link>
      <h2>{props.text}</h2>
      <h3>{props.text2}</h3>
    </div>
  );
}

import React from "react";
 import img4 from "./dna.jpeg";
import "./l_grid.css";
export default function L_grid() {
  return (
    <div>
      <div className="l_grid_row_1">
        {/*3 COMPONENTS*/}
        <img src={img4} className="img4" alt="Image4" />
        <h3>
          Genetics combined with many years of schooling might cause Myopia:
          Research  
        </h3>
      </div>
    </div>
  );
}

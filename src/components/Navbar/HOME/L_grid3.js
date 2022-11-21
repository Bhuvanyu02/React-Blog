import React from "react";
import img4 from "./market.webp";
import "./l_grid.css";
export default function L_grid() {
  return (
    <div>
      <div className="l_grid_row_1">
        {/*3 COMPONENTS*/}
        <img src={img4} className="img4" alt="Image4" />
        <h3>Market alert: Sensex opens in red at 61,320, Nifty falls to 18,210</h3>
      </div>
    </div>
  );
}

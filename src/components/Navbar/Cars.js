import React from "react";
import "./CARS/Cars.css";
import Lambo from "./CARS/Lambo";
import RR from "./CARS/RR";
import Buggati from "./CARS/Buggati";
import Lykan from "./CARS/Lykan";
import Audi from "./CARS/Audi";
import BMW from "./CARS/BMW";
export default function Cars() {
  return (
    <div className="cars">
      <RR text={"Rolls Royce Phantom"} />
      <Lambo text={"Lamborghini Veneno"} />
      <Buggati text={"Bugatti Divo"} />
      <Lykan text={"Lykan Hypersport"} />
      <Audi text={"Audi R8"} />
      <BMW text={"BMW i8"} />
    </div>
  );
}

import React from "react";
import "./Cars_comp.css";
import Urus from "./Urus";
import F250 from "./F250";
import Lambo3 from "./Lambo3";
export default function Cars_comp6() {
  return (
    <div className="cars2">
      <F250 text={"Ferrarri 250 GTO"}
        text2={
          "Top Speed 251 Kmph   Acceleration (0-100 kmph) 3.8 seconds   Engine 5000 cc, 8 Cylinders In V Shape  4 Valves/Cylinder  Engine Type 5L V8 engine     Fuel Type Petrol     Max Power (bhp@rpm) 500 bhp @ 3000 rpm      Max Torque (Nm@rpm) 900 Nm @ 1200 rpm       Mileage (ARAI) 4.1 kmpl"
        }/>
      <Lambo3
        text={"Lamborghini Mirua"}
        text2={
          "Top Speed 300 Kmph,   Acceleration (0-100 kmph) 2.4 seconds,   Engine 3500 cc, 8 Cylinders In V Shape  4 Valves/Cylinder,  Engine Type 3.5L V8 engine,     Fuel Type Petrol,     Max Power (bhp@rpm) 763 bhp @ 5000 rpm,      Max Torque (Nm@rpm) 900 Nm @ 1700 rpm,       Mileage (ARAI) 5.1 kmpl"
        }
      />
      <Urus
        text={"Lamborghini Urus"}
        text2={
          "Top Speed 300 Kmph,   Acceleration (0-100 kmph) 2.4 seconds,   Engine 3500 cc, 8 Cylinders In V Shape  4 Valves/Cylinder,  Engine Type 3.5L V8 engine,     Fuel Type Petrol,     Max Power (bhp@rpm) 763 bhp @ 5000 rpm,      Max Torque (Nm@rpm) 900 Nm @ 1700 rpm,       Mileage (ARAI) 5.1 kmpl"
        }
      />

      
    </div>
  );
}

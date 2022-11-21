import React from "react";
import Bently from "./Bently";
import "./Cars_comp.css";
import Ferrari from "./Ferrarri";
import Ford from "./Ford";
export default function Cars_comp2() {
  return (
    <div className="cars2">
      <Ford text={"Ford GT40"}
        text2={
          "Top Speed 251 Kmph   Acceleration (0-100 kmph) 3.8 seconds   Engine 5000 cc, 8 Cylinders In V Shape  4 Valves/Cylinder  Engine Type 5L V8 engine     Fuel Type Petrol     Max Power (bhp@rpm) 500 bhp @ 3000 rpm      Max Torque (Nm@rpm) 900 Nm @ 1200 rpm       Mileage (ARAI) 4.1 kmpl"
        }/>
      <Ferrari
        text={"Ferrari 488"}
        text2={
          "Top Speed 300 Kmph,   Acceleration (0-100 kmph) 2.4 seconds,   Engine 3500 cc, 8 Cylinders In V Shape  4 Valves/Cylinder,  Engine Type 3.5L V8 engine,     Fuel Type Petrol,     Max Power (bhp@rpm) 763 bhp @ 5000 rpm,      Max Torque (Nm@rpm) 900 Nm @ 1700 rpm,       Mileage (ARAI) 5.1 kmpl"
        }
      />
      <Bently
        text={"Bently Flying Spur"}
        text2={
          "Top Speed 450 Kmph   Acceleration (0-100 kmph) 2 seconds   Engine 8000 cc, 16 Cylinders In W Shape  4 Valves/Cylinder  Engine Type 8L W16 engine     Fuel Type Petrol     Max Power (bhp@rpm) 1500 bhp @ 3000 rpm      Max Torque (Nm@rpm) 900 Nm @ 1200 rpm       Mileage (ARAI) 4.1 kmpl"
        }
      />
      
    </div>
  );
}

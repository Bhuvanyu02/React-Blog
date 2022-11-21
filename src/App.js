import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Navbar/Home";
import Food from "./components/Navbar/Food";
import Cars from "./components/Navbar/Cars";
import Cars_comp from "./components/Navbar/CARS/Cars_comp";
import Cars_comp2 from "./components/Navbar/CARS/Cars_comp2";
import Cars_comp3 from "./components/Navbar/CARS/Cars_comp3";
import Cars_comp4 from "./components/Navbar/CARS/Cars_comp4";
import Cars_comp5 from "./components/Navbar/CARS/Cars_comp5";
import Cars_comp6 from "./components/Navbar/CARS/Cars_comp6";
// REACT PROJECT
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/food" element={<Food/>} />
          <Route path="/cars_comp" element={<Cars_comp/>}/>
          <Route path="/cars_comp2" element={<Cars_comp2/>}/>
          <Route path="/cars_comp3" element={<Cars_comp3/>}/>
          <Route path="/cars_comp4" element={<Cars_comp4/>}/>
          <Route path="/cars_comp5" element={<Cars_comp5/>}/>
          <Route path="/cars_comp6" element={<Cars_comp6/>}/>
          
          
          
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

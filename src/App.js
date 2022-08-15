import React, { useEffect, useState } from "react"
import ReactDom from "react-dom"
import {HashRouter as Router,Link,Route,Routes} from "react-router-dom"
import Home from "./Pages/Home"
import CareerPage from "./Pages/CareerPage"
import CareerForm from "./Pages/CareerForm"
import Aos from "aos"
import "aos/dist/aos.css"

import {animateScroll as scroll} from "react-scroll";
const App=()=> {
    Aos.init({
      duration: 2500,
      delay: 400,
  });
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/CareerPage" element={<CareerPage authed={true}/>}/>
          <Route path="/CareerForm" element={<CareerForm authed={true}/>}/>
        </Routes>
      </Router>
  );
}
export default App;

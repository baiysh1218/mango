import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../components/AboutUs/AboutUs";
import Intro from "../components/Intro/Intro";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
};

export default Routing;

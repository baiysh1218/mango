import React from "react";
import { Routes, Route } from "react-router-dom";
import Intro from "../components/Intro/Intro";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
    </Routes>
  );
};

export default Routing;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Intro from "../components/Intro/Intro";
import Main from "../components/Main/Main";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      {/* <Route path="/" element={<Main />} /> */}
    </Routes>
  );
};

export default Routing;

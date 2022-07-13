import React from "react";
import PreFooter from "../PreFooter/PreFooter";

const Intro = () => {
  return (
    <div className="container">
      <PreFooter />
import Video from "../Media/pexels-taryn-elliott-5363146.mp4";
import img1 from "../Media/medsummer-logo.svg";
import "../Intro/Intro.css";
import Main from "../Main/Main";
const Intro = () => {
  return (
    <div className="container">
      <div className="intro__video">
        <video autoPlay muted loop src={Video}></video>
        <div className="intro__block">
          <div className="intro__img-block">
            <img className="intro__img-back" src={img1} alt="" />
          </div>
          <button className="intro__btn">Узнать больше</button>
        </div>
      </div>
      <Main />
    </div>
  );
};

export default Intro;

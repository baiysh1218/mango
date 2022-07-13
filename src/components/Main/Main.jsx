import React from "react";
import "../Main/main.css";
import main_img1 from "../Media/main_img1.jpg";
import main_img2 from "../Media/main_img2.jpg";
import main_img3 from "../Media/main_img3.jpg";
import main_img4 from "../Media/main_img4.jpg";
import main_img7 from "../Media/main_img7.jpg";
import main_img6 from "../Media/main_img6.jpg";

const Main = () => {
  return (
    <div className="container">
      <div className="main__content">
        <div className="main__content_first">
          <div className="main__content_1">
            {/* <img className="main-intro-img" src={main_img1} alt="" /> */}
            <h1>
              Accessories <br />
              Edition
            </h1>
            <button className="main__btn">Узнать больше</button>
          </div>

          <img width={"33.3%"} src={main_img2} alt="" />
          <img width={"33.3%"} src={main_img3} alt="" />
        </div>
        <div className="main__content_second">
          <img width={"33.3%"} src={main_img4} alt="" />
          <img width={"33.3%"} src={main_img7} alt="" />
          <img width={"33.3%"} src={main_img6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;

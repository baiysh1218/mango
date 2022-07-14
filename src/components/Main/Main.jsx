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
            <h1>
              Accessories <br />
              Edition
            </h1>
            <button className="main__btn">Узнать больше</button>
          </div>
          <div className="main__content_2">
            <h1>
              White <br />
              Summer
            </h1>
            <button className="main__btn">Узнать больше</button>
          </div>
          <div className="main__content_3">
            <h1>
              Denim Shorts
              <br />
              Guide
            </h1>
            <button className="main__btn">Узнать больше</button>
          </div>
        </div>
        <div className="main__content_second">
          <div className="main__content_4">
            <h1>
              Платья и
              <br />
              Комбинезоны
            </h1>
            <button className="main__btn">Узнать больше</button>
          </div>
          <div className="main__content_5">
            <h1>Рубашки</h1>
            <button className="main__btn">Узнать больше</button>
          </div>
          <div className="main__content_6">
            <h1>Обувь</h1>
            <button className="main__btn">Узнать больше</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

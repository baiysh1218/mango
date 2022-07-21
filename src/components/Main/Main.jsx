import React from "react";
import "../Main/main.css";
import main_img1 from "../Media/main_img1.jpg";
import main_img2 from "../Media/main_img2.jpg";
import main_img3 from "../Media/main_img3.jpg";
import main_img4 from "../Media/main_img4.jpg";
import main_img7 from "../Media/main_img7.jpg";
import main_img6 from "../Media/main_img6.jpg";
import MainFooter from "../MainFooter/MainFooter";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    // <div className="container">
    <div className="main__content">
      <div className="main-content-block">
        <div className="main__content_first">
          <div className="main__content_1">
            <h1>посмотреть продукты</h1>
            <button
              onClick={() => navigate("/products-list")}
              className="main__btn">
              Узнать больше
            </button>
          </div>
          <div className="main__content_2">
            <h1>посмотреть продукты</h1>
            <button
              onClick={() => navigate("/products-list")}
              className="main__btn">
              Узнать больше
            </button>
          </div>
          <div className="main__content_3">
            <h1>посмотреть продукты</h1>
            <button
              onClick={() => navigate("/products-list")}
              className="main__btn">
              Узнать больше
            </button>
          </div>
        </div>
        {/* nvkfn */}
        <div className="main__content_second">
          <div className="main__content_4">
            <h1>посмотреть продукты</h1>
            <button
              onClick={() => navigate("/products-list")}
              className="main__btn">
              Узнать больше
            </button>
          </div>
          <div className="main__content_5">
            <h1>посмотреть продукты</h1>
            <button
              onClick={() => navigate("/products-list")}
              className="main__btn">
              Узнать больше
            </button>
          </div>
          <div className="main__content_6">
            <h1>посмотреть продукты</h1>
            <button
              onClick={() => navigate("/products-list")}
              className="main__btn">
              Узнать больше
            </button>
          </div>
        </div>
        {/* ncnkdl */}
      </div>
    </div>
    // </div>
  );
};

export default Main;

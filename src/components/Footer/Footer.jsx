import React from "react";
import { Link } from "react-router-dom";
import "../Footer/Footer.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div>
      <div className="footer-intro-title-block">
        <div className="footer-intro-title">
          <h1 className="footer-intro-h1">Женское</h1>
        </div>
        <div className="footer-intro-main-block">
          <div className="footer-intro-content">
            <div className="footer-content">
              <h3 className="footer-intro-h3">Одежда</h3>
            </div>
            <div>
              <p className="footer-content-p">Accessories Edition</p>
              <p className="footer-content-p">White Summer</p>
              <p className="footer-content-p">Denim Shorts Guide</p>
              <p className="footer-content-p">Платья и комбинезоны</p>
              <p className="footer-content-p">Рубашки</p>
              <p className="footer-content-p">Обувь</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section-block">
        <div className="footer-section-content">
          <h4 className="footer-intro-h4">регистрация</h4>
        </div>
        <div className="footer-section-icon">
          <FacebookIcon className="footer-icons" />
          <TwitterIcon className="footer-icons" />
          <InstagramIcon className="footer-icons" />
          <PinterestIcon className="footer-icons" />
          <YouTubeIcon className="footer-icons" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

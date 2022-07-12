import React from "react";

import "./Header.css";

import SearchIcon from "@mui/icons-material/Search";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="navber-background">
      <div className="container">
        <div className="navbar-block">
          <div></div>
          <div className="navbar-logo-block">
            <img
              className="logo-mango-navbar"
              src="https://st.mngbcn.com/images/headerNew/logos/mango.svg"
              alt=""
            />
          </div>
          <div className="navbar-block-icons">
            <div className="navbar-icon-content-block">
              <IconButton>
                <SearchIcon className="navbar-icon" />
              </IconButton>
              <p className="navbar-icon-p">поиск</p>
            </div>
            <div className="navbar-icon-content-block">
              <IconButton>
                <PermIdentityIcon className="navbar-icon" />
              </IconButton>
              <p className="navbar-icon-p">вход</p>
            </div>
            <div className="navbar-icon-content-block">
              <IconButton>
                <FavoriteBorderIcon className="navbar-icon" />
              </IconButton>
              <p className="navbar-icon-p">избранные</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

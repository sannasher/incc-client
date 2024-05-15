// src/components/maincomponents/NavigationComponents/Menu.js

import React from "react";
import MenuItem from "./MenuItem";
import "./Menu.css";

const Menu = () => {
  let url = "";
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    url = `incc-client`;
  } else {
    url = `https://sannasher.github.io/incc-client`;
  }

  return (
    <div className="navlist">
      <div className="menu-item-container home-menu-item">
        <MenuItem name="home" to={`${url}/`} />
      </div>
      <div className="menu-item-container about-menu-item">
        <MenuItem name="about" to={`${url}/about`} />
      </div>
      <div className="menu-item-container calendar-menu-item">
        <MenuItem name="calendar" to={`${url}/calendar`} />
      </div>
      <div className="menu-item-container admin-authentication-menu-item">
        <MenuItem
          name="admin authentication"
          to={`${url}/admin-authentication`}
        />
      </div>
    </div>
  );
};

export default Menu;

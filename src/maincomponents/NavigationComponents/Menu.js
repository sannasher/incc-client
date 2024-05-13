// src/components/maincomponents/NavigationComponents/Menu.js

import React from 'react';
import MenuItem from './MenuItem';
import './Menu.css';

const Menu = () => {
  return (
    <div className="navlist">
      <div className="menu-item-container home-menu-item">
        <MenuItem name="home" to="/" />
      </div>
      <div className="menu-item-container about-menu-item">
        <MenuItem name="about" to="/about" />
      </div>
      <div className="menu-item-container calendar-menu-item">
        <MenuItem name="calendar" to="/calendar" />
      </div>
      <div className="menu-item-container admin-authentication-menu-item">
        <MenuItem name="admin authentication" to="/admin-authentication" />
      </div>
    </div>
  );
};

export default Menu;

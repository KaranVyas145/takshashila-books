import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = () => {
  return (
    <div className="Navigation">
      <h3>Takashila</h3>
      <div className="NavItems">
        <NavLink to="/">
          <NavigationItem name="Home" />
        </NavLink>
        <NavigationItem name="Genre" />
        <NavigationItem name="About" />
        <NavigationItem name="Contact Us" />
        <NavLink to="/auth">
          <NavigationItem name="Auth" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;

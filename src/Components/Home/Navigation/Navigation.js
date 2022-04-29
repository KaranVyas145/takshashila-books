import React from "react";
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const Navigation = (props) => {
  let navItems = (
    <div className="NavItems">
      <NavigationItem name="About" />
      <NavigationItem name="Contact Us" />
      <NavLink to="/auth">
        <NavigationItem name="Auth" />
      </NavLink>
    </div>
  );

  // console.log(props.isAuthenticated);

  if (props.isAuthenticated) {
    navItems = (
      <div className="NavItems">
        <NavLink to="/">
          <NavigationItem name="Home" />
        </NavLink>
        <NavigationItem name="Genre" />
        <NavLink to="/about">
          <NavigationItem name="About" />
        </NavLink>
        <NavigationItem name="Contact Us" />
        <NavLink to="/auth/logout">
          <NavigationItem name="Logout" />
        </NavLink>
      </div>
    );
  }
  return (
    <div className="Navigation">
      <h3>Takashila</h3>
      {navItems}
    </div>
  );
};

export default Navigation;

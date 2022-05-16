import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavigationItem from "./NavigationItem/NavigationItem";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Navigation = (props) => {
  let navItems = (
    <div className="NavItems">
      <NavLink to="/about">
        <NavigationItem name="About" />
      </NavLink>
      <NavLink to="/contact">
        <NavigationItem name="Contact Us" />
      </NavLink>
      <NavLink to="/auth">
        <NavigationItem name="Auth" />
      </NavLink>
    </div>
  );

  if (props.isAuthenticated) {
    navItems = (
      <div className="NavItems">
        <NavLink to="/" className="navlink">
          <NavigationItem name="Home" />
        </NavLink>
        <NavLink to="/about">
          <NavigationItem name="About" />
        </NavLink>
        <NavLink to="/contact">
          <NavigationItem name="Contact Us" />
        </NavLink>
        <NavLink to="/auth/logout">
          <NavigationItem name="Logout" />
        </NavLink>
      </div>
    );
  }

  if (props.isAdmin) {
    navItems = (
      <div className="NavItems">
        <NavLink style={{ textDecoration: "none" }} to="/">
          <NavigationItem name="Home" />
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/about">
          <NavigationItem name="About" />
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/contact">
          <NavigationItem name="Contact Us" />
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/admin">
          <NavigationItem name="Admin" />
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/auth/logout">
          <NavigationItem name="Logout" />
        </NavLink>
      </div>
    );
  }
  return (
    <div className="Navigation">
      <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
        <h3>Hooked</h3>
      </NavLink>
      {navItems}
    </div>
  );
};

export default Navigation;

import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import NavigationItem from "./NavigationItem/NavigationItem";

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
        <NavLink to="/"className="navlink">
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

  if(props.isAdmin){
    navItems=(
      <div className="NavItems">
        <NavLink to="/"className="navlink">
          <NavigationItem name="Home" />
        </NavLink>
        <NavLink to="/about">
          <NavigationItem name="About" />
        </NavLink>
        <NavLink to="/contact">
          <NavigationItem name="Contact Us" />
        </NavLink>
        <NavLink to="/admin">
          <NavigationItem name="Admin" />
        </NavLink>
        <NavLink to="/auth/logout">
          <NavigationItem name="Logout" />
        </NavLink>
      </div>
    )
  }
  return (
    <div className="Navigation">
      <h3>Takashila</h3>
      {navItems}
    </div>
  );
};

export default Navigation;

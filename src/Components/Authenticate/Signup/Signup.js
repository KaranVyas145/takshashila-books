import React from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h1>Sign up</h1>
      <NavLink to="/auth/login">Already have an account?</NavLink>
    </div>
  );
};

export default Signup;

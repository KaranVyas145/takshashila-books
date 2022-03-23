import React from "react";
import { NavLink } from "react-router-dom";

const Signin = ()=>{
    return (
        <div>
            <h1>Sign In</h1>
            <NavLink to="/auth/signup">Create a new account</NavLink>
        </div>
    )
}

export default Signin;
import React from "react";
import { Redirect } from "react-router";

const Authenticate = (props)=>{
    return (
        <div>
            <Redirect to="/auth/login"/>
        </div>
    )
}

export default Authenticate;
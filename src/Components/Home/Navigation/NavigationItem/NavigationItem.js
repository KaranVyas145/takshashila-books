import React from "react";
import "./NavigationItem.css"

const NavigationItem = (props)=>{
    return (
        <div className="NavigationItem">
            {props.name}
        </div>
    )
}

export default NavigationItem;
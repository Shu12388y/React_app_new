import React from "react";  
import "./SideNav.css"
const SideNav=(props)=>{
    const classes='slider'+props.className;
    return(
        <div className={classes}>
{props.children}
        </div>  
    )
};
export default SideNav;
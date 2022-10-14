import React from "react";
import "../App.css"





import {Outlet, Link } from "react-router-dom";


const Layout=()=>{
    return(
        <>
        <div id="logo"><img src="https://i.pinimg.com/originals/c6/5e/64/c65e6462967bbeba86a6ed9d59554310.png" alt=" "/> <h1>Beauty<span>Hub</span></h1><b>.Com</b> </div>
            <nav>

                <ul>
                    <li><Link to="/" id="link">Home</Link></li>
                    <li><Link to="/About" id="link">About</Link></li>
                    <li><Link to="/Services" id="link">Services</Link></li>
                    <li><Link to="/Gallery" id="link">Gallery</Link></li>
                    <li><Link to="/Ragister" id="link">Ragister / Login</Link></li>
                    {/* <li><Link to="/Login" id="link">Login</Link></li> */}
                    <li><Link to="/Profile" id="link">Profile</Link></li>
                    {/* <li><NavLink to="/Profile">Profile</NavLink></li> */}
                </ul>
            </nav>
            <div></div>
            <Outlet />
        </>
    )
}
export default Layout;
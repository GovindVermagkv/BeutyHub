import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import "../App.css"


const Login=()=>{
    const [logindata,setLoginData]=useState({
        "useremail":"",
        "userepass":"",
    })
    const handlelogin=(e)=>{
        console.log(e.target.value);
        const {name,value}=e.target
        setLoginData({...logindata,[name]:value})
    }

    return(
        <>
            <div id="loginarea">
            <div>
            <img src="https://i.pinimg.com/originals/c6/5e/64/c65e6462967bbeba86a6ed9d59554310.png" alt=""/>
            </div>
            <form>
            <div id="logindiv">
                    <label>Email</label><br></br>
                    <input type={"text"} onChange={handlelogin} name="useremail" placeholder="Ragistered Email" value={logindata.useremail} />
                </div>
                <div id="logindiv">
                    <label>Password</label><br></br>
                    <input type={"password"} onChange={handlelogin}  name="userepass" placeholder="Ragistered Password" value={logindata.userepass} />
                </div><br></br>
                <div id="buttons">
                    <button id="login">Login</button>
                    <button id="submit"><Link to="/Ragister" id="submit">New User ?</Link></button>
                    </div>
            </form>
                
            </div>

            <Footer />
        </>
    )
}
export default Login;
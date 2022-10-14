import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import "../App.css"
import Home from "./Home"
// import Layout from "./Layout"


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
    const [isLogin,setIsLogin]=useState(false)
    const userid=localStorage.getItem("useremail")
    const userpassword=localStorage.getItem("userpassword")
    const username=localStorage.getItem("storename")

    const handleloginsubmit=(e)=>{
        e.preventDefault()

        if(logindata.useremail=== userid && logindata.userepass===userpassword ){
            setIsLogin(true)
            
        }
        else{
           setIsLogin(false)
           alert("UserId / Password are Incorrect")
        }
    }
// useEffect(()=>{
//     if(logindata.useremail=== userid && logindata.userepass===userpassword ){
//         setIsLogin(true)
//     }
//     else{
//        setIsLogin(false)
//     }
// }, [isLogin ])
    return(
        <>
        {isLogin ? <> <div  id="welcome"><h1><span>Welcome, </span> {username}</h1> <Home /></div></> : <>
            <div id="loginarea">
            <div>
            <img src="https://www.kindpng.com/picc/m/0-6568_clipart-beauty-parlour-logo-hd-png-download.png" alt=""/>
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
                    <button id="login" onClick={handleloginsubmit}>Login</button>
                    <button id="submit"><Link to="/Ragister" id="submit">New User ?</Link></button>
                    </div>
            </form>
                
            </div>

            <Footer />
            </>
        }
        </>
    )
}
export default Login;
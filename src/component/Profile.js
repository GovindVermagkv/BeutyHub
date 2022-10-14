import React from "react";
import Footer from "./footer";
import { Link } from "react-router-dom";

const Profile = () => {

    const userid = localStorage.getItem("useremail")
    const userpassword = localStorage.getItem("userpassword")
    const username = localStorage.getItem("username")
    const userdate = localStorage.getItem("userdate")
    const userphone = localStorage.getItem("userphone")

    return (
        <>
            <div id="profile"><div> <h1><span>Welcome</span> {username}</h1> <p>Thanx for making interest in our website :) We will provide you a better services .<br></br><br></br><strong>ALL THE BEST</strong> </p>
                <div id="info">
                    <p><span>Your UserName :</span>{username}</p>
                    <p><span>Your UserId :</span> {userid}</p>
                    <p><span>Your Password :</span> {userpassword}</p>
                    <p><span>Your Phone :</span> {userphone}</p>
                    <p><span>Your DOB :</span> {userdate}</p>
                </div>
                <button id="submit"><Link to="/Login" id="submit">Click to Edit</Link></button>
            </div>
            </div>

            <Footer />
        </>
    )
}
export default Profile;
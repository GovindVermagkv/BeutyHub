import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";
import "../App.css"

const Ragister = () => {
    const [formdata, setFormdata] = useState({
        "name": "",
        "phone": "",
        "date": "",
        "email": "",
        "gender": "",
        "password": "",
        "cnf_password": "",
    })



    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target

        setFormdata({ ...formdata, [name]: value })
    }

    const [issubmit, setIsSubmit] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formdata.password === formdata.cnf_password) {
            setIsSubmit(true)
            localStorage.setItem("username", formdata.name)
            localStorage.setItem("userphone", formdata.phone)
            localStorage.setItem("useremail", formdata.email)
            localStorage.setItem("usergender", formdata.gender)
            localStorage.setItem("userdate", formdata.date)
            localStorage.setItem("userpassword", formdata.password)
        }
        else {
            setIsSubmit(false)
            alert("password not match")
        }
    }


    return (
        <>
            {issubmit ? <div id="popup"><div> <h1><span>Welcome</span> {formdata.name}</h1> <p>Thanx for making interest in our website :) We will provide you a better services .<br></br><br></br><strong>ALL THE BEST</strong> </p>
            <p><span>Your UserId :</span> {formdata.email}</p>
            <p><span>Your Password :</span> {formdata.password}</p>
             <button id="submit"><Link to="/Login" id="submit">Click to Login</Link></button></div></div> : <> <div id="ragistercontainer">
            <div><img src="https://www.kindpng.com/picc/m/0-6568_clipart-beauty-parlour-logo-hd-png-download.png" alt=""/></div>
                <form>
                    <div className="inputdiv">
                        <label htmlFor="Name">Name</label><br></br>
                        <input type={"text"} onChange={handleChange} name="name" placeholder="Enter Your name" value={formdata.name} />
                    </div>
                    <div className="inputdiv">
                        <label htmlFor="phone">Phone Number</label><br></br>
                        <input type={"number"} onChange={handleChange} name="phone" placeholder="Enter Your mobile" value={formdata.phone} />
                    </div>
                    <div className="inputdiv">
                        <label htmlFor="date">Date of Birth</label><br></br>
                        <input type={"date"} onChange={handleChange} name="date" placeholder="Enter Your DOB" value={formdata.date} />
                    </div>
                    <div className="inputdiv">
                        <label htmlFor="email">Email</label><br></br>
                        <input type={"email"} onChange={handleChange} name="email" placeholder="Enter Your Email" value={formdata.email} />
                    </div>
                    {/* <div className="inputdiv">
                        <label>Gender</label><br></br>
                        <label htmlFor="male">Male</label>
                        <input type={"radio"} onChange={handleChange} name="gender" placeholder="Select gender" value="Male" />
                        <label htmlFor="female">female</label>
                        <input type={"radio"} onChange={handleChange} name="gender" placeholder="Select gender" value="female" />
                        <label htmlFor="others">Others</label>
                        <input type={"radio"} onChange={handleChange} name="gender" placeholder="Select gender" value="others" />
                    </div> */}
                    <div className="inputdiv">
                        <label>Password</label><br></br>
                        <input type={"password"} onChange={handleChange} name="password" placeholder="length must > 5 char." value={formdata.password} />
                    </div>
                    <div className="inputdiv">
                        <label>Confirm Password</label><br></br>
                        <input type={"text"} onChange={handleChange} name="cnf_password" placeholder="length must > 5 char." value={formdata.cnf_password} />
                    </div><br></br>
                    <div id="buttons">
                        <button onClick={handleSubmit} id="submit">Submit</button>
                        <button id="login"><Link to="/Login" id="login2">Existing User ?</Link></button>
                    </div>
                </form>
            </div>


                <Footer />
            </>
            }
        </>


    )
}
export default Ragister;
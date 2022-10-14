import React from "react";
import "../App.css"
import 'animate.css';

const Footer=()=>{
    return(
        <>
            <footer>
                <h1 className="animate__animated animate__fadeInUp">CONTACT US</h1>
                <span id="border">.........</span>
                <div id="detail">
                    <p><span>Phone :</span> +91 7307220229</p>
                    <p><span>Address :</span> SRIMT Lucknow</p>
                    <p><span>Email :</span> sonygovind.gkv740@gmail.com</p>
                </div>
                <div id="condition">
                    <div>
                        <h3>ALL RIGHT RESERVED BY <span>&copy;</span> Govind Verma</h3>
                    </div>
                    <div id="policy">
                        <h3>PRIVACY POLICY</h3>
                        <h3>TERMS AND CONDITIONS</h3>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;
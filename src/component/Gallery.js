import React from "react";
import "../App.css"
import Footer from "./footer";

const Gallery=()=>{
    return(
        <>
            <div id="Gallerydiv">
                <h1>Gallery</h1>
            </div>
            <div id="imagecontainer">
                <div id="imagecontainer2">
                    <img src="https://nameyourvictory.com/wp-content/uploads/2022/07/handsome-man-barbershop-shaving-beard.jpg" alt="" />
                    <img src="https://nameyourvictory.com/wp-content/uploads/2022/07/stylish-man-sitting-barbershop.jpg" alt=""/>
                    <img src="https://nameyourvictory.com/wp-content/uploads/2022/07/young-man-barbershop-trimming-hair.jpg" alt="" />
                    <img src="https://nameyourvictory.com/wp-content/uploads/2022/07/client-doing-hair-cut-barber-shop-salon.jpg" alt="" />
                </div>
            </div>
            <Footer />
             
        </>
    )
}
export default Gallery;
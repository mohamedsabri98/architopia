import React from "react";
import Navbar2 from "../Components/allproducts/navbar2/navbar2";
import Threeslider from "../Components/allprojects/threeslider/threeslider";
import MainSlider from "../Components/allprojects/MainSlider/MainSlider";
import Footer from "../Components/Footer/Footer";
import Profile from "../Components/Profile/Profile";

const Archipartner = () => {
    return (
        <>
            <Navbar2 />
            <div className="container mt-5">
                <Profile />
                <div className="row">
                    <Threeslider />
                </div>
                <MainSlider />
                <div className="row">
                    <Threeslider />
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Archipartner;

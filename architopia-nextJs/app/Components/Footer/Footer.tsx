import React from "react";
import "./Footer.css";
import Image from "next/image";
import phone from "../../../public/assets/icons/phone-call-alt-1-svgrepo-com.svg";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="row">
                    <div className="col-md-4 m-5">
                        <h2 className=" bold">Architupia</h2>
                        <div className="d-flex mt-4">
                            <Image
                                src={phone}
                                alt="My Image"
                                width={30}
                                height={30}
                            />
                            <h6 className="ms-4 mt-2">
                                {" "}
                                00201001560037 - 00201010037139{" "}
                            </h6>
                        </div>
                    </div>
                    <div className="social-icons col-6 mt-5 pt-5 d-flex justify-content-end">
                        <a href="#" target="_blank">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" target="_blank">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#" target="_blank">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
                <hr />
                <div className="d-flex m-2">
                    <div className=" col-md-6 d-flex">
                        <h6 className="col-md-3">terms of use</h6>
                        <h6 className="col-md-3">privacy policy</h6>
                    </div>
                    <div className=" col-md-6 d-flex justify-content-end">
                        <p>&copy; All rights reserved Architupia 2023</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;

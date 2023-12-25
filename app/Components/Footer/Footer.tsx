import React from "react";
import "./Footer.css";
import Image from "next/image";
import phone from "../../../public/assets/icons/phone-call-alt-1-svgrepo-com.svg";
import instagram from "../../../public/assets/icons/ic_instagram.png";
import youtube from "../../../public/assets/icons/ic_youtube.png";
import linkedin from "../../../public/assets/icons/ic_linkedin.png";
import facebook from "../../../public/assets/icons/ic_facebook.png";
import circle from "../../../public/assets/icons/Ellipse 61.svg";
import footerLogo from "../../../public/assets/logo/Group 23.png";
import FooterSocialIcons from "./FooterSocialIcons/FooterSocialIcons";


function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 m-5">
                            <div className="d-flex">
                                <div className="mt-1 me-3">
                                    <Image
                                        src={footerLogo}
                                        alt="My Image"
                                        width={53}
                                        height={37}
                                    />
                                </div>
                                <div>
                                    <h2 className=" bold">Architupia</h2>
                                </div>
                            </div>
                            <div className="d-flex mt-4">
                                <Image
                                    src={phone}
                                    alt="My Image"
                                    width={30}
                                    height={30}
                                />
                                <h6 className="ms-4 mt-2">
                                    00201001560037 - 00201010037139
                                </h6>
                            </div>
                        </div>
                        <div className="col-7 mt-5 pt-5 d-flex justify-content-end">
                            <FooterSocialIcons image={facebook} />
                            <FooterSocialIcons image={linkedin} />
                            <FooterSocialIcons image={instagram} />
                            <FooterSocialIcons image={youtube} />
                        </div>
                    </div>
                    <hr />
                    <div className="d-flex m-2">
                        <div className=" col-md-6 d-flex">
                            <p className="col-md-3">terms of use</p>
                            <p className="col-md-3">privacy policy</p>
                        </div>
                        <div className=" col-md-6 d-flex justify-content-end">
                            <p>&copy; All rights reserved Architupia 2023</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;

import Image from "next/image";
import React from "react";
import "./Profile.css";
import logo from "../../../public/assets/logo/profile-image.png";
import pdf from "../../../public/assets/icons/pdf.svg";
import download from "../../../public/assets/icons/download.svg";
import pinterest from "../../../public/assets/icons/pinterest.png";
import linkedin from "../../../public/assets/icons/ic_linkedin.png";
import facebook from "../../../public/assets/icons/ic_facebook.png";
import bigFrame from "../../../public/assets/Frame 70.png";
import PdfSection from "./PdfSection/PdfSection";
import SocialIcons from "./SocialIcons/SocialIcons";

function Profile() {
    return (
        <>
            <div className="d-flex">
                <div className="col-md-4 profile">
                    <div className="d-flex">
                        <div className="profile-image">
                            <Image
                                src={logo}
                                alt="logo"
                                width={120}
                                height={120}
                            />
                        </div>
                        <div className="mt-4 ms-5">
                            <h6 className="ms-3">200</h6>
                            <p>projects</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <h5 className="mt-4">Engineering Consultant Group</h5>
                        <h6>Interior Designers</h6>
                    </div>
                    <div className="d-flex mt-2">
                        <button className="button-blue me-4">Follow</button>
                        <button className="button-edit me-4">Share</button>
                        <button className="button-edit ">Contact</button>
                    </div>
                    <div className="m-2">
                        <h5 className="mt-4 text-gray">About Dair</h5>
                        <p className="p-color me-5">
                            Top products for architects recently published on
                            Architupia. The most inspiring materials, equipment,
                            and more, from the world’s best manufacturers. Find
                            all the newest products made by G L C
                        </p>
                        <div className="d-flex justify-content-end me-3">
                            <a className="link-dark" href="#">
                                see all
                            </a>
                        </div>
                    </div>
                    <div className="me-4 line">
                        <hr />
                    </div>
                    <PdfSection image={download} photo={pdf} />
                    <div className="me-4 line">
                        <hr />
                    </div>
                    <PdfSection image={download} photo={pdf} />
                    <div className="d-flex mt-3">
                        <SocialIcons image={facebook} />
                        <SocialIcons image={linkedin} />
                        <SocialIcons image={pinterest} />
                    </div>
                </div>
                <div className="large-image">
                    <Image src={bigFrame} alt="logo" />
                </div>
            </div>
        </>
    );
}

export default Profile;

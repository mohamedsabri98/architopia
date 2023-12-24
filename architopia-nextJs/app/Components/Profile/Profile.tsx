import Image from "next/image";
import React from "react";
import "./Profile.css";
import logo from "../../../public/assets/icons/pexels-duophenom-2417848.jpg";
import pdf from "../../../public/assets/icons/pdf.png";
import download from "../../../public/assets/icons/download.png";
import pinterest from "../../../public/assets/icons/pinterest.png";
import linkedin from "../../../public/assets/icons/ic_linkedin.png";
import facebook from "../../../public/assets/icons/ic_facebook.png";

function Profile() {
    return (
        <>
            <div className="col-md-4">
                <div className="d-flex">
                    <div className="profile-image">
                        <Image src={logo} alt="logo" width={120} height={120} />
                    </div>
                    <div className="mt-4 ms-5">
                        <h6 className="ms-3">200</h6>
                        <p>projects</p>
                    </div>
                </div>
                <div>
                    <h5 className="mt-4">Engineering Consultant Group</h5>
                    <p>Interior Design</p>
                </div>
                <div className="d-flex mt-2">
                    <button className="btn btn-info me-5 text-white">
                        Follow
                    </button>
                    <button className="btn btn-outline-info me-5">Share</button>
                    <button className="btn btn-outline-info">Contact</button>
                </div>
                <div className="m-2">
                    <h5 className="mt-4">About Dair</h5>
                    <p className="m-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsa fugit doloremque officia in esse magni repudiandae
                        reiciendis, aspernatur minus mollitia, tempore
                        recusandae optio voluptatem pariatur!
                    </p>
                    <div className="d-flex justify-content-end">
                        <a href="#">see all</a>
                    </div>
                    <hr />
                </div>
                <div className="d-flex">
                    <Image src={pdf} alt="logo" width={50} height={50} />
                    <div className="mt-2 ms-4">
                        <span>
                            dar certificate <br /> 2.5M | pdf
                        </span>
                    </div>
                    <div className="mt-2 ms-5 ps-5">
                        <div className="d-flex">
                            <div>
                                <Image
                                    src={download}
                                    alt="logo"
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <div className="mt-2">
                                <a href="#">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="d-flex">
                    <Image src={pdf} alt="logo" width={50} height={50} />
                    <div className="mt-2 ms-4">
                        <span>
                            dar certificate <br /> 2.5M | pdf
                        </span>
                    </div>
                    <div className="mt-2 ms-5 ps-5">
                        <div className="d-flex">
                            <div>
                                <Image
                                    src={download}
                                    alt="logo"
                                    width={30}
                                    height={30}
                                />
                            </div>
                            <div className="mt-2">
                                <a href="#">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex mt-3">
                    <div className="me-5 mt-3">
                        <a href="#">
                            <Image src={facebook} alt="logo" />
                        </a>
                    </div>
                    <div className="me-5 mt-3">
                        <a href="#">
                            <Image src={linkedin} alt="logo" />
                        </a>
                    </div>
                    <div className="me-5 mt-3">
                        <a href="#">
                            <Image src={pinterest} alt="logo" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;

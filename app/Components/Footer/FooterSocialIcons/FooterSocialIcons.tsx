import React from "react";
import Image from "next/image";

function FooterSocialIcons(props) {
    return (
        <>
            <div className="me-3 mt-3">
                <div className="d-inline-block">
                    <div className="circle-container">
                        <a href="#">
                            <Image
                                src={props.image}
                                alt="Facebook logo"
                                className="image"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FooterSocialIcons;

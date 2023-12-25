import React from "react";
import Image from "next/image";

function SocialIcons(props) {
    return (
        <>
            <div className="me-5 mt-3">
                <a href="#">
                    <Image src={props.image} alt="logo" />
                </a>
            </div>
        </>
    );
}

export default SocialIcons;

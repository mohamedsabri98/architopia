"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../../public/assets/Rectangle 44.png";
import img2 from "../../../../public/assets/Frame 66.png";
import img3 from "../../../../public/assets/Frame 66.png";
import Image from "next/image";
import style from "./bigslider.module.scss";
import Link from "next/link";

function Bigslider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <>
            <div className="col-md-8">
                <Slider {...settings}>
                    <div>
                        <Image
                            className="w-100"
                            height={524}
                            src={img1}
                            alt=""
                        />
                    </div>
                    <div>
                        <Image
                            className="w-100"
                            height={524}
                            src={img2}
                            alt=""
                        />
                    </div>
                    <div>
                        <Image
                            className="w-100"
                            height={524}
                            src={img3}
                            alt=""
                        />
                    </div>
                </Slider>
                <Link href="#">
                    <button className={`btn ${style.button}`}>Airport</button>
                </Link>
                <h6>
                    <Link className={style.h6} href="/projects/1">
                        Cairo International Airport TB2
                    </Link>{" "}
                    /{" "}
                    <Link className={style.h6} href="#">
                        {" "}
                        E C G
                    </Link>
                </h6>
            </div>
        </>
    );
}

export default Bigslider;

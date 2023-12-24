"use client";
import React, { ReactNode, Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../public/assets/Frame 64.jpg";
import img2 from "../../../public/assets/1.jpg";
import img3 from "../../../public/assets/Frame 66.png";
import Image from "next/image";

export default class SliderSlick extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        };
        return (
            <>
                <div className="row">
                    <div className="col-md-4">
                        <Slider {...settings}>
                            <div>
                                <Image
                                    className="w-100"
                                    height={400}
                                    src={img1}
                                    alt=""
                                />
                            </div>
                            <div>
                                <Image
                                    className="w-100"
                                    height={400}
                                    src={img2}
                                    alt=""
                                />
                            </div>
                            <div>
                                <Image
                                    className="w-100"
                                    height={400}
                                    src={img3}
                                    alt=""
                                />
                            </div>
                        </Slider>
                    </div>
                </div>
            </>
        );
    }
}

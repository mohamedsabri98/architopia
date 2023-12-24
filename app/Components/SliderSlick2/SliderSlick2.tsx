"use client";
import React, { ReactNode, Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../public/assets/Frame 64.jpg";
import img2 from "../../../public/assets/1.jpg";
import img3 from "../../../public/assets/Frame 66.png";
import Image from "next/image";

export default class SliderSlick2 extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
        };
        return (
            <>
                <div className="row">
                    <div className="col-md-12 bg-danger px-4">
                        <div className="div">
                            <p>Related Architectural Offices</p>
                        </div>

                        <div className="div">
                            <Slider {...settings}>
                                <div>
                                    <Image
                                        className="rounded-circle"
                                        width={122}
                                        height={122}
                                        src={img1}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <Image
                                        className="rounded-circle"
                                        width={122}
                                        height={122}
                                        src={img2}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <Image
                                        className="rounded-circle"
                                        width={122}
                                        height={122}
                                        src={img3}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <Image
                                        className="rounded-circle"
                                        width={122}
                                        height={122}
                                        src={img3}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <Image
                                        className="rounded-circle"
                                        width={122}
                                        height={122}
                                        src={img3}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <Image
                                        className="rounded-circle"
                                        width={122}
                                        height={122}
                                        src={img3}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <Image
                                        className="rounded-circle"
                                        width={122}
                                        height={122}
                                        src={img3}
                                        alt=""
                                    />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

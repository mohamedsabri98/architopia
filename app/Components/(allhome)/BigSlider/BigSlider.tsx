"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import style from "./BigSlider.module.scss";
import img1 from "../../../../public/assets/Rectangle 44.png";
import img2 from "../../../../public/assets/Rectangle 34.png";
import img3 from "../../../../public/assets/Rectangle 42.png";
import img4 from "../../../../public/assets/Rectangle 44.png";

function BigSlider() {
    return (
        <>
            <div className="col-md-9">
                <div className="row">
                    <div className={`${style.slider} col-md-9`}>
                        <div className="div">
                            <Swiper
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <Image
                                        className="w-100"
                                        height={460}
                                        src={img1}
                                        alt="img1"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        className="w-100"
                                        height={460}
                                        src={img1}
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        className="w-100"
                                        height={460}
                                        src={img1}
                                        alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>
                            <div className={`${style.UptextPosition}`}>
                                <span className={`${style.textPositionleft}`}>
                                    Cairo International Airport TB2
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className={` ${style.imgimg}`}>
                            <Swiper
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <Image
                                        className="w-100"
                                        width={239}
                                        height={140}
                                        src={img2}
                                        alt="img1"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        className="w-100"
                                        width={239}
                                        height={140}
                                        src={img2}
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        className="w-100"
                                        width={239}
                                        height={140}
                                        src={img2}
                                        alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className={` ${style.imgimg}`}>
                            <Swiper
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <Image
                                        className="w-100"
                                        width={239}
                                        height={140}
                                        src={img3}
                                        alt="img1"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        className="w-100"
                                        width={239}
                                        height={140}
                                        src={img3}
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        className="w-100"
                                        width={239}
                                        height={140}
                                        src={img3}
                                        alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="div">
                            <Swiper
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <Image
                                        className="w-100"
                                        width={239}
                                        height={140}
                                        src={img4}
                                        alt="img1"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        className="w-100"
                                        width={239}
                                        height={140}
                                        src={img4}
                                        alt=""
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image
                                        className="w-100"
                                        width={239}
                                        height={140}
                                        src={img4}
                                        alt=""
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BigSlider;

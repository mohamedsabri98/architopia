'use client'
import React from 'react'
import style from './twoslider.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../../../public/assets/Rectangle 377.png'
import img2 from '../../../../public/assets/Rectangle 377.png'
import img3 from '../../../../public/assets/Frame 66.png'
import Image from 'next/image'
import Link from 'next/link';

function Twoslider() {
  
  return (
    <>
    <div className="col-md-4">
     

        


            <div className=''>
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide><Image className='w-100' height={206} src={img1} alt='' /></SwiperSlide>
                <SwiperSlide><Image className='w-100' height={206} src={img2} alt='' /></SwiperSlide>
                <SwiperSlide><Image className='w-100' height={206} src={img3} alt='' /></SwiperSlide>

              </Swiper>
              <Link href='#'>
                <button className={`btn ${style.button}`}>Airport</button> 
              </Link>
              <h6 ><Link className={style.h6} href='/projects/1'>Malabo Airport Expansion</Link> / <Link className={style.h6} href='#'> E C G</Link></h6>
            </div>

         
            <div className=''>
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide><Image className='w-100' height={206} src={img2} alt='' /></SwiperSlide>
                <SwiperSlide><Image className='w-100' height={206} src={img2} alt='' /></SwiperSlide>
                <SwiperSlide><Image className='w-100' height={206} src={img3} alt='' /></SwiperSlide>

              </Swiper>
              <Link href='#'>
                <button className={`btn ${style.button}`}>Airport</button> 
              </Link>
              <h6 ><Link className={style.h6} href='/projects/1'>Five at Palm Jumeirah Dubai</Link> / <Link className={style.h6} href='#'> E C G</Link></h6>
            </div>



{/* 
    <div>
       
          <Slider {...settings}>
        <div>
          <Image className='w-100' height={206} src={img1} alt='' />
        </div>
        <div>
        <Image className='w-100' height={206} src={img2} alt='' />

        </div>
        <div>
        <Image className='w-100' height={206} src={img3} alt='' />
        </div>
      </Slider>
      <button className={`btn ${style.button}`}>Airport</button> 
      <h6 className={style.h6}>Cairo International Airport TB2 / E C G</h6>
    </div> */}

  </div>

</>
  )
}

export default Twoslider






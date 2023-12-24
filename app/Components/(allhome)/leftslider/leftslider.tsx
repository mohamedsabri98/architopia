'use client'
import React from 'react'
import Image from 'next/image'
import style from './leftslider.module.scss'
import img3 from '../../../../public/assets/Rectangle 37.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Leftslider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true

  };
  return (
    <>
    <div className="row">
      <div className="col-md-12">
      <div className="position-relative">
        <Slider {...settings}>
            <div>
              <Image className={`w-100 ${style.imgimg}`} width={341} height={300} src={img3} alt=''/>
            </div>
            <div>
              <Image className={`w-100 ${style.imgimg}`} width={341} height={300} src={img3} alt=''/>
            </div>
            <div>
              <Image className={`w-100 ${style.imgimg}`} width={341} height={300} src={img3} alt=''/>
            </div>
          </Slider>
          <div className={`${style.textPosition}`}>
              <span >The first Egyptian <br/> competition for urban development </span>
            </div>
                
        </div>
      </div>
    </div>
         
  
  </>
  )
}

export default Leftslider





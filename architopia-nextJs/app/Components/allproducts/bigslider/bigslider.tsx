'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../../../public/assets/Rectangle 44.png'
import img2 from '../../../../public/assets/Frame 66.png'
import img3 from '../../../../public/assets/Frame 66.png'

import Image from 'next/image';
import style from './bigslider.module.scss'

function Bigslider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true

  };
  return (
    <>

    <div className="col-md-8">

  <Slider {...settings}>
    <div>
      <Image className='w-100' height={524} src={img1} alt='' />
    </div>
    <div>
    <Image className='w-100' height={524} src={img2} alt='' />

    </div>
    <div>
    <Image className='w-100' height={524} src={img3} alt='' />
    </div>
  </Slider>
<button className={`btn ${style.button}`}>Airport</button> 
  <h6 className={style.h6}>Cairo International Airport TB2 / E C G</h6>
</div>

</>
  )
}

export default Bigslider







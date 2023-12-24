'use client'
import React from 'react'
import Link from 'next/link'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../../../public/assets/Frame 64.png'
import img2 from '../../../../public/assets/Rectangle 44.png'
import img3 from '../../../../public/assets/Frame 66.png'
import Image from 'next/image'
import style from './threeslider.module.scss'


function Threeslider() {
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

        
    <div className="col-md-4">
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
        <button className={`btn ${style.button}`}>Museums</button> 
        <h6 className={style.h6}>Cyber Security Hall Museum / dalia Saadany</h6>
    </div>
    </div>


    <div className="col-md-4">
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
        <button className={`btn ${style.button}`}>Museums</button> 
        <h6 className={style.h6}>Ashgar City / Mona Hussien</h6>
    </div>
    </div>

    <div className="col-md-4">
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
        <button className={`btn ${style.button}`}>Museums</button> 
        <h6 className={style.h6}>St. Regis Towers / E C G</h6>
    </div>
    </div>



</>
  )
}

export default Threeslider





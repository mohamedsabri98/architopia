'use client'
import React from 'react'
import Link from 'next/link'
import style from './twoslider.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../../../public/assets/Frame 64.png'
import img2 from '../../../../public/assets/Rectangle 44.png'
import img3 from '../../../../public/assets/Frame 66.png'
import Image from 'next/image'

function Twoslider() {
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
      {/* <div>
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image src={img2} className="d-block w-100" height={206} alt="Img" />
                
            </div>
            <div className="carousel-item">
              <Image src={img3} className="d-block w-100" alt="Img" />
              
            </div>
            <div className="carousel-item">
              <Image src={img1} className="d-block w-100" alt="Img" />
              
            </div>
          </div>
          </div>

          <button className={`btn ${style.button}`}>Airport</button> 
      
          <h6 className={style.h6}>Malabo Airport Expansion / E C</h6>
      </div> */}

        <div className="div">
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
          <h6 className={style.h6}>Malabo Airport Expansion / E C</h6>
        </div>




    <div>
        {/* <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image src={img3} className="d-block w-100" height={206} alt="Img" />
            
          </div>
        <div className="carousel-item">
          <Image src={img3} className="d-block w-100" height={206} alt="Img" />
          
        </div>
        <div className="carousel-item">
          <Image src={img3} className="d-block w-100" height={206} alt="Img" />
          
        </div>
      </div>
      </div>  */}
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
    </div>

  </div>

</>
  )
}

export default Twoslider






'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../../../public/assets/Frame 64.png'
import img2 from '../../../../public/assets/Rectangle 44.png'
import img3 from '../../../../public/assets/Frame 66.png'
import Image from 'next/image'
import style from '../../../page.module.scss'


function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]


  };
  return (
    <>
    <div className={`${style.mainslider} col-md-12`}>
          <div className={style.mainslidercaption}>
              <p>Related Architectural Offices</p>
          </div>

          <div className={style.slider}>
          <Slider {...settings}>
          <div>
          <Image  width={196} height={104} src={img1} alt='' />
          <p className='ms-5 mt-3'>Name Here</p>
          </div>
          <div>
          <Image  width={196} height={104} src={img2} alt='' />
          <p className='ms-5 mt-3'>Name Here</p>
          </div>
          <div>
          <Image  width={196} height={104} src={img3} alt='' />
          <p className='ms-5 mt-3'>Name Here</p>
          </div>
          <div>
          <Image  width={196} height={104} src={img3} alt='' />
          <p className='ms-5 mt-3'>Name Here</p>
          </div>
          <div>
          <Image  width={196} height={104} src={img3} alt='' />
          <p className='ms-5 mt-3'>Name Here</p>
          </div>
          <div>
          <Image  width={196} height={104} src={img3} alt='' />
          <p className='ms-5 mt-3'>Name Here</p>
          </div>
          <div>
          <Image  width={196} height={104} src={img3} alt='' />
          <p className='ms-5 mt-3'>Name Here</p>
          </div>
      </Slider>
      </div>


    </div>
    
  </>
  )
}

export default MainSlider





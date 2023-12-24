'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../../../public/assets/logoipsum-330 1.png'
import img2 from '../../../../public/assets/logo-45.png'
import img3 from '../../../../public/assets/logo3.png'
import img4 from '../../../../public/assets/logo-78.png'
import img5 from '../../../../public/assets/logo-49.png'
import Image from 'next/image'
import style from './MainSlider.module.scss'
import Link from 'next/link';

function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
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
            <Link href="#" className={`${style.linkslider}`}>
              <Image className={style.bg} width={196} height={104} src={img1} alt='' />
              <p className={`${style.pslider} mt-3`}>Logoipsum</p>
            </Link>
          </div>
          <div>
          <Link href="#" className={`${style.linkslider}`}>
              <Image className={style.bg} width={196} height={104} src={img2} alt='' />
              <p className={`${style.pslider} mt-3`}>Logoipsum</p>
            </Link>
          </div>
          <div>
          <Link href="#" className={`${style.linkslider}`}>
              <Image className={style.bg} width={196} height={104} src={img3} alt='' />
              <p className={`${style.pslider} mt-3`}>Logoipsum</p>
            </Link>
          </div>
          <div>
          <Link href="#" className={`${style.linkslider}`}>
              <Image className={style.bg} width={196} height={104} src={img4} alt='' />
              <p className={`${style.pslider} mt-3`}>Logoipsum</p>
            </Link>
          </div>
          <div>
          <Link href="#" className={`${style.linkslider}`}>
              <Image className={style.bg} width={196} height={104} src={img5} alt='' />
              <p className={`${style.pslider} mt-3`}>Logoipsum</p>
            </Link>
          </div>
          <div>
          <Link href="#" className={`${style.linkslider}`}>
              <Image className={style.bg} width={196} height={104} src={img1} alt='' />
              <p className={`${style.pslider} mt-3`}>Logoipsum</p>
            </Link>
          </div>
          <div>
          <Link href="#" className={`${style.linkslider}`}>
              <Image className={style.bg} width={196} height={104} src={img2} alt='' />
              <p className={`${style.pslider} mt-3`}>Logoipsum</p>
            </Link>
          </div>
      </Slider>
      </div>


    </div>
    
  </>
  )
}

export default MainSlider






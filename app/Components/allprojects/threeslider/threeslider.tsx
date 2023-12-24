'use client'
import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../../../public/assets/Rectangle 377.png'
import img2 from '../../../../public/assets/Rectangle 20.png'
import img3 from '../../../../public/assets/Rectangle 377.png'
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

    

    
    <div className={`${style.margintop} col-md-4`}>
    <div>
        <div className=''>
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreeslider1" className='w-100' height={206} src={img1} alt='' /></SwiperSlide>
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreeslider1" className='w-100' height={206} src={img2} alt='' /></SwiperSlide>
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreeslider1" className='w-100' height={206} src={img3} alt='' /></SwiperSlide>

              </Swiper>
              <Link href='#'>
                <button className={`btn ${style.button}`}>Museums</button> 
              </Link>
              <h6 ><Link className={style.h6} href='/projects/1'>Cyber Security Museum</Link> / <Link className={style.h6} href='#'> dalia Saadany</Link></h6>
            
            <div className="modal fade" id="staticBackdropthreeslider1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Part 1</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Image className='me-2' width={200} height={200} src={img1} alt='' />
                            <Image className='me-2' width={200} height={200} src={img2} alt='' />
                            <Image className='me-2' width={200} height={200} src={img3} alt='' />
                            <Image className='me-2' width={200} height={200} src={img1} alt='' />
                            <Image className='me-2' width={200} height={200} src={img2} alt='' />
                            <Image className='me-2' width={200} height={200} src={img3} alt='' />
                            <Image className='me-2' width={200} height={200} src={img1} alt='' />
                            <Image className='me-2' width={200} height={200} src={img2} alt='' />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
    </div>
    </div>
    <div className={`${style.margintop} col-md-4`}>
    <div>
        <div className=''>
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreeslider2" className='w-100' height={206} src={img2} alt='' /></SwiperSlide>
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreeslider2" className='w-100' height={206} src={img1} alt='' /></SwiperSlide>
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreeslider2" className='w-100' height={206} src={img3} alt='' /></SwiperSlide>

              </Swiper>
              <Link href='#'>
                <button className={`btn ${style.button}`}>Houses</button> 
              </Link>
              <h6 ><Link className={style.h6} href='/projects/1'>Ashgar City</Link> / <Link className={style.h6} href='#'> Mona Hussien</Link></h6>
                
              <div className="modal fade" id="staticBackdropthreeslider2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Part 2</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Image className='me-2' width={200} height={200} src={img1} alt='' />
                            <Image className='me-2' width={200} height={200} src={img2} alt='' />
                            <Image className='me-2' width={200} height={200} src={img3} alt='' />
                            <Image className='me-2' width={200} height={200} src={img1} alt='' />
                            <Image className='me-2' width={200} height={200} src={img2} alt='' />
                            <Image className='me-2' width={200} height={200} src={img3} alt='' />
                            <Image className='me-2' width={200} height={200} src={img1} alt='' />
                            <Image className='me-2' width={200} height={200} src={img2} alt='' />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
    </div>
    </div>
    <div className={`${style.margintop} col-md-4`}>
    <div>
        <div className=''>
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreeslider3" className='w-100' height={206} src={img3} alt='' /></SwiperSlide>
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreeslider3" className='w-100' height={206} src={img2} alt='' /></SwiperSlide>
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreeslider3" className='w-100' height={206} src={img3} alt='' /></SwiperSlide>

              </Swiper>
              <Link href='#'>
                <button className={`btn ${style.button}`}>Hotels</button> 
              </Link>
              <h6 ><Link className={style.h6} href='/projects/1'>St. Regis Towers</Link> / <Link className={style.h6} href='#'> E C G</Link></h6>
              <div className="modal fade" id="staticBackdropthreeslider3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Part 3</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Image className='me-2' width={200} height={200} src={img1} alt='' />
                            <Image className='me-2' width={200} height={200} src={img2} alt='' />
                            <Image className='me-2' width={200} height={200} src={img3} alt='' />
                            <Image className='me-2' width={200} height={200} src={img1} alt='' />
                            <Image className='me-2' width={200} height={200} src={img2} alt='' />
                            <Image className='me-2' width={200} height={200} src={img3} alt='' />
                            <Image className='me-2' width={200} height={200} src={img1} alt='' />
                            <Image className='me-2' width={200} height={200} src={img2} alt='' />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </div>
    </div>
    <div className={`${style.margintop} col-md-4`}>
    <div>
        <div className=''>
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreeslider4" className='w-100' height={206} src={img1} alt='' /></SwiperSlide>
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreeslider4" className='w-100' height={206} src={img2} alt='' /></SwiperSlide>
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreeslider4" className='w-100' height={206} src={img3} alt='' /></SwiperSlide>

              </Swiper>
              <Link href='#'>
                <button className={`btn ${style.button}`}>Museums</button> 
              </Link>
              <h6 ><Link className={style.h6} href='/projects/1'>Cyber Security Museum</Link> / <Link className={style.h6} href='#'> dalia Saadany</Link></h6>
              <div className="modal fade" id="staticBackdropthreeslider4" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Part 4</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Image className='me-2' width={200} height={200} src={img1} alt='' />
                            <Image className='me-2' width={200} height={200} src={img2} alt='' />
                            <Image className='me-2' width={200} height={200} src={img3} alt='' />
                            <Image className='me-2' width={200} height={200} src={img1} alt='' />
                            <Image className='me-2' width={200} height={200} src={img2} alt='' />
                            <Image className='me-2' width={200} height={200} src={img3} alt='' />
                            <Image className='me-2' width={200} height={200} src={img1} alt='' />
                            <Image className='me-2' width={200} height={200} src={img2} alt='' />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
    </div>
    </div>
    <div className={`${style.margintop} col-md-4`}>
    <div>
        <div className=''>
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreeslider5" className='w-100' height={206} src={img2} alt='' /></SwiperSlide>
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreeslider5" className='w-100' height={206} src={img1} alt='' /></SwiperSlide>
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreeslider5" className='w-100' height={206} src={img3} alt='' /></SwiperSlide>

              </Swiper>
              <Link href='#'>
                <button className={`btn ${style.button}`}>Houses</button> 
              </Link>
              <h6 ><Link className={style.h6} href='/projects/1'>Ashgar City</Link> / <Link className={style.h6} href='#'> Mona Hussien</Link></h6>
              <div className="modal fade" id="staticBackdropthreeslider5" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Part 5</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Image className='me-2' width={200} height={200} src={img1} alt='' />
                            <Image className='me-2' width={200} height={200} src={img2} alt='' />
                            <Image className='me-2' width={200} height={200} src={img3} alt='' />
                            <Image className='me-2' width={200} height={200} src={img1} alt='' />
                            <Image className='me-2' width={200} height={200} src={img2} alt='' />
                            <Image className='me-2' width={200} height={200} src={img3} alt='' />
                            <Image className='me-2' width={200} height={200} src={img1} alt='' />
                            <Image className='me-2' width={200} height={200} src={img2} alt='' />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
    </div>
    </div>
    <div className={`${style.margintop} col-md-4`}>
    <div>
        <div className=''>
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreeslider6" className='w-100' height={206} src={img3} alt='' /></SwiperSlide>
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreeslider6" className='w-100' height={206} src={img2} alt='' /></SwiperSlide>
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreeslider6" className='w-100' height={206} src={img3} alt='' /></SwiperSlide>

              </Swiper>
              <Link href='#'>
                <button className={`btn ${style.button}`}>Hotels</button> 
              </Link>
              <h6 ><Link className={style.h6}href='/projects/1'>St. Regis Towers</Link> / <Link className={style.h6} href='#'> E C G</Link></h6>
              <div className="modal fade" id="staticBackdropthreeslider6" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Part 6</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Image className='me-2' width={200} height={200} src={img1} alt='' />
                            <Image className='me-2' width={200} height={200} src={img2} alt='' />
                            <Image className='me-2' width={200} height={200} src={img3} alt='' />
                            <Image className='me-2' width={200} height={200} src={img1} alt='' />
                            <Image className='me-2' width={200} height={200} src={img2} alt='' />
                            <Image className='me-2' width={200} height={200} src={img3} alt='' />
                            <Image className='me-2' width={200} height={200} src={img1} alt='' />
                            <Image className='me-2' width={200} height={200} src={img2} alt='' />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
    </div>
    </div>

    


</>
  )
}

export default Threeslider








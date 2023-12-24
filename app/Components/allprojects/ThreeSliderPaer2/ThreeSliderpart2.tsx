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
import img2 from '../../../../public/assets/Rectangle 377.png'
import img3 from '../../../../public/assets/Rectangle 37.png'
import Image from 'next/image'
import style from './ThreeSliderPart2.module.scss'

function ThreeSliderPart2() {
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
                          <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreesliderpart1" className='w-100' height={206} src={img1} alt='' /></SwiperSlide>
                          <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreesliderpart1" className='w-100' height={206} src={img2} alt='' /></SwiperSlide>
                          <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreesliderpart1" className='w-100' height={206} src={img3} alt='' /></SwiperSlide>

                      </Swiper>
                      <Link href='#'>
                          <button className={`btn ${style.button}`}>Museums</button>
                      </Link>
                      <h6 ><Link className={style.h6} href='/projects/1'> Cyber Security Museum</Link> / <Link className={style.h6} href='/projects/11'> dalia Saadany</Link></h6>

                      <div className="modal fade" id="staticBackdropthreesliderpart1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                          <div className="modal-dialog">
                              <div className="modal-content">
                                  <div className="modal-header">
                                      <h1 className="modal-title fs-5" id="staticBackdropLabel">threesliderpart1</h1>
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
                          <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreesliderthreePart2" className='w-100' height={206} src={img2} alt='' /></SwiperSlide>
                          <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreesliderthreePart2" className='w-100' height={206} src={img1} alt='' /></SwiperSlide>
                          <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreesliderthreePart2" className='w-100' height={206} src={img3} alt='' /></SwiperSlide>

                      </Swiper>
                      <Link href='#'>
                          <button className={`btn ${style.button}`}>Houses</button>
                      </Link>
                      <h6 ><Link className={style.h6} href='/projects/1'>Ashgar City</Link> / <Link className={style.h6} href='#'> Mona Hussien</Link></h6>

                      <div className="modal fade" id="staticBackdropthreesliderthreePart2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                          <div className="modal-dialog">
                              <div className="modal-content">
                                  <div className="modal-header">
                                      <h1 className="modal-title fs-5" id="staticBackdropLabel">sliderthreePart2</h1>
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
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreesliderpart3" className='w-100' height={206} src={img3} alt='' /></SwiperSlide>
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreesliderpart3" className='w-100' height={206} src={img2} alt='' /></SwiperSlide>
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreesliderpart3" className='w-100' height={206} src={img3} alt='' /></SwiperSlide>

              </Swiper>
              <Link href='#'>
                <button className={`btn ${style.button}`}>Hotels</button> 
              </Link>
              <h6 ><Link className={style.h6} href='/projects/1'>St. Regis Towers</Link> / <Link className={style.h6} href='#'> E C G</Link></h6>
              <div className="modal fade" id="staticBackdropthreesliderpart3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">threesliderpart3</h1>
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
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreesliderpart4" className='w-100' height={206} src={img1} alt='' /></SwiperSlide>
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreesliderpart4" className='w-100' height={206} src={img2} alt='' /></SwiperSlide>
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreesliderpart4" className='w-100' height={206} src={img3} alt='' /></SwiperSlide>

              </Swiper>
              <Link href='#'>
                <button className={`btn ${style.button}`}>Museums</button> 
              </Link>
              <h6 ><Link className={style.h6} href='/projects/1'>Cyber Security Museum</Link> / <Link className={style.h6} href='#'> dalia Saadany</Link></h6>
              <div className="modal fade" id="staticBackdropthreesliderpart4" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">threesliderpart4</h1>
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
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreesliderpart5" className='w-100' height={206} src={img2} alt='' /></SwiperSlide>
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreesliderpart5" className='w-100' height={206} src={img1} alt='' /></SwiperSlide>
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreesliderpart5" className='w-100' height={206} src={img3} alt='' /></SwiperSlide>

              </Swiper>
              <Link href='#'>
                <button className={`btn ${style.button}`}>Houses</button> 
              </Link>
              <h6 ><Link className={style.h6} href='/projects/1'>Ashgar City</Link> / <Link className={style.h6} href='#'> Mona Hussien</Link></h6>
              <div className="modal fade" id="staticBackdropthreesliderpart5" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">threesliderpart5</h1>
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
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreesliderpart6" className='w-100' height={206} src={img3} alt='' /></SwiperSlide>
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreesliderpart6" className='w-100' height={206} src={img2} alt='' /></SwiperSlide>
                <SwiperSlide><Image data-bs-toggle="modal" data-bs-target="#staticBackdropthreesliderpart6" className='w-100' height={206} src={img3} alt='' /></SwiperSlide>

              </Swiper>
              <Link href='#'>
                <button className={`btn ${style.button}`}>Hotels</button> 
              </Link>
              <h6 ><Link className={style.h6} href='/projects/1'>St. Regis Towers</Link> / <Link className={style.h6} href='#'> E C G</Link></h6>
              <div className="modal fade" id="staticBackdropthreesliderpart6" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">threesliderpart6</h1>
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

export default ThreeSliderPart2








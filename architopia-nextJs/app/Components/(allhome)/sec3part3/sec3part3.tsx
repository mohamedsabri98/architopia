import React from 'react'
import style from './sec3part3.module.scss'
import Image from 'next/image'
import img4 from '../../../../public/assets/Frame 64.png'
import img5 from '../../../../public/assets//Rectangle 28.png'
import img6 from '../../../../public/assets/Rectangle 27.png'
import img7 from '../../../../public/assets/Rectangle 48.png'
import img8 from '../../../../public/assets/Rectangle 47.png'
import img9 from '../../../../public/assets/Rectangle 50.png'
import img10 from '../../../../public/assets/Rectangle 27.png'
import img11 from '../../../../public/assets/Frame.png'
import img12 from '../../../../public/assets/Frame2.png'
import img13 from '../../../../public/assets/Frame3.png'
import img14 from '../../../../public/assets/Frame-4.png'
import img15 from '../../../../public/assets/Frame5.png'
import img16 from '../../../../public/assets/Frame6.png'
import img17 from '../../../../public/assets/Frame7.png'
import img18 from '../../../../public/assets/Frame8.png'
import Link from 'next/link'


function Sec3part3() {
  return (
      <>

          <div className={` ${style.captionSection2}`}>
              <h6 className={`${style.captionSectionleft}`}><Link className={style.linkcaption} href='#'>Social and Stacked Living</Link> / <Link className={style.linkcaption} href='#'>POLYGOON Architecture</Link> </h6>
          </div>
          <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z" fill="#797979" />
              </svg>
              <span className={style.spansec2}>about 2 hours ago</span>
          </div>
          <div>
              <Image className={`w-100  ${style.imgsectiontwo}`} height={426} src={img4} alt='' />
          </div>

          {/* 5 photo    */}

          <div className={`d-flex  align-items-center ${style.listImg}`}>
              <Image width={130} height={140} src={img5} alt='img' />
              <Image className={style.t} width={130} height={140} src={img6} alt='img' />
              <Image className={style.t} width={130} height={140} src={img7} alt='img' />
              <Image className={style.t} width={130} height={140} src={img8} alt='img' />
              <Image className={style.t} width={130} height={140} src={img9} alt='img' />
              <div className={`${style.t} cursor-pointer position-relative`}>
                  <Image width={130} height={140} src={img10} alt='' />
                  <div data-bs-toggle="modal" data-bs-target="#staticBackdropsec3part3" className={style.sliderphoto}>
                      <h4 className='text-white '>+12</h4>
                  </div>
                  <div className="modal fade" id="staticBackdropsec3part3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div className="modal-dialog">
                          <div className="modal-content">
                              <div className="modal-header">
                                  <h1 className="modal-title fs-5" id="staticBackdropLabel">sec3 part3</h1>
                                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body">
                                  <Image className='me-2' width={200} height={200} src={img4} alt='' />
                                  <Image className='me-2' width={200} height={200} src={img4} alt='' />
                                  <Image className='me-2' width={200} height={200} src={img4} alt='' />
                                  <Image className='me-2' width={200} height={200} src={img4} alt='' />
                                  <Image className='me-2' width={200} height={200} src={img4} alt='' />
                                  <Image className='me-2' width={200} height={200} src={img4} alt='' />
                                  <Image className='me-2' width={200} height={200} src={img4} alt='' />
                                  <Image className='me-2' width={200} height={200} src={img4} alt='' />
                              </div>
                              <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* caption name */}

          <h6 className={style.sectionthreeh6}><span className='text-main'> urban space,</span>sustinability<span className='text-main'>, Egypt, Cairo</span></h6>

          <div className={`d-flex align-items-center`}>
              <div className={`${style.captionAll1} w-50 me-2`}>
                  <div className=" mb-2 d-flex ">
                      <Image src={img11} alt='logo' />
                      <p className='ms-2 bold text-darkk'>Architects:</p>
                      <span className='ms-2 bold text-main'><Link className={style.linksDescriptionaskkarr} href='#'>Osama Askar</Link></span>
                  </div>
                  <div className=" mb-2 d-flex ">
                      <Image src={img12} alt='logo' />

                      <p className='ms-2 bold text-darkk'>Area:</p>
                      <span className='ms-2 bold text-main '>2340 m²</span>
                  </div>
                  <div className=" mb-2 d-flex">
                      <Image src={img13} alt='logo' />

                      <p className='ms-2 bold text-darkk'>Year:</p>
                      <span className='ms-2 bold text-main'>2023</span>
                  </div>
              </div>

              <div className={`${style.captionAll2} w-50 `}>
                  <div className="  mb-2 d-flex">
                      <Image src={img14} alt='logo' />

                      <p className='ms-2 bold text-darkk'>interior desig:</p>
                      <span className='ms-2 bold text-main cursor-pointer'><Link className={style.linksDescriptionaskkarr} href='#'>Norhan Ali</Link>  </span>
                  </div>
                  <div className=" mb-2 d-flex">
                      <Image src={img15} alt='logo' />
                      <p className='ms-2 bold text-darkk'>Contracto:</p>
                      <span className='ms-2 bold text-main cursor-pointer'><Link className={style.linksDescriptionaskkarr} href='#'>Ashraf</Link> </span>
                  </div>
                  <div className=" mb-2 d-flex">
                      <Image src={img16} alt='logo' />
                      <p className='ms-2 bold text-darkk'>Facade contrac:</p>
                      <span className='ms-2 bold text-main cursor-pointer'><Link className={style.linksDescriptionaskkarr} href='#'>Saleh</Link> </span>
                  </div>
              </div>
          </div>

          <div className=" mb-2 d-flex alighn-items-center">
              <Image src={img17} alt='logo' />

              <p className='ms-2 bold text-darkk'>Main Supliers:</p>
              <span className='ms-2 bold text-main '>Saint Gobian, GLC, frist Marble, ever green</span>
          </div>

          <div className={`${style.upbtn} d-flex align-items-center `}>
              <button className={`${style.hoverr} btn text-white px-4 py-3`}>
                  <svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_21_19)">
                          <path d="M9 4H15C15.5304 4 16.0391 4.21071 16.4142 4.58579C16.7893 4.96086 17 5.46957 17 6V20L12 17L7 20V6C7 5.46957 7.21071 4.96086 7.58579 4.58579C7.96086 4.21071 8.46957 4 9 4Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                      <defs>
                          <clipPath id="clip0_21_19">
                              <rect width="24" height="24" fill="white" />
                          </clipPath>
                      </defs>
                  </svg>
                  Save The Project
              </button>

              <Link href='#'>
                  <button className={`${style.hoverr2} btn  border 1px solid black  px-3  py-3`}>
                      Read More
                      <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <g clip-path="url(#clip0_21_31)">
                              <path d="M7 7L12 12L7 17" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M13 7L18 12L13 17" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </g>
                          <defs>
                              <clipPath id="clip0_21_31">
                                  <rect width="24" height="24" fill="white" />
                              </clipPath>
                          </defs>
                      </svg>
                  </button>
              </Link>
          </div>


      </>
  )
}

export default Sec3part3


















import React from 'react'
import Image from 'next/image'
import style from './sec2part3.module.scss'
import img13 from '../../../../public/assets/Rectangle 20.png'
import img14 from '../../../../public/assets/Rectangle 20.png'
import img15 from '../../../../public/assets/Rectangle 20.png'
import Link from 'next/link'

function Sec2part3() {
  return (
    <>
    <div className="row">
        <div className="col-md-12">
        <div>
            <h5 className={`${style.captionSectionright2}  text-darkk`}>Top products</h5>
            
            <div className={`${style.cart}  w-100 d-flex justify-content-center align-items-center`}>
            <div className=" d-flex justify-content-between align-items-center">
                <Image   src={img13} alt=''/>
                <h5 className='ms-3'><Link className={style.carth5} href='#'>Gurdau Winery</Link> / <Link className={style.carth5} href='#'>Aleš Fiala</Link> </h5>
            </div>
            </div>
            <div className={`${style.cart} w-100 d-flex justify-content-between align-items-center`}>
                <div className=" d-flex justify-content-between align-items-center">
                <Image  src={img14} alt=''/>
                <h5 className='ms-3'><Link className={style.carth5} href='#'>Booking.com City Campus</Link> /<Link className={style.carth5} href='#'>UNStudio + HofmanDujardin</Link></h5>
                </div>
            </div>
            <div className={`${style.cart} w-100 d-flex justify-content-between alighn-items-center`}>
            <div className=" d-flex justify-content-between align-items-center">
                <Image  src={img15} alt=''/>
                <h5 className='ms-3'><Link className={style.carth5} href='#'>Booking.com City Campus</Link> /<Link className={style.carth5} href='#'>UNStudio + HofmanDujardin</Link></h5>
            </div>
            </div>
        </div>
        </div>
    </div>
   

</>
  )
}

export default Sec2part3





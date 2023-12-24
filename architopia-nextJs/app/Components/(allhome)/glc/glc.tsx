import React from 'react'
import Image from 'next/image'
import style from './glc.module.scss'
import img2 from '../../../../public/assets/Rectangle 38.png'
import Link from 'next/link'


function Glc() {
  return (
    <div className="row">
    <div className="col-md-12">
      <Link href='#'>
      <div className="position-relative">
          <Image  className={`w-100`} width={341} height={140} src={img2} alt=''/>
          <div className={style.glcSlider}>
            <h4 className='text-white '>GLC PAINTS</h4>
          </div>
      </div>
      </Link>
    </div>
  </div>
  )
}

export default Glc









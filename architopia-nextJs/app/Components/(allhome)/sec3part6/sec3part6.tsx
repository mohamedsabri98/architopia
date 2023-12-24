import React from 'react'
import Image from 'next/image'
import style from './sec3part6.module.scss'
import img1 from '../../../../public/assets/Rectangle 37.png'
import img2 from '../../../../public/assets/Rectangle 34.png'
import img3 from '../../../../public/assets/Rectangle 42.png'


function Sec3part6() {
  return (
    <>
    <div className="col-md-12 mt-3">
        <div className={`${style.img} position-relative`}>
            <Image className='w-100'   src={img1} width={351} height={206}  alt='' />
            <div className={style.glcSlider}>
            <h4 className={`${style.captionslider} text-white`}>ECG</h4>
          </div>
        </div>
        <div className={`${style.img} position-relative`}>
            <Image className='w-100'   src={img2} width={351} height={206}  alt='' />
            <div className={style.glcSlider}>
            <h4 className='text-white '>ECG</h4>
          </div>
        </div>
        <div className={`${style.img} position-relative`}>
            <Image className='w-100'   src={img3} width={351} height={206}  alt='' />
            <div className={style.glcSlider}>
            <h4 className='text-white '>ECG</h4>
          </div>
        </div>
     
    </div>

</>
  )
}

export default Sec3part6






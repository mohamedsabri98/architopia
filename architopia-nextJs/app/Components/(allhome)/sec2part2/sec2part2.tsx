import React from 'react'
import Image from 'next/image'
import style from './sec2part2.module.scss'
import img6 from '../../../../public/assets/Rectangle 27.png'
 import img7 from '../../../../public/assets/Rectangle 48.png'
 import img8 from '../../../../public/assets/Rectangle 47.png'
import img9 from '../../../../public/assets/Rectangle 50.png'
import img11 from '../../../../public/assets/logo-70.png'
 import img12 from '../../../../public/assets/logo-82.png'
 import img13 from '../../../../public/assets/Rectangle 377.png'
 import img14 from '../../../../public/assets/Rectangle 27.jpg'
 import img15 from '../../../../public/assets/Frame11111.png'
 import img16 from '../../../../public/assets/Rectangle 338.png'
 import img17 from '../../../../public/assets/Rectangle 3334.png'
 import img18 from '../../../../public/assets/logo-70.png'


import Link from 'next/link'
 

function Sec2part2() {
  return (
    <>


      <div className="row">
        <div className={`${style.captionSectionright}`}>
          <p>Product Catalog</p>
        </div>
        <div className="col-md-6">
          <div>
            <div className={`${style.imgsectiontwo2img} `}>
              <Link href='#'>
                <Image className='w-100' src={img13} width={168} height={223} alt='' />
              </Link>
              <Link href='#'>
                <div className={`${style.UptextPosition}`}>
                  <div className={`${style.textPosition2} `}> <Image src={img11} alt='logo' /> </div>
                </div>
              </Link>

            </div>
            <div className=" ">
              <Link href='#'>
                <Image className='w-100 ' src={img16} width={168} height={223} alt='' />
              </Link>
              <Link href='#'>
                <div className={`${style.UptextPosition} height={223}  m-auto `}>
                  <div className={`${style.textPosition2} text-center m-auto `}> <Image src={img15} alt='logo' /> </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div>
            <div className={style.imgsectiontwo2img}>
              <Link href='#'>
                <Image className='w-100' src={img6} width={168} height={223} alt='' />
              </Link>
              <Link href='#'>
                <div className={`${style.UptextPosition} `}>
                  <span className={`${style.textPosition2}`}> <Image src={img11} alt='logo' /> </span>
                </div>
              </Link>
            </div>
            <div className="">
              <Link href='#'>
                <Image className='w-100' src={img17} width={168} height={223} alt='' />
              </Link>
              <Link href='#'>
                <div className={`${style.UptextPosition}`}>
                  <span className={`${style.textPosition2}`}> <Image src={img18} alt='logo' /> </span>
                </div>
              </Link>

            </div>
          </div>
        </div>
      </div>
 

</>
  )
}

export default Sec2part2





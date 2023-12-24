import React from 'react'
import Image from 'next/image'
import style from './sec3part1.module.scss'
import img16 from '../../../../public/assets/Frame 66.png'
import Link from 'next/link'


function Sec3part1() {
  return (
    <>
    <div className="row">
      <div className="col-md-6">
              <div >
                  <Image height={316} className='w-100' src={img16} alt=''/>
              </div>
      </div>

      <div className="col-md-6">
          <div>
            <p className={style.sec4p1}>offers broad-ranging roofing expertise and state-of-the-art solutions. Its focus is on providing the most innovative and sustainable building materials ...</p>
            
            <h5 className='h6 mb-3'>written by /</h5>
              
              <Link href='#' >
              <button className={`${style.hoverr2} btn  mt-2 border 1px solid black  px-4  py-3`}> Read More 
                <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <g clip-path="url(#clip0_21_31)">
                              <path d="M7 7L12 12L7 17" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M13 7L18 12L13 17" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </g>
                  <defs>
                              <clipPath id="clip0_21_31">
                              <rect width="24" height="24" fill="white"/>
                              </clipPath>
                          </defs>
                    </svg>
              </button>
              </Link>
                
          </div>
        </div>
        </div>

            {/* <h5 className={style.psec4}><Link className={style.psec4} href='#'>Social and Stacked Living</Link>/<Link className={style.psec4} href='#'>POLYGOON Architecture</Link> </h5>
            <div className={`${style.icon} text-darkk`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z" fill="#797979"/>
              </svg>
              <span className='ms-3 '>about 2 hours ago</span>
    </div> */}
      
    
    </>
  )
}

export default Sec3part1





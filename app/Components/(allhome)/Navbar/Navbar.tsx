import React from 'react'
import Image from 'next/image'
import style from './Nabvar.module.scss'
import img1 from '../../../../public/assets/ar_01.png' 
import img2 from '../../../../public/assets/client-4.png' 

import Link from 'next/link'


function Navbar() {
  return (
    <>      
    <div className={`${style.upNavbar} d-flex align-items-center justify-content-center`}>
      <div className="icon d-flex  align-items-center justify-content-center">
      <ul className={`${style.SubmitProject} navbar-nav mb-lg-0`}>
        <li className={`nav-item d-flex`}>
          <Link data-bs-toggle="modal" data-bs-target="#exampleModal" className="nav-link" href="#">Submit Project</Link>
        </li>
      </ul>
      <ul className={`${style.uplooad} navbar-nav mb-lg-0`}>
        <li className={`nav-item d-flex`}>
          <Link data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="nav-link" href="#">Upload add</Link>
        </li>
      </ul>
        
        
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g clip-path="url(#clip0_22_213)">
          <path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.6001 9H20.4001" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.6001 15H20.4001" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.4999 3C9.81525 5.69961 8.92212 8.81787 8.92212 12C8.92212 15.1821 9.81525 18.3004 11.4999 21" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.5 3C14.1847 5.69961 15.0778 8.81787 15.0778 12C15.0778 15.1821 14.1847 18.3004 12.5 21" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_22_213">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        <span className={`${style.navspan}`}>EN</span>
      </div>

      <div className={`${style.logonav} m-auto`}>
          <Image src={img1} width={226} height={38} alt='Logo Navbar'  />
      </div>

      <div className={`${style.allbtnn} d-flex align-items-center justify-content-center`}>
          <button  className={`${style.button1} btn`}>Sign Up</button>
          <button className={`${style.button2} btn `}>Login</button>
      </div>
    </div>



<div className="modal fade" id="exampleModal" tabIndex={-1}  aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
  <div className="modal-content">
    <div className="modal-header">
      <h1 className="modal-title fs-5" id="exampleModalLabel">Submit project</h1>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
      ...
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" className="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>
</div>


<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Upload add</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>






    <div className={style.border}></div>

    <div className={style.edittest}>
     <nav className={`navbar navbar-expand-lg m-auto ${style.nabarr}`}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse ms-5 navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav m-auto d-flex alighn-items-center justify-content-center mb-lg-0">
            
              <li className={`nav-item   ${style.navHome}`}>
                <Link className="nav-link w-100" href="/">Timeline
                </Link>
              </li>
              <li className={`nav-item   ${style.navHomeout}`}>
                <Link className="nav-link" href="/projects">Projects</Link>
              </li>
              <li className={`nav-item   ${style.navHomeout}`}>
                <Link className="nav-link" href="/products">Products</Link>
              </li>
              <li className={`nav-item   ${style.navHomeout}`}>
                <Link className="nav-link" href="/archipartner">Archipartner</Link>
              </li>
              <li className={`nav-item   ${style.navHomeout}`}>
                <Link className="nav-link" href="/news">News</Link>
              </li>
              <li className={`nav-item   ${style.navHomeout}`}>
                <Link className="nav-link" href="/contact">Contact Us</Link>
              </li>
              <li className={`nav-item   ${style.navHomeout}`}>
                <Link className="nav-link" href="#"><i className="fas fa-search"></i></Link>
              </li>

    
            </ul>
          
          </div>
        </div>
      </nav>
     </div>
  </>
  )
}

export default Navbar



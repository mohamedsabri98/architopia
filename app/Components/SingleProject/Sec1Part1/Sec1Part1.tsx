import React from "react";
import style from "./Sec1Part1.module.scss";
import Image from "next/image";
import img4 from "../../../../public/assets/Rectangle 44.png";
import img5 from "../../../../public/assets/single project/image 1.png";
import img6 from "../../../../public/assets/single project/image 2.png";
import img7 from "../../../../public/assets/single project/Rectangle 3.png";
import img8 from "../../../../public/assets/single project/image 4.png";
import img9 from "../../../../public/assets/single project/image 5.png";
import img10 from "../../../../public/assets/single project/image 1.png";
import img11 from "../../../../public/assets/Frame.png";
import img12 from "../../../../public/assets/Frame2.png";
import img13 from "../../../../public/assets/Frame3.png";
import img14 from "../../../../public/assets/Frame4.png";
import img15 from "../../../../public/assets/Frame5.png";
import img16 from "../../../../public/assets/Frame6.png";
import img17 from "../../../../public/assets/Frame7.png";
import img19 from "../../../../public/assets/single project/Rectangle slider2.png";
import img20 from "../../../../public/assets/single project/image slider2.png";
import img21 from "../../../../public/assets/single project/image slider 4.png";
import img22 from "../../../../public/assets/single project/image slider5.png";
import img24 from "../../../../public/assets/single project/image 128.png";
import img25 from "../../../../public/assets/single project/image 126.png";
import img26 from "../../../../public/assets/single project/image 129.png";

import Link from "next/link";

function Sec1Part1() {
    return (
        <>
            <div className="col-md-8">
                <div className="div">
                    <div className={` ${style.captionSection2}`}>
                        <h6 className={`${style.captionSectionleft}`}>
                            <Link className={style.linkcaption} href="#">
                                Cairo International Airport TB2
                            </Link>{" "}
                        </h6>
                    </div>
                    <div>
                        <Image
                            className={`w-100  ${style.imgsectiontwo}`}
                            height={426}
                            src={img4}
                            alt=""
                        />
                    </div>

                    {/* 5 photo    */}

                    <div
                        className={`d-flex  align-items-center ${style.listImg}`}
                    >
                        <Image width={130} height={140} src={img5} alt="img" />
                        <Image
                            className={style.t}
                            width={130}
                            height={140}
                            src={img6}
                            alt="img"
                        />
                        <Image
                            className={style.t}
                            width={130}
                            height={140}
                            src={img7}
                            alt="img"
                        />
                        <Image
                            className={style.t}
                            width={130}
                            height={140}
                            src={img8}
                            alt="img"
                        />
                        <Image
                            className={style.t}
                            width={130}
                            height={140}
                            src={img9}
                            alt="img"
                        />
                        <div
                            className={`${style.t} cursor-pointer position-relative`}
                        >
                            <Image
                                width={130}
                                height={140}
                                src={img10}
                                alt=""
                            />
                            <div
                                data-bs-toggle="modal"
                                data-bs-target="#staticBackdropsingleproject1"
                                className={style.sliderphoto}
                            >
                                <h4 className="text-white ">+12</h4>
                            </div>
                            <div
                                className="modal fade"
                                id="staticBackdropsingleproject1"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"
                                tabIndex={-1}
                                aria-labelledby="staticBackdropLabel"
                                aria-hidden="true"
                            >
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1
                                                className="modal-title fs-5"
                                                id="staticBackdropLabel"
                                            >
                                                singleproject1
                                            </h1>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="modal"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                        <div className="modal-body">
                                            <Image
                                                className="me-2"
                                                width={200}
                                                height={200}
                                                src={img5}
                                                alt=""
                                            />
                                            <Image
                                                className="me-2"
                                                width={200}
                                                height={200}
                                                src={img6}
                                                alt=""
                                            />
                                            <Image
                                                className="me-2"
                                                width={200}
                                                height={200}
                                                src={img7}
                                                alt=""
                                            />
                                            <Image
                                                className="me-2"
                                                width={200}
                                                height={200}
                                                src={img8}
                                                alt=""
                                            />
                                            <Image
                                                className="me-2"
                                                width={200}
                                                height={200}
                                                src={img9}
                                                alt=""
                                            />
                                            <Image
                                                className="me-2"
                                                width={200}
                                                height={200}
                                                src={img5}
                                                alt=""
                                            />
                                            <Image
                                                className="me-2"
                                                width={200}
                                                height={200}
                                                src={img6}
                                                alt=""
                                            />
                                            <Image
                                                className="me-2"
                                                width={200}
                                                height={200}
                                                src={img7}
                                                alt=""
                                            />
                                        </div>
                                        <div className="modal-footer">
                                            <button
                                                type="button"
                                                className="btn btn-secondary"
                                                data-bs-dismiss="modal"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* caption name */}

                    <h6 className={style.sectionthreeh6}>
                        <span className="text-main"> urban space,</span>
                        sustinability
                        <span className="text-main">, Egypt, Cairo</span>
                    </h6>

                    <div className={`d-flex align-items-center`}>
                        <div className={`${style.captionAll1} w-50 me-2`}>
                            <div className=" mb-2 d-flex ">
                                <Image src={img11} alt="logo" />
                                <p className="ms-2 bold text-darkk">
                                    Architects:
                                </p>
                                <span className="ms-2 bold text-main">
                                    <Link
                                        className={
                                            style.linksDescriptionaskkarr
                                        }
                                        href="#"
                                    >
                                        Osama Askar
                                    </Link>
                                </span>
                            </div>
                            <div className=" mb-2 d-flex ">
                                <Image src={img12} alt="logo" />

                                <p className="ms-2 bold text-darkk">Area:</p>
                                <span className="ms-2 bold text-main ">
                                    2340 m²
                                </span>
                            </div>
                            <div className=" mb-2 d-flex">
                                <Image src={img13} alt="logo" />

                                <p className="ms-2 bold text-darkk">Year:</p>
                                <span className="ms-2 bold text-main ">
                                    2023
                                </span>
                            </div>
                        </div>

                        <div className={`${style.captionAll2} w-50 `}>
                            <div className="  mb-2 d-flex">
                                <Image src={img14} alt="logo" />

                                <p className="ms-2 bold text-darkk">
                                    interior desig:
                                </p>
                                <span className="ms-2 bold text-main cursor-pointer">
                                    <Link
                                        className={
                                            style.linksDescriptionaskkarr
                                        }
                                        href="#"
                                    >
                                        Norhan Ali
                                    </Link>{" "}
                                </span>
                            </div>
                            <div className=" mb-2 d-flex">
                                <Image src={img15} alt="logo" />
                                <p className="ms-2 bold text-darkk">
                                    Contracto:
                                </p>
                                <span className="ms-2 bold text-main cursor-pointer">
                                    <Link
                                        className={
                                            style.linksDescriptionaskkarr
                                        }
                                        href="#"
                                    >
                                        Ashraf
                                    </Link>{" "}
                                </span>
                            </div>
                            <div className=" mb-2 d-flex">
                                <Image src={img16} alt="logo" />
                                <p className="ms-2 bold text-darkk">
                                    Facade contrac:
                                </p>
                                <span className="ms-2 bold text-main cursor-pointer">
                                    <Link
                                        className={
                                            style.linksDescriptionaskkarr
                                        }
                                        href="#"
                                    >
                                        Saleh
                                    </Link>{" "}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className=" mb-2 d-flex alighn-items-center">
                        <Image src={img17} alt="logo" />

                        <p className="ms-2 bold text-darkk">Main Supliers:</p>
                        <span className="ms-2 bold text-main ">
                            Saint Gobian, GLC, frist Marble, ever green
                        </span>
                    </div>

                    <div
                        className={`${style.upbtn} d-flex align-items-center `}
                    >
                        <button
                            className={`${style.hoverr} btn text-white px-4 py-3`}
                        >
                            <svg
                                className="me-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <g clip-path="url(#clip0_21_19)">
                                    <path
                                        d="M9 4H15C15.5304 4 16.0391 4.21071 16.4142 4.58579C16.7893 4.96086 17 5.46957 17 6V20L12 17L7 20V6C7 5.46957 7.21071 4.96086 7.58579 4.58579C7.96086 4.21071 8.46957 4 9 4Z"
                                        stroke="white"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_21_19">
                                        <rect
                                            width="24"
                                            height="24"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            Save The Project
                        </button>

                        {/* <Link href='#'>
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
                      </Link> */}
                    </div>
                </div>

                {/*                                part2                            */}

                <div className={style.slider2}>
                    <Image className="w-100" src={img19} alt="slider2" />
                    <p className={style.slider2p}>
                        Cairo International Airport’s Terminal Building 2 has
                        undergone a major expansion in order to double its
                        passenger handling capacity to 7.5 million passengers
                        per year
                    </p>
                </div>
                {/*                                part3                            */}
                <div className={style.slider2}>
                    <Image className="w-100" src={img20} alt="slider2" />
                    <p className={style.slider2p}>
                        The TB2 project involved the demolition of the existing
                        building and the construction of a new larger terminal,
                        as well as the construction of new airside and landside
                        pavements, with a pavement area exceeding 300,000 m², in
                        which ECG provided complete design and supervision
                        services.order to double its passenger handling capacity
                        to 7.5 million passengers per year
                    </p>
                </div>
                {/*                                part4                            */}
                <div className={style.slider2}>
                    <Image className="w-100" src={img21} alt="slider2" />
                    <p className={style.slider2p}>
                        The hi-tech baggage handling system is based on state
                        of‐ the‐art aviation security technologies, such as CCTV
                        and baggage scanning systems, in addition to early
                        baggage storage, seven baggage reclaim carrousels, 51
                        metal detectors, and 58 X-ray units, handling a baggage
                        capacity of 3,000 bags/hour
                    </p>
                </div>
                {/*                                part5                            */}
                <div className={`${style.slider2} text-center`}>
                    <Image
                        width={469}
                        height={510}
                        className="text-center"
                        src={img22}
                        alt="slider2"
                    />
                    <p className={`${style.slider2p} text-start`}>
                        The hi-tech baggage handling system is based on state
                        of‐ the‐art aviation security technologies, such as CCTV
                        and baggage scanning systems, in addition to early
                        baggage storage, seven baggage reclaim carrousels, 51
                        metal detectors, and 58 X-ray units, handling a baggage
                        capacity of 3,000 bags/hour.
                    </p>
                </div>
                {/*                                part6                            */}
                <div className="">
                    <h5 className={style.part6h5}>RECOMMENDED PROJECTS</h5>
                    <div
                        className={`d-flex  align-items-center ${style.listImg}`}
                    >
                        <Link href="#">
                            <Image
                                width={130}
                                height={140}
                                src={img5}
                                alt="img"
                            />
                        </Link>
                        <Link href="#">
                            <Image
                                className={style.t}
                                width={130}
                                height={140}
                                src={img6}
                                alt="img"
                            />
                        </Link>
                        <Link href="#">
                            <Image
                                className={style.t}
                                width={130}
                                height={140}
                                src={img7}
                                alt="img"
                            />
                        </Link>
                        <Link href="#">
                            <Image
                                className={style.t}
                                width={130}
                                height={140}
                                src={img8}
                                alt="img"
                            />
                        </Link>
                        <Link href="#">
                            <Image
                                className={style.t}
                                width={130}
                                height={140}
                                src={img9}
                                alt="img"
                            />
                        </Link>
                        <Link href="#">
                            <Image
                                className={style.t}
                                width={130}
                                height={140}
                                src={img10}
                                alt="img"
                            />
                        </Link>
                    </div>
                </div>

                {/*                                part7                             */}

                <div className={style.part7}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex align-items-center justify-content-between">
                                <Link href="#" className={style.part7link}>
                                    <Image
                                        className={style.part7img}
                                        src={img24}
                                        alt="logo"
                                    />
                                    <p className="ms-4 mt-2">
                                        More projects by Arab Contractors
                                    </p>
                                </Link>
                                <Link href="#">
                                    <button className={`${style.button2} btn `}>
                                        Follow
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex align-items-center justify-content-between">
                                <Link href="#" className={style.part7link}>
                                    <Image
                                        className={style.part7img}
                                        src={img24}
                                        alt="logo"
                                    />
                                    <p className="ms-4 mt-2">
                                        More projects by Civil Aviation
                                    </p>
                                </Link>
                                <Link href="#">
                                    <button className={`${style.button2} btn `}>
                                        Follow
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 mt-5">
                            <div className="d-flex align-items-center justify-content-between">
                                <Link href="#" className={style.part7link}>
                                    <Image
                                        className={style.part7img}
                                        src={img25}
                                        alt="logo"
                                    />
                                    <p className="ms-4 mt-2">
                                        More projects by E C G
                                    </p>
                                </Link>
                                <Link href="#">
                                    <button className={`${style.button2} btn `}>
                                        Follow
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 mt-5">
                            <div className="d-flex align-items-center justify-content-between">
                                <Link href="#" className={style.part7link}>
                                    <Image
                                        className={` ${style.part7img}`}
                                        src={img26}
                                        alt="logo"
                                    />
                                    <p className="ms-4 mt-2">
                                        More projects by Alico
                                    </p>
                                </Link>
                                <Link href="#">
                                    <button className={`${style.button2} btn `}>
                                        Follow
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sec1Part1;

import React from "react";
import style from "./page.module.scss";
import Link from "next/link";
import Bigslider from "../Components/allprojects/bigslider/bigslider";
import Twoslider from "../Components/allprojects/two slider/twoslider";
import Threeslider from "../Components/allprojects/threeslider/threeslider";
import MainSlider from "../Components/allprojects/MainSlider/MainSlider";
import ThreeSliderPart2 from "../Components/allprojects/ThreeSliderPaer2/ThreeSliderpart2";
import Navbar2 from "../Components/allprojects/navbar2/navbar2";

const Projects = () => {
    return (
        <>
            <Navbar2 />

            <div className={style.ArchitectureProjects}>
                <div className="row">
                    <div className="col-md-12">
                        <div className={style.caption}>
                            <h4>
                                Architecture Projects{" "}
                                <span className="text-main2">(123)</span>
                            </h4>
                            <p className="">
                                op architecture projects recently published on
                                Architupia. The most inspiring residential
                                architecture, interior design, landscaping,
                                urbanism, and more from the Egypt’s best
                                architects
                            </p>
                        </div>

                        <div
                            className={`${style.links} cursor-pointer d-flex align-items-center`}
                        >
                            <ul className="navbar-nav">
                                <li className={` nav-item dropdown`}>
                                    <div className="dropdown">
                                        <button
                                            className={`${style.border} btn btn-white dropdown-toggle`}
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Categories
                                        </button>
                                        <ul
                                            className="dropdown-menu "
                                            aria-labelledby="navbarDropdownMenuLink"
                                        >
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    mobile app
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Subscribe
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className={` nav-item dropdown`}>
                                    <div className="dropdown">
                                        <button
                                            className={`${style.border} btn btn-white dropdown-toggle`}
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Architects
                                        </button>
                                        <ul
                                            className="dropdown-menu "
                                            aria-labelledby="navbarDropdownMenuLink"
                                        >
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    mobile app
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Subscribe
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className={` nav-item dropdown`}>
                                    <div className="dropdown">
                                        <button
                                            className={`${style.border} btn btn-white dropdown-toggle`}
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Interior Designers
                                        </button>
                                        <ul
                                            className="dropdown-menu "
                                            aria-labelledby="navbarDropdownMenuLink"
                                        >
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    mobile app
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Subscribe
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className={` nav-item dropdown`}>
                                    <div className="dropdown">
                                        <button
                                            className={`${style.border} btn btn-white dropdown-toggle`}
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Contractors
                                        </button>
                                        <ul
                                            className="dropdown-menu "
                                            aria-labelledby="navbarDropdownMenuLink"
                                        >
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    mobile app
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Subscribe
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className={` nav-item dropdown`}>
                                    <div className="dropdown">
                                        <button
                                            className={`${style.border} btn btn-white dropdown-toggle`}
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Developers
                                        </button>
                                        <ul
                                            className="dropdown-menu "
                                            aria-labelledby="navbarDropdownMenuLink"
                                        >
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    mobile app
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Subscribe
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className={` nav-item dropdown`}>
                                    <div className="dropdown">
                                        <button
                                            className={`${style.border} btn btn-white dropdown-toggle`}
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Suppliers
                                        </button>
                                        <ul
                                            className="dropdown-menu "
                                            aria-labelledby="navbarDropdownMenuLink"
                                        >
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    mobile app
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Subscribe
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className={` nav-item dropdown`}>
                                    <div className="dropdown">
                                        <button
                                            className={`${style.border} btn btn-white dropdown-toggle`}
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Products
                                        </button>
                                        <ul
                                            className="dropdown-menu "
                                            aria-labelledby="navbarDropdownMenuLink"
                                        >
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    mobile app
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Subscribe
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* <div className="accordion w-25" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div> */}
                </div>
            </div>

            <section className="section1">
                <div className={`row ${style.slider}`}>
                    <Bigslider />
                    <Twoslider />
                </div>
            </section>

            <section className="section2">
                <div className="row">
                    <Threeslider />
                </div>
            </section>

            <section className="section3">
                <div className="row">
                    <MainSlider />
                </div>
            </section>

            <section className="section4">
                <div className={`row ${style.slider}`}>
                    <Bigslider />
                    <Twoslider />
                </div>
            </section>
            <section className="section5">
                <div className="row">
                    <ThreeSliderPart2 />
                </div>
            </section>

            <section className="section6">
                <div className="row">
                    <div className="col-md-12">
                        <MainSlider />
                    </div>
                </div>
            </section>

            {/* <section className='section7'>
      <div className={`row ${style.slider}`}>
        <Bigslider/>
        <Twoslider/>
      </div>
    </section>
    <section className='section8'>
      <div className="row">
        <Threeslider/>
      </div>
    </section>

    <section className='section9'>
      <div className="row">
        <div className="col-md-12">
        <MainSlider/>
        </div>
      </div>
    </section> */}
        </>
    );
};

export default Projects;

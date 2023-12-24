import React from "react";
import Link from "next/link";
import style from "./page.module.scss";
import Navbar2 from "../Components/allproducts/navbar2/navbar2";
import Bigslider from "../Components/allproducts/bigslider/bigslider";
import Twoslider from "../Components/allproducts/two slider/twoslider";
import Threeslider from "../Components/allproducts/threeslider/threeslider";
import MainSlider from "../Components/allproducts/MainSlider/MainSlider";
// import Navbar3 from '../Components/allproducts/navbar3/navbar3';

const Products = () => {
    return (
        <>
            <Navbar2 />

            <div className={style.ArchitectureProjects}>
                <div className="row">
                    <div className="col-md-12">
                        <div className={style.caption}>
                            <h4>
                                Architecture Products
                                <span className="text-main2">(123)</span>
                            </h4>
                            <p className="">
                                Top products for architects recently published
                                on Architupia. The most inspiring materials,
                                equipment, and more, from the world’s best
                                manufacturers.
                            </p>
                        </div>

                        <div className=" cursor-pointer d-flex align-items-center">
                            <ul className="navbar-nav">
                                <li
                                    className={`${style.border} nav-item dropdown`}
                                >
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdownMenuLink"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Categories
                                    </a>
                                    <ul
                                        className={`  dropdown-menu`}
                                        aria-labelledby="navbarDropdownMenuLink"
                                    >
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                href="/"
                                            >
                                                mobile app
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                href="/products"
                                            >
                                                Subscribe
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li
                                    className={`${style.border} nav-item dropdown`}
                                >
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdownMenuLink"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Architects
                                    </a>
                                    <ul
                                        className={`${style.dropdownmenu} dropdown-menu`}
                                        aria-labelledby="navbarDropdownMenuLink"
                                    >
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                href="/"
                                            >
                                                mobile app
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                href="/products"
                                            >
                                                Subscribe
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li
                                    className={`${style.border} nav-item dropdown`}
                                >
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdownMenuLink"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Interior
                                        <br />
                                        Designers
                                    </a>
                                    <ul
                                        className={`${style.dropdownmenu} dropdown-menu`}
                                        aria-labelledby="navbarDropdownMenuLink"
                                    >
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                href="/"
                                            >
                                                mobile app
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                href="/products"
                                            >
                                                Subscribe
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li
                                    className={`${style.border} nav-item dropdown`}
                                >
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdownMenuLink"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Multi-
                                        <br />
                                        Specialty
                                    </a>
                                    <ul
                                        className={`${style.dropdownmenu} dropdown-menu`}
                                        aria-labelledby="navbarDropdownMenuLink"
                                    >
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                href="/"
                                            >
                                                mobile app
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                href="/products"
                                            >
                                                Subscribe
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
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
                    <div className="col-md-12">
                        <MainSlider />
                    </div>
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
                    <Threeslider />
                </div>
            </section>

            <section className="section6">
                <div className="row">
                    <div className="col-md-12">
                        <MainSlider />
                    </div>
                </div>
            </section>

            <section className="section7">
                <div className={`row ${style.slider}`}>
                    <Bigslider />
                    <Twoslider />
                </div>
            </section>

            <section className="section8">
                <div className="row">
                    <Threeslider />
                </div>
            </section>

            <section className="section9">
                <div className="row">
                    <div className="col-md-12">
                        <MainSlider />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;

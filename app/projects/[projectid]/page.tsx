import React from "react";
import style from "./page.module.scss";
import Image from "next/image";
import img1 from "../../../public/assets/Frameproject1.png";
import img2 from "../../../public/assets/ic_facebook.png";
import img3 from "../../../public/assets/ic_linkedin.png";
import img4 from "../../../public/assets/wats.png";
import img5 from "../../../public/assets/pinterest.png";
import img6 from "../../../public/assets/ar_01.png";
import img7 from "../../../public/assets/single project/Framelogomobile.png";

import Link from "next/link";
import Sec1Part1 from "../../Components/SingleProject/Sec1Part1/Sec1Part1";
import Sec2Part2 from "../../Components/SingleProject/Sec2Part2/Sec2Part2";
import Navbar2 from "../../Components/allprojects/navbar2/navbar2";

function SingleProject() {
    return (
        <>
            <Navbar2 />

            <div className={style.pathlink}>
                <span className={style.pathlinkcolor}>
                    Architupia <Image src={img1} alt="logo" />
                </span>
                <span className={style.pathlinkcolor}>
                    Projects <Image src={img1} alt="logo" />{" "}
                </span>
                <span className={style.pathlinkcolor}>
                    Airport <Image src={img1} alt="logo" />{" "}
                </span>
                <span className={style.pathlinkcolor}>
                    Cairo International Airport TB2{" "}
                </span>
                <Image src={img1} alt="logo" />
                <span> ECG</span>
            </div>
            <div className={style.icons}>
                <div className={style.iconsImg}>
                    <Link href="#">
                        <Image src={img2} alt="" />
                    </Link>
                </div>
                <div className={`${style.iconsImg} ${style.iconsEdit}`}>
                    <Link href="#">
                        <Image src={img3} alt="" />
                    </Link>
                </div>
                <div className={`${style.iconsImg} ${style.iconsEdit}`}>
                    <Link href="#">
                        <Image src={img4} alt="" />
                    </Link>
                </div>
                <div className={`${style.iconsImg} ${style.iconsEdit}`}>
                    <Link href="#">
                        <Image src={img5} alt="" />
                    </Link>
                </div>
            </div>

            <section className="sec1">
                <div className="row">
                    <Sec1Part1 />
                    <Sec2Part2 />
                </div>
            </section>
            {/* <section className='footer bg-danger'>
      <div className="row">
        <div className="col-md-12">
          <div className="div">
            <Image height={50} src={img6} alt='logo' ></Image>
          </div>
          <div className="div">
            <Image src={img7} alt='logo' ></Image>
            <h6>00201001560037 - 00201010037139</h6>
          </div>
        </div>
      </div>

    </section> */}
        </>
    );
}

export default SingleProject;

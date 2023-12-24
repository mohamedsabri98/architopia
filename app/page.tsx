import React from "react";
import Image from "next/image";
import style from "./page.module.scss";
import Leftslider from "./Components/(allhome)/leftslider/leftslider";
import Glc from "./Components/(allhome)/glc/glc";
import Sec2part1 from "./Components/(allhome)/sec2part1/sec2part1";
import Sec2part2 from "./Components/(allhome)/sec2part2/sec2part2";
import Sec2part3 from "./Components/(allhome)/sec2part3/sec2part3";
import Sec3part1 from "./Components/(allhome)/sec3part1/sec3part1";
import Sec3psrt2 from "./Components/(allhome)/sec3part2/sec3psrt2";
import Navbar from "./Components/(allhome)/Navbar/Navbar";
import BigSlider from "./Components/(allhome)/BigSlider/BigSlider";
import Sec3part3 from "./Components/(allhome)/sec3part3/sec3part3";
import Sec3psrt4 from "./Components/(allhome)/sec3part4/sec3part4";
import Sec3part5 from "./Components/(allhome)/sec3part5/sec3part5";
import Sec3part6 from "./Components/(allhome)/sec3part6/sec3part6";

export default function Home() {
    return (
        <>
            <Navbar />

            <section className={style.section1}>
                <div className="row">
                    <BigSlider />

                    <div className="col-md-3">
                        <Leftslider />

                        <Glc />
                    </div>
                </div>
            </section>

            <section className="secrion2">
                <div className="row">
                    <Sec2part1 />

                    <div className="col-md-4">
                        <Sec2part2 />

                        <Sec2part3 />
                    </div>
                </div>
            </section>

            <section className="section3">
                <div className="row">
                    <div className="col-md-8">
                        <Sec3part1 />
                        <Sec3part3 />
                        <Sec3part5 />
                    </div>

                    <div className="col-md-4">
                        <div className="row">
                            <Sec3psrt2 />
                            <Sec3psrt4 />
                            <Sec3part6 />
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className='section4'>
    <div className="row">
      <Sec4part1/>
      <Sec4part2/>
    </div>

    </section> */}
        </>
    );
}

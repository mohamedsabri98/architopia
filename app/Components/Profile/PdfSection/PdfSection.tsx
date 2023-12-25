import React from "react";
import Image from "next/image";
import "./PdfSection.css"

function PdfSection(props) {
    return (
        <>
            <div className="d-flex">
                <div className="mt-3">
                    <Image src={props.photo} alt="logo" width={30} height={30} />
                </div>
                <div className="mt-2 ms-4 info">
                    <span>
                        dar certificate <br /> 2.5M | pdf
                    </span>
                </div>
                <div className="mt-3 ms-5 ps-5">
                    <div className="d-flex">
                        <div>
                            <Image
                                src={props.image}
                                alt="logo"
                                width={22}
                                height={22}
                            />
                        </div>
                        <div className="mt-1 ms-2">
                            <a className="link-download" href="#">Download</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default PdfSection;

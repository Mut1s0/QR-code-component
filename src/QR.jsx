import QR_img from "./images/image-qr-code.png";
import React from 'react'

function QR() {

    return(

        <main className="flex justify-center items-center h-screen">

            <div className="h-max max-w-[85%] w-[350px] p-4 rounded-[10px]">

                <div className="mb-5">

                    <img src={QR_img} alt="QR code" className="w-full rounded-[10px]" />

                </div>

                <div className="text-center mb-5 px-2 sm:px-5">

                    <h1 className="title text-[19px] sm:text-[23px] mb-4 leading-6">Improve your front-end skills by building projects</h1>

                    <p className="title-sub text-xs sm:text-[16px] leading-5">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>

                </div>

            </div>

        </main>
    )
}

export default QR;

"use client";

import { useState } from "react";
// import img from "./assets/Group 161.png";
import img from "../serviceComponent/assets/Group 161.png";
import img2 from "../serviceComponent/assets/Rectangle 9.png";

import Image from "next/image";
export default function Twins() {
  return (
    <div className="bg-[#fff] text-[#1E1E1E] min-h-screen p-10 max-md:p-4">
      <div className="heading flex mb-10 flex-col items-center justify-center">
        <h1 className="text-[56px] text-[#4D4D4D] text-center font-salernomi w-[60%] max-md:w-full font-normal mb-6">
          Twins Born Minutes Apart – Do They Have the Same Destiny?
        </h1>
        <svg
          width="49"
          height="24"
          viewBox="0 0 49 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="3.5" cy="12" r="3" fill="#1E1E2C" />
          <path
            d="M24.5015 24C24.5633 17.4338 29.8977 12.12 36.5 12.0386C29.8718 11.9568 24.5216 6.60173 24.501 0H24.5007C24.4802 6.60234 19.129 11.9578 12.5 12.0386C19.1032 12.1191 24.4385 17.4332 24.5003 24H24.5015Z"
            fill="#1E1E2C"
          />
          <circle cx="45.5" cy="12" r="3" fill="#1E1E2C" />
        </svg>
      </div>

      <div className="img h-[500px] bg-white">
        {/* <Image src={} alt="j"/> */}
        imge
      </div>
      <div className="pr-4 max-md:flex-wrap flex flexcol font-inter gap-10 justify-center items-center my-10 ">
        {/* <h1 className="text-[40px] text-[#4D4D4D] text-left font-salernomi w-[40%] max-lg:w-full font-normal mb-6">
          Unlock the True Power of Astrology
        </h1> */}
        <div className="w-1/2 max-md:w-full">
          <p className="font-normal text-lg text-[#4D4D4D] w  text-center">
            Absolutely not! Even in{" "}
            <span className="text-[#000]">twin births</span> occurring within
            <span className="text-[#000]"> 2-3 minutes of each other, </span>
            destiny differs significantly.{" "}
          </p>
          <p className="font-normal text-lg text-[#4D4D4D] w  text-center">
            This is where <span className="text-[#000]">Hora Lagna,</span> which
            moves twice as fast as the regular Lagna, plays a vital role in
            distinguishing their paths.
          </p>
          <p className="font-normal text-lg text-[#4D4D4D] w  text-center">
            If twins—born within minutes—can have drastically different fates,
            how can <span className="text-[#000]">millions of people</span> born
            within a 2.5-day Moon sign period share the same destiny?
          </p>
        </div>
      </div>
    </div>
  );
}

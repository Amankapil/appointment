"use client";

import { useState } from "react";
import img from "./assets/Group 251.png";
import img2 from "./assets/Group 252.png";

import Image from "next/image";
export default function HeroEn() {
  return (
    <div className="bg-[#F5F0EB] text-[#1E1E1E] min-h-screen p-10 max-md:p-4">
      <div className="heading flex mb-10 flex-col items-center justify-center">
        <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi w-[60%] max-md:w-full font-normal mb-6">
          Astrology Enthusiasts – A Must-Read!
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

      <div className="img h-[500px] max-md:h-full flex items-center justify-center">
        <Image className="pb-10" src={img} alt="j" />
      </div>
      <div className="pr-4 max-lg:flex-wrap flex flexcol font-inter gap-10 justify-center items-start my-10 ">
        <h1 className="text-[40px] text-[#4D4D4D] text-left font-salernomi w-[40%] max-lg:w-full font-normal mb-6">
          Unlock the True Power of Astrology
        </h1>
        <div className="w-1/2 max-lg:w-full">
          <p className="font-normal text-lg text-[#4D4D4D] w  text-left">
            This information is invaluable for anyone interested in astrology,
            whether as a seeker or a consultant. Take the time to read and
            deeply understand the hidden truths and cosmic influences shaping
            our lives.
          </p>
        </div>
      </div>
      <div className="pr-4 max-lg:flex-wrap flex flexcol font-inter gap-10 justify-center items-start my-10 ">
        {/* <h1 className="text-[40px] text-[#4D4D4D] text-left font-salernomi w-[40%] max-lg:w-full font-normal mb-6">
          Unlock the True Power of Astrology
        </h1> */}
        <div className="img w-[500px] h-[300px] max-md:h-full max-md:w-full">
          <Image className="pb-10" src={img2} alt="j" />
        </div>
        <div className="w-1/2 max-lg:w-full">
          <p className="font-normal text-lg text-[#4D4D4D] w  text-left">
            Every passing second, human life is impacted by the continuous
            transit of planets. This is a fundamental{" "}
            <span className="text-[#000]"> Cosmic Law.</span>
          </p>
          <br />
          <p className="font-normal text-lg text-[#4D4D4D] w  text-left">
            This is why{" "}
            <span className="text-[#000]">
              {" "}
              Prashna Jyotishya (Vedic Horary Astrology)
            </span>
            holds profound significance. Unlike traditional birth chart
            readings, Prashna Jyotishya provides
            <span className="text-[#000]">
              {" "}
              real-time, highly accurate insights{" "}
            </span>
            taking into account
            <span className="text-[#000]">
              {" "}
              both your karma and the astrologer’s divine intuition.
            </span>
          </p>
          <br />
          <p className="font-normal text-lg text-[#4D4D4D] w  text-left">
            To truly benefit, approach astrology with a
            <span className="text-[#000]"> devotional, sincere,</span>
            and
            <span className="text-[#000]"> open mind,</span>
            setting aside ego, authority, and social status.
          </p>
        </div>
      </div>
    </div>
  );
}

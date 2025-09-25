"use client";

import { useState } from "react";
// import img from "./assets/Group 161.png";
// import img from "/images/Frame 272.png";
// import img2 from "./assets/Rectangle 9.png";
import Image from "next/image";
import Link from "next/link";
export default function BHero() {
  return (
    <div className="bg-[#F5F0EB] text-[#1E1E1E] min-hscreen p-10 py-20 max-md:p-4">
      <div className="heading flex mb-10 flex-col items-center justify-center">
        <h1 className="text-[64px] max-md:text-[40px] text-[#4D4D4D] text-center font-salernomi w-[60%] max-xl:w-full font-normal mb-6">
          Practical Decisions. Cosmic Precision.{" "}
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

      <div className="img h-[450px] max-md:h-full bgwhite flex items-center justify-center py-10">
        <Image
          width={900}
          height={500}
          loading="lazy"
          src="/images/Frame 272 copy 3.png"
          alt="j"
        />
      </div>
      <div className="pr-4 max-lg:flex-wrap flex flex-col font-inter justify-center items-center mt-10 ">
        <p className="font-normal text-lg text-[#4D4D4D] w-1/2 max-lg:w-full  text-center">
          In business, every second counts. Whether it’s deciding to buy, sell,
          invest, or wait, the wrong move can cost dearly. With the power of
          Vedic Prashna Kundali, Prashna Siddhi gives you clear, reliable, and
          actionable answers often in one crisp sentence.
        </p>
        <Link
          href="/booking"
          className="bg-[#101010] text-[20px] font-salernomi my-10 text-white px-[24px] py-[12px] rounded hover:bg-[#333333] transition-all duration-300 shadow-button"
        >
          Request your consultation
        </Link>{" "}
        <p className="font-normal text-lg text-[#4D4D4D94]  max-lg:w-full  text-center">
          Astrological guidance is advisory. For legal/financial decisions,
          consult qualified professionals
        </p>
      </div>
    </div>
  );
}

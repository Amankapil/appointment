"use client";

import { useState } from "react";

// import img2 from "./assets/Rectangle 9.png";
import Image from "next/image";
import Link from "next/link";
export default function Begin() {
  const [currency, setCurrency] = useState("INR");

  return (
    <div className="bg-[#fff] text-[#1E1E1E]  p-10 max-md:p-4">
      <div className="heading flex mb-10 flex-col items-center justify-center">
        <h1 className="text-[64px] max-md:text-[40px] text-[#4D4D4D] text-center font-salernomi w-[70%] max-md:w-full font-normal mb-6">
          Begin Now{" "}
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

      <div className="img  max-md:h-full bgwhite flex items-center justify-center pt-4">
        <h1 className="text-[40px] max-md:text-[40px] text-[#4D4D4D] text-center font-salernomi w-[70%] max-md:w-full font-normal mb-6">
          Select your preferred Siddhi-7 format to begin
        </h1>
      </div>
      <div className="pr-4 max-lg:flex-wrap flex font-inter  gap-3 justify-center items-center mt- ">
        <Link
          href="/booking"
          style={{
            boxShadow: "0px 3px 6px 0px #00000029",
            boxShadow: "0px 10px 10px 0px #00000024",
            boxShadow: "0px 24px 14px 0px #00000014",
            boxShadow: "0px 42px 17px 0px #00000005",
            boxShadow: "0px 66px 18px 0px #00000000",
          }}
          className={`mt-6 py-3 px-12 cursor-pointer font-salernomi text-[20px] flex justify-center max-lg:w-[70%] bg-black text-white  rounded-md text-sm font-medium `}
        >
          Live Call
        </Link>
        <Link
          href="/booking"
          style={{
            boxShadow: "0px 3px 6px 0px #00000029",
            boxShadow: "0px 10px 10px 0px #00000024",
            boxShadow: "0px 24px 14px 0px #00000014",
            boxShadow: "0px 42px 17px 0px #00000005",
            boxShadow: "0px 66px 18px 0px #00000000",
          }}
          className={`mt-6 py-3 px-6 cursor-pointer font-salernomi text-[20px] flex justify-center max-lg:w-[70%] bg-black text-white  rounded-md text-sm font-medium  `}
        >
          Voice Message
        </Link>
      </div>
    </div>
  );
}

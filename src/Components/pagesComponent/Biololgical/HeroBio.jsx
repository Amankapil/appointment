"use client";

import { useState } from "react";
// import img from "./assets/Group 161.png";
import img from "../serviceComponent/assets/Group 161.png";
import img2 from "../serviceComponent/assets/Rectangle 9.png";

import Image from "next/image";
export default function HeroBio() {
  return (
    <div className="bg-[#F5F0EB] text-[#1E1E1E] min-h-screen p-10 max-md:p-4">
      <div className="heading flex mb-10 flex-col items-center justify-center">
        <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi w-[60%] max-md:w-full font-normal mb-6">
          Astrology and Biological Growth: A Deeper Insight
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
      <div className="pr-4 max-md:flex-wrap flex flexcol font-inter gap-10 justify-center items-start my-10 ">
        <h1 className="text-[40px] text-[#4D4D4D] text-left font-salernomi w-[40%] max-lg:w-full font-normal mb-6">
          Why This Information Matters?
        </h1>
        <div className="w-1/2 max-md:w-full">
          <p className="font-normal text-lg text-[#4D4D4D] w  text-left">
            Parenting comes with its share of concerns, especially when children
            display unique behavioral patterns during their formative years.
            Many parents find themselves wondering, Why is my child behaving
            this way? or What does this mean for their future?
          </p>
          <p className="font-normal text-lg text-[#4D4D4D] w  text-left">
            Astrology, when approached with wisdom, can provide a structured
            understanding of life’s natural phases. While medical science
            explains the biological milestones of growth, astrology offers
            insights into the cosmic patterns that influence human development.
            This article is meant to provide clarity and reassurance to parents—
            <span className="text-[#000]">
              not to promote astrology blindly, but to help dispel unnecessary
              fears and myths
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
// import img from "./assets/Group 161.png";
import img from "./assets/Ellipse 135.png";
import img2 from "./assets/Ellipse 135 copy.png";
import img3 from "./assets/Ellipse 135 (1).png";
import img4 from "./assets/Ellipse 135 (2).png";
import img5 from "./assets/Ellipse 135 (3).png";
import img6 from "./assets/Ellipse 135.png";
// import img2 from "./assets/Rectangle 9.png";
import Image from "next/image";
export default function Choose() {
  return (
    <div className="bg-[#F5F0EB] text-[#1E1E1E] min-h-screen p-10 max-md:p-4">
      <div className="heading flex mb-10 flex-col items-center justify-center">
        <h1 className="text-[64px] max-md:text-5xl text-[#4D4D4D] text-center font-salernomi w-[60%] max-md:w-full font-normal mb-6">
          Why Choose PrashnaSiddhi?
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

      <div className="flex items-center justify-center flex-wrap gap-4 pb-7">
        <div
          style={{
            boxShadow: "0px 0px 24px 2px #AC8C6066 inset",
          }}
          className="relative  w-[614px] h-[196px] max-md:w-full  border-[1px] border-[#c2a882] rounded-[24px] p-6 bg-[#F0EDE9] shadow-lg"
        >
          {/* <h3 className="text-lg font-semibold text-gray-700 text-center flex items-center justify-center">
            img
          </h3> */}

          {/* Toggle Switch */}
          <div className="flex justify-center flex-col items-center mt-3 max-md:mt-0">
            <div className="border absolute left-[7px]  max-md:left-[0px] top-[16px]  w-[598px] h-[160px] max-md:w-full rounded-[24px] one border-[#c49b6d] p-2">
              <div className="border absolute left-[7px]  max-md:left-0 -top-[10px] tw w-[582px] h-[176px] max-md:w-full rounded-[24px] border-[#c49b6d] p-6 transition-colors duration-300"></div>{" "}
            </div>
          </div>

          {/* Price Display */}
          <div className="text-center flex items-center justify-center mt-4 gap-3">
            <Image loading="lazy" src={img} alt="j" />
            <p className="text-2xl font-normal text-[#4D4D4D] font-inter text-left gap-3 max-md:text-[18px]">
              No birth details required—Prashna Kundali is divinely accurate.
            </p>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0px 0px 24px 2px #AC8C6066 inset",
          }}
          className="relative  w-[614px] h-[196px] max-md:w-full  border-[1px] border-[#c2a882] rounded-[24px] p-6 bg-[#F0EDE9] shadow-lg"
        >
          {/* <h3 className="text-lg font-semibold text-gray-700 text-center flex items-center justify-center">
            img
          </h3> */}

          {/* Toggle Switch */}
          <div className="flex justify-center flex-col items-center mt-3 max-md:mt-0">
            <div className="border absolute left-[7px] max-md:left-0 top-[16px]  w-[598px] h-[160px] max-md:w-full rounded-[24px] one border-[#c49b6d] p-2">
              <div className="border absolute left-[7px] max-md:left-0 -top-[10px] tw w-[582px] h-[176px] max-md:w-full rounded-[24px] border-[#c49b6d] p-6 transition-colors duration-300"></div>{" "}
            </div>
          </div>

          {/* Price Display */}
          <div className="text-center flex items-center justify-center mt-4 gap-3">
            <Image loading="lazy" src={img2} alt="j" />
            <p className="text-2xl font-normal text-[#4D4D4D] font-inter text-left gap-3 max-md:text-[18px]">
              Guidance beyond fear-based astrology—we empower, not frighten.
            </p>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0px 0px 24px 2px #AC8C6066 inset",
          }}
          className="relative  w-[614px] h-[196px] max-md:w-full  border-[1px] border-[#c2a882] rounded-[24px] p-6 bg-[#F0EDE9] shadow-lg"
        >
          {/* <h3 className="text-lg font-semibold text-gray-700 text-center flex items-center justify-center">
            img
          </h3> */}

          {/* Toggle Switch */}
          <div className="flex justify-center flex-col items-center mt-3 max-md:mt-0">
            <div className="border absolute left-[7px] max-md:left-0 top-[16px]  w-[598px] h-[160px] max-md:w-full rounded-[24px] one border-[#c49b6d] p-2">
              <div className="border absolute left-[7px] max-md:left-0 -top-[10px] tw w-[582px] h-[176px] max-md:w-full rounded-[24px] border-[#c49b6d] p-6 transition-colors duration-300"></div>{" "}
            </div>
          </div>

          {/* Price Display */}
          <div className="text-center flex items-center justify-center mt-4 gap-3">
            <Image loading="lazy" src={img3} alt="j" />
            <p className="text-2xl font-normal text-[#4D4D4D] font-inter text-left gap-3 max-md:text-[18px]">
              Accurate timing of events through real-time planetary transits.{" "}
            </p>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0px 0px 24px 2px #AC8C6066 inset",
          }}
          className="relative  w-[614px] h-[196px] max-md:w-full  border-[1px] border-[#c2a882] rounded-[24px] p-6 bg-[#F0EDE9] shadow-lg"
        >
          {/* <h3 className="text-lg font-semibold text-gray-700 text-center flex items-center justify-center">
            img
          </h3> */}

          {/* Toggle Switch */}
          <div className="flex justify-center flex-col items-center mt-3 max-md:mt-0">
            <div className="border absolute left-[7px] max-md:left-0 top-[16px]  w-[598px] h-[160px] max-md:w-full rounded-[24px] one border-[#c49b6d] p-2">
              <div className="border absolute left-[7px] max-md:left-0 -top-[10px] tw w-[582px] h-[176px] max-md:w-full rounded-[24px] border-[#c49b6d] p-6 transition-colors duration-300"></div>{" "}
            </div>
          </div>

          {/* Price Display */}
          <div className="text-center flex items-center justify-center mt-4 gap-3">
            <Image loading="lazy" src={img4} alt="j" />
            <p className="text-2xl font-normal text-[#4D4D4D] font-inter text-left gap-3 max-md:text-[18px]">
              Divine insights & spiritual wisdom—not commercialized remedies.{" "}
            </p>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0px 0px 24px 2px #AC8C6066 inset",
          }}
          className="relative  w-[614px] h-[196px] max-md:w-full  border-[1px] border-[#c2a882] rounded-[24px] p-6 bg-[#F0EDE9] shadow-lg"
        >
          {/* <h3 className="text-lg font-semibold text-gray-700 text-center flex items-center justify-center">
            img
          </h3> */}

          {/* Toggle Switch */}
          <div className="flex justify-center flex-col items-center mt-3 max-md:mt-0">
            <div className="border absolute left-[7px] max-md:left-0 top-[16px]  w-[598px] h-[160px] max-md:w-full rounded-[24px] one border-[#c49b6d] p-2">
              <div className="border absolute left-[7px] max-md:left-0 -top-[10px] tw w-[582px] h-[176px] max-md:w-full rounded-[24px] border-[#c49b6d] p-6 transition-colors duration-300"></div>{" "}
            </div>
          </div>

          {/* Price Display */}
          <div className="text-center flex items-center justify-center mt-4 gap-3">
            <Image loading="lazy" src={img5} alt="j" />
            <p className="text-2xl font-normal text-[#4D4D4D] font-inter text-left gap-3 max-md:text-[18px]">
              A sincere and honest approach—seek answers with faith & devotion.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

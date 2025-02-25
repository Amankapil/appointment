"use client";

import { useState } from "react";
// import img from "./assets/Group 161.png";
import img from "../serviceComponent/assets/Group 161.png";
import img2 from "../serviceComponent/assets/Rectangle 9.png";
// import img2 from "./assets/Rectangle 9.png";
import Image from "next/image";
export default function Medical() {
  return (
    <div className="bg-[#fff] text-[#1E1E1E] min-h-screen p-10 max-md:p-4">
      <div className="img h-[500px] bg-white">imge</div>
      <div className="pr-4 max-md:flex-wrap flex flexcol font-inter gap-10 justify-center items-start my-10 ">
        <h1 className="text-[40px] text-[#4D4D4D] text-left font-salernomi w-[40%] max-lg:w-full font-normal mb-6">
          The Medical Perspective: Understanding Growth
        </h1>
        <div className="w-1/2 max-md:w-full">
          <p className="font-normal text-lg text-[#4D4D4D] w  text-left">
            Medical professionals chart human growth with logical precision
            tracking physiological and psychological developments from birth
            through adulthood. Milestones such as infancy, childhood,
            adolescence, and adulthood are well-mapped, based on global
            averages. These frameworks offer a scientific baseline to measure a
            child’s progress.
          </p>
        </div>
      </div>
      <div className="heading flex mb-10 flex-col items-center justify-center">
        <svg
          width="1248"
          className="mt-10 max-xl:w-full"
          height="24"
          viewBox="0 0 1248 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M624.002 24C624.063 17.4338 629.398 12.12 636 12.0386C629.372 11.9568 624.022 6.60173 624.001 0H624.001C623.98 6.60234 618.629 11.9578 612 12.0386C618.603 12.1191 623.938 17.4332 624 24H624.002Z"
            fill="#F0EDE9"
          />
          <circle cx="599" cy="12" r="3" fill="#F0EDE9" />
          <circle cx="3" cy="12" r="3" fill="#F0EDE9" />
          <path d="M597 11.9999L5 12" stroke="#F0EDE9" />
          <circle cx="1245" cy="12" r="2.5" fill="#F0EDE9" stroke="#F0EDE9" />
          <circle cx="649" cy="12" r="2.5" fill="#F0EDE9" stroke="#F0EDE9" />
          <path d="M1243 12.0001L651 12" stroke="#F0EDE9" />
        </svg>
      </div>
    </div>
  );
}

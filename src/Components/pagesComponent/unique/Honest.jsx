"use client";

import { useState } from "react";
// import img from "./assets/Group 161.png";
import img from "../serviceComponent/assets/Group 161.png";
import img2 from "../serviceComponent/assets/Rectangle 9.png";
// import img2 from "./assets/Rectangle 9.png";
import Image from "next/image";
export default function Honest() {
  return (
    <div className="bg-[#fff] text-[#1E1E1E] min-h-screen p-10 max-md:p-4">
      {/* <div className="heading flex mb-10 flex-col items-center justify-center">
        <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi w-[60%] max-md:w-full font-normal mb-6">
          What Makes PrashnaSiddhi Truly Unique?
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
      </div> */}

      <div className="img h-[500px] bg-white">
        {/* <Image src={} alt="j"/> */}
        imge
      </div>
      <div className="pr-4 max-lg:flex-wrap flex flexcol font-inter gap-10 justify-center items-start my-10 ">
        <h1 className="text-[40px] text-[#4D4D4D] text-left font-salernomi w-[40%] max-lg:w-full font-normal mb-6">
          Come with a Devotional, Sincere & Honest Mind
        </h1>
        <div className="w-1/2 max-lg:w-full">
          <p className="font-normal text-lg text-[#4D4D4D] w  text-left">
            We firmly believe that true guidance comes when one approaches
            astrology with
            <span className="text-[#000]">
              faith, sincerity, and an open heart.{" "}
            </span>{" "}
            Prashna Siddhi is not just about predictions—it is about divine
            wisdom. A sincere and devotional mindset enhances the clarity and
            impact of the guidance you receive.
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

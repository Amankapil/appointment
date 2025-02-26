"use client";

import { useState } from "react";
// import img from "./assets/Group 161.png";
import img from "./assets/Group 220.png";
import img3 from "./assets/Group 221.png";
import img2 from "../serviceComponent/assets/Rectangle 9.png";
// import img2 from "./assets/Rectangle 9.png";
import Image from "next/image";
export default function HeroRem() {
  return (
    <div className="bg-[#F5F0EB] text-[#1E1E1E] min-h-screen p-10 max-md:p-4">
      <div className="heading flex mb-10 flex-col items-center justify-center">
        <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi w-[60%] max-md:w-full font-normal mb-6">
          Remedies: The Truth Behind Astrology, Karma & Spirituality
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

      <div className="img h-[500px] max-md:h-full flex items-center justify-center pb-10">
        <Image className="pb-10" src={img} alt="j" />
      </div>
      <div className="pr-4 my-10 max-lg:flex-wrap flex max-md:flex-wrap flexcol font-inter gap-10 justify-center items-start mt-4 ">
        <h1 className="text-[40px] text-[#4D4D4D] text-left font-salernomi w-[40%] max-lg:w-full font-normal mb-6">
          Astrology, Karma, and the Role of Remedies{" "}
        </h1>
        <div className="w-1/2 max-lg:w-full">
          <p className="font-normal text-lg text-[#4D4D4D] w  text-left">
            Does belief in <span className="text-[#000]">God, Karma </span> or
            <span className="text-[#000]"> Transmigration</span> truly matter?
          </p>
          <br />

          <p className="font-normal text-lg text-[#4D4D4D] w-1/ text-left">
            In today’s fast-moving digital age, dominated by{" "}
            <span className="text-[#000]">AI (Artificial Intelligence)</span>,
            many question these ancient concepts. Yet,
            <span className="text-[#000]">
              {" "}
              ironically, faith in astrological remedies remains stronger than
              ever. People spend heavily
            </span>{" "}
            on rituals, gemstones, and pujas, hoping to change their fate. But
            does it truly work?
          </p>
          <br />
          <p className="font-normal text-lg text-[#4D4D4D] w2  text-left">
            Astrological remedies have become a{" "}
            <span className="text-[#000]">commercial phenomenon,</span> but do
            they truly change one’s destiny?
          </p>
        </div>
      </div>

      <div className="img h-[500px] max-md:h-full flex items-center justify-center pb-10">
        <Image className="pb-10" src={img3} alt="j" />
      </div>

      <div className="pr-4 max-lg:flex-wrap max-md:flex-wrap flex flexcol font-inter gap-10 justify-center items-start mt-4 ">
        <h1 className="text-[40px] text-[#4D4D4D] text-left font-salernomi w-[40%] max-lg:w-full font-normal mb-6">
          Can Remedies Change Destiny?
        </h1>
        <div className="w-1/2 max-lg:w-full">
          <p className="font-normal text-lg text-[#4D4D4D] w  text-left">
            Think of destiny like{" "}
            <span className="text-[#000]">the foundation of a building—</span>{" "}
            it cannot be replaced. However, the{" "}
            <span className="text-[#000]">superstructure</span> (life’s
            circumstances) can be modified{" "}
            <span className="text-[#000]">
              based on time, effort, and wisdom.
            </span>
          </p>
          <br />

          <p className="font-normal text-lg text-[#4D4D4D] w-1/ text-left">
            <span className="text-[#000]">
              But can everything be changed as per one’s wish?
            </span>
          </p>
          <br />
          <p className="font-normal text-lg text-[#4D4D4D] w2  text-left">
            At
            <span className="text-[#000]"> Prashna Siddhi,</span> we believe in
            the{" "}
            <span className="text-[#000]">
              {" "}
              pure spiritual wisdom of the Zodiac, not commercial remedies.
            </span>
            We uphold
            <span className="text-[#000]"> moral and spiritual values</span> and
            do not promote solutions that mislead people into false hope.
          </p>
        </div>
      </div>
    </div>
  );
}

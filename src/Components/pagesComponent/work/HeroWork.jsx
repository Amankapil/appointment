"use client";

import { useState } from "react";
// import img from "./assets/Group 161.png";
import img from "../serviceComponent/assets/Group 161.png";
import img2 from "../serviceComponent/assets/Rectangle 9.png";
import img3 from "./assets/Rectangle 12.png";
import img4 from "./assets/Rectangle 12 (1).png";
import img5 from "./assets/Rectangle 12 copy.png";
// import img2 from "./assets/Rectangle 9.png";
import Image from "next/image";
export default function HeroWork() {
  const [currency, setCurrency] = useState("INR");

  return (
    <div className="bg-[#F5F0EB] text-[#1E1E1E] min-h-screen p-10 max-md:p-4">
      {/* Top Consultation Section */}

      <div className="heading flex mb-10 flex-col items-center justify-center">
        <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
          How it Works?
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
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-4xl mx-auto">
        {[
          {
            img: img3,
            title:
              "Prashna Jyotisha, a branch of ancient Vedic Astrology, originates from the Prashna Upanishad. Unlike traditional astrology that relies on birth details, Prashna Jyotisha also known as Horary Astrology—provides answers based on the exact moment a question is asked.",
          },
          {
            img: img4,
            title:
              "At this pivotal moment, the astrologer determines the Ascendant (Lagna) by shuffling sacred cowries, aligning the cosmic energies with the seeker’s query. Each question generates a unique Lagna, making every consultation a fresh astrological reading.",
          },
          {
            img: img5,
            title:
              "The planetary positions at that instant are considered a divine reflection of the universal will, resonating perfectly with the querist’s circumstances. This real-time celestial snapshot enables the astrologer to analyze the Prashna Kundali and offer precise, spiritually guided answers.",
          },
        ].map((item, index) => (
          <>
            <div
              key={index}
              className="border-[2px] border-[#AC8C60] rounded-[24px] p-3 flex relative gap-10 font-inter bg-white shadow-md max-md:flex-wrap max-md:justify-center"
            >
              <div className="w-3/4   pr-4 max-lg:flex-wrap flex flex-col font-inter justify-center max-md:w-full">
                <p className="font-normal text-lg">{item.title}</p>
              </div>
              <div className="w-[297px] h[296px] bggray-300 ">
                {" "}
                <Image src={item.img} alt="j" />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <svg
                width="865"
                height="24"
                viewBox="0 0 865 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M433.002 24C433.063 17.4338 438.398 12.12 445 12.0386C438.372 11.9568 433.022 6.60173 433.001 0H433.001C432.98 6.60234 427.629 11.9578 421 12.0386C427.603 12.1191 432.938 17.4332 433 24H433.002Z"
                  fill="#AC8C60"
                />
                <circle cx="408" cy="12" r="3" fill="#AC8C60" />
                <circle cx="3" cy="12" r="3" fill="#AC8C60" />
                <path d="M406 12L5 12" stroke="#AC8C60" />
                <circle
                  cx="862"
                  cy="12"
                  r="2.5"
                  fill="#AC8C60"
                  stroke="#AC8C60"
                />
                <circle
                  cx="458"
                  cy="12"
                  r="2.5"
                  fill="#AC8C60"
                  stroke="#AC8C60"
                />
                <path d="M860 12L460 12" stroke="#AC8C60" />
              </svg>
            </div>
          </>
        ))}
      </div>

      {/* Premium Consultation Section */}
    </div>
  );
}

"use client";

import { useState } from "react";
import img from "./assets/Group 161.png";
import img2 from "./assets/Rectangle 9.png";
import Image from "next/image";
export default function Consultation() {
  const [currency, setCurrency] = useState("INR");

  return (
    <div className="bg-[#F5F0EB] text-[#1E1E1E] min-h-screen p-10">
      {/* Top Consultation Section */}

      <div className="heading flex mb-10 flex-col items-center justify-center">
        <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
          Services Offered
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {[
          {
            title: "One-Question Consultation (Real-time answers in 5 minutes)",
          },
          { title: "Karma & Life Path Guidance" },
          { title: "Spiritual Counseling & Life Coaching" },
          {
            title:
              "Personalized Astrological Insights (Optional expansion in future)",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="border border-[#D4B999] rounded-lg p-6 flex relative gap-10 font-inter bg-white shadow-md"
          >
            <div className="w-[248px] h[296px] bggray-300 ">
              {" "}
              <Image src={img2} alt="j" />
            </div>
            <div className="w-3/4 pr-4 flex flex-col justify-start">
              <p className="font-normal text-lg">{item.title}</p>
            </div>
            {/* <div className="w-1/4 h-20 bggray-300 flex items-center justify-center rounded-md"></div> */}
            <div className="absolute bottom-4 right-4 text-lg font-semibold text-white bg[#D4B999] w-[200px] h-[200px] flex items-center justify-center rounded-full">
              {index + 1}
              <Image src={img} alt="j" />
            </div>
          </div>
        ))}
      </div>

      {/* Premium Consultation Section */}
    </div>
  );
}

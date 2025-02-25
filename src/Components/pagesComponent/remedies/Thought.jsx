"use client";

import { useState } from "react";
// import img from "./assets/Group 161.png";
import img from "../serviceComponent/assets/Group 161.png";
// import img2 from "../common-myths/assets/Group 106.png";

// import img2 from "./assets/Rectangle 9.png";
import Image from "next/image";
export default function Thought() {
  return (
    <div className="bg-[#fff] text-[#1E1E1E] min-h-screen p-10">
      <div className="heading flex mb-10 flex-col items-center justify-center">
        <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi w-[60%] max-md:w-full font-normal mb-6">
          Final Thought
        </h1>
      </div>

      <div className="flex flex-col items-center text-center px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {[
            "Destiny is the result of past karma.",
            "Remedies cannot erase it, but wisdom can help navigate it.",
            "True transformation comes from within—not external rituals.",
          ].map((text, index) => (
            <div
              key={index}
              className="w60 flex items-center justify-center text-center h-[500px] w-[400px] bg-contain bg-no-repeat text-black p-4 bg-center"
              style={{ backgroundImage: "url('/images/Group 106.png')" }}
            >
              <p className="text-[20px] font-inter font-medium">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="img h-[500px] bg-[#4D4D4D]">
        imge
      </div> */}

      <div className="flex flexcol items-center justify-between  bg-white p-8">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 0L40.7424 26.8874C40.9289 33.6405 46.3595 39.0711 53.1126 39.2576L80 40L53.1126 40.7424C46.3595 40.9289 40.9289 46.3595 40.7424 53.1126L40 80L39.2576 53.1126C39.0711 46.3595 33.6405 40.9289 26.8874 40.7424L-2.85003e-05 40L26.8874 39.2576C33.6405 39.0711 39.0711 33.6405 39.2576 26.8874L40 0Z"
            fill="#1E1E2C"
          />
        </svg>

        <p className="text-center text-[40px] font-salernomi text-gray-700 max-w-xl mb-8">
          Embrace self-awareness, spiritual strength, and divine intelligence!
        </p>
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 0L40.7424 26.8874C40.9289 33.6405 46.3595 39.0711 53.1126 39.2576L80 40L53.1126 40.7424C46.3595 40.9289 40.9289 46.3595 40.7424 53.1126L40 80L39.2576 53.1126C39.0711 46.3595 33.6405 40.9289 26.8874 40.7424L-2.85003e-05 40L26.8874 39.2576C33.6405 39.0711 39.0711 33.6405 39.2576 26.8874L40 0Z"
            fill="#1E1E2C"
          />
        </svg>
      </div>
    </div>
  );
}

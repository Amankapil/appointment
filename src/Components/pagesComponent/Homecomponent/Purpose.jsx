import React, { useState } from "react";
import img from "./assets/Group.svg";
import Image from "next/image";

import "./style.css";
import { Heading2Icon } from "lucide-react";

const Purpose = () => {
  // Single Card component with triple borders

  // Center “star” SVG

  return (
    <>
      <div className="bg-[#fff] py-20 max-md:pt-10 max-md:pb-0">
        <div className="heading flex flex-col items-center justify-center">
          <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
            Our Purpose
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
          <div className="py-10 mt-20">
            <Image loading="lazy" src={img} alt="jflas" />
          </div>
          <div className="flex items-center flex-col w-1/2 max-lg:w-full mt-8  justify-center text-center max-md:w-full max-md:h-full max-md:p-10">
            <p className="text-xl font-inter text-[#4D4D4D] mb-8">
              Our goal is{" "}
              <span className="text-[#000]">
                to settle the turbulence in your mind, relieve anxiety, and
                create mental clarity{" "}
              </span>{" "}
              —so you can move forward in life with{" "}
              <span className="text-[#000]">confidence, faith, </span> and{" "}
              <span className="text-[#000]">peace.</span>
            </p>
          </div>
          <svg
            width="1248"
            className="mt-10 max-xl:w-full max-md:mt-5"
            height="36"
            viewBox="0 0 1248 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M624.002 36C624.095 26.1506 632.096 18.1801 642 18.0579C632.058 17.9352 624.032 9.9026 624.002 0H624.001C623.97 9.90352 615.944 17.9366 606 18.0579C615.905 18.1787 623.908 26.1498 624 36H624.002Z"
              fill="#D8D1C7"
            />
            <circle cx="663" cy="18" r="4.5" fill="#D8D1C7" stroke="#D8D1C7" />
            <circle cx="1243" cy="18" r="4.5" fill="#D8D1C7" stroke="#D8D1C7" />
            <path d="M667 18L1239 18.0001" stroke="#D8D1C7" strokeWidth="2" />
            <circle cx="5" cy="18" r="4.5" fill="#D8D1C7" stroke="#D8D1C7" />
            <circle cx="585" cy="18" r="4.5" fill="#D8D1C7" stroke="#D8D1C7" />
            <path d="M9 18L581 18.0001" stroke="#D8D1C7" strokeWidth="2" />
          </svg>

          <div className="flex items-center karma gap-20 flex-col w-[60%] max-md:w-full mt-20  justify-center text-center max-md:h-full max-md:p-10 max-md:mt-5">
            <h2 className="text-[32px] text-[#101010] text-center font-salernomi font-normal mb-6">
              “If you don’t believe in the Karma Theory, ask yourself this – Did
              you choose your parents, or did they choose you?”
            </h2>{" "}
            <h2 className="text-[32px] text-[#101010] text-center font-salernomi font-normal mb-6">
              “Prediction tells you what may happen. But isn’t guidance about
              making the right choices more valuable?”
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purpose;

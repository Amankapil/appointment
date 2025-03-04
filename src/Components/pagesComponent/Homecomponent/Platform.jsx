import React, { useState } from "react";
import img from "./assets/Frame 174.png";
import Image from "next/image";

const Platform = () => {
  // Single Card component with triple borders

  // Center “star” SVG

  return (
    <>
      <div className="bg-[#fff] py-20 ">
        <div className="heading flex flex-col items-center justify-center">
          <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
            Who This Platform Is For?
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
          <div className="img-home py-20 flex justify-center w-full">
            <Image src={img} alt="jflas" />
          </div>
          <div className="flex items-center flex-col w-1/2 max-lg:w-full max-md:w-full max-md:h-full max-md:p-10  justify-center text-center">
            <p className="text-xl font-inter text-[#4D4D4D] mb-8">
              This space is for those who{" "}
              <span className="text-[#000]"> seek spiritual </span> clarity and
              approach astrology with a{" "}
              <span className="text-[#000]">
                {" "}
                pure heart and positive intent.{" "}
              </span>{" "}
              To truly benefit, one must uphold high{" "}
              <span className="text-[#000]">
                {" "}
                moral values, kindness, and devotion{" "}
              </span>
              —questions arising from{" "}
              <span className="text-[#000]">
                hatred, vengeance, or unethical desires{" "}
              </span>{" "}
              have no place here.
            </p>

            <p className="text-xl font-inter text-[#4D4D4D] mb-8">
              This platform does not entertain questions driven by{" "}
              <span className="text-[#000]">frivolous pursuits </span>(such as
              romantic chasing) but instead adheres to{" "}
              <span className="text-[#000]">
                Divine Law and Karmic accountability{" "}
              </span>
              —the destiny we bring at birth.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Platform;

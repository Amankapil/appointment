"use client";
import React from "react";
import img from "./assets/Frame 174.png";
import Image from "next/image";

const ReviewSection = () => {
  // Single Card component with triple borders

  // Center “star” SVG

  return (
    <>
      <div className="bg-[#fff] py-10 max-md:py-10 max-xl:px-4">
        <div className="heading flex flex-col items-center justify-center">
          <h1 className="text-[64px] max-md:text-[40px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
            What Our Clients Say?
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
          <iframe
            onLoad="iFrameResize(this)"
            src="https://5d1d9b02ec3c403a82e52bf6ae74f49c.elf.site"
            // style="border:none;width:100%;"
            className="h-[450px] pt-20 w-full flex items-center justify-center google-reviews"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ReviewSection;

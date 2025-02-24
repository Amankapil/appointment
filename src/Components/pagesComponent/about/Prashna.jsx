"use client";
import React from "react";
// import img from "./assets/Frame 174.png";
import Image from "next/image";

const Prashna = () => {
  // Single Card component with triple borders

  // Center “star” SVG

  return (
    <>
      <div className="bg-[#fff] py-20">
        <div className="heading flex flex-col items-center justify-center">
          <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
            What is Prashna Jyotishya?
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

          <svg
            width="825"
            height="440"
            viewBox="0 0 825 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="825" height="440" rx="24" fill="#F2F2F2" />
          </svg>
          {/* <Image src={img} alt="jflas" /> */}
          <div className="flex items-center flex-col w-1/2  justify-center text-center my-10">
            <p className="text-xl font-inter text-[#4D4D4D] mb-8">
              Prashna Jyotishya is an ancient{" "}
              <span className="text-[#000]"> Vedic science </span> rooted in the
              <span className="text-[#000]"> Prashna Upanishad, </span> offering
              divine insights based on the real time planetary positions at the
              moment a question is asked. It aligns with{" "}
              <span className="text-[#000]">
                {" "}
                spiritual energy distributed through the planets{" "}
              </span>
              much like how a Janma Kundali maps planetary transit at birth.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prashna;

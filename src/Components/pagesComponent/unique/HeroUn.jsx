"use client";

import { useState } from "react";
import img from "./assets/image 24.png";
import Image from "next/image";
export default function HeroUn() {
  return (
    <div className="bg-[#F5F0EB] text-[#1E1E1E] min-hscreen p-10 max-md:p-4">
      <div className="heading flex mb-10 flex-col items-center justify-center">
        <h1 className="text-[64px] max-md:text-5xl text-[#4D4D4D] text-center font-salernomi w-[60%] max-md:w-full font-normal mb-6">
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
      </div>

      <div className="img h-[500px] max-md:h-full flex items-center justify-center pb-10">
        <Image loading="lazy" className="pb-10" src={img} alt="j" />
      </div>
      <div className="pr-4 max-lg:flex-wrap flex flexcol font-inter gap-10 justify-center items-start my-10 ">
        <h1 className="text-[40px] text-[#4D4D4D] text-left font-salernomi w-[40%] max-lg:w-full font-normal mb-6">
          A Divine & Dynamic Approach to Astrology
        </h1>
        <div className="w-1/2 max-lg:w-full">
          <p className="font-normal text-lg text-[#4D4D4D] w  text-left">
            At Prashna Siddhi, we offer a unique and powerful method of Vedic
            Prashna Jyotishya, delivering precise answers without requiring your
            birth details. Unlike traditional astrology, which relies on a
            static birth chart, we cast a{" "}
            <span className="text-[#000]"> dedicated Prashna Kundali</span> for
            each question you ask. This dynamic approach reveals hidden secrets
            and allows for a
            <span className="text-[#000]">
              {" "}
              multi-faceted analysis of multiple Bhavas
            </span>{" "}
            —giving you deeper clarity than a conventional birth chart alone.
          </p>
        </div>
      </div>
      <div className="pr-4 max-lg:flex-wrap flex flexcol font-inter gap-10 justify-center items-start mt-4 ">
        <h1 className="text-[40px] text-[#4D4D4D] text-left font-salernomi w-[40%] max-lg:w-full font-normal mb-6">
          Key Advantages of Prashna Kundali Analysis:
        </h1>
        <div className="w-1/2 max-lg:w-full">
          <div className="lis  max-lg:p-8  max-w-[846px] mx-auto space-y-4 pb-10">
            <div
              style={{ boxShadow: "0px 0px 24px 2px #AC8C6066 inset" }}
              className="border-[1px] max-w-[826px] max-md:pl-8 max-w-826 border-[#AC8C60] items-center justify-center py-8 rounded-[24px] p-3 flex relative gap-10 font-inter bg-white shadow-md"
            >
              <div className="svg absolute -left-[27px]">
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="27" cy="27" r="26.5" stroke="#AC8C60" />
                  <path
                    d="M27.0035 54C27.1425 39.2259 39.1447 27.2701 54 27.0868C39.0866 26.9028 27.0486 14.8539 27.0023 0H27.0017C26.9555 14.8553 14.9153 26.905 0 27.0868C14.8572 27.268 26.8615 39.2247 27.0006 54H27.0035Z"
                    fill="#AC8C60"
                  />
                </svg>
              </div>
              <p className="text-xl font-inter text-center text-[#4D4D4D] mb8 w-3/4 max-md:w-full ">
                <span className="text-[#000]">Accurate timing of events</span>{" "}
                with real-time planetary transits.
              </p>
            </div>
            <div
              style={{ boxShadow: "0px 0px 24px 2px #AC8C6066 inset" }}
              className="border-[1px] max-w-[826px] max-md:pl-8 max-w-826 border-[#AC8C60] items-center justify-center py-8 rounded-[24px] p-3 flex relative gap-10 font-inter bg-white shadow-md"
            >
              <div className="svg absolute -left-[27px]">
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="27" cy="27" r="26.5" stroke="#AC8C60" />
                  <path
                    d="M27.0035 54C27.1425 39.2259 39.1447 27.2701 54 27.0868C39.0866 26.9028 27.0486 14.8539 27.0023 0H27.0017C26.9555 14.8553 14.9153 26.905 0 27.0868C14.8572 27.268 26.8615 39.2247 27.0006 54H27.0035Z"
                    fill="#AC8C60"
                  />
                </svg>
              </div>
              <p className="text-xl font-inter text-center text-[#4D4D4D] mb8 w-3/4 max-md:w-full ">
                <span className="text-[#000]"> Acts as a celestial GPS </span>{" "}
                to guide you through life’s uncertainties.
              </p>
            </div>
            <div
              style={{ boxShadow: "0px 0px 24px 2px #AC8C6066 inset" }}
              className="border-[1px] w-full max-w-[826px] max-md:pl-8 max-w-826 border-[#AC8C60] items-center justify-center py-8 rounded-[24px] p-3 flex relative gap-10 font-inter bg-white shadow-md"
            >
              <div className="svg absolute -left-[27px]">
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="27" cy="27" r="26.5" stroke="#AC8C60" />
                  <path
                    d="M27.0035 54C27.1425 39.2259 39.1447 27.2701 54 27.0868C39.0866 26.9028 27.0486 14.8539 27.0023 0H27.0017C26.9555 14.8553 14.9153 26.905 0 27.0868C14.8572 27.268 26.8615 39.2247 27.0006 54H27.0035Z"
                    fill="#AC8C60"
                  />
                </svg>
              </div>
              <p className="text-xl text-center font-inter text-[#4D4D4D] mb8 w-3/4 max-md:w-full ">
                <span className="text-[#000]">
                  Removes reliance on myths and misconceptions,{" "}
                </span>
                keeping astrology pure and insightful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

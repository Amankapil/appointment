"use client";

import { useState } from "react";
import img from "./assets/Group 225.png";
import Image from "next/image";
export default function Wisdom() {
  return (
    <div className="bg-[#fff] text-[#1E1E1E] min-h-screen p-10 max-md:p-4">
      <div className="max-w-7xl mx-auto">
        <div className="heading flex mb-10 flex-col items-center justify-center">
          <h1 className="text-[64px] max-md:text-[40px] text-[#4D4D4D] text-center font-salernomi w-[60%] max-xl:w-full font-normal mb-6">
            How to Face Destiny with Strength & Wisdom?
          </h1>
          {/* <svg
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
        </svg> */}
        </div>

        <div className="img h-[500px] max-xl:h-full flex items-center justify-center pb-10">
          <Image loading="lazy" className="pb-10" src={img} alt="j" />
        </div>
        <div className="pr-4 max-lg:flex-wrap flex flexcol font-inter gap-10 justify-center items-start mt-4 ">
          {/* <div className="w-[50%] max-lg:w-full">
          <p className="font-normal text-lg text-[#4D4D4D] w-[100%]  text-center">
            We
            <span className="text-[#000]">strongly believe</span> that the
            <span className="text-[#000]">
              most powerful remedy is sincere prayer and meditation—
            </span>{" "}
            the path followed by
            <span className="text-[#000]">
              saints and mystics across the world.
            </span>{" "}
          </p>
          <br />
        </div> */}
        </div>

        <div className="pr-4 max-lg:flex-wrap flex flexcol font-inter gap-10 justify-center items-start mt-4 ">
          <h1 className="text-[40px] text-[#4D4D4D] text-left font-salernomi w-[40%] max-lg:w-full font-normal mb-6">
            Instead of trying to erase karma through external rituals, focus on:
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
                  <span className="text-[#000]">Gratitude to the Creator—</span>{" "}
                  Gratitude to the Creator—human birth is the highest form in
                  His creation.
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
                  <span className="text-[#000]">
                    Meditation & self-discipline—
                  </span>{" "}
                  align thoughts with spiritual consciousness.
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
                    Facing challenges with courage—
                  </span>{" "}
                  boldly using the present to shape the future.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pr-4 max-lg:flex-wrap flex flex-col font-inter gap-10 mt-20 justify-center items-start mt4 ">
          <h1 className="text-[40px] text-[#4D4D4D] text-center font-salernomi  w-[100%] font-normal mb-6">
            No amount of money spent on remedies can remove life’s obstacles.
            Instead, prayer provides inner strength, confidence, and clarity.
          </h1>
          <h1 className="text-[40px] text-[#4D4D4D] text-center font-salernomi  w-[100%] font-normal mb-6">
            At <span className="text-[#000]">Prashna Jotishya, </span> we offer
            divine insights and wisdom—helping you make the
            <span className="text-[#000]">
              best use of your present to build a better future.{" "}
            </span>
          </h1>
        </div>

        {/* <div className="img h-[500px] max-md:h-full bg-[#4D4D4D]">video</div> */}
      </div>
    </div>
  );
}

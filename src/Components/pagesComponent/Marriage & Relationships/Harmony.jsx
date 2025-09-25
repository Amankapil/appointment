"use client";

import { useState } from "react";
// import img from "./assets/Group 161.png";
// import img from "/images/Frame 272.png";
// import img2 from "./assets/Rectangle 9.png";
import Image from "next/image";
import Link from "next/link";
export default function Harmony() {
  return (
    <div className="bg-[#fff] text-[#1E1E1E] min-hscreen p-10 py-20 max-md:p-4">
      <div className="heading flex mb-10 flex-col items-center justify-center">
        <h1 className="text-[64px] max-md:text-[40px] text-[#4D4D4D] text-center font-salernomi w-[60%] max-xl:w-full font-normal mb-6">
          How Astrology Brings Clarity & Harmony{" "}
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

      <div className="img h-[450px] max-md:h-full bgwhite flex items-center justify-center py-10">
        <Image
          width={900}
          height={600}
          loading="lazy"
          src="/images/Group 225.png"
          alt="j"
        />
      </div>
      <div className="pr-4 max-lg:flex-wrap flex flex-col font-inter justify-center items-center mt-4 ">
        <p className="font-normal text-lg text-[#4D4D4D] w-1/2 max-lg:w-full  text-center">
          <span className="text-[#000]"></span> Astrology that reveals harmony,
          At Prashna Siddhi, we look deeper than routine horoscope matching. Our
          spiritual approach uncovers the true causes of conflict and shows the
          path to peace.With our guidance, you will :
        </p>
      </div>

      <div className="lis  max-lg:p-8  pt-10 max-w-[846px] mx-auto space-y-4">
        <div
          style={{ boxShadow: "0px 0px 24px 2px #AC8C6066 inset" }}
          className="border-[1px] max-w-[826px] max-md:pl-8  border-[#AC8C60] items-center justify-center py-8 rounded-[24px] p-3 flex relative gap-10 font-inter bg-white shadow-md"
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
          <p className="text-xl font-inter text-[#4D4D4D] mb8 w-3/4 max-md:w-full ">
            Know the divine timing of marriage, aligned with your karmic
            timetable.{" "}
            {/* <span className="text-[#000]">Saturn takes 30 years </span> to
              complete one full cycle around the zodiac. */}
          </p>
        </div>
        <div
          style={{ boxShadow: "0px 0px 24px 2px #AC8C6066 inset" }}
          className="border-[1px] max-w-[826px] max-md:pl-8  border-[#AC8C60] items-center justify-center py-8 rounded-[24px] p-3 flex relative gap-10 font-inter bg-white shadow-md"
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
          <p className="text-xl font-inter text-[#4D4D4D] mb8 w-3/4 max-md:w-full ">
            Understand compatibility temperament, mindset, and emotional
            balance.
          </p>
        </div>

        <div
          style={{ boxShadow: "0px 0px 24px 2px #AC8C6066 inset" }}
          className="border-[1px] w-full max-w-[826px] max-md:pl-8 border-[#AC8C60] items-center justify-center py-8 rounded-[24px] p-3 flex relative gap-10 font-inter bg-white shadow-md"
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
          <p className="text-xl font-inter text-[#4D4D4D] mb8 w-3/4 max-md:w-full ">
            Address challenges ego, finances, or family interference{" "}
          </p>
        </div>

        <div
          style={{ boxShadow: "0px 0px 24px 2px #AC8C6066 inset" }}
          className="border-[1px] w-full max-w-[826px] max-md:pl-8 border-[#AC8C60] items-center justify-center py-8 rounded-[24px] p-3 flex relative gap-10 font-inter bg-white shadow-md"
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
          <p className="text-xl font-inter text-[#4D4D4D] mb8 w-3/4 max-md:w-full ">
            Explore future stability children, health, and long-term wellbeing{" "}
          </p>
        </div>
      </div>

      <div className="pr-4 max-lg:flex-wrap flex flex-col font-inter justify-center items-center mt-4 ">
        <Link
          href="/booking"
          className="bg-[#101010] text-[20px] font-salernomi mt-6 text-white px-[24px] py-[12px] rounded hover:bg-[#333333] transition-all duration-300 shadow-button"
        >
          Get Your Personalized Reading
        </Link>{" "}
      </div>
    </div>
  );
}

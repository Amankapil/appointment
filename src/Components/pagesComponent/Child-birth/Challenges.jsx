"use client";

import { useState } from "react";
// import img from "./assets/Group 161.png";
// import img from "/images/Frame 272.png";
// import img2 from "./assets/Rectangle 9.png";
import Image from "next/image";
import Link from "next/link";
export default function Challenges() {
  return (
    <div className="bg-[#fff] text-[#1E1E1E] min-hscreen p-10 max-md:p-4 mt-0">
      <div className="heading flex mb-10 flex-col items-center justify-center">
        <h1 className="text-[56px] max-md:text-[40px] text-[#4D4D4D] text-center font-salernomi w-[100%] max-md:w-full font-normal mb-6">
          Real Challenges, Real Guidance{" "}
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
          width={1100}
          height={500}
          loading="lazy"
          src="/images/Frame 327 copy.png"
          alt="j"
        />
      </div>
      <div className="pr-4 max-lg:flex-wrap flex flex-col font-inter justify-center items-center mt-4 ">
        {/* <p className="font-normal text-lg text-[#4D4D4D] w-1/2 max-lg:w-full  text-center">
          <span className="text-[#000]"></span> Astrology that reveals harmony,
          divine timing, and solutions to your deepest relationship struggles.
          Confused about love, marriage, or family pressures? You don’t have to
          walk this journey alone.
        </p> */}
        <h1 className="text-[40px] max-md:text-[40px] py-5 text-[#4D4D4D] text-center font-salernomi w-[100%] max-md:w-full font-normal mb-6">
          What We Commonly Help Resolve
        </h1>
        <div className="flex flex-wrap gap-15 max-md:gap-4 items-start justify-start py-10 max-w-[1280px] mx-auto">
          <div className="card1 gap-1 flex items-center w-[380px] max-md:w-full justify-start">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0015 24.168C12.0633 17.6017 17.3977 12.288 24 12.2065C17.3718 12.1248 12.0216 6.7697 12.001 0.167969H12.0007C11.9802 6.77031 6.62902 12.1257 0 12.2065C6.60319 12.2871 11.9385 17.6012 12.0003 24.168H12.0015Z"
                fill="#AC8C60"
              />
            </svg>

            <h1 className="text-[22px] max-md:text-[20px] text-[#101010] text-left font-salernomi w[100%] max-md:w-full font-normal ">
              Delays or difficulties in childbirth
            </h1>
          </div>
          <div className="card1 gap-1 flex items-center w-[380px] max-md:w-full justify-start">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0015 24.168C12.0633 17.6017 17.3977 12.288 24 12.2065C17.3718 12.1248 12.0216 6.7697 12.001 0.167969H12.0007C11.9802 6.77031 6.62902 12.1257 0 12.2065C6.60319 12.2871 11.9385 17.6012 12.0003 24.168H12.0015Z"
                fill="#AC8C60"
              />
            </svg>

            <h1 className="text-[22px] max-md:text-[20px] text-[#101010] text-left font-salernomi w[100%] max-md:w-full font-normal ">
              Miscarriages and recurring health issues{" "}
            </h1>
          </div>
          <div className="card1 gap-1 flex items-center w-[380px] max-md:w-full justify-start">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0015 24.168C12.0633 17.6017 17.3977 12.288 24 12.2065C17.3718 12.1248 12.0216 6.7697 12.001 0.167969H12.0007C11.9802 6.77031 6.62902 12.1257 0 12.2065C6.60319 12.2871 11.9385 17.6012 12.0003 24.168H12.0015Z"
                fill="#AC8C60"
              />
            </svg>

            <h1 className="text-[22px] max-md:text-[20px] text-[#101010] text-left font-salernomi w[100%] max-md:w-full font-normal ">
              Parenting conflicts and disagreements{" "}
            </h1>
          </div>
          <div className="card1 gap-1 flex items-start w-[380px] max-md:w-full justify-start">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-2"
            >
              <path
                d="M12.0015 24.168C12.0633 17.6017 17.3977 12.288 24 12.2065C17.3718 12.1248 12.0216 6.7697 12.001 0.167969H12.0007C11.9802 6.77031 6.62902 12.1257 0 12.2065C6.60319 12.2871 11.9385 17.6012 12.0003 24.168H12.0015Z"
                fill="#AC8C60"
              />
            </svg>

            <h1 className="text-[22px] max-md:text-[20px] text-[#101010] text-left font-salernomi w[100%] max-md:w-full font-normal ">
              Emotional or behavioral challenges in children{" "}
            </h1>
          </div>
          <div className="card1 gap-1 flex items-center w-[380px] max-md:w-full justify-start">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0015 24.168C12.0633 17.6017 17.3977 12.288 24 12.2065C17.3718 12.1248 12.0216 6.7697 12.001 0.167969H12.0007C11.9802 6.77031 6.62902 12.1257 0 12.2065C6.60319 12.2871 11.9385 17.6012 12.0003 24.168H12.0015Z"
                fill="#AC8C60"
              />
            </svg>

            <h1 className="text-[22px] max-md:text-[20px] text-[#101010] text-left font-salernomi w[100%] max-md:w-full font-normal ">
              Family interference creating stress{" "}
            </h1>
          </div>
          <div className="card1 gap-1 flex items-start w-[380px] max-md:w-full justify-start">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-2"
            >
              <path
                d="M12.0015 24.168C12.0633 17.6017 17.3977 12.288 24 12.2065C17.3718 12.1248 12.0216 6.7697 12.001 0.167969H12.0007C11.9802 6.77031 6.62902 12.1257 0 12.2065C6.60319 12.2871 11.9385 17.6012 12.0003 24.168H12.0015Z"
                fill="#AC8C60"
              />
            </svg>

            <h1 className="text-[22px] max-md:text-[20px] text-[#101010] text-left font-salernomi w[100%] max-md:w-full font-normal ">
              Children’s education, focus, or discipline struggles{" "}
            </h1>
          </div>
          <div className="card1 gap-1 flex items-center w-[380px] max-md:w-full justify-start">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0015 24.168C12.0633 17.6017 17.3977 12.288 24 12.2065C17.3718 12.1248 12.0216 6.7697 12.001 0.167969H12.0007C11.9802 6.77031 6.62902 12.1257 0 12.2065C6.60319 12.2871 11.9385 17.6012 12.0003 24.168H12.0015Z"
                fill="#AC8C60"
              />
            </svg>

            <h1 className="text-[22px] max-md:text-[20px] text-[#101010] text-left font-salernomi w[100%] max-md:w-full font-normal ">
              Harmony in joint or extended families{" "}
            </h1>
          </div>
        </div>
        <h1 className="text-[32px] max-md:text-[24px] py-5 text-[#4D4D4D] text-center font-salernomi w-[60%] max-md:w-full font-normal mb-6">
          Every family is unique. Our readings reveal the deeper causes and the
          divine ways to overcome them.
        </h1>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { useState } from "react";
import img from ".././pagesComponent/serviceComponent/assets/Group 161.png";
import img2 from ".././pagesComponent/serviceComponent/assets/Group 204.png";
import img3 from ".././pagesComponent/serviceComponent/assets/Group 205.png";
import img4 from ".././pagesComponent/serviceComponent/assets/Group 206.png";
import img5 from ".././pagesComponent/serviceComponent/assets/Group 207.png";
// import img6 from "./assets/Group 204.png";
import Image from "next/image";
import Link from "next/link";

const ServiceSection = () => {
  return (
    <>
      <div className="bg-[#fff] text-[#1E1E1E] min-h-screen p-10 pb-20 max-md:p-4">
        {/* Top Consultation Section */}

        <div className="heading flex mb-10 flex-col items-center justify-center">
          <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
            Our Services
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto  mt-20">
          <Link
            href="/Marriage&Relationships"
            className="border-[2px] border-[#D4B999] rounded-[24px] p-4 flex relative gap10 font-inter bg-white shadow-md"
          >
            <div className="w-[172px] h-[190px] bggray-300 max-md:h-full">
              {" "}
              <Image
                width={172}
                height={161}
                className="w-[176px] h-[191px] max-md:h-full object-center "
                src="/images/Group 204.png"
                alt="j"
              />
            </div>
            <div className="w[50%] max-md:w-full  pr-0 ">
              <p className="font-normal text-[20px] pt-2">
                Marriage & Relationships
              </p>
            </div>
            <div className="absolute bottom-0 right-0 text-[20px] max-sm:w-[80px] max-sm:h-[80px] font-semibold text-white bg[#D4B999] w-[150px] h-[150px] flex items-center justify-center rounded-full">
              <Image
                loading="lazy"
                src="/svg/Group 161 (2) copy.svg"
                width={150}
                height={150}
                alt="j"
              />
            </div>
          </Link>
          <Link
            href="/Child-birth"
            className="border-[2px] border-[#D4B999] rounded-[24px] p-4 flex relative gap0 font-inter bg-white shadow-md"
          >
            <div className="w-[171px] h[161px] bggray-300 ">
              {" "}
              <Image
                className="w-[172px] h-[191px] max-md:h-full object-center"
                loading="lazy"
                src="/images/Group 204 copy.png"
                width={172}
                height={191}
                alt="j"
              />
            </div>
            <div className="w3/4 max-md:w-full  pr-0 ">
              <p className="font-normal text-[20px]">
                Children & Family Astrology{" "}
              </p>
            </div>
            <div className="absolute bottom-0 right-0 text-[20px] max-sm:w-[80px] max-sm:h-[80px] font-semibold text-white bg[#D4B999] w-[150px] h-[150px] flex items-center justify-center rounded-full">
              <Image
                loading="lazy"
                src="/svg/Group 161 (3) copy.svg"
                width={150}
                height={150}
                alt="j"
              />
            </div>
          </Link>
          <div
            // href="/Health"
            className="border-[2px] border-[#D4B999] rounded-[24px] p-4 flex relative gap10 font-inter bg-white shadow-md"
          >
            <div className="w-[172px] h[296px] bggray-300 ">
              {" "}
              <Image
                className="w-[176px] h-[191px] max-md:h-full object-center"
                loading="lazy"
                src="/images/Group 204 (1).png"
                width={172}
                height={191}
                alt="j"
              />
            </div>
            <div className="w-[50%] max-md:w-full  overflow-hidden pr-0 max-lg:flex-wrap flex flex-col justify-start">
              <p className="font-normal text-[20px]">
                Health & Wellness Astrology{" "}
              </p>
            </div>
            <div className="absolute bottom-0 right-0 text-[20px] max-sm:w-[80px] max-sm:h-[80px] font-semibold text-white bg[#D4B999] w-[150px] h-[150px] flex items-center justify-center rounded-full">
              <Image
                loading="lazy"
                src="/svg/Group 161 copy.svg"
                width={150}
                height={150}
                alt="j"
              />
            </div>
          </div>

          <div
            // href="/Finance-Wealth-Astrology"
            className="border-[2px] border-[#D4B999] rounded-[24px] p-4 flex relative gap10 font-inter bg-white shadow-md"
          >
            <div className="w-[172px] h[296px] bggray-300 ">
              {" "}
              <Image
                className="w-[176px] h-[191px] max-md:h-full object-center"
                loading="lazy"
                src="/images/Group 204 (2).png"
                width={172}
                height={191}
                alt="j"
              />
            </div>
            <div className="w-[50%] max-md:w-full  overflow-hidden pr-0 max-lg:flex-wrap flex flex-col justify-start">
              <p className="font-normal text-[20px]">
                Finance & Wealth Astrology
              </p>
            </div>
            <div className="absolute bottom-0 right-0 text-[20px] max-sm:w-[80px] max-sm:h-[80px] font-semibold text-white bg[#D4B999] w-[150px] h-[150px] flex items-center justify-center rounded-full">
              <Image
                loading="lazy"
                src="/svg/Group 161.svg"
                width={150}
                height={150}
                alt="j"
              />
            </div>
          </div>

          <div
            // href="/Career-Profession-Astrology"
            className="border-[2px] border-[#D4B999] rounded-[24px] p-4 flex relative gap10 font-inter bg-white shadow-md"
          >
            <div className="w-[172px] h[296px] bggray-300 ">
              {" "}
              <Image
                className="w-[176px] h-[191px] max-md:h-full object-center"
                loading="lazy"
                src="/images/Group 204 (3).png"
                width={172}
                height={191}
                alt="j"
              />
            </div>
            <div className="w-[50%] max-md:w-full  overflow-hidden pr-0 max-lg:flex-wrap flex flex-col justify-start">
              <p className="font-normal text-[20px]">
                Career & Profession Astrology
              </p>
            </div>
            <div className="absolute bottom-0 right-0 text-[20px] max-sm:w-[80px] max-sm:h-[80px] font-semibold text-white bg[#D4B999] w-[150px] h-[150px] flex items-center justify-center rounded-full">
              <Image
                loading="lazy"
                src="/svg/Group 161 (1).svg"
                width={150}
                height={150}
                alt="j"
              />
            </div>
          </div>

          <div
            // href="/Education-&-Studies"
            className="border-[2px] border-[#D4B999] rounded-[24px] p-4 flex relative gap10 font-inter bg-white shadow-md"
          >
            <div className="w-[172px] h[296px] bggray-300 ">
              {" "}
              <Image
                className="w-[176px] h-[191px] max-md:h-full object-center"
                loading="lazy"
                src="/images/Group 204 (4).png"
                width={172}
                height={191}
                alt="j"
              />
            </div>
            <div className="w-[50%] max-md:w-full  overflow-hidden pr-0 max-lg:flex-wrap flex flex-col justify-start">
              <p className="font-normal text-[20px]">
                Education & Study Astrology
              </p>
            </div>
            <div className="absolute bottom-0 right-0 text-[20px] max-sm:w-[80px] max-sm:h-[80px] font-semibold text-white bg[#D4B999] w-[150px] h-[150px] flex items-center justify-center rounded-full">
              <Image
                loading="lazy"
                src="/svg/Group 161 (2).svg"
                width={150}
                height={150}
                alt="j"
              />
            </div>
          </div>

          <div
            // href="/Property-&-Real-Estate"
            className="border-[2px] border-[#D4B999] rounded-[24px] p-4 flex relative gap10 font-inter bg-white shadow-md"
          >
            <div className="w-[172px] h[296px] bggray-300 ">
              {" "}
              <Image
                className="w-[176px] h-[191px] max-md:h-full object-center"
                loading="lazy"
                src="/images/Group 204 (5).png"
                width={172}
                height={191}
                alt="j"
              />
            </div>
            <div className="w-[50%] max-md:w-full  overflow-hidden pr-0 max-lg:flex-wrap flex flex-col justify-start">
              <p className="font-normal text-[20px]">
                Property & Real Estate Astrology
              </p>
            </div>
            <div className="absolute bottom-0 right-0 text-[20px] max-sm:w-[80px] max-sm:h-[80px] font-semibold text-white bg[#D4B999] w-[150px] h-[150px] flex items-center justify-center rounded-full">
              <Image
                loading="lazy"
                src="/svg/Group 161 (3).svg"
                width={150}
                height={150}
                alt="j"
              />
            </div>
          </div>

          <div
            // href="/Litigation-And-Legal-Matters-Astrology"
            className="border-[2px] border-[#D4B999] rounded-[24px] p-4 flex relative gap10 font-inter bg-white shadow-md"
          >
            <div className="w-[172px] h[296px] bggray-300 ">
              {" "}
              <Image
                className="w-[176px] h-[191px] max-md:h-full object-center"
                loading="lazy"
                src="/images/Group 204 (6).png"
                width={172}
                height={191}
                alt="j"
              />
            </div>
            <div className="w-[50%] max-md:w-full  overflow-hidden pr-0 max-lg:flex-wrap flex flex-col justify-start">
              <p className="font-normal text-[20px]">
                Litigation & Legal Matters Astrology{" "}
              </p>
            </div>
            <div className="absolute bottom-0 right-0 text-[20px] max-sm:w-[80px] max-sm:h-[80px] font-semibold text-white bg[#D4B999] w-[150px] h-[150px] flex items-center justify-center rounded-full">
              <Image
                loading="lazy"
                src="/svg/Group 161 (4).svg"
                width={150}
                height={150}
                alt="j"
              />
            </div>
          </div>
          <div
            // href="/Business-Astrology"
            className="border-[2px] border-[#D4B999] rounded-[24px] p-4 flex relative gap10 font-inter bg-white shadow-md"
          >
            <div className="w-[172px] h[296px] bggray-300 ">
              {" "}
              <Image
                className="w-[176px] h-[191px] max-md:h-full object-center"
                loading="lazy"
                src="/images/Group 204 (7).png"
                width={172}
                height={191}
                alt="j"
              />
            </div>
            <div className="w-[50%] max-md:w-full  overflow-hidden pr-0 max-lg:flex-wrap flex flex-col justify-start">
              <p className="font-normal text-[20px]">Business Astrology</p>
            </div>
            <div className="absolute bottom-0 right-0 text-[20px] max-sm:w-[80px] max-sm:h-[80px] font-semibold text-white bg[#D4B999] w-[150px] h-[150px] flex items-center justify-center rounded-full">
              <Image
                loading="lazy"
                src="/svg/Group 161 (5).svg"
                width={150}
                height={150}
                alt="j"
              />
            </div>
          </div>

          {/* ))} */}
        </div>
      </div>
    </>
  );
};

export default ServiceSection;

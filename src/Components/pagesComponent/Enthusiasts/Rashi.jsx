"use client";

import { useState } from "react";
import img from "./assets/Group 253.png";
import img2 from "./assets/Group 252.png";

import Image from "next/image";
export default function Rashi() {
  return (
    <div className="bg-[#fff] text-[#1E1E1E] min-hscreen p-10 max-md:p-4">
      <div className="max-w-7xl mx-auto">
        <div className="heading flex mb-10 flex-col items-center justify-center">
          <h1 className="text-[56px] max-md:text-[40px] text-[#4D4D4D] text-center font-salernomi w-[50%] max-xl:w-full font-normal mb-6">
            Moon Sign (Rashi) – A Commercial Myth?
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

        <div className="img h-[500px] max-md:h-full flex items-center justify-center">
          <Image loading="lazy" className="pb-10" src={img} alt="j" />
        </div>
        <div className="pr-4 max-lg:flex-wrap flex flexcol font-inter gap-10 justify-center items-center my-10 ">
          {/* <h1 className="text-[40px] text-[#4D4D4D] text-left font-salernomi w-[40%] max-lg:w-full font-normal mb-6">
          Unlock the True Power of Astrology
        </h1> */}
          <div className="w-1/2 max-xl:w-full">
            <p className="font-normal text-lg text-[#4D4D4D] w  text-center">
              The <span className="text-[#000]">Moon sign</span> is often
              overemphasized in mass-market astrology, leading to
              misconceptions. While the Moon’s placement
              <span className="text-[#000]">
                {" "}
                influences emotions and mindsets,{" "}
              </span>
              using it as the primary reference for predictions can be
              misleading
            </p>
          </div>
        </div>
        <div className="heading flex  mb-10 flex-col items-center justify-center">
          <h1 className="text-[40px] text-[#4D4D4D] text-center font-salernomi w-[50%] max-lg:w-full font-normal mb-6">
            Why?
          </h1>
          <p className="font-normal text-lg text-[#4D4D4D] py-10  text-center">
            The Moon stays in{" "}
            <span className="text-[#000]">
              one zodiac sign for approximately 2.5 days (60 hours).
            </span>{" "}
            Consider this:
          </p>

          <div className="lis  max-lg:p-8 w-full  max-w-[988px] mx-auto space-y-4 pb-10">
            <div
              style={{ boxShadow: "0px 0px 24px 2px #AC8C6066 inset" }}
              className="border-[1px] max-w-[1000px] max-md:pl-8 max-w-1000 border-[#AC8C60] items-center justify-center py-8 rounded-[24px] p-3 flex relative gap-10 font-inter bg-white shadow-md"
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
              <p className="text-xl font-inter text-center flex items-center justify-center gap-5 text-[#4D4D4D] mb8 w-3/4 max-md:w-full ">
                <span className="text-[#000]">
                  Birth Rate in India (Feb 2025 Estimate)
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_292_522)">
                    <g clipPath="url(#clip1_292_522)">
                      <path
                        d="M16.6132 12.6697L0.00144005 12.6697V10.1434L16.612 10.1434C14.8612 8.52654 13.5501 6.05453 13.5501 2.52654H16.0764C16.0764 5.58338 17.2675 7.44401 18.6469 8.56569C20.0806 9.73032 21.7758 10.1434 22.7383 10.1434V12.6697C21.7758 12.6697 20.0806 13.0827 18.6456 14.2486C17.2688 15.3703 16.0764 17.231 16.0764 20.2891H13.5501C13.5501 16.7585 14.8612 14.2878 16.6132 12.6697Z"
                        fill="#AC8C60"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_292_522">
                      <rect
                        width="24"
                        height="18.9474"
                        fill="white"
                        transform="matrix(-1 0 0 -1 24 21.4736)"
                      />
                    </clipPath>
                    <clipPath id="clip1_292_522">
                      <rect
                        width="24"
                        height="18.9474"
                        fill="white"
                        transform="matrix(-1 0 0 -1 24 21.4736)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                51 births per minute
              </p>
            </div>
            <div
              style={{ boxShadow: "0px 0px 24px 2px #AC8C6066 inset" }}
              className="border-[1px] max-w-[1000px] max-md:pl-8 max-w-1000 border-[#AC8C60] items-center justify-center py-8 rounded-[24px] p-3 flex relative gap-10 font-inter bg-white shadow-md"
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
              <p className="text-xl font-inter text-center flex items-center justify-center gap-5 text-[#4D4D4D] mb8 w-3/4 max-md:w-full ">
                <span className="text-[#000]">Per Day</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_292_522)">
                    <g clipPath="url(#clip1_292_522)">
                      <path
                        d="M16.6132 12.6697L0.00144005 12.6697V10.1434L16.612 10.1434C14.8612 8.52654 13.5501 6.05453 13.5501 2.52654H16.0764C16.0764 5.58338 17.2675 7.44401 18.6469 8.56569C20.0806 9.73032 21.7758 10.1434 22.7383 10.1434V12.6697C21.7758 12.6697 20.0806 13.0827 18.6456 14.2486C17.2688 15.3703 16.0764 17.231 16.0764 20.2891H13.5501C13.5501 16.7585 14.8612 14.2878 16.6132 12.6697Z"
                        fill="#AC8C60"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_292_522">
                      <rect
                        width="24"
                        height="18.9474"
                        fill="white"
                        transform="matrix(-1 0 0 -1 24 21.4736)"
                      />
                    </clipPath>
                    <clipPath id="clip1_292_522">
                      <rect
                        width="24"
                        height="18.9474"
                        fill="white"
                        transform="matrix(-1 0 0 -1 24 21.4736)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                73,787 births
              </p>
            </div>
            <div
              style={{ boxShadow: "0px 0px 24px 2px #AC8C6066 inset" }}
              className="border-[1px] max-w-[1000px] max-md:pl-8 max-w-1000 border-[#AC8C60] items-center justify-center py-8 rounded-[24px] p-3 flex relative gap-10 font-inter bg-white shadow-md"
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
              <p className="text-xl font-inter text-center flex items-center justify-center gap-5 text-[#4D4D4D] mb8 w-3/4 max-md:w-full ">
                <span className="text-[#000]">Per Moon Sign (2.5 days)</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_292_522)">
                    <g clipPath="url(#clip1_292_522)">
                      <path
                        d="M16.6132 12.6697L0.00144005 12.6697V10.1434L16.612 10.1434C14.8612 8.52654 13.5501 6.05453 13.5501 2.52654H16.0764C16.0764 5.58338 17.2675 7.44401 18.6469 8.56569C20.0806 9.73032 21.7758 10.1434 22.7383 10.1434V12.6697C21.7758 12.6697 20.0806 13.0827 18.6456 14.2486C17.2688 15.3703 16.0764 17.231 16.0764 20.2891H13.5501C13.5501 16.7585 14.8612 14.2878 16.6132 12.6697Z"
                        fill="#AC8C60"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_292_522">
                      <rect
                        width="24"
                        height="18.9474"
                        fill="white"
                        transform="matrix(-1 0 0 -1 24 21.4736)"
                      />
                    </clipPath>
                    <clipPath id="clip1_292_522">
                      <rect
                        width="24"
                        height="18.9474"
                        fill="white"
                        transform="matrix(-1 0 0 -1 24 21.4736)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                184,468 births!
              </p>
            </div>
          </div>

          <p className="font-normal text-lg text-[#4D4D4D] w-1/2 max-lg:w-full  text-center">
            If astrology were solely based on the Moon sign, it would mean the{" "}
            <span className="text-[#000]">
              same destiny for 1,84,468 people born within that time frame in
              India alone!
            </span>{" "}
          </p>
          <br />
          <p className="font-normal text-lg text-[#4D4D4D]  w-1/2 max-xl:w-full  text-center">
            Is this logical? <span className="text-[#000]">Clearly not.</span>{" "}
          </p>
          <br />
          <p className="font-normal text-lg text-[#4D4D4D]  w-1/2 max-xl:w-full  text-center">
            Mass media predictions using Moon signs rely on broad
            generalizations, drawing people into astrology consultations through{" "}
            <span className="text-[#000]">fear-driven marketing</span> (e.g.,
            Sade Sati, Guru Bala, Rahu dosha)
          </p>
          <br />
        </div>

        <div className="heading flex mb-10 max-md:hidden flex-col items-center justify-center">
          <svg
            width="1248"
            className="mt-10 max-xl:w-full"
            height="24"
            viewBox="0 0 1248 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M624.002 24C624.063 17.4338 629.398 12.12 636 12.0386C629.372 11.9568 624.022 6.60173 624.001 0H624.001C623.98 6.60234 618.629 11.9578 612 12.0386C618.603 12.1191 623.938 17.4332 624 24H624.002Z"
              fill="#F0EDE9"
            />
            <circle cx="599" cy="12" r="3" fill="#F0EDE9" />
            <circle cx="3" cy="12" r="3" fill="#F0EDE9" />
            <path d="M597 11.9999L5 12" stroke="#F0EDE9" />
            <circle cx="1245" cy="12" r="2.5" fill="#F0EDE9" stroke="#F0EDE9" />
            <circle cx="649" cy="12" r="2.5" fill="#F0EDE9" stroke="#F0EDE9" />
            <path d="M1243 12.0001L651 12" stroke="#F0EDE9" />
          </svg>
        </div>
      </div>
    </div>
  );
}

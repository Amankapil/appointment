"use client";
import React from "react";
// import img from "./assets/Frame 174.png";
import Image from "next/image";
import img from "./assets/Group 230.png";

const Divine = () => {
  // Single Card component with triple borders

  // Center “star” SVG

  return (
    <>
      <div className="bg-[#fff] pt-10">
        <div className="heading flex flex-col items-center justify-center">
          <h1 className="text-[64px] max-md:text-[40px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
            The Role of Divine Intelligence (DI) in Guidance
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

          <div className="img h-full pt-10 max-md:h-full flex items-center justify-center">
            <Image loading="lazy" className="" src={img} alt="j" />
          </div>
          {/* <Image  loading="lazy"  src={img} alt="jflas" /> */}
          <div className="flex items-center flex-ol   justify-center text-center my-16">
            {/* <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60 0L61.2798 46.35C61.4663 53.1031 66.8969 58.5337 73.65 58.7202L120 60L73.65 61.2798C66.8969 61.4663 61.4663 66.8969 61.2798 73.65L60 120L58.7202 73.65C58.5337 66.8969 53.1031 61.4663 46.35 61.2798L-4.27504e-05 60L46.35 58.7202C53.1031 58.5337 58.5337 53.1031 58.7202 46.35L60 0Z"
                fill="#1E1E2C"
              />
            </svg> */}

            <p className="text-xl font-inter text-[#4D4D4D]  w-[40%] max-lg:w-full">
              True astrological guidance comes through{" "}
              <span className="text-[#000]">Divine Grace</span> where the
              concept of <span className="text-[#000]">Aarooda Lagna</span>{" "}
              plays a crucial role. Only an astrologer on a
              <span className="text-[#000]">
                {" "}
                high moral and spiritual plane{" "}
              </span>
              can channel divine intelligence to offer authentic answers that
              help people make peace with their destiny
            </p>

            {/* <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"ā
            >
              <path
                d="M60 0L61.2798 46.35C61.4663 53.1031 66.8969 58.5337 73.65 58.7202L120 60L73.65 61.2798C66.8969 61.4663 61.4663 66.8969 61.2798 73.65L60 120L58.7202 73.65C58.5337 66.8969 53.1031 61.4663 46.35 61.2798L-4.27504e-05 60L46.35 58.7202C53.1031 58.5337 58.5337 53.1031 58.7202 46.35L60 0Z"
                fill="#1E1E2C"
              />
            </svg> */}
          </div>
        </div>
      </div>

      <div className="flex items-center flex-ol  max-md:hidden justify-center text-center my-4">
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
    </>
  );
};

export default Divine;

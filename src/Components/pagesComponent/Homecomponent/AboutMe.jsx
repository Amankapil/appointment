import React, { useState } from "react";
import img from "./assets/Group 149.png";
import Image from "next/image";

const AboutMe = () => {
  // Single Card component with triple borders

  // Center “star” SVG

  return (
    <>
      <div className="bg-[#F0EDE9] py-20">
        <div className="heading flex flex-col items-center justify-center">
          <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
            About Me
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

          <Image src={img} alt="jflas" />
          <div className="flex items-center  w-[100%] max-md:w-full gap-10 justify-center text-center max-md:flex-col">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 0L40.7424 26.8874C40.9289 33.6405 46.3595 39.0711 53.1126 39.2576L80 40L53.1126 40.7424C46.3595 40.9289 40.9289 46.3595 40.7424 53.1126L40 80L39.2576 53.1126C39.0711 46.3595 33.6405 40.9289 26.8874 40.7424L-2.85003e-05 40L26.8874 39.2576C33.6405 39.0711 39.0711 33.6405 39.2576 26.8874L40 0Z"
                fill="#1E1E2C"
              />
            </svg>

            <p className="text-xl font-inter text-[#4D4D4D] w-[50%]  max-md:w-full max-md:p-4">
              I am
              <span className="text-[#000]"> K. Jagadish, </span> an
              <span className="text-[#000]"> Astrologer, Life Coach, </span> and
              <span className="text-[#000]"> Spiritual Thinker </span>
              in the twilight years of my life at{" "}
              <span className="text-[#000]">77. </span> My journey is built on a{" "}
              <span className="text-[#000]">
                strong foundation of spirituality,{" "}
              </span>{" "}
              wisdom, and life experience, and I am dedicated to{" "}
              <span className="text-[#000]">
                guiding others with clarity and divine insight.{" "}
              </span>{" "}
              Through this platform, I aim to share my{" "}
              <span className="text-[#000]">
                knowledge and serve society to the best of my ability,{" "}
              </span>{" "}
              helping people find peace, purpose, and direction in their lives.
            </p>

            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 0L40.7424 26.8874C40.9289 33.6405 46.3595 39.0711 53.1126 39.2576L80 40L53.1126 40.7424C46.3595 40.9289 40.9289 46.3595 40.7424 53.1126L40 80L39.2576 53.1126C39.0711 46.3595 33.6405 40.9289 26.8874 40.7424L-2.85003e-05 40L26.8874 39.2576C33.6405 39.0711 39.0711 33.6405 39.2576 26.8874L40 0Z"
                fill="#1E1E2C"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;

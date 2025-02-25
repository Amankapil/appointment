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

          <Image src={img} alt="jflas" />
          <div className="flex items-center flex-col w-[60%] max-md:w-full max-md:w-full  justify-center text-center">
            <p className="text-xl font-inter text-[#4D4D4D] mb-8 max-md:p-4">
              I am
              <span className="text-[#000]"> K. Jagadish, </span> an
              <span className="text-[#000]"> Astrologer, Life Coach, </span> and
              <span className="text-[#000]"> Spiritual Thinker </span>
              in the twilight years of my life at{" "}
              <span className="text-[#000]">77. </span> My journey is built on a
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;

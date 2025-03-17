"use client";
import React from "react";
// import img from "./assets/Frame 174.png";
import Image from "next/image";
import img from "./assets/Group 229.png";

const Prashna = () => {
  // Single Card component with triple borders

  // Center “star” SVG

  return (
    <>
      <div className="bg-[#fff] pt-20">
        <div className="heading flex flex-col items-center justify-center">
          <h1 className="text-[64px] max-md:text-[40px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
            What is Prashna Jyotishya?
          </h1>

          <div className="img h-[500px] max-md:h-full flex items-center justify-center pb-10 max-md:pb-0">
            <Image className="pb-10 max-md:pb-0" src={img} alt="j" />
          </div>
          {/* <Image src={img} alt="jflas" /> */}
          <div className="flex items-center flex-col w-1/2 max-lg:w-full  justify-center text-center my-10">
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

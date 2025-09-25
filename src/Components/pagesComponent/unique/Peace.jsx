"use client";

import { useState } from "react";
import img from "./assets/Group 115.png";

import Image from "next/image";
import Link from "next/link";
export default function Peace() {
  return (
    <div className="bg-[#fff] text-[#1E1E1E] p-10 max-md:p-4">
      <div className="max-w-7xl mx-auto">
        <div className="heading flex mb-10 flex-col items-center justify-center">
          <h1 className="text-[60px] text-[#4D4D4D] text-center font-salernomi w-[70%] max-lg:w-full font-normal mb-6">
            Take the First Step Toward Clarity & Peace
          </h1>
        </div>

        <div className="max-wxl ml20 mx-auto text-left items-start justify-center flex gap-20 max-md:flex-col max-md:ml-0 max-w-[1200px] ">
          <div className="w-1/2 max-lg:w-full">
            <p className="text-xl font-inter text-[#4D4D4D] mb-8">
              Seeking answers? Get a Prashna Kundali consultation today and
              receive divine guidance with clarity and confidence!
            </p>
            <Link
              href="/booking"
              className="bg-[#101010] text-[20px] font-salernomi text-white px-[24px] py-[12px] rounded hover:bg-[#333333] transition-all duration-300 shadow-button"
            >
              Request your Consultation
            </Link>
          </div>
          <div className="mt-0 w-[50%] max-lg:w-full">
            <div className="img h[500px] max-md:h-full">
              <Image
                loading="lazy"
                className="pb-10 max-md:pb-0"
                src={img}
                alt="j"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

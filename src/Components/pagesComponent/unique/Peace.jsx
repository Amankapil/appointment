"use client";

import { useState } from "react";
// import img from "./assets/Group 161.png";
import img from "../serviceComponent/assets/Group 161.png";
import img2 from "../serviceComponent/assets/Rectangle 9.png";
// import img2 from "./assets/Rectangle 9.png";
import Image from "next/image";
export default function Peace() {
  return (
    <div className="bg-[#fff] text-[#1E1E1E] min-h-screen p-10 max-md:p-4">
      <div className="heading flex mb-10 flex-col items-center justify-center">
        <h1 className="text-[60px] text-[#4D4D4D] text-center font-salernomi w-[70%] font-normal mb-6">
          Take the First Step Toward Clarity & Peace
        </h1>
      </div>

      <div className="max-wxl ml-20 mx-auto text-left items-start justify-center flex gap-20">
        <div className="w-1/2 max-md:w-full">
          <p className="text-xl font-inter text-[#4D4D4D] mb-8">
            Seeking answers? Get a Prashna Kundali consultation today and
            receive divine guidance with clarity and confidence!
          </p>
          <button className="bg-[#101010] text-[20px] font-salernomi text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Request your Consultation
          </button>
        </div>
        <div className="mt-0 w-[50%] max-lg:w-full">
          <div className="img h-[500px] bg-[#101010]">imge</div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
// import img from "./assets/Group 161.png";
import img from "../serviceComponent/assets/Group 161.png";
import img2 from "../serviceComponent/assets/Rectangle 9.png";
// import img2 from "./assets/Rectangle 9.png";
import Image from "next/image";
export default function Blueprint() {
  return (
    <div className="bg-[#fff] text-[#1E1E1E] p-10 max-md:p-4">
      {/* <div className="heading flex mb-10 flex-col items-center justify-center">
        <h1 className="text-[60px] text-[#4D4D4D] text-center font-salernomi w-[70%] max-lg:w-full font-normal mb-6">
          Take the First Step Toward Clarity & Peace
        </h1>
      </div> */}

      <div className="max-wxl ml-20 mx-auto flex-col text-left items-center justify-center flex gap-5">
        {/* <div className=""> */}
        <h1 className="text-[40px] text-[#4D4D4D] text-center font-salernomi w-[100%] font-normal mb-6">
          Unlock your life’s cosmic blueprint today! Get expert Prashna
          Jyotishya insights on Prashna Siddhi
        </h1>
        <button className="bg-[#101010] text-[20px] font-salernomi text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Request your Consultation
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}

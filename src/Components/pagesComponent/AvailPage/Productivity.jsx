"use client";

import Image from "next/image";
import Link from "next/link";
import YouTube from "react-youtube";
export default function Productivity() {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1, // Auto play the video
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo(); // Pause the video when ready
  };

  return (
    <div className="bg-[#F0EDE9] text-[#1E1E1E] min-hscreen p-10 max-md:p-4 mt-20">
      <div className="heading flex mb-10 flex-col items-center justify-center">
        <h1 className="text-[56px] max-md:text-[40px] text-[#4D4D4D] text-center font-salernomi w-[100%] max-md:w-full font-normal mb-6">
          Productivity in 7 Minutes{" "}
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

      <div className="pr-4 max-lg:flex-wrap flex flex-col font-inter justify-center items-center mt-4 ">
        <h1 className="text-[20px] max-md:text-[16px] py-5 text-[#4D4D4D] text-center  w-[60%] max-md:w-full font-normal mb-6">
          Even in a 7-minute consultation, you can gain clarity on a single
          focused question
        </h1>
        <div className="flex flex-wrap gap-15 max-md:gap-4 items-start justify-start py-10 max-w-[1280px] mx-auto">
          <div className="card1 gap-1 flex items-start w-[480px] max-md:w-full justify-start">
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
              Watch our 3-minute demo video showing how much can be achieved in
              a short consultation.
            </h1>
          </div>
          <div className="card1 gap-1 flex items-start w-[480px] max-md:w-full justify-start">
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
              Prepare your questions in advance for maximum benefit.
            </h1>
          </div>
        </div>
      </div>

      <div className="img h-[450px] max-md:h-full bgwhite flex items-center justify-center py-10">
        {/* <Image
          width={720}
          height={500}
          loading="lazy"
          src="/images/Group 105.png"
          alt="j"
        /> */}

        <YouTube videoId="OOLBnTG6Jo0" opts={opts} onReady={onReady} />
      </div>
    </div>
  );
}

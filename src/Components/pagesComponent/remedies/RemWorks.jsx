"use client";
import { useState } from "react";
import img from "./assets/Group 222.png";
// import img2 from "./assets/Rectangle 9.png";
import Image from "next/image";
import YouTube from "react-youtube";
export default function RemWorks() {
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
    <div className="bg-[#fff] text-[#1E1E1E] min-h-screen p-10 max-md:p-4">
      <div className="heading flex mb-10 flex-col items-center justify-center">
        <h1 className="text-[64px] max-md:text-[40px] text-[#4D4D4D] text-center font-salernomi w-[60%] max-md:w-full font-normal mb-6">
          Do Remedies Really Work?
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

      <div className="img h-[500px] max-md:h-full flex items-center justify-center pb-10">
        <Image loading="lazy" className="pb-10" src={img} alt="j" />
      </div>
      <div className="pr-4 max-lg:flex-wrap max-md:flex-wrap flex flexcol font-inter gap-10 justify-center items-start mt-4 ">
        <div className="w-[50%] max-lg:w-full">
          <p className="font-normal text-lg text-[#4D4D4D] w-[100%] max-lg:w-full  text-center">
            If remedies alone could solve problems, why do so many people{" "}
            <span className="text-[#000]">
              continue to suffer despite performing rituals?
            </span>{" "}
          </p>
          <br />

          <p className="font-normal text-lg text-[#4D4D4D] w-1/ text-center">
            <span className="text-[#000]">
              Did their remedies fail, or were they never the real solution?
            </span>
          </p>

          <div className="pr-4 max-lg:flex-wrap flex flexcol font-inter gap-10 justify-center items-start mt-4 ">
            <svg
              width="24"
              height="76"
              viewBox="0 0 24 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0015 24C12.0633 17.4338 17.3977 12.12 24 12.0386C17.3718 11.9568 12.0216 6.60173 12.001 0H12.0007C11.9802 6.60234 6.62902 11.9578 0 12.0386C6.60319 12.1191 11.9385 17.4332 12.0003 24H12.0015Z"
                fill="#D8D1C7"
              />
              <path
                d="M12.0013 52C12.0528 46.5281 16.498 42.1 22 42.0321C16.4765 41.964 12.018 37.5014 12.0009 32H12.0006C11.9835 37.502 7.52418 41.9648 2 42.0321C7.50266 42.0993 11.9487 46.5277 12.0002 52H12.0013Z"
                fill="#D8D1C7"
              />
              <path
                d="M12.001 76C12.0422 71.6225 15.5984 68.08 20 68.0257C15.5812 67.9712 12.0144 64.4012 12.0007 60H12.0005C11.9868 64.4016 8.41934 67.9718 4 68.0257C8.40212 68.0794 11.959 71.6221 12.0002 76H12.001Z"
                fill="#D8D1C7"
              />
            </svg>
          </div>
          <br />
          <p className="font-normal text-lg text-[#4D4D4D] w2  text-center">
            <span className="text-[#000]">
              Watch this thought-provoking video:
            </span>{" "}
          </p>
        </div>
      </div>
      <div className="bg-white flex w-full mt-10 items-center justify-center max-md:w-full">
        <YouTube
          // className="w-full"
          videoId="1nr9EuSeQN8"
          opts={opts}
          onReady={onReady}
        />
      </div>

      {/* <div className="img h-[500px] max-md:h-full bg-[#4D4D4D]">video</div> */}
    </div>
  );
}

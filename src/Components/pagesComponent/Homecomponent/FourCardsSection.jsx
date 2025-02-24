import React, { useState } from "react";
import { img } from "./assets/Frame 50.png";

const FourCardsSection = () => {
  const cardData = [
    "Meaningful insights based on divine wisdom",
    "Guidance to face destiny with awareness",
    "Practical hints & tips to make informed life choices",
    "A peaceful mind by relieving stress and anxiety",
  ];
  const [isHovered, setIsHovered] = useState(false);

  // Single Card component with triple borders
  const Card = ({ text }) => (
    <div className="flex flex-col group relative bgwhite">
      <div className="border border-[#c49b6d] w-[614px] max-md:w-full h-[340px] rounded-[24px] bg-white p-2">
        <div className="border absolute left-[32px] top-[10px]  w-[550px]  max-md:w-full h-[308px] rounded-[24px] one border-[#c49b6d] p-2">
          <div
            style={{
              backgroundImage: isHovered
                ? `url(./assets/Frame 50.png)`
                : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="border absolute left-[-18px] top-[17px] tw w-[582px]  max-md:w-full h-[276px] rounded-[24px] border-[#c49b6d] p-6 transition-colors duration-300"
          >
            <div
              style={{ height: "-webkit-fill-available" }}
              className="flex items-center justify-center"
            >
              <p className="text-center text-base md:text-lg">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Center “star” SVG

  return (
    <>
      <div className="bg-[#F0EDE9] py-20">
        <div className="heading flex flex-col items-center justify-center">
          <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
            What You Can Expect?
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

        <div className="w-full h-auto p-8">
          <div className=" flex flex-col gap-8 items-center justify-center flex-wrap">
            <div className=" flex gap-8 items-center justify-center flex-wrap">
              <div className=" flex justify-center items-center">
                <Card text={cardData[0]} />
              </div>
              <div className="flex justify-center items-center">
                <Card text={cardData[1]} />
              </div>
            </div>
            <div className=" flex gap-8 items-center justify-center flex-wrap">
              <div className=" flex justify-center items-center">
                <Card text={cardData[2]} />
              </div>
              <div className=" flex justify-center items-center">
                {/* Bottom-right Card */}
                <div className=" flex justify-center items-center">
                  <Card text={cardData[3]} />
                </div>
              </div>
            </div>

            {/* Center Star */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FourCardsSection;

import React from "react";
import img2 from "./assets/Vector.png";
import img from "./assets/Vector (1).png";
import Image from "next/image";

const Why = () => {
  return (
    <div className="relative flex flex-col gap-10 items-center justify-center bg-white py-20 max-lg:p-4 max-md:p-4 space-y-10 overflow-hidden">
      {/* First Circle */}

      <div className="fcircle flex items-center justify-center w-[77%] max-md:w-full">
        <div
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(217, 217, 217, 0) 75.24%, rgba(234, 230, 225, 0.32) 100%)",
          }}
          className="relative  flex items-center justify-center circleone w-[540px] h-[540px] max-md:w-full max-md:h-full max-md:p-10 border border-[#AC8C60] rounded-full shadow-lg"
        >
          <h2 className="text-[56px] font-salernomi text-center">
            Why Prashna Siddhi?
          </h2>
          {/* <div className="absolute top-2 left-2 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute bottom-2 right-2 w-2 h-2 bg-black rounded-full"></div> */}
        </div>
      </div>

      <svg
        width="24"
        height="112"
        viewBox="0 0 24 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="4" r="4" fill="#AC8C60" />
        <circle cx="12" cy="22" r="6" fill="#AC8C60" />
        <circle cx="12" cy="44" r="8" fill="#AC8C60" />
        <circle cx="12" cy="70" r="10" fill="#AC8C60" />
        <circle cx="12" cy="100" r="12" fill="#AC8C60" />
      </svg>

      {/* Second Circle */}
      <div className=" flex items-center justify-center max-md:flex-col">
        <div>
          <Image loading="lazy" src={img} alt="" />
        </div>

        <div className="twecircle flex items-center justify-center w-[77%] max-md:w-full">
          <div
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(217, 217, 217, 0) 75.24%, rgba(234, 230, 225, 0.32) 100%)",
            }}
            className="relative flex font-inter text-[20px] items-center justify-center circletwo w-[680px] h-[680px] max-md:w-full max-md:h-full   max-md:p-10 border  border-[#AC8C60] rounded-full shadow-lg"
          >
            <p className=" text-center px-8 max-md:text-[18px] max-md:px-4  font-inter text-[20px]">
              Life presents us with uncertainties, and unanswered questions can
              weigh heavily on the mind, leading to prolonged stress and
              anxiety.
              <span className="text-[#000]">
                This platform is here to provide meaningful and insightful
                answers to your most pressing concerns.{" "}
              </span>
            </p>
            {/* <div className="absolute top-3 left-3 w-2 h-2 bg-black rounded-full"></div>
        <div className="absolute bottom-3 right-3 w-2 h-2 bg-black rounded-full"></div> */}
          </div>
        </div>
        <div>
          <Image loading="lazy" src={img2} alt="" />
        </div>
      </div>

      <svg
        width="24"
        height="112"
        viewBox="0 0 24 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="4" r="4" fill="#AC8C60" />
        <circle cx="12" cy="22" r="6" fill="#AC8C60" />
        <circle cx="12" cy="44" r="8" fill="#AC8C60" />
        <circle cx="12" cy="70" r="10" fill="#AC8C60" />
        <circle cx="12" cy="100" r="12" fill="#AC8C60" />
      </svg>
      {/* Third Section with Two Circles */}
      <div className="tcircle w-full flex items-center justify-center">
        <div
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(217, 217, 217, 0) 75.24%, rgba(234, 230, 225, 0.32) 100%)",
          }}
          className="relative flex flex-col gap-10 items-center justify-center w-[1192px] h-[1192px] pb10 mb-10 circlethree max-md:w-full max-md:h-full max-md:p-10 border border-[#AC8C60] rounded-full shadow-lg bg-white"
        >
          {/* Small Inner Circle */}
          {/* <div className="absolute flex items-center justify-center w-40 h-40 border border-[#AC8C60] rounded-full bg-white">
          <p className="text-sm text-center font-semibold">
            The Doctrine of Karma:
            <br />
            As you sow, so shall you reap.
          </p>
        </div> */}

          {/* Large Inner Circle */}
          <div
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(217, 217, 217, 0) 75.24%, rgba(234, 230, 225, 0.32) 100%)",
            }}
            className=" flex items-center justify-center w-[500px] h-[500px] circlethreeone  max-md:w-full max-md:h-full   max-md:p-10 border border-[#AC8C60] rounded-full bg-white"
          >
            <p className="text-[20px] text-[#4D4D4D] text-center px-6">
              However, it is important to remember the Doctrine of Karma:
              <br />
              <span className="text-[#000]">
                As you sow, so shall you reap.
              </span>
            </p>
          </div>
          {/* Large Inner Circle */}
          <div
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(217, 217, 217, 0) 75.24%, rgba(234, 230, 225, 0.32) 100%)",
            }}
            className=" flex items-center justify-center w-[680px] h-[680px] circlethretwo max-md:w-full max-md:h-full   max-md:p-10 border border-[#AC8C60] rounded-full bg-white"
          >
            <p className="text-[20px] text-[#4D4D4D] text-center px-6  max-md:px-0">
              This universal cosmic law governs human destiny—while astrology
              can guide you, it cannot alter fate. An astrologer's role is to
              help you{" "}
              <span className="text-[#000]">
                understand and navigate your path with wisdom, resilience, and
                clarity.
              </span>
            </p>
          </div>

          {/* <div className="absolute top-3 left-3 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute bottom-3 right-3 w-2 h-2 bg-black rounded-full"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Why;

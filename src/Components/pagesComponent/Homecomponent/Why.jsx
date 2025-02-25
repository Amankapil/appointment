import React from "react";

const Why = () => {
  return (
    <div className="relative flex flex-col gap-10 items-center justify-center bg-white p-10 space-y-10 overflow-hidden">
      {/* First Circle */}
      <div
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(217, 217, 217, 0) 75.24%, rgba(234, 230, 225, 0.32) 100%)",
        }}
        className="relative flex items-center justify-center w-w540 h-h540 max-md:w-full max-md:h-full max-md:p-10 border border-[#AC8C60] rounded-full shadow-lg"
      >
        <h2 className="text-[56px] font-salernomi text-center">
          Why Prashna Siddhi?
        </h2>
        <div className="absolute top-2 left-2 w-2 h-2 bg-black rounded-full"></div>
        <div className="absolute bottom-2 right-2 w-2 h-2 bg-black rounded-full"></div>
      </div>

      {/* Second Circle */}
      <div
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(217, 217, 217, 0) 75.24%, rgba(234, 230, 225, 0.32) 100%)",
        }}
        className="relative flex font-inter text-[20px] items-center justify-center w-680 h-680 max-md:w-full max-md:h-full   max-md:p-10 border  border-[#AC8C60] rounded-full shadow-lg"
      >
        <p className=" text-center px-8 font-inter text-[20px]">
          Life presents us with uncertainties, and unanswered questions can
          weigh heavily on the mind, leading to prolonged stress and anxiety.
          <span className="text-[#000]">
            This platform is here to provide meaningful and insightful answers
            to your most pressing concerns.{" "}
          </span>
        </p>
        <div className="absolute top-3 left-3 w-2 h-2 bg-black rounded-full"></div>
        <div className="absolute bottom-3 right-3 w-2 h-2 bg-black rounded-full"></div>
      </div>

      {/* Third Section with Two Circles */}
      <div
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(217, 217, 217, 0) 75.24%, rgba(234, 230, 225, 0.32) 100%)",
        }}
        className="relative flex flex-col gap-10 items-center justify-center w-1200 h-1200 max-md:w-full max-md:h-full max-md:p-10 border border-[#AC8C60] rounded-full shadow-lg bg-white"
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
          className=" flex items-center justify-center w-500 h-500 max-md:w-full max-md:h-full   max-md:p-10 border border-[#AC8C60] rounded-full bg-white"
        >
          <p className="text-[20px] text-[#4D4D4D] text-center px-6">
            However, it is important to remember the Doctrine of Karma:
            <br />
            <span className="text-[#000]">As you sow, so shall you reap.</span>
          </p>
        </div>
        {/* Large Inner Circle */}
        <div
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(217, 217, 217, 0) 75.24%, rgba(234, 230, 225, 0.32) 100%)",
          }}
          className=" flex items-center justify-center w-680 h-680 max-md:w-full max-md:h-full   max-md:p-10 border border-[#AC8C60] rounded-full bg-white"
        >
          <p className="text-[20px] text-[#4D4D4D] text-center px-6">
            This universal cosmic law governs human destiny—while astrology can
            guide you, it cannot alter fate. An astrologer's role is to help you{" "}
            <span className="text-[#000]">
              understand and navigate your path with wisdom, resilience, and
              clarity.
            </span>
          </p>
        </div>

        <div className="absolute top-3 left-3 w-2 h-2 bg-black rounded-full"></div>
        <div className="absolute bottom-3 right-3 w-2 h-2 bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default Why;

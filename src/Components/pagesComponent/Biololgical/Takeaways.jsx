import React from "react";

const Takeaways = () => {
  return (
    <>
      <div className="bg-[#fff] text-[#1E1E1E] min-h-screen p-10 max-md:p-4">
        <div className="heading flex mb-10 flex-col items-center justify-center">
          <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi w-[60%] max-md:w-full font-normal mb-6 max-md:w-full">
            Key Takeaways
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
        <div className="img h-[500px] bg-[#1E1E1E]">
          {/* <Image src={} alt="j"/> */}
          imge
        </div>
        <div className="pr-4 max-md:flex-wrap flex flexcol font-inter gap-10 justify-center items-start my-10 ">
          <p className="font-normal text-lg text-[#4D4D4D] w-[50%] max-lg:w-full  text-left">
            The 18-year mark is not just about reaching legal adulthood—it is
            also a karmic checkpoint. According to Vedic wisdom, this phase
            updates an individual’s karmic balance, incorporating all actions
            since birth into the grand tapestry of their destiny.
          </p>
          <div className="w-1/2 max-md:w-full">
            <p className="font-normal text-lg text-[#4D4D4D] w  text-left">
              At Prashnasiddhi.live, we bring the sacred science of Prashna
              Jyotishya into practical use, helping individuals make informed
              decisions within the framework of divine law. Life unfolds
              according to karmic design, but with the right knowledge, we can
              face it boldly and positively.
            </p>
          </div>
        </div>
      </div>

      <div className="pr-4 max-md:flex-wrap flex flexcol font-inter gap-10 justify-center items-start my-10 ">
        <svg
          width="1248"
          className="mt-10 max-xl:w-full"
          height="24"
          viewBox="0 0 1248 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M624.002 24C624.063 17.4338 629.398 12.12 636 12.0386C629.372 11.9568 624.022 6.60173 624.001 0H624.001C623.98 6.60234 618.629 11.9578 612 12.0386C618.603 12.1191 623.938 17.4332 624 24H624.002Z"
            fill="#F0EDE9"
          />
          <circle cx="599" cy="12" r="3" fill="#F0EDE9" />
          <circle cx="3" cy="12" r="3" fill="#F0EDE9" />
          <path d="M597 11.9999L5 12" stroke="#F0EDE9" />
          <circle cx="1245" cy="12" r="2.5" fill="#F0EDE9" stroke="#F0EDE9" />
          <circle cx="649" cy="12" r="2.5" fill="#F0EDE9" stroke="#F0EDE9" />
          <path d="M1243 12.0001L651 12" stroke="#F0EDE9" />
        </svg>
      </div>
    </>
  );
};

export default Takeaways;

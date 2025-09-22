import Link from "next/link";
import React from "react";

const Choose = () => {
  return (
    <>
      <div className="breaking mt-10">
        <h1 className="text-[56px] max-lg:text-[40px]  text-[#4D4D4D] text-center font-salernomi w-[60%] mx-auto max-lg:w-full font-normal mb-6">
          Why Choose Business Astrology with Prashna Siddhi?{" "}
        </h1>

        <div className="flex items-center justify-center mb-10">
          <svg
            width="48"
            height="25"
            viewBox="0 0 48 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="3" cy="12.168" r="3" fill="#1D2127" />
            <path
              d="M24.0015 24.168C24.0633 17.6017 29.3977 12.288 36 12.2065C29.3718 12.1248 24.0216 6.7697 24.001 0.167969H24.0007C23.9802 6.77031 18.629 12.1257 12 12.2065C18.6032 12.2871 23.9385 17.6012 24.0003 24.168H24.0015Z"
              fill="#1D2127"
            />
            <circle cx="45" cy="12.168" r="3" fill="#1D2127" />
          </svg>
        </div>

        <div className="flex items-center flex-col w-[100%] mt-8  justify-center text-center">
          <p className="text-xl font-inter text-[#4D4D4D] mb8 w-1/2 max-md:w-full ">
            These struggles can drain peace and resources astrology provides
            direction and remedies.
          </p>
        </div>
        <div className="lis  max-lg:p-8  max-w-[846px] py-10 mx-auto space-y-4">
          <div
            style={{ boxShadow: "0px 0px 24px 2px #AC8C6066 inset" }}
            className="border-[1px] max-w-[826px] max-md:pl-8  border-[#AC8C60] items-center justify-center py-8 rounded-[24px] p-3 flex relative gap-10 font-inter bg-white shadow-md"
          >
            <div className="svg absolute -left-[27px]">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="27" cy="27" r="26.5" stroke="#AC8C60" />
                <path
                  d="M27.0035 54C27.1425 39.2259 39.1447 27.2701 54 27.0868C39.0866 26.9028 27.0486 14.8539 27.0023 0H27.0017C26.9555 14.8553 14.9153 26.905 0 27.0868C14.8572 27.268 26.8615 39.2247 27.0006 54H27.0035Z"
                  fill="#AC8C60"
                />
              </svg>
            </div>
            <p className="text-xl font-inter text-[#4D4D4D] mb8 w-3/4 max-md:w-full ">
              Comparison Power — Choose between Option A vs Option B with
              clarity.{" "}
              {/* <span className="text-[#000]">Saturn takes 30 years </span> to
              complete one full cycle around the zodiac. */}
            </p>
          </div>
          <div
            style={{ boxShadow: "0px 0px 24px 2px #AC8C6066 inset" }}
            className="border-[1px] max-w-[826px] max-md:pl-8  border-[#AC8C60] items-center justify-center py-8 rounded-[24px] p-3 flex relative gap-10 font-inter bg-white shadow-md"
          >
            <div className="svg absolute -left-[27px]">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="27" cy="27" r="26.5" stroke="#AC8C60" />
                <path
                  d="M27.0035 54C27.1425 39.2259 39.1447 27.2701 54 27.0868C39.0866 26.9028 27.0486 14.8539 27.0023 0H27.0017C26.9555 14.8553 14.9153 26.905 0 27.0868C14.8572 27.268 26.8615 39.2247 27.0006 54H27.0035Z"
                  fill="#AC8C60"
                />
              </svg>
            </div>
            <p className="text-xl font-inter text-[#4D4D4D] mb8 w-3/4 max-md:w-full ">
              Risk & Compliance Checks — Know if a decision may attract legal or
              regulatory issues.{" "}
            </p>
          </div>

          <div
            style={{ boxShadow: "0px 0px 24px 2px #AC8C6066 inset" }}
            className="border-[1px] w-full max-w-[826px] max-md:pl-8 border-[#AC8C60] items-center justify-center py-8 rounded-[24px] p-3 flex relative gap-10 font-inter bg-white shadow-md"
          >
            <div className="svg absolute -left-[27px]">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="27" cy="27" r="26.5" stroke="#AC8C60" />
                <path
                  d="M27.0035 54C27.1425 39.2259 39.1447 27.2701 54 27.0868C39.0866 26.9028 27.0486 14.8539 27.0023 0H27.0017C26.9555 14.8553 14.9153 26.905 0 27.0868C14.8572 27.268 26.8615 39.2247 27.0006 54H27.0035Z"
                  fill="#AC8C60"
                />
              </svg>
            </div>
            <p className="text-xl font-inter text-[#4D4D4D] mb8 w-3/4 max-md:w-full ">
              No Birth Details Needed — Get insights on partners, competitors,
              or clients without needing their personal data.{" "}
            </p>
          </div>
        </div>

        <div className="flex items-center flex-col w-[100%] mt-0  justify-center text-center">
          <Link
            href="/booking"
            className="bg-[#101010] text-[20px] font-salernomi mt-6 text-white px-[24px] py-[12px] rounded hover:bg-[#333333] transition-all duration-300 shadow-button"
          >
            See How Astrology Can Help
          </Link>{" "}
        </div>
      </div>
    </>
  );
};

export default Choose;

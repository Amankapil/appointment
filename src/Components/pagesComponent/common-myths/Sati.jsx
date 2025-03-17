import Image from "next/image";
import React from "react";
import img from "./assets/image 8.png";

const Sati = () => {
  return (
    <div className="manin bg max-w-7xl mx-auto py-10">
      <div className="head max-md:flex-wrap max-md:justify-center max-md:p-10 flex items-center justify-start gap-4">
        <div className="icon">
          <svg
            width="116"
            height="106"
            viewBox="0 0 116 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="52" cy="52" r="51" stroke="#AC8C60" strokeWidth="2" />
            <circle cx="52" cy="52" r="43" stroke="#AC8C60" strokeWidth="2" />
            <path
              d="M57.2305 73H47.1406L47.168 72.1797C48.0612 72.1797 48.7083 71.7786 49.1094 70.9766C49.5286 70.1562 49.7383 68.8984 49.7383 67.2031L49.7656 43.168C49.7656 41.8737 49.4284 40.8802 48.7539 40.1875C48.4622 39.8958 48.0703 39.6589 47.5781 39.4766C47.0859 39.276 46.5117 39.1758 45.8555 39.1758V38.3555C47.0221 38.0638 48.2708 37.5534 49.6016 36.8242C50.2578 36.4414 50.9049 36.0221 51.543 35.5664C52.1992 35.0924 52.8646 34.5638 53.5391 33.9805H54.6602V67.2031C54.6602 68.9531 54.8607 70.2201 55.2617 71.0039C55.6628 71.7878 56.319 72.1797 57.2305 72.1797V73Z"
              fill="#AC8C60"
            />
            <path
              d="M8.00103 16C8.04222 11.6225 11.5984 8.08003 16 8.02572C11.5812 7.97119 8.01441 4.40116 8.00069 0H8.0005C7.98681 4.40156 4.41934 7.97184 0 8.02572C4.40212 8.07941 7.95897 11.6221 8.00019 16H8.00103Z"
              fill="#AC8C60"
            />
            <path
              d="M104.002 106C104.063 99.4338 109.398 94.12 116 94.0386C109.372 93.9568 104.022 88.6017 104.001 82H104.001C103.98 88.6023 98.629 93.9578 92 94.0386C98.6032 94.1191 103.938 99.4332 104 106H104.002Z"
              fill="#AC8C60"
            />
          </svg>
        </div>
        <h1 className="text-[56px] max-md:text-[40px] text-[#4D4D4D] text-left font-salernomi w-[60%] max-md:w-full font-normal mb-6">
          Sade Sati – Does It Really Mean 7.5 Years of Hardship?
        </h1>
      </div>
      <div className="below max-md:flex-wrap max-lg:p-4  flex items-start justify-center mt-8">
        <div className="left w-1/2 max-lg:w-full">
          <p className="text-xl font-inter text-[#4D4D4D] mb-8 w-3/4 max-md:w-full ">
            Sade Sati refers to{" "}
            <span className="text-[#000]">
              Saturn’s transit over the natal Moon,{" "}
            </span>
            lasting approximately{" "}
            <span className="text-[#000]">7.5 years. </span> This period is
            often feared as
            <span className="text-[#000]">challenging and unlucky. </span> But
            does this generalization hold true?
          </p>
        </div>
        <div className="right">
          <Image src={img} alt="l" />
        </div>
      </div>
      <div className="breaking mt-10">
        <h1 className="text-[40px]  text-[#4D4D4D] text-center font-salernomi w-[100%] font-normal mb-6">
          Breaking the Myth
        </h1>

        <div className="lis  max-lg:p-8  max-w-[846px] mx-auto space-y-4">
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
              <span className="text-[#000]">Saturn takes 30 years </span> to
              complete one full cycle around the zodiac.
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
              In a <span className="text-[#000]"> 60-year lifespan, </span>
              person will experience{" "}
              <span className="text-[#000]">
                two cycles of Sade Sati (totaling 15 years).
              </span>
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
              If
              <span className="text-[#000]">
                {" "}
                Sade Sati were always negative,
              </span>
              wouldn’t{" "}
              <span className="text-[#000]">
                one-fourth of life be doomed?{" "}
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center flex-col w-[100%] mt-8  justify-center text-center">
          <h1 className="text-[40px] text-[#4D4D4D] w-[80%] max-lg:w-full text-center font-salernomi font-normal mb-6">
            <span className="text-[#000]">Reality: </span> Saturn is the{" "}
            <span className="text-[#000]">
              planet of discipline, patience, and karma correction.{" "}
            </span>{" "}
            It refines rather than punishes. Its effects depend on{" "}
            <span className="text-[#000]">
              your actions, mindset, and planetary alignments —{" "}
            </span>{" "}
            not blind fear.
          </h1>{" "}
        </div>
      </div>
    </div>
  );
};

export default Sati;

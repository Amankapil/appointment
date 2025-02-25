"use client";

import { useState } from "react";

const Language = () => {
  const [isUSD, setIsUSD] = useState(false);

  const pricingOptions = [
    {
      duration: "Precious 15 Minutes",
      priceINR: "Select Preferred Language",
      priceUSD: 20,
    },
    {
      duration: "Make Payment (Rs. 500 per question)",
      priceINR: "Make Payment (Rs. 500 per question)",
      priceUSD: 35,
    },
    {
      duration: "Get Real-Time Answer Over Phone",
      priceINR: "Get Real-Time Answer Over Phone",
      priceUSD: 50,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-6 p-10 max-md:p-4">
      {/* Pricing Cards */}
      <div className="flex items-center justify-center gap-32 flex-col">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            style={{
              boxShadow: "0px 0px 24px 2px #AC8C6066 inset",
            }}
            className="relative  w-[520px] h-[196px] max-md:w-full  border-[1px] border-[#c2a882] rounded-[24px] p-6 bg-[#F0EDE9] shadow-lg"
          >
            <h3 className="text-lg font-semibold text-gray-700 text-center flex items-center justify-center">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_i_363_50)">
                  <circle cx="30" cy="30" r="30" fill="#F0EDE9" />
                </g>
                <circle
                  cx="30"
                  cy="30"
                  r="29"
                  stroke="#AC8C60"
                  strokeWidth="2"
                />
                <path
                  d="M34 30.2362L35.8825 34H32.1175L32.9125 32.4125L34 30.2362ZM42 20V40C42 40.5304 41.7893 41.0391 41.4142 41.4142C41.0391 41.7893 40.5304 42 40 42H20C19.4696 42 18.9609 41.7893 18.5858 41.4142C18.2107 41.0391 18 40.5304 18 40V20C18 19.4696 18.2107 18.9609 18.5858 18.5858C18.9609 18.2107 19.4696 18 20 18H40C40.5304 18 41.0391 18.2107 41.4142 18.5858C41.7893 18.9609 42 19.4696 42 20ZM39.895 37.5525L34.895 27.5525C34.8121 27.3861 34.6844 27.2461 34.5263 27.1483C34.3682 27.0504 34.1859 26.9986 34 26.9986C33.8141 26.9986 33.6318 27.0504 33.4737 27.1483C33.3156 27.2461 33.1879 27.3861 33.105 27.5525L31.4575 30.85C30.3977 30.6424 29.3927 30.2168 28.5063 29.6C29.8879 28.0358 30.7428 26.0767 30.95 24H33C33.2652 24 33.5196 23.8946 33.7071 23.7071C33.8946 23.5196 34 23.2652 34 23C34 22.7348 33.8946 22.4804 33.7071 22.2929C33.5196 22.1054 33.2652 22 33 22H28V21C28 20.7348 27.8946 20.4804 27.7071 20.2929C27.5196 20.1054 27.2652 20 27 20C26.7348 20 26.4804 20.1054 26.2929 20.2929C26.1054 20.4804 26 20.7348 26 21V22H21C20.7348 22 20.4804 22.1054 20.2929 22.2929C20.1054 22.4804 20 22.7348 20 23C20 23.2652 20.1054 23.5196 20.2929 23.7071C20.4804 23.8946 20.7348 24 21 24H28.935C28.7366 25.5778 28.0705 27.0602 27.0225 28.2563C26.5785 27.7379 26.2006 27.1665 25.8975 26.555C25.7747 26.326 25.5675 26.1538 25.3199 26.0748C25.0723 25.9959 24.8037 26.0165 24.571 26.1322C24.3383 26.2479 24.1598 26.4496 24.0733 26.6947C23.9867 26.9397 23.999 27.2088 24.1075 27.445C24.4902 28.2168 24.969 28.9371 25.5325 29.5887C24.2006 30.5096 22.6193 31.002 21 31C20.7348 31 20.4804 31.1054 20.2929 31.2929C20.1054 31.4804 20 31.7348 20 32C20 32.2652 20.1054 32.5196 20.2929 32.7071C20.4804 32.8946 20.7348 33 21 33C23.1709 33.0023 25.283 32.2942 27.0138 30.9837C28.061 31.7842 29.2591 32.365 30.5362 32.6912L28.105 37.5525C27.9863 37.7899 27.9668 38.0647 28.0507 38.3164C28.1346 38.5682 28.3151 38.7763 28.5525 38.895C28.7899 39.0137 29.0647 39.0332 29.3164 38.9493C29.5682 38.8654 29.7763 38.6849 29.895 38.4475L31.1175 36H36.8825L38.105 38.4475C38.1638 38.565 38.2451 38.6698 38.3444 38.7559C38.4437 38.842 38.5589 38.9077 38.6836 38.9493C38.8082 38.9908 38.9399 39.0074 39.0709 38.9981C39.202 38.9888 39.33 38.9538 39.4475 38.895C39.565 38.8362 39.6698 38.7549 39.7559 38.6556C39.842 38.5563 39.9077 38.4411 39.9493 38.3164C39.9908 38.1918 40.0074 38.0601 39.9981 37.9291C39.9888 37.798 39.9538 37.67 39.895 37.5525Z"
                  fill="#AC8C60"
                />
                <defs>
                  <filter
                    id="filter0_i_363_50"
                    x="0"
                    y="0"
                    width="60"
                    height="60"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="2"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect1_innerShadow_363_50"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="12" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.67451 0 0 0 0 0.54902 0 0 0 0 0.376471 0 0 0 0.4 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_363_50"
                    />
                  </filter>
                </defs>
              </svg>
            </h3>

            {/* Toggle Switch */}
            <div className="flex justify-center flex-col items-center mt-3">
              <div className="border absolute left-[7px] top-[16px]  w-[504px] h-[164px] max-md:w-full rounded-[24px] one border-[#c49b6d] p-2">
                <div className="border absolute left-[7px] -top-[10px] tw w-[488px] h-[180px] max-md:w-full rounded-[24px] border-[#c49b6d] p-6 transition-colors duration-300"></div>{" "}
              </div>
            </div>

            {/* Price Display */}
            <div className="text-center flex items-center justify-center mt-4">
              <span className="text-2xl font-normal text-black font-inter">
                {isUSD ? `$${option.priceUSD}` : `${option.priceINR}`}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;

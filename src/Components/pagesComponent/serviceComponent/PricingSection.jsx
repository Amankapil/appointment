"use client";

import { useState } from "react";

const PricingSection = () => {
  const [isUSD, setIsUSD] = useState(false);

  const pricingOptions = [
    { duration: "Precious 15 Minutes", priceINR: 1000, priceUSD: 20 },
    { duration: "Precious 30 Minutes", priceINR: 2000, priceUSD: 35 },
    { duration: "Precious 45 Minutes", priceINR: 2500, priceUSD: 50 },
  ];

  return (
    <div className="flex flex-col items-center gap-6 p-10">
      <div className="heading flex mb-10 flex-col items-center justify-center">
        <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
          Premium Consultation
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
      {/* Top Info Box */}
      <div className="bg-[#f5f0eb] px-6 py-3 rounded-xl text-center text-sm font-medium shadow-md">
        Overseas Clients Includes NRIs
      </div>

      {/* Pricing Cards */}
      <div className="flex items-center justify-center gap-6">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="relative  w-[403px] h-[376px]  border-[1px] border-[#c2a882] rounded-[24px] p-6 bg-[#F0EDE9] shadow-lg"
          >
            <h3 className="text-lg font-semibold text-gray-700 text-center mt-12">
              {option.duration}
            </h3>

            {/* Toggle Switch */}
            <div className="flex justify-center items-center mt-3">
              <div className="border absolute left-[14px] top-[34px]  w-[371px] h-[312px] rounded-[24px] one border-[#c49b6d] p-2">
                <div className="border absolute left-[17px] -top-[19px] tw w-[339px] h-[344px] rounded-[24px] border-[#c49b6d] p-6 transition-colors duration-300"></div>{" "}
              </div>
              <span className="text-gray-600">₹</span>
              <label className="relative inline-flex items-center mx-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isUSD}
                  onChange={() => setIsUSD(!isUSD)}
                />
                <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-[#c2a882] relative transition-all">
                  <div
                    className={`w-4 h-4 bg-white rounded-full absolute top-[2px] transition-all ${
                      isUSD ? "right-1" : "left-1"
                    }`}
                  ></div>
                </div>
              </label>
              <span className="text-gray-600">$</span>
            </div>

            {/* Price Display */}
            <div className="text-center flex items-center justify-center mt-4">
              <span className="text-3xl font-bold text-black">
                {isUSD ? `$${option.priceUSD}` : `₹${option.priceINR}`}
              </span>
              <p className="text-sm text-gray-600">
                {isUSD ? " / Overseas Clients" : " / Residents Indians"}
              </p>
            </div>

            {/* Book Now Button */}
            <div className="flex items-center justify-center">
              <button className="mt-5 w-[80%] bg-black text-white py-2 rounded-md text-sm font-medium">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;

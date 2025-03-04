"use client";

import { useState } from "react";
import "./style.css";

const PricingSection = () => {
  const [isUSD, setIsUSD] = useState(false);
  const [isUSD1, setIsUSD1] = useState(false);
  const [isUSD2, setIsUSD2] = useState(false);
  const [isUSD3, setIsUSD3] = useState(false);

  const pricingOptions = [
    { duration: "Precious 45 Minutes", priceINR: 2500, priceUSD: 50 },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center gap-6 p-10 max-md:p-4">
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
        {/* <div className="bg-[#f5f0eb] px-6 py-3 rounded-xl text-center text-sm font-medium shadow-md">
        Overseas Clients Includes NRIs
      </div> */}

        {/* Pricing Cards */}
        <div className="flex items-center justify-center gap-6 max-lg:flex-wrap">
          <div className="relative flex items-center flex-col justify-center gap-1  price w[403px] h[376px]  border[1px] border[#c2a882] rounded[24px] p-6 bg[#F0EDE9] shadowlg">
            <h3 className="text-[32px] font-normal font-salernomi text-gray-700 text-center m">
              Precious 15 Minutes
            </h3>

            {/* Toggle Switch */}
            <div className="flex justify-center items-center mt-3">
              {/* <div className="border absolute left-[14px] top-[34px]  w-[371px] h-[312px] rounded-[24px] one border-[#c49b6d] p-2">
                <div className="border absolute left-[17px] -top-[19px] tw w-[339px] h-[344px] rounded-[24px] border-[#c49b6d] p-6 transition-colors duration-300"></div>{" "}
              </div> */}
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
            <div className="text-center flex items-center justify-center mt-4 w-full">
              <span className="text-[44px] font-normal text-black">
                {isUSD ? `$20` : `₹1000`}
              </span>
              <p className="text-sm text-gray-600">
                {isUSD ? " / Overseas Clients" : " / Residents Indians"}
              </p>
            </div>
            <div className="text-center flex items-start justify-center gap-3 w-full">
              <span className="text-[44px] font-bold text-black">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99984 18.3332C14.6022 18.3332 18.3332 14.6022 18.3332 9.99984C18.3332 5.39746 14.6022 1.6665 9.99984 1.6665C5.39746 1.6665 1.6665 5.39746 1.6665 9.99984C1.6665 14.6022 5.39746 18.3332 9.99984 18.3332ZM14.5474 7.88076L9.1665 13.2617L5.66058 9.75575L6.8391 8.57725L9.1665 10.9047L13.3689 6.70225L14.5474 7.88076Z"
                    fill="#101010"
                  />
                </svg>
              </span>
              <p className="text-sm text-gray-600">
                Overseas Clients Includes NRIs
              </p>
            </div>
            <div className="text-center flex items-start justify-center mt gap-3 w-full">
              <span className="text-[44px] font-bold text-black">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99984 18.3332C14.6022 18.3332 18.3332 14.6022 18.3332 9.99984C18.3332 5.39746 14.6022 1.6665 9.99984 1.6665C5.39746 1.6665 1.6665 5.39746 1.6665 9.99984C1.6665 14.6022 5.39746 18.3332 9.99984 18.3332ZM14.5474 7.88076L9.1665 13.2617L5.66058 9.75575L6.8391 8.57725L9.1665 10.9047L13.3689 6.70225L14.5474 7.88076Z"
                    fill="#101010"
                  />
                </svg>
              </span>
              <p className="text-sm text-gray-600">Astrology Consultation</p>
            </div>

            {/* Book Now Button */}
            <div className="flex items-center justify-center w-full mt-2">
              <button
                className={`mt-5 w-[80%] max-lg:w-full bg-black text-white py-2 rounded-md text-sm font-medium ${
                  !isChecked ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Book Now
              </button>
            </div>

            <div className="flex gap-1 text-[12px] mt-4 items-center justify-center">
              <input
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                type="checkbox"
              />
              <span>I accept the</span>
              <span
                onClick={() => setIsOpen(true)}
                className="text-[#AC8C60]  cursor-pointer"
              >
                Terms and Conditions
              </span>
            </div>
          </div>
          <div className="relative flex items-center flex-col justify-center gap-1  price w[403px] h[376px]  border[1px] border[#c2a882] rounded[24px] p-6 bg[#F0EDE9] shadowlg">
            <h3 className="text-[32px] font-normal font-salernomi text-gray-700 text-center m">
              Precious 30 Minutes
            </h3>

            {/* Toggle Switch */}
            <div className="flex justify-center items-center mt-3">
              {/* <div className="border absolute left-[14px] top-[34px]  w-[371px] h-[312px] rounded-[24px] one border-[#c49b6d] p-2">
                <div className="border absolute left-[17px] -top-[19px] tw w-[339px] h-[344px] rounded-[24px] border-[#c49b6d] p-6 transition-colors duration-300"></div>{" "}
              </div> */}
              <span className="text-gray-600">₹</span>
              <label className="relative inline-flex items-center mx-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isUSD2}
                  onChange={() => setIsUSD2(!isUSD2)}
                />
                <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-[#c2a882] relative transition-all">
                  <div
                    className={`w-4 h-4 bg-white rounded-full absolute top-[2px] transition-all ${
                      isUSD2 ? "right-1" : "left-1"
                    }`}
                  ></div>
                </div>
              </label>
              <span className="text-gray-600">$</span>
            </div>

            {/* Price Display */}
            <div className="text-center flex items-center justify-center mt-4 w-full">
              <span className="text-[44px] font-normal text-black">
                {isUSD2 ? `$35` : `₹2000`}
              </span>
              <p className="text-sm text-gray-600">
                {isUSD2 ? " / Overseas Clients" : " / Residents Indians"}
              </p>
            </div>
            <div className="text-center flex items-start justify-center gap-3 w-full">
              <span className="text-[44px] font-bold text-black">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99984 18.3332C14.6022 18.3332 18.3332 14.6022 18.3332 9.99984C18.3332 5.39746 14.6022 1.6665 9.99984 1.6665C5.39746 1.6665 1.6665 5.39746 1.6665 9.99984C1.6665 14.6022 5.39746 18.3332 9.99984 18.3332ZM14.5474 7.88076L9.1665 13.2617L5.66058 9.75575L6.8391 8.57725L9.1665 10.9047L13.3689 6.70225L14.5474 7.88076Z"
                    fill="#101010"
                  />
                </svg>
              </span>
              <p className="text-sm text-gray-600">
                Overseas Clients Includes NRIs
              </p>
            </div>
            <div className="text-center flex items-start justify-center mt gap-3 w-full">
              <span className="text-[44px] font-bold text-black">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99984 18.3332C14.6022 18.3332 18.3332 14.6022 18.3332 9.99984C18.3332 5.39746 14.6022 1.6665 9.99984 1.6665C5.39746 1.6665 1.6665 5.39746 1.6665 9.99984C1.6665 14.6022 5.39746 18.3332 9.99984 18.3332ZM14.5474 7.88076L9.1665 13.2617L5.66058 9.75575L6.8391 8.57725L9.1665 10.9047L13.3689 6.70225L14.5474 7.88076Z"
                    fill="#101010"
                  />
                </svg>
              </span>
              <p className="text-sm text-gray-600">Astrology Consultation</p>
            </div>

            {/* Book Now Button */}
            <div className="flex items-center justify-center w-full mt-2">
              <button
                className={`mt-5 w-[80%] max-lg:w-full bg-black text-white py-2 rounded-md text-sm font-medium ${
                  !isChecked1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Book Now
              </button>
            </div>

            <div className="flex gap-1 text-[12px] mt-4 items-center justify-center">
              <input
                checked={isChecked1}
                onChange={() => setIsChecked1(!isChecked1)}
                type="checkbox"
              />
              <span>I accept the</span>
              <span
                onClick={() => setIsOpen(true)}
                className="text-[#AC8C60]  cursor-pointer"
              >
                Terms and Conditions
              </span>
            </div>
          </div>
          <div className="relative flex items-center flex-col justify-center gap-1  price w[403px] h[376px]  border[1px] border[#c2a882] rounded[24px] p-6 bg[#F0EDE9] shadowlg">
            <h3 className="text-[32px] font-normal font-salernomi text-gray-700 text-center m">
              Precious 45 Minutes
            </h3>

            {/* Toggle Switch */}
            <div className="flex justify-center items-center mt-3">
              {/* <div className="border absolute left-[14px] top-[34px]  w-[371px] h-[312px] rounded-[24px] one border-[#c49b6d] p-2">
                <div className="border absolute left-[17px] -top-[19px] tw w-[339px] h-[344px] rounded-[24px] border-[#c49b6d] p-6 transition-colors duration-300"></div>{" "}
              </div> */}
              <span className="text-gray-600">₹</span>
              <label className="relative inline-flex items-center mx-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isUSD3}
                  onChange={() => setIsUSD3(!isUSD3)}
                />
                <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-[#c2a882] relative transition-all">
                  <div
                    className={`w-4 h-4 bg-white rounded-full absolute top-[2px] transition-all ${
                      isUSD3 ? "right-1" : "left-1"
                    }`}
                  ></div>
                </div>
              </label>
              <span className="text-gray-600">$</span>
            </div>

            {/* Price Display */}
            <div className="text-center flex items-center justify-center mt-4 w-full">
              <span className="text-[44px] font-normal text-black">
                {isUSD3 ? `$50` : `₹2500`}
              </span>
              <p className="text-sm text-gray-600">
                {isUSD3 ? " / Overseas Clients" : " / Residents Indians"}
              </p>
            </div>
            <div className="text-center flex items-start justify-center gap-3 w-full">
              <span className="text-[44px] font-bold text-black">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99984 18.3332C14.6022 18.3332 18.3332 14.6022 18.3332 9.99984C18.3332 5.39746 14.6022 1.6665 9.99984 1.6665C5.39746 1.6665 1.6665 5.39746 1.6665 9.99984C1.6665 14.6022 5.39746 18.3332 9.99984 18.3332ZM14.5474 7.88076L9.1665 13.2617L5.66058 9.75575L6.8391 8.57725L9.1665 10.9047L13.3689 6.70225L14.5474 7.88076Z"
                    fill="#101010"
                  />
                </svg>
              </span>
              <p className="text-sm text-gray-600">
                Overseas Clients Includes NRIs
              </p>
            </div>
            <div className="text-center flex items-start justify-center mt gap-3 w-full">
              <span className="text-[44px] font-bold text-black">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99984 18.3332C14.6022 18.3332 18.3332 14.6022 18.3332 9.99984C18.3332 5.39746 14.6022 1.6665 9.99984 1.6665C5.39746 1.6665 1.6665 5.39746 1.6665 9.99984C1.6665 14.6022 5.39746 18.3332 9.99984 18.3332ZM14.5474 7.88076L9.1665 13.2617L5.66058 9.75575L6.8391 8.57725L9.1665 10.9047L13.3689 6.70225L14.5474 7.88076Z"
                    fill="#101010"
                  />
                </svg>
              </span>
              <p className="text-sm text-gray-600">Astrology Consultation</p>
            </div>

            {/* Book Now Button */}
            <div className="flex items-center justify-center w-full mt-2">
              <button
                className={`mt-5 w-[80%] max-lg:w-full bg-black text-white py-2 rounded-md text-sm font-medium ${
                  !isChecked2 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Book Now
              </button>
            </div>

            <div className="flex gap-1 text-[12px] mt-4 items-center justify-center">
              <input
                checked={isChecked2}
                onChange={() => setIsChecked2(!isChecked2)}
                type="checkbox"
              />
              <span>I accept the</span>
              <span
                onClick={() => setIsOpen(true)}
                className="text-[#AC8C60]  cursor-pointer"
              >
                Terms and Conditions
              </span>
            </div>
          </div>

          {isOpen && (
            <div className="fixed inset-0 bg-[#00000005] bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-[#F5F0EB] text-gray-800 p-8 rounded-lg w-[90%] max-w-3xl shadow-lg border border-gray-300">
                <h2 className="text-xl font-semibold text-center">
                  Disclaimer
                </h2>
                <div className="text-center flex items-center justify-center mt-3 text-gray-500">
                  <svg
                    width="30"
                    height="10"
                    viewBox="0 0 30 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2" cy="5" r="2" fill="#1D2127" />
                    <path
                      d="M15.0006 10C15.0264 7.26406 17.249 5.05002 20 5.01607C17.2383 4.98199 15.009 2.75072 15.0004 0H15.0003C14.9918 2.75098 12.7621 4.9824 10 5.01607C12.7513 5.04963 14.9744 7.26383 15.0001 10H15.0006Z"
                      fill="#1D2127"
                    />
                    <circle cx="28" cy="5" r="2" fill="#1D2127" />
                  </svg>
                </div>

                <div className="mt-4 space-y-4 text-sm text-gray-700">
                  <div>
                    <h3 className="font-salernomi text-[#4D4D4D] text-[18px] text-center">
                      Astrological Guidance & Interpretation
                    </h3>
                    <p className="font-inter text-[14px]text-[#4D4D4D] text-center ">
                      All insights provided on this website are based on{" "}
                      <span className="text-[#101010]">
                        astrological principles and planetary positions.{" "}
                      </span>{" "}
                      While the real-time positions of planets are{" "}
                      <span className="text-[#101010]">
                        scientifically accurate,{" "}
                      </span>
                      their astrological interpretations are{" "}
                      <span className="text-[#101010]">
                        intuitive, symbolic, and based on traditional wisdom.{" "}
                      </span>{" "}
                      These interpretations may vary due to{" "}
                      <span className="text-[#101010]">
                        spiritual, karmic,{" "}
                      </span>
                      and{" "}
                      <span className="text-[#101010]">
                        unseen influences beyond human perception.{" "}
                      </span>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-salernomi text-[#4D4D4D] text-[18px] text-center">
                      Personal Testimonials & Experiences
                    </h3>
                    <p className="font-inter text-[14px]text-[#4D4D4D] text-center ">
                      Client testimonials and opinions shared on this website
                      reflect{" "}
                      <span className="text-[#101010]">
                        individual experiences{" "}
                      </span>{" "}
                      and should not be assumed to apply universally. The
                      effectiveness of astrological insights varies for each
                      person based on{" "}
                      <span className="text-[#101010]">
                        unique karmic influences and life circumstances.{" "}
                      </span>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-salernomi text-[#4D4D4D] text-[18px] text-center">
                      Professional Decision-Making
                    </h3>
                    <p className="font-inter text-[14px]text-[#4D4D4D] text-center ">
                      The guidance, hints, and tips provided here are intended
                      for
                      <span className="text-[#101010]">
                        spiritual and personal insight.{" "}
                      </span>{" "}
                      For major life decisions involving{" "}
                      <span className="text-[#101010]">
                        finance, health, education, legal matters,{" "}
                      </span>{" "}
                      or family issues, you should consult{" "}
                      <span className="text-[#101010]">
                        qualified professionals{" "}
                      </span>
                      in the respective fields before taking action.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-salernomi text-[#4D4D4D] text-[18px] text-center">
                      Accuracy & Limitations
                    </h3>
                    <p className="font-inter text-[14px]text-[#4D4D4D] text-center ">
                      No astrologer, no matter how experienced, can{" "}
                      <span className="text-[#101010]">
                        guarantee 100% accuracy{" "}
                      </span>{" "}
                      in predictions. Astrology provides a{" "}
                      <span className="text-[#101010]">
                        probability-based understanding of life events,{" "}
                      </span>
                      not absolute certainties. Your{" "}
                      <span className="text-[#101010]">
                        free will, actions, and divine grace{" "}
                      </span>{" "}
                      play a crucial role in shaping your future.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-salernomi text-[#4D4D4D] text-[18px] text-center">
                      No Inducement or Persuasion
                    </h3>
                    <p className="font-inter text-[14px]text-[#4D4D4D] text-center ">
                      We do not intend to{" "}
                      <span className="text-[#101010]">
                        lure, persuade, or entice{" "}
                      </span>{" "}
                      anyone into consulting us. Our services are available only
                      to those{" "}
                      <span className="text-[#101010]">
                        who seek genuine spiritual and astrological insights
                        with sincerity and an open mind.{" "}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex justify-between border2 border-t pt-4  border-[#AC8C60]">
                  <button
                    className="border border-gray-700 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200"
                    onClick={() => setIsOpen(false)}
                  >
                    I Do Not Agree
                  </button>
                  <button
                    className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
                    onClick={() => {
                      setIsAgreed(true);
                      setIsOpen(false);
                    }}
                  >
                    I Agree
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <div
          style={{ boxShadow: "0px 0px 24px 2px #AC8C6066 inset" }}
          className="border-[1px] max-w-[1285px] mx-auto  border-[#AC8C60] items-center justify-center py-8 rounded-[24px] p-3 flex relative gap-10 font-inter bg-white shadow-md"
        >
          <p className="text-[20px] font-inter text-[#4D4D4D] mb8 w-full p-3 max-md:w-full ">
            <span className="text-[#000]"> Notice: </span> The duration of
            Consultation chosen by you refers to the maximum time that can be
            spent and does not limit the number persons or the number of
            questions within the maximum time slot chosen by you.
          </p>
        </div>
        <div
          style={{ boxShadow: "0px 0px 24px 2px #AC8C6066 inset" }}
          className="border-[1px] max-w-[1285px] mx-auto  border-[#AC8C60] items-center justify-center py-8 rounded-[24px] p-3 flex relative gap-10 font-inter bg-white shadow-md"
        >
          <p className="text-[20px] font-inter text-[#4D4D4D] mb8 w-full p-3 max-md:w-full ">
            <span className="text-[#000]"> Notice: </span> The time may vary
            despite your indication while efforts will be made to be very close
            to your indicated convenience. Further, I work between 10 AM and
            5.30 PM (IST) on all days of the week and consultation is only over
            telephone after the receipt of your payment
          </p>
        </div>
      </div>
    </>
  );
};

export default PricingSection;

"use client";
import React from "react";
// import img from "./assets/Frame 174.png";
import Image from "next/image";

const Disclaimer = () => {
  // Single Card component with triple borders

  // Center “star” SVG

  return (
    <>
      <div className="bg-[#fff] pt-20">
        <div className="heading flex flex-col items-center justify-center">
          <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
            Disclaimer
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

          <div className="svg regius flex items-center justify-center flex-col my-10">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="30"
                cy="30"
                r="29.4"
                fill="#F0EDE9"
                stroke="#AC8C60"
                stroke-width="1.2"
              />
              <g filter="url(#filter0_i_298_744)">
                <circle cx="30" cy="30" r="24" fill="#F0EDE9" />
              </g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.3086 7.2L30.0014 6L30.6942 7.2L36.9296 18.0001H49.4006L50.7862 18.0001L50.0934 19.2001L43.8579 30.0002L50.0932 40.8L50.786 42H49.4004H36.9299L30.6945 52.8001L30.0016 54.0001L29.3088 52.8001L23.0734 42H10.6024H9.2168L9.90962 40.8L16.1451 29.9998L9.90985 19.2001L9.21703 18.0001L10.6027 18.0001H23.0732L29.3086 7.2ZM22.3804 19.2001H11.2955L16.8379 28.7998L22.3804 19.2001ZM17.5307 29.9998L23.766 19.2001H36.2368L42.4723 30.0002L36.2371 40.8H23.7662L17.5307 29.9998ZM16.8379 31.1998L11.2953 40.8H22.3806L16.8379 31.1998ZM24.459 42L30.0016 51.6001L35.5442 42H24.459ZM37.6227 40.8H48.7076L43.1651 31.2002L37.6227 40.8ZM43.1651 28.8002L48.7078 19.2001H37.6225L43.1651 28.8002ZM35.544 18.0001H24.4588L30.0014 8.4L35.544 18.0001Z"
                fill="#AC8C60"
              />
              <path
                d="M31.6184 35.8H28.5914L28.5996 35.5539C28.8676 35.5539 29.0617 35.4336 29.182 35.193C29.3078 34.9469 29.3707 34.5695 29.3707 34.0609L29.3789 26.8504C29.3789 26.4621 29.2777 26.164 29.0754 25.9562C28.9879 25.8687 28.8703 25.7976 28.7227 25.743C28.575 25.6828 28.4027 25.6527 28.2059 25.6527V25.4066C28.5559 25.3191 28.9305 25.166 29.3297 24.9473C29.5266 24.8324 29.7207 24.7066 29.9121 24.5699C30.109 24.4277 30.3086 24.2691 30.5109 24.0941H30.8473V34.0609C30.8473 34.5859 30.9074 34.966 31.0277 35.2012C31.148 35.4363 31.3449 35.5539 31.6184 35.5539V35.8Z"
                fill="#AC8C60"
              />
              <defs>
                <filter
                  id="filter0_i_298_744"
                  x="6"
                  y="6"
                  width="48"
                  height="48"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                    radius="1.2"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect1_innerShadow_298_744"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="7.2" />
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
                    result="effect1_innerShadow_298_744"
                  />
                </filter>
              </defs>
            </svg>

            <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
              Astrological Guidance & Interpretation
            </h1>

            <p className="text-xl font-inter text-[#4D4D4D]  w-[60%] text-center mb-8">
              All insights provided on this website are based on{" "}
              <span className="text-[#000]">
                astrological principles and planetary positions
              </span>{" "}
              While the real-time positions of planets are
              <span className="text-[#000]">scientifically accurate</span> their
              astrological interpretations are
              <span className="text-[#000]">
                {" "}
                intuitive, symbolic, and based on traditional wisdom
              </span>
              These interpretations may vary due to
              <span className="text-[#000]">
                spiritual, karmic, and unseen influences beyond human
                perception.
              </span>
            </p>
          </div>
          {/* <Image src={img} alt="jflas" /> */}
        </div>
      </div>

      <div className="flex items-center flex-ol   justify-center text-center my-10">
        <svg
          width="826"
          height="24"
          viewBox="0 0 826 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M413.002 24C413.063 17.4338 418.398 12.12 425 12.0386C418.372 11.9568 413.022 6.60173 413.001 0H413.001C412.98 6.60234 407.629 11.9578 401 12.0386C407.603 12.1191 412.938 17.4332 413 24H413.002Z"
            fill="#AC8C60"
          />
          <circle cx="388" cy="12" r="3" fill="#AC8C60" />
          <circle cx="3" cy="12" r="3" fill="#AC8C60" />
          <path d="M386 12L19 12" stroke="#AC8C60" />
          <circle cx="823" cy="12" r="2.5" fill="#AC8C60" stroke="#AC8C60" />
          <circle cx="438" cy="12" r="2.5" fill="#AC8C60" stroke="#AC8C60" />
          <path d="M822 12L440 12" stroke="#AC8C60" />
        </svg>
      </div>

      <div className="svg regius flex items-center justify-center flex-col my-10">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="30"
            cy="30"
            r="29.4"
            fill="#F0EDE9"
            stroke="#AC8C60"
            stroke-width="1.2"
          />
          <g filter="url(#filter0_i_298_744)">
            <circle cx="30" cy="30" r="24" fill="#F0EDE9" />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.3086 7.2L30.0014 6L30.6942 7.2L36.9296 18.0001H49.4006L50.7862 18.0001L50.0934 19.2001L43.8579 30.0002L50.0932 40.8L50.786 42H49.4004H36.9299L30.6945 52.8001L30.0016 54.0001L29.3088 52.8001L23.0734 42H10.6024H9.2168L9.90962 40.8L16.1451 29.9998L9.90985 19.2001L9.21703 18.0001L10.6027 18.0001H23.0732L29.3086 7.2ZM22.3804 19.2001H11.2955L16.8379 28.7998L22.3804 19.2001ZM17.5307 29.9998L23.766 19.2001H36.2368L42.4723 30.0002L36.2371 40.8H23.7662L17.5307 29.9998ZM16.8379 31.1998L11.2953 40.8H22.3806L16.8379 31.1998ZM24.459 42L30.0016 51.6001L35.5442 42H24.459ZM37.6227 40.8H48.7076L43.1651 31.2002L37.6227 40.8ZM43.1651 28.8002L48.7078 19.2001H37.6225L43.1651 28.8002ZM35.544 18.0001H24.4588L30.0014 8.4L35.544 18.0001Z"
            fill="#AC8C60"
          />
          <path
            d="M31.6184 35.8H28.5914L28.5996 35.5539C28.8676 35.5539 29.0617 35.4336 29.182 35.193C29.3078 34.9469 29.3707 34.5695 29.3707 34.0609L29.3789 26.8504C29.3789 26.4621 29.2777 26.164 29.0754 25.9562C28.9879 25.8687 28.8703 25.7976 28.7227 25.743C28.575 25.6828 28.4027 25.6527 28.2059 25.6527V25.4066C28.5559 25.3191 28.9305 25.166 29.3297 24.9473C29.5266 24.8324 29.7207 24.7066 29.9121 24.5699C30.109 24.4277 30.3086 24.2691 30.5109 24.0941H30.8473V34.0609C30.8473 34.5859 30.9074 34.966 31.0277 35.2012C31.148 35.4363 31.3449 35.5539 31.6184 35.5539V35.8Z"
            fill="#AC8C60"
          />
          <defs>
            <filter
              id="filter0_i_298_744"
              x="6"
              y="6"
              width="48"
              height="48"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                radius="1.2"
                operator="erode"
                in="SourceAlpha"
                result="effect1_innerShadow_298_744"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="7.2" />
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
                result="effect1_innerShadow_298_744"
              />
            </filter>
          </defs>
        </svg>

        <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
          Personal Testimonials & Experiences
        </h1>

        <p className="text-xl font-inter text-[#4D4D4D]  w-[60%] text-center mb-8">
          Client testimonials and opinions shared on this website reflect{" "}
          <span className="text-[#000]">individual experiences</span> and should
          not be assumed to apply universally. The effectiveness of astrological
          insights varies for each person based on
          <span className="text-[#000]">
            unique karmic influences and life circumstances.
          </span>
        </p>
      </div>

      <div className="svg regius flex items-center justify-center flex-col my-10">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="30"
            cy="30"
            r="29.4"
            fill="#F0EDE9"
            stroke="#AC8C60"
            stroke-width="1.2"
          />
          <g filter="url(#filter0_i_298_744)">
            <circle cx="30" cy="30" r="24" fill="#F0EDE9" />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.3086 7.2L30.0014 6L30.6942 7.2L36.9296 18.0001H49.4006L50.7862 18.0001L50.0934 19.2001L43.8579 30.0002L50.0932 40.8L50.786 42H49.4004H36.9299L30.6945 52.8001L30.0016 54.0001L29.3088 52.8001L23.0734 42H10.6024H9.2168L9.90962 40.8L16.1451 29.9998L9.90985 19.2001L9.21703 18.0001L10.6027 18.0001H23.0732L29.3086 7.2ZM22.3804 19.2001H11.2955L16.8379 28.7998L22.3804 19.2001ZM17.5307 29.9998L23.766 19.2001H36.2368L42.4723 30.0002L36.2371 40.8H23.7662L17.5307 29.9998ZM16.8379 31.1998L11.2953 40.8H22.3806L16.8379 31.1998ZM24.459 42L30.0016 51.6001L35.5442 42H24.459ZM37.6227 40.8H48.7076L43.1651 31.2002L37.6227 40.8ZM43.1651 28.8002L48.7078 19.2001H37.6225L43.1651 28.8002ZM35.544 18.0001H24.4588L30.0014 8.4L35.544 18.0001Z"
            fill="#AC8C60"
          />
          <path
            d="M31.6184 35.8H28.5914L28.5996 35.5539C28.8676 35.5539 29.0617 35.4336 29.182 35.193C29.3078 34.9469 29.3707 34.5695 29.3707 34.0609L29.3789 26.8504C29.3789 26.4621 29.2777 26.164 29.0754 25.9562C28.9879 25.8687 28.8703 25.7976 28.7227 25.743C28.575 25.6828 28.4027 25.6527 28.2059 25.6527V25.4066C28.5559 25.3191 28.9305 25.166 29.3297 24.9473C29.5266 24.8324 29.7207 24.7066 29.9121 24.5699C30.109 24.4277 30.3086 24.2691 30.5109 24.0941H30.8473V34.0609C30.8473 34.5859 30.9074 34.966 31.0277 35.2012C31.148 35.4363 31.3449 35.5539 31.6184 35.5539V35.8Z"
            fill="#AC8C60"
          />
          <defs>
            <filter
              id="filter0_i_298_744"
              x="6"
              y="6"
              width="48"
              height="48"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                radius="1.2"
                operator="erode"
                in="SourceAlpha"
                result="effect1_innerShadow_298_744"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="7.2" />
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
                result="effect1_innerShadow_298_744"
              />
            </filter>
          </defs>
        </svg>

        <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
          Professional Decision-Making
        </h1>

        <p className="text-xl font-inter text-[#4D4D4D]  w-[60%] text-center mb-8">
          The guidance, hints, and tips provided here are intended for spiritual
          and personal insight. For major life decisions involving finance,
          health, education, legal matters, or family issues, you should consult
          qualified professionals in the respective fields before taking action.
          <span className="text-[#000]">individual experiences</span> and should
          not be assumed to apply universally. The effectiveness of astrological
          insights varies for each person based on
          <span className="text-[#000]">
            unique karmic influences and life circumstances.
          </span>
        </p>
      </div>
      <div className="svg regius flex items-center justify-center flex-col my-10">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="30"
            cy="30"
            r="29.4"
            fill="#F0EDE9"
            stroke="#AC8C60"
            stroke-width="1.2"
          />
          <g filter="url(#filter0_i_298_744)">
            <circle cx="30" cy="30" r="24" fill="#F0EDE9" />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.3086 7.2L30.0014 6L30.6942 7.2L36.9296 18.0001H49.4006L50.7862 18.0001L50.0934 19.2001L43.8579 30.0002L50.0932 40.8L50.786 42H49.4004H36.9299L30.6945 52.8001L30.0016 54.0001L29.3088 52.8001L23.0734 42H10.6024H9.2168L9.90962 40.8L16.1451 29.9998L9.90985 19.2001L9.21703 18.0001L10.6027 18.0001H23.0732L29.3086 7.2ZM22.3804 19.2001H11.2955L16.8379 28.7998L22.3804 19.2001ZM17.5307 29.9998L23.766 19.2001H36.2368L42.4723 30.0002L36.2371 40.8H23.7662L17.5307 29.9998ZM16.8379 31.1998L11.2953 40.8H22.3806L16.8379 31.1998ZM24.459 42L30.0016 51.6001L35.5442 42H24.459ZM37.6227 40.8H48.7076L43.1651 31.2002L37.6227 40.8ZM43.1651 28.8002L48.7078 19.2001H37.6225L43.1651 28.8002ZM35.544 18.0001H24.4588L30.0014 8.4L35.544 18.0001Z"
            fill="#AC8C60"
          />
          <path
            d="M31.6184 35.8H28.5914L28.5996 35.5539C28.8676 35.5539 29.0617 35.4336 29.182 35.193C29.3078 34.9469 29.3707 34.5695 29.3707 34.0609L29.3789 26.8504C29.3789 26.4621 29.2777 26.164 29.0754 25.9562C28.9879 25.8687 28.8703 25.7976 28.7227 25.743C28.575 25.6828 28.4027 25.6527 28.2059 25.6527V25.4066C28.5559 25.3191 28.9305 25.166 29.3297 24.9473C29.5266 24.8324 29.7207 24.7066 29.9121 24.5699C30.109 24.4277 30.3086 24.2691 30.5109 24.0941H30.8473V34.0609C30.8473 34.5859 30.9074 34.966 31.0277 35.2012C31.148 35.4363 31.3449 35.5539 31.6184 35.5539V35.8Z"
            fill="#AC8C60"
          />
          <defs>
            <filter
              id="filter0_i_298_744"
              x="6"
              y="6"
              width="48"
              height="48"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                radius="1.2"
                operator="erode"
                in="SourceAlpha"
                result="effect1_innerShadow_298_744"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="7.2" />
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
                result="effect1_innerShadow_298_744"
              />
            </filter>
          </defs>
        </svg>

        <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
          Accuracy & Limitations
        </h1>

        <p className="text-xl font-inter text-[#4D4D4D]  w-[60%] text-center mb-8">
          The guidance, hints, and tips provided here are intended for spiritual
          and personal insight. For major life decisions involving finance,
          health, education, legal matters, or family issues, you should consult
          qualified professionals in the respective fields before taking action.
          <span className="text-[#000]">individual experiences</span> and should
          not be assumed to apply universally. The effectiveness of astrological
          insights varies for each person based on
          <span className="text-[#000]">
            unique karmic influences and life circumstances.
          </span>
        </p>
      </div>
      <div className="svg regius flex items-center justify-center flex-col my-10">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="30"
            cy="30"
            r="29.4"
            fill="#F0EDE9"
            stroke="#AC8C60"
            stroke-width="1.2"
          />
          <g filter="url(#filter0_i_298_744)">
            <circle cx="30" cy="30" r="24" fill="#F0EDE9" />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.3086 7.2L30.0014 6L30.6942 7.2L36.9296 18.0001H49.4006L50.7862 18.0001L50.0934 19.2001L43.8579 30.0002L50.0932 40.8L50.786 42H49.4004H36.9299L30.6945 52.8001L30.0016 54.0001L29.3088 52.8001L23.0734 42H10.6024H9.2168L9.90962 40.8L16.1451 29.9998L9.90985 19.2001L9.21703 18.0001L10.6027 18.0001H23.0732L29.3086 7.2ZM22.3804 19.2001H11.2955L16.8379 28.7998L22.3804 19.2001ZM17.5307 29.9998L23.766 19.2001H36.2368L42.4723 30.0002L36.2371 40.8H23.7662L17.5307 29.9998ZM16.8379 31.1998L11.2953 40.8H22.3806L16.8379 31.1998ZM24.459 42L30.0016 51.6001L35.5442 42H24.459ZM37.6227 40.8H48.7076L43.1651 31.2002L37.6227 40.8ZM43.1651 28.8002L48.7078 19.2001H37.6225L43.1651 28.8002ZM35.544 18.0001H24.4588L30.0014 8.4L35.544 18.0001Z"
            fill="#AC8C60"
          />
          <path
            d="M31.6184 35.8H28.5914L28.5996 35.5539C28.8676 35.5539 29.0617 35.4336 29.182 35.193C29.3078 34.9469 29.3707 34.5695 29.3707 34.0609L29.3789 26.8504C29.3789 26.4621 29.2777 26.164 29.0754 25.9562C28.9879 25.8687 28.8703 25.7976 28.7227 25.743C28.575 25.6828 28.4027 25.6527 28.2059 25.6527V25.4066C28.5559 25.3191 28.9305 25.166 29.3297 24.9473C29.5266 24.8324 29.7207 24.7066 29.9121 24.5699C30.109 24.4277 30.3086 24.2691 30.5109 24.0941H30.8473V34.0609C30.8473 34.5859 30.9074 34.966 31.0277 35.2012C31.148 35.4363 31.3449 35.5539 31.6184 35.5539V35.8Z"
            fill="#AC8C60"
          />
          <defs>
            <filter
              id="filter0_i_298_744"
              x="6"
              y="6"
              width="48"
              height="48"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
                radius="1.2"
                operator="erode"
                in="SourceAlpha"
                result="effect1_innerShadow_298_744"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="7.2" />
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
                result="effect1_innerShadow_298_744"
              />
            </filter>
          </defs>
        </svg>

        <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
          No Inducement or Persuasion
        </h1>

        <p className="text-xl font-inter text-[#4D4D4D]  w-[60%] text-center mb-8">
          The guidance, hints, and tips provided here are intended for spiritual
          and personal insight. For major life decisions involving finance,
          health, education, legal matters, or family issues, you should consult
          qualified professionals in the respective fields before taking action.
          <span className="text-[#000]">individual experiences</span> and should
          not be assumed to apply universally. The effectiveness of astrological
          insights varies for each person based on
          <span className="text-[#000]">
            unique karmic influences and life circumstances.
          </span>
        </p>
      </div>
    </>
  );
};

export default Disclaimer;

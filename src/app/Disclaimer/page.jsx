"use client";
import React from "react";
// import img from "./assets/Frame 174.png";
import Image from "next/image";

const Disclaimer = () => {
  // Single Card component with triple borders

  // Center “star” SVG

  return (
    <>
      <div className="bg-[#fff] py-20">
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
                strokeWidth="1.2"
              />
              <g filter="url(#filter0_i_298_744)">
                <circle cx="30" cy="30" r="24" fill="#F0EDE9" />
              </g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
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

            <p className="text-xl font-inter text-[#4D4D4D]  w-[60%] max-md:w-full text-center mb-8">
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
          {/* <Image  loading="lazy"  src={img} alt="jflas" /> */}
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
            strokeWidth="1.2"
          />
          <g filter="url(#filter0_i_298_769)">
            <circle cx="30" cy="30" r="24" fill="#F0EDE9" />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.3086 7.2L30.0014 6L30.6942 7.2L36.9296 18.0001H49.4006L50.7862 18.0001L50.0934 19.2001L43.8579 30.0002L50.0932 40.8L50.786 42H49.4004H36.9299L30.6945 52.8001L30.0016 54.0001L29.3088 52.8001L23.0734 42H10.6024H9.2168L9.90962 40.8L16.1451 29.9998L9.90985 19.2001L9.21703 18.0001L10.6027 18.0001H23.0732L29.3086 7.2ZM22.3804 19.2001H11.2955L16.8379 28.7998L22.3804 19.2001ZM17.5307 29.9998L23.766 19.2001H36.2368L42.4723 30.0002L36.2371 40.8H23.7662L17.5307 29.9998ZM16.8379 31.1998L11.2953 40.8H22.3806L16.8379 31.1998ZM24.459 42L30.0016 51.6001L35.5442 42H24.459ZM37.6227 40.8H48.7076L43.1651 31.2002L37.6227 40.8ZM43.1651 28.8002L48.7078 19.2001H37.6225L43.1651 28.8002ZM35.544 18.0001H24.4588L30.0014 8.4L35.544 18.0001Z"
            fill="#AC8C60"
          />
          <path
            d="M33.3902 27.49C33.3902 27.8729 33.3219 28.242 33.1852 28.5975C33.0648 28.9475 32.8625 29.3139 32.5781 29.6967C32.2992 30.0795 31.6238 30.6619 30.552 31.4439L30.1992 31.69C29.882 31.9197 29.5566 32.174 29.223 32.4529C28.8949 32.7264 28.6297 32.9588 28.4273 33.1502C27.957 33.5932 27.5578 34.0525 27.2297 34.5283H30.798C31.427 34.5283 31.9082 34.4408 32.2418 34.2658C32.5535 34.0799 32.7941 33.7818 32.9637 33.3717L33.2098 33.4209L32.652 35.7998H26.1469V35.5209L26.5324 34.9303C26.8715 34.4271 27.2734 33.9049 27.7383 33.3635C28.2305 32.7947 28.7719 32.2232 29.3625 31.649L29.9285 31.083C30.2402 30.7658 30.5109 30.4486 30.7406 30.1314C30.9703 29.8143 31.1563 29.5053 31.2984 29.2045C31.5773 28.5811 31.7168 27.9221 31.7168 27.2275C31.7168 26.3908 31.55 25.7182 31.2164 25.2096C30.8883 24.701 30.4453 24.4467 29.8875 24.4467C29.4172 24.4467 29.0672 24.5725 28.8375 24.824C28.7227 24.9498 28.627 25.1139 28.5504 25.3162C28.4793 25.5186 28.4437 25.7537 28.4437 26.0217C28.4437 26.2404 28.4164 26.4291 28.3617 26.5877C28.3125 26.7463 28.2387 26.8939 28.1402 27.0307C27.9707 27.2604 27.7465 27.3752 27.4676 27.3752C27.2598 27.3752 27.0848 27.2986 26.9426 27.1455C26.8059 26.9869 26.7375 26.7791 26.7375 26.5221C26.7375 25.9041 27.052 25.3463 27.6809 24.8486C28.3152 24.3455 29.0617 24.0939 29.9203 24.0939C30.9375 24.0939 31.7688 24.4111 32.4141 25.0455C33.0648 25.6744 33.3902 26.4893 33.3902 27.49Z"
            fill="#AC8C60"
          />
          <defs>
            <filter
              id="filter0_i_298_769"
              x="6"
              y="6"
              width="48"
              height="48"
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
                radius="1.2"
                operator="erode"
                in="SourceAlpha"
                result="effect1_innerShadow_298_769"
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
                result="effect1_innerShadow_298_769"
              />
            </filter>
          </defs>
        </svg>

        <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
          Personal Testimonials & Experiences
        </h1>

        <p className="text-xl font-inter text-[#4D4D4D]  w-[60%] max-md:w-full text-center mb-8">
          Client testimonials and opinions shared on this website reflect{" "}
          <span className="text-[#000]">individual experiences</span> and should
          not be assumed to apply universally. The effectiveness of astrological
          insights varies for each person based on
          <span className="text-[#000]">
            unique karmic influences and life circumstances.
          </span>
        </p>
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
            strokeWidth="1.2"
          />
          <g filter="url(#filter0_i_298_791)">
            <circle cx="30" cy="30" r="24" fill="#F0EDE9" />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.3086 7.2L30.0014 6L30.6942 7.2L36.9296 18.0001H49.4006L50.7862 18.0001L50.0934 19.2001L43.8579 30.0002L50.0932 40.8L50.786 42H49.4004H36.9299L30.6945 52.8001L30.0016 54.0001L29.3088 52.8001L23.0734 42H10.6024H9.2168L9.90962 40.8L16.1451 29.9998L9.90985 19.2001L9.21703 18.0001L10.6027 18.0001H23.0732L29.3086 7.2ZM22.3804 19.2001H11.2955L16.8379 28.7998L22.3804 19.2001ZM17.5307 29.9998L23.766 19.2001H36.2368L42.4723 30.0002L36.2371 40.8H23.7662L17.5307 29.9998ZM16.8379 31.1998L11.2953 40.8H22.3806L16.8379 31.1998ZM24.459 42L30.0016 51.6001L35.5442 42H24.459ZM37.6227 40.8H48.7076L43.1651 31.2002L37.6227 40.8ZM43.1651 28.8002L48.7078 19.2001H37.6225L43.1651 28.8002ZM35.544 18.0001H24.4588L30.0014 8.4L35.544 18.0001Z"
            fill="#AC8C60"
          />
          <path
            d="M33.6445 32.3955C33.6445 33.4564 33.2836 34.3342 32.5617 35.0287C31.8398 35.7178 30.9293 36.0623 29.8301 36.0623C28.9168 36.0623 28.1348 35.849 27.484 35.4225C26.8387 34.9959 26.516 34.5201 26.516 33.9951C26.516 33.7818 26.5816 33.5959 26.7129 33.4373C26.784 33.3607 26.8551 33.3033 26.9262 33.265C27.0027 33.2268 27.0902 33.2076 27.1887 33.2076C27.4348 33.2076 27.6344 33.276 27.7875 33.4127C27.9406 33.5439 28.091 33.7709 28.2387 34.0936C28.3809 34.4381 28.5148 34.717 28.6406 34.9303C28.7719 35.1436 28.9004 35.3021 29.0262 35.4061C29.2668 35.5865 29.584 35.6768 29.9777 35.6768C30.6012 35.6768 31.0879 35.4143 31.4379 34.8893C31.7934 34.3643 31.9711 33.6123 31.9711 32.6334C31.9711 31.7584 31.8043 31.0803 31.4707 30.599C31.1371 30.1123 30.6668 29.8689 30.0598 29.8689C29.9941 29.8689 29.9313 29.8689 29.8711 29.8689C29.8109 29.8689 29.7398 29.8744 29.6578 29.8854L29.3543 29.9264L29.3379 29.5982C30.1254 29.4779 30.6969 29.2127 31.0523 28.8025C31.4133 28.3869 31.5938 27.7799 31.5938 26.9814C31.5938 26.1721 31.4461 25.5514 31.1508 25.1193C30.8555 24.6818 30.4316 24.4631 29.8793 24.4631C29.4309 24.4631 29.1 24.5752 28.8867 24.7994C28.6734 25.0236 28.5313 25.4092 28.4602 25.9561C28.4273 26.2678 28.3398 26.5139 28.1977 26.6943C28.0555 26.8748 27.8805 26.965 27.6727 26.965C27.4648 26.965 27.2789 26.8885 27.1148 26.7354C26.9727 26.5658 26.9016 26.3689 26.9016 26.1447C26.9016 25.6143 27.2023 25.1412 27.8039 24.7256C28.4055 24.3045 29.1355 24.0939 29.9941 24.0939C30.4645 24.0939 30.8855 24.1596 31.2574 24.2908C31.6293 24.4166 31.9738 24.6189 32.291 24.8979C32.9199 25.4338 33.2344 26.09 33.2344 26.8666C33.2344 27.4244 33.0484 27.9139 32.6766 28.335C32.4852 28.5482 32.2445 28.7451 31.9547 28.9256C31.6703 29.1061 31.3203 29.2756 30.9047 29.4342C31.7852 29.6365 32.4605 30.0029 32.9309 30.5334C33.4066 31.0584 33.6445 31.6791 33.6445 32.3955Z"
            fill="#AC8C60"
          />
          <defs>
            <filter
              id="filter0_i_298_791"
              x="6"
              y="6"
              width="48"
              height="48"
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
                radius="1.2"
                operator="erode"
                in="SourceAlpha"
                result="effect1_innerShadow_298_791"
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
                result="effect1_innerShadow_298_791"
              />
            </filter>
          </defs>
        </svg>

        <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
          Professional Decision-Making
        </h1>

        <p className="text-xl font-inter text-[#4D4D4D]  w-[60%] max-md:w-full max-md:w-full text-center mb-8">
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
            strokeWidth="1.2"
          />
          <g filter="url(#filter0_i_298_813)">
            <circle cx="30" cy="30" r="24" fill="#F0EDE9" />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.3086 7.2L30.0014 6L30.6942 7.2L36.9296 18.0001H49.4006L50.7862 18.0001L50.0934 19.2001L43.8579 30.0002L50.0932 40.8L50.786 42H49.4004H36.9299L30.6945 52.8001L30.0016 54.0001L29.3088 52.8001L23.0734 42H10.6024H9.2168L9.90962 40.8L16.1451 29.9998L9.90985 19.2001L9.21703 18.0001L10.6027 18.0001H23.0732L29.3086 7.2ZM22.3804 19.2001H11.2955L16.8379 28.7998L22.3804 19.2001ZM17.5307 29.9998L23.766 19.2001H36.2368L42.4723 30.0002L36.2371 40.8H23.7662L17.5307 29.9998ZM16.8379 31.1998L11.2953 40.8H22.3806L16.8379 31.1998ZM24.459 42L30.0016 51.6001L35.5442 42H24.459ZM37.6227 40.8H48.7076L43.1651 31.2002L37.6227 40.8ZM43.1651 28.8002L48.7078 19.2001H37.6225L43.1651 28.8002ZM35.544 18.0001H24.4588L30.0014 8.4L35.544 18.0001Z"
            fill="#AC8C60"
          />
          <path
            d="M33.9891 33.0025H32.3074V33.6588C32.3074 34.3861 32.3566 34.8674 32.4551 35.1025C32.5535 35.3322 32.7313 35.4799 32.9883 35.5455V35.7998H30.1336V35.5455C30.3961 35.4744 30.5738 35.3213 30.6668 35.0861C30.7105 34.9604 30.7461 34.7771 30.7734 34.5365C30.8008 34.2959 30.8145 34.0033 30.8145 33.6588L30.8227 33.0025H26.1961V32.576L31.2082 24.1432H32.3074V32.0428H33.9891V33.0025ZM30.8555 25.792L30.7816 25.7756L27.123 32.0428H30.8227L30.8555 25.792Z"
            fill="#AC8C60"
          />
          <defs>
            <filter
              id="filter0_i_298_813"
              x="6"
              y="6"
              width="48"
              height="48"
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
                radius="1.2"
                operator="erode"
                in="SourceAlpha"
                result="effect1_innerShadow_298_813"
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
                result="effect1_innerShadow_298_813"
              />
            </filter>
          </defs>
        </svg>

        <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
          Accuracy & Limitations
        </h1>

        <p className="text-xl font-inter text-[#4D4D4D]  w-[60%] max-md:w-full max-md:w-full text-center mb-8">
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
            strokeWidth="1.2"
          />
          <g filter="url(#filter0_i_298_835)">
            <circle cx="30" cy="30" r="24" fill="#F0EDE9" />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29.3086 7.2L30.0014 6L30.6942 7.2L36.9296 18.0001H49.4006L50.7862 18.0001L50.0934 19.2001L43.8579 30.0002L50.0932 40.8L50.786 42H49.4004H36.9299L30.6945 52.8001L30.0016 54.0001L29.3088 52.8001L23.0734 42H10.6024H9.2168L9.90962 40.8L16.1451 29.9998L9.90985 19.2001L9.21703 18.0001L10.6027 18.0001H23.0732L29.3086 7.2ZM22.3804 19.2001H11.2955L16.8379 28.7998L22.3804 19.2001ZM17.5307 29.9998L23.766 19.2001H36.2368L42.4723 30.0002L36.2371 40.8H23.7662L17.5307 29.9998ZM16.8379 31.1998L11.2953 40.8H22.3806L16.8379 31.1998ZM24.459 42L30.0016 51.6001L35.5442 42H24.459ZM37.6227 40.8H48.7076L43.1651 31.2002L37.6227 40.8ZM43.1651 28.8002L48.7078 19.2001H37.6225L43.1651 28.8002ZM35.544 18.0001H24.4588L30.0014 8.4L35.544 18.0001Z"
            fill="#AC8C60"
          />
          <path
            d="M33.6773 31.7393C33.6773 32.9916 33.2918 34.0252 32.5207 34.84C31.7551 35.6549 30.7734 36.0623 29.5758 36.0623C29.1602 36.0623 28.7855 36.0158 28.452 35.9229C28.1184 35.8299 27.8039 35.6795 27.5086 35.4717C26.9453 35.0779 26.6637 34.6295 26.6637 34.1264C26.6637 33.8912 26.7266 33.7053 26.8523 33.5686C26.9836 33.4318 27.1477 33.3635 27.3445 33.3635C27.5578 33.3635 27.7465 33.4373 27.9105 33.585C27.998 33.6506 28.0855 33.7463 28.173 33.8721C28.2605 33.9924 28.3508 34.1428 28.4437 34.3232L28.4602 34.3561C28.9086 35.2092 29.4637 35.6357 30.1254 35.6357C30.727 35.6357 31.2082 35.3514 31.5691 34.7826C31.9301 34.2139 32.1105 33.44 32.1105 32.4611C32.1105 31.3947 31.8891 30.5197 31.4461 29.8361C31.0031 29.1525 30.4371 28.8107 29.748 28.8107C29.2504 28.8107 28.8238 28.9639 28.4684 29.2701C28.1184 29.5709 27.8668 29.9975 27.7137 30.5498L27.3281 30.5006L27.5004 24.3811C27.6699 24.4357 27.8395 24.4822 28.009 24.5205C28.1785 24.5533 28.3672 24.5861 28.575 24.6189C28.7883 24.6518 29.0098 24.6764 29.2395 24.6928C29.4746 24.7092 29.707 24.7174 29.9367 24.7174C30.5219 24.7174 31.0359 24.6627 31.4789 24.5533C31.7086 24.4986 31.9219 24.4357 32.1188 24.3646C32.3156 24.2881 32.4961 24.1979 32.6602 24.0939L32.8242 24.2416C32.4633 24.7994 31.9629 25.2342 31.323 25.5459C30.6832 25.8521 29.9422 26.0053 29.1 26.0053C29.0344 26.0053 28.9332 26.0025 28.7965 25.9971C28.6598 25.9916 28.5586 25.9889 28.493 25.9889C28.4109 25.9889 28.3289 25.9861 28.2469 25.9807C28.1648 25.9697 28.0527 25.9533 27.9105 25.9314L27.8203 29.5408C27.9898 29.2674 28.1621 29.0404 28.3371 28.86C28.5176 28.6795 28.7172 28.5264 28.9359 28.4006C29.1547 28.2748 29.3816 28.1818 29.6168 28.1217C29.8574 28.0561 30.1035 28.0232 30.3551 28.0232C31.3121 28.0232 32.1051 28.376 32.734 29.0814C33.3629 29.7869 33.6773 30.6729 33.6773 31.7393Z"
            fill="#AC8C60"
          />
          <defs>
            <filter
              id="filter0_i_298_835"
              x="6"
              y="6"
              width="48"
              height="48"
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
                radius="1.2"
                operator="erode"
                in="SourceAlpha"
                result="effect1_innerShadow_298_835"
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
                result="effect1_innerShadow_298_835"
              />
            </filter>
          </defs>
        </svg>

        <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
          No Inducement or Persuasion
        </h1>

        <p className="text-xl font-inter text-[#4D4D4D]  w-[60%] max-md:w-full text-center mb-8">
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
    </>
  );
};

export default Disclaimer;

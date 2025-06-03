import { Phone, MessageCircle } from "lucide-react";

export default function Confused() {
  return (
    <div className=" bg-[#F0EDE9] flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto text-center ">
        {/* Main Heading */}
        <div className="heading flex mb-10 flex-col items-center justify-center">
          <h1 className="text-[64px] max-md:text-[40px] text-[#4D4D4D] text-center font-salernomi w-[100%] max-md:w-full font-normal mb-6">
            Still Confused?
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
        {/* Description Text */}
        <p className="text-[40px] font-salernomi  text-gray-600 font-light mb-2 leading-relaxed px-4">
          If you are not familiar with how to use this page or need assistance,
        </p>

        {/* Contact Options */}
        <div className="flex flex-col mb- sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4  mb-2">
          {/* Call Button */}
          <button
            // style={{ boxShadow: "0px 0px 24px 2px #AC8C6066 inset" }}
            style={{ boxShadow: "0px 0px 24px 2px #AC8C6066 inset" }}
            className="border-[1px]  border-[#AC8C60] items-center justify-center py-2 px-6 rounded-[24px]  flex relative gap-3 font-inter bg-white shadow-md"

            // className="flex items-center gap-3 bg-stone-200 hover:bg-stone-300 transition-colors duration-200 rounded-full px-6 py-1 border border-stone-300 shadow-sm"
          >
            {/* <Phone className="w-5 h-5 text-amber-700" /> */}
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_i_790_2172)">
                <circle cx="24" cy="24" r="24" fill="#F0EDE9" />
              </g>
              <circle
                cx="24"
                cy="24"
                r="23.2"
                stroke="#AC8C60"
                stroke-width="1.6"
              />
              <path
                d="M25.6276 15.7912C25.6548 15.6897 25.7016 15.5945 25.7656 15.5111C25.8296 15.4277 25.9093 15.3577 26.0003 15.3052C26.0913 15.2526 26.1918 15.2185 26.296 15.2048C26.4002 15.1911 26.5061 15.198 26.6076 15.2252C28.0907 15.6122 29.4438 16.3875 30.5276 17.4713C31.6114 18.5551 32.3866 19.9082 32.7736 21.3912C32.8008 21.4927 32.8078 21.5986 32.794 21.7028C32.7803 21.807 32.7462 21.9075 32.6936 21.9985C32.6411 22.0895 32.5711 22.1693 32.4877 22.2332C32.4043 22.2972 32.3091 22.3441 32.2076 22.3712C32.14 22.389 32.0705 22.3981 32.0006 22.3982C31.8244 22.3983 31.6532 22.3402 31.5134 22.233C31.3736 22.1258 31.2732 21.9754 31.2276 21.8052C30.9122 20.5944 30.2795 19.4896 29.3948 18.6047C28.5101 17.7198 27.4054 17.0869 26.1946 16.7712C26.093 16.7442 25.9977 16.6974 25.9142 16.6335C25.8307 16.5696 25.7606 16.4898 25.7079 16.3988C25.6553 16.3078 25.6211 16.2073 25.6073 16.103C25.5935 15.9988 25.6004 15.8928 25.6276 15.7912ZM25.3946 19.9712C26.7736 20.3392 27.6596 21.2262 28.0276 22.6052C28.0732 22.7754 28.1736 22.9258 28.3134 23.033C28.4532 23.1402 28.6244 23.1983 28.8006 23.1982C28.8705 23.1981 28.94 23.189 29.0076 23.1712C29.1091 23.1441 29.2043 23.0972 29.2877 23.0332C29.3711 22.9693 29.4411 22.8895 29.4936 22.7985C29.5462 22.7075 29.5803 22.607 29.594 22.5028C29.6078 22.3986 29.6008 22.2927 29.5736 22.1912C29.0616 20.2752 27.7236 18.9372 25.8076 18.4252C25.6026 18.3705 25.3842 18.3994 25.2005 18.5056C25.0168 18.6119 24.8829 18.7867 24.8281 18.9917C24.7733 19.1967 24.8022 19.4151 24.9085 19.5988C25.0147 19.7825 25.1896 19.9165 25.3946 19.9712ZM32.6376 27.8442L27.9266 25.7332L27.9136 25.7272C27.669 25.6226 27.4022 25.5807 27.1374 25.6051C26.8725 25.6295 26.6179 25.7196 26.3966 25.8672C26.3705 25.8844 26.3455 25.9031 26.3216 25.9232L23.8876 27.9982C22.3456 27.2492 20.7536 25.6692 20.0046 24.1472L22.0826 21.6762C22.1026 21.6512 22.1216 21.6262 22.1396 21.5992C22.284 21.3785 22.3717 21.1256 22.3947 20.8628C22.4177 20.6001 22.3754 20.3357 22.2716 20.0932V20.0812L20.1546 15.3622C20.0173 15.0455 19.7813 14.7817 19.4818 14.6101C19.1822 14.4385 18.8352 14.3684 18.4926 14.4102C17.1376 14.5885 15.8938 15.254 14.9935 16.2823C14.0933 17.3107 13.5981 18.6315 13.6006 19.9982C13.6006 27.9382 20.0606 34.3982 28.0006 34.3982C29.3673 34.4007 30.6882 33.9055 31.7165 33.0053C32.7448 32.1051 33.4103 30.8613 33.5886 29.5062C33.6305 29.1637 33.5606 28.8168 33.3892 28.5173C33.2178 28.2177 32.9541 27.9817 32.6376 27.8442Z"
                fill="#AC8C60"
              />
              <defs>
                <filter
                  id="filter0_i_790_2172"
                  x="0"
                  y="0"
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
                    radius="1.6"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect1_innerShadow_790_2172"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="9.6" />
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
                    result="effect1_innerShadow_790_2172"
                  />
                </filter>
              </defs>
            </svg>

            <span className="text-[40px] font-salernomi text-gray-700 font-medium">
              Call
            </span>
          </button>

          {/* Or Text */}
          <span className="text-[40px] font-salernomi text-gray-700 font-medium">
            or
          </span>

          {/* WhatsApp Button */}
          <button
            style={{ boxShadow: "0px 0px 24px 2px #AC8C6066 inset" }}
            className="border-[1px]  border-[#AC8C60] items-center justify-center py-2 px-6 rounded-[24px]  flex relative gap-3 font-inter bg-white shadow-md"

            //   className="flex items-center gap-3 bg-stone-200 hover:bg-stone-300 transition-colors duration-200 rounded-full px-6 py-3 border border-stone-300 shadow-sm"
          >
            {/* <MessageCircle className="w-5 h-5 text-green-600" /> */}
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_i_790_2196)">
                <circle cx="24" cy="24" r="24" fill="#F0EDE9" />
              </g>
              <circle
                cx="24"
                cy="24"
                r="23.2"
                stroke="#AC8C60"
                stroke-width="1.6"
              />
              <path
                d="M23.8 12.0234C17.3068 12.0234 12.024 17.3063 12.024 23.7994C12.024 25.827 12.5478 27.8207 13.5411 29.5799L12.0429 34.9252C11.9938 35.1008 12.0414 35.2892 12.1684 35.4198C12.2662 35.5207 12.3993 35.5754 12.536 35.5754C12.577 35.5754 12.6184 35.5703 12.6589 35.5606L18.2376 34.1787C19.9411 35.0931 21.8595 35.5754 23.8 35.5754C30.2932 35.5754 35.576 30.2926 35.576 23.7994C35.576 17.3063 30.2932 12.0234 23.8 12.0234ZM29.7238 27.9548C29.4719 28.6522 28.2636 29.2886 27.683 29.3741C27.1618 29.4504 26.5023 29.4832 25.7784 29.2558C25.3396 29.1176 24.7764 28.9343 24.055 28.6266C21.0224 27.3333 19.042 24.3181 18.8904 24.1189C18.7394 23.9198 17.656 22.5005 17.656 21.0316C17.656 19.5626 18.4368 18.8402 18.7143 18.5412C18.9918 18.2422 19.319 18.1674 19.5207 18.1674C19.7224 18.1674 19.9237 18.17 20.1003 18.1782C20.2861 18.1874 20.5355 18.108 20.7807 18.6907C21.0326 19.2887 21.6373 20.7576 21.7121 20.9077C21.7878 21.0572 21.838 21.2318 21.7377 21.4309C21.6373 21.6301 21.5871 21.7545 21.4356 21.9291C21.284 22.1037 21.1181 22.3182 20.982 22.4524C20.8304 22.6014 20.6732 22.7626 20.8493 23.0616C21.0255 23.3607 21.6322 24.3381 22.5313 25.1296C23.6858 26.1464 24.6602 26.4618 24.9622 26.6113C25.2643 26.7608 25.441 26.7358 25.6171 26.5366C25.7932 26.3369 26.3728 25.6647 26.574 25.3662C26.7752 25.0677 26.977 25.1168 27.2545 25.2167C27.532 25.316 29.0183 26.0379 29.3204 26.1874C29.6225 26.3369 29.8242 26.4117 29.9 26.5361C29.9757 26.66 29.9757 27.258 29.7238 27.9548Z"
                fill="#AC8C60"
              />
              <defs>
                <filter
                  id="filter0_i_790_2196"
                  x="0"
                  y="0"
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
                    radius="1.6"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect1_innerShadow_790_2196"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="9.6" />
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
                    result="effect1_innerShadow_790_2196"
                  />
                </filter>
              </defs>
            </svg>

            <span className="text-[40px] font-salernomi text-gray-700 font-medium">
              WhatsApp
            </span>
          </button>

          {/* Us at text */}
          <span className="text-[40px] font-salernomi text-gray-700 font-medium">
            us at:
          </span>

          {/* Phone Number */}
          <div
            //    className="bg-stone-200 rounded-full px-6 py-3 border border-stone-300 shadow-sm"
            style={{ boxShadow: "0px 0px 24px 2px #AC8C6066 inset" }}
            className="border-[1px]  border-[#AC8C60] items-center justify-center py-2 px-6 rounded-[24px]  flex relative gap-3 font-inter bg-white shadow-md"
          >
            <span className="text-[40px] font-salernomi text-gray-700 font-medium">
              +91-7259691375
            </span>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-[40px] font-salernomi  text-gray-600 font-light leading-relaxed px-4">
          We will guide you personally.
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";
import logo from "./Homecomponent/assets/logo2.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#F0EDE9] text-black mt-16 pt-16 h[620px]">
      <div className="container mx-auto max-lg:p-4">
        <div className="flex items-start justify-between text-center md:text-left   max-md:w-full  max-lg:flex-wrap  max-lg:items-center  max-lg:justify-center gap-10">
          {/* Left Section */}
          <div className="flex flex-col items-start max-lg:items-center  w-[35%] max-lg:w-full max-md:pb-10">
            <Link href="/" className="flex items-center justify-center gap-2">
              <Image src={logo} alt="kl" />
              <span className="font-salernomi text-[#322F41] text-[44px] max-md:text-[30px]">
                Prashna Siddhi
              </span>
            </Link>
            <p className="text-[16px] text-[#4C4C4C] font-inter font-normal  max-lg:text-center my-4 w-3/4 max-md:w-full">
              Unlock answers with Vedic astrology. Gain clarity and guidance for
              life's questions.
            </p>
            <div className="flex items-center space-x-2">
              {/* <input
                type="email"
                placeholder="Enter your email..."
                className="border border-gray-400 px-4 py-2 rounded-md w-[200px] md:w-[250px] bg-white text-black focus:outline-none"
              /> */}
              <button className="bg-black font-salernomi text-white px-4 py-2 rounded-md hover:bg-gray-800">
                <Link href="/Disclaimer">Disclaimer</Link>
              </button>
            </div>
          </div>

          {/* Center Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-serif font-medium mb-4">Site</h3>
            <div className="flex flexcol max-md:flex-wrap items-center md:items-start gap-10 max-md:items-center max-md:justify-center">
              <ul className="space-y-2 text-left max-md:text-center">
                <li>
                  <Link href="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:underline">
                    How it works
                  </Link>
                </li>

                <li>
                  <Link href="/common-myths" className="hover:underline">
                    Common Myths
                  </Link>
                </li>
                <li>
                  <Link href="/remedies" className="hover:underline">
                    Remedies
                  </Link>
                </li>

                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
              </ul>
              <ul className="space-y-2 text-left max-md:text-center">
                <li>
                  <Link href="/unique" className="hover:underline">
                    What make Prashna Siddhi truly unique
                  </Link>
                </li>
                <li>
                  <Link href="/biololgical" className="hover:underline">
                    Astrology and Biological growth
                  </Link>
                </li>
                <li>
                  <Link href="/What-can-be-done" className="hover:underline">
                    What can be done in 5 minutes
                  </Link>
                </li>
                <li>
                  <Link href="/Enthusiasts" className="hover:underline">
                    Astrology Enthusiasts
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:items-start max-md:mt-5">
            <h3 className="text-xl  font-medium mb-4 w-[75%]  font-salernomi">
              Contact
            </h3>

            <span className="mb-4 flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 16L1.12466 11.8913C0.430666 10.6886 0.0659999 9.32531 0.0666665 7.92732C0.0686665 3.55666 3.62533 0 7.99532 0C10.116 0.000666665 12.1066 0.826665 13.604 2.32533C15.1006 3.82399 15.9246 5.81599 15.924 7.93465C15.922 12.306 12.3653 15.8626 7.99532 15.8626C6.66865 15.862 5.36132 15.5293 4.20332 14.8973L0 16ZM4.39799 13.462C5.51532 14.1253 6.58198 14.5226 7.99265 14.5233C11.6246 14.5233 14.5833 11.5673 14.5853 7.93332C14.5866 4.29199 11.642 1.34 7.99798 1.33866C4.36332 1.33866 1.40666 4.29466 1.40533 7.92798C1.40466 9.41131 1.83933 10.522 2.56933 11.684L1.90333 14.116L4.39799 13.462ZM11.9893 9.81931C11.94 9.73665 11.808 9.68731 11.6093 9.58798C11.4113 9.48865 10.4373 9.00931 10.2553 8.94331C10.074 8.87731 9.94198 8.84398 9.80931 9.04265C9.67731 9.24065 9.29731 9.68731 9.18198 9.81931C9.06665 9.95131 8.95065 9.96798 8.75265 9.86865C8.55465 9.76931 7.91598 9.56065 7.15932 8.88531C6.57065 8.35998 6.17265 7.71132 6.05732 7.51265C5.94199 7.31465 6.04532 7.20732 6.14399 7.10865C6.23332 7.01998 6.34199 6.87732 6.44132 6.76132C6.54199 6.64665 6.57465 6.56399 6.64132 6.43132C6.70732 6.29932 6.67465 6.18332 6.62465 6.08399C6.57465 5.98532 6.17865 5.00999 6.01399 4.61332C5.85265 4.22732 5.68932 4.27932 5.56799 4.27332L5.18799 4.26666C5.05599 4.26666 4.84132 4.31599 4.65999 4.51466C4.47866 4.71332 3.96666 5.19199 3.96666 6.16732C3.96666 7.14265 4.67666 8.08465 4.77532 8.21665C4.87466 8.34865 6.17199 10.35 8.15932 11.208C8.63198 11.412 9.00131 11.534 9.28865 11.6253C9.76331 11.776 10.1953 11.7546 10.5366 11.704C10.9173 11.6473 11.7086 11.2246 11.874 10.762C12.0393 10.2986 12.0393 9.90198 11.9893 9.81931Z"
                  fill="#101010"
                />
              </svg>
              +91 7259691375
            </span>
            <span className="mb-4 flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3333 12.0003L9.90465 8.00033M6.09516 8.00033L1.66661 12.0003M1.33325 4.66699L6.77652 8.47726C7.21732 8.78586 7.43772 8.94013 7.67745 8.99986C7.88919 9.05266 8.11065 9.05266 8.32238 8.99986C8.56212 8.94013 8.78252 8.78586 9.22332 8.47726L14.6666 4.66699M4.53325 13.3337H11.4666C12.5867 13.3337 13.1467 13.3337 13.5746 13.1157C13.9509 12.9239 14.2569 12.618 14.4486 12.2417C14.6666 11.8138 14.6666 11.2538 14.6666 10.1337V5.86699C14.6666 4.74689 14.6666 4.18683 14.4486 3.75901C14.2569 3.38269 13.9509 3.07673 13.5746 2.88498C13.1467 2.66699 12.5867 2.66699 11.4666 2.66699H4.53325C3.41315 2.66699 2.85309 2.66699 2.42527 2.88498C2.04895 3.07673 1.74299 3.38269 1.55124 3.75901C1.33325 4.18683 1.33325 4.74689 1.33325 5.86699V10.1337C1.33325 11.2538 1.33325 11.8138 1.55124 12.2417C1.74299 12.618 2.04895 12.9239 2.42527 13.1157C2.85309 13.3337 3.41315 13.3337 4.53325 13.3337Z"
                  stroke="#101010"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              jagadish.k48@gmail.com
            </span>
            {/* <button className="bg-black font-salernomi text-white px-4 py-2 rounded-md hover:bg-gray-800">
              <Link href="/Disclaimer">Disclaimer</Link>
            </button> */}
            <Link
              href="https://www.google.com/search?q=K+Jagadish,+Prashnasiddhi&stick=H4sIAAAAAAAA_-NgU1I1qDBOSkw1TjM3NzK3ME1JNE-yMqiwBPJSjYwTU1It00wNDCwXsUp6K3glpiemZBZn6CgEFCUWZ-QlFmempGRkAgAFID7hRQAAAA&hl=en&mat=CW1OGe_z74SDElcBmzl_paeUQgv2vTQACzC1WC0Z0evYu1sIbfuz6vuRnFlurXmdqzOJoEainICk_6OrhpTLTZTcbt35mN2ULjl6I8_LyCRjuVyJtLt9RvhuoWC3o2IjEFg&authuser=0#mpd=~9476963346861870701/customers/reviews"
              className="flex items-start w-[70%] max-lg:w-full gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="35"
                height="35"
                viewBox="0 0 50 50"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>

              <span className="underline review">
                Why people trust K Jagadish of Prashna Siddhi
              </span>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <svg
            className="mt-10 max-xl:w-full"
            width="1248"
            height="36"
            viewBox="0 0 1248 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M624.002 36C624.095 26.1506 632.096 18.1801 642 18.0579C632.058 17.9352 624.032 9.9026 624.002 0H624.001C623.97 9.90352 615.944 17.9366 606 18.0579C615.905 18.1787 623.908 26.1498 624 36H624.002Z"
              fill="#D8D1C7"
            />
            <circle cx="663" cy="18" r="4.5" fill="#D8D1C7" stroke="#D8D1C7" />
            <circle cx="1243" cy="18" r="4.5" fill="#D8D1C7" stroke="#D8D1C7" />
            <path d="M667 18L1239 18.0001" stroke="#D8D1C7" strokeWidth="2" />
            <circle cx="5" cy="18" r="4.5" fill="#D8D1C7" stroke="#D8D1C7" />
            <circle cx="585" cy="18" r="4.5" fill="#D8D1C7" stroke="#D8D1C7" />
            <path d="M9 18L581 18.0001" stroke="#D8D1C7" strokeWidth="2" />
          </svg>
        </div>
        {/* Bottom Section */}
      </div>

      <div className="mt-10 w-full text-center flex justify-center items-center ">
        <div className="text-[244px] big-text max-lg:text-[130px] max-md:text-[50px] w-full text-[#D8D1C7] leading-[120%] font-salernomi font-normal">
          Prashna Siddhi
        </div>
        {/* <p className="text-sm">All Rights Reserved 2025</p> */}
      </div>
      <div className="mt-10 text-center border-t border-gray-300 pt-6 flex justify-center items-center">
        Copyright © PrashnaSiddhi, 2025. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

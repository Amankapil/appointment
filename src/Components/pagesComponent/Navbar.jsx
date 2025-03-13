"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import logo from "./Homecomponent/assets/logo.svg";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    window.addEventListener("routechange", handleRouteChange);
    return () => window.removeEventListener("routechange", handleRouteChange);
  }, []);

  return (
    <nav className="bg-[#F0EDE9] shadowmd h-[80px] border border-b border-[#D8D1C7] sticky top-0 z-[99999999999999999]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-lg font-semibold">
            <Link href="/" className="flex items-center justify-center gap-2">
              <Image src={logo} alt="kl" />
              <span className="font-salernomi text-[#322F41] font-[16px]">
                Prashna Siddhi
              </span>
            </Link>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`fixed lg:relative top-0 right-0  h-full lg:h-auto w-[70%] lg:w-auto bg-white lg:bg-transparent shadow-lg md:shadow-none transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0 pt-10 " : "translate-x-full "
            } lg:translate-x-0 md:flex space-x-4 lg:items-start items-start gap-7`}
          >
            <button
              className="lg:hidden absolute top-4 right-4"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div className="flex navbar  font-inter flex-col lg:flex-row space-y-4 lg:space-y-0 text-[#666666] font-inter md:space-x-4 p-4 md:p-0 items-center">
              <Link href="/services" className="hover:text-gray-600 relative">
                Services
              </Link>
              <Link href="/work" className="hover:text-gray-600 relative">
                How it Works
              </Link>
              <Link
                href="/common-myths"
                className="hover:text-gray-600 relative"
              >
                Common Myths
              </Link>
              <Link href="/remedies" className="hover:text-gray-600 relative">
                Remedies
              </Link>
              <div
                className="relative flex items-center justify-center"
                onMouseEnter={() => setIsAboutHovered(true)}
                onMouseLeave={() => setIsAboutHovered(false)}
              >
                <Link href="/about" className="hover:text-gray-600 relative ">
                  About Us
                </Link>
                <svg
                  className="w-4 h-4 ml-1 transition-transform transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
                {isAboutHovered && (
                  <div className="absolute top-4 pt-4  -left-20 bg-[#F0EDE9] shadow-lg mt-2 py-3 w-[360px] rounded-lg">
                    <Link
                      href="/unique"
                      className=" px-4 py-2 hoverbg-gray-100 flex items-center gap-2"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00103 16C8.04222 11.6225 11.5984 8.08003 16 8.02572C11.5812 7.97119 8.01441 4.40116 8.00069 0H8.0005C7.98681 4.40156 4.41934 7.97184 0 8.02572C4.40212 8.07941 7.95897 11.6221 8.00019 16H8.00103Z"
                          fill="#666666"
                        />
                      </svg>
                      What makes Prashna Siddhi truly unique?
                    </Link>
                    <div className="flex items-center justify-center">
                      <svg
                        width="311"
                        height="12"
                        viewBox="0 0 311 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M156.001 12C156.032 8.71688 158.699 6.06002 162 6.01929C158.686 5.97839 156.011 3.30087 156.001 0H156C155.99 3.30117 153.315 5.97888 150 6.01929C153.302 6.05955 155.969 8.71659 156 12H156.001Z"
                          fill="#D8D1C7"
                        />
                        <circle cx="146" cy="6" r="2" fill="#D8D1C7" />
                        <circle cx="309" cy="6" r="2" fill="#D8D1C7" />
                        <circle cx="2" cy="6" r="2" fill="#D8D1C7" />
                        <circle cx="166" cy="6" r="2" fill="#D8D1C7" />
                        <path d="M145 6.00001L3 6" stroke="#D8D1C7" />
                        <path d="M308 6.00001L167 6" stroke="#D8D1C7" />
                      </svg>
                    </div>
                    <Link
                      href="/biololgical"
                      className=" px-4 py-2 hoverbg-gray-100 flex items-center gap-2"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00103 16C8.04222 11.6225 11.5984 8.08003 16 8.02572C11.5812 7.97119 8.01441 4.40116 8.00069 0H8.0005C7.98681 4.40156 4.41934 7.97184 0 8.02572C4.40212 8.07941 7.95897 11.6221 8.00019 16H8.00103Z"
                          fill="#666666"
                        />
                      </svg>
                      Astrology and Biological Growth
                    </Link>
                    <div className="flex items-center justify-center">
                      <svg
                        width="311"
                        height="12"
                        viewBox="0 0 311 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M156.001 12C156.032 8.71688 158.699 6.06002 162 6.01929C158.686 5.97839 156.011 3.30087 156.001 0H156C155.99 3.30117 153.315 5.97888 150 6.01929C153.302 6.05955 155.969 8.71659 156 12H156.001Z"
                          fill="#D8D1C7"
                        />
                        <circle cx="146" cy="6" r="2" fill="#D8D1C7" />
                        <circle cx="309" cy="6" r="2" fill="#D8D1C7" />
                        <circle cx="2" cy="6" r="2" fill="#D8D1C7" />
                        <circle cx="166" cy="6" r="2" fill="#D8D1C7" />
                        <path d="M145 6.00001L3 6" stroke="#D8D1C7" />
                        <path d="M308 6.00001L167 6" stroke="#D8D1C7" />
                      </svg>
                    </div>
                    <Link
                      href="/What-can-be-done"
                      className=" px-4 py-2 hoverbg-gray-100 flex items-center gap-2"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00103 16C8.04222 11.6225 11.5984 8.08003 16 8.02572C11.5812 7.97119 8.01441 4.40116 8.00069 0H8.0005C7.98681 4.40156 4.41934 7.97184 0 8.02572C4.40212 8.07941 7.95897 11.6221 8.00019 16H8.00103Z"
                          fill="#666666"
                        />
                      </svg>
                      What can be done in 5 minutes
                    </Link>
                    <div className="flex items-center justify-center">
                      <svg
                        width="311"
                        height="12"
                        viewBox="0 0 311 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M156.001 12C156.032 8.71688 158.699 6.06002 162 6.01929C158.686 5.97839 156.011 3.30087 156.001 0H156C155.99 3.30117 153.315 5.97888 150 6.01929C153.302 6.05955 155.969 8.71659 156 12H156.001Z"
                          fill="#D8D1C7"
                        />
                        <circle cx="146" cy="6" r="2" fill="#D8D1C7" />
                        <circle cx="309" cy="6" r="2" fill="#D8D1C7" />
                        <circle cx="2" cy="6" r="2" fill="#D8D1C7" />
                        <circle cx="166" cy="6" r="2" fill="#D8D1C7" />
                        <path d="M145 6.00001L3 6" stroke="#D8D1C7" />
                        <path d="M308 6.00001L167 6" stroke="#D8D1C7" />
                      </svg>
                    </div>

                    <Link
                      href="/Enthusiasts"
                      className=" px-4 py-2 hoverbg-gray-100 flex items-center gap-2"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00103 16C8.04222 11.6225 11.5984 8.08003 16 8.02572C11.5812 7.97119 8.01441 4.40116 8.00069 0H8.0005C7.98681 4.40156 4.41934 7.97184 0 8.02572C4.40212 8.07941 7.95897 11.6221 8.00019 16H8.00103Z"
                          fill="#666666"
                        />
                      </svg>
                      Astrology enthusiasts
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/booking"
                className="bg-[#101010] text-[16px] font-salernomi text-white px-[24px] py-[12px] rounded hover:bg-[#333333] transition-all duration-300 shadow-button"
              >
                Request your Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

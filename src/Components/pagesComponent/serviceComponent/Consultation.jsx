"use client";

import { useState } from "react";
import img from "./assets/Group 161.png";
import img2 from "./assets/Group 204.png";
import img3 from "./assets/Group 205.png";
import img4 from "./assets/Group 206.png";
import img5 from "./assets/Group 207.png";
import img6 from "./assets/Group 204.png";
import Image from "next/image";
export default function Consultation() {
  const [currency, setCurrency] = useState("INR");

  return (
    <div className="bg-[#F5F0EB] text-[#1E1E1E] min-h-screen p-10 max-md:p-4">
      {/* Top Consultation Section */}

      <div className="heading flex mb-10 flex-col items-center justify-center">
        <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
          Services Offered
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto  mt-20">
        <div className="border-[2px] border-[#D4B999] rounded-[24px] p-4 flex relative gap-10 font-inter bg-white shadow-md">
          <div className="w-[248px] h-[296px] bggray-300 max-md:h-full">
            {" "}
            <Image
              className="w-[248px] h-[296px] max-md:h-full"
              src={img2}
              alt="j"
            />
          </div>
          <div className="w-[50%] max-md:w-full  pr-4 max-lg:flex-wrap flex flex-col justify-start">
            <h3 className="text-[30px] font-normal font-salernomi text-gray-700 text-left m">
              Siddhi-7 Consultation
            </h3>
            <p className="font-normal text-lg pt-2">
              Get answers for upto Two pointed Questions in 7 minutes Real-time
              Consultation
            </p>
          </div>
          <div className="absolute bottom-0 right-0 text-lg font-semibold text-white bg[#D4B999] w-[200px] max-sm:w-[80px] max-sm:h-[80px] h-[200px] flex items-center justify-center rounded-full">
            <Image loading="lazy" src={img} alt="j" />
          </div>
        </div>
        <div className="border-[2px] border-[#D4B999] rounded-[24px] p-4 flex relative gap-10 font-inter bg-white shadow-md">
          <div className="w-[248px] h-[296px] bggray-300 max-md:h-full">
            {" "}
            <Image
              className="w-[248px] h-[296px] max-md:h-full"
              loading="lazy"
              src={img3}
              alt="j"
            />
          </div>
          <div className="w3/4 max-md:w-full  pr-4 max-lg:flex-wrap flex flex-col justify-start">
            <p className="font-normal text-lg">Karma & Life Path Guidance</p>
          </div>
          <div className="absolute bottom-2 right-0 text-lg font-semibold text-white bg[#D4B999] max-sm:w-[80px] max-sm:h-[80px] w-[200px] h-[200px] flex items-center justify-center rounded-full">
            <svg
              width="200"
              height="212"
              viewBox="0 0 212 212"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="144"
                y="144"
                width="52"
                height="52"
                rx="26"
                fill="#F0EDE9"
              />
              <path
                d="M164.258 179V177.23L170.469 171.559C171.211 170.879 171.812 170.281 172.273 169.766C172.742 169.25 173.086 168.746 173.305 168.254C173.523 167.762 173.633 167.219 173.633 166.625C173.633 165.547 173.312 164.695 172.672 164.07C172.039 163.445 171.168 163.133 170.059 163.133C168.863 163.133 167.938 163.5 167.281 164.234C166.625 164.961 166.297 165.945 166.297 167.188H164.328C164.328 166.023 164.562 164.996 165.031 164.105C165.508 163.215 166.176 162.52 167.035 162.02C167.895 161.512 168.898 161.258 170.047 161.258C171.141 161.258 172.105 161.484 172.941 161.938C173.777 162.383 174.434 163.004 174.91 163.801C175.387 164.59 175.625 165.504 175.625 166.543C175.625 167.668 175.312 168.703 174.688 169.648C174.07 170.594 173.121 171.648 171.84 172.812L167.117 177.102V177.125H175.73V179H164.258Z"
                fill="#4D4D4D"
              />
              <circle cx="170" cy="170" r="65.5" stroke="#F0EDE9" />
              <circle cx="170" cy="170" r="89.5" stroke="#F0EDE9" />
              <circle cx="170" cy="170" r="169.5" stroke="#F0EDE9" />
            </svg>
          </div>
        </div>
        <div className="border-[2px] border-[#D4B999] rounded-[24px] p-4 flex relative gap-10 font-inter bg-white shadow-md">
          <div className="w-[248px] h-[296px] bggray-300 max-md:h-full">
            {" "}
            <Image
              className="w-[248px] h-[296px] max-md:h-full"
              loading="lazy"
              src={img4}
              alt="j"
            />
          </div>
          <div className="w-[50%] max-md:w-full  pr-4 max-lg:flex-wrap flex flex-col justify-start">
            <p className="font-normal text-lg">
              Spiritual Counseling & Life Coaching
            </p>
          </div>
          <div className="absolute bottom-2 right-0 text-lg font-semibold text-white bg[#D4B999] w-[200px] h-[200px] max-sm:w-[80px] max-sm:h-[80px] flex items-center justify-center rounded-full">
            <svg
              width="212"
              height="212"
              viewBox="0 0 212 212"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="144"
                y="144"
                width="52"
                height="52"
                rx="26"
                fill="#F0EDE9"
              />
              <path
                d="M170.082 179.281C168.879 179.281 167.816 179.039 166.895 178.555C165.973 178.062 165.25 177.383 164.727 176.516C164.203 175.648 163.941 174.648 163.941 173.516H166.074C166.074 174.75 166.422 175.711 167.117 176.398C167.812 177.086 168.785 177.43 170.035 177.43C171.23 177.43 172.199 177.129 172.941 176.527C173.691 175.918 174.066 175.102 174.066 174.078C174.066 173.148 173.668 172.402 172.871 171.84C172.074 171.27 171.035 170.984 169.754 170.984H168.348V169.109H169.754C170.879 169.109 171.789 168.852 172.484 168.336C173.18 167.812 173.527 167.125 173.527 166.273C173.527 165.289 173.199 164.516 172.543 163.953C171.895 163.391 171.027 163.109 169.941 163.109C168.832 163.109 167.957 163.422 167.316 164.047C166.676 164.664 166.355 165.523 166.355 166.625H164.316C164.316 165.57 164.555 164.641 165.031 163.836C165.516 163.023 166.18 162.391 167.023 161.938C167.875 161.484 168.852 161.258 169.953 161.258C171.023 161.258 171.984 161.469 172.836 161.891C173.688 162.312 174.359 162.891 174.852 163.625C175.344 164.359 175.59 165.203 175.59 166.156C175.59 167.039 175.309 167.824 174.746 168.512C174.191 169.191 173.426 169.68 172.449 169.977V170.012C173.566 170.199 174.457 170.668 175.121 171.418C175.793 172.16 176.129 173.047 176.129 174.078C176.129 175.094 175.863 175.996 175.332 176.785C174.809 177.566 174.09 178.18 173.176 178.625C172.27 179.062 171.238 179.281 170.082 179.281Z"
                fill="#4D4D4D"
              />
              <circle cx="170" cy="170" r="65.5" stroke="#F0EDE9" />
              <circle cx="170" cy="170" r="89.5" stroke="#F0EDE9" />
              <circle cx="170" cy="170" r="169.5" stroke="#F0EDE9" />
            </svg>
          </div>
        </div>
        <div className="border-[2px] border-[#D4B999] rounded-[24px] p-4 flex relative gap-10 font-inter bg-white shadow-md">
          <div className=" w-[248px] h-[296px] max-md:h-full bggray-300 ">
            {" "}
            <Image
              className="w-[248px] h-[296px] max-md:h-full"
              width={248}
              src={img5}
              alt="j"
            />
          </div>
          <div className="w-[50%] max-md:w-full  pr-4 max-lg:flex-wrap flex flex-col justify-start">
            <p className="font-normal text-lg ">
              Personalized Astrological Insights (Optional expansion in future)
            </p>
          </div>
          <div className="absolute bottom-2 right-0 text-lg font-semibold max-sm:w-[80px] max-sm:h-[80px] text-white bg[#D4B999] w-[200px] h-[200px] flex items-center justify-center rounded-full">
            <svg
              width="212"
              height="212"
              viewBox="0 0 212 212"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="144"
                y="144"
                width="52"
                height="52"
                rx="26"
                fill="#F0EDE9"
              />
              <path
                d="M163.191 174.781V173.047L171.547 161.539H174.125V172.906H176.797V174.781H174.125V179H172.109V174.781H163.191ZM172.109 172.906V163.906H172.086L165.582 172.883V172.906H172.109Z"
                fill="#4D4D4D"
              />
              <circle cx="170" cy="170" r="65.5" stroke="#F0EDE9" />
              <circle cx="170" cy="170" r="89.5" stroke="#F0EDE9" />
              <circle cx="170" cy="170" r="169.5" stroke="#F0EDE9" />
            </svg>
          </div>
        </div>
        {/* ))} */}
      </div>

      {/* Premium Consultation Section */}
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import Questions from "@/Components/Questions";

import "react-datepicker/dist/react-datepicker.css";

import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../../Components/pagesComponent/Homecomponent/assets/logo.svg";
import Link from "next/link";

import Bookings from "@/Components/Bookings";

export default function MultiStepForm() {
  const [showPopup, setShowPopup] = useState(true);
  const router = useRouter();

  const handleSelection = (type) => {
    if (type === "overseas") {
      router.push("/overseas");
    }
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 max-md:hidden flex z-[99999999] items-center justify-center bg-white/10 backdrop-blur-[10px]">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold font-salernomi mb-4">
              Select Your Client Type
            </h2>
            <button
              onClick={() => handleSelection("indian")}
              className="px-4 py-2 bg-[#4597F8] text-white cursor-pointer rounded-md m-2"
            >
              Indian Residents
            </button>
            <button
              onClick={() => handleSelection("overseas")}
              className="px-4 py-2 bg-[#000] text-white cursor-pointer rounded-md m-2"
            >
              Overseas
            </button>
          </div>
        </div>
      )}

      <div className="w-full  text-black p-5 transition-all  top-">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="flex items-center justify-center gap-2">
              <Image loading="lazy" src={logo} alt="kl" />
              <span className="font-salernomi text-[#322F41] font-[16px]">
                Prashna Siddhi
              </span>
            </Link>
          </div>

          <div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0005 23C21.6573 23 23.0005 21.6569 23.0005 20C23.0005 18.3431 21.6573 17 20.0005 17C18.3436 17 17.0005 18.3431 17.0005 20C17.0005 21.6569 18.3436 23 20.0005 23Z"
                stroke="#2D2D2D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.2896 27.3711L17.874 28.6856C18.0478 29.0768 18.3313 29.4093 18.6902 29.6426C19.0492 29.8759 19.4681 30.0001 19.8962 30C20.3244 30.0001 20.7433 29.8759 21.1022 29.6426C21.4612 29.4093 21.7447 29.0768 21.9185 28.6856L22.5029 27.3711C22.711 26.9047 23.0609 26.5159 23.5029 26.26C23.9477 26.0034 24.4622 25.8941 24.9729 25.9478L26.4029 26.1C26.8286 26.145 27.2582 26.0656 27.6396 25.8713C28.021 25.6771 28.3379 25.3763 28.5518 25.0056C28.766 24.635 28.868 24.2103 28.8455 23.7829C28.823 23.3555 28.677 22.9438 28.4251 22.5978L27.5785 21.4344C27.277 21.0171 27.1159 20.5148 27.1185 20C27.1184 19.4866 27.281 18.9864 27.5829 18.5711L28.4296 17.4078C28.6814 17.0617 28.8275 16.6501 28.85 16.2227C28.8725 15.7953 28.7704 15.3705 28.5562 15C28.3423 14.6292 28.0255 14.3285 27.644 14.1342C27.2626 13.94 26.833 13.8605 26.4074 13.9056L24.9774 14.0578C24.4667 14.1114 23.9521 14.0021 23.5074 13.7456C23.0645 13.4883 22.7144 13.0974 22.5074 12.6289L21.9185 11.3144C21.7447 10.9232 21.4612 10.5907 21.1022 10.3574C20.7433 10.1241 20.3244 9.99993 19.8962 10C19.4681 9.99993 19.0492 10.1241 18.6902 10.3574C18.3313 10.5907 18.0478 10.9232 17.874 11.3144L17.2896 12.6289C17.0825 13.0974 16.7324 13.4883 16.2896 13.7456C15.8448 14.0021 15.3302 14.1114 14.8196 14.0578L13.3851 13.9056C12.9595 13.8605 12.5299 13.94 12.1484 14.1342C11.767 14.3285 11.4501 14.6292 11.2362 15C11.0221 15.3705 10.92 15.7953 10.9425 16.2227C10.965 16.6501 11.111 17.0617 11.3629 17.4078L12.2096 18.5711C12.5115 18.9864 12.6741 19.4866 12.674 20C12.6741 20.5134 12.5115 21.0137 12.2096 21.4289L11.3629 22.5922C11.111 22.9382 10.965 23.3499 10.9425 23.7773C10.92 24.2047 11.0221 24.6295 11.2362 25C11.4504 25.3706 11.7673 25.6712 12.1486 25.8654C12.53 26.0596 12.9595 26.1392 13.3851 26.0944L14.8151 25.9422C15.3258 25.8886 15.8403 25.9979 16.2851 26.2544C16.7297 26.511 17.0813 26.902 17.2896 27.3711Z"
                stroke="#2D2D2D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <Bookings />
    </>
  );
}

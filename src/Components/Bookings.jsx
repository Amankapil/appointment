"use client";
import { useState } from "react";
import Link from "next/link";
import Services from "@/Components/Services";
import Staff from "@/Components/Staff";
import AdminAvailability from "@/Components/AdminAvailability";
import TodayAppointments from "@/Components/TodayAppointments";
import Clients from "@/Components/Clients";
import Image from "next/image";
import NewConsult from "./bookingcomp/NewConsult";
import OldConsult from "./bookingcomp/OldConsult";
const tabs = [
  {
    name: "New User",
    icon: (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 10H18M10.5 2.5V17.5M7 2.5H14C15.4002 2.5 16.1002 2.5 16.635 2.77248C17.1054 3.01217 17.4878 3.39462 17.7275 3.86503C18 4.3998 18 5.09987 18 6.5V13.5C18 14.9002 18 15.6002 17.7275 16.135C17.4878 16.6054 17.1054 16.9878 16.635 17.2275C16.1002 17.5 15.4002 17.5 14 17.5H7C5.59987 17.5 4.8998 17.5 4.36503 17.2275C3.89462 16.9878 3.51217 16.6054 3.27248 16.135C3 15.6002 3 14.9002 3 13.5V6.5C3 5.09987 3 4.3998 3.27248 3.86503C3.51217 3.39462 3.89462 3.01217 4.36503 2.77248C4.8998 2.5 5.59987 2.5 7 2.5Z"
          stroke="#096FE7"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    component: <NewConsult />,
  },
  {
    name: "Registered User",
    icon: (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 8.33329H3M13.8333 1.66663V4.99996M7.16667 1.66663V4.99996M8 13.3333L9.66667 15L13.4167 11.25M7 18.3333H14C15.4002 18.3333 16.1002 18.3333 16.635 18.0608C17.1054 17.8211 17.4878 17.4387 17.7275 16.9683C18 16.4335 18 15.7335 18 14.3333V7.33329C18 5.93316 18 5.23309 17.7275 4.69832C17.4878 4.22791 17.1054 3.84546 16.635 3.60578C16.1002 3.33329 15.4002 3.33329 14 3.33329H7C5.59987 3.33329 4.8998 3.33329 4.36503 3.60578C3.89462 3.84546 3.51217 4.22791 3.27248 4.69832C3 5.23309 3 5.93316 3 7.33329V14.3333C3 15.7335 3 16.4335 3.27248 16.9683C3.51217 17.4387 3.89462 17.8211 4.36503 18.0608C4.8998 18.3333 5.59987 18.3333 7 18.3333Z"
          stroke="#606060"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    component: <OldConsult />,
  },
];

export default function Bookings() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const ActiveComponent = tabs.find((tab) => tab.name === activeTab)?.component;

  return (
    <div className="h-full bggray-100">
      <div className={`w-full  text-black px-5 transition-all  top-`}>
        <div className="flex items-center justify-center">
          <nav className="flex items-center justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={`flex items-center gap-2 px-4 py-2 rounded mt-2 ${
                  activeTab === tab.name
                    ? "bg-[#E6F1FE] text-[#096FE7]"
                    : "opacity-50"
                }`}
                onClick={() => setActiveTab(tab.name)}
              >
                <div>{tab.icon}</div>
                {/* <h1 className="h-[16px] w-[16px] bg-black"></h1> */}
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col pl[18%]">
        {/* Tabs */}
        <div className="p-2">
          {/* <div className="flex space-x-4 border-b"></div> */}
          <div className="mt-1">{ActiveComponent}</div>
        </div>
      </div>
    </div>
  );
}

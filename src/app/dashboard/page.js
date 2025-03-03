"use client";
import { useState } from "react";
import Link from "next/link";
import Services from "@/Components/Services";
import Staff from "@/Components/Staff";
import AdminAvailability from "@/Components/AdminAvailability";
import TodayAppointments from "@/Components/TodayAppointments";
import Clients from "@/Components/Clients";
import Image from "next/image";
import logo from "../../Components/pagesComponent/Homecomponent/assets/logo.svg";
const tabs = [
  {
    name: "Dashboard",
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
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    component: <AdminAvailability />,
  },
  {
    name: "Bookings",
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
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    component: <TodayAppointments />,
  },
  {
    name: "Clients",
    icon: (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5 13.1974C16.7133 13.8069 17.7534 14.785 18.5127 16.008C18.663 16.2503 18.7382 16.3713 18.7642 16.539C18.817 16.8798 18.584 17.2988 18.2666 17.4337C18.1104 17.5 17.9347 17.5 17.5834 17.5M13.8334 9.61017C15.0681 8.99658 15.9167 7.72238 15.9167 6.25C15.9167 4.77762 15.0681 3.50343 13.8334 2.8898M12.1667 6.25C12.1667 8.32107 10.4877 10 8.41666 10C6.34559 10 4.66666 8.32107 4.66666 6.25C4.66666 4.17893 6.34559 2.5 8.41666 2.5C10.4877 2.5 12.1667 4.17893 12.1667 6.25ZM2.63268 15.7819C3.96127 13.7872 6.0578 12.5 8.41666 12.5C10.7755 12.5 12.872 13.7872 14.2006 15.7819C14.4917 16.219 14.6372 16.4375 14.6204 16.7166C14.6074 16.9339 14.4649 17.2 14.2913 17.3313C14.0683 17.5 13.7615 17.5 13.148 17.5H3.68529C3.0718 17.5 2.76506 17.5 2.54202 17.3313C2.36836 17.2 2.2259 16.9339 2.21285 16.7166C2.1961 16.4375 2.34162 16.219 2.63268 15.7819Z"
          stroke="#606060"
          strokeWidth="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    component: <Clients />,
  },
  // {
  //   name: "Transactions",
  //   component: <Staff />,
  // },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const ActiveComponent = tabs.find((tab) => tab.name === activeTab)?.component;

  return (
    <div className="h-full bggray-100">
      {/* Sidebar */}
      <div className={`w-full  text-black p-5 transition-all  top-`}>
        <div className="flex items-center justify-between">
          <div>
            {/* <h1>LOGO</h1> */}
            <Link href="/" className="flex items-center justify-center gap-2">
              <Image src={logo} alt="kl" />
              <span className="font-salernomi text-[#322F41] font-[16px]">
                Prashna Siddhi
              </span>
            </Link>
          </div>
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
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.2896 27.3711L17.874 28.6856C18.0478 29.0768 18.3313 29.4093 18.6902 29.6426C19.0492 29.8759 19.4681 30.0001 19.8962 30C20.3244 30.0001 20.7433 29.8759 21.1022 29.6426C21.4612 29.4093 21.7447 29.0768 21.9185 28.6856L22.5029 27.3711C22.711 26.9047 23.0609 26.5159 23.5029 26.26C23.9477 26.0034 24.4622 25.8941 24.9729 25.9478L26.4029 26.1C26.8286 26.145 27.2582 26.0656 27.6396 25.8713C28.021 25.6771 28.3379 25.3763 28.5518 25.0056C28.766 24.635 28.868 24.2103 28.8455 23.7829C28.823 23.3555 28.677 22.9438 28.4251 22.5978L27.5785 21.4344C27.277 21.0171 27.1159 20.5148 27.1185 20C27.1184 19.4866 27.281 18.9864 27.5829 18.5711L28.4296 17.4078C28.6814 17.0617 28.8275 16.6501 28.85 16.2227C28.8725 15.7953 28.7704 15.3705 28.5562 15C28.3423 14.6292 28.0255 14.3285 27.644 14.1342C27.2626 13.94 26.833 13.8605 26.4074 13.9056L24.9774 14.0578C24.4667 14.1114 23.9521 14.0021 23.5074 13.7456C23.0645 13.4883 22.7144 13.0974 22.5074 12.6289L21.9185 11.3144C21.7447 10.9232 21.4612 10.5907 21.1022 10.3574C20.7433 10.1241 20.3244 9.99993 19.8962 10C19.4681 9.99993 19.0492 10.1241 18.6902 10.3574C18.3313 10.5907 18.0478 10.9232 17.874 11.3144L17.2896 12.6289C17.0825 13.0974 16.7324 13.4883 16.2896 13.7456C15.8448 14.0021 15.3302 14.1114 14.8196 14.0578L13.3851 13.9056C12.9595 13.8605 12.5299 13.94 12.1484 14.1342C11.767 14.3285 11.4501 14.6292 11.2362 15C11.0221 15.3705 10.92 15.7953 10.9425 16.2227C10.965 16.6501 11.111 17.0617 11.3629 17.4078L12.2096 18.5711C12.5115 18.9864 12.6741 19.4866 12.674 20C12.6741 20.5134 12.5115 21.0137 12.2096 21.4289L11.3629 22.5922C11.111 22.9382 10.965 23.3499 10.9425 23.7773C10.92 24.2047 11.0221 24.6295 11.2362 25C11.4504 25.3706 11.7673 25.6712 12.1486 25.8654C12.53 26.0596 12.9595 26.1392 13.3851 26.0944L14.8151 25.9422C15.3258 25.8886 15.8403 25.9979 16.2851 26.2544C16.7297 26.511 17.0813 26.902 17.2896 27.3711Z"
                stroke="#2D2D2D"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col pl[18%]">
        {/* Tabs */}
        <div className="p-5">
          {/* <div className="flex space-x-4 border-b"></div> */}
          <div className="mt-4">{ActiveComponent}</div>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import { useState } from "react";
// // import { FaBars } from "react-icons/fa";
// import Link from "next/link";
// import Services from "@/Components/Services";
// import Staff from "@/Components/Staff";
// import AdminAvailability from "@/Components/AdminAvailability";
// import TodayAppointments from "@/Components/TodayAppointments";

// const routes = [
//   {
//     name: "Dashboard ",
//     path: "/available",
//     tabs: ["Available On"],
//   },
//   { name: "Bookings", path: "/service", tabs: ["Services"] },
//   // {
//   //   name: "Schedules",
//   //   path: "/schedules",
//   //   tabs: ["Completed"],
//   // },
//   {
//     name: "Clients",
//     path: "/reports",
//     tabs: ["Clients"],
//   },
//   { name: "Transactions", path: "/payment", tabs: ["Revenue Details"] },
//   // { name: "Packages", path: "/packages", tabs: ["SMS/OTP", "WhatsApp Credit"] },
//   // {
//   //   name: "Calendar",
//   //   path: "/calendar",
//   //   tabs: ["Google", "Outlook", "Teams", "Hubspot"],
//   // },
// ];

// const cards = [
//   {
//     title: "Total Bookings",
//     value: "92",
//     change: "+12% from last month",
//   },
//   {
//     title: "Monthly Revenue",
//     value: "₹ 2.7L",
//     change: "+8% from last month",
//   },
//   {
//     title: "Active Clients",
//     value: "40",
//     change: "+15 new this month",
//   },
//   {
//     title: "Pending Appointments",
//     value: "8",
//     change: "Requires attention",
//   },
// ];
// const Components = {
//   Services: () => (
//     <div>
//       <Services />
//     </div>
//   ),
//   Staff: () => (
//     <div>
//       <Staff />{" "}
//     </div>
//   ),

//   "Available On": () => (
//     <div>
//       <AdminAvailability />{" "}
//     </div>
//   ),
//   //   Completed: () => <div>Completed Appointments</div>,
//   Clients: () => (
//     <div>
//       <TodayAppointments />
//     </div>
//   ),
//   Upcoming: () => <div>Upcoming Appointments</div>,
//   "Total Bookings": () => <div>Total Weekly Bookings</div>,
//   "Total Hours": () => <div>Total Weekly Hours</div>,
//   "Upcoming Appointments": () => <div>Upcoming Appointments Overview</div>,
//   "Revenue Details": () => <div>Revenue Details Component</div>,
//   "SMS/OTP": () => <div>SMS/OTP Package</div>,
//   "WhatsApp Credit": () => <div>WhatsApp Credit Package</div>,
//   Google: () => <div>Google Calendar Integration</div>,
//   Outlook: () => <div>Outlook Calendar Integration</div>,
//   Teams: () => <div>Microsoft Teams Integration</div>,
//   Hubspot: () => <div>Hubspot Integration</div>,
// };

// export default function Dashboard() {
//   const [isSidebarOpen, setSidebarOpen] = useState(true);
//   const [activeRoute, setActiveRoute] = useState(routes[0]);
//   const [activeTab, setActiveTab] = useState(routes[0].tabs[0]);

//   const ActiveComponent =
//     Components[activeTab] || (() => <div>No Component Found</div>);

//   return (
//     <div className="h-[100px] bggray-100">
//       {/* Sidebar */}
//       <div className={`w-full  text-black p-5 transition-all  top-`}>
//         <div className="flex items-center justify-between">
//           <div>
//             <h1>LOGO</h1>
//           </div>
//           <nav className="flex items-center justify-center">
//             {routes.map((route) => (
//               <button
//                 key={route.name}
//                 className={`flex items-center gap-2 px-4 py-2 rounded mt-2 ${
//                   activeRoute.name === route.name
//                     ? "bg-[#B3B3B3] text-[#000]"
//                     : "opacity-50"
//                 }`}
//                 onClick={() => {
//                   setActiveRoute(route);
//                   setActiveTab(route.tabs[0]);
//                 }}
//               >
//                 <h1 className="h-[16px] w-[16px] bg-black"></h1>
//                 {route.name}
//               </button>
//             ))}
//           </nav>
//           <div>
//             <h1>LOGO</h1>
//           </div>
//         </div>
//       </div>
//       <div className="flex space-x-4 items-center justify-center">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="bg-gray-100 p-4 rounded-lg shadow-sm w-64 border flex flex-col"
//           >
//             <div className="flex justify-between items-center text-gray-500 text-sm">
//               <div className="flex items-center">
//                 <span className="h-2 w-2 bg-gray-400 rounded-full mr-2"></span>
//                 {card.title}
//               </div>
//               <span className="text-gray-400">&gt;</span>
//             </div>
//             <div className="text-2xl font-semibold mt-2">{card.value}</div>
//             <div className="text-sm text-gray-500 mt-1">{card.change}</div>
//           </div>
//         ))}
//       </div>
//       {/* Main Content */}
//       <div className="flex-1 flex flex-col pl[18%]">
//         {/* Navbar */}
//         {/* <div className="bg-white shadow p-4 text-xl font-bold">Dashboard</div> */}
//         {/* Tabs */}
//         <div className="p-5">
//           <div className="flex space-x-4 border-b">
//             {activeRoute.tabs.map((tab) => (
//               <button
//                 key={tab}
//                 className={`py-2 px-4 ${
//                   activeTab === tab
//                     ? "border-b-2 border-[#3852D7] text-[#3852D7]"
//                     : ""
//                 }`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//           <div className="mt-4">
//             <ActiveComponent />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import Link from "next/link";
import Services from "@/Components/Services";
import Staff from "@/Components/Staff";
import AdminAvailability from "@/Components/AdminAvailability";
import TodayAppointments from "@/Components/TodayAppointments";
import Clients from "@/Components/Clients";

const tabs = [
  {
    name: "Dashboard",
    component: <AdminAvailability />,
  },
  {
    name: "Bookings",
    component: <TodayAppointments />,
  },
  {
    name: "Clients",
    component: <Clients />,
  },
  {
    name: "Transactions",
    component: <Staff />,
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const ActiveComponent = tabs.find((tab) => tab.name === activeTab)?.component;

  return (
    <div className="h-[100px] bggray-100">
      {/* Sidebar */}
      <div className={`w-full  text-black p-5 transition-all  top-`}>
        <div className="flex items-center justify-between">
          <div>
            <h1>LOGO</h1>
          </div>
          <nav className="flex items-center justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={`flex items-center gap-2 px-4 py-2 rounded mt-2 ${
                  activeTab === tab.name
                    ? "bg-[#B3B3B3] text-[#000]"
                    : "opacity-50"
                }`}
                onClick={() => setActiveTab(tab.name)}
              >
                <h1 className="h-[16px] w-[16px] bg-black"></h1>
                {tab.name}
              </button>
            ))}
          </nav>
          <div>
            <h1>LOGO</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col pl[18%]">
        {/* Tabs */}
        <div className="p-5">
          <div className="flex space-x-4 border-b">
            {/* {tabs.map((tab) => (
              <button
                key={tab.name}
                className={`py-2 px-4 ${
                  activeTab === tab.name
                    ? "border-b-2 border-[#3852D7] text-[#3852D7]"
                    : ""
                }`}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.name}
              </button>
            ))} */}
          </div>
          <div className="mt-4">{ActiveComponent}</div>
        </div>
      </div>
    </div>
  );
}

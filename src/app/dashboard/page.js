"use client";
import { useState } from "react";
// import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Services from "@/Components/Services";
import Staff from "@/Components/Staff";
import AdminAvailability from "@/Components/AdminAvailability";
import TodayAppointments from "@/Components/TodayAppointments";

const routes = [
  {
    name: "Add Availablity ",
    path: "/available",
    tabs: ["Available On", "Staff"],
  },
  { name: "Service Screen", path: "/service", tabs: ["Services", "Staff"] },
  {
    name: "Schedules",
    path: "/schedules",
    tabs: ["Completed"],
  },
  {
    name: "Weekly Reports",
    path: "/reports",
    tabs: ["Total Bookings", "Total Hours", "Upcoming Appointments"],
  },
  { name: "Payment", path: "/payment", tabs: ["Revenue Details"] },
  { name: "Packages", path: "/packages", tabs: ["SMS/OTP", "WhatsApp Credit"] },
  {
    name: "Calendar",
    path: "/calendar",
    tabs: ["Google", "Outlook", "Teams", "Hubspot"],
  },
];

const Components = {
  Services: () => (
    <div>
      <Services />
    </div>
  ),
  Staff: () => (
    <div>
      <Staff />{" "}
    </div>
  ),

  "Available On": () => (
    <div>
      <AdminAvailability />{" "}
    </div>
  ),
  //   Completed: () => <div>Completed Appointments</div>,
  Completed: () => (
    <div>
      <TodayAppointments />
    </div>
  ),
  Upcoming: () => <div>Upcoming Appointments</div>,
  "Total Bookings": () => <div>Total Weekly Bookings</div>,
  "Total Hours": () => <div>Total Weekly Hours</div>,
  "Upcoming Appointments": () => <div>Upcoming Appointments Overview</div>,
  "Revenue Details": () => <div>Revenue Details Component</div>,
  "SMS/OTP": () => <div>SMS/OTP Package</div>,
  "WhatsApp Credit": () => <div>WhatsApp Credit Package</div>,
  Google: () => <div>Google Calendar Integration</div>,
  Outlook: () => <div>Outlook Calendar Integration</div>,
  Teams: () => <div>Microsoft Teams Integration</div>,
  Hubspot: () => <div>Hubspot Integration</div>,
};

export default function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeRoute, setActiveRoute] = useState(routes[0]);
  const [activeTab, setActiveTab] = useState(routes[0].tabs[0]);

  const ActiveComponent =
    Components[activeTab] || (() => <div>No Component Found</div>);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-16"
        } bg-[#3852D7] text-white p-5 transition-all  top-0 h-screen`}
      >
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="text-white text-2xl mb-5"
        >
          {/* <FaBars /> */}
          icon
        </button>
        {isSidebarOpen && (
          <div className="text-center mb-6">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-20 h-20 rounded-full mx-auto bg-black"
            />
            <p className="mt-2">User Name</p>
          </div>
        )}
        <nav>
          {routes.map((route) => (
            <button
              key={route.name}
              className={`block px-4 py-2 rounded mt-2 ${
                activeRoute.name === route.name ? "bg-white text-[#3852D7]" : ""
              }`}
              onClick={() => {
                setActiveRoute(route);
                setActiveTab(route.tabs[0]);
              }}
            >
              {route.name}
            </button>
          ))}
        </nav>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col pl[18%]">
        {/* Navbar */}
        <div className="bg-white shadow p-4 text-xl font-bold">Dashboard</div>
        {/* Tabs */}
        <div className="p-5">
          <div className="flex space-x-4 border-b">
            {activeRoute.tabs.map((tab) => (
              <button
                key={tab}
                className={`py-2 px-4 ${
                  activeTab === tab
                    ? "border-b-2 border-[#3852D7] text-[#3852D7]"
                    : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mt-4">
            <ActiveComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

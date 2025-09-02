"use client";
import AdminAvailability from "@/Components/AdminAvailability";
import { useState } from "react";
// import AdminAvailability from "../../components/AdminAvailability";
// import AdminAppointments from "../../components/AdminAppointments";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("availability");

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab("availability")}
            className={`px-4 py-2 rounded ${
              activeTab === "availability"
                ? "bg-blue-600 text-white"
                : "bg-white"
            }`}
          >
            Availability
          </button>
          <button
            onClick={() => setActiveTab("appointments")}
            className={`px-4 py-2 rounded ${
              activeTab === "appointments"
                ? "bg-blue-600 text-white"
                : "bg-white"
            }`}
          >
            Appointments
          </button>
        </div>

        {/* {activeTab === "availability" && <AdminAvailability />} */}
        {/* {activeTab === "appointments" && <Ad />} */}
      </div>
    </div>
  );
}

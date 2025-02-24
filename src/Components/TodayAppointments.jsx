"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TodayAppointments() {
  const [appointments, setAppointments] = useState([]);
  const [filteredAppointments, setFilteredAppointments] = useState({
    today: [],
    upcoming: [],
    completed: [],
  });
  const [activeTab, setActiveTab] = useState("today");

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch("/api/admin/book"); // Update with your actual API route
      const data = await response.json();
      //   console.log(data.data);
      //   if (response.data.success) {
      setAppointments(data.data);
      //   console.log(data.data);
      categorizeAppointments(data.data);
      //   }
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const categorizeAppointments = (data) => {
    const today = new Date().toISOString().split("T")[0];
    // console.log(today);
    // console.log(data);

    const todayAppointments = [];
    const upcomingAppointments = [];
    const completedAppointments = [];

    data?.forEach((appointment) => {
      //   console.log(appointment);
      const appointmentDate = new Date(appointment.date)
        .toISOString()
        .split("T")[0];
      //   console.log(appointmentDate);
      if (appointmentDate === today) {
        todayAppointments.push(appointment);
      } else if (appointmentDate > today) {
        upcomingAppointments.push(appointment);
      } else {
        completedAppointments.push(appointment);
      }
    });

    setFilteredAppointments({
      today: todayAppointments,
      upcoming: upcomingAppointments,
      completed: completedAppointments,
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4 text-[#3852D7]">
        Appointments
      </h1>

      {/* Tab Navigation */}
      {/* <div className="flex space-x-4 border-b pb-2">
        {["today", "upcoming", "completed"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 ${
              activeTab === tab
                ? "border-b-2 border-[#3852D7] font-semibold text-[#3852D7]"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div> */}

      {/* Tab Content */}
      {/* <div className="mt-4">
        {filteredAppointments[activeTab].length > 0 ? (
          <ul className="space-y-3">
            {filteredAppointments[activeTab].map((appointment) => (
              <li
                key={appointment._id}
                className="p-4 bg-white shadow rounded-lg border"
              >
                <p className="text-lg font-semibold">{appointment.name}</p>
                <p className="text-gray-600">
                  {new Date(appointment.date).toDateString()}
                </p>
                <a href={appointment.meetLink}>
                  <p className="text-blue-700">Join Meet</p>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No appointments found.</p>
        )}
      </div> */}

      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">
          Total Bookings: 92{" "}
          <span className="text-sm text-green-500">+12% from last month</span>
        </h1>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Client Name</th>
              <th className="py-2 px-4 border-b">Booking Date & Time</th>
              <th className="py-2 px-4 border-b">Session Length</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((booking, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{booking.name}</td>
                <td className="py-2 px-4 border-b">{booking.date}</td>
                <td className="py-2 px-4 border-b">{booking.time}</td>
                <td className="py-2 px-4 border-b">{booking.status}</td>
                <td className="py-2 px-4 border-b">paid</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

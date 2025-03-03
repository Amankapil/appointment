"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import SessionTabs from "./SessionTabs";

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
      const response = await fetch("/api/admin/getTransaction"); // Update with your actual API route
      const data = await response.json();
      //   console.log(data.data);
      //   if (response.data.success) {
      setAppointments(data.data);
      //   console.log(data.data);
      // categorizeAppointments(data.data);
      //   }
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  // const categorizeAppointments = (data) => {
  //   const today = new Date().toISOString().split("T")[0];
  //   // console.log(today);
  //   // console.log(data);

  //   const todayAppointments = [];
  //   const upcomingAppointments = [];
  //   const completedAppointments = [];

  //   data?.forEach((appointment) => {
  //     //   console.log(appointment);
  //     const appointmentDate = new Date(appointment.date)
  //       .toISOString()
  //       .split("T")[0];
  //     //   console.log(appointmentDate);
  //     if (appointmentDate === today) {
  //       todayAppointments.push(appointment);
  //     } else if (appointmentDate > today) {
  //       upcomingAppointments.push(appointment);
  //     } else {
  //       completedAppointments.push(appointment);
  //     }
  //   });

  //   setFilteredAppointments({
  //     today: todayAppointments,
  //     upcoming: upcomingAppointments,
  //     completed: completedAppointments,
  //   });
  // };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4 text-[#3852D7]">
        Appointments
      </h1>

      <SessionTabs data={appointments} />
    </div>
  );
}

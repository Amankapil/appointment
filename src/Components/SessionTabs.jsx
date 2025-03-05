import React, { useState, useEffect } from "react";
import moment from "moment";
import Image from "next/image";

const SessionTabs = ({ data }) => {
  const [activeTab, setActiveTab] = useState("Upcoming");
  const [upcomingSessions, setUpcomingSessions] = useState([]);
  const [ongoingSessions, setOngoingSessions] = useState([]);
  const [completedSessions, setCompletedSessions] = useState([]);
  const [countdowns, setCountdowns] = useState({});

  useEffect(() => {
    filterSessions();
    const interval = setInterval(updateCountdowns, 1000);
    return () => clearInterval(interval);
  }, [data]);

  const filterSessions = () => {
    const now = moment();
    const upcoming = [];
    const ongoing = [];
    const completed = [];

    data.forEach((session) => {
      if (!session.selectedTime) {
        console.error("Invalid selectedTime:", session);
        return; // Skip invalid sessions
      }

      const sessionStart = moment(session.selectedDate, "YYYY-MM-DD");
      const [time, period] = session.selectedTime.split(" - ")[0].split(" ");
      let [startHour, startMinute] = time.split(":").map(Number);

      // Convert 12-hour format to 24-hour format correctly
      if (period === "PM" && startHour !== 12) startHour += 12;
      if (period === "AM" && startHour === 12) startHour = 0;

      sessionStart.hour(startHour).minute(startMinute).second(0);
      const sessionEnd = sessionStart.clone().add(30, "minutes");

      if (sessionStart.isAfter(now)) {
        upcoming.push(session);
      } else if (now.isBetween(sessionStart, sessionEnd)) {
        ongoing.push(session);
      } else {
        completed.push(session);
      }
    });

    setUpcomingSessions(upcoming);
    setOngoingSessions(ongoing);
    setCompletedSessions(completed);
  };

  const updateCountdowns = () => {
    const now = moment();
    const updatedCountdowns = {};

    upcomingSessions.forEach((session) => {
      const sessionStart = moment(session.selectedDate, "YYYY-MM-DD");
      const [time, period] = session.selectedTime.split(" - ")[0].split(" ");
      let [startHour, startMinute] = time.split(":").map(Number);

      // Convert to 24-hour format correctly
      if (period === "PM" && startHour !== 12) startHour += 12;
      if (period === "AM" && startHour === 12) startHour = 0;

      sessionStart.hour(startHour).minute(startMinute).second(0);

      const diff = sessionStart.diff(now, "seconds");
      updatedCountdowns[session._id] =
        diff > 0 ? formatCountdown(diff) : "Starting now";
    });

    setCountdowns(updatedCountdowns);
  };

  // const updateCountdowns = () => {
  //   const now = moment();
  //   const updatedCountdowns = {};

  //   upcomingSessions.forEach((session) => {
  //     const sessionStart = moment(session.selectedDate);
  //     const [startHour, startMinute] = session.selectedTime
  //       .split(" - ")[0]
  //       .split(/[: ]/);
  //     sessionStart.hour(
  //       session.selectedTime.includes("PM") ? +startHour + 12 : +startHour
  //     );
  //     sessionStart.minute(+startMinute);

  //     const diff = sessionStart.diff(now, "seconds");
  //     if (diff > 0) {
  //       updatedCountdowns[session._id] = formatCountdown(diff);
  //     } else {
  //       updatedCountdowns[session._id] = "Starting now";
  //     }
  //   });

  //   setCountdowns(updatedCountdowns);
  // };

  const formatCountdown = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}h ${mins}m ${secs}s`;
  };

  return (
    <div className="p-4">
      {/* Tabs */}
      <div className="flex space-x-4 border-b">
        {["Upcoming", "Ongoing", "Completed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 ${
              activeTab === tab
                ? "border-b-2 border-blue-500 font-semibold"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Session List */}
      <div className="mt-4">
        {activeTab === "Upcoming" && (
          <SessionList
            sessions={upcomingSessions}
            label="Upcoming"
            countdowns={countdowns}
          />
        )}
        {activeTab === "Ongoing" && (
          <SessionList sessions={ongoingSessions} label="Ongoing" />
        )}
        {activeTab === "Completed" && (
          <SessionList sessions={completedSessions} label="Completed" />
        )}
      </div>
    </div>
  );
};

// Session List Component
const SessionList = ({ sessions, label, countdowns = {} }) => {
  if (sessions.length === 0) {
    return <p className="text-gray-500">No {label} sessions.</p>;
  }

  //   console.log(sessions);
  return (
    <ul className="space-y-2">
      {sessions?.map((session) => (
        <li key={session._id} className="p-3 bg-gray-100 rounded-md">
          <p className="font-semibold">{session.name}</p>
          <p>
            {session.selectedTime} |{" "}
            {moment(session.selectedDate).format("DD MMM YYYY")}
          </p>
          <div>
            <p>horoscope</p>
            {session?.filePath ? (
              <Image
                src={`${session.filePath}`} // Adjust the path accordingly
                alt="Horoscope Image"
                width={200}
                height={200}
              />
            ) : (
              <p>No image available</p>
            )}{" "}
          </div>
          {label === "Upcoming" && (
            <p className="text-green-600 font-semibold">
              Upcoming in {countdowns[session._id] || "Calculating..."}
            </p>
          )}
          <p className="text-gray-600">{session.status}</p>
        </li>
      ))}
    </ul>
  );
};

export default SessionTabs;

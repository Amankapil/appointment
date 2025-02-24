// import { useEffect, useState } from "react";
// import { toast } from "react-hot-toast";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import { format, parseISO, startOfDay } from "date-fns";

// export default function AdminAvailability() {
//   const [availability, setAvailability] = useState({});
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [startTime, setStartTime] = useState("09:00");
//   const [endTime, setEndTime] = useState("17:00");
//   const [showTimeForm, setShowTimeForm] = useState(true);

//   useEffect(() => {
//     const fetchAvailability = async () => {
//       try {
//         const res = await fetch("/api/admin/availability");
//         const data = await res.json();
//         setAvailability(data);
//       } catch (error) {
//         toast.error("Failed to load availability");
//       }
//     };
//     fetchAvailability();
//   }, []);

//   const handleAddAvailability = () => {
//     if (!selectedDate || !startTime || !endTime) {
//       toast.error("Please select date and time range");
//       return;
//     }

//     const dateKey = format(selectedDate, "yyyy-MM-dd");
//     const slots = generateHourlySlots(startTime, endTime);

//     setAvailability((prev) => ({
//       ...prev,
//       [dateKey]: slots,
//     }));
//     setShowTimeForm(false);
//   };

//   const handleSave = async () => {
//     try {
//       const res = await fetch("/api/admin", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(availability),
//       });
//       const dr = await res.json();
//       console.log(dr);
//       if (dr.error) {
//         alert(dr.error);
//       }
//       alert(dr.message);

//       toast.success("Availability saved successfully");
//     } catch (error) {
//       alert(error.error);
//       toast.error("Failed to save availability");
//     }
//   };

//   const generateHourlySlots = (start, end) => {
//     const slots = [];
//     let current = new Date(`2000-01-01T${start}`);
//     const endTimeObj = new Date(`2000-01-01T${end}`);

//     while (current < endTimeObj) {
//       const endSlot = new Date(current.getTime() + 60 * 60 * 1000);
//       if (endSlot > endTimeObj) break;

//       slots.push({
//         time: `${format(current, "HH:mm")} - ${format(endSlot, "HH:mm")}`,
//         status: "available", // Default status
//       });
//       current = endSlot;
//     }
//     return slots;
//   };

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//     setShowTimeForm(true);

//     // Load existing slots for the date
//     const dateKey = format(date, "yyyy-MM-dd");
//     if (availability[dateKey]?.length > 0) {
//       const [existingStart] = availability[dateKey][0].time.split(" - ");
//       const [existingEnd] =
//         availability[dateKey][availability[dateKey].length - 1].time.split(
//           " - "
//         );
//       setStartTime(existingStart);
//       setEndTime(existingEnd.slice(0, 5));
//     }
//   };

//   const tileContent = ({ date }) => {
//     const dateKey = format(date, "yyyy-MM-dd");
//     const slots = availability[dateKey] || [];

//     return (
//       <div className="py-1">
//         {slots.map((slot, i) => (
//           <div
//             key={i}
//             className={`text-xs rounded p-0.5 mb-0.5 ${
//               slot.status === "available" ? "bg-blue-100" : "bg-red-100"
//             }`}
//           >
//             {slot.time} ({slot.status})
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow max-w-4xl mx-auto">
//       <h2 className="text-2xl font-normal mb-6">Manage Availability</h2>

//       <div className="mb-6">
//         <Calendar
//           onChange={setSelectedDate}
//           value={selectedDate}
//           onClickDay={handleDateClick}
//           tileContent={tileContent}
//           minDetail="month"
//           className="react-calendar-custom"
//         />
//       </div>

//       {showTimeForm && selectedDate && (
//         <div className="bg-gray-50 p-4 rounded-lg mb-6">
//           <h3 className="font-medium mb-4">
//             Edit Availability for {format(selectedDate, "MMM dd, yyyy")}
//           </h3>

//           <div className="flex gap-4 mb-4">
//             <div>
//               <label className="block mb-1 text-sm">Start Time</label>
//               <input
//                 type="time"
//                 value={startTime}
//                 onChange={(e) => setStartTime(e.target.value)}
//                 className="p-2 border rounded"
//               />
//             </div>
//             <div>
//               <label className="block mb-1 text-sm">End Time</label>
//               <input
//                 type="time"
//                 value={endTime}
//                 onChange={(e) => setEndTime(e.target.value)}
//                 className="p-2 border rounded"
//               />
//             </div>
//           </div>

//           <div className="flex gap-2">
//             <button
//               onClick={handleAddAvailability}
//               className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
//             >
//               Update Slots
//             </button>
//             <button
//               onClick={() => {
//                 const dateKey = format(selectedDate, "yyyy-MM-dd");
//                 setAvailability((prev) => {
//                   const newAvail = { ...prev };
//                   delete newAvail[dateKey];
//                   return newAvail;
//                 });
//                 setShowTimeForm(false);
//               }}
//               className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
//             >
//               Clear Slots
//             </button>
//           </div>
//         </div>
//       )}

//       <button
//         onClick={handleSave}
//         className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//       >
//         Save All Changes
//       </button>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { toast } from "react-hot-toast";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import { format } from "date-fns";

// export default function AdminAvailability() {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedSlots, setSelectedSlots] = useState([]);
//   const defaultSlots = [
//     "9 AM - 10 AM",
//     "10 AM - 11 AM",
//     "11 AM - 12 PM",
//     "12 PM - 1 PM",
//     "1 PM - 2 PM",
//     "2 PM - 3 PM",
//     "3 PM - 4 PM",
//     "4 PM - 5 PM",
//     "5 PM - 6 PM",
//     "6 PM - 7 PM",
//   ];

//   const handleSlotClick = (slot) => {
//     setSelectedSlots((prev) => {
//       const exists = prev.some(
//         (s) => s.date === format(selectedDate, "yyyy-MM-dd") && s.time === slot
//       );
//       if (exists) {
//         return prev.filter(
//           (s) =>
//             !(s.date === format(selectedDate, "yyyy-MM-dd") && s.time === slot)
//         );
//       }
//       return [
//         ...prev,
//         { date: format(selectedDate, "yyyy-MM-dd"), time: slot },
//       ];
//     });
//   };

//   const handleSave = async () => {
//     try {
//       const res = await fetch("/api/admin", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         // body: JSON.stringify(selectedSlots),
//         body: JSON.stringify({
//           [format(selectedDate, "yyyy-MM-dd")]: selectedSlots.map((slot) => ({
//             time: slot.time,
//             status: "available", // Default status (modify if necessary)
//           })),
//         }),
//       });
//       const dr = await res.json();
//       if (dr.error) {
//         alert(dr.error);
//       }
//       alert(dr.message);
//       toast.success("Availability saved successfully");
//     } catch (error) {
//       toast.error("Failed to save availability");
//     }
//   };

//   return (
//     <div>
//       <div className="bg-white p-6 rounded-lg shadow max-w-6xl mx-auto  gap-6">
//         <div className=" max-w-6xl mx-auto flex gap-6">
//           <div>
//             <h2 className="text-2xl font-normal mb-6">Manage Availability</h2>
//             <Calendar
//               onChange={setSelectedDate}
//               value={selectedDate}
//               minDetail="month"
//               className="react-calendar-custom"
//             />
//           </div>
//           <div className="flex-1 bg-gray-50 p-4 rounded-lg">
//             <h3 className="font-medium mb-4">
//               Availability for{" "}
//               {selectedDate
//                 ? format(selectedDate, "MMM dd, yyyy")
//                 : "Select a date"}
//             </h3>
//             <div className="grid grid-cols-2 gap-2">
//               {selectedDate &&
//                 defaultSlots.map((slot, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleSlotClick(slot)}
//                     className={`px-4 py-2 rounded text-sm border ${
//                       selectedSlots.some(
//                         (s) =>
//                           s.date === format(selectedDate, "yyyy-MM-dd") &&
//                           s.time === slot
//                       )
//                         ? "bg-blue-600 text-white"
//                         : "bg-white border-gray-300"
//                     }`}
//                   >
//                     {slot}
//                   </button>
//                 ))}
//             </div>
//           </div>
//         </div>
//         <button
//           onClick={handleSave}
//           className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//         >
//           Save Selected Slots
//         </button>
//       </div>
//     </div>
//   );
// }

// second working code

// import { useState, useEffect } from "react";
// import { format } from "date-fns";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import toast from "react-hot-toast";

// export default function AdminAvailability() {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedSlots, setSelectedSlots] = useState([]);
//   const [availability, setAvailability] = useState([]);
//   const [selectedTab, setSelectedTab] = useState("1hour"); // Tabs: 15min, 30min, 1hour

//   const generateSlots = (interval) => {
//     const slots = [];
//     let start = 9 * 60; // 9:00 AM in minutes
//     let end = 19 * 60; // 7:00 PM in minutes

//     while (start < end) {
//       let hours = Math.floor(start / 60);
//       let minutes = start % 60;
//       let nextMinutes = start + interval;

//       let nextHours = Math.floor(nextMinutes / 60);
//       let nextMins = nextMinutes % 60;

//       const formattedSlot = `${hours % 12 || 12}:${minutes
//         .toString()
//         .padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"} - ${
//         nextHours % 12 || 12
//       }:${nextMins.toString().padStart(2, "0")} ${
//         nextHours >= 12 ? "PM" : "AM"
//       }`;

//       slots.push(formattedSlot);
//       start += interval;
//     }
//     return slots;
//   };

//   const slotOptions = {
//     "15min": generateSlots(15),
//     "30min": generateSlots(30),
//     "1hour": generateSlots(60),
//   };

//   useEffect(() => {
//     if (selectedDate) {
//       fetchAvailability(selectedDate);
//     }
//   }, [selectedDate]);

//   const fetchAvailability = async (date) => {
//     try {
//       const res = await fetch(
//         `/api/admin/getslot?date=${format(date, "yyyy-MM-dd")}`
//       );
//       const data = await res.json();
//       if (data.error) {
//         toast.error(data.error);
//       } else {
//         setAvailability(data.slots || []);
//       }
//     } catch (error) {
//       toast.error("Failed to fetch availability");
//     }
//   };

//   const handleSlotClick = (slot) => {
//     setSelectedSlots((prev) => {
//       const exists = prev.some(
//         (s) => s.date === format(selectedDate, "yyyy-MM-dd") && s.time === slot
//       );
//       if (exists) {
//         return prev.filter(
//           (s) =>
//             !(s.date === format(selectedDate, "yyyy-MM-dd") && s.time === slot)
//         );
//       }
//       return [
//         ...prev,
//         { date: format(selectedDate, "yyyy-MM-dd"), time: slot },
//       ];
//     });
//   };

//   const handleSave = async () => {
//     try {
//       const res = await fetch("/api/admin", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           [format(selectedDate, "yyyy-MM-dd")]: selectedSlots.map((slot) => ({
//             time: slot.time,
//             status: "available",
//           })),
//         }),
//       });
//       const dr = await res.json();
//       if (dr.error) {
//         alert(dr.error);
//       }
//       toast.success("Availability saved successfully");
//     } catch (error) {
//       toast.error("Failed to save availability");
//     }
//   };

//   const getSlotStatus = (slot) => {
//     const slotData = availability.find((s) => s.time === slot);
//     return slotData ? slotData.status : "not_saved";
//   };

//   return (
//     <div>
//       <div className="flex space-x-4 items-center justify-center">
//         <button
//           className={`px-4 py-2 rounded-md ${
//             selectedTab === "15min" ? "bg-blue-600 text-white" : "bg-gray-200"
//           }`}
//           onClick={() => setSelectedTab("15min")}
//         >
//           15 Min Slots
//         </button>
//         <button
//           className={`px-4 py-2 rounded-md ${
//             selectedTab === "30min" ? "bg-blue-600 text-white" : "bg-gray-200"
//           }`}
//           onClick={() => setSelectedTab("30min")}
//         >
//           30 Min Slots
//         </button>
//         <button
//           className={`px-4 py-2 rounded-md ${
//             selectedTab === "1hour" ? "bg-blue-600 text-white" : "bg-gray-200"
//           }`}
//           onClick={() => setSelectedTab("1hour")}
//         >
//           1 Hour Slots
//         </button>
//       </div>

//       <div className="bg-white p-6 rounded-lg shadow max-w-6xl mx-auto mt-6">
//         <div className="flex gap-6">
//           <div>
//             <h2 className="text-2xl font-normal mb-6">Manage Availability</h2>
//             <Calendar
//               onChange={setSelectedDate}
//               value={selectedDate}
//               minDetail="month"
//               className="react-calendar-custom"
//             />
//           </div>

//           <div className="flex-1 bg-gray-50 p-4 rounded-lg">
//             <h3 className="font-medium mb-4">
//               Availability for{" "}
//               {selectedDate
//                 ? format(selectedDate, "MMM dd, yyyy")
//                 : "Select a date"}
//             </h3>
//             <div className="grid grid-cols-2 gap-2">
//               {selectedDate &&
//                 slotOptions[selectedTab].map((slot, index) => {
//                   const status = getSlotStatus(slot);
//                   const isSelected = selectedSlots.some(
//                     (s) =>
//                       s.date === format(selectedDate, "yyyy-MM-dd") &&
//                       s.time === slot
//                   );

//                   return (
//                     <button
//                       key={index}
//                       onClick={() => handleSlotClick(slot)}
//                       className={`px-4 py-2 rounded text-sm border ${
//                         isSelected
//                           ? "bg-blue-600 text-white"
//                           : status === "unavailable"
//                           ? "bg-gray-200 text-gray-600 cursor-not-allowed"
//                           : "bg-white border-gray-300"
//                       }`}
//                       disabled={status === "unavailable"}
//                     >
//                       {slot}
//                     </button>
//                   );
//                 })}
//             </div>
//           </div>
//         </div>

//         <button
//           onClick={handleSave}
//           className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//         >
//           Save Selected Slots
//         </button>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { format } from "date-fns";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import toast from "react-hot-toast";

export default function AdminAvailability() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [selectedTab, setSelectedTab] = useState("60"); // Default to 1 hour (60 min)

  const generateSlots = (interval) => {
    const slots = [];
    let start = 9 * 60; // 9:00 AM in minutes
    let end = 19 * 60; // 7:00 PM in minutes

    while (start < end) {
      let hours = Math.floor(start / 60);
      let minutes = start % 60;
      let nextMinutes = start + interval;

      let nextHours = Math.floor(nextMinutes / 60);
      let nextMins = nextMinutes % 60;

      const formattedSlot = `${hours % 12 || 12}:${minutes
        .toString()
        .padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"} - ${
        nextHours % 12 || 12
      }:${nextMins.toString().padStart(2, "0")} ${
        nextHours >= 12 ? "PM" : "AM"
      }`;

      slots.push({ time: formattedSlot, duration: interval });
      start += interval;
    }
    return slots;
  };

  const slotOptions = {
    15: generateSlots(15),
    30: generateSlots(30),
    60: generateSlots(60),
  };

  useEffect(() => {
    if (selectedDate) {
      fetchAvailability(selectedDate);
    }
  }, [selectedDate]);

  const fetchAvailability = async (date) => {
    try {
      const res = await fetch(
        `/api/admin/getslot?date=${format(date, "yyyy-MM-dd")}`
      );
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
      } else {
        setAvailability(data.slots || []);
      }
    } catch (error) {
      toast.error("Failed to fetch availability");
    }
  };

  const handleSlotClick = (slot) => {
    setSelectedSlots((prev) => {
      const exists = prev.some(
        (s) =>
          s.date === format(selectedDate, "yyyy-MM-dd") && s.time === slot.time
      );
      if (exists) {
        return prev.filter(
          (s) =>
            !(
              s.date === format(selectedDate, "yyyy-MM-dd") &&
              s.time === slot.time
            )
        );
      }
      return [
        ...prev,
        {
          date: format(selectedDate, "yyyy-MM-dd"),
          time: slot.time,
          duration: slot.duration,
        },
      ];
    });
  };

  const handleSave = async () => {
    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: format(selectedDate, "yyyy-MM-dd"),
          slots: selectedSlots.map((slot) => ({
            time: slot.time,
            duration: slot.duration,
            status: "available",
          })),
        }),
      });
      const dr = await res.json();
      if (dr.error) {
        alert.error(dr.error);
      } else {
        alert("Availability saved successfully");
      }
    } catch (error) {
      toast.error("Failed to save availability");
    }
  };

  const getSlotStatus = (slot) => {
    const slotData = availability.find((s) => s.time === slot.time);
    return slotData ? slotData.status : "not_saved";
  };

  return (
    <div>
      <div className="flex space-x-4 items-center justify-center">
        {["15", "30", "60"].map((duration) => (
          <button
            key={duration}
            className={`px-4 py-2 rounded-md ${
              selectedTab === duration
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setSelectedTab(duration)}
          >
            {duration === "15"
              ? "15 Min Slots"
              : duration === "30"
              ? "30 Min Slots"
              : "1 Hour Slots"}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow max-w-6xl mx-auto mt-6">
        <div className="flex gap-6">
          <div>
            <h2 className="text-2xl font-normal mb-6">Manage Availability</h2>
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              minDetail="month"
              className="react-calendar-custom"
            />
          </div>

          <div className="flex-1 bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-4">
              Availability for{" "}
              {selectedDate
                ? format(selectedDate, "MMM dd, yyyy")
                : "Select a date"}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {selectedDate &&
                slotOptions[selectedTab].map((slot, index) => {
                  const status = getSlotStatus(slot);
                  const isSelected = selectedSlots.some(
                    (s) =>
                      s.date === format(selectedDate, "yyyy-MM-dd") &&
                      s.time === slot.time
                  );

                  return (
                    <button
                      key={index}
                      onClick={() => handleSlotClick(slot)}
                      className={`px-4 py-2 rounded text-sm border ${
                        isSelected
                          ? "bg-blue-600 text-white"
                          : status === "booked"
                          ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                          : "bg-white border-gray-300"
                      }`}
                      disabled={status === "booked"}
                    >
                      {slot.time}
                    </button>
                  );
                })}
            </div>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Save Selected Slots
        </button>
      </div>
    </div>
  );
}

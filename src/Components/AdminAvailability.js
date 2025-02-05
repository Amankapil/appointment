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
//   const [showTimeForm, setShowTimeForm] = useState(false);

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
//       await fetch("/api/admin", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(availability),
//       });
//       toast.success("Availability saved successfully");
//     } catch (error) {
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

//       slots.push(`${format(current, "HH:mm")} - ${format(endSlot, "HH:mm")}`);
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
//       const [existingStart] = availability[dateKey][0].split(" - ");
//       const [existingEnd] =
//         availability[dateKey][availability[dateKey].length - 1].split(" - ");
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
//           <div key={i} className="text-xs bg-blue-100 rounded p-0.5 mb-0.5">
//             {slot}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-6">Manage Availability</h2>

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

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format, parseISO, startOfDay } from "date-fns";

export default function AdminAvailability() {
  const [availability, setAvailability] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:00");
  const [showTimeForm, setShowTimeForm] = useState(false);

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const res = await fetch("/api/admin/availability");
        const data = await res.json();
        setAvailability(data);
      } catch (error) {
        toast.error("Failed to load availability");
      }
    };
    fetchAvailability();
  }, []);

  const handleAddAvailability = () => {
    if (!selectedDate || !startTime || !endTime) {
      toast.error("Please select date and time range");
      return;
    }

    const dateKey = format(selectedDate, "yyyy-MM-dd");
    const slots = generateHourlySlots(startTime, endTime);

    setAvailability((prev) => ({
      ...prev,
      [dateKey]: slots,
    }));
    setShowTimeForm(false);
  };

  const handleSave = async () => {
    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(availability),
      });
      const dr = await res.json();
      console.log(dr);
      if (dr.error) {
        alert(dr.error);
      }
      alert(dr.message);

      toast.success("Availability saved successfully");
    } catch (error) {
      alert(error.error);
      toast.error("Failed to save availability");
    }
  };

  const generateHourlySlots = (start, end) => {
    const slots = [];
    let current = new Date(`2000-01-01T${start}`);
    const endTimeObj = new Date(`2000-01-01T${end}`);

    while (current < endTimeObj) {
      const endSlot = new Date(current.getTime() + 60 * 60 * 1000);
      if (endSlot > endTimeObj) break;

      slots.push({
        time: `${format(current, "HH:mm")} - ${format(endSlot, "HH:mm")}`,
        status: "available", // Default status
      });
      current = endSlot;
    }
    return slots;
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowTimeForm(true);

    // Load existing slots for the date
    const dateKey = format(date, "yyyy-MM-dd");
    if (availability[dateKey]?.length > 0) {
      const [existingStart] = availability[dateKey][0].time.split(" - ");
      const [existingEnd] =
        availability[dateKey][availability[dateKey].length - 1].time.split(
          " - "
        );
      setStartTime(existingStart);
      setEndTime(existingEnd.slice(0, 5));
    }
  };

  const tileContent = ({ date }) => {
    const dateKey = format(date, "yyyy-MM-dd");
    const slots = availability[dateKey] || [];

    return (
      <div className="py-1">
        {slots.map((slot, i) => (
          <div
            key={i}
            className={`text-xs rounded p-0.5 mb-0.5 ${
              slot.status === "available" ? "bg-blue-100" : "bg-red-100"
            }`}
          >
            {slot.time} ({slot.status})
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Manage Availability</h2>

      <div className="mb-6">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          onClickDay={handleDateClick}
          tileContent={tileContent}
          minDetail="month"
          className="react-calendar-custom"
        />
      </div>

      {showTimeForm && selectedDate && (
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="font-medium mb-4">
            Edit Availability for {format(selectedDate, "MMM dd, yyyy")}
          </h3>

          <div className="flex gap-4 mb-4">
            <div>
              <label className="block mb-1 text-sm">Start Time</label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">End Time</label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="p-2 border rounded"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleAddAvailability}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
            >
              Update Slots
            </button>
            <button
              onClick={() => {
                const dateKey = format(selectedDate, "yyyy-MM-dd");
                setAvailability((prev) => {
                  const newAvail = { ...prev };
                  delete newAvail[dateKey];
                  return newAvail;
                });
                setShowTimeForm(false);
              }}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
            >
              Clear Slots
            </button>
          </div>
        </div>
      )}

      <button
        onClick={handleSave}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Save All Changes
      </button>
    </div>
  );
}

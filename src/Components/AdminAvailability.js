import { useState, useEffect } from "react";
import { format } from "date-fns";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import toast from "react-hot-toast";

export default function AdminAvailability() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [selectedTab, setSelectedTab] = useState("30"); // Default to 1 hour (60 min)

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
    // 60: generateSlots(60),
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

  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
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
      console.log(dr.error);
      if (dr.error) {
        alert(dr.error);
      } else {
        alert("Availability saved successfully");
      }
    } catch (error) {
      toast.error("Failed to save availability");
    } finally {
      setLoading(false);
    }
  };

  const getSlotStatus = (slot) => {
    const slotData = availability.find((s) => s.time === slot.time);
    return slotData ? slotData.status : "not_saved";
  };

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow max-w-6xl mx-auto mt-6">
        <div className="flex gap-6">
          <div>
            <h2 className="text-2xl font-normal mb-6">Choose a Date</h2>
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              minDetail="month"
              className="react-calendar-custom"
            />
          </div>

          <div className="flex-1 bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium mb-4">Choose Your Session Length</h3>
            <div className="flex space-x-4 items-start justify-start pb-6">
              {["15", "30"].map((duration) => (
                <button
                  key={duration}
                  className={`px-4 border py-2 rounded-md ${
                    selectedTab === duration
                      ? "bg-blue-600 text-white"
                      : "bg-white border-[#CCCCCC] "
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
            <h3 className="font-medium mb-4">
              Availability for{" "}
              {selectedDate
                ? format(selectedDate, "MMM dd, yyyy")
                : "Select a date"}
            </h3>
            <div className="grid grid-cols-4 gap-2">
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
        <div className="flex items-center justify-end w-full">
          <button
            onClick={handleSave}
            className="mt-4 px-4 py-2 bg-[#4597F8] text-white rounded hover:bg-green-700"
          >
            {loading ? "saving data...... " : "Save Availability"}
          </button>
        </div>


      </div>



      
    </div>
  );
}

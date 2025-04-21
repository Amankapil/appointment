import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function AdminAvailability() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [selectedTab, setSelectedTab] = useState("30"); // Default to 30 min slots
  const [loading, setLoading] = useState(false);

  const generateSlots = (interval) => {
    const slots = [];
    let start = 10 * 60; // 10:00 AM in minutes
    let end = 18 * 60; // 6:00 PM in minutes

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
    45: generateSlots(45),
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
        setIsEditing(false);
        setSelectedSlots(
          data.slots?.map((slot) => ({
            date: format(date, "yyyy-MM-dd"),
            time: slot.time,
            duration: slot.duration,
            status: slot.status,
          })) || []
        );
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
      if (dr.error) {
        toast.error(dr.error);
      } else {
        toast.success(dr.message);
        fetchAvailability(selectedDate);
      }
    } catch (error) {
      toast.error("Failed to save availability");
    } finally {
      setLoading(false);
    }
  };
  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = async () => {
    if (!selectedDate) {
      toast.error("Please select a date first!");
      return;
    }
    setIsEditing(true);

    fetchAvailability(selectedDate);
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
              {["15", "30", "45"].map((duration) => (
                <button
                  key={duration}
                  className={`px-4 border py-2 rounded-md ${
                    selectedTab === duration
                      ? "bg-blue-600 text-white"
                      : "bg-white border-[#CCCCCC]"
                  }`}
                  onClick={() => setSelectedTab(duration)}
                >
                  {duration} Min Slots
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
                      onClick={() =>
                        status !== "booked" && handleSlotClick(slot)
                      }
                      className={`px-4 py-2 rounded text-sm border ${
                        status === "booked"
                          ? "bg-red-500 text-white cursor-not-allowed"
                          : isSelected
                          ? "bg-green-500 text-white"
                          : "bg-red-100 border-gray-300"
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

        {/* Buttons */}
        <div className="flex items-center justify-end w-full mt-4 space-x-2">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-[#4597F8] text-white rounded hover:bg-green-700"
          >
            {loading
              ? "Saving..."
              : isEditing
              ? "Edit Slots"
              : "Save Availability"}
          </button>
        </div>
      </div>
    </div>
  );
}

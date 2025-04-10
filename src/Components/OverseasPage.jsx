// "use client";
// import { useState, useEffect } from "react";
// import TimezoneSelect from "react-timezone-select";
// import { DateTime } from "luxon";

// export default function OverseasPage() {
//   const [selectedTimezone, setSelectedTimezone] = useState(
//     Intl.DateTimeFormat().resolvedOptions().timeZone
//   );
//   const [timeSlots, setTimeSlots] = useState([]);

//   // Fetch slots for today's date from the server
//   const fetchSlots = async () => {
//     try {
//       const today = new Date();
//       const formattedDate = today.toISOString().split("T")[0]; // YYYY-MM-DD
//       const res = await fetch(`/api/admin/getslot?date=${formattedDate}`);
//       const data = await res.json();

//       // Convert stored IST slots to UTC
//       const filteredSlots = data.slots
//         .map((slot) => {
//           const [startTime, endTime] = slot.time.split(" - ");

//           // Convert IST times to UTC
//           const startUTC = DateTime.fromFormat(startTime, "h:mm a", {
//             zone: "Asia/Kolkata",
//           }).toUTC();

//           const endUTC = DateTime.fromFormat(endTime, "h:mm a", {
//             zone: "Asia/Kolkata",
//           }).toUTC();

//           return { startUTC, endUTC };
//         })
//         .filter((slot) => {
//           const hour = slot.startUTC.hour;
//           return hour >= 4 && hour <= 12; // 10 AM - 6 PM IST in UTC (4 AM - 12 PM)
//         });

//       setTimeSlots(filteredSlots);
//     } catch (error) {
//       console.log("Error fetching slots:", error);
//     }
//   };

//   useEffect(() => {
//     fetchSlots();
//   }, []);

//   // Convert UTC slots to the selected timezone
//   const convertSlotsToTimezone = () => {
//     return timeSlots.map((slot) => {
//       const startDateTime = slot.startUTC.setZone(selectedTimezone);
//       const endDateTime = slot.endUTC.setZone(selectedTimezone);

//       return {
//         timeRange: `${startDateTime.toFormat(
//           "h:mm a"
//         )} - ${endDateTime.toFormat("h:mm a")}`,
//       };
//     });
//   };

//   const convertedSlots = convertSlotsToTimezone();

//   return (
//     <div className="p-6">
//       <h2 className="text-lg font-semibold mb-4">Select Your Timezone</h2>
//       <TimezoneSelect
//         value={selectedTimezone}
//         onChange={(tz) => setSelectedTimezone(tz.value)}
//       />

//       <div className="grid grid-cols-3 gap-4 mt-4">
//         {convertedSlots.length > 0 ? (
//           convertedSlots.map((slot, index) => (
//             <button
//               key={index}
//               className="p-2 rounded text-sm border bg-green-200 hover:bg-green-300"
//             >
//               {slot.timeRange}
//             </button>
//           ))
//         ) : (
//           <p className="text-gray-500 col-span-3 text-center">
//             No slots available
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import OverseasNew from "./bookingcomp/OverseasNew";
import OverseasOld from "./bookingcomp/OverseasOld";
import { useState, useEffect } from "react";
import TimezoneSelect from "react-timezone-select";
import { DateTime } from "luxon";

export default function Bookings() {
  const handleSelection = (type) => {
    if (type === "overseas") {
      router.push("/overseas");
    }
    setShowPopup(false);
  };
  const [showPopup, setShowPopup] = useState(true);
  const [selectedTimezone, setSelectedTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const tabs = [
    {
      name: "New User",
      icon: (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5 10H18M10.5 2.5V17.5M7 2.5H14C15.4002 2.5 16.1002 2.5 16.635 2.77248C17.1054 3.01217 17.4878 3.39462 17.7275 3.86503C18 4.3998 18 5.09987 18 6.5V13.5C18 14.9002 18 15.6002 17.7275 16.135C17.4878 16.6054 17.1054 16.9878 16.635 17.2275C16.1002 17.5 15.4002 17.5 14 17.5H7C5.59987 17.5 4.8998 17.5 4.36503 17.2275C3.89462 16.9878 3.51217 16.6054 3.27248 16.135C3 15.6002 3 14.9002 3 13.5V6.5C3 5.09987 3 4.3998 3.27248 3.86503C3.51217 3.39462 3.89462 3.01217 4.36503 2.77248C4.8998 2.5 5.59987 2.5 7 2.5Z"
            stroke="#096FE7"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      component: <OverseasNew selectedTimezone={selectedTimezone} />,
    },
    {
      name: "Existing User",
      icon: (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 8.33329H3M13.8333 1.66663V4.99996M7.16667 1.66663V4.99996M8 13.3333L9.66667 15L13.4167 11.25M7 18.3333H14C15.4002 18.3333 16.1002 18.3333 16.635 18.0608C17.1054 17.8211 17.4878 17.4387 17.7275 16.9683C18 16.4335 18 15.7335 18 14.3333V7.33329C18 5.93316 18 5.23309 17.7275 4.69832C17.4878 4.22791 17.1054 3.84546 16.635 3.60578C16.1002 3.33329 15.4002 3.33329 14 3.33329H7C5.59987 3.33329 4.8998 3.33329 4.36503 3.60578C3.89462 3.84546 3.51217 4.22791 3.27248 4.69832C3 5.23309 3 5.93316 3 7.33329V14.3333C3 15.7335 3 16.4335 3.27248 16.9683C3.51217 17.4387 3.89462 17.8211 4.36503 18.0608C4.8998 18.3333 5.59987 18.3333 7 18.3333Z"
            stroke="#606060"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      component: <OverseasOld selectedTimezone={selectedTimezone} />,
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const ActiveComponent = tabs.find((tab) => tab.name === activeTab)?.component;

  return (
    <>
      {showPopup && (
        <>
          <div className=" inset-0 flex-col flex z-[99999999] items-center mt-5 justify-center bg[#ffffff13] backdrop-blur[10px] bg-opacity-50">
            <h1 className="text-[32px] font-salernomi">
              Please select Your time-zone before selecting the time slots...
            </h1>
            <br />
            <TimezoneSelect
              value={selectedTimezone}
              onChange={(tz) => setSelectedTimezone(tz.value)}
            />
          </div>
        </>
      )}

      <div className="h-full bggray-100">
        <div className={`w-full  text-black px-5 transition-all  top-`}>
          <div className="flex items-center justify-center">
            <nav className="flex items-center justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  className={`flex items-center gap-2 px-4 py-2 rounded mt-2 ${
                    activeTab === tab.name
                      ? "bg-[#E6F1FE] text-[#096FE7]"
                      : "opacity-50"
                  }`}
                  onClick={() => setActiveTab(tab.name)}
                >
                  <div>{tab.icon}</div>
                  {/* <h1 className="h-[16px] w-[16px] bg-black"></h1> */}
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col pl[18%]">
          {/* Tabs */}
          <div className="p-2">
            {/* <div className="flex space-x-4 border-b"></div> */}
            <div className="mt-1">{ActiveComponent}</div>
          </div>
        </div>
      </div>
    </>
  );
}

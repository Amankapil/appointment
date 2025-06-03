"use client";
import { useEffect, useState } from "react";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import Questions from "@/Components/Questions";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DivideIcon } from "@heroicons/react/24/solid";
import ThankYouScreen from "@/Components/ThankYouScreen";
import axios from "axios";
import PaymentButton from "@/Components/PaymentButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../../Components/pagesComponent/Homecomponent/assets/logo.svg";
import Link from "next/link";

import { toast } from "react-toastify";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Bookings from "@/Components/Bookings";

const steps = [
  "Personal Details",
  // "Questions",
  "Appointment",
  // "Confirmation",
  // "Payment",
];

export default function OldConsult() {
  const [currentStep, setCurrentStep] = useState(0);

  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phone: "",
    dob: "",
    timeOfBirth: "",
    gender: "",
    country: "",
    state: "",
    material: "",
    city: "",
    maritalStatus: "",
    latitude: "",
    longitude: "",
    selectedQuestions: [],
  });

  const [clients, setClients] = useState([]);
  const [emailMessage, setEmailMessage] = useState("");
  const [svgdata, setSvgData] = useState("");

  // Fetch all data once when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/admin/getTransaction");
        const data = await response.json();
        // console.log(data.data);
        setClients(data.data); // Store the fetched users
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // console.log(clients);
  //
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Function to handle email input change
  const handleEmailChange = (e) => {
    const email = e.target.value.trim();
    setFormData((prev) => ({ ...prev, email }));

    if (email.includes("@") && email.includes(".com")) {
      const user = clients.find((client) => client.email === email);
      if (user) {
        // Ensure all fields have default values
        setFormData({
          email: user.email || "",
          fullName: user.name || "",
          phone: user.phone || "",
          dob: user.dob || "",
          timeOfBirth: user.tob || "",
          gender: user.gender || "",
          country: user.country || "",
          state: user.state || "",
          material: user.material || "",
          city: user.city || "",
          maritalStatus: user.maritalStatus || "",
          latitude: user.latitude || "",
          longitude: user.longitude || "",
          selectedQuestions: user.selectedQuestions || [],
        });
        toast.success("Email found");
        setSvgData(user?.filePath);
        setEmailMessage("");
      } else {
        // Show toast only when a complete email is typed and not found
        setTimeout(() => {
          toast.error("Email not found. Please fill in the details.");
        }, 500);
      }
    } else {
      setEmailMessage("");
    }
  };
  const handlePhoneChange = (value) => {
    const phone = value.trim();
    setFormData((prev) => ({ ...prev, phone }));

    if (phone.length >= 12) {
      // Adjust as per phone format
      const user = clients.find((client) => client.phone === phone);
      if (user) {
        // Ensure all fields have default values
        setFormData({
          email: user.email || "",
          fullName: user.name || "",
          phone: user.phone || "",
          dob: user.dob || "",
          timeOfBirth: user.tob || "",
          gender: user.gender || "",
          country: user.country || "",
          state: user.state || "",
          material: user.material || "",
          city: user.city || "",
          maritalStatus: user.maritalStatus || "",
          latitude: user.latitude || "",
          longitude: user.longitude || "",
          selectedQuestions: user.selectedQuestions || [],
        });
        toast.success("Phone number found");
        setSvgData(user?.filePath);
        // setPhoneMessage("");
      } else {
        // setTimeout(() => {
        toast.error("Phone number not found. Please fill in the details.");
        // }, 500);
      }
    } else {
      // setPhoneMessage("");
    }
  };

  const [latloading, setlatLoading] = useState(false);

  const [tok, setTok] = useState(null);
  const [paydata, setPayedata] = useState({
    fullName: "",
    phone: "",
    email: "",
    dob: "",
    timeOfBirth: "",
    gender: "",
    country: "",
    state: "",
    city: "",
  });

  const [duration, setDuration] = useState();
  useEffect(() => {
    if (
      formData.fullName &&
      formData.phone &&
      formData.email &&
      formData.dob &&
      formData.timeOfBirth &&
      formData.gender &&
      formData.country &&
      formData.state &&
      formData.city
    ) {
      setPayedata({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        dob: formData.dob,
        timeOfBirth: formData.timeOfBirth,
        gender: formData.gender,
        country: formData.country,
        state: formData.state,
        city: formData.city,
      });
    }
  }, [
    formData.fullName,
    formData.phone,
    formData.email,
    formData.dob,
    formData.timeOfBirth,
    formData.gender,
    formData.country,
    formData.state,
    formData.city,
  ]);

  // ?÷working fine in chrome

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState([]);
  // Fetch time slots for the selected date
  const fetchSlots = async (date) => {
    try {
      const formattedDate = date.toISOString().split("T")[0]; // Extract YYYY-MM-DD
      const res = await fetch(`/api/admin/getslot?date=${formattedDate}`);
      const data = await res.json();
      setTimeSlots(data.slots);
    } catch (error) {
      console.log(error);
    }
  };

  const [selectedTime, setSelectedTime] = useState(null);
  // console.log(selectedTime);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentStep === 1) fetchSlots(selectedDate);
  }, [currentStep, selectedDate]);

  const [svgUrl, setSvgUrl] = useState("");

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await fetch("/api/urgent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          tob: formData.timeOfBirth,
          dob: formData.dob,
          duration: duration,
          gender: formData.gender,
          svgUrl: svgdata,
          // svgUrl: svggg,
          latitude: formData.latitude,
          longitude: formData.longitude,
          country: formData.country,
          state: formData.state,
          city: formData.city,
          selectedTime: selectedTime,
          selectedDate: selectedDate,
          amount: "0.00", // 1 INR for testing
        }),
      });
      const data = await response.json();
      console.log(data);
      if (data.success == true) {
        toast.success(data.message);
        router.push("/urgent");
      }
    } catch (err) {
      setError("Failed to fetch data");
      toast.error(err);
    } finally {
      setLoading(false);
    }
  };

  const [paymentstatus, setPaymentStatus] = useState(false);
  const nextStep = () => {
    if (!formData.fullName) {
      toast.error("please enter your Full Name");
      return;
    }
    if (!formData.phone) {
      toast.error("please enter your Number");
      return;
    }

    if (!formData.email) {
      toast.error("please enter your working Email");
      return;
    }
    if (!formData.date && !formData.timeOfBirth) {
      toast.error("please enter your exact date and exact time with AM/PM");
      return;
    }
    if (!formData.gender) {
      toast.error("please specify your gender");
      return;
    }
    if (!formData.date && !formData.timeOfBirth) {
      toast.error("please add proper date and time");
      return;
    }

    // makeApiRequest(horoscopeDataa);

    // console.log(horoscopeDataa);

    if (currentStep == 0) {
      setSvgUrl(clients?.filePath);
      // console.log(clients?.filePath);
      // console.log(svgUrl);
      setCurrentStep(currentStep + 1);
    }
    if (currentStep == 1) {
      setSvgUrl(clients?.filePath);
      console.log(clients?.filePath);
      console.log(svgUrl);
      if (!selectedTime) {
        toast.error("please select time slot");
        return;
      }
      handleSubmit();
    }
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    // handleSubmitprokalara();
    // makeApiRequest(horoscopeData);
  };

  const prevStep = () => {
    if (currentStep === 2) {
      // setCurrentStep(4);
      handleSubmit();
    } else {
      if (currentStep > 0) setCurrentStep(currentStep - 1);
    }
  };

  // const [selectedDuration, setSelectedDuration] = useState(null); // Filter state
  // const filteredSlots = selectedDuration
  const [selectedDuration, setSelectedDuration] = useState(null); // Filter state

  // Filtered slots considering selected duration and current time logic
  const filteredSlots = (
    selectedDuration
      ? timeSlots.filter((slot) => slot.duration === selectedDuration)
      : timeSlots
  )
    .filter((slot) => {
      const now = new Date(); // Current date and time
      const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes(); // Convert current time to minutes

      // Parse the slot time (e.g., "10:00 AM" -> 10 * 60 + 0 = 600)
      const slotTime = slot.time.split(" - ")[0]; // Extract start time (e.g., "10:00 AM")
      let [hour, minute] = slotTime.match(/\d+/g).map(Number);
      const period = slotTime.includes("PM") ? "PM" : "AM";

      // Convert to 24-hour format
      if (period === "PM" && hour !== 12) hour += 12;
      if (period === "AM" && hour === 12) hour = 0;

      const slotTimeInMinutes = hour * 60 + minute;

      // Extract the date of the slot
      const slotDate = new Date(slot.date); // Assuming slot.date contains the full date (e.g., "2025-04-25T10:00:00Z")
      const slotDateString = slotDate.toDateString(); // String representation of the slot date

      // Compare slot date with current date to decide whether to show the slot
      const currentDateString = now.toDateString();

      // If the slot is today and the current time is after 6 PM, skip it
      if (slotDateString === currentDateString) {
        // Only show slots for today that are before or equal to 6 PM
        if (slotTimeInMinutes >= 18 * 60) {
          // 18:00 in minutes
          return false; // Skip if slot time is after 6 PM
        }
      }

      // Always show tomorrow's or future slots
      if (slotDate > now) {
        return true; // Always show slots for tomorrow or future dates
      }

      // Default return to ensure we include only valid slots for today and future
      return true;
    })
    .sort((a, b) => {
      const getTimeInMinutes = (time) => {
        let [hour, minute] = time.match(/\d+/g).map(Number);
        const period = time.includes("PM") ? "PM" : "AM";

        if (period === "PM" && hour !== 12) hour += 12;
        if (period === "AM" && hour === 12) hour = 0;

        return hour * 60 + minute;
      };

      return getTimeInMinutes(a.time) - getTimeInMinutes(b.time);
    });

  console.log(filteredSlots);
  console.log(timeSlots);
  return (
    <>
      {/* <Bookings /> */}

      <div className="max-w-4xl mt-0 mx-auto p-6 bg-white shadow-md h-full rounded-md">
        <div className="flex justify-center mb-6 max-md:flex-wrap">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`text-sm font-medium px-2 py-1 rounded-full flex items-center gap-3 justify-center ${
                index === currentStep ? " text-black" : "bg-gray300  opacity-50"
              }`}
            >
              <span
                className={`text-sm font-medium text-center h-6 w-6 rounded-full block ${
                  index === currentStep
                    ? "bg[#4597F8] border-[#4597F8] text-[#4597F8] textblack border-[2px]"
                    : "bg-gray-300  border-[1px]"
                }`}
              >
                {index + 1}
              </span>

              {step}
            </div>
          ))}
        </div>

        {currentStep === 0 && (
          <div className=" flex flex-col mt-10 items-center justify-center">
            <div className="flex flex-col mb-10 items-start justify-start w-full">
              <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
              <p className="text-[16px] font-normal mb-4">
                Enter your last used phone number to confirm.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-7 max-md:grid-cols-1 booking-form">
              <label className="block mb-2">
                Phone Number *
                <PhoneInput
                  country={"in"} // Default country (India)
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                  inputClass="border p-2 rounded w-full border-[#E4E4E4]"
                  containerClass="w-full"
                  enableSearch={true} // Allows country search
                />
              </label>

              <label className="text-[16px]">
                Full Name *
                <input
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  className="border p-2 rounded w-full border-[#E4E4E4]"
                />
              </label>
              <label>
                Email ID *
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="johndoe@gmail.com"
                  value={formData.email}
                  className="border p-2 rounded w-full border-[#E4E4E4]"
                />
              </label>
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-4 h[400px] max-md:h[700px]">
            <h2 className="text-lg font-semibold">Select Date & Time</h2>
            <div className="flex items-center justify-center gap-10 max-md:flex-wrap max-md:h-full">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                minDate={new Date()}
                inline
                className="border rounded p-2 w-full"
              />
              <div>
                <h2 className="text-md font-normal pb-4">
                  Select a Convenient Time
                </h2>

                <div className="flex gap-2 mb-4">
                  <button
                    onClick={() => setSelectedDuration(7)}
                    className={`p-2 border w-full rounded ${
                      selectedDuration === 7
                        ? "bgblue-500 text-[#4597F8] border-[#4597F8]"
                        : "bg-white border-[#E4E4E4]"
                    }`}
                  >
                    7 Min
                  </button>
                  <button
                    onClick={() => setSelectedDuration(15)}
                    className={`p-2 border w-full rounded ${
                      selectedDuration === 15
                        ? "bgblue-500 text-[#4597F8] border-[#4597F8]"
                        : "bg-white border-[#E4E4E4]"
                    }`}
                  >
                    15 Min
                  </button>
                  <button
                    onClick={() => setSelectedDuration(30)}
                    className={`p-2 border  w-full  rounded ${
                      selectedDuration === 30
                        ? "bgblue-500 text-[#4597F8] border-[#4597F8]"
                        : "bg-white border-[#E4E4E4]"
                    }`}
                  >
                    30 Min
                  </button>
                  <button
                    onClick={() => setSelectedDuration(45)} // Show all slots
                    className={`p-2 border  w-full  rounded ${
                      selectedDuration === 45
                        ? "bgblue-500 text-[#4597F8] border-[#4597F8]"
                        : "bg-white border-[#E4E4E4]"
                    }`}
                  >
                    45 Min
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {filteredSlots
                    .filter((slot) => {
                      // Skip if slot is not available
                      if (slot.status !== "available") return false;

                      const now = new Date(); // Current date and time
                      const selectedDates = new Date(selectedDate); // The date being viewed

                      // If selected date is in the future, show all available slots
                      if (selectedDates > now) return true;

                      // If selected date is today, check times
                      if (selectedDates.toDateString() === now.toDateString()) {
                        const currentTimeInMinutes =
                          now.getHours() * 60 + now.getMinutes();

                        // Extract the start time (e.g., "10:00 AM")
                        const startTime = slot.time.split(" - ")[0];
                        let [hour, minute] = startTime
                          .match(/\d+/g)
                          .map(Number);
                        const period = startTime.includes("PM") ? "PM" : "AM";

                        // Convert to 24-hour format
                        if (period === "PM" && hour !== 12) hour += 12;
                        if (period === "AM" && hour === 12) hour = 0;

                        const slotTimeInMinutes = hour * 60 + minute;

                        // Show slots that are after current time AND before or equal to 6 PM (18:00)
                        return (
                          slotTimeInMinutes >= currentTimeInMinutes &&
                          hour <= 18
                        );
                      }

                      // If selected date is in the past, hide all slots
                      return false;
                    })
                    .sort((a, b) => {
                      // Keep your existing sorting logic
                      const getTimeInMinutes = (time) => {
                        let [hour, minute] = time.match(/\d+/g).map(Number);
                        const period = time.includes("PM") ? "PM" : "AM";

                        if (period === "PM" && hour !== 12) hour += 12;
                        if (period === "AM" && hour === 12) hour = 0;

                        return hour * 60 + minute;
                      };

                      return (
                        getTimeInMinutes(a.time) - getTimeInMinutes(b.time)
                      );
                    })
                    .map((slot) => (
                      <button
                        key={slot._id}
                        disabled={slot.status === "booked"}
                        onClick={() => {
                          setSelectedTime(slot.time);
                          setDuration(slot.duration);
                        }}
                        className={`p-2 rounded text-sm border ${
                          slot.status === "available"
                            ? selectedTime === slot.time
                              ? "bg-blue-500 text-white"
                              : "bg-green-200 hover:bg-green-300"
                            : "bg-red-200 hover:bg-red-300"
                        }`}
                      >
                        {slot.time}
                      </button>
                    ))}
                  {filteredSlots.length === 0 && (
                    <p className="text-gray-500 col-span-3 text-center">
                      No slots available
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          className={`mt-6 flex max-md:flex-col max-md:gap-6 ${
            currentStep === 0 ? "justify-center" : "justify-between"
          }`}
        >
          {currentStep > 0 && (
            <button
              onClick={prevStep}
              className={`px-8 py-2 border border-[#E4E4E4] text-black rounded ${
                currentStep === 2
                  ? "bg-[#4597F8] text-white text-lg font-bold px-12 py-3"
                  : ""
              }`}
            >
              Back
            </button>
          )}

          {/* {currentStep < steps.length - 1 && ( */}
          <button
            onClick={nextStep}
            // disabled={loading}
            className="px-10 py-2 bg-[#4597F8] text-white rounded flex items-center justify-center gap-2"
          >
            {currentStep === 1 ? "Submit" : "Next"}
          </button>
          {/* )} */}
        </div>
      </div>

      {loading && (
        <div className="fixed inset-0 bg-[#00000065] bg-opacity-80 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white border-opacity-75"></div>
        </div>
      )}
    </>
  );
}

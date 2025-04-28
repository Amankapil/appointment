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
import OverseasPayment from "./OverseasPayment";
import OverseasThank from "./OverseasThank";

import { DateTime } from "luxon";

const steps = [
  "Personal Details",
  // "Questions",
  "Appointment",
  "Confirmation",
  "Payment",
];

export default function OverseasNew({ selectedTimezone }) {
  const [currentStep, setCurrentStep] = useState(0);

  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const [latloading, setlatLoading] = useState(false);

  const [lathoroscope, setlathoroscope] = useState(null);
  const [longhoroscope, setlonghoroscope] = useState(null);

  const handleCityChange = async (selected) => {
    setlatLoading(true);
    const city = selected.value;
    setFormData({ ...formData, city });

    if (formData.country && formData.state && city) {
      try {
        const apiKey = "7bff259ba7ff49bd8d7e7a0db4666a20"; // Replace with your OpenCage API key
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${city},${formData.state},${formData.country}&key=${apiKey}`
        );

        const data = await response.json();

        console.log(data);
        console.log(data.results[0].geometry);
        if (data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry;
          setFormData((prev) => ({
            ...prev,
            latitude: lat,
            longitude: lng,
          }));
          setlathoroscope(lat);
          setlonghoroscope(lng);
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      } finally {
        setlatLoading(false);
      }
    }
  };

  const [horoscopeDataa, setHoroscopeData] = useState({
    day: new Date().getDate(),
    month: new Date().getMonth() + 1, // Months are 0-indexed in JavaScript
    year: new Date().getFullYear(),
    hour: new Date().getHours(),
    min: new Date().getMinutes(),
    lat: lathoroscope,
    lon: longhoroscope,
    tzone: 5.5, // Default timezone
  });
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
  useEffect(() => {
    if (formData.dob && formData.timeOfBirth) {
      const [year, month, day] = formData.dob.split("-").map(Number);
      const [hour, min] = formData.timeOfBirth.split(":").map(Number);
      console.log("Raw formData:", formData);
      const lat = formData.latitude;
      const lon = formData.longitude;
      setHoroscopeData({
        day,
        month,
        year,
        hour,
        min,
        lat: lathoroscope,
        lon: longhoroscope,
        tzone: 5.5, // Adjust this if needed
      });
    }
  }, [
    formData,
    formData.dob,
    longhoroscope,
    lathoroscope,
    formData.timeOfBirth,
    formData.latitude,
    formData.longitude,
  ]);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState([]);
  // Fetch time slots for the selected date
  // const fetchSlots = async (date) => {
  //   try {
  //     const formattedDate = date.toISOString().split("T")[0]; // Extract YYYY-MM-DD
  //     const res = await fetch(`/api/admin/getslot?date=${formattedDate}`);
  //     const data = await res.json();
  //     setTimeSlots(data.slots);
  //     console.log(data.slots);
  //     console.log(data.slots[0].duration);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const fetchSlots = async (date) => {
    try {
      const formattedDate = date.toISOString().split("T")[0]; // YYYY-MM-DD
      const res = await fetch(`/api/admin/getslot?date=${formattedDate}`);
      const data = await res.json();
      //   console.log(data);

      // Convert stored IST slots to UTC and retain status & duration
      const filteredSlots = data.slots
        .map((slot) => {
          const [startTime, endTime] = slot.time.split(" - ");

          // Convert IST times to UTC
          const startUTC = DateTime.fromFormat(startTime, "h:mm a", {
            zone: "Asia/Kolkata",
          }).toUTC();

          const endUTC = DateTime.fromFormat(endTime, "h:mm a", {
            zone: "Asia/Kolkata",
          }).toUTC();

          return {
            startUTC,
            endUTC,
            status: slot.status,
            duration: slot.duration,
          };
        })
        .filter((slot) => {
          const hour = slot.startUTC.hour;
          return hour >= 4 && hour <= 12; // 10 AM - 6 PM IST in UTC (4 AM - 12 PM)
        });

      //   console.log(filteredSlots);

      setTimeSlots(filteredSlots);
    } catch (error) {
      console.log("Error fetching slots:", error);
    }
  };
  const convertSlotsToTimezone = () => {
    return timeSlots.map((slot) => {
      const startDateTime = slot.startUTC.setZone(selectedTimezone);
      const endDateTime = slot.endUTC.setZone(selectedTimezone);

      return {
        timeRange: `${startDateTime.toFormat(
          "h:mm a"
        )} - ${endDateTime.toFormat("h:mm a")}`,
        status: slot.status,
        duration: slot.duration,
        istTime: `${slot.startUTC
          .setZone("Asia/Kolkata")
          .toFormat("h:mm a")} - ${slot.endUTC
          .setZone("Asia/Kolkata")
          .toFormat("h:mm a")}`, // Store IST time
      };
    });
  };

  const convertedSlots = convertSlotsToTimezone();

  const [selectedTime, setSelectedTime] = useState(null);
  // console.log(selectedTime);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentStep === 1) fetchSlots(selectedDate);
  }, [currentStep, selectedDate]);

  const userId = "637630";
  const apiKey = "d749395941556d92772b002cc738fd79ae63d73b";
  const language = "hi";

  const [svgUrl, setSvgUrl] = useState("");
  const [svgdata, setSvgData] = useState("");

  const uploadToCloudinary = async (blob) => {
    try {
      // Convert blob to File
      const file = new File([blob], "image.svg", { type: "image/svg+xml" });

      // Create FormData to send to Cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "horoscope"); // Replace with your Cloudinary preset
      formData.append("resource_type", "raw");
      // Upload to Cloudinary
      const cloudinaryResponse = await fetch(
        "https://api.cloudinary.com/v1_1/dpmmcn7zv/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await cloudinaryResponse.json();
      // toast.success("Cloudinary Upload Success");

      if (data.secure_url) {
        console.log("SVG URL:", data.secure_url);
        return data.secure_url;
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
    }
  };

  const makeApiRequest = async (horoscopeData1) => {
    const {
      day,
      month,
      year,
      hour,
      min,
      lat,
      lon,
      chart_type = "lagna",
      chart_style = "south-indian",
      format = "svg",
      la = "en",
      upagraha_position = "middle",
      timezone = "+05:30", // Ensure this is correct
    } = horoscopeData1;

    console.log("Received Horoscope Data:", horoscopeData1);

    if (
      day == null ||
      month == null ||
      year == null ||
      hour == null ||
      min == null ||
      lat == null ||
      lon == null
    ) {
      console.log("Missing required horoscope data", horoscopeData1);
      return;
    }

    // Function to format datetime correctly with timezone offset
    const formatDateTimeWithOffset = (
      year,
      month,
      day,
      hour,
      min,
      timezone
    ) => {
      const pad = (num) => String(num).padStart(2, "0");

      // Ensure the timezone is correctly formatted
      let formattedTimezone = timezone.trim();
      if (formattedTimezone === "Z") {
        formattedTimezone = "+00:00"; // Convert 'Z' to UTC offset
      }

      return `${year}-${pad(month)}-${pad(day)}T${pad(hour)}:${pad(
        min
      )}:00${formattedTimezone}`;
    };

    // Get properly formatted datetime
    const datetime = formatDateTimeWithOffset(
      year,
      month,
      day,
      hour,
      min,
      timezone
    );

    // Encode the datetime properly
    const encodedDatetime = encodeURIComponent(datetime);

    // Construct API URL
    const coordinates = `${lat},${lon}`;
    const apiUrl = `/api/kundli?ayanamsa=1&coordinates=${coordinates}&datetime=${encodedDatetime}&chart_type=${chart_type}&chart_style=${chart_style}&format=${format}&la=${la}&upagraha_position=${upagraha_position}`;

    console.log("Formatted API URL:", apiUrl);

    try {
      const response = await fetch(apiUrl, { method: "GET" });
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

      const blob = await response.blob();
      console.log("Blob Response:", blob);

      const cloudinaryUrl = await uploadToCloudinary(blob);

      if (cloudinaryUrl) {
        console.log("SVG Uploaded to Cloudinary:", cloudinaryUrl);
      }

      const objectUrl = URL.createObjectURL(blob);
      setSvgUrl(objectUrl);
      setSvgData(cloudinaryUrl);
      console.log("API Response:", objectUrl);
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };

  const [indiantimetoesend, setindiantimetosend] = useState(null);

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);

    // const svgBase64 = await blobToBase64(svgdata);
    // const svggg = localStorage.getItem("svg");
    try {
      const response = await fetch("/api/overseas/urgent", {
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
          latitude: lathoroscope,
          longitude: longhoroscope,
          // svgUrl: svggg,
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

  const [actualTime, setActualTime] = useState(null);

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

    if (currentStep == 0) {
      makeApiRequest(horoscopeDataa);
      console.log(horoscopeDataa);
      setCurrentStep(currentStep + 1);
    }
    if (currentStep == 1) {
      if (!selectedTime) {
        toast.error("please select time slot");
        return;
      }
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

  const [selectedDuration, setSelectedDuration] = useState(null); // Filter state
  const filteredSlots = selectedDuration
    ? timeSlots.filter((slot) => slot.duration === selectedDuration)
    : timeSlots;

  return (
    <>
      {/* <Bookings /> */}

      <div className="max-w-4xl mt-0 mx-auto p-6 bg-white shadow-md h-full rounded-md">
        <div className="flex justify-between mb-6 max-md:flex-wrap">
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
                Your essential details for a personalized consultation.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-7 max-md:grid-cols-1 booking-form">
              <label className="text-[16px]">
                Full Name *
                <input
                  name="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="border p-2 rounded w-full border-[#E4E4E4]"
                />
              </label>
              {/* <label>
                Phone Number *
                <input
                  name="phone"
                  type="number"
                  required
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border p-2 rounded w-full border-[#E4E4E4]"
                />
              </label> */}
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
              {/* <label>
                Phone Number *
                <input
                  name="phone"
                  type="number"
                  required
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border p-2 rounded w-full border-[#E4E4E4]"
                />
              </label> */}

              <label>
                Email ID *
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="johndoe@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="border p-2 rounded w-full border-[#E4E4E4]"
                />
              </label>
              <label>
                Date of Birth *
                <input
                  name="dob"
                  type="date"
                  placeholder="dd/mm/yyyy"
                  // pattern="\d{4}-\d{2}-\d{2}"
                  required
                  value={formData.dob}
                  onChange={handleChange}
                  className="border p-2 rounded w-full border-[#E4E4E4]"
                />
                {/* <DatePicker onChange={handleChange} />; */}
              </label>
              {/* <label>
                Time of Birth *
                <input
                  name="timeOfBirth"
                  type="time"
                  value={formData.timeOfBirth}
                  onChange={handleChange}
                  className="border p-2 rounded w-full border-[#E4E4E4]"
                />
              </label> */}

              <label className="relative flex items-start justify-center flex-col">
                Time of Birth*
                <div className="flex justify-center items-center max-md:w-full">
                  <input
                    name="timeOfBirth"
                    type="time"
                    value={formData.timeOfBirth}
                    onChange={handleChange}
                    className="border p-2 rounded wfull border-[#E4E4E4] ml-2 max-md:ml-0  w-[240px] max-md:w-full"
                  />
                  <span className="ml-2 relative group">
                    <span className="text-gray-400 cursor-pointer border border-gray-300 rounded-full w-5 h-5 flex items-center justify-center">
                      i
                    </span>
                    <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 z-[9999] w-60 max-md:w-full p-2 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      Not sure about your exact birth time? Simply enter 11:00
                      AM —
                      <br />
                      Vedic Prashna will still guide you with the answers you
                      seek, through Divine grace.{" "}
                    </span>
                  </span>
                </div>
              </label>

              <label>
                Gender *
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="border p-2 rounded w-full border-[#E4E4E4]"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <label>
                Country *
                <Select
                  options={Country.getAllCountries().map((c) => ({
                    label: c.name,
                    value: c.isoCode,
                  }))}
                  className="w-full"
                  onChange={(selected) =>
                    setFormData({
                      ...formData,
                      country: selected.value,
                      state: "",
                      city: "",
                    })
                  }
                />
              </label>
              <label>
                State *
                <Select
                  options={State.getStatesOfCountry(formData.country).map(
                    (s) => ({ label: s.name, value: s.isoCode })
                  )}
                  className="w-full"
                  onChange={(selected) =>
                    setFormData({
                      ...formData,
                      state: selected.value,
                      city: "",
                    })
                  }
                />
              </label>
              {/* <label>
              City
              <Select
                options={City.getCitiesOfState(
                  formData.country,
                  formData.state
                ).map((c) => ({ label: c.name, value: c.name }))}
                className="w-full"
                onChange={(selected) =>
                  setFormData({ ...formData, city: selected.value })
                }
              />
            </label> */}
              <label>
                City *
                <Select
                  options={City.getCitiesOfState(
                    formData.country,
                    formData.state
                  ).map((c) => ({
                    label: c.name,
                    value: c.name,
                  }))}
                  className="w-full"
                  onChange={handleCityChange}
                />
              </label>

              <label>
                Marital Status *
                <select
                  name="material"
                  value={formData.material}
                  onChange={handleChange}
                  className="border p-2 rounded w-full border-[#E4E4E4]"
                >
                  <option value="">Select status</option>
                  <option value="Male">married</option>
                  <option value="Female">Unmarried</option>
                  <option value="single">Single</option>
                  <option value="Other">Comitted</option>
                </select>
              </label>

              <label>
                Latitude
                <input
                  name="latitude"
                  type="text"
                  placeholder="Latitude"
                  value={formData.latitude}
                  onChange={handleChange}
                  className="border p-2 rounded w-full border-[#E4E4E4]"
                />
              </label>
              <label>
                Longitude
                <input
                  name="longitude"
                  type="text"
                  placeholder="longitude"
                  value={formData.longitude}
                  onChange={handleChange}
                  className="border p-2 rounded w-full border-[#E4E4E4]"
                />
              </label>
            </div>
          </div>
        )}

        {/* {currentStep === 1 && (
        <Questions
          formData={formData}
          handleQuestionChange={handleQuestionChange}
        />
      )} */}

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
                {/* <div className="grid grid-cols-3 gap-2">
                {timeSlots?.map((slot) => (
                  <button
                    key={slot.time}
                    disabled={slot.status === "booked"} // Disable if booked
                    onClick={() => {
                      setSelectedTime(slot.time);
                      setDuration(slot.duration);
                    }}
                    className={`p-2 rounded text-sm border 
      ${
        slot.status === "available"
          ? selectedTime === slot.time
            ? "bg-blue-500 text-white" // Selected slot
            : "bg-green-200 hover:bg-green-300"
          : "bg-red-200 hover:bg-red-300"
      }`}
                  >
                    {slot.time}
                  </button>
                ))}
              </div> */}

                <div className="flex gap-2 mb-4">
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

                {/* Time Slots */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {convertedSlots.length > 0 ? (
                    convertedSlots.map((slot, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedTime(slot.timeRange);
                          setDuration(slot.duration);
                          setindiantimetosend(slot.istTime);
                          setActualTime(slot.timeRange);
                        }}
                        // className="p-2 rounded text-sm border bg-green-200 hover:bg-green-300"
                        className={`p-2 rounded text-sm border 
        ${
          slot.status === "available"
            ? selectedTime === slot.timeRange
              ? "bg-blue-500 text-white" // Selected slot
              : "bg-green-200 hover:bg-green-300"
            : "bg-red-200 hover:bg-red-300"
        }`}
                      >
                        {slot.timeRange}{" "}
                      </button>
                    ))
                  ) : (
                    <p className="text-gray-500 col-span-3 text-center">
                      No slots available
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Confirmation</h2>
            {/* <pre className="bg-gray-100 p-4 rounded"> */}
            {/* {JSON.stringify(formData, null, 2)} */}
            <OverseasThank
              formData={formData}
              selectedTime={indiantimetoesend}
              duration={duration}
              actualTime={actualTime}
              result={result}
              error={error}
              svgUrl={svgdata}
              selectedDate={selectedDate}
            />
            {/* </pre> */}
          </div>
        )}
        {currentStep === steps.length - 1 && (
          <h2 className="text-xl font-semibold mb-4 text-center">
            <OverseasPayment
              setPaymentStatus={setPaymentStatus}
              paydata={paydata}
              actualTime={actualTime}
              selectedTime={indiantimetoesend}
              latitude={formData.latitude}
              longitude={formData.longitude}
              // svgUrl={svgUrl}
              duration={duration}
              svgdata={svgdata}
              selectedDate={selectedDate}
            />
          </h2>
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
              {currentStep === 2
                ? loading
                  ? "Processing please wait"
                  : "Urgent Query"
                : "Back"}
            </button>
          )}

          {currentStep < steps.length - 1 && (
            <button
              onClick={nextStep}
              disabled={loading}
              className="px-10 py-2 bg-[#4597F8] text-white rounded flex items-center justify-center gap-2"
            >
              {currentStep === 2
                ? "Checkout for Payment"
                : latloading
                ? "Fetching latitude"
                : "Next"}{" "}
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.83337 10H17.1667M17.1667 10L12.1667 5M17.1667 10L12.1667 15"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
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

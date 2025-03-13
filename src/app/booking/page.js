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

const steps = [
  "Personal Details",
  // "Questions",
  "Appointment",
  "Confirmation",
  "Payment",
];

export default function MultiStepForm() {
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

  const handleQuestionChange = (question) => {
    setFormData((prev) => ({
      ...prev,
      selectedQuestions: prev.selectedQuestions.includes(question)
        ? prev.selectedQuestions.filter((q) => q !== question)
        : [...prev.selectedQuestions, question],
    }));
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
  // useEffect(() => {
  //   if (formData.dob && formData.timeOfBirth) {
  //     console.log("Raw formData:", formData); // Debugging

  //     // Validate and split date of birth
  //     const dobParts = formData.dob.split("-");
  //     const timeParts = formData.timeOfBirth.split(":");

  //     if (dobParts.length !== 3 || timeParts.length !== 2) {
  //       console.error(
  //         "Invalid date or time format:",
  //         formData.dob,
  //         formData.timeOfBirth
  //       );
  //       return;
  //     }

  //     const [year, month, day] = dobParts.map(Number);
  //     const [hour, min] = timeParts.map(Number);

  //     // Validate numeric values before setting state
  //     if (
  //       isNaN(year) ||
  //       isNaN(month) ||
  //       isNaN(day) ||
  //       isNaN(hour) ||
  //       isNaN(min)
  //     ) {
  //       console.error("Invalid numeric values in date/time");
  //       return;
  //     }

  //     // Parse latitude & longitude
  //     const lat = parseFloat(formData.latitude);
  //     const lon = parseFloat(formData.longitude);

  //     // Update horoscopeData only if new values are provided
  //     setHoroscopeData((prevData) => ({
  //       ...prevData, // Keep existing values if no new values are provided
  //       day: !isNaN(day) ? day : prevData.day,
  //       month: !isNaN(month) ? month : prevData.month,
  //       year: !isNaN(year) ? year : prevData.year,
  //       hour: !isNaN(hour) ? hour : prevData.hour,
  //       min: !isNaN(min) ? min : prevData.min,
  //       lat: lat,
  //       lon: lon,
  //     }));

  //     console.log("Updated Horoscope Data:", {
  //       day: !isNaN(day) ? day : horoscopeData.day,
  //       month: !isNaN(month) ? month : horoscopeData.month,
  //       year: !isNaN(year) ? year : horoscopeData.year,
  //       hour: !isNaN(hour) ? hour : horoscopeData.hour,
  //       min: !isNaN(min) ? min : horoscopeData.min,
  //       lat: !isNaN(lat) ? lat : horoscopeData.lat,
  //       lon: !isNaN(lon) ? lon : horoscopeData.lon,
  //     });
  //   }
  // }, [
  //   formData,
  //   formData.dob,
  //   formData.timeOfBirth,
  //   formData.latitude,
  //   formData.longitude,
  // ]);
  // console.log(horoscopeData);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState([]);
  // Fetch time slots for the selected date
  const fetchSlots = async (date) => {
    try {
      const formattedDate = date.toISOString().split("T")[0]; // Extract YYYY-MM-DD
      const res = await fetch(`/api/admin/getslot?date=${formattedDate}`);
      const data = await res.json();
      setTimeSlots(data.slots);
      console.log(data.slots);
      console.log(data.slots[0].duration);
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

  const userId = "637630";
  const apiKey = "d749395941556d92772b002cc738fd79ae63d73b";
  const language = "hi";

  const [svgUrl, setSvgUrl] = useState("");
  const [svgdata, setSvgData] = useState("");
  // working fine in chrome
  // const makeApiRequest = async (horoscopeData) => {
  //   const {
  //     day,
  //     month,
  //     year,
  //     hour,
  //     min,
  //     lat,
  //     lon,
  //     tzone,
  //     chart_type = "rasi",
  //     chart_style = "south-indian",
  //     format = "svg",
  //     la = "en", // Default language is English
  //     upagraha_position = "middle",
  //   } = horoscopeData;

  //   // Ensure month and day are two digits (zero-padded)
  //   const formattedMonth = String(month).padStart(2, "0");
  //   const formattedDay = String(day).padStart(2, "0");
  //   const formattedHour = String(hour).padStart(2, "0");
  //   const formattedMin = String(min).padStart(2, "0");

  //   // Construct a valid ISO date string
  //   // const datetime = new Date(
  //   //   `${year}-${formattedMonth}-${formattedDay}T${formattedHour}:${formattedMin}:00Z`
  //   // ).toISOString();
  //   const datetime = `${year}-${formattedMonth}-${formattedDay}T${formattedHour}:${formattedMin}:00+00:00`;

  //   const coordinates = `${lat},${lon}`;

  //   const apiUrl = `/api/kundli?ayanamsa=1&coordinates=${coordinates}&datetime=${encodeURIComponent(
  //     datetime
  //   )}&chart_type=${chart_type}&chart_style=${chart_style}&format=${format}&la=${la}&upagraha_position=${upagraha_position}`;

  //   console.log("Formatted datetime:", datetime); // Debugging

  //   try {
  //     const response = await fetch(apiUrl, {
  //       method: "GET",
  //     });
  //     const blob = await response.blob();
  //     console.log("blob Response:", blob);
  //     const objectUrl = URL.createObjectURL(blob);
  //     setSvgUrl(objectUrl);
  //     console.log(objectUrl);
  //     // const data = await response.json();
  //     // console.log(data.svg);
  //     setSvgData(blob);

  //     console.log("API Response:", objectUrl);
  //   } catch (error) {
  //     console.error("Error calling API:", error);
  //   }
  // };

  const [pdfUrl, setpdfUrl] = useState("");
  const [pdfdata, setpdfData] = useState("");

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
    } = horoscopeData1;

    console.log("Received Horoscope Data:", horoscopeData1);

    // Validate each field to ensure they are not undefined or null
    if (
      day == null ||
      month == null ||
      year == null ||
      hour == null ||
      min == null ||
      lat == null ||
      lon == null
    ) {
      console.log("Missing required horoscope data: line 371", horoscopeData1);
      return;
    }

    // Ensure all values are properly formatted
    const formattedMonth = String(month).padStart(2, "0");
    const formattedDay = String(day).padStart(2, "0");
    const formattedHour = String(hour).padStart(2, "0");
    const formattedMin = String(min).padStart(2, "0");

    // Fix for Safari - Use Date.UTC() for reliable datetime conversion
    const datetime = new Date(
      Date.UTC(year, month - 1, day, hour, min, 0)
    ).toISOString();

    // Encode URL components properly
    const coordinates = `${lat},${lon}`;
    const encodedDatetime = encodeURIComponent(datetime);
    const apiUrl = `/api/kundli?ayanamsa=1&coordinates=${coordinates}&datetime=${encodedDatetime}&chart_type=${chart_type}&chart_style=${chart_style}&format=${format}&la=${la}&upagraha_position=${upagraha_position}`;
    console.log("Formatted API URL:", apiUrl);

    try {
      const response = await fetch(apiUrl, { method: "GET" });

      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

      const blob = await response.blob();
      console.log("Blob Response:", blob);

      const objectUrl = URL.createObjectURL(blob);
      setSvgUrl(objectUrl);
      setSvgData(blob);
      console.log("API Response:", objectUrl);
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);
    const blobToBase64 = (blob) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
      });
    };
    const svgBase64 = await blobToBase64(svgdata);
    // const svggg = localStorage.getItem("svg");
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
          gender: formData.gender,
          svgUrl: svgBase64,
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

    makeApiRequest(horoscopeDataa);
    console.log(horoscopeDataa);

    if (currentStep == 0) {
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
      <div className="w-full  text-black p-5 transition-all  top-">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="flex items-center justify-center gap-2">
              <Image src={logo} alt="kl" />
              <span className="font-salernomi text-[#322F41] font-[16px]">
                Prashna Siddhi
              </span>
            </Link>
          </div>

          <div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.0005 23C21.6573 23 23.0005 21.6569 23.0005 20C23.0005 18.3431 21.6573 17 20.0005 17C18.3436 17 17.0005 18.3431 17.0005 20C17.0005 21.6569 18.3436 23 20.0005 23Z"
                stroke="#2D2D2D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.2896 27.3711L17.874 28.6856C18.0478 29.0768 18.3313 29.4093 18.6902 29.6426C19.0492 29.8759 19.4681 30.0001 19.8962 30C20.3244 30.0001 20.7433 29.8759 21.1022 29.6426C21.4612 29.4093 21.7447 29.0768 21.9185 28.6856L22.5029 27.3711C22.711 26.9047 23.0609 26.5159 23.5029 26.26C23.9477 26.0034 24.4622 25.8941 24.9729 25.9478L26.4029 26.1C26.8286 26.145 27.2582 26.0656 27.6396 25.8713C28.021 25.6771 28.3379 25.3763 28.5518 25.0056C28.766 24.635 28.868 24.2103 28.8455 23.7829C28.823 23.3555 28.677 22.9438 28.4251 22.5978L27.5785 21.4344C27.277 21.0171 27.1159 20.5148 27.1185 20C27.1184 19.4866 27.281 18.9864 27.5829 18.5711L28.4296 17.4078C28.6814 17.0617 28.8275 16.6501 28.85 16.2227C28.8725 15.7953 28.7704 15.3705 28.5562 15C28.3423 14.6292 28.0255 14.3285 27.644 14.1342C27.2626 13.94 26.833 13.8605 26.4074 13.9056L24.9774 14.0578C24.4667 14.1114 23.9521 14.0021 23.5074 13.7456C23.0645 13.4883 22.7144 13.0974 22.5074 12.6289L21.9185 11.3144C21.7447 10.9232 21.4612 10.5907 21.1022 10.3574C20.7433 10.1241 20.3244 9.99993 19.8962 10C19.4681 9.99993 19.0492 10.1241 18.6902 10.3574C18.3313 10.5907 18.0478 10.9232 17.874 11.3144L17.2896 12.6289C17.0825 13.0974 16.7324 13.4883 16.2896 13.7456C15.8448 14.0021 15.3302 14.1114 14.8196 14.0578L13.3851 13.9056C12.9595 13.8605 12.5299 13.94 12.1484 14.1342C11.767 14.3285 11.4501 14.6292 11.2362 15C11.0221 15.3705 10.92 15.7953 10.9425 16.2227C10.965 16.6501 11.111 17.0617 11.3629 17.4078L12.2096 18.5711C12.5115 18.9864 12.6741 19.4866 12.674 20C12.6741 20.5134 12.5115 21.0137 12.2096 21.4289L11.3629 22.5922C11.111 22.9382 10.965 23.3499 10.9425 23.7773C10.92 24.2047 11.0221 24.6295 11.2362 25C11.4504 25.3706 11.7673 25.6712 12.1486 25.8654C12.53 26.0596 12.9595 26.1392 13.3851 26.0944L14.8151 25.9422C15.3258 25.8886 15.8403 25.9979 16.2851 26.2544C16.7297 26.511 17.0813 26.902 17.2896 27.3711Z"
                stroke="#2D2D2D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mt-10 mx-auto p-6 bg-white shadow-md h-full rounded-md">
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
            <div className="grid grid-cols-3 gap-7 max-md:grid-cols-2 ">
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
              <label>
                Time of Birth *
                <input
                  name="timeOfBirth"
                  type="time"
                  value={formData.timeOfBirth}
                  onChange={handleChange}
                  className="border p-2 rounded w-full border-[#E4E4E4]"
                />
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
                <div className="grid grid-cols-3 gap-2">
                  {filteredSlots.length > 0 ? (
                    filteredSlots.map((slot) => (
                      <button
                        key={slot._id}
                        disabled={slot.status === "booked"}
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
            <ThankYouScreen
              formData={formData}
              selectedTime={selectedTime}
              duration={duration}
              result={result}
              error={error}
              svgUrl={svgUrl}
              selectedDate={selectedDate}
            />
            {/* </pre> */}
          </div>
        )}
        {currentStep === steps.length - 1 && (
          <h2 className="text-xl font-semibold mb-4 text-center">
            <PaymentButton
              setPaymentStatus={setPaymentStatus}
              paydata={paydata}
              selectedTime={selectedTime}
              // svgUrl={svgUrl}
              duration={duration}
              svgdata={svgdata}
              selectedDate={selectedDate}
            />
          </h2>
        )}

        <div className="mt-6 flex justify-between">
          {currentStep > 0 && (
            <button
              onClick={prevStep}
              className="px-8 py-2 border border-[#E4E4E4] bggray-500 text-black w] rounded"
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
              {latloading ? "Fetching latitude" : "Next"}{" "}
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
    </>
  );
}

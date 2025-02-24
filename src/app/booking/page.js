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

const steps = [
  "Personal Details",
  "Questions",
  "Appointment",
  "Confirmation",
  "Payment",
];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    dob: "",
    timeOfBirth: "",
    gender: "",
    country: "",
    state: "",
    city: "",
    maritalStatus: "",
    latitude: "",
    longitude: "",
    selectedQuestions: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQuestionChange = (question) => {
    setFormData((prev) => ({
      ...prev,
      selectedQuestions: prev.selectedQuestions.includes(question)
        ? prev.selectedQuestions.filter((q) => q !== question)
        : [...prev.selectedQuestions, question],
    }));
  };

  const handleCityChange = async (selected) => {
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
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    }
  };

  const [horoscopeData, setHoroscopeData] = useState({
    day: null,
    month: null,
    year: null,
    hour: null,
    min: null,
    lat: null,
    lon: null,
    tzone: 5.5, // Default time zone (adjust as needed)
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
  useEffect(() => {
    if (formData.dob && formData.timeOfBirth) {
      const [year, month, day] = formData.dob.split("-").map(Number);
      const [hour, min] = formData.timeOfBirth.split(":").map(Number);

      setHoroscopeData({
        day,
        month,
        year,
        hour,
        min,
        lat: parseFloat(formData.latitude) || null,
        lon: parseFloat(formData.longitude) || null,
        tzone: 5.5, // Adjust this if needed
      });
    }
  }, [
    formData.dob,
    formData.timeOfBirth,
    formData.latitude,
    formData.longitude,
  ]);
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
    if (currentStep === 2) fetchSlots(selectedDate);
  }, [currentStep, selectedDate]);

  const userId = "637630";
  const apiKey = "d749395941556d92772b002cc738fd79ae63d73b";
  const language = "hi";

  const [svgUrl, setSvgUrl] = useState("");

  const makeApiRequest = async (horoscopeData) => {
    const {
      day,
      month,
      year,
      hour,
      min,
      lat,
      lon,
      tzone,
      chart_type = "rasi",
      chart_style = "south-indian",
      format = "svg",
      la = "en", // Default language is English
      upagraha_position = "middle",
    } = horoscopeData;

    // Ensure month and day are two digits (zero-padded)
    const formattedMonth = String(month).padStart(2, "0");
    const formattedDay = String(day).padStart(2, "0");
    const formattedHour = String(hour).padStart(2, "0");
    const formattedMin = String(min).padStart(2, "0");

    // Construct a valid ISO date string
    const datetime = new Date(
      `${year}-${formattedMonth}-${formattedDay}T${formattedHour}:${formattedMin}:00Z`
    ).toISOString();

    const coordinates = `${lat},${lon}`;

    const apiUrl = `/api/kundli?ayanamsa=1&coordinates=${coordinates}&datetime=${encodeURIComponent(
      datetime
    )}&chart_type=${chart_type}&chart_style=${chart_style}&format=${format}&la=${la}&upagraha_position=${upagraha_position}`;

    console.log("Formatted datetime:", datetime); // Debugging

    try {
      const response = await fetch(apiUrl, {
        method: "GET",
      });
      // const data = await response.json();
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      setSvgUrl(objectUrl);
      console.log("API Response:", objectUrl);
    } catch (error) {
      console.error("Error calling API:", error);
    }
  };

  // const handleSubmitprokalara = async () => {
  //   setError(null);

  //   try {
  //     const auth = `Basic ${btoa(`${userId}:${apiKey}`)}`;
  //     const response = await axios.post(
  //       "https://json.astrologyapi.com/v1/horo_chart_image/:chartId",
  //       horoscopeData,
  //       {
  //         headers: {
  //           Authorization: auth,
  //           "Content-Type": "application/json",
  //           "Accept-Language": language,
  //         },
  //       }
  //     );
  //     setResult(response.data);
  //     console.log(response.data);
  //   } catch (err) {
  //     setError("Failed to fetch data");
  //     console.log(err);
  //   }
  // };
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
          gender: formData.gender,
          svgUrl: svgUrl,
          country: formData.country,
          state: formData.state,
          city: formData.city,
          selectedTime: selectedTime,
          selectedDate: selectedDate,
          amount: "1.00", // 1 INR for testing
        }),
      });
    } catch (err) {
      setError("Failed to fetch data");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const [paymentstatus, setPaymentStatus] = useState(false);
  const nextStep = () => {
    makeApiRequest(horoscopeData);
    if (currentStep == 0) {
      setCurrentStep(currentStep + 1);
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
  return (
    <div className="max-w-6xl mt-10 mx-auto p-6 bg-white shadowmd rounded-md">
      <div className="flex justify-between mb-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`text-sm font-medium px-2 py-1 rounded-full flex items-center gap-3 justify-center ${
              index === currentStep ? " text-black" : "bg-gray300  opacity-50"
            }`}
          >
            <span
              className={`text-sm font-medium text-center  h-5 w-5 rounded-full block ${
                index === currentStep
                  ? "bg-[#B3B3B3] text-white"
                  : "bg-gray-300"
              }`}
            >
              {index + 1}.
            </span>

            {step}
          </div>
        ))}
      </div>

      {currentStep === 0 && (
        <div className=" flex flex-col mt-20 items-center justify-center">
          <h2 className="text-xl font-semibold mb-4">Personal Details</h2>
          <div className="grid grid-cols-3 gap-4">
            <label className="text-[16px]">
              Full Name *
              <input
                name="fullName"
                type="text"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </label>
            <label>
              Phone Number
              <input
                name="phone"
                type="text"
                placeholder="+91 9876543210"
                value={formData.phone}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </label>
            <label>
              Email ID
              <input
                name="email"
                type="email"
                placeholder="johndoe@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </label>
            <label>
              Date of Birth
              <input
                name="dob"
                type="date"
                placeholder="johndoe@gmail.com"
                value={formData.dob}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </label>
            <label>
              Time of Birth
              <input
                name="timeOfBirth"
                type="time"
                value={formData.timeOfBirth}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </label>
            <label>
              Gender
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label>
              Country
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
              State
              <Select
                options={State.getStatesOfCountry(formData.country).map(
                  (s) => ({ label: s.name, value: s.isoCode })
                )}
                className="w-full"
                onChange={(selected) =>
                  setFormData({ ...formData, state: selected.value, city: "" })
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
              City
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
              Marital Status*
              <select
                name="Merriged"
                value={formData.gender}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              >
                <option value="">Select status</option>
                <option value="Male">Merriged</option>
                <option value="Female">Unmerrige</option>
                <option value="Other">Single</option>
                <option value="Other">Comitted</option>
              </select>
            </label>

            <label>
              Latitude (Optional)
              <input
                name="latitude"
                type="text"
                placeholder="Latitude"
                value={formData.latitude}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </label>
            <label>
              Longitude (Optional)
              <input
                name="longitude"
                type="text"
                placeholder="longitude"
                value={formData.longitude}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
            </label>
          </div>
        </div>
      )}

      {currentStep === 1 && (
        <Questions
          formData={formData}
          handleQuestionChange={handleQuestionChange}
        />
      )}

      {currentStep === 2 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Select Date & Time</h2>
          <div className="flex items-center justify-center gap-10">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              minDate={new Date()}
              inline
              className="border rounded p-2 w-full"
            />
            <div>
              <h2 className="text-md font-normal">Select a Convenient Time</h2>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots?.map((slot) => (
                  <button
                    key={slot.time}
                    disabled={slot.status === "booked"} // Disable if booked
                    onClick={() => setSelectedTime(slot.time)}
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
              </div>
            </div>
          </div>
        </div>
      )}
      {currentStep === 3 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Confirmation</h2>
          <pre className="bg-gray-100 p-4 rounded">
            {/* {JSON.stringify(formData, null, 2)} */}
            <ThankYouScreen
              formData={formData}
              selectedTime={selectedTime}
              result={result}
              error={error}
              svgUrl={svgUrl}
            />
          </pre>
        </div>
      )}
      {currentStep === steps.length - 1 && (
        <h2 className="text-xl font-semibold mb-4">
          <PaymentButton
            setPaymentStatus={setPaymentStatus}
            paydata={paydata}
            selectedTime={selectedTime}
            svgUrl={svgUrl}
            selectedDate={selectedDate}
          />
        </h2>
      )}

      <div className="mt-6 flex justify-between">
        {currentStep > 0 && (
          <button
            onClick={prevStep}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            {currentStep === 2
              ? loading
                ? "loading"
                : "Urgent Query"
              : "Back"}
          </button>
        )}
        <button
          onClick={nextStep}
          className="px-10 py-2 bg-[#B3B3B3] text-white rounded"
        >
          {currentStep === steps.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

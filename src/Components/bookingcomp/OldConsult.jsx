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
      // console.log(data.slots);
      // console.log(data?.slots[0]?.duration);
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

  const [selectedDuration, setSelectedDuration] = useState(null); // Filter state
  const filteredSlots = selectedDuration
    ? timeSlots.filter((slot) => slot.duration === selectedDuration)
    : timeSlots;

  // console.log(currentStep);
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
                  //   onChange={handleChange}
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
                  //   onChange={handleChange}
                  // onChange={handleEmailChange}
                  className="border p-2 rounded w-full border-[#E4E4E4]"
                />
              </label>

              {/* <label>
                Date of Birth *
                <input
                  name="dob"
                  type="date"
                  placeholder="dd/mm/yyyy"
                  required
                  value={formData.dob}
                  className="border p-2 rounded w-full border-[#E4E4E4]"
                />
              </label>

              <label className="relative flex items-start justify-center flex-col">
                Time of Birth*
                <div className="flex justify-center items-center max-md:w-full">
                  <input
                    name="timeOfBirth"
                    type="time"
                    value={formData.timeOfBirth}
                    className="border p-2 rounded wfull border-[#E4E4E4] ml-2 max-md:ml-0  w-[240px] max-md:w-full"
                  />
                  <span className="ml-2 relative group">
                    <span className="text-gray-400 cursor-pointer border border-gray-300 rounded-full w-5 h-5 flex items-center justify-center">
                      i
                    </span>
                    <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 max-md:w-full p-2 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      If unsure of birth time, enter an estimated time.
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
                  value={
                    formData.country
                      ? {
                          label: Country.getCountryByCode(formData.country)
                            ?.name,
                          value: formData.country,
                        }
                      : null
                  }
                />
              </label>

              <label>
                State *
                <Select
                  options={
                    formData.country
                      ? State.getStatesOfCountry(formData.country).map((s) => ({
                          label: s.name,
                          value: s.isoCode,
                        }))
                      : []
                  }
                  className="w-full"
                  value={
                    formData.state
                      ? {
                          label: State.getStateByCodeAndCountry(
                            formData.state,
                            formData.country
                          )?.name,
                          value: formData.state,
                        }
                      : null
                  }
                />
              </label>

              <label>
                City *
                <Select
                  options={
                    formData.country && formData.state
                      ? City.getCitiesOfState(
                          formData.country,
                          formData.state
                        ).map((c) => ({
                          label: c.name,
                          value: c.name,
                        }))
                      : []
                  }
                  className="w-full"
                  value={
                    formData.city
                      ? { label: formData.city, value: formData.city }
                      : null
                  }
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
                  //   onChange={handleChange}
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
                  //   onChange={handleChange}
                  className="border p-2 rounded w-full border-[#E4E4E4]"
                />
              </label> */}
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
                  {filteredSlots
                    .filter((slot) => {
                      const now = new Date(); // Current date and time
                      const currentTimeInMinutes =
                        now.getHours() * 60 + now.getMinutes(); // Convert current time to minutes

                      // Extract the start time (e.g., "10:00 AM")
                      const startTime = slot.time.split(" - ")[0];
                      let [hour, minute] = startTime.match(/\d+/g).map(Number);
                      const period = startTime.includes("PM") ? "PM" : "AM";

                      // Convert to 24-hour format
                      if (period === "PM" && hour !== 12) hour += 12;
                      if (period === "AM" && hour === 12) hour = 0;

                      const slotTimeInMinutes = hour * 60 + minute; // Convert slot time to minutes

                      // Show slots that are after current time AND before or equal to 6 PM (18:00)
                      return (
                        slotTimeInMinutes >= currentTimeInMinutes && hour <= 18
                      );
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
                        className={`p-2 rounded text-sm border 
          ${
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
        {/* {currentStep === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Confirmation</h2>

            <ThankYouScreen
              formData={formData}
              selectedTime={selectedTime}
              duration={duration}
              result={result}
              error={error}
              svgUrl={svgdata}
              selectedDate={selectedDate}
            />
          </div>
        )} */}
        {/* {currentStep === steps.length - 1 && (
          <h2 className="text-xl font-semibold mb-4 text-center">
            <PaymentButton
              setPaymentStatus={setPaymentStatus}
              paydata={paydata}
              selectedTime={selectedTime}
              latitude={formData.latitude}
              longitude={formData.longitude}
              // svgUrl={svgUrl}
              duration={duration}
              svgdata={svgdata}
              selectedDate={selectedDate}
            />
          </h2>
        )} */}

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

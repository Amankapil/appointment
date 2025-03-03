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
  "Payment",
  "Confirmation",
];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(3);
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

  const nextStep = () => {
    // handleSubmitprokalara();
    makeApiRequest(horoscopeData);
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep === 2) {
      setCurrentStep(4);
      handleSubmit();
    } else {
      if (currentStep > 0) setCurrentStep(currentStep - 1);
    }
  };
  return (
    <div className="max-w-6xl mt-10 mx-auto p-6 bg-white shadowmd rounded-md">
      <div className="flex justify-between mb-6"></div>

      <h1 className="text-xl font-semibold mb-4">
        your payment is sucess and booking is confirmed please check your given
        email for details{" "}
      </h1>
    </div>
  );
}

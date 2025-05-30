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
  return (
    <div className="max-w-6xl mt-10 mx-auto p-6 bg-white shadowmd rounded-md">
      <div className="flex justify-between mb-6"></div>

      <h2 className="text-[40px] font-semibold mb-4">
        Your urgent booking is confirmed. Please check the email for
        confirmation.
      </h2>
    </div>
  );
}

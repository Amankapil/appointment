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

      <h1 className="text-xl font-semibold mb-4">
        your Urgent booking is confirmed please check your given email for more
        details{" "}
      </h1>
    </div>
  );
}

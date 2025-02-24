"use client";

import { useState } from "react";

export default function PaymentButton({
  setPaymentStatus,
  paydata,
  selectedTime,
  svgUrl,
  selectedDate,
}) {
  const [loading, setLoading] = useState(false);
  console.log(paydata);

  const initiatePayment = async () => {
    setLoading(true);

    // const svgElement = svgUrl;
    // const pngDataUrl = await toPng(svgElement);

    // // Convert Data URL to Blob
    // const blob = await fetch(pngDataUrl).then((res) => res.blob());

    try {
      const response = await fetch("/api/payment/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: paydata.fullName,
          email: paydata.email,
          phone: paydata.phone,
          tob: paydata.timeOfBirth,
          dob: paydata.dob,
          gender: paydata.gender,
          svgUrl: svgUrl,
          country: paydata.country,
          state: paydata.state,
          city: paydata.city,
          selectedTime: selectedTime,
          selectedDate: selectedDate,
          amount: "1.00", // 1 INR for testing
        }),
      });

      const { payUData, url } = await response.json();

      console.log(payUData, url);

      if (!payUData || !url) {
        throw new Error("Invalid response from server");
      }

      const form = document.createElement("form");
      form.method = "POST";
      form.action = url;

      Object.keys(payUData).forEach((key) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = payUData[key];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error("Payment initiation failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="border bg-lime-300 px-10 py-1 rounded-md"
      onClick={initiatePayment}
      disabled={loading}
    >
      {loading ? "Processing..." : "Pay ₹1"}
    </button>
  );
}

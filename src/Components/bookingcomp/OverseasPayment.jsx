"use client";

import { useState } from "react";
import axios from "axios";

export default function OverseasPayment({
  setPaymentStatus,
  paydata,
  selectedTime,
  svgdata,
  selectedDate,
  duration,
  latitude,
  longitude,
  actualTime,
}) {
  const [transactionId, setTransactionId] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMode, setPaymentMode] = useState("UPI");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  console.log(selectedTime);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/overseas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: paydata.fullName,
          email: paydata.email,
          phone: paydata.phone,
          tob: paydata.timeOfBirth,
          dob: paydata.dob,
          gender: paydata.gender,
          latitude: latitude,
          longitude: longitude,
          svgUrl: svgdata,
          country: paydata.country,
          state: paydata.state,
          city: paydata.city,
          selectedTime: selectedTime,
          selectedDate: selectedDate,
          amount: amount,
          transactionId: transactionId,
          paymentMode: paymentMode,
        }),
      });
      // setMessage(response.data.message);
      setTransactionId("");
      setPaymentMode("UPI");
      const dataa = await response.json();
      console.log(dataa);
      if (dataa.success == true) {
        toast.success(dataa.message);
        router.push("/urgent");
      }
    } catch (error) {
      setMessage("Failed to submit payment");
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section - QR Code & Bank Details */}
        <div className="text-center border-r pr-6">
          <h2 className="text-xl font-bold mb-4">Scan & Pay via PhonePe</h2>
          <img
            src="images/qr.jpeg"
            alt="PhonePe QR Code"
            className="mx-auto w-48 h-48"
          />
          <h3 className="text-lg font-semibold mt-6">Bank Transfer Details</h3>
          <p className="text-gray-700">kjagadish@upi </p>
          <p className="text-gray-700"> 7259691375@icici</p>
          <h3 className="text-lg font-semibold mt-6">Bank Transfer Details</h3>
          <p className="text-gray-700">K Jagadish</p>
          <p className="text-gray-700">Bank Name: ICICI Bank SB Account</p>
          <p className="text-gray-700">Account No: 029601515128</p>
          <p className="text-gray-700">IFSC: ICIC0000296</p>
        </div>

        {/* Right Section - Payment Input */}
        <div className="pl-6">
          <h2 className="text-xl font-bold mb-4">Enter Transaction Details</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium">Transaction ID</label>
              <input
                type="text"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Amount Paid</label>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                required
              />
            </div>

            <div>
              <label className="block font-medium">Payment Mode</label>
              <select
                value={paymentMode}
                onChange={(e) => setPaymentMode(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
              >
                <option value="UPI">UPI</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md font-salernomi  transition"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>

          {message && <p className="mt-4 text-green-600">{message}</p>}
        </div>
      </div>
    </div>
  );
}

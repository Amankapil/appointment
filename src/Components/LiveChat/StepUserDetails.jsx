"use client";
import { useState } from "react";

export default function StepUserDetails({ onSubmit }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3 text-center">
        Enter Your Details
      </h2>
      <div onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Your Name*"
          required
          className="border rounded-lg p-2"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Your Email*"
          required
          className="border rounded-lg p-2"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="Number"
          placeholder="Your Phone Number*"
          required
          className="border rounded-lg p-2"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

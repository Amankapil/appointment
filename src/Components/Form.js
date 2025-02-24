"use client"; // Mark this as a Client Component

import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch("/api/whatsapp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block">Name</label>
        <input
          {...register("name", { required: true })}
          className="border p-2 w-full"
        />
        {errors.name && <span className="text-red-500">Name is required</span>}
      </div>
      <div>
        <label className="block">Email</label>
        <input
          {...register("email", { required: true })}
          className="border p-2 w-full"
        />
        {errors.email && (
          <span className="text-red-500">Email is required</span>
        )}
      </div>
      <div>
        <label className="block">Phone Number</label>
        <input
          {...register("phone", { required: true })}
          className="border p-2 w-full"
        />
        {errors.phone && (
          <span className="text-red-500">Phone number is required</span>
        )}
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}

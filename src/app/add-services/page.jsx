"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function page() {
  const { register, handleSubmit, reset } = useForm();
  const [servicess, setServices] = useState([]);

  useEffect(() => {
    fetchStaff();
  }, []);
  const fetchStaff = async () => {
    try {
      const response = await fetch("/api/admin/service");
      const { data } = await response.json();
      setServices(data);
      // setLoading(false);
    } catch (error) {
      console.error("Error fetching staff:", error);
      // setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/admin/service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const newService = await response.json();
      setServices([...servicess, newService]);
      reset();
    } catch (error) {
      console.error("Error creating service:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Services Management
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-lg shadow-sm mb-8"
        >
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                {...register("title")}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                {...register("description")}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Service
            </button>
          </div>
        </form>

        <div className="space-y-4 h-[599px] w-full">
          {servicess.map((servicse) => (
            <div
              key={servicse._id}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {servicse.title}
              </h3>
              <p className="mt-2 text-gray-600">{servicse.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

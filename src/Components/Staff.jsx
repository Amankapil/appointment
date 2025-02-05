"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Staff() {
  const { register, handleSubmit, reset } = useForm();
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const response = await fetch("/api/admin/staff");
      const { data } = await response.json();
      setStaff(data);
      setLoading(false);
    } catch (error) {
      //   console.error("Error fetching staff:", error);
      setLoading(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await fetch("/api/admin/staff", {
        method: "POST",
        body: formData,
      });

      const { data: newStaff } = await response.json();
      setStaff([...staff, newStaff]);
      alert("Staff adedd successfully");
      reset();
    } catch (error) {
      console.error("Error creating staff:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Staff Management
        </h1>

        {/* Add Staff Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-lg shadow-sm mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Form fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  {...register("name")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profession
                </label>
                <input
                  {...register("profession")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Educations (comma separated)
                </label>
                <input
                  {...register("educations")}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Experience
                </label>
                <textarea
                  {...register("experience")}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Image
                </label>
                <input
                  type="file"
                  {...register("image")}
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  accept="image/*"
                  required
                />
              </div> */}
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full md:w-auto inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Staff Member
          </button>
        </form>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staff?.map((member) => (
            <div
              key={member._id}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {/* <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              /> */}
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm text-blue-600 mb-2">{member.profession}</p>
              <div className="mb-3">
                <h4 className="text-sm font-medium text-gray-700">Education</h4>
                {member.educations}
                {/* <ul className="list-disc list-inside text-sm text-gray-600">
                  {member.educations.map((edu, index) => (
                    <li key={index}>{edu}</li>
                  ))}
                </ul> */}
              </div>
              <p className="text-sm text-gray-600">{member.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

const OverseasClient = () => {
  const [clients, setClients] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/admin/overseas"); // Replace with your API endpoint
        const data = await response.json();
        console.log(data.data);
        setClients(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 bg-white shadow-md rounded-md">
      {/* Stats Section */}
      <div className="flex justify-between items-center p-4 border-b">
        <div>
          <span className="text-gray-600">Total Clients:</span>{" "}
          <span className="text-lg font-semibold">{clients.length}</span>
        </div>
        <div>
          <span className="text-gray-600">Active Clients:</span>{" "}
          <span className="text-lg font-semibold">40</span>{" "}
          <span className="text-xs text-green-500">+15 New this month</span>
        </div>
        <button className="px-3 py-1 text-gray-600 border rounded-md">
          Filter
        </button>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-4 p-4 bg-gray-100 font-semibold">
        <span>Name</span>
        <span>Total Sessions</span>
        <span>Last Booked</span>
        <span>Contact</span>
      </div>

      {/* Table Rows */}
      {clients
        ?.slice()
        .reverse()
        .map((client, index) => (
          <div key={client._id} className="border-b">
            <div
              className="grid grid-cols-4 p-4 cursor-pointer hover:bg-gray-50"
              onClick={() => toggleAccordion(index)}
            >
              <span>{client.name}</span>
              <span>{client.session}</span>
              <span>{client.selectedDate || "--"}</span>
              <span className="flex justify-between">
                {/* Placeholder for contact icons */}
                <span className="flex gap-2">
                  +{client.phone}
                  {/* <button className="w-6 h-6 bg-gray-300 rounded"></button>
                  <button className="w-6 h-6 bg-gray-300 rounded"></button> */}
                </span>
                {expandedIndex === index ? <ChevronUp /> : <ChevronDown />}
              </span>
            </div>

            {/* Accordion Content */}
            {expandedIndex === index && (
              <div className="bg-gray-100 p-4 text-sm grid grid-cols-2 gap-4">
                {/* Birth Details */}
                <div>
                  <p>Email: {client.email}</p>
                  <h3 className="font-semibold">Birth Details</h3>
                  <p>Date of Birth: {client.dob}</p>
                  <p>Time of Birth: {client.tob}</p>
                </div>

                {/* Place of Birth */}
                <div>
                  <h3 className="font-semibold">Place of Birth</h3>
                  <p>Country: {client.country}</p>
                  <p>State: {client.state}</p>
                  <p>City: {client.city}</p>
                  <p>Latitude: {client.latitude || "---"}</p>
                  <p>Longitude: {client.longitude || "---"}</p>
                  {/* <p className="flex items-center font-bold">
                    Horodcope:{" "}
                    <Image
                      src={client?.filePath}
                      alt=""
                      width={200}
                      height={200}
                    />
                  </p> */}

                  <p className="flex items-center font-bold">
                    Horoscope:{" "}
                    <Image
                      src={client?.filePath}
                      alt=""
                      width={200}
                      height={200}
                      className="cursor-pointer ml-2"
                      onClick={() => setIsOpen(true)}
                    />
                  </p>

                  {isOpen && (
                    <div className="fixed inset-0 bg-[#fff] bg-opacity-80 flex items-center justify-center z-50">
                      <div className="relative">
                        <button
                          onClick={() => setIsOpen(false)}
                          className="absolute top-4 -right-8 bg-black cursor-pointer text-white rounded-full w-8 h-8 flex items-center justify-center font-bold z-50"
                        >
                          ✕
                        </button>
                        <Image
                          src={client?.filePath}
                          alt="Horoscope"
                          width={800}
                          height={800}
                          // className="max-w-full max-h-screen object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Personal Information */}
                <div className="col-span-2">
                  <h3 className="font-semibold">Personal Information</h3>
                  <p>Gender: {client.gender}</p>
                  <p>Marital Status: {client.maritalStatus || "--"}</p>
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default OverseasClient;

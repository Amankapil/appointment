"use client";
import { useState, useEffect } from "react";
// import Modal from "react-modal";
import Modal from "react-modal";
// import Modal from "react-modal";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BookingForm from "@/Components/BookingForm";
import ThankYouScreen from "@/Components/ThankYouScreen";
import Link from "next/link";
import PaymentButton from "@/Components/PaymentButton";
import Form from "@/Components/Form";

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);

  const [step, setStep] = useState(1); // Track steps
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [persons, setPersons] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [appointmentDetails, setAppointmentDetails] = useState(null);

  // useEffect(() => {
  //   Modal.setAppElement("#__next"); // Ensure this matches the main app div (for Next.js)
  // }, []);
  // Fetch services from API
  const fetchServices = async () => {
    try {
      const res = await fetch("/api/admin/service");
      const data = await res.json();
      setServices(data.data);
      // console.log(data.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  // Fetch persons based on the selected service
  const fetchPersons = async () => {
    try {
      const res = await fetch(`/api/admin/staff`);
      const data = await res.json();
      setPersons(data.data);
      // console.log(data.data);
    } catch (error) {
      console.log("Error fetching persons:", error);
    }
  };

  // Fetch time slots for the selected date
  const fetchSlots = async (date) => {
    try {
      const formattedDate = date.toISOString().split("T")[0]; // Extract YYYY-MM-DD
      const res = await fetch(`/api/admin/getslot?date=${formattedDate}`);
      const data = await res.json();
      setTimeSlots(data.slots);
      console.log(data.slots);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isOpen) fetchServices();
  }, [isOpen]);

  useEffect(() => {
    if (step === 2) fetchPersons();
  }, [step]);

  useEffect(() => {
    if (step === 3) fetchSlots(selectedDate);
  }, [step, selectedDate]);

  return (
    <div className="flex justify-center my-20">
      <Link
        href="/booking"
        // onClick={() => setIsOpen(true)}

        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
      >
        Book Appointment
      </Link>
      {/* <Form /> */}

      {/* <PaymentButton /> */}

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-96 shadow-xl"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        {/* Step 1: Select Service */}
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Select a Service</h2>
            <div className="grid grid-cols-2 gap-2">
              {services?.map((service) => (
                <button
                  key={service._id}
                  onClick={() => {
                    setSelectedService(service.title);
                    setStep(2);
                  }}
                  className="bg-gray-100 hover:bg-blue-100 p-2 rounded text-sm"
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Select Person */}
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Select a Person</h2>
            <div className="grid grid-cols-2 gap-2">
              {persons?.map((person) => (
                <button
                  key={person._id}
                  onClick={() => {
                    setSelectedPerson(person.name);
                    setStep(3);
                  }}
                  className="bg-gray-100 hover:bg-blue-100 p-2 rounded text-sm"
                >
                  Name: {person.name}
                  <br />
                  Education: {person.educations}
                  <br />
                  Experience: {person.experience}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Select Date & Time Slot */}
        {step === 3 && !selectedTime && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Select Date & Time</h2>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              minDate={new Date()}
              inline
              className="border rounded p-2 w-full"
            />

            <div className="grid grid-cols-3 gap-2">
              {timeSlots?.map((slot) => (
                <button
                  key={slot.time}
                  disabled={slot.status === "booked"} // Disable if booked
                  onClick={() => setSelectedTime(slot.time)}
                  className={`p-2 rounded text-sm 
      ${
        slot.status === "available"
          ? "bg-green-200 hover:bg-green-300"
          : "bg-red-200 hover:bg-red-300 disabled:"
      }`}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Booking Form */}
        {step === 3 && selectedTime && (
          <BookingForm
            service={selectedService}
            person={selectedPerson}
            datee={selectedDate}
            time={selectedTime}
            onCancel={() => setSelectedTime(null)}
            onSuccess={(response) => {
              setAppointmentDetails(response.data);
              setStep(4);
            }}
          />
        )}

        {step === 4 && appointmentDetails && (
          <ThankYouScreen
            appointment={appointmentDetails}
            onClose={() => setIsOpen(false)}
          />
        )}
      </Modal>
    </div>
  );
}

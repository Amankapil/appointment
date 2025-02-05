"use client";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
// import { CheckCircleIcon } from "@heroicons/react/solid"; // Tailwind Hero Icons
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function ThankYouScreen({ appointment, onClose }) {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Stop confetti after 5 seconds
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-xl w-96">
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircleIcon className="w-16 h-16 text-green-500" />
      </motion.div>

      <motion.h2
        className="text-2xl font-bold text-gray-800 mt-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Booking Confirmed!
      </motion.h2>

      <p className="text-gray-600 mt-2">
        Thank you for your appointment. Here are the details:
      </p>

      <div className="mt-4 p-4 bg-gray-100 rounded-lg w-full">
        <p>
          <strong>Service:</strong> {appointment.service}
        </p>
        <p>
          <strong>Person:</strong> {appointment.person}
        </p>
        <p>
          <strong>Date:</strong> {appointment.date}
        </p>
        <p>
          <strong>Time Slot:</strong> {appointment.time}
        </p>
        <p>
          <strong>Meeting Link:</strong>{" "}
          <a
            href={appointment.meetLink}
            className="text-blue-500 underline"
            target="_blank"
          >
            Join Now
          </a>
        </p>
      </div>

      <button
        onClick={onClose}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
      >
        Done
      </button>
    </div>
  );
}

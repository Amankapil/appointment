"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BookPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      if (!hasTriggered && scrolled >= pageHeight / 3) {
        setIsOpen(true);
        setHasTriggered(true); // mark popup as triggered
        document.body.style.overflow = "hidden"; // disable scroll
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasTriggered]);

  const closePopup = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto"; // re-enable scroll
  };
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={closePopup}
    >
      <div
        className="relative flex flex-col justify-center items-center bg-white rounded-2xl p-8 w-[100%] min-h-[500px] max-w-3xl text-center shadow-2xl animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-3 right-4 text-3xl cursor-pointer text-gray-700 hover:text-black"
        >
          &times;
        </button>

        {/* Heading */}
        <h2 className="text-[44px] text-[#4D4D4D] font-salernomi font-normal mb-6 lhd:text-[100px] max max-fhd:bg-red-500 qhd:bg-purple-500">
          Unlock The Astrology Knowledge Center - 3 Essential Guides Inside
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-[24px] leading-relaxed mb-6">
          Gain clarity on your life path and unlock the wisdom of the stars.
        </p>

        {/* CTA Button */}
        <Link
          onClick={closePopup}
          href="/books/#books"
          className="bg-[#101010] text-[20px] font-salernomi text-white px-[24px] py-[12px] rounded hover:bg-[#333333] transition-all duration-300 shadow-button"
        >
          Download For Free
        </Link>
      </div>
    </div>
  );
}

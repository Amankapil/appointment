"use client";
import Link from "next/link";
import { useState } from "react";
import logo from "./Homecomponent/assets/logo.png";
import Image from "next/image";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  return (
    <nav className="bg-white shadow-md h-[80px] sticky top-0 z-[99999999999999999]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-lg font-semibold">
            <Link href="/">
              <Image src={logo} alt="kl" />
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`md:flex space-x-4 items-center gap-7 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <Link
              href="/services"
              className="hover:text-gray-600 relative"
              onClick={toggleServices}
            >
              Services
              {isServicesOpen && (
                <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl">
                  <Link
                    href="/services/astrology"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Astrology
                  </Link>
                  <Link
                    href="/services/consultation"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    Consultation
                  </Link>
                </div>
              )}
            </Link>
            <Link href="/work" className="hover:text-gray-600 relative">
              How it Works
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-black rounded-full opacity-0 group-hover:opacity-100"></span>
            </Link>
            <Link href="/common-myths" className="hover:text-gray-600 relative">
              Common Myths
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-black rounded-full opacity-0 group-hover:opacity-100"></span>
            </Link>
            <Link href="/remedies" className="hover:text-gray-600 relative">
              Remedies
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-black rounded-full opacity-0 group-hover:opacity-100"></span>
            </Link>
            <Link href="/about" className="hover:text-gray-600 relative">
              About Us
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-black rounded-full opacity-0 group-hover:opacity-100"></span>
            </Link>
            <Link
              href="/request-consultation"
              className="bg-[#101010] font-salernomi text-white px-4 py-2 rounded hover:bg-[#333333]"
            >
              Request your Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

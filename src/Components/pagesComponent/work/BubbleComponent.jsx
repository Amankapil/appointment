"use client";

import Image from "next/image";
import React from "react";
import img from "./assets/jh.svg";

const BubbleComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-8 max-md:hidden">
      <Image src={img} alt="" />
    </div>
  );
};

const Bubble = ({ children, size }) => {
  const sizeClasses = {
    sm: "w-20 h-20 text-xs",
    md: "w-32 h-32 text-sm",
    lg: "w-48 h-48 text-base",
  };

  return (
    <div
      className={`flex items-center justify-center rounded-full border border-gray-300 text-gray-700 text-center p-2 ${sizeClasses[size]}`}
    >
      {children}
    </div>
  );
};

export default BubbleComponent;

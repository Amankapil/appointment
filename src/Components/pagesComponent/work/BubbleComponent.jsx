"use client";

import React from "react";

const BubbleComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-8 max-md:hidden">
      <div className="flex flexcol items-center justify-between  bg-white p-8">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 0L40.7424 26.8874C40.9289 33.6405 46.3595 39.0711 53.1126 39.2576L80 40L53.1126 40.7424C46.3595 40.9289 40.9289 46.3595 40.7424 53.1126L40 80L39.2576 53.1126C39.0711 46.3595 33.6405 40.9289 26.8874 40.7424L-2.85003e-05 40L26.8874 39.2576C33.6405 39.0711 39.0711 33.6405 39.2576 26.8874L40 0Z"
            fill="#1E1E2C"
          />
        </svg>

        <p className="text-center text-lg text-gray-700 max-w-3xl mb-8">
          You can ask any ethical and morally acceptable questions excluding -
          gambling, racing sports, questions about hatred, romance etc., - with
          a devotional bent of mind, praying God and you will get meaningful and
          useful answers, hints & tips.
        </p>
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 0L40.7424 26.8874C40.9289 33.6405 46.3595 39.0711 53.1126 39.2576L80 40L53.1126 40.7424C46.3595 40.9289 40.9289 46.3595 40.7424 53.1126L40 80L39.2576 53.1126C39.0711 46.3595 33.6405 40.9289 26.8874 40.7424L-2.85003e-05 40L26.8874 39.2576C33.6405 39.0711 39.0711 33.6405 39.2576 26.8874L40 0Z"
            fill="#1E1E2C"
          />
        </svg>
      </div>
      <div className="relative h-screen flex flex-wrap justify-center items-center gap-4 max-w-6xl">
        <div
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(217, 217, 217, 0) 75.24%, rgba(234, 230, 225, 0.32) 100%)",
          }}
          className={`flex items-center justify-center absolute w-[378px] h-[378px] rounded-full border border-gray-300 text-gray-700 text-center p-2`}
        >
          How will I perform in the examination?
        </div>
        <div
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(217, 217, 217, 0) 75.24%, rgba(234, 230, 225, 0.32) 100%)",
          }}
          className={`flex items-center justify-center absolute left-[278px] w-[378px] h-[378px] rounded-full border border-gray-300 text-gray-700 text-center p-2`}
        >
          When will I get a job?
        </div>
        <div
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(217, 217, 217, 0) 75.24%, rgba(234, 230, 225, 0.32) 100%)",
          }}
          className={`flex items-center justify-center absolute -left-[378px] w-[378px] h-[378px] rounded-full border border-gray-300 text-gray-700 text-center p-2`}
        >
          Settlement abroad
        </div>
        {/* <Bubble size="lg">How will I perform in the examination?</Bubble>
        
        <Bubble size="md">Prospects of Higher studies</Bubble>
        <Bubble size="sm">Health</Bubble>
        <Bubble size="md">Financial situation</Bubble>
        <Bubble size="md">Career growth</Bubble>
        <Bubble size="md">Change of residence</Bubble>
        <Bubble size="md">Settlement abroad</Bubble>
        <Bubble size="lg">Interpersonal relationship</Bubble>
        <Bubble size="sm">Business</Bubble>
        <Bubble size="md">Selling property</Bubble>
        <Bubble size="md">Buying property</Bubble>
        <Bubble size="sm">Investment</Bubble>
        <Bubble size="sm">Clearing debts</Bubble> */}
      </div>
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

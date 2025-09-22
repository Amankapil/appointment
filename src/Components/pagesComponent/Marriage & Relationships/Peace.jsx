import Link from "next/link";
import React from "react";
import "../Homecomponent/style.css";

const Peace = () => {
  return (
    <>
      <div className="bg-[#fff] py-10 max-md:pt-10 max-md:pb-0">
        <div className="heading flex flex-col items-center justify-center">
          <div className="flex items-center karma gap-4 flex-col w-[60%] max-md:w-full mt-20  justify-center text-center max-md:h-full max-md:p-10 max-md:mt-5">
            <h2 className="text-[56px] max-md:text-[40px] text-[#101010] text-center font-salernomi font-normal mb-2">
              Ready to Find Peace in Your Marriage?
            </h2>{" "}
            <h2 className="text-[40px] max-md:text-[20px] text-[#101010] text-center font-salernomi font-normal mb-0">
              Marriage is a sacred journey. With the right guidance, you can
              walk it with clarity, harmony, and divine grace.
            </h2>
            <Link
              href="/booking"
              className="bg-[#101010] text-[20px] font-salernomi mt-2 text-white px-[24px] py-[12px] rounded hover:bg-[#333333] transition-all duration-300 shadow-button"
            >
              Request your Consultation
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Peace;

import React from "react";
import img from "./assets/Group 248.png";
import Image from "next/image";
const Karmic = () => {
  return (
    <>
      <div className="bg-[#fff] text-[#1E1E1E] min-h-screen p-10 max-md:p-4">
        <div className="img h-[500px] max-md:h-full flex items-center justify-center">
          <Image loading="lazy" className="pb-10" src={img} alt="j" />
        </div>
        <div className="pr-4 max-lg:flex-wrap flex flexcol font-inter gap-10 justify-center items-start my-10 ">
          <h1 className="text-[40px] text-[#4D4D4D] text-left font-salernomi w-[40%] max-lg:w-full font-normal mb-6">
            The Spiritual Perspective: Karmic Reckoning
          </h1>
          <div className="w-1/2 max-lg:w-full">
            <p className="font-normal text-lg text-[#4D4D4D] w  text-left">
              The 18-year mark is not just about reaching legal adulthood—it is
              also a karmic checkpoint. According to Vedic wisdom, this phase
              updates an individual’s karmic balance, incorporating all actions
              since birth into the grand tapestry of their destiny.
            </p>
            <br />
            <p className="font-normal text-lg text-[#4D4D4D] w  text-left">
              Why does life feel uncertain and full of surprises? Because our
              conscious mind cannot fully comprehend the vast network of past
              karmas influencing our present. This is where the divine science
              of astrology—especially Prashna Jyotishya—shines, offering
              guidance to navigate life with wisdom and grace.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Karmic;

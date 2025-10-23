"use client";

import Image from "next/image";
import img from "./assets/img.png";
import img2 from "./assets/Group 260.png";
import img3 from "./assets/img2.png";
import img4 from "./assets/im3.png";

export default function MindLabCard() {
  return (
    <>
      <div className="bg-[#F5F0EB] text-[#1E1E1E] min-hscreen p-10 max-md:p-4">
        <div className="heading flex mb-10 flex-col items-center justify-center">
          <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi w-[60%] max-md:w-full font-normal mb-6">
            Guides to a Mindful Life
          </h1>
          <svg
            width="49"
            height="24"
            viewBox="0 0 49 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="3.5" cy="12" r="3" fill="#1E1E2C" />
            <path
              d="M24.5015 24C24.5633 17.4338 29.8977 12.12 36.5 12.0386C29.8718 11.9568 24.5216 6.60173 24.501 0H24.5007C24.4802 6.60234 19.129 11.9578 12.5 12.0386C19.1032 12.1191 24.4385 17.4332 24.5003 24H24.5015Z"
              fill="#1E1E2C"
            />
            <circle cx="45.5" cy="12" r="3" fill="#1E1E2C" />
          </svg>
        </div>

        <div className="img h-[500px] max-md:h-full flex mt-10 items-center justify-center">
          <Image loading="lazy" className="pb-10" src={img2} alt="j" />
        </div>
      </div>
      <div
        id="books"
        className="flex mt-10 items-center gap-5 justify-center flex-wrap maxw-6xl mx-auto"
      >
        <div className="flex  w-[630px] gap-1  mt-3 imte rounded-[2rem] border border-[#BFA97A] bg-[#f5f1ea] p-2  shadow-md">
          <div className="w-1/3 p-2">
            <Image loading="lazy" src={img} alt="kljhlj" />
          </div>

          {/* Right Side - Text Details */}
          <div className=" pl-6 flex flex-col justify-center relative">
            {/* Border Layering */}
            <div className="absolute bor max-md:hidden top-2 inset-0 rounded-[2rem] w-[390px] h-[240px] border border-[#BFA97A] z-0 pointer-events-none"></div>
            <div className="absolute bor max-md:hidden top-6 w-[407px] h-[208px] -left-[9px] right-4 bottom-4 rounded-[2rem] border border-[#BFA97A] z-0 pointer-events-none"></div>

            <div className="z-10 w-full relative text-center">
              <h1 className=" text-[28px] font-serif text-[#2e2e2e] mb-2">
                Fasten Your Mind To Excel
              </h1>
              <p className="text-[#B58943] text-lg font-medium mb-1">
                By - K Jagadish
              </p>
              <div className="w-16 border-t border-[#CDBA99] mx-auto my-2"></div>
              <p className="text-[#5b5b5b] mb-6">First Edition - June, 2016</p>
              {/* <button className="bg-black text-white py-3 font-salernomi px-8 rounded-xl text-lg hover:bg-gray-800">
                Download For Free
              </button> */}
              <a
                href="/pdf/Fasten your MIND to Excel.pdf" // replace with your actual file path
                download
                className="bg-black text-white py-3 font-salernomi px-8 rounded-xl text-lg hover:bg-gray-800 inline-block"
                onClick={() =>
                  pushToDataLayer("book_download", {
                    book_name: "Fasten your MIND to Excel",
                  })
                }
              >
                Download For Free
              </a>
            </div>
          </div>
        </div>
        <div className="flex  w-[630px] gap-1  mt-3 imte rounded-[2rem] border border-[#BFA97A] bg-[#f5f1ea] p-2  shadow-md">
          <div className="w-1/3 p-2">
            <Image loading="lazy" src={img3} alt="kljhlj" />
          </div>

          {/* Right Side - Text Details */}
          <div className=" pl-6 flex flex-col justify-center relative">
            {/* Border Layering */}
            <div className="absolute bor max-md:hidden top-2 inset-0 rounded-[2rem] w-[390px] h-[240px] border border-[#BFA97A] z-0 pointer-events-none"></div>
            <div className="absolute bor max-md:hidden top-6 w-[407px] h-[208px] -left-[9px] right-4 bottom-4 rounded-[2rem] border border-[#BFA97A] z-0 pointer-events-none"></div>

            <div className="z-10 w-full relative text-center">
              <h1 className=" text-[28px] font-serif text-[#2e2e2e] mb-2">
                A Guide To Mind Building
              </h1>
              <p className="text-[#B58943] text-lg font-medium mb-1">
                By - K Jagadish
              </p>
              <div className="w-16 border-t border-[#CDBA99] mx-auto my-2"></div>
              <p className="text-[#5b5b5b] mb-6">First Edition - June, 2016</p>
              {/* <button className="bg-black text-white py-3 font-salernomi px-8 rounded-xl text-lg hover:bg-gray-800">
                Download For Free
              </button> */}
              <a
                href="/pdf/Mind_Building.pdf" // replace with your actual file path
                download
                onClick={() =>
                  pushToDataLayer("book_download", {
                    book_name: "Mind_Building",
                  })
                }
                className="bg-black text-white py-3 font-salernomi px-8 rounded-xl text-lg hover:bg-gray-800 inline-block"
              >
                Download For Free
              </a>
            </div>
          </div>
        </div>
        <div className="flex  w-[630px] max-md:w-full gap-1  mt-3 imte rounded-[2rem] border border-[#BFA97A] bg-[#f5f1ea] p-2  shadow-md">
          <div className="w-1/3 p-2">
            <Image loading="lazy" src={img4} alt="kljhlj" />
          </div>

          {/* Right Side - Text Details */}
          <div className=" pl-6 flex flex-col justify-center relative">
            {/* Border Layering */}
            <div className="absolute bor max-md:hidden top-2 inset-0 rounded-[2rem] w-[390px] h-[240px] border border-[#BFA97A] z-0 pointer-events-none"></div>
            <div className="absolute bor max-md:hidden top-6 w-[407px] h-[208px] -left-[9px] right-4 bottom-4 rounded-[2rem] border border-[#BFA97A] z-0 pointer-events-none"></div>

            <div className="z-10 w-full relative text-center">
              <h1 className=" text-[28px] font-serif text-[#2e2e2e] mb-2">
                Excel In Life Through 4D
              </h1>
              <p className="text-[#B58943] text-lg font-medium mb-1">
                By - K Jagadish
              </p>
              <div className="w-16 border-t border-[#CDBA99] mx-auto my-2"></div>
              <p className="text-[#5b5b5b] mb-6">First Edition - July, 2016</p>
              {/* <button className="bg-black text-white py-3 font-salernomi px-8 rounded-xl text-lg hover:bg-gray-800">
                Download For Free
              </button> */}
              <a
                href="/pdf/New Excel In life.pdf" // replace with your actual file path
                download
                onClick={() =>
                  pushToDataLayer("book_download", {
                    book_name: "New Excel In life",
                  })
                }
                className="bg-black text-white py-3 font-salernomi px-8 rounded-xl text-lg hover:bg-gray-800 inline-block"
              >
                Download For Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

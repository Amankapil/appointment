import Image from "next/image";
import hero from "./assets/Frame 35.png";

export default function Hero() {
  return (
    <div className="bg-[#F0EDE9] pb-20">
      <div className="max-wxl ml-20 mx-auto text-left items-center justify-center flex gap-20  max-md:ml-2  max-md:flex-wrap">
        <div className="w-1/2 max-lg:w-full  max-md:w-full">
          <h1 className="text-[64px] font-salernomi font-normal mb-6">
            Welcome to Prashna Siddhi
          </h1>
          {/* ????chage somethingd */}
          <p className="text-xl font-inter text-[#4D4D4D] mb-8">
            If you have a devotional and spiritually inclined mind, you are in
            the right place. Prashna Siddhi offers astrological guidance in an
            affordable, instant, and divinely inspired manner.
          </p>
          <button className="bg-[#101010] font-salernomi text-[20px] text-white px-6 py-3 rounded-lg hover:bg-[#333333]">
            Request your Consultation
          </button>
          {/* prashnasiddhi.com */}
          <div className="mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="24"
              viewBox="0 0 48 24"
              fill="none"
            >
              <circle cx="3" cy="12" r="3" fill="#1E1E2C" />
              <path
                d="M24.0015 24C24.0633 17.4338 29.3977 12.12 36 12.0386C29.3718 11.9568 24.0216 6.60173 24.001 0H24.0007C23.9802 6.60234 18.629 11.9578 12 12.0386C18.6032 12.1191 23.9385 17.4332 24.0003 24H24.0015Z"
                fill="#1E1E2C"
              />
              <circle cx="45" cy="12" r="3" fill="#1E1E2C" />
            </svg>
          </div>
        </div>
        <div className="mt-0">
          <Image
            src={hero}
            alt="Dummy"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

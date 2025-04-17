import Image from "next/image";
import hero from "./assets/Frame 35.png";
import "./style.css";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-[#F0EDE9] pb20 hero h-[710px] max-md:h-full max-md:pt-10">
      <div className="max-wxl  ml-20 mx-auto text-left items-center justify-center flex gap-20  max-md:ml-2 max-md:p-5  max-md:flex-wrap">
        <div className="w-1/2 z-[999] max-lg:w-full -20 max-md:mt-0 max-md:w-full">
          <div className="m">
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
          <h1 className="text-[64px] text-[#4D4D4D] font-salernomi font-normal mb-6 lhd:text-[100px] max max-fhd:bg-red-500 qhd:bg-purple-500">
            Welcome to
            <br />
            <span className="text-[#101010]">Prashna Siddhi</span>
          </h1>
          {/* ????chage somethingd */}
          <p className="text-xl font-inter text-[#4D4D4D] mb-8">
            If you have a <span className="text-[#101010]">devotional </span>{" "}
            and <span className="text-[#101010]">spiritually </span> inclined
            mind, you are in the right place.{" "}
            <span className="text-[#101010]">Prashna Siddhi </span> offers
            astrological guidance in an{" "}
            <span className="text-[#101010]">affordable, instant, </span> and
            <span className="text-[#101010]"> divinely </span> inspired manner.
          </p>
          <Link
            href="/booking"
            className="bg-[#101010] z-[999999] text-[20px] font-salernomi text-white px-[24px] py-[12px] rounded hover:bg-[#333333] transition-all duration-300 shadow-button"
          >
            Request your Consultation
          </Link>

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
        <div className="mt-0  max-md:h-full max-md:z-[9999999]">
          <Image
            src={hero}
            height={710}
            alt="home Hero"
            className="mx-auto max-md:z-[9999999] shadow-lg h-[710px] max-md:h-full"
          />
        </div>
      </div>
    </div>
  );
}

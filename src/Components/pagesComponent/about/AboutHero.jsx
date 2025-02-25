import Image from "next/image";
// import hero from "./assets/Frame 35.png";
import hero from "../Homecomponent/assets/Frame 35.png";

export default function AboutHero() {
  return (
    <div className="bg-[#F0EDE9] pb-20">
      <div className="max-wxl ml-20 mx-auto text-left items-start justify-center flex gap-20 max-md:flex-col max-md:items-center max-md:ml-2">
        <div className="w-1/2 max-lg:w-full h-[800px]">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h1 className="text-[56px] font-salernomi font-normal mb-6">
                Who I Am
              </h1>
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

            <div>
              <svg
                width="614"
                className="max-md:w-full"
                height="24"
                viewBox="0 0 614 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M307.002 24C307.063 17.4338 312.398 12.12 319 12.0386C312.372 11.9568 307.022 6.60173 307.001 0H307.001C306.98 6.60234 301.629 11.9578 295 12.0386C301.603 12.1191 306.938 17.4332 307 24H307.002Z"
                  fill="#D8D1C7"
                />
                <circle cx="282" cy="12" r="3" fill="#D8D1C7" />
                <circle cx="3" cy="12" r="3" fill="#D8D1C7" />
                <path d="M280 12L5 12" stroke="#D8D1C7" />
                <circle
                  cx="611"
                  cy="12"
                  r="2.5"
                  fill="#D8D1C7"
                  stroke="#D8D1C7"
                />
                <circle
                  cx="332"
                  cy="12"
                  r="2.5"
                  fill="#D8D1C7"
                  stroke="#D8D1C7"
                />
                <path d="M609 12L334 12" stroke="#D8D1C7" />
              </svg>

              <p className="text-xl font-inter text-[#4D4D4D] my-8">
                I am <span className="text-[#000]">K. Jagadish, </span> a
                77-year-old astrologer from Bangalore, India. My spiritual
                journey began at 20 when I was blessed to be in touch with a
                holy master. Initially an entrepreneur in{" "}
                <span className="text-[#000]">
                  Electronics & Communication,{" "}
                </span>{" "}
                I travelled extensively before fully dedicating myself to
                <span className="text-[#000]">
                  Astrology and Spiritual{" "}
                </span>{" "}
                Guidance in 1980.
              </p>
            </div>
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

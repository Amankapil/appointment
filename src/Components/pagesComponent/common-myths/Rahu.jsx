import Image from "next/image";
import React from "react";
import img from "./assets/image 10.png";

const Rahu = () => {
  return (
    <div className="manin bg max-w-7xl mx-auto py-20">
      <div className="head max-md:flex-wrap max-md:justify-center max-md:p-10 flex items-center justify-start gap-4">
        <div className="icon">
          <svg
            width="116"
            height="106"
            viewBox="0 0 116 106"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="52" cy="52" r="51" stroke="#AC8C60" strokeWidth="2" />
            <circle cx="52" cy="52" r="43" stroke="#AC8C60" strokeWidth="2" />
            <path
              d="M63.9844 61.6523C63.9844 65.1888 62.7812 68.1146 60.375 70.4297C57.9688 72.7266 54.9336 73.875 51.2695 73.875C48.2253 73.875 45.6185 73.1641 43.4492 71.7422C41.2982 70.3203 40.2227 68.7344 40.2227 66.9844C40.2227 66.2734 40.4414 65.6536 40.8789 65.125C41.1159 64.8698 41.3529 64.6784 41.5898 64.5508C41.8451 64.4232 42.1367 64.3594 42.4648 64.3594C43.2852 64.3594 43.9505 64.5872 44.4609 65.043C44.9714 65.4805 45.4727 66.237 45.9648 67.3125C46.4388 68.4609 46.8854 69.3906 47.3047 70.1016C47.7422 70.8125 48.1706 71.3411 48.5898 71.6875C49.3919 72.2891 50.4492 72.5898 51.7617 72.5898C53.8398 72.5898 55.4622 71.7148 56.6289 69.9648C57.8138 68.2148 58.4062 65.7083 58.4062 62.4453C58.4062 59.5286 57.8503 57.2682 56.7383 55.6641C55.6263 54.0417 54.0586 53.2305 52.0352 53.2305C51.8164 53.2305 51.6068 53.2305 51.4062 53.2305C51.2057 53.2305 50.9688 53.2487 50.6953 53.2852L49.6836 53.4219L49.6289 52.3281C52.2539 51.9271 54.1589 51.043 55.3438 49.6758C56.5469 48.2904 57.1484 46.2669 57.1484 43.6055C57.1484 40.9076 56.6562 38.8385 55.6719 37.3984C54.6875 35.9401 53.2747 35.2109 51.4336 35.2109C49.9388 35.2109 48.8359 35.5846 48.125 36.332C47.4141 37.0794 46.9401 38.3646 46.7031 40.1875C46.5938 41.2266 46.3021 42.0469 45.8281 42.6484C45.3542 43.25 44.7708 43.5508 44.0781 43.5508C43.3854 43.5508 42.7656 43.2956 42.2188 42.7852C41.7448 42.2201 41.5078 41.5638 41.5078 40.8164C41.5078 39.0482 42.5104 37.4714 44.5156 36.0859C46.5208 34.6823 48.9544 33.9805 51.8164 33.9805C53.3841 33.9805 54.7878 34.1992 56.0273 34.6367C57.2669 35.056 58.4154 35.7305 59.4727 36.6602C61.569 38.4466 62.6172 40.6341 62.6172 43.2227C62.6172 45.082 61.9974 46.7135 60.7578 48.1172C60.1198 48.8281 59.3177 49.4844 58.3516 50.0859C57.4036 50.6875 56.237 51.2526 54.8516 51.7812C57.7865 52.4557 60.0378 53.6771 61.6055 55.4453C63.1914 57.1953 63.9844 59.2643 63.9844 61.6523Z"
              fill="#AC8C60"
            />
            <path
              d="M8.00103 16C8.04222 11.6225 11.5984 8.08003 16 8.02572C11.5812 7.97119 8.01441 4.40116 8.00069 0H8.0005C7.98681 4.40156 4.41934 7.97184 0 8.02572C4.40212 8.07941 7.95897 11.6221 8.00019 16H8.00103Z"
              fill="#AC8C60"
            />
            <path
              d="M104.002 106C104.063 99.4338 109.398 94.12 116 94.0386C109.372 93.9568 104.022 88.6017 104.001 82H104.001C103.98 88.6023 98.629 93.9578 92 94.0386C98.6032 94.1191 103.938 99.4332 104 106H104.002Z"
              fill="#AC8C60"
            />
          </svg>
        </div>
        <h1 className="text-[56px] text-[#4D4D4D] text-left font-salernomi w-[60%] max-md:w-full font-normal mb-6">
          Rahu – The Most Misunderstood Shadow Planet
        </h1>
      </div>
      <div className="below max-md:flex-wrap max-lg:p-4  flex items-start justify-center mt-8">
        <div className="left w-1/2 max-lg:w-full">
          <p className="text-xl font-inter text-[#4D4D4D] mb-8 w-3/4 max-md:w-full ">
            Rahu is often feared due to{" "}
            <span className="text-[#000]">
              Rahu Kala and its 18-year Mahadasha,{" "}
            </span>
            leading many to believe it brings{" "}
            <span className="text-[#000]">bad luck and misfortunes. </span> But
            does Rahu only cause problems?
          </p>
        </div>
        <div className="right">
          <Image src={img} alt="l" />
        </div>
      </div>
      <div className="breaking mt-10">
        <h1 className="text-[40px] text-[#4D4D4D] text-center font-salernomi w-[100%] font-normal mb-6">
          The Truth About Rahu
        </h1>

        <div className="lis  max-lg:p-8  max-w-[846px] mx-auto space-y-4">
          <div
            style={{ boxShadow: "0px 0px 24px 2px #AC8C6066 inset" }}
            className="border-[1px] max-w-[826px]  border-[#AC8C60] items-center justify-center py-8 rounded-[24px] p-3 flex relative gap-10 font-inter bg-white shadow-md"
          >
            <div className="svg absolute -left-[27px]">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="27" cy="27" r="26.5" stroke="#AC8C60" />
                <path
                  d="M27.0035 54C27.1425 39.2259 39.1447 27.2701 54 27.0868C39.0866 26.9028 27.0486 14.8539 27.0023 0H27.0017C26.9555 14.8553 14.9153 26.905 0 27.0868C14.8572 27.268 26.8615 39.2247 27.0006 54H27.0035Z"
                  fill="#AC8C60"
                />
              </svg>
            </div>
            <p className="text-xl font-inter text-center text-[#4D4D4D] mb8 w-3/4 max-md:w-full ">
              Rahu is not a{" "}
              <span className="text-[#000]">
                physical planet—it is a shadow entity{" "}
              </span>{" "}
              formed at the intersection of the Moon’s orbit with Earth’s path
              around the Sun. Jupiter takes{" "}
            </p>
          </div>
          <div
            style={{ boxShadow: "0px 0px 24px 2px #AC8C6066 inset" }}
            className="border-[1px] max-w-[826px] border-[#AC8C60] items-center justify-center py-8 rounded-[24px] p-3 flex relative gap-10 font-inter bg-white shadow-md"
          >
            <div className="svg absolute -left-[27px]">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="27" cy="27" r="26.5" stroke="#AC8C60" />
                <path
                  d="M27.0035 54C27.1425 39.2259 39.1447 27.2701 54 27.0868C39.0866 26.9028 27.0486 14.8539 27.0023 0H27.0017C26.9555 14.8553 14.9153 26.905 0 27.0868C14.8572 27.268 26.8615 39.2247 27.0006 54H27.0035Z"
                  fill="#AC8C60"
                />
              </svg>
            </div>
            <p className="text-xl font-inter text-center text-[#4D4D4D] mb8 w-3/4 max-md:w-full ">
              It represents{" "}
              <span className="text-[#000]">
                ambitions, desires, and karmic influences,
              </span>{" "}
              acting as a{" "}
              <span className="text-[#000]">
                cosmic accountant of past and present deeds.{" "}
              </span>{" "}
            </p>
          </div>
          <div
            style={{ boxShadow: "0px 0px 24px 2px #AC8C6066 inset" }}
            className="border-[1px] w-full max-w-[826px]  border-[#AC8C60] items-center justify-center py-8 rounded-[24px] p-3 flex relative gap-10 font-inter bg-white shadow-md"
          >
            <div className="svg absolute -left-[27px]">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="27" cy="27" r="26.5" stroke="#AC8C60" />
                <path
                  d="M27.0035 54C27.1425 39.2259 39.1447 27.2701 54 27.0868C39.0866 26.9028 27.0486 14.8539 27.0023 0H27.0017C26.9555 14.8553 14.9153 26.905 0 27.0868C14.8572 27.268 26.8615 39.2247 27.0006 54H27.0035Z"
                  fill="#AC8C60"
                />
              </svg>
            </div>
            <p className="text-xl font-inter text-center text-[#4D4D4D] mb8 w-3/4 max-md:w-full ">
              Its effects vary based on{" "}
              <span className="text-[#000]">
                placement, nakshatra, planetary aspects, and individual karma.{" "}
              </span>
            </p>
          </div>

          <h1 className="text-[40px] text-[#4D4D4D] text-center font-salernomi w-[100%] font-normal mb-6">
            Spiritual Meaning of Rahu
          </h1>
        </div>

        <div className="flex items-center flex-col w-[100%] mt-8  justify-center text-center">
          <h1 className="text-[40px] text-[#4D4D4D] w-[80%] max-lg:w-full text-center font-salernomi font-normal mb-6">
            Instead of fearing Rahu, use its energy for self-improvement, deep
            thinking, and spiritual growth.
          </h1>{" "}
        </div>
      </div>
    </div>
  );
};

export default Rahu;

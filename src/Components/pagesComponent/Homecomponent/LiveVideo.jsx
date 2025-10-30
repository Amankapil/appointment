"use client";
import YouTube from "react-youtube";

const LiveVideo = () => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1, // Auto play the video
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo(); // Pause the video when ready
  };

  return (
    <>
      <div className="bg-[#fff] py-20 max-md:py-10 max-xl:px-7">
        <div className="heading flex flex-col items-center justify-center">
          <h1 className="text-[64px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
            Watch how Siddhi Live works in 59 seconds
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
          </svg>{" "}
          <div className="bg-white mt-10 flex items-center justify-center max-md:w-full">
            <YouTube
              className="max-md:w-full"
              videoId="VXxDPBnRoGE"
              opts={opts}
              onReady={onReady}
            />
          </div>
          <div className="flex items-center mt-10 flex-col w1/2 max-lg:w-full max-md:w-full max-md:h-full max-md:p-10  justify-center text-center">
            <p className="text-xl font-inter text-[#4D4D4D] mb-8">
              Note -{" "}
              <i>
                If you miss the Live Hour, you can still use the scheduler to
                book your slot.{" "}
              </i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveVideo;

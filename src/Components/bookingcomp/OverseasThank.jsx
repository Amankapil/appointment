import Image from "next/image";

export default function OverseasThank({
  formData,
  result,
  selectedTime,
  error,
  svgUrl,
  duration,
  selectedDate,
  actualTime,
}) {
  // console.log(svgUrl);
  return (
    <div className="min-hscreen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        {/* Title Section */}
        <h2 className="text-2xl font-semibold">Confirmed your details </h2>
        <p className="text-gray-600 mt-1">
          Review your horoscope and appointment details before your consultation
        </p>

        {/* Main Content Section */}
        <div className="flex items-center justify-between gap-6 mt-6 max-md:flex-col">
          {/* Consultation Overview */}
          <div className="w-1/2 max-md:w-full">
            <h3 className="text-lg font-semibold">Consultation Overview</h3>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Duration:</span> {duration} min
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Time Slot:</span> {selectedTime}
            </p>
            <p className="text-gray-700 w-[50%]">
              <span className="font-semibold">Date:</span>{" "}
              {selectedDate.toString()}
            </p>
            {/* <p className="text-gray-700">
              <span className="font-semibold">Astrologer:</span> [Astrologer’s
              Name]
            </p> */}

            {/* Booking Details */}
            <h3 className="text-lg font-semibold mt-6">Booking Details</h3>
            {/* <p className="text-gray-700 mt-2">
              <span className="font-semibold">Meeting Platform:</span> Google
              Meet / WhatsApp Call
            </p> */}
            <p className="text-gray-700">
              <span className="font-semibold">WhatsApp Number:</span>{" "}
              {formData.phone}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Payment Status:</span> UnPaid
            </p>
            {/* <p className="text-gray-700">
              <span className="font-semibold">Booking Reference:</span> [Unique
              Booking ID]
            </p> */}
          </div>

          {/* Horoscope Preview */}

          {/* Horoscope Preview */}
          <div className="bggray-100 rounded-lg p-6 flex flex-col mt-10 items-center justify-center">
            <h3 className="text-lg font-semibold">
              Your Personalized Horoscope
            </h3>

            <div className="bggray-200 w-full h-full flex items-center justify-center mt-4 rounded-lg">
              {!svgUrl ? (
                <span className="text-gray-500">Loading Horoscope...</span>
              ) : (
                <Image
                  width={300}
                  height={250}
                  src={svgUrl}
                  alt="Kundli Chart"
                  className="mt-4 border rounded shadow"
                />
              )}
            </div>

            <a
              href={svgUrl || "#"}
              download={
                svgUrl ? `horoscope_${formData.fullName}.svg` : undefined
              }
              className="mt-4 w-full bg-gray-300 px-10 text-gray-800 py-2 text-center rounded-lg font-medium hover:bg-gray-400 transition"
            >
              {svgUrl ? "Download" : "Loading Horoscope..."}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

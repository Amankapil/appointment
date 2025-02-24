import Image from "next/image";

export default function ThankYouScreen({
  formData,
  result,
  selectedTime,
  error,
  svgUrl,
}) {
  console.log(result);
  return (
    <div className="min-hscreen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        {/* Title Section */}
        <h2 className="text-2xl font-semibold">Confirmed your details </h2>
        <p className="text-gray-600 mt-1">
          Review your horoscope and appointment details before your consultation
        </p>

        {/* Main Content Section */}
        <div className="flex items-center justify-between gap-6 mt-6">
          {/* Consultation Overview */}
          <div>
            <h3 className="text-lg font-semibold">Consultation Overview</h3>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Duration:</span> 1 hour
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Time Slot:</span> {selectedTime}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Date:</span> {formData.dob}
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
          <div className="bgray-100 rounded-lg p-6 flex flex-col mt-10 items-center justify-center">
            {/* <h3 className="text-lg font-semibold">
              Your Personalized Horoscope
            </h3> */}
            <div className="bggray-200 w-full h40 flex items-center justify-center mt-4 rounded-lg">
              {/* <span className="text-gray-500">Preview</span> */}
              {svgUrl && (
                <Image
                  width={300}
                  height={250}
                  src={svgUrl}
                  alt="Kundli Chart"
                  className="mt-4 border rounded shadow"
                />
              )}
            </div>
            {/* <button className="mt-4 w-full bg-gray-300 text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-400 transition">
              Download
            </button> */}
          </div>
        </div>

        {/* Done Button */}
        <div className="flex justify-center mt-6">
          {/* <button className="bg-gray-400 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-500 transition">
            Done
          </button> */}
        </div>
      </div>
    </div>
  );
}

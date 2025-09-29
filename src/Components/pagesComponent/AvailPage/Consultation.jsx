import Link from "next/link";

const pricingData = [
  { minutes: 7, price: 499 },
  { minutes: 15, price: 1000 },
  { minutes: 30, price: 2000 },
  { minutes: 45, price: 2500 },
];
const pricingData2 = [
  { minutes: 7, price: 20 },
  { minutes: 15, price: 35 },
  { minutes: 30, price: 55 },
  { minutes: 45, price: 90 },
];

export default function Consultation() {
  return (
    <>
      <h1 className="text-[56px] mt-20 max-md:p-4 max-md:text-[40px] text-[#4D4D4D] text-center font-salernomi w-[100%] font-normal mb-6">
        Consultation Durations & Fees
      </h1>
      <div className="bg-[#fff] flex flex-col items-center px-4 py-10">
        <h2 className="text-[40px] max-md:text-center  text-[#a88345] mb-10 font-salernomi">
          Resident Indian Clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl ">
          {pricingData.map((item, index) => (
            <div
              key={index}
              className="bg-[#F0EDE9] border border-[#AC8C60] min-h-[352px] rounded-xl p-6 flex flex-col items-center justify-between shadow-sm"
            >
              <div>
                <h3 className="text-[28px] font-salernomi text-gray-700 mb-2">
                  Precious {item.minutes} minutes
                </h3>

                <div className="w-[60px] mx-auto h-[2px] bg-[#D8D1C7] my-2" />
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flexcol items-center justify-center">
                  <p className="text-[32px] font- font-[400] text-black mb-1">
                    ₹{item.price}
                  </p>
                  <p className="text-[16px] text-gray-600 mb4">
                    / Resident Indians
                  </p>
                </div>
                <div className="w-[60px] mx-auto h-[2px] bg-[#D8D1C7] my-1" />
                <Link
                  href="/booking"
                  className="mt-4 w-full text-center bg-black text-[20px] font-salernomi text-white px-6 py-2 rounded hover:bg-gray-800 transition"
                >
                  Request Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#fff] flex flex-col items-center px-4 py-10">
        <h2 className="text-[40px] max-md:text-center  text-[#a88345] mb-10 font-salernomi">
          Overseas / NRI Clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl ">
          {pricingData2.map((item, index) => (
            <div
              key={index}
              className="bg-[#F0EDE9] border border-[#AC8C60] min-h-[352px] rounded-xl p-6 flex flex-col items-center justify-between shadow-sm"
            >
              <div>
                <h3 className="text-[28px] font-salernomi text-gray-700 mb-2">
                  Precious {item.minutes} minutes
                </h3>

                <div className="w-[60px] mx-auto h-[2px] bg-[#D8D1C7] my-2" />
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flexcol items-center justify-center">
                  <p className="text-[32px] font- font-[400] text-black mb-1">
                    ${item.price}
                  </p>
                  <p className="text-[16px] text-gray-600 mb4">
                    / Resident Indians
                  </p>
                </div>
                <div className="w-[60px] mx-auto h-[2px] bg-[#D8D1C7] my-1" />
                <Link
                  href="/booking"
                  className="mt-4 w-full text-center bg-black text-[20px] font-salernomi text-white px-6 py-2 rounded hover:bg-gray-800 transition"
                >
                  Request Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{ boxShadow: "0px 0px 24px 2px #AC8C6066 inset" }}
        className="border-[1px] max-w-[1252px] mx-auto max-md:pl-8  border-[#AC8C60] items-center justify-start py-8 rounded-[24px] p-5 flex relative gap-10 font-inter bg-white shadow-md"
      >
        <p className="text-xl font-inter text-[#4D4D4D] mb8 w-3/4 max-md:w-full ">
          Note: Clients must ensure net payment after bank/transfer charges
          matches the consultation fee.
        </p>
      </div>
    </>
  );
}

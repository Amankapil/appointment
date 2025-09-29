import Image from "next/image";

export default function RequestAppointment() {
  return (
    <div className="bg-[#f8f5f1] py-12 mt-12 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-salernomi text-gray-800 mb-6 text-center">
        How to Request Appointment
      </h2>

      <div className="w-12 h-1 bg-[#a88345] rounded-full mb-10" />

      {/* Option 1 */}
      <div className="w-full max-w-7xl bg-[#FFFFFF] border-[2px] border-[#AC8C60] rounded-xl p-6 mb-6 shadow-sm">
        <div className="flex items-start flex-col space-x-4 mb-4">
          <div className="flex flex-col items-center justify-center font-semibold">
            <svg
              width="117"
              height="107"
              viewBox="0 0 117 107"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="52.1914"
                cy="52.7178"
                r="51"
                stroke="#AC8C60"
                stroke-width="2"
              />
              <g filter="url(#filter0_i_1164_4234)">
                <circle cx="52.1914" cy="52.7178" r="44" fill="white" />
              </g>
              <circle
                cx="52.1914"
                cy="52.7178"
                r="43"
                stroke="#AC8C60"
                stroke-width="2"
              />
              <path
                d="M57.4219 73.7178H47.332L47.3594 72.8975C48.2526 72.8975 48.8997 72.4964 49.3008 71.6943C49.7201 70.874 49.9297 69.6162 49.9297 67.9209L49.957 43.8857C49.957 42.5915 49.6198 41.598 48.9453 40.9053C48.6536 40.6136 48.2617 40.3766 47.7695 40.1943C47.2773 39.9938 46.7031 39.8936 46.0469 39.8936V39.0732C47.2135 38.7816 48.4622 38.2712 49.793 37.542C50.4492 37.1592 51.0964 36.7399 51.7344 36.2842C52.3906 35.8102 53.056 35.2816 53.7305 34.6982H54.8516V67.9209C54.8516 69.6709 55.0521 70.9378 55.4531 71.7217C55.8542 72.5055 56.5104 72.8975 57.4219 72.8975V73.7178Z"
                fill="#AC8C60"
              />
              <path
                d="M8.19244 16.7178C8.23362 12.3403 11.7898 8.7978 16.1914 8.74349C11.7726 8.68896 8.20581 5.11893 8.19209 0.717773H8.19191C8.17822 5.11934 4.61075 8.68962 0.191406 8.74349C4.59353 8.79718 8.15038 12.3399 8.19159 16.7178H8.19244Z"
                fill="#AC8C60"
              />
              <path
                d="M104.193 106.718C104.255 100.152 109.589 94.8378 116.191 94.7564C109.563 94.6746 104.213 89.3195 104.192 82.7178H104.192C104.172 89.3201 98.8204 94.6755 92.1914 94.7564C98.7946 94.8369 104.13 100.151 104.192 106.718H104.193Z"
                fill="#AC8C60"
              />
              <defs>
                <filter
                  id="filter0_i_1164_4234"
                  x="8.19141"
                  y="8.71777"
                  width="88"
                  height="88"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1.2"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect1_innerShadow_1164_4234"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="7.2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.67451 0 0 0 0 0.54902 0 0 0 0 0.376471 0 0 0 0.4 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_1164_4234"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div>
            <h3 className="text-md font-salernomi mt-4 font-semibold text-gray-700 mb-2">
              Option 1: Website
            </h3>
            <ul className="list-decimal text-[20px] list-inside text-gray-700 space-y-1">
              <li>Visit the Services Page.</li>
              <li>Choose your consultation duration.</li>
              <li>Pay securely through the payment gateway.</li>
              <li>Get instant confirmation and WhatsApp details.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Option 2 */}
      <div className="w-full max-w-7xl bg-[#FFFFFF] border-[2px] border-[#AC8C60] rounded-xl p-6 mb-6 shadow-sm">
        <div className="flex items-start flex-col space-x-4 mb-4">
          <div className="flex flex-col items-center justify-center">
            <svg
              width="117"
              height="107"
              viewBox="0 0 117 107"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="52.1914"
                cy="52.7178"
                r="51"
                stroke="#AC8C60"
                stroke-width="2"
              />
              <g filter="url(#filter0_i_1164_4244)">
                <circle cx="52.1914" cy="52.7178" r="44" fill="white" />
              </g>
              <circle
                cx="52.1914"
                cy="52.7178"
                r="43"
                stroke="#AC8C60"
                stroke-width="2"
              />
              <path
                d="M63.3281 46.0186C63.3281 47.2946 63.1003 48.5251 62.6445 49.71C62.2435 50.8766 61.569 52.098 60.6211 53.374C59.6914 54.6501 57.4401 56.5915 53.8672 59.1982L52.6914 60.0186C51.6341 60.7842 50.5495 61.6318 49.4375 62.5615C48.3438 63.473 47.4596 64.2477 46.7852 64.8857C45.2174 66.3623 43.8867 67.8936 42.793 69.4795H54.6875C56.7839 69.4795 58.388 69.1878 59.5 68.6045C60.5391 67.9847 61.3411 66.9912 61.9062 65.624L62.7266 65.7881L60.8672 73.7178H39.1836V72.7881L40.4688 70.8193C41.599 69.1423 42.9388 67.4014 44.4883 65.5967C46.1289 63.7008 47.9336 61.7959 49.9023 59.8818L51.7891 57.9951C52.8281 56.9378 53.7305 55.8805 54.4961 54.8232C55.2617 53.766 55.8815 52.736 56.3555 51.7334C57.2852 49.6553 57.75 47.4587 57.75 45.1436C57.75 42.3545 57.194 40.1123 56.082 38.417C54.9883 36.7217 53.5117 35.874 51.6523 35.874C50.0846 35.874 48.918 36.2933 48.1523 37.1318C47.7695 37.5511 47.4505 38.098 47.1953 38.7725C46.9583 39.4469 46.8398 40.2308 46.8398 41.124C46.8398 41.8532 46.7487 42.4821 46.5664 43.0107C46.4023 43.5394 46.1562 44.0316 45.8281 44.4873C45.263 45.2529 44.5156 45.6357 43.5859 45.6357C42.8932 45.6357 42.3099 45.3805 41.8359 44.8701C41.3802 44.3415 41.1523 43.6488 41.1523 42.792C41.1523 40.7321 42.2005 38.8727 44.2969 37.2139C46.4115 35.5368 48.8997 34.6982 51.7617 34.6982C55.1523 34.6982 57.9232 35.7555 60.0742 37.8701C62.2435 39.9665 63.3281 42.6826 63.3281 46.0186Z"
                fill="#AC8C60"
              />
              <path
                d="M8.19244 16.7178C8.23362 12.3403 11.7898 8.7978 16.1914 8.74349C11.7726 8.68896 8.20581 5.11893 8.19209 0.717773H8.19191C8.17822 5.11934 4.61075 8.68962 0.191406 8.74349C4.59353 8.79718 8.15038 12.3399 8.19159 16.7178H8.19244Z"
                fill="#AC8C60"
              />
              <path
                d="M104.193 106.718C104.255 100.152 109.589 94.8378 116.191 94.7564C109.563 94.6746 104.213 89.3195 104.192 82.7178H104.192C104.172 89.3201 98.8204 94.6755 92.1914 94.7564C98.7946 94.8369 104.13 100.151 104.192 106.718H104.193Z"
                fill="#AC8C60"
              />
              <defs>
                <filter
                  id="filter0_i_1164_4244"
                  x="8.19141"
                  y="8.71777"
                  width="88"
                  height="88"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="1.2"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect1_innerShadow_1164_4244"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="7.2" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.67451 0 0 0 0 0.54902 0 0 0 0 0.376471 0 0 0 0.4 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_1164_4244"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div>
            <h3 className="text-[20px] mt-4 font-salernomi font-semibold text-gray-700 mb-2">
              Option 2: WhatsApp
            </h3>
            <ul className="list-decimal text-[20px] list-inside text-gray-700 space-y-1">
              <li>
                Share birth details (Name, Date, Time, Place) via WhatsApp.
              </li>
              <li>Mention preferred consultation duration.</li>
              <li>
                Confirm payment via UPI/Bank Transfer (India) or Overseas – Any
                money transfer agencies like Xoom, Remitly or Bank Transfer.{" "}
                <span className="text-[#AC8C60] font-medium">
                  Please ensure net payment after transfer charges matches
                  consultation fee.
                </span>
              </li>
              <li>Share screenshot of payment on WhatsApp.</li>
            </ul>
          </div>
        </div>

        {/* Payment Info */}
        <div className="mt-6 text-gray-800 text-[20px]">
          <h4 className="font-semibold mb-2">Payment Details</h4>
          <p>
            <strong>K Jagadish</strong>
            <br />
            ICICI Bank Savings Bank Account Number: 029601515128
            <br />
            Base Branch: Rajajinagar, Bangalore, INDIA
            <br />
            IFSC Code: ICIC0000296
          </p>

          <p className="mt-4">You can also use UPI ID:</p>
          <ul className="list-disc list-inside text-[#AC8C60] underline space-y-1">
            <li>
              <a href="upi://pay?pa=7259691375@icici">
                UPI 1 : 7259691375@icici
              </a>
            </li>
            <li>
              <a href="upi://pay?pa=kjagadish@upi">UPI 2 : kjagadish@upi</a>
            </li>
            <li>
              <a href="upi://pay?pa=jagadish.k48@okicici">
                UPI 3 : jagadish.k48@okicici
              </a>
            </li>
          </ul>

          <div className="mt-4">
            <Image
              src="/images/image 24.png"
              alt="UPI QR Code"
              className="w-32 h-32 object-contain"
              width={100}
              height={100}
            />
            <p className="text-xs text-gray-500 mt-2">
              Scan this QR code or use UPI IDs above for payments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

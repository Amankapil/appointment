// export default function StepSuccess({ onClose }) {
//   return (
//     <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-[9999]">
//       <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-lg relative">
//         <div className="text-center py-6">
//           <button
//             onClick={onClose}
//             className="absolute top-3 right-4 text-gray-600 hover:text-black"
//           >
//             ✕
//           </button>
//           <h3 className="text-green-600 text-lg font-bold mb-2">
//             Payment Successful 🎉
//           </h3>
//           <p className="text-gray-700">
//             You will receive a call from <strong>K Jagadish</strong> in the
//             upcoming minutes. Thank you for your time!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

export default function StepSuccess({ onClose, name }) {
  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        <div className="text-center py-4">
          <h3 className="text-green-600 text-lg font-bold mb-3">
            Payment Successful 🎉
          </h3>

          <div className="text-gray-700 text-sm leading-relaxed text-left space-y-2">
            <p>
              Hello <strong>{name}</strong>,
            </p>
            <p>
              Thank you for your payment of <strong>₹499</strong> for your live
              chat session with <strong>PrashnaSiddhi</strong>.
            </p>
            <p>
              Your session is confirmed for{" "}
              <strong>today between 1 PM and 2 PM (IST)</strong>.
            </p>
            <p>Here are your session details:</p>
            <ul className="list-none space-y-1">
              <li>
                👤 <strong>Expert:</strong> Mr. K. Jagadish (Founder,
                PrashnaSiddhi)
              </li>
              <li>
                📞 <strong>Contact:</strong> +91 7259691375
              </li>
              <li>
                💬 <strong>Mode:</strong> Live Chat (Phone / WhatsApp)
              </li>
              <li>
                🕐 <strong>Time:</strong> 1 PM – 2 PM IST
              </li>
            </ul>
            <p>
              Please make sure to contact Mr. Jagadish during the above time
              slot.
            </p>
            <p>We’re looking forward to guiding you soon!</p>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            — Team PrashnaSiddhi <br />
            🌐{" "}
            <a
              href="https://www.prashnasiddhi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              www.prashnasiddhi.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

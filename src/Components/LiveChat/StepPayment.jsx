// "use client";
// import { useEffect } from "react";

// export default function StepPayment({ htmlContent, onSuccess }) {
//   useEffect(() => {
//     // Listen for PayU callback or redirect after success
//     const handleMessage = (event) => {
//       if (event.data?.status === "success") {
//         onSuccess();
//       }
//     };
//     window.addEventListener("message", handleMessage);
//     return () => window.removeEventListener("message", handleMessage);
//   }, [onSuccess]);

//   return (
//     <div className="text-center">
//       <h2 className="text-lg font-semibold mb-3">Complete Your Payment</h2>
//       <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
//     </div>
//   );
// }

"use client";
import { useEffect, useRef } from "react";

export default function StepPayment({ htmlContent, onSuccess }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!htmlContent || !containerRef.current) return;

    // Parse HTML string safely and append to container
    containerRef.current.innerHTML = htmlContent;

    // Find and auto-submit the PayU form
    const form = containerRef.current.querySelector("form");
    if (form) {
      form.submit();
    }
  }, [htmlContent]);

  useEffect(() => {
    // Optional: Listen for message from PayU success redirect
    const handleMessage = (event) => {
      if (event.data?.status === "success") {
        onSuccess();
      }
    };
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [onSuccess]);

  return (
    <div className="text-center py-6">
      <h2 className="text-lg font-semibold mb-3">Redirecting to Payment...</h2>
      <p className="text-gray-600 mb-2">
        Please wait while we redirect yo u to PayU checkout.
      </p>
      <div ref={containerRef}></div>
    </div>
  );
}

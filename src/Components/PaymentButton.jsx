"use client";

import { useEffect, useState } from "react";

export default function PaymentButton({
  setPaymentStatus,
  paydata,
  selectedTime,
  svgdata,
  selectedDate,
  duration,
}) {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (duration === 30) {
      setAmount(3000);
    } else {
      setAmount(1500);
    }
    console.log(duration);
  }, [duration]);

  console.log(paydata);

  // const blobToBase64 = (blob) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(blob);
  //     reader.onloadend = () => resolve(reader.result);
  //     reader.onerror = reject;
  //   });
  // };

  const initiatePayment = async () => {
    setLoading(true);

    const svgBase64 = await blobToBase64(svgdata);
    console.log(svgBase64);
    // localStorage.setItem("svg", svgBase64);
    // const svggg = localStorage.getItem("svg");

    try {
      const response = await fetch("/api/payment/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: paydata.fullName,
          email: paydata.email,
          phone: paydata.phone,
          tob: paydata.timeOfBirth,
          dob: paydata.dob,
          gender: paydata.gender,
          svgUrl: svggg,
          country: paydata.country,
          state: paydata.state,
          city: paydata.city,
          selectedTime: selectedTime,
          selectedDate: selectedDate,
          amount: "1.00", // 1 INR for testing
        }),
      });

      const { payUData, url } = await response.json();

      console.log(payUData, url);

      if (!payUData || !url) {
        alert("Invalid response from server");
      }

      const form = document.createElement("form");
      form.method = "POST";
      form.action = url;

      Object.keys(payUData).forEach((key) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = payUData[key];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      alert("Payment initiation failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="border bg-lime-300 px-10 py-1 rounded-md"
      onClick={initiatePayment}
      disabled={loading}
    >
      {loading ? "Processing..." : `Pay ${amount}`}
    </button>
  );
}

// "use client";

// import { useState } from "react";

// export default function PaymentButton({
//   setPaymentStatus,
//   paydata,
//   selectedTime,
//   selectedDate,
// }) {
//   const [loading, setLoading] = useState(false);
//   const [svgFile, setSvgFile] = useState(null);

//   const initiatePayment = async () => {
//     if (!svgFile) {
//       alert("Please select an SVG file before proceeding.");
//       return;
//     }

//     setLoading(true);

//     const formData = new FormData();
//     formData.append("file", svgFile);
//     formData.append("name", paydata.fullName);
//     formData.append("email", paydata.email);
//     formData.append("phone", paydata.phone);
//     formData.append("tob", paydata.timeOfBirth);
//     formData.append("dob", paydata.dob);
//     formData.append("gender", paydata.gender);
//     formData.append("country", paydata.country);
//     formData.append("state", paydata.state);
//     formData.append("city", paydata.city);
//     formData.append("selectedTime", selectedTime);
//     formData.append("selectedDate", selectedDate);
//     formData.append("amount", "1.00");

//     try {
//       const response = await fetch("/api/payment/test", {
//         method: "POST",
//         body: formData,
//       });

//       const { payUData, url } = await response.json();

//       if (!payUData || !url) {
//         throw new Error("Invalid response from server");
//       }

//       const form = document.createElement("form");
//       form.method = "POST";
//       form.action = url;

//       Object.keys(payUData).forEach((key) => {
//         const input = document.createElement("input");
//         input.type = "hidden";
//         input.name = key;
//         input.value = payUData[key];
//         form.appendChild(input);
//       });

//       document.body.appendChild(form);
//       form.submit();
//     } catch (error) {
//       console.error("Payment initiation failed", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         accept="image/svg+xml"
//         onChange={(e) => setSvgFile(e.target.files[0])}
//         className="mb-2"
//       />
//       <button
//         className="border bg-lime-300 px-10 py-1 rounded-md"
//         onClick={initiatePayment}
//         disabled={loading}
//       >
//         {loading ? "Processing..." : "Pay ₹1"}
//       </button>
//     </div>
//   );
// }

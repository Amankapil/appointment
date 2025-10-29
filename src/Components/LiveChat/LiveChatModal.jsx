"use client";
import { useEffect, useState } from "react";
import StepUserDetails from "./StepUserDetails";
import StepPayment from "./StepPayment";
import StepSuccess from "./StepSuccess";
// import StepUserDetails from "./StepUserDetails";
// import StepPayment from "./StepPayment";
// import StepSuccess from "./StepSuccess";

export default function LiveChatModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [paymentHTML, setPaymentHTML] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [txnid, setTxnid] = useState("");

  const handleUserSubmit = async (data) => {
    setUserData(data);
    const res = await fetch("/api/live-chat/initiate-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    // const response = await res.json();
    // console.log("new res", response);
    // if (response.payUData) {
    //   setPaymentData(response.payUData);
    //   setTxnid(response.txnid);
    //   setStep(2);
    // }

    const { payUData, url } = await res.json();

    if (!payUData || !url) {
      alert("Invalid response from server");
      return;
    }

    const form = document.createElement("form");
    form.method = "POST";
    form.action = url;
    form.target = "_self"; // Open in the same tab (avoids Safari pop-up block)

    Object.keys(payUData).forEach((key) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = payUData[key];
      form.appendChild(input);
    });

    document.body.appendChild(form);

    // Submit the form after a small delay
    setTimeout(() => {
      form.submit();
    }, 100);

    // if (response.paymentForm) {
    //   setPaymentHTML(response.paymentForm);
    //   setStep(2);
    //   setTxnid(response.txnid);
    // }
  };

  // Check for payment success in URL parameters
  useEffect(() => {
    const checkPaymentStatus = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const paymentStatus = urlParams.get("payment");
      const txnidFromUrl = urlParams.get("txnid");
    };

    if (txnid) {
      checkPaymentStatus();
    }
  }, [txnid]);
  const handlePaymentSuccess = async () => {
    setPaymentSuccess(true);
    setStep(3);
  };

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 hover:text-black"
        >
          ✕
        </button>

        {step === 1 && <StepUserDetails onSubmit={handleUserSubmit} />}
        {step === 2 && (
          <StepPayment
            htmlContent={paymentHTML}
            onSuccess={handlePaymentSuccess}
          />
        )}
        {step === 3 && <StepSuccess />}
      </div>
    </div>
  );
}

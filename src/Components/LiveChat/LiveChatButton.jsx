"use client";
import { Suspense, useEffect, useState } from "react";
import LiveChatModal from "./LiveChatModal";
import StepSuccess from "./StepSuccess";
import { useSearchParams } from "next/navigation";
import { pushToDataLayer } from "@/lib/gtm";

export default function LiveChatButton() {
  const [showModal, setShowModal] = useState(false);
  const [showSucess, setshowSucess] = useState(false);
  const [name, setname] = useState(false);
  const searchParams = useSearchParams();

  const handleClick = () => {
    pushToDataLayer("live_siddhi_popup_open");
    // Get current time in IST
    const now = new Date();
    const options = {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    const istTime = new Intl.DateTimeFormat("en-IN", options).format(now);
    const [hour] = istTime.split(":").map(Number);

    // setShowModal(true);
    // Check if time is between 13:00 (1 PM) and 14:00 (2 PM)
    if ((hour >= 13 && hour < 14) || (hour >= 20 && hour < 22)) {
      setShowModal(true);
    } else {
      if (
        (hour >= 13 && hour < 14) ||
        (hour >= 20 && hour < 22) ||
        (hour === 20 && minutes >= 30)
      ) {
        setShowModal(true);
      } else {
        alert("Live chat is available only between 1 PM and 2 PM IST.");
      }
      alert("Live chat is available only between 1 PM and 2 PM IST.");
    }
  };

  useEffect(() => {
    const payment = searchParams.get("payment");
    const txnid = searchParams.get("txnid");
    const namee = searchParams.get("name");

    if (payment === "success" && txnid) {
      // toast.success(`Payment Successful! Transaction ID: ${txnid}`);
      // Remove query params
      setname(namee);
      setshowSucess(true);
      const newUrl = window.location.pathname;
      window.history.replaceState({}, "", newUrl);
    }
  }, [searchParams]);

  return (
    <>
      {/* Floating Button */}

      <div className="fixed bottom-[40%] right-6 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg z-50 hover:bg-blue-700 transition-all">
        <button
          onClick={handleClick}
          // className="fixed bottom-[40%] right-6 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg z-50 hover:bg-blue-700 transition-all"
        >
          💬 Live Chat with K Jagadish
          {/* Availability Note */}
          <p className=" text-xs text-white bgwhite px-1 py-1 rounded-md ">
            Available between 1 PM - 2 PM and 8:30 PM to 10 PM IST.
          </p>
        </button>
      </div>

      {/* Modal */}
      {showModal && <LiveChatModal onClose={() => setShowModal(false)} />}
      {showSucess && (
        <StepSuccess onClose={() => setshowSucess(false)} name={name} />
      )}
    </>
  );
}

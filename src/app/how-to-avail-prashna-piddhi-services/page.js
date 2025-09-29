import AvailFaq from "@/Components/pagesComponent/AvailPage/AvailFaq";
import AvailHero from "@/Components/pagesComponent/AvailPage/AvailHero";
import Consultation from "@/Components/pagesComponent/AvailPage/Consultation";
import Different from "@/Components/pagesComponent/AvailPage/Different";
import Instructions from "@/Components/pagesComponent/AvailPage/Instructions";
import Productivity from "@/Components/pagesComponent/AvailPage/Productivity";
import Remedies from "@/Components/pagesComponent/AvailPage/Remedies";
import RequestAppointment from "@/Components/pagesComponent/AvailPage/RequestAppointment";
import Script from "next/script";
import React from "react";

const page = () => {
  return (
    <>
      <AvailHero />
      <Different />
      <Consultation />
      <RequestAppointment />
      <Remedies />
      <Productivity />
      <Instructions />
      <AvailFaq />

      <Script
        id="ld-json-avail"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Can I ask about more than one person in a consultation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Consultations are time-based, not person-based. In a 30-minute session, you can easily ask about multiple family members.",
                },
              },
              {
                "@type": "Question",
                name: "What details should I share before the consultation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Prashna Kundali does not require birth details, but you may share your name, date, time, and place of birth via WhatsApp for refined guidance.",
                },
              },
              {
                "@type": "Question",
                name: "Do you only go by the website scheduler?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Clients unfamiliar with online scheduling can also book via WhatsApp at a mutually convenient time.",
                },
              },
              {
                "@type": "Question",
                name: "How is a 7-minute consultation useful?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A 7-minute slot is perfect for a single focused question, such as a job decision or timing-related clarity.",
                },
              },
              {
                "@type": "Question",
                name: "What happens in longer consultations?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "15 minutes covers 2–3 questions with remedies. 30 minutes allows family-related questions. 45 minutes is for complex, detailed situations.",
                },
              },
              {
                "@type": "Question",
                name: "Are remedies included in the consultation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, only zero-cost spiritual remedies are suggested. Video and article links are shared. No paid remedies or products are recommended.",
                },
              },
              {
                "@type": "Question",
                name: "Can I record the consultation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, you may record the audio call for your personal use. No written reports are provided.",
                },
              },
              {
                "@type": "Question",
                name: "What if I need to reschedule?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Rescheduling can be requested via WhatsApp and will be adjusted by mutual convenience.",
                },
              },
              {
                "@type": "Question",
                name: "How do I pay?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Resident Indians: UPI, Net Banking, Cards. Overseas: Credit Card, PayPal, or supported gateways.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
};

export default page;

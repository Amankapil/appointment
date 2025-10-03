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
                name: "Can I ask about multiple people?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Sessions are time-based, not person-based. In 30 minutes, you can ask about multiple family members.",
                  audio: {
                    "@type": "AudioObject",
                    contentUrl: "https://prashnasiddhi.com/AvailFAQ/A1.mp3",
                    encodingFormat: "audio/mpeg",
                    description:
                      "Audio answer about 'Can I ask about multiple people?' by K. Jagadish.",
                    uploadDate: "2025-10-03",
                    inLanguage: "en",
                    duration: "PT08S",
                  },
                },
              },
              {
                "@type": "Question",
                name: "Do I need birth details?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Not required for Prashna Kundali, but you may share Name, Date, Time, and Place for refined guidance.",
                  audio: {
                    "@type": "AudioObject",
                    contentUrl: "https://prashnasiddhi.com/AvailFAQ/A2.mp3",
                    encodingFormat: "audio/mpeg",
                    description:
                      "Audio answer about 'Do I need birth details?' by K. Jagadish.",
                    uploadDate: "2025-10-03",
                    inLanguage: "en",
                    duration: "PT08S",
                  },
                },
              },
              {
                "@type": "Question",
                name: "Can I request appointment without website scheduler?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. You can book directly via WhatsApp.",
                  audio: {
                    "@type": "AudioObject",
                    contentUrl: "https://prashnasiddhi.com/AvailFAQ/A3.mp3",
                    encodingFormat: "audio/mpeg",
                    description:
                      "Audio answer about 'Can I request appointment without website scheduler?' by K. Jagadish.",
                    uploadDate: "2025-10-03",
                    inLanguage: "en",
                    duration: "PT04S",
                  },
                },
              },
              {
                "@type": "Question",
                name: "What is covered in 7 minutes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A couple of focused questions. Ideal for urgent clarity.",
                  audio: {
                    "@type": "AudioObject",
                    contentUrl: "https://prashnasiddhi.com/AvailFAQ/A4.mp3",
                    encodingFormat: "audio/mpeg",
                    description:
                      "Audio answer about 'What is covered in 7 minutes?' by K. Jagadish.",
                    uploadDate: "2025-10-03",
                    inLanguage: "en",
                    duration: "PT04S",
                  },
                },
              },
              {
                "@type": "Question",
                name: "Are remedies included?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, zero-cost spiritual remedies only. Watch the Video in the link here: https://www.youtube.com/watch?v=Mrs07MGvzFY",
                  audio: {
                    "@type": "AudioObject",
                    contentUrl:
                      "https://prashnasiddhi.com/AvailFAQ/A5%20(1).mp3",
                    encodingFormat: "audio/mpeg",
                    description:
                      "Audio answer about 'Are remedies included?' by K. Jagadish.",
                    uploadDate: "2025-10-03",
                    inLanguage: "en",
                    duration: "PT05S",
                  },
                },
              },
              {
                "@type": "Question",
                name: "Can I reschedule?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, via WhatsApp. Appointments will be adjusted by mutual convenience.",
                  audio: {
                    "@type": "AudioObject",
                    contentUrl: "https://prashnasiddhi.com/AvailFAQ/A6.mp3",
                    encodingFormat: "audio/mpeg",
                    description:
                      "Audio answer about 'Can I reschedule?' by K. Jagadish.",
                    uploadDate: "2025-10-03",
                    inLanguage: "en",
                    duration: "PT05S",
                  },
                },
              },
              {
                "@type": "Question",
                name: "How do I pay?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Resident Indians: UPI, Net Banking, Cards. Overseas Clients: Money Transfer Agencies like Xoom Remitly etc/Bank Transfer.",
                  audio: {
                    "@type": "AudioObject",
                    contentUrl: "https://prashnasiddhi.com/AvailFAQ/A7.mp3",
                    encodingFormat: "audio/mpeg",
                    description:
                      "Audio answer about 'How do I pay?' by K. Jagadish.",
                    uploadDate: "2025-10-03",
                    inLanguage: "en",
                    duration: "PT12S",
                  },
                },
              },
              {
                "@type": "Question",
                name: "Can I record the consultation?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, you may record the audio call.",
                  audio: {
                    "@type": "AudioObject",
                    contentUrl: "https://prashnasiddhi.com/AvailFAQ/A8.mp3",
                    encodingFormat: "audio/mpeg",
                    description:
                      "Audio answer about 'Can I record the consultation?' by K. Jagadish.",
                    uploadDate: "2025-10-03",
                    inLanguage: "en",
                    duration: "PT02S",
                  },
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

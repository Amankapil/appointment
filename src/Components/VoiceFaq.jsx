"use client";
import Script from "next/script";
import { useState, useEffect, useRef, useMemo } from "react";

const faqs = [
  {
    question: "Welcome Video of K Jagadish",
    answer: `Namaste, Welcome to Prashna Siddhi!
Prashna Siddhi is my exclusive space.
I’m K. Jagadish guiding seekers for over 50 years.
Your questions answered with divine clarity.`,
    video: "/Faq/Welcome (2).mp4",
  },
  {
    question: "Is this AI Astrology?",
    answer: "No, every answer is given live by Mr. K Jagadish, not AI.",
    audio: "/Faq/Q2.mp3",
  },
  {
    question: "What is Siddhi Seva?",
    answer:
      "Siddhi Seva is a focused 7-minute service to address your burning questions. You can also listen to excerpts of live consultation.",
    audio: "/Faq/Q3.mp3",
  },
  {
    question: "What is Unique in Prashna Siddhi?",
    answer:
      "At Prashna Siddhi, K Jagadish answers your questions through Vedic Prashna Kundali, giving divine insight at the exact moment you ask. Birth details, if shared, will help you understand the astrological ambiance.",
    audio: "/Faq/Q4.mp3",
  },
  {
    question: "What makes Prashna Siddhi truly unique?",
    answer: `With Vedic Prashna Kundali, K Jagadish can analyze multiple Bhavas at the same time for any single question — something impossible with birth charts. This means you get a 360° holistic view of your situation.
👉 For example, if you ask about a job, insights cover:
- When you may get a job
- Type of job likely
- Relations with superiors
- Longevity and growth
- Salary prospects
- Overall job satisfaction`,
    audio: "/Faq/FAQ5 (M).mp3",
  },
  {
    question:
      "I see some fundamental differences in Prashna Siddhi’s Home Page compared to traditional astrology views (like Moon sign, Sade Sathi, etc.). Can you explain?",
    answer:
      "That’s a very important observation. Traditional astrology often speaks of Moon signs, Sade Sathi, or even ideas like Sun and Saturn being enemies. But at Prashna Siddhi, the approach is different. The entire Universe runs on the Doctrine of Karma — and planets are divine instruments of that Karma, not enemies fighting each other. Astrology here is not just prediction but spiritual guidance rooted in truth.",
    audio: "/Faq/That s a very import.mp3",
  },
  {
    question:
      "Do I have flexibility in selecting the duration of consultation?",
    answer:
      "Consultations with Prashna Siddhi are kept simple and flexible. If you have 2 or 3 pointed questions, even a 7-minute Siddhi Seva is enough. We don’t disconnect the call the moment time ends, unless another appointment is waiting. To make the most of it, just note your questions in advance. Seeking guidance here is meant to be easy — so your focus remains on clarity, not formalities.",
    audio: "/Faq/Q7.mp3",
  },
  {
    question: "Is Prashna Siddhi a spiritual service?",
    answer:
      "Yes. Prashna Siddhi is rooted in spiritual principles — honesty, responsibility, and respect for Divine Will. We charge only what is needed to sustain the service, not to commercialize it.",
    audio: "/Faq/N1.mp3",
  },
  {
    question:
      "Can just 7 minutes of Siddhi Seva really help with burning questions?",
    answer: `Yes — if the question is clear.
Astrology is not about long stories. What matters is:
~ A focused question with definite purpose.
~ The Astrologer’s complete concentration.
~ Birth details already collected in the form (saves time).
In 7 minutes, seekers often receive more clarity than in an hour of scattered
discussion.`,
    audio: "/Faq/N2.mp3",
  },
  {
    question: "Can I hear a sample of a live consultation?",
    answer:
      "Yes. Watch this 1-minute demo video. The caller’s voice is muted, and the question is displayed on screen. Privacy is fully protecte",
    audio: "/Faq/N3.mp3",
    video: "/Faq/1MinDEMO.mp4",
  },
  {
    question: "Do you suggest remedies?",
    answer: ` No. Because this is not a marketplace of quick fixes. 
    The Universe runs under the Doctrine of Karma. Each of us carry karmic baggage from past
lives. If remedies could truly erase Karma, why does suffering still exist despite remedies
being practiced for thousands of years?
The real way forward is:
  ~ Meditation – to calm the mind and strengthen inner balance.
  ~ Divine Grace – to soften the effects of past actions.
Meditation costs nothing. Commercial remedies often cost much, but rarely change destiny.`,
    audio: "/Faq/N4.mp3",
  },
  {
    question: "Can I hear a detailed live consultation?",
    answer: ` https://youtu.be/OOLBnTG6Jo0`,
    // audio: "/Faq/N4.mp3",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(null);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const sectionRef = useRef(null);

  const faqSchema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    }),
    []
  );

  // Auto play when section comes into view
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           // play active video/audio
  //           if (videoRef.current) videoRef.current.play().catch(() => {});
  //           if (audioRef.current) audioRef.current.play().catch(() => {});
  //         } else {
  //           // pause when out of view
  //           if (videoRef.current) videoRef.current.pause();
  //           if (audioRef.current) audioRef.current.pause();
  //         }
  //       });
  //     },
  //     { threshold: 0.5 } // adjust when you consider it "in view"
  //   );

  //   if (sectionRef.current) observer.observe(sectionRef.current);

  //   return () => {
  //     if (sectionRef.current) observer.unobserve(sectionRef.current);
  //   };
  // }, []);

  // // Auto play when activeIndex changes
  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.currentTime = 0;
  //     videoRef.current.play().catch(() => {});
  //   }
  //   if (audioRef.current) {
  //     audioRef.current.currentTime = 0;
  //     audioRef.current.play().catch(() => {});
  //   }
  // }, [activeIndex]);

  // Auto play when activeIndex changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});

      // When audio ends, start video
      audioRef.current.onended = () => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => {});
        }
      };
    } else if (videoRef.current) {
      // If there's no audio, just play the video directly
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }

    return () => {
      if (audioRef.current) audioRef.current.onended = null; // cleanup
    };
  }, [activeIndex]);

  // Auto play / pause when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (audioRef.current) {
              audioRef.current.play().catch(() => {});
            } else if (videoRef.current) {
              videoRef.current.play().catch(() => {});
            }
          } else {
            if (audioRef.current) audioRef.current.pause();
            if (videoRef.current) videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>

      <div ref={sectionRef} className="max-w-7xl mx-auto py-10">
        {/* Heading */}
        <div className="heading flex mb-10 flex-col items-center justify-center">
          <h1 className="text-[36px] md:text-[64px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
            Frequently Asked Questions
          </h1>
          <svg
            width="49"
            height="24"
            viewBox="0 0 49 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="3.5" cy="12" r="3" fill="#1E1E2C" />
            <path
              d="M24.5015 24C24.5633 17.4338 29.8977 12.12 36.5 12.0386C29.8718 11.9568 24.5216 6.60173 24.501 0H24.5007C24.4802 6.60234 19.129 11.9578 12.5 12.0386C19.1032 12.1191 24.4385 17.4332 24.5003 24H24.5015Z"
              fill="#1E1E2C"
            />
            <circle cx="45.5" cy="12" r="3" fill="#1E1E2C" />
          </svg>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid grid-cols-2 gap-6 p-8 rounded-2xl">
          <div>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`mb-4 rounded-lg p-4 cursor-pointer ${
                  activeIndex === i
                    ? "bg-[#f5f5f5] shadow-md border-l-4 border-[#4D4D4D]"
                    : "bgwhite/70 bg-[#f5f5f5]"
                }`}
                onClick={() => setActiveIndex(i)}
              >
                <p className="text-[20px] font-salernomi font-normal">
                  {faq.question}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#fff] text-[#000] p-6 rounded-2xl flex flex-col  sticky top-20 h-[500px]">
            <h2 className="text-xl font-semibold font-salernomi mb-4">
              {faqs[activeIndex].question}
            </h2>
            <p className="text-base text-[#000] whitespace-pre-line mb-4">
              {(() => {
                const answer = faqs[activeIndex].answer;
                const youtubeRegex =
                  /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/;

                const match = answer.match(youtubeRegex);

                if (match) {
                  const videoId = match[1];
                  return (
                    <iframe
                      className="w-full h-64 rounded-lg"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title="YouTube video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  );
                }

                return answer; // if not a YouTube link, show as text
              })()}
            </p>

            {/* <p className="text-base text-[#000] whitespace-pre-line mb-4">
              {faqs[activeIndex].answer}
            </p> */}
            {faqs[activeIndex].audio && (
              <audio
                ref={audioRef}
                key={faqs[activeIndex].audio}
                controls
                className="w-full rounded-lg mb-10"
              >
                <source src={faqs[activeIndex].audio} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}

            {faqs[activeIndex].video && (
              <video
                ref={videoRef}
                key={faqs[activeIndex].video}
                controls
                className="w-full aspect-video h-[500px] object-contain rounded-lg"
              >
                <source src={faqs[activeIndex].video} type="video/mp4" />
              </video>
            )}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="block md:hidden">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="mb-4 bg-white/70 rounded-lg p-4 shadow cursor-pointer"
            >
              <button
                className="w-full text-left text-[18px] font-salernomi font-normal flex justify-between items-center"
                onClick={() => setMobileOpen(mobileOpen === i ? null : i)}
              >
                {faq.question}
                <span>{mobileOpen === i ? "−" : "+"}</span>
              </button>

              {mobileOpen === i && (
                <div className="mt-3">
                  <p className="text-sm text-gray-800 whitespace-pre-line mb-3">
                    {faq.answer}
                  </p>
                  {faq.video && (
                    <video
                      controls
                      className="w-full aspect-video object-contain rounded-lg"
                    >
                      <source src={faq.video} type="video/mp4" />
                    </video>
                  )}
                  {faq.audio && (
                    <audio controls className="w-full rounded-lg mt-2">
                      <source src={faq.audio} type="audio/mpeg" />
                    </audio>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

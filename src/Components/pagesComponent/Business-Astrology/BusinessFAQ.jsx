"use client";
import Script from "next/script";
import { useState, useEffect, useRef, useMemo } from "react";

const faqs = [
  {
    question: "How is Business Astrology different from normal astrology?",
    answer: `Traditional astrology needs birth details and is more personality/life focused. Business Astrology uses Prashna Kundali, giving real-time insights for specific business questions and comparisons.`,
    audio: "/BussinessFAQ/A-1.mp3",
  },
  {
    question:
      "Can I compare between two business options, like choosing between two vendors?",
    answer:
      "Yes. This is one of the strongest applications of Business Astrology — direct comparisons are possible, which is not the case with regular birth chart analysis.",
    audio: "/BussinessFAQ/A-2.mp3",
  },
  {
    question: "Can I check if a decision will lead to legal problems?",
    answer:
      "Yes. Prashna Kundali can reveal if a decision aligns with law, ethics, and regulatory safety, helping you avoid unnecessary risks.",
    audio: "/BussinessFAQ/A-3.mp3",
  },
  {
    question: "Do I need the birth details of people I’m dealing with?",
    answer:
      "No. This is where Business Astrology shines. You can get insights into partners, competitors, clients, or even regulators without needing their date/time of birth.",
    audio: "/BussinessFAQ/A-4.mp3",
  },
  {
    question: "What kind of answers will I get?",
    answer: `Mostly short, clear, and precise responses — often in a single sentence. Ideal for fast decision-making.`,
    audio: "/BussinessFAQ/A-5.mp3",
  },
  {
    question: "Can this be used daily for trading or quick decisions?",
    answer:
      "Yes. Many clients use it regularly for investment timing, short-term trading, and deal negotiations.",
    audio: "/BussinessFAQ/A-6.mp3",
  },
  {
    question: "Can astrology help me decide between two business options?",
    answer:
      "Yes. Prashna Kundali is uniquely powerful in comparing alternatives. Whether it’s choosing between two vendors, locations, or investment products, astrology reveals which path aligns better with your karmic flow and long-term stability",
    audio: "/BussinessFAQ/A-7.mp3",
  },
  {
    question: "Will I be able to expand my business overseas?",
    answer:
      "Expansion is a karmic milestone. Astrology can show whether foreign ventures will be profitable or bring challenges like legal restrictions, delays, or cultural mismatches. Timing plays a key role here.",
    audio: "/BussinessFAQ/A-8.mp3",
  },
  {
    question: "How do I know if my business partner is trustworthy?",
    answer: ` Birth details are not always available, but Prashna Kundali can reveal the integrity and true intentions of a person at the very moment you raise the question. This guidance helps avoid costly mistakes.`,
    audio: "/BussinessFAQ/A-9.mp3",
  },
  {
    question:
      "Can astrology predict financial risks or legal troubles in business?",
    answer:
      " Yes. While no one can bypass karmic law, astrology gives advance warning of risks. It can show whether an action may attract regulatory or legal hurdles and guide you toward safer choices.",
    audio: "/BussinessFAQ/A-10.mp3",
  },
];

export default function BusinessFAQ() {
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
          audio: {
            "@type": "AudioObject",
            contentUrl: `https://prashnasiddhi.com${faq.audio}`, // full URL
            encodingFormat: "audio/mpeg",
            description: `Audio answer for "${faq.question}" by K. Jagadish.`,
          },
        },
      })),
    }),
    []
  );

  // Auto play when activeIndex changes
  useEffect(() => {
    // if (audioRef.current) {
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});

    // When audio ends, start video
    audioRef.current.onended = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    };

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
      <div ref={sectionRef} className=" bg-[#F0EDE9]  py-10">
        {/* Heading */}
        <div className="max-w-7xl bg-[#F0EDE9] mx-auto py10">
          <div className="heading flex mb-10 flex-col items-center justify-center">
            <h1 className="text-[36px] md:text-[64px] text-[#4D4D4D] text-center font-salernomi font-normal mb-6">
              Book Your Business Astrology Consultation{" "}
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
      </div>
    </>
  );
}

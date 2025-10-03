"use client";
import Script from "next/script";
import { useState, useEffect, useRef, useMemo } from "react";

const faqs = [
  {
    question: "What is the right timing for improvement in this area of life?",
    answer: `Timing is governed by your Karmic cycle. Astrology can reveal when conditions are most favorable.`,
    audio: "/careerFAQ/A-1.mp3",
  },
  {
    question: "Why do I face repeated obstacles?",
    answer:
      "Obstacles often arise from Karmic imbalances which are mapped by transit of planets. With clarity, you can learn how to respond effectively.",
    audio: "/careerFAQ/A-2.mp3",
  },
  {
    question: "Should I consult an astrologer regularly?",
    answer:
      "Astrology is guidance, not dependency. Consult when you seek clarity, but focus on applying wisdom in daily life.",
    audio: "/careerFAQ/A-3.mp3",
  },
  {
    question: "Can astrology predict the exact future?",
    answer:
      "Astrology reveals tendencies and timings, but your free will and attitude shape the outcome. Astrology is a subject of estimating possibilities and probabilities.",
    audio: "/careerFAQ/A-4.mp3",
  },
  {
    question: "Are remedies necessary?",
    answer: `Remedies are secondary. The first remedy is awareness and self-improvement. We emphasize wisdom over costly rituals. Watch this short Video: https://youtu.be/Mrs07MGvzFY`,
    audio: "/careerFAQ/A-5.mp3",
  },
  {
    question: "Should I change my job or wait for a better opportunity?",
    answer:
      " A change of job is not only about salary. It’s about karmic timing, environment, and growth. Astrology can show when the right opportunity will arise and whether waiting brings more stability than rushing into change.",
    audio: "/careerFAQ/A-6.mp3",
  },
  {
    question: "Why do I face constant obstacles at work despite working hard?",
    answer:
      "Hard work is necessary but not always sufficient. Sometimes, planetary influences bring delays to test patience and strengthen character. Astrology reveals these cycles and guides you on how to turn obstacles into stepping-stones.",
    audio: "/careerFAQ/A-7.mp3",
  },
  {
    question: "Will I get recognition for my efforts at work?",
    answer:
      "Recognition comes not only from performance but also from the alignment of karmic timing and environment. Astrology can show when your contributions will shine and how to navigate politics or indifference at the workplace.",
    audio: "/careerFAQ/A-8.mp3",
  },
  {
    question: "Should I start my own business or stay in a job?",
    answer: `Business requires courage and risk-taking, while jobs give stability. Astrology can help compare both paths, showing your strengths, karmic suitability, and the divine timing for taking such a leap.`,
    audio: "/careerFAQ/A-9.mp3",
  },
  {
    question: "Can astrology help with office politics and difficult bosses?",
    answer:
      "Yes. While you cannot change others, astrology shows you the tendencies of people around you and guides you in managing relationships wisely. With the right approach, even a difficult environment can be handled with balance.",
    audio: "/careerFAQ/A-10.mp3",
  },
];

export default function CareerFAQ() {
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
              Career & Profession Astrology FAQs{" "}
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

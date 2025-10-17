"use client";
import Script from "next/script";
import { useState, useEffect, useRef, useMemo } from "react";

const faqs = [
  {
    question: "Does astrology help stress and anxiety management?",
    answer: `Yes, astrology helps by identifying planetary triggers that influence the mind and emotions. Charts reveal the timing and reasons for stress, allowing you to understand the why behind your anxiety. Spiritual note, your chart is not a curse but a reflection of your soul's journey toward peace.You can watch the short video in the link here: https://youtube.com/shorts/4qPY2euNb-A`,
    audio: "/Stress/A1.mp3",
  },
  {
    question: "Which planets cause stress in astrology?",
    answer:
      "Mars is a major trigger for both pleasure and pain, especially through its seventh aspect. Its fourth and eighth aspects also intensify challenges. Saturn and Jupiter, with their special aspects, can also contribute to mental tension depending on their placement and Nakshatra they are posited. Example, in practice, Mars transits often create sudden challenges that affect peace of mind.",
    audio: "/Stress/A2.mp3",
  },
  {
    question: "Are planets enemies that create tension?",
    answer:
      "No, planets are neither enemies nor friends. They are teachers. Stress arises when we resist the lessons they bring. Accepting their role can transform tension into growth.",
    audio: "/Stress/A3.mp3",
  },
  {
    question: " What are natural remedies for stress at home?",
    answer: `First, you can download this book Free of cost form this link and read; https://rssb.org/book-EN-215-0.html
You can download FREE 3 books on Mind authored by me here: https://prashnasiddhi.com/books
Meditation with faith and regularity.
Reading or writing devotional passages before bed (Graphotherapy).
Mindful breathing and gratitude practices.`,
    audio: "/Stress/A4.mp3",
  },
  {
    question: "Why do many questions in life remain unanswered?",
    answer: ` Life is shrouded in mystery and timing. Some answers are withheld because the moment is not ripe, or the question relates to karma and spiritual lessons that unfold in time.`,
    audio: "/Stress/A5.mp3",
  },
  {
    question: "Is it wrong to keep worrying if we don’t receive clear answers?",
    answer:
      " Not wrong, but unhelpful. Worry is a sign of attachment to certainty. We must learn to sit with uncertainty and trust that clarity often comes in layers.",
    audio: "/Stress/A6.mp3",
  },
  {
    question:
      "Does astrology or Prashna Kundali help when there seem to be no answers?",
    answer:
      "Yes — Prashna Kundali (Horary) attempts to find answers at the moment you ask. Even if you don’t get a fully clear answer, it brings direction, clues, and deeper insight.",
    audio: "/Stress/A7.mp3",
  },
  {
    question: "How can one reduce the anxiety of unanswered questions?",
    answer: ` 1. Ask more focused, limited questions (rather than “everything”).
2. Ground yourself in meditation, faith, or spiritual practices.
3. Accept that growth often occurs in the waiting.
4. Seek remedies (spiritual) to ease the mind, even if full resolution isn’t immediate.`,
    audio: "/Stress/A8.mp3",
  },
  {
    question: "Will I always get an answer from spiritual consultation?",
    answer: `Not always immediately. Some situations require time, further clarity, or karmic shifts. A good consultation often provides direction, not always instant resolution.`,
    audio: "/Stress/A9.mp3",
  },
  {
    question:
      "What role does surrender play in dealing with unanswered questions?",
    answer:
      "Surrender or acceptance is key in spirituality. It doesn’t mean giving up, but trusting the cosmic order and letting go of rigid expectations about “when” and “how.”",
    audio: "/Stress/A10.mp3",
  },
  {
    question:
      " If I don’t get an answer now, does that mean the question is invalid?",
    answer:
      "No. Sometimes the question is valid, but the conditions (timing, readiness, karma) are not aligned. The answer may manifest later or in a different way.",
    audio: "/Stress/A11.mp3",
  },
];

export default function StressFaq() {
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
    // } else if (videoRef.current) {
    //   // If there's no audio, just play the video directly
    //   videoRef.current.currentTime = 0;
    //   videoRef.current.play().catch(() => {});
    // }

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

                  // Regex to detect any URL
                  const urlRegex = /(https?:\/\/[^\s]+)/g;

                  // Split the text by URLs
                  const parts = answer.split(urlRegex);

                  return parts.map((part, index) => {
                    // If this part is a URL, render as clickable link
                    if (part.match(urlRegex)) {
                      return (
                        <a
                          key={index}
                          href={part}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          {part}
                        </a>
                      );
                    }
                    // Otherwise, just render the text
                    return part;
                  });
                })()}
              </p>
              {/* <p className="text-base text-[#000] whitespace-pre-line mb-4">
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
              </p> */}

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

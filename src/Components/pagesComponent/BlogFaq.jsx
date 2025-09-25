"use client";
import Script from "next/script";
import { useState, useEffect, useRef, useMemo } from "react";

const faqs = [
  {
    question: "Why do newlyweds often clash?",
    answer: `Because marriage is an adjustment. Different habits, expectations, and communication styles take time to align.
`,
    audio: "/marriageBlogFaq/A-1.mp3",
  },
  {
    question: "What happens when expectations are unrealistic?",
    answer:
      "Dreamy movie-style hopes crash into reality. Clear and practical expectations save disappointment.",
    audio: "/marriageBlogFaq/A-2.mp3",
  },
  {
    question: " Why does communication fail so fast?",
    answer:
      "Assumptions, silence, or mismatched styles (one talks, the other avoids) cause breakdowns.",
    audio: "/marriageBlogFaq/A-3.mp3",
  },
  {
    question: "Can small habits cause big fights?",
    answer:
      "Yes. Sleep, eating, cleaning, and money routines differ — if not discussed, they spark tension.",
    audio: "/marriageBlogFaq/A4.mp3",
  },
  {
    question: "How do couples handle intimacy issues?",
    answer: `Intimacy takes time. Respect, patience, and open talk bridge different needs — both emotional and physical.`,
    audio: "/marriageBlogFaq/A5.mp3",
  },
  {
    question: "Is money a marriage breaker?",
    answer:
      "Often. Different spending habits or hidden debts trigger stress. Honest talks keep trust intact.",
    audio: "/marriageBlogFaq/A6.mp3",
  },
  {
    question: "How do independence and closeness clash?",
    answer:
      "One may need space, the other closeness. Balance is key — too much of either causes friction.",
    audio: "/marriageBlogFaq/A7.mp3",
  },
  {
    question: "Why do in-laws cause stress?",
    answer:
      "Time, influence, and boundaries. Unless agreed upon, family pressure seeps into the marriage.",
    audio: "/marriageBlogFaq/A8.mp3",
  },
  {
    question: "What if couples don’t know how to fight fair?",
    answer: `Arguments escalate. Yelling, shutdowns, or grudges destroy peace. Calm resolution and forgiveness are musts.`,
    audio: "/marriageBlogFaq/A9.mp3",
  },
  {
    question: "Can marriage make one lose identity?",
    answer:
      "Yes, if personal growth stops. Supporting each other’s individuality strengthens both love and self-worth.",
    audio: "/marriageBlogFaq/A10.mp3",
  },
];

export default function BlogFaq() {
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

"use client";
import Script from "next/script";
import { useState, useEffect, useRef, useMemo } from "react";

const faqs = [
  {
    question:
      "I am heading toward my 8th lord Dasa and obviously losing sleep. Can you help me?",
    answer: `Just relax. Let no one interpret 8th lord dasa parrot-like. First of all, who says the 8th lord or its dasa will be disastrous. Fear is the greatest enemy of mankind. Watch my video in the link and cheer up. I can help you in 7 mins of Siddhi Seva scheme.`,
    audio: "/DanceFaq/A1.mp3",
  },
  {
    question:
      "There are many conflicting opinions on the 8th house analysis. On the whole my peace of mind has gone. What is your comment?",
    answer:
      "Get clarity here. Coming to know of a danger is more dangerous than the danger itself. Opinions can widely differ based on each one’s domain knowledge and experience. You will get full clarity here and I, K Jagadish is here to address your questions and it is the truth of the subject.",
    audio: "/DanceFaq/A2.mp3",
  },
  {
    question:
      "I have browsed several Astrology websites since my 8th lord is in the 7th house and its dasa is starting very soon? Practically shivering!",
    answer:
      "You are not alone and I am with you. I have passed the dasa of 8th lord for 16 years already and I am answering your question at 79 (as on Oct 2025). Do you want any more strength? There are several critical factors to be taken into account specifically like the one you have on hand. Don’t jump the gun and I am here to share my experience.",
    audio: "/DanceFaq/A3.mp3",
  },
  {
    question: "What if 8th lord in the 7th house!",
    answer: `Thanks for asking this question! I don’t know how you get my chart? Typically, in my chart 8th lord is in the 7th house and my earlier answer holds good for this question also.`,
    audio: "/DanceFaq/A4.mp3",
  },
  {
    question:
      "I have Mars in the 8th house and it is scary. Do you think that I will meet with something terrible?",
    answer: `Never go by planets position alone and build unnecessary pressure. The asterism of planets and the position of its lord has the key. I will clarify it for you in 7 minutes.`,
    audio: "/DanceFaq/A5.mp3",
  },
  {
    question:
      "The Planet in the 8th house is in the 2nd house. What should I understand?",
    answer:
      "Never go by Astrology Rule-book. At Prashna Siddhi, we apply Astrology to practical situation to give our best and therefore call it as Applied Astrology and not just Astrology.",
    audio: "/DanceFaq/A6.mp3",
  },
  {
    question:
      "I understand that relationship between 5th and 8th house is luck. Is it true?",
    answer:
      "I may not be able to simply node my head although there is some meaning in that. But if the 8th lord is in the 7th house, then opposite people of that native will derive lot of benefits. Hence luck for them!",
    audio: "/DanceFaq/A7.mp3",
  },
];

export default function DanceFaq() {
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

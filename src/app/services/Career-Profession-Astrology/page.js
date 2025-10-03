import CareerFAQ from "@/Components/pagesComponent/Career-Profession-Astrology/CareerFAQ";
import CareerHero from "@/Components/pagesComponent/Career-Profession-Astrology/CareerHero";
import Challenges from "@/Components/pagesComponent/Career-Profession-Astrology/Challenges";
import Clarity from "@/Components/pagesComponent/Career-Profession-Astrology/Clarity";
import Method from "@/Components/pagesComponent/Career-Profession-Astrology/Method";
import Struggles from "@/Components/pagesComponent/Career-Profession-Astrology/Struggles";
import Trust from "@/Components/pagesComponent/Career-Profession-Astrology/Trust";
import ReviewSection from "@/Components/pagesComponent/Homecomponent/ReviewSection";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Career & Profession Astrology – Growth with Prashna Siddhi",
  description:
    "Find clarity in job changes, promotions, and professional growth through Vedic Astrology and Prashna Kundali. Real-time guidance for career success.",
  keywords: [
    "career astrology",
    "profession astrology",
    "prashna kundali career",
    "job change astrology",
    "promotion astrology",
    "career clarity astrology",
    "professional growth astrology",
  ],
  alternates: {
    canonical: "https://prashnasiddhi.com/services/career-profession-astrology",
  },
  openGraph: {
    title: "Career & Profession Astrology – Growth with Prashna Siddhi",
    description:
      "Clarity for job changes, promotions, and professional growth with Prashna Kundali and Vedic Astrology.",
    url: "https://prashnasiddhi.com/services/career-profession-astrology",
    siteName: "Prashna Siddhi",
    images: [
      {
        url: "https://prashnasiddhi.com/og-images/career-profession.jpg",
        width: 1200,
        height: 630,
        alt: "Career & Profession Astrology",
      },
    ],
    type: "website",
  },
};

const page = () => {
  return (
    <>
      <CareerHero />
      <Struggles />
      <Clarity />
      <Method />
      <Trust />
      <ReviewSection />
      <Challenges />
      <CareerFAQ />

      <Script id="ld-json-career" type="application/ld+json">
        {JSON.stringify(
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://prashnasiddhi.com#organization",
                name: "Prashna Siddhi",
                url: "https://prashnasiddhi.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://prashnasiddhi.com/static/logo.png",
                },
              },
              {
                "@type": "WebSite",
                "@id": "https://prashnasiddhi.com#website",
                url: "https://prashnasiddhi.com",
                name: "Prashna Siddhi",
                publisher: { "@id": "https://prashnasiddhi.com#organization" },
              },
              {
                "@type": "WebPage",
                "@id":
                  "https://prashnasiddhi.com/services/career-profession-astrology#webpage",
                url: "https://prashnasiddhi.com/services/career-profession-astrology",
                name: "Career & Profession Astrology",
                isPartOf: { "@id": "https://prashnasiddhi.com#website" },
                about: { "@id": "https://prashnasiddhi.com#organization" },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: "https://prashnasiddhi.com/static/logo.png",
                },
                breadcrumb: {
                  "@id":
                    "https://prashnasiddhi.com/services/career-profession-astrology#breadcrumb",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://prashnasiddhi.com/services/career-profession-astrology#breadcrumb",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://prashnasiddhi.com",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Services",
                    item: "https://prashnasiddhi.com/services",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Career & Profession Astrology",
                    item: "https://prashnasiddhi.com/services/career-profession-astrology",
                  },
                ],
              },
              {
                "@type": "Service",
                "@id":
                  "https://prashnasiddhi.com/services/career-profession-astrology#service",
                serviceType: "Career & Profession Astrology",
                name: "Career & Profession Astrology",
                url: "https://prashnasiddhi.com/services/career-profession-astrology",
                areaServed: "IN",
                provider: { "@id": "https://prashnasiddhi.com#organization" },
                description:
                  "Guidance and clarity for career & profession astrology using Vedic Astrology and Prashna Kundali.",
                offers: {
                  "@type": "Offer",
                  url: "https://prashnasiddhi.com/request-consultation",
                  availability: "https://schema.org/OnlineOnly",
                },
              },
              {
                "@type": "CareerFAQPage",
                "@id":
                  "https://prashnasiddhi.com/services/career-profession-astrology#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is the right timing for improvement in this area of life?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Timing is governed by your Karmic cycle. Astrology can reveal when conditions are most favorable.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/careerFAQ/A-1.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'What is the right timing for improvement in this area of life?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT06S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why do I face repeated obstacles?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Obstacles often arise from Karmic imbalances which are mapped by transit of planets. With clarity, you can learn how to respond effectively.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/careerFAQ/A-2.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Why do I face repeated obstacles?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT09S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Should I consult an astrologer regularly?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Astrology is guidance, not dependency. Consult when you seek clarity, but focus on applying wisdom in daily life.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/careerFAQ/A-3.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Should I consult an astrologer regularly?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT08S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can astrology predict the exact future?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Astrology reveals tendencies and timings, but your free will and attitude shape the outcome. Astrology is a subject of estimating possibilities and probabilities.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/careerFAQ/A-4.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can astrology predict the exact future?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT11S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are remedies necessary?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Remedies are secondary. The first remedy is awareness and self-improvement. We emphasize wisdom over costly rituals. Watch this short Video: https://youtu.be/Mrs07MGvzFY",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/careerFAQ/A-5.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Are remedies necessary?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT09S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Should I change my job or wait for a better opportunity?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "A change of job is not only about salary. It’s about karmic timing, environment, and growth. Astrology can show when the right opportunity will arise and whether waiting brings more stability than rushing into change.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/careerFAQ/A-6.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Should I change my job or wait for a better opportunity?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT15S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why do I face constant obstacles at work despite working hard?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Hard work is necessary but not always sufficient. Sometimes, planetary influences bring delays to test patience and strengthen character. Astrology reveals these cycles and guides you on how to turn obstacles into stepping-stones.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/careerFAQ/A-7.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Why do I face constant obstacles at work despite working hard?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT16S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Will I get recognition for my efforts at work?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Recognition comes not only from performance but also from the alignment of karmic timing and environment. Astrology can show when your contributions will shine and how to navigate politics or indifference at the workplace.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/careerFAQ/A-8.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Will I get recognition for my efforts at work?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT14S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Should I start my own business or stay in a job?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Business requires courage and risk-taking, while jobs give stability. Astrology can help compare both paths, showing your strengths, karmic suitability, and the divine timing for taking such a leap.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/careerFAQ/A-9.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Should I start my own business or stay in a job?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT14S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can astrology help with office politics and difficult bosses?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. While you cannot change others, astrology shows you the tendencies of people around you and guides you in managing relationships wisely. With the right approach, even a difficult environment can be handled with balance.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/careerFAQ/A-10.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can astrology help with office politics and difficult bosses?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT15S",
                      },
                    },
                  },
                ],
              },
            ],
          },
          null,
          2
        )}
      </Script>
    </>
  );
};

export default page;

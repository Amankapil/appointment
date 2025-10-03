import Challenges from "@/Components/pagesComponent/Child-birth/Challenges";
import ChildFAQ from "@/Components/pagesComponent/Child-birth/Child-FAQ";
import ChildHero from "@/Components/pagesComponent/Child-birth/ChildHero";
import Familiar from "@/Components/pagesComponent/Child-birth/Familiar";
import Families from "@/Components/pagesComponent/Child-birth/Families";
import Method from "@/Components/pagesComponent/Child-birth/Method";
import Trust from "@/Components/pagesComponent/Child-birth/Trust";
import ReviewSection from "@/Components/pagesComponent/Homecomponent/ReviewSection";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Children & Family Astrology – Insight & Harmony with Prashna Siddhi",
  description:
    "Receive guidance on childbirth timing, family harmony, parenting, and adoption through Vedic astrology. Navigate family life with spiritual insight at Prashna Siddhi.",
  keywords: [
    "children astrology",
    "family harmony",
    "parenting astrology",
    "adoption astrology",
    "childbirth insights",
    "Prashna Siddhi family",
    "vedic astrology for children",
  ],
  alternates: {
    canonical: "https://prashnasiddhi.com/services/children-family-astrology",
  },
  openGraph: {
    title:
      "Children & Family Astrology – Insight & Harmony with Prashna Siddhi",
    description:
      "Receive guidance on childbirth timing, family harmony, parenting, and adoption through Vedic astrology. Navigate family life with spiritual insight at Prashna Siddhi.",
    url: "https://prashnasiddhi.com/services/children-family-astrology",
    siteName: "Prashna Siddhi",
    images: [
      {
        url: "https://prashnasiddhi.com/og-images/children-family.jpg",
        width: 1200,
        height: 630,
        alt: "Children & Family Astrology by Prashna Siddhi",
      },
    ],
    type: "website",
  },
};

const page = () => {
  return (
    <>
      <ChildHero />
      <Familiar />
      <Families />
      <Method />
      <Trust />
      <ReviewSection />
      <Challenges />

      <ChildFAQ />

      <Script id="ld-json-children" type="application/ld+json">
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
                  "https://prashnasiddhi.com/services/children-family-astrology#webpage",
                url: "https://prashnasiddhi.com/services/children-family-astrology",
                name: "Children & Family Astrology",
                isPartOf: { "@id": "https://prashnasiddhi.com#website" },
                about: { "@id": "https://prashnasiddhi.com#organization" },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: "https://prashnasiddhi.com/static/logo.png",
                },
                breadcrumb: {
                  "@id":
                    "https://prashnasiddhi.com/services/children-family-astrology#breadcrumb",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://prashnasiddhi.com/services/children-family-astrology#breadcrumb",
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
                    name: "Children & Family Astrology",
                    item: "https://prashnasiddhi.com/services/children-family-astrology",
                  },
                ],
              },
              {
                "@type": "Service",
                "@id":
                  "https://prashnasiddhi.com/services/children-family-astrology#service",
                serviceType: "Children & Family Astrology",
                name: "Children & Family Astrology",
                url: "https://prashnasiddhi.com/services/children-family-astrology",
                areaServed: "IN",
                provider: { "@id": "https://prashnasiddhi.com#organization" },
                description:
                  "Guidance and clarity for children & family astrology using Vedic Astrology and Prashna Kundali.",
                offers: {
                  "@type": "Offer",
                  url: "https://prashnasiddhi.com/request-consultation",
                  availability: "https://schema.org/OnlineOnly",
                },
              },
              {
                "@type": "ChildrenFAQPage",
                "@id":
                  "https://prashnasiddhi.com/services/children-family-astrology#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "When will we be blessed with children?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Timing of childbirth is karmic. Astrology shows possibilities, but ultimately it unfolds by Divine will. Patience, faith, and preparation create the right environment for blessings. Read the full article at: https://prashnasiddhi.com/blog/how-to-predict-child-birth-from-astrology",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/childFAQ/A-1.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'When will we be blessed with children?' by K. Jagadish.",
                        uploadDate: "2025-09-30",
                        inLanguage: "en",
                        duration: "PT13S",
                      },
                    },
                  },

                  {
                    "@type": "Question",
                    name: "Why are miscarriages or delays happening again and again?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "These often point to karmic lessons. Astrology helps you understand patterns and prepare emotionally and spiritually, instead of feeling helpless.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/childFAQ/A-2.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Why are miscarriages or delays happening again and again?' by K. Jagadish.",
                        uploadDate: "2025-09-30",
                        inLanguage: "en",
                        duration: "PT10S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can astrology guide us in parenting?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. A child’s chart reveals temperament, learning style, and emotional needs — helping parents guide with compassion rather than conflict.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/childFAQ/A-3.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can astrology guide us in parenting?' by K. Jagadish.",
                        uploadDate: "2025-09-30",
                        inLanguage: "en",
                        duration: "PT09S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Will my child do well in studies?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Astrology shows areas of strength and challenges. This helps you support your child in the right way — not pushing unrealistically, but nurturing their natural potential.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/childFAQ/A-4.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Will my child do well in studies?' by K. Jagadish.",
                        uploadDate: "2025-09-28",
                        inLanguage: "en",
                        duration: "PT11S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How to handle constant family interference?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Respect and patience are keys. Astrology reveals how to balance elders’ expectations with your own decisions, without breaking family bonds.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/childFAQ/A-5.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'How to handle constant family interference?' by K. Jagadish.",
                        uploadDate: "2025-09-30",
                        inLanguage: "en",
                        duration: "PT09S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What if siblings keep fighting?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Astrology can show karmic links between siblings and guide you in fostering cooperation rather than rivalry.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/childFAQ/A-6.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'What if siblings keep fighting?' by K. Jagadish.",
                        uploadDate: "2025-09-30",
                        inLanguage: "en",
                        duration: "PT07S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can astrology help with adoption decisions?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, Prashna and charts provide insight on timing, suitability, and emotional readiness for adoption.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/childFAQ/A-7.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can astrology help with adoption decisions?' by K. Jagadish.",
                        uploadDate: "2025-09-30",
                        inLanguage: "en",
                        duration: "PT07S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What if my child has health challenges?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "While astrology doesn’t replace doctors, it can reveal underlying karmic lessons and suggest supportive timings and attitudes for care.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/childFAQ/A-8.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'What if my child has health challenges?' by K. Jagadish.",
                        uploadDate: "2025-09-30",
                        inLanguage: "en",
                        duration: "PT09S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Should I consult an astrologer for every small family issue?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No. Astrology is for clarity in major turning points. Daily life needs patience, communication, and love.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/childFAQ/A-9.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Should I consult an astrologer for every small family issue?' by K. Jagadish.",
                        uploadDate: "2025-09-30",
                        inLanguage: "en",
                        duration: "PT08S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can astrology ensure my child’s future success?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Astrology reveals tendencies and timing, not guarantees. The Divine plan shapes outcomes — your role is to provide love, guidance, and faith.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/childFAQ/A-10.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can astrology ensure my child’s future success?' by K. Jagadish.",
                        uploadDate: "2025-09-30",
                        inLanguage: "en",
                        duration: "PT11S",
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

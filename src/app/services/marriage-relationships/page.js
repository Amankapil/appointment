import ReviewSection from "@/Components/pagesComponent/Homecomponent/ReviewSection";
import Challenges from "@/Components/pagesComponent/Marriage & Relationships/Challenges";
import Harmony from "@/Components/pagesComponent/Marriage & Relationships/Harmony";
import Hero from "@/Components/pagesComponent/Marriage & Relationships/Hero";
import MarriageFAQ from "@/Components/pagesComponent/Marriage & Relationships/MarriageFAQ";
import Method from "@/Components/pagesComponent/Marriage & Relationships/Method";
import Peace from "@/Components/pagesComponent/Marriage & Relationships/Peace";
import Struggles from "@/Components/pagesComponent/Marriage & Relationships/Struggles";
import Trust from "@/Components/pagesComponent/Marriage & Relationships/Trust";
import Head from "next/head";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Marriage & Relationships Astrology – Clarity through Prashna Siddhi",
  description:
    "Explore insights into love, marriage delays, and relationship challenges through Vedic astrology. Get clarity, harmony, and guidance with Prashna Siddhi.",
  keywords: [
    "marriage astrology",
    "relationship clarity",
    "delay in marriage",
    "compatibility astrology",
    "love guidance",
    "Vedic astrology relationships",
    "Prashna Siddhi marriage",
  ],
  alternates: {
    canonical: "https://prashnasiddhi.com/services/marriage-relationships",
  },
  openGraph: {
    title:
      "Marriage & Relationships Astrology – Clarity through Prashna Siddhi",
    description:
      "Explore insights into love, marriage delays, and relationship challenges through Vedic astrology. Get clarity, harmony, and guidance with Prashna Siddhi.",
    url: "https://prashnasiddhi.com/services/marriage-relationships",
    siteName: "Prashna Siddhi",
    images: [
      {
        url: "https://prashnasiddhi.com/og-images/marriage-relationships.jpg",
        width: 1200,
        height: 630,
        alt: "Marriage & Relationships Astrology by Prashna Siddhi",
      },
    ],
    type: "website",
  },
};

const page = () => {
  return (
    <>
      <div>
        <Hero />
        <Struggles />
        <Harmony />
        <Method />
        <Trust />
        <Challenges />
        <ReviewSection />
        <div id="marriage-faq">
          <MarriageFAQ />
        </div>
        <Peace />

        <Script id="ld-json-marriage" type="application/ld+json">
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
                  publisher: {
                    "@id": "https://prashnasiddhi.com#organization",
                  },
                },
                {
                  "@type": "WebPage",
                  "@id":
                    "https://prashnasiddhi.com/services/marriage-relationships#webpage",
                  url: "https://prashnasiddhi.com/services/marriage-relationships",
                  name: "Marriage & Relationships",
                  isPartOf: { "@id": "https://prashnasiddhi.com#website" },
                  about: { "@id": "https://prashnasiddhi.com#organization" },
                  primaryImageOfPage: {
                    "@type": "ImageObject",
                    url: "https://prashnasiddhi.com/static/logo.png",
                  },
                  breadcrumb: {
                    "@id":
                      "https://prashnasiddhi.com/services/marriage-relationships#breadcrumb",
                  },
                },
                {
                  "@type": "BreadcrumbList",
                  "@id":
                    "https://prashnasiddhi.com/services/marriage-relationships#breadcrumb",
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
                      name: "Marriage & Relationships",
                      item: "https://prashnasiddhi.com/services/marriage-relationships",
                    },
                  ],
                },
                {
                  "@type": "Service",
                  "@id":
                    "https://prashnasiddhi.com/services/marriage-relationships#service",
                  serviceType: "Marriage & Relationships",
                  name: "Marriage & Relationships",
                  url: "https://prashnasiddhi.com/services/marriage-relationships",
                  areaServed: "IN",
                  provider: { "@id": "https://prashnasiddhi.com#organization" },
                  description:
                    "Guidance and clarity for marriage & relationships using Vedic Astrology and Prashna Kundali.",
                  offers: {
                    "@type": "Offer",
                    url: "https://prashnasiddhi.com/request-consultation",
                    availability: "https://schema.org/OnlineOnly",
                  },
                },
                {
                  "@type": "MarriageFAQPage",
                  "@id":
                    "https://prashnasiddhi.com/services/marriage-relationships#marriage-faq",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "When will I get married?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Timing of marriage is not in human hands. It unfolds according to your Karmic timetable. Efforts, prayers, and right attitude help you align with the Divine plan. Instead of worrying about the “when,” focus on preparing yourself to be the right partner when the time arrives.",
                        audio: {
                          "@type": "AudioObject",
                          contentUrl:
                            "https://prashnasiddhi.com/marrigeFAQ/A-1.mp3",
                          encodingFormat: "audio/mpeg",
                          description:
                            "Audio answer about 'When will I get married?' by K. Jagadish.",
                          uploadDate: "2025-09-30",
                          inLanguage: "en",
                          duration: "PT19S",
                        },
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Will I get girl/boy of my liking?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "This is what everyone desires. You can certainly try but you can’t dictate your destiny which is decided right at your first breath. Note that life is a matter of give and take. Always be generous in your attitude and be accommodative to expect the other party to accommodate you.",
                        audio: {
                          "@type": "AudioObject",
                          contentUrl:
                            "https://prashnasiddhi.com/marrigeFAQ/A-2.mp3",
                          encodingFormat: "audio/mpeg",
                          description:
                            "Audio answer about 'Will I get girl/boy of my liking?' by K. Jagadish.",
                          uploadDate: "2025-09-30",
                          inLanguage: "en",
                          duration: "PT20S",
                        },
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Whether it is a love marriage or arranged marriage?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Love is basically Divine but in the modern world, it is polluted unnecessarily. Look for a good human being without mixing up with other points like money, status etc. Interact and evaluate the temperament and goodness searching for good points. Once you decide, decide firmly to live with him or her permanently for the next 100 years.",
                        audio: {
                          "@type": "AudioObject",
                          contentUrl:
                            "https://prashnasiddhi.com/marrigeFAQ/A-3.mp3",
                          encodingFormat: "audio/mpeg",
                          description:
                            "Audio answer about 'Whether it is a love marriage or arranged marriage?' by K. Jagadish.",
                          uploadDate: "2025-09-30",
                          inLanguage: "en",
                          duration: "PT23S",
                        },
                      },
                    },

                    {
                      "@type": "Question",
                      name: "Whether my partner agrees to my views?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Ask yourself this question first. Every human being is created discretely and there cannot be a 100% match between two people. Life is always a matter of living together happily by – give and take. Remember, what you give, comes back to you.",
                        audio: {
                          "@type": "AudioObject",
                          contentUrl:
                            "https://prashnasiddhi.com/marrigeFAQ/A-4.mp3",
                          encodingFormat: "audio/mpeg",
                          description:
                            "Audio answer about 'Whether my partner agrees to my views?' by K. Jagadish.",
                          uploadDate: "2025-09-30",
                          inLanguage: "en",
                          duration: "PT18S",
                        },
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Whether my partner agrees to my views?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Ask yourself this question first. Every human being is created discretely and there cannot be a 100% match between two people. Life is always a matter of living together happily by – give and take. Remember, what you give, comes back to you.",
                        audio: {
                          "@type": "AudioObject",
                          contentUrl:
                            "https://prashnasiddhi.com/marrigeFAQ/A-4.mp3",
                          encodingFormat: "audio/mpeg",
                          description:
                            "Audio answer about 'Whether my partner agrees to my views?' by K. Jagadish.",
                          uploadDate: "2025-09-30",
                          inLanguage: "en",
                          duration: "PT19S",
                        },
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What if in-laws create a problem?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Firstly treat elders with due respect. Listen to them since they are seniors by age and experience. Give them a patient listening and understand their point. If you want to disagree, disagree humbly with facts and figures relevant. Be sincere and loving. Pray God to settle the differences. Give them a chance to correct if they are wrong on any point.",
                        audio: {
                          "@type": "AudioObject",
                          contentUrl:
                            "https://prashnasiddhi.com/marrigeFAQ/A-6.mp3",
                          encodingFormat: "audio/mpeg",
                          description:
                            "Audio answer about 'What if in-laws create a problem?' by K. Jagadish.",
                          uploadDate: "2025-09-30",
                          inLanguage: "en",
                          duration: "PT24S",
                        },
                      },
                    },
                    {
                      "@type": "Question",
                      name: "If still I find it tough?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Love them more and love can move mountains. Discuss fairly with your spouse and appeal for goodness.",
                        audio: {
                          "@type": "AudioObject",
                          contentUrl:
                            "https://prashnasiddhi.com/marrigeFAQ/A-7.mp3",
                          encodingFormat: "audio/mpeg",
                          description:
                            "Audio answer about 'If still I find it tough?' by K. Jagadish.",
                          uploadDate: "2025-09-30",
                          inLanguage: "en",
                          duration: "PT06S",
                        },
                      },
                    },
                    {
                      "@type": "Question",
                      name: "If I find it really tough what should I do?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Think logically the merits which you brought into this relationship and value them again. Rethink and revise to find faults in you. Most often this introspection will help you to refine yourself and others too.",
                        audio: {
                          "@type": "AudioObject",
                          contentUrl:
                            "https://prashnasiddhi.com/marrigeFAQ/A-8.mp3",
                          encodingFormat: "audio/mpeg",
                          description:
                            "Audio answer about 'If I find it really tough what should I do?' by K. Jagadish.",
                          uploadDate: "2025-09-30",
                          inLanguage: "en",
                          duration: "PT13S",
                        },
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Should I consult an Astrologer?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Astrologers cannot change your destiny. If you are looking for genuine moral guidance and light to improve yourself, be very careful about choosing the Astrologer. Never spend a rupee on remedies and lose money.",
                        audio: {
                          "@type": "AudioObject",
                          contentUrl:
                            "https://prashnasiddhi.com/marrigeFAQ/A-9.mp3",
                          encodingFormat: "audio/mpeg",
                          description:
                            "Audio answer about 'Should I consult an Astrologer?' by K. Jagadish.",
                          uploadDate: "2025-09-30",
                          inLanguage: "en",
                          duration: "PT14S",
                        },
                      },
                    },
                    {
                      "@context": "https://schema.org",
                      "@type": "Question",
                      name: "Will we be blessed with children?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Children are among the greatest blessings, but they too follow Karmic law. Astrology can indicate the possibilities, yet it is the Creator who decides. Approach the subject with patience, prayer, and faith. Above all, focus on building a loving environment — this itself invites divine grace. Read the full article at: https://prashnasiddhi.com/blog/how-to-predict-child-birth-from-astrology",
                        audio: {
                          "@type": "AudioObject",
                          contentUrl:
                            "https://prashnasiddhi.com/marrigeFAQ/A-10.mp3",
                          encodingFormat: "audio/mpeg",
                          description:
                            "Audio answer about 'Will we be blessed with children?' by K. Jagadish.",
                          uploadDate: "2025-09-30",
                          inLanguage: "en",
                          duration: "PT21S",
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
      </div>
    </>
  );
};

export default page;

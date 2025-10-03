import HealthFaq from "@/Components/pagesComponent/Finance-Wealth-Astrology/FinanceFAQ";
import FinanceHero from "@/Components/pagesComponent/Finance-Wealth-Astrology/FinanceHero";
import Financial from "@/Components/pagesComponent/Finance-Wealth-Astrology/Financial";
import Guidance from "@/Components/pagesComponent/Finance-Wealth-Astrology/Guidance";
import Healing from "@/Components/pagesComponent/Finance-Wealth-Astrology/Healing";
import Struggles from "@/Components/pagesComponent/Finance-Wealth-Astrology/Struggles";
import Wealth from "@/Components/pagesComponent/Finance-Wealth-Astrology/Wealth";
import ReviewSection from "@/Components/pagesComponent/Homecomponent/ReviewSection";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Finance & Wealth Astrology – Stability with Prashna Siddhi",
  description:
    "Discover clarity for savings, investments, and financial stability with Vedic Astrology and Prashna Kundali. Avoid risks and find the right timing for wealth decisions.",
  keywords: [
    "finance astrology",
    "wealth astrology",
    "prashna kundali finance",
    "investment timing astrology",
    "savings astrology",
    "financial stability astrology",
    "money astrology",
  ],
  alternates: {
    canonical: "https://prashnasiddhi.com/services/finance-wealth-astrology",
  },
  openGraph: {
    title: "Finance & Wealth Astrology – Stability with Prashna Siddhi",
    description:
      "Financial clarity for investments, savings, and wealth timing with Vedic Astrology and Prashna Kundali.",
    url: "https://prashnasiddhi.com/services/finance-wealth-astrology",
    siteName: "Prashna Siddhi",
    images: [
      {
        url: "https://prashnasiddhi.com/og-images/finance-wealth.jpg",
        width: 1200,
        height: 630,
        alt: "Finance & Wealth Astrology",
      },
    ],
    type: "website",
  },
};

const page = () => {
  return (
    <>
      <FinanceHero />
      <Struggles />
      <Financial />
      <Healing />
      <Wealth />
      <ReviewSection />
      <Guidance />
      <HealthFaq />

      <Script id="ld-json-finance" type="application/ld+json">
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
                  "https://prashnasiddhi.com/services/finance-wealth-astrology#webpage",
                url: "https://prashnasiddhi.com/services/finance-wealth-astrology",
                name: "Finance & Wealth Astrology",
                isPartOf: { "@id": "https://prashnasiddhi.com#website" },
                about: { "@id": "https://prashnasiddhi.com#organization" },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: "https://prashnasiddhi.com/static/logo.png",
                },
                breadcrumb: {
                  "@id":
                    "https://prashnasiddhi.com/services/finance-wealth-astrology#breadcrumb",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://prashnasiddhi.com/services/finance-wealth-astrology#breadcrumb",
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
                    name: "Finance & Wealth Astrology",
                    item: "https://prashnasiddhi.com/services/finance-wealth-astrology",
                  },
                ],
              },
              {
                "@type": "Service",
                "@id":
                  "https://prashnasiddhi.com/services/finance-wealth-astrology#service",
                serviceType: "Finance & Wealth Astrology",
                name: "Finance & Wealth Astrology",
                url: "https://prashnasiddhi.com/services/finance-wealth-astrology",
                areaServed: "IN",
                provider: { "@id": "https://prashnasiddhi.com#organization" },
                description:
                  "Guidance and clarity for finance & wealth astrology using Vedic Astrology and Prashna Kundali.",
                offers: {
                  "@type": "Offer",
                  url: "https://prashnasiddhi.com/request-consultation",
                  availability: "https://schema.org/OnlineOnly",
                },
              },
              {
                "@type": "FinanceFAQPage",
                "@id":
                  "https://prashnasiddhi.com/services/finance-wealth-astrology#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Can astrology make me rich?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No one can guarantee riches. Astrology shows your wealth potential and karmic cycles. Your discipline and decisions matter.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/financeFAQ/A-1.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can astrology make me rich?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT09S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why does money never stay with me?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Some charts show strong earning but weak savings. Astrology reveals these patterns and helps correct attitudes.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/financeFAQ/A-2.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Why does money never stay with me?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT08S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can astrology help me decide between job or business?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, charts clearly show where stability lies. Many gain clarity on career vs. entrepreneurship.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/financeFAQ/A-3.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can astrology help me decide between job or business?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT07S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can astrology guide investments?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, astrology indicates periods favorable for growth or risky for speculation. It helps avoid losses.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/financeFAQ/A-4.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can astrology guide investments?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT08S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does astrology predict financial losses?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "It shows vulnerable periods. Awareness helps you prepare and avoid big risks.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/financeFAQ/A-5.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Does astrology predict financial losses?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT06S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can astrology resolve property or inheritance disputes?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Astrology shows the karmic pattern behind disputes, helping you manage with patience and strategy.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/financeFAQ/A-6.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can astrology resolve property or inheritance disputes?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT06S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why do some people get sudden wealth while others struggle?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "This depends on karmic destiny. Astrology reveals why such differences exist.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/financeFAQ/A-7.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Why do some people get sudden wealth while others struggle?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT06S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can astrology guide retirement planning?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, charts indicate stability periods and long-term financial security patterns.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/financeFAQ/A-8.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can astrology guide retirement planning?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT05S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Will astrology solve my debt problem?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Astrology won’t erase debt, but it can show when relief is possible and how to manage stress wisely.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/financeFAQ/A-9.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Will astrology solve my debt problem?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT07S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is money purely material, or spiritual too?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Money is energy. Used rightly, it supports dharma (life’s purpose). Astrology guides you to see wealth as a blessing, not just a number.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/financeFAQ/A-10.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Is money purely material, or spiritual too?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
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

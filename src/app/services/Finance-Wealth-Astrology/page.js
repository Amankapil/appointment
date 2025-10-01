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
                    name: "Can astrology guide financial stability?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. It helps with timing for savings, investments, or consolidating risk.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/EducationFAQ/A-4.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer Can astrology guide financial stability? by K. Jagadish.",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is there a right time for major purchases?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Prashna indicates supportive windows and cautions for big decisions.",

                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/EducationFAQ/A-6.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer Can astrology guide financial stability? by K. Jagadish.",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Will astrology predict quick wealth?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We focus on clarity and prudence—not promises of guaranteed outcomes.",

                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/EducationFAQ/A-9.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer Will astrology predict quick wealth? by K. Jagadish.",
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

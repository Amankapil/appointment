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
                      name: "Why do newlyweds clash?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Marriage is an adjustment. Habits, expectations, and communication styles take time to align.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Is delay in marriage a denial?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Not necessarily. Astrology helps distinguish delay from denial and indicates supportive timing.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can astrology help resolve conflicts?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Prashna Kundali reveals root causes and guides practical steps toward harmony.",
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

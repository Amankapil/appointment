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
                "@type": "FAQPage",
                "@id":
                  "https://prashnasiddhi.com/services/career-profession-astrology#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Why am I not getting selected despite qualifications?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Timing and planetary influence matter alongside preparation; Prashna reveals obstacles.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Should I change jobs now?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Prashna offers real-time clarity on whether to shift or stabilize.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can astrology show promotion periods?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Supportive Dasa/transits can point to growth windows.",
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

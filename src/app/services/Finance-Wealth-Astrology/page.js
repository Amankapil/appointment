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
                "@type": "FAQPage",
                "@id":
                  "https://prashnasiddhi.com/services/finance-wealth-astrology#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Can astrology guide financial stability?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. It helps with timing for savings, investments, or consolidating risk.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is there a right time for major purchases?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Prashna indicates supportive windows and cautions for big decisions.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Will astrology predict quick wealth?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We focus on clarity and prudence—not promises of guaranteed outcomes.",
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

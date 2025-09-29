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
                    name: "Can astrology show when we’ll have children?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Planetary periods and Prashna Kundali can indicate supportive timing.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does astrology help with parenting styles?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. It clarifies temperament differences and suggests balanced approaches.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is adoption supported astrologically?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Prashna can show alignment and timing for adoption if indicated.",
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

import ReviewSection from "@/Components/pagesComponent/Homecomponent/ReviewSection";
import Decisions from "@/Components/pagesComponent/Property-&-Real-Estate/Decisions";
import Guidance from "@/Components/pagesComponent/Property-&-Real-Estate/Guidance";
import ProFAQ from "@/Components/pagesComponent/Property-&-Real-Estate/ProFAQ";
import PropertyHero from "@/Components/pagesComponent/Property-&-Real-Estate/PropertyHero";
import Situations from "@/Components/pagesComponent/Property-&-Real-Estate/Situations";
import Solve from "@/Components/pagesComponent/Property-&-Real-Estate/Solve";
import Unique from "@/Components/pagesComponent/Property-&-Real-Estate/Unique";
import Script from "next/script";
import React from "react";

const page = () => {
  return (
    <>
      <PropertyHero />
      <Situations />
      <Decisions />
      <Guidance />
      <Unique />

      <ReviewSection />

      <Solve />
      <div id="property-faq">
        <ProFAQ />
      </div>

      <Script id="ld-json-property" type="application/ld+json">
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
                  "https://prashnasiddhi.com/services/property-real-estate-astrology#webpage",
                url: "https://prashnasiddhi.com/services/property-real-estate-astrology",
                name: "Property & Real Estate Astrology",
                isPartOf: { "@id": "https://prashnasiddhi.com#website" },
                about: { "@id": "https://prashnasiddhi.com#organization" },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: "https://prashnasiddhi.com/static/logo.png",
                },
                breadcrumb: {
                  "@id":
                    "https://prashnasiddhi.com/services/property-real-estate-astrology#breadcrumb",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://prashnasiddhi.com/services/property-real-estate-astrology#breadcrumb",
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
                    name: "Property & Real Estate Astrology",
                    item: "https://prashnasiddhi.com/services/property-real-estate-astrology",
                  },
                ],
              },
              {
                "@type": "Service",
                "@id":
                  "https://prashnasiddhi.com/services/property-real-estate-astrology#service",
                serviceType: "Property & Real Estate Astrology",
                name: "Property & Real Estate Astrology",
                url: "https://prashnasiddhi.com/services/property-real-estate-astrology",
                areaServed: "IN",
                provider: { "@id": "https://prashnasiddhi.com#organization" },
                description:
                  "Guidance and clarity for property & real estate astrology using Vedic Astrology and Prashna Kundali.",
                offers: {
                  "@type": "Offer",
                  url: "https://prashnasiddhi.com/request-consultation",
                  availability: "https://schema.org/OnlineOnly",
                },
              },
              {
                "@type": "PropertyFAQPage",
                "@id":
                  "https://prashnasiddhi.com/services/property-real-estate-astrology#property-faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Is this a good time to buy property?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Prashna can clarify timing and stability around purchase.",

                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/propertyFAQ/A-8.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer Will this case resolve soon? by K. Jagadish.",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Should I sell or hold?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "It helps weigh timing, liquidity, and stress factors.",

                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/propertyFAQ/A-2.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer should I sell or hold? by K. Jagadish.",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does Vastu matter?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Astrology and Vastu can be considered together for harmony.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/propertyFAQ/A-3.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer Does Vastu matter? by K. Jagadish.",
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

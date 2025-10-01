import Benefit from "@/Components/pagesComponent/Business-Astrology/Benefit";
import BHero from "@/Components/pagesComponent/Business-Astrology/BHero";
import Choose from "@/Components/pagesComponent/Business-Astrology/Choose";
import React from "react";
import Howitworks from "@/Components/pagesComponent/Business-Astrology/Howitworks";
import BusinessFAQ from "@/Components/pagesComponent/Business-Astrology/BusinessFAQ";
import Script from "next/script";
export const metadata = {
  title: "Business Astrology – Growth & Partnerships with Prashna Siddhi",
  description:
    "Plan new ventures, expansions, and partnerships with clarity through Vedic Astrology and Prashna Kundali. Discover the right time for business moves.",
  keywords: [
    "business astrology",
    "prashna kundali business",
    "startup astrology",
    "business timing astrology",
    "partnership astrology",
    "expansion astrology",
    "growth astrology",
  ],
  alternates: {
    canonical: "https://prashnasiddhi.com/services/business-astrology",
  },
  openGraph: {
    title: "Business Astrology – Growth & Partnerships with Prashna Siddhi",
    description:
      "Clarity for ventures, partnerships, and business growth with Vedic Astrology and Prashna Kundali.",
    url: "https://prashnasiddhi.com/services/business-astrology",
    siteName: "Prashna Siddhi",
    images: [
      {
        url: "https://prashnasiddhi.com/og-images/business.jpg",
        width: 1200,
        height: 630,
        alt: "Business Astrology",
      },
    ],
    type: "website",
  },
};

const page = () => {
  return (
    <>
      <BHero />
      <Choose />
      <Benefit />
      <Howitworks />

      <div id="bussiness-faq">
        <BusinessFAQ />
      </div>

      <Script id="ld-json-business" type="application/ld+json">
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
                  "https://prashnasiddhi.com/services/business-astrology#webpage",
                url: "https://prashnasiddhi.com/services/business-astrology",
                name: "Business Astrology",
                isPartOf: { "@id": "https://prashnasiddhi.com#website" },
                about: { "@id": "https://prashnasiddhi.com#organization" },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: "https://prashnasiddhi.com/static/logo.png",
                },
                breadcrumb: {
                  "@id":
                    "https://prashnasiddhi.com/services/business-astrology#breadcrumb",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://prashnasiddhi.com/services/business-astrology#breadcrumb",
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
                    name: "Business Astrology",
                    item: "https://prashnasiddhi.com/services/business-astrology",
                  },
                ],
              },
              {
                "@type": "Service",
                "@id":
                  "https://prashnasiddhi.com/services/business-astrology#service",
                serviceType: "Business Astrology",
                name: "Business Astrology",
                url: "https://prashnasiddhi.com/services/business-astrology",
                areaServed: "IN",
                provider: { "@id": "https://prashnasiddhi.com#organization" },
                description:
                  "Guidance and clarity for business astrology using Vedic Astrology and Prashna Kundali.",
                offers: {
                  "@type": "Offer",
                  url: "https://prashnasiddhi.com/request-consultation",
                  availability: "https://schema.org/OnlineOnly",
                },
              },
              {
                "@type": "BusinessFAQPage",
                "@id":
                  "https://prashnasiddhi.com/services/business-astrology#bussiness-faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Is this the right time to start a business?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Prashna clarifies launch timing and partnership suitability.",

                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/BussinessFAQ/A-7.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer Is this the right time to start a business? by K. Jagadish.",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Should I expand or consolidate?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "It indicates periods supportive of growth versus caution.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/BussinessFAQ/A-8.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer Should I expand or consolidate? by K. Jagadish.",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can astrology pick the right partner?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "It helps assess compatibility, trust, and shared direction.",

                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/BussinessFAQ/A-9.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer Can astrology pick the right partner? by K. Jagadish.",
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

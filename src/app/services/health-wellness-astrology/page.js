import Challenges from "@/Components/pagesComponent/Health/Challenges";
import Guidance from "@/Components/pagesComponent/Health/Guidance";
import Healing from "@/Components/pagesComponent/Health/Healing";
import HealthFaq from "@/Components/pagesComponent/Health/HealthFaq";
import HealthHero from "@/Components/pagesComponent/Health/HealthHero";
import Journey from "@/Components/pagesComponent/Health/Journey";
import Trust from "@/Components/pagesComponent/Health/Trust";
import ReviewSection from "@/Components/pagesComponent/Homecomponent/ReviewSection";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Health & Wellness Astrology – Balance with Prashna Siddhi",
  description:
    "Explore health-sensitive periods and lifestyle guidance with Vedic Astrology and Prashna Kundali. Complement medical care with clarity on timing and wellbeing.",
  keywords: [
    "health astrology",
    "wellness astrology",
    "prashna kundali health",
    "health timing astrology",
    "lifestyle astrology",
    "vedic astrology health",
    "mental wellness astrology",
  ],
  alternates: {
    canonical: "https://prashnasiddhi.com/services/health-wellness-astrology",
  },
  openGraph: {
    title: "Health & Wellness Astrology – Balance with Prashna Siddhi",
    description:
      "Balance lifestyle and health timing with Vedic Astrology and Prashna Kundali for holistic wellbeing.",
    url: "https://prashnasiddhi.com/services/health-wellness-astrology",
    siteName: "Prashna Siddhi",
    images: [
      {
        url: "https://prashnasiddhi.com/og-images/health-wellness.jpg",
        width: 1200,
        height: 630,
        alt: "Health & Wellness Astrology",
      },
    ],
    type: "website",
  },
};

const page = () => {
  return (
    <>
      <HealthHero />
      <Challenges />
      <Journey />
      <Healing />
      <Trust />
      <ReviewSection />
      <Guidance />
      <HealthFaq />

      <Script id="ld-json-health" type="application/ld+json">
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
                  "https://prashnasiddhi.com/services/health-wellness-astrology#webpage",
                url: "https://prashnasiddhi.com/services/health-wellness-astrology",
                name: "Health & Wellness Astrology",
                isPartOf: { "@id": "https://prashnasiddhi.com#website" },
                about: { "@id": "https://prashnasiddhi.com#organization" },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: "https://prashnasiddhi.com/static/logo.png",
                },
                breadcrumb: {
                  "@id":
                    "https://prashnasiddhi.com/services/health-wellness-astrology#breadcrumb",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://prashnasiddhi.com/services/health-wellness-astrology#breadcrumb",
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
                    name: "Health & Wellness Astrology",
                    item: "https://prashnasiddhi.com/services/health-wellness-astrology",
                  },
                ],
              },
              {
                "@type": "Service",
                "@id":
                  "https://prashnasiddhi.com/services/health-wellness-astrology#service",
                serviceType: "Health & Wellness Astrology",
                name: "Health & Wellness Astrology",
                url: "https://prashnasiddhi.com/services/health-wellness-astrology",
                areaServed: "IN",
                provider: { "@id": "https://prashnasiddhi.com#organization" },
                description:
                  "Guidance and clarity for health & wellness astrology using Vedic Astrology and Prashna Kundali.",
                offers: {
                  "@type": "Offer",
                  url: "https://prashnasiddhi.com/request-consultation",
                  availability: "https://schema.org/OnlineOnly",
                },
              },
              {
                "@type": "HealthFAQPage",
                "@id":
                  "https://prashnasiddhi.com/services/health-wellness-astrology#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Can astrology indicate health-sensitive periods?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Transit and Dasa periods can highlight times to prioritize wellbeing.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/healthFAQ/A-3.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer Can astrology indicate health-sensitive periods? by K. Jagadish.",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does Prashna help with lifestyle choices?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "It offers clarity on timing and focus areas to support medical advice.",

                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/healthFAQ/A-7.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer Does Prashna help with lifestyle choices? by K. Jagadish.",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is astrology a replacement for doctors?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No. It complements—not replaces—professional medical care.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/healthFAQ/A-4.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer Is astrology a replacement for doctors? by K. Jagadish.",
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

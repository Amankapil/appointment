import ReviewSection from "@/Components/pagesComponent/Homecomponent/ReviewSection";
import Guidance from "@/Components/pagesComponent/Litigation-And-Legal-Matters-Astrology/Guidance";
import LegalFaq from "@/Components/pagesComponent/Litigation-And-Legal-Matters-Astrology/LegalFaq";
import LegalHero from "@/Components/pagesComponent/Litigation-And-Legal-Matters-Astrology/LegalHero";
import Litigation from "@/Components/pagesComponent/Litigation-And-Legal-Matters-Astrology/Litigation";
import Solve from "@/Components/pagesComponent/Litigation-And-Legal-Matters-Astrology/Solve";
import Struggles from "@/Components/pagesComponent/Litigation-And-Legal-Matters-Astrology/Struggles";
import Unique from "@/Components/pagesComponent/Litigation-And-Legal-Matters-Astrology/Unique";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Litigation & Legal Astrology – Clarity with Prashna Siddhi",
  description:
    "Resolve disputes and gain clarity on legal matters with Vedic Astrology and Prashna Kundali. Understand timing, strategy, and outcomes better.",
  keywords: [
    "litigation astrology",
    "legal astrology",
    "prashna kundali legal",
    "court case astrology",
    "dispute resolution astrology",
    "legal timing astrology",
    "vedic astrology law",
  ],
  alternates: {
    canonical: "https://prashnasiddhi.com/services/litigation-legal-astrology",
  },
  openGraph: {
    title: "Litigation & Legal Astrology – Clarity with Prashna Siddhi",
    description:
      "Clarity for legal disputes, cases, and timing with Vedic Astrology and Prashna Kundali.",
    url: "https://prashnasiddhi.com/services/litigation-legal-astrology",
    siteName: "Prashna Siddhi",
    images: [
      {
        url: "https://prashnasiddhi.com/og-images/litigation-legal.jpg",
        width: 1200,
        height: 630,
        alt: "Litigation & Legal Astrology",
      },
    ],
    type: "website",
  },
};

const page = () => {
  return (
    <>
      <LegalHero />
      <Struggles />
      <Litigation />
      <Guidance />
      <Unique />
      <ReviewSection />
      <Solve />
      <LegalFaq />

      <Script id="ld-json-litigation" type="application/ld+json">
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
                  "https://prashnasiddhi.com/services/litigation-legal-matters#webpage",
                url: "https://prashnasiddhi.com/services/litigation-legal-matters",
                name: "Litigation & Legal Matters",
                isPartOf: { "@id": "https://prashnasiddhi.com#website" },
                about: { "@id": "https://prashnasiddhi.com#organization" },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: "https://prashnasiddhi.com/static/logo.png",
                },
                breadcrumb: {
                  "@id":
                    "https://prashnasiddhi.com/services/litigation-legal-matters#breadcrumb",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://prashnasiddhi.com/services/litigation-legal-matters#breadcrumb",
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
                    name: "Litigation & Legal Matters",
                    item: "https://prashnasiddhi.com/services/litigation-legal-matters",
                  },
                ],
              },
              {
                "@type": "Service",
                "@id":
                  "https://prashnasiddhi.com/services/litigation-legal-matters#service",
                serviceType: "Litigation & Legal Matters",
                name: "Litigation & Legal Matters",
                url: "https://prashnasiddhi.com/services/litigation-legal-matters",
                areaServed: "IN",
                provider: { "@id": "https://prashnasiddhi.com#organization" },
                description:
                  "Guidance and clarity for litigation & legal matters using Vedic Astrology and Prashna Kundali.",
                offers: {
                  "@type": "Offer",
                  url: "https://prashnasiddhi.com/request-consultation",
                  availability: "https://schema.org/OnlineOnly",
                },
              },
              {
                "@type": "LitigationFAQPage",
                "@id":
                  "https://prashnasiddhi.com/services/litigation-legal-matters#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Will this case resolve soon?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Prashna can indicate momentum and likely timelines.",

                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/LegalFaq/A-8.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer Will this case resolve soon? by K. Jagadish.",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Should I settle or proceed?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "It offers clarity on strategic direction and timing.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/LegalFaq/A-6.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer Should I settle or proceed? by K. Jagadish.",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can astrology guarantee outcomes?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No. It guides decisions; legal counsel remains essential.",

                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/LegalFaq/A-1.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer Can astrology guarantee outcomes? by K. Jagadish.",
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

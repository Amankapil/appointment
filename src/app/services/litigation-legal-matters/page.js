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
                    name: "Can astrology predict if I will win my case?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, astrology shows the likelihood of success and timing of judgment.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/LegalFaq/A-1.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can astrology predict if I will win my case?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT05S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can it reduce case delays?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Birth Chart analysed along with Vedic Prashna Kundali can help putting efforts in the right direction. Thus, delays can be minimised to some extent.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/LegalFaq/A-2.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can it reduce case delays?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT10S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is astrology useful for ongoing cases?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, prashna kundali gives real-time guidance for hearings and settlements.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/LegalFaq/A-3.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Is astrology useful for ongoing cases?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT05S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does karma affect legal battles?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, many disputes are karmic. Astrology reveals the spiritual lessons and puts you on the right track.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/LegalFaq/A-4.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Does karma affect legal battles?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT07S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can astrology prevent false allegations?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "It can show tendencies and suggest the right path to minimize impact.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/LegalFaq/A-5.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can astrology prevent false allegations?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT04S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Will it tell me whether settlement is better?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, astrology highlights the path of least resistance and success.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/LegalFaq/A-6.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Will it tell me whether settlement is better?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT05S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can astrology help in criminal cases?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, it provides clarity on chances of acquittal, bail, and relief.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/LegalFaq/A-7.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can astrology help in criminal cases?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT05S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Will my divorce case end soon?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, charts show timing and outcome of family-related disputes.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/LegalFaq/A-8.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Will my divorce case end soon?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT04S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does it help in property/legal inheritance disputes?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Absolutely — astrology often guides families toward peaceful resolution.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/LegalFaq/A-9.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Does it help in property/legal inheritance disputes?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT05S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Should I consult before filing a new case?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, timing is critical, and astrology helps avoid unnecessary battles.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/LegalFaq/A-10.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Should I consult before filing a new case?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT05S",
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

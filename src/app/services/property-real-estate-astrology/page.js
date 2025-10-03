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
                    name: "Can astrology predict when I will own a house?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, astrology clearly shows property ownership periods and favorable timings.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/propertyFAQ/A-1.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can astrology predict when I will own a house?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT05S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can it resolve property disputes?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, astrology highlights the cause and timing of resolution, along with practical actionable remedies.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/propertyFAQ/A-2.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can it resolve property disputes?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT08S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does vastu really matter in property?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Vaastu should not be viewed from faith or belief perspective. Look at from a practical point of view.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/propertyFAQ/A-3.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Does vastu really matter in property?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT07S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Should I consult before registering property?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Though, every Muhurath is fixed right at our first breath, you can be practical in ascertaining several factors impacting your major decisions.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/propertyFAQ/A-4.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Should I consult before registering property?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT09S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can astrology prevent fraud in property deals?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, charts often reveal hidden risks and help avoid wrong deals.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/propertyFAQ/A-5.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can astrology prevent fraud in property deals?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT04S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "I live abroad. Can astrology guide my Indian property investments?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, many NRIs rely on astrology for safe and profitable decisions.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/propertyFAQ/A-6.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'I live abroad. Can astrology guide my Indian property investments?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT05S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does astrology suggest what type of property is suitable for me?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, it can indicate whether land, house, or commercial space suits your destiny.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/propertyFAQ/A-7.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Does astrology suggest what type of property is suitable for me?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT06S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why do my property deals always get delayed?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Delays are often karmic. Astrology shows the right time when blockages clear.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/propertyFAQ/A-8.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Why do my property deals always get delayed?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT05S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can astrology help with loans for property purchase?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, it shows financial stability and favorable periods for loans.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/propertyFAQ/A-9.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can astrology help with loans for property purchase?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT04S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does vastu correction really work without demolition?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Any remedy is subject to destiny only. You can rely on Vedic Prashna Kundali where several Bhavas can be analysed simultaneously to guide you.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/propertyFAQ/A-10.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Does vastu correction really work without demolition?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT10S",
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

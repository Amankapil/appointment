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
                    name: "How is Business Astrology different from normal astrology?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Traditional astrology needs birth details and is more personality/life focused. Business Astrology uses Prashna Kundali, giving real-time insights for specific business questions and comparisons.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/BussinessFAQ/A-1.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'How is Business Astrology different from normal astrology?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT13S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I compare between two business options, like choosing between two vendors?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. This is one of the strongest applications of Business Astrology — direct comparisons are possible, which is not the case with regular birth chart analysis.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/BussinessFAQ/A-2.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can I compare between two business options, like choosing between two vendors?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT10S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I check if a decision will lead to legal problems?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Prashna Kundali can reveal if a decision aligns with law, ethics, and regulatory safety, helping you avoid unnecessary risks.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/BussinessFAQ/A-3.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can I check if a decision will lead to legal problems?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT09S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do I need the birth details of people I’m dealing with?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No. This is where Business Astrology shines. You can get insights into partners, competitors, clients, or even regulators without needing their date/time of birth.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/BussinessFAQ/A-4.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Do I need the birth details of people I’m dealing with?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT12S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What kind of answers will I get?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Mostly short, clear, and precise responses — often in a single sentence. Ideal for fast decision-making.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/BussinessFAQ/A-5.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'What kind of answers will I get?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT08S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can this be used daily for trading or quick decisions?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Many clients use it regularly for investment timing, short-term trading, and deal negotiations.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/BussinessFAQ/A-6.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can this be used daily for trading or quick decisions?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT08S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can astrology help me decide between two business options?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Prashna Kundali is uniquely powerful in comparing alternatives. Whether it’s choosing between two vendors, locations, or investment products, astrology reveals which path aligns better with your karmic flow and long-term stability",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/BussinessFAQ/A-7.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can astrology help me decide between two business options?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT16S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Will I be able to expand my business overseas?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Expansion is a karmic milestone. Astrology can show whether foreign ventures will be profitable or bring challenges like legal restrictions, delays, or cultural mismatches. Timing plays a key role here.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/BussinessFAQ/A-8.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Will I be able to expand my business overseas?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT14S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How do I know if my business partner is trustworthy?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Birth details are not always available, but Prashna Kundali can reveal the integrity and true intentions of a person at the very moment you raise the question. This guidance helps avoid costly mistakes.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/BussinessFAQ/A-9.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'How do I know if my business partner is trustworthy?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT13S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can astrology predict financial risks or legal troubles in business?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. While no one can bypass karmic law, astrology gives advance warning of risks. It can show whether an action may attract regulatory or legal hurdles and guide you toward safer choices.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/BussinessFAQ/A-10.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can astrology predict financial risks or legal troubles in business?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT13S",
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

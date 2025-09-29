import EducationFaq from "@/Components/pagesComponent/Education-&-Studies/EducationFaq";
import EducationHero from "@/Components/pagesComponent/Education-&-Studies/EducationHero";
import EducationStruggles from "@/Components/pagesComponent/Education-&-Studies/EducationStruggles";
import EduChallenges from "@/Components/pagesComponent/Education-&-Studies/EduChallenges";
import EduMethod from "@/Components/pagesComponent/Education-&-Studies/EduMethod";
import EduTrust from "@/Components/pagesComponent/Education-&-Studies/EduTrust";
import Succeed from "@/Components/pagesComponent/Education-&-Studies/Succeed";
import ReviewSection from "@/Components/pagesComponent/Homecomponent/ReviewSection";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Education & Study Astrology – Academic Clarity with Prashna Siddhi",
  description:
    "Align studies, exam timing, and foreign education with Vedic Astrology and Prashna Kundali. Discover clarity for academic success.",
  keywords: [
    "education astrology",
    "study astrology",
    "prashna kundali education",
    "exam timing astrology",
    "foreign studies astrology",
    "academic success astrology",
    "vedic astrology study",
  ],
  alternates: {
    canonical: "https://prashnasiddhi.com/services/education-study-astrology",
  },
  openGraph: {
    title: "Education & Study Astrology – Academic Clarity with Prashna Siddhi",
    description:
      "Clarity for studies, exams, and education planning with Prashna Kundali and Vedic Astrology.",
    url: "https://prashnasiddhi.com/services/education-study-astrology",
    siteName: "Prashna Siddhi",
    images: [
      {
        url: "https://prashnasiddhi.com/og-images/education-study.jpg",
        width: 1200,
        height: 630,
        alt: "Education & Study Astrology",
      },
    ],
    type: "website",
  },
};

const page = () => {
  return (
    <>
      <EducationHero />
      <EducationStruggles />
      <Succeed />
      <EduMethod />
      <EduTrust />
      <ReviewSection />
      <EduChallenges />
      <EducationFaq />

      <Script id="ld-json-education" type="application/ld+json">
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
                  "https://prashnasiddhi.com/services/education-study-astrology#webpage",
                url: "https://prashnasiddhi.com/services/education-study-astrology",
                name: "Education & Study Astrology",
                isPartOf: { "@id": "https://prashnasiddhi.com#website" },
                about: { "@id": "https://prashnasiddhi.com#organization" },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: "https://prashnasiddhi.com/static/logo.png",
                },
                breadcrumb: {
                  "@id":
                    "https://prashnasiddhi.com/services/education-study-astrology#breadcrumb",
                },
              },
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://prashnasiddhi.com/services/education-study-astrology#breadcrumb",
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
                    name: "Education & Study Astrology",
                    item: "https://prashnasiddhi.com/services/education-study-astrology",
                  },
                ],
              },
              {
                "@type": "Service",
                "@id":
                  "https://prashnasiddhi.com/services/education-study-astrology#service",
                serviceType: "Education & Study Astrology",
                name: "Education & Study Astrology",
                url: "https://prashnasiddhi.com/services/education-study-astrology",
                areaServed: "IN",
                provider: { "@id": "https://prashnasiddhi.com#organization" },
                description:
                  "Guidance and clarity for education & study astrology using Vedic Astrology and Prashna Kundali.",
                offers: {
                  "@type": "Offer",
                  url: "https://prashnasiddhi.com/request-consultation",
                  availability: "https://schema.org/OnlineOnly",
                },
              },
              {
                "@type": "EducationFAQPage",
                "@id":
                  "https://prashnasiddhi.com/services/education-study-astrology#faq",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Which stream suits me best?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Astrology aligns natural aptitude with suitable study fields.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can it help with exam timing?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Prashna highlights periods to attempt or prepare strategically.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Foreign studies—right choice now?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "It can indicate alignment and timing for overseas education.",
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

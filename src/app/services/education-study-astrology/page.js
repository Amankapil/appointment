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
                    name: "Can astrology predict success in exams?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, astrology shows strong and weak periods for performance. It can’t replace hard work but guides preparation.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/EducationFAQ/A-1.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can astrology predict success in exams?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT09S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why does my child study hard but still fail?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sometimes karmic factors affect focus or timing. Astrology highlights these and shows when improvement comes.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/EducationFAQ/A-2.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Why does my child study hard but still fail?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT09S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can astrology help choose the right career?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Absolutely. Charts reveal natural strengths, suitable subjects, and long-term career paths.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/EducationFAQ/A-3.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can astrology help choose the right career?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT07S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is studying abroad shown in astrology?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, many charts clearly show opportunities for overseas education and settlement.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/EducationFAQ/A-4.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Is studying abroad shown in astrology?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT06S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Why is my child intelligent but distracted?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Distractions often come from planetary influences. Astrology helps understand and counter them.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/EducationFAQ/A-5.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Why is my child intelligent but distracted?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT07S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can astrology guide competitive exams?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, it shows favorable exam periods and helps plan attempts wisely.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/EducationFAQ/A-6.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can astrology guide competitive exams?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT05S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does astrology help with motivation?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, it identifies mental blocks and periods of low energy. With awareness, effort becomes smoother.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/EducationFAQ/A-7.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Does astrology help with motivation?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT08S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "My child is a slow learner. Can astrology help?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Astrology highlights learning style. With right support and timing, progress always comes.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/EducationFAQ/A-8.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'My child is a slow learner. Can astrology help?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT06S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Should parents also be consulted along with students?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, because parental expectations and support deeply affect students.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/EducationFAQ/A-9.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Should parents also be consulted along with students?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT05S",
                      },
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can astrology replace effort in studies?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Never. Astrology guides and supports — but discipline, focus, and effort are essential.",
                      audio: {
                        "@type": "AudioObject",
                        contentUrl:
                          "https://prashnasiddhi.com/EducationFAQ/A-10.mp3",
                        encodingFormat: "audio/mpeg",
                        description:
                          "Audio answer about 'Can astrology replace effort in studies?' by K. Jagadish.",
                        uploadDate: "2025-10-03",
                        inLanguage: "en",
                        duration: "PT07S",
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

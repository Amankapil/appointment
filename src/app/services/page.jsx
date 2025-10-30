import React from "react";
import ReviewSection from "@/Components/pagesComponent/Homecomponent/ReviewSection";
import Consultation from "@/Components/pagesComponent/serviceComponent/Consultation";
import PricingSection from "@/Components/pagesComponent/serviceComponent/PricingSection";
import Qa from "@/Components/pagesComponent/serviceComponent/Qa";
import ServiceSection from "@/Components/pagesComponent/ServiceSection";
import Popup from "@/Components/Popup";
import FAQSection from "@/Components/VoiceFaq";
import Head from "next/head";
import LiveVideo from "@/Components/pagesComponent/Homecomponent/LiveVideo";

export const metadata = {
  title: "Property & Real Estate Astrology – Timing with Prashna Siddhi",
  description:
    "Find the right time to buy, sell, or invest in property with Vedic Astrology and Prashna Kundali. Gain clarity for stable and secure decisions.",
  keywords: [
    "property astrology",
    "real estate astrology",
    "prashna kundali property",
    "property timing astrology",
    "buying property astrology",
    "selling property astrology",
    "vastu astrology",
  ],
  alternates: {
    canonical:
      "https://prashnasiddhi.com/services/property-real-estate-astrology",
  },
  openGraph: {
    title: "Property & Real Estate Astrology – Timing with Prashna Siddhi",
    description:
      "Clarity for buying, selling, and investing in property with Vedic Astrology and Prashna Kundali.",
    url: "https://prashnasiddhi.com/services/property-real-estate-astrology",
    siteName: "Prashna Siddhi",
    images: [
      {
        url: "https://prashnasiddhi.com/og-images/property-real-estate.jpg",
        width: 1200,
        height: 630,
        alt: "Property & Real Estate Astrology",
      },
    ],
    type: "website",
  },
};

const page = () => {
  return (
    <>
      {/* <Head>
        <meta
          name="title"
          content="Astrology Services – Prashna Siddhi for Accurate Insights"
        />
        <meta
          name="description"
          content="Explore Prashna Siddhi's expert astrology services for personalized guidance on love, career, health, and life challenges. Gain clarity with Vedic astrology insights."
        />
      </Head> */}

      <Popup
        heading="Still thinking?"
        subtext="Don’t leave with doubts. Request your 7-min Siddhi Seva consultation today and get clear, honest guidance."
        ctaLabel="✨ Request your consultation today"
        ctaLink="/booking"
      />
      <Consultation />
      <LiveVideo />
      <ServiceSection />
      <FAQSection />
      <ReviewSection />
      <PricingSection />
      <Qa />
    </>
  );
};

export default page;

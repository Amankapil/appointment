import ReviewSection from "@/Components/pagesComponent/Homecomponent/ReviewSection";
import Consultation from "@/Components/pagesComponent/serviceComponent/Consultation";
import PricingSection from "@/Components/pagesComponent/serviceComponent/PricingSection";
import Qa from "@/Components/pagesComponent/serviceComponent/Qa";
import Popup from "@/Components/Popup";
import FAQSection from "@/Components/VoiceFaq";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <meta
          name="title"
          content="Astrology Services – Prashna Siddhi for Accurate Insights"
        />
        <meta
          name="description"
          content="Explore Prashna Siddhi's expert astrology services for personalized guidance on love, career, health, and life challenges. Gain clarity with Vedic astrology insights."
        />
      </Head>

      <Popup
        heading="Still thinking?"
        subtext="Don’t leave with doubts. Request your 7-min Siddhi Seva consultation today and get clear, honest guidance."
        ctaLabel="✨ Request your consultation today"
        ctaLink="/booking"
      />
      <Consultation />
      <FAQSection />
      <ReviewSection />
      <PricingSection />
      <Qa />
    </>
  );
};

export default page;

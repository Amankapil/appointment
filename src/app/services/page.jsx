import Consultation from "@/Components/pagesComponent/serviceComponent/Consultation";
import PricingSection from "@/Components/pagesComponent/serviceComponent/PricingSection";
import Qa from "@/Components/pagesComponent/serviceComponent/Qa";
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
      <Consultation />
      <PricingSection />
      <Qa />
    </>
  );
};

export default page;

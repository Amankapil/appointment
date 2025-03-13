import PricingSection from "@/Components/pagesComponent/serviceComponent/PricingSection";
import BubbleComponent from "@/Components/pagesComponent/work/BubbleComponent";
import DevotionalQuestions from "@/Components/pagesComponent/work/BubbleComponent";
import HeroWork from "@/Components/pagesComponent/work/HeroWork";
import Language from "@/Components/pagesComponent/work/Language";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <meta
          name="title"
          content="How It Works – Prashna Siddhi Astrology Services Explained"
        />
        <meta
          name="description"
          content="Learn how Prashna Siddhi works. Discover the step-by-step process of receiving accurate astrology insights and personalized guidance on life, career, and relationships."
        />
      </Head>

      <HeroWork />
      <BubbleComponent />
      {/* <DevotionalQuestions /> */}
      <Language />
      {/* <PricingSection /> */}
    </>
  );
};

export default page;

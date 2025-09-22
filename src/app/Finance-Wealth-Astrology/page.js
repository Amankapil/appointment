import HealthFaq from "@/Components/pagesComponent/Finance-Wealth-Astrology/FinanceFAQ";
import FinanceHero from "@/Components/pagesComponent/Finance-Wealth-Astrology/FinanceHero";
import Financial from "@/Components/pagesComponent/Finance-Wealth-Astrology/Financial";
import Guidance from "@/Components/pagesComponent/Finance-Wealth-Astrology/Guidance";
import Healing from "@/Components/pagesComponent/Finance-Wealth-Astrology/Healing";
import Struggles from "@/Components/pagesComponent/Finance-Wealth-Astrology/Struggles";
import Wealth from "@/Components/pagesComponent/Finance-Wealth-Astrology/Wealth";
import ReviewSection from "@/Components/pagesComponent/Homecomponent/ReviewSection";
import React from "react";

const page = () => {
  return (
    <>
      <FinanceHero />
      <Struggles />
      <Financial />
      <Healing />
      <Wealth />
      <ReviewSection />
      <Guidance />
      <HealthFaq />
    </>
  );
};

export default page;

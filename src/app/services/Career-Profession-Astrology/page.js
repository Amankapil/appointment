import CareerFAQ from "@/Components/pagesComponent/Career-Profession-Astrology/CareerFAQ";
import CareerHero from "@/Components/pagesComponent/Career-Profession-Astrology/CareerHero";
import Challenges from "@/Components/pagesComponent/Career-Profession-Astrology/Challenges";
import Clarity from "@/Components/pagesComponent/Career-Profession-Astrology/Clarity";
import Method from "@/Components/pagesComponent/Career-Profession-Astrology/Method";
import Struggles from "@/Components/pagesComponent/Career-Profession-Astrology/Struggles";
import Trust from "@/Components/pagesComponent/Career-Profession-Astrology/Trust";
import ReviewSection from "@/Components/pagesComponent/Homecomponent/ReviewSection";
import React from "react";

const page = () => {
  return (
    <>
      <CareerHero />
      <Struggles />
      <Clarity />
      <Method />
      <Trust />
      <ReviewSection />
      <Challenges />
      <CareerFAQ />
    </>
  );
};

export default page;

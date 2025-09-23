import ReviewSection from "@/Components/pagesComponent/Homecomponent/ReviewSection";
import Guidance from "@/Components/pagesComponent/Litigation-And-Legal-Matters-Astrology/Guidance";
import LegalFaq from "@/Components/pagesComponent/Litigation-And-Legal-Matters-Astrology/LegalFaq";
import LegalHero from "@/Components/pagesComponent/Litigation-And-Legal-Matters-Astrology/LegalHero";
import Litigation from "@/Components/pagesComponent/Litigation-And-Legal-Matters-Astrology/Litigation";
import Solve from "@/Components/pagesComponent/Litigation-And-Legal-Matters-Astrology/Solve";
import Struggles from "@/Components/pagesComponent/Litigation-And-Legal-Matters-Astrology/Struggles";
import Unique from "@/Components/pagesComponent/Litigation-And-Legal-Matters-Astrology/Unique";
import React from "react";

const page = () => {
  return (
    <>
      <LegalHero />
      <Struggles />
      <Litigation />
      <Guidance />
      <Unique />
      <ReviewSection />
      <Solve />
      <LegalFaq />
    </>
  );
};

export default page;

import ReviewSection from "@/Components/pagesComponent/Homecomponent/ReviewSection";
import Decisions from "@/Components/pagesComponent/Property-&-Real-Estate/Decisions";
import Guidance from "@/Components/pagesComponent/Property-&-Real-Estate/Guidance";
import ProFAQ from "@/Components/pagesComponent/Property-&-Real-Estate/ProFAQ";
import PropertyHero from "@/Components/pagesComponent/Property-&-Real-Estate/PropertyHero";
import Situations from "@/Components/pagesComponent/Property-&-Real-Estate/Situations";
import Solve from "@/Components/pagesComponent/Property-&-Real-Estate/Solve";
import Unique from "@/Components/pagesComponent/Property-&-Real-Estate/Unique";
import React from "react";

const page = () => {
  return (
    <>
      <PropertyHero />
      <Situations />
      <Decisions />
      <Guidance />
      <Unique />
      <ReviewSection />
      <Solve />
      <ProFAQ />
    </>
  );
};

export default page;

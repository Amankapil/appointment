import PricingSection from "@/Components/pagesComponent/serviceComponent/PricingSection";
import DevotionalQuestions from "@/Components/pagesComponent/work/BubbleComponent";
import HeroWork from "@/Components/pagesComponent/work/HeroWork";
import Language from "@/Components/pagesComponent/work/Language";
import React from "react";

const page = () => {
  return (
    <>
      <HeroWork />
      <DevotionalQuestions />
      <Language />
      {/* <PricingSection /> */}
    </>
  );
};

export default page;

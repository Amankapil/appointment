import PricingSection from "@/Components/pagesComponent/serviceComponent/PricingSection";
import BubbleComponent from "@/Components/pagesComponent/work/BubbleComponent";
import DevotionalQuestions from "@/Components/pagesComponent/work/BubbleComponent";
import HeroWork from "@/Components/pagesComponent/work/HeroWork";
import Language from "@/Components/pagesComponent/work/Language";
import React from "react";

const page = () => {
  return (
    <>
      <HeroWork />
      <BubbleComponent />
      {/* <DevotionalQuestions /> */}
      <Language />
      {/* <PricingSection /> */}
    </>
  );
};

export default page;

import Consultation from "@/Components/pagesComponent/serviceComponent/Consultation";
import PricingSection from "@/Components/pagesComponent/serviceComponent/PricingSection";
import Qa from "@/Components/pagesComponent/serviceComponent/Qa";
import React from "react";

const page = () => {
  return (
    <>
      <Consultation />
      <PricingSection />
      <Qa />
    </>
  );
};

export default page;

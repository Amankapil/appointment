import Benefit from "@/Components/pagesComponent/Business-Astrology/Benefit";
import BHero from "@/Components/pagesComponent/Business-Astrology/BHero";
import Choose from "@/Components/pagesComponent/Business-Astrology/Choose";
import React from "react";
import Howitworks from "@/Components/pagesComponent/Business-Astrology/Howitworks";
import BusinessFAQ from "@/Components/pagesComponent/Business-Astrology/BusinessFAQ";

const page = () => {
  return (
    <>
      <BHero />
      <Choose />
      <Benefit />
      <Howitworks />
      <BusinessFAQ />
    </>
  );
};

export default page;

import Blueprint from "@/Components/pagesComponent/Biololgical/blueprint";
import Cosmic from "@/Components/pagesComponent/Biololgical/Cosmic";
import Faq from "@/Components/pagesComponent/Biololgical/Faq";
import HeroBio from "@/Components/pagesComponent/Biololgical/HeroBio";
import Karmic from "@/Components/pagesComponent/Biololgical/Karmic";
import Medical from "@/Components/pagesComponent/Biololgical/Medical";
import Takeaways from "@/Components/pagesComponent/Biololgical/Takeaways";
import React from "react";

const page = () => {
  return (
    <>
      <HeroBio />
      <Medical />
      <Cosmic />
      <Karmic />
      <Faq />
      <Takeaways />
      <Blueprint />
    </>
  );
};

export default page;

import AboutHero from "@/Components/pagesComponent/about/AboutHero";
import Divine from "@/Components/pagesComponent/about/Divine";
import Prashna from "@/Components/pagesComponent/about/Prashna";
import Spirituality from "@/Components/pagesComponent/about/Spirituality";
import Vision from "@/Components/pagesComponent/about/Vision";
import React from "react";

const page = () => {
  return (
    <>
      <AboutHero />
      <Prashna />
      <Spirituality />
      <Divine />
      <Vision />
    </>
  );
};

export default page;

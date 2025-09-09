// import Blueprint from "@/Components/pagesComponent/Biololgical/blueprint";
import BookPopup from "@/Components/BookPopup";
import Cosmic from "@/Components/pagesComponent/Biololgical/Cosmic";
import Faq from "@/Components/pagesComponent/Biololgical/Faq";
import HeroBio from "@/Components/pagesComponent/Biololgical/HeroBio";
import Karmic from "@/Components/pagesComponent/Biololgical/Karmic";
import Medical from "@/Components/pagesComponent/Biololgical/Medical";
import Takeaways from "@/Components/pagesComponent/Biololgical/Takeaways";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <meta
          name="title"
          content="Astrology and Biological Growth – Understanding the Lagna's Influence | Prashna Siddhi"
        />
        <meta
          name="description"
          content="Delve into how the Ascendant (Lagna) at birth influences health and growth. Explore the astrological factors affecting biological development with Prashna Siddhi."
        />
      </Head>
      <BookPopup />
      <HeroBio />
      <Medical />
      <Cosmic />
      <Karmic />
      <Faq />
      <Takeaways />
      {/* <Blueprint /> */}
    </>
  );
};

export default page;

import BookPopup from "@/Components/BookPopup";
import Ascendant from "@/Components/pagesComponent/Enthusiasts/Ascendant";
import Conclusion from "@/Components/pagesComponent/Enthusiasts/Conclusion";
import HeroEn from "@/Components/pagesComponent/Enthusiasts/HeroEn";
// import Precise from "@/Components/pagesComponent/Enthusiasts/precise";
import Rashi from "@/Components/pagesComponent/Enthusiasts/Rashi";
import Twins from "@/Components/pagesComponent/Enthusiasts/Twins";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <meta
          name="title"
          content="Astrology Enthusiasts – Deepen Your Vedic Knowledge | Prashna Siddhi"
        />
        <meta
          name="description"
          content="Join Prashna Siddhi's community of astrology enthusiasts. Explore resources, discussions, and insights to enhance your understanding of Vedic astrology and Prashna Shastra."
        />
      </Head>
      <BookPopup />
      <HeroEn />
      <Rashi />
      <Ascendant />
      <Twins />
      <Conclusion />
      {/* <Precise /> */}
    </>
  );
};

export default page;

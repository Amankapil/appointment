import AboutHero from "@/Components/pagesComponent/about/AboutHero";
import Divine from "@/Components/pagesComponent/about/Divine";
import Prashna from "@/Components/pagesComponent/about/Prashna";
import Spirituality from "@/Components/pagesComponent/about/Spirituality";
import Vision from "@/Components/pagesComponent/about/Vision";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <meta
          name="title"
          content="About Prashna Siddhi – Expert Vedic Astrology Services"
        />
        <meta
          name="description"
          content="Learn about Prashna Siddhi, offering expert Vedic astrology services. Discover our mission to provide accurate insights and guidance through Prashna Shastra."
        />
      </Head>
      <AboutHero />
      <Prashna />
      <Spirituality />
      <Divine />
      <Vision />
    </>
  );
};

export default page;

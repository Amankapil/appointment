import Choose from "@/Components/pagesComponent/unique/Choose";
import HeroUn from "@/Components/pagesComponent/unique/HeroUn";
import Honest from "@/Components/pagesComponent/unique/Honest";
import Peace from "@/Components/pagesComponent/unique/Peace";
import Shielded from "@/Components/pagesComponent/unique/Shielded";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <meta
          name="title"
          content="Unique Approach – Prashna Siddhi's Vedic Prashna Jyotishya"
        />
        <meta
          name="description"
          content="Experience Prashna Siddhi's unique Vedic Prashna Jyotishya method, offering precise astrological insights without the need for birth details. Discover a divine approach to astrology."
        />
      </Head>
      <HeroUn />
      <Honest />
      <Shielded />
      <Choose />
      <Peace />
    </>
  );
};

export default page;

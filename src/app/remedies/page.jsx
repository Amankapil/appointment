import HeroRem from "@/Components/pagesComponent/remedies/HeroRem";
import Meditation from "@/Components/pagesComponent/remedies/Meditation";
import RemWorks from "@/Components/pagesComponent/remedies/RemWorks";
import Thought from "@/Components/pagesComponent/remedies/Thought";
import Wisdom from "@/Components/pagesComponent/remedies/Wisdom";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <meta
          name="title"
          content="Astrology Remedies – Effective Solutions for Life Challenges | Prashna Siddhi"
        />
        <meta
          name="description"
          content="Discover powerful astrology remedies at Prashna Siddhi. Get personalized solutions for health, career, relationships, and life challenges based on Vedic astrology insights."
        />
      </Head>
      <HeroRem />
      <RemWorks />
      <Meditation />
      <Wisdom />
      <Thought />
    </>
  );
};

export default page;

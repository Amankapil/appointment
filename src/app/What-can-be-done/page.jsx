import BookPopup from "@/Components/BookPopup";
import Consultation from "@/Components/pagesComponent/done/Consultation";
import Herodone from "@/Components/pagesComponent/done/Herodone";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <meta
          name="title"
          content="Quick 5-Minute Astrology Insights – Prashna Siddhi's Efficient Consultations"
        />
        <meta
          name="description"
          content="Experience Prashna Siddhi's swift Vedic Prashna Jyotishya consultations. Obtain accurate astrological guidance in just 5 minutes without extensive birth information."
        />
      </Head>
      <BookPopup />
      <Herodone />
      <Consultation />
    </>
  );
};

export default page;

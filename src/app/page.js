"use client";
import { useState, useEffect } from "react";
// import Modal from "react-modal";

import Hero from "@/Components/pagesComponent/Homecomponent/Hero";
import Why from "@/Components/pagesComponent/Homecomponent/Why";
import FourCardsSection from "@/Components/pagesComponent/Homecomponent/FourCardsSection";
import Platform from "@/Components/pagesComponent/Homecomponent/Platform";
import AboutMe from "@/Components/pagesComponent/Homecomponent/AboutMe";
import Purpose from "@/Components/pagesComponent/Homecomponent/Purpose";
import Head from "next/head";
import ReviewSection from "@/Components/pagesComponent/Homecomponent/ReviewSection";

export default function BookingModal() {
  return (
    <>
      <Head>
        <meta
          name="title"
          content="Prashna Siddhi – Accurate Insights Through Vedic Astrology"
        />
        <meta
          name="description"
          content="Discover the power of Prashna Siddhi for accurate insights into life’s challenges. Expert Vedic astrology guidance for love, career, health, and more."
        />
      </Head>
      <div className="k">
        <Hero />

        <Why />

        <FourCardsSection />
        <Platform />
        <AboutMe />
        <Purpose />
        <ReviewSection />
      </div>
    </>
  );
}

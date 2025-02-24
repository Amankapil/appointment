"use client";
import { useState, useEffect } from "react";
// import Modal from "react-modal";

import Hero from "@/Components/pagesComponent/Homecomponent/Hero";
import Why from "@/Components/pagesComponent/Homecomponent/Why";
import FourCardsSection from "@/Components/pagesComponent/Homecomponent/FourCardsSection";
import Platform from "@/Components/pagesComponent/Homecomponent/Platform";
import AboutMe from "@/Components/pagesComponent/Homecomponent/AboutMe";
import Purpose from "@/Components/pagesComponent/Homecomponent/Purpose";

export default function BookingModal() {
  return (
    <div className="k">
      <Hero />
      <Why />
      <FourCardsSection />
      <Platform />
      <AboutMe />
      <Purpose />
    </div>
  );
}

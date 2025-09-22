import Challenges from "@/Components/pagesComponent/Health/Challenges";
import Guidance from "@/Components/pagesComponent/Health/Guidance";
import Healing from "@/Components/pagesComponent/Health/Healing";
import HealthFaq from "@/Components/pagesComponent/Health/HealthFaq";
import HealthHero from "@/Components/pagesComponent/Health/HealthHero";
import Journey from "@/Components/pagesComponent/Health/Journey";
import Trust from "@/Components/pagesComponent/Health/Trust";
import ReviewSection from "@/Components/pagesComponent/Homecomponent/ReviewSection";
import React from "react";

const page = () => {
  return (
    <>
      <HealthHero />
      <Challenges />
      <Journey />
      <Healing />
      <Trust />
      <ReviewSection />
      <Guidance />
      <HealthFaq />
    </>
  );
};

export default page;

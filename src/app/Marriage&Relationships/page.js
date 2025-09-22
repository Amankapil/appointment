import ReviewSection from "@/Components/pagesComponent/Homecomponent/ReviewSection";
import Challenges from "@/Components/pagesComponent/Marriage & Relationships/Challenges";
import Harmony from "@/Components/pagesComponent/Marriage & Relationships/Harmony";
import Hero from "@/Components/pagesComponent/Marriage & Relationships/Hero";
import MarriageFAQ from "@/Components/pagesComponent/Marriage & Relationships/MarriageFAQ";
import Method from "@/Components/pagesComponent/Marriage & Relationships/Method";
import Peace from "@/Components/pagesComponent/Marriage & Relationships/Peace";
import Struggles from "@/Components/pagesComponent/Marriage & Relationships/Struggles";
import Trust from "@/Components/pagesComponent/Marriage & Relationships/Trust";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <Hero />
        <Struggles />
        <Harmony />
        <Method />
        <Trust />
        <Challenges />
        <ReviewSection />
        <MarriageFAQ />
        <Peace />
      </div>
    </>
  );
};

export default page;

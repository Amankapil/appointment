import Challenges from "@/Components/pagesComponent/Child-birth/Challenges";
import ChildFAQ from "@/Components/pagesComponent/Child-birth/Child-FAQ";
import ChildHero from "@/Components/pagesComponent/Child-birth/ChildHero";
import Familiar from "@/Components/pagesComponent/Child-birth/Familiar";
import Families from "@/Components/pagesComponent/Child-birth/Families";
import Method from "@/Components/pagesComponent/Child-birth/Method";
import Trust from "@/Components/pagesComponent/Child-birth/Trust";
import ReviewSection from "@/Components/pagesComponent/Homecomponent/ReviewSection";
import React from "react";

const page = () => {
  return (
    <>
      <ChildHero />
      <Familiar />
      <Families />
      <Method />
      <Trust />
      <ReviewSection />
      <Challenges />

      <ChildFAQ />
    </>
  );
};

export default page;

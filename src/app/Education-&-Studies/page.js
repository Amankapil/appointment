import EducationFaq from "@/Components/pagesComponent/Education-&-Studies/EducationFaq";
import EducationHero from "@/Components/pagesComponent/Education-&-Studies/EducationHero";
import EducationStruggles from "@/Components/pagesComponent/Education-&-Studies/EducationStruggles";
import EduChallenges from "@/Components/pagesComponent/Education-&-Studies/EduChallenges";
import EduMethod from "@/Components/pagesComponent/Education-&-Studies/EduMethod";
import EduTrust from "@/Components/pagesComponent/Education-&-Studies/EduTrust";
import Succeed from "@/Components/pagesComponent/Education-&-Studies/Succeed";
import ReviewSection from "@/Components/pagesComponent/Homecomponent/ReviewSection";
import React from "react";

const page = () => {
  return (
    <>
      <EducationHero />
      <EducationStruggles />
      <Succeed />
      <EduMethod />
      <EduTrust />
      <ReviewSection />
      <EduChallenges />
      <EducationFaq />
    </>
  );
};

export default page;

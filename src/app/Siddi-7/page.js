import Begin from "@/Components/pagesComponent/Siddi-7/Begin";
import Confused from "@/Components/pagesComponent/Siddi-7/Confused";
import Enough from "@/Components/pagesComponent/Siddi-7/Enough";
import Happens from "@/Components/pagesComponent/Siddi-7/Happens";
import Hero7 from "@/Components/pagesComponent/Siddi-7/Hero7";
import Request from "@/Components/pagesComponent/Siddi-7/Request";
import Step1 from "@/Components/pagesComponent/Siddi-7/Step1";
import Step2 from "@/Components/pagesComponent/Siddi-7/Step2";
import Step3 from "@/Components/pagesComponent/Siddi-7/Step3";
import Step4 from "@/Components/pagesComponent/Siddi-7/Step4";
import Step5 from "@/Components/pagesComponent/Siddi-7/Step5";
import Why7 from "@/Components/pagesComponent/Siddi-7/Why7";
import React from "react";

const page = () => {
  return (
    <>
      <Hero7 />
      <Why7 />
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
      <Happens />
      <Enough />
      <Request />
      <Confused />
      <Begin />
    </>
  );
};

export default page;

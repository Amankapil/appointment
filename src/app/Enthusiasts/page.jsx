import Ascendant from "@/Components/pagesComponent/Enthusiasts/Ascendant";
import Conclusion from "@/Components/pagesComponent/Enthusiasts/Conclusion";
import HeroEn from "@/Components/pagesComponent/Enthusiasts/HeroEn";
// import Precise from "@/Components/pagesComponent/Enthusiasts/precise";
import Rashi from "@/Components/pagesComponent/Enthusiasts/Rashi";
import Twins from "@/Components/pagesComponent/Enthusiasts/Twins";
import React from "react";

const page = () => {
  return (
    <>
      <HeroEn />
      <Rashi />
      <Ascendant />
      <Twins />
      <Conclusion />
      {/* <Precise /> */}
    </>
  );
};

export default page;

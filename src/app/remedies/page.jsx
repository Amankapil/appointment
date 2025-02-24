import HeroRem from "@/Components/pagesComponent/remedies/HeroRem";
import Meditation from "@/Components/pagesComponent/remedies/Meditation";
import RemWorks from "@/Components/pagesComponent/remedies/RemWorks";
import Thought from "@/Components/pagesComponent/remedies/Thought";
import Wisdom from "@/Components/pagesComponent/remedies/Wisdom";
import React from "react";

const page = () => {
  return (
    <>
      <HeroRem />
      <RemWorks />
      <Meditation />
      <Wisdom />
      <Thought />
    </>
  );
};

export default page;

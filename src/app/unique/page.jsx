import Choose from "@/Components/pagesComponent/unique/Choose";
import HeroUn from "@/Components/pagesComponent/unique/HeroUn";
import Honest from "@/Components/pagesComponent/unique/Honest";
import Peace from "@/Components/pagesComponent/unique/Peace";
import Shielded from "@/Components/pagesComponent/unique/Shielded";
import React from "react";

const page = () => {
  return (
    <>
      <HeroUn />
      <Honest />
      <Shielded />
      <Choose />
      <Peace />
    </>
  );
};

export default page;

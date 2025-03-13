import GuruBala from "@/Components/pagesComponent/common-myths/GuruBala";
import HeroCommon from "@/Components/pagesComponent/common-myths/HeroCommon";
import Message from "@/Components/pagesComponent/common-myths/Message";
import Rahu from "@/Components/pagesComponent/common-myths/Rahu";
import Sati from "@/Components/pagesComponent/common-myths/Sati";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <meta
          name="title"
          content="Common Astrology Myths – Debunking Misconceptions | Prashna Siddhi"
        />
        <meta
          name="description"
          content="Uncover the truth about astrology. Prashna Siddhi debunks common astrology myths and misconceptions, providing accurate insights and authentic guidance."
        />
      </Head>
      <HeroCommon />
      <Sati />
      <GuruBala />
      <Rahu />
      <Message />
    </>
  );
};

export default page;

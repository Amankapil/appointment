import GuruBala from "@/Components/pagesComponent/common-myths/GuruBala";
import HeroCommon from "@/Components/pagesComponent/common-myths/HeroCommon";
import Message from "@/Components/pagesComponent/common-myths/Message";
import Rahu from "@/Components/pagesComponent/common-myths/Rahu";
import Sati from "@/Components/pagesComponent/common-myths/Sati";

const page = () => {
  return (
    <>
      <HeroCommon />
      <Sati />
      <GuruBala />
      <Rahu />
      <Message />
    </>
  );
};

export default page;

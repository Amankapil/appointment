import React from "react";

const page = () => {
  return (
    <>
      <iframe
        onLoad="iFrameResize(this)"
        src="https://a8f9b8233cdc40e188beedbe53a475ea.elf.site"
        // style="border:none;width:100%;"
        className="h-[870px] max-w-[1280px] mx-auto pt-10 w-full flex items-center justify-center google-reviews"
      ></iframe>
    </>
  );
};

export default page;

import React from "react";

const page = () => {
  return (
    <>
      <div className=" bottom-20 right-0 z-50 rounded-full p-2 transition-transform duration-200 md:p-5">
        <iframe
          onLoad="iFrameResize(this)"
          src="https://a99f75cab04643caa32ea3e94b386be4.elf.site"
          // style="border:none;width:100%;"
          className="h-[650px] pt-0 w-full "
        ></iframe>
      </div>
    </>
  );
};

export default page;

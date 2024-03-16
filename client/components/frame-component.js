import { memo } from "react";

const FrameComponent = memo(() => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-between max-w-full gap-[20px] text-left text-5xl text-darkslategray-200 font-poppins">
      <div className="w-[686.5px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-full">
        <h3 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-lgi">
          Dua Page
        </h3>
      </div>
      <div className="w-[371px] flex flex-row items-center justify-start gap-[15px] max-w-full text-base text-gray-100 font-inter">
        <div className="flex-1 rounded-3xs bg-white box-border overflow-hidden flex flex-row items-center justify-between py-1 pr-[3px] pl-[15px] max-w-full gap-[0px] [row-gap:20px] border-[0.5px] border-solid border-gainsboro-100 mq450:flex-wrap">
          <div className="w-[297px] flex flex-row items-center justify-start">
            <div className="relative">Search by Dua Name</div>
          </div>
          <button className="cursor-pointer [border:none] py-2.5 px-[15px] bg-whitesmoke-300 rounded-md overflow-hidden flex flex-row items-center justify-start">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/frame-2.svg"
            />
          </button>
        </div>
        <img className="h-6 w-6 relative hidden" alt="" src="/frame-5.svg" />
      </div>
      <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
        <div className="flex flex-row items-start justify-start gap-[10.5px]">
          <img
            className="h-[45px] w-[45px] relative overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/profile-1@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-[17.5px] px-0 pb-0">
            <img
              className="w-3 h-[9px] relative rounded-12xs object-contain"
              alt=""
              src="/polygon-2-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default FrameComponent;

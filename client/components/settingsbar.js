import { memo } from "react";

const Settingsbar = memo(() => {
  return (
    <div className="w-[330px] flex flex-col items-start justify-start pt-[35px] pb-[406px] pr-5 pl-[21px] box-border relative gap-[15px] max-w-full text-left text-base text-darkslategray-200 font-inter mq450:pt-5 mq450:pb-[172px] mq450:box-border mq975:pt-[23px] mq975:pb-[264px] mq975:box-border">
      <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-13xl bg-white box-border border-[0.5px] border-solid border-gainsboro-100" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-2.5 text-center text-xl">
        <div className="flex flex-row items-start justify-start z-[1]">
          <b className="w-[83px] relative inline-block mq450:text-base">
            Settings
          </b>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[15px] text-gray-100">
        <div className="self-stretch flex flex-row items-start justify-start z-[1]">
          <div className="h-[55px] flex-1 relative">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs max-w-full overflow-hidden max-h-full"
              alt=""
              src="/rectangle-28.svg"
            />
            <div className="absolute h-[69.09%] w-[66.78%] top-[16.36%] right-[28.37%] bottom-[14.55%] left-[4.84%] flex flex-row items-start justify-start gap-[13px] z-[1]">
              <div className="h-[38px] w-[38px] relative rounded-[50%] bg-aliceblue" />
              <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                <div className="relative">Language Settings</div>
              </div>
              <img
                className="h-6 w-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[8px] overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/frame-11.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start z-[1]">
          <div className="h-[55px] flex-1 relative">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs max-w-full overflow-hidden max-h-full"
              alt=""
              src="/rectangle-28.svg"
            />
            <div className="absolute h-[69.09%] w-[61.25%] top-[16.36%] right-[33.91%] bottom-[14.55%] left-[4.84%] flex flex-row items-start justify-start gap-[13px] z-[1]">
              <div className="h-[38px] w-[38px] relative rounded-[50%] bg-aliceblue" />
              <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                <div className="relative">General Settings</div>
              </div>
              <img
                className="h-6 w-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[7px] overflow-hidden shrink-0 z-[1]"
                alt=""
                src="/frame-12.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-[9px] px-3.5 pb-2 relative z-[1]">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs bg-whitesmoke-200" />
          <div className="flex flex-row items-start justify-start relative gap-[13px] z-[1]">
            <div className="h-[38px] w-[38px] relative rounded-[50%] bg-aliceblue" />
            <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
              <div className="relative">Font Settings</div>
            </div>
            <img
              className="h-6 w-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[7px] overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/54menu2.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch h-[134px] relative z-[1]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] flex flex-col items-start justify-start">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch h-[55px] flex flex-row items-end justify-start relative gap-[9px] z-[1]">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-8xs max-w-full overflow-hidden max-h-full"
              alt=""
              src="/rectangle-28.svg"
            />
            <div className="self-stretch w-[5px] relative rounded-tl-8xs rounded-tr-none rounded-br-none rounded-bl-8xs bg-mediumseagreen-200 z-[1]" />
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-2">
              <div className="flex flex-row items-start justify-start relative gap-[13px] z-[1]">
                <div className="h-[38px] w-[38px] relative rounded-[50%] bg-aliceblue" />
                <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
                  <div className="relative text-base font-medium font-inter text-mediumseagreen-200 text-left">
                    Appearance Settings
                  </div>
                </div>
                <img
                  className="h-6 w-6 absolute !m-[0] top-[calc(50%_-_12px)] left-[7px] overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/54menu2-2.svg"
                />
              </div>
            </div>
          </button>
          <div className="self-stretch flex-1 relative rounded-8xs bg-white mt-[-18px] border-[0.5px] border-solid border-gainsboro-100" />
        </div>
        <div className="absolute h-[14.18%] w-[87.2%] top-[64.93%] right-[7.61%] bottom-[20.9%] left-[5.19%] flex flex-row items-start justify-start z-[2]">
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
            <div className="relative">Night Mode</div>
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-[30px] h-4 relative"
                alt=""
                src="/group-266.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Settingsbar;

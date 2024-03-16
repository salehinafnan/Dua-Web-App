import { memo } from "react";

const Navbar = memo(() => {
  return (
    <div className="rounded-3xl bg-white flex flex-col items-start justify-start py-[31px] pr-[13px] pl-3.5 gap-[145.5px] text-center text-xs text-gray-200 font-poppins mq1025:hidden mq975:pt-5 mq975:pb-5 mq975:box-border">
      <div className="w-[100px] h-[927px] relative rounded-3xl bg-white hidden" />
      <div className="w-[73px] h-[73px] relative z-[1] flex items-center justify-center">
        <img
          className="w-full h-full z-[1] object-contain absolute left-[0px] top-[4px] [transform:scale(1.548)]"
          loading="lazy"
          alt=""
          src="/unnamed-1@2x.png"
        />
      </div>
      <div className="flex flex-row items-start justify-start pt-0 pb-[17px] pr-[18px] pl-[17px]">
        <div className="flex flex-col items-start justify-start gap-[27px]">
          <img
            className="w-[38px] h-[38px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/home@2x.png"
          />
          <img
            className="w-[38px] h-[38px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/all-duas.svg"
          />
          <img
            className="w-[38px] h-[38px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/memorize@2x.png"
          />
          <img
            className="w-[38px] h-[38px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/bookmark.svg"
          />
          <img
            className="w-[38px] h-[38px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/ruqyah@2x.png"
          />
          <img
            className="w-[38px] h-[38px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/dua-qa@2x.png"
          />
          <img
            className="w-[38px] h-[38px] relative object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/book@2x.png"
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-2">
        <div className="h-14 w-[57px] relative z-[1] flex items-center justify-center">
          <img
            className="h-full w-full z-[1] object-contain absolute left-[0px] top-[4px] [transform:scale(1.714)]"
            loading="lazy"
            alt=""
            src="/i-want-to-support@2x.png"
          />
        </div>
      </div>
      <div className="w-[61px] h-[139.6px] relative hidden">
        <div className="absolute top-[47px] left-[10px] w-[41px] h-[92.6px]">
          <img
            className="absolute top-[51.6px] left-[0px] w-[41px] h-[41px] object-cover"
            alt=""
            src="/app-store-ios-1-1@2x.png"
          />
          <div className="absolute top-[0px] left-[0px] w-[41px] h-[41px]">
            <div className="absolute top-[0px] left-[0px] rounded-4xs bg-white box-border w-full h-full border-[1px] border-solid border-gainsboro-100" />
            <img
              className="absolute h-[60.49%] w-[52.2%] top-[20.73%] right-[24.88%] bottom-[18.78%] left-[22.93%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/google1632434-960-720-1-1@2x.png"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px]">
          <p className="m-0">Download</p>
          <p className="m-0">Apps</p>
        </div>
      </div>
    </div>
  );
});

export default Navbar;

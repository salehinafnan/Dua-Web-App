import { memo } from "react";

const Categorybar = memo(() => {
  return (
    <div className="w-[429px] rounded-3xs bg-white box-border flex flex-col items-start justify-start pt-0 px-0 pb-[15px] gap-[15px] max-w-full text-left text-base text-darkslategray-200 font-inter border-[0.5px] border-solid border-gainsboro-100">
      <div className="self-stretch flex flex-col items-end justify-start gap-[15px]">
        <button className="cursor-pointer [border:none] py-[18px] px-5 bg-mediumseagreen-200 self-stretch rounded-t-3xs rounded-b-none overflow-hidden flex flex-row items-center justify-center hover:bg-mediumseagreen-100">
          <div className="w-[91px] relative text-mid font-semibold font-inter text-white text-center inline-block">
            Categories
          </div>
        </button>
        <div className="self-stretch flex flex-col items-end justify-start py-0 px-[15px]">
          <div className="self-stretch rounded-6xs flex flex-row items-center justify-start py-[13px] pr-[188px] pl-[11px] gap-[10px] border-[1.5px] border-solid border-gainsboro-100 mq450:pr-5 mq450:box-border">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/frame-6.svg"
            />
            <input
              className="w-[calc(100%_-_223px)] [border:none] [outline:none] font-inter text-base bg-[transparent] h-[19px] flex-1 relative text-gray-100 text-left inline-block min-w-[98px] p-0"
              placeholder="Search by Categories"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-mediumseagreen-200">
            <div className="self-stretch rounded-3xs bg-aliceblue flex flex-row items-start justify-start p-2.5 gap-[14px] mq450:flex-wrap">
              <button className="cursor-pointer [border:none] p-2.5 bg-gainsboro-200 rounded-3xs flex flex-row items-start justify-start">
                <img
                  className="h-10 w-10 relative object-cover"
                  alt=""
                  src="/005fever@2x.png"
                />
              </button>
              <div className="flex-1 flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border min-w-[166px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch relative font-semibold">
                    Introduction to Dua
                  </div>
                  <div className="relative text-sm font-poppins text-gray-200">
                    Subcategory: 11
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 text-darkslategray-200">
                <div className="flex flex-col items-start justify-start gap-[5px]">
                  <div className="flex flex-row items-start justify-start py-0 px-[9px]">
                    <div className="relative font-semibold inline-block min-w-[18px]">
                      15
                    </div>
                  </div>
                  <div className="relative text-sm font-poppins text-gray-200 inline-block min-w-[36px]">
                    Duas
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[381px] flex flex-row items-start justify-start py-0 px-6 box-border max-w-full text-darkslategray-300">
              <div className="flex-1 flex flex-row items-start justify-start gap-[19px] max-w-full mq450:flex-wrap">
                <div className="flex flex-row items-start justify-start">
                  <div className="ml-[-4px] h-[361px] w-2 relative shrink-0 [debug_commit:612783b]">
                    <img
                      className="absolute top-[0px] left-[4px] w-[1.5px] h-[361px]"
                      alt=""
                      src="/data-selector.svg"
                    />
                    <div className="absolute top-[16.5px] left-[0px] rounded-[50%] bg-mediumseagreen-200 w-2 h-2 z-[1]" />
                    <div className="absolute top-[70px] left-[0px] rounded-[50%] bg-mediumseagreen-200 w-2 h-2 z-[1]" />
                    <div className="absolute top-[123.5px] left-[0px] rounded-[50%] bg-mediumseagreen-200 w-2 h-2 z-[1]" />
                    <div className="absolute top-[164.5px] left-[0px] rounded-[50%] bg-mediumseagreen-200 w-2 h-2 z-[1]" />
                    <div className="absolute top-[205.5px] left-[0px] rounded-[50%] bg-mediumseagreen-200 w-2 h-2 z-[1]" />
                    <div className="absolute top-[259px] left-[0px] rounded-[50%] bg-mediumseagreen-200 w-2 h-2 z-[1]" />
                    <div className="absolute top-[325px] left-[0px] rounded-[50%] bg-mediumseagreen-200 w-2 h-2 z-[1]" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start py-2 px-0 box-border gap-[16px] min-w-[204px]">
                  <div className="w-3 relative leading-[25px] font-semibold text-mediumseagreen-200 hidden">
                    1.
                  </div>
                  <div className="self-stretch relative leading-[25px] font-medium text-mediumseagreen-200">
                    What is Dua
                  </div>
                  <div className="w-[15px] relative leading-[25px] hidden">
                    2.
                  </div>
                  <div className="self-stretch relative leading-[25px] font-medium">
                    Conditions for Dua to be successful
                  </div>
                  <div className="w-[15px] relative leading-[25px] text-right hidden">
                    3.
                  </div>
                  <div className="self-stretch relative leading-[25px] font-medium">
                    The Methode Of Dua
                  </div>
                  <div className="w-[15px] relative leading-[25px] text-right hidden">
                    4.
                  </div>
                  <div className="self-stretch relative leading-[25px] font-medium">
                    Before Dua
                  </div>
                  <div className="w-3.5 relative leading-[25px] text-right hidden">
                    5.
                  </div>
                  <div className="self-stretch relative leading-[25px] font-medium">
                    During Dua
                  </div>
                  <div className="w-3.5 relative leading-[25px] text-right hidden">
                    6.
                  </div>
                  <div className="self-stretch relative leading-[25px] font-medium">
                    Prerequisites of writing Dua and drinking it’s water
                  </div>
                  <div className="w-3 relative leading-[25px] text-right hidden">
                    7.
                  </div>
                  <div className="self-stretch relative leading-[25px] font-medium">
                    The correct way to perform Dua for a small child
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-8xs box-border flex flex-row items-start justify-start p-2.5 max-w-full [row-gap:20px] border-b-[1px] border-solid border-whitesmoke-100 mq450:flex-wrap">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px] min-w-[215px] max-w-full mq450:flex-wrap">
              <button className="cursor-pointer [border:none] p-2.5 bg-aliceblue rounded-3xs flex flex-row items-start justify-start">
                <img
                  className="h-10 w-10 relative object-cover"
                  alt=""
                  src="/005fever@2x.png"
                />
              </button>
              <div className="flex-1 flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border min-w-[166px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch relative font-semibold">
                    Introduction to Dua
                  </div>
                  <div className="relative text-sm font-poppins text-gray-200">
                    Subcategory: 11
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[60px] flex flex-row items-start justify-start gap-[16px] ml-[-4px] mq450:ml-0">
              <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-gainsboro-100" />
              <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
                <div className="flex flex-col items-start justify-start gap-[5px]">
                  <div className="flex flex-row items-start justify-start py-0 px-[9px]">
                    <div className="relative font-semibold inline-block min-w-[18px]">
                      15
                    </div>
                  </div>
                  <div className="relative text-sm font-poppins text-gray-200 inline-block min-w-[36px]">
                    Duas
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-8xs box-border flex flex-row items-start justify-start p-2.5 max-w-full [row-gap:20px] border-b-[1px] border-solid border-whitesmoke-100 mq450:flex-wrap">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px] min-w-[215px] max-w-full mq450:flex-wrap">
              <button className="cursor-pointer [border:none] p-2.5 bg-aliceblue rounded-3xs flex flex-row items-start justify-start">
                <img
                  className="h-10 w-10 relative object-cover"
                  alt=""
                  src="/005fever@2x.png"
                />
              </button>
              <div className="flex-1 flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border min-w-[166px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch relative font-semibold">
                    Introduction to Dua
                  </div>
                  <div className="relative text-sm font-poppins text-gray-200">
                    Subcategory: 11
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[60px] flex flex-row items-start justify-start gap-[16px] ml-[-4px] mq450:ml-0">
              <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-gainsboro-100" />
              <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
                <div className="flex flex-col items-start justify-start gap-[5px]">
                  <div className="flex flex-row items-start justify-start py-0 px-[9px]">
                    <div className="relative font-semibold inline-block min-w-[18px]">
                      15
                    </div>
                  </div>
                  <div className="relative text-sm font-poppins text-gray-200 inline-block min-w-[36px]">
                    Duas
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-8xs box-border flex flex-row items-start justify-start p-2.5 max-w-full [row-gap:20px] border-b-[1px] border-solid border-whitesmoke-100 mq450:flex-wrap">
            <div className="flex-1 flex flex-row items-start justify-start gap-[16px] min-w-[215px] max-w-full mq450:flex-wrap">
              <button className="cursor-pointer [border:none] p-2.5 bg-aliceblue rounded-3xs flex flex-row items-start justify-start">
                <img
                  className="h-10 w-10 relative object-cover"
                  alt=""
                  src="/005fever@2x.png"
                />
              </button>
              <div className="flex-1 flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border min-w-[166px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch relative font-semibold">
                    Introduction to Dua
                  </div>
                  <div className="relative text-sm font-poppins text-gray-200">
                    Subcategory: 11
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[60px] flex flex-row items-start justify-start gap-[16px] ml-[-4px] mq450:ml-0">
              <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-gainsboro-100" />
              <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
                <div className="flex flex-col items-start justify-start gap-[5px]">
                  <div className="flex flex-row items-start justify-start py-0 px-[9px]">
                    <div className="relative font-semibold inline-block min-w-[18px]">
                      15
                    </div>
                  </div>
                  <div className="relative text-sm font-poppins text-gray-200 inline-block min-w-[36px]">
                    Duas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Categorybar;

import Navbar from "../components/navbar";
import FrameComponent from "../components/frame-component";
import Categorybar from "../components/categorybar";
import Mainframe from "../components/mainframe";
import Settingsbar from "../components/settingsbar";

const Categories = () => {
  return (
    <div className="w-full relative bg-whitesmoke-200 overflow-hidden flex flex-row items-start justify-start pt-10 pb-[39px] pr-[38px] pl-10 box-border gap-[30px] tracking-[normal] text-left text-base text-darkslategray-200 font-poppins">
      <div className="h-[967px] w-[1880px] relative hidden max-w-full">
        <div className="absolute top-[40px] left-[0px] w-[280px] h-[927px]">
          <div className="absolute top-[0px] left-[0px] w-full h-full">
            <div className="absolute top-[0px] left-[0px] rounded-13xl bg-white w-full h-full" />
          </div>
          <div className="absolute top-[186px] left-[16px] box-border w-[249px] h-px border-t-[1px] border-solid border-whitesmoke-400" />
          <div className="absolute top-[31px] left-[53px] w-[173px] h-[137px] text-5xl">
            <div className="absolute top-[0px] left-[50px] w-[73px] h-[73px] flex items-center justify-center">
              <img
                className="w-full h-full object-contain absolute left-[0px] top-[4px] [transform:scale(1.548)]"
                alt=""
                src="/unnamed-1@2x.png"
              />
            </div>
            <div className="absolute top-[78px] left-[0px] font-medium mq450:text-lgi">{`Dua & Ruqyah`}</div>
            <div className="absolute top-[116px] left-[35px] text-sm text-gray-200 text-center">
              App Version: 1.1
            </div>
          </div>
          <div className="absolute top-[724px] left-[16px] w-[248px] h-14 text-center text-white">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-mediumseagreen-200 shadow-[0px_4px_20px_rgba(31,_164,_91,_0.22)] w-full h-full" />
            <div className="absolute top-[16px] left-[37px] w-[175px] h-6">
              <img
                className="absolute top-[0px] left-[151px] w-6 h-6 object-cover"
                alt=""
                src="/icon@2x.png"
              />
              <div className="absolute top-[0px] left-[0px] font-medium">
                I want To Support
              </div>
            </div>
          </div>
          <div className="absolute top-[206px] left-[16px] w-[248px] h-[445px] text-gray-100 font-inter">
            <div className="absolute top-[260px] left-[0px] w-full h-[55px]">
              <div className="absolute top-[0px] left-[0px] rounded-8xs bg-whitesmoke-200 w-full h-full" />
              <div className="absolute top-[9px] left-[14px] w-[108px] h-[38px]">
                <div className="absolute top-[9px] left-[51px]">Ruqyah</div>
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-aliceblue w-[38px] h-[38px]" />
                <img
                  className="absolute top-[7px] left-[7px] w-6 h-6 overflow-hidden"
                  alt=""
                  src="/meh.svg"
                />
              </div>
            </div>
            <div className="absolute top-[325px] left-[0px] w-full h-[55px]">
              <div className="absolute top-[0px] left-[0px] rounded-8xs bg-whitesmoke-200 w-full h-full" />
              <div className="absolute top-[9px] left-[14px] w-[119px] h-[38px]">
                <div className="absolute top-[9px] left-[51px]">{`Dua Q&A`}</div>
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-aliceblue w-[38px] h-[38px]" />
                <img
                  className="absolute top-[7px] left-[7px] w-6 h-6 overflow-hidden"
                  alt=""
                  src="/messagecircle.svg"
                />
              </div>
            </div>
            <div className="absolute top-[390px] left-[0px] w-full h-[55px]">
              <div className="absolute top-[0px] left-[0px] rounded-8xs bg-whitesmoke-200 w-full h-full" />
              <div className="absolute top-[9px] left-[14px] w-[98px] h-[38px]">
                <div className="absolute top-[9px] left-[51px]">Books</div>
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-aliceblue w-[38px] h-[38px]" />
                <img
                  className="absolute top-[7px] left-[7px] w-6 h-6 overflow-hidden"
                  alt=""
                  src="/bookopen.svg"
                />
              </div>
            </div>
            <div className="absolute top-[195px] left-[0px] w-full h-[55px]">
              <div className="absolute top-[0px] left-[0px] rounded-8xs bg-whitesmoke-200 w-full h-full" />
              <div className="absolute top-[9px] left-[14px] w-[127px] h-[38px]">
                <div className="absolute top-[9px] left-[51px]">Bookmark</div>
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-aliceblue w-[38px] h-[38px]" />
                <img
                  className="absolute top-[7px] left-[7px] w-6 h-6 overflow-hidden"
                  alt=""
                  src="/3keepminus.svg"
                />
              </div>
            </div>
            <div className="absolute top-[130px] left-[0px] w-full h-[55px]">
              <div className="absolute top-[0px] left-[0px] rounded-8xs bg-whitesmoke-200 w-full h-full" />
              <div className="absolute top-[9px] left-[14px] w-[126px] h-[38px]">
                <div className="absolute top-[9px] left-[51px]">Memorize</div>
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-aliceblue w-[38px] h-[38px]" />
                <img
                  className="absolute top-[7px] left-[7px] rounded-sm w-6 h-6 overflow-hidden object-cover"
                  alt=""
                  src="/hayin@2x.png"
                />
              </div>
            </div>
            <div className="absolute top-[65px] left-[0px] w-full h-[55px]">
              <div className="absolute top-[0px] left-[0px] rounded-8xs bg-whitesmoke-200 w-full h-full" />
              <div className="absolute top-[9px] left-[14px] w-[113px] h-[38px]">
                <div className="absolute top-[9px] left-[51px]">All Duas</div>
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-aliceblue w-[38px] h-[38px]" />
                <img
                  className="absolute top-[7px] left-[7px] w-6 h-6 overflow-hidden"
                  alt=""
                  src="/54menu2.svg"
                />
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] w-full h-[55px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-8xs w-full h-full"
                alt=""
                src="/rectangle-2.svg"
              />
              <div className="absolute top-[9px] left-[14px] w-24 h-[38px]">
                <div className="absolute top-[9px] left-[51px]">Home</div>
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-aliceblue w-[38px] h-[38px]" />
                <img
                  className="absolute top-[7px] left-[7px] w-6 h-6 overflow-hidden"
                  alt=""
                  src="/1home2.svg"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[814px] left-[80px] w-[120px] h-[79px] text-sm text-gray-200">
            <div className="absolute top-[0px] left-[3px]">Download Apps:</div>
            <div className="absolute top-[31px] left-[0px] w-[120px] h-12">
              <img
                className="absolute top-[0px] left-[0px] w-12 h-12 object-cover"
                alt=""
                src="/app-store-ios-1@2x.png"
              />
              <div className="absolute top-[0px] left-[72px] w-12 h-12">
                <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white box-border w-full h-full border-[1px] border-solid border-gainsboro-100" />
                <img
                  className="absolute h-[60.42%] w-[52.08%] top-[20.83%] right-[25%] bottom-[18.75%] left-[22.92%] max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/google1632434-960-720-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[298px] w-[1582px] h-[133px] text-xl text-mediumseagreen-200">
          <div className="absolute top-[0px] left-[0px] w-full h-full">
            <div className="absolute top-[0px] left-[0px] bg-whitesmoke-200 w-full h-full" />
            <div className="absolute top-[69px] left-[12px] w-[72px] h-[30px]">
              <div className="absolute top-[0px] left-[23px] mq450:text-base">
                Back
              </div>
              <img
                className="absolute top-[5px] left-[0px] w-5 h-5 overflow-hidden"
                alt=""
                src="/frame.svg"
              />
            </div>
            <div className="absolute top-[55px] left-[103.5px] w-[278.5px] h-[58px] text-5xl text-darkslategray-200">
              <div className="absolute top-[0px] left-[0.5px] font-medium mq450:text-lgi">
                Introduction to Ruqyah
              </div>
              <div className="absolute top-[37px] left-[0px] text-sm text-darkslategray-100">
                Subcategory Name
              </div>
            </div>
            <div className="absolute top-[55px] left-[775px] w-[353px] h-14 text-base text-gray-100 font-inter">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white box-border border-[0.5px] border-solid border-gainsboro-100" />
              <img
                className="absolute h-[48.21%] w-[7.65%] top-[25%] right-[4.53%] bottom-[26.79%] left-[87.82%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/frame-1.svg"
              />
              <div className="absolute top-[33.93%] left-[15.3%]">
                Search by Dua Name
              </div>
              <img
                className="absolute h-[42.86%] w-[6.8%] top-[28.57%] right-[87.54%] bottom-[28.57%] left-[5.67%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/frame-2.svg"
              />
              <div className="absolute h-[310.71%] w-[83%] top-[117.86%] right-[0%] bottom-[-328.57%] left-[17%] shadow-[0px_10px_20px_rgba(0,_0,_0,_0.1)] hidden text-[13.6px] text-darkslategray-200">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-white box-border border-[0.5px] border-solid border-gainsboro-100" />
                <div className="absolute h-[20.11%] w-[41.33%] top-[62.64%] right-[5.77%] bottom-[17.24%] left-[52.9%] text-white">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[8.51px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/vector.svg"
                    />
                    <div className="absolute top-[28.57%] left-[31.38%] font-medium">
                      Search
                    </div>
                  </div>
                </div>
                <div className="absolute top-[8.05%] left-[5.12%] text-base font-medium">
                  Choose Category
                </div>
                <div className="absolute h-[20.69%] w-[89.08%] top-[28.16%] right-[5.8%] bottom-[51.15%] left-[5.12%] text-sm">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-8xs bg-white box-border border-[0.5px] border-solid border-gainsboro-100" />
                  <img
                    className="absolute h-3/6 w-[6.9%] top-[25%] right-[4.98%] bottom-[25%] left-[88.12%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/frame-3.svg"
                  />
                  <div className="absolute top-[27.78%] left-[17.24%]">
                    All Category
                  </div>
                  <img
                    className="absolute h-[55.56%] w-[7.66%] top-[22.22%] right-[86.59%] bottom-[22.22%] left-[5.75%] rounded max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/frame-4.svg"
                  />
                </div>
              </div>
            </div>
            <img
              className="absolute top-[71px] left-[1158px] w-6 h-6"
              alt=""
              src="/frame-5.svg"
            />
          </div>
          <div className="absolute top-[60px] left-[1360px] w-[184px] h-[46px] text-center text-base text-darkslategray-200 font-inter">
            <div className="absolute top-[13px] left-[0px] font-medium">
              MD. Mahmud
            </div>
            <div className="absolute top-[0px] left-[116px] w-[68px] h-[46px]">
              <img
                className="absolute top-[0px] left-[0px] w-[46px] h-[46px] object-cover"
                alt=""
                src="/avater@2x.png"
              />
              <img
                className="absolute top-[18px] left-[56px] rounded-12xs w-3 h-[9px] object-contain"
                alt=""
                src="/polygon-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[252px] relative text-sm text-darkslategray-100 hidden">
        All Categories available in this page
      </div>
      <div className="w-[101px] relative font-medium font-inter text-center hidden">
        MD. Mahmud
      </div>
      <img
        className="h-[46px] w-[46px] relative object-cover hidden"
        alt=""
        src="/avater@2x.png"
      />
      <Navbar />
      <main className="flex-1 flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border max-w-[calc(100%_-_130px)] mq1025:max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start gap-[27px] max-w-full text-left text-base text-mediumseagreen-200 font-inter">
          <FrameComponent />
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[31px] max-w-full mq725:gap-[15px]">
            <Categorybar />
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[578px] max-w-full mq725:min-w-full">
              <div className="self-stretch rounded-3xs bg-white flex flex-row items-center justify-start py-[15px] pr-[500px] pl-[29px] gap-[10px] border-[0.5px] border-solid border-gainsboro-100 mq450:pr-5 mq450:box-border mq975:flex-wrap mq975:pr-[250px] mq975:box-border">
                <div className="relative leading-[25px] font-semibold inline-block min-w-[64px]">
                  Section:
                </div>
                <input
                  className="w-full [border:none] [outline:none] font-medium font-inter text-base bg-[transparent] h-[19px] flex-1 relative text-darkslategray-200 text-left inline-block min-w-[185px] p-0"
                  placeholder="The servant is dependent on his Lord"
                  type="text"
                />
              </div>
              <div className="self-stretch rounded-3xs bg-white box-border flex flex-col items-start justify-start py-[15px] pr-[30px] pl-[29px] gap-[28px] max-w-full border-[0.5px] border-solid border-gainsboro-100">
                <div className="self-stretch flex flex-col items-start justify-center gap-[28px] max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[459px] pl-0 box-border gap-[10px] max-w-full mq450:pr-5 mq450:box-border mq975:flex-wrap mq975:pr-[229px] mq975:box-border">
                    <img
                      className="h-[35px] w-[35px] relative"
                      loading="lazy"
                      alt=""
                      src="/allah-1-traced.svg"
                    />
                    <div className="relative leading-[25px] font-semibold inline-block max-w-full">
                      1. The servant is dependent on his Lord #1
                    </div>
                  </div>
                  <div className="self-stretch relative leading-[24px] text-darkslategray-200">
                    All human beings depend on Allah for their welfare and
                    prevention of evil in various matters of their religion and
                    world. Allah says (interpretation of the meaning): O
                    mankind, you are those in need of Allah, while Allah is the
                    Free of need, the Praiseworthy.
                  </div>
                  <div className="self-stretch relative leading-[24px]">
                    <p className="m-0 font-semibold">Reference:</p>
                    <p className="m-0 font-medium text-darkslategray-200">
                      Surah Al-Fatir 35:15
                    </p>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start pt-0 px-0 pb-2.5 box-border gap-[509px] max-w-full mq450:gap-[509px_127px] mq975:gap-[509px_254px]">
                  <img
                    className="h-11 w-11 relative hidden"
                    alt=""
                    src="/group-120.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-between py-0 pr-0 pl-[553px] box-border max-w-full gap-[20px] mq450:pl-5 mq450:box-border mq975:flex-wrap mq975:justify-center mq975:pl-[276px] mq975:box-border">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/frame-7.svg"
                    />
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      loading="lazy"
                      alt=""
                      src="/bookmark-1.svg"
                    />
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/frame-8.svg"
                    />
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      loading="lazy"
                      alt=""
                      src="/share-1.svg"
                    />
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      alt=""
                      src="/report-1.svg"
                    />
                  </div>
                </div>
              </div>
              <Mainframe />
            </div>
            <Settingsbar />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Categories;

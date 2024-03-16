import { memo } from "react";

const Mainframe = memo(() => {
  return (
    <div className="self-stretch rounded-3xs bg-white flex flex-col items-start justify-start py-[15px] pr-[30px] pl-[29px] gap-[28px] text-left text-base text-mediumseagreen-200 font-inter border-[0.5px] border-solid border-gainsboro-100">
      <div className="self-stretch flex flex-col items-start justify-center gap-[28px]">
        <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[490px] pl-0 gap-[10px] mq450:pr-5 mq450:box-border mq975:flex-wrap mq975:pr-[245px] mq975:box-border">
          <img
            className="h-[35px] w-[35px] relative"
            alt=""
            src="/allah-1-traced.svg"
          />
          <div className="relative leading-[25px] font-semibold">
            2. Conditions for Dua to be successful
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-center gap-[28px] text-darkslategray-200">
          <div className="self-stretch flex flex-col items-start justify-center">
            <div className="self-stretch relative leading-[24px]">
              Prophet (ﷺ) used to say after every compulsory prayer, The servant
              will ask his Lord for all of his religiously and worldly needs,
              because the treasure of all things is in the hands of Allah. Allah
              says (interpretation of the meaning): “And there is not a thing
              but that with Us are its depositories, and We do not send it down
              except according to a known measure.” (Sura Al-Hijr 15:21) No one
              can withhold what Allah gives; And, no one can give what he
              resists.
            </div>
          </div>
          <h3 className="m-0 self-stretch relative text-5xl leading-[71.33px] font-normal font-noto-sans-carian text-right mq450:text-lgi mq450:leading-[57px]">
            لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ
            وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا
            مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا
            يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ
          </h3>
          <div className="self-stretch flex flex-col items-start justify-center gap-[10px]">
            <div className="self-stretch relative leading-[25px]">
              <span className="font-semibold">{`Transliteration: `}</span>
              <i>
                Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa
                lahul-hamdu wa huwa 'alaa kulli shay'in qadir. Allaahumma laa
                maani'a limaa a'taita wa laa mu'tia limaa mana'ta wa laa yanfa'u
                dhal-jaddi minka al-jaddu
              </i>
            </div>
            <div className="self-stretch relative leading-[25px]">
              <span className="font-semibold">Translation:</span>
              <span>
                {" "}
                There is none worthy of worship except Allah alone with no
                partner or associate. He is the Dominion and to Him be all
                praise, and He is able to do all things. O Allah, one can
                withhold what You have given and none can give what You have
                withheld, and no wealth or fortune can benefit anyone for from
                You comes all wealth and fortune.
              </span>
            </div>
          </div>
        </div>
        <div className="self-stretch relative leading-[24px]">
          <p className="m-0 font-semibold">Reference:</p>
          <p className="m-0 font-medium text-darkslategray-200">Bukhari: 844</p>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq725:flex-wrap">
        <img
          className="h-11 w-11 relative"
          loading="lazy"
          alt=""
          src="/group-120.svg"
        />
        <div className="w-[276px] flex flex-row items-center justify-end gap-[39px] mq450:gap-[39px_19px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/frame-7.svg"
          />
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
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
  );
});

export default Mainframe;

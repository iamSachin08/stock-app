import React from "react";
import hdfcIcon from "../../assets/HDB-bb6241fe 1.svg";
import cancelIcon from "../../assets/ic_baseline-close.svg";
import midArrow from "../../assets/mdi_arrow-drop-up.svg";
import dateIcon from "../../assets/fontisto_date.svg";
import Icon from "../../assets/Ellipse 2.svg";
import docIcon from "../../assets/mingcute_attachment-line.svg";
import gallIcon from "../../assets/material-symbols_image-outline.svg";
import gifIcon from "../../assets/material-symbols_gif-box-outline.svg";
import EmojiIcon from "../../assets/tdesign_emo-emotional.svg";
import HomeInput from "../custom-components/HomeInput.jsx";

const Home = () => {
  const homeIpLabels = {
    targetPrice: "Target Price",
    stopLoss: "Stop Loss",
    expiringBy: "Expiring By",
  };
  return (
    <section className="  bg-white w-[28rem] h-[43.625rem]   ">
      <div className="w-100 pl-6 text-2xl  p-3 font-bold">Post</div>

      <div className="font-sans font-medium flex justify-center flex-col items-center ">
        <div className=" w-[24.813rem] h-[3.125rem] flex items-center justify-between bg-white  border border-[#8A8A8A] rounded-[0.188rem] p-2">
          <div className="flex items-center justify-between gap-2  ">
            <img
              src={hdfcIcon}
              alt="HDFC Bank"
              className="w-[1.875rem] rounded-full"
            />
            <div>
              <span className="pl-2 text-[#7E7777]">HDFC BANK</span>
              <div className="pl-2 flex ">
                <span>14,500.65</span>
                <span className="">
                  <img src={midArrow} alt="" />
                </span>
                <span className="text-[#00D789]">+0.12% (+0.60)</span>
              </div>
            </div>
          </div>
          <button className="">
            <img src={cancelIcon} alt="" className="w-[1.25rem]" />
          </button>
        </div>

        <div className="w-[24.813rem] h-[3.125rem]  flex items-center justify-center gap-8   ">
          <button className="w-[11.5rem] h-[2.25rem] bg-[#D70027] text-white rounded-[0.188rem]">
            SELL
          </button>
          <button className="w-[11.5rem] h-[2.25rem] bg-[#00D789] text-white rounded-[0.188rem]">
            BUY
          </button>
        </div>

        <div className="w-[24.813rem] h-[14.188rem] mt-1  ">
          <HomeInput />
          <HomeInput />
          <HomeInput dateIcon={dateIcon} labels={homeIpLabels} />
        </div>


        

        <div className="pt-5 border-[0.063rem]  rounded-md p-3 mb-4 w-full">
          <div className="flex item-start justify-center space-x-3">
            <img
              src={Icon}
              alt="Profile"
              className="w-[2.188rem] h-[2.188rem] rounded-full "
            />

            <textarea
              placeholder="What's happening?"
              className="w-full resize-none border-none focus:ring-0 text-lg bg-transparent outline-none"
              rows="2"
            ></textarea>
          </div>

          
          

          <div className=" p-10 text-gray-500">
            
            <div className="flex space-x-3 justify-end  items-center">
              <button className=" rounded-full hover:bg-gray-200">
                <img src={docIcon} alt="" />
              </button>
              <button className="rounded-full hover:bg-gray-200">
                <img src={gallIcon} alt="" />
              </button>
              <button className="rounded-full hover:bg-gray-200">
                <img src={gifIcon} alt="" />
              </button>
              <button className="rounded-full hover:bg-gray-200">
                <img src={EmojiIcon} alt="" />
              </button>
            </div>

          </div>

        </div>
        {/* <div className=" w-full border-[0.063rem]  "></div> */}

       <div className="pt-3">
       <button className="w-[23.688rem] h-[3.125rem] bg-blue-500 text-white    rounded-md font-medium">
          POST
        </button>
       </div>
      </div>
    </section>
  );
};

export default Home;

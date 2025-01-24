
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
    <section className="bg-white w-full max-w-[28rem] h-[698px] overflow-y-auto rounded-md shadow-md">
     
      <div className="px-6 py-3 text-2xl font-bold">Post</div>

      <div className="flex flex-col items-center font-sans font-medium px-4">
        
       
        <div className="w-full flex items-center justify-between bg-white border border-gray-400 rounded-sm h-[3.125rem] p-2">
          <div className="flex items-center gap-2">
            <img src={hdfcIcon} alt="HDFC Bank" className="w-8 rounded-full" />
            <div>
              <span className="text-gray-600">HDFC BANK</span>
              <div className="flex items-center gap-1">
                <span>14,500.65</span>
                <img src={midArrow} alt="Arrow" />
                <span className="text-green-500">+0.12% (+0.60)</span>
              </div>
            </div>
          </div>
          <button>
            <img src={cancelIcon} alt="Close" className="w-5" />
          </button>
        </div>

        <div className="w-full flex items-center justify-center gap-4 my-3">
          <button className="w-1/2 h-10 bg-red-600 text-white rounded-md">
            SELL
          </button>
          <button className="w-1/2 h-10 bg-green-500 text-white rounded-md">
            BUY
          </button>
        </div>

        {/* Input Fields */}
        <div className="w-full flex flex-col gap-2">
          <HomeInput />
          <HomeInput />
          <HomeInput dateIcon={dateIcon} labels={homeIpLabels} />
        </div>

      
        <div className="w-full border-b border-t  p-8 mt-4">
          <div className="flex items-start gap-3">
            <img src={Icon} alt="Profile" className="w-10 h-10 rounded-full" />
            <textarea
              placeholder="What's happening?"
              className="w-full resize-none border-none focus:ring-0 text-lg bg-transparent outline-none"
              rows="2"
            ></textarea>
          </div>

          {/* Icon Buttons */}
          <div className="flex justify-end gap-3 mt-3 ">
            <button className="hover:bg-gray-200 rounded-full p-2">
              <img src={docIcon} alt="Attach" />
            </button>
            <button className="hover:bg-gray-200 rounded-full p-2">
              <img src={gallIcon} alt="Gallery" />
            </button>
            <button className="hover:bg-gray-200 rounded-full p-2">
              <img src={gifIcon} alt="GIF" />
            </button>
            <button className="hover:bg-gray-200 rounded-full p-2">
              <img src={EmojiIcon} alt="Emoji" />
            </button>
          </div>
        </div>

        {/* Post Button */}
        <div className="w-full mt-10">
          <button className="w-full h-12 bg-blue-500 text-white rounded-md font-medium">
            POST
          </button>
        </div>

      </div>
    </section>
  );
};

export default Home;

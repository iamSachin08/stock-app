import React from "react";
import searchIcon from "../../assets/searchIcon.svg";
import ioIcon from "../../assets/bx_sort.svg";
import unDownIcon from "../../assets/bx_sort-alt-2.svg";
import StockCard from "../custom-components/StockCard";
import { StockContests } from "../Data/mystock";


const MyStocks = () => {
  return (
    <section className="  bg-white w-[28rem] h-[43.625rem]   py-4 font-sans flex flex-col ">
      <div className=" px-5  text-2xl font-bold">My Stocks</div>

      <div className="px-8 py-3">
        <div className="searchbar flex w-[23.813rem] h-[3rem] p-2 gap-3 items-center bg-white rounded-[0.15rem] border border-[#8A8A8A] ">
          <img src={searchIcon} alt="" />
          <input
            type="text"
            placeholder="Search and select a stock"
            className="outline-none text-[1rem] w-full"
          />
        </div>

        <div className="w-[23.813rem]   font-medium flex justify-between py-3 items-center">
          <span className="text-[1rem] font-medium">18 Companies</span>
          <button className="text-[1rem] flex items-center  text-[#00D789]">
            Recently
            <img src={ioIcon} alt="" />
          </button>
        </div>
      </div>

      <div className="  bg-[#F9F9F9] flex items-center justify-around py-3 gap-6 w-full ">
        <button className="text-[1rem] flex items-center  ">
          Company Name
          <img src={unDownIcon} alt="" />
        </button>

        <button className="text-[1rem] flex items-center  ">
          ID Change
          <img src={unDownIcon} alt="" />
        </button>
        <button className="text-[1rem] flex items-center  ">
          Price
          <img src={unDownIcon} alt="" />
        </button>
      </div>

      <div className="max-h-[35rem] overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-none">
        {StockContests.map((challenge, index) => (
          <StockCard key={index} data={challenge} index={index} />
        ))}
      </div>
    </section>
  );
};

export default MyStocks;

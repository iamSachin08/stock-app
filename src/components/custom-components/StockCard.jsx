import React from "react";
import tipIcon from "../../assets/Vector.svg";

const StockCard = ({ data }) => {
  return (
    <div className="flex flex-wrap items-center justify-between border-b border-gray-300 px-4 p-[0.4rem] text-sm">
      <div className="flex items-center gap-2 min-w-[30%]">
        <span className="flex items-center justify-center  overflow-hidden">
          <img src={data.img_src} alt="" className="w-[2.5rem] object-cover" />
        </span>
        <div className="flex flex-col">
          <span className="font-bold text-sm">{data.title}</span>
          <span className="text-gray-500 text-xs">{data.desc}</span>
        </div>
      </div>

      <div className="flex flex-col items-center min-w-[25%]">
        <span className="font-bold text-sm">{data.Stock_id}</span>
        <span className="flex items-center gap-1">
          <img src={tipIcon} alt="" className="w-4 h-4" />
          <span className="text-red-600 text-xs">{data.Stock_id_desc}</span>
        </span>
      </div>

      <div className="flex flex-col items-end min-w-[25%]">
        <span className="font-bold text-sm">{data.price}</span>
        <span className="text-green-500 text-xs">{data.price_desc}</span>
      </div>
    </div>
  );
};

export default StockCard;

import React from "react";


const StatsCard = ({ data }) => {
  return (
    <div className="flex w-[24.75rem] p-2 justify-between  bg-[#FAFAFA] mb-2    border rounded-md  border-2-[#E3E1E1] ">
      <div className="flex items-center gap-4 ">
        <span className="flex items-center justify-center  overflow-hidden">
          <img src={data.icon} alt="" className="w-[1.875rem] object-cover" />
        </span>
        <div className="flex flex-col">
          <span className="font-bold text-md">{data.title}</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span>
          <img src={data.Icon2} alt="" className="" />
        </span>
        <span className="font-bold text-sm text-[#00D789]">10.12%</span>
        <button
          className={`bg-[${data.tColor}] text-white h-[2.25rem]  w-[4.938rem] rounded-sm `}
        >
          {data.buttonText}
        </button>
      </div>
    </div>
  );
};

export default StatsCard;

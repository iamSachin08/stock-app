import React from "react";


const StatsCard2 = ({ data }) => {
  return (
    <div className="flex w-[24.75rem] p-2 justify-between  bg-[#FAFAFA] mb-2    border rounded-md  border-2-[#E3E1E1] ">
      <div className="flex items-center gap-4 ">
        <span className="flex items-center justify-center  overflow-hidden">
          <img src={data.icon} alt="" className="w-[1.875rem] object-cover" />
        </span>
        <div className="flex flex-col">
          <span className="font-medium text-[#7E7777] text-[0.688rem]">
            {data.title}
          </span>

          <span className="flex gap-1">
            <span className="font-bold text-md" >14,500.65</span>
            <span>
              <img src={data.Icon2} alt="downicon" />
            </span>
            <div className="flex gap-2 items-center">
              <span className="font-bold text-sm  "style={{ color: data.tColor }}>{data.per}</span>
              <span className="font-medium text-xs   "style={{ color: data.tColor }}>
               {data.per2}
              </span>
            </div>
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
      <button
  className={`${data.tColor} text-white h-[2.25rem] w-[4.938rem] rounded-sm`}
>
  {data.buttonText}
</button>
      </div>
    </div>
  );
};

export default StatsCard2;

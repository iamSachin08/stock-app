import React, { useState } from "react";
import arrowIcon from "../../assets/iconamoon_arrow-up-2-thin.svg";

const CompetitionCard = ({ data, index }) => {
  const [isJoined, setIsJoined] = useState(false);

  const buttonText = index === 0 ? (isJoined ? "Join" : "Join") : "View";
  const buttonColor =
    index === 0 ? (isJoined ? "bg-gray-500" : "bg-[#3C78D8]") : "bg-[#00D789]";

  return (
    <>
      <div className="w-[23.813rem] h-[9.313]   flex justify-between  flex-col    border rounded-md border-[#E3E1E1] ">
        <div className="flex  justify-between items-center border-b ">
          <span className="text-[0.857rem] w-[11rem] h-[2.25rem] text-white flex items-center justify-center font-medium bg-gradient-to-r from-[#00E08F] to-[#3C4CD8] border rounded-tl-xl [clip-path:polygon(0%_0%,100%_0%,90%_100%,0%_100%)]">
            MEGA CONTEST
          </span>

          <span className="p-1">
            <button className="text-[0.875rem]   text-[#00D789]">
              {data.time}
            </button>
          </span>
        </div>

        <div className="flex items-center justify-between gap-36 py-2 px-3 ">
          <span className="text-[0.857rem] text-[#898989]  ">
            Active Participants
          </span>
          <span className="text-[0.8rem] text-[#898989]">Higest Gain</span>
        </div>

        <div className="flex  justify-between   px-3   ">
          <span className="text-[1rem] font-bold">{data.participants}</span>
          <span className="text-[1rem] font-bold">{data.highestGain}</span>
        </div>

        <div className="w-full  flex items-center justify-around gap-28 bg-[#F9F9F9]   ">
          <span className="text-[1rem] p-2 font-medium">
            Ends at <span className="text-red-700">{data.endsIn}</span>
          </span>

          <span className="">
            <button
              className={`w-[7rem] h-[2.25rem] text-white rounded-md ${buttonColor}`}
              disabled={index === 0 && isJoined}
            >
              {buttonText}
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default CompetitionCard;

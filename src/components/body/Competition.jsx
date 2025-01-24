import React from "react";
import arrowIcon from "../../assets/iconamoon_arrow-up-2-thin.svg";
import CompetitionCard from "../custom-components/CompetitionCard";

import { megaContests } from "../Data/competition";
import { weeklyChallenges } from "../Data/competition";


const Competition = () => {
  return (
    <section className=" flex flex-col justify-center items-center bg-white  w-[28rem] h-[698px] overflow-y-auto rounded-md shadow-md ">
      <div className=" ml-[-14rem] text-2xl  p-3 font-bold">Competitions</div>

      <div className="w-[23.813rem]   font-medium flex justify-between items-center">
        <span className="text-[1rem] font-medium">Weekly Challenge</span>
        <button className="text-[0.875rem] flex items-center justify-between text-[#359EFF]">
          View All
          <img src={arrowIcon} alt="" />
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {megaContests.map((contest, index) => (
          <CompetitionCard key={index} data={contest} index={index} />
        ))}
      </div>

     
      <div className="w-[23.813rem] font-medium flex justify-between items-center mt-4">
        <span className="text-[1rem] font-medium">Monthly Challenge</span>
        <button className="text-[0.875rem] flex items-center text-[#00D789]">
          View All <img src={arrowIcon} alt="" />
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {weeklyChallenges.map((challenge, index) => (
          <CompetitionCard key={index} data={challenge} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Competition;

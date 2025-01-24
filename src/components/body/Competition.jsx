import React from "react";
import arrowIcon from "../../assets/iconamoon_arrow-up-2-thin.svg";
import CompetitionCard from "../custom-components/CompetitionCard";

const megaContests = [
  {
    time: "Today, 7:30 PM",
    participants: "1.5k",
    highestGain: "150%",
    endsIn: "4h 36m",
  },
  {
    time: "Today, 8:00 PM",
    participants: "1.7k",
    highestGain: "160%",
    endsIn: "3h 45m",
  },
];
const weeklyChallenges = [
  {
    time: "Today, 8:00 PM",
    participants: "2.1k",
    highestGain: "180%",
    endsIn: "6h 20m",
  },
  {
    time: "Today, 8:00 PM",
    participants: "2.5k",
    highestGain: "190%",
    endsIn: "5h 50m",
  },
];

const Competition = () => {
  return (
    <section className=" flex flex-col justify-center items-center bg-white w-full max-w-[28rem] h-[698px] overflow-y-auto rounded-md shadow-md ">
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

      {/* Weekly Challenge Section */}
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

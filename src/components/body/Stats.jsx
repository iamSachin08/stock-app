import React, { useState } from 'react'
import StatsCard from '../custom-components/StatsCard';

import StatsCard2 from '../custom-components/StatCard2';
import { MostActiveContests } from '../Data/stat';
import { highestGainTipsContests } from '../Data/stat';


const Stats = () => {
  const [activeTab, setActiveTab] = useState("mostActiveTips");
  const [displayData,setDisplayData] = useState(MostActiveContests);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    console.log("the tab",tab)
    setDisplayData(tab === "mostActiveTips" ? MostActiveContests : tab === "highestGainTips" ? highestGainTipsContests: '');
    

  };
  
    return (
      <section className="bg-white w-[27.438rem] py-4 font-sans flex flex-col">
        <div className="flex w-full border-b">
          <button
            className={`flex-1 text-[1.25rem] font-medium py-2 ${
              activeTab === "mostActiveTips"
                ? "text-[#3C78D8] border-b-2 border-[#3C78D8]"
                : "text-[#383838] border-b-1 "
            }`}
            onClick={() => handleTabChange("mostActiveTips")}
          >
            Most Active Tips
          </button>
  
          <button
            className={`flex-1 text-[1.25rem] font-medium py-2 ${
              activeTab === "highestGainTips"
                ? "text-[#3C78D8] border-b-2 border-[#3C78D8]"
                : "text-[#383838] border-b-1 "
            }`}
            onClick={() => handleTabChange("highestGainTips")}
          >
            Highest Gain Tips
          </button>
        </div>

        <div className="flex flex-col items-center py-4 max-h-[37rem] overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-none">
        {displayData.map((challenge, index) => (
          activeTab === "mostActiveTips" ? (
            <StatsCard key={index} data={challenge} />
          ) : (
            <StatsCard2 key={index} data={challenge} />
          )
        ))}
      </div>
        

      </section>
    );
  };
  
export default Stats
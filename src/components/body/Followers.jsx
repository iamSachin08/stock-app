import React, { useState } from "react";
import FollowCard from "../custom-components/FollowCard";


import { FollowerContests } from "../Data/Follower";
import { FollowingContests } from "../Data/Follower";


const Followers = () => {
  const [activeTab, setActiveTab] = useState("followers");
  const [displayData,setDisplayData] = useState(FollowerContests);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    console.log("the tab",tab)
    setDisplayData(tab === "followers" ? FollowerContests : tab === "following" ? FollowingContests : '');
    

  };

  return (
    <section className="bg-white w-[28rem] h-[45rem]   py-3 font-sans flex flex-col">
      <div className="flex w-full border-b ">
        <button
          className={`flex-1 text-[1.25rem] font-medium py-2 ${
            activeTab === "followers"
              ? "text-[#3C78D8] border-b-2 border-[#3C78D8]"
              : "text-[#383838] border-b-1 "
          }`}
          onClick={() => handleTabChange("followers")}
        >
          Followers
        </button>

        <button
          className={`flex-1 text-[1.25rem] font-medium py-2 ${
            activeTab === "following"
              ? "text-[#3C78D8] border-b-2 border-[#3C78D8]"
              : "text-[#383838] border-b-1 "
          }`}
          onClick={() => handleTabChange("following")}
        >
          Following
        </button>
      </div>
        
      <div className="  h-full overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-none">
        {displayData.map((challenge, index) => (
          <FollowCard key={index} data={challenge} />
        ))}
      </div>

     
       
    
    </section>
  );
};

export default Followers;

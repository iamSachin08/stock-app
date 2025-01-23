import React, { useState } from 'react'
import StatsCard from '../custom-components/StatsCard';
import Icon from "../../assets/HDB-bb6241fe 1 (1).svg";
import UdIcon from "../../assets/Vector (2).svg";
import Icon2 from "../../assets/irctc-logo-E7D060073E-seeklogo 1.svg";
import DIcon from "../../assets/mdi_arrow-drop-up (1).svg";
import StatsCard2 from '../custom-components/StatCard2';


const MostActiveContests = [
    {
      icon: Icon,
      title: "HDFC BANK",
      Icon2:UdIcon,
      gain:"10.12%",
      buttonText:"BUY",
      tColor:"#00D789"
    },
    {
      icon: Icon2,
      title: "IRCTC",
      Icon2:DIcon,
      gain:"10.12%",
      buttonText:"SELL",
      tColor:"#D70027"
    },
    {
      icon: Icon,
      title: "HDFC BANK",
      Icon2:UdIcon,
      gain:"10.12%",
      buttonText:"BUY",
      tColor:"#00D789"
    },
    {
      icon: Icon2,
      title: "IRCTC",
      Icon2:DIcon,
      gain:"10.12%",
      buttonText:"SELL",
      tColor:"#D70027"
    },
    ,
    {
      icon: Icon,
      title: "HDFC BANK",
      Icon2:UdIcon,
      gain:"10.12%",
      buttonText:"BUY",
      tColor:"#00D789"
    },
    {
      icon: Icon2,
      title: "IRCTC",
      Icon2:DIcon,
      gain:"10.12%",
      buttonText:"SELL",
      tColor:"#D70027"
    },
    ,
    {
      icon: Icon,
      title: "HDFC BANK",
      Icon2:UdIcon,
      gain:"10.12%",
      buttonText:"BUY",
      tColor:"#00D789"
    },
    {
      icon: Icon2,
      title: "IRCTC",
      Icon2:DIcon,
      gain:"10.12%",
      buttonText:"SELL",
      tColor:"#D70027"
    },
    {
      icon: Icon,
      title: "HDFC BANK",
      Icon2:UdIcon,
      gain:"10.12%",
      buttonText:"BUY",
      tColor:"#00D789"
    },
    {
      icon: Icon2,
      title: "IRCTC",
      Icon2:DIcon,
      gain:"10.12%",
      buttonText:"SELL",
      tColor:"#D70027"
    }, {
      icon: Icon,
      title: "HDFC BANK",
      Icon2:UdIcon,
      gain:"10.12%",
      buttonText:"BUY",
      tColor:"#00D789"
    },
    {
      icon: Icon2,
      title: "IRCTC",
      Icon2:DIcon,
      gain:"10.12%",
      buttonText:"SELL",
      tColor:"#D70027"
    },
  
     
  ];

  const highestGainTipsContests = [
    {
      icon: Icon,
      title: "HDFC BANK",
      price:"14500.65",
      per:"10.12%",
      per2:"(+0.90)",
      Icon2:UdIcon,
      buttonText:"BUY",
      tColor:"#00D789"
    },
    {
      icon: Icon2,
      title: "IRTC",
      price:"14,500.65",
      per:"0.3%",
      per2:"(-0.30)",
      Icon2:DIcon,
      buttonText:"SELL",
      tColor:"#D70027"
    },
    {
      icon: Icon,
      title: "HDFC BANK",
      price:"14500.65",
      per:"10.12%",
      per2:"(+0.90)",
      Icon2:UdIcon,
      buttonText:"BUY",
      tColor:"#00D789"
    },
    {
      icon: Icon2,
      title: "IRTC",
      price:"14,500.65",
      per:"0.3%",
      per2:"(-0.30)",
      Icon2:DIcon,
      buttonText:"SELL",
      tColor:"#D70027"
    },
    {
      icon: Icon,
      title: "HDFC BANK",
      price:"14500.65",
      per:"10.12%",
      per2:"(+0.90)",
      Icon2:UdIcon,
      buttonText:"BUY",
      tColor:"#00D789"
    },
    {
      icon: Icon2,
      title: "IRTC",
      price:"14,500.65",
      per:"0.3%",
      per2:"(-0.30)",
      Icon2:DIcon,
      buttonText:"SELL",
      tColor:"#D70027"
    },{
      icon: Icon,
      title: "HDFC BANK",
      price:"14500.65",
      per:"10.12%",
      per2:"(+0.90)",
      Icon2:UdIcon,
      buttonText:"BUY",
      tColor:"#00D789"
    },
    {
      icon: Icon2,
      title: "IRTC",
      price:"14,500.65",
      per:"0.3%",
      per2:"(-0.30)",
      Icon2:DIcon,
      buttonText:"SELL",
      tColor:"#D70027"
    },{
      icon: Icon,
      title: "HDFC BANK",
      price:"14500.65",
      per:"10.12%",
      per2:"(+0.90)",
      Icon2:UdIcon,
      buttonText:"BUY",
      tColor:"#00D789"
    },
    {
      icon: Icon2,
      title: "IRTC",
      price:"14,500.65",
      per:"0.3%",
      per2:"(-0.30)",
      Icon2:DIcon,
      buttonText:"SELL",
      tColor:"#D70027"
    },
    
  ]

const Stats = () => {
  const [activeTab, setActiveTab] = useState("mostActiveTips");
  const [displayData,setDisplayData] = useState(MostActiveContests);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    console.log("the tab",tab)
    setDisplayData(tab === "mostActiveTips" ? MostActiveContests : tab === "highestGainTips" ? highestGainTipsContests: '');
    // setDisplayData(tab === "followers" ? FollowerContests : FollowingContests);

  };
  
    return (
      <section className="bg-white w-[28rem] py-4 font-sans flex flex-col">
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

        <div className="flex flex-col items-center py-4 max-h-[35rem] overflow-y-scroll overflow-x-hidden scroll-smooth scrollbar-none">
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
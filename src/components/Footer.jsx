// import React from "react";
// import homeIcon from "../assets/ri_home-line.svg";
// import homeIcon2 from "../assets/Group 2.svg";
// import competitionIcon from "../assets/solar_cup-broken.svg";
// import stocksIcon from "../assets/mingcute_stock-line.svg";
// import followersIcon from "../assets/mingcute_user-add-line.svg";
// import statsIcon from "../assets/gridicons_stats-alt-2.svg";
// import { NavLink } from "react-router-dom";

// function Footer() {
//   //     const [activeTab, setActiveTab] = useState("home");

//   //   // Set the active tab when a tab is clicked
//   //   const handleTabClick = (tab) => {
//   //     setActiveTab(tab);
//   //   };

//   return (
//     <section className="flex items-center bg-white w-[28rem] h-[5rem] gap-5 pl-3 rounded-b-[1.7rem] border ">
//       <div className="tabs  flex w-[26rem] justify-between gap-1 font-sans font-medium text-xs">
//         <NavLink
//           to="/"
//           onClick={() => handleTabClick("home")}
//           className="flex flex-col items-center font-sans font-medium text-xs"
//         >
//           <img
//             // src={activeTab === "home" ? homeIcon : homeIcon2}
//             src={homeIcon}
//             alt="home"
          
//           />
//           <span>HOME</span>
//         </NavLink>

//         <NavLink
//           to="/competitions"
//           //   onClick={() => handleTabClick("competitions")}
//           className="flex flex-col items-center font-sans font-medium text-xs"
//         >
//           <img
//             // src={
//             //   activeTab === "competitions" ? competitionIcon : competitionIcon
//             // } // 
//             src={competitionIcon}
//             alt="competitions"
           
//           />
//           <span>COMPETITIONS</span>
//         </NavLink>

//         <NavLink to="/mystocks" className="flex flex-col items-center font-sans font-medium text-xs">
//           <img src={stocksIcon} alt="stocks" />
//           <span>MY STOCKS</span>
//         </NavLink>

//         <NavLink className="flex flex-col items-center font-sans font-medium text-xs">
//           <img src={followersIcon} alt="followers" />
//           <span>FOLLOWERS</span>
//         </NavLink>

//         <NavLink className="flex flex-col items-center font-sans font-medium text-xs">
//           <img src={statsIcon} alt="stats" />
//           <span>STATS</span>
//         </NavLink>

//       </div>
//     </section>
//   );
// }

// export default Footer;


import React from "react";
import homeIcon from "../assets/ri_home-line.svg";
import homeIcon2 from "../assets/Group 2.svg";
import competitionIcon from "../assets/solar_cup-broken.svg";
import stocksIcon from "../assets/mingcute_stock-line.svg";
import followersIcon from "../assets/mingcute_user-add-line.svg";
import statsIcon from "../assets/gridicons_stats-alt-2.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  //     const [activeTab, setActiveTab] = useState("home");

  //   // Set the active tab when a tab is clicked
  //   const handleTabClick = (tab) => {
  //     setActiveTab(tab);
  //   };

  return (
    <section className="flex items-center  bg-white w-[28rem] h-[5rem] gap-5 pl-3 rounded-b-[1.7rem] border ">
      <div className="tabs  flex w-[26rem] justify-between gap-1 font-sans font-medium text-xs">
        <NavLink
          to="/"
          onClick={() => handleTabClick("home")}
          className="flex flex-col items-center font-sans font-medium text-xs"
        >
          <img
            // src={activeTab === "home" ? homeIcon : homeIcon2}
            src={homeIcon}
            alt="home"
          
          />
          <span>HOME</span>
        </NavLink>

        <NavLink
          to="/competitions"
          //   onClick={() => handleTabClick("competitions")}
          className="flex flex-col items-center font-sans font-medium text-xs"
        >
          <img
            // src={
            //   activeTab === "competitions" ? competitionIcon : competitionIcon
            // } // 
            src={competitionIcon}
            alt="competitions"
           
          />
          <span>COMPETITIONS</span>
        </NavLink>

        <NavLink to="/mystocks" className="flex flex-col items-center font-sans font-medium text-xs">
          <img src={stocksIcon} alt="stocks" />
          <span>MY STOCKS</span>
        </NavLink>

        <NavLink to="/followers" className="flex flex-col items-center font-sans font-medium text-xs">
          <img src={followersIcon} alt="followers" />
          <span>FOLLOWERS</span>
        </NavLink>

        <NavLink to="/stats" className="flex flex-col items-center font-sans font-medium text-xs">
          <img src={statsIcon} alt="stats" />
          <span>STATS</span>
        </NavLink>

      </div>
    </section>
  );
}

export default Footer;

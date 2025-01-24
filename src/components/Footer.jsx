import React from "react";
import { NavLink } from "react-router-dom";
import homeIcon from "../assets/ri_home-line.svg";
import homeIcon2 from "../assets/Group 2.svg";
import competitionIcon from "../assets/solar_cup-broken.svg";
import stocksIcon from "../assets/mingcute_stock-line.svg";
import followersIcon from "../assets/mingcute_user-add-line.svg";
import statsIcon from "../assets/gridicons_stats-alt-2.svg";

function Footer() {
  return (
    <section className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md md:relative md:w-[28rem] md:rounded-b-[1.7rem]">
      <div className="flex justify-between items-center w-full max-w-lg mx-auto py-3 px-4 md:py-4">
        <NavLink
          to="/"
          className="flex flex-col items-center text-xs text-gray-600 hover:text-black"
        >
          <img src={homeIcon} alt="home"  />
          <span>HOME</span>
        </NavLink>

        <NavLink
          to="/competitions"
          className="flex flex-col items-center text-xs text-gray-600 hover:text-black"
        >
          <img src={competitionIcon} alt="competitions" className="w-6 h-6" />
          <span>COMPETITIONS</span>
        </NavLink>

        <NavLink
          to="/mystocks"
          className="flex flex-col items-center text-xs text-gray-600 hover:text-black"
        >
          <img src={stocksIcon} alt="stocks" className="w-6 h-6" />
          <span>MY STOCKS</span>
        </NavLink>

        <NavLink
          to="/followers"
          className="flex flex-col items-center text-xs text-gray-600 hover:text-black"
        >
          <img src={followersIcon} alt="followers" className="w-6 h-6" />
          <span>FOLLOWERS</span>
        </NavLink>

        <NavLink
          to="/stats"
          className="flex flex-col items-center text-xs text-gray-600 hover:text-black"
        >
          <img src={statsIcon} alt="stats" className="w-6 h-6" />
          <span>STATS</span>
        </NavLink>
      </div>
    </section>
  );
}

export default Footer;


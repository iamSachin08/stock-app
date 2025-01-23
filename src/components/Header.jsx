import React, { useState } from "react";
import arrow from "../assets/arrow.svg";
import searchIcon from "../assets/searchIcon.svg";
import Icon from "../assets/Mask group.svg";
import baseIcon from "../assets/ic_baseline-plus.svg";

function Header() {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchClick = () => {
    setIsSearchActive(true);
  };

  return (
    <section className="flex items-center bg-[#3C78D8] w-full max-w-[28rem] h-[5rem] gap-5 pl-3 pr-3 rounded-t-[1.7rem]">
      
      
      <div className="flex items-center gap-5">
        <div className="arrow">
          <img src={arrow} alt="Arrow Icon" />
        </div>
        {!isSearchActive && (
          <div>
            <img src={Icon} alt="Placeholder Icon" />
          </div>
        )}
      </div>
      
      <div className="flex-grow flex justify-center">
        {isSearchActive ? (
          <div className="searchbar flex w-full max-w-[22rem] h-[3rem] p-2 gap-3 items-center bg-white rounded-[0.15rem]">
            <input
              type="text"
              placeholder="Search"
              className="outline-none w-full"
            />
          </div>
        ) : (
          <div className="flex items-center  cursor-pointer">
            <img
              onClick={handleSearchClick}
              src={searchIcon}
              alt="Search Icon"
              className="px-10  text-white"
            />
            <img
              src={baseIcon}
              alt="Base Icon"
              className=" bg-white rounded-full "
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Header;

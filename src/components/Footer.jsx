import React from 'react'
import homeIcon from '../assets/ri_home-line.svg'
import competitionIcon from '../assets/solar_cup-broken.svg'
import stocksIcon from '../assets/mingcute_stock-line.svg'
import followersIcon from '../assets/mingcute_user-add-line.svg'
import statsIcon from '../assets/gridicons_stats-alt-2.svg'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
        <section className='flex items-center bg-white w-[28rem] h-[5rem] gap-5 pl-3 rounded-b-[1.7rem] border border-red-700'>
            <div className="tabs border border-blue-400 flex w-[26rem] justify-between gap-1 font-sans font-medium text-xs">
                <div className='flex flex-col items-center'>
                    <img src={homeIcon} alt="home" />
                    <span>HOME</span>
                </div>
                <div className='flex flex-col items-center font-sans font-medium text-xs'>
                    <img src={competitionIcon} alt="competitions" />
                    <span>COMPETITIONS</span>
                </div>
                <div className='flex flex-col items-center font-sans font-medium text-xs'>
                    <img src={stocksIcon} alt="stocks" />
                    <span>MY STOCKS</span>
                </div>
                <div className='flex flex-col items-center font-sans font-medium text-xs'>
                    <img src={followersIcon} alt="followers" />
                    <span>FOLLOWERS</span>
                </div>
                <div className='flex flex-col items-center font-sans font-medium text-xs'>
                    <img src={statsIcon} alt="stats" />
                    <span>STATS</span>
                </div>
            </div>
        </section>
  )
}

export default Footer
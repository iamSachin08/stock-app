import React from 'react'
import arrow from '../assets/arrow.svg'
import searchIcon from '../assets/searchIcon.svg'

function Header() {
  return (
    <section className='flex items-center bg-[#3C78D8] w-[28rem] h-[5rem] gap-5 pl-3 rounded-t-[1.7rem]'>
        <div className="arrow">
            <img src={arrow} alt="" />
        </div>
        <div className="searchbar flex w-[22rem] h-[3rem] p-2 gap-3 items-center bg-white rounded-[0.15rem] ">
            <img src={searchIcon} alt="" />
            <input type="text" placeholder='Search' className='outline-none' />
        </div>
    </section>
  )
}

export default Header
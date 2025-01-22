import React from 'react'

function HomeInput({dateIcon,homeIpLabels}) {

  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
        setInputValue(event.target.value); // Updates state on input change
      };

  return (
    <div className="">
    <label className="text-[0.875rem] text-[#898989]">Target Price</label>
    <div className="flex items-center justify-between  border border-[#8A8A8A] rounded-[0.18rem]">
      <div className='pl-4' >
      <input type="text " className='text-[0.875rem] outline-none font-bold' value={inputValue} onChange={handleChange} />
      </div>
      <div className="border border-l-[#8A8A8A]  p-2 ">
        INR
      </div>
    </div>
  </div>
  )
}


export default HomeInput
import { useState } from "react";


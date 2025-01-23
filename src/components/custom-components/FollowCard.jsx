import React from 'react'


export default function FollowCard({data}) {
  return (
    
    < div className="flex flex-wrap items-center justify-between   p-[0.4rem] text-sm">
          <span className="flex items-center justify-center  overflow-hidden">
            <img
              src={data.icon}
              alt=""
              className="w-[3.125rem] object-cover"
            />
          </span>

          <div className="flex flex-col ">
            <span className="font-bold text-sm  ">{data.name}</span>
            <span className="text-xs text-[#898989] font-normal">{data.name_dec}</span>
            <span className="text-gray-700 text-sm font-medium">
             {data.posted}
            </span>
            <span className="text-gray-700 text-sm font-medium  ">
              {data.rank}
            </span>
          </div>

          <div className=" flex mt-[-1.8rem] border px-5 py-1 rounded-full" >
            <button className="text-[#359EFF]">{data.buttonText}</button>
          </div>
        </div>
  
  )
}

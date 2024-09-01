"use client"
import React from "react"
import { HiMiniTrophy } from "react-icons/hi2"
import { SlNotebook } from "react-icons/sl";
import { IoCheckbox } from "react-icons/io5";
import { Data } from "@/type";

const QuickStats = ({data}:{data:Data}) => {
  return (
    <div className="px-5 pt-6 pb-2 border-b-2">
      <p className="font-bold text-lg">Quick Statistics</p>
      <div className="flex flex-wrap items-center gap-5 px-6 py-1">
        <div className="flex gap-4 justify-center xl:px-5 xl:py-4 xl:border-r-2">
          <HiMiniTrophy className="text-yellow-600 w-6 h-6 mt-2" />
          <div>
            <p className="font-bold text-lg ">{data?.rank}</p>
            <p className="text-gray-800/70 text-[14.5px]">YOUR RANK</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center xl:pr-3 xl:py-4 xl:border-r-2">
          <SlNotebook className="text-blue-600 w-6 h-6 mt-2" />
          <div>
            <p className="font-bold text-lg">{data?.percentile}%</p>
            <p className="text-gray-800/70 text-[14.5px]">PERCENTILE</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center xl:px-2">
          <IoCheckbox className="text-green-600 w-6 h-6 mt-2" />
          <div>
            <p className="font-bold text-lg">{data?.score}/15</p>
            <p className="text-gray-800/70 text-[14.5px]">CORRECT ANSWERS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickStats

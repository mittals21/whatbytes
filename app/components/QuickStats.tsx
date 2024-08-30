"use client"
import React from "react"
import { HiMiniTrophy } from "react-icons/hi2"
import { SlNotebook } from "react-icons/sl";
import { IoCheckbox } from "react-icons/io5";

const QuickStats = () => {
  return (
    <div className="px-5 pt-6 pb-2 border-b-2">
      <p className="font-bold text-lg">Quick Statistics</p>
      <div className="flex items-center gap-5 px-6 py-1">
        <div className="flex gap-4 justify-center px-5 py-4 border-r-2">
          <HiMiniTrophy className="text-yellow-600 w-6 h-6 mt-2" />
          <div>
            <p className="font-bold text-lg ">1</p>
            <p className="text-gray-800/70 text-[14.5px]">Your Rank</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center pr-5 py-4 border-r-2">
          <SlNotebook className="text-blue-600 w-6 h-6 mt-2" />
          <div>
            <p className="font-bold text-lg">30%</p>
            <p className="text-gray-800/70 text-[14.5px]">Percentile</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center px-2">
          <IoCheckbox className="text-green-600 w-6 h-6 mt-2" />
          <div>
            <p className="font-bold text-lg">10/15</p>
            <p className="text-gray-800/70 text-[14.5px]">Correct Answers</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickStats

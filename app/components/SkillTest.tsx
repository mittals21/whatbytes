"use client"
import React from "react"
import { TiHtml5 } from "react-icons/ti"

const SkillTest = () => {
  return (
    <div className="flex flex-col gap-8 justify-center">
      <p>Skill Test</p>
      <div className="flex items-center gap-4 border-t-2 border-b-2 py-5">
        <TiHtml5 className="w-20 h-20" />
        <div className="flex flex-col ">
          <p className="font-bold">Hyper Text Markup Language</p>
          <div className="flex items-center gap-2 ">
            <div className="flex items-center border-r-2 border-gray-800 h-3">
              <p className="pr-1 text-gray-800/80">Questions:</p>
            </div>
            <div className="flex items-center border-r-2 border-gray-800 h-3">
              <p className="pr-1 text-gray-800/80">Duration:</p>
            </div>
            <p className="text-gray-800/80">Submitted on 5 September 2024</p>
          </div>
        </div>
        <button className="bg-blue-900 text-white text-[13px] py-2 px-6 rounded-md font-bold">Update</button>
      </div>
    </div>
  )
}

export default SkillTest

"use client"
import React, { useState } from "react"
import { CgLoadbarSound } from "react-icons/cg"
import { SlBadge } from "react-icons/sl"
import { GoFile } from "react-icons/go"

const Sidebar = () => {
  const [active, setActive] = useState<string>("skilltest")
  return (
    <div className="flex lg:flex-col justify-center lg:w-[230px] pt-4 lg:py-12 border-r-blue-600 gap-5">
      <div
        className={`flex items-center gap-3 p-5 cursor-pointer ${
          active === "dashboard"
            ? "bg-blue-300/20 lg:rounded-l-none rounded-full  text-blue-500"
            : ""
        }`}
        onClick={() => setActive("dashboard")}
      >
        <CgLoadbarSound className="text-2xl" />
        <p
          className={`text-md font-semibold hidden md:block ${
            active === "dashboard" ? "text-blue-500" : "text-gray-800/70"
          }`}
        >
          Dashboard
        </p>
      </div>
      <div
        className={`flex items-center gap-4 p-5 cursor-pointer ${
          active === "skilltest"
            ? "bg-blue-300/20 lg:rounded-l-none rounded-full text-blue-500"
            : ""
        }`}
        onClick={() => setActive("skilltest")}
      >
        <SlBadge className="text-xl" />
        <p
          className={`text-md font-semibold hidden md:block ${
            active === "skilltest" ? "text-blue-500" : "text-gray-800/70"
          }`}
        >
          Skill Test
        </p>
      </div>
      <div
        className={`flex items-center gap-3 p-5 cursor-pointer ${
          active === "internship"
            ? "bg-blue-300/20 lg:rounded-l-none rounded-full text-blue-500"
            : ""
        }`}
        onClick={() => setActive("internship")}
      >
        <GoFile className="text-2xl" />
        <p
          className={`text-md font-semibold hidden md:block ${
            active === "internship" ? "text-blue-500" : "text-gray-800/70"
          }`}
        >
          Internship
        </p>
      </div>
    </div>
  )
}

export default Sidebar

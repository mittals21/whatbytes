"use client"
import Image from "next/image"
import React from "react"
import image from "../utils/mittal.jpeg"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4  border-b-2">
      <p className="font-bold xl:text-2xl">
        <span className="font-extrabold text-3xl xl:text-5xl">W</span>WhatBytes
      </p>
      <div className="flex justify-center items-center gap-3 border-gray-400/70 px-2 py-1 border-[2px] rounded-md">
        <Image
          src={image}
          alt=""
          width={36}
          height={36}
          className="rounded-full"
        />
        <p className="text-[15px] font-bold hidden xl:block">Mittal Suthar</p>
      </div>
    </div>
  )
}

export default Navbar

"use client"
import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import SkillTest from "./components/SkillTest"
import QuickStats from "./components/QuickStats"
import CompareGraph from "./components/CompareGraph"
import SyllabusWise from "./components/SyllabusWise"
import QuestionAnalysis from "./components/QuestionAnalysis"
import UpdateData from "./components/UpdateData"
import { Data } from "@/type"

const Home = () => {
  const [popUP, setPopUP] = useState(false)
  const [data, setData] = useState<Data>({rank:1, percentile:50, score:10})

  const handleDataChange = (newData: Data) => {
    setData(newData)
  }

  return (
    <div className="flex flex-col h-screen relative">
      <UpdateData
        popUP={popUP}
        setPopUP={setPopUP}
        data={data}
        setData={handleDataChange}
      />
      <div>
        <Navbar />
      </div>
      <div className="flex justify-between pr-3">
        <div>
          <Sidebar />
        </div>

        <div className="py-8 flex-1 px-10">
          <SkillTest setPopUP={setPopUP} />
          <QuickStats data={data} />
          <CompareGraph percentile={data?.percentile}/>
        </div>
        <div className="py-[84px] flex flex-col gap-5 max-w-[30vw]">
          <SyllabusWise />
          <QuestionAnalysis score={data?.score}/>
        </div>
      </div>
    </div>
  )
}

export default Home

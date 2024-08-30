import React from "react"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import SkillTest from "./components/SkillTest"
import QuickStats from "./components/QuickStats"
import CompareGraph from "./components/CompareGraph"

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <div>
        <Navbar />
      </div>

      <div className="flex flex-1">
        <div >
          <Sidebar />
        </div>

        <div className="py-8 px-20">
          <SkillTest />
          <QuickStats/>
          <CompareGraph/>
        </div>
      </div>
    </div>
  )
}

export default Home

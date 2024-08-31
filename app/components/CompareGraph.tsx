"use client"
import React from "react"
import { LineChart } from "@mui/x-charts/LineChart"

const CompareGraph = () => {
  return (
    <div className="py-10 px-6 border-b-2">
      <p className="font-bold text-lg">Comparison Graph</p>
      <div>
        <div className="">
          <p className="text-gray-800/80 py-5 max-w-[500px]">
            You scored 30% percentile which is lower than the average percentile
            72% of all the engineers who took this assessment
          </p>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  )
}

export default CompareGraph

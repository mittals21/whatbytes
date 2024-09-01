"use client"
import React from "react"
import { LineChart } from "@mui/x-charts/LineChart"
import { GiChart } from "react-icons/gi"

const CompareGraph = ({ percentile }: { percentile: number }) => {
  return (
    <div className="py-10 px-6 border-b-2">
      <p className="font-bold text-lg">Comparison Graph</p>
      <div>
        <div>
          <div className="flex justify-between items-center">
            <p className="text-gray-800/80 py-5 max-w-[500px]">
              You scored {percentile}% percentile which is lower than the
              average percentile 72% of all the engineers who took this
              assessment
            </p>
            <div className="bg-gray-300/50 rounded-full p-3">
              {" "}
              <GiChart className="w-6 h-6 text-red-600 bg-gray-400/40 " />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompareGraph

"use client"
import React from "react"
import { LineChart } from "@mui/x-charts/LineChart"
import { GiChart } from "react-icons/gi"

const CompareGraph = ({ percentile }: { percentile: number }) => {


  const studentsPercentile = [{students: 5, percentile: 20}, {students: 2, percentile: 48}, {students: 1, percentile: 69}, {students: 3, percentile: 90}]

  const data:Array<number|null> = Array.from({ length: 100 }, () => null);
  
  studentsPercentile.forEach(item => {
    data[item.percentile - 1] = item.students;
  });

  return (
    <div className="lg:py-10 pt-10 px-6 border-b-2">
      <p className="font-bold text-lg">Comparison Graph</p>
      <div>
        <div>
          <div className="flex justify-between items-center">
            <p className="text-gray-800/80 pt-5 lg:py-5 max-w-[500px]">
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
              xAxis={[{ data: Array.from({ length: 100 }, (_, i) => i + 1) }]}
              series={[
                {
                  data,
                  connectNulls: true,
                },
              ]}
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompareGraph

"use client"
import React from "react"
import CircularProgress from "@mui/material/CircularProgress"
import { Box } from "@mui/material"
import Image from "next/image"

const QuestionAnalysis = ({ score }: { score: number }) => {
  const progress = (score / 15) * 100

  return (
    <div className="py-10 px-6 border-2 rounded-lg">
      <div className="flex justify-between">
        <p className="font-bold text-lg">Question Analysis</p>
        <p className="text-blue-700 font-bold">{score}/15</p>
      </div>

      <div>
        <div className="flex items-center flex-col">
          <p className="text-gray-800/80 py-5 max-w-[500px]">
            You scored {score} question{score !== 1 ? "s" : ""} correct out of
            15.
            {score < 15 && " However, it still needs some improvements."}
          </p>
          <Box
            sx={{
              transform: "rotate(90deg) scale(-1, 1)",
              display: "inline-flex",
            }}
          >
            <CircularProgress
              variant="determinate"
              value={progress}
              thickness={7}
              size={150}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p className="text-3xl">{"\u{1F3AF}"}</p>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default QuestionAnalysis

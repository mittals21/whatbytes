"use client"
import React from "react"
import { styled } from "@mui/material/styles"
import LinearProgress, {
  LinearProgressProps,
  linearProgressClasses,
} from "@mui/material/LinearProgress"
import { Box, Typography } from "@mui/material"

const SyllabusWise = () => {
  const data: { name: string; value: number; color: string }[] = [
    { name: "HTML Tools, Forms, History", value: 80, color: "#1a90ff" },
    { name: "Tags & References in HTML", value: 60, color: "#ff6347" },
    { name: "Tables & Refrences in HTML", value: 24, color: "#ff0000" },
    { name: "Tables & CSS Basics", value: 96, color: "#008000" },
  ]

  const BorderLinearProgress = styled(LinearProgress)<{ customcolor: string }>(
    ({ theme, customcolor }) => ({
      height: 8.5,
      borderRadius: 5,
      [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[200],
        ...(theme.palette.mode === "dark" && {
          backgroundColor: theme.palette.grey[800],
        }),
      },
      [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: customcolor,
      },
    })
  )

  const LinearProgressWithLabel = (props: {
    value: number
    customcolor: string
  }) => (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <BorderLinearProgress
          variant="determinate"
          value={props.value}
          customcolor={props.customcolor}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          sx={{
            padding: "0 25px",
            color: props.customcolor,
            fontWeight: "bold",
            fontSize: "0.900rem",
          }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  )

  return (
    <div className="xl:border-2 rounded-lg py-10 px-6">
      <p className="font-bold text-lg pr-32">Syllabus Wise Analysis</p>

      <div className="py-5 ">
        {data?.map((e: any, index) => (
          <div key={index} className="py-2 ">
            <p className="py-4">{e?.name}</p>
            <LinearProgressWithLabel value={e?.value} customcolor={e?.color} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SyllabusWise

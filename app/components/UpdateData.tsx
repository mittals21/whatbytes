"use client"
import { Data } from "@/type"
import React, { useEffect, useRef, useState } from "react"
import { TiHtml5 } from "react-icons/ti"

const UpdateData = ({
  popUP,
  setPopUP,
  data,
  setData,
}: {
  popUP: boolean
  setPopUP: (arg0: boolean) => void
  data: Data
  setData: (arg0: Data) => void
}) => {
  const [localData, setLocalData] = useState<Data>(data)
  const [errors, setErrors] = useState({
    rank: "",
    percentile: "",
    score: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLocalData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    setErrors((prevErrors) => ({
      ...prevErrors,
      rank:
        name === "rank"
          ? !value || Number(value) <= 0
            ? "This field is required"
            : ""
          : prevErrors.rank,
      percentile:
        name === "percentile"
          ? !value || Number(value) <= 0
            ? "This field is required"
            : ""
          : prevErrors.percentile,
      score:
        name === "score"
          ? !value || Number(value) <= 0
            ? "This field is required"
            : ""
          : prevErrors.score,
    }))
  }

  const handleSave = () => {
    const newErrors = { rank: "", percentile: "", score: "" }

    newErrors.rank =
      !localData.rank || localData.rank <= 0 ? "This feild is required" : ""

    newErrors.percentile = !localData.percentile ? "This feild is required" : ""

    newErrors.score = !localData.score ? "This feild is required" : ""
    setErrors(newErrors)
    if (!newErrors.rank && !newErrors.percentile && !newErrors.score) {
      setData(localData)
      setPopUP(false)
    }
  }

  useEffect(() => {
    const disableScroll = (e: any) => {
      e.preventDefault()
    }

    if (popUP) {
      window.addEventListener("scroll", disableScroll, false)
      window.addEventListener("wheel", disableScroll, false)
      window.addEventListener("touchmove", disableScroll, false)
    } else {
      window.removeEventListener("scroll", disableScroll, false)
      window.removeEventListener("wheel", disableScroll, false)
      window.removeEventListener("touchmove", disableScroll, false)
    }

    return () => {
      window.removeEventListener("scroll", disableScroll, false)
      window.removeEventListener("wheel", disableScroll, false)
      window.removeEventListener("touchmove", disableScroll, false)
    }
  }, [popUP])

  React.useEffect(() => {
    setLocalData(data)
  }, [data])

  return (
    <div
      className={`${
        popUP ? "flex" : "hidden"
      } fixed top-0 left-0 bottom-0 right-0 z-[5056] justify-center items-center `}
    >
      <div
        className="bg-black/35 absolute h-screen w-screen"
        onClick={() => {
          setPopUP(false)
        }}
      />
      <div className="rounded-lg  relative flex justify-center items-center z-[3333] bg-white p-6">
        <div>
          <div className="flex items-center justify-between pb-6">
            <p className="font-extrabold text-2xl">Update Scores</p>
            <TiHtml5 className="w-10 h-10" />
          </div>
          <div className="flex flex-col gap-8 justify-center">
            <div className="flex items-center gap-4">
              <p className="w-[25px] h-6 bg-blue-900 text-white rounded-full flex items-center justify-center">
                1
              </p>
              <div className="flex justify-between items-center w-full">
                <p>
                  Update Your <span className="font-bold">Rank</span>
                </p>
                <div className="flex flex-col justify-center">
                  <input
                    type="number"
                    name="rank"
                    value={localData?.rank}
                    onChange={handleChange}
                    className="rounded-lg border-2 border-blue-900 w-[150px] h-10 outline-none"
                  />
                  {errors?.rank && (
                    <p className="text-red-500 text-sm">{errors?.rank}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="w-[25px] h-6 bg-blue-900 text-white rounded-full flex items-center justify-center">
                2
              </p>
              <div className="flex justify-between items-center w-full">
                <p>
                  Update Your <span className="font-bold">Percentile</span>
                </p>
                <div className="flex flex-col justify-center">
                  <input
                    type="number"
                    name="percentile"
                    value={localData?.percentile}
                    onChange={handleChange}
                    className="rounded-lg border-2 border-blue-900 w-[150px] h-10 outline-none"
                  />
                  {errors?.percentile && (
                    <p className="text-red-500 text-sm">{errors?.percentile}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="w-[25px] h-6 bg-blue-900 text-white rounded-full flex items-center justify-center">
                3
              </p>
              <div className="flex justify-between gap-4 items-center w-full">
                <p>
                  Update Your{" "}
                  <span className="font-bold">Current Score (out of 15)</span>
                </p>
                <div className="flex flex-col justify-center">
                  <input
                    type="number"
                    name="score"
                    value={localData?.score}
                    onChange={handleChange}
                    className="rounded-lg border-2 border-blue-900 w-[150px] h-10 outline-none"
                  />
                  {errors?.score && (
                    <p className="text-red-500 text-xs">{errors?.score}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-5 mt-3">
            <button
              onClick={() => {
                setLocalData(data)
                setErrors({ rank: "", percentile: "", score: "" })
                setPopUP(false)
              }}
              className="px-3 py-2.5 font-bold text-blue-900 border-2 border-blue-900 rounded-lg"
            >
              cancel
            </button>
            <button
              onClick={handleSave}
              className="px-8 py-[11px] font-bold bg-blue-900 text-white  rounded-lg"
            >
              save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateData

"use client"
import React from 'react'
import { styled } from '@mui/material/styles';
import LinearProgress, { LinearProgressProps, linearProgressClasses } from '@mui/material/LinearProgress';
import { Box, Typography } from '@mui/material';


const SyllabusWise = () => {


  const data: { name: string; value: number }[] = [
    {name:"HTML Tools, Forms, History", value:80},
    {name:"Tags & References in HTML", value:60},
    {name:"Tables & Refrences in HTML", value:24},
    {name:"Tables & CSS Basics", value:96},
  ]

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...(theme.palette.mode === 'dark' && {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
      ...(theme.palette.mode === 'dark' && {
        backgroundColor: '#308fe8',
      }),
    },
  }));

  const LinearProgressWithLabel = (props: { value: number }) => (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <BorderLinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary" sx={{padding: "0 25px"}}>{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );

  return (
    <div className='border-2 rounded-lg p-10'>
      <p className="font-bold text-lg pr-32">Syllabus Wise Analysis</p>

      <div className='py-5'>
      {data?.map((e:any, index)=>(
        <div key={index} className='py-2'>
          <p className='py-4'>{e?.name}</p>
          <LinearProgressWithLabel value={e?.value} />
        </div>
      )
      )}
      </div>
    </div>
  )
}

export default SyllabusWise

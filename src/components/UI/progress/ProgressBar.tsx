import React,{ useEffect, useState } from 'react'
import classes from './style.module.css';

type ProgressBarPorps = { 
  maxQuests:number,
  currentQuets: number
}

const ProgressBar = ({ maxQuests,currentQuets }:ProgressBarPorps) => {

    const [progressWidth,setPorgressWidth] = useState<number>(0); 

    useEffect(()=>{ 
        const resultMath:number = currentQuets/maxQuests * 100 
        setPorgressWidth(resultMath)
    },[currentQuets,maxQuests])
    console.log(progressWidth)

  return (
    <div className={classes.progress_wrapper}>
        <div 
        className={classes.progress_bar}
        style={{width:progressWidth+'%'}}
        ></div>
    </div>
  )
}

export default ProgressBar
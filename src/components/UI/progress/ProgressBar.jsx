import React,{ useEffect, useState } from 'react'
import classes from './style.module.css';

const ProgressBar = ({ maxQuests,currentQuets }) => {

    const [progressWidth,setPorgressWidth] = useState(0); 

    useEffect(()=>{ 
        const resultMath = currentQuets/maxQuests * 100 
        setPorgressWidth(resultMath)
    },[currentQuets])
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
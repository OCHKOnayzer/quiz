import React, { useEffect, useState } from 'react';
import classes from './style.module.css';
import SliderBar from '../../progress/slider_progress/slider_bar';
const Slides = ({ image1,image2 }) => {

    const [progress1,setProgress1] = useState(0);
    const [progress2,setProgress2] = useState(0)
    const [viweSlide,setViweSlide] = useState(true);
    
   useEffect(()=>{ 
    let interval;
    if(viweSlide){ 
        interval = setInterval(()=>{ 
            setProgress1(prev=>{ 
                const newValue = prev+10;
                if(newValue>= 100){ 
                    clearInterval(interval);
                    setTimeout(()=>{ 
                        setViweSlide(false)
                    },300)
                }
                return newValue
            }
            )
        },300)
        setProgress2(0)
    }else{ 
        interval = setInterval(()=>{ 
            setProgress2(prev=>{ 
                const newValue = prev+10;
                if(newValue>= 100){ 
                    clearInterval(interval);
                    setTimeout(()=>{ 
                        setViweSlide(true)
                    },300)
                }
                return newValue
            })
        },300)
        setProgress1(0)
    }
    return ()=> clearInterval(interval);
   },[viweSlide])

   const viwe = { 
    display:"block"
   }
   const none = { 
    display:"none"
   }
  return (
    <div className={classes.slide_wrapper}>
        <div className={classes.slide_content}>
            <img style={viweSlide === true?viwe:none} src={image1}/>
            <img style={viweSlide === false?viwe:none} src={image2}/>
            <div className={classes.porgress_slide_conteiner}>
            <SliderBar progres1={progress1} viweSlide={viweSlide}/>
            <SliderBar progres2={progress2} viweSlide={viweSlide}/>
            </div>
        </div>
    </div>
  )
}

export default Slides
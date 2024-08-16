import React, { useEffect, useState,FC,CSSProperties  } from 'react';
import classes from './style.module.css';
import SliderBar from '../../progress/slider_progress/slider_bar';

type SliderProps ={ 
    image1:string,
    image2:string
}

const Slides:FC<SliderProps> = ({ image1,image2 }) => {

    const [progress1,setProgress1] = useState<number>(0);
    const [progress2,setProgress2] = useState<number>(0)
    const [viweSlide,setViweSlide] = useState<boolean>(true);
    
   useEffect(()=>{ 
    let interval:number
    if(viweSlide){ 
        interval = window.setInterval(()=>{ 
            setProgress1(prev=>{ 
                const newValue = prev+10;
                if(newValue>= 100){ 
                    clearInterval(interval);
                    setTimeout(()=>{ 
                        setViweSlide(false)
                    },400)
                }
                return newValue
            }
            )
        },300)
        setProgress2(0)
    }else{ 
        interval = window.setInterval(()=>{ 
            setProgress2(prev=>{ 
                const newValue = prev+10;
                if(newValue>= 100){ 
                    clearInterval(interval);
                    setTimeout(()=>{ 
                        setViweSlide(true)
                    },400)
                }
                return newValue
            })
        },300)
        setProgress1(0)
    }
    return ()=> clearInterval(interval);
   },[viweSlide])

   const viwe:CSSProperties  = { 
    opacity: 1,
    visibility: "visible",
    transition: "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out",
    position:"relative",
    zIndex:"2"
   }
   const none:CSSProperties  = { 
    opacity: 0,
    visibility: "hidden",
    transition: "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out",
    position: "absolute",
    zIndex: 1
   }
  return (
    <div className={classes.slide_wrapper}>
        <div className={classes.slide_content}>
            <img style={viweSlide === true?viwe:none} src={image1} alt='slide1'/>
            <img style={viweSlide === false?viwe:none} src={image2}/>
            <div className={classes.porgress_slide_conteiner}>
            <SliderBar progres={progress1}/>
            <SliderBar progres={progress2}/>
            </div>
        </div>
    </div>
  )
}

export default Slides
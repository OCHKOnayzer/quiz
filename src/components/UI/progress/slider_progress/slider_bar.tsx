import React,{FC} from 'react';
import classes from './style.module.css';

type SlideBarPorps = { 
  progres:number
}

const SliderBar:FC<SlideBarPorps>= ({ progres=0}) => {
  const width = `${progres}%`;
  return (
    <div className={classes.slide_progres_wrapper}>
        <div style={{ width }} className={classes.slide_progres}></div>
    </div>
  );
}

export default SliderBar;

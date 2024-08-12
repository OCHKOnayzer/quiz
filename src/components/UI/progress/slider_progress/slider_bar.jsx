import React from 'react';
import classes from './style.module.css';

const SliderBar = ({ progres1=0, progres2=0 }) => {
  const width = `${progres1 || progres2}%`;
  return (
    <div className={classes.slide_progres_wrapper}>
        <div style={{ width }} className={classes.slide_progres}></div>
    </div>
  );
}

export default SliderBar;

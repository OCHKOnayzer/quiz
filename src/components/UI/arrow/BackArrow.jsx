import React from 'react';
import arrow from '../../image/arrow.svg';
import classes from '../../../style.module.css';

const BackArrow = ({ quest_id,onBack }) => {
   
    const visibilityBTN = { 
        opacity: 1,
        visibility: "visible",
        transition: "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out"
    }

    const hiddenBTN = { 
        opacity: 0,
        visibility: "hidden",
        transition: "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out"
    }

    return (
    <div style={quest_id >1 ?visibilityBTN:hiddenBTN} onClick={onBack}>
        <img style={{cursor:"pointer"}} className={classes.bckArr} src={arrow} alt="" />
    </div>
    ) 
}

export default BackArrow

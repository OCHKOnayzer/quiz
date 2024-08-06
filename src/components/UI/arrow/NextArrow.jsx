import React from 'react';
import arrow from '../../image/arrow.svg';

const NextArrow = ({ nextBTN,onNext }) => {

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
    <div style={nextBTN === true?visibilityBTN:hiddenBTN} onClick={onNext}>
        <img style={{cursor:"pointer"}} src={arrow} alt="" />
    </div>
  )
}

export default NextArrow
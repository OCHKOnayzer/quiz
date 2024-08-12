import React, { useEffect } from 'react';
import classes from './style.module.css';
import data from '../../../../../others/quiz_cards/quiz_card';

const QuizCards = ({ section_category }) => {

  return (
    data
    
    .map((item,index)=>(
      <div className={classes.card}>
        <div className={classes.crad_image}>
          <img src={item.quiz_image} alt="" />
        </div>
        <div className={classes.card_info}>
          <span className={classes.card_name}>
            {item.quiz_name}
          </span>
          <div className={classes.card_desc}>
            <span>
              {item.quiz_description}
            </span>
          </div>
        </div>
    </div>
    ))
  )
}

export default QuizCards
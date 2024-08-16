import React, { useEffect } from 'react';
import classes from './style.module.css';
import data from '../../../../../others/quiz_cards/quiz_card';
import { useNavigate } from 'react-router-dom';

type QuizCardsPorops = { 
  section_category:string
}

const QuizCards = ({ section_category }:QuizCardsPorops) => {

  const navigate = useNavigate()

  const NavigateForm =(id:number)=>{ 
    navigate(`/components/UI/form/MyInput.jsx?id=${id}`);
  }

  return (
    data
    .filter(item => item.quiz_category === section_category)
    .map((item,index)=>(
      <div className={classes.card} onClick={()=> NavigateForm(index)}>
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
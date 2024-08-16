import React, { useState,useRef, useEffect} from 'react';
import classes from './style.module.css';
import arrow from '../image/arrow.svg';
import QuizCards from './card/QuizCards';

type CardComponentsProps= { 
  section_category:string
}

const Card_components = ({ section_category }:CardComponentsProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [visibilityLeft, setVisibilityLeft] = useState<boolean>(false);
  const [visibilityRight, setVisibilityRight] = useState<boolean>(true);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{ 
    console.log(section_category)
  },[])

  useEffect(() => {
    if(cardRef.current){
      const maxIndex = cardRef.current.children.length - 4;
      setVisibilityRight(currentIndex < maxIndex);
      setVisibilityLeft(currentIndex > 0);
      console.log(maxIndex)
    }
  }, [currentIndex]);

  const slideForward = () => {
    if(cardRef.current){
      const maxIndex = cardRef.current.children.length - 4;
      if (currentIndex < maxIndex) {
        setCurrentIndex(currentIndex + 1);
        cardRef.current.style.transform = `translateX(-${(currentIndex + 1) * 500}px)`;
      }
    }
    
  };

  const slideBack = () => {
    if(cardRef.current){ 
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        cardRef.current.style.transform = `translateX(-${(currentIndex - 1) * 500}px)`;
      }
    }
  };

  return (
    <div className={classes.section_content_wrapper}>
      <div className={`${classes.section_arrow} ${classes.arrow_left} ${visibilityLeft === true?classes.block:classes.none}`} onClick={slideBack}>
        <span>
          <img src={arrow} alt="" />
        </span>
      </div>

      <div className={classes.section_cards_container}>
        <div className={classes.section_cards_wrapper} ref={cardRef}>
         
         <QuizCards section_category={section_category} />
         
        </div>
      </div>

      <div className={`${classes.section_arrow} ${classes.arrow_right} ${visibilityRight === true?classes.block:classes.none}`} onClick={slideForward}>
        <span>
          <img src={arrow} alt="" />
        </span>
      </div>
    </div>
  );
}


export default Card_components
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './style.module.css';
import NextArrow from '../arrow/NextArrow';
import questionData from '../../others/questions_body.json';
import questionTitle from '../../others/quest_title.json';
import BackArrow from '../arrow/BackArrow';
import Answers from '../../others/answers/Answers';
import ProgressBar from '../progress/ProgressBar';

const MyInput = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [gameId,setGameId] = useState<number>(parseInt(searchParams.get('id')||'0',10))

  const [quizId,setQuizId] = useState<number>();

  const [questId, setQuestId] = useState<number>(0);

  const [selected, setSelected] = useState<number>(0);

  const [nextBTN, setNextBTN] = useState<boolean>(false);

  const [result,setResult] = useState<boolean>(false);

  const [selectQuiz,setSelectQuiz] = useState<number>(0);

  const [toObject,setToObject] = useState({});

  const [maxQuests,setMaxQuests] = useState<number>(0);

  const [currentQuets,setCurrentQuests] = useState<number>(0)

  useEffect(() => {
    setQuizId(1)
    setNextBTN(false);
   
    setMaxQuests(questionData.length)
    // setSelectQuiz(1);
    
  }, []);


  const nextQuest = () => {
    if(questionData.length===questId){ 
      console.log('hello world')
    }else{ 
      setQuestId(prev=> prev + 1);
      setNextBTN(false);
      setSelected(0);
      setCurrentQuests(questId)
      setSelectQuiz(0)
    }
  }
  const backQuest = () =>{ 
    setQuestId(questId - 1);
    setSelected(0)
  }

  const selectedBtn = (id:number) => {
    if(questionData.length===questId){ 
      setNextBTN(false);
      setSelected(id);
      setToObject({quest_id:questId,selected_id:id})
    }else{ 
      setNextBTN(true);
      setSelected(id);
      setToObject({quest_id:questId,selected_id:id})
    }
   
  }

  const currentQuestion = questionData[questId - 1];
  
  const currentTitle = questionTitle[questId - 1];

  if(result === true){ 
    <Answers/>
  }else{ 
    return (
      <div className={classes.input_wrapper}>
        <ProgressBar maxQuests={maxQuests} currentQuets={currentQuets}></ProgressBar>
        <BackArrow quest_id={questId} onBack={backQuest} />
        <div className={classes.wrapper_content}>
          <div className={classes.quest_title}>
            <div className={classes.title_content}>
              <p>Вопрос {questId}/{questionData.length}</p>
              <div className={classes.quest_body}>
                {Object.entries(currentTitle).map(([key, value],index,item)=>(
                    <span> {value} </span>
                ))}
              </div>
            </div>
          </div>
          <div className={classes.quests_item}>
            <div className={classes.quest_item__content}>
              {Object.entries(currentQuestion.q).map(([key, value], index:number) => (
                <div
                  key={key}
                  className={`${selected === index + 1 ? classes.selected : classes.notSelected}`}
                  onClick={() => selectedBtn(index + 1)}
                >
                  <div className={classes.quest_item__text}>
                    <span>{index + 1}.</span>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <NextArrow nextBTN={nextBTN} onNext={nextQuest} />
        </div>
      </div>
    );
  }

  
}

export default MyInput;

import React, { useEffect, useState } from 'react';
import classes from './style.module.css';
import NextArrow from '../arrow/NextArrow';
import questionData from '../../others/questions_body.json';
import questionTitle from '../../others/quest_title.json';
import BackArrow from '../arrow/BackArrow';
import Answers from '../../others/answers/Answers';

const MyInput = ({ setMaxQuests ,setCurrentQuests }) => {

  const [questId, setQuestId] = useState(1);

  const [nextBTN, setNextBTN] = useState(false);

  const [selected, setSelected] = useState(0);

  const [selectQuiz,setSelectQuiz] = useState([{}]);

  const [toObject,setToObject] = useState({});

  const [result,setResult] = useState(false);

  useEffect(() => {
    setNextBTN(false);
    setQuestId(1);
    setMaxQuests(questionData.length)
  }, []);


  const nextQuest = () => {
    if(questionData.length===questId){ 
      console.log('hello world')
    }else{ 
      setQuestId(questId + 1);
      setNextBTN(false);
      setSelected(0);
      setCurrentQuests(questId)
     
      setQuestId(questId+1)
      setSelectQuiz()
    }
  }
  const backQuest = () =>{ 
    setQuestId(questId - 1);
    setSelected(0)
  }

  const selectedBtn = (id) => {
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
              {Object.entries(currentQuestion.q).map(([key, value], index) => (
                <div
                  key={key}
                  className={`${selected === index + 1 ? classes.selected : classes.notSelected}`}
                  id={index + 1}
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

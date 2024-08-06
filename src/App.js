import classes from './style.module.css';
import MyInput from './components/UI/form/MyInput';
import { useState } from 'react';
import ProgressBar from './components/UI/progress/ProgressBar';


function App() {

  const [maxQuests,setMaxQuests] = useState();
  const [currentQuets,setCurrentQuests] = useState()

  return (
    <div className={classes.App}>
      <ProgressBar maxQuests={maxQuests} currentQuets={currentQuets}></ProgressBar>
      <MyInput setMaxQuests={setMaxQuests} setCurrentQuests={setCurrentQuests} />
    </div>
  );
}

export default App;

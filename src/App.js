import classes from './style.module.css';
import MyInput from './components/UI/form/MyInput';
import Selected_quiz from './components/page/Selected_quiz';
import { Routes,Route } from 'react-router-dom';

function App() {


  return (
    <div className={classes.App}>
      <Routes>
        <Route path='/' element={<Selected_quiz/>}/>
        <Route path="/components/UI/form/MyInput.jsx" element={<MyInput/>}/> 
      </Routes>
      
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';
import { fetchQuizQuestions } from './API';
// import { Difficulty } from './API';


function App() {



  const TOTAL_Q = 10;

  console.log( fetchQuizQuestions(TOTAL_Q) );


  const [loading,setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswer] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);


  const startTrivia =async () => {
    
  }

  const checkAnser = async (e : React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className='App'>
      <h1>React Quiz</h1>

      <button className='Start' onClick={startTrivia}>Start</button>

      <p className='Score'></p>

      <p>...Loading</p>

   
    </div>
  );
}

export default App;

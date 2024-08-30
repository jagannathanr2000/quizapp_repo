import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import Loader from '../components/Loader'
import Quiz from '../components/Quiz'
import QuizNavigation from '../components/QuizNavigation'
import QuizTimer from '../components/QuizTimer'
import { QuizAppContext } from '../store/QuizContext'

function QuizLayout() {
  const {currentQuestion,quizzes,isLoading,findResults,changeQuestion,settings} = useContext(QuizAppContext)

  const quizTime = settings.questionsPerQuiz * settings.questionDuration * 60
  
  useEffect(() => {
    changeQuestion(0-currentQuestion)
  },[])
  useEffect(() => {
    window.onbeforeunload = (event) => {
      const e = event || window.event;
      // Cancel the event
      e.preventDefault();
      if (e) {
        e.returnValue = ''; // Legacy method for cross browser support
      }
      return ''; // Legacy method for cross browser support
    };
  },[currentQuestion])
  return (
    <section className="m-auto p-3 h-screen quiz-wrapper 
    flex flex-col justify-center items-center w-screen md:w-6/12"
    >
      {
        isLoading ? <Loader /> : (
          <>
          <QuizTimer totalTime={quizTime} onTimeOver={findResults} />
          <Quiz  {...quizzes[currentQuestion]} />
          <QuizNavigation />
          </>
        )
      }
        
        
    </section>
  )
}

export default QuizLayout



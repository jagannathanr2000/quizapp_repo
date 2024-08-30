import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Result from '../components/Result'
import { QuizAppContext } from '../store/QuizContext'

export default function ResultPage() {
  const {result,settings} = useContext(QuizAppContext)
  const navigate = useNavigate()
  const calculatePassing = () => {
    const correct = result.correct
    const passingScore = settings.passingScore
    const totalQuestions = settings.questionsPerQuiz
    const actualPassing = totalQuestions * (passingScore/100)
    return correct >= actualPassing 
   
  }
  return (

    <section className='w-full h-full flex flex-col gap-6 items-center justify-center'>
        <Result />
        {
          calculatePassing() ?
          <h1 className='text-xl font-lg'>Congratulations!!!🙂</h1>
          :
          <>
            <h1 className="text-xl font-lg">Oh! you didn't make it☹️</h1>
            <button className='p-2 text-md w-32 bg-orange-700 transition rounded-md text-white font-lg 
            font-medium hover:bg-orange-500'
             onClick={() => navigate('/app/quizzes')}>Retry quiz</button>
          </>

        }
    </section>
  )
}

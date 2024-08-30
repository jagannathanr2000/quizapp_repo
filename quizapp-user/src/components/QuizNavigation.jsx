import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { QuizAppContext } from '../store/QuizContext'

export default function QuizNavigation() {
    const {currentQuestion,changeQuestion,totalQuestions,findResults} = useContext(QuizAppContext)
    const navigate = useNavigate()
    const handleSubmit = () => {
        findResults();
        navigate('/app/result')
    }
    return (
    <div className="mt-2 w-full quiz-navigation-wrapper flex justify-between items-center w-full">
        
        <div className='rounded bg-gray-700 p-2 w-30'>
            <p>Question {`${currentQuestion+1}/${totalQuestions}`}</p>
        </div>
        {
            currentQuestion+1 < totalQuestions ?
            (
                <button className={`p-2 w-20 bg-blue-800 transition rounded-sm text-white text-md 
                font-small hover:bg-blue-500 ${currentQuestion+1 >= totalQuestions && 'cursor-not-allowed'}`} onClick={() => changeQuestion(1)}
                disabled={currentQuestion+1 >= totalQuestions}>
                Next
                 &#x2192;
            </button>
            )
            :
            (
                <button className={`p-2 w-20 bg-green-800 transition rounded-sm text-white text-md 
                font-small hover:bg-green-500`} 
                onClick={handleSubmit}>
                Submit
            </button>
            )
        }
        

       
    </div>
  )
}

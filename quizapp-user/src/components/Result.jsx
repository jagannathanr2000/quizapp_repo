import React from 'react'
import { useContext } from 'react'
import { QuizAppContext } from '../store/QuizContext'

export default function Result() {
    const {result} = useContext(QuizAppContext)
    
  return (
    <div className="mt-4 w-52 h-52 score-card p-2 rounded-full 
    bg-gray-700 flex flex-col items-center justify-center
    before:bg-sky-800 before:w-56 before:h-56 md:w-72 md:h-72 md:before:h-80 md:before:w-80">
        
        {
            result == null || Object.keys(result).length == 0 ?
            (
                <h1 className='text-3xl'>No results yet...</h1>
               
            )
            :
            (
                <>
                <h1 className='text-4xl'>Your Score</h1>
                <hr />
                <p className="text-2xl">{`${result.correct}/${result.totalQuestions}`}</p>
                
                </>
            )
        }

        

    </div>
  )
}

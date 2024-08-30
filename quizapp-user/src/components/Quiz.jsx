import React,{useContext, useState} from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { QuizAppContext } from '../store/QuizContext'



export default function Quiz({question_id,question_name,question_type,choices}) {
  const [isClicked,setIsClicked] = useState(false)
  const [userChoice,setUserChoice] = useState([])


  const optionsRef = useRef()

  const {updateUserResponse} = useContext(QuizAppContext)
  
 
  useEffect(() => {
    setIsClicked(false)
    setUserChoice([])
  },[question_id])

  const hangleChange = (e,ch_id) => {
    const newUserChoices = [...userChoice,ch_id]
    setUserChoice([...newUserChoices])
    
    if(question_type === 'MULTIPLE_CHOICE') {
   
      const options = optionsRef.current.querySelectorAll('.checkbox')
      let checkedOptions = 0;
      options.forEach(option => checkedOptions+= option.checked ? 1 : 0)

      if(e.target.type === 'checkbox' && e.target.checked) {
        
        
        let correctChoices = 0
        choices.forEach(choice => correctChoices += choice.correctAnswer == true ? 1 : 0)
        
        if(correctChoices == checkedOptions) {
          setIsClicked(true)
          const userAnswer = {question_id:question_id, choices:[...newUserChoices]}
          updateUserResponse(userAnswer)
        }
      } 
      
    } else if(question_type === 'SINGLE_CHOICE'){
 
      setIsClicked(true)
      const userAnswer = {question_id:question_id, choices:[...newUserChoices]}
      updateUserResponse(userAnswer)
    }
  }



  return (
    <div key={question_id} className="single-quiz-wrapper p-3 w-full bg-gray-700 border-blue-400 rounded">
      <p className="text-lg">{question_name}</p>
      <div key={question_id} className="mt-5 options_wrapper flex flex-col gap-5" ref={optionsRef}>
          {
            question_type == "SINGLE_CHOICE"? 
            (choices?.map((choice,idx) => {
              
              return (

                <div key={idx}
              className={`flex direction-row flex-center 
              items-center p-3 m-w-max w-full gap-5 rounded 
              border-2 hover:bg-gray-600 cursor-pointer 
              ${isClicked == false ? 'border-blue-400' : 
              isClicked == true && (choice.correctAnswer == true || 
              (choice.correctAnswer == true && userChoice[0] == choice.choiceId))? 
              'border-green-400 bg-green-950' : choice.correctAnswer == false 
              && userChoice[0] == choice.choiceId ? 'border-red-400 bg-orange-950' : 
              'border-blue-400'}`} >
                  
                  <div  className="h-4 cursor-pointer">
                    <input type="radio" name={question_id} id={idx} 
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 
                    " onChange={(e) => hangleChange(e,choice.choiceId)} 
                    disabled={isClicked ? true : false}
                    />
                  </div>

                  <span>
                    <label htmlFor={idx} className="cursor-pointer">{choice.choiceText}</label>
                  </span>
                  
                 
                </div>
              )
            }))
            :
            (
              choices?.map((choice,idx) => {
                return (
                  <div key={choice.choiceId}
                  className={`flex direction-row flex-center 
                  items-center p-3 m-w-max w-full gap-5 rounded 
                  border-2 hover:bg-gray-600 cursor-pointer 
                  ${isClicked == false ? 'border-blue-400' : 
                  isClicked == true && (choice.correctAnswer == true || 
                  (choice.correctAnswer == true && userChoice.find(id => id == choice.choiceId)))? 
                  'border-green-400 bg-green-950' : choice.correctAnswer == false 
                  && userChoice.find(id => id == choice.choiceId) == choice.choiceId ? 'border-red-400 bg-orange-950' : 
                  'border-blue-400'}`}
                   >
                    
                    <div className="input-group h-4 cursor-pointer">
                      <input type="checkbox" name={`question_${idx}`} id={idx} 
                      className="checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
                      "  disabled={isClicked ? true : false}
                      onChange={(e) => hangleChange(e,choice.choiceId)} />
                    </div>

                    <span>
                      <label htmlFor={idx} className="cursor-pointer">{choice.choiceText}</label>
                    </span>
                    
                   
                  </div>
                )
              })
            )
          }
      </div>
    </div>
  )
}


// Normal Ans Style flex direction-row flex-center items-center p-3 m-w-max w-full gap-5 rounded border-2 border-blue-400 hover:bg-gray-600 cursor-pointer
// Correct Ans Style flex direction-row flex-center items-center p-3 m-w-max w-full gap-5 rounded border-2 border-green-400 bg-green-950 hover:bg-gray-600 cursor-pointer
// Wrong Ans Style flex direction-row flex-center items-center p-3 m-w-max w-full gap-5 rounded border-2 border-red-400 bg-orange-950 hover:bg-gray-600 cursor-pointer
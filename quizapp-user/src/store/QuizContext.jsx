import { createContext,useState,useEffect } from "react";
import QuizService from "../Service/QuizService";


export const QuizAppContext = createContext();

const QuizAppContextProvider = ({children}) => {

    const [quizzes,setQuizzes] = useState([])
    const [totalQuestions,setTotalQuestions] = useState(0) 
    const [isLoading,setIsLoading] = useState(true)
    const [currentQuestion,setCurrentQuestion] = useState(0)
    const [userResponse,setUserResponse] = useState([])
    const [result,setResult] = useState({})
    const [settings,setSettings] = useState({})

    // const LIMIT = 10;
    
    const findResults = () => {
        const totalQuestions = settings.questionsPerQuiz;
        const totalQuestionsAnswered = userResponse.length;
        let correct = 0;
        

        userResponse.forEach((response) => {
            const question = fetchQuestion(response.question_id);
            
            const questionMap = new Map()
            for(const choice of question.choices) {
                questionMap.set(choice.choiceId,choice.correctAnswer)
            }
  
            if(question.question_type === 'SINGLE_CHOICE') {
                
                if(questionMap.has(response.choices[0]) && questionMap.get(response.choices[0])) {
                    ++correct
                }
            } else {
                let isWrong = true
         
                for(const choice of response.choices) {
                    
                    if(questionMap.has(choice) && questionMap.get(choice) == false) {
                        isWrong  = false
                        break;
                    }
                    
                }
                if(isWrong) {
                    ++correct
                } 
            }
        })

        
        
        const wrong = totalQuestions - correct;
        const res = {
            totalQuestions:totalQuestions,
            totalQuestionsAnswered: totalQuestionsAnswered,
            correct:correct,
            wrong: wrong

        }

        setResult({...res})
    }
    
    const fetchQuestion = (q_id) => {

        for(const question of quizzes) {
            if(question.question_id == q_id) {
                
                return question;
            }
        }

        return null;
    }
    
    const changeQuestion = (change) => {
        setCurrentQuestion(currentQuestion+change)
    }
    const updateUserResponse = (newresponse) => {
        setUserResponse([...userResponse,{...newresponse}])
    }
    
    useEffect(() => {
        const fetchQuizzes = async () => {
            setIsLoading(true)
            const quizSetting = await QuizService.getQuizSettings();
            setSettings({...quizSetting})
            const data = await QuizService.getRandomNumberOfQuiz(quizSetting.questionsPerQuiz);
            setQuizzes([...data])
            setTotalQuestions(data.length)
            setIsLoading(false)
        }
        fetchQuizzes()
        
    },[])

    // useEffect(() => {
    //     const fetchQuizSettings =async () => {
    //         setIsLoading(true)
    //         const data = await QuizService.getQuizSettings();
    //         setSettings({...data})
    //         setIsLoading(false)
    //     }
    //     fetchQuizSettings()
    // },[])

    return (
        <QuizAppContext.Provider value={

            {quizzes,totalQuestions,isLoading,currentQuestion,
                changeQuestion,userResponse,updateUserResponse,
                findResults,result,settings}
            
            }>
            {children}
        </QuizAppContext.Provider>
    )
}

export {QuizAppContextProvider}
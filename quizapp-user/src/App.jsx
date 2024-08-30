import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import QuizLayout from './Pages/QuizLayout'
import { useContext, useEffect } from 'react'
import { QuizAppContext } from './store/QuizContext'
import ResultPage from './Pages/ResultPage'
import LoginPage from './Pages/LoginPage'
import QuizAppLayout from './Pages/QuizAppLayout'
import RegisterPage from './Pages/RegisterPage'
import AdminLoginPage from './Pages/AdminLoginPage'
import AdminAppLayout from './Pages/AdminAppLayout'

function App() {
  
  const {quizzes, totalQuestions} = useContext(QuizAppContext) 


  return (
    <div className="w-screen">
     
  
        <Routes>

          <Route index path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route index path="/admin/login" element={<AdminLoginPage />} />
          <Route  path="/app" element={<QuizAppLayout />}>
              <Route index path="/app/home" element={<Home />} />
              <Route path="/app/quizzes" element={<QuizLayout />} />
              <Route path="/app/result" element={<ResultPage />} />
          </Route>
          <Route path="/admin/app" element={<AdminAppLayout />}>
              <Route index path="/admin/app/home" element={<Home />} />
          </Route>
          

        </Routes>
     
      

    </div>
        
  )
}

export default App

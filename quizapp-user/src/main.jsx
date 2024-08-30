import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { QuizAppContextProvider } from './store/QuizContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    
    <QuizAppContextProvider>
    <BrowserRouter>
      <App />
      </BrowserRouter>
    </QuizAppContextProvider>
    
  </StrictMode>,
)

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image from '../assets/illustration1.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { useContext } from 'react';
import { QuizAppContext } from '../store/QuizContext';
export default function () {
  const {settings} = useContext(QuizAppContext)
  return (
    <section className="home-wrapper p-3 w-full min-h-full grid grid-cols-2 gap-2 place-items-center">
      <div className="image-container p-2">
        <img src={image} className="max-w-100 h-96 object-cover m-auto place-self-center" />
        <h1 className="text-3xl font-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">Ready to put your knowledge to the test? <br />Let's begin!</h1>
      </div>
        <div className="home-content_wrapper w-max rounded p-4 bg-gray-700 text-left">
            <p className='text-lg font-md'><GoDotFill className='inline'/> This quiz contains {settings?.questionsPerQuiz} questions</p>
            <p className='text-lg font-md'><GoDotFill className='inline'/> You have to complete the quiz within the time frame given</p>
            <p className='text-lg font-md'><GoDotFill className='inline'/> The quiz will be automatically submitted after the time frame completes</p>
            
            <Link  to="/app/quizzes" className='place-self-center'>
              <button className="p-2 text-md mt-2 w-32 bg-cyan-600 transition rounded-md text-white font-lg 
            font-medium hover:bg-cyan-500">Start   <FaLongArrowAltRight className='inline'/></button>
            </Link>
        </div>
    </section>
  )
}

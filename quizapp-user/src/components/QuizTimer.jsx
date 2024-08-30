import React from 'react'

import { useEffect,useState } from 'react'


export default function QuizTimer({totalTime=0,onTimeOver}) {
    const [time,setTime] = useState(totalTime)
    const [timerColor,setTimerColor] = useState('green')

    
    useEffect(() => {
        let interval;
        
        if(time > 0) {
            interval = setInterval(() => {    
                setTime(prevTime => prevTime - 1)
            },1000)
        } 
        if(time <= totalTime/2) { 
            setTimerColor('red')
        }
        else if(time === 0) {
            onTimeOver()
            clearInterval(interval)
        } 
        
        return () => clearInterval(interval)
    },[time,timerColor])
    
  return (
    <div className={`rounded p-2 w-20 bg-${timerColor}-800 text-center mb-2`}>
        <p className="font-semibold">{`${Math.floor(time/60) < 10 ? '0'+Math.floor(time/60) : Math.floor(time/60)}:${Math.floor(time%60) < 10 ? '0'+Math.floor(time%60) : Math.floor(time%60)}`}</p>
    </div>
  )
}

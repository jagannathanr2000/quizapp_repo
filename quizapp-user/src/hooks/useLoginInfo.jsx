import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function useLoginInfo() {
  const [username,setUserName] = useState('')
  const [role,setRole] = useState('')

  useEffect(() => {
    if(sessionStorage.getItem('user') && sessionStorage.getItem('role')) {
      setUserName(sessionStorage.getItem('user'))
      setRole(sessionStorage.getItem('role'))

      
    } 
  },[])


  return {username,role}
}

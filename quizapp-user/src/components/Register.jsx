import React, { useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginService from '../Service/LoginService';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword,setConfirmPassword] = useState('')
  const [isError,setIsError] = useState(false)
  const [isPwdCrct,setIsPwdCrct] = useState(true)



  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    

    LoginService.register({userName:username,password:password})
    .then((res) =>{
      if(res.status == 200) {
          const data = res.data
          if(data?.message) {
            setIsError(true)
          } else {
            setIsError(false)
            sessionStorage.setItem('user',data.userName)
            sessionStorage.setItem('role',data.role)
            navigate('/app/home')
          }
      }  else {
        setIsError(false)
      }
    })

  };

  const handlePassword = (e) => {
    setConfirmPassword(e.target.value)
    
    const curPwd = e.target.value
    if(password.trim() != '' && curPwd.trim() != '' && password.trim() != curPwd.trim()) {
      setIsPwdCrct(false)
    } else {
      setIsPwdCrct(true)
    }
  }

  return (
    
      <div className="w-96 h-100 bg-slate-100 max-w-md p-8 space-y-3 rounded-lg shadow-md">
        <h1 className="text-2xl font-md text-center text-black">New User</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full text-black bg-slate-100 px-4 py-2 mt-1 border rounded-md shadow outline-none focus:border-indigo-400"
              required
              placeholder={'Username'}
              
            />
          </div>
          <div>
            
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-black bg-slate-100 px-4 py-2 mt-1 border rounded-md shadow outline-none focus:border-indigo-400"
              required
              placeholder={'Password'}
              
            />
          </div>

          <div>
            
            <input
              type="password"
              id="confirmpassword"
              value={confirmpassword}
              onChange={(e) => handlePassword(e)}
              className="w-full text-black bg-slate-100 px-4 py-2 mt-1 border rounded-md shadow outline-none focus:border-indigo-400"
              required
              placeholder={'Confirm password'}
              
            />
            {
              !isPwdCrct && <p className="mt-2 text-red-500 text-sm font-semibold" >Both passwords should match</p>
          }
          </div>
          <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600">Register</button>
        </form>
        
        {
          isError && <p className="text-red-500 text-sm font-semibold" >Username already exists</p>
        }
        
      </div>
    
  );
};

export default Register;
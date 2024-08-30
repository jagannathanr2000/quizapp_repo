import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginService from '../Service/LoginService';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isError,setIsError] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here

    LoginService.login({userName:username,password:password})
    .then((res) =>{
      if(res.status == 200) {
          const data = res.data

          if(data?.message) {
            setIsError(true)
          } else {
            setIsError(false)
            sessionStorage.setItem('user',data.userName)
            sessionStorage.setItem('role',data.role)
            navigate('admin/app/home')
          }
      }  else {
        setIsError(false)
      }
    })

  }

  return (
    
      <div className="w-96 h-92 bg-slate-100 max-w-md p-8 space-y-3 rounded-lg shadow-md">
        <h1 className="text-2xl font-md text-center text-black">Admin Login</h1>
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
          <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded-md hover:bg-indigo-600">Login</button>
        </form>
        {isError && <p className="text-red-500 text-sm">Incorrect username/password</p>}
        
      </div>
    
  );
};

export default AdminLogin;
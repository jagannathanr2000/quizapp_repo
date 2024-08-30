import React from 'react'
import useLoginInfo from '../hooks/useLoginInfo'
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
export default function ProfileDropDown() {
    const {username} = useLoginInfo()
    const navigate = useNavigate()

    const handleLogout = (e) => {
        if(sessionStorage.getItem('user')) {
            sessionStorage.removeItem('user')
        }
        if(sessionStorage.getItem('role')) {
            sessionStorage.removeItem('role')
        }
        navigate('/login')
    }
  return (
    <div className="bg-slate-100 shadow-sm p-2 
    rounded absolute min-w-28 text-left" style={{
        top:'110%',
        left: '50%',
       transform: 'translateX(-50%)'
   
    }}>

            <p className="text-black text-sm font-bold p-1 text-center">
                {username}
            </p>
            <hr />
            <p className="text-black text-sm font-bold p-1 cursor-pointer"
            onClick={handleLogout}>
                <MdOutlineLogout  className="inline-block" /> Logout
            </p>

    </div>
  )
}

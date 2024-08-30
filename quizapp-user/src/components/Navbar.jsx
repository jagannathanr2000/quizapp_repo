import React,{useState} from 'react'
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import ProfileDropDown from './ProfileDropDown';
export default function Navbar() {
  const [isProfileMenuVisible,setIsProfileMenuVisible] = useState(false)

  const toggleProfileMenu = () => {
    setIsProfileMenuVisible(!isProfileMenuVisible)
  }
  return (
    <header className="fixed top-0 left-0 w-full 
    p-5 bg-blue-700 h-13 flex justify-around items-center text-white">
        <p className='font-semibold text-2xl'>Quiz App</p>

        <nav>
            <ul className="flex justify-center items-center gap-4">
              <li>
                  <Link className="text-md text-slate-100 hover:text-gray-300" to="/app/home">Home</Link>
              </li>
              
              <li>
                  <Link className="text-md text-slate-100 hover:text-gray-300" to="/app/home">Add quiz</Link>
              </li>
              
              <li>
                  <Link className="text-md text-slate-100 hover:text-gray-300" to="/create">Create quiz</Link>
              </li>
            </ul>
        </nav>
        
        <div className="profile-container relative">
          <CgProfile className="text-3xl cursor-pointer" onClick={toggleProfileMenu} />
          {
            isProfileMenuVisible && <ProfileDropDown />
          }
        </div>
    </header>
  )
}

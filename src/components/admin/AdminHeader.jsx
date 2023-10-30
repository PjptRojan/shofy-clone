import React, { useState } from 'react'
import logo from '../../assets/images/logo.svg'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { FaRegUser } from 'react-icons/fa'
import { BiSolidUser } from 'react-icons/bi'
import { FaEnvelope } from 'react-icons/fa'
import { IoIosSettings } from 'react-icons/io'
import { TbLogout2 } from 'react-icons/tb'
import { Link, useNavigate } from 'react-router-dom'
import user from '../../assets/images/user.png'
import ButtonComponent from '../common/ButtonComponent'
import { removeCookie } from '../../helper/cookie'

const AdminHeader = () => {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);

  const handleClickUser = () => {
    setShowProfile(!showProfile)
  }

  const handleLogout = () => {
    removeCookie('accessToken');
    removeCookie('refreshToken')
    navigate('/');
  }
  

  return (
    <div className='w-full bg-white p-5 flex items-center justify-between border-gray-200 border-[1px] '>
      <div>
        <Link to='/dashboard'><img src={logo} alt="" /></Link>
      </div>

      <div className='flex items-center justify-evenly px-14 gap-7'>
        <div>
          <FaRegUser className='text-3xl text-gray-400 relative hover:text-gray-700 ' onClick={handleClickUser} />

          {showProfile ?
            <ul className='absolute border-[1px] border-gray-200 rounded-lg right-[70px] top-[77px] py-5 px-[20px] flex flex-col gap-4 justify-between text-gray-400 user-menu z-10 bg-white'>

              <div className='flex justify-between items-center border-b-2 pb-2'>
                <img className='w-[50px] h-[50px] rounded-lg' src={user} alt="" />
                <div className='px-4'>
                  <li><h4 className='text-gray-900'>John Deo</h4></li>
                  <p className='text-sm'>john.example@gmail.com</p>
                </div>

              </div>
              <li className='flex items-center gap-3 justify-start hover:text-gray-700 ease-in-out'><BiSolidUser /><Link>My Profile</Link></li>
              <li className='flex items-center gap-3 justify-start hover:text-gray-700 ease-in-out'><FaEnvelope /><Link>Message</Link></li>
              <li className='flex items-center gap-3 justify-start hover:text-gray-700 ease-in-out'><IoIosSettings /> <Link>Settings</Link> </li>
              <li className='flex items-center gap-3 justify-start hover:text-gray-700 ease-in-out border-t-2 pt-2'><TbLogout2 /> <ButtonComponent btnType='button' btnTitle={'LogOut'} handleClick={handleLogout}/> </li>
            </ul>
            :
            null
          }
        </div>

        <MdOutlineNotificationsNone className='text-dark text-4xl text-gray-400 hover:text-gray-700' />
      </div>


    </div>
  )
}

export default AdminHeader

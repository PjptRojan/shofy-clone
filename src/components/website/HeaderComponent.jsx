import React from 'react'
import logo from '../../assets/images/logo.svg'
import { HiOutlineArrowsUpDown } from 'react-icons/hi2'
import { SlHeart } from 'react-icons/sl'
import { BsHandbag } from 'react-icons/bs'
import { CiUser } from 'react-icons/ci'
import NotificationBadgeComponent from '../common/NotificationBadgeComponent'
import Navbar from './Navbar'

function HeaderComponent() {
    return (
        <>
            <div className='bg-white flex items-center justify-between px-20 py-6 border-b container mx-auto'>
                <div className="logo">
                    <img src={logo} className='w-full' alt="logo" />
                </div>

                <div className="icons flex justify-between items-center gap-10">
                    <div className='flex justify-between items-center gap-3'>
                        <CiUser className='text-2xl border-gray-300 border-[1px] rounded-[50%] p-2 box-content'/>
                        <div>
                        <p className='text-xs font-semibold text-gray-600'>Hello, Sign in</p>
                        <p className='text-sm font-bold'>Your Account</p>
                        </div>
                    </div>

                    <ul className='flex gap-4 items-center justify-between text-2xl'>
                        <li className='relative'>
                            <HiOutlineArrowsUpDown className='hover:text-cyan-500 ease-in-out duration-300' />
                        </li>
                        <li className='relative'>
                            <SlHeart className='hover:text-cyan-500 ease-in-out duration-300' />
                            <NotificationBadgeComponent divStyleClass={'relative w-auto'} textStyleClass={'absolute top-[-34px] right-[-10px] text-white text-[10px] text-center font-bold bg-red-500 rounded-[50%] flex items-center justify-center w-5 h-5'} notification={'0'} />
                        </li>
                        <li className='relative'>
                            <BsHandbag className='hover:text-cyan-500 ease-in-out duration-300' />
                            <NotificationBadgeComponent divStyleClass={'relative w-auto'} textStyleClass={'absolute top-[-34px] right-[-8px] text-white text-[10px] text-center font-bold bg-red-500 rounded-[50%] flex items-center justify-center w-5 h-5'} notification={'0'} />
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <Navbar />
            </div>
        </>
    )
}

export default HeaderComponent

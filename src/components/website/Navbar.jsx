import React from 'react'
import { Link } from 'react-router-dom'
import { VscListSelection } from 'react-icons/vsc'
import { BiChevronDown, BiPhoneCall } from 'react-icons/bi'

function Navbar() {
    return (
        <>
            <div className="flex items-center justify-between px-20 border-b container mx-auto">
                <div className="navbar flex items-center justify-center gap-8">
                    <div className=''>
                        <Link className='flex justify-between gap-20 items-center bg-cyan-600 hover:bg-black hover:ease-in-out hover:duration-300 px-20 py-4 text-white'> <p className='flex items-center justify-center gap-1'><VscListSelection /> All Categories </p> <BiChevronDown /></Link>
                    </div>
                    <nav>
                        <ul className='flex gap-4 items-center justify-center'>
                            <li className='flex justify-between items-center font-semibold'>Home <BiChevronDown /></li>
                            <li className='flex justify-between items-center font-semibold'>Shop <BiChevronDown /></li>
                            <li className='flex justify-between items-center font-semibold'>Products <BiChevronDown /></li>
                            <li className='font-semibold'>Coupons</li>
                            <li className='flex justify-between items-center font-semibold'>Blog <BiChevronDown /></li>
                            <li className='font-semibold'>Contact</li>
                        </ul>
                    </nav>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <BiPhoneCall className='text-2xl text-cyan-500' />
                    <div>
                        <h3 className='text-xs font-bold text-gray-600'>Hotline:</h3>
                        <p className='font-semibold'> +(977)9863643465</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar

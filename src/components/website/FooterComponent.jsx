import React from 'react'
import logo from '../../assets/images/logo.svg'
import { FaEnvelope, FaFacebookF } from 'react-icons/fa'
import { SlLocationPin } from 'react-icons/sl'
import { BiLogoLinkedin, BiLogoVimeo } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import FooterBottom from './FooterBottom'

function FooterComponent() {
    return (
        <>
            <div className='bg-gray-50 px-8 py-16 flex items-center justify-around container mx-auto'>
                <div className="left space-y-1 py-3">
                    <img src={logo} className='my-3' alt="" />
                    <h3 className='text-justify py-3 font-semibold'>We are a team of designers and <br /> developers that create high quality <br /> WordPress</h3>
                <div className='flex gap-2'>
                    <div className='bg-white p-3 rounded-md shadow-md text-lg hover:bg-cyan-300 ease-in-out duration-300'>
                    <FaFacebookF className='text-gray-700 hover:text-white'/>
                    </div>
                    <div className='bg-white p-3 rounded-md shadow-md text-lg hover:bg-cyan-300 ease-in-out duration-300'>
                    <AiOutlineTwitter className='text-gray-700 hover:text-white'/> 
                    </div>
                    <div className='bg-white p-3 rounded-md shadow-md text-lg hover:bg-cyan-300 ease-in-out duration-300'>
                    <BiLogoLinkedin className='text-gray-700 hover:text-white'/>
                    </div>
                   <div className='bg-white p-3 rounded-md shadow-md text-lg hover:bg-cyan-300 ease-in-out duration-300'>
                   <BiLogoVimeo className='text-gray-700 hover:text-white'/>
                   </div> 
                </div>
                </div>
                <div className="middle-left">
                    <h3 className='font-bold text-xl py-3'>My Account</h3>
                    <ol className='list-disc text-gray-600 font-semibold ml-4 text-sm leading-7'>
                        <li>Track Orders</li>
                        <li>Shipping</li>
                        <li>Wishlist</li>
                        <li>My Account</li>
                        <li>Order History</li>
                        <li>Returns</li>
                    </ol>
                </div>
                <div className="middle-right ">
                    <h3 className='font-bold text-xl py-3'>Information</h3>
                    <ol className='list-disc text-gray-600 font-semibold ml-4 text-sm leading-7'>
                        <li>Our Story</li>
                        <li>Careers</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Latest News</li>
                        <li>Contact Us</li>
                    </ol>
                </div>
                <div className="right flex flex-col justify-between items-start space-y-1">
                    <h3 className='font-bold text-xl py-1 leading-7'>Talk To Us</h3>
                    <p className='text-sm text-gray-600 leading-7 font-semibold'>Got Questions? Call us</p>
                    <h2 className='text-xl font-bold leading-7'>+670 413 90 762</h2>
                    <p className='flex items-center gap-2 text-sm text-gray-600 leading-7 font-semibold'> <FaEnvelope/> shofy@support.com</p>
                    <p className='flex items-center gap-2 text-sm text-gray-600 leading-7 font-semibold'> <SlLocationPin/>Sleepy Hollow St. <br />
                        Jamaica, New York 1432</p>
                </div>
            </div>
            <div>
            <FooterBottom/>
            </div>
        </>
    )
}

export default FooterComponent

import React from 'react'
import headphone from '../../assets/images/headphone.jpeg'

function RoundedCard() {
  return (
    <>
    <div className='flex gap-10 justify-between'>
    <div className='w-48 h-48 flex items-center justify-center flex-col my-20 container'>
        <img src={headphone} className='w-full rounded-[50%] ring-1 ring-offset-8 p-4' alt="" />
        <div className='flex py-4 items-center flex-col'> 
        <h1 className='font-bold'>Product Name</h1>
        <p>Number of items</p>
        </div>
      </div>

      <div className='w-48 h-48 flex items-center justify-center flex-col my-20 container'>
        <img src={headphone} className='w-full rounded-[50%] ring-1 ring-offset-8 p-4' alt="" />
        <div className='flex py-4 items-center flex-col'> 
        <h1 className='font-bold'>Product Name</h1>
        <p>Number of items</p>
        </div>
      </div>

      <div className='w-48 h-48 flex items-center justify-center flex-col my-20 container'>
        <img src={headphone} className='w-full rounded-[50%] ring-1 ring-offset-8 p-4' alt="" />
        <div className='flex py-4 items-center flex-col'> 
        <h1 className='font-bold'>Product Name</h1>
        <p>Number of items</p>
        </div>
      </div>

      <div className='w-48 h-48 flex items-center justify-center flex-col my-20 container'>
        <img src={headphone} className='w-full rounded-[50%] ring-1 ring-offset-8 p-4' alt="" />
        <div className='flex py-4 items-center flex-col'> 
        <h1 className='font-bold'>Product Name</h1>
        <p>Number of items</p>
        </div>
      </div>

      <div className='w-48 h-48 flex items-center justify-center flex-col my-20 container'>
        <img src={headphone} className='w-full rounded-[50%] ring-1 ring-offset-8 p-4' alt="" />
        <div className='flex py-4 items-center flex-col'> 
        <h1 className='font-bold'>Product Name</h1>
        <p>Number of items</p>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default RoundedCard

import React from 'react'
import { TfiTruck } from 'react-icons/tfi'
import { FiDollarSign } from 'react-icons/fi'
import { TbDiscount2 } from 'react-icons/tb'
import { AiOutlineCustomerService } from 'react-icons/ai'

function FeaturesComponent() {
    return (
        <>
            <div className='flex items-center gap-1 justify-center my-4'>
                <div className='bg-gray-100 px-12 py-8 flex items-center gap-4 rounded-tl-xl rounded-bl-xl'>
                    <TfiTruck className='text-red-600 text-3xl' />
                    <div>
                        <h2 className='font-bold'>Free Delivary</h2>
                        <p className='text-gray-600 text-sm'>Orders from all item</p>
                    </div>
                </div>

                <div className='bg-gray-100 px-12 py-8 flex items-center gap-4'>
                    <FiDollarSign className='text-red-600 text-3xl' />
                    <div>
                        <h2 className='font-bold'>Return & Refund</h2>
                        <p className='text-gray-600 text-sm'>Money back guarenteed</p>
                    </div>
                </div>

                <div className='bg-gray-100 px-12 py-8 flex items-center gap-4'>
                    <TbDiscount2 className='text-red-600 text-3xl' />
                    <div>
                        <h2 className='font-bold'>Member Discount</h2>
                        <p className='text-gray-600 text-sm'>On every order over $ 140.00</p>
                    </div>
                </div>

                <div className='bg-gray-100 px-12 py-8 flex items-center gap-4 rounded-tr-xl rounded-br-xl'>
                    <AiOutlineCustomerService className='text-red-600 text-3xl' />
                    <div>
                        <h2 className='font-bold'>Support 24/7</h2>
                        <p className='text-gray-600 text-sm'>Available 24 hours a day</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturesComponent

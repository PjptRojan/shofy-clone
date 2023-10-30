import React from 'react'
import { MdOutlineCategory, MdOutlineDashboard, MdOutlineProductionQuantityLimits } from 'react-icons/md'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <div className='w-[250px] bg-white-500 h-screen border-[1px] border-gray-200 text-gray-400 border-t-0'>
      <ul>
        <div className='border-[1px] border-gray-200 p-5 border-t-0'>
          <li className='flex items-center gap-3'><MdOutlineDashboard /><Link className='hover:text-gray-500' to='/dashboard'>DASHBOARD</Link> </li>
        </div>
        <div className='border-[1px] border-gray-200 p-5 flex justify-between flex-col gap-4 border-t-0 '>
          <li className='flex items-center gap-3'> <MdOutlineCategory/> <Link className='hover:text-gray-500' to='/dashboard/categories'>CATEGORIES</Link></li>
          <li className='flex items-center gap-3'> <MdOutlineProductionQuantityLimits /> <Link className='hover:text-gray-500' to='/dashboard/products'>PRODUCTS</Link></li>
        </div>
      </ul>
    </div>
  )
}

export default AdminSidebar

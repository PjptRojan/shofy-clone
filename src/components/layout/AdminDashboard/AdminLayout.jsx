import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../../admin/AdminHeader'
import AdminSidebar from '../../admin/AdminSidebar'
import FooterComponent from '../../common/FooterComponent'

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader />
      <div className='flex'>
        <div className='max-w-[250px] w-full'>
          <AdminSidebar />
        </div>

        <div className='p-5 w-full'>
          <Outlet />
        </div>

      </div>
      <FooterComponent />
    </div>
  )
}

export default AdminLayout

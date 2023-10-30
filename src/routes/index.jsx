import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import AdminLayout from '../components/layout/AdminDashboard/AdminLayout'
import PrivateRoutes from './PrivateRoutes'
import DashboardPage from '../pages/admin/DashboardPage'
import AddCategory from '../pages/admin/category/AddCategory'
import UpdateCategory from '../pages/admin/category/UpdateCategoryPage'
import { adminRoutes } from './routeList'
import CategoryListPage from '../pages/admin/category/CategoryListPage'
import ProductListPage from '../pages/admin/products/ProductListPage'
import AddProductPage from '../pages/admin/products/AddProductPage'
import UpdateProductPage from '../pages/admin/products/UpdateProductPage'
import MainLayout from '../components/layout/WebsiteLayout/MainLayout'

const AllRoutes = () => {
    return (
   
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/shofy' element={<MainLayout/>} />
                <Route path='/dashboard' element={<PrivateRoutes children={<AdminLayout />} />} >
                    <Route index element={<DashboardPage />} />
                    
                    {/* products Routes  */}
                    <Route path={adminRoutes.product.list} element={<ProductListPage />} />
                    <Route path={adminRoutes.product.add} element={<AddProductPage />} />
                    <Route path={adminRoutes.product.update} element={<UpdateProductPage />} />

                    {/* category Routes  */}
                    <Route path={adminRoutes.category.list} element={<CategoryListPage />} />
                    <Route path={adminRoutes.category.add} element={<AddCategory />} />
                    <Route path={adminRoutes.category.update} element={<UpdateCategory />} />
                </Route>
                {/* <Route path='/table' element= {<AdminTable/>} /> */}
            </Routes>
    
    )
}

export default AllRoutes

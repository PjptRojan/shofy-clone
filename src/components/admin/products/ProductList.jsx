import React, { useContext } from 'react'
import { ProductsContext } from '../../../contexts/ProductsContext'
import ButtonComponent from '../../common/ButtonComponent';
import { useNavigate } from 'react-router-dom';
import { adminRoutes } from '../../../routes/routeList';

function ProductList() {

    const { products } = useContext(ProductsContext);
    const navigate = useNavigate();

    const handleAddProducts = () => {
        navigate('/dashboard/products/add')
    }

    const handleNavigate = (id) => {
        navigate(adminRoutes.product.updateStatic + id);
    }

    const handleDelete = (id) => {

    }

    return (
        <>
            <div className='border-[1px] p-6 rounded-xl shadow-lg'>
                <section className='flex justify-between items-center'>
                    <h1 className='text-gray-500 font-bold py-4 text-xl'>Products List</h1>
                    <ButtonComponent handleClick={handleAddProducts} btnTitle={'Add Products'} btnStyle={'bg-cyan-600 py-2 px-2 text-white rounded hover:bg-cyan-700'} />
                </section>
                <table className='w-full'>
                    <thead className='border-b'>
                        <tr className='p-3 text-center text-gray-400'>
                            <th className='py-2 font-semibold'>Id</th>
                            <th className='py-2 font-semibold'>Product Name</th>
                            <th className='py-2 font-semibold'>Product Description</th>
                            <th className='py-2 font-semibold'>Product Image</th>
                            <th className='py-2 font-semibold'>Product Price</th>
                            <th className='py-2 font-semibold'>Discount</th>
                            <th className='py-2 font-semibold'>Product Category</th>
                            <th className='py-2 font-semibold'>Seller</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products?.map((product, index) => {
                            return (
                                <tr className='bg-slate-50 odd:bg-white even:bg-blue-50 text-center' key={index}>
                                    <td className='py-2 text-gray-500'>{index + 1}</td>
                                    <td className='py-3 text-gray-600'>{product.product_name}</td>
                                    <td className='py-3 text-gray-500'>{product.product_description}</td>
                                    <td className='py-3 text-gray-500'>
                                        <img className='w-20 h-20 object-fill rounded-lg border-[1px] overflow-hidden m-2 shadow-sm' src={import.meta.env.VITE_IMAGE_URL + product.product_images} alt="" />
                                    </td>
                                    <td className='py-3 text-gray-500'>{product.product_price}</td>
                                    <td className='py-3 text-gray-500'>{product.discount_per}</td>
                                    <td className='py-3 text-gray-500'>{product.category_details.category_name}</td>
                                    <td className='py-3 text-gray-500'>{product.seller_details.name}</td>
                                    <td className=''>
                                        <ButtonComponent btnTitle={'Update'} btnStyle={'bg-green-500 px-2 py-1 rounded-md text-white mr-4'} handleClick={() => handleNavigate(product.id)} />
                                        <ButtonComponent btnTitle={'Delete'} btnStyle={'bg-red-500 px-2 py-1 rounded-md text-white'} handleClick={() => handleDelete(product.id)} />
                                    </td>

                                </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductList

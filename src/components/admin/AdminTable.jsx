import React, { useContext } from 'react'
import Badge from '../common/Badge'
import { ProductsContext } from '../../contexts/ProductsContext'
import ButtonComponent from '../common/ButtonComponent'

function AdminTable() {
    const { products, loading, handleAddProduct } = useContext(ProductsContext);
    // console.log('products --->', products);
    return (
        <>
            { loading ? <h2 className='text-center font-bold text-2xl text-gray-600'>"Connection error"</h2> :
                <div className='border-[1px] p-6 rounded-xl shadow-lg'>
                    <section className='flex justify-between items-center'>
                        <h1 className='text-gray-500 font-bold py-4 text-xl ml-6'>Recent Orders</h1>
                        <ButtonComponent btnStyle='bg-blue-400 px-2 py-2 text-sm font-semibold rounded-lg text-gray-800 hover:text-gray-800 hover:bg-blue-500 mr-8 ease-in-out' handleClick={handleAddProduct} btnTitle='Add Products' />
                    </section>
                    <table className='w-full'>
                        <thead className='border-b'>
                            <tr className='p-3 text-center text-gray-400'>
                                <th className='py-2 font-semibold'>Order Id</th>
                                <th className='py-2 font-semibold'>Product Name</th>
                                <th className='py-2 font-semibold'>Product Description</th>
                                <th className='py-2 font-semibold'>Product Image</th>
                                <th className='py-2 font-semibold'>Product Price</th>
                                <th className='py-2 font-semibold'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.slice(0, 10).map((product) => {
                                return <tr className='bg-slate-50 odd:bg-white even:bg-blue-50 text-center' key={product.id}>
                                    <td className='py-2 text-gray-500'>{product.id}</td>
                                    <td className='py-3 text-gray-600'>{product.product_name}</td>
                                    <td className='py-3 text-gray-500'>{product.product_description}</td>
                                    <td className='py-3 text-gray-500'>{
                                        product.product_images?.map((item, index) => {
                                            return (
                                                <div key={index} className='flex items-center gap-10'>
                                                    <img src={import.meta.env.VITE_IMAGE_URL + item} alt="" className='w-16 h-16 object-cover mx-auto rounded-[50%] border-[1px] border-slate-200 shadow-xl' />
                                                </div>
                                            )
                                        })
                                    }</td>
                                    <td className='py-3 text-gray-500'>{product.product_price}</td>
                                    <td className=''><Badge /></td>
                                </tr>
                            })
                            }
                        </tbody>
                    </table>
                </div>


            }
        </>
    )
}

export default AdminTable

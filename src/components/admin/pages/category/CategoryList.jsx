import React, { useContext } from 'react'
import { adminRoutes } from '../../../../routes/routeList'
import { Link, useNavigate } from 'react-router-dom'
import { CategoryContext } from '../../../../contexts/CategoryContext'
import ButtonComponent from '../../../common/ButtonComponent';
import LoaderComponent from '../../../common/LoaderComponent';
import { toast } from 'react-toastify';
import { deleteCategory } from '../../../../services/category';

function CategoryList() {
    const { catData, loading, setCatData } = useContext(CategoryContext);
    const navigate = useNavigate();

    const handleNavigate = (id) => {
        // console.log('id is',id);
        navigate(adminRoutes.category.updateStatic + id);
    }

    const handleDelete = async(id) => {
        const resp = await deleteCategory(id);
      try {
         setCatData(catData.filter((item)=>{return item.id !== id }));
         toast.success('Category deleted');
      } catch (error) {
        console.log(error)
      }
    } 
    return (
        <>
            <div className='my-2 ml-[89%]'>
                <Link to={adminRoutes.category.add} className='py-2 px-4 rounded-md bg-cyan-600 text-white hover:bg-cyan-700 '>Add Category</Link>
            </div>
            {/* table  */}
            <div className='mt-5 mx-auto'>

                {
                    loading ?
                        <div>
                            <h4><LoaderComponent className='text-center w-6 h-6'/> Loading </h4>
                        </div>
                        : <table className='w-[100%] border rounded-2xl p-4'>
                            <thead className=''>
                                <tr className='border-b-[1px] text-center'>
                                    <td className='px-2 py-4'>Id</td>
                                    <td className='px-2'>Category Name</td>
                                    <td className='px-2'>Category Description</td>
                                    <td className='px-2'>Category Image</td>
                                </tr>
                            </thead>
                            
                            <tbody>

                                {catData.length === 0
                                    ? <div className='mx-auto'>
                                        <h4 className='mx-auto text-center'>No data to show</h4>
                                    </div>
                                    : catData.map((item, index) => {
                                        return <tr className='text-center text-gray-500 odd:bg-sky-50' key={index}>
                                            <td className='px-2 py-2'>{index + 1}</td>
                                            <td className='px-2'>{item.category_name}</td>
                                            <td className='px-2'>{item.category_description}</td>
                                            <td className='px-2'>
                                                <div className='rounded-lg border-[1px] overflow-hidden w-20 m-2 shadow-sm'>
                                                    <img src={import.meta.env.VITE_IMAGE_URL + item.category_image} alt="" className='w-20 h-20 object-fill' />
                                                </div>
                                            </td>
                                            <td className='flex items-center justify-center gap-3 mt-[13%]'>
                                                <ButtonComponent btnTitle={'Update'} btnStyle={'bg-green-500 px-2 py-1 rounded-md text-white'} handleClick={() => handleNavigate(item.id)} />
                                                <ButtonComponent btnTitle={'Delete'} btnStyle={'bg-red-500 px-2 py-1 rounded-md text-white'} handleClick={()=> handleDelete(item.id)} />
                                            </td>
                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>
                }
            </div>
        </>
    )
}

export default CategoryList

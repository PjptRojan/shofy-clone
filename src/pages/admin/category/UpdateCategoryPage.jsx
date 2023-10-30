import React, { useContext } from 'react'
import { editCategory } from '../../../services/category'
import CategoryForm from '../../../components/admin/pages/category/CategoryForm';
import { useNavigate, useParams } from 'react-router-dom';
import { CategoryContext } from '../../../contexts/CategoryContext';
import { adminRoutes } from '../../../routes/routeList';
import { toast } from 'react-toastify';

const UpdateCategoryPage = () => {
  const navigate = useNavigate()
  const Params = useParams();
  const { id } = Params;
  const { catData, setCatData } = useContext(CategoryContext);
  const categoryById = catData && catData.filter((item) => {
      return (item.id == id)
  });
  const categoryToUpdate = categoryById[0];

  const def_val= {
      name:categoryToUpdate?.category_name,
      description:categoryToUpdate?.category_description,
      image:categoryToUpdate?.category_image
  }
  const updateCategory = async (data)=>{
    try {
      const resp = await editCategory(id, data)
      let udpatedCatData = catData.map((item) => item.id == id ? resp.data.data : item)
      console.log('asdfasdfasf == ', udpatedCatData);
      setCatData(udpatedCatData)
      toast.success('Category Updated')
      navigate(adminRoutes.category.list)
    } catch (error) {
      console.log(error);
    }
    
  }
 
  return (
    <>
     <CategoryForm btnTitle='Update' createCategory={updateCategory} defaultValue={def_val} CategoryTitle="Update Category" />
    </>
  )
}

export default UpdateCategoryPage

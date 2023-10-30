import React, { useContext } from 'react'
import CategoryForm from '../../../components/admin/pages/category/CategoryForm'
import { CategoryContext } from '../../../contexts/CategoryContext'

const AddCategory = () => {
  const { addCategory } = useContext(CategoryContext)
  const def_val = {
    name: '',
    description: '',
    image: ''
  }
  return (
    <div>
      <CategoryForm createCategory={addCategory} btnTitle='Add Category' CategoryTitle='Add Category' defaultValue={def_val} />
    </div>
  )
}

export default AddCategory

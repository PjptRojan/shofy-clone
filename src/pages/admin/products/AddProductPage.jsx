import React, { useContext } from 'react'
import ProductForm from '../../../components/admin/products/ProductForm'
import { ProductsContext } from '../../../contexts/ProductsContext'

function AddProductPage() {
  const {addProducts} = useContext(ProductsContext);
  const def_value = {
    name: '',
    description: '',
    price: '',
    discount_per: '',
    category: '',
  }
  return (
    <>
    <ProductForm addProducts={addProducts} defaultValue={def_value}/>
    </>
  )
}

export default AddProductPage

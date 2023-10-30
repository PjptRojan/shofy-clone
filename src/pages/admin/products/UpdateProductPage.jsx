import React, { useContext } from 'react'
import ProductForm from '../../../components/admin/products/ProductForm'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../../../contexts/ProductsContext';
import { editProducts } from '../../../services/products';

const UpdateProductPage = () => {
  const Params = useParams();
  const { id } = Params;
  const { products, setProducts } = useContext(ProductsContext);
  const productById = products && products.filter((item) => {
    return (item.id == id)
  })
  const productToUpdate = productById[0];

  console.log('value in products is', productToUpdate);

  const def_val = {
    name: productToUpdate?.product_name,
    description: productToUpdate?.product_description,
    price: productToUpdate?.product_price,
    discount_per: productToUpdate?.discount_per,
    category: productToUpdate?.category,
    image: productToUpdate?.product_images
  }

  const updateProduct = async (data) => {
    try {
      const resp = editProducts(id, data);
      let updatedProducts = products.map((item)=> item.id == id ? resp.data.data : item)
      console.log('updatedProducts  == ', udpatedCatData);
      setProducts(updatedProducts)
    } catch (error) {
      console.log('error in update products', error);
    }
  }
  return (
    <>
      <ProductForm defaultValue={def_val} updateProduct={updateProduct}  />
    </>
  )
}

export default UpdateProductPage

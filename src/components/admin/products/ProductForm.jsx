import React, { useContext, useEffect, useState } from 'react'
import InputComponent from '../../common/InputComponent'
import TextAreaComponent from '../../common/TextAreaComponent'
import SelectInputComponent from '../../common/SelectInputComponent'
import ButtonComponent from '../../common/ButtonComponent'
import MultipleImageSelector1 from '../../common/MultipleImageSelector1'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CategoryContext } from '../../../contexts/CategoryContext'
import { useNavigate } from 'react-router-dom'
import { adminRoutes } from '../../../routes/routeList'
import { ProductsContext } from '../../../contexts/ProductsContext'

function ProductForm({ addProducts, defaultValue, updateProduct }) {

  const { catData } = useContext(CategoryContext);
  const { products, setProducts } = useContext(ProductsContext);
  const [productImage, setProductImage] = useState([]);
  const navigate = useNavigate();

  const def_val = {
    name: defaultValue.name || '',
    description: defaultValue.description || '',
    price: defaultValue.price || '',
    discount_per: defaultValue.discount_per || '',
    category: defaultValue.category || '',
  }

  const formik = useFormik({
    initialValues: def_val,
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Product name is required'),
      description: Yup.string()
        .required('Product description is required').min(5, 'Description must be atleast 5 words.'),
      price: Yup.number().required('Product price is required'),
      discount_per: Yup.number().required('Product discount is required'),
      category: Yup.string().required('Please select your product category')
    }),
    onSubmit: values => {
      updateProduct(values)
    },
  });

  const handleGetImages = (images) => {
    setProductImage(images)
  }

  useEffect(() => {
    formik.setValues({
      ...formik.values,
      image: productImage
    })
  }, [productImage])

  useEffect(()=> {
    formik.setValues(def_val)
  }, [defaultValue])

  console.log(formik.values);

  const handleFormSubmit = () => {
    navigate(adminRoutes.product.list)
    setProducts()
  }

  return (
    <>
      <div className='w-[850px] mx-auto my-5  border rounded-xl bg-slate-100 px-8 py-4 shadow-md'>
        <h2 className='text-2xl text-gray-500 font-bold py-2 text-start mt-3'>Add Product</h2>

        <form onSubmit={formik.handleSubmit} className='flex flex-row justify-between gap-6 relative'>
          <div className='w-[350px] mt-6 overflow-hidden'>
            <MultipleImageSelector1 getImages={handleGetImages} />
            <div className='flex justify-center py-4'>
              <ButtonComponent btnType={'submit'} handleClick={handleFormSubmit} btnTitle={'Submit'} btnStyle={'bg-cyan-600 px-3 py-1.5 rounded text-white font-semibold hover:bg-cyan-700 '} />
            </div>
          </div>
          <div className='space-y-4'>
            <div className='flex justify-between items-center gap-6'>
              <div>
                <InputComponent handleChange={formik.handleChange} errorMessage={formik.errors.name && formik.touched.name} inputValue={formik.values.name} inputStyle={'shadow-lg'} inputId={'name'} title={'Product Name'} inputType={'text'} inputName={'name'} label={'PRODUCT NAME'} labelStyle={'block'} />
              </div>
              <div>
                <InputComponent handleChange={formik.handleChange} errorMessage={formik.errors.price && formik.touched.price} inputName={'price'} inputValue={formik.values.price} inputStyle={'shadow-lg'} inputType={'number'} label={'PRICE (In USD)'} labelStyle={'block'} title={'Product Price'} />
              </div>
            </div>

            <div>
              <SelectInputComponent handleChange={formik.handleChange} errorMessage={formik.errors.category && formik.touched.category} inputName={'category'} inputValue={formik.values.category} selectName={'category'} selectId={'selectCategory'} optionsTitle={'choose'} optionData={catData} labelName={'SELECT CATEGORY'} labelStyle={'block'} optionStyle={'w-full'} selectStyle='w-full py-1 rounded shadow-lg' />
            </div> 

            <div>
              <InputComponent handleChange={formik.handleChange} errorMessage={formik.errors.discount_per && formik.touched.discount_per} inputName={'discount_per'} inputValue={formik.values.discount_per} inputStyle={'shadow-lg w-[100px]'} inputType={'number'} label={'DISCOUNT PERCENT'} labelStyle={'block'} title={'Discount Percentagw'} />
            </div>
            <div>

            </div>
            <div>
              <TextAreaComponent handleChange={formik.handleChange} errorMessage={formik.errors.description && formik.touched.description} inputName={'description'} inputValue={formik.values.description} label={'PRODUCT DESCRIPTION'} labelStyle={'block'} inputStyle={'w-full shadow-lg h-[130px]'} title='Product Description' />
            </div>
            
          </div>

        </form>

      </div>
    </>
  )
}

export default ProductForm

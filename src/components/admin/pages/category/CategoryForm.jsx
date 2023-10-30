import React, { useEffect, useState } from 'react'
import InputComponent from '../../../common/InputComponent'
import ButtonComponent from '../../../common/ButtonComponent'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DropBox from '../../../common/DropBox';
import TextAreaComponent from '../../../common/TextAreaComponent';

const CategoryForm = ({ createCategory, defaultValue, CategoryTitle, btnTitle }) => {
  const [catImage, setCatImage] = useState();
 
  const formik = useFormik({
    initialValues: defaultValue,
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required'),
      description: Yup.string()
        .required('Description is required'),
    }),
    onSubmit: values => {
      createCategory(values)
    },
  });

  const handleChildData = (dataFromChild) => {
    setCatImage(dataFromChild)
  };

  useEffect(() => {
    formik.setValues(defaultValue)
  }, [defaultValue])

  useEffect(() => {
    formik.setValues({
      ...formik.values,
      image: catImage
    })
  }, [catImage])
  console.log('defaultValue', formik.values);
  // console.log(formik.errors);
  return (
    <div className='w-[450px] mx-auto  border rounded-xl bg-slate-100 p-5 shadow-md'>
      <h2 className='text-xl font-semibold py-4 text-center'>{CategoryTitle}</h2>
      <form onSubmit={formik.handleSubmit} className='space-y-2 '>
        <div>
          <InputComponent error={!!formik.errors.name} errorMessage={formik.errors.name} inputId={'name'} inputType={'text'} title={"Category Name"} inputName={"name"} label='Category Name' labelStyle=''
            handleChange={formik.handleChange} inputStyle='w-full my-2'
            inputValue={formik.values.name} />
        </div>

        <div>
          <TextAreaComponent error={!!formik.errors.description} errorMessage={formik.errors.description} inputId={'description'} title={"Category Description"} inputName={"description"} label='Category Description' labelStyle=''
            handleChange={formik.handleChange} inputStyle='w-full my-2'
            inputValue={formik.values.description} />

        </div>
        <DropBox prevImage={defaultValue.image} imageData={handleChildData} />
        <ButtonComponent btnType='submit' btnTitle={btnTitle} btnStyle={'py-1 px-3 rounded-md bg-cyan-600 rounded-md text-white text-sm mx-[150px] hover:bg-cyan-700'} />
      </form>
    </div>
  )
}

export default CategoryForm

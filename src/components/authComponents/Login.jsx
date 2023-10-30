import React, { useContext } from 'react'
import logo from "../../assets/images/logo.svg"
import InputComponent from '../common/InputComponent'
import ButtonComponent from '../common/ButtonComponent'
import { AuthContext } from '../../contexts/AuthContext'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
    const { showPassword, setShowPassword, signIn } = useContext(AuthContext);
    const handleChangeCheckbox = () => {
        setShowPassword(!showPassword)
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email id')
                .required('Email is required'),
            password: Yup.string()
                .required('Password is required')
                .min(8, 'Password must be atleast 8 characters long')
                .max(20, 'Password must be less than 20 characters')
                .matches(
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
                    'Password must contain at least one letter, one number, and one special character'
                )
        }),

        onSubmit: (values) => {
            signIn(values)
        }
    });

    return (
        <>
            <div className='bg-gray-100'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='flex items-center justify-center w-full h-screen border-4'>
                        <div className='max-w-[400px] w-full border rounded-2xl overflow-hidden shadow-md bg-white'>
                            <div className='bg-cyan-400 w-full h-20 flex items-center justify-center'>
                                <img src={logo} alt="" />
                            </div>
                            <div className='text-xl text-dark-700 font-bold text-center mt-[20px]'>
                                Sign In
                            </div>
                            <div className='py-[30px]'>
                                <div className='mb-4'>
                                    <InputComponent title='Username' inputValue={formik.values.email} inputName='email' inputBlur={formik.handleBlur} handleChange={formik.handleChange} inputType='email' inputId='input-email' inputStyle='px-[15px] py-[10px] mb-[20px] border-slate-400 text-m rounded-md w-[310px] border-[1px] border-gray-200 ml-[45px]' />
                                    <div className='text-red-500 text-sm text-center mt-[-9px] mb-[10px]'>
                                        {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
                                    </div>
                                </div>
                                <div>
                                    <InputComponent title='Password' inputValue={formik.values.password} inputName='password' inputBlur={formik.handleBlur} handleChange={formik.handleChange} inputType={showPassword ? 'text' : 'password'} inputId='input-password' inputStyle='px-[15px] py-[10px]  border-slate-400 text-m rounded-md w-[310px] border-[1px] border-gray-300 ml-[45px]' />
                                    <div className='text-red-500 text-sm text-center mt-[10px]'>
                                        {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 px-12 justify-between mb-6'>
                                <div className='flex gap-2'>
                                    <input type="checkbox" checked={showPassword} id="password-checkbox" onChange={handleChangeCheckbox} />
                                    <label htmlFor="password-checkbox" className='text-blue-300 text-sm hover:text-blue-500 ease-linear'>{!showPassword ? 'Show Password' : 'Hide Password'}</label>
                                </div>
                                <p className='font-bold text-blue-300 text-right text-sm hover:underline ease-linear'>Forgot Password?</p>
                            </div>

                            <div className='flex items-center justify-center mb-[5px]'>
                                <ButtonComponent btnTitle='Sign In' btnDisabled={Object.keys(formik.errors).length < 1 ? false : true } btnType='submit' btnStyle={ Object.keys(formik.errors).length < 1 ? 'bg-cyan-400 px-6 py-2 rounded-2xl text-m font-bold text-gray-100 mb-8 hover:bg-cyan-700 ease-linear' : 'bg-cyan-200 px-6 py-1 rounded-xl text-m text-gray-400 mb-8'} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Login

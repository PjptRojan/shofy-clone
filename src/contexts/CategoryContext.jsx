import React, { createContext, useEffect, useState } from 'react'
import { createCategory, fetchCategory } from '../services/category';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {

    const [catData, setCatData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const addCategory = async (data) => {
        try {
            const resp = await createCategory(data);
            navigate('/dashboard/categories');
            setCatData((prevState)=>[...prevState, resp.data.data])
            toast.success('New Category Added Successfully');
         
        } catch (error) {    
            toast.error(error.response.data.message)
        }
    }

    const fetchCategoryData = async () => {
        setLoading(true);
        try {
            const res = await fetchCategory();
            setCatData(res.data.data);
            setLoading(false);
        } catch (error) {
            console.log('error in fetchCategoryData',error);
            setLoading(false);
        }
    }


    useEffect(() => {
        fetchCategoryData()
    }, [])

  

    return (
        <CategoryContext.Provider value={{ addCategory, catData, setCatData, loading }}>
            {children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider

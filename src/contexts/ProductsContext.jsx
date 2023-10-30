import React, { createContext, useEffect, useState } from 'react'
import { createProducts, fetchProducts } from '../services/products';
import { toast } from 'react-toastify';

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const getProducts = async () => {
        setLoading(true)
        try {
            const resp = await fetchProducts()
            setProducts(resp.data.data)
            setLoading(false)

        } catch (error) {
            console.log("errr");
            setLoading(false)
        }
    }

    const addProducts = async (data) => {
        try {
            const resp = await createProducts(data)
            console.log('response in add products', resp)
            setProducts((prevState)=>[...prevState, resp.data.data])
            toast.success('New Product Added Successfully');
        } catch (error) {
            console.log('error in addproducts in products context', error);
            toast.error(error)
        }
    }

    // const fetchProducts = async (data) => {
    //     try{
    //         const resp = await fetchProducts();
    //         console.log('products fetched');
    //     } catch (error) {
    //         console.log('error in fetchProducts', error)
    //     }
    // }
    console.log('data in products', products);


    useEffect(() => {
        getProducts();
    }, [])


    return (
        <ProductsContext.Provider value={{ products, setProducts, setLoading, loading, addProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider

import axiosInstance from "./axios"

export const fetchProducts  = () => {                                    
    return axiosInstance.get('products')
}

export const createProducts  = (data) => {
    const formData = new FormData();
    data?.image?.forEach((image) => {
        formData.append('image', image);
      });
      formData.append('name', data?.name);
      formData.append('description', data?.description);
      formData.append('price', data?.price);
      formData.append('discount_per', data?.discount_per);
      formData.append('category', data?.category);
    return axiosInstance.post('products', formData)
}

export const editProducts = (id, data) => {
    return axiosInstance.put(`products/${id}`, data, {
        headers:{
            'Content-Type':'multipart/form-data'
        }
    })
}

export const fetchById = (id) => {
    return axiosInstance.get(`products/${id}`)
}
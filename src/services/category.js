import axiosInstance from "./axios"

export const createCategory  = (data)=>{
    return axiosInstance.post('category', data, {
        headers:{
            'Content-Type':'multipart/form-data'
        }
    })
}

export const editCategory  = (id, data)=>{
    return axiosInstance.put(`category/${id}`, data, {
        headers:{
            'Content-Type':'multipart/form-data'
        }
    })
}

export const fetchCategory = () => {
    return axiosInstance.get('category')
}

export const fetchById = (id) => {
    return axiosInstance.get(`category/${id}`)
}

export const deleteCategory = (id) => {
    return axiosInstance.delete(`category/${id}`)
}
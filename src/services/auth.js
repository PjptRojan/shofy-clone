import axiosInstance from "./axios"

export const login  = (data) => {
    return axiosInstance.post('login',data)
}

export const refreshToken = () => {
    return axiosInstance.post('refreshToken')
}
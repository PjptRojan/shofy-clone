import React, { useContext, useEffect } from 'react'
import Login from '../components/authComponents/Login'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

function LoginPage() {

    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AuthContext)

    useEffect(() => {

        if (isLoggedIn) {
            navigate('/dashboard')
        }

    }, [])
    return (
        <>
            <Login />
        </>
    )
}

export default LoginPage

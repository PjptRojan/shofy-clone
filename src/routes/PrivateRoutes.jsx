import { useContext, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoutes = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate()
  
useEffect(()=>{
  if (!isLoggedIn) {
    navigate('/')
  }
}, [])
  return (
    children
  )
}

export default PrivateRoutes 
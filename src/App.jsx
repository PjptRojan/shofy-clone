import { BrowserRouter } from 'react-router-dom'
import './index.css'
import AllRoutes from './routes'
import AuthProvider from './contexts/AuthContext'
import ProductsProvider from './contexts/ProductsContext'
import CategoryProvider from './contexts/CategoryContext'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CategoryProvider>
          <ProductsProvider>
          <AllRoutes />
          </ProductsProvider>
          </CategoryProvider>
        </AuthProvider>
      </BrowserRouter>

    </>
  )
}

export default App

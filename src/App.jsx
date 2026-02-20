import ContactPage from './pages/ContactPage'
import { ShopPage } from './pages/ShopPage'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import MainNavbar from './components/MainNavbar'
import CartPage from './pages/CartPage'
import useBackNavigation from './hooks/useBackNavigation'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {

useBackNavigation();

  return (
    <>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>

    </>
  )
}

export default App

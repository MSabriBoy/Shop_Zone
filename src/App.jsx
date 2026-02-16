import ContactPage from './pages/ContactPage'
import { ShopPage } from './pages/ShopPage'
import HomePage from './pages/HomePage'
import Navbar from './components/NavBar'

import './App.css'
import { Routes, Route} from 'react-router-dom'

function App() {


  return (
    <>
    <Navbar/>
<Routes>
  <Route path="/" element={<HomePage/>} />
  <Route path="/contact" element={<ContactPage/>}/>
  <Route path="/shop" element={<ShopPage/>}/>
</Routes>

    </>
  )
}

export default App

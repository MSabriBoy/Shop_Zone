import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function MainNavbar() {
  const { totalQuantity } = useContext(CartContext);
  return (
    <nav className="navbar">
      <h2>ShopZone</h2>
      <div className="navbar-links">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/shop">Shop</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
        <Link className="nav-link" to="/cart">
          Cart ({totalQuantity})
        </Link>
      </div>
    </nav>
  )
}

export default MainNavbar
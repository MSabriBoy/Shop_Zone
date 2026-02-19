import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom";

function CartPage() {

    const { cartItems, totalPrice, removeFromCart } = useContext(CartContext);
    if (cartItems.length === 0) {
        return (
            <div style={{ padding: "80px", textAlign: "center" }}>
                <h1>Your Cart is Empty 🛒</h1>
                <p>Please add some products to your cart.</p>
                <Link to="/shop">
                    <button style={{
                                padding: "12px 20px",
                                borderRadius: "8px",
                                border: "none",
                                background: "#2563eb",
                                color: "white",
                                cursor: "pointer"}}>
                        Go to Shop
                    </button>
                </Link>
                
            </div>
        );
    }
    return (
        <div style={{ padding: "60px" }}>
            <h1>Your Cart</h1>
            <h2>Total Price: ${totalPrice}</h2>
            {
                cartItems.lenght === 0
                    ? (
                        <p>Your cart is empty.</p>

                    ) : (
                        <>
                            {cartItems.map((item) => (
                                <div key={item.id} style={{ marginBottom: "20px" }}>
                                    <img src={item.thumbnail} alt={item.title} width="80" />
                                    <h3>{item.title}</h3>
                                    <p> Quantity: {item.quantity}</p>
                                    <p>Price: {item.price * item.quantity}</p>
                                    <button onClick={() => removeFromCart(item.id)}>🗑️</button>
                                </div>


                            ))}
                            <h2>Total Price: ${totalPrice}</h2>
                            <button style={{
                                padding: "12px 20px",
                                borderRadius: "8px",
                                border: "none",
                                background: "#2563eb",
                                color: "white",
                                cursor: "pointer"
                            }}>Place Order</button>
                        </>)
            }
        </div>
    )
}

export default CartPage
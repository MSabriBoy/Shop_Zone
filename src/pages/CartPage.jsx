import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link, useNavigate } from "react-router-dom";

function CartPage() {
    const navigate = useNavigate();
    const handlePlaceOrder = () => {
        navigate("/checkout", {
            state: {
                cartItems,
                totalPrice,
            },
        });
    };

    const {
        cartItems,
        totalPrice,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity
    } = useContext(CartContext);


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
                        cursor: "pointer"
                    }}>
                        Go to Shop
                    </button>
                </Link>

            </div>
        );
    }
    return (
        <div style={{ padding: "60px" }}>
            <h1>Your Cart</h1>

            <h2 className="cart-top-total">Total Price: ${totalPrice.toFixed(2)}</h2>
            {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                    <img src={item.thumbnail} alt={item.title} width="80" />
                    <h3>{item.title}</h3>
                    <p> Quantity: {item.quantity}</p>
                    <p>Price: {(item.price * item.quantity).toFixed(2)}</p>
                    <div className="cart-qty">
                        {item.quantity > 1 ? (
                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                        ) : (
                            <button onClick={() => removeFromCart(item.id)}>🗑️</button>
                        )}

                        <span>{item.quantity}</span>

                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                </div>


            ))}
            <div className="cart-summary">
                <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
                <button className="order-btn" onClick={handlePlaceOrder}>Place Order</button>

            </div>

        </div>
    )
}

export default CartPage
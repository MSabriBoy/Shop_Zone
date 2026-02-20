import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const cartItems = location.state?.cartItems || [];
    const totalPrice = location.state?.totalPrice || 0;
    const orderId = "ORD" + Math.floor(Math.random() * 100000);
if (cartItems.length === 0) {
  return (
    <div className="empty-container">
      <h2>No Order Found</h2>
      <button 
        className="empty-btn"
        onClick={() => navigate("/")}
      >
        Go Back
      </button>
    </div>
  );
}

   return (
  <div className="checkout-container">
    <h1 className="checkout-title">🧾 Order Summary</h1>
    <h3 className="order-id">Order ID: {orderId}</h3>

    {cartItems.map((item, index) => (
      <div key={index} className="order-item">
        <div className="item-details">
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>

        <div className="subtotal">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
      </div>
    ))}

    <div className="total-section">
      Total Paid: ${totalPrice.toFixed(2)}
    </div>

    <div className="success-message">
      🎉 Thank you for your order!
    </div>
  </div>
);
};

export default Checkout;
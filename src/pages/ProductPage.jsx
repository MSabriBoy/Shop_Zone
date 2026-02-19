import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductPage() {

  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
      });
  }, [id]);
  if (!product) {
    return <h2 style={{ padding: "40px" }}>Loading...</h2>;
  }

  return (
    <div className="product-details">
      <img src={product.thumbnail} alt={product.title} />
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
      </div>

      <button
        onClick={() => addToCart(product)}
        style={{
          padding: "12px 20px",
          borderRadius: "8px",
          border: "none",
          background: "#2563eb",
          color: "white",
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductPage
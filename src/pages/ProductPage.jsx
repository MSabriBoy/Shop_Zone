import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";



function ProductPage() {

  const { id } = useParams();
  const navigate = useNavigate();
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
      <button className="back-btn"
      onClick={() => navigate(-1)}
      >⬅back</button>
      <img src={product.thumbnail} alt={product.title} />
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
         <button
        onClick={() => addToCart(product)}
       className="add-cart-btn"
      >
        Add to Cart
      </button>
      </div>
    </div>
  )
}

export default ProductPage
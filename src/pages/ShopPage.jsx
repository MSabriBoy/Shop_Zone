import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

export function ShopPage() {
    const navigate = useNavigate();
  
    const [products, setProducts]= useState([]);

    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then((response)=>response.json())
        .then((data)=>{
            setProducts(data.products);
        })
        .catch((error)=>{
            console.log("Error fetching Product:", error);
        });
    }, []);
    return (
    <div className="product-grid">
<button className="back-btn"
      onClick={() => navigate(-1)}
      >⬅back</button>
        {products.map((product)=>(
            <div className="product-card" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
                <p className="price">${product.price}</p>
                <Link to={`/product/${product.id}`}>view Details</Link>
            </div>
        ))}
    </div>
    )
}
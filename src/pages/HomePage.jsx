import { Link } from "react-router-dom"

function HomePage() {
    return (
        <div className="home-container" >
            <h1>
                Welcome to our ShopZone
            </h1>
            <p className="description">
                Discover high-quality products at unbeatable prices.
                Browse our collection, explore detailed product information,
                and enjoy a smooth shopping experience — all without page reloads.
            </p>

            <Link to="/shop">
                <button className="home-btn">Start Shopping</button>
            </Link>

        </div>
    )
}

export default HomePage
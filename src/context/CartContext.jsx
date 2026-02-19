import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(
                (item) => item.id === product.id

            )
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item

                )
            } else {
                return [...prevItems,
                { ...product, quantity: 1 }
                ]
            }
        })
    }

    const totalQuantity = cartItems.reduce(
        (total, item)=> total + item.quantity,
        0
        )
        const totalPrice = cartItems.reduce(
            (total,item)=> total+ item.price* item.quantity,
            0
        )

    return (
        <CartContext.Provider value={{ cartItems, addToCart, totalQuantity, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
}
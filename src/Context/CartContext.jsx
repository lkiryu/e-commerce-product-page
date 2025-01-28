import { createContext, useState } from "react"
import ProductData from '../Data/Data.json'

export const CartContext = createContext()

export default function CartProvider({ children }) {
    const [productData, setProductData] = useState(ProductData)
    const [cart, setCart] = useState([])

    const productTotalPrice = (productData.price * (productData.discount / 100)).toFixed(2)

    return(
        <CartContext.Provider value={{
            productData,
            productTotalPrice,
            cart,
            setCart,
            setProductData
        }}>
            {children}
        </CartContext.Provider>
    )
}
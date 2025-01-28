import { createContext, useState } from "react"
import ProductData from '../Data/Data.json'

export const CartContext = createContext()

export default function CartProvider({ children }) {
    const [productData, setProductData] = useState(ProductData)
    const [cart, setCart] = useState([])
    const [imageModal, setImageModal] = useState(false)

    const productTotalPrice = (productData.price * (productData.discount / 100)).toFixed(2)

    return (
        <CartContext.Provider value={{
            productData,
            productTotalPrice,
            cart,
            imageModal,
            setCart,
            setProductData,
            setImageModal
        }}>
            {children}
        </CartContext.Provider>
    )
}
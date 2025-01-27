import { createContext, useState } from "react"
import ProductData from '../Data/Data.json'

export const CartContext = createContext()

export default function CartProvider({ children }) {
    const [productData, setProductData] = useState(ProductData)

    return(
        <CartContext.Provider value={{
            productData
        }}>
            {children}
        </CartContext.Provider>
    )
}
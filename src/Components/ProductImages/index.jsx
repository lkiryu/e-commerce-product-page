import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext"
import { nanoid } from "nanoid"
import { GrFormNext } from "react-icons/gr"
import { GrFormPrevious } from "react-icons/gr"

export default function ProductImages({ arrows }) {
    const { productData } = useContext(CartContext)
    const [imageIndex, setImageIndex] = useState(0)
    const { mainImage, thumbnail } = productData.images

    const thumbnailElements = thumbnail.map((item, index) => (
        <div
            key={nanoid()}
            className={`border-2 rounded-[14px] ${imageIndex === index ? "border-orange" : "border-white"}`}
            onClick={() => setImageIndex(index)}
        >
            <img
                className={`w-[90px] rounded-xl cursor-pointer hover:opacity-50 transition ${imageIndex === index ? "opacity-50" : null}`}
                src={`./src/assets/images/${item}`}
                alt={`product thumbnail ${index + 1}`}
            />
        </div>
    ))

    return (
        <div>
            <div className="flex relative">
                {
                    arrows
                        ? <GrFormPrevious className="absolute rounded-full -left-[24px] top-[198px] bg-white text-5xl p-2 text-very-dark-blue shadow-xl cursor-pointer hover:text-orange transition" />
                        : null
                }
                <img
                    className="w-[450px] rounded-2xl mb-8 cursor-pointer"
                    src={`./src/assets/images/${mainImage[imageIndex]}`}
                    alt="product"
                />
                {
                    arrows
                        ? <GrFormNext className="absolute rounded-full -right-[24px] top-[198px] bg-white text-5xl p-2 text-very-dark-blue shadow-xl cursor-pointer hover:text-orange transition" />
                        : null
                }

            </div>
            <div className="flex justify-between">
                {thumbnailElements}
            </div>
        </div>
    )
}
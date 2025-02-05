import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { nanoid } from "nanoid";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

export default function ProductImages({ arrows }) {
  const { productData, imageModal, setImageModal } = useContext(CartContext);
  const [imageIndex, setImageIndex] = useState(0);
  const { mainImage, thumbnail } = productData.images;

  function previousImage() {
    if (imageIndex > 0) setImageIndex((prevIndex) => prevIndex - 1);
  }

  function nextImage() {
    if (imageIndex < 3) setImageIndex((prevIndex) => prevIndex + 1);
  }

  const thumbnailElements = thumbnail.map((item, index) => (
    <div
      key={nanoid()}
      className={`border-2 rounded-[14px] ${
        imageIndex === index ? "border-orange bg-white" : "border-white/0"
      }`}
      onClick={() => setImageIndex(index)}
    >
      <img
        className={`w-[90px] max-xl:w-[60px] rounded-xl cursor-pointer hover:opacity-50 transition ${
          imageIndex === index ? "opacity-50" : null
        }`}
        src={`assets/images/${item}`}
        alt={`product thumbnail ${index + 1}`}
      />
    </div>
  ));

  return (
    <div>
      <div className="flex relative w-[450px] max-xl:w-[300px]">
        {arrows ? (
          <GrFormPrevious
            className="absolute rounded-full -left-[24px] top-[198px] max-xl:top-[132px] max-sm:left-2 bg-white text-5xl max-sm:text-4xl p-2 max-sm:p-1 text-very-dark-blue shadow-xl cursor-pointer hover:text-orange transition"
            onClick={previousImage}
          />
        ) : null}
        <img
          className={`w-[450px] max-xl:w-[300px] rounded-2xl mb-8 ${
            !imageModal ? "cursor-pointer" : null
          }`}
          onClick={!imageModal ? () => setImageModal(true) : undefined}
          src={`assets/images/${mainImage[imageIndex]}`}
          alt="product"
        />
        {arrows ? (
          <GrFormNext
            className="absolute rounded-full -right-[24px] top-[198px] max-xl:top-[132px] max-sm:right-2 bg-white text-5xl max-sm:text-4xl p-2 max-sm:p-1 text-very-dark-blue shadow-xl cursor-pointer hover:text-orange transition"
            onClick={nextImage}
          />
        ) : null}
      </div>
      <div className="flex justify-between">{thumbnailElements}</div>
    </div>
  );
}

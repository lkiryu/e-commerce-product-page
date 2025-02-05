import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { IoCartOutline } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function ProductInfo() {
  const { productData, setProductData, productTotalPrice, cart, setCart } =
    useContext(CartContext);
  const { company, name, description, price, discount, cartQuantity, images } =
    productData;

  function increaseQuantity() {
    setProductData((prevData) => ({
      ...prevData,
      cartQuantity: cartQuantity + 1,
    }));
  }

  function decreaseQuantity() {
    if (cartQuantity > 0)
      setProductData((prevData) => ({
        ...prevData,
        cartQuantity: cartQuantity - 1,
      }));
  }

  function addProductToCart() {
    if (cartQuantity > 0) {
      setCart((prevCart) => [
        ...prevCart,
        {
          name,
          productTotalPrice,
          cartQuantity,
          image: images.thumbnail[0],
        },
      ]);
    }
  }

  return (
    <div className="flex flex-col max-lg:items-center w-[450px] max-xl:w-[300px]">
      <span className="flex uppercase font-bold text-sm tracking-widest mb-4 max-xl:mb-2">
        {company}
      </span>
      <h2 className="text-very-dark-blue text-5xl max-xl:text-4xl font-bold mb-8 max-xl:mb-4 max-lg:text-center">
        {name}
      </h2>
      <p className="text-base max-xl:text-sm mb-6 max-xl:mb-3 max-lg:text-center">
        {description}
      </p>
      <div className="max-lg:flex max-lg:items-center max-lg:justify-center max-lg:gap-4">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-very-dark-blue text-3xl font-bold">
            ${productTotalPrice}
          </span>
          <span className="bg-very-dark-blue px-2 py-[2px] text-white rounded-lg text-sm font-semibold">
            {discount}%
          </span>
        </div>
        <span className="flex line-through font-semibold mb-6 max-xl:mb-3">
          ${price.toFixed(2)}
        </span>
      </div>
      {cart.length ? (
        <div className="flex items-center justify-center font-bold text-very-dark-blue bg-light-grayish-blue rounded-xl p-4">
          <p>Product is already in the cart</p>
        </div>
      ) : (
        <div className="flex justify-between gap-4 max-lg:flex-col max-lg:w-full">
          <div className="flex justify-between items-center bg-light-grayish-blue p-4 rounded-xl w-40 max-xl:w-32 max-lg:w-full">
            <FaMinus
              className="text-orange hover:text-orange/50 transition cursor-pointer"
              onClick={decreaseQuantity}
            />
            <span className="font-bold text-very-dark-blue">
              {cartQuantity}
            </span>
            <FaPlus
              className="text-orange hover:text-orange/50 transition cursor-pointer"
              onClick={increaseQuantity}
            />
          </div>
          <button
            className="flex items-center justify-center w-64 max-xl:w-48 text-very-dark-blue bg-orange hover:opacity-50 transition gap-2 p-4 cursor-pointer rounded-xl font-bold max-lg:w-full"
            onClick={addProductToCart}
          >
            <IoCartOutline className="text-xl" /> Add to cart
          </button>
        </div>
      )}
    </div>
  );
}

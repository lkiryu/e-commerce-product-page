import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { FaTrashCan } from "react-icons/fa6";

export default function CartItem({
  name,
  productTotalPrice,
  cartQuantity,
  image,
}) {
  const { setCart } = useContext(CartContext);

  function removeProductFromCart(productName) {
    setCart((prevData) =>
      prevData.filter((product) => product.name !== productName)
    );
  }

  return (
    <div className="flex items-center justify-between w-full gap-2">
      <img
        className="w-12 h-12 rounded"
        src={`./src/assets/images/${image}`}
        alt="product thumbnail"
      />
      <div>
        <p className="text-sm truncate">{name}</p>
        <div className="flex gap-1 text-sm">
          <span>${productTotalPrice}</span>
          <span>x {cartQuantity}</span>
          <span className="text-very-dark-blue font-bold">
            ${(cartQuantity * productTotalPrice).toFixed(2)}
          </span>
        </div>
      </div>
      <FaTrashCan
        className="text-grayish-blue cursor-pointer hover:text-dark-grayish-blue transition"
        onClick={() => removeProductFromCart(name)}
      />
    </div>
  );
}

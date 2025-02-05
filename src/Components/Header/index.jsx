import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { nanoid } from "nanoid";
import { IoCartOutline, IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import CartItem from "../CartItem";
import logo from "../../assets/images/logo.svg";
import avatar from "../../assets/images/image-avatar.png";

export default function Header() {
  const { cart } = useContext(CartContext);
  const [cartModal, setCartModal] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const cartTotalQuantity = cart.reduce(
    (accumulator, product) => accumulator + product.cartQuantity,
    0
  );

  const cartItemElements = cart.map((item) => (
    <CartItem
      key={nanoid()}
      name={item.name}
      productTotalPrice={item.productTotalPrice}
      cartQuantity={item.cartQuantity}
      image={item.image}
    />
  ));

  return (
    <header className="flex items-center max-w-[1440px] w-full max-sm:w-[300px] pb-8 border-b-[1px] border-grayish-blue">
      <GiHamburgerMenu
        className="hidden max-lg:flex mr-4 text-3xl"
        onClick={() => setOpenMobileMenu(true)}
      />
      <a href="#" className="mr-12 max-xl:mr-4 max-lg:mr-auto">
        <img src={logo} alt="logo" />
      </a>
      <nav
        className={`flex mr-auto gap-8 max-xl:gap-4 ${
          openMobileMenu ? "max-lg:flex" : "max-lg:hidden"
        } max-lg:absolute max-lg:top-0 max-lg:left-0 max-lg:bg-white max-lg:flex-col max-lg:shadow-2xl max-lg:h-screen max-lg:w-[280px] max-lg:z-30 max-xl:px-12 max-sm:px-2 max-xl:py-6`}
      >
        <IoClose
          className="text-3xl mb-8 hidden max-lg:flex"
          onClick={() => setOpenMobileMenu(false)}
        />
        <a
          className="hover:text-very-dark-blue transition relative after:content-[''] max-xl:after:content-none max-lg:font-bold max-lg:text-very-dark-blue after:absolute after:-bottom-[42px] after:left-0 after:w-0 after:h-1 after:bg-orange after:transition-all hover:after:w-full"
          href="#"
        >
          Collections
        </a>
        <a
          className="hover:text-very-dark-blue transition relative after:content-[''] max-xl:after:content-none max-lg:font-bold max-lg:text-very-dark-blue after:absolute after:-bottom-[42px] after:left-0 after:w-0 after:h-1 after:bg-orange after:transition-all hover:after:w-full"
          href="#"
        >
          Men
        </a>
        <a
          className="hover:text-very-dark-blue transition relative after:content-[''] max-xl:after:content-none max-lg:font-bold max-lg:text-very-dark-blue after:absolute after:-bottom-[42px] after:left-0 after:w-0 after:h-1 after:bg-orange after:transition-all hover:after:w-full"
          href="#"
        >
          Women
        </a>
        <a
          className="hover:text-very-dark-blue transition relative after:content-[''] max-xl:after:content-none max-lg:font-bold max-lg:text-very-dark-blue after:absolute after:-bottom-[42px] after:left-0 after:w-0 after:h-1 after:bg-orange after:transition-all hover:after:w-full"
          href="#"
        >
          About
        </a>
        <a
          className="hover:text-very-dark-blue transition relative after:content-[''] max-xl:after:content-none max-lg:font-bold max-lg:text-very-dark-blue after:absolute after:-bottom-[42px] after:left-0 after:w-0 after:h-1 after:bg-orange after:transition-all hover:after:w-full"
          href="#"
        >
          Contact
        </a>
      </nav>
      <div className="flex items-center gap-12 max-xl:gap-4 relative">
        <div
          className="relative cursor-pointer hover:text-very-dark-blue transition"
          onClick={() => setCartModal((prevData) => !prevData)}
        >
          {cart.length ? (
            <span className="absolute text-xs -top-1 -right-2 bg-orange text-white px-2 py-[1px] rounded-full">
              {cartTotalQuantity}
            </span>
          ) : null}
          <IoCartOutline className="text-3xl" />
        </div>
        <img
          className="w-12 cursor-pointer border-[2px] rounded-full border-white hover:border-orange transition"
          src={avatar}
          alt="avatar icon"
        />

        {cartModal ? (
          <div className="flex flex-col items-center absolute right-0 -bottom-[280px] w-[300px] h-[270px] bg-white rounded-xl shadow-2xl z-20">
            <h3 className="text-very-dark-blue font-bold w-full px-4 py-6 border-b-[1px] border-grayish-blue">
              Cart
            </h3>
            {cart.length ? (
              <div className="flex flex-col items-center gap-4 px-4 py-6 h-[200px] w-full overflow-y-auto">
                {cartItemElements}
                <button className="w-full p-4 text-very-dark-blue bg-orange rounded-xl font-bold cursor-pointer hover:opacity-50">
                  Checkout
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-center px-4 py-6 h-full w-full overflow-y-auto">
                <p className="font-bold">Your cart is empty</p>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </header>
  );
}

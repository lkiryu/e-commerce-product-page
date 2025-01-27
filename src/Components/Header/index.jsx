import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import logo from "../../assets/images/logo.svg"
import avatar from "../../assets/images/image-avatar.png"

export default function Header() {
    const [cartModal, setCartModal] = useState(false)

    return (
        <header className="flex items-center max-w-[1440px] w-full pb-8 border-b-[1px] border-grayish-blue">
            <a href="#" className="mr-12">
                <img src={logo} alt="logo" />
            </a>
            <nav className="flex mr-auto gap-8">
                <a className="hover:text-very-dark-blue transition relative after:content-[''] after:absolute after:-bottom-[42px] after:left-0 after:w-0 after:h-1 after:bg-orange after:transition-all hover:after:w-full" href="#">Collections</a>
                <a className="hover:text-very-dark-blue transition relative after:content-[''] after:absolute after:-bottom-[42px] after:left-0 after:w-0 after:h-1 after:bg-orange after:transition-all hover:after:w-full" href="#">Men</a>
                <a className="hover:text-very-dark-blue transition relative after:content-[''] after:absolute after:-bottom-[42px] after:left-0 after:w-0 after:h-1 after:bg-orange after:transition-all hover:after:w-full" href="#">Women</a>
                <a className="hover:text-very-dark-blue transition relative after:content-[''] after:absolute after:-bottom-[42px] after:left-0 after:w-0 after:h-1 after:bg-orange after:transition-all hover:after:w-full" href="#">About</a>
                <a className="hover:text-very-dark-blue transition relative after:content-[''] after:absolute after:-bottom-[42px] after:left-0 after:w-0 after:h-1 after:bg-orange after:transition-all hover:after:w-full" href="#">Contact</a>
            </nav>
            <div className="flex items-center gap-12 relative">
                <IoCartOutline className="text-3xl cursor-pointer hover:text-very-dark-blue transition" onClick={()=> setCartModal(prevData => !prevData)}/>
                <img className="w-12 cursor-pointer border-[2px] rounded-full border-white hover:border-orange transition" src={avatar} alt="avatar icon" />

                {
                    cartModal
                        ? <div className="flex flex-col items-center absolute right-0 -bottom-[280px] w-80 h-[270px] bg-white rounded-xl shadow-2xl">
                            <h3 className="text-very-dark-blue font-bold w-full px-4 py-6 border-b-[1px] border-grayish-blue">Cart</h3>
                            <div className="flex items-center justify-center px-4 py-6 h-full w-full">
                                <p className="font-bold">Your cart is empty</p>
                            </div>
                        </div>
                        : null
                }

            </div>
        </header>
    )
}
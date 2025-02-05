import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import Header from "./Components/Header";
import ProductImages from "./Components/ProductImages";
import ProductInfo from "./Components/ProductInfo";
import { IoClose } from "react-icons/io5";

export default function App() {
  const { imageModal, setImageModal } = useContext(CartContext);

  return (
    <main className="flex flex-col items-center justify-start h-screen max-lg:h-full relative px-16 py-4 font-Kumbh-Sans text-dark-grayish-blue text-lg max-sm:px-2">
      <Header />
      <section className="flex max-lg:flex-col items-center justify-center gap-40 max-lg:gap-10 w-full h-full px-20 max-lg:px-10 py-20 max-lg:py-10 max-sm:px-2">
        <ProductImages arrows={false} />
        <ProductInfo />
      </section>
      {imageModal && (
        <div className="flex items-center justify-center fixed top-0 left-0 w-screen h-screen bg-black/75">
          <div className="flex flex-col items-end">
            <IoClose
              className="text-4xl mb-2 text-white hover:text-orange cursor-pointer transition"
              onClick={() => setImageModal(false)}
            />
            <ProductImages arrows={true} />
          </div>
        </div>
      )}
    </main>
  );
}

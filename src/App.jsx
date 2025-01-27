import Header from "./Components/Header"
import ProductImages from "./Components/ProductImages"
import ProductInfo from "./Components/ProductInfo"

export default function App(){
  return(
    <main className="flex flex-col items-center justify-start h-screen px-16 py-4 font-Kumbh-Sans text-dark-grayish-blue text-lg">
      <Header/>
      <section className="flex items-center justify-center gap-40 w-full h-full px-20 py-20">
        <ProductImages
          arrows={false}
        />
        <ProductInfo/>
      </section>
    </main>
  )
}
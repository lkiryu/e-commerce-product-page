import Header from "./Components/Header"
import ProductImages from "./Components/ProductImages"

export default function App(){
  return(
    <main className="flex flex-col items-center justify-start h-screen px-16 py-4 font-Kumbh-Sans text-dark-grayish-blue text-lg">
      <Header/>
      <section className="flex flex-col items-center justify-between w-full h-full px-12 py-20">
        <ProductImages
          arrows={false}
        />
      </section>
    </main>
  )
}
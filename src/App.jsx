import Products from "./components/Product";
import { products } from "./mocks/products.json";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AsideLeft from "./components/Aside";

export default function App() {
  return (
    <body className="bg-black dark:bg-white">
      <Header />
      <main className="flex">
        <AsideLeft />
        <Products products={products} />
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  );
}

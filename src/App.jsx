import Products from "./components/Product";
import { products } from "./mocks/products.json";
import Header from "./components/Header";
import Aside1 from "./components/Asides";
import Footer from "./components/Footer";

function App() {
  return (
    <body className="bg-black dark:bg-white">
      <Header />
      <main className="flex">
        <Aside1 />
        <Products products={products} />
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  );
}

export default App;

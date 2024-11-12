import { useState } from "react";
import { products as initialProducts } from "./products.json";

export default function filterPrice() {
  const [products] = useState(initialProducts);
  const [price, setPrice] = useState({ minPrice: 0, category: "all" });

  const filteredProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= price.minPrice &&
        (price.category === "all" || product.category === price.category)
      );
    });
  };
}

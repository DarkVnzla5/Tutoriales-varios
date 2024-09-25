import "./Products.css";
import React from "react";
import { AddToCartIcon } from "./Icons";

function Products({ products }) {
  return (
    <main className="products relative top-28   w-full flex justify-center items-center">
      <div>
        <ul className="grid gap-4">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex flex-col gap-4 rounded-sm shadow bg-cyan-600 border-black p-4"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="rounded-md w-full block bg-white object-cover aspect-video"
              />
              <div>
                <p className="text-base text-left text-black font-bold">
                  {product.title}
                </p>
                <p className="text-base text-left text-black font-bold">
                  {product.brand}
                </p>
              </div>
              <div>
                <p className="text-xl text-left text-black font-bold">
                  {product.price} Bs
                </p>
                <p className="text-base text-left text-black font-bold">
                  {product.stock} On Stock
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className=" text-black hover:bg-yellow-500"
                >
                  <AddToCartIcon />
                </button>
              </div>
              <div>
                <p className="text-sm text-left text-black font-bold">
                  {product.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
export default Products;

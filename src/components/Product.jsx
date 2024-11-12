import { AddToCartIcon } from "./Icons";
import Details from "./Details";

function Products({ products }) {
  return (
    <div className="bg-slate-700 relative w-3/4 justify-around items-center flex-wrap">
      <div className="">
        <ul className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  p-4 gap-4">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex flex-col gap-4 rounded-sm size-full bg-orange-700 border-black border-2 p-4"
            >
              <a href={<Details />}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="size-full aspect-video border-2 border-black rounded"
                />
              </a>
              <div className="border-2 border-black p-2 rounded">
                <p className="text-xl text-left text-black font-bold">
                  {product.title}
                </p>
                <p className="text-base text-left text-black font-bold">
                  Precio: {product.price} US$ {product.extra}
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Products;

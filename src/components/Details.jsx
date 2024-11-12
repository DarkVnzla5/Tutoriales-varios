export default function Details(products) {
  return (
    <div className="">
      <div>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <p>{product.title}</p>
                <p>
                  {product.price} US$ {product.extra}
                </p>
              </div>
              <div>
                <p>{product.stock}</p>
              </div>
              <div>
                <p>{product.rating}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

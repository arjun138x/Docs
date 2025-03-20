import { useEffect, useState } from "react";
import("./index.css");

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [pageNo, SetPageNo] = useState(0);

  let perPage = 20;
  const noOfPages = Math.ceil(products.length / perPage);

  async function fetchData() {
    const res = await fetch("https://dummyjson.com/products?limit=1000");
    const json = await res.json();
    setProducts(json.products);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Pagination</h1>
      <div className="page-nation-container">
        <button
          disabled={pageNo === 0}
          onClick={() => {
            SetPageNo((prv) => (prv - 1) % noOfPages);
          }}
        >
          back
        </button>
        {[...Array(noOfPages).keys()].map((n) => {
          return (
            <div>
              <button
                key={n}
                className={pageNo === n ? "page-number active" : "page-number"}
                onClick={() => SetPageNo(n)}
              >
                {n + 1}
              </button>
            </div>
          );
        })}
        <button
          disabled={pageNo === noOfPages - 1}
          onClick={() => {
            SetPageNo((prv) => (prv + 1) % noOfPages);
          }}
        >
          next
        </button>
      </div>
      <div className="products-container">
        {products
          .slice(pageNo * perPage, (pageNo + 1) * perPage)
          ?.map((product) => {
            console.log(pageNo * perPage, (pageNo + 1) * perPage);
            const { thumbnail, title, price, id } = product;
            return (
              <div key={id} className="product">
                <img
                  src={thumbnail}
                  alt="thumbnail"
                  className="product-thumbnail"
                />
                <h4>Price: {price}</h4>
                <p>{title}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Pagination;

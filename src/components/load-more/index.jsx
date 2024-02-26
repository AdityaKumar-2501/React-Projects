import React, { useEffect, useState } from "react";

function LoadMoreData() {
  const [loading, setloading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setloading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count == 0 ? 0 : count * 20
        }&select=title,price`
      );
      const data = await response.json();

      if (data && data.products && data.products.length) {
        setloading(false);
        setProducts(data);
      }
    } catch (e) {
      console.log(e);
      setloading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div>Loading data! Please Wait...</div>;
  }

  return (
    <div className="load-data-container">
      <div>
        { products && products.length ? 
            products.map((product, index) => (
                <div>{product.products}</div>
            ))
         : null
        }
      </div>
    </div>
  );
}

export default LoadMoreData;

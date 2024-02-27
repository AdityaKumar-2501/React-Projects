import React, { useEffect, useState } from "react";
import "./styles.css";

function LoadMoreData() {
  const [loading, setloading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setloading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count == 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();

      if (data && data.products && data.products.length) {
        setProducts([...products, ...data.products]);
        setloading(false);
      }
    } catch (e) {
      console.log(e);
      setloading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    products && products.length === 100 ? setDisableButton(true) : null;
  }, [products]);

  if (loading) {
    return <div>Loading data! Please Wait...</div>;
  }

  return (
    <div className="load-data-container">
      <div className="product-card">
        {products && products.length
          ? products.map((item) => (
              <div key={item.id} className="product-item">
                <img src={item.thumbnail} alt={item.title} />
                <h2>{item.title}</h2>
                <h3>Price - ${item.price}</h3>
              </div>
            ))
          : "null"}
      </div>

      <button
        className="btn"
        disabled={disableButton}
        onClick={() => setCount(count + 1)}
      >
        Load More Products
      </button>
      {disableButton ? <h2>You reached to 100 Products</h2> : null}
    </div>
  );
}

export default LoadMoreData;

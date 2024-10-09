import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';

function Terms() {
  const [products, setProducts] = useState([]);

  async function fetchData() {
    try {
      let request = await fetch('http://localhost:8000/mobile');
      let response = await request.json();
      console.log(response);

      setProducts(response.myData);
    } catch (error) {
      console.error("Something went wrong on the server side.", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {products?.map((product, index) => (
        <div key={index} className="m-4 w-1/4 max-w-xs">
          <ProductCard data={product} />

        </div>
      ))}
    </div>
  );
}

export default Terms;

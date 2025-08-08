import React from "react";
import '../App.css';

function Showproductlistgrid() {
  const products = [
    {
      name: "Product 1",
      price: 29.99,
      description: "This is a great product.",
      image: "/images/products/product1.jpeg"
    },
    {
      name: "Product 2",
      price: 35.99,
      description: "This is a great product.",
      image: "/images/products/product2.jpeg"
    },
    {
      name: "Product 3",
      price: 49.99,
      description: "This is a great product.",
      image: "/images/products/product3.jpeg"
    }
  ];

  return (
    <div className="Showproductlistgrid">
      <h2>Product List</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>Description: {product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Showproductlistgrid;

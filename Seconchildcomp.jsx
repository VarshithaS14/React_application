import React from "react";
import '../App.css';

const Secondchildcomp = ({ bike }) => {
  const { Name, Model, Year, Price, Color } = bike;

  return (
    <div className="Secondchildcomp">
      <h2>Second Child Component</h2>
      <p><strong>Name:</strong> {Name}</p>
      <p><strong>Model:</strong> {Model}</p>
      <p><strong>Year:</strong> {Year}</p>
      <p><strong>Price:</strong> ₹{Price.toLocaleString()}</p>
      <p><strong>Color:</strong> {Color}</p>
    </div>
  );
};

export default Secondchildcomp;

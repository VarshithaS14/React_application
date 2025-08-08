import React from 'react';
import '../App.css';

function Menucomp() {
  return (
    <div className="Menucomp">
      <div className="Menucomp-links">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">Amazon</a>
        <a href="https://www.flipkart.com" target="_blank" rel="noopener noreferrer">Flipkart</a>
        <a href="#contact">Contact Us</a>
        <a href="#location">Location</a>
        <a href="#profile">Profile</a>
        <a href="#cart">View Cart</a>
        <a href="#logout">Logout</a>
      </div>
    </div>
  );
}

export default Menucomp;
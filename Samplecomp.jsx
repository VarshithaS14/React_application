import React from "react";
import '../App.css';

function Samplecomp() {
  const Name = "Varshitha";
  const age = 20;

  return (
    <div className="Samplecomp">
      <h1>Welcome to MRECW {Name}</h1>
      {age >= 18 ? (
        <h2>You are eligible to vote</h2>
      ) : (
        <h2>You are not eligible to vote</h2>
      )}
    </div>
  );
}

export default Samplecomp;
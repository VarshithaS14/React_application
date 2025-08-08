import React from "react";
import './App.css';
import Samplecomp from "./compnentdata/Samplecomp";
import Menucomp from "./compnentdata/Menucomp";
import Imagecomp from "./compnentdata/Imagecomp";
import Childcomp from "./compnentdata/Childcomp";
import Secondchildcomp from "./compnentdata/Seconchildcomp";
import Showproductlistgrid from "./compnentdata/Showproductlistgrid";

function App() {
  const Name = "Varshitha";
  const Userdetails = {
    Name: "Varshitha",
    Age: 20,
    Location: "Hyd",
    Occupation: "Software engineering",
  };

  const bikeDetails = {
    Name: "KTM",
    Model: "Duke 300",
    Year: 2023,
    Price: 5000000,
    Color: "Black",
  };

  return (
    <div className="App">
      <h1>Welcome to KrikBuzz Shopping</h1>
      <h3>Welcome to {Name}</h3>

      <Menucomp />
      <Imagecomp />
      <Childcomp
        Name={Userdetails.Name}
        Age={Userdetails.Age}
        Location={Userdetails.Location}
        Occupation={Userdetails.Occupation}
      />
      <Secondchildcomp bike={bikeDetails} />
      <Showproductlistgrid />
    </div>
  );
}

export default App;

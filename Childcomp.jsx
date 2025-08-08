import React from "react";
import '../App.css';

function Childcomp({Name,Age,Location,Occupation}){
    return (
        <div className="Childcomp">
        <h2>Child Component</h2>
        <p> Name:{Name}</p>
        <p>Age:{Age} </p>
        <p> Location:{Location} </p>
        <p>Occupation : {Occupation}</p>
        </div>
    );
}
export default Childcomp;
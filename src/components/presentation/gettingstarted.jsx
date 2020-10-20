import React from 'react';
import { NavLink } from "react-router-dom";
import temp from "./images/skin1.svg";
import temp2 from "./images/skin2.svg";
const arr =["skin1.svg","skin2.svg","skin3.svg","skin4.svg","skin5.svg","skin6.svg","skin7.svg","skin8.svg"]
const Gs = () => {
    return (    
        <div className="container  Gs-page center">          
        <h1>Select a Resume Template to Get Started</h1>
        <h3>You'll be able to edit and change this template later</h3>
        <div className="cards">
        {arr.map((img) =>
        (
          <div className="card ">
            <img src={'./images/'+img+''} alt="Avatar" style={{minWidth: "100%"},{height:"425px"}}/>
            <button className="btn">USE TEMPLATE</button>
        </div>
        ))}
        </div>
         </div>
        );
}
 
export default Gs;
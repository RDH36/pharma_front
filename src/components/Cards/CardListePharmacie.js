import React from "react";
import { Link } from "react-router-dom";

// components

import Footer from "components/Footers/Footer.js";
import Slider from "components/caroussel/Slider";
import TableauListeGarde from "components/tableau/TableauListeGarde";



export default function CardListePharmacie() {
  return (
    <>
    
      <section className=""> 
     
       
  <div className=" container px-4 mx-auto">
  <div className="flex flex-wrap">
   
    <div className=" px-4 flex-1 w-full">
      <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
      <CardListePharmacie />
      
      </span>
    </div>
    
  </div>
 
</div>
      </section>
      <Footer />
    </>
  );
}

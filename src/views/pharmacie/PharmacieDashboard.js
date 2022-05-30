import React from "react";

// components

import Home from "../../layouts/home/Home";
import TableauProdPharma from "components/tableau/TableauProdPharma";
import CardPanier from "components/Cards/CardPanier.js";
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

export default function PharmacieDashboard() {
  return (
    <div style={{marginTop:'110px'}}>
      <div className="flex flex-wrap mt-4">
          <div className="w-full max-height-100">
          <Home></Home>
          </div>
        </div>
      </div>
  );
}

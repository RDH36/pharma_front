import React from "react";
import PharmacieNavbar from "components/Navbars/PharmacieNavbar.js";

//component

import TableauHistoriquePharma from "components/tableau/TableauHistoriquePharma.js";

export default function ListeCommande() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
      <PharmacieNavbar />
        <TableauHistoriquePharma />
      </div>
    </>
  );
}

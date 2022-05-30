import React from "react";

//component

import TableauCommande from "components/tableau/TableauCommande.js";

export default function ListeCommande() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <TableauCommande></TableauCommande>
      </div>
    </>
  );
}

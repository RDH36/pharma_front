import React, { Children } from "react";

//components
import TableBody from "components/PartiesTable/TableBody.js";
import FirstColumn from "components/PartiesTable/FirstColumn.js";
import CardDernierProduit from "./ParagrapheCard";

const dernierProduitAjoute = ({
  children,
  nom,
  dci,
  presentation,
  conditionnement,
  classePharmaceutique,
  stat,
}) => {
  const nomCommercial = nom ? (
    <CardDernierProduit>{nom}</CardDernierProduit>
  ) : (
    <CardDernierProduit>Nom commercial</CardDernierProduit>
  );
  const denominationCI = dci ? (
    <CardDernierProduit>{dci}</CardDernierProduit>
  ) : (
    <CardDernierProduit>Dénommination commune internationnale</CardDernierProduit>
  );
  const presentationProduit = presentation ? (
    <CardDernierProduit>{presentation}</CardDernierProduit>
  ) : (
    <CardDernierProduit>Présentation non définie</CardDernierProduit>
  );
  const conditionnementProduit = conditionnement ? (
    <CardDernierProduit>{conditionnement}</CardDernierProduit>
  ) : (
    <CardDernierProduit>Conditionnement non defini</CardDernierProduit>
  );
  const classePharmaceutiqueP = classePharmaceutique ? (
    <CardDernierProduit>{classePharmaceutique}</CardDernierProduit>
  ) : (
    <CardDernierProduit>classePharmaceutique non defini</CardDernierProduit>
  );
  if (children) {
    return (
     <ul>
       {nomCommercial}
       {denominationCI}
       {presentationProduit}
       {conditionnementProduit}
       {classePharmaceutiqueP}
     </ul>
    );
  }
};
export default dernierProduitAjoute;

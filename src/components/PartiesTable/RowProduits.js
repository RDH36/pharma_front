import React, { Children } from "react";

//components
import TableBody from "components/PartiesTable/TableBody.js";
import FirstColumn from "components/PartiesTable/FirstColumn.js";

const rowProduits = ({
  children,
  nomProduits,
  dci,
  presentation,
  conditionnement,
  classePharmaceutique,
  quantiteRestante,
  prixAchat,
  prixVente,
}) => {
  const nomProduitsInfo = nomProduits ? (
    <FirstColumn>{nomProduits}</FirstColumn>
  ) : (
    <FirstColumn>Nom Produits non defini</FirstColumn>
  );
  const dciInfo = dci ? (
    <TableBody>{dci}</TableBody>
  ) : (
    <TableBody>Dci non défini</TableBody>
  );
  const presentationInfo = presentation ? (
    <TableBody>{presentation}</TableBody>
  ) : (
    <TableBody>presentation non défini</TableBody>
  );
  const conditionnementInfo = conditionnement ? (
    <TableBody>{conditionnement}</TableBody>
  ) : (
    <TableBody>Conditionnement non defini</TableBody>
  );
  const classePharmaceutiqueInfo = classePharmaceutique ? (
    <TableBody>{classePharmaceutique}</TableBody>
  ) : (
    <TableBody>Classe Pharmaceutique non défini</TableBody>
  );
  const quantiteRestInfo = quantiteRestante ? (
    <TableBody>{quantiteRestante}</TableBody>
  ) : (
    <TableBody>Quantite restante non défini</TableBody>
  );
  const prixAchatInfo = prixAchat ? (
    <TableBody>{prixAchat}</TableBody>
  ) : (
    <TableBody>prix d'achat non défini</TableBody>
  );
  const prixVenteInfo = prixVente ? (
    <TableBody>{prixVente}</TableBody>
  ) : (
    <TableBody>Prix Vente non défini</TableBody>
  );
  if (children) {
    return (
      <tr>
        {nomProduitsInfo}
        {dciInfo}
        {presentationInfo}
        {conditionnementInfo}
        {classePharmaceutiqueInfo}
        {quantiteRestInfo}
        {prixAchatInfo}
        {prixVenteInfo}
      </tr>
    );
  }
};
export default rowProduits;

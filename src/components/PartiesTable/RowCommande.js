import React, { Children } from "react";

//components
import TableBody from "components/PartiesTable/TableBody.js";
import FirstColumn from "components/PartiesTable/FirstColumn.js";

const rowCommande = ({
  children,
  nomClient,
  nomProduits,
  dci,
  classePharmaceutique,
  quantiteRestante,
  prixAchat,
  prixVente,
  presentation,
  moyenPaiement,
}) => {
  const nomCliebtInfo = nomClient ? (
    <FirstColumn>{nomClient}</FirstColumn>
  ) : (
    <FirstColumn>Nom du client non defini</FirstColumn>
  );
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
    <TableBody>Presentation non défini</TableBody>
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
  const moyenPaiementInfo = moyenPaiement ? (
    <TableBody>{moyenPaiement}</TableBody>
  ) : (
    <TableBody>Moyen de paiement non défini</TableBody>
  );
  if (children) {
    return (
      <tr>
        {nomCliebtInfo}
        {nomProduitsInfo}
        {dciInfo}
        {classePharmaceutiqueInfo}
        {quantiteRestInfo}
        {prixAchatInfo}
        {prixVenteInfo}
        {presentationInfo}
        {moyenPaiementInfo}
      </tr>
    );
  }
};
export default rowCommande;

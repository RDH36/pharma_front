import React, { Children } from "react";

//components
import TableBody from "components/PartiesTable/TableBody.js";
import FirstColumn from "components/PartiesTable/FirstColumn.js";

const RowListeProduitPharma = ({
  children,
  nomProduits,
  quantiteRestante,
  prixVente,
  nom,
  adresse,
  telephone,
  boutonPanier,

}) => {

  const nomProduitsInfo = nomProduits ? (
    <FirstColumn>{nomProduits}</FirstColumn>
  ) : (
    <FirstColumn>Nom Produits non defini</FirstColumn>
  );

  const quantiteRestInfo = quantiteRestante ? (
    <TableBody>{quantiteRestante}</TableBody>
  ) : (
    <TableBody>Quantite restante non défini</TableBody>
  );
  const prixVenteInfo = prixVente ? (
    <TableBody>{prixVente}</TableBody>
  ) : (
    <TableBody>prix d'achat non défini</TableBody>
  );
  const nomInfo = nom ? (
    <FirstColumn>{nom}</FirstColumn>
  ) : (
    <FirstColumn>Nom pharmacie non defini</FirstColumn>
  );

  const adresseInfo = adresse ? (
    <TableBody>{adresse}</TableBody>
  ) : (
    <TableBody>adresse non défini</TableBody>
  );
  const telephoneInfo = telephone ? (
    <TableBody>{telephone}</TableBody>
  ) : (
    <TableBody>N° telephone non défini</TableBody>
  );

  const etatBoutonPanierInfo = boutonPanier ? (
    <button
      className="bg-emerald-500 text-white text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
    >
      <i class="fa fa-shopping-cart"></i>
    </button>
  ) : (
    <div></div>
  );

  if (children) {
    return (
      <>
        {nomProduitsInfo}
        {quantiteRestInfo}
        {prixVenteInfo}
        {nomInfo}
        {adresseInfo}
        {telephoneInfo}

        <TableBody>
          {etatBoutonPanierInfo}
        </TableBody>
      </>
    );
  }
};
export default RowListeProduitPharma;

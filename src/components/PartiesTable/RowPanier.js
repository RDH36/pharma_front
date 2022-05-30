import React, { Children } from "react";

//components
import TableBody from "components/PartiesTable/TableBody.js";
import FirstColumn from "components/PartiesTable/FirstColumn.js";

const rowPanier = ({
  children,
  nomPharmacie,
  nomProduit,
  prixProduit,
  quantite,
}) => {
  const nomPharmaInfo = nomPharmacie ? (
    <div className="mr-4 p-3 text-center">
      <span className="text-xl block uppercase tracking-wide text-blueGray-600">
        {nomPharmacie}
      </span>
      <span className="text-sm text-blueGray-400">Pharmacie</span>
    </div>
  ) : (
    <div className="mr-4 p-3 text-center">
      <span className="text-xl block uppercase tracking-wide text-blueGray-600">
        -
      </span>
      <span className="text-sm text-blueGray-400">Pharmacie</span>
    </div>
  );
  const nomProduitsInfo = nomProduit ? (
    <div className="mr-4 p-3 text-center">
      <span className="text-xl block tracking-wide text-blueGray-600">
        {nomProduit}
      </span>
      <span className="text-sm text-blueGray-400">Produit</span>
    </div>
  ) : (
    <div className="mr-4 p-3 text-center">
      <span className="text-xl font-bold block  tracking-wide text-blueGray-600">
        -
      </span>
      <span className="text-sm text-blueGray-400">Produit</span>
    </div>
  );
  const prixProduitInfo = prixProduit ? (
    <div className="lg:mr-4 p-3 text-center">
      <span className="text-xl block tracking-wide text-blueGray-600">
        {prixProduit}
      </span>
      <span className="text-sm text-blueGray-400">Prix</span>
    </div>
  ) : (
    <div className="lg:mr-4 p-3 text-center">
      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
        0
      </span>
      <span className="text-sm text-blueGray-400">Prix</span>
    </div>
  );
  const quantiteInfo = quantite ? (
    <div className="lg:mr-4 p-3 text-center px-4">
      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
        <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
          <div className="relative flex w-full flex-wrap items-stretch">
            <span className="z-10 h-full leading-snug font-bold absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"></span>
            <input
              defaultValue={quantite}
              type="text"
              className="border-0 font-bold text-center px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring myinput"
            />
          </div>
        </form>
      </span>
      <span className="text-sm text-blueGray-400"></span>
    </div>
  ) : (
    <div className="lg:mr-4 p-3 text-center">
      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
        0
      </span>
      <span className="text-sm text-blueGray-400"></span>
    </div>
  );

  if (children) {
    return (
      <div className="container px-4 mx-auto border-t border-b border-blueGray-200">
        <div className="flex flex-wrap">
          {nomPharmaInfo}
          {nomProduitsInfo}
          {prixProduitInfo}
          {quantiteInfo}
          <button
            className="mx-auto bg-red-500 max-h-50prc text-center mt-3 text-white active:bg-red-600 font-bold text-lg px-4 py-1 max-h-50prc rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            <i className="fa fa-window-close " aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
};
export default rowPanier;

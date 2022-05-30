import React, { Component } from "react";

// components
import TableHeader from "components/PartiesTable/TableHeader.js";
import RowCommande from "components/PartiesTable/RowCommande.js";

export default class TableauHistoriquePharma extends Component {
  render() {
    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded max-height-500pix overflow-y-auto">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">
                  Historique
                </h3>
              </div>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <button
                  className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  See all
                </button>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <TableHeader>Nom du Client</TableHeader>
                  <TableHeader>Nom du produits</TableHeader>
                  <TableHeader>Dci</TableHeader>
                  <TableHeader>Classe Pharmaceutique</TableHeader>
                  <TableHeader>Quantité restante</TableHeader>
                  <TableHeader>Prix d'achat</TableHeader>
                  <TableHeader>Prix de vente</TableHeader>
                  <TableHeader>Total</TableHeader>
                  <TableHeader>Moyen de paiement</TableHeader>
                </tr>
              </thead>
              <tbody>
                <RowCommande
                  nomClient="nomClient"
                  nomProduits="nomProduits"
                  dci="ddci"
                  classePharmaceutique="classe"
                  quantiteRestante="1000"
                  prixAchat="5000"
                  prixVente="10000"
                  total="total"
                  moyenPaiement="moyenPaiement"
                >
                  idProduits
                </RowCommande>
                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    /argon/index.html
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    3,985
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    319
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                    46,53%
                  </td>
                </tr>
                <tr>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    /argon/charts.html
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    3,513
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    294
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                    36,49%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

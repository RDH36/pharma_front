import React, { Component, useEffect } from "react";
import {PHARMACIE_FACTURE} from "views/auth/redux/reducer/PharmacieReducer"

// components
import TableHeader from "components/PartiesTable/TableHeader.js";
import RowCommande from "components/PartiesTable/RowCommande.js";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export default function TableauProdPharma () {
const dispatch = useDispatch();
const donnePharma = useSelector((state) => state.pharmacieConnection);
const FacturePharmacie = useSelector(state=>state.pharmacieFacture);
useEffect(() => {
  axios
  .get(`http://localhost:8083/facture/listFacturePharmacie?idPharmacie=${donnePharma.idPharmacie}`)
  .then((response) => {
    dispatch(PHARMACIE_FACTURE(response.data))
  });
}, [])

    return (
      <>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded max-height-500pix overflow-y-auto">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">
                  Commande en cours
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
                  <TableHeader>Présentation</TableHeader>
                  <TableHeader>Classe Pharmaceutique</TableHeader>
                  <TableHeader>Quantité restante</TableHeader>
                  <TableHeader>Prix d'achat</TableHeader>
                  <TableHeader>Prix de vente</TableHeader>
                  <TableHeader>Présentation</TableHeader>
                  <TableHeader>Moyen de paiement</TableHeader>
                </tr>
              </thead>
              <tbody>
              <tr>
              {/* {FacturePharmacie.map((liste) => (
                <RowCommande
                
                
                 // nomClient={(liste.utilisateur.nom) (liste.utilisateur.prenom)}
                 // nomProduits={(liste.stock.produit.nomCommercial)}
                  //dci={(liste.stock.produit.dci)}
                  //presentation={(liste.stock.produit.presentation)}
                  classePharmaceutique="classe"
                  //quantiteRestante={liste.stock.stock[0].prixDeVente}
                  prixAchat="5000"
                  prixVente="10000"
                  moyenPaiement="moyenPaiement"
                 
                >
                  idProduits
                </RowCommande>))}
                 */}
                 {FacturePharmacie.map((liste) => (

                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    Pharmacie
                  </th>

                 ))}
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    Test
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


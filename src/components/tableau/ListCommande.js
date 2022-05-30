import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PHARMACIE_FACTURE, PHARMA_RESET } from "../../views/auth/redux/reducer/PharmacieReducer";
import { GET_PRODUIT } from "../../views/auth/redux/reducer/ProduitReducer";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function ListCommande() {

  const dispatch = useDispatch();
  const donnePharma = useSelector((state) => state.pharmacieConnection);
  const FacturePharmacie = useSelector((state)=>state.pharmacieFacture);
  useEffect(() => {
    axios
    .get(`http://localhost:8083/facture/listAttente?idPharmacie=${donnePharma.idPharmacie}`)
    .then((response) => {
      console.log(response.data)
      dispatch(PHARMACIE_FACTURE(response.data))
    });
  }, [])



  const valideCommande = (id) => {
    console.log(id);
    axios
      .put(`http://localhost:8083/facture/valideFacture?idFacture=${id}`)
      .then((response) => {
        dispatch(GET_PRODUIT(response.data));
        dispatch(PHARMA_RESET(id))
        toast.success("Commande validé")
      });
  };

  return (
    <div style={{ marginTop: "110px" }}>
      <div className="w-full sm:px-6">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Commandes
            </p>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-3">Date</th>
                <th className="font-normal text-left pl-1">Clients</th>
                <th className="font-normal text-left pl-12">Produits</th>
                <th className="font-normal text-left pl-20">Quantité</th>
                <th className="font-normal text-left pl-20">Prix</th>
                <th className="font-normal text-left pl-16"></th>
              </tr>
            </thead>
            <tbody className="w-full">
              {FacturePharmacie.map((liste) => (
                <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-3 ">
                          {liste.dateCommande} 
                  </td>
                  <td className="pl-1 ">
                        <p className="font-medium">
                          {liste.utilisateur.nom} {liste.utilisateur.prenom} 
                        </p>
                  </td>
                  <td className="pl-12">
                    <p className="font-medium">
                      {liste.stock.produit.nomCommercial} {liste.stock.produit.presentation}
                    </p>
                    <p className="text-xs leading-3 text-gray-600 pt-2">
                      {liste.stock.produit.dci} 
                    </p>
                    <p className="text-xs leading-3 text-gray-600 pt-2">
                      {liste.stock.produit.conditionnement} 
                    </p>
                  </td>
                  <td className="pl-4">
                    <p className="font-medium">
                    {liste.quantiteProduit} 
                    </p>
                  </td>
                  <td className="pl-20">
                    <p className="font-medium">
                    {liste.stock.prixDeVente} Ar 
                    </p>
                  </td>
                  <td className="pl-16">
                    <div className="flex items-center">
                      <Link
                        // to={"/mapharmacie/stock/product/" + produit.idProduit}
                      >
                        <button
                          onClick={() => valideCommande(liste.idFacture)}
                          className="bg-emerald-500 text-white text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          <i class="fas fa-marker"></i> Valider
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PHARMACIE_PRODUITS } from "../../views/auth/redux/reducer/PharmacieReducer";
import { GET_PRODUIT } from "../../views/auth/redux/reducer/ProduitReducer";
import { Link } from "react-router-dom";

function ListProduit() {
  const dispacth = useDispatch();
  const donnePharma = useSelector((state) => state.pharmacieConnection);
  const produitPharma = useSelector((state) => state.pharmacieProduit);
  const produitlist = useSelector((state) => state.listeProduit);

  useEffect(() => {
    localStorage.clear();
    axios
      .get(
        `http://localhost:8083/pharmacie/listStock?ID=${donnePharma.idPharmacie}`
      )
      .then((response) => {
        dispacth(PHARMACIE_PRODUITS(response.data));
      });
  }, []);

  const oneProduit = (id) => {
    console.log(id);
    axios
      .get(`http://localhost:8083/produits/produit?id=${id}`)
      .then((response) => {
        dispacth(GET_PRODUIT(response.data));
      });
  };

  const deleteProduit = (id) => {
    console.log(id);
    axios
      .get(`http://localhost:8083/produits/delete?idProduit=${id}`)
      .then((response) => {
        console.log(response);
      });
  };
  console.log(produitPharma);
  return (
    <div>
      <div className="w-full sm:px-6">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Produits
            </p>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">Nom</th>
                <th className="font-normal text-left pl-12">Stock</th>
                <th className="font-normal text-left pl-20">Prix</th>
                <th className="font-normal text-left pl-16"></th>
              </tr>
            </thead>
            <tbody className="w-full">
              {produitPharma.map((produit) => (
                <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-4 cursor-pointer">
                    <div className="flex items-center">
                      <div className="w-10 h-10">
                        <img
                          className="w-full h-full"
                          src={produit.lienImage}
                        />
                      </div>
                      <div className="pl-4">
                        <p className="font-medium">
                          {produit.nomCommercial} | {produit.presentation}

                        </p>
                        <p className="text-xs leading-3 text-gray-600 pt-2">
                          {produit.dci}
                          
                        </p>
                        <p className="text-s leading-3 text-gray-600 pt-2">
                        {produit.classePharmaceutique}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-12">
                    <p className="font-medium">
                      {produit.stock[0].quantiteDisponible}{" "}
                    </p>
                  </td>
                  <td className="pl-20">
                    <p className="font-medium">
                      {produit.stock[0].prixDeVente} Ariary
                    </p>
                  </td>
                  <td className="pl-16">
                    <div className="flex items-center">
                      <Link
                        to={"/mapharmacie/stock/product/" + produit.idProduit}
                      >
                        <button
                          onClick={() => oneProduit(produit.idProduit)}
                          onMouseOver={() => oneProduit(produit.idProduit)}
                          className="bg-emerald-500 text-white text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          <i class="fas fa-marker"></i>
                        </button>
                      </Link>
                    </div>
                  </td>
                  <td className="px-7 2xl:px-0">
                    <button
                      onClick={() => deleteProduit(produit.idProduit)}
                      className="bg-red-500 text-white text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      <i class="fas fa-trash"></i>
                    </button>
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

export default ListProduit;

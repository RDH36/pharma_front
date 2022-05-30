import React from "react";
import { Link } from "react-router-dom";

//-->

export default function Register() {
  return (
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-xl font-normal leading-normal mt-0 mb-2 text-lightBlue-800">
                    Produit
                  </h6>
                </div>
                <form>
                  <div className="relative w-full mb-3 contenu-centre">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Approvisionnement produit test
                    </label>
                    <div className="w-8/12 px-4">
                      <input
                        type="text"
                        className=" border-0 my-2 p-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Nom du produits"
                        name="Nom-produits"
                      />

                      <input
                        type="text"
                        className="my-2 p-3 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Prix d'achat du produits"
                        name="Prix-produits"
                      />
                      <input
                        type="text"
                        className="my-2 p-3 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Quantité du produits"
                        name="Quantite-produits"
                      />
                      <input
                        type="text"
                        className="my-2 p-3 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Prix de vente"
                        name="prix_vente_produits"
                      />
                    </div>
                    <div className="text-center my-2 p-3 content-center">
                      <button
                        className="w-1/2 bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Approvisionner ce nouveau produits
                      </button>
                      <Link className="text-center" to="/auth/addproduct">
                        Ajouter un nouveau produits
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
              {/* début nouveau produits */}

              {/* couper farany */}
            </div>
          </div>
        </div>
      </div>
  );
}

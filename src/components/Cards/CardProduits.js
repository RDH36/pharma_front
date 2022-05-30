import React from "react";

import PropTypes from "prop-types";

import saryDoc4 from "assets/img/logo-pharmacie.png";

export default function CardProduits({ nomproduits, photo, prixproduits }) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words cursor-pointer bg-white rounded my-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full px-1 max-w-full flex-grow flex-1  align-middle">
              <img
                className=" align-middle"
                src={photo}
                class="doctor-img"
                alt=""
              />

              <h1 className="text-blueGray-400 uppercase font-bold text-xs">
                {nomproduits}
              </h1>

              <div className="font-semibold text-xl w-full text-blueGray-700">
                {prixproduits}
                <button
                  className="color-pharmacie-fonce bt-ajouter-au-panier px-6 text-white active:bg-indigo-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  <p className="fa-2x right-0">
                    <i className="fas fa-cart-arrow-down icon-panier "></i>
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

CardProduits.defaultProps = {
  nomproduits: "Traffic",
  photo: saryDoc4,
  prixproduits: "350,897",
};

CardProduits.propTypes = {
  nomproduits: PropTypes.string,
  photo: PropTypes.string,

  prixproduits: PropTypes.string,
};

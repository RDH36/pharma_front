import React, { useEffect, useRef, useState } from "react";

// components

import { useDispatch, useSelector } from "react-redux";
import "../../layouts/pages/product/product.css";
import {
  PLUS_QTE,
  MOINS_QTE,
  REMOVE_PRODUIT,
  VIDER_PANIER,
} from "../../views/auth/redux/reducer/PanierReducer";
import { REMOVE, CLEAR, TOTAL } from "views/auth/redux/reducer/CountPanier";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import fileDownload from "js-file-download";
import { CardPayment } from "./CardPayment";
import LoginClient from "../../views/auth/Login";
import Popup from "components/Popup";
import { toast } from "react-toastify";
import Register from "views/auth/Register";


export default function CardPanier() {
  const history = useHistory();
  const panier = useSelector((state) => state.panier);
  const countPanier = useSelector((state) => state.panierCount);
  const utilisateur = useSelector((state) => state.connection);
  const dispacth = useDispatch();
  const [openPopup, setOpenPopup] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const validation = useSelector((state) => state.validation);
  const ref = useRef(null);
  const FacturePharmacie = useSelector((state)=>state.pharmacieFacture);


  const addOrEdit = (employee, resetForm) => {
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
  };

  const remove = (produit) => {
    let total = countPanier.totalValue;
    total = total - produit.produit.stock[0].prixDeVente * produit.qte;
    dispacth(REMOVE_PRODUIT(produit.id));
    dispacth(REMOVE());
    dispacth(TOTAL(total));
    toast.warning("1 produit supprimé")
  };

  const clear = () => {
    dispacth(VIDER_PANIER());
    dispacth(CLEAR());
    toast.success("panier vidé")
  };

  const plusPrix = (produit) => {
    dispacth(PLUS_QTE(produit.id));
    let total = countPanier.totalValue;
    total = total + produit.produit.stock[0].prixDeVente;
    dispacth(TOTAL(total));
  };

  const moinsPrix = (produit) => {
    let total = countPanier.totalValue;
    if (produit.qte === 1) {
      total = total - produit.produit.stock[0].prixDeVente;
      dispacth(TOTAL(total));
      dispacth(REMOVE());
      dispacth(REMOVE_PRODUIT(produit.id));
    } else {
      dispacth(MOINS_QTE(produit.id));
      total = total - produit.produit.stock[0].prixDeVente;
      dispacth(TOTAL(total));
    }
  };

  useEffect(() => {
    let total = 0;
    panier.map(
      (produit) =>
        (total = total + produit.produit.stock[0].prixDeVente * produit.qte)
    );
    dispacth(TOTAL(total));

    if (validation === true && utilisateur.idUtilisateur > 0) {
      ref.current.click();
    }
  }, []);

  const formatDate = () => {
    let d = new Date();
    let month = (d.getMonth() + 1).toString();
    let day = d.getDate().toString();
    let year = d.getFullYear();
    if (month.length < 2) {
      month = '0' + month;
    }
    if (day.length < 2) {
      day = '0' + day;
    }
    return [year, month, day].join('-');
  }
  const valide = () => {
    let facture = []
    let random = Math.round(Math.random() * 100000)
    panier.map(produit => 
      facture.push(produit.produit.nomCommercial + "("+produit.produit.classePharmaceutique +")/" + produit.produit.stock[0].pharmacie.nomPharmacie + " ("+produit.produit.stock[0].pharmacie.adresse+")/" + produit.qte + "/" + (produit.produit.stock[0].prixDeVente) * produit.qte)
  )
      if (utilisateur.idUtilisateur >0) {
            const text = "PHARMACHECK vous remercie pour votre confiance et d'avoir choisi de commander sur notre platforme . Nous vous avions envoyer si dessous une piece jointe de votre facture"
            axios.get(`http://localhost:8083/facture/pdf?title=${"FACTURE_N°" + random}&value=${facture}&total=${countPanier.totalValue}`, {responseType: 'blob'})
            .then(response => {
                fileDownload(response.data, "FACTURE_N°" + random + ".pdf")
                toast.success("Facture telechargé")
            })
          axios.get(`http://localhost:8083/email/sendWithPdf?adresseMail=${utilisateur.email}&subject=${"FACTURE_N°" + random}&text=${text}&name=${"FACTURE_N°" + random}`)
          .then(response => {
            if(response.status === 200) {
                panier.map(produit => 
                  axios.post(`http://localhost:8083/facture/add?idstock=${produit.produit.stock[0].idStock}&mail=${utilisateur.email}`, {
                    dateCommande: formatDate(),
                    quantiteProduit: produit.qte,
                    etatPaiement: "en attente",
                    montantFacture: (produit.produit.stock[0].prixDeVente * produit.qte)
                  }).then(response => {
                  console.log(response.data)
                })
                )
                dispacth(VIDER_PANIER())
                dispacth(CLEAR())
                toast.success("Commande effectuez, Verifie votre email")
            }
          }).catch(error => toast.warning("Erreur de connection veuillez reessaiyez"))
      } else{
        toast.warning("vous devez vous connecté")
        setOpenPopup(true); setRecordForEdit(null);
      }
  }
    

  if (panier.length === 0) {
    return (
      <div>
        <div className="w-full sm:px-6">
          <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
            <div className="sm:flex items-center justify-between">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                Panier
              </p>
            </div>
            <div className="sm:flex items-center justify-between">
              <Link to={"/acceuil/tableauproduit"}>
                <button
                  style={{ marginTop: "10px" }}
                  className="bg-emerald-500 text-white text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i class="fas fa-arrow-left"></i> Retour
                </button>
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <p
                style={{ color: "red", fontSize: "35px", fontStyle: "italic" }}
              >
                VOTRE PANIER EST VIDE <i class="fas fa-sad-tear"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="w-full sm:px-6">
          <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
            <div className="sm:flex items-center justify-between">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                Panier
              </p>
            </div>
            <div className="sm:flex items-center justify-between">
              <Link to={"/acceuil/tableauproduit"}>
                <button
                  style={{ marginTop: "10px" }}
                  className="bg-emerald-500 text-white text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i class="fas fa-arrow-left"></i> Retour
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="h-16 w-full text-sm leading-none text-gray-800">
                  <th className="font-normal text-left pl-4">Nom</th>
                  <th className="font-normal text-left pl-4">Localisation</th>
                  <th className="font-normal text-left pl-20">
                    Prix (unitaire)
                  </th>
                  <th className="font-normal text-left pl-16">Qte</th>
                  <th className="font-normal text-left pl-16">Action</th>
                </tr>
              </thead>
              <tbody className="w-full">
                {panier.map((produit) => (
                  <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                    <td className="pl-4 cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-10 h-10">
                          <img
                            className="w-full h-full"
                            src={produit.produit.lienImage}
                          />
                        </div>
                        <div className="pl-4">
                          <p className="font-medium">
                            {produit.produit.nomCommercial} /{" "}
                            {produit.produit.classePharmaceutique}
                          </p>
                          <p className="text-xs leading-3 text-gray-600 pt-2"></p>
                        </div>
                      </div>
                    </td>
                    <td className="pl-20">
                      <p className="font-medium">
                        {produit.produit.stock[0].pharmacie.nomPharmacie} (
                        {produit.produit.stock[0].pharmacie.adresse})
                      </p>
                    </td>
                    <td className="pl-20">
                      <p className="font-medium">
                        {produit.produit.stock[0].prixDeVente} Ariary
                      </p>
                    </td>
                    <td className="pl-16">
                      <div className="flex items-center">
                        <button
                          onClick={() => moinsPrix(produit)}
                          className="bg-emerald-500 text-white text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          <i class="	fas fa-minus"></i>
                        </button>
                        <p className=" text-black text-black active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                          {produit.qte}
                        </p>
                        <button
                          onClick={() => plusPrix(produit)}
                          className="bg-emerald-500 text-white text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td className="px-7 2xl:px-0">
                      <button
                        onClick={() => remove(produit)}
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <p style={{ fontWeight: "bold" }}>
              TOTAL A PAYER : {countPanier.totalValue} Ariary
            </p>
            <button
              style={{ marginLeft: "60%" }}
              ref={ref}
              onClick={() => valide()}
              className="bg-emerald-500 text-white text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              <i class="fa fa-check"></i> COMMANDER
            </button>
            <button
              onClick={() => clear()}
              className="bg-red-500 text-white text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              <i class="fas fa-trash"></i> VIDER
            </button>
          </div>
        </div>
        <CardPayment></CardPayment>
        <Popup
      title="Utilisateur"
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
    >
      <LoginClient
        recordForEdit={recordForEdit}
        addOrEdit={addOrEdit} />
        <Register
        recordForEdit={recordForEdit}
        addOrEdit={addOrEdit}/>
    </Popup>
      </div>
    );
  }
}
